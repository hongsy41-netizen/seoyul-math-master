// 난이도 3 최상위 문제 (내신 만점 수준)
const T_Hard = [];

// m1-1-1-I-1: 2^5 × 3^3 × 5^2의 약수 중에서 6의 배수는 몇 개인가?...
T_Hard.push({
  key:"prime_extreme",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^5 × 3^3 × 5^2의 약수 중에서 6의 배수는 몇 개인가?",
      answer:"45",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"6=2×3이므로 2^a×3^b×5^c에서 a≥1, b≥1",
      explain:"5×3×3=45개"
    };
  }
});

// m1-1-1-I-2: 두 자연수 A, B의 최대공약수가 12이고 최소공배수가 360일 때, A...
T_Hard.push({
  key:"gcd_lcm_extreme",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"두 자연수 A, B의 최대공약수가 12이고 최소공배수가 360일 때, A+B의 최솟값은?",
      answer:"84",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"A=12a, B=12b (서로소), 12ab=360",
      explain:"ab=30, (5,6)일 때 최소: 12(5+6)=84"
    };
  }
});

// m1-1-1-II-1: -5/3과 7/4 사이에 있는 정수의 개수는?...
T_Hard.push({
  key:"rational_extreme",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"-5/3과 7/4 사이에 있는 정수의 개수는?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-5/3 ≈ -1.67, 7/4 = 1.75",
      explain:"-1, 0, 1 총 3개"
    };
  }
});

// m1-1-1-II-2: (-2)^3 × 3 + {(-4)^2 - 5 × (-2)} ÷ 2 - 7...
T_Hard.push({
  key:"calc_extreme",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(-2)^3 × 3 + {(-4)^2 - 5 × (-2)} ÷ 2 - 7 = ?",
      answer:"-18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"거듭제곱 먼저",
      explain:"-24 + 13 - 7 = -18"
    };
  }
});

// m1-1-1-III-1: x=3, y=-2일 때, 2x²-3xy+y²의 값은?...
T_Hard.push({
  key:"expr_extreme",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=3, y=-2일 때, 2x²-3xy+y²의 값은?",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"대입 후 계산",
      explain:"18+18+4=40"
    };
  }
});

// m1-1-1-III-2: 2(3x-1) - 3(x+2) + 4(2-x) = ax + b일 때, a...
T_Hard.push({
  key:"linear_extreme",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2(3x-1) - 3(x+2) + 4(2-x) = ax + b일 때, a-b는?",
      answer:"-1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"괄호 풀고 정리",
      explain:"-x+0이므로 a=-1, b=0"
    };
  }
});

// m1-1-1-III-3: x=-2가 3x+a=2x-5의 해일 때, x=3을 ax+b=7의 해로 만...
T_Hard.push({
  key:"eq_extreme",
  unitId:"m1-1-1-III-3",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=-2가 3x+a=2x-5의 해일 때, x=3을 ax+b=7의 해로 만드는 b는?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"a를 먼저 구함",
      explain:"a=-3, -9+b=7, b=16"
    };
  }
});

// m1-1-1-III-4: 0.2(x-3) = 0.5(x+1) - 1.3을 풀면?...
T_Hard.push({
  key:"solve_extreme",
  unitId:"m1-1-1-III-4",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"0.2(x-3) = 0.5(x+1) - 1.3을 풀면?",
      answer:"-2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"×10하여 정수로",
      explain:"2x-6=5x+5-13, x=-2"
    };
  }
});

// m1-1-1-III-5: 아버지는 아들의 4배, 10년 후엔 2배+6살. 아들 나이는?...
T_Hard.push({
  key:"app_extreme",
  unitId:"m1-1-1-III-5",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"아버지는 아들의 4배, 10년 후엔 2배+6살. 아들 나이는?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"아들=x, 아버지=4x",
      explain:"4x+10=2(x+10)+6, x=8"
    };
  }
});

// m1-1-2-I-1: A,B,C,D가 순서대로 있고 AB:BC:CD=2:3:4일 때 AC:BD...
T_Hard.push({
  key:"shape_extreme",
  unitId:"m1-1-2-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"A,B,C,D가 순서대로 있고 AB:BC:CD=2:3:4일 때 AC:BD는?",
      answer:"5:7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"AB=2k, BC=3k, CD=4k",
      explain:"AC=5k, BD=7k"
    };
  }
});

// m1-1-2-I-2: 평행선에서 동위각 3x+20°, 엇각 5x-40°일 때 x는?...
T_Hard.push({
  key:"pos_extreme",
  unitId:"m1-1-2-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"평행선에서 동위각 3x+20°, 엇각 5x-40°일 때 x는?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"동위각=엇각",
      explain:"3x+20=5x-40, x=30"
    };
  }
});

// m1-1-2-I-3: △ABC(AB=5,BC=7,CA=6)와 합동인 △DEF(DE=5,EF=7...
T_Hard.push({
  key:"cong_extreme",
  unitId:"m1-1-2-I-3",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"△ABC(AB=5,BC=7,CA=6)와 합동인 △DEF(DE=5,EF=7)의 FD는?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"SSS 합동",
      explain:"FD=CA=6"
    };
  }
});

// m1-1-2-II-1: 정n각형의 내각이 외각의 5배일 때 n은?...
T_Hard.push({
  key:"poly_extreme",
  unitId:"m1-1-2-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"정n각형의 내각이 외각의 5배일 때 n은?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"내각+외각=180",
      explain:"외각=30, 360/30=12"
    };
  }
});

// m1-1-2-II-2: 반지름 6cm, 중심각 120° 부채꼴의 호+넓이는? (π=3)...
T_Hard.push({
  key:"circle_extreme",
  unitId:"m1-1-2-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"반지름 6cm, 중심각 120° 부채꼴의 호+넓이는? (π=3)",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"호=12, 넓이=36",
      explain:"12+36=48"
    };
  }
});

// m1-1-2-III-1: 정n면체에서 면=꼭짓점+2일 때 모서리는?...
T_Hard.push({
  key:"solid_extreme",
  unitId:"m1-1-2-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"정n면체에서 면=꼭짓점+2일 때 모서리는?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"오일러 정리 V-E+F=2",
      explain:"정이십면체: E=30"
    };
  }
});

// m1-1-2-III-2: 원기둥(r=3,h=4)과 같은 부피의 원뿔(h=12)의 반지름은?...
T_Hard.push({
  key:"vol_extreme",
  unitId:"m1-1-2-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"원기둥(r=3,h=4)과 같은 부피의 원뿔(h=12)의 반지름은?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"원기둥=πr²h, 원뿔=(1/3)πr²h",
      explain:"36=4r², r=3"
    };
  }
});


if(window.Templates_1_1){
  window.Templates_1_1=[...window.Templates_1_1, ...T_Hard];
}else{
  window.Templates_1_1=T_Hard;
}
