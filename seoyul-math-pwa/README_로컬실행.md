# 서율이 중1 수학 PWA - 로컬 실행 가이드

## 📦 설치 방법

### 1️⃣ 필수 프로그램 설치

**Node.js 설치** (필수!)
- 다운로드: https://nodejs.org/
- LTS 버전 선택 (예: 20.x)
- 설치 후 확인:
  ```bash
  node -v
  npm -v
  ```

### 2️⃣ 프로젝트 설치

**압축 해제**
1. seoyul-math-pwa.zip 압축 해제
2. 해제된 폴더로 이동

**의존성 설치**
```bash
npm install
```

## 🚀 실행 방법

### Windows 사용자

**방법 1: BAT 파일 실행 (가장 쉬움!)**
```
Start_Seoyul_Math_PWA.bat 더블클릭
```

**방법 2: 명령 프롬프트**
```bash
cmd 열고 (Shift + 우클릭 → "여기서 명령 창 열기")
node server.js
```

### Mac/Linux 사용자

```bash
node server.js
```

### 브라우저 접속

```
http://localhost:5173
```

자동으로 브라우저가 열립니다!

## 📊 주요 기능

### 1. 문제 풀기
- 16개 단원 선택
- 난이도 1/2/3 선택
- 문제 풀이 시작!

### 2. 고정 DB 생성 (단원당 2000문제)
1. 좌측 하단 "💾 단원DB 생성/저장" 클릭
2. 저장 위치: `data/fixed/` 폴더
3. 다음 실행 시 빠르게 로드!

### 3. 오답 노트
- 틀린 문제 자동 저장
- 언제든 다시 풀기

### 4. 모의고사
- 10문제 또는 20문제
- 제한 시간 설정 가능

## 🎯 현재 문제 통계

- **전체 템플릿**: 2,215개
  - 기존 템플릿: 73개
  - 외부 DB: 1,820개 (고품질 중1 수준)
  - 난이도 3: 322개 (최상위 내신 만점용)

- **난이도별**:
  - 난이도 1: 73개 (기본 개념)
  - 난이도 2: 1,820개 (중급)
  - 난이도 3: 322개 (고급, 단원당 20개)

- **16개 단원 전체 커버**: ✅
  - 1-1학기: 수와 연산, 문자와 식 (9개 단원)
  - 1-2학기: 기하 (7개 단원)

## 🔧 문제 발생 시

### 서버가 안 열릴 때
```bash
# 포트가 이미 사용 중인 경우
netstat -ano | findstr :5173
taskkill /PID [프로세스번호] /F
```

### npm install 오류
```bash
# npm 캐시 삭제 후 재설치
npm cache clean --force
npm install
```

### 문제가 안 나올 때
1. F5 새로고침
2. 브라우저 캐시 삭제 (Ctrl+Shift+Delete)
3. 다시 접속

## 📂 프로젝트 구조

```
seoyul-math-pwa/
├── index.html              # 메인 페이지
├── server.js               # 로컬 서버
├── package.json            # 의존성 정보
├── css/                    # 스타일
│   └── app.css
├── js/                     # JavaScript
│   ├── tree.js            # 단원 트리
│   └── generator/         # 문제 생성
│       ├── core.js
│       ├── templates_1_1.js
│       ├── templates_1_2.js
│       ├── templates_external.js (1,820개!)
│       ├── templates_hard.js
│       ├── templates_hard_more.js
│       ├── templates_hard_all_units.js (228개!)
│       └── generate.js
├── data/                   # 데이터
│   ├── curriculum.json    # 교육과정
│   └── fixed/             # 고정 DB (자동 생성)
└── README_로컬실행.md     # 이 파일!
```

## 🎓 사용 팁

1. **처음 시작할 때**
   - 한 단원씩 차근차근 풀기
   - 난이도 1부터 시작 추천

2. **실력 향상**
   - 난이도 2로 충분히 연습
   - 난이도 3은 내신 만점용

3. **시험 대비**
   - 고정 DB 생성해두기 (빠른 로딩)
   - 오답 노트 적극 활용
   - 모의고사로 실전 감각

4. **문제 추가하고 싶다면**
   - GitHub에서 최신 버전 받기
   - 또는 직접 템플릿 추가 가능

## 🌐 온라인 버전

로컬 말고 온라인으로도 사용 가능:
- GitHub Pages: (배포 후 URL)
- 어디서나 접속 가능!

## 📝 라이선스

교육용 무료 사용 가능

## 💬 문의

문제가 있거나 기능 추가 요청:
- GitHub Issues
- 또는 개발자에게 문의

---

**즐거운 수학 공부 되세요!** 📚✨
