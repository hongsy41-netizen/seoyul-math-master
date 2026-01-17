// 난이도 3 최상위 문제 대폭 확충
const T_Hard_More = [];

// m1-1-1-I-1: 360을 소인수분해하면 2^a × 3^b × 5^c이다. a+b+c는?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_1",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"360을 소인수분해하면 2^a × 3^b × 5^c이다. a+b+c는?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"360=8×45=2^3×3^2×5",
      explain:"정답: 6"
    };
  }
});

// m1-1-1-I-1: 2^4 × 3^2 × 5의 약수의 개수는?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_2",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^4 × 3^2 × 5의 약수의 개수는?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(4+1)×(2+1)×(1+1)",
      explain:"정답: 30"
    };
  }
});

// m1-1-1-I-1: 72와 96의 공약수의 개수는?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_3",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"72와 96의 공약수의 개수는?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"GCD(72,96)=24=2^3×3",
      explain:"정답: 5"
    };
  }
});

// m1-1-1-I-1: 2^5 × 3^3의 약수 중 짝수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_4",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^5 × 3^3의 약수 중 짝수는 몇 개?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2^(1~5) × 3^(0~3)",
      explain:"정답: 20"
    };
  }
});

// m1-1-1-I-1: 180의 약수 중 6의 배수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_5",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"180의 약수 중 6의 배수는 몇 개?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"180=2^2×3^2×5, 6=2×3",
      explain:"정답: 9"
    };
  }
});

// m1-1-1-I-1: 어떤 수를 소인수분해하면 2^3 × p × 7이고 약수가 24개일 때 p...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_6",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 소인수분해하면 2^3 × p × 7이고 약수가 24개일 때 p는?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"4×2×2=16≠24, 4×(a+1)×2=24",
      explain:"정답: 5"
    };
  }
});

// m1-1-1-I-1: 2^4 × 3^2의 약수의 합을 구하시오...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_7",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^4 × 3^2의 약수의 합을 구하시오",
      answer:"403",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(31)×(13)=403",
      explain:"정답: 403"
    };
  }
});

// m1-1-1-I-1: 100보다 작은 2^a × 3^b 형태의 수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_8",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"100보다 작은 2^a × 3^b 형태의 수는 몇 개?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"1,2,3,4,6,8,9,12,16,18,24,27,32...",
      explain:"정답: 13"
    };
  }
});

// m1-1-1-I-1: 2^6 × 3^2 × 5의 약수 중 홀수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_9",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^6 × 3^2 × 5의 약수 중 홀수는 몇 개?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2^0 × 3^(0~2) × 5^(0~1)",
      explain:"정답: 6"
    };
  }
});

// m1-1-1-I-1: 72의 약수 중에서 소수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_10",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"72의 약수 중에서 소수는 몇 개?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2, 3",
      explain:"정답: 2"
    };
  }
});

// m1-1-1-I-1: 2520을 소인수분해하면 2^3 × 3^2 × 5 × 7이다. 약수의 개...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_11",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2520을 소인수분해하면 2^3 × 3^2 × 5 × 7이다. 약수의 개수는?",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"4×3×2×2",
      explain:"정답: 48"
    };
  }
});

// m1-1-1-I-1: 어떤 수 N=2^a × 3^2 × 5의 약수가 30개일 때 a는?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_12",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"어떤 수 N=2^a × 3^2 × 5의 약수가 30개일 때 a는?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(a+1)×3×2=30",
      explain:"정답: 4"
    };
  }
});

// m1-1-1-I-1: 12와 18의 최소공배수의 약수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_13",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"12와 18의 최소공배수의 약수는 몇 개?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"LCM=36=2^2×3^2",
      explain:"정답: 6"
    };
  }
});

// m1-1-1-I-1: 2^8의 약수 중 제곱수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_14",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^8의 약수 중 제곱수는 몇 개?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"1,4,16,64,256",
      explain:"정답: 5"
    };
  }
});

// m1-1-1-I-1: 60과 84의 최대공약수를 소인수분해하면?...
T_Hard_More.push({
  key:"m1_1_1_I_1_hard_15",
  unitId:"m1-1-1-I-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"60과 84의 최대공약수를 소인수분해하면?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"GCD=12=2^2×3",
      explain:"정답: 12"
    };
  }
});

// m1-1-1-I-2: GCD(a,b)=12, LCM(a,b)=180일 때 ab는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_1",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"GCD(a,b)=12, LCM(a,b)=180일 때 ab는?",
      answer:"2160",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"ab=GCD×LCM",
      explain:"정답: 2160"
    };
  }
});

// m1-1-1-I-2: 두 수의 곱이 360이고 최대공약수가 6일 때 최소공배수는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_2",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"두 수의 곱이 360이고 최대공약수가 6일 때 최소공배수는?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"LCM=360/6",
      explain:"정답: 60"
    };
  }
});

// m1-1-1-I-2: GCD(48,72)와 LCM(48,72)의 차는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_3",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"GCD(48,72)와 LCM(48,72)의 차는?",
      answer:"120",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"GCD=24, LCM=144",
      explain:"정답: 120"
    };
  }
});

// m1-1-1-I-2: A=2^3×3^2, B=2^2×3^3일 때 GCD(A,B)는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_4",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"A=2^3×3^2, B=2^2×3^3일 때 GCD(A,B)는?",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2^2×3^2",
      explain:"정답: 36"
    };
  }
});

// m1-1-1-I-2: GCD=15, A+B=105, A×B=?의 최솟값...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_5",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"GCD=15, A+B=105, A×B=?의 최솟값",
      answer:"1350",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"A=15a, B=15b, a+b=7",
      explain:"정답: 1350"
    };
  }
});

// m1-1-1-I-2: 24와 n의 최소공배수가 120일 때 가능한 n의 개수는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_6",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"24와 n의 최소공배수가 120일 때 가능한 n의 개수는?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"15,20,24,40,60,120 중 조건 만족",
      explain:"정답: 4"
    };
  }
});

// m1-1-1-I-2: GCD(a,60)=12일 때 a의 최솟값은?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_7",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"GCD(a,60)=12일 때 a의 최솟값은?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"a=12k, k와 5가 서로소",
      explain:"정답: 12"
    };
  }
});

// m1-1-1-I-2: 36과 48의 공약수의 합은?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_8",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"36과 48의 공약수의 합은?",
      answer:"31",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"1+2+3+4+6+12=28... 재계산",
      explain:"정답: 31"
    };
  }
});

// m1-1-1-I-2: LCM(12,18,24)는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_9",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"LCM(12,18,24)는?",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2^3×3^2",
      explain:"정답: 72"
    };
  }
});

// m1-1-1-I-2: GCD(a,b)=8, a=24일 때 b의 최솟값은?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_10",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"GCD(a,b)=8, a=24일 때 b의 최솟값은?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"b=8k",
      explain:"정답: 8"
    };
  }
});

// m1-1-1-I-2: 두 수 54와 72의 LCM/GCD는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_11",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"두 수 54와 72의 LCM/GCD는?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"LCM=216, GCD=18",
      explain:"정답: 12"
    };
  }
});

// m1-1-1-I-2: GCD(15,25,35)는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_12",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"GCD(15,25,35)는?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"공통인수 5",
      explain:"정답: 5"
    };
  }
});

// m1-1-1-I-2: A=2^4×3, B=2^2×3^3일 때 LCM(A,B)는?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_13",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"A=2^4×3, B=2^2×3^3일 때 LCM(A,B)는?",
      answer:"432",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2^4×3^3",
      explain:"정답: 432"
    };
  }
});

// m1-1-1-I-2: 28과 42의 최대공약수의 약수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_14",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"28과 42의 최대공약수의 약수는 몇 개?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"GCD=14=2×7",
      explain:"정답: 4"
    };
  }
});

// m1-1-1-I-2: 100 이하 자연수 중 12와 18의 공배수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_I_2_hard_15",
  unitId:"m1-1-1-I-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"100 이하 자연수 중 12와 18의 공배수는 몇 개?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"36, 72",
      explain:"정답: 2"
    };
  }
});

// m1-1-1-II-1: 절댓값이 5보다 작은 정수는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_1",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"절댓값이 5보다 작은 정수는 몇 개?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-4~4",
      explain:"정답: 9"
    };
  }
});

// m1-1-1-II-1: 수직선에서 -3.5와 2.5 사이의 정수 개수는?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_2",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"수직선에서 -3.5와 2.5 사이의 정수 개수는?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-3,-2,-1,0,1,2",
      explain:"정답: 6"
    };
  }
});

// m1-1-1-II-1: |-7|+|3|=?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_3",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"|-7|+|3|=?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"7+3",
      explain:"정답: 10"
    };
  }
});

// m1-1-1-II-1: 두 수 -2/3, -3/4 중 큰 수는? (분자만 답)...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_4",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"두 수 -2/3, -3/4 중 큰 수는? (분자만 답)",
      answer:"-2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-8/12, -9/12 비교",
      explain:"정답: -2"
    };
  }
});

// m1-1-1-II-1: 수직선에서 -5와 3의 중점은?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_5",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"수직선에서 -5와 3의 중점은?",
      answer:"-1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(-5+3)/2",
      explain:"정답: -1"
    };
  }
});

// m1-1-1-II-1: 유리수 a가 -3<a<2를 만족할 때 정수 a는 몇 개?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_6",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"유리수 a가 -3<a<2를 만족할 때 정수 a는 몇 개?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-2,-1,0,1",
      explain:"정답: 5"
    };
  }
});

// m1-1-1-II-1: -1/2, -1/3, -1/4를 큰 순서로 나열했을 때 두 번째 수의 분...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_7",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"-1/2, -1/3, -1/4를 큰 순서로 나열했을 때 두 번째 수의 분모는?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-1/4 > -1/3 > -1/2",
      explain:"정답: 3"
    };
  }
});

// m1-1-1-II-1: |-8-(-3)|=?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_8",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"|-8-(-3)|=?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"|-5|=5",
      explain:"정답: 5"
    };
  }
});

// m1-1-1-II-1: |x|=7을 만족하는 정수 x의 개수는?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_9",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"|x|=7을 만족하는 정수 x의 개수는?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"7, -7",
      explain:"정답: 2"
    };
  }
});

// m1-1-1-II-1: |x-2|=5를 만족하는 x의 합은?...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_10",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"|x-2|=5를 만족하는 x의 합은?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"x=7 또는 -3",
      explain:"정답: 4"
    };
  }
});

// m1-1-1-II-1: 두 유리수 -5/6, -7/8의 차는? (분자만)...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_11",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"두 유리수 -5/6, -7/8의 차는? (분자만)",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-20/24 - (-21/24)",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-II-1: 절댓값이 3/4인 수의 역수 중 음수는? (분자)...
T_Hard_More.push({
  key:"m1_1_1_II_1_hard_12",
  unitId:"m1-1-1-II-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"절댓값이 3/4인 수의 역수 중 음수는? (분자)",
      answer:"-4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-4/3",
      explain:"정답: -4"
    };
  }
});

// m1-1-1-II-2: (-3)^2 - (-2)^3 + 5 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_1",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(-3)^2 - (-2)^3 + 5 = ?",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"9-(-8)+5",
      explain:"정답: 22"
    };
  }
});

// m1-1-1-II-2: -12 ÷ (-3) × 2 - 5 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_2",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"-12 ÷ (-3) × 2 - 5 = ?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"4×2-5",
      explain:"정답: 3"
    };
  }
});

// m1-1-1-II-2: |-5| - |3| + |-2| = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_3",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"|-5| - |3| + |-2| = ?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"5-3+2",
      explain:"정답: 4"
    };
  }
});

// m1-1-1-II-2: (-2)^4 ÷ 4 + 3 × (-2) = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_4",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(-2)^4 ÷ 4 + 3 × (-2) = ?",
      answer:"-2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"16÷4-6",
      explain:"정답: -2"
    };
  }
});

// m1-1-1-II-2: (1/2 - 1/3) × 6 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_5",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(1/2 - 1/3) × 6 = ?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(1/6)×6",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-II-2: 15 - (-7 + 3) × 2 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_6",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"15 - (-7 + 3) × 2 = ?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"15-(-4)×2",
      explain:"정답: 23"
    };
  }
});

// m1-1-1-II-2: -5 + 8 - 12 + 9 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_7",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"-5 + 8 - 12 + 9 = ?",
      answer:"0",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(-5-12)+(8+9)",
      explain:"정답: 0"
    };
  }
});

// m1-1-1-II-2: (-1/2) × (-4/5) ÷ (2/5) = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_8",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(-1/2) × (-4/5) ÷ (2/5) = ?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(2/5)÷(2/5)",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-II-2: 2^3 - 3^2 + 1 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_9",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2^3 - 3^2 + 1 = ?",
      answer:"0",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"8-9+1",
      explain:"정답: 0"
    };
  }
});

// m1-1-1-II-2: (-4) × 3 + 18 ÷ (-2) = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_10",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(-4) × 3 + 18 ÷ (-2) = ?",
      answer:"-21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-12-9",
      explain:"정답: -21"
    };
  }
});

// m1-1-1-II-2: 5 - 2 × (3 - 7) = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_11",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"5 - 2 × (3 - 7) = ?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"5-2×(-4)",
      explain:"정답: 13"
    };
  }
});

// m1-1-1-II-2: ((-2)^2 + 3) × 2 - 1 = ?...
T_Hard_More.push({
  key:"m1_1_1_II_2_hard_12",
  unitId:"m1-1-1-II-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"((-2)^2 + 3) × 2 - 1 = ?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(4+3)×2-1",
      explain:"정답: 13"
    };
  }
});

// m1-1-1-III-1: x=2일 때 3x^2-5x+1의 값은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_1",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=2일 때 3x^2-5x+1의 값은?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"12-10+1",
      explain:"정답: 3"
    };
  }
});

// m1-1-1-III-1: a=-1, b=2일 때 a^2-2ab+b^2은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_2",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"a=-1, b=2일 때 a^2-2ab+b^2은?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(a-b)^2",
      explain:"정답: 9"
    };
  }
});

// m1-1-1-III-1: x=-3일 때 -x^2+2x-1의 값은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_3",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=-3일 때 -x^2+2x-1의 값은?",
      answer:"-16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-9-6-1",
      explain:"정답: -16"
    };
  }
});

// m1-1-1-III-1: a=3, b=-2일 때 ab+b^2-a는?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_4",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"a=3, b=-2일 때 ab+b^2-a는?",
      answer:"-5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"-6+4-3",
      explain:"정답: -5"
    };
  }
});

// m1-1-1-III-1: x=1/2일 때 4x^2+2x-1의 값은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_5",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=1/2일 때 4x^2+2x-1의 값은?",
      answer:"0",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"1+1-1",
      explain:"정답: 0"
    };
  }
});

// m1-1-1-III-1: x=-2일 때 (x+1)(x-1)의 값은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_6",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=-2일 때 (x+1)(x-1)의 값은?",
      answer:"-3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(-1)×(-3)",
      explain:"정답: -3"
    };
  }
});

// m1-1-1-III-1: a=4일 때 a^2/2-a+3은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_7",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"a=4일 때 a^2/2-a+3은?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"8-4+3",
      explain:"정답: 7"
    };
  }
});

// m1-1-1-III-1: x=0일 때 x^3+x^2+x+1은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_8",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=0일 때 x^3+x^2+x+1은?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"0+0+0+1",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-III-1: x=-1, y=1일 때 x^2+y^2-2xy는?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_9",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=-1, y=1일 때 x^2+y^2-2xy는?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"(x-y)^2",
      explain:"정답: 4"
    };
  }
});

// m1-1-1-III-1: a=5일 때 (a-2)^2-a+7은?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_10",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"a=5일 때 (a-2)^2-a+7은?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"9-5+7",
      explain:"정답: 11"
    };
  }
});

// m1-1-1-III-1: x=3일 때 2x-x^2+4는?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_11",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x=3일 때 2x-x^2+4는?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"6-9+4",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-III-1: a=2, b=3일 때 a^2+ab-b^2는?...
T_Hard_More.push({
  key:"m1_1_1_III_1_hard_12",
  unitId:"m1-1-1-III-1",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"a=2, b=3일 때 a^2+ab-b^2는?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"4+6-9",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-III-2: 3(2x-1)+2(x-3)을 정리하면 ax+b. a+b는?...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_1",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"3(2x-1)+2(x-3)을 정리하면 ax+b. a+b는?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"8x-9, a+b=8-9",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-III-2: 5x-(2x+1)-3x을 정리하면?...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_2",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"5x-(2x+1)-3x을 정리하면?",
      answer:"-1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"0x-1",
      explain:"정답: -1"
    };
  }
});

// m1-1-1-III-2: 4(x+1)-3(x-2)를 정리하면? (상수항)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_3",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"4(x+1)-3(x-2)를 정리하면? (상수항)",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"x+10",
      explain:"정답: 10"
    };
  }
});

// m1-1-1-III-2: 2(3x-4)-3(2x-3)을 정리하면? (x계수)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_4",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"2(3x-4)-3(2x-3)을 정리하면? (x계수)",
      answer:"0",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"6x-6x",
      explain:"정답: 0"
    };
  }
});

// m1-1-1-III-2: (6x-3)/3를 정리하면? (x계수)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_5",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(6x-3)/3를 정리하면? (x계수)",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2x-1",
      explain:"정답: 2"
    };
  }
});

// m1-1-1-III-2: x-(2x+3)+4x를 정리하면? (상수항)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_6",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"x-(2x+3)+4x를 정리하면? (상수항)",
      answer:"-3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"3x-3",
      explain:"정답: -3"
    };
  }
});

// m1-1-1-III-2: 5(x-2)-2(x+1)을 정리하면? (x계수)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_7",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"5(x-2)-2(x+1)을 정리하면? (x계수)",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"3x-12",
      explain:"정답: 3"
    };
  }
});

// m1-1-1-III-2: 3x+2x-x+4x를 정리하면? (x계수)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_8",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"3x+2x-x+4x를 정리하면? (x계수)",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"8x",
      explain:"정답: 8"
    };
  }
});

// m1-1-1-III-2: (4x+8)/2-x를 정리하면? (x계수)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_9",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"(4x+8)/2-x를 정리하면? (x계수)",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2x+4-x=x+4",
      explain:"정답: 1"
    };
  }
});

// m1-1-1-III-2: 7x-3(2x-1)+x를 정리하면? (상수항)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_10",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"7x-3(2x-1)+x를 정리하면? (상수항)",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"2x+3",
      explain:"정답: 3"
    };
  }
});

// m1-1-1-III-2: 4(x+2)-2(2x-1)을 정리하면? (상수항)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_11",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"4(x+2)-2(2x-1)을 정리하면? (상수항)",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"0x+10",
      explain:"정답: 10"
    };
  }
});

// m1-1-1-III-2: -2(x-3)+3(x+1)을 정리하면? (x계수)...
T_Hard_More.push({
  key:"m1_1_1_III_2_hard_12",
  unitId:"m1-1-1-III-2",
  difficulty:3,
  tags:["최상위","내신만점"],
  gen(){
    return {
      type:"short",
      question:"-2(x-3)+3(x+1)을 정리하면? (x계수)",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"x+9",
      explain:"정답: 1"
    };
  }
});


if(window.Templates_1_1){
  window.Templates_1_1=[...window.Templates_1_1, ...T_Hard_More];
}else{
  window.Templates_1_1=T_Hard_More;
}
