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
  $('practiceAnswer').focus();
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

  if(r.ok){
    practice.correct += 1;
    $('practiceFeedback').textContent = `✅ 정답!\n\n해설: ${p.explain}`;
  } else {
    const msg = r.msg ? r.msg : `❌ 오답\n내 답: ${user}\n정답: ${p.answer}${p.unitLabel?(' '+p.unitLabel):''}`;
    $('practiceFeedback').textContent = msg + `\n\n힌트: ${p.hint}\n해설: ${p.explain}`;
    await saveWrong(p, user, '채점 오답');
  }

  if(practice.idx < practice.probs.length-1){
    practice.idx += 1;
    setTimeout(showPractice, 200);
  } else {
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
  });

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

  updateConcept();
}

init().catch(err=>{
  console.error(err);
  alert('초기화 실패: ' + err.message);
});
