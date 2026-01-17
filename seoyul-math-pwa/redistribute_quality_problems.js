// 고품질 문제만 사용하여 템플릿 재생성
const fs = require('fs');

const qualityProblems = JSON.parse(
  fs.readFileSync('./temp_math_db/quality_problems.json', 'utf-8')
);

const unitMapping = {
  '산술연산': ['m1-1-1-II-2', 'm1-1-1-III-1', 'm1-1-1-III-2', 'm1-1-1-III-5'],
  '순서정하기': ['m1-1-1-II-1', 'm1-1-1-I-1'],
  '조합하기': ['m1-1-1-I-2', 'm1-1-2-II-1'],
  '수찾기1': ['m1-1-1-III-1', 'm1-1-1-III-4'],
  '수찾기2': ['m1-1-1-III-2', 'm1-1-1-III-3'],
  '수찾기3': ['m1-1-1-III-3', 'm1-1-1-III-4'],
  '크기비교': ['m1-1-1-II-1', 'm1-1-1-I-2'],
  '도형산술': ['m1-1-2-I-1', 'm1-1-2-I-2', 'm1-1-2-I-3', 'm1-1-2-II-1', 'm1-1-2-II-2', 'm1-1-2-III-1', 'm1-1-2-III-2']
};

const problemsByType = {};
Object.keys(qualityProblems).forEach(key => {
  const problem = qualityProblems[key];
  const type = problem.class;
  if (!problemsByType[type]) problemsByType[type] = [];
  problemsByType[type].push({ id: key, ...problem });
});

console.log('='.repeat(80));
console.log('📊 고품질 문제 재분배');
console.log('='.repeat(80));

const templates = [];
let templateId = 1;

Object.keys(unitMapping).forEach(type => {
  const problems = problemsByType[type] || [];
  const units = unitMapping[type];
  
  console.log(`${type} (${problems.length}개) → ${units.length}개 단원`);
  
  problems.forEach((problem, idx) => {
    const unitId = units[idx % units.length];
    let difficulty = 2;
    const eq = problem.equation || '';
    
    if (eq.includes('/') || eq.includes('^') || eq.includes('(') || eq.match(/[\*\+\-]{2,}/)) {
      difficulty = 3;
    } else if (eq.match(/^\d+[\+\-]\d+$/) && !eq.includes('*')) {
      difficulty = 1;
    }
    
    templates.push({
      id: templateId++,
      key: `external_${type}_${problem.id}`,
      unitId: unitId,
      difficulty: difficulty,
      tags: [type, '외부DB', '고품질'],
      question: problem.question,
      answer: problem.answer,
      equation: problem.equation || 'none'
    });
  });
});

console.log(`\n총 ${templates.length}개 고품질 템플릿 생성`);

const byUnit = {};
templates.forEach(t => {
  if (!byUnit[t.unitId]) byUnit[t.unitId] = {1:0, 2:0, 3:0};
  byUnit[t.unitId][t.difficulty]++;
});

console.log('\n📈 단원별 분포:');
Object.keys(byUnit).sort().forEach(unitId => {
  const c = byUnit[unitId];
  const total = c[1] + c[2] + c[3];
  console.log(`  ${unitId}: 난이도1=${c[1]}, 2=${c[2]}, 3=${c[3]}, 총=${total}개`);
});

let output = '// 외부 DB 고품질 문제 (중1 수준)\n';
output += 'const T11_external = [];\n\n';

templates.forEach(tpl => {
  const qPrev = tpl.question.substring(0, 50).replace(/`/g, '').replace(/'/g, '');
  const qFull = tpl.question.replace(/`/g, '').replace(/'/g, '"');
  output += `\n// [${tpl.tags[0]}] ${qPrev}...\n`;
  output += 'T11_external.push({\n';
  output += `  key:"${tpl.key}",\n`;
  output += `  unitId:"${tpl.unitId}",\n`;
  output += `  difficulty:${tpl.difficulty},\n`;
  output += `  tags:${JSON.stringify(tpl.tags)},\n`;
  output += '  gen(){\n';
  output += '    return {\n';
  output += `      type:"short",\n`;
  output += `      question:"${qFull}",\n`;
  output += `      answer:"${tpl.answer}",\n`;
  output += `      answerType:"number",\n`;
  output += `      tolerance:0.1,\n`;
  output += `      unitLabel:"",\n`;
  output += `      hint:"문제를 차근차근 읽고 식을 세워보세요.",\n`;
  output += `      explain:"정답: ${tpl.answer}, 식: ${tpl.equation}"\n`;
  output += '    };\n';
  output += '  }\n';
  output += '});\n';
});

output += '\nwindow.Templates_external = T11_external;\n';

fs.writeFileSync('./js/generator/templates_external.js', output, 'utf-8');

console.log('\n✅ templates_external.js 재생성 완료!');
console.log('='.repeat(80));
