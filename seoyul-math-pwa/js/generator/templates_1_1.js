// 1-1 템플릿(샘플 + 확장 기반)
// NOTE: 원문 문제 복제 없이, "유형"만 참고해 새로 생성

const T11 = [];

// 소인수분해 (난이도1)
T11.push({
  key: 'prime_factorization_basic',
  unitId: 'm1-1-1-I-1',
  difficulty: 1,
  tags: ['소인수분해'],
  gen(){
    const {randInt, choice, primeFactors, factorsToString} = GenCore;
    // 2^a * 3^b * 5^c * 7^d 형태로 생성
    const a = randInt(2,5);
    const b = randInt(0,3);
    const c = randInt(0,2);
    const d = randInt(0,1);
    let n = (2**a) * (3**b) * (5**c) * (7**d);
    if(n<12) n*=3;
    const f = primeFactors(n);
    return {
      type:'short',
      question: `${n}을(를) 소인수분해하시오. (예: 2^3 × 3)`,
      answer: factorsToString(f),
      answerType: 'string',
      tolerance: 0,
      unitLabel: '',
      hint: '작은 소수(2,3,5,7...)부터 나누어 보세요.',
      explain: `${n} = ${factorsToString(f)}`
    };
  }
});

// 최대공약수/최소공배수 (난이도2)
T11.push({
  key: 'gcd_lcm_pair',
  unitId: 'm1-1-1-I-2',
  difficulty: 2,
  tags: ['최대공약수','최소공배수'],
  gen(){
    const {randInt, gcd, lcm} = GenCore;
    // gcd가 예쁘게 나오도록: A=g*m, B=g*n (m,n 서로소)
    const g = randInt(6,24);
    let m = randInt(2,12);
    let n = randInt(2,12);
    while(gcd(m,n)!==1){ m = randInt(2,12); n = randInt(2,12); }
    const A = g*m;
    const B = g*n;
    const G = gcd(A,B);
    const L = lcm(A,B);
    const ask = randInt(0,1);
    if(ask===0){
      return {
        type:'short',
        question: `${A}와(과) ${B}의 최대공약수는?`,
        answer: String(G),
        answerType:'number',
        tolerance:0,
        unitLabel:'',
        hint:'두 수를 소인수분해하고 공통인 소인수만 곱해보세요.',
        explain:`gcd(${A},${B}) = ${G}`
      };
    }
    return {
      type:'short',
      question: `${A}와(과) ${B}의 최소공배수는?`,
      answer: String(L),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'LCM은 두 수를 곱한 뒤 최대공약수로 나누는 방법도 있어요.',
      explain:`lcm(${A},${B}) = ${L}`
    };
  }
});

// 정수/유리수 계산 (난이도1)
T11.push({
  key:'integer_rational_calc',
  unitId:'m1-1-1-II-2',
  difficulty: 1,
  tags:['정수','계산'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(-20,20);
    const b = randInt(-20,20);
    const c = randInt(-10,10);
    const exprType = randInt(1,3);
    let q, ans;
    if(exprType===1){
      q = `${a} + (${b}) = ?`;
      ans = a + b;
    } else if(exprType===2){
      q = `${a} - (${b}) = ?`;
      ans = a - b;
    } else {
      q = `${a} + ${b} - (${c}) = ?`;
      ans = a + b - c;
    }
    return {
      type:'short',
      question: q,
      answer: String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'부호를 조심하세요. (빼기 괄호!)',
      explain:`계산 결과는 ${ans} 입니다.`
    };
  }
});

// 일차방정식 풀이 (난이도2)
T11.push({
  key:'linear_equation_solve',
  unitId:'m1-1-1-III-4',
  difficulty: 2,
  tags:['일차방정식','이항'],
  gen(){
    const {randInt} = GenCore;
    // 해 k를 먼저 정해서 정답이 예쁘게 나오도록 역산
    const k = randInt(-10,10);
    const a = randInt(2,9);
    const b = randInt(-20,20);
    // a x + b = c 형태로 만들기: c = a*k + b
    const c = a*k + b;
    const q = `${a}x ${b>=0?'+':''}${b} = ${c} 를 풀어라.`;
    return {
      type:'short',
      question: q,
      answer: String(k),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'미지수 항을 한쪽으로, 상수항을 반대쪽으로 옮기세요.',
      explain:`${a}x = ${c} ${b>=0?'-':''}${Math.abs(b)} → ${a}x = ${a*k} → x = ${k}`
    };
  }
});

window.Templates_1_1 = T11;
