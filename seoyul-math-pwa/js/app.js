let SYLLABUS = null;
let CONCEPTS = null;

// currentUnit: { unitId, title, sectionTitle, chapterTitle }
let currentUnit = null;

// fixedDB: { meta:{unitId,perDifficulty,...}, problems:{1:[],2:[],3:[]} }
let fixedDB = null;

let practice = null;
let practiceStart = null;
let practiceTimerId = null;
let exam = null;

function $(id){ return document.getElementById(id); }

function setTab(tab){
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const el = $('panel-' + tab);
  if(el) el.classList.add('active');
}

function fmtTime(sec){
  const m = Math.floor(sec/60);
  const s = Math.floor(sec%60);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

async function apiGet(url){
  const r = await fetch(url);
  return await r.json();
}

async function apiPost(url, body){
  const r = await fetch(url, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(body||{})
  });
  return await r.json();
}

function updateConcept(){
  if(!currentUnit){
    $('breadcrumb').textContent = '단원을 선택하세요';
    $('conceptTitle').textContent = '단원을 선택하세요';
    $('conceptBody').textContent = '왼쪽 목차에서 소단원을 고르세요.';
    updateFixedHint();
    return;
  }

  const bc = `${currentUnit.chapterTitle} › ${currentUnit.sectionTitle} › ${currentUnit.title}`;
  $('breadcrumb').textContent = bc;
  $('conceptTitle').textContent = currentUnit.title;

  const key = currentUnit.unitId;
  $('conceptBody').textContent = (CONCEPTS[key] || '개념 요약이 아직 없습니다. (data/concepts.json에 unitId 키로 추가 가능)');
  updateFixedHint();
}

function updateFixedHint(){
  const hint = $('fixedDbHint');
  if(!currentUnit){ hint.textContent = '고정 DB: 미사용'; return; }
  if(fixedDB && fixedDB.meta && fixedDB.meta.unitId === currentUnit.unitId){
    hint.textContent = `고정 DB: 사용중 (각 난이도 ${fixedDB.meta.perDifficulty}문항)`;
  } else {
    hint.textContent = '고정 DB: 미사용';
  }
}

function getPracticePool(unitId, difficulty){
  if(fixedDB && fixedDB.meta?.unitId === unitId){
    const arr = fixedDB.problems?.[difficulty] || fixedDB.problems?.[String(difficulty)] || [];
    if(arr.length) return arr;
  }
  return Generator.genProblemsByUnitId(unitId, difficulty, 200);
}

function sampleFromPool(pool, count){
  const shuffled = GenCore.shuffle(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function startPractice(){
  if(!currentUnit){ alert('먼저 단원을 선택하세요.'); return; }
  const difficulty = Number($('difficulty').value);
  const count = Number($('practiceCount').value);

  const pool = getPracticePool(currentUnit.unitId, difficulty);
  if(!pool.length){
    alert('이 단원/난이도에 템플릿/DB가 없습니다.');
    return;
  }

  const probs = sampleFromPool(pool, count);
  practice = { idx:0, probs, correct:0, total:0 };
  practiceStart = Date.now();
  $('practiceFeedback').textContent = '';
  showPractice();
  setTab('practice');
  startTimer();
}

function startTimer(){
  if(practiceTimerId) clearInterval(practiceTimerId);
  practiceTimerId = setInterval(()=>{
    const sec = (Date.now()-practiceStart)/1000;
    $('practiceTimer').textContent = '⏱ ' + fmtTime(sec);
  }, 500);
}

function showPractice(){
  const p = practice.probs[practice.idx];
  $('practiceMeta').textContent = `${currentUnit.unitId} | 난이도 ${p.difficulty} | ${practice.idx+1}/${practice.probs.length}`;
  $('practiceQuestion').textContent = p.question;
  $('practiceUnit').textContent = p.unitLabel || '';
  $('practiceAnswer').value='';
  $('practiceAnswer').disabled = false;
  $('practiceAnswer').focus();
  $('practiceFeedback').textContent = '';
  
  // 버튼 상태 초기화
  $('checkBtn').textContent = '✅ 정답확인';
  $('checkBtn').disabled = false;
  $('checkBtn').onclick = checkAnswer;
}

async function saveWrong(problem, userAnswer, reason){
  await apiPost('/api/wrong-notes/append', {
    unitId: currentUnit?.unitId,
    difficulty: problem.difficulty,
    userAnswer,
    reason,
    problem
  });
}

function judge(problem, userInput){
  if(problem.answerType==='string'){
    const norm = (s)=>String(s).replace(/\s+/g,'').replace(/x|X/g,'×');
    return { ok: norm(userInput) === norm(problem.answer) };
  }
  const v = GenCore.parseNumber(userInput);
  if(v===null) return { ok:false, msg:'숫자로 입력해주세요. 예: -3, 2.5' };
  const ans = Number(problem.answer);
  const tol = Number(problem.tolerance||0);
  const ok = tol===0 ? (v===ans) : (Math.abs(v-ans)<=tol);
  return { ok, v, ans };
}

async function checkAnswer(){
  if(!practice) return;
  const p = practice.probs[practice.idx];
  const user = $('practiceAnswer').value.trim();
  if(!user){ $('practiceFeedback').textContent = '답을 입력하세요.'; return; }

  const r = judge(p, user);
  practice.total += 1;

  // 버튼 비활성화 (중복 클릭 방지)
  $('checkBtn').disabled = true;
  $('practiceAnswer').disabled = true;

  if(r.ok){
    practice.correct += 1;
    $('practiceFeedback').textContent = `✅ 정답!\n\n해설: ${p.explain}`;
    
    // 정답인 경우: 1.5초 후 자동으로 다음 문제
    if(practice.idx < practice.probs.length-1){
      setTimeout(() => {
        practice.idx += 1;
        showPractice();
        $('checkBtn').disabled = false;
        $('practiceAnswer').disabled = false;
      }, 1500);
    } else {
      // 마지막 문제 완료
      setTimeout(async () => {
        const sec = Math.round((Date.now()-practiceStart)/1000);
        await apiPost('/api/study-log/append', {
          mode: 'practice',
          unitId: currentUnit.unitId,
          difficulty: Number($('difficulty').value),
          total: practice.total,
          correct: practice.correct,
          seconds: sec,
          fixedDB: !!(fixedDB && fixedDB.meta?.unitId===currentUnit.unitId)
        });
        $('practiceFeedback').textContent = `🎉 연습 완료!\n정답: ${practice.correct}/${practice.total}\n시간: ${fmtTime(sec)}\n\n오답은 '오답' 탭에서 확인하세요.`;
        if(practiceTimerId) clearInterval(practiceTimerId);
        $('checkBtn').disabled = false;
        $('practiceAnswer').disabled = false;
      }, 1500);
    }
  } else {
    const msg = r.msg ? r.msg : `❌ 오답\n내 답: ${user}\n정답: ${p.answer}${p.unitLabel?(' '+p.unitLabel):''}`;
    $('practiceFeedback').textContent = msg + `\n\n힌트: ${p.hint}\n해설: ${p.explain}`;
    await saveWrong(p, user, '채점 오답');
    
    // 오답인 경우: "다음 문제" 버튼으로 변경
    if(practice.idx < practice.probs.length-1){
      $('checkBtn').textContent = '➡️ 다음 문제';
      $('checkBtn').disabled = false;
      $('checkBtn').onclick = () => {
        practice.idx += 1;
        showPractice();
        $('checkBtn').textContent = '✅ 정답확인';
        $('checkBtn').onclick = checkAnswer;
        $('practiceAnswer').disabled = false;
      };
    } else {
      // 마지막 문제 완료
      setTimeout(async () => {
        const sec = Math.round((Date.now()-practiceStart)/1000);
        await apiPost('/api/study-log/append', {
          mode: 'practice',
          unitId: currentUnit.unitId,
          difficulty: Number($('difficulty').value),
          total: practice.total,
          correct: practice.correct,
          seconds: sec,
          fixedDB: !!(fixedDB && fixedDB.meta?.unitId===currentUnit.unitId)
        });
        $('practiceFeedback').textContent = `🎉 연습 완료!\n정답: ${practice.correct}/${practice.total}\n시간: ${fmtTime(sec)}\n\n오답은 '오답' 탭에서 확인하세요.`;
        if(practiceTimerId) clearInterval(practiceTimerId);
        $('checkBtn').disabled = false;
        $('practiceAnswer').disabled = false;
      }, 1500);
    }
  }
}

function hint(){
  if(!practice) return;
  const p = practice.probs[practice.idx];
  $('practiceFeedback').textContent = `💡 힌트: ${p.hint}`;
}

function skip(){
  if(!practice) return;
  if(practice.idx < practice.probs.length-1){
    practice.idx += 1;
    showPractice();
  }
}

async function loadWrong(){
  const res = await apiGet('/api/wrong-notes');
  const list = res.data || [];
  const box = $('wrongList');
  box.innerHTML = '';
  if(list.length===0){
    box.innerHTML = '<div class="meta">오답이 없습니다.</div>';
    $('wrongDetail').textContent = '오답이 없습니다.';
    return;
  }
  list.forEach((w) => {
    const div = document.createElement('div');
    div.className = 'item';
    const small = w.problem?.question?.slice(0,60) || '';
    div.innerHTML = `<div><b>${w.unitId||'(unitId 없음)'}</b></div><div class="small">난이도 ${w.difficulty} · 내답: ${w.userAnswer}</div><div class="small">${small}...</div>`;
    div.addEventListener('click', ()=>{
      $('wrongDetail').innerHTML = `
        <div class="kline"><b>단원ID</b>: ${w.unitId}</div>
        <div class="kline"><b>난이도</b>: ${w.difficulty}</div>
        <div class="kline"><b>문제</b>: ${w.problem.question}</div>
        <div class="kline"><b>내 답</b>: <code>${w.userAnswer}</code></div>
        <div class="kline"><b>정답</b>: <code>${w.problem.answer}${w.problem.unitLabel?(' '+w.problem.unitLabel):''}</code></div>
        <div class="kline"><b>힌트</b>: ${w.problem.hint}</div>
        <div class="kline"><b>해설</b>: ${w.problem.explain}</div>
        <div class="kline"><span class="small">저장 시각: ${w.createdAt}</span></div>
      `;
    });
    box.appendChild(div);
  });
}

async function clearWrong(){
  if(!confirm('오답을 모두 삭제할까요?')) return;
  await apiPost('/api/wrong-notes/clear', {});
  await loadWrong();
}

function startExam(){
  if(!currentUnit){ alert('먼저 단원을 선택하세요.'); return; }
  const difficulty = Number($('difficulty').value);
  const count = Number($('examCount').value);

  const pool = getPracticePool(currentUnit.unitId, difficulty);
  const probs = sampleFromPool(pool, count);

  exam = { probs, answers: {} };
  if(exam.probs.length===0){ alert('이 단원/난이도에 템플릿/DB가 없습니다.'); return; }

  $('examMeta').textContent = `${currentUnit.unitId} | 난이도 ${difficulty} | ${count}문항`;
  $('examResult').textContent = '';

  const sheet = $('examSheet');
  sheet.innerHTML = '';
  exam.probs.forEach((p, idx)=>{
    const wrap = document.createElement('div');
    wrap.className = 'exam-q';
    wrap.innerHTML = `
      <div class="q"><b>${idx+1}.</b> ${p.question}</div>
      <div>
        <input data-idx="${idx}" placeholder="답 입력" />
        <span class="unit">${p.unitLabel||''}</span>
      </div>
    `;
    sheet.appendChild(wrap);
  });
}

async function submitExam(){
  if(!exam){ alert('시험을 먼저 시작하세요.'); return; }
  const inputs = $('examSheet').querySelectorAll('input[data-idx]');
  let correct = 0;
  const wrongs = [];

  inputs.forEach((inp)=>{
    const idx = Number(inp.dataset.idx);
    const user = inp.value.trim();
    const p = exam.probs[idx];
    const r = judge(p, user);
    if(user && r.ok){
      correct += 1;
      inp.style.borderColor = 'rgba(52,211,153,.65)';
    } else {
      inp.style.borderColor = 'rgba(251,113,133,.55)';
      wrongs.push({p, user});
    }
  });

  const total = exam.probs.length;
  $('examResult').textContent = `채점 완료!\n정답: ${correct}/${total}\n오답 저장: ${wrongs.length}개`;

  for(const w of wrongs){
    await saveWrong(w.p, w.user || '(미입력)', '모의고사 오답');
  }

  await apiPost('/api/study-log/append', {
    mode: 'exam',
    unitId: currentUnit.unitId,
    difficulty: Number($('difficulty').value),
    total,
    correct,
    seconds: null,
    fixedDB: !!(fixedDB && fixedDB.meta?.unitId===currentUnit.unitId)
  });
}

async function buildAndSaveFixedDB(){
  if(!currentUnit){ alert('먼저 단원을 선택하세요.'); return; }
  const perDifficulty = 2000;
  $('fixedDbHint').textContent = '고정 DB: 생성 중... (조금만 기다려줘)';

  const db = await Generator.buildFixedDBForUnitId(currentUnit.unitId, perDifficulty);
  const res = await apiPost('/api/fixed-db/save', { unitId: currentUnit.unitId, db });
  if(res.ok){
    fixedDB = db;
    updateFixedHint();
    alert('고정 DB 저장 완료! (data/fixed 폴더에 저장됩니다)');
  } else {
    alert('고정 DB 저장 실패: ' + (res.message||''));
    updateFixedHint();
  }
}

async function loadFixedDB(){
  if(!currentUnit){ alert('먼저 단원을 선택하세요.'); return; }
  const res = await apiGet('/api/fixed-db/get?unitId=' + encodeURIComponent(currentUnit.unitId));
  if(res.ok && res.exists){
    fixedDB = res.db;
    updateFixedHint();
    alert('고정 DB 불러오기 완료!');
  } else {
    fixedDB = null;
    updateFixedHint();
    alert('저장된 고정 DB가 없습니다. (먼저 생성/저장 해줘)');
  }
}

// === 부모 모드 ===
const PARENT_PASSWORD = '248530';
let parentLoggedIn = false;

function goHome(){
  setTab('concept');
  currentUnit = null;
  fixedDB = null;
  practice = null;
  exam = null;
  updateConcept();
  $('practiceQuestion').textContent = '연습을 시작하세요.';
  $('practiceFeedback').textContent = '';
  $('examSheet').innerHTML = '';
  $('examResult').textContent = '';
}

function parentLogin(){
  const pw = $('parentPassword').value.trim();
  if(pw === PARENT_PASSWORD){
    parentLoggedIn = true;
    $('parentLogin').style.display = 'none';
    $('parentDashboard').style.display = 'block';
    $('parentPassword').value = '';
    $('parentLoginError').textContent = '';
    loadParentStats();
  } else {
    $('parentLoginError').textContent = '❌ 비밀번호가 올바르지 않습니다.';
    $('parentPassword').value = '';
  }
}

function parentLogout(){
  parentLoggedIn = false;
  $('parentLogin').style.display = 'block';
  $('parentDashboard').style.display = 'none';
  $('parentPassword').value = '';
  $('parentLoginError').textContent = '';
}

async function loadParentStats(){
  try {
    const logRes = await apiGet('/api/study-log');
    const logs = logRes.data || [];
    const wrongRes = await apiGet('/api/wrong-notes');
    const wrongs = wrongRes.data || [];
    
    // 통계 계산
    const totalSessions = logs.length;
    const totalProblems = logs.reduce((sum, log) => sum + (log.total || 0), 0);
    const totalCorrect = logs.reduce((sum, log) => sum + (log.correct || 0), 0);
    const totalTime = logs.reduce((sum, log) => sum + (log.seconds || 0), 0);
    const totalWrong = wrongs.length;
    const accuracy = totalProblems > 0 ? Math.round((totalCorrect / totalProblems) * 100) : 0;
    
    // 최근 학습 시간
    const lastStudy = logs.length > 0 ? new Date(logs[0].createdAt).toLocaleString('ko-KR') : '없음';
    
    // 요약 통계 표시
    const summary = $('statsSummary');
    summary.innerHTML = `
      <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="font-size: 24px; font-weight: bold; color: #3b82f6;">${totalSessions}회</div>
        <div style="color: #6b7280; font-size: 14px; margin-top: 5px;">총 학습 세션</div>
      </div>
      <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="font-size: 24px; font-weight: bold; color: #10b981;">${totalProblems}문제</div>
        <div style="color: #6b7280; font-size: 14px; margin-top: 5px;">총 푼 문제</div>
      </div>
      <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="font-size: 24px; font-weight: bold; color: #8b5cf6;">${accuracy}%</div>
        <div style="color: #6b7280; font-size: 14px; margin-top: 5px;">정답률</div>
      </div>
      <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="font-size: 24px; font-weight: bold; color: #ef4444;">${totalWrong}문제</div>
        <div style="color: #6b7280; font-size: 14px; margin-top: 5px;">틀린 문제</div>
      </div>
      <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="font-size: 24px; font-weight: bold; color: #f59e0b;">${fmtTime(totalTime)}</div>
        <div style="color: #6b7280; font-size: 14px; margin-top: 5px;">총 학습 시간</div>
      </div>
      <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); grid-column: span 2;">
        <div style="font-size: 16px; font-weight: 600; color: #1f2937;">마지막 학습</div>
        <div style="color: #6b7280; font-size: 14px; margin-top: 5px;">${lastStudy}</div>
      </div>
    `;
    
    // 상세 학습 기록 표시
    const logList = $('studyLogList');
    if(logs.length === 0){
      logList.innerHTML = '<div style="text-align: center; color: #9ca3af; padding: 40px;">아직 학습 기록이 없습니다.</div>';
      return;
    }
    
    logList.innerHTML = logs.map(log => {
      const date = new Date(log.createdAt);
      const modeText = log.mode === 'practice' ? '📝 연습' : '📋 모의고사';
      const accuracy = log.total > 0 ? Math.round((log.correct / log.total) * 100) : 0;
      const timeText = log.seconds ? fmtTime(log.seconds) : '-';
      
      return `
        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
            <div>
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px;">
                ${modeText} | ${log.unitId || '단원 정보 없음'}
              </div>
              <div style="font-size: 12px; color: #9ca3af;">
                ${date.toLocaleString('ko-KR')}
              </div>
            </div>
            <div style="background: ${accuracy >= 80 ? '#d1fae5' : accuracy >= 60 ? '#fef3c7' : '#fee2e2'}; 
                        color: ${accuracy >= 80 ? '#065f46' : accuracy >= 60 ? '#92400e' : '#991b1b'};
                        padding: 4px 12px; border-radius: 12px; font-weight: 600; font-size: 14px;">
              ${accuracy}%
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; font-size: 14px;">
            <div>
              <span style="color: #6b7280;">난이도:</span>
              <span style="font-weight: 600; margin-left: 5px;">${log.difficulty || '-'}</span>
            </div>
            <div>
              <span style="color: #6b7280;">정답:</span>
              <span style="color: #10b981; font-weight: 600; margin-left: 5px;">${log.correct || 0}/${log.total || 0}</span>
            </div>
            <div>
              <span style="color: #6b7280;">오답:</span>
              <span style="color: #ef4444; font-weight: 600; margin-left: 5px;">${(log.total || 0) - (log.correct || 0)}</span>
            </div>
            <div>
              <span style="color: #6b7280;">시간:</span>
              <span style="font-weight: 600; margin-left: 5px;">${timeText}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
  } catch(err){
    console.error('학습 통계 로딩 실패:', err);
    alert('학습 통계를 불러오는데 실패했습니다.');
  }
}

async function init(){
  SYLLABUS = await TreeUI.loadJson('/data/syllabus.json');
  CONCEPTS = await TreeUI.loadJson('/data/concepts.json');

  TreeUI.renderTree(SYLLABUS, (unit)=>{
    currentUnit = unit;
    fixedDB = null;
    updateConcept();
  });

  $('tabs').addEventListener('click', (e)=>{
    const btn = e.target.closest('.tab');
    if(!btn) return;
    setTab(btn.dataset.tab);
    if(btn.dataset.tab==='wrong') loadWrong();
    if(btn.dataset.tab==='parent' && parentLoggedIn) loadParentStats();
  });

  $('homeBtn').addEventListener('click', goHome);
  $('startPracticeBtn').addEventListener('click', startPractice);
  $('openExamBtn').addEventListener('click', ()=>setTab('exam'));

  $('checkBtn').addEventListener('click', checkAnswer);
  $('practiceAnswer').addEventListener('keydown', (e)=>{ if(e.key==='Enter') checkAnswer(); });
  $('hintBtn').addEventListener('click', hint);
  $('skipBtn').addEventListener('click', skip);

  $('refreshWrongBtn').addEventListener('click', loadWrong);
  $('clearWrongBtn').addEventListener('click', clearWrong);

  $('startExamBtn').addEventListener('click', startExam);
  $('submitExamBtn').addEventListener('click', submitExam);

  $('saveFixedBtn').addEventListener('click', buildAndSaveFixedDB);
  $('loadFixedBtn').addEventListener('click', loadFixedDB);

  // 부모 모드
  $('parentLoginBtn').addEventListener('click', parentLogin);
  $('parentPassword').addEventListener('keydown', (e)=>{ if(e.key==='Enter') parentLogin(); });
  $('parentLogoutBtn').addEventListener('click', parentLogout);
  $('refreshStatsBtn').addEventListener('click', loadParentStats);

  updateConcept();
}

init().catch(err=>{
  console.error(err);
  alert('초기화 실패: ' + err.message);
});
