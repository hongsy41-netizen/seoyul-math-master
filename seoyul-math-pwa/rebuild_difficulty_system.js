// 난이도 체계 완전 재구성
const fs = require('fs');

console.log('='.repeat(80));
console.log('🔄 난이도 체계 완전 재구성');
console.log('='.repeat(80));

// 1단계: 기존 templates_1_1.js 난이도 3 → 2로 변경
console.log('\n[1단계] 기존 템플릿 난이도 재조정...');

let t11 = fs.readFileSync('./js/generator/templates_1_1.js', 'utf-8');
let t12 = fs.readFileSync('./js/generator/templates_1_2.js', 'utf-8');

// 난이도 3을 모두 2로 변경
const count11 = (t11.match(/difficulty:3/g) || []).length;
const count12 = (t12.match(/difficulty:3/g) || []).length;

t11 = t11.replace(/difficulty:3/g, 'difficulty:2');
t12 = t12.replace(/difficulty:3/g, 'difficulty:2');

fs.writeFileSync('./js/generator/templates_1_1.js', t11, 'utf-8');
fs.writeFileSync('./js/generator/templates_1_2.js', t12, 'utf-8');

console.log(`  templates_1_1.js: ${count11}개 문제 난이도 3→2`);
console.log(`  templates_1_2.js: ${count12}개 문제 난이도 3→2`);

// 2단계: 외부 DB도 재조정
console.log('\n[2단계] 외부 DB 난이도 재조정...');

let tExt = fs.readFileSync('./js/generator/templates_external.js', 'utf-8');
const countExt = (tExt.match(/difficulty:3/g) || []).length;
tExt = tExt.replace(/difficulty:3/g, 'difficulty:2');
fs.writeFileSync('./js/generator/templates_external.js', tExt, 'utf-8');

console.log(`  templates_external.js: ${countExt}개 문제 난이도 3→2`);

console.log('\n✅ 난이도 재조정 완료!');
console.log('  - 기존 난이도 3 → 2로 변경');
console.log('  - 이제 난이도 3은 비어있음');
console.log('  - 다음 단계: 고난도 문제 생성');
console.log('='.repeat(80));
