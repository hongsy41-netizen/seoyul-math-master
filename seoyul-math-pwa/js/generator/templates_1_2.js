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

// 작도와 합동: 합동조건 응용 (난이도2)
T12.push({
  key:'congruence_conditions',
  unitId:'m1-1-2-I-3',
  difficulty:2,
  tags:['합동','합동조건'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      () => {
        const a = randInt(3, 8);
        const b = randInt(4, 9);
        const c = randInt(5, 10);
        return {
          question: `삼각형 ABC에서 AB=${a}cm, BC=${b}cm, CA=${c}cm입니다. 삼각형 DEF와 합동이려면 DE, EF, FD의 길이는? (예: ${a},${b},${c})`,
          answer: `${a},${b},${c}`,
          hint: 'SSS 합동: 세 변의 길이가 각각 같으면 합동입니다.',
          explain: `대응변의 길이가 같아야 하므로 ${a}cm, ${b}cm, ${c}cm`
        };
      },
      () => {
        const side1 = randInt(4, 10);
        const angle = randInt(30, 120);
        const side2 = randInt(4, 10);
        return {
          question: `삼각형 ABC에서 AB=${side1}cm, ∠A=${angle}°, AC=${side2}cm입니다. 삼각형 DEF와 SAS 합동이려면 무엇이 같아야 하는가? (예: 두변과끼인각)`,
          answer: '두변과끼인각',
          hint: 'SAS 합동: 두 변과 그 끼인각이 같으면 합동입니다.',
          explain: `SAS 합동 조건은 두 변과 그 끼인각이 같아야 합니다.`
        };
      },
      () => {
        const angle1 = randInt(30, 70);
        const angle2 = randInt(40, 80);
        const side = randInt(5, 12);
        return {
          question: `삼각형 ABC에서 ∠A=${angle1}°, ∠B=${angle2}°, AB=${side}cm일 때, ASA 합동 조건은? (예: 한변과양끝각)`,
          answer: '한변과양끝각',
          hint: 'ASA 합동: 한 변과 그 양 끝 각이 각각 같으면 합동입니다.',
          explain: `ASA 합동 조건은 한 변과 그 양 끝 각이 같아야 합니다.`
        };
      }
    ];
    const picked = choice(scenarios)();
    return {
      type:'short',
      question: picked.question,
      answer: picked.answer,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint: picked.hint,
      explain: picked.explain
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
  difficulty:2,
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
  difficulty:2,
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
  difficulty:2,
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
  difficulty:2,
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
  difficulty:2,
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

// 기본도형: 각도 복합 (난이도3)
T12.push({
  key:'angle_complex',
  unitId:'m1-1-2-I-1',
  difficulty:2,
  tags:['각','복합'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(30,60);
    const b = randInt(20,50);
    const c = randInt(15,40);
    const ans = 180 - (a + b + c);
    return {
      type:'short',
      question:`한 직선 위에 네 개의 각이 있고, 세 각의 크기가 ${a}°, ${b}°, ${c}°입니다. 나머지 한 각의 크기는?`,
      answer:String(ans),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:'일직선은 180°입니다',
      explain:`180 - (${a}+${b}+${c}) = ${ans}°`
    };
  }
});

// 위치관계: 동위각과 엇각 (난이도3)
T12.push({
  key:'corresponding_alternate_angles',
  unitId:'m1-1-2-I-2',
  difficulty:2,
  tags:['평행선','동위각','엇각'],
  gen(){
    const {randInt, choice} = GenCore;
    const angleType = choice(['동위각', '엇각']);
    const a = randInt(50,130);
    return {
      type:'short',
      question:`평행선을 한 직선이 자를 때, 한 ${angleType}이 ${a}°이면 다른 ${angleType}은?`,
      answer:String(a),
      answerType:'number',
      tolerance:0,
      unitLabel:'°',
      hint:`${angleType}은 크기가 같습니다`,
      explain:`${angleType} = ${a}°`
    };
  }
});

// 작도와 합동: 삼각형 합동조건 (난이도3)
T12.push({
  key:'triangle_congruence',
  unitId:'m1-1-2-I-3',
  difficulty:2,
  tags:['합동','삼각형'],
  gen(){
    const {choice} = GenCore;
    const questions = [
      {q: '세 변의 길이가 모두 같은 삼각형의 합동조건은?', a: 'SSS'},
      {q: '두 변의 길이와 그 끼인각이 같은 삼각형의 합동조건은?', a: 'SAS'},
      {q: '한 변의 길이와 그 양 끝 각이 같은 삼각형의 합동조건은?', a: 'ASA'}
    ];
    const picked = choice(questions);
    return {
      type:'short',
      question:picked.q,
      answer:picked.a,
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'SSS, SAS, ASA 중에서 선택하세요',
      explain:`정답: ${picked.a}`
    };
  }
});

// 다각형: 정다각형 외각 (난이도3)
T12.push({
  key:'regular_polygon_exterior',
  unitId:'m1-1-2-II-1',
  difficulty:2,
  tags:['다각형','정다각형','외각'],
  gen(){
    const {randInt} = GenCore;
    const n = randInt(5,12);
    const exterior = 360 / n;
    return {
      type:'short',
      question:`정${n}각형의 한 외각의 크기는?`,
      answer:String(exterior),
      answerType:'number',
      tolerance:0.1,
      unitLabel:'°',
      hint:'정다각형의 한 외각 = 360÷n',
      explain:`360÷${n} = ${exterior}°`
    };
  }
});

// 원과 부채꼴: 복합 계산 (난이도3)
T12.push({
  key:'circle_sector_complex',
  unitId:'m1-1-2-II-2',
  difficulty:2,
  tags:['원','부채꼴','복합'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(6,12);
    const angle1 = randInt(60,120);
    const angle2 = 360 - angle1;
    const area1 = (3.14 * r * r * angle1 / 360).toFixed(2);
    const area2 = (3.14 * r * r * angle2 / 360).toFixed(2);
    return {
      type:'short',
      question:`반지름 ${r}cm인 원에서 중심각이 ${angle1}°인 부채꼴과 ${angle2}°인 부채꼴의 넓이의 합은? (원주율은 3.14)`,
      answer:String((3.14 * r * r).toFixed(2)),
      answerType:'number',
      tolerance:1,
      unitLabel:'cm²',
      hint:'두 부채꼴의 중심각의 합이 360°이므로 원 전체 넓이입니다',
      explain:`πr² = 3.14×${r}×${r} = ${(3.14 * r * r).toFixed(2)}cm²`
    };
  }
});

// 다면체와 회전체: 정다면체 (난이도3)
T12.push({
  key:'polyhedron_euler',
  unitId:'m1-1-2-III-1',
  difficulty:2,
  tags:['다면체','오일러'],
  gen(){
    const {choice} = GenCore;
    const polyhedrons = [
      {name: '정사면체', v: 4, e: 6, f: 4},
      {name: '정육면체', v: 8, e: 12, f: 6},
      {name: '정팔면체', v: 6, e: 12, f: 8},
      {name: '정십이면체', v: 20, e: 30, f: 12},
      {name: '정이십면체', v: 12, e: 30, f: 20}
    ];
    const picked = choice(polyhedrons);
    const questionType = choice(['꼭짓점', '모서리', '면']);
    let answer, question;
    if(questionType === '꼭짓점') {
      answer = picked.v;
      question = `${picked.name}의 꼭짓점의 개수는?`;
    } else if(questionType === '모서리') {
      answer = picked.e;
      question = `${picked.name}의 모서리의 개수는?`;
    } else {
      answer = picked.f;
      question = `${picked.name}의 면의 개수는?`;
    }
    return {
      type:'short',
      question:question,
      answer:String(answer),
      answerType:'number',
      tolerance:0,
      unitLabel:'개',
      hint:'정다면체는 정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체 5가지입니다',
      explain:`${picked.name}: 꼭짓점 ${picked.v}개, 모서리 ${picked.e}개, 면 ${picked.f}개`
    };
  }
});

// 회전체: 부피 비교 (난이도3)
T12.push({
  key:'solid_revolution_volume',
  unitId:'m1-1-2-III-1',
  difficulty:2,
  tags:['회전체','부피'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(3,8);
    const h = randInt(5,12);
    const cylinder = (3.14 * r * r * h).toFixed(2);
    const cone = (3.14 * r * r * h / 3).toFixed(2);
    const ratio = 3;
    return {
      type:'short',
      question:`반지름 ${r}cm, 높이 ${h}cm인 원기둥과 같은 크기의 원뿔의 부피 비는? (원기둥:원뿔)`,
      answer:'3:1',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'원기둥 부피는 원뿔 부피의 3배입니다',
      explain:`원기둥:원뿔 = πr²h:(1/3)πr²h = 3:1`
    };
  }
});

// 입체도형: 겉넓이와 부피 복합 (난이도3)
T12.push({
  key:'solid_surface_volume_complex',
  unitId:'m1-1-2-III-2',
  difficulty:2,
  tags:['겉넓이','부피','복합'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      // 원기둥 겉넓이
      () => {
        const r = randInt(4,8);
        const h = randInt(6,12);
        const surface = (2 * 3.14 * r * r + 2 * 3.14 * r * h).toFixed(2);
        return {
          question: `반지름 ${r}cm, 높이 ${h}cm인 원기둥의 겉넓이는? (원주율은 3.14)`,
          answer: String(surface),
          unitLabel: 'cm²',
          hint: '겉넓이 = 2πr² + 2πrh (밑면 2개 + 옆면)',
          explain: `2×3.14×${r}×${r} + 2×3.14×${r}×${h} = ${surface}cm²`
        };
      },
      // 구 겉넓이
      () => {
        const r = randInt(4,10);
        const surface = (4 * 3.14 * r * r).toFixed(2);
        return {
          question: `반지름 ${r}cm인 구의 겉넓이는? (원주율은 3.14)`,
          answer: String(surface),
          unitLabel: 'cm²',
          hint: '구의 겉넓이 = 4πr²',
          explain: `4×3.14×${r}×${r} = ${surface}cm²`
        };
      },
      // 원뿔 겉넓이
      () => {
        const r = randInt(3,7);
        const l = randInt(8,15);
        const surface = (3.14 * r * r + 3.14 * r * l).toFixed(2);
        return {
          question: `밑면의 반지름이 ${r}cm, 모선의 길이가 ${l}cm인 원뿔의 겉넓이는? (원주율은 3.14)`,
          answer: String(surface),
          unitLabel: 'cm²',
          hint: '원뿔 겉넓이 = πr² + πrl (밑면 + 옆면)',
          explain: `3.14×${r}×${r} + 3.14×${r}×${l} = ${surface}cm²`
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

// 작도 복합 문제 (난이도3)
T12.push({
  key:'construction_complex',
  unitId:'m1-1-2-I-3',
  difficulty: 3,
  tags:['작도','수직이등분선','각이등분선'],
  gen(){
    const {randInt, choice} = GenCore;
    const scenarios = [
      () => {
        const angle = randInt(60,120);
        const half = angle / 2;
        return {
          question: `${angle}°의 각을 이등분하는 직선을 작도했을 때, 두 각은 각각 몇 도입니까?`,
          answer: String(half),
          hint: '각이등분선은 각을 정확히 반으로 나눕니다.',
          explain: `${angle}÷2 = ${half}°`
        };
      },
      () => {
        const length = randInt(8,16);
        const half = length / 2;
        return {
          question: `길이가 ${length}cm인 선분의 수직이등분선을 작도했을 때, 두 부분의 길이는 각각 몇 cm입니까?`,
          answer: String(half),
          hint: '수직이등분선은 선분을 정확히 반으로 나눕니다.',
          explain: `${length}÷2 = ${half}cm`
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
      unitLabel:'',
      hint: picked.hint,
      explain: picked.explain
    };
  }
});

// 다각형 대각선 개수 (난이도3)
T12.push({
  key:'polygon_diagonals',
  unitId:'m1-1-2-II-1',
  difficulty: 3,
  tags:['다각형','대각선'],
  gen(){
    const {randInt} = GenCore;
    const n = randInt(5,10);
    const diagonals = n * (n - 3) / 2;
    return {
      type:'short',
      question: `정${n}각형의 대각선은 모두 몇 개입니까?`,
      answer: String(diagonals),
      answerType:'number',
      tolerance:0,
      unitLabel:'개',
      hint: 'n각형의 대각선 개수 = n(n-3)÷2',
      explain: `${n}×(${n}-3)÷2 = ${n}×${n-3}÷2 = ${diagonals}개`
    };
  }
});

// 부채꼴 호의 길이와 넓이 (난이도3)
T12.push({
  key:'sector_arc_and_area',
  unitId:'m1-1-2-II-2',
  difficulty: 3,
  tags:['부채꼴','호의길이','넓이'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(6,12);
    const angle = randInt(60,150);
    const arcLength = (2 * 3.14 * r * angle / 360).toFixed(2);
    const area = (3.14 * r * r * angle / 360).toFixed(2);
    return {
      type:'short',
      question: `반지름 ${r}cm, 중심각 ${angle}°인 부채꼴의 호의 길이와 넓이의 합은? (원주율 3.14, 소수점 둘째자리까지)`,
      answer: String((parseFloat(arcLength) + parseFloat(area)).toFixed(2)),
      answerType:'number',
      tolerance:1,
      unitLabel:'',
      hint: '호의 길이 = 2πr×(각도÷360), 넓이 = πr²×(각도÷360)',
      explain: `호 = ${arcLength}, 넓이 = ${area}, 합 = ${(parseFloat(arcLength) + parseFloat(area)).toFixed(2)}`
    };
  }
});

// 정다면체 모서리/꼭짓점 (난이도3)
T12.push({
  key:'polyhedron_edges_vertices',
  unitId:'m1-1-2-III-1',
  difficulty: 3,
  tags:['다면체','모서리','꼭짓점'],
  gen(){
    const {choice} = GenCore;
    const polyhedra = [
      {name:'정사면체', faces:4, edges:6, vertices:4},
      {name:'정육면체', faces:6, edges:12, vertices:8},
      {name:'정팔면체', faces:8, edges:12, vertices:6},
      {name:'정십이면체', faces:12, edges:30, vertices:20},
      {name:'정이십면체', faces:20, edges:30, vertices:12}
    ];
    const poly = choice(polyhedra);
    const sum = poly.edges + poly.vertices;
    return {
      type:'short',
      question: `${poly.name}의 모서리 개수와 꼭짓점 개수의 합은?`,
      answer: String(sum),
      answerType:'number',
      tolerance:0,
      unitLabel:'개',
      hint: `${poly.name}: 면 ${poly.faces}개, 모서리 ${poly.edges}개, 꼭짓점 ${poly.vertices}개`,
      explain: `모서리 ${poly.edges}개 + 꼭짓점 ${poly.vertices}개 = ${sum}개`
    };
  }
});

// 회전체 부피 응용 (난이도3)
T12.push({
  key:'solid_of_revolution_hard',
  unitId:'m1-1-2-III-2',
  difficulty: 3,
  tags:['회전체','부피'],
  gen(){
    const {randInt} = GenCore;
    const r = randInt(4,8);
    const h = randInt(8,15);
    const cylinderVol = 3.14 * r * r * h;
    const coneVol = (1/3) * 3.14 * r * r * h;
    const diff = cylinderVol - coneVol;
    return {
      type:'short',
      question: `반지름 ${r}cm, 높이 ${h}cm인 원기둥과 같은 크기의 원뿔의 부피 차이는? (원주율 3.14, 소수점 첫째자리)`,
      answer: String(diff.toFixed(1)),
      answerType:'number',
      tolerance:2,
      unitLabel:'cm³',
      hint: '원기둥 부피 = πr²h, 원뿔 부피 = (1/3)πr²h',
      explain: `원기둥 ${cylinderVol.toFixed(1)} - 원뿔 ${coneVol.toFixed(1)} = ${diff.toFixed(1)}cm³`
    };
  }
});

// 입체도형 겉넓이 응용 (난이도3)
T12.push({
  key:'surface_area_complex',
  unitId:'m1-1-2-III-2',
  difficulty: 3,
  tags:['입체도형','겉넓이'],
  gen(){
    const {randInt} = GenCore;
    const a = randInt(4,10);
    const b = randInt(4,10);
    const c = randInt(4,10);
    const surface = 2 * (a*b + b*c + c*a);
    return {
      type:'short',
      question: `가로 ${a}cm, 세로 ${b}cm, 높이 ${c}cm인 직육면체를 만드는데 필요한 종이의 넓이는? (겹치는 부분 무시)`,
      answer: String(surface),
      answerType:'number',
      tolerance:0,
      unitLabel:'cm²',
      hint: '직육면체 겉넓이 = 2(ab + bc + ca)',
      explain: `2×(${a}×${b} + ${b}×${c} + ${c}×${a}) = 2×(${a*b} + ${b*c} + ${c*a}) = ${surface}cm²`
    };
  }
});

// 각기둥 부피 (난이도3)
T12.push({
  key:'prism_volume_hard',
  unitId:'m1-1-2-III-2',
  difficulty: 3,
  tags:['각기둥','부피'],
  gen(){
    const {randInt} = GenCore;
    const base = randInt(5,12);
    const height_triangle = randInt(4,10);
    const height_prism = randInt(10,20);
    const baseArea = 0.5 * base * height_triangle;
    const volume = baseArea * height_prism;
    return {
      type:'short',
      question: `밑면이 밑변 ${base}cm, 높이 ${height_triangle}cm인 삼각형이고, 기둥의 높이가 ${height_prism}cm인 삼각기둥의 부피는?`,
      answer: String(volume),
      answerType:'number',
      tolerance:0,
      unitLabel:'cm³',
      hint: '삼각기둥 부피 = (밑넓이) × (높이), 밑넓이 = (1/2) × 밑변 × 높이',
      explain: `밑넓이 = 0.5×${base}×${height_triangle} = ${baseArea}cm², 부피 = ${baseArea}×${height_prism} = ${volume}cm³`
    };
  }
});

window.Templates_1_2 = T12;
