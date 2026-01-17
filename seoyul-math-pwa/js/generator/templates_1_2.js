// 1-2 템플릿(샘플)
const T12 = [];

// 기본도형: 각의 크기(난이도1)
T12.push({
  key:'angle_basic',
  unitId:'m1-1-2-I-1',
  difficulty:1,
  tags:['각','기본'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(20,80);
    const b = randInt(20,80);
    const q = `한 직선 위에 있는 두 각의 크기가 각각 ${a}°, ${b}°일 때, 나머지 한 각의 크기는? (단, 한 점에서 한 직선을 이루는 각의 합은 180°)`;
    const ans = 180 - (a+b);
    return {
      type:'short',
      question:q,
      answer:String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:'일직선 위의 각의 합은 180°',
      explain:`나머지 각 = 180 - (${a}+${b}) = ${ans}`
    };
  }
});

// 기본도형: 맞꼭지각(난이도2)
T12.push({
  key:'vertical_angles',
  unitId:'m1-1-2-I-1',
  difficulty:2,
  tags:['각','맞꼭지각'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(30,150);
    return {
      type:'short',
      question:`두 직선이 한 점에서 만날 때, 한 각이 ${a}°이면 맞꼭지각의 크기는?`,
      answer:String(a),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:'맞꼭지각은 크기가 같습니다.',
      explain:`맞꼭지각 = ${a}°`
    };
  }
});

// 위치관계: 평행선(난이도1)
T12.push({
  key:'parallel_lines',
  unitId:'m1-1-2-I-2',
  difficulty:1,
  tags:['평행선','위치관계'],
  gen(){
    const {randInt, choice} = GenCore;
    const questions = [
      {q: '두 직선이 평행하다는 기호는?', a: '∥'},
      {q: '두 직선이 수직이라는 기호는?', a: '⊥'},
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question:picked.q,
      answer:picked.a,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'평행은 ∥, 수직은 ⊥ 기호를 사용합니다.',
      explain:`정답은 ${picked.a}입니다.`
    };
  }
});

// 위치관계: 엇각(난이도2)
T12.push({
  key:'alternate_angles',
  unitId:'m1-1-2-I-2',
  difficulty:2,
  tags:['평행선','엇각'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(40,140);
    return {
      type:'short',
      question:`평행선을 한 직선이 자를 때, 한 엇각이 ${a}°이면 다른 엇각은?`,
      answer:String(a),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:'엇각은 크기가 같습니다.',
      explain:`엇각 = ${a}°`
    };
  }
});

// 작도와 합동: 합동조건(난이도1)
T12.push({
  key:'congruence_basic',
  unitId:'m1-1-2-I-3',
  difficulty:1,
  tags:['합동','작도'],
  gen(){
    const {choice} = GenCore;
    const questions = [
      {q: '두 삼각형이 합동일 때, 대응변의 길이는?', a: '같다'},
      {q: '두 삼각형이 합동일 때, 대응각의 크기는?', a: '같다'},
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question:picked.q,
      answer:picked.a,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'합동인 도형은 모양과 크기가 같습니다.',
      explain:`정답: ${picked.a}`
    };
  }
});

// 다각형: 내각의 합(난이도2)
T12.push({
  key:'polygon_sum',
  unitId:'m1-1-2-II-1',
  difficulty:2,
  tags:['다각형','내각의합'],
  gen(){
    const {randInt} = GenCore;
    const n = randInt(3,10);
    const sum = (n-2)*180;
    return {
      type:'short',
      question:`${n}각형의 내각의 합은 몇 도인가요?`,
      answer:String(sum),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:'내각의 합 = (n-2)×180',
      explain:`(${n}-2)×180 = ${sum}`
    };
  }
});

// 다각형: 외각의 합(난이도1)
T12.push({
  key:'polygon_exterior',
  unitId:'m1-1-2-II-1',
  difficulty:1,
  tags:['다각형','외각의합'],
  gen(){
    const {randInt} = GenCore;
    const n = randInt(3,10);
    return {
      type:'short',
      question:`${n}각형의 외각의 합은 몇 도인가요?`,
      answer:'360',
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:'모든 다각형의 외각의 합은 360°입니다.',
      explain:`외각의 합 = 360°`
    };
  }
});

// 다각형: 정다각형(난이도3)
T12.push({
  key:'regular_polygon',
  unitId:'m1-1-2-II-1',
  difficulty:3,
  tags:['다각형','정다각형'],
  gen(){
    const {randInt} = GenCore;
    const n = randInt(5,12);
    const interior = (n-2)*180/n;
    return {
      type:'short',
      question:`정${n}각형의 한 내각의 크기는?`,
      answer:String(interior),
      answerType:'number',
      tolerance:0.1,
      unitLabel:'°',
      hint:'정다각형의 한 내각 = (n-2)×180÷n',
      explain:`(${n}-2)×180÷${n} = ${interior}°`
    };
  }
});

// 원과 부채꼴: 호의 길이(난이도1)
T12.push({
  key:'arc_length',
  unitId:'m1-1-2-II-2',
  difficulty:1,
  tags:['원','호'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(3,12);
    const circum = 2 * 3.14 * r;
    return {
      type:'short',
      question:`반지름이 ${r}cm인 원의 둘레는? (원주율은 3.14)`,
      answer:String(circum.toFixed(2)),
      answerType:'number',
      tolerance:0.1,
      unitLabel:'cm',
      hint:'원의 둘레 = 2πr',
      explain:`2×3.14×${r} = ${circum.toFixed(2)}cm`
    };
  }
});

// 원과 부채꼴: 부채꼴 넓이(난이도2)
T12.push({
  key:'sector_area',
  unitId:'m1-1-2-II-2',
  difficulty:2,
  tags:['원','부채꼴','넓이'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(4,10);
    const angle = randInt(30,150);
    const area = (3.14 * r * r * angle / 360).toFixed(2);
    return {
      type:'short',
      question:`반지름 ${r}cm, 중심각 ${angle}°인 부채꼴의 넓이는? (원주율은 3.14)`,
      answer:String(area),
      answerType:'number',
      tolerance:0.5,
      unitLabel:'cm²',
      hint:'부채꼴의 넓이 = πr²×(중심각÷360)',
      explain:`3.14×${r}×${r}×${angle}÷360 = ${area}cm²`
    };
  }
});

// 원과 부채꼴: 부채꼴 호의 길이(난이도3)
T12.push({
  key:'sector_arc',
  unitId:'m1-1-2-II-2',
  difficulty:3,
  tags:['원','부채꼴','호'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(5,15);
    const angle = randInt(60,180);
    const arcLen = (2 * 3.14 * r * angle / 360).toFixed(2);
    return {
      type:'short',
      question:`반지름 ${r}cm, 중심각 ${angle}°인 부채꼴의 호의 길이는? (원주율은 3.14)`,
      answer:String(arcLen),
      answerType:'number',
      tolerance:0.5,
      unitLabel:'cm',
      hint:'호의 길이 = 2πr×(중심각÷360)',
      explain:`2×3.14×${r}×${angle}÷360 = ${arcLen}cm`
    };
  }
});

// 다면체와 회전체: 정다면체(난이도1)
T12.push({
  key:'polyhedron_basic',
  unitId:'m1-1-2-III-1',
  difficulty:1,
  tags:['다면체','정다면체'],
  gen(){
    const {choice} = GenCore;
    const questions = [
      {q: '정다면체는 몇 종류인가?', a: '5'},
      {q: '정육면체의 면의 개수는?', a: '6'},
      {q: '정사면체의 꼭짓점의 개수는?', a: '4'},
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question:picked.q,
      answer:picked.a,
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'정다면체는 정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체 5가지입니다.',
      explain:`정답: ${picked.a}`
    };
  }
});

// 다면체와 회전체: 회전체(난이도2)
T12.push({
  key:'solid_of_revolution',
  unitId:'m1-1-2-III-1',
  difficulty:2,
  tags:['회전체'],
  gen(){
    const {choice} = GenCore;
    const questions = [
      {q: '직각삼각형을 한 변을 축으로 회전시키면?', a: '원뿔'},
      {q: '직사각형을 한 변을 축으로 회전시키면?', a: '원기둥'},
      {q: '반원을 지름을 축으로 회전시키면?', a: '구'},
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question:picked.q,
      answer:picked.a,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'회전체는 평면도형을 한 직선을 축으로 회전시켜 만든 입체도형입니다.',
      explain:`정답: ${picked.a}`
    };
  }
});

// 입체도형 겉넓이/부피: 직육면체 부피(난이도1)
T12.push({
  key:'cuboid_volume',
  unitId:'m1-1-2-III-2',
  difficulty:1,
  tags:['부피','직육면체'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(2,15);
    const b = randInt(2,15);
    const c = randInt(2,15);
    const v = a*b*c;
    return {
      type:'short',
      question:`가로 ${a}cm, 세로 ${b}cm, 높이 ${c}cm인 직육면체의 부피는 몇 cm³인가요?`,
      answer:String(v),
      answerType:'number',
      tolerance:0,
      unitLabel:'cm³',
      hint:'부피 = 가로×세로×높이',
      explain:`${a}×${b}×${c} = ${v}`
    };
  }
});

// 입체도형 겉넓이/부피: 직육면체 겉넓이(난이도2)
T12.push({
  key:'cuboid_surface',
  unitId:'m1-1-2-III-2',
  difficulty:2,
  tags:['겉넓이','직육면체'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(2,10);
    const b = randInt(2,10);
    const c = randInt(2,10);
    const s = 2*(a*b + b*c + c*a);
    return {
      type:'short',
      question:`가로 ${a}cm, 세로 ${b}cm, 높이 ${c}cm인 직육면체의 겉넓이는?`,
      answer:String(s),
      answerType:'number',
      tolerance:0,
      unitLabel:'cm²',
      hint:'겉넓이 = 2(ab+bc+ca)',
      explain:`2×(${a}×${b} + ${b}×${c} + ${c}×${a}) = ${s}cm²`
    };
  }
});

// 입체도형 겉넓이/부피: 원기둥 부피(난이도3)
T12.push({
  key:'cylinder_volume',
  unitId:'m1-1-2-III-2',
  difficulty:3,
  tags:['부피','원기둥'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(3,10);
    const h = randInt(5,15);
    const v = (3.14 * r * r * h).toFixed(2);
    return {
      type:'short',
      question:`밑면의 반지름이 ${r}cm, 높이가 ${h}cm인 원기둥의 부피는? (원주율은 3.14)`,
      answer:String(v),
      answerType:'number',
      tolerance:1,
      unitLabel:'cm³',
      hint:'원기둥의 부피 = πr²h',
      explain:`3.14×${r}×${r}×${h} = ${v}cm³`
    };
  }
});

// 입체도형 겉넓이/부피: 원뿔 부피(난이도3)
T12.push({
  key:'cone_volume',
  unitId:'m1-1-2-III-2',
  difficulty:3,
  tags:['부피','원뿔'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(3,10);
    const h = randInt(5,15);
    const v = (3.14 * r * r * h / 3).toFixed(2);
    return {
      type:'short',
      question:`밑면의 반지름이 ${r}cm, 높이가 ${h}cm인 원뿔의 부피는? (원주율은 3.14)`,
      answer:String(v),
      answerType:'number',
      tolerance:1,
      unitLabel:'cm³',
      hint:'원뿔의 부피 = (1/3)πr²h',
      explain:`3.14×${r}×${r}×${h}÷3 = ${v}cm³`
    };
  }
});

// 입체도형 겉넓이/부피: 구 부피(난이도3)
T12.push({
  key:'sphere_volume',
  unitId:'m1-1-2-III-2',
  difficulty:3,
  tags:['부피','구'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(3,10);
    const v = (4 * 3.14 * r * r * r / 3).toFixed(2);
    return {
      type:'short',
      question:`반지름이 ${r}cm인 구의 부피는? (원주율은 3.14)`,
      answer:String(v),
      answerType:'number',
      tolerance:1,
      unitLabel:'cm³',
      hint:'구의 부피 = (4/3)πr³',
      explain:`4×3.14×${r}×${r}×${r}÷3 = ${v}cm³`
    };
  }
});

window.Templates_1_2 = T12;
