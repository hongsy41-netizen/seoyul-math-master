// Node.js 환경에서 템플릿 통계 확인
const fs = require('fs');
const vm = require('vm');

// GenCore 로드
const coreCode = fs.readFileSync('./js/generator/core.js', 'utf8');
const coreContext = { window: {} };
vm.runInContext(coreCode, vm.createContext(coreContext));
const GenCore = coreContext.window.GenCore;

// Templates 로드
const t1Code = fs.readFileSync('./js/generator/templates_1_1.js', 'utf8');
const t1Context = { window: {}, GenCore };
vm.runInContext(t1Code, vm.createContext(t1Context));
const T11 = t1Context.window.Templates_1_1;

const t2Code = fs.readFileSync('./js/generator/templates_1_2.js', 'utf8');
const t2Context = { window: {}, GenCore };
vm.runInContext(t2Code, vm.createContext(t2Context));
const T12 = t2Context.window.Templates_1_2;

const allTemplates = [...T11, ...T12];

// 단원 목록
const syllabus = {
  "m1-1-1-I-1": "소인수분해",
  "m1-1-1-I-2": "최대공약수와 최소공배수",
  "m1-1-1-II-1": "정수와 유리수",
  "m1-1-1-II-2": "정수와 유리수의 계산",
  "m1-1-1-III-1": "문자의 사용과 식",
  "m1-1-1-III-2": "일차식의 계산",
  "m1-1-1-III-3": "방정식과 그 해",
  "m1-1-1-III-4": "일차방정식의 풀이",
  "m1-1-1-III-5": "일차방정식의 활용",
  "m1-1-2-I-1": "기본 도형",
  "m1-1-2-I-2": "위치 관계",
  "m1-1-2-I-3": "작도와 합동",
  "m1-1-2-II-1": "다각형",
  "m1-1-2-II-2": "원과 부채꼴",
  "m1-1-2-III-1": "다면체와 회전체",
  "m1-1-2-III-2": "입체도형의 겉넓이와 부피"
};

// 통계 수집
const stats = {};
Object.keys(syllabus).forEach(unitId => {
  stats[unitId] = {
    title: syllabus[unitId],
    1: 0, 2: 0, 3: 0,
    total: 0,
    templates: { 1: [], 2: [], 3: [] }
  };
});

allTemplates.forEach(tpl => {
  if (stats[tpl.unitId]) {
    stats[tpl.unitId][tpl.difficulty]++;
    stats[tpl.unitId].total++;
    stats[tpl.unitId].templates[tpl.difficulty].push(tpl.key);
  }
});

// 결과 출력
console.log('\n========================================');
console.log('📊 단원별 문제 템플릿 통계');
console.log('========================================\n');

let totalMissing = 0;
let missingDetails = [];

Object.keys(stats).forEach(unitId => {
  const s = stats[unitId];
  const missing = [];
  if (s[1] === 0) missing.push('난이도1');
  if (s[2] === 0) missing.push('난이도2');
  if (s[3] === 0) missing.push('난이도3');
  
  const status = missing.length === 0 ? '✅' : '❌';
  
  console.log(`${status} ${unitId}: ${s.title}`);
  console.log(`   난이도1: ${s[1]}개 | 난이도2: ${s[2]}개 | 난이도3: ${s[3]}개 | 총: ${s.total}개`);
  
  if (missing.length > 0) {
    console.log(`   ⚠️  부족: ${missing.join(', ')}`);
    missingDetails.push({ unitId, title: s.title, missing });
    totalMissing++;
  }
  
  // 템플릿 키 출력
  if (s[1] > 0) console.log(`   [난이도1] ${s.templates[1].join(', ')}`);
  if (s[2] > 0) console.log(`   [난이도2] ${s.templates[2].join(', ')}`);
  if (s[3] > 0) console.log(`   [난이도3] ${s.templates[3].join(', ')}`);
  
  console.log('');
});

console.log('========================================');
console.log(`총 ${Object.keys(stats).length}개 단원 중 ${totalMissing}개 단원에 문제 부족`);
console.log('========================================\n');

if (missingDetails.length > 0) {
  console.log('⚠️  문제가 부족한 단원:');
  missingDetails.forEach(m => {
    console.log(`   - ${m.unitId} (${m.title}): ${m.missing.join(', ')}`);
  });
  console.log('');
}

// 전체 통계
const totalT1 = allTemplates.filter(t => t.difficulty === 1).length;
const totalT2 = allTemplates.filter(t => t.difficulty === 2).length;
const totalT3 = allTemplates.filter(t => t.difficulty === 3).length;

console.log('📈 전체 통계:');
console.log(`   총 템플릿 수: ${allTemplates.length}개`);
console.log(`   난이도1: ${totalT1}개`);
console.log(`   난이도2: ${totalT2}개`);
console.log(`   난이도3: ${totalT3}개`);
