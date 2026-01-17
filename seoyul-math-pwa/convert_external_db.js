const fs = require('fs');

// 외부 DB 로드
const rawData = fs.readFileSync('temp_math_db/public_mwp_data.json', 'utf-8');
const externalProblems = JSON.parse(rawData.replace(/^\uFEFF/, '')); // BOM 제거

console.log(`총 ${Object.keys(externalProblems).length}개 문제 로드됨`);

// 문제 분류
const classified = {
  '산술연산': [],
  '방정식': [],
  '비율': [],
  '기하': [],
  '문장제': []
};

Object.values(externalProblems).forEach(prob => {
  const cls = prob.class || '기타';
  if(!classified[cls]) classified[cls] = [];
  classified[cls].push(prob);
});

console.log('\n문제 유형별 개수:');
Object.keys(classified).forEach(cls => {
  console.log(`  ${cls}: ${classified[cls].length}개`);
});

// 중1 수학에 맞는 문제 필터링 및 변환
const convertedProblems = [];
const unitMapping = {
  '산술연산': 'm1-1-1-II-2', // 정수와 유리수의 계산
  '방정식': 'm1-1-1-III-5',   // 일차방정식의 활용
  '비율': 'm1-1-1-III-5',      // 일차방정식의 활용
  '문장제': 'm1-1-1-III-5'     // 일차방정식의 활용
};

let templateCode = `// 외부 DB에서 가져온 실제 문제들
const T11_external = [];

`;

Object.entries(classified).forEach(([cls, problems]) => {
  const unitId = unitMapping[cls] || 'm1-1-1-III-5';
  
  problems.slice(0, 50).forEach((prob, idx) => { // 각 유형당 50개씩
    // 난이도 자동 판단 (문제 길이와 방정식 복잡도 기반)
    let difficulty = 1;
    if(prob.equation && prob.equation.length > 10) difficulty = 2;
    if(prob.question.length > 80 || (prob.equation && prob.equation.includes('/'))){
      difficulty = 3;
    }
    
    templateCode += `
// [${cls}] ${prob.question.substring(0, 30)}...
T11_external.push({
  key:'external_${cls}_${idx+1}',
  unitId:'${unitId}',
  difficulty:${difficulty},
  tags:['${cls}','외부DB'],
  gen(){
    return {
      type:'short',
      question:\`${prob.question.replace(/`/g, '\\`')}\`,
      answer:'${prob.answer}',
      answerType:'${isNaN(prob.answer) ? 'string' : 'number'}',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:\`정답: ${prob.answer}${prob.equation ? `, 식: ${prob.equation}` : ''}\`
    };
  }
});
`;
  });
});

templateCode += `
window.Templates_1_1_External = T11_external;
`;

// 파일 저장
fs.writeFileSync('js/generator/templates_external.js', templateCode);

console.log(`\n✅ 변환 완료!`);
console.log(`   파일: js/generator/templates_external.js`);
console.log(`   총 템플릿 수: ${templateCode.match(/T11_external\.push/g)?.length || 0}개`);
