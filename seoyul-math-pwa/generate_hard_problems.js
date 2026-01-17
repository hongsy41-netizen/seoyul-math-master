// 난이도 3 최상위 문제 생성 (내신 만점 수준)
const fs = require('fs');

// 중1 수학 단원별 최상위 난이도 문제
const hardProblems = [
  {
    unitId: 'm1-1-1-I-1', key: 'prime_extreme',
    question: '2^5 × 3^3 × 5^2의 약수 중에서 6의 배수는 몇 개인가?',
    answer: '45', hint: '6=2×3이므로 2^a×3^b×5^c에서 a≥1, b≥1', explain: '5×3×3=45개'
  },
  {
    unitId: 'm1-1-1-I-2', key: 'gcd_lcm_extreme',
    question: '두 자연수 A, B의 최대공약수가 12이고 최소공배수가 360일 때, A+B의 최솟값은?',
    answer: '84', hint: 'A=12a, B=12b (서로소), 12ab=360', explain: 'ab=30, (5,6)일 때 최소: 12(5+6)=84'
  },
  {
    unitId: 'm1-1-1-II-1', key: 'rational_extreme',
    question: '-5/3과 7/4 사이에 있는 정수의 개수는?',
    answer: '3', hint: '-5/3 ≈ -1.67, 7/4 = 1.75', explain: '-1, 0, 1 총 3개'
  },
  {
    unitId: 'm1-1-1-II-2', key: 'calc_extreme',
    question: '(-2)^3 × 3 + {(-4)^2 - 5 × (-2)} ÷ 2 - 7 = ?',
    answer: '-18', hint: '거듭제곱 먼저', explain: '-24 + 13 - 7 = -18'
  },
  {
    unitId: 'm1-1-1-III-1', key: 'expr_extreme',
    question: 'x=3, y=-2일 때, 2x²-3xy+y²의 값은?',
    answer: '40', hint: '대입 후 계산', explain: '18+18+4=40'
  },
  {
    unitId: 'm1-1-1-III-2', key: 'linear_extreme',
    question: '2(3x-1) - 3(x+2) + 4(2-x) = ax + b일 때, a-b는?',
    answer: '-1', hint: '괄호 풀고 정리', explain: '-x+0이므로 a=-1, b=0'
  },
  {
    unitId: 'm1-1-1-III-3', key: 'eq_extreme',
    question: 'x=-2가 3x+a=2x-5의 해일 때, x=3을 ax+b=7의 해로 만드는 b는?',
    answer: '16', hint: 'a를 먼저 구함', explain: 'a=-3, -9+b=7, b=16'
  },
  {
    unitId: 'm1-1-1-III-4', key: 'solve_extreme',
    question: '0.2(x-3) = 0.5(x+1) - 1.3을 풀면?',
    answer: '-2', hint: '×10하여 정수로', explain: '2x-6=5x+5-13, x=-2'
  },
  {
    unitId: 'm1-1-1-III-5', key: 'app_extreme',
    question: '아버지는 아들의 4배, 10년 후엔 2배+6살. 아들 나이는?',
    answer: '8', hint: '아들=x, 아버지=4x', explain: '4x+10=2(x+10)+6, x=8'
  },
  {
    unitId: 'm1-1-2-I-1', key: 'shape_extreme',
    question: 'A,B,C,D가 순서대로 있고 AB:BC:CD=2:3:4일 때 AC:BD는?',
    answer: '5:7', hint: 'AB=2k, BC=3k, CD=4k', explain: 'AC=5k, BD=7k'
  },
  {
    unitId: 'm1-1-2-I-2', key: 'pos_extreme',
    question: '평행선에서 동위각 3x+20°, 엇각 5x-40°일 때 x는?',
    answer: '30', hint: '동위각=엇각', explain: '3x+20=5x-40, x=30'
  },
  {
    unitId: 'm1-1-2-I-3', key: 'cong_extreme',
    question: '△ABC(AB=5,BC=7,CA=6)와 합동인 △DEF(DE=5,EF=7)의 FD는?',
    answer: '6', hint: 'SSS 합동', explain: 'FD=CA=6'
  },
  {
    unitId: 'm1-1-2-II-1', key: 'poly_extreme',
    question: '정n각형의 내각이 외각의 5배일 때 n은?',
    answer: '12', hint: '내각+외각=180', explain: '외각=30, 360/30=12'
  },
  {
    unitId: 'm1-1-2-II-2', key: 'circle_extreme',
    question: '반지름 6cm, 중심각 120° 부채꼴의 호+넓이는? (π=3)',
    answer: '48', hint: '호=12, 넓이=36', explain: '12+36=48'
  },
  {
    unitId: 'm1-1-2-III-1', key: 'solid_extreme',
    question: '정n면체에서 면=꼭짓점+2일 때 모서리는?',
    answer: '30', hint: '오일러 정리 V-E+F=2', explain: '정이십면체: E=30'
  },
  {
    unitId: 'm1-1-2-III-2', key: 'vol_extreme',
    question: '원기둥(r=3,h=4)과 같은 부피의 원뿔(h=12)의 반지름은?',
    answer: '3', hint: '원기둥=πr²h, 원뿔=(1/3)πr²h', explain: '36=4r², r=3'
  }
];

console.log('='.repeat(80));
console.log('🔥 난이도 3 최상위 문제 생성');
console.log('='.repeat(80));
console.log(`총 ${hardProblems.length}개 단원 × 최상위 문제\n`);

let code = '// 난이도 3 최상위 문제 (내신 만점 수준)\nconst T_Hard = [];\n\n';

hardProblems.forEach(p => {
  code += `// ${p.unitId}: ${p.question.substring(0, 40)}...\n`;
  code += 'T_Hard.push({\n';
  code += `  key:"${p.key}",\n  unitId:"${p.unitId}",\n  difficulty:3,\n`;
  code += '  tags:["최상위","내신만점"],\n  gen(){\n    return {\n      type:"short",\n';
  code += `      question:"${p.question.replace(/"/g, '\\"')}",\n`;
  code += `      answer:"${p.answer}",\n      answerType:"number",\n      tolerance:0.1,\n      unitLabel:"",\n`;
  code += `      hint:"${p.hint.replace(/"/g, '\\"')}",\n      explain:"${p.explain.replace(/"/g, '\\"')}"\n`;
  code += '    };\n  }\n});\n\n';
  console.log(`✅ ${p.unitId}: ${p.question.substring(0, 50)}...`);
});

code += '\nif(window.Templates_1_1){\n  window.Templates_1_1=[...window.Templates_1_1, ...T_Hard];\n}else{\n  window.Templates_1_1=T_Hard;\n}\n';

fs.writeFileSync('./js/generator/templates_hard.js', code, 'utf-8');

console.log('\n✅ templates_hard.js 생성 완료!');
console.log(`   ${hardProblems.length}개 최상위 문제`);
console.log('='.repeat(80));
