const fs = require('fs');

// 파일 읽기
const files = [
  './js/generator/templates_hard.js',
  './js/generator/templates_hard_more.js',
  './js/generator/templates_hard_all_units.js'
];

const unitCounts = {};
let total = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  
  let currentUnit = null;
  for (const line of lines) {
    if (line.includes("unitId:'") || line.includes('unitId:"')) {
      const match = line.match(/unitId:['"]([^'"]+)['"]/);
      if (match) currentUnit = match[1];
    }
    if (line.includes('difficulty:3') && currentUnit) {
      unitCounts[currentUnit] = (unitCounts[currentUnit] || 0) + 1;
      total++;
      currentUnit = null;
    }
  }
}

console.log('=== 난이도 3 문제 단원별 분포 (정확한 집계) ===\n');
const sorted = Object.entries(unitCounts).sort((a,b) => b[1]-a[1]);
for (const [unit, count] of sorted) {
  console.log(`${unit}: ${count}개`);
}
console.log(`\n총 ${total}개`);
