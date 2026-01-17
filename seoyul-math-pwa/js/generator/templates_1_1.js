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

// 소인수분해 (난이도2)
T11.push({
  key: 'prime_factorization_medium',
  unitId: 'm1-1-1-I-1',
  difficulty: 2,
  tags: ['소인수분해'],
  gen(){
    const {randInt, primeFactors, factorsToString} = GenCore;
    const n = randInt(100, 500);
    const f = primeFactors(n);
    return {
      type:'short',
      question: `${n}을(를) 소인수분해하시오.`,
      answer: factorsToString(f),
      answerType: 'string',
      tolerance: 0,
      unitLabel: '',
      hint: '큰 수도 작은 소수부터 차례로 나누면 됩니다.',
      explain: `${n} = ${factorsToString(f)}`
    };
  }
});

// 소인수분해 (난이도3)
T11.push({
  key: 'prime_factorization_hard',
  unitId: 'm1-1-1-I-1',
  difficulty: 3,
  tags: ['소인수분해'],
  gen(){
    const {randInt, primeFactors, factorsToString} = GenCore;
    const n = randInt(500, 1000);
    const f = primeFactors(n);
    return {
      type:'short',
      question: `${n}을(를) 소인수분해하시오.`,
      answer: factorsToString(f),
      answerType: 'string',
      tolerance: 0,
      unitLabel: '',
      hint: '체계적으로 2, 3, 5, 7, 11... 순서로 나누어 보세요.',
      explain: `${n} = ${factorsToString(f)}`
    };
  }
});

// 최대공약수 (난이도1)
T11.push({
  key: 'gcd_basic',
  unitId: 'm1-1-1-I-2',
  difficulty: 1,
  tags: ['최대공약수'],
  gen(){
    const {randInt, gcd} = GenCore;
    const g = randInt(3,12);
    const m = randInt(2,8);
    const n = randInt(2,8);
    const A = g*m;
    const B = g*n;
    const G = gcd(A,B);
    return {
      type:'short',
      question: `${A}와(과) ${B}의 최대공약수를 구하시오.`,
      answer: String(G),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'공통으로 나누어지는 가장 큰 수를 찾으세요.',
      explain:`최대공약수는 ${G}입니다.`
    };
  }
});

// 최소공배수 (난이도3)
T11.push({
  key: 'lcm_hard',
  unitId: 'm1-1-1-I-2',
  difficulty: 3,
  tags: ['최소공배수'],
  gen(){
    const {randInt, gcd, lcm} = GenCore;
    const a = randInt(12,50);
    const b = randInt(12,50);
    const c = randInt(12,50);
    const L12 = lcm(a,b);
    const L = lcm(L12, c);
    return {
      type:'short',
      question: `${a}, ${b}, ${c}의 최소공배수를 구하시오.`,
      answer: String(L),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'두 수씩 최소공배수를 구한 후, 세 번째 수와 다시 구합니다.',
      explain:`lcm(${a},${b},${c}) = ${L}`
    };
  }
});

// 정수와 유리수 (난이도1)
T11.push({
  key:'integer_concept',
  unitId:'m1-1-1-II-1',
  difficulty: 1,
  tags:['정수','개념'],
  gen(){
    const {randInt, choice} = GenCore;
    const questions = [
      {q: '자연수가 아닌 것은? (보기: 1, 0, -3, 5)', a: choice(['0','-3'])},
      {q: '정수가 아닌 것은? (보기: -5, 0, 3, 1.5)', a: '1.5'},
      {q: '음의 정수는? (보기: -7, 0, 5, -2.5)', a: choice(['-7'])},
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question: picked.q,
      answer: picked.a,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'정수는 ..., -2, -1, 0, 1, 2, ... 입니다.',
      explain:`정답은 ${picked.a}입니다.`
    };
  }
});

// 정수와 유리수의 곱셈/나눗셈 (난이도2)
T11.push({
  key:'integer_multiply_divide',
  unitId:'m1-1-1-II-2',
  difficulty: 2,
  tags:['정수','곱셈','나눗셈'],
  gen(){
    const {randInt, choice} = GenCore;
    const op = choice(['×', '÷']);
    if(op==='×'){
      const a = randInt(-12,12);
      const b = randInt(-12,12);
      const ans = a*b;
      return {
        type:'short',
        question: `${a} × (${b}) = ?`,
        answer: String(ans),
        answerType:'number',
        tolerance:0,
        unitLabel:'',
        hint:'부호 규칙: 같은 부호끼리 곱하면 양수, 다른 부호끼리 곱하면 음수',
        explain:`${a} × ${b} = ${ans}`
      };
    } else {
      const b = randInt(2,12) * choice([1,-1]);
      const k = randInt(-10,10);
      const a = b*k;
      return {
        type:'short',
        question: `${a} ÷ (${b}) = ?`,
        answer: String(k),
        answerType:'number',
        tolerance:0,
        unitLabel:'',
        hint:'나눗셈도 곱셈과 같은 부호 규칙을 따릅니다.',
        explain:`${a} ÷ ${b} = ${k}`
      };
    }
  }
});

// 유리수의 덧셈/뺄셈 (난이도3)
T11.push({
  key:'rational_complex',
  unitId:'m1-1-1-II-2',
  difficulty: 3,
  tags:['유리수','복합계산'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(-15,15);
    const b = randInt(-15,15);
    const c = randInt(-15,15);
    const d = randInt(-15,15);
    const ans = a + b - c + d;
    return {
      type:'short',
      question: `${a} + (${b}) - (${c}) + (${d}) = ?`,
      answer: String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'차례대로 계산하거나, 양수끼리/음수끼리 먼저 더한 후 계산해보세요.',
      explain:`${a} + ${b} - ${c} + ${d} = ${ans}`
    };
  }
});

// 문자의 사용 (난이도1)
T11.push({
  key:'variable_usage',
  unitId:'m1-1-1-III-1',
  difficulty: 1,
  tags:['문자','식'],
  gen(){
    const {randInt, choice} = GenCore;
    const x = randInt(2,9);
    const a = randInt(2,9);
    const questions = [
      {q: `x가 ${x}일 때, ${a}x의 값은?`, a: a*x},
      {q: `한 개에 ${a}원인 사탕을 x개 사면 총 금액은? (x로 나타내시오)`, a: `${a}x`, type:'string'},
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question: picked.q,
      answer: String(picked.a),
      answerType: picked.type || 'number',
      tolerance:0,
      unitLabel: picked.type==='string' ? '' : '원',
      hint:'문자는 숫자를 대신하여 식을 간단히 나타냅니다.',
      explain:`정답은 ${picked.a}입니다.`
    };
  }
});

// 문자의 사용 (난이도2)
T11.push({
  key:'variable_expression',
  unitId:'m1-1-1-III-1',
  difficulty: 2,
  tags:['문자','식'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(2,9);
    const b = randInt(2,9);
    const x = randInt(2,5);
    const ans = a*x + b;
    return {
      type:'short',
      question: `x가 ${x}일 때, ${a}x + ${b}의 값은?`,
      answer: String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'먼저 ${a}×${x}를 계산한 후 ${b}를 더하세요.',
      explain:`${a}×${x} + ${b} = ${a*x} + ${b} = ${ans}`
    };
  }
});

// 일차식의 계산 (난이도1)
T11.push({
  key:'linear_expression_add',
  unitId:'m1-1-1-III-2',
  difficulty: 1,
  tags:['일차식','덧셈'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(2,9);
    const b = randInt(2,9);
    const c = randInt(1,9);
    const d = randInt(1,9);
    const ansX = a+b;
    const ansC = c+d;
    return {
      type:'short',
      question: `(${a}x + ${c}) + (${b}x + ${d})를 간단히 하시오. (예: 5x+3)`,
      answer: `${ansX}x${ansC>=0?'+':''}${ansC}`,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'동류항끼리 계수를 더하세요.',
      explain:`${a}x + ${b}x = ${ansX}x, ${c} + ${d} = ${ansC}, 답: ${ansX}x+${ansC}`
    };
  }
});

// 일차식의 계산 (난이도2)
T11.push({
  key:'linear_expression_subtract',
  unitId:'m1-1-1-III-2',
  difficulty: 2,
  tags:['일차식','뺄셈'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(3,9);
    const b = randInt(2,9);
    const c = randInt(1,9);
    const d = randInt(1,9);
    const ansX = a-b;
    const ansC = c-d;
    return {
      type:'short',
      question: `(${a}x + ${c}) - (${b}x + ${d})를 간단히 하시오.`,
      answer: `${ansX}x${ansC>=0?'+':''}${ansC}`,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'빼는 식은 부호를 바꿔서 더합니다.',
      explain:`${a}x - ${b}x = ${ansX}x, ${c} - ${d} = ${ansC}, 답: ${ansX}x${ansC>=0?'+':''}${ansC}`
    };
  }
});

// 방정식의 해 (난이도1)
T11.push({
  key:'equation_solution',
  unitId:'m1-1-1-III-3',
  difficulty: 1,
  tags:['방정식','해'],
  gen(){
    const {randInt} = GenCore;
    const x = randInt(-5,10);
    const a = randInt(2,9);
    const b = randInt(-10,10);
    const c = a*x + b;
    return {
      type:'short',
      question: `x = ${x}이 방정식 ${a}x + ${b} = c의 해일 때, c의 값은?`,
      answer: String(c),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'주어진 x값을 식에 대입하여 c를 구하세요.',
      explain:`${a}×${x} + ${b} = ${a*x} + ${b} = ${c}`
    };
  }
});

// 일차방정식 풀이 (난이도1)
T11.push({
  key:'linear_equation_simple',
  unitId:'m1-1-1-III-4',
  difficulty: 1,
  tags:['일차방정식'],
  gen(){
    const {randInt} = GenCore;
    const x = randInt(-10,10);
    const a = randInt(2,9);
    const c = a*x;
    return {
      type:'short',
      question: `${a}x = ${c}를 풀어라.`,
      answer: String(x),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'양변을 ${a}로 나누세요.',
      explain:`x = ${c} ÷ ${a} = ${x}`
    };
  }
});

// 일차방정식 풀이 (난이도3)
T11.push({
  key:'linear_equation_complex',
  unitId:'m1-1-1-III-4',
  difficulty: 3,
  tags:['일차방정식','괄호'],
  gen(){
    const {randInt} = GenCore;
    const x = randInt(-8,8);
    const a = randInt(2,6);
    const b = randInt(2,6);
    const c = randInt(-10,10);
    const d = randInt(-10,10);
    // (a+b)x + c + d = (a+b)*x + c + d
    const right = (a+b)*x + c + d;
    // 자연스러운 표현을 위한 부호 처리
    const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    const acStr = (a*c) >= 0 ? `+ ${a*c}` : `- ${Math.abs(a*c)}`;
    const sumStr = (a+b)*x >= 0 ? `= ${(a+b)*x}` : `= ${(a+b)*x}`;
    return {
      type:'short',
      question: `${a}(x ${cStr}) + ${b}x = ${right - a*c} (괄호를 먼저 풀고 풀어라)`,
      answer: String(x),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'괄호를 풀고 동류항끼리 정리한 후, 이항하세요.',
      explain:`${a}x ${acStr} + ${b}x = ${right - a*c} → ${a+b}x ${sumStr} → x = ${x}`
    };
  }
});

// 일차방정식의 활용 (난이도1)
T11.push({
  key:'word_problem_basic',
  unitId:'m1-1-1-III-5',
  difficulty: 1,
  tags:['활용','문장제'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      // 연필 묶음
      () => {
        const perBundle = choice([5, 10, 12]);
        const bundles = randInt(3, 10);
        const total = perBundle * bundles;
        return {
          question: `연필을 ${perBundle}자루씩 묶음으로 팔고 있습니다. 총 ${total}자루가 있다면 몇 묶음인가요?`,
          answer: String(bundles),
          unitLabel: '묶음',
          hint: `${perBundle}x = ${total} 형태로 식을 세워보세요.`,
          explain: `${perBundle}x = ${total}, x = ${bundles}`
        };
      },
      // 과자 나누기
      () => {
        const perPerson = randInt(3, 8);
        const people = randInt(5, 15);
        const total = perPerson * people;
        return {
          question: `과자 ${total}개를 ${people}명에게 똑같이 나눠 줍니다. 한 명당 받는 과자는 몇 개입니까?`,
          answer: String(perPerson),
          unitLabel: '개',
          hint: `${people}x = ${total} 형태로 식을 세워보세요.`,
          explain: `${people}x = ${total}, x = ${perPerson}`
        };
      },
      // 책 가격
      () => {
        const books = randInt(3, 8);
        const pricePerBook = choice([5000, 8000, 10000, 12000]);
        const total = books * pricePerBook;
        return {
          question: `같은 가격의 책을 ${books}권 샀더니 총 ${total.toLocaleString()}원이 나왔습니다. 책 한 권의 가격은?`,
          answer: String(pricePerBook),
          unitLabel: '원',
          hint: `${books}x = ${total} 형태로 식을 세워보세요.`,
          explain: `${books}x = ${total}, x = ${pricePerBook}`
        };
      }
    ];
    const picked = choice(scenarios)();
    return {
      type:'short',
      question: picked.question,
      answer: picked.answer,
      answerType:'number',
      tolerance:0,
      unitLabel: picked.unitLabel,
      hint: picked.hint,
      explain: picked.explain
    };
  }
});

// 일차방정식의 활용 (난이도2)
T11.push({
  key:'word_problem_medium',
  unitId:'m1-1-1-III-5',
  difficulty: 2,
  tags:['활용','문장제'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      // 문구점 구매
      () => {
        const items = randInt(5, 20);
        const pricePerItem = choice([1000, 1500, 2000, 2500, 3000]);
        const delivery = choice([2500, 3000]);
        const total = pricePerItem * items + delivery;
        return {
          question: `문구점에서 공책을 한 권에 ${pricePerItem.toLocaleString()}원씩 x권 사고, 배송비 ${delivery.toLocaleString()}원을 내서 총 ${total.toLocaleString()}원을 지불했습니다. x는?`,
          answer: String(items),
          unitLabel: '권',
          hint: `${pricePerItem}x + ${delivery} = ${total} 형태로 식을 세우세요.`,
          explain: `${pricePerItem}x = ${total-delivery}, x = ${items}`
        };
      },
      // 펜 구매
      () => {
        const items = randInt(10, 30);
        const pricePerItem = choice([500, 800, 1000, 1200]);
        const discount = choice([1000, 1500, 2000]);
        const total = pricePerItem * items - discount;
        return {
          question: `펜을 한 개에 ${pricePerItem.toLocaleString()}원씩 x개 사면 ${discount.toLocaleString()}원 할인을 받습니다. ${total.toLocaleString()}원을 냈다면 x는?`,
          answer: String(items),
          unitLabel: '개',
          hint: `${pricePerItem}x - ${discount} = ${total} 형태로 식을 세우세요.`,
          explain: `${pricePerItem}x = ${total+discount}, x = ${items}`
        };
      },
      // 카페 구매
      () => {
        const drinks = randInt(3, 8);
        const pricePerDrink = choice([3500, 4000, 4500, 5000]);
        const cake = choice([5000, 6000]);
        const total = pricePerDrink * drinks + cake;
        return {
          question: `카페에서 음료를 한 잔에 ${pricePerDrink.toLocaleString()}원씩 x잔 사고, 케이크 ${cake.toLocaleString()}원을 사서 총 ${total.toLocaleString()}원을 냈습니다. x는?`,
          answer: String(drinks),
          unitLabel: '잔',
          hint: `${pricePerDrink}x + ${cake} = ${total} 형태로 식을 세우세요.`,
          explain: `${pricePerDrink}x = ${total-cake}, x = ${drinks}`
        };
      }
    ];
    const picked = choice(scenarios)();
    return {
      type:'short',
      question: picked.question,
      answer: picked.answer,
      answerType:'number',
      tolerance:0,
      unitLabel: picked.unitLabel,
      hint: picked.hint,
      explain: picked.explain
    };
  }
});

// 일차방정식의 활용 (난이도3) - 두 수 문제
T11.push({
  key:'word_problem_hard',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','문장제'],
  gen(){
    const {randInt} = GenCore;
    const small = randInt(5,15);
    const large = randInt(20,40);
    const total = small + large;
    const diff = large - small;
    return {
      type:'short',
      question: `두 수의 합이 ${total}이고, 큰 수가 작은 수보다 ${diff}만큼 큽니다. 작은 수는?`,
      answer: String(small),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'작은 수를 x라 하면, 큰 수는 x+${diff}입니다. x + (x+${diff}) = ${total}',
      explain:`2x + ${diff} = ${total}, 2x = ${total-diff}, x = ${small}`
    };
  }
});

// 거리/속력/시간 (난이도3)
T11.push({
  key:'distance_speed_time',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','거리속력시간'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      // 따라잡기
      () => {
        const speed1 = randInt(3,5);
        const speed2 = speed1 + randInt(1,3);
        const delay = choice([1,2]);
        const distance = speed1 * delay;
        const time = distance / (speed2 - speed1);
        return {
          question: `형은 시속 ${speed1}km로 먼저 출발하고, ${delay}시간 후에 동생이 시속 ${speed2}km로 같은 길을 따라갔습니다. 동생이 형을 따라잡는 데 걸린 시간은?`,
          answer: String(time),
          unitLabel: '시간',
          hint: '형이 간 거리 = 동생이 간 거리',
          explain: `형: ${speed1}(x+${delay}), 동생: ${speed2}x, ${speed1}(x+${delay})=${speed2}x, x=${time}시간`
        };
      },
      // 맞은편에서 출발
      () => {
        const speed1 = randInt(40,60);
        const speed2 = randInt(40,60);
        const distance = randInt(200,400);
        const time = distance / (speed1 + speed2);
        return {
          question: `${distance}km 떨어진 두 지점에서 A는 시속 ${speed1}km, B는 시속 ${speed2}km로 동시에 출발했습니다. 만나는 데 걸린 시간은?`,
          answer: String(time.toFixed(1)),
          unitLabel: '시간',
          hint: 'A가 간 거리 + B가 간 거리 = 전체 거리',
          explain: `${speed1}x + ${speed2}x = ${distance}, x = ${time.toFixed(1)}시간`
        };
      },
      // 정거장 왕복
      () => {
        const speed = randInt(8,15);
        const distance = randInt(20,50);
        const roundTime = (distance / speed) * 2;
        return {
          question: `시속 ${speed}km로 ${distance}km 떨어진 정거장을 왕복하는 데 걸린 시간은?`,
          answer: String(roundTime.toFixed(1)),
          unitLabel: '시간',
          hint: '왕복 거리는 거리의 2배',
          explain: `${distance}×2 ÷ ${speed} = ${roundTime.toFixed(1)}시간`
        };
      }
    ];
    const picked = choice(scenarios)();
    return {
      type:'short',
      question: picked.question,
      answer: picked.answer,
      answerType:'number',
      tolerance:0.1,
      unitLabel: picked.unitLabel,
      hint: picked.hint,
      explain: picked.explain
    };
  }
});

// 과부족 문제 (난이도3)
T11.push({
  key:'shortage_surplus',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','과부족'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      // 사탕 나눠주기
      () => {
        const students = randInt(15,30);
        const per1 = randInt(5,8);
        const per2 = per1 + randInt(2,4);
        const surplus = randInt(5,15);
        const shortage = randInt(5,15);
        const total = students * per1 + surplus;
        return {
          question: `학생들에게 사탕을 ${per1}개씩 나눠주면 ${surplus}개가 남고, ${per2}개씩 나눠주면 ${shortage}개가 부족합니다. 사탕은 몇 개입니까?`,
          answer: String(total),
          unitLabel: '개',
          hint: '학생 수를 x라 하고 두 경우의 사탕 개수가 같다는 식을 세우세요',
          explain: `${per1}x+${surplus}=${per2}x-${shortage}, x=${students}, 사탕=${total}개`
        };
      },
      // 초콜릿 봉지
      () => {
        const bags = randInt(10,20);
        const per1 = randInt(5,8);
        const per2 = per1 + randInt(2,4);
        const surplus = randInt(3,10);
        const lack = randInt(2,8);
        const total = bags * per1 + surplus;
        return {
          question: `초콜릿을 봉지에 담는데 ${per1}개씩 담으면 ${surplus}개가 남고, ${per2}개씩 담으면 마지막 봉지에 ${lack}개가 부족합니다. 초콜릿은 몇 개입니까?`,
          answer: String(total),
          unitLabel: '개',
          hint: '봉지 수를 x라 하고 초콜릿 개수가 같다는 식을 세우세요',
          explain: `${per1}x+${surplus}=${per2}(x-1)+${per2-lack}, x=${bags}, 초콜릿=${total}개`
        };
      }
    ];
    const picked = choice(scenarios)();
    return {
      type:'short',
      question: picked.question,
      answer: picked.answer,
      answerType:'number',
      tolerance:0,
      unitLabel: picked.unitLabel,
      hint: picked.hint,
      explain: picked.explain
    };
  }
});

// 소금물 농도 (난이도3)
T11.push({
  key:'salt_concentration',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','농도'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      // 물 증발
      () => {
        const originalPercent = randInt(5,12);
        const originalAmount = choice([200,300,400,500]);
        const finalPercent = originalPercent + randInt(3,8);
        const salt = originalAmount * originalPercent / 100;
        const finalAmount = salt * 100 / finalPercent;
        const evaporated = originalAmount - finalAmount;
        return {
          question: `${originalPercent}% 소금물 ${originalAmount}g에서 물을 증발시켜 ${finalPercent}% 소금물을 만들었습니다. 증발시킨 물의 양은?`,
          answer: String(Math.round(evaporated)),
          unitLabel: 'g',
          hint: '소금의 양은 변하지 않습니다',
          explain: `소금: ${salt}g, ${salt}÷${finalPercent}×100=${Math.round(finalAmount)}g, 증발: ${Math.round(evaporated)}g`
        };
      },
      // 물 추가
      () => {
        const originalPercent = randInt(10,20);
        const originalAmount = choice([100,200,300]);
        const finalPercent = originalPercent - randInt(3,6);
        const salt = originalAmount * originalPercent / 100;
        const finalAmount = salt * 100 / finalPercent;
        const added = finalAmount - originalAmount;
        return {
          question: `${originalPercent}% 소금물 ${originalAmount}g에 물을 넣어 ${finalPercent}% 소금물을 만들었습니다. 넣은 물의 양은?`,
          answer: String(Math.round(added)),
          unitLabel: 'g',
          hint: '소금의 양은 변하지 않습니다',
          explain: `소금: ${salt}g, ${salt}÷${finalPercent}×100=${Math.round(finalAmount)}g, 물: ${Math.round(added)}g`
        };
      },
      // 두 소금물 섞기
      () => {
        const percent1 = randInt(5,10);
        const amount1 = choice([100,200,300]);
        const percent2 = randInt(12,18);
        const amountX = randInt(100,300);
        const salt1 = amount1 * percent1 / 100;
        const salt2 = amountX * percent2 / 100;
        const finalPercent = Math.round((salt1 + salt2) / (amount1 + amountX) * 100);
        return {
          question: `${percent1}% 소금물 ${amount1}g과 ${percent2}% 소금물을 섞어 ${finalPercent}% 소금물을 만들었습니다. ${percent2}% 소금물의 양은?`,
          answer: String(amountX),
          unitLabel: 'g',
          hint: '섞은 후 전체 소금 양 = 각각의 소금 양의 합',
          explain: `${percent1/100}×${amount1}+${percent2/100}×x=${finalPercent/100}×(${amount1}+x), x=${amountX}g`
        };
      }
    ];
    const picked = choice(scenarios)();
    return {
      type:'short',
      question: picked.question,
      answer: picked.answer,
      answerType:'number',
      tolerance:1,
      unitLabel: picked.unitLabel,
      hint: picked.hint,
      explain: picked.explain
    };
  }
});

// 정수와 유리수 (난이도3) - 복합 계산
T11.push({
  key:'integer_complex_hard',
  unitId:'m1-1-1-II-2',
  difficulty: 3,
  tags:['정수','복합계산'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(-10,10);
    const b = randInt(-10,10);
    const c = randInt(-10,10);
    const d = randInt(2,9);
    const ans = ((a + b) * c) - d;
    return {
      type:'short',
      question: `(${a} + (${b})) × (${c}) - ${d} = ?`,
      answer: String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint: '괄호 안을 먼저 계산하고, 곱셈을 한 후 뺄셈을 합니다.',
      explain:`(${a}+${b})×${c}-${d} = ${a+b}×${c}-${d} = ${(a+b)*c}-${d} = ${ans}`
    };
  }
});

// 문자의 사용 (난이도3) - 복잡한 식
T11.push({
  key:'variable_complex',
  unitId:'m1-1-1-III-1',
  difficulty: 3,
  tags:['문자','복잡한식'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(2,6);
    const b = randInt(2,6);
    const c = randInt(2,6);
    const x = randInt(2,5);
    const ans = a*x*x + b*x + c;
    return {
      type:'short',
      question: `x가 ${x}일 때, ${a}x² + ${b}x + ${c}의 값은?`,
      answer: String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint: '거듭제곱을 먼저 계산하고, 곱셈 후 덧셈을 합니다.',
      explain:`${a}×${x}×${x} + ${b}×${x} + ${c} = ${a*x*x} + ${b*x} + ${c} = ${ans}`
    };
  }
});

// 일차식의 계산 (난이도3) - 복잡한 식
T11.push({
  key:'linear_expression_complex',
  unitId:'m1-1-1-III-2',
  difficulty: 3,
  tags:['일차식','괄호풀기'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(2,5);
    const b = randInt(2,5);
    const c = randInt(-5,5);
    const d = randInt(-5,5);
    const ansX = a - b;
    const ansC = a*c - b*d;
    // 자연스러운 표현
    const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    const dStr = d >= 0 ? `+ ${d}` : `- ${Math.abs(d)}`;
    return {
      type:'short',
      question: `${a}(x ${cStr}) - ${b}(x ${dStr})를 간단히 하시오.`,
      answer: `${ansX}x${ansC>=0?'+':''}${ansC}`,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint: '분배법칙으로 괄호를 풀고 동류항끼리 정리하세요.',
      explain:`${a}x+${a*c}-${b}x-${b*d} = ${ansX}x${ansC>=0?'+':''}${ansC}`
    };
  }
});

// 방정식의 해 (난이도3)
T11.push({
  key:'equation_solution_hard',
  unitId:'m1-1-1-III-3',
  difficulty: 3,
  tags:['방정식','해','미지수'],
  gen(){
    const {randInt} = GenCore;
    const x = randInt(-5,8);
    const a = randInt(2,6);
    const b = randInt(2,6);
    const c = a*x + b;
    const d = randInt(2,5);
    return {
      type:'short',
      question: `x = ${x}이 방정식 ${a}x + ${b} = c의 해이고, c = dy일 때 y의 값은? (단, d = ${d})`,
      answer: String(Math.round(c/d)),
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint: '먼저 x를 대입하여 c를 구한 후, c = dy에서 y를 구하세요.',
      explain:`c = ${a}×${x}+${b} = ${c}, y = ${c}÷${d} = ${Math.round(c/d)}`
    };
  }
});

// 거리/속력/시간 문제 (난이도3)
T11.push({
  key:'distance_speed_time_hard',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','거리속력시간'],
  gen(){
    const {randInt} = GenCore;
    const speed1 = randInt(40,80);
    const speed2 = randInt(50,90);
    const distance = randInt(200,400);
    const time = distance / speed1;
    return {
      type:'short',
      question: `A는 시속 ${speed1}km로, B는 시속 ${speed2}km로 같은 출발점에서 같은 방향으로 출발했습니다. A가 ${distance}km를 갔을 때, B와의 거리는 몇 km입니까?`,
      answer: String(Math.abs(speed2*time - distance)),
      answerType:'number',
      tolerance:1,
      unitLabel:'km',
      hint: 'A가 걸린 시간을 구한 후, 그 시간동안 B가 간 거리를 계산하세요.',
      explain:`시간 = ${distance}÷${speed1} = ${time.toFixed(1)}시간, B의 거리 = ${speed2}×${time.toFixed(1)} = ${(speed2*time).toFixed(1)}km, 차이 = ${Math.abs(speed2*time - distance).toFixed(1)}km`
    };
  }
});

// 의자 배치 문제 (난이도3)
T11.push({
  key:'chair_shortage_problem',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','과부족'],
  gen(){
    const {randInt} = GenCore;
    const rows = randInt(8,15);
    const short = randInt(2,5);
    const over = randInt(3,7);
    // rows줄에 x개씩 놓으면 short개 부족, (x+1)개씩 놓으면 over개 남음
    // rows*x = total - (-short)
    // rows*(x+1) = total - over
    // rows*x + short = rows*x + rows - over
    // short = rows - over
    // total = rows*x + short
    const chairsPerRow = (short + over + rows) / rows;
    const totalChairs = rows * chairsPerRow - short;
    return {
      type:'short',
      question: `의자를 ${rows}줄에 같은 개수씩 놓으려고 합니다. 한 줄에 x개씩 놓으면 ${short}개가 부족하고, (x+1)개씩 놓으면 ${over}개가 남습니다. 의자는 모두 몇 개입니까?`,
      answer: String(Math.round(totalChairs)),
      answerType:'number',
      tolerance:0,
      unitLabel:'개',
      hint: '두 경우 모두 의자 개수는 같습니다. 방정식을 세워 x를 구한 후 전체 의자 개수를 계산하세요.',
      explain:`${rows}x - ${short} = ${rows}(x+1) + ${over}, ${rows}x - ${short} = ${rows}x + ${rows} + ${over}, -${short} = ${rows} + ${over}, 의자 = ${Math.round(totalChairs)}개`
    };
  }
});

// 소금물 농도 문제 (난이도3)
T11.push({
  key:'saltwater_concentration',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','농도'],
  gen(){
    const {randInt} = GenCore;
    const percent1 = randInt(5,15);
    const percent2 = randInt(15,25);
    const weight1 = randInt(100,300);
    const weight2 = randInt(100,300);
    const salt1 = weight1 * percent1 / 100;
    const salt2 = weight2 * percent2 / 100;
    const totalSalt = salt1 + salt2;
    const totalWeight = weight1 + weight2;
    const finalPercent = (totalSalt / totalWeight * 100).toFixed(1);
    return {
      type:'short',
      question: `${percent1}% 소금물 ${weight1}g과 ${percent2}% 소금물 ${weight2}g을 섞으면 몇 % 소금물이 됩니까?`,
      answer: String(finalPercent),
      answerType:'number',
      tolerance:0.5,
      unitLabel:'%',
      hint: '각 소금물의 소금 양을 구한 후, 전체 소금 양 ÷ 전체 물 양 × 100',
      explain:`소금 = ${salt1.toFixed(1)}g + ${salt2.toFixed(1)}g = ${totalSalt.toFixed(1)}g, 농도 = ${totalSalt.toFixed(1)}÷${totalWeight}×100 = ${finalPercent}%`
    };
  }
});

// 나이 문제 (난이도3)
T11.push({
  key:'age_problem_hard',
  unitId:'m1-1-1-III-5',
  difficulty: 3,
  tags:['활용','나이'],
  gen(){
    const {randInt} = GenCore;
    const currentChild = randInt(8,15);
    const currentParent = randInt(35,50);
    const yearsAgo = randInt(3,8);
    const pastChild = currentChild - yearsAgo;
    const pastParent = currentParent - yearsAgo;
    const ratio = Math.round(pastParent / pastChild);
    return {
      type:'short',
      question: `현재 아버지의 나이는 ${currentParent}세, 아들의 나이는 ${currentChild}세입니다. 아버지의 나이가 아들의 나이의 ${ratio}배였던 것은 몇 년 전입니까?`,
      answer: String(yearsAgo),
      answerType:'number',
      tolerance:0,
      unitLabel:'년',
      hint: 'x년 전의 나이를 식으로 나타내고 비율 관계식을 세우세요.',
      explain:`${yearsAgo}년 전: 아버지 ${pastParent}세, 아들 ${pastChild}세, ${pastParent}÷${pastChild} ≈ ${ratio}`
    };
  }
});

// 도형 둘레 문제 (난이도3)
T11.push({
  key:'rectangle_perimeter_hard',
  unitId:'m1-1-2-I-1',
  difficulty: 3,
  tags:['기본도형','둘레'],
  gen(){
    const {randInt} = GenCore;
    const width = randInt(5,15);
    const lengthRatio = randInt(2,4);
    const length = width * lengthRatio;
    const perimeter = 2 * (width + length);
    return {
      type:'short',
      question: `직사각형의 가로가 세로의 ${lengthRatio}배이고 세로가 ${width}cm일 때, 둘레는 몇 cm입니까?`,
      answer: String(perimeter),
      answerType:'number',
      tolerance:0,
      unitLabel:'cm',
      hint: '가로 = 세로 × ${lengthRatio}, 둘레 = 2×(가로+세로)',
      explain:`가로 = ${width}×${lengthRatio} = ${length}cm, 둘레 = 2×(${length}+${width}) = ${perimeter}cm`
    };
  }
});

// 각도 응용 문제 (난이도3)
T11.push({
  key:'angle_complex_hard',
  unitId:'m1-1-2-I-1',
  difficulty: 3,
  tags:['기본도형','각'],
  gen(){
    const {randInt} = GenCore;
    const ratio = randInt(2,5);
    const smallAngle = randInt(20,40);
    const largeAngle = smallAngle * ratio;
    const thirdAngle = 180 - smallAngle - largeAngle;
    return {
      type:'short',
      question: `한 직선 위에 세 각이 있습니다. 가장 작은 각이 ${smallAngle}°이고, 중간 각이 작은 각의 ${ratio}배일 때, 나머지 각은 몇 도입니까?`,
      answer: String(thirdAngle),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint: '직선 위의 각의 합은 180°입니다.',
      explain:`중간각 = ${smallAngle}×${ratio} = ${largeAngle}°, 나머지 = 180-${smallAngle}-${largeAngle} = ${thirdAngle}°`
    };
  }
});

// 원 넓이 응용 (난이도3)
T11.push({
  key:'circle_area_hard',
  unitId:'m1-1-2-II-2',
  difficulty: 3,
  tags:['원','넓이'],
  gen(){
    const {randInt} = GenCore;
    const smallR = randInt(3,8);
    const largeR = smallR + randInt(2,5);
    const areaSmall = 3.14 * smallR * smallR;
    const areaLarge = 3.14 * largeR * largeR;
    const ringArea = areaLarge - areaSmall;
    return {
      type:'short',
      question: `반지름이 ${largeR}cm인 원에서 반지름이 ${smallR}cm인 원을 뺀 도넛 모양의 넓이는 몇 cm²입니까? (원주율 3.14)`,
      answer: String(ringArea.toFixed(1)),
      answerType:'number',
      tolerance:1,
      unitLabel:'cm²',
      hint: '큰 원의 넓이 - 작은 원의 넓이',
      explain:`큰 원 = 3.14×${largeR}×${largeR} = ${areaLarge.toFixed(1)}cm², 작은 원 = 3.14×${smallR}×${smallR} = ${areaSmall.toFixed(1)}cm², 차이 = ${ringArea.toFixed(1)}cm²`
    };
  }
});

// 입체도형 복합 (난이도3)
T11.push({
  key:'cylinder_complex_hard',
  unitId:'m1-1-2-III-2',
  difficulty: 3,
  tags:['입체도형','부피','겉넓이'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(4,10);
    const h = randInt(10,20);
    const volume = 3.14 * r * r * h;
    const surfaceArea = 2 * 3.14 * r * r + 2 * 3.14 * r * h;
    return {
      type:'short',
      question: `반지름 ${r}cm, 높이 ${h}cm인 원기둥의 부피와 겉넓이의 합은? (원주율 3.14, 소수점 첫째자리까지)`,
      answer: String((volume + surfaceArea).toFixed(1)),
      answerType:'number',
      tolerance:5,
      unitLabel:'',
      hint: '부피 = πr²h, 겉넓이 = 2πr² + 2πrh',
      explain:`부피 = ${volume.toFixed(1)}, 겉넓이 = ${surfaceArea.toFixed(1)}, 합 = ${(volume+surfaceArea).toFixed(1)}`
    };
  }
});

window.Templates_1_1 = T11;
