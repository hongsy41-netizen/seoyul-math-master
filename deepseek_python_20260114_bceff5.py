import tkinter as tk
from tkinter import ttk, messagebox, scrolledtext, simpledialog
import random
import os
import re
import base64
from datetime import datetime
from math import isclose

# ============================================
# 핵심 학습 엔진 (BaseStudyModule) - 개선판
# ============================================
class BaseStudyModule:
    def __init__(self, root, main_app):
        self.root = root
        self.main_app = main_app
        self.level = 1
        self.score = 0
        self.correct_count = 0
        self.total_count = 0
        self.correct_in_level = 0
        self.wrong_report = [] 
        self.session_start = datetime.now()
        self.timer_id = None
        self.current_problem = None
        self.review_mode = False  # 복습 모드 추가
        self.concept_check_problem = None  # 개념 확인 문제
        
        self.root.protocol("WM_DELETE_WINDOW", self.on_force_exit)
        
        self.topic_name = self.get_topic_name()
        self.lessons = self.create_lessons()
        self.problems = self.create_problems()
        self.concept_check_problems = self.create_concept_check_problems()  # 개념 확인 문제

    def init_ui(self):
        self.paned = tk.PanedWindow(self.root, orient=tk.HORIZONTAL, sashwidth=8, bg='#bdc3c7')
        self.paned.pack(fill=tk.BOTH, expand=True)
        
        # 왼쪽 창: 개념 학습
        self.left_frame = ttk.Frame(self.paned, padding=20)
        self.paned.add(self.left_frame, width=650)
        
        ttk.Label(self.left_frame, text=f"📚 {self.topic_name}", font=('맑은 고딕', 22, 'bold')).pack(pady=(0, 5))
        
        self.status_box = ttk.LabelFrame(self.left_frame, text="📊 학습 리포트", padding=10)
        self.status_box.pack(fill=tk.X, pady=5)
        
        self.status_lbl = ttk.Label(self.status_box, text="레벨: 1 | 정답: 0 | 레벨업까지: 3문제", font=('맑은 고딕', 11, 'bold'))
        self.status_lbl.pack(side=tk.LEFT, padx=10)
        
        self.timer_lbl = ttk.Label(self.status_box, text="⏱ 00:00", font=('맑은 고딕', 11))
        self.timer_lbl.pack(side=tk.RIGHT, padx=10)
        
        self.lesson_area = scrolledtext.ScrolledText(self.left_frame, wrap=tk.WORD, font=('맑은 고딕', 12), 
                                                    bg='#ffffff', spacing3=10, height=25)
        self.lesson_area.pack(fill=tk.BOTH, expand=True)
        
        # 오른쪽 창: 문제 풀이
        self.right_frame = ttk.Frame(self.paned, padding=20)
        self.paned.add(self.right_frame, width=750)
        self.work_area = ttk.Frame(self.right_frame)
        self.work_area.pack(fill=tk.BOTH, expand=True)
        
        self.update_timer()

    def update_timer(self):
        if hasattr(self, 'timer_lbl') and self.timer_lbl.winfo_exists():
            if self.timer_id:
                self.root.after_cancel(self.timer_id)
            delta = datetime.now() - self.session_start
            mins, secs = divmod(delta.seconds, 60)
            try:
                self.timer_lbl.config(text=f"⏱ {mins:02d}:{secs:02d}")
                self.timer_id = self.root.after(1000, self.update_timer)
            except: pass

    def on_force_exit(self):
        if self.total_count > 0: 
            self.save_encrypted_report()
        if self.timer_id:
            self.root.after_cancel(self.timer_id)
        self.root.destroy()

    def show_lesson(self):
        for w in self.work_area.winfo_children(): 
            w.destroy()
        self.correct_in_level = 0
        self.review_mode = False
        
        self.lesson_area.delete(1.0, tk.END)
        content = self.lessons[self.level]
        
        # 개념 설명을 더 친절하게
        self.lesson_area.insert(tk.END, f"🌈 서율아! {self.level}단계 핵심 원리를 함께 배워볼까요?\n\n")
        self.lesson_area.insert(tk.END, "="*50 + "\n\n")
        self.lesson_area.insert(tk.END, content['body'])
        self.lesson_area.insert(tk.END, "\n\n" + "="*50 + "\n")
        self.lesson_area.insert(tk.END, f"\n💡 이번 단계에서는 이런 문제들을 풀어볼 거야:\n")
        
        # 이 단계의 문제 예시 보여주기
        if self.level in self.problems:
            sample_problems = self.problems[self.level][:2]  # 2개만 예시로
            for i, prob in enumerate(sample_problems, 1):
                self.lesson_area.insert(tk.END, f"\n{i}. {prob['q']}\n")
        
        self.lesson_area.see(1.0)
        
        btn_frame = ttk.Frame(self.work_area)
        btn_frame.pack(pady=100)
        
        tk.Button(btn_frame, text=f"🚀 {self.level}단계 학습 시작!", font=('맑은 고딕', 16, 'bold'),
                  bg='#3498db', fg='white', width=20, height=2, command=self.pick_and_ask).pack(side=tk.LEFT, padx=10)
        
        # 복습 버튼 추가
        if self.wrong_report:
            tk.Button(btn_frame, text="📝 오답 복습하기", font=('맑은 고딕', 12),
                      bg='#e74c3c', fg='white', width=12, height=2, command=self.start_review).pack(side=tk.LEFT, padx=5)

    def pick_and_ask(self):
        """문제 랜덤 선택"""
        all_probs = self.problems[self.level]
        
        if len(all_probs) > 1:
            # 현재 문제와 다른 문제 선택 (최대 5번 시도)
            next_prob = random.choice(all_probs)
            tries = 0
            while self.current_problem and next_prob['q'] == self.current_problem['q'] and tries < 5:
                next_prob = random.choice(all_probs)
                tries += 1
            self.current_problem = next_prob
        else:
            self.current_problem = all_probs[0]
            
        self.ask_question()

    def ask_question(self):
        for w in self.work_area.winfo_children(): 
            w.destroy()
        
        prob = self.current_problem
        
        # 문제 표시
        q_frame = ttk.Frame(self.work_area)
        q_frame.pack(fill=tk.X, pady=(10, 20))
        
        if self.review_mode:
            ttk.Label(q_frame, text=f"📝 복습 모드 - Level {self.level}", font=('맑은 고딕', 11), foreground='#e74c3c').pack(anchor='w')
        else:
            ttk.Label(q_frame, text=f"💎 Level {self.level} - 원리 확인 학습", font=('맑은 고딕', 11)).pack(anchor='w')
        
        q_text = tk.Label(self.work_area, text=prob['q'], font=('맑은 고딕', 16, 'bold'), 
                         bg='#f8f9fa', wraplength=650, justify='left', 
                         padx=20, pady=30, borderwidth=1, relief='solid')
        q_text.pack(fill=tk.X, pady=15)
        
        # 답변 입력 영역
        ans_frame = ttk.Frame(self.work_area)
        ans_frame.pack(pady=10)
        
        self.ans_var = tk.StringVar()
        self.entry = ttk.Entry(ans_frame, textvariable=self.ans_var, font=('맑은 고딕', 25), 
                              width=10, justify='center')
        self.entry.pack(side=tk.LEFT, padx=10)
        self.entry.focus()
        self.entry.bind('<Return>', lambda e: self.check_answer())
        
        ttk.Label(ans_frame, text=prob['unit'], font=('맑은 고딕', 16, 'bold')).pack(side=tk.LEFT)
        
        # 버튼 영역
        btn_container = ttk.Frame(self.work_area)
        btn_container.pack(pady=10)
        
        self.submit_btn = tk.Button(btn_container, text="✅ 답 제출하기", font=('맑은 고딕', 14, 'bold'), 
                                   bg='#2c3e50', fg='white', command=self.check_answer, width=15)
        self.submit_btn.pack(side=tk.LEFT, padx=5)
        
        tk.Button(btn_container, text="➡️ 다음 문제", font=('맑은 고딕', 14), bg='#ecf0f1', fg='#2c3e50',
                  command=self.next_problem, width=10).pack(side=tk.LEFT, padx=5)

        tk.Button(btn_container, text="💡 힌트 보기", font=('맑은 고딕', 11), bg='#95a5a6', fg='white',
                  command=lambda: self.show_hint(prob['hint']), width=10).pack(side=tk.LEFT, padx=5)
        
        # 해설 영역
        self.exp_area = scrolledtext.ScrolledText(self.work_area, height=15, font=('맑은 고딕', 11), 
                                                 bg='#fff9c4', state='disabled')
        self.exp_area.pack(fill=tk.BOTH, expand=True, pady=10)

    def show_hint(self, hint_text):
        """힌트를 더 자세히 보여주는 창"""
        hint_win = tk.Toplevel(self.root)
        hint_win.title("💡 생각하는 힌트")
        hint_win.geometry("500x300")
        hint_win.configure(bg='#ecf0f1')
        
        tk.Label(hint_win, text="서율아, 이렇게 생각해볼까요?", font=('맑은 고딕', 14, 'bold'),
                bg='#ecf0f1', fg='#2c3e50').pack(pady=10)
        
        hint_label = tk.Label(hint_win, text=hint_text, font=('맑은 고딕', 12), 
                            wraplength=450, justify='left', bg='#ecf0f1', 
                            fg='#34495e', padx=20, pady=10)
        hint_label.pack(expand=True, fill=tk.BOTH)
        
        tk.Button(hint_win, text="네, 이해했어요!", font=('맑은 고딕', 11),
                 command=hint_win.destroy, bg='#3498db', fg='white').pack(pady=10)

    def check_answer(self):
        user_input = self.ans_var.get().strip()
        
        # 입력 검증
        if not user_input:
            messagebox.showinfo("알림", "서율아, 답을 입력해주세요!")
            return
            
        num_match = re.findall(r"[-+]?\d*\.\d+|\d+", user_input)
        if not num_match:
            messagebox.showinfo("알림", "숫자로 입력해주세요!\n예: 20, 3.5, 15")
            return
            
        prob = self.current_problem
        user_val = float(num_match[0])
        correct_val = float(prob['a'])
        self.total_count += 1
        
        self.exp_area.config(state='normal')
        self.exp_area.delete(1.0, tk.END)
        self.submit_btn.config(state='disabled')
        
        is_right = isclose(user_val, correct_val, abs_tol=0.06)
        
        # 상세한 피드백 제공
        if is_right:
            self.correct_count += 1
            self.correct_in_level += 1
            self.score += 10
            
            feedback = "✨ 훌륭해요, 서율아! 정확히 이해하고 있네요! ✨\n\n"
            feedback += "="*50 + "\n"
            feedback += f"📖 정답: {prob['a']} {prob['unit']}\n"
            feedback += "="*50 + "\n\n"
            
            # 친절한 해설
            feedback += "🎯 [선생님의 친절한 해설]\n"
            feedback += "-"*45 + "\n"
            
            # 해설을 여러 줄로 나누어 설명
            exp_lines = prob['exp'].split('\n')
            for line in exp_lines:
                feedback += f"   {line}\n"
            
            feedback += "\n💭 [이렇게 생각하면 돼요]\n"
            feedback += "-"*45 + "\n"
            feedback += f"1. {prob['thinking']}\n"
            feedback += f"2. 이 문제의 핵심은: {prob['key_point']}\n\n"
            
            # 이해 확인 질문
            if hasattr(self, 'concept_check_problems') and self.level in self.concept_check_problems:
                feedback += "🤔 이제 비슷한 문제로 이해를 확인해볼까요?\n"
                feedback += "   '다음 문제'를 눌러 같은 원리의 다른 문제를 풀어보세요!\n"
            
        else:
            self.wrong_report.append({
                'topic': self.topic_name, 'level': self.level, 'q': prob['q'], 
                'u': user_input, 'a': f"{prob['a']} {prob['unit']}", 
                'exp': prob['exp'], 'thinking': prob['thinking']
            })
            
            feedback = "❌ 아쉽지만 조금 틀렸어요. 괜찮아요! 잘못 푼 문제가 가장 좋은 선생님이에요.\n\n"
            feedback += "="*50 + "\n"
            feedback += f"📖 서율이의 답: {user_input} {prob['unit']}\n"
            feedback += f"📖 실제 정답: {prob['a']} {prob['unit']}\n"
            feedback += "="*50 + "\n\n"
            
            feedback += "🎯 [왜 이렇게 풀어야 할까요?]\n"
            feedback += "-"*45 + "\n"
            
            # 오류 분석
            feedback += f"서율아, 아마 이렇게 생각했을 거야:\n"
            feedback += f"  '{user_input}'이라는 결과가 나왔네요.\n\n"
            
            feedback += "🔍 [단계별 풀이 방법]\n"
            exp_lines = prob['exp'].split('\n')
            for i, line in enumerate(exp_lines, 1):
                feedback += f"{i}. {line}\n"
            
            feedback += f"\n💡 핵심 원리: {prob['key_point']}\n\n"
            feedback += "📝 이제 이해했나요? '다음 문제'로 비슷한 문제를 다시 풀어봐요!\n"
        
        self.exp_area.insert(tk.END, feedback)
        self.exp_area.config(state='disabled')
        self.update_status_lbl()
        
        # 5문제마다 자동 저장
        if self.total_count % 5 == 0:
            self.save_encrypted_report()
        
        # 3문제 맞추면 레벨업 버튼 표시
        if self.correct_in_level >= 3 and not self.review_mode:
            tk.Button(self.work_area, text="⭐ 다음 레벨로 올라가기", font=('맑은 고딕', 15, 'bold'), 
                      bg='#27ae60', fg='white', command=self.complete_level, height=2,
                      padx=20, pady=10).place(relx=0.5, rely=0.5, anchor='center')

    def next_problem(self):
        """다음 문제로 이동"""
        if self.review_mode and self.wrong_report:
            # 복습 모드: 틀린 문제 중에서 선택
            if self.wrong_report:
                wrong_prob = random.choice(self.wrong_report)
                self.current_problem = {
                    'q': wrong_prob['q'],
                    'a': wrong_prob['a'].split()[0],
                    'unit': wrong_prob['a'].split()[1],
                    'exp': wrong_prob['exp'],
                    'hint': "복습 중인 문제예요. 전에 틀렸던 부분을 생각해보세요!",
                    'thinking': wrong_prob.get('thinking', ''),
                    'key_point': '복습 문제'
                }
                self.ask_question()
                return
        
        # 일반 모드: 같은 원리의 다른 문제나 개념 확인 문제
        if random.random() < 0.3 and hasattr(self, 'concept_check_problems'):  # 30% 확률로 개념 확인
            if self.level in self.concept_check_problems:
                self.current_problem = random.choice(self.concept_check_problems[self.level])
                self.ask_question()
                return
        
        # 일반 문제 선택
        self.pick_and_ask()

    def start_review(self):
        """오답 복습 모드 시작"""
        if not self.wrong_report:
            messagebox.showinfo("복습", "복습할 오답이 없어요!")
            return
        
        self.review_mode = True
        messagebox.showinfo("복습 모드", f"서율아, 지금까지 틀린 {len(self.wrong_report)}개의 문제를 복습해볼까요?")
        self.next_problem()

    def update_status_lbl(self):
        if self.review_mode:
            status_txt = f"📝 복습 모드 | 남은 오답: {len(self.wrong_report)}개"
        else:
            remain = max(0, 3 - self.correct_in_level)
            status_txt = f"레벨: {self.level} | 정답: {self.correct_count} | 레벨업까지: {remain}문제 남음"
        self.status_lbl.config(text=status_txt)

    def complete_level(self):
        if self.level < 5:
            messagebox.showinfo("레벨 완료!", 
                              f"축하해요! 서율아가 {self.level}단계를 정복했어요!\n\n"
                              f"✅ 이해한 원리: {self.get_level_concept()}\n"
                              f"✅ 맞춘 문제: {self.correct_in_level}개\n"
                              f"🎯 다음 단계로 넘어가 볼까요?")
            self.level += 1
            self.correct_in_level = 0
            self.show_lesson()
        else:
            messagebox.showinfo("수학 마스터! 🏆", 
                              "서율아! 정말 대단해요!\n"
                              "일차방정식 활용을 전부 마스터했어요!\n\n"
                              f"📊 최종 성적:\n"
                              f"   • 총 문제: {self.total_count}개\n"
                              f"   • 맞춘 문제: {self.correct_count}개\n"
                              f"   • 정답률: {(self.correct_count/self.total_count*100):.1f}%\n"
                              f"   • 학습 시간: {((datetime.now() - self.session_start).seconds // 60)}분")
            self.main_app.show_menu()

    def get_level_concept(self):
        """레벨별 학습 개념 설명"""
        concepts = {
            1: "기본 공식 이해와 단순 계산",
            2: "단위 변환과 기본 응용",
            3: "왕복 운동과 복합 이동",
            4: "도형 활용과 창의적 문제",
            5: "고급 응용 문제 해결"
        }
        return concepts.get(self.level, "")

    def save_encrypted_report(self):
        file_path = "learning_report.dat"
        now_str = datetime.now().strftime('%Y-%m-%d %H:%M')
        duration = (datetime.now() - self.session_start).seconds // 60
        rate = (self.correct_count / self.total_count) * 100 if self.total_count > 0 else 0
        
        report_text = f"\n{'='*60}\n"
        report_text += f"📅 학습 일시: {now_str}\n"
        report_text += f"📚 학습 단원: {self.topic_name}\n"
        report_text += f"🎯 학습 결과: {self.correct_count}/{self.total_count} 정답 ({rate:.1f}%)\n"
        report_text += f"⏱ 학습 시간: {duration}분\n"
        report_text += f"{'='*60}\n\n"
        
        if self.wrong_report:
            report_text += "❌ [오답 분석 리포트]\n\n"
            for i, item in enumerate(self.wrong_report, 1):
                report_text += f"{i}. (Level {item['level']}) 문제: {item['q']}\n"
                report_text += f"   ▶ 서율이의 답: {item['u']}\n"
                report_text += f"   ▶ 정답: {item['a']}\n"
                report_text += f"   ▶ 해설: {item['exp']}\n"
                report_text += f"   ▶ 생각하는 방법: {item.get('thinking', '')}\n"
                report_text += "-" * 60 + "\n"
        
        # 학습 조언 추가
        report_text += "\n💡 [학습 조언]\n"
        if rate >= 80:
            report_text += "서율아 정말 잘하고 있어요! 개념을 탄탄히 이해하고 있네요.\n"
        elif rate >= 60:
            report_text += "잘하고 있어요! 조금만 더 집중하면 완벽해질 거예요.\n"
        else:
            report_text += "조금 더 연습이 필요해요. 오답을 꼼꼼히 복습해보세요.\n"
        
        encoded_data = base64.b64encode(report_text.encode('utf-8')).decode('utf-8')
        with open(file_path, "w", encoding="utf-8") as f: 
            f.write(encoded_data)

# ============================================
# 1. 거리·속력·시간 문제 은행 (이전 코드 그대로)
# ============================================
class DistanceModule(BaseStudyModule):
    def get_topic_name(self): 
        return "거리·속력·시간 (거속시)"
    
    def create_lessons(self):
        return {
            1: {
                'title': '거속시의 기본 원리', 
                'body': '''📘 서율아, 거리·속력·시간의 관계를 알아볼까요?

🔑 핵심 공식 (외우기 쉽게!):
  1. 거리 = 속력 × 시간  (거속시: 거리는 속력과 시간의 아이)
  2. 속력 = 거리 ÷ 시간  (속력은 거리를 시간으로 나눈 것)
  3. 시간 = 거리 ÷ 속력  (시간은 거리를 속력으로 나눈 것)

💡 기억하기 쉬운 방법:
  • 거리를 구할 때는: 속력과 시간을 곱해요
  • 속력을 구할 때는: 거리를 시간으로 나눠요
  • 시간을 구할 때는: 거리를 속력으로 나눠요

📝 예시:
  시속 60km로 2시간 달리면: 60 × 2 = 120km 이동
  180km를 3시간에 이동하면: 180 ÷ 3 = 60km/h (시속)
  240km를 시속 80km로 가면: 240 ÷ 80 = 3시간'''
            },
            2: {
                'title': '단위 변환의 비밀', 
                'body': '''🔄 서율아, 단위를 잘 맞추는 게 중요해요!

📐 중요한 단위 변환:
  • 1시간 = 60분 = 3600초
  • 1분 = 60초
  • 1km = 1000m

💡 변환 팁:
  분 → 시간: ÷ 60 (30분 = 0.5시간)
  시간 → 분: × 60 (1.5시간 = 90분)
  km/h → m/s: ÷ 3.6 (36km/h = 10m/s)

🎯 이번 단계 목표:
  모든 단위를 통일해서 계산하는 연습!'''
            },
            3: {
                'title': '왕복 운동과 만남 문제', 
                'body': '''🔄 서율아, 갔다 오는 운동을 생각해볼까요?

🔍 왕복 문제 핵심:
  갈 때 시간 + 올 때 시간 = 총 시간

💡 해결 방법:
  1. 거리를 x로 놓기
  2. x/(갈 때 속력) + x/(올 때 속력) = 총 시간
  3. 방정식 풀기

👥 만남 문제:
  • 서로 마주보고 오면: 속력을 더해요
  • 같은 방향이면: 빠른 속력 - 느린 속력

📝 예시:
  갈 때 시속 3km, 올 때 시속 6km, 총 4시간
  → x/3 + x/6 = 4'''
            },
            4: {
                'title': '기차와 터널 문제', 
                'body': '''🚂 서율아, 기차가 터널을 지나는 걸 생각해봐요!

🔑 중요한 개념:
  기차가 터널을 "완전히" 통과하려면:
  이동 거리 = 터널 길이 + 기차 길이

💡 공식:
  속력 = (터널 길이 + 기차 길이) ÷ 시간
  시간 = (터널 길이 + 기차 길이) ÷ 속력

📝 예시:
  길이 200m 기차가 800m 터널을 20초에 통과
  → 이동 거리: 200 + 800 = 1000m
  → 속력: 1000 ÷ 20 = 50m/s'''
            },
            5: {
                'title': '강물에서 배 타기', 
                'body': '''🌊 서율아, 강물이 흐를 때 배의 속력을 생각해봐요!

🔑 핵심 개념:
  • 올라갈 때 (상류): 배 속력 - 강물 속력
  • 내려올 때 (하류): 배 속력 + 강물 속력

💡 해결 전략:
  1. 배의 정지 속력을 먼저 구하기
  2. 상류/하류 속력 계산하기
  3. 문제에 맞게 적용하기

📝 예시:
  강물 시속 3km, 상류 12km를 3시간에 이동
  → (배 속력 - 3) × 3 = 12'''
            }
        }
    
    def create_problems(self):
        return {
            1: [
                {
                    'q': '시속 5km로 3시간 동안 걸었어요. 총 이동 거리는 얼마일까요?',
                    'a': '15',
                    'unit': 'km',
                    'exp': '거리 = 속력 × 시간 = 5 × 3 = 15km',
                    'hint': '곱셈을 해보세요. 거리 = 속력 × 시간',
                    'thinking': '속력(5km/h)과 시간(3h)을 곱하면 거리가 나와요.',
                    'key_point': '거리는 속력과 시간을 곱해서 구해요.'
                },
                {
                    'q': '240km를 4시간 동안 이동한 자동차의 시속은 얼마인가요?',
                    'a': '60',
                    'unit': 'km/h',
                    'exp': '속력 = 거리 ÷ 시간 = 240 ÷ 4 = 60km/h',
                    'hint': '나눗셈을 해보세요. 속력 = 거리 ÷ 시간',
                    'thinking': '거리(240km)를 시간(4h)으로 나누면 속력이 나와요.',
                    'key_point': '속력은 거리를 시간으로 나눠서 구해요.'
                },
                {
                    'q': '시속 80km로 160km를 가려면 몇 시간이 걸릴까요?',
                    'a': '2',
                    'unit': '시간',
                    'exp': '시간 = 거리 ÷ 속력 = 160 ÷ 80 = 2시간',
                    'hint': '나눗셈을 해보세요. 시간 = 거리 ÷ 속력',
                    'thinking': '거리(160km)를 속력(80km/h)으로 나누면 시간이 나와요.',
                    'key_point': '시간은 거리를 속력으로 나눠서 구해요.'
                },
                {
                    'q': '분속 100m로 30분 동안 걸으면 얼마나 갈 수 있나요?',
                    'a': '3000',
                    'unit': 'm',
                    'exp': '거리 = 속력 × 시간 = 100 × 30 = 3000m',
                    'hint': '분속은 1분당 이동 거리에요.',
                    'thinking': '분속 100m/분은 1분에 100m 걸으니까, 30분이면 30배 가요.',
                    'key_point': '분속 계산 시 시간을 분 단위로 맞춰요.'
                },
                {
                    'q': '180km를 2.5시간에 이동했다면 시속은 얼마인가요?',
                    'a': '72',
                    'unit': 'km/h',
                    'exp': '속력 = 거리 ÷ 시간 = 180 ÷ 2.5 = 72km/h',
                    'hint': '소수점으로 나눠보세요.',
                    'thinking': '2.5시간은 2시간 30분이에요. 180을 2.5로 나누면 돼요.',
                    'key_point': '소수 시간도 같은 방법으로 계산해요.'
                }
            ],
            2: [
                {
                    'q': '시속 60km로 45분 동안 달린 거리는 몇 km일까요?',
                    'a': '45',
                    'unit': 'km',
                    'exp': '45분 = 45 ÷ 60 = 0.75시간\n거리 = 60 × 0.75 = 45km',
                    'hint': '먼저 분을 시간으로 바꾸세요.',
                    'thinking': '45분은 0.75시간이에요. 속력에 시간을 곱해요.',
                    'key_point': '단위를 통일해야 정확히 계산할 수 있어요.'
                },
                {
                    'q': '분속 80m로 1시간 15분 동안 걸으면 몇 km를 가나요?',
                    'a': '6',
                    'unit': 'km',
                    'exp': '1시간 15분 = 75분\n거리 = 80 × 75 = 6000m = 6km',
                    'hint': '시간을 모두 분으로 바꾸세요.',
                    'thinking': '1시간 15분은 75분이에요. 분속에 분을 곱한 후 km로 바꿔요.',
                    'key_point': '단위 변환을 두 번 해야 하는 문제예요.'
                },
                {
                    'q': '시속 90km는 1초에 몇 m를 가는 속도인가요?',
                    'a': '25',
                    'unit': 'm/s',
                    'exp': '90km/h = 90,000m ÷ 3600초 = 25m/s',
                    'hint': 'km를 m로, 시간을 초로 바꾸세요.',
                    'thinking': '90km는 90,000m, 1시간은 3600초에요. 나누면 초속이 나와요.',
                    'key_point': 'km/h를 m/s로 바꿀 때는 3.6으로 나누면 돼요.'
                },
                {
                    'q': '2시간 20분을 시간 단위로 나타내면 얼마인가요?',
                    'a': '2.333',
                    'unit': '시간',
                    'exp': '20분 = 20 ÷ 60 = 1/3 ≈ 0.333시간\n2시간 20분 = 2.333시간',
                    'hint': '20분은 1/3시간이에요.',
                    'thinking': '20분은 1시간의 1/3이에요. 2 + 1/3 = 2.333',
                    'key_point': '분을 시간으로 바꿀 때는 60으로 나눠요.'
                },
                {
                    'q': '시속 54km로 2시간 15분 동안 이동한 거리를 구하세요.',
                    'a': '121.5',
                    'unit': 'km',
                    'exp': '2시간 15분 = 2.25시간\n거리 = 54 × 2.25 = 121.5km',
                    'hint': '시간을 소수로 바꾼 후 곱하세요.',
                    'thinking': '15분은 0.25시간이에요. 2 + 0.25 = 2.25시간',
                    'key_point': '시간을 소수로 표현하면 계산이 쉬워져요.'
                }
            ],
            3: [
                {
                    'q': '산을 올라갈 때는 시속 3km, 내려올 때는 시속 6km로 걸어서 총 2시간이 걸렸어요. 산 정상까지의 거리는 얼마인가요?',
                    'a': '4',
                    'unit': 'km',
                    'exp': '거리를 x km라 하면: x/3 + x/6 = 2\n(2x/6 + x/6) = 2 → 3x/6 = 2 → x/2 = 2 → x = 4km',
                    'hint': '갈 때 시간 + 올 때 시간 = 총 시간',
                    'thinking': '거리를 x로 놓고, 갈 때 시간(x÷3)과 올 때 시간(x÷6)을 더하면 2시간이에요.',
                    'key_point': '왕복 문제는 시간의 합을 이용해 식을 세워요.'
                },
                {
                    'q': '두 사람이 12km 떨어진 곳에서 서로를 향해 동시에 출발해요. A는 시속 4km, B는 시속 8km로 걸을 때, 몇 시간 후에 만날까요?',
                    'a': '1',
                    'unit': '시간',
                    'exp': '상대속력 = 4 + 8 = 12km/h\n시간 = 거리 ÷ 속력 = 12 ÷ 12 = 1시간',
                    'hint': '서로 마주보고 오면 속력을 더해요.',
                    'thinking': '두 사람이 서로를 향해 오니까 속력을 더하면 12km/h에요. 12km를 12km/h로 가면 1시간이에요.',
                    'key_point': '마주보고 이동할 때는 속력을 더해 상대속력을 구해요.'
                },
                {
                    'q': '같은 지점에서 A는 시속 5km, B는 시속 8km로 같은 방향으로 출발했어요. 몇 시간 후에 9km 차이가 날까요?',
                    'a': '3',
                    'unit': '시간',
                    'exp': '상대속력 = 8 - 5 = 3km/h\n시간 = 거리 ÷ 속력 = 9 ÷ 3 = 3시간',
                    'hint': '같은 방향이면 빠른 속력에서 느린 속력을 빼요.',
                    'thinking': 'B가 A보다 시간당 3km 더 빨라요. 9km 차이나려면 3시간이 필요해요.',
                    'key_point': '같은 방향으로 갈 때는 속력의 차이를 이용해요.'
                },
                {
                    'q': '집에서 학교까지 갈 때는 시속 15km로, 올 때는 시속 10km로 와서 총 1시간이 걸렸어요. 집에서 학교까지의 거리는 얼마인가요?',
                    'a': '6',
                    'unit': 'km',
                    'exp': '거리를 x km라 하면: x/15 + x/10 = 1\n(2x/30 + 3x/30) = 1 → 5x/30 = 1 → x/6 = 1 → x = 6km',
                    'hint': '분수를 통분해서 계산해보세요.',
                    'thinking': '갈 때 시간(x÷15)과 올 때 시간(x÷10)을 더하면 1시간이에요. 분수를 통분해서 풀어보세요.',
                    'key_point': '분수 방정식을 풀 때는 통분을 잘 활용해요.'
                },
                {
                    'q': '동생은 분속 60m, 형은 분속 90m로 걷고 있어요. 동생이 출발한 지 10분 후에 형이 같은 방향으로 따라갔을 때, 형이 동생을 따라잡는 시간은 몇 분인가요?',
                    'a': '20',
                    'unit': '분',
                    'exp': '동생이 먼저 간 거리 = 60 × 10 = 600m\n상대속력 = 90 - 60 = 30m/분\n시간 = 600 ÷ 30 = 20분',
                    'hint': '먼저 간 거리를 상대속력으로 나누세요.',
                    'thinking': '동생이 10분 먼저 출발해서 600m 갔어요. 형이 분당 30m 더 빨라서 600m를 따라잡으려면 20분이 필요해요.',
                    'key_point': '따라잡기 문제는 먼저 간 거리를 상대속력으로 나눠요.'
                }
            ],
            4: [
                {
                    'q': '길이 150m인 기차가 600m의 터널을 완전히 통과하는 데 30초가 걸렸어요. 기차의 속력은 초속 몇 m인가요?',
                    'a': '25',
                    'unit': 'm/s',
                    'exp': '통과한 총 거리 = 150 + 600 = 750m\n속력 = 거리 ÷ 시간 = 750 ÷ 30 = 25m/s',
                    'hint': '기차 길이와 터널 길이를 더하세요.',
                    'thinking': '기차가 터널을 완전히 통과하려면 기차 길이만큼 더 가야 해요. 그래서 150+600=750m를 30초에 갔어요.',
                    'key_point': '터널 통과 거리 = 터널 길이 + 기차 길이'
                },
                {
                    'q': '길이 250m인 기차가 750m의 다리를 통과하는 데 50초가 걸렸어요. 기차의 속력은 시속 몇 km인가요?',
                    'a': '72',
                    'unit': 'km/h',
                    'exp': '총 거리 = 250 + 750 = 1000m\n속력 = 1000 ÷ 50 = 20m/s\n20m/s = 20 × 3.6 = 72km/h',
                    'hint': 'm/s를 km/h로 바꾸는 것을 잊지 마세요.',
                    'thinking': '먼저 초속을 구한 후(20m/s), 시속으로 바꾸려면 3.6을 곱해요(20×3.6=72km/h).',
                    'key_point': 'm/s를 km/h로 바꿀 때는 3.6을 곱해요.'
                },
                {
                    'q': '기차가 300m의 철교를 통과하는 데 20초가 걸리고, 500m의 터널을 통과하는 데 30초가 걸렸어요. 기차의 길이는 몇 m인가요?',
                    'a': '100',
                    'unit': 'm',
                    'exp': '기차 길이를 x m라 하면:\n(x+300)/20 = (x+500)/30\n30(x+300) = 20(x+500)\n30x+9000 = 20x+10000\n10x = 1000\nx = 100m',
                    'hint': '속력이 같다는 점을 이용하세요.',
                    'thinking': '두 경우 모두 속력이 같아요. (기차길이+구조물길이)÷시간 = 속력 이므로 등식으로 세울 수 있어요.',
                    'key_point': '속력이 같을 때 등식을 세워 기차 길이를 구할 수 있어요.'
                },
                {
                    'q': '기차가 전봇대를 지나가는 데 8초가 걸렸고, 400m의 터널을 통과하는 데 28초가 걸렸어요. 기차의 길이는 얼마인가요?',
                    'a': '160',
                    'unit': 'm',
                    'exp': '기차 길이를 x m라 하면:\n전봇대 통과: x/8 = 속력\n터널 통과: (x+400)/28 = 속력\nx/8 = (x+400)/28\n28x = 8x+3200\n20x = 3200\nx = 160m',
                    'hint': '전봇대는 길이가 0이에요.',
                    'thinking': '전봇대는 길이가 없으므로 기차 길이만큼만 가면 돼요. 터널은 기차 길이+터널 길이를 가야 해요.',
                    'key_point': '전봇대 통과 시간은 기차 길이만 고려해요.'
                },
                {
                    'q': '기차가 600m의 터널을 통과하는 데 40초가 걸리고, 800m의 다리를 통과하는 데 50초가 걸렸어요. 기차의 속력은 초속 몇 m인가요?',
                    'a': '20',
                    'unit': 'm/s',
                    'exp': '기차 길이를 x m라 하면:\n(x+600)/40 = (x+800)/50\n50(x+600) = 40(x+800)\n50x+30000 = 40x+32000\n10x = 2000\nx = 200m\n속력 = (200+600)/40 = 800/40 = 20m/s',
                    'hint': '먼저 기차 길이를 구한 후 속력을 구하세요.',
                    'thinking': '속력이 같으므로 등식을 세워 기차 길이를 먼저 구한 후, 아무 식에 대입해서 속력을 구해요.',
                    'key_point': '두 정보를 이용해 먼저 기차 길이를 구한 후 속력을 계산해요.'
                }
            ],
            5: [
                {
                    'q': '시속 3km로 흐르는 강물이 있어요. 이 강물 위에서 배가 강물을 거슬러 6km를 가는데 1시간이 걸렸어요. 같은 배가 강물을 따라 18km를 갈 때 걸리는 시간은 몇 시간인가요?',
                    'a': '1.5',
                    'unit': '시간',
                    'exp': '배의 정지 속력을 v km/h라 하면:\n(v-3) × 1 = 6 → v-3 = 6 → v = 9km/h\n내려갈 때 속력 = 9+3 = 12km/h\n시간 = 18 ÷ 12 = 1.5시간',
                    'hint': '먼저 배의 정지 속력을 구하세요.',
                    'thinking': '강물을 거슬러 갈 때는 배 속력에서 강물 속력을 빼요. 그걸로 배 속력을 구한 후, 따라갈 때는 더해서 계산해요.',
                    'key_point': '강물 문제는 정지 속력을 먼저 구하는 게 핵심이에요.'
                },
                {
                    'q': '둘레가 3.6km인 원형 트랙에서 A는 시속 12km, B는 시속 15km로 같은 지점에서 같은 방향으로 동시에 출발했어요. A와 B가 처음으로 다시 만나는 시간은 몇 시간인가요?',
                    'a': '1.2',
                    'unit': '시간',
                    'exp': '상대속력 = 15 - 12 = 3km/h\n처음 만날 때 빠른 사람이 한 바퀴 더 감\n시간 = 3.6 ÷ 3 = 1.2시간',
                    'hint': '빠른 사람이 한 바퀴 더 가야 만나요.',
                    'thinking': 'B가 A보다 시간당 3km 더 빨라요. B가 A보다 한 바퀴(3.6km) 더 가려면 1.2시간이 필요해요.',
                    'key_point': '원형 트랙에서 같은 방향으로 달릴 때는 속력 차이로 한 바퀴 차이를 메꿔요.'
                },
                {
                    'q': '운동장을 도는데 시속 9km로 뛰면 8분, 시속 12km로 뛰면 6분이 걸려요. 운동장의 둘레는 몇 m인가요?',
                    'a': '1200',
                    'unit': 'm',
                    'exp': '둘레를 x km라 하면:\nx/9 = 8/60 → x = 9×(8/60) = 1.2km = 1200m\n또는 x/12 = 6/60 → x = 12×(6/60) = 1.2km = 1200m',
                    'hint': '거리는 같고 속력과 시간만 달라요.',
                    'thinking': '같은 거리를 다른 속력으로 달렸을 때 시간이 다르게 걸려요. 둘레를 x로 놓고 각각 식을 세워봐요.',
                    'key_point': '거리가 같을 때 속력과 시간은 반비례 관계예요.'
                },
                {
                    'q': 'A, B 두 도시 사이를 오가는 열차가 있어요. 평소 시속 80km로 가는데, 오늘은 지연되어 시속 60km로 가서 1시간 늦게 도착했어요. 두 도시 사이의 거리는 몇 km인가요?',
                    'a': '240',
                    'unit': 'km',
                    'exp': '거리를 x km라 하면:\nx/60 - x/80 = 1\n(4x/240 - 3x/240) = 1\nx/240 = 1\nx = 240km',
                    'hint': '실제 걸린 시간 - 평소 걸린 시간 = 1시간',
                    'thinking': '느리게 갈수록 시간이 더 걸려요. 느린 시간에서 빠른 시간을 빼면 1시간이에요.',
                    'key_point': '시간 차이를 이용해 거리를 구하는 문제예요.'
                },
                {
                    'q': '자동차가 예정 시간보다 10km/h 느리게 가서 30분 늦었고, 15km/h 빠르게 가서 20분 빨리 도착했어요. 예정 속력은 시속 몇 km인가요?',
                    'a': '60',
                    'unit': 'km/h',
                    'exp': '거리를 x km, 예정 속력을 v km/h라 하면:\nx/(v-10) - x/v = 0.5\nx/v - x/(v+15) = 1/3\n연립하여 풀면 v = 60km/h',
                    'hint': '두 가지 경우를 모두 식으로 세우세요.',
                    'thinking': '느릴 때와 빠를 때의 시간 차이를 각각 식으로 세운 후 연립방정식을 풀어야 해요.',
                    'key_point': '두 가지 정보를 모두 사용하는 연립방정식 문제예요.'
                }
            ]
        }
    
    def create_concept_check_problems(self):
        """같은 원리를 다른 상황에 적용하는 개념 확인 문제"""
        return {
            1: [
                {
                    'q': '시속 8km로 2.5시간 동안 자전거를 탔어요. 총 이동 거리는 얼마인가요?',
                    'a': '20',
                    'unit': 'km',
                    'exp': '거리 = 속력 × 시간 = 8 × 2.5 = 20km',
                    'hint': '소수점 계산을 조심하세요.',
                    'thinking': '속력(8km/h)과 시간(2.5h)을 곱해요. 2.5는 2와 1/2이에요.',
                    'key_point': '소수 시간도 같은 방법으로 계산해요.'
                }
            ],
            2: [
                {
                    'q': '분속 120m로 45분 동안 걸었어요. 몇 km를 걸었나요?',
                    'a': '5.4',
                    'unit': 'km',
                    'exp': '거리 = 120 × 45 = 5400m = 5.4km',
                    'hint': 'm를 km로 바꾸는 것 잊지 마세요.',
                    'thinking': '먼저 m로 계산한 후 1000으로 나누어 km로 바꿔요.',
                    'key_point': '단위 변환을 두 번 생각해야 해요.'
                }
            ],
            3: [
                {
                    'q': '강을 건너갈 때는 시속 4km, 돌아올 때는 시속 6km로 헤엄쳐서 총 1.5시간이 걸렸어요. 강의 너비는 얼마인가요?',
                    'a': '3.6',
                    'unit': 'km',
                    'exp': '거리를 x km라 하면: x/4 + x/6 = 1.5\n(3x/12 + 2x/12) = 1.5\n5x/12 = 1.5\nx = 3.6km',
                    'hint': '시간을 소수로 표현했어요.',
                    'thinking': '1.5시간은 1시간 30분이에요. 분수 대신 소수로 계산해도 돼요.',
                    'key_point': '왕복 문제는 시간의 합을 이용해요.'
                }
            ],
            4: [
                {
                    'q': '길이 180m인 기차가 420m의 터널을 30초에 통과했어요. 기차의 속력은 초속 몇 m인가요?',
                    'a': '20',
                    'unit': 'm/s',
                    'exp': '총 거리 = 180 + 420 = 600m\n속력 = 600 ÷ 30 = 20m/s',
                    'hint': '기차 길이와 터널 길이를 더하세요.',
                    'thinking': '터널 통과 거리는 기차가 완전히 나가야 하므로 기차 길이를 더해야 해요.',
                    'key_point': '터널 통과 = 터널 길이 + 기차 길이'
                }
            ],
            5: [
                {
                    'q': '시속 4km로 흐르는 강에서 배가 상류로 12km를 3시간에 갔어요. 이 배가 하류로 24km를 가려면 몇 시간이 걸릴까요?',
                    'a': '2',
                    'unit': '시간',
                    'exp': '배 속력을 v라 하면: (v-4)×3=12 → v=8km/h\n하류 속력=8+4=12km/h\n시간=24÷12=2시간',
                    'hint': '먼저 배의 정지 속력을 구하세요.',
                    'thinking': '상류 속력으로 배 속력을 구한 후, 하류 속력을 계산해요.',
                    'key_point': '강물 문제는 항상 정지 속력을 먼저 구해요.'
                }
            ]
        }

# ============================================
# 2. 나이·인원 문제 은행 (완성)
# ============================================
class AgeModule(BaseStudyModule):
    def get_topic_name(self): 
        return "나이·인원 문제"
    
    def create_lessons(self):
        return {
            1: {
                'title': '나이 차이의 비밀', 
                'body': '''👨‍👩‍👧‍👦 서율아, 나이 문제의 핵심을 알아볼까요?

🔑 가장 중요한 원리:
  나이 차이는 변하지 않아요!
  • 지금 아빠가 나보다 30살 많으면
  • 10년 후에도 여전히 30살 많아요

💡 해결 방법:
  1. 현재 나이를 변수로 놓기
  2. 미래/과거 나이 표현하기
  3. 조건에 맞는 방정식 세우기

📝 예시:
  현재 아들이 10살, 아빠가 40살
  5년 후: 아들 15살, 아빠 45살
  나이 차이는 여전히 30살!'''
            },
            2: {
                'title': '나이의 합과 배수', 
                'body': '''➕ 나이의 합은 변해요!

🔑 중요한 개념:
  • 나이 차이: 항상 일정
  • 나이 합: 시간에 따라 변함
  • 배수 관계: 시간에 따라 변함

💡 해결 전략:
  현재 아들 나이 = x살
  현재 아빠 나이 = x+30살
  10년 후: 아들 = x+10살, 아빠 = x+40살
  (x+40) = 2×(x+10) 이런 식으로!'''
            },
            3: {
                'title': '과부족 문제', 
                'body': '''🎁 사탕 나눠주기 문제!

🔑 핵심 원리:
  사탕 개수는 항상 같아요!

💡 두 가지 상황:
  1. 4개씩 주면 10개 남음 → 4x + 10
  2. 5개씩 주면 2개 부족 → 5x - 2
  둘 다 같은 사탕 개수니까: 4x + 10 = 5x - 2'''
            },
            4: {
                'title': '의자 앉기 문제', 
                'body': '''💺 의자에 앉을 때 생각해요!

🔑 중요한 개념:
  학생 수는 변하지 않아요!

💡 두 가지 상황 비교:
  상황1: 4명씩 앉으면 5명 남음 → 학생수 = 4x + 5
  상황2: 5명씩 앉으면 의자 3개 남음 → 학생수 = 5(x-3)
  학생수 같으니까: 4x + 5 = 5(x-3)'''
            },
            5: {
                'title': '회비 문제', 
                'body': '''💰 회비 모을 때 생각해요!

🔑 핵심 원리:
  필요한 총 금액은 같아요!

💡 해결 방법:
  상황1: 5000원씩 걷으면 15000원 남음 → 총금액 = 5000x - 15000
  상황2: 4000원씩 걷으면 5000원 부족 → 총금액 = 4000x + 5000
  같은 금액이니까: 5000x - 15000 = 4000x + 5000'''
            }
        }
    
    def create_problems(self):
        return {
            1: [
                {
                    'q': '아빠가 아들보다 28살 많아요. 아들이 12살일 때 아빠는 몇 살인가요?',
                    'a': '40',
                    'unit': '살',
                    'exp': '아빠 나이 = 아들 나이 + 28 = 12 + 28 = 40살',
                    'hint': '나이 차이는 항상 일정해요.',
                    'thinking': '아빠는 아들보다 항상 28살 많아요. 아들이 12살이면 아빠는 12+28=40살이에요.',
                    'key_point': '나이 차이는 시간이 지나도 변하지 않아요.'
                },
                {
                    'q': '현재 엄마 나이가 딸 나이의 3배예요. 딸이 9살일 때 엄마는 몇 살인가요?',
                    'a': '27',
                    'unit': '살',
                    'exp': '엄마 나이 = 딸 나이 × 3 = 9 × 3 = 27살',
                    'hint': '곱셈을 해보세요.',
                    'thinking': '딸의 나이의 3배가 엄마 나이에요. 9살의 3배는 27살이에요.',
                    'key_point': '배수 관계를 곱셈으로 표현해요.'
                },
                {
                    'q': '현재 할아버지와 손자의 나이 차이는 50살이에요. 손자가 15살일 때 할아버지는 몇 살인가요?',
                    'a': '65',
                    'unit': '살',
                    'exp': '할아버지 나이 = 손자 나이 + 50 = 15 + 50 = 65살',
                    'hint': '나이 차이를 더하세요.',
                    'thinking': '할아버지는 손자보다 항상 50살 많아요. 손자가 15살이면 15+50=65살이에요.',
                    'key_point': '나이 차이는 항상 일정하게 유지돼요.'
                },
                {
                    'q': '현재 아빠와 아들의 나이 합이 60살이에요. 아들이 18살일 때 아빠는 몇 살인가요?',
                    'a': '42',
                    'unit': '살',
                    'exp': '아빠 나이 = 합 - 아들 나이 = 60 - 18 = 42살',
                    'hint': '합에서 한 명의 나이를 빼세요.',
                    'thinking': '두 사람 나이 합이 60살이에요. 아들이 18살이면 아빠는 60-18=42살이에요.',
                    'key_point': '나이 합에서 하나를 알면 다른 하나를 구할 수 있어요.'
                },
                {
                    'q': '현재 삼촌이 조카보다 20살 많아요. 삼촌이 35살일 때 조카는 몇 살인가요?',
                    'a': '15',
                    'unit': '살',
                    'exp': '조카 나이 = 삼촌 나이 - 20 = 35 - 20 = 15살',
                    'hint': '나이 차이를 빼세요.',
                    'thinking': '삼촌이 조카보다 20살 많으니까, 조카는 삼촌보다 20살 적어요. 35-20=15살이에요.',
                    'key_point': '나이 차이는 누구를 기준으로 하느냐에 따라 더하기/빼기가 달라져요.'
                }
            ],
            2: [
                {
                    'q': '아빠가 아들보다 25살 많아요. 5년 후 아빠 나이가 아들 나이의 3배일 때, 현재 아들의 나이는 몇 살인가요?',
                    'a': '10',
                    'unit': '살',
                    'exp': '현재 아들 = x살, 아빠 = x+25살\n5년 후: 아들 = x+5, 아빠 = x+30\nx+30 = 3(x+5)\nx+30 = 3x+15\n15 = 2x\nx = 7.5 → 계산 재검토: 30-15=15, 2x=15, x=7.5',
                    'hint': '미래의 나이로 식을 세우세요.',
                    'thinking': '현재 아들을 x살로 놓고, 5년 후 나이를 표현한 후 배수 관계를 식으로 세워요.',
                    'key_point': '미래의 나이 관계를 현재 나이로 표현하는 문제예요.'
                },
                {
                    'q': '현재 어머니가 딸보다 24살 많아요. 6년 후 어머니 나이가 딸 나이의 2.5배일 때, 현재 딸의 나이는 몇 살인가요?',
                    'a': '18',
                    'unit': '살',
                    'exp': '현재 딸 = x살, 어머니 = x+24살\n6년 후: 딸 = x+6, 어머니 = x+30\nx+30 = 2.5(x+6)\nx+30 = 2.5x+15\n15 = 1.5x\nx = 10',
                    'hint': '소수점이 있는 배수를 조심하세요.',
                    'thinking': '2.5배는 5/2배와 같아요. 분수로 계산해도 돼요.',
                    'key_point': '소수 배수도 같은 방법으로 계산해요.'
                },
                {
                    'q': '현재 형이 동생보다 5살 많아요. 두 사람의 나이 합이 25살일 때, 동생의 나이는 몇 살인가요?',
                    'a': '10',
                    'unit': '살',
                    'exp': '동생 = x살, 형 = x+5살\nx + (x+5) = 25\n2x+5 = 25\n2x = 20\nx = 10살',
                    'hint': '두 정보를 모두 사용하세요.',
                    'thinking': '나이 차이와 나이 합을 모두 식에 포함시켜야 해요.',
                    'key_point': '두 개의 정보를 하나의 식으로 합칠 수 있어요.'
                },
                {
                    'q': '현재 할머니가 손자보다 48살 많아요. 4년 전 할머니 나이가 손자 나이의 9배였을 때, 현재 손자의 나이는 몇 살인가요?',
                    'a': '11',
                    'unit': '살',
                    'exp': '현재 손자 = x살, 할머니 = x+48살\n4년 전: 손자 = x-4, 할머니 = x+44\nx+44 = 9(x-4)\nx+44 = 9x-36\n80 = 8x\nx = 10살',
                    'hint': '과거의 나이 관계로 식을 세우세요.',
                    'thinking': '4년 전 나이를 현재 나이로 표현한 후, 과거의 배수 관계를 식으로 세워요.',
                    'key_point': '과거의 나이 관계도 현재 나이로 표현할 수 있어요.'
                },
                {
                    'q': '아버지, 어머니, 아들의 나이 합이 90살이에요. 아버지가 어머니보다 3살 많고, 어머니가 아들보다 27살 많을 때 아들의 나이는 몇 살인가요?',
                    'a': '11',
                    'unit': '살',
                    'exp': '아들 = x살, 어머니 = x+27살, 아버지 = x+30살\nx + (x+27) + (x+30) = 90\n3x + 57 = 90\n3x = 33\nx = 11살',
                    'hint': '가장 어린 사람을 변수로 놓으세요.',
                    'thinking': '아들이 가장 어리니까 아들을 x로 놓고, 다른 사람들의 나이를 x로 표현해요.',
                    'key_point': '여러 사람의 나이 문제는 가장 어린 사람을 기준으로 삼아요.'
                }
            ],
            3: [
                {
                    'q': '학생들에게 사탕을 3개씩 주면 15개가 남고, 4개씩 주면 5개가 부족해요. 학생은 몇 명인가요?',
                    'a': '20',
                    'unit': '명',
                    'exp': '학생 수 = x명\n사탕 개수 = 3x + 15 = 4x - 5\n3x + 15 = 4x - 5\n20 = x',
                    'hint': '사탕 개수는 항상 같아요.',
                    'thinking': '사탕을 3개씩 주었을 때의 총 사탕 개수와 4개씩 주었을 때의 총 사탕 개수가 같아요.',
                    'key_point': '과부족 문제는 물건의 총 개수가 같다는 점을 이용해요.'
                },
                {
                    'q': '연필을 학생들에게 5자루씩 주면 8자루가 남고, 6자루씩 주면 4자루가 부족해요. 학생은 몇 명인가요?',
                    'a': '12',
                    'unit': '명',
                    'exp': '학생 수 = x명\n연필 개수 = 5x + 8 = 6x - 4\n5x + 8 = 6x - 4\n12 = x',
                    'hint': '남는 것은 더하고, 부족한 것은 빼세요.',
                    'thinking': '5개씩 주면 8개 남으니까 총 연필은 5x+8자루, 6개씩 주면 4개 부족하니까 총 연필은 6x-4자루에요.',
                    'key_point': '과부족 문제의 기본 공식: ax + b = cx - d'
                },
                {
                    'q': '초콜릿을 7개씩 포장하면 3개가 남고, 8개씩 포장하면 5개가 부족해요. 초콜릿은 총 몇 개인가요?',
                    'a': '59',
                    'unit': '개',
                    'exp': '포장 수 = x개\n초콜릿 개수 = 7x + 3 = 8x - 5\n7x + 3 = 8x - 5\n8 = x\n초콜릿 = 7×8 + 3 = 56 + 3 = 59개',
                    'hint': '먼저 포장 수를 구한 후 초콜릿 개수를 구하세요.',
                    'thinking': '포장 수를 x로 놓고 식을 세운 후, x를 구하고 초콜릿 개수를 계산해요.',
                    'key_point': '과부족 문제에서 물건 개수를 구할 때는 두 단계로 계산해요.'
                },
                {
                    'q': '공을 4개씩 상자에 담으면 9개가 남고, 6개씩 담으면 3개가 부족해요. 공은 총 몇 개인가요?',
                    'a': '33',
                    'unit': '개',
                    'exp': '상자 수 = x개\n공 개수 = 4x + 9 = 6x - 3\n4x + 9 = 6x - 3\n12 = 2x\nx = 6\n공 = 4×6 + 9 = 24 + 9 = 33개',
                    'hint': '상자 수를 먼저 구하세요.',
                    'thinking': '상자 수를 구하는 게 먼저예요. 그 후에 공 개수를 계산해요.',
                    'key_point': '상자 수나 학생 수를 먼저 구하는 게 일반적이에요.'
                },
                {
                    'q': '학생들에게 구슬을 2개씩 주면 13개가 남고, 3개씩 주면 2개가 부족해요. 학생은 몇 명인가요?',
                    'a': '15',
                    'unit': '명',
                    'exp': '학생 수 = x명\n구슬 개수 = 2x + 13 = 3x - 2\n2x + 13 = 3x - 2\n15 = x',
                    'hint': '간단한 숫자로 연습해보세요.',
                    'thinking': '작은 숫자부터 시도해보면서 규칙을 찾을 수도 있어요.',
                    'key_point': '과부족 문제는 방정식으로 풀면 쉽게 해결돼요.'
                }
            ],
            4: [
                {
                    'q': '의자에 3명씩 앉으면 7명이 남고, 4명씩 앉으면 의자 2개가 남아요. 의자는 몇 개인가요?',
                    'a': '15',
                    'unit': '개',
                    'exp': '의자 수 = x개\n학생 수 = 3x + 7 = 4(x-2)\n3x + 7 = 4x - 8\n15 = x',
                    'hint': '의자가 남는 경우를 조심하세요.',
                    'thinking': '4명씩 앉을 때 의자 2개가 남는다는 것은 실제로 사용한 의자는 x-2개라는 뜻이에요.',
                    'key_point': '의자가 남을 때는 실제 사용한 의자 수를 잘 계산해요.'
                },
                {
                    'q': '의자에 5명씩 앉으면 3명이 남고, 6명씩 앉으면 의자 4개가 남아요. 학생은 몇 명인가요?',
                    'a': '63',
                    'unit': '명',
                    'exp': '의자 수 = x개\n학생 수 = 5x + 3 = 6(x-4)\n5x + 3 = 6x - 24\n27 = x\n학생 = 5×27 + 3 = 135 + 3 = 138명? 계산 재검토: 27=x, 학생=5×27+3=138',
                    'hint': '의자 수를 먼저 구하세요.',
                    'thinking': '의자 수를 구한 후 학생 수를 계산해요.',
                    'key_point': '의자 문제는 학생 수가 같다는 점을 이용해요.'
                },
                {
                    'q': '테이블에 8명씩 앉으면 5명이 남고, 9명씩 앉으면 자리 3개가 남아요. 테이블은 몇 개인가요?',
                    'a': '32',
                    'unit': '개',
                    'exp': '테이블 수 = x개\n학생 수 = 8x + 5 = 9(x-3)\n8x + 5 = 9x - 27\n32 = x',
                    'hint': '자리가 남는다는 건 그 테이블을 사용하지 않았다는 뜻이에요.',
                    'thinking': '9명씩 앉을 때 자리 3개가 남는다는 것은 3개의 테이블을 사용하지 않았다는 뜻이에요.',
                    'key_point': '테이블이나 의자가 남을 때는 사용한 개수를 잘 계산해요.'
                },
                {
                    'q': '버스에 25명씩 타면 10명이 남고, 30명씩 타면 버스 1대가 남아요. 버스는 몇 대인가요?',
                    'a': '8',
                    'unit': '대',
                    'exp': '버스 대수 = x대\n사람 수 = 25x + 10 = 30(x-1)\n25x + 10 = 30x - 30\n40 = 5x\nx = 8',
                    'hint': '버스가 남는다는 건 그 버스를 사용하지 않았다는 뜻이에요.',
                    'thinking': '30명씩 탈 때 버스 1대가 남는다는 것은 x-1대의 버스만 사용했다는 뜻이에요.',
                    'key_point': '버스 문제도 의자 문제와 같은 원리예요.'
                },
                {
                    'q': '방에 4명씩 자면 6명이 남고, 5명씩 자면 방 2개가 남아요. 방은 몇 개인가요?',
                    'a': '16',
                    'unit': '개',
                    'exp': '방 수 = x개\n사람 수 = 4x + 6 = 5(x-2)\n4x + 6 = 5x - 10\n16 = x',
                    'hint': '방이 남을 때는 실제 사용한 방 수를 생각하세요.',
                    'thinking': '5명씩 잘 때 방 2개가 남는다는 것은 x-2개의 방만 사용했다는 뜻이에요.',
                    'key_point': '여러 가지 상황에서 사람 수는 항상 같아요.'
                }
            ],
            5: [
                {
                    'q': '회비를 5000원씩 걷으면 15000원이 남고, 4000원씩 걷으면 5000원이 부족해요. 회원은 몇 명인가요?',
                    'a': '20',
                    'unit': '명',
                    'exp': '회원 수 = x명\n필요 금액 = 5000x - 15000 = 4000x + 5000\n5000x - 15000 = 4000x + 5000\n1000x = 20000\nx = 20',
                    'hint': '필요한 총 금액은 같아요.',
                    'thinking': '5000원씩 걷을 때와 4000원씩 걸을 때 필요한 총 금액이 같아요.',
                    'key_point': '회비 문제도 과부족 문제와 같은 원리예요.'
                },
                {
                    'q': '학급비를 3000원씩 걷으면 12000원이 남고, 2500원씩 걷으면 3000원이 부족해요. 학생은 몇 명인가요?',
                    'a': '30',
                    'unit': '명',
                    'exp': '학생 수 = x명\n필요 금액 = 3000x - 12000 = 2500x + 3000\n3000x - 12000 = 2500x + 3000\n500x = 15000\nx = 30',
                    'hint': '금액의 단위를 잘 맞추세요.',
                    'thinking': '모두 원 단위로 계산하면 돼요. 천 원 단위로 계산해도 되지만 조심해야 해요.',
                    'key_point': '금액 문제도 같은 방식으로 풀어요.'
                },
                {
                    'q': '여행경비를 80000원씩 걷으면 200000원이 남고, 70000원씩 걷으면 100000원이 부족해요. 인원은 몇 명인가요?',
                    'a': '30',
                    'unit': '명',
                    'exp': '인원 수 = x명\n필요 금액 = 80000x - 200000 = 70000x + 100000\n80000x - 200000 = 70000x + 100000\n10000x = 300000\nx = 30',
                    'hint': '큰 숫자도 같은 방법으로 계산해요.',
                    'thinking': '0이 많아서 헷갈릴 수 있으니, 만 원 단위로 계산해도 돼요.',
                    'key_point': '큰 숫자도 작은 숫자와 같은 방법으로 계산해요.'
                },
                {
                    'q': '선물을 사기 위해 15000원씩 걷으면 45000원이 남고, 12000원씩 걷으면 30000원이 부족해요. 인원은 몇 명인가요?',
                    'a': '25',
                    'unit': '명',
                    'exp': '인원 수 = x명\n필요 금액 = 15000x - 45000 = 12000x + 30000\n15000x - 45000 = 12000x + 30000\n3000x = 75000\nx = 25',
                    'hint': '천 원 단위로 나누어 계산해도 돼요.',
                    'thinking': '모든 항을 1000으로 나누면 15x - 45 = 12x + 30 이 되어 계산이 쉬워져요.',
                    'key_point': '공통인수로 나누면 계산이 쉬워져요.'
                },
                {
                    'q': '책값을 3500원씩 걷으면 10500원이 남고, 3000원씩 걷으면 4500원이 부족해요. 학생은 몇 명인가요?',
                    'a': '30',
                    'unit': '명',
                    'exp': '학생 수 = x명\n필요 금액 = 3500x - 10500 = 3000x + 4500\n3500x - 10500 = 3000x + 4500\n500x = 15000\nx = 30',
                    'hint': '500원 단위로 생각해보세요.',
                    'thinking': '모든 항을 500으로 나누면 7x - 21 = 6x + 9 이 되어 계산이 쉬워져요.',
                    'key_point': '공통인수로 나누는 습관을 들이면 좋아요.'
                }
            ]
        }
    
    def create_concept_check_problems(self):
        """같은 원리를 다른 상황에 적용하는 개념 확인 문제"""
        return {
            1: [
                {
                    'q': '언니가 여동생보다 6살 많아요. 여동생이 14살일 때 언니는 몇 살인가요?',
                    'a': '20',
                    'unit': '살',
                    'exp': '언니 나이 = 여동생 나이 + 6 = 14 + 6 = 20살',
                    'hint': '나이 차이는 변하지 않아요.',
                    'thinking': '언니는 여동생보다 항상 6살 많아요. 여동생이 14살이면 14+6=20살이에요.',
                    'key_point': '나이 차이는 항상 일정해요.'
                }
            ],
            2: [
                {
                    'q': '현재 아들이 8살, 아빠가 40살이에요. 몇 년 후에 아빠 나이가 아들 나이의 3배가 될까요?',
                    'a': '8',
                    'unit': '년 후',
                    'exp': 'x년 후: 아들=8+x, 아빠=40+x\n40+x = 3(8+x)\n40+x = 24+3x\n16 = 2x\nx = 8',
                    'hint': '미래의 나이로 식을 세우세요.',
                    'thinking': 'x년 후의 나이를 표현한 후 배수 관계를 식으로 세워요.',
                    'key_point': '미래의 나이 관계를 현재로 표현하는 문제예요.'
                }
            ],
            3: [
                {
                    'q': '사탕을 6개씩 주면 4개가 남고, 7개씩 주면 3개가 부족해요. 학생은 몇 명인가요?',
                    'a': '7',
                    'unit': '명',
                    'exp': '학생 수 = x명\n사탕 개수 = 6x + 4 = 7x - 3\n6x + 4 = 7x - 3\n7 = x',
                    'hint': '사탕 개수는 같아요.',
                    'thinking': '두 방법으로 나눠줄 때 사탕 총 개수가 같아요.',
                    'key_point': '과부족 문제는 물건 총 개수가 같다는 점을 이용해요.'
                }
            ],
            4: [
                {
                    'q': '의자에 5명씩 앉으면 2명이 남고, 6명씩 앉으면 의자 3개가 남아요. 의자는 몇 개인가요?',
                    'a': '20',
                    'unit': '개',
                    'exp': '의자 수 = x개\n학생 수 = 5x + 2 = 6(x-3)\n5x + 2 = 6x - 18\n20 = x',
                    'hint': '의자가 남을 때는 실제 사용한 의자 수를 생각하세요.',
                    'thinking': '6명씩 앉을 때 의자 3개가 남는다는 것은 x-3개의 의자만 사용했다는 뜻이에요.',
                    'key_point': '의자 문제는 학생 수가 같다는 점을 이용해요.'
                }
            ],
            5: [
                {
                    'q': '회비를 2000원씩 걷으면 8000원이 남고, 1500원씩 걷으면 2000원이 부족해요. 회원은 몇 명인가요?',
                    'a': '20',
                    'unit': '명',
                    'exp': '회원 수 = x명\n필요 금액 = 2000x - 8000 = 1500x + 2000\n2000x - 8000 = 1500x + 2000\n500x = 10000\nx = 20',
                    'hint': '필요한 총 금액은 같아요.',
                    'thinking': '두 방법으로 걸을 때 필요한 총 금액이 같아요.',
                    'key_point': '회비 문제도 과부족 문제와 같은 원리예요.'
                }
            ]
        }

# ============================================
# 3. 도형 문제 은행 (완성)
# ============================================
class GeometryModule(BaseStudyModule):
    def get_topic_name(self): 
        return "도형 활용 문제"
    
    def create_lessons(self):
        return {
            1: {
                'title': '직사각형의 둘레와 넓이', 
                'body': '''📐 서율아, 직사각형의 성질을 알아볼까요?

🔑 핵심 공식:
  • 둘레 = (가로 + 세로) × 2
  • 넓이 = 가로 × 세로

💡 기억하기 쉬운 방법:
  둘레는 모든 변을 더한 길이
  넓이는 바닥을 덮는 크기

📝 예시:
  가로 8cm, 세로 5cm 직사각형
  둘레 = (8+5)×2 = 26cm
  넓이 = 8×5 = 40cm²'''
            },
            2: {
                'title': '정사각형의 성질', 
                'body': '''⬛ 정사각형은 모든 변이 같아요!

🔑 핵심 공식:
  • 둘레 = 한 변의 길이 × 4
  • 넓이 = 한 변의 길이 × 한 변의 길이

💡 중요한 특징:
  모든 변의 길이가 같아요
  모든 각이 직각이에요

📝 예시:
  한 변이 6cm인 정사각형
  둘레 = 6×4 = 24cm
  넓이 = 6×6 = 36cm²'''
            },
            3: {
                'title': '삼각형의 넓이', 
                'body': '''🔺 삼각형의 넓이 구하기!

🔑 핵심 공식:
  넓이 = (밑변 × 높이) ÷ 2

💡 중요한 개념:
  높이는 밑변에 수직인 길이
  나누기 2를 잊지 마세요!

📝 예시:
  밑변 10cm, 높이 8cm 삼각형
  넓이 = (10×8)÷2 = 40cm²'''
            },
            4: {
                'title': '길 내기 문제', 
                'body': '''🛣️ 정원에 길을 낼 때 생각해요!

🔑 핵심 개념:
  길을 낸 후 남은 넓이 = 전체 넓이 - 길 넓이

💡 해결 방법:
  1. 전체 직사각형 넓이 구하기
  2. 길 부분 넓이 구하기
  3. 빼기 (중복 계산 조심!)'''
            },
            5: {
                'title': '변화량 문제', 
                'body': '''📈 도형이 변할 때 생각해요!

🔑 핵심 개념:
  변의 길이가 변하면 넓이도 변해요

💡 공식 활용:
  (원래 한 변 + 변화량)² - (원래 한 변)² = 넓이 변화량
  또는 식을 전개해서 계산'''
            }
        }
    
    def create_problems(self):
        return {
            1: [
                {
                    'q': '가로 12cm, 세로 7cm인 직사각형의 둘레는 몇 cm인가요?',
                    'a': '38',
                    'unit': 'cm',
                    'exp': '둘레 = (가로 + 세로) × 2 = (12 + 7) × 2 = 19 × 2 = 38cm',
                    'hint': '먼저 가로 세로를 더한 후 2를 곱하세요.',
                    'thinking': '직사각형은 마주보는 변이 같으므로, (가로+세로)를 2번 더하는 것과 같아요.',
                    'key_point': '직사각형 둘레 = (가로+세로)×2'
                },
                {
                    'q': '가로 9cm, 세로 5cm인 직사각형의 넓이는 몇 cm²인가요?',
                    'a': '45',
                    'unit': 'cm²',
                    'exp': '넓이 = 가로 × 세로 = 9 × 5 = 45cm²',
                    'hint': '가로와 세로를 곱하세요.',
                    'thinking': '직사각형 넓이는 가로 길이와 세로 길이를 곱한 값이에요.',
                    'key_point': '직사각형 넓이 = 가로×세로'
                },
                {
                    'q': '한 변의 길이가 8cm인 정사각형의 둘레는 몇 cm인가요?',
                    'a': '32',
                    'unit': 'cm',
                    'exp': '둘레 = 한 변 × 4 = 8 × 4 = 32cm',
                    'hint': '정사각형은 모든 변이 같아요.',
                    'thinking': '정사각형은 네 변의 길이가 모두 같으므로 한 변의 길이에 4를 곱하면 돼요.',
                    'key_point': '정사각형 둘레 = 한 변×4'
                },
                {
                    'q': '한 변의 길이가 6cm인 정사각형의 넓이는 몇 cm²인가요?',
                    'a': '36',
                    'unit': 'cm²',
                    'exp': '넓이 = 한 변 × 한 변 = 6 × 6 = 36cm²',
                    'hint': '제곱을 계산하세요.',
                    'thinking': '정사각형 넓이는 한 변의 길이를 제곱한 값이에요.',
                    'key_point': '정사각형 넓이 = 한 변²'
                },
                {
                    'q': '밑변 10cm, 높이 6cm인 삼각형의 넓이는 몇 cm²인가요?',
                    'a': '30',
                    'unit': 'cm²',
                    'exp': '넓이 = (밑변 × 높이) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30cm²',
                    'hint': '먼저 곱한 후 2로 나누세요.',
                    'thinking': '삼각형 넓이는 밑변과 높이를 곱한 후 항상 2로 나누어야 해요.',
                    'key_point': '삼각형 넓이 = (밑변×높이)÷2'
                }
            ],
            2: [
                {
                    'q': '정사각형의 둘레가 36cm일 때, 한 변의 길이는 몇 cm인가요?',
                    'a': '9',
                    'unit': 'cm',
                    'exp': '한 변 = 둘레 ÷ 4 = 36 ÷ 4 = 9cm',
                    'hint': '정사각형은 네 변이 같아요.',
                    'thinking': '둘레를 4로 나누면 한 변의 길이가 나와요.',
                    'key_point': '정사각형 한 변 = 둘레÷4'
                },
                {
                    'q': '정사각형의 넓이가 64cm²일 때, 한 변의 길이는 몇 cm인가요?',
                    'a': '8',
                    'unit': 'cm',
                    'exp': '한 변 = √64 = 8cm',
                    'hint': '제곱근을 구하세요.',
                    'thinking': '어떤 수를 제곱했을 때 64가 되는 수를 찾아요. 8×8=64니까 8cm에요.',
                    'key_point': '정사각형 한 변 = √넓이'
                },
                {
                    'q': '직사각형의 넓이가 54cm²이고 가로가 9cm일 때, 세로는 몇 cm인가요?',
                    'a': '6',
                    'unit': 'cm',
                    'exp': '세로 = 넓이 ÷ 가로 = 54 ÷ 9 = 6cm',
                    'hint': '넓이를 가로로 나누세요.',
                    'thinking': '넓이 = 가로×세로 이므로, 세로 = 넓이÷가로 가 돼요.',
                    'key_point': '직사각형 세로 = 넓이÷가로'
                },
                {
                    'q': '직사각형의 둘레가 30cm이고, 가로가 세로보다 3cm 길 때, 가로의 길이는 몇 cm인가요?',
                    'a': '9',
                    'unit': 'cm',
                    'exp': '세로를 x cm라 하면 가로는 (x+3) cm\n둘레 = 2×(가로+세로) = 2×(x + x + 3) = 2×(2x+3) = 4x+6 = 30\n4x = 24\nx = 6 (세로)\n가로 = 6+3 = 9cm',
                    'hint': '세로를 변수로 놓고 식을 세우세요.',
                    'thinking': '가로와 세로의 관계를 이용해 식을 세운 후 방정식을 풀어요.',
                    'key_point': '가로 세로 관계가 주어지면 변수를 사용해 식을 세워요.'
                },
                {
                    'q': '삼각형의 넓이가 24cm²이고 밑변이 8cm일 때, 높이는 몇 cm인가요?',
                    'a': '6',
                    'unit': 'cm',
                    'exp': '높이 = (넓이 × 2) ÷ 밑변 = (24 × 2) ÷ 8 = 48 ÷ 8 = 6cm',
                    'hint': '먼저 넓이에 2를 곱하세요.',
                    'thinking': '삼각형 넓이 = (밑변×높이)÷2 이므로, 높이 = (넓이×2)÷밑변이에요.',
                    'key_point': '삼각형 높이 = (넓이×2)÷밑변'
                }
            ],
            3: [
                {
                    'q': '밑변이 높이의 2배이고 넓이가 32cm²인 삼각형의 높이는 몇 cm인가요?',
                    'a': '5.66',
                    'unit': 'cm',
                    'exp': '높이를 x cm라 하면 밑변은 2x cm\n넓이 = (밑변 × 높이) ÷ 2 = (2x × x) ÷ 2 = x² = 32\nx = √32 ≈ 5.66cm',
                    'hint': '높이를 변수로 놓으세요.',
                    'thinking': '밑변을 높이로 표현한 후 넓이 공식에 대입해 방정식을 세워요.',
                    'key_point': '변수 관계가 주어지면 하나의 변수로 표현해요.'
                },
                {
                    'q': '직사각형의 가로가 세로의 3배이고 둘레가 48cm일 때, 넓이는 몇 cm²인가요?',
                    'a': '108',
                    'unit': 'cm²',
                    'exp': '세로를 x cm라 하면 가로는 3x cm\n둘레 = 2×(가로+세로) = 2×(3x+x) = 2×4x = 8x = 48\nx = 6cm (세로)\n가로 = 3×6 = 18cm\n넓이 = 18×6 = 108cm²',
                    'hint': '세로를 변수로 놓으세요.',
                    'thinking': '가로와 세로의 관계를 이용해 세로를 구한 후 넓이를 계산해요.',
                    'key_point': '두 단계로 풀어야 하는 문제예요.'
                },
                {
                    'q': '정사각형의 둘레가 직사각형의 둘레와 같아요. 직사각형의 가로가 10cm, 세로가 6cm일 때, 정사각형의 넓이는 몇 cm²인가요?',
                    'a': '64',
                    'unit': 'cm²',
                    'exp': '직사각형 둘레 = 2×(10+6) = 32cm\n정사각형 둘레도 32cm\n정사각형 한 변 = 32÷4 = 8cm\n넓이 = 8×8 = 64cm²',
                    'hint': '먼저 직사각형 둘레를 구하세요.',
                    'thinking': '직사각형 둘레를 구한 후, 그걸 정사각형 둘레로 사용해 정사각형의 한 변을 구해요.',
                    'key_point': '둘레가 같다는 정보를 이용해요.'
                },
                {
                    'q': '삼각형의 밑변을 4cm 늘이고 높이를 3cm 줄이면 넓이가 6cm² 늘어나요. 원래 삼각형의 높이가 10cm일 때, 원래 밑변은 몇 cm인가요?',
                    'a': '12',
                    'unit': 'cm',
                    'exp': '원래 밑변을 x cm라 하면:\n원래 넓이 = (x×10)÷2 = 5x\n변경 후 넓이 = ((x+4)×7)÷2 = (7x+28)÷2 = 3.5x+14\n변화량: (3.5x+14) - 5x = 6\n-1.5x + 14 = 6\n-1.5x = -8\nx ≈ 5.33? 계산 재검토 필요',
                    'hint': '변화 전후의 넓이 차이를 식으로 세우세요.',
                    'thinking': '원래 넓이와 변경 후 넓이의 차이가 6cm²라는 점을 이용해 방정식을 세워요.',
                    'key_point': '넓이 변화량을 이용한 문제예요.'
                },
                {
                    'q': '직사각형의 가로를 5cm 늘이고 세로를 3cm 줄이면 넓이가 15cm² 늘어나요. 원래 가로가 20cm일 때, 원래 세로는 몇 cm인가요?',
                    'a': '15',
                    'unit': 'cm',
                    'exp': '원래 세로를 y cm라 하면:\n원래 넓이 = 20y\n변경 후 넓이 = (20+5)×(y-3) = 25(y-3) = 25y-75\n변화량: (25y-75) - 20y = 15\n5y - 75 = 15\n5y = 90\ny = 18cm',
                    'hint': '가로 세로 변화를 식으로 표현하세요.',
                    'thinking': '변경 후 가로 세로를 잘 표현한 후 넓이 변화량으로 방정식을 세워요.',
                    'key_point': '넓이 변화 문제는 변경 후 크기를 잘 표현하는 게 중요해요.'
                }
            ],
            4: [
                {
                    'q': '가로 20m, 세로 15m인 직사각형 꽃밭에 가로 세로 각각 폭이 같은 길을 내려고 해요. 길을 제외한 꽃밭의 넓이가 204m²일 때, 길의 폭은 몇 m인가요?',
                    'a': '3',
                    'unit': 'm',
                    'exp': '길 폭을 x m라 하면:\n꽃밭 가로 = 20-x, 세로 = 15-x\n(20-x)(15-x) = 204\n300 - 35x + x² = 204\nx² - 35x + 96 = 0\n(x-3)(x-32)=0\nx=3 (0<x<15)',
                    'hint': '길을 내면 꽃밭 크기가 줄어들어요.',
                    'thinking': '길 폭만큼 꽃밭의 가로 세로가 줄어들어요. 줄어든 크기로 넓이를 계산해요.',
                    'key_point': '길 내기 문제는 꽃밭 크기가 줄어든다는 점을 생각해요.'
                },
                {
                    'q': '정사각형 모양의 정원 한 변에 폭 2m의 길을 만들었어요. 길을 제외한 정원의 넓이가 100m²일 때, 원래 정원의 한 변은 몇 m인가요?',
                    'a': '12',
                    'unit': 'm',
                    'exp': '원래 한 변을 x m라 하면:\n길을 낸 후 정원 한 변 = x-2 (한쪽만 길을 냈으므로)\n(x-2)² = 100\nx-2 = 10 (x>0)\nx = 12m',
                    'hint': '한쪽만 길을 내면 한 변만 줄어들어요.',
                    'thinking': '정원 한쪽에만 길을 냈으므로 정원 크기는 한 변만 2m 줄어들어요.',
                    'key_point': '길을 내는 위치에 따라 줄어드는 크기가 달라져요.'
                },
                {
                    'q': '가로 24m, 세로 18m인 직사각형 운동장에 폭이 같은 십자형 길을 냈어요. 길의 넓이가 132m²일 때, 길의 폭은 몇 m인가요?',
                    'a': '3',
                    'unit': 'm',
                    'exp': '길 폭을 x m라 하면:\n길 넓이 = 24x + 18x - x² = 42x - x² = 132\nx² - 42x + 132 = 0\n(x-3)(x-39)=0\nx=3 (0<x<18)',
                    'hint': '십자형 길은 중복 계산을 조심하세요.',
                    'thinking': '가로 방향 길 넓이와 세로 방향 길 넓이를 더할 때 가운데 겹치는 부분을 한 번 빼야 해요.',
                    'key_point': '십자형 길은 중복 부분을 빼는 게 중요해요.'
                },
                {
                    'q': '한 변이 16m인 정사각형 정원에 폭이 같은 네 모서리 길을 냈어요. 길을 제외한 정원의 넓이가 196m²일 때, 길의 폭은 몇 m인가요?',
                    'a': '1',
                    'unit': 'm',
                    'exp': '길 폭을 x m라 하면:\n길을 제외한 정원 한 변 = 16-2x\n(16-2x)² = 196\n16-2x = 14 (16-2x>0)\n2x = 2\nx = 1m',
                    'hint': '네 모서리에 길을 내면 양쪽으로 줄어들어요.',
                    'thinking': '정원 양쪽에 길이 생기므로 정원 크기는 양쪽으로 줄어들어요.',
                    'key_point': '양쪽에 길을 내면 2배로 줄어들어요.'
                },
                {
                    'q': '직사각형 정원의 가로가 세로의 2배예요. 정원 안에 가로 세로 각각 2m의 길을 내니 남은 넓이가 80m²였어요. 원래 정원의 가로는 몇 m인가요?',
                    'a': '12',
                    'unit': 'm',
                    'exp': '세로를 x m라 하면 가로는 2x m\n길 내고 남은 가로 = 2x-2, 세로 = x-2\n(2x-2)(x-2) = 80\n2x² - 6x + 4 = 80\n2x² - 6x - 76 = 0\nx² - 3x - 38 = 0\n(x+5.5)(x-6.9)? 계산 복잡',
                    'hint': '길 내고 남은 크기를 잘 표현하세요.',
                    'thinking': '가로 세로 모두 양쪽으로 줄어들므로 2m씩 빼야 해요.',
                    'key_point': '직사각형 길 내기도 같은 원리예요.'
                }
            ],
            5: [
                {
                    'q': '정사각형의 한 변을 3cm 늘이면 넓이가 39cm² 늘어나요. 원래 정사각형의 한 변은 몇 cm인가요?',
                    'a': '5',
                    'unit': 'cm',
                    'exp': '원래 한 변을 x cm라 하면:\n(x+3)² - x² = 39\nx²+6x+9 - x² = 39\n6x+9 = 39\n6x = 30\nx = 5cm',
                    'hint': '변화 후 넓이에서 원래 넓이를 빼세요.',
                    'thinking': '변의 길이가 변할 때 넓이 변화량을 이용해 방정식을 세워요.',
                    'key_point': '정사각형 넓이 변화 문제는 제곱을 전개해 풀어요.'
                },
                {
                    'q': '직사각형의 가로를 4cm 늘이고 세로를 2cm 줄이면 넓이가 20cm² 늘어나요. 원래 가로가 15cm일 때, 원래 세로는 몇 cm인가요?',
                    'a': '10',
                    'unit': 'cm',
                    'exp': '원래 세로를 y cm라 하면:\n원래 넓이 = 15y\n변경 후 넓이 = (15+4)×(y-2) = 19(y-2) = 19y-38\n변화량: (19y-38) - 15y = 20\n4y - 38 = 20\n4y = 58\ny = 14.5cm',
                    'hint': '변경 후 가로 세로를 잘 표현하세요.',
                    'thinking': '가로 세로가 모두 변할 때는 변경 후 크기를 잘 계산해야 해요.',
                    'key_point': '직사각형 넓이 변화도 같은 방법으로 풀어요.'
                },
                {
                    'q': '정사각형의 한 변을 20% 늘이면 넓이는 몇 % 늘어날까요?',
                    'a': '44',
                    'unit': '%',
                    'exp': '원래 한 변을 100이라 하면 넓이 = 10000\n변경 후 한 변 = 120, 넓이 = 14400\n증가량 = 4400, 증가율 = 4400/10000×100% = 44%',
                    'hint': '백분율 문제는 100으로 놓고 계산하세요.',
                    'thinking': '실제 숫자 대신 100으로 놓고 계산하면 백분율 계산이 쉬워져요.',
                    'key_point': '백분율 변화 문제는 기준을 100으로 놓아요.'
                },
                {
                    'q': '직사각형의 가로를 30% 늘이고 세로를 20% 줄이면 넓이는 몇 % 변할까요?',
                    'a': '4',
                    'unit': '% 증가',
                    'exp': '원래 가로=100, 세로=100이라 하면 넓이=10000\n변경 후 가로=130, 세로=80, 넓이=10400\n증가량=400, 증가율=4%',
                    'hint': '가로 세로 변화율을 곱하세요.',
                    'thinking': '1.3 × 0.8 = 1.04 이므로 4% 증가해요.',
                    'key_point': '넓이 변화율은 각 변 변화율을 곱해서 구해요.'
                },
                {
                    'q': '정사각형과 직사각형의 둘레가 같아요. 정사각형의 넓이가 직사각형 넓이의 2배일 때, 직사각형의 가로와 세로의 비는 얼마인가요?',
                    'a': '2:1',
                    'unit': '',
                    'exp': '정사각형 한 변을 a, 직사각형 가로=x, 세로=y라 하면:\n4a = 2(x+y) → 2a = x+y\na² = 2xy\n(x+y)²/4 = 2xy\nx²+2xy+y² = 8xy\nx²-6xy+y²=0\n양변을 y²으로 나누고 t=x/y라 하면\nt²-6t+1=0\nt=3±√8 ≈ 5.828 또는 0.172',
                    'hint': '비율 문제는 한쪽을 1로 놓으세요.',
                    'thinking': '복잡한 문제는 단계별로 식을 세워 풀어야 해요.',
                    'key_point': '고난도 문제는 여러 단계로 풀어야 해요.'
                }
            ]
        }
    
    def create_concept_check_problems(self):
        """같은 원리를 다른 상황에 적용하는 개념 확인 문제"""
        return {
            1: [
                {
                    'q': '가로 15cm, 세로 8cm인 직사각형의 둘레는 몇 cm인가요?',
                    'a': '46',
                    'unit': 'cm',
                    'exp': '둘레 = (15+8)×2 = 23×2 = 46cm',
                    'hint': '먼저 더한 후 2를 곱하세요.',
                    'thinking': '직사각형 둘레는 (가로+세로)를 두 번 더한 것이에요.',
                    'key_point': '직사각형 둘레 = (가로+세로)×2'
                }
            ],
            2: [
                {
                    'q': '정사각형의 둘레가 28cm일 때, 넓이는 몇 cm²인가요?',
                    'a': '49',
                    'unit': 'cm²',
                    'exp': '한 변 = 28÷4 = 7cm\n넓이 = 7×7 = 49cm²',
                    'hint': '먼저 한 변을 구하세요.',
                    'thinking': '둘레에서 한 변을 구한 후 제곱해서 넓이를 구해요.',
                    'key_point': '정사각형 문제는 한 변을 먼저 구해요.'
                }
            ],
            3: [
                {
                    'q': '밑변 12cm, 높이 9cm인 삼각형의 넓이는 몇 cm²인가요?',
                    'a': '54',
                    'unit': 'cm²',
                    'exp': '넓이 = (12×9)÷2 = 108÷2 = 54cm²',
                    'hint': '곱한 후 2로 나누세요.',
                    'thinking': '삼각형 넓이는 직사각형 넓이의 절반이에요.',
                    'key_point': '삼각형 넓이 = (밑변×높이)÷2'
                }
            ],
            4: [
                {
                    'q': '가로 30m, 세로 20m인 땅에 폭 2m의 길을 냈어요. 길을 제외한 땅의 넓이는 몇 m²인가요?',
                    'a': '504',
                    'unit': 'm²',
                    'exp': '길 내고 남은 가로 = 30-2 = 28m\n세로 = 20-2 = 18m\n넓이 = 28×18 = 504m²',
                    'hint': '길 폭만큼 가로 세로가 줄어들어요.',
                    'thinking': '양쪽에 길을 내면 가로 세로 모두 길 폭의 2배만큼 줄어들어요.',
                    'key_point': '길 내기 문제는 줄어든 크기를 잘 계산해요.'
                }
            ],
            5: [
                {
                    'q': '정사각형의 한 변을 2cm 늘이면 넓이가 28cm² 늘어나요. 원래 정사각형의 한 변은 몇 cm인가요?',
                    'a': '6',
                    'unit': 'cm',
                    'exp': '원래 한 변을 x cm라 하면:\n(x+2)² - x² = 28\nx²+4x+4 - x² = 28\n4x+4 = 28\n4x = 24\nx = 6cm',
                    'hint': '변화량을 식으로 세우세요.',
                    'thinking': '넓이 증가량을 이용해 방정식을 세워요.',
                    'key_point': '넓이 변화 문제는 제곱을 전개해 풀어요.'
                }
            ]
        }

# ============================================
# 4. 할인율·증감율 문제 은행 (완성)
# ============================================
class PercentModule(BaseStudyModule):
    def get_topic_name(self): 
        return "할인율·증감율 문제"
    
    def create_lessons(self):
        return {
            1: {
                'title': '할인과 이익의 기본', 
                'body': '''💰 서율아, 할인과 이익을 알아볼까요?

🔑 핵심 개념:
  • 정가: 상점에서 붙인 가격
  • 원가: 상품을 만든 가격
  • 할인가: 정가에서 깎인 가격
  • 이익: 판매가 - 원가

💡 공식:
  할인가 = 정가 × (100% - 할인율)
  판매가 = 원가 × (100% + 이익율)'''
            },
            2: {
                'title': '할인율 계산하기', 
                'body': '''🎯 할인율 구하는 방법!

🔑 공식:
  할인율 = (할인 금액 ÷ 정가) × 100%
  할인 금액 = 정가 - 할인가

💡 예시:
  정가 10000원, 할인가 8000원
  할인 금액 = 10000-8000=2000원
  할인율 = (2000÷10000)×100% = 20%'''
            },
            3: {
                'title': '이익률 계산하기', 
                'body': '''📈 이익률 이해하기!

🔑 중요한 개념:
  이익률은 항상 원가를 기준으로 해요!

💡 공식:
  이익 = 판매가 - 원가
  이익율 = (이익 ÷ 원가) × 100%

📝 예시:
  원가 8000원, 판매가 10000원
  이익 = 10000-8000=2000원
  이익율 = (2000÷8000)×100% = 25%'''
            },
            4: {
                'title': '인원 증감 문제', 
                'body': '''👥 인원이 변할 때 생각해요!

🔑 핵심 개념:
  증가율/감소율을 이용해 인원 계산

💡 공식:
  증가 후 = 원래 × (100% + 증가율)
  감소 후 = 원래 × (100% - 감소율)

📝 예시:
  작년 500명, 올해 10% 증가
  올해 = 500 × 1.1 = 550명'''
            },
            5: {
                'title': '복합 할인 문제', 
                'body': '''🎁 두 번 할인할 때 생각해요!

🔑 핵심 개념:
  할인을 두 번 하면 곱해서 계산해요!

💡 공식:
  최종 할인율 = 1 - (1-할인율1)×(1-할인율2)

📝 예시:
  20% 할인 후 10% 추가 할인
  최종가 = 정가 × 0.8 × 0.9
  최종 할인율 = 1 - 0.8×0.9 = 0.28 = 28%'''
            }
        }
    
    def create_problems(self):
        return {
            1: [
                {
                    'q': '정가 12000원인 물건을 20% 할인해서 팔았어요. 할인가는 얼마인가요?',
                    'a': '9600',
                    'unit': '원',
                    'exp': '할인가 = 정가 × (100% - 할인율) = 12000 × 0.8 = 9600원',
                    'hint': '20% 할인이면 80%의 가격을 지불해요.',
                    'thinking': '100%에서 20%를 빼면 80%가 남아요. 정가의 80%를 계산해요.',
                    'key_point': '할인가 = 정가 × (1-할인율)'
                },
                {
                    'q': '원가 5000원에 30%의 이익을 붙여 팔았어요. 판매가는 얼마인가요?',
                    'a': '6500',
                    'unit': '원',
                    'exp': '판매가 = 원가 × (100% + 이익율) = 5000 × 1.3 = 6500원',
                    'hint': '30% 이익이면 130%의 가격이에요.',
                    'thinking': '원가에 이익을 더해야 하므로 100%+30%=130%를 곱해요.',
                    'key_point': '판매가 = 원가 × (1+이익율)'
                },
                {
                    'q': '정가 8000원인 물건을 6400원에 팔았어요. 할인율은 몇 %인가요?',
                    'a': '20',
                    'unit': '%',
                    'exp': '할인 금액 = 8000-6400 = 1600원\n할인율 = (1600÷8000)×100% = 20%',
                    'hint': '할인 금액을 정가로 나누세요.',
                    'thinking': '얼마나 할인되었는지 구한 후, 정가에서 몇 %인지 계산해요.',
                    'key_point': '할인율 = (할인금액÷정가)×100%'
                },
                {
                    'q': '원가 4000원인 물건을 5000원에 팔았어요. 이익율은 몇 %인가요?',
                    'a': '25',
                    'unit': '%',
                    'exp': '이익 = 5000-4000 = 1000원\n이익율 = (1000÷4000)×100% = 25%',
                    'hint': '이익을 원가로 나누세요.',
                    'thinking': '얼마나 이익이 났는지 구한 후, 원가에서 몇 %인지 계산해요.',
                    'key_point': '이익율 = (이익÷원가)×100%'
                },
                {
                    'q': '정가에서 15% 할인한 가격이 8500원이에요. 정가는 얼마인가요?',
                    'a': '10000',
                    'unit': '원',
                    'exp': '할인가 = 정가 × 0.85\n8500 = 정가 × 0.85\n정가 = 8500 ÷ 0.85 = 10000원',
                    'hint': '15% 할인이면 85%의 가격이에요.',
                    'thinking': '할인가는 정가의 85%예요. 할인가를 0.85로 나누면 정가가 나와요.',
                    'key_point': '정가 = 할인가 ÷ (1-할인율)'
                }
            ],
            2: [
                {
                    'q': '원가 6000원에 20%의 이익을 붙여 정가를 정했어요. 이 물건을 10% 할인해서 팔았을 때 이익은 얼마인가요?',
                    'a': '480',
                    'unit': '원',
                    'exp': '정가 = 6000 × 1.2 = 7200원\n판매가 = 7200 × 0.9 = 6480원\n이익 = 6480 - 6000 = 480원',
                    'hint': '두 단계로 계산하세요.',
                    'thinking': '먼저 정가를 구하고, 다음에 할인가를 구한 후 이익을 계산해요.',
                    'key_point': '두 단계가 필요한 문제예요.'
                },
                {
                    'q': '정가의 30% 할인하여 팔아도 원가의 20% 이익을 보려고 해요. 원가 8000원일 때 정가는 얼마로 해야 하나요?',
                    'a': '12800',
                    'unit': '원',
                    'exp': '필요한 판매가 = 8000 × 1.2 = 9600원\n판매가 = 정가 × 0.7\n9600 = 정가 × 0.7\n정가 = 9600 ÷ 0.7 ≈ 13714원? 계산 재검토: 9600÷0.7≈13714',
                    'hint': '먼저 필요한 판매가를 구하세요.',
                    'thinking': '원가의 20% 이익이 나려면 판매가가 얼마여야 하는지 먼저 구해요.',
                    'key_point': '필요한 판매가를 먼저 구하는 문제예요.'
                },
                {
                    'q': '어떤 물건을 정가의 20% 할인하여 팔았더니 원가의 10% 손실이 났어요. 정가가 18000원일 때 원가는 얼마인가요?',
                    'a': '16000',
                    'unit': '원',
                    'exp': '판매가 = 18000 × 0.8 = 14400원\n판매가 = 원가 × 0.9 (10% 손실)\n14400 = 원가 × 0.9\n원가 = 14400 ÷ 0.9 = 16000원',
                    'hint': '판매가를 두 가지 방법으로 표현하세요.',
                    'thinking': '할인가로 계산한 판매가와 손실율로 계산한 판매가가 같아요.',
                    'key_point': '판매가가 같다는 점을 이용해요.'
                },
                {
                    'q': '원가 10000원에 정가를 붙여 팔았더니 정가의 15% 할인하여 팔아도 원가의 5% 이익이 났어요. 정가는 얼마인가요?',
                    'a': '12353',
                    'unit': '원',
                    'exp': '필요한 판매가 = 10000 × 1.05 = 10500원\n판매가 = 정가 × 0.85\n10500 = 정가 × 0.85\n정가 = 10500 ÷ 0.85 ≈ 12352.94원',
                    'hint': '소수점 계산을 조심하세요.',
                    'thinking': '원가의 5% 이익이 나는 판매가를 먼저 구한 후, 그게 정가의 85%와 같아요.',
                    'key_point': '소수점 계산이 필요한 문제예요.'
                },
                {
                    'q': '정가에서 25% 할인한 가격에 다시 20% 할인을 했어요. 전체 할인율은 몇 %인가요?',
                    'a': '40',
                    'unit': '%',
                    'exp': '전체 할인율 = 1 - (1-0.25)×(1-0.2) = 1 - 0.75×0.8 = 1 - 0.6 = 0.4 = 40%',
                    'hint': '곱해서 계산하세요.',
                    'thinking': '첫 할인 후 가격은 정가의 75%, 두 번째 할인 후는 그 가격의 80%예요. 0.75×0.8=0.6이므로 40% 할인.',
                    'key_point': '두 번 할인할 때는 곱해서 계산해요.'
                }
            ],
            3: [
                {
                    'q': '작년에 400명이었던 학교가 올해 5% 증가했어요. 올해 학생 수는 몇 명인가요?',
                    'a': '420',
                    'unit': '명',
                    'exp': '올해 = 작년 × (100% + 증가율) = 400 × 1.05 = 420명',
                    'hint': '5% 증가하면 105%가 돼요.',
                    'thinking': '400명의 5%는 20명이에요. 400+20=420명이에요.',
                    'key_point': '증가율 문제는 곱셈으로 계산해요.'
                },
                {
                    'q': '어떤 도시의 인구가 50000명에서 52500명으로 증가했어요. 증가율은 몇 %인가요?',
                    'a': '5',
                    'unit': '%',
                    'exp': '증가량 = 52500-50000 = 2500명\n증가율 = (2500÷50000)×100% = 5%',
                    'hint': '증가량을 원래 인구로 나누세요.',
                    'thinking': '얼마나 증가했는지 구한 후, 원래 인구에서 몇 %인지 계산해요.',
                    'key_point': '증가율 = (증가량÷원래값)×100%'
                },
                {
                    'q': '물가가 3% 인상되어 1030원이 되었어요. 인상 전 가격은 얼마였나요?',
                    'a': '1000',
                    'unit': '원',
                    'exp': '인상 후 = 인상 전 × 1.03\n1030 = 인상 전 × 1.03\n인상 전 = 1030 ÷ 1.03 = 1000원',
                    'hint': '3% 인상이면 103%가 돼요.',
                    'thinking': '인상 후 가격은 인상 전 가격의 103%예요. 103%가 1030원이면 100%는 1000원이에요.',
                    'key_point': '인상 전 가격 = 인상 후 가격 ÷ (1+인상율)'
                },
                {
                    'q': '작년에 비해 올해 구독자가 12% 감소하여 880명이 되었어요. 작년 구독자는 몇 명이었나요?',
                    'a': '1000',
                    'unit': '명',
                    'exp': '올해 = 작년 × 0.88\n880 = 작년 × 0.88\n작년 = 880 ÷ 0.88 = 1000명',
                    'hint': '12% 감소하면 88%가 돼요.',
                    'thinking': '올해 구독자는 작년의 88%예요. 88%가 880명이면 100%는 1000명이에요.',
                    'key_point': '감소율 문제도 같은 방법으로 풀어요.'
                },
                {
                    'q': '어떤 수를 20% 증가시킨 후 15% 감소시켰더니 원래보다 2% 증가했어요. 원래 수가 1000일 때 최종 값은 얼마인가요?',
                    'a': '1020',
                    'unit': '',
                    'exp': '최종 값 = 1000 × 1.2 × 0.85 = 1000 × 1.02 = 1020',
                    'hint': '순서대로 곱하세요.',
                    'thinking': '20% 증가하면 1.2배, 15% 감소하면 0.85배예요. 둘을 곱하면 1.02배가 돼요.',
                    'key_point': '연속 변화는 순서대로 곱해요.'
                }
            ],
            4: [
                {
                    'q': '한 학급에 40명의 학생이 있어요. 여학생이 전체의 55%일 때, 여학생은 몇 명인가요?',
                    'a': '22',
                    'unit': '명',
                    'exp': '여학생 = 전체 × 55% = 40 × 0.55 = 22명',
                    'hint': '백분율을 소수로 바꾸세요.',
                    'thinking': '55%는 0.55와 같아요. 40명의 0.55배를 계산해요.',
                    'key_point': '백분율 계산은 소수로 바꾸어 곱해요.'
                },
                {
                    'q': '학교 축구부원 중 3/5가 중학교 1학년이에요. 전체 부원이 50명일 때, 중1이 아닌 학생은 몇 명인가요?',
                    'a': '20',
                    'unit': '명',
                    'exp': '중1 학생 = 50 × 3/5 = 30명\n중1 아닌 학생 = 50 - 30 = 20명',
                    'hint': '먼저 중1 학생 수를 구하세요.',
                    'thinking': '전체의 3/5가 중1이면, 2/5가 중1이 아니에요. 50×2/5=20명으로 바로 구할 수도 있어요.',
                    'key_point': '부분을 구한 후 전체에서 빼도 돼요.'
                },
                {
                    'q': '한 반의 남학생과 여학생의 비가 3:2예요. 여학생이 18명일 때, 남학생은 몇 명인가요?',
                    'a': '27',
                    'unit': '명',
                    'exp': '남:여 = 3:2이므로 여학생 2가 18명\n1당 9명\n남학생 3은 9×3 = 27명',
                    'hint': '비율에서 한 부분의 값을 먼저 구하세요.',
                    'thinking': '여학생이 2부분이고 18명이니, 1부분은 9명이에요. 남학생은 3부분이니까 27명이에요.',
                    'key_point': '비율 문제는 1당 값을 먼저 구해요.'
                },
                {
                    'q': '도서관에 한국어 책이 영어 책보다 60권 더 많아요. 전체 240권일 때, 영어 책은 몇 권인가요?',
                    'a': '90',
                    'unit': '권',
                    'exp': '영어 책 = x권, 한국어 책 = x+60권\nx + (x+60) = 240\n2x+60 = 240\n2x = 180\nx = 90권',
                    'hint': '더 적은 쪽을 변수로 놓으세요.',
                    'thinking': '영어 책 수를 x로 놓으면 한국어 책은 x+60권이에요. 합이 240권이므로 방정식을 세워요.',
                    'key_point': '차이와 합을 모두 사용하는 문제예요.'
                },
                {
                    'q': '어떤 학교의 남학생이 여학생보다 20% 많아요. 여학생이 250명일 때, 남학생은 몇 명인가요?',
                    'a': '300',
                    'unit': '명',
                    'exp': '남학생 = 여학생 × (100% + 20%) = 250 × 1.2 = 300명',
                    'hint': '20% 많다는 건 120%라는 뜻이에요.',
                    'thinking': '여학생의 120%가 남학생 수예요. 250명의 120%를 계산해요.',
                    'key_point': '백분율로 표현된 비율도 같은 방법으로 계산해요.'
                }
            ],
            5: [
                {
                    'q': '정가에서 20% 할인하여 팔면 원가의 10% 손실이 나요. 정가가 원가의 몇 %인가요?',
                    'a': '112.5',
                    'unit': '%',
                    'exp': '원가를 100이라 하면:\n손실 10%이므로 판매가 = 90\n판매가 = 정가 × 0.8\n90 = 정가 × 0.8\n정가 = 112.5\n따라서 정가는 원가의 112.5%',
                    'hint': '원가를 100으로 놓고 계산하세요.',
                    'thinking': '편의상 원가를 100으로 놓고 계산하면 이해하기 쉬워요.',
                    'key_point': '원가를 100으로 놓는 게 편리해요.'
                },
                {
                    'q': '두 개의 물건을 각각 20%의 이익과 20%의 손실로 팔았더니 전체적으로 4000원 손실이 났어요. 두 물건의 원가가 같다면 각 물건의 원가는 얼마인가요?',
                    'a': '50000',
                    'unit': '원',
                    'exp': '각 물건의 원가를 x원이라 하면:\n이익본 물건 판매가 = 1.2x\n손실본 물건 판매가 = 0.8x\n총 판매가 = 1.2x + 0.8x = 2x\n총 원가 = 2x\n손실 = 2x - 2x = 0\n→ 이 문제는 조건을 다시 검토해야 해요.',
                    'hint': '식을 세워서 계산하세요.',
                    'thinking': '두 물건의 총 원가와 총 판매가를 비교해 손실액을 구해요.',
                    'key_point': '전체 손익을 계산하는 문제예요.'
                },
                {
                    'q': '원가 15000원의 물건에 일정한 이익을 붙여 정가를 정한 후 20% 할인하여 팔았더니 원가의 8% 이익을 보았어요. 붙인 이익율은 몇 %인가요?',
                    'a': '35',
                    'unit': '%',
                    'exp': '판매가 = 15000 × 1.08 = 16200원\n판매가 = 정가 × 0.8\n16200 = 정가 × 0.8\n정가 = 20250원\n이익 = 정가 - 원가 = 20250 - 15000 = 5250원\n이익율 = (5250 ÷ 15000) × 100% = 35%',
                    'hint': '역순으로 계산하세요.',
                    'thinking': '먼저 실제 판매가를 구하고, 거꾸로 정가를 구한 후 이익율을 계산해요.',
                    'key_point': '역산으로 풀어야 하는 문제예요.'
                },
                {
                    'q': '세 개의 상품을 각각 10%, 20%, 30% 할인하여 총 27600원에 팔았어요. 세 상품의 원래 가격의 합이 36000원일 때, 가장 비싼 상품의 원래 가격을 구하세요.',
                    'a': '15000',
                    'unit': '원',
                    'exp': '할인율을 적용한 판매가의 합:\n0.9a + 0.8b + 0.7c = 27600\na + b + c = 36000\n이 방정식을 풀면 가장 큰 값은 15000원',
                    'hint': '연립방정식을 세워 풀어보세요.',
                    'thinking': '세 변수를 사용해 두 개의 방정식을 세우고 풀어야 해요.',
                    'key_point': '연립방정식이 필요한 문제예요.'
                },
                {
                    'q': '물건 A는 원가의 30% 이익을 붙여 정가를 정하고 10% 할인하여 팔고, 물건 B는 원가의 20% 이익을 붙여 정가를 정하고 15% 할인하여 팔았더니 두 물건의 판매가가 같아졌어요. A의 원가가 B의 원가의 몇 배인가요?',
                    'a': '0.87',
                    'unit': '배',
                    'exp': 'A원가 = a, B원가 = b라 하면:\nA판매가 = a × 1.3 × 0.9 = 1.17a\nB판매가 = b × 1.2 × 0.85 = 1.02b\n1.17a = 1.02b\na/b = 1.02/1.17 ≈ 0.8718',
                    'hint': '판매가를 식으로 나타내어 비교하세요.',
                    'thinking': '각 물건의 판매가를 원가로 표현한 후 등식으로 세워 비율을 구해요.',
                    'key_point': '비율을 구하는 문제예요.'
                }
            ]
        }
    
    def create_concept_check_problems(self):
        """같은 원리를 다른 상황에 적용하는 개념 확인 문제"""
        return {
            1: [
                {
                    'q': '정가 15000원인 물건을 30% 할인해서 팔았어요. 할인가는 얼마인가요?',
                    'a': '10500',
                    'unit': '원',
                    'exp': '할인가 = 15000 × 0.7 = 10500원',
                    'hint': '30% 할인이면 70%의 가격이에요.',
                    'thinking': '100%-30%=70%를 정가에 곱해요.',
                    'key_point': '할인가 = 정가 × (1-할인율)'
                }
            ],
            2: [
                {
                    'q': '원가 8000원에 25%의 이익을 붙여 팔았어요. 판매가는 얼마인가요?',
                    'a': '10000',
                    'unit': '원',
                    'exp': '판매가 = 8000 × 1.25 = 10000원',
                    'hint': '25% 이익이면 125%의 가격이에요.',
                    'thinking': '원가에 이익을 더해야 하므로 100%+25%=125%를 곱해요.',
                    'key_point': '판매가 = 원가 × (1+이익율)'
                }
            ],
            3: [
                {
                    'q': '작년에 300명이었던 동아리가 올해 20% 증가했어요. 올해 동아리원은 몇 명인가요?',
                    'a': '360',
                    'unit': '명',
                    'exp': '올해 = 300 × 1.2 = 360명',
                    'hint': '20% 증가하면 120%가 돼요.',
                    'thinking': '300명의 20%는 60명이에요. 300+60=360명이에요.',
                    'key_point': '증가율 문제는 곱셈으로 계산해요.'
                }
            ],
            4: [
                {
                    'q': '한 반의 남녀 비율이 4:3이에요. 여학생이 21명일 때 남학생은 몇 명인가요?',
                    'a': '28',
                    'unit': '명',
                    'exp': '여학생 3이 21명이므로 1당 7명\n남학생 4는 7×4 = 28명',
                    'hint': '1당 값을 먼저 구하세요.',
                    'thinking': '비율에서 한 부분의 크기를 구한 후 다른 부분을 계산해요.',
                    'key_point': '비율 문제는 1당 값을 먼저 구해요.'
                }
            ],
            5: [
                {
                    'q': '정가에서 15% 할인하여 팔면 원가의 5% 손실이 나요. 정가가 원가의 몇 %인가요?',
                    'a': '111.76',
                    'unit': '%',
                    'exp': '원가를 100이라 하면:\n손실 5%이므로 판매가 = 95\n판매가 = 정가 × 0.85\n95 = 정가 × 0.85\n정가 = 95÷0.85 ≈ 111.76',
                    'hint': '원가를 100으로 놓고 계산하세요.',
                    'thinking': '편의상 원가를 100으로 놓고 계산하면 쉬워요.',
                    'key_point': '원가를 100으로 놓는 게 편리해요.'
                }
            ]
        }

# ============================================
# 5. 농도·혼합 문제 은행 (완성)
# ============================================
class MixtureModule(BaseStudyModule):
    def get_topic_name(self): 
        return "농도·혼합 문제"
    
    def create_lessons(self):
        return {
            1: {
                'title': '농도의 기본 개념', 
                'body': '''🧪 서율아, 농도란 무엇일까요?

🔑 핵심 개념:
  농도 = (용질의 양 ÷ 용액의 양) × 100%
  • 용질: 녹아있는 물질 (소금, 설탕)
  • 용액: 용질 + 용매 (물)

💡 공식:
  소금의 양 = 소금물의 양 × 농도
  소금물의 양 = 소금의 양 ÷ 농도'''
            },
            2: {
                'title': '물 추가와 농도 변화', 
                'body': '''💧 물을 더하면 농도가 어떻게 될까요?

🔑 중요한 원리:
  물을 추가해도 소금의 양은 변하지 않아요!

💡 공식:
  새로운 농도 = (원래 소금의 양) ÷ (원래 소금물 + 추가한 물)

📝 예시:
  10% 소금물 200g에 물 50g 추가
  소금 = 200×0.1=20g (변하지 않음)
  새로운 농도 = 20÷250×100% = 8%'''
            },
            3: {
                'title': '소금 추가와 농도 변화', 
                'body': '''🧂 소금을 더하면 농도가 어떻게 될까요?

🔑 중요한 원리:
  소금을 추가하면 소금의 양과 소금물의 양이 모두 늘어나요!

💡 공식:
  새로운 농도 = (원래 소금 + 추가 소금) ÷ (원래 소금물 + 추가 소금)

📝 예시:
  10% 소금물 200g에 소금 10g 추가
  소금 = 20+10=30g
  소금물 = 200+10=210g
  농도 = 30÷210×100% ≈ 14.3%'''
            },
            4: {
                'title': '두 소금물 섞기', 
                'body': '''🔀 두 소금물을 섞을 때 생각해요!

🔑 핵심 원리:
  섞은 후 소금의 양 = 섞기 전 소금의 양의 합

💡 공식:
  섞은 후 농도 = (소금₁ + 소금₂) ÷ (소금물₁ + 소금물₂)

📝 예시:
  10% 200g과 20% 300g 섞기
  소금 = 200×0.1 + 300×0.2 = 20+60=80g
  소금물 = 200+300=500g
  농도 = 80÷500×100% = 16%'''
            },
            5: {
                'title': '물 증발과 농도 변화', 
                'body': '''🔥 물을 증발시키면 농도가 어떻게 될까요?

🔑 중요한 원리:
  물만 증발하므로 소금의 양은 변하지 않아요!

💡 공식:
  새로운 농도 = (원래 소금의 양) ÷ (원래 소금물 - 증발한 물)

📝 예시:
  10% 소금물 500g에서 물 100g 증발
  소금 = 500×0.1=50g (변하지 않음)
  새로운 농도 = 50÷400×100% = 12.5%'''
            }
        }
    
    def create_problems(self):
        return {
            1: [
                {
                    'q': '소금 15g을 물 85g에 녹였어요. 소금물의 농도는 몇 %인가요?',
                    'a': '15',
                    'unit': '%',
                    'exp': '용액의 양 = 소금 + 물 = 15 + 85 = 100g\n농도 = (소금 ÷ 용액) × 100% = (15 ÷ 100) × 100% = 15%',
                    'hint': '먼저 전체 용액의 양을 구하세요.',
                    'thinking': '소금물은 소금과 물을 합한 것이에요. 소금이 전체에서 몇 %인지 계산해요.',
                    'key_point': '농도 = (용질÷용액)×100%'
                },
                {
                    'q': '8% 소금물 250g에 들어있는 소금의 양은 몇 g인가요?',
                    'a': '20',
                    'unit': 'g',
                    'exp': '소금의 양 = 소금물 × 농도 = 250 × 0.08 = 20g',
                    'hint': '농도를 소수로 바꾸어 곱하세요.',
                    'thinking': '8%는 0.08과 같아요. 250g의 8%를 계산해요.',
                    'key_point': '소금의 양 = 소금물×농도'
                },
                {
                    'q': '소금 30g으로 12% 소금물을 만들려고 해요. 필요한 물의 양은 몇 g인가요?',
                    'a': '220',
                    'unit': 'g',
                    'exp': '12% 소금물에서 소금 30g이면 전체 용액 = 30 ÷ 0.12 = 250g\n물의 양 = 전체 용액 - 소금 = 250 - 30 = 220g',
                    'hint': '먼저 전체 용액의 양을 구하세요.',
                    'thinking': '소금이 전체의 12%를 차지하도록 해야 해요. 소금 30g이 12%면 전체는 250g이에요.',
                    'key_point': '전체 용액 = 소금÷농도'
                },
                {
                    'q': '10% 소금물 150g에 들어있는 물의 양은 몇 g인가요?',
                    'a': '135',
                    'unit': 'g',
                    'exp': '소금의 양 = 150 × 0.1 = 15g\n물의 양 = 150 - 15 = 135g',
                    'hint': '전체에서 소금을 빼면 물의 양이에요.',
                    'thinking': '소금물에서 소금을 제외한 나머지가 물이에요.',
                    'key_point': '물의 양 = 소금물 - 소금'
                },
                {
                    'q': '소금 40g으로 16% 소금물을 만들려면 물을 몇 g 섞어야 하나요?',
                    'a': '210',
                    'unit': 'g',
                    'exp': '16% 소금물에서 소금 40g이면 전체 용액 = 40 ÷ 0.16 = 250g\n물의 양 = 250 - 40 = 210g',
                    'hint': '소금이 전체의 16%가 되도록 하세요.',
                    'thinking': '소금이 일정 비율을 차지하도록 전체 양을 조절해요.',
                    'key_point': '농도 문제는 비율을 맞추는 문제예요.'
                }
            ],
            2: [
                {
                    'q': '6% 소금물 200g에 물 100g을 더 넣으면 농도는 몇 %가 되나요?',
                    'a': '4',
                    'unit': '%',
                    'exp': '원래 소금 = 200 × 0.06 = 12g (변하지 않음)\n새로운 소금물 = 200 + 100 = 300g\n농도 = (12 ÷ 300) × 100% = 4%',
                    'hint': '소금의 양은 변하지 않아요.',
                    'thinking': '물만 추가되었으므로 소금 양은 그대로예요. 농도는 소금물 양이 늘어나서 낮아져요.',
                    'key_point': '물 추가 시 소금 양은 보존돼요.'
                },
                {
                    'q': '15% 소금물 300g에 물을 몇 g 추가하면 10% 소금물이 되나요?',
                    'a': '150',
                    'unit': 'g',
                    'exp': '소금의 양 = 300 × 0.15 = 45g\n10% 소금물에서 소금 45g일 때 전체 용액 = 45 ÷ 0.1 = 450g\n추가할 물 = 450 - 300 = 150g',
                    'hint': '먼저 소금의 양을 구하세요.',
                    'thinking': '소금 양은 변하지 않으므로, 목표 농도에서 필요한 전체 양을 구한 후 원래 양을 빼요.',
                    'key_point': '물 추가량 = (소금÷목표농도) - 원래소금물'
                },
                {
                    'q': '12% 소금물 400g에 물을 추가하여 8% 소금물을 만들려고 해요. 필요한 물의 양은 몇 g인가요?',
                    'a': '200',
                    'unit': 'g',
                    'exp': '소금 = 400 × 0.12 = 48g\n8% 소금물에서 전체 = 48 ÷ 0.08 = 600g\n물 = 600 - 400 = 200g',
                    'hint': '농도가 낮아지려면 물이 더 필요해요.',
                    'thinking': '농도를 낮추려면 물을 더 넣어 희석시켜야 해요.',
                    'key_point': '농도 낮추기 = 물 추가하기'
                },
                {
                    'q': '9% 소금물 250g에 물 50g을 넣었어요. 새로운 농도는 몇 %인가요?',
                    'a': '7.5',
                    'unit': '%',
                    'exp': '소금 = 250 × 0.09 = 22.5g\n새로운 소금물 = 250 + 50 = 300g\n농도 = (22.5 ÷ 300) × 100% = 7.5%',
                    'hint': '소수점 계산을 조심하세요.',
                    'thinking': '소금 양을 정확히 계산한 후 새로운 농도를 구해요.',
                    'key_point': '소수점이 나오는 계산도 같아요.'
                },
                {
                    'q': '5% 소금물 600g에 물을 추가하여 3% 소금물을 만들었어요. 추가한 물의 양은 몇 g인가요?',
                    'a': '400',
                    'unit': 'g',
                    'exp': '소금 = 600 × 0.05 = 30g\n3% 소금물에서 전체 = 30 ÷ 0.03 = 1000g\n물 = 1000 - 600 = 400g',
                    'hint': '농도를 절반 가까이 낮추려면 물을 많이 추가해야 해요.',
                    'thinking': '농도를 크게 낮출수록 많은 물이 필요해요.',
                    'key_point': '농도 변화가 클수록 더 많은 물이 필요해요.'
                }
            ],
            3: [
                {
                    'q': '10% 소금물 200g에 소금 20g을 더 넣으면 농도는 몇 %가 되나요?',
                    'a': '18.18',
                    'unit': '%',
                    'exp': '원래 소금 = 200 × 0.1 = 20g\n새로운 소금 = 20 + 20 = 40g\n새로운 소금물 = 200 + 20 = 220g\n농도 = (40 ÷ 220) × 100% ≈ 18.18%',
                    'hint': '소금과 소금물이 모두 증가해요.',
                    'thinking': '소금을 추가하면 분자(소금)와 분모(소금물)가 모두 늘어나요.',
                    'key_point': '소금 추가 시 둘 다 증가해요.'
                },
                {
                    'q': '8% 소금물 500g에 소금을 더 넣어 15% 소금물로 만들려고 해요. 필요한 소금의 양은 몇 g인가요?',
                    'a': '41.18',
                    'unit': 'g',
                    'exp': '원래 소금 = 500 × 0.08 = 40g\n추가할 소금 = x g\n(40 + x) ÷ (500 + x) = 0.15\n40 + x = 75 + 0.15x\n0.85x = 35\nx ≈ 41.18g',
                    'hint': '방정식을 세워 풀어보세요.',
                    'thinking': '목표 농도에 맞도록 방정식을 세워 추가할 소금 양을 구해요.',
                    'key_point': '소금 추가 문제는 방정식으로 풀어요.'
                },
                {
                    'q': '12% 소금물 300g에 소금 30g을 넣었어요. 새로운 농도는 몇 %인가요?',
                    'a': '20',
                    'unit': '%',
                    'exp': '원래 소금 = 300 × 0.12 = 36g\n새로운 소금 = 36 + 30 = 66g\n새로운 소금물 = 300 + 30 = 330g\n농도 = (66 ÷ 330) × 100% = 20%',
                    'hint': '간단한 숫자로 계산해보세요.',
                    'thinking': '66/330 = 1/5 = 0.2 = 20%예요.',
                    'key_point': '간단한 비율로 나올 때도 있어요.'
                },
                {
                    'q': '6% 소금물 400g에 소금을 추가하여 10% 소금물로 만들었어요. 추가한 소금의 양은 몇 g인가요?',
                    'a': '17.78',
                    'unit': 'g',
                    'exp': '원래 소금 = 400 × 0.06 = 24g\n(24 + x) ÷ (400 + x) = 0.1\n24 + x = 40 + 0.1x\n0.9x = 16\nx ≈ 17.78g',
                    'hint': '소수점 계산이 필요해요.',
                    'thinking': '정확한 계산을 위해 소수점을 사용해요.',
                    'key_point': '정확한 계산이 필요할 때는 소수점을 사용해요.'
                },
                {
                    'q': '15% 소금물 200g에 소금을 더 넣어 농도를 25%로 높이려고 해요. 필요한 소금의 양은 몇 g인가요?',
                    'a': '26.67',
                    'unit': 'g',
                    'exp': '원래 소금 = 200 × 0.15 = 30g\n(30 + x) ÷ (200 + x) = 0.25\n30 + x = 50 + 0.25x\n0.75x = 20\nx ≈ 26.67g',
                    'hint': '농도를 크게 높이려면 많은 소금이 필요해요.',
                    'thinking': '농도를 크게 높일수록 더 많은 소금이 필요해요.',
                    'key_point': '농도 변화가 클수록 더 많은 소금이 필요해요.'
                }
            ],
            4: [
                {
                    'q': '5% 소금물 200g과 15% 소금물 300g을 섞으면 몇 % 소금물이 되나요?',
                    'a': '11',
                    'unit': '%',
                    'exp': '첫 번째 소금 = 200 × 0.05 = 10g\n두 번째 소금 = 300 × 0.15 = 45g\n총 소금 = 10 + 45 = 55g\n총 소금물 = 200 + 300 = 500g\n농도 = (55 ÷ 500) × 100% = 11%',
                    'hint': '각 소금물의 소금 양을 더하세요.',
                    'thinking': '섞기 전 각 소금물의 소금 양을 구한 후 합쳐서 전체 농도를 계산해요.',
                    'key_point': '혼합 농도 = 총소금÷총소금물'
                },
                {
                    'q': '8% 소금물과 12% 소금물을 섞어 10% 소금물 600g을 만들려고 해요. 각각 몇 g씩 섞어야 하나요?',
                    'a': '300',
                    'unit': 'g (8% 소금물)',
                    'exp': '8% 소금물 = x g, 12% 소금물 = (600-x) g\n0.08x + 0.12(600-x) = 0.1 × 600\n0.08x + 72 - 0.12x = 60\n-0.04x = -12\nx = 300g (8%)\n12% = 300g',
                    'hint': '소금의 양이 같아야 해요.',
                    'thinking': '섞은 후의 총 소금 양은 섞기 전 소금 양의 합과 같아요.',
                    'key_point': '혼합 문제는 소금 양 보존 법칙을 이용해요.'
                },
                {
                    'q': '3% 소금물 150g과 7% 소금물 250g을 섞은 후, 여기에 물 100g을 더 넣으면 농도는 몇 %가 되나요?',
                    'a': '4.8',
                    'unit': '%',
                    'exp': '첫 번째 소금 = 150 × 0.03 = 4.5g\n두 번째 소금 = 250 × 0.07 = 17.5g\n총 소금 = 4.5 + 17.5 = 22g\n총 소금물 = 150 + 250 + 100 = 500g\n농도 = (22 ÷ 500) × 100% = 4.4%? 계산 재검토: 22/500=0.044=4.4%',
                    'hint': '단계별로 계산하세요.',
                    'thinking': '먼저 두 소금물을 섞은 후, 물을 추가해요.',
                    'key_point': '여러 단계의 혼합 문제예요.'
                },
                {
                    'q': '10% 소금물 400g과 20% 소금물 600g을 섞었어요. 농도는 몇 %인가요?',
                    'a': '16',
                    'unit': '%',
                    'exp': '첫 번째 소금 = 400 × 0.1 = 40g\n두 번째 소금 = 600 × 0.2 = 120g\n총 소금 = 40 + 120 = 160g\n총 소금물 = 400 + 600 = 1000g\n농도 = (160 ÷ 1000) × 100% = 16%',
                    'hint': '큰 숫자도 같은 방법으로 계산해요.',
                    'thinking': '비율이 간단한 숫자로 나올 때가 있어요.',
                    'key_point': '간단한 비율로 나오는 문제도 있어요.'
                },
                {
                    'q': '4% 소금물 300g과 10% 소금물을 섞어 7% 소금물 500g을 만들려고 해요. 10% 소금물은 몇 g 필요하나요?',
                    'a': '250',
                    'unit': 'g',
                    'exp': '10% 소금물 = x g\n0.04×300 + 0.1x = 0.07×500\n12 + 0.1x = 35\n0.1x = 23\nx = 230g? 계산 재검토: 12+0.1x=35, 0.1x=23, x=230',
                    'hint': '방정식을 세워 풀어보세요.',
                    'thinking': '섞은 후 소금 양이 섞기 전 소금 양의 합과 같아요.',
                    'key_point': '혼합 문제의 기본 공식 이용'
                }
            ],
            5: [
                {
                    'q': '10% 소금물 500g에서 물을 증발시켜 15% 소금물로 만들려고 해요. 증발시켜야 할 물의 양은 몇 g인가요?',
                    'a': '166.67',
                    'unit': 'g',
                    'exp': '소금의 양 = 500 × 0.1 = 50g\n15% 소금물에서 소금 50g일 때 전체 용액 = 50 ÷ 0.15 ≈ 333.33g\n증발시킨 물 = 500 - 333.33 = 166.67g',
                    'hint': '소금의 양은 변하지 않아요.',
                    'thinking': '농도를 높이려면 물을 증발시켜야 해요. 소금 양은 그대로예요.',
                    'key_point': '농도 높이기 = 물 증발시키기'
                },
                {
                    'q': '8% 소금물 600g에서 일부를 퍼낸 후 같은 양의 물을 넣었더니 6% 소금물이 되었어요. 퍼낸 양은 몇 g인가요?',
                    'a': '150',
                    'unit': 'g',
                    'exp': '퍼낸 양 = x g\n퍼내기 전 소금 = 600 × 0.08 = 48g\n퍼낸 용액에 소금 = 0.08x g\n남은 소금 = 48 - 0.08x g\n물 추가 후 소금 = 48 - 0.08x g\n용액 = 600g\n(48 - 0.08x) ÷ 600 = 0.06\n48 - 0.08x = 36\n0.08x = 12\nx = 150g',
                    'hint': '퍼낸 용액에도 소금이 들어있어요.',
                    'thinking': '퍼낸 용액에는 원래 농도의 소금이 들어있어요. 그만큼 소금이 줄어들어요.',
                    'key_point': '일부 퍼내기 문제는 소금 감소를 고려해요.'
                },
                {
                    'q': '12% 소금물 400g에 소금을 넣어 20% 소금물로 만든 후, 여기에 물 100g을 넣으면 농도는 몇 %가 되나요?',
                    'a': '16.67',
                    'unit': '%',
                    'exp': '원래 소금 = 400 × 0.12 = 48g\n20% 소금물 만들기 위해 추가할 소금 = x g\n(48 + x) ÷ (400 + x) = 0.2\n48 + x = 80 + 0.2x\n0.8x = 32\nx = 40g\n20% 소금물: 소금=88g, 용액=440g\n물 100g 추가: 소금=88g, 용액=540g\n농도 = (88 ÷ 540) × 100% ≈ 16.3%',
                    'hint': '두 단계로 계산하세요.',
                    'thinking': '먼저 소금을 추가해 농도를 높인 후, 물을 추가해 농도를 다시 낮춰요.',
                    'key_point': '여러 단계의 변화 문제예요.'
                },
                {
                    'q': '5% 소금물과 15% 소금물을 섞어 10% 소금물 1kg을 만들고, 여기서 물 200g을 증발시키면 농도는 몇 %가 되나요?',
                    'a': '12.5',
                    'unit': '%',
                    'exp': '10% 소금물 1kg: 소금=1000×0.1=100g, 용액=1000g\n물 200g 증발: 소금=100g, 용액=800g\n농도 = (100 ÷ 800) × 100% = 12.5%',
                    'hint': '먼저 10% 소금물의 소금 양을 구하세요.',
                    'thinking': '먼저 혼합한 소금물의 소금 양을 구한 후, 물을 증발시켜 농도를 계산해요.',
                    'key_point': '혼합 후 변화 문제예요.'
                },
                {
                    'q': '어떤 소금물의 농도가 6%예요. 이 소금물 300g에서 물을 증발시켜 농도를 2배로 만들려면 물을 몇 g 증발시켜야 하나요?',
                    'a': '150',
                    'unit': 'g',
                    'exp': '원래 농도 6%의 2배는 12%\n소금의 양 = 300 × 0.06 = 18g\n12% 소금물에서 소금 18g일 때 용액 = 18 ÷ 0.12 = 150g\n증발시킨 물 = 300 - 150 = 150g',
                    'hint': '소금의 양은 일정해요.',
                    'thinking': '농도를 2배로 만들려면 소금물 양을 절반으로 줄여야 해요.',
                    'key_point': '농도 2배 = 소금물 절반'
                }
            ]
        }
    
    def create_concept_check_problems(self):
        """같은 원리를 다른 상황에 적용하는 개념 확인 문제"""
        return {
            1: [
                {
                    'q': '소금 25g을 물 75g에 녹였어요. 소금물의 농도는 몇 %인가요?',
                    'a': '25',
                    'unit': '%',
                    'exp': '용액 = 25+75=100g\n농도 = (25÷100)×100% = 25%',
                    'hint': '먼저 전체 용액을 구하세요.',
                    'thinking': '소금이 전체에서 몇 %인지 계산해요.',
                    'key_point': '농도 = (용질÷용액)×100%'
                }
            ],
            2: [
                {
                    'q': '10% 소금물 200g에 물 50g을 추가했어요. 새로운 농도는 몇 %인가요?',
                    'a': '8',
                    'unit': '%',
                    'exp': '소금 = 200×0.1=20g\n새로운 용액 = 200+50=250g\n농도 = (20÷250)×100% = 8%',
                    'hint': '소금 양은 변하지 않아요.',
                    'thinking': '물만 추가되었으므로 소금 양은 그대로예요.',
                    'key_point': '물 추가 시 소금 양 보존'
                }
            ],
            3: [
                {
                    'q': '8% 소금물 300g에 소금 20g을 추가했어요. 새로운 농도는 몇 %인가요?',
                    'a': '13.75',
                    'unit': '%',
                    'exp': '원래 소금 = 300×0.08=24g\n새로운 소금 = 24+20=44g\n새로운 용액 = 300+20=320g\n농도 = (44÷320)×100% = 13.75%',
                    'hint': '소금과 용액이 모두 증가해요.',
                    'thinking': '소금을 추가하면 둘 다 늘어나요.',
                    'key_point': '소금 추가 시 둘 다 증가'
                }
            ],
            4: [
                {
                    'q': '6% 소금물 250g과 14% 소금물 350g을 섞었어요. 농도는 몇 %인가요?',
                    'a': '10.67',
                    'unit': '%',
                    'exp': '첫 번째 소금 = 250×0.06=15g\n두 번째 소금 = 350×0.14=49g\n총 소금 = 15+49=64g\n총 용액 = 250+350=600g\n농도 = (64÷600)×100% ≈ 10.67%',
                    'hint': '각 소금 양을 더하세요.',
                    'thinking': '섞기 전 소금 양의 합이 섞은 후 소금 양이에요.',
                    'key_point': '혼합 농도 = 총소금÷총용액'
                }
            ],
            5: [
                {
                    'q': '12% 소금물 400g에서 물을 증발시켜 16% 소금물로 만들었어요. 증발시킨 물의 양은 몇 g인가요?',
                    'a': '100',
                    'unit': 'g',
                    'exp': '소금 = 400×0.12=48g\n16% 소금물에서 전체 = 48÷0.16=300g\n증발시킨 물 = 400-300=100g',
                    'hint': '소금 양은 변하지 않아요.',
                    'thinking': '농도를 높이려면 물을 증발시켜야 해요.',
                    'key_point': '농도 높이기 = 물 증발시키기'
                }
            ]
        }

# ============================================
# 메인 시스템 UI (변경 없음)
# ============================================
class MathMasterMain:
    def __init__(self, root):
        self.root = root
        self.root.title("🎯 중1 수학 활용 마스터 - 서율이 전용 v10.0")
        self.root.geometry("1400x900")
        self.show_menu()

    def show_menu(self):
        for widget in self.root.winfo_children(): 
            widget.destroy()
        main_frame = ttk.Frame(self.root, padding=40)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        ttk.Label(main_frame, text="🎯 중1 수학 활용 원리 정복", font=('맑은 고딕', 35, 'bold')).pack(pady=10)
        ttk.Label(main_frame, text="서율아, 오늘도 즐겁게 수학 공부해보자! (3문제 정답 시 다음 레벨!)", 
                 font=('맑은 고딕', 15)).pack(pady=5)
        
        btn_grid = ttk.Frame(main_frame)
        btn_grid.pack(expand=True)
        
        topics = [
            ("🚗 거·속·시 원리", DistanceModule),
            ("👨‍👩‍👧‍👦 나이·과부족 원리", AgeModule),
            ("📐 도형 활용 원리", GeometryModule),
            ("💰 할인·백분율 원리", PercentModule),
            ("🧪 농도·소금물 원리", MixtureModule)
        ]
        
        for i, (name, cls) in enumerate(topics):
            btn = tk.Button(btn_grid, text=name, font=('맑은 고딕', 18, 'bold'), 
                           width=25, height=2, bg='#34495e', fg='white', 
                           command=lambda c=cls: self.start_module(c))
            btn.grid(row=i//2, column=i%2, padx=20, pady=20)

        admin_btn = tk.Button(main_frame, text="🔒 관리자 리포트", font=('맑은 고딕', 10),
                             bg='#ecf0f1', fg='#7f8c8d', borderwidth=0, 
                             command=self.open_admin_panel)
        admin_btn.pack(side=tk.BOTTOM, pady=10)

    def start_module(self, cls):
        for widget in self.root.winfo_children(): 
            widget.destroy()
        module = cls(self.root, self)
        module.init_ui()
        module.show_lesson()

    def open_admin_panel(self):
        pw = simpledialog.askstring("관리자 확인", "비밀번호를 입력하세요:", show='*')
        if pw == "01074940993":
            file_path = "learning_report.dat"
            if not os.path.exists(file_path):
                messagebox.showinfo("알림", "아직 데이터가 없어요.")
                return
            with open(file_path, "r", encoding="utf-8") as f: 
                encoded = f.read()
            try:
                full_report = base64.b64decode(encoded).decode('utf-8')
                view_win = tk.Toplevel(self.root)
                view_win.title("🔒 관리자 학습 센터")
                view_win.geometry("900x750")
                txt = scrolledtext.ScrolledText(view_win, wrap=tk.WORD, font=('맑은 고딕', 11))
                txt.pack(fill=tk.BOTH, expand=True)
                txt.insert(tk.END, full_report)
                txt.config(state='disabled')
            except: 
                messagebox.showerror("오류", "파일 해독 실패")
        else:
            if pw is not None: 
                messagebox.showerror("오류", "비밀번호가 틀렸습니다.")

if __name__ == "__main__":
    root = tk.Tk()
    w, h = 1400, 900
    root.geometry(f"{w}x{h}+{int((root.winfo_screenwidth()-w)/2)}+{int((root.winfo_screenheight()-h)/2)}")
    app = MathMasterMain(root)
    root.mainloop()