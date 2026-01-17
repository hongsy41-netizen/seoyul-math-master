// Generator v2: works with stable unitId

function allTemplates(){
  return [...(window.Templates_1_1||[]), ...(window.Templates_1_2||[])];
}

function genProblemsByUnitId(unitId, difficulty, count){
  const tpls = allTemplates().filter(t => t.unitId === unitId && t.difficulty === difficulty);
  if(tpls.length === 0) return [];
  const probs = [];
  for(let i=0;i<count;i++){
    const tpl = GenCore.choice(tpls);
    const p = tpl.gen();
    probs.push({
      id: 'P' + Date.now() + '_' + i,
      unitId,
      difficulty,
      tags: tpl.tags || [],
      ...p
    });
  }
  return probs;
}

function genExam(unitId, difficulty, count){
  return genProblemsByUnitId(unitId, difficulty, count);
}

async function buildFixedDBForUnitId(unitId, perDifficulty=2000){
  const db = { meta: { unitId, perDifficulty, createdAt: new Date().toISOString() }, problems: { 1:[], 2:[], 3:[] } };
  [1,2,3].forEach(d=>{
    db.problems[d] = genProblemsByUnitId(unitId, d, perDifficulty);
  });
  return db;
}

window.Generator = { allTemplates, genProblemsByUnitId, genExam, buildFixedDBForUnitId };
