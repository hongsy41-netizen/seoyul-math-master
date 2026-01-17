// 외부 DB 문제를 16개 단원에 골고루 재분배
const fs = require('fs');

// 원본 데이터 로드
const rawData = fs.readFileSync('./temp_math_db/public_mwp_data.json', 'utf-8');
// BOM 제거
const cleanData = rawData.replace(/^\uFEFF/, '');
const data = JSON.parse(cleanData);

// 단원별 매핑 규칙
const unitMapping = {
  '산술연산': [
    'm1-1-1-II-2',    // 정수와 유리수의 계산
    'm1-1-1-III-1',   // 문자의 사용과 식
    'm1-1-1-III-2',   // 일차식의 계산
    'm1-1-1-III-5'    // 일차방정식의 활용
  ],
  '순서정하기': [
    'm1-1-1-II-1',    // 정수와 유리수
    'm1-1-1-I-1'      // 소인수분해
  ],
  '조합하기': [
    'm1-1-1-I-2',     // 최대공약수와 최소공배수
    'm1-1-2-II-1'     // 다각형
  ],
  '수찾기1': [
    'm1-1-1-III-1',   // 문자의 사용과 식
    'm1-1-1-III-4'    // 일차방정식의 풀이
  ],
  '수찾기2': [
    'm1-1-1-III-2',   // 일차식의 계산
    'm1-1-1-III-3'    // 방정식과 그 해
  ],
  '수찾기3': [
    'm1-1-1-III-3',   // 방정식과 그 해
    'm1-1-1-III-4'    // 일차방정식의 풀이
  ],
  '크기비교': [
    'm1-1-1-II-1',    // 정수와 유리수
    'm1-1-1-I-2'      // 최대공약수와 최소공배수
  ],
  '도형산술': [
    'm1-1-2-I-1',     // 기본 도형
    'm1-1-2-I-2',     // 위치 관계
    'm1-1-2-I-3',     // 작도와 합동
    'm1-1-2-II-1',    // 다각형
    'm1-1-2-II-2',    // 원과 부채꼴
    'm1-1-2-III-1',   // 다면체와 회전체
    'm1-1-2-III-2'    // 입체도형의 겉넓이와 부피
  ]
};

// 유형별로 문제 분류
const problemsByType = {};
Object.keys(data).forEach(key => {
  const problem = data[key];
  const type = problem.class;
  if (!problemsByType[type]) {
    problemsByType[type] = [];
  }
  problemsByType[type].push({
    id: key,
    ...problem
  });
});

// 통계
console.log('='.repeat(80));
console.log('📊 외부 DB 문제 유형별 통계');
console.log('='.repeat(80));
Object.keys(problemsByType).forEach(type => {
  console.log(`${type}: ${problemsByType[type].length}개`);
});

// 단원별로 재분배
const templates = [];
let templateId = 1;

Object.keys(unitMapping).forEach(type => {
  const problems = problemsByType[type] || [];
  const units = unitMapping[type];
  
  console.log(`\n${type} (${problems.length}개) → ${units.length}개 단원에 분배`);
  
  problems.forEach((problem, idx) => {
    // 순환 배치
    const unitId = units[idx % units.length];
    
    // 난이도 결정
    let difficulty = 1;
    if (problem.equation && problem.equation.includes('*')) {
      difficulty = 2;
    }
    if (problem.equation && (problem.equation.includes('/') || problem.equation.includes('^'))) {
      difficulty = 3;
    }
    
    templates.push({
      id: templateId++,
      key: `external_${type}_${problem.id}`,
      unitId: unitId,
      difficulty: difficulty,
      tags: [type, '외부DB'],
      question: problem.question,
      answer: problem.answer,
      equation: problem.equation || 'none'
    });
    
    if (idx < 3) {
      console.log(`  문제 ${problem.id} → ${unitId} (난이도 ${difficulty})`);
    }
  });
});

console.log(`\n총 ${templates.length}개 템플릿 생성`);

// 단원별 통계
const byUnit = {};
templates.forEach(t => {
  if (!byUnit[t.unitId]) byUnit[t.unitId] = 0;
  byUnit[t.unitId]++;
});

console.log('\n📈 단원별 분포:');
Object.keys(byUnit).sort().forEach(unitId => {
  console.log(`  ${unitId}: ${byUnit[unitId]}개`);
});

// templates_external.js 생성
let output = '// 외부 DB에서 가져온 실제 문제들 (16개 단원에 골고루 재분배)\n';
output += 'const T11_external = [];\n\n';

templates.forEach(tpl => {
  const questionPreview = tpl.question.substring(0, 50).replace(/`/g, '\\`');
  output += `\n// [${tpl.tags[0]}] ${questionPreview}...\n`;
  output += 'T11_external.push({\n';
  output += `  key:'${tpl.key}',\n`;
  output += `  unitId:'${tpl.unitId}',\n`;
  output += `  difficulty:${tpl.difficulty},\n`;
  output += `  tags:${JSON.stringify(tpl.tags)},\n`;
  output += '  gen(){\n';
  output += '    return {\n';
  output += '      type:\'short\',\n';
  output += `      question:\`${tpl.question.replace(/`/g, '\\`')}\`,\n`;
  output += `      answer:'${tpl.answer}',\n`;
  output += '      answerType:\'number\',\n';
  output += '      tolerance:0,\n';
  output += '      unitLabel:\'\',\n';
  output += '      hint:\'문제를 차근차근 읽고 식을 세워보세요.\',\n';
  output += `      explain:\`정답: ${tpl.answer}, 식: ${tpl.equation}\`\n`;
  output += '    };\n';
  output += '  }\n';
  output += '});\n';
});

output += '\nwindow.Templates_external = T11_external;\n';

fs.writeFileSync('./js/generator/templates_external.js', output, 'utf-8');

console.log('\n✅ templates_external.js 재생성 완료!');
console.log('='.repeat(80));
