// 외부 DB 통합 테스트
console.log('='.repeat(60));
console.log('외부 DB 통합 테스트');
console.log('='.repeat(60));

// 파일 로드
require('./js/generator/core.js');
require('./js/generator/templates_1_1.js');
require('./js/generator/templates_1_2.js');
require('./js/generator/templates_external.js');
require('./js/generator/generate.js');

const allTemplates = window.Generator.allTemplates();

console.log(`\n총 템플릿 수: ${allTemplates.length}개`);

// 외부 DB 템플릿만 필터링
const externalTemplates = allTemplates.filter(t => t.tags && t.tags.includes('외부DB'));
console.log(`외부 DB 템플릿: ${externalTemplates.length}개`);

// 단원별 통계
const byUnit = {};
externalTemplates.forEach(t => {
  if (!byUnit[t.unitId]) byUnit[t.unitId] = { 1: 0, 2: 0, 3: 0 };
  byUnit[t.unitId][t.difficulty]++;
});

console.log('\n📊 단원별 외부 DB 문제 수:');
Object.keys(byUnit).sort().forEach(unitId => {
  const counts = byUnit[unitId];
  console.log(`  ${unitId}: 난이도1=${counts[1]}, 난이도2=${counts[2]}, 난이도3=${counts[3]}, 총=${counts[1]+counts[2]+counts[3]}개`);
});

// 샘플 문제 3개 생성
console.log('\n🎯 샘플 문제 3개:');
for (let i = 0; i < 3; i++) {
  const tpl = externalTemplates[Math.floor(Math.random() * externalTemplates.length)];
  const problem = tpl.gen();
  console.log(`\n[문제 ${i+1}] (${tpl.unitId}, 난이도${tpl.difficulty})`);
  console.log(`Q: ${problem.question}`);
  console.log(`A: ${problem.answer}`);
}

console.log('\n' + '='.repeat(60));
console.log('✅ 외부 DB 통합 완료!');
console.log('='.repeat(60));
