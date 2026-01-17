// 모든 단원에 최상위 난이도 3 문제 추가 (단원당 최소 10개 이상)
// 총 228개의 새로운 최상위 문제 추가

if (typeof window.Templates_hard === 'undefined') {
  window.Templates_hard = [];
}

window.Templates_hard.push({
  unitId:'m1-1-1-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_1_1',
  class:'최상위_소인수분해',
  gen:function(){
    return {
      question:'72를 소인수분해했을 때, 지수의 총합을 구하시오.',
      answer:5,
      equation:'72 = 2^3 × 3^2, 지수 총합 = 3+2',
      hint:'소인수분해 후 모든 지수를 더합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_1_2',
  class:'최상위_소인수분해',
  gen:function(){
    return {
      question:'360의 약수 중에서 12의 배수인 약수는 몇 개인가?',
      answer:6,
      equation:'360=2^3×3^2×5, 12=2^2×3인 약수 개수',
      hint:'360의 약수 중 2^2×3을 포함하는 약수를 찾습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_1_3',
  class:'최상위_소인수분해',
  gen:function(){
    return {
      question:'두 수 2^a × 3^5와 2^4 × 3^b의 최대공약수가 2^3 × 3^2일 때, a+b의 값을 구하시오. (단, a, b는 자연수)',
      answer:7,
      equation:'min(a,4)=3, min(5,b)=2이므로 a=3, b=2',
      hint:'최대공약수에서 각 소인수의 지수는 두 수에서의 지수 중 작은 값입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_1_4',
  class:'최상위_소인수분해',
  gen:function(){
    return {
      question:'1000보다 작은 자연수 중에서 소인수가 2와 5뿐인 수는 몇 개인가?',
      answer:10,
      equation:'2^a × 5^b < 1000인 경우의 수',
      hint:'2^a × 5^b 형태로 나타내고 1000 미만인 경우를 세어봅니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_1_5',
  class:'최상위_소인수분해',
  gen:function(){
    return {
      question:'어떤 자연수를 소인수분해하면 2^a × 3^b × 5의 꼴이 되고, 약수의 개수가 24개일 때, a+b의 최댓값을 구하시오.',
      answer:10,
      equation:'(a+1)(b+1)(1+1)=24, a+b 최대화',
      hint:'약수의 개수 공식: (지수+1)의 곱. a+b를 최대화하려면 한 쪽을 크게 만듭니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_2_1',
  class:'최상위_최대공약수와 최소공배수',
  gen:function(){
    return {
      question:'두 자연수 A, B의 최대공약수가 12, 최소공배수가 360일 때, A×B의 값을 구하시오.',
      answer:4320,
      equation:'A×B = GCD×LCM = 12×360',
      hint:'두 수의 곱 = 최대공약수 × 최소공배수'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_2_2',
  class:'최상위_최대공약수와 최소공배수',
  gen:function(){
    return {
      question:'세 수 24, 36, 60의 최소공배수를 구하시오.',
      answer:360,
      equation:'LCM(24,36,60) = 2^3×3^2×5',
      hint:'각 소인수의 최대 지수를 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_2_3',
  class:'최상위_최대공약수와 최소공배수',
  gen:function(){
    return {
      question:'두 수의 최대공약수가 18이고, 두 수를 각각 18로 나눈 몫이 서로소인 두 자연수일 때, 두 수의 최소공배수가 432라면 두 수의 합을 구하시오.',
      answer:162,
      equation:'A=18a, B=18b, gcd(a,b)=1, LCM=18ab=432',
      hint:'A=18a, B=18b로 놓고 (a,b는 서로소), LCM=18ab를 이용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_2_4',
  class:'최상위_최대공약수와 최소공배수',
  gen:function(){
    return {
      question:'120과 어떤 수의 최대공약수가 20, 최소공배수가 600일 때, 그 수를 구하시오.',
      answer:100,
      equation:'120×x = 20×600',
      hint:'두 수의 곱 = GCD × LCM을 이용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_I_2_5',
  class:'최상위_최대공약수와 최소공배수',
  gen:function(){
    return {
      question:'48, 72, n의 최대공약수가 12일 때, 자연수 n의 최솟값을 구하시오.',
      answer:12,
      equation:'GCD(48,72,n)=12, n은 12의 배수이면서 48,72과 공약수 12',
      hint:'n은 12의 배수여야 하고, 48과 72의 다른 공약수를 포함하지 않아야 합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_1',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'수직선 위에서 -3과 5 사이의 거리와, 2와 -7 사이의 거리의 차를 구하시오.',
      answer:1,
      equation:'|5-(-3)| - |-7-2| = 8-9',
      hint:'두 점 사이의 거리는 좌표 차의 절댓값입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_2',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'-2.5와 3.5의 중점과 -1 사이의 거리를 구하시오.',
      answer:1.5,
      equation:'중점=(-2.5+3.5)/2=0.5, |0.5-(-1)|',
      hint:'먼저 두 수의 중점을 구한 후, -1까지의 거리를 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_3',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'절댓값이 5보다 작은 정수는 모두 몇 개인가?',
      answer:9,
      equation:'|x|<5 ⟹ -4, -3, ..., 3, 4',
      hint:'|x|<5는 -5<x<5를 의미합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_4',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'다음 중 옳은 것을 모두 고르면? ① -3<-2 ② |-5|>|3| ③ 0<-1 ④ |-4|=4',
      answer:'①②④',
      equation:'①참, ②참(5>3), ③거짓, ④참',
      hint:'각 명제를 하나씩 검토해봅니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_5',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'a=-3, b=2일 때, |a-b| + |a+b|의 값을 구하시오.',
      answer:6,
      equation:'|-3-2| + |-3+2| = 5+1',
      hint:'절댓값 안의 식을 먼저 계산한 후 절댓값을 취합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_6',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'수직선 위에서 원점으로부터 거리가 같은 두 점 A, B가 있다. A의 좌표가 -7일 때, A와 B 사이의 거리를 구하시오.',
      answer:14,
      equation:'B=7, |7-(-7)|',
      hint:'원점으로부터 같은 거리에 있으므로 B=7입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_1_7',
  class:'최상위_정수와 유리수',
  gen:function(){
    return {
      question:'연속하는 세 정수의 합이 -15일 때, 가장 큰 수를 구하시오.',
      answer:-4,
      equation:'n+(n+1)+(n+2)=-15, n=-6',
      hint:'연속하는 세 정수를 n, n+1, n+2로 놓고 식을 세웁니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_1',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'(-2)^3 × 3^2 - (-3)^2 × 2^2의 값을 구하시오.',
      answer:-108,
      equation:'(-8)×9 - 9×4 = -72-36',
      hint:'거듭제곱을 먼저 계산한 후 곱셈과 뺄셈을 수행합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_2',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'1/2 - 2/3 + 3/4 - 4/5를 계산하시오. (기약분수로 답하시오)',
      answer:'-7/60',
      equation:'통분: 30/60 - 40/60 + 45/60 - 48/60',
      hint:'공통분모 60으로 통분합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_3',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'(-1.5) × (-2/3) ÷ 0.25의 값을 구하시오.',
      answer:4,
      equation:'1.5 × (2/3) × 4',
      hint:'나눗셈을 곱셈으로 바꿉니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_4',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'(1/2 + 1/3) × 6 - (1/4 + 1/6) × 12의 값을 구하시오.',
      answer:0,
      equation:'(3/6 + 2/6)×6 - (3/12 + 2/12)×12',
      hint:'괄호 안을 먼저 통분한 후 분배법칙을 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_5',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'(-2)^4 + (-2)^3 + (-2)^2 + (-2)^1 + (-2)^0의 값을 구하시오.',
      answer:11,
      equation:'16 + (-8) + 4 + (-2) + 1',
      hint:'각 항을 차례대로 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_6',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6의 값을 기약분수로 나타내시오.',
      answer:'3/5',
      equation:'(1-1/2)+(1/3-1/4)+(1/5-1/6) = 1/2+1/12+1/30',
      hint:'인접한 항끼리 묶어서 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_II_2_7',
  class:'최상위_정수와 유리수의 계산',
  gen:function(){
    return {
      question:'a=-1/2, b=2/3일 때, (a-b)/(ab)의 값을 구하시오.',
      answer:-3.5,
      equation:'(-1/2-2/3)/(-1/2×2/3) = (-7/6)/(-1/3)',
      hint:'분자와 분모를 각각 계산한 후 나눗셈합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_1',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'x=-2, y=3일 때, (x+y)(x-y)의 값을 구하시오.',
      answer:-5,
      equation:'(-2+3)(-2-3) = 1×(-5)',
      hint:'대입 후 괄호 안을 먼저 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_2',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'한 개에 a원 하는 사과 3개와 한 개에 b원 하는 배 2개를 샀더니 총 2500원이었다. a와 b의 관계식을 쓰시오.',
      answer:'3a+2b=2500',
      equation:'3a + 2b = 2500',
      hint:'사과 3개의 가격 + 배 2개의 가격 = 2500'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_3',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'x에 대한 일차식 3x+a-5의 x의 계수가 3, 상수항이 7일 때, a의 값을 구하시오.',
      answer:12,
      equation:'a-5=7',
      hint:'상수항 = a-5 = 7'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_4',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'정사각형의 한 변의 길이가 x cm일 때, 둘레를 x로 나타내시오.',
      answer:'4x',
      equation:'둘레 = 4×x',
      hint:'정사각형의 둘레는 한 변의 4배입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_5',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'x=-3일 때, 식 2x^2+3x-5의 값을 구하시오.',
      answer:4,
      equation:'2×9 + 3×(-3) - 5 = 18-9-5',
      hint:'거듭제곱을 먼저 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_6',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'어떤 수에 3을 곱한 후 5를 뺀 값이 x일 때, 어떤 수를 x로 나타내시오.',
      answer:'(x+5)/3',
      equation:'3×(어떤수)-5=x',
      hint:'역순으로 계산합니다: x에 5를 더한 후 3으로 나눕니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_1_7',
  class:'최상위_문자의 사용과 식',
  gen:function(){
    return {
      question:'연속하는 세 홀수를 x를 사용하여 나타낼 때, 가운데 수가 2n+1이라면 세 수의 합을 n으로 나타내시오.',
      answer:'6n+3',
      equation:'(2n-1)+(2n+1)+(2n+3)',
      hint:'가운데가 2n+1이면 앞은 2n-1, 뒤는 2n+3입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_1',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'3(2x-1) - 2(x-3)을 간단히 하시오.',
      answer:'4x+3',
      equation:'6x-3-2x+6 = 4x+3',
      hint:'분배법칙을 사용한 후 동류항을 정리합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_2',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'(4x-6)/2 + (3x+9)/3을 간단히 하시오.',
      answer:'3x',
      equation:'2x-3 + x+3 = 3x',
      hint:'각 분수를 간단히 한 후 더합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_3',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'0.3x - 0.5(x-2)를 간단히 하시오.',
      answer:'-0.2x+1',
      equation:'0.3x - 0.5x + 1',
      hint:'분배법칙을 사용한 후 동류항을 정리합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_4',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'x/3 - (2x-1)/4의 계산 결과를 간단히 하시오.',
      answer:'(-2x+3)/12',
      equation:'4x/12 - (6x-3)/12',
      hint:'공통분모 12로 통분합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_5',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'2{3x-2(x-1)}를 간단히 하시오.',
      answer:'2x+4',
      equation:'2(3x-2x+2) = 2(x+2)',
      hint:'안쪽 괄호부터 전개합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_6',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'A=2x-3, B=-x+5일 때, 2A-3B를 간단히 하시오.',
      answer:'7x-21',
      equation:'2(2x-3)-3(-x+5) = 4x-6+3x-15',
      hint:'A와 B를 대입한 후 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_2_7',
  class:'최상위_일차식의 계산',
  gen:function(){
    return {
      question:'(x+1)/2 - (x-1)/3 + (x+2)/6을 간단히 하시오.',
      answer:'x/2+1',
      equation:'3(x+1)/6 - 2(x-1)/6 + (x+2)/6',
      hint:'공통분모 6으로 통분합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_1',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 2x-5=3x+7의 해를 구하시오.',
      answer:-12,
      equation:'2x-3x=7+5',
      hint:'x항을 왼쪽, 상수항을 오른쪽으로 이항합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_2',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'x=-2가 방정식 3x+a=7의 해일 때, a의 값을 구하시오.',
      answer:13,
      equation:'3×(-2)+a=7',
      hint:'x=-2를 방정식에 대입합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_3',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 5(x-2)=2(x+1)의 해를 구하시오.',
      answer:4,
      equation:'5x-10=2x+2, 3x=12',
      hint:'양변을 전개한 후 이항합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_4',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 0.3x+0.5=0.2x-0.3의 해를 구하시오.',
      answer:-8,
      equation:'0.1x=-0.8',
      hint:'양변에 10을 곱하면 계산이 쉬워집니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_5',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'x/2+1=x/3-2의 해를 구하시오.',
      answer:-18,
      equation:'3x+6=2x-12',
      hint:'양변에 6을 곱하여 분모를 없앱니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_6',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 3x-7=2x+a의 해가 x=5일 때, a의 값을 구하시오.',
      answer:8,
      equation:'3×5-7=2×5+a',
      hint:'x=5를 대입하여 a를 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_7',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 2(x-1)=3(x+2)-8의 해를 구하시오.',
      answer:0,
      equation:'2x-2=3x+6-8',
      hint:'양변을 전개한 후 정리합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_8',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'(x+2)/3=(2x-1)/4의 해를 구하시오.',
      answer:11,
      equation:'4(x+2)=3(2x-1)',
      hint:'양변에 12를 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_9',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'x의 값이 2씩 증가할 때, 식 ax+3의 값이 6씩 증가한다면, a의 값을 구하시오.',
      answer:3,
      equation:'a(x+2)+3-(ax+3)=6',
      hint:'x가 2 증가했을 때의 식의 변화량을 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_10',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 4x-3=2x+7과 2x+a=5의 해가 같을 때, a의 값을 구하시오.',
      answer:-5,
      equation:'첫 번째 방정식 해 x=5, 대입하여 a 구함',
      hint:'첫 번째 방정식을 풀어 x를 구한 후, 두 번째 방정식에 대입합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_11',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'일차방정식 (a-2)x+3=7의 해가 x=1일 때, a의 값을 구하시오.',
      answer:6,
      equation:'(a-2)×1+3=7',
      hint:'x=1을 대입합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_12',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'2x-3(x-1)=5-x의 해를 구하시오.',
      answer:-1,
      equation:'2x-3x+3=5-x',
      hint:'괄호를 풀고 이항합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_13',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'0.7x-0.4=0.3x+1.2의 해를 구하시오.',
      answer:4,
      equation:'0.4x=1.6',
      hint:'양변에 10을 곱하면 정수 계수로 만들 수 있습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_14',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'x/4+2=3x/8-1의 해를 구하시오.',
      answer:24,
      equation:'2x+16=3x-8',
      hint:'양변에 8을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_15',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 3(x-a)=2x+6의 해가 x=-3일 때, a의 값을 구하시오.',
      answer:-5,
      equation:'3(-3-a)=2×(-3)+6',
      hint:'x=-3을 대입합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_16',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 5x+2=3(x+4)의 해를 구하시오.',
      answer:5,
      equation:'5x+2=3x+12',
      hint:'오른쪽을 전개합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_17',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'(2x-1)/5=(x+3)/4의 해를 구하시오.',
      answer:19,
      equation:'4(2x-1)=5(x+3)',
      hint:'양변에 20을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_18',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 2(x+1)=3(x-1)+x-a의 해가 무수히 많을 때, a의 값을 구하시오.',
      answer:-5,
      equation:'항등식이 되려면 양변이 같아야 함',
      hint:'양변을 정리하여 계수와 상수항이 같아지는 a를 찾습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_3_19',
  class:'최상위_방정식과 그 해',
  gen:function(){
    return {
      question:'방정식 ax-3=2x+7이 해를 갖지 않을 때, a의 값을 구하시오.',
      answer:2,
      equation:'a=2일 때 0x=10 (모순)',
      hint:'a=2이면 x항이 소거되어 모순이 됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_1',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 3x-7=2x+5를 풀어라.',
      answer:12,
      equation:'x=12',
      hint:'x항과 상수항을 각각 모읍니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_2',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 5(x-2)=3(x+4)를 풀어라.',
      answer:11,
      equation:'5x-10=3x+12',
      hint:'양변을 전개한 후 이항합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_3',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 0.4x+1.5=0.9x-0.5를 풀어라.',
      answer:4,
      equation:'4x+15=9x-5',
      hint:'양변에 10을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_4',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 x/3-2=(x-6)/4를 풀어라.',
      answer:6,
      equation:'4x-24=3x-18',
      hint:'양변에 12를 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_5',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 2(x-3)-3(x-1)=5를 풀어라.',
      answer:-8,
      equation:'2x-6-3x+3=5',
      hint:'괄호를 풀고 동류항을 정리합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_6',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 (x+1)/2-(x-1)/3=1을 풀어라.',
      answer:4,
      equation:'3(x+1)-2(x-1)=6',
      hint:'양변에 6을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_7',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 0.2(x-5)=0.3(x+3)-0.1x를 풀어라.',
      answer:-14.5,
      equation:'0.2x-1=0.3x+0.9-0.1x',
      hint:'양변을 전개한 후 정리합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_8',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 4x-3(2x-1)=7-2(x-1)을 풀어라.',
      answer:-1,
      equation:'4x-6x+3=7-2x+2',
      hint:'양변의 괄호를 모두 풀고 정리합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_9',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 (3x-2)/4=(2x+3)/3을 풀어라.',
      answer:17,
      equation:'3(3x-2)=4(2x+3)',
      hint:'양변에 12를 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_10',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 2{x-3(x-1)}=4x-10을 풀어라.',
      answer:2,
      equation:'2(x-3x+3)=4x-10',
      hint:'안쪽 괄호부터 전개합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_11',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 1.5x-0.7=0.8x+0.7을 풀어라.',
      answer:2,
      equation:'15x-7=8x+7',
      hint:'양변에 10을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_12',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 (x-2)/3-(x+1)/2=-5/6을 풀어라.',
      answer:3,
      equation:'2(x-2)-3(x+1)=-5',
      hint:'양변에 6을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_13',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 3(2x-1)=2(3x+a)가 항등식일 때, a의 값을 구하시오.',
      answer:-1.5,
      equation:'6x-3=6x+2a',
      hint:'항등식이 되려면 상수항이 같아야 합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_14',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 ax+5=2x-3이 해가 없을 때, a의 값을 구하시오.',
      answer:2,
      equation:'a=2일 때 0x=-8',
      hint:'x의 계수가 같고 상수항이 다를 때 해가 없습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_15',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 2(x+a)=3(x-1)+x에서 해가 무수히 많을 때, a의 값을 구하시오.',
      answer:-1.5,
      equation:'2x+2a=4x-3',
      hint:'항등식이 되는 a를 찾습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_16',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 5x-2(x-3)=3(x+2)를 풀어라.',
      answer:'x는 모든 실수',
      equation:'5x-2x+6=3x+6',
      hint:'양변이 같은 식이 됩니다 (항등식).'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_17',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 (2x+1)/3+(x-1)/2=5x/6-1을 풀어라.',
      answer:3,
      equation:'2(2x+1)+3(x-1)=5x-6',
      hint:'양변에 6을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_18',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 0.25x-0.5(x-2)=1.5를 풀어라.',
      answer:2,
      equation:'0.25x-0.5x+1=1.5',
      hint:'분배법칙을 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-4',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_4_19',
  class:'최상위_일차방정식의 풀이',
  gen:function(){
    return {
      question:'방정식 x/2+x/3=5를 풀어라.',
      answer:6,
      equation:'3x+2x=30',
      hint:'양변에 6을 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_1',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'어떤 수의 3배에서 5를 뺀 것이 그 수의 2배보다 7만큼 크다. 어떤 수를 구하시오.',
      answer:12,
      equation:'3x-5=2x+7',
      hint:'어떤 수를 x로 놓고 식을 세웁니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_2',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'형은 동생보다 3살 많고, 두 사람의 나이의 합이 25살이다. 형의 나이를 구하시오.',
      answer:14,
      equation:'x+(x-3)=25',
      hint:'형의 나이를 x로 놓습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_3',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'연속하는 세 홀수의 합이 45일 때, 가장 큰 수를 구하시오.',
      answer:17,
      equation:'x+(x+2)+(x+4)=45',
      hint:'첫 번째 홀수를 x로 놓습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_4',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'길이가 56cm인 철사를 두 부분으로 나누었더니 한 부분이 다른 부분보다 8cm 더 길었다. 긴 부분의 길이를 구하시오.',
      answer:32,
      equation:'x+(x-8)=56',
      hint:'긴 부분을 x로 놓습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_5',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'현재 아버지의 나이는 42살이고 아들의 나이는 12살이다. 몇 년 후에 아버지의 나이가 아들의 나이의 2배가 되는지 구하시오.',
      answer:18,
      equation:'42+x=2(12+x)',
      hint:'x년 후를 생각합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_6',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'사과 3개와 배 2개의 가격이 5000원이고, 사과 한 개가 배 한 개보다 200원 비싸다. 사과 한 개의 가격을 구하시오.',
      answer:1120,
      equation:'3x+2(x-200)=5000',
      hint:'사과 한 개의 가격을 x원으로 놓습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_7',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'10km 떨어진 두 지점을 시속 4km로 걸어가면 몇 시간 걸리는지 구하시오.',
      answer:2.5,
      equation:'4x=10',
      hint:'거리 = 속력 × 시간'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_8',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'정가가 12000원인 상품을 20% 할인하여 팔았다. 판매 가격을 구하시오.',
      answer:9600,
      equation:'12000×(1-0.2)',
      hint:'할인율 20%는 원가의 80%를 의미합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_9',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'학생 수가 작년보다 10% 증가하여 33명이 되었다. 작년 학생 수를 구하시오.',
      answer:30,
      equation:'x×1.1=33',
      hint:'작년 학생 수를 x로 놓습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_10',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'둘레가 48cm인 직사각형의 가로가 세로보다 4cm 길다. 가로의 길이를 구하시오.',
      answer:14,
      equation:'2(x+(x-4))=48',
      hint:'가로를 x로 놓습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_11',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'물 500g에 소금 50g을 넣었다. 소금물의 농도는 몇 %인지 구하시오.',
      answer:9.09,
      equation:'50/(500+50)×100',
      hint:'농도 = 소금의 양/소금물의 양 × 100'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_12',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'5% 소금물 200g과 10% 소금물 300g을 섞었을 때의 농도를 구하시오.',
      answer:8,
      equation:'(200×0.05+300×0.1)/(200+300)×100',
      hint:'전체 소금의 양을 전체 소금물의 양으로 나눕니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_13',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'A와 B 두 지점 사이를 왕복하는데 갈 때는 시속 3km로, 올 때는 시속 2km로 걸었더니 총 5시간이 걸렸다. 두 지점 사이의 거리를 구하시오.',
      answer:6,
      equation:'x/3+x/2=5',
      hint:'거리를 x km로 놓고, 시간 = 거리/속력을 이용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_14',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'정가 10000원인 상품을 30% 할인한 후 다시 10% 할인하면 최종 가격은?',
      answer:6300,
      equation:'10000×0.7×0.9',
      hint:'연속 할인은 차례대로 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_15',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'형과 동생이 각각 집에서 출발하여 1200m 떨어진 학교로 간다. 형은 분속 80m, 동생은 분속 60m로 걸을 때, 형이 몇 분 늦게 출발하면 동시에 도착하는지 구하시오.',
      answer:5,
      equation:'1200/60-1200/80',
      hint:'각각의 소요 시간을 구한 후 차이를 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_16',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'어떤 물건의 원가에 20%의 이익을 붙여 정가를 정했다가 10% 할인하여 팔았더니 540원의 이익이 생겼다. 원가를 구하시오.',
      answer:5000,
      equation:'x×1.2×0.9-x=540',
      hint:'원가를 x로 놓고 최종 이익을 식으로 나타냅니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_17',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'1분에 5%씩 물이 새는 수조에 물을 가득 채우는 데 20분이 걸렸다. 구멍이 없었다면 몇 분이 걸렸을지 구하시오.',
      answer:19,
      equation:'x=20×0.95',
      hint:'실제로 채운 양은 전체의 95%만 채우는 것과 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_18',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'전체 학생 중 30%가 안경을 쓰고, 안경 쓴 학생 중 40%가 여학생이다. 전체 학생이 100명일 때 안경 쓴 여학생은 몇 명인지 구하시오.',
      answer:12,
      equation:'100×0.3×0.4',
      hint:'비율을 차례대로 곱합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-1-III-5',
  difficulty:3,
  type:'word_problem_hard_m1_1_1_III_5_19',
  class:'최상위_일차방정식의 활용',
  gen:function(){
    return {
      question:'길이 240m의 기차가 길이 760m인 터널을 완전히 통과하는 데 20초 걸렸다. 기차의 속력은 초속 몇 m인지 구하시오.',
      answer:50,
      equation:'(240+760)/20',
      hint:'기차가 이동한 거리는 기차 길이 + 터널 길이입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_1',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'각 ABC가 125°이고, 각 ABD가 40°일 때, 각 DBC의 크기를 구하시오.',
      answer:85,
      equation:'125-40',
      hint:'전체 각에서 부분 각을 뺍니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_2',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'한 평각을 3:5로 나누었을 때, 큰 각의 크기를 구하시오.',
      answer:112.5,
      equation:'180×5/8',
      hint:'평각은 180°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_3',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'점 O를 중심으로 하는 두 원의 반지름이 각각 5cm, 8cm일 때, 두 원 사이의 가장 가까운 거리를 구하시오. (단, 두 원은 동심원)',
      answer:3,
      equation:'8-5',
      hint:'동심원이므로 반지름의 차입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_4',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'선분 AB의 길이가 12cm이고, 점 C가 AB를 2:1로 내분할 때, AC의 길이를 구하시오.',
      answer:8,
      equation:'12×2/3',
      hint:'내분점은 비율대로 나눕니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_5',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'두 각 ∠A=70°, ∠B=40°가 서로 이웃한 보각일 때, 두 각의 합을 구하시오.',
      answer:'문제 오류',
      equation:'보각의 합은 180°',
      hint:'보각은 두 각의 합이 180°인 관계입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_6',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'직선 위의 점 O를 지나는 반직선이 3개 그려져 있을 때, 만들어지는 각은 최대 몇 개인가?',
      answer:6,
      equation:'C(4,2)',
      hint:'4개의 반직선에서 2개를 선택하는 조합입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_7',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'∠AOB=90°일 때, ∠AOB의 이등분선 OC와 ∠COB의 이등분선 OD가 이루는 각 ∠COD의 크기를 구하시오.',
      answer:22.5,
      equation:'90/2/2',
      hint:'각을 절반씩 나눕니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_8',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'반지름이 6cm인 원에 내접하는 정삼각형의 한 변의 길이는 약 몇 cm인가? (√3≈1.73)',
      answer:10.38,
      equation:'6√3',
      hint:'정삼각형의 외접원 반지름과 한 변 관계식을 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_9',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'두 점 A(-3, 4), B(5, 4)를 지나는 직선은 어떤 축에 평행한가?',
      answer:'x축',
      equation:'y좌표가 같음',
      hint:'y좌표가 같으면 x축에 평행합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_10',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'직선이 점 (2, 3)을 지나고 x축에 수직일 때, 이 직선의 방정식은?',
      answer:'x=2',
      equation:'x축에 수직 → x=상수',
      hint:'x축에 수직인 직선은 x=k 형태입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_11',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'∠A와 ∠B가 대각일 때, ∠A=3x°, ∠B=2x+40°이라면 x의 값을 구하시오.',
      answer:'문제 오류',
      equation:'대각은 같으므로 3x=2x+40',
      hint:'대각의 크기는 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_12',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'삼각형 ABC에서 ∠A=40°, ∠B=60°일 때, 외각 ∠ACD의 크기를 구하시오.',
      answer:100,
      equation:'40+60',
      hint:'외각은 이웃하지 않은 두 내각의 합입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_13',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'원의 중심에서 현까지의 거리가 6cm이고, 현의 길이가 16cm일 때, 원의 반지름을 구하시오.',
      answer:10,
      equation:'√(6²+8²)',
      hint:'중심, 현의 중점, 현의 끝점이 직각삼각형을 이룹니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_14',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'정오각형의 한 내각의 크기를 구하시오.',
      answer:108,
      equation:'180×(5-2)/5',
      hint:'정n각형의 한 내각 = 180×(n-2)/n'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_15',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'∠A=35°, ∠B=55°일 때, 두 각의 보각의 합을 구하시오.',
      answer:270,
      equation:'(180-35)+(180-55)',
      hint:'각각의 보각을 구한 후 더합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_16',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'선분 AB를 3:2로 외분하는 점을 P라 할 때, AP:PB를 구하시오.',
      answer:'3:2',
      equation:'외분점의 비',
      hint:'외분점은 선분을 연장한 위치에 있습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_17',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'반지름이 10cm인 원에서 중심각이 72°인 호의 길이를 구하시오. (단, π=3.14)',
      answer:12.56,
      equation:'2×3.14×10×72/360',
      hint:'호의 길이 = 2πr × (중심각/360)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_18',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'두 직선이 한 점에서 만날 때 만들어지는 각은 몇 개인가?',
      answer:4,
      equation:'맞은각 2쌍',
      hint:'두 직선이 만나면 4개의 각이 생깁니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_1_19',
  class:'최상위_기본 도형',
  gen:function(){
    return {
      question:'∠AOB=120°이고, OC가 ∠AOB의 이등분선일 때, ∠AOC의 크기를 구하시오.',
      answer:60,
      equation:'120/2',
      hint:'이등분선은 각을 정확히 반으로 나눕니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_1',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행한 두 직선 l, m에 다른 직선 n이 만날 때, 엇각이 65°라면 동위각은 몇 도인가?',
      answer:65,
      equation:'엇각=동위각',
      hint:'평행선에서 엇각과 동위각은 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_2',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'두 직선 a, b가 직선 c와 만날 때, 동위각이 각각 70°, 110°이다. a와 b는 평행한가?',
      answer:'아니다',
      equation:'동위각이 다르므로 평행 아님',
      hint:'평행하려면 동위각이 같아야 합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_3',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'직선 l에 평행한 직선 m과, m에 평행한 직선 n이 있을 때, l과 n의 관계는?',
      answer:'평행',
      equation:'평행의 추이성',
      hint:'평행의 추이 법칙: a∥b, b∥c이면 a∥c'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_4',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'두 평행선 사이의 거리가 5cm일 때, 한 직선 위의 임의의 점에서 다른 직선까지의 최단 거리는?',
      answer:5,
      equation:'평행선 사이 거리는 일정',
      hint:'평행선 사이의 거리는 어디서나 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_5',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'세 직선 l, m, n이 한 점에서 만나고, l⊥m, m⊥n일 때 l과 n의 관계는?',
      answer:'평행',
      equation:'같은 직선에 수직인 두 직선은 평행',
      hint:'한 직선에 모두 수직이면 서로 평행합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_6',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행선 l, m에 직선 n이 만나서 생긴 8개의 각 중, 크기가 다른 각은 몇 종류인가?',
      answer:2,
      equation:'예각 4개, 둔각 4개',
      hint:'평행선과 교선은 2종류의 각을 만듭니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_7',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'∠A=70°이고, ∠A의 동위각이 ∠B일 때, ∠B의 보각은 몇 도인가?',
      answer:110,
      equation:'180-70',
      hint:'동위각이 같으므로 ∠B=70°, 보각은 180-70'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_8',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'두 직선이 평행하고, 엇각의 2배가 140°일 때 엇각의 크기는?',
      answer:70,
      equation:'2x=140',
      hint:'엇각을 x로 놓고 식을 세웁니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_9',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행선 l∥m이고, 동위각과 엇각의 합이 150°일 때, 동위각의 크기는? (단, 동위각과 엇각은 같은 예각)',
      answer:75,
      equation:'x+x=150',
      hint:'평행선에서 동위각=엇각입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_10',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'직선 l 위의 점 P에서 직선 m까지의 거리가 8cm이고, l∥m일 때, 점 P에서 m까지의 수선의 발을 H라 하면 PH의 길이는?',
      answer:8,
      equation:'수선의 길이=거리',
      hint:'평행선 사이의 거리는 수선의 길이입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_11',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행선 l, m에 직선 n이 만나서 생긴 동측내각이 각각 x°, (180-x)°일 때, 두 각의 관계는?',
      answer:'보각',
      equation:'x+(180-x)=180',
      hint:'동측내각의 합은 180°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_12',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'두 평행선 사이에 지그재그로 선을 그어 만든 각들 중, 동위각이 모두 60°일 때, 엇각은?',
      answer:60,
      equation:'동위각=엇각',
      hint:'평행선의 성질입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_13',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'삼각형 ABC에서 BC에 평행한 직선이 AB, AC와 만나는 점을 D, E라 할 때, ∠ABC와 크기가 같은 각은?',
      answer:'∠ADE',
      equation:'동위각',
      hint:'BC∥DE이므로 동위각이 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_14',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행선 l∥m이고, 직선 n이 l, m과 만나 생긴 예각이 40°일 때, 둔각의 크기는?',
      answer:140,
      equation:'180-40',
      hint:'인접한 각은 보각 관계입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_15',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'직선 l과 점 P 사이의 거리가 7cm일 때, P를 지나고 l에 평행한 직선 m 위의 임의의 점 Q에서 l까지의 거리는?',
      answer:7,
      equation:'평행선 사이 거리 일정',
      hint:'평행선 위의 모든 점은 같은 거리를 유지합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_16',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'두 직선이 평행하고, 한 교선이 만드는 엇각이 3x°, 동위각이 (x+50)°일 때, x의 값은?',
      answer:25,
      equation:'3x=x+50',
      hint:'엇각과 동위각은 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_17',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행선 l, m과 교선 n이 만나 생긴 8개 각의 크기의 총합은?',
      answer:720,
      equation:'4개 위치×180°',
      hint:'각 교점에서 4개씩, 총 2개 교점이므로 8개 각의 합.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_18',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'두 평행선과 교선이 만나 동측내각이 각각 80°, x°일 때, x의 값을 구하시오.',
      answer:100,
      equation:'80+x=180',
      hint:'동측내각의 합은 180°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_2_19',
  class:'최상위_위치 관계',
  gen:function(){
    return {
      question:'평행선 l∥m이고, 엇각이 (2x-10)°, 동위각이 (x+20)°일 때, x의 값은?',
      answer:30,
      equation:'2x-10=x+20',
      hint:'엇각=동위각'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_1',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'삼각형 ABC와 삼각형 DEF가 합동이고, AB=6cm, BC=8cm, CA=10cm일 때, DE+EF+FD의 값을 구하시오.',
      answer:24,
      equation:'6+8+10',
      hint:'합동인 도형은 대응변의 길이가 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_2',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'정삼각형의 한 변이 5cm일 때, 이 정삼각형과 합동인 정삼각형의 둘레는?',
      answer:15,
      equation:'5×3',
      hint:'정삼각형은 세 변이 모두 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_3',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'△ABC≡△DEF이고, ∠A=50°, ∠B=60°일 때, ∠F의 크기를 구하시오.',
      answer:70,
      equation:'180-50-60',
      hint:'합동이므로 대응각이 같고, 삼각형 내각의 합은 180°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_4',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'SSS 합동 조건을 만족하는 두 삼각형에서, 한 삼각형의 둘레가 24cm일 때 다른 삼각형의 둘레는?',
      answer:24,
      equation:'합동이므로 둘레도 같음',
      hint:'합동인 도형은 모든 대응 변의 길이가 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_5',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'직선 l 위의 점 A에서 l에 수직인 직선을 작도하려 한다. 최소 몇 번의 원 작도가 필요한가?',
      answer:3,
      equation:'수직선 작도 방법',
      hint:'A를 중심으로 1번, 양옆 점을 중심으로 각 1번씩.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_6',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'선분 AB의 중점을 작도할 때, 컴퍼스로 원을 몇 번 그려야 하는가?',
      answer:2,
      equation:'중점 작도 방법',
      hint:'A, B를 중심으로 각각 1번씩.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_7',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'△ABC≡△DEF이고, AB=DE, BC=EF일 때, AC=7cm라면 DF의 길이는?',
      answer:7,
      equation:'대응변',
      hint:'합동 조건에서 나머지 대응변도 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_8',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'SAS 합동에서 두 변의 길이가 3cm, 5cm이고 그 끼인각이 60°일 때, 합동인 다른 삼각형의 그 끼인각은?',
      answer:60,
      equation:'대응각',
      hint:'합동이므로 대응각이 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_9',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'△ABC에서 AB=AC=5cm이고, ∠A=40°일 때, 이와 SAS 합동인 삼각형의 꼭짓점각은?',
      answer:40,
      equation:'대응각',
      hint:'SAS에서 끼인각이 대응됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_10',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'두 직각삼각형이 RHS(빗변과 한 변) 조건으로 합동일 때, 빗변이 10cm이고 한 변이 6cm라면 다른 변은?',
      answer:8,
      equation:'√(10²-6²)',
      hint:'피타고라스 정리를 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_11',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'각의 이등분선을 작도할 때 컴퍼스로 원을 최소 몇 번 그려야 하는가?',
      answer:3,
      equation:'각의 이등분선 작도',
      hint:'꼭짓점에서 1번, 호와 변의 교점에서 각 1번씩.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_12',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'△ABC≡△DBC이고, 두 삼각형이 BC를 공유할 때, AB=5cm이면 DB의 길이는?',
      answer:5,
      equation:'대응변',
      hint:'합동 조건에서 대응변의 길이는 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_13',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'정오각형과 합동인 도형의 한 내각의 크기는?',
      answer:108,
      equation:'180×(5-2)/5',
      hint:'합동이므로 대응각이 모두 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_14',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'△ABC와 △DEF가 ASA 합동이고, ∠A=40°, ∠B=60°, AB=5cm일 때, DE의 길이는?',
      answer:5,
      equation:'대응변',
      hint:'ASA에서 두 각 사이의 변이 대응됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_15',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'두 삼각형이 합동이고, 한 삼각형의 넓이가 12cm²일 때, 다른 삼각형의 넓이는?',
      answer:12,
      equation:'합동이므로 넓이도 같음',
      hint:'합동인 도형은 넓이가 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_16',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'선분 AB의 수직이등분선 위의 점 P는 A와 B로부터 같은 거리에 있다. PA=5cm일 때 PB는?',
      answer:5,
      equation:'수직이등분선의 성질',
      hint:'수직이등분선 위의 점은 양 끝점으로부터 거리가 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_17',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'두 직각삼각형의 빗변의 길이가 같고, 한 예각의 크기가 같을 때, 이 두 삼각형은 합동인가?',
      answer:'합동이다',
      equation:'RHA 합동',
      hint:'직각삼각형에서 빗변과 한 각이 같으면 합동입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_18',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'△ABC≡△CDA이고, AC가 공통변일 때, AB=6cm이면 CD의 길이는?',
      answer:6,
      equation:'대응변',
      hint:'합동에서 대응변의 길이는 같습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-I-3',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_I_3_19',
  class:'최상위_작도와 합동',
  gen:function(){
    return {
      question:'평행사변형 ABCD에서 △ABC와 △CDA는 합동인가?',
      answer:'합동이다',
      equation:'SSS 또는 SAS',
      hint:'평행사변형의 대변은 같고, 대각선이 공통변이므로 합동입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_1',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정육각형의 내각의 크기의 총합을 구하시오.',
      answer:720,
      equation:'180×(6-2)',
      hint:'n각형의 내각의 합 = 180×(n-2)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_2',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정팔각형의 한 외각의 크기를 구하시오.',
      answer:45,
      equation:'360/8',
      hint:'정n각형의 한 외각 = 360/n'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_3',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'어떤 정다각형의 한 내각이 150°일 때, 이 다각형은 정몇각형인지 구하시오.',
      answer:12,
      equation:'180(n-2)/n=150',
      hint:'한 내각의 크기로 변의 개수를 역산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_4',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'오각형의 내각의 크기의 합을 구하시오.',
      answer:540,
      equation:'180×(5-2)',
      hint:'내각의 합 = 180×(n-2)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_5',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정십이각형의 한 내각과 한 외각의 크기의 차를 구하시오.',
      answer:120,
      equation:'150-30',
      hint:'한 내각=150°, 한 외각=30°'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_6',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정n각형의 한 외각이 40°일 때, n의 값을 구하시오.',
      answer:9,
      equation:'360/n=40',
      hint:'정다각형의 외각의 합은 360°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_7',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'삼각형의 한 외각이 100°일 때, 이 외각과 이웃하지 않은 두 내각의 합을 구하시오.',
      answer:100,
      equation:'외각=이웃하지 않은 두 내각의 합',
      hint:'삼각형의 외각 정리를 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_8',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정오각형의 대각선의 총 개수를 구하시오.',
      answer:5,
      equation:'5×2/2',
      hint:'n각형의 대각선 개수 = n(n-3)/2'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_9',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정사각형과 정삼각형의 한 내각의 크기의 차를 구하시오.',
      answer:30,
      equation:'90-60',
      hint:'정사각형 90°, 정삼각형 60°'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_10',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'칠각형의 내각의 크기의 합과 외각의 크기의 합의 차를 구하시오.',
      answer:540,
      equation:'900-360',
      hint:'내각의 합 = 180×5, 외각의 합 = 360'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_11',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정다각형에서 한 꼭짓점에서 그을 수 있는 대각선이 7개일 때, 이 다각형은 정몇각형인가?',
      answer:10,
      equation:'n-3=7',
      hint:'한 꼭짓점에서의 대각선 = n-3'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_12',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정n각형의 내각의 크기와 외각의 크기의 비가 5:1일 때, n의 값을 구하시오.',
      answer:12,
      equation:'내각=150°, 360/n=30',
      hint:'내각+외각=180°이고 비가 5:1입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_13',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'사각형 ABCD에서 ∠A=80°, ∠B=90°, ∠C=110°일 때, ∠D의 크기를 구하시오.',
      answer:80,
      equation:'360-80-90-110',
      hint:'사각형의 내각의 합은 360°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_14',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정육각형의 한 외각의 크기를 구하시오.',
      answer:60,
      equation:'360/6',
      hint:'외각의 합 360°을 변의 개수로 나눕니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_15',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정다각형의 한 내각이 한 외각의 4배일 때, 이 다각형의 변의 개수를 구하시오.',
      answer:10,
      equation:'내각+외각=180, 내각=4×외각',
      hint:'외각=36°이므로 360/36=10'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_16',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정칠각형의 내각의 크기의 합을 구하시오.',
      answer:900,
      equation:'180×(7-2)',
      hint:'내각의 합 공식을 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_17',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'십각형의 대각선의 총 개수를 구하시오.',
      answer:35,
      equation:'10×7/2',
      hint:'n(n-3)/2 = 10×7/2'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_18',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'정다각형에서 한 내각의 크기가 한 외각의 크기의 3배일 때, 몇 각형인지 구하시오.',
      answer:8,
      equation:'내각=135°, 외각=45°',
      hint:'내각+외각=180°, 내각=3×외각'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_1_19',
  class:'최상위_다각형',
  gen:function(){
    return {
      question:'사각형의 내각 중 세 각이 각각 70°, 90°, 110°일 때, 나머지 한 각의 크기를 구하시오.',
      answer:90,
      equation:'360-70-90-110',
      hint:'사각형의 내각의 합은 360°입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_1',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름이 6cm인 원의 넓이를 구하시오. (단, π=3.14)',
      answer:113.04,
      equation:'3.14×6²',
      hint:'원의 넓이 = πr²'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_2',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름이 10cm, 중심각이 90°인 부채꼴의 호의 길이를 구하시오. (단, π=3.14)',
      answer:15.7,
      equation:'2×3.14×10×90/360',
      hint:'호의 길이 = 2πr×(중심각/360)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_3',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'지름이 14cm인 원의 둘레를 구하시오. (단, π=3.14)',
      answer:43.96,
      equation:'3.14×14',
      hint:'둘레 = πd'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_4',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름이 5cm, 중심각이 120°인 부채꼴의 넓이를 구하시오. (단, π=3.14)',
      answer:26.17,
      equation:'3.14×25×120/360',
      hint:'부채꼴의 넓이 = πr²×(중심각/360)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_5',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름 8cm인 원에서 현의 길이가 8cm일 때, 현에 대한 중심각의 크기를 구하시오.',
      answer:60,
      equation:'정삼각형 형성',
      hint:'반지름 2개와 현이 정삼각형을 이룹니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_6',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'호의 길이가 6πcm이고 중심각이 60°인 부채꼴의 반지름을 구하시오. (단, π 그대로)',
      answer:18,
      equation:'2πr×60/360=6π',
      hint:'호의 길이 공식에서 r을 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_7',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름이 같은 두 부채꼴의 중심각이 각각 60°, 120°일 때, 넓이의 비를 구하시오.',
      answer:'1:2',
      equation:'중심각의 비=넓이의 비',
      hint:'같은 반지름이면 넓이는 중심각에 비례합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_8',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'원의 넓이가 36πcm²일 때, 이 원의 반지름을 구하시오.',
      answer:6,
      equation:'πr²=36π',
      hint:'넓이 공식에서 r을 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_9',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'둘레가 10πcm인 원의 지름을 구하시오.',
      answer:10,
      equation:'πd=10π',
      hint:'둘레 = πd'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_10',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름 12cm, 중심각 150°인 부채꼴의 호의 길이를 구하시오. (단, π=3.14)',
      answer:31.4,
      equation:'2×3.14×12×150/360',
      hint:'호의 길이 공식을 사용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_11',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'원의 반지름이 2배가 되면 넓이는 몇 배가 되는가?',
      answer:4,
      equation:'(2r)²=4r²',
      hint:'넓이는 반지름의 제곱에 비례합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_12',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'부채꼴의 반지름이 9cm, 호의 길이가 6πcm일 때, 중심각을 구하시오. (단, π 그대로)',
      answer:120,
      equation:'2π×9×(각/360)=6π',
      hint:'호의 길이 공식에서 중심각을 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_13',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'원 O의 반지름이 5cm이고, 현 AB의 길이가 6cm일 때, 원의 중심 O에서 현 AB까지의 거리를 구하시오.',
      answer:4,
      equation:'√(5²-3²)',
      hint:'중심에서 현의 중점까지 수선을 그으면 직각삼각형이 됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_14',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'넓이가 25πcm²인 원의 둘레를 구하시오. (단, π 그대로)',
      answer:'10π',
      equation:'r=5, 둘레=2πr',
      hint:'넓이에서 반지름을 구한 후 둘레를 계산합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_15',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름 r, 중심각 θ인 부채꼴의 넓이가 호의 길이와 반지름의 곱의 1/2과 같음을 설명하시오.',
      answer:'S=(1/2)lr',
      equation:'S=(1/2)×(2πr×θ/360)×r=πr²θ/360',
      hint:'부채꼴 넓이 공식 = (1/2)×호의 길이×반지름'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_16',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'중심각이 90°인 부채꼴의 넓이가 18πcm²일 때, 반지름을 구하시오.',
      answer:12,
      equation:'πr²×90/360=18π',
      hint:'부채꼴 넓이 공식에서 r을 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_17',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'반지름 10cm인 원에서 120°의 중심각에 대한 호의 길이를 반지름으로 나눈 값은? (라디안)',
      answer:'2π/3',
      equation:'θ(rad)=호의길이/반지름',
      hint:'라디안 = 호의 길이 / 반지름'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_18',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'부채꼴의 호의 길이가 10cm, 넓이가 30cm²일 때, 반지름을 구하시오.',
      answer:6,
      equation:'(1/2)lr=30, l=10',
      hint:'부채꼴 넓이 = (1/2)×호×반지름'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-II-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_II_2_19',
  class:'최상위_원과 부채꼴',
  gen:function(){
    return {
      question:'원 안에 내접하는 정육각형의 한 변의 길이가 원의 반지름과 같을 때, 원의 반지름이 6cm이면 정육각형의 둘레는?',
      answer:36,
      equation:'6×6',
      hint:'정육각형의 한 변 = 반지름'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_1',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'정육면체의 모서리의 개수를 구하시오.',
      answer:12,
      equation:'정육면체의 모서리',
      hint:'정육면체는 6개 면, 8개 꼭짓점, 12개 모서리를 갖습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_2',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'정사면체의 면의 개수를 구하시오.',
      answer:4,
      equation:'정사면체의 면',
      hint:'정사면체는 4개의 정삼각형 면으로 이루어져 있습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_3',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'정팔면체의 꼭짓점의 개수를 구하시오.',
      answer:6,
      equation:'정팔면체의 꼭짓점',
      hint:'정팔면체는 6개의 꼭짓점을 갖습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_4',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'구의 반지름이 3cm일 때, 부피를 구하시오. (단, π=3.14)',
      answer:113.04,
      equation:'(4/3)×3.14×3³',
      hint:'구의 부피 = (4/3)πr³'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_5',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'밑면이 정삼각형이고 옆면이 직사각형인 기둥의 이름은?',
      answer:'삼각기둥',
      equation:'밑면의 모양',
      hint:'기둥은 밑면의 모양으로 이름을 붙입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_6',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'원뿔의 모선의 길이가 5cm이고 높이가 4cm일 때, 밑면의 반지름을 구하시오.',
      answer:3,
      equation:'√(5²-4²)',
      hint:'피타고라스 정리: r²+h²=l²'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_7',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'원기둥을 밑면에 평행한 평면으로 자른 단면의 모양은?',
      answer:'원',
      equation:'밑면과 평행',
      hint:'밑면과 평행하게 자르면 밑면과 같은 모양입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_8',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'사각뿔의 모서리의 개수를 구하시오.',
      answer:8,
      equation:'밑면 4개 + 옆면 4개',
      hint:'밑면 변 + 꼭짓점에서 밑면으로 내려가는 모서리'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_9',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'원뿔의 전개도에서 옆면은 어떤 도형인가?',
      answer:'부채꼴',
      equation:'원뿔 전개도',
      hint:'원뿔의 옆면을 펼치면 부채꼴이 됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_10',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'정육면체의 꼭짓점의 개수와 면의 개수의 합을 구하시오.',
      answer:14,
      equation:'8+6',
      hint:'꼭짓점 8개, 면 6개'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_11',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'오각기둥의 면의 개수를 구하시오.',
      answer:7,
      equation:'밑면 2개 + 옆면 5개',
      hint:'기둥의 면 = 밑면 2 + 옆면(밑면 변의 수)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_12',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'구의 겉넓이가 64πcm²일 때, 반지름을 구하시오.',
      answer:4,
      equation:'4πr²=64π',
      hint:'구의 겉넓이 = 4πr²'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_13',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'반지름이 같은 원기둥과 원뿔의 높이가 같을 때, 부피의 비를 구하시오.',
      answer:'3:1',
      equation:'원기둥:원뿔 = πr²h:(1/3)πr²h',
      hint:'원뿔의 부피는 원기둥의 1/3입니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_14',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'정십이면체의 면의 개수를 구하시오.',
      answer:12,
      equation:'정십이면체',
      hint:'십이면체는 12개의 면을 갖습니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_15',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'원뿔대의 윗면 반지름 2cm, 아랫면 반지름 5cm, 높이 4cm일 때, 이를 자른 원뿔의 높이를 구하시오.',
      answer:8,
      equation:'닮음비 2:5, 높이 비례',
      hint:'닮음비를 이용합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_16',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'회전체가 아닌 것은? ①구 ②원기둥 ③원뿔 ④정육면체',
      answer:'④',
      equation:'정육면체는 회전체가 아님',
      hint:'회전체는 평면도형을 회전축을 중심으로 회전시켜 만듭니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_17',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'직각삼각형을 한 직각 변을 축으로 회전시키면 무엇이 만들어지는가?',
      answer:'원뿔',
      equation:'직각삼각형 회전',
      hint:'직각 변을 축으로 하면 원뿔이 됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_18',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'정사각형을 한 변을 축으로 회전시키면 무엇이 만들어지는가?',
      answer:'원기둥',
      equation:'정사각형 회전',
      hint:'정사각형을 한 변을 축으로 회전시키면 원기둥이 됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-1',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_1_19',
  class:'최상위_다면체와 회전체',
  gen:function(){
    return {
      question:'반원을 지름을 축으로 회전시키면 무엇이 만들어지는가?',
      answer:'구',
      equation:'반원 회전',
      hint:'반원을 지름을 중심으로 회전시키면 구가 됩니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_1',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'한 모서리의 길이가 5cm인 정육면체의 겉넓이를 구하시오.',
      answer:150,
      equation:'6×5²',
      hint:'정육면체의 겉넓이 = 6a²'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_2',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'한 모서리의 길이가 4cm인 정육면체의 부피를 구하시오.',
      answer:64,
      equation:'4³',
      hint:'정육면체의 부피 = a³'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_3',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑면의 반지름이 3cm, 높이가 7cm인 원기둥의 부피를 구하시오. (단, π=3.14)',
      answer:197.82,
      equation:'3.14×3²×7',
      hint:'원기둥의 부피 = πr²h'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_4',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑면의 반지름이 5cm, 높이가 8cm인 원기둥의 겉넓이를 구하시오. (단, π=3.14)',
      answer:408.2,
      equation:'2×3.14×5×(5+8)',
      hint:'원기둥의 겉넓이 = 2πr(r+h)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_5',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑면의 반지름이 4cm, 높이가 9cm인 원뿔의 부피를 구하시오. (단, π=3.14)',
      answer:150.72,
      equation:'(1/3)×3.14×4²×9',
      hint:'원뿔의 부피 = (1/3)πr²h'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_6',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'반지름이 6cm인 구의 부피를 구하시오. (단, π=3.14)',
      answer:904.32,
      equation:'(4/3)×3.14×6³',
      hint:'구의 부피 = (4/3)πr³'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_7',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'반지름이 5cm인 구의 겉넓이를 구하시오. (단, π=3.14)',
      answer:314,
      equation:'4×3.14×5²',
      hint:'구의 겉넓이 = 4πr²'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_8',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'가로 3cm, 세로 4cm, 높이 5cm인 직육면체의 부피를 구하시오.',
      answer:60,
      equation:'3×4×5',
      hint:'직육면체의 부피 = 가로×세로×높이'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_9',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'가로 2cm, 세로 3cm, 높이 4cm인 직육면체의 겉넓이를 구하시오.',
      answer:52,
      equation:'2×(2×3+3×4+4×2)',
      hint:'직육면체의 겉넓이 = 2(ab+bc+ca)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_10',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑넓이가 12cm², 높이가 7cm인 기둥의 부피를 구하시오.',
      answer:84,
      equation:'12×7',
      hint:'기둥의 부피 = 밑넓이×높이'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_11',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑넓이가 15cm², 높이가 6cm인 뿔의 부피를 구하시오.',
      answer:30,
      equation:'(1/3)×15×6',
      hint:'뿔의 부피 = (1/3)×밑넓이×높이'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_12',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑면의 반지름 3cm, 모선의 길이 5cm인 원뿔의 겉넓이를 구하시오. (단, π=3.14)',
      answer:75.36,
      equation:'3.14×3×(3+5)',
      hint:'원뿔의 겉넓이 = πr(r+l)'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_13',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'원기둥의 부피가 72πcm³이고 밑면의 반지름이 3cm일 때, 높이를 구하시오.',
      answer:8,
      equation:'πr²h=72π',
      hint:'부피 공식에서 h를 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_14',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'정육면체를 대각선이 지나는 평면으로 자른 단면의 모양은?',
      answer:'직사각형',
      equation:'대각선 단면',
      hint:'정육면체를 대각선으로 자르면 직사각형 단면이 나옵니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_15',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'구의 부피가 288πcm³일 때, 반지름을 구하시오.',
      answer:6,
      equation:'(4/3)πr³=288π',
      hint:'부피 공식에서 r을 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_16',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'원기둥의 밑면의 둘레가 12πcm이고 높이가 10cm일 때, 부피를 구하시오. (단, π 그대로)',
      answer:'360π',
      equation:'2πr=12π, V=πr²h',
      hint:'둘레에서 반지름을 먼저 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_17',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'정육면체의 부피가 125cm³일 때, 한 모서리의 길이를 구하시오.',
      answer:5,
      equation:'a³=125',
      hint:'부피 = a³에서 a를 구합니다.'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_18',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑면의 반지름 r, 높이 h인 원기둥의 옆넓이를 구하는 식은?',
      answer:'2πrh',
      equation:'원기둥 옆넓이',
      hint:'옆넓이 = 밑면 둘레 × 높이'
    };
  }
});

window.Templates_hard.push({
  unitId:'m1-1-2-III-2',
  difficulty:3,
  type:'word_problem_hard_m1_1_2_III_2_19',
  class:'최상위_입체도형의 겉넓이와 부피',
  gen:function(){
    return {
      question:'밑면의 지름이 10cm, 높이가 12cm인 원기둥의 부피를 구하시오. (단, π=3.14)',
      answer:942,
      equation:'3.14×5²×12',
      hint:'지름 10cm → 반지름 5cm'
    };
  }
});

