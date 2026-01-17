// 고품질 문제만 필터링 (중1 수준에 맞는 문제)
const fs = require('fs');

// 원본 데이터 로드
const rawData = fs.readFileSync('./temp_math_db/public_mwp_data.json', 'utf-8');
const cleanData = rawData.replace(/^\uFEFF/, '');
const data = JSON.parse(cleanData);

// 중1 수준 필터링 기준
function isMiddleSchoolLevel(problem) {
  const q = problem.question;
  const eq = problem.equation || '';
  
  // 제외할 패턴 (초등 수준)
  const excludePatterns = [
    /가장 작은 수를 고르시오/,
    /중 더 큰 수는/,
    /중 더 작은 수는/,
    /한 변이 \d+cm입니다\. 둘레는/,
    /\d+명에게.*장씩/,
    /친구.*명/,
    /구슬.*개/,
    /연필.*자루/,
    /붙임 딱지/,
    /1분은 60초/,
    /몇 개입니까/,
    /몇 자루/,
    /몇 장/,
    /1시간은 60분/,
  ];
  
  // 초등 수준 제외
  for (let pattern of excludePatterns) {
    if (pattern.test(q)) {
      return false;
    }
  }
  
  // 너무 단순한 식 제외
  if (eq.match(/^\d+[\+\-\*\/]\d+$/)) {
    return false; // 예: 9*3, 14+3
  }
  
  // 제곱근 없는 단순 제곱 제외
  if (eq === '48^0.5') {
    return false;
  }
  
  // 10 이하의 숫자만 있는 문제 제외
  const numbers = q.match(/\d+/g);
  if (numbers && numbers.every(n => parseInt(n) <= 10)) {
    return false;
  }
  
  return true;
}

// 고품질 문제만 필터링
const qualityProblems = {};
let filteredCount = 0;
let removedCount = 0;

Object.keys(data).forEach(key => {
  const problem = data[key];
  if (isMiddleSchoolLevel(problem)) {
    qualityProblems[key] = problem;
    filteredCount++;
  } else {
    removedCount++;
  }
});

console.log('='.repeat(80));
console.log('🔍 문제 품질 필터링');
console.log('='.repeat(80));
console.log(`원본 문제 수: ${Object.keys(data).length}개`);
console.log(`필터링 후: ${filteredCount}개`);
console.log(`제거된 문제: ${removedCount}개`);
console.log(`필터링 비율: ${((filteredCount / Object.keys(data).length) * 100).toFixed(1)}%`);

// 유형별 통계
const byType = {};
Object.values(qualityProblems).forEach(p => {
  if (!byType[p.class]) byType[p.class] = 0;
  byType[p.class]++;
});

console.log('\n📊 유형별 남은 문제:');
Object.keys(byType).sort().forEach(type => {
  console.log(`  ${type}: ${byType[type]}개`);
});

// 샘플 3개
console.log('\n🎯 필터링 후 샘플 문제:');
const samples = Object.values(qualityProblems).slice(0, 5);
samples.forEach((p, i) => {
  console.log(`\n[샘플 ${i+1}] ${p.class}`);
  console.log(`Q: ${p.question.substring(0, 80)}...`);
  console.log(`A: ${p.answer}`);
});

// 고품질 문제만 저장
fs.writeFileSync(
  './temp_math_db/quality_problems.json',
  JSON.stringify(qualityProblems, null, 2),
  'utf-8'
);

console.log('\n✅ quality_problems.json 생성 완료!');
console.log('='.repeat(80));
