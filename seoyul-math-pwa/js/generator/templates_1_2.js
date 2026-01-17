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

window.Templates_1_2 = T12;
