// 외부 DB에서 가져온 실제 문제들
const T11_external = [];


// [산술연산] 송화는 친구 9명에게 붙임 딱지를 3장씩 주었습니다. ...
T11_external.push({
  key:'external_산술연산_1',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`송화는 친구 9명에게 붙임 딱지를 3장씩 주었습니다. 송화가 친구에게 준 붙임 딱지는 모두 몇 장입니까?`,
      answer:'27',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 27, 식: 9*3`
    };
  }
});

// [산술연산] 넓이가 48cm^2인 정사각형의 한 변의 길이는 몇 c...
T11_external.push({
  key:'external_산술연산_2',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`넓이가 48cm^2인 정사각형의 한 변의 길이는 몇 cm입니까?`,
      answer:'6.93',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6.93, 식: 48^0.5`
    };
  }
});

// [산술연산] 익준이네 반 학생 19명에게 연필 5자루씩 나누어 주려...
T11_external.push({
  key:'external_산술연산_3',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`익준이네 반 학생 19명에게 연필 5자루씩 나누어 주려고 합니다. 연필은 모두 몇 자루가 필요합니까?`,
      answer:'95',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 95, 식: 19*5`
    };
  }
});

// [산술연산] 신혜는 연필을 2자루씩 3묶음 가지고 있습니다. 신혜의...
T11_external.push({
  key:'external_산술연산_4',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신혜는 연필을 2자루씩 3묶음 가지고 있습니다. 신혜의 언니가 가진 연필은 신혜가 가진 연필의 3배입니다. 신혜의 언니가 가진 연필은 모두 몇 자루입니까?`,
      answer:'18',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 18, 식: (2*3)*3`
    };
  }
});

// [산술연산] 송화는 구슬 14개를 가지고 있습니다. 언니에게 3개를...
T11_external.push({
  key:'external_산술연산_5',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`송화는 구슬 14개를 가지고 있습니다. 언니에게 3개를 더 받았다면, 송화가 가진 구슬은 모두 몇 개입니까?`,
      answer:'17',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 17, 식: 14+3`
    };
  }
});

// [산술연산] 석형이의 키는 178.5cm이고, 신혜의 키는 157....
T11_external.push({
  key:'external_산술연산_6',
  unitId:'m1-1-1-II-2',
  difficulty:2,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`석형이의 키는 178.5cm이고, 신혜의 키는 157.3입니다. 둘의 키 차이는 몇 cm입니까?`,
      answer:'21.2',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 21.2, 식: 178.5-157.3`
    };
  }
});

// [산술연산] 선물 상자를 한 개 묶는 데 테이프가 6개 필요하다고 ...
T11_external.push({
  key:'external_산술연산_7',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`선물 상자를 한 개 묶는 데 테이프가 6개 필요하다고 합니다. 선물 상자를 21개 묶으려면 테이프가 몇 개 필요합니까?`,
      answer:'126',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 126, 식: 6*21`
    };
  }
});

// [산술연산] 1분은 60초입니다. 4분은 몇 초입니까?...
T11_external.push({
  key:'external_산술연산_8',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`1분은 60초입니다. 4분은 몇 초입니까?`,
      answer:'240',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 240, 식: 60*4`
    };
  }
});

// [산술연산] 가로가 11cm, 세로가 8cm인 직사각형의 넓이를 구...
T11_external.push({
  key:'external_산술연산_9',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가로가 11cm, 세로가 8cm인 직사각형의 넓이를 구하시오.`,
      answer:'88',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 88, 식: 11*8`
    };
  }
});

// [산술연산] 선물 한 개를 포장하는데 빨간색 리본 10cm, 파란색...
T11_external.push({
  key:'external_산술연산_10',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`선물 한 개를 포장하는데 빨간색 리본 10cm, 파란색 리본 8cm가 필요합니다. 같은 선물 5개를 포장하는데 필요한 리본은 모두 몇 cm인가요?`,
      answer:'90',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 90, 식: (10+8)*5`
    };
  }
});

// [산술연산] 새 연필의 무게는 113.28g이고 몽당 연필의 무게의...
T11_external.push({
  key:'external_산술연산_11',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`새 연필의 무게는 113.28g이고 몽당 연필의 무게의 3.2배라고 합니다. 몽당 연필의 무게는 몇 g입니까?`,
      answer:'35.4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 35.4, 식: 113.28/3.2`
    };
  }
});

// [산술연산] 농장에 양이 60마리 있습니다. 20마리는 큰 우리에 ...
T11_external.push({
  key:'external_산술연산_12',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`농장에 양이 60마리 있습니다. 20마리는 큰 우리에 넣었고, 남은 양들은 8마리씩 작은 우리에 넣으려고 합니다. 몇 개의 작은 우리가 필요합니까?`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: (60-20)/8`
    };
  }
});

// [산술연산] 한 변의 길이가 4cm인 정사각형의 둘레의 길이를 구하...
T11_external.push({
  key:'external_산술연산_13',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 변의 길이가 4cm인 정사각형의 둘레의 길이를 구하시오.`,
      answer:'16',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 16, 식: 4*4`
    };
  }
});

// [산술연산] 티셔츠와 바지가 총 45개 있습니다. 바지가 티셔츠보다...
T11_external.push({
  key:'external_산술연산_14',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`티셔츠와 바지가 총 45개 있습니다. 바지가 티셔츠보다 5개 적게 있다면, 티셔츠는 몇 개 있습니까?`,
      answer:'25',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 25, 식: (45+5)/2`
    };
  }
});

// [산술연산] 둘레가 119.6m인 운동장이 있습니다. 이 운동장의 ...
T11_external.push({
  key:'external_산술연산_15',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`둘레가 119.6m인 운동장이 있습니다. 이 운동장의 둘레를 3바퀴 반 뛰었다면, 뛴 거리는 몇 m입니까?`,
      answer:'418.6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 418.6, 식: 119.6*3.5`
    };
  }
});

// [산술연산] 한 사람 당 6개의 종이를 나누어 가지려고 합니다. 총...
T11_external.push({
  key:'external_산술연산_16',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 사람 당 6개의 종이를 나누어 가지려고 합니다. 총 9명이고 현재 종이가 52장 있다면, 부족한 종이는 몇 장입니까?`,
      answer:'2',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 2, 식: 6*9-52`
    };
  }
});

// [산술연산] 한 개에 300원 하는 과자를 2개 사면 과자 한 개를...
T11_external.push({
  key:'external_산술연산_17',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 개에 300원 하는 과자를 2개 사면 과자 한 개를 더 준다고 합니다. 과자를 2 개 샀을 때 과자 한 개를 얼마씩 주고 산 셈인지 구하시오.`,
      answer:'200',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 200, 식: 300*2/(2+1)`
    };
  }
});

// [산술연산] 축구장의 좌석은 오른쪽으로 1씩 커지고, 아래로 8씩 ...
T11_external.push({
  key:'external_산술연산_18',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`축구장의 좌석은 오른쪽으로 1씩 커지고, 아래로 8씩 커지도록 좌석 번호가 부착되어 있습니다. 좌석 번호는 서로 겹치지 않고, 총 96개의 좌석이 마련되어있을 때, 왼쪽으로부터 5번째, 위에서부터 9번째에 위치한 좌석은 처음 좌석보다 몇이 더 큽니까?`,
      answer:'68',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 68, 식: 1*(5-1)+8*(9-1)`
    };
  }
});

// [산술연산] 석형이네 반 학교 화단에 튤립이 70송이 장미가 35송...
T11_external.push({
  key:'external_산술연산_19',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`석형이네 반 학교 화단에 튤립이 70송이 장미가 35송이 피어있었습니다. 그중에서 50송이는 꽃이 졌습니다. 화단에 남은 꽃은 몇 송이입니까?`,
      answer:'55',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 55, 식: (70+35)-50`
    };
  }
});

// [산술연산] 신혜네 아파트 한 동에는 233가구가 살고 있습니다. ...
T11_external.push({
  key:'external_산술연산_20',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신혜네 아파트 한 동에는 233가구가 살고 있습니다. 같은 크기의 아파트 3동에는 모두 몇 가구가 살고 있습니까?`,
      answer:'699',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 699, 식: 233*3`
    };
  }
});

// [산술연산] 세 상자에 방울토마토가 10개씩 들어 있습니다. 상자에...
T11_external.push({
  key:'external_산술연산_21',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`세 상자에 방울토마토가 10개씩 들어 있습니다. 상자에 들어 있는 방울토마토는 모두 몇 개입니까?`,
      answer:'30',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 30, 식: 3*10`
    };
  }
});

// [산술연산] 석형이네 반 학급 문고의 책은 모두 124권입니다. 동...
T11_external.push({
  key:'external_산술연산_22',
  unitId:'m1-1-1-II-2',
  difficulty:2,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`석형이네 반 학급 문고의 책은 모두 124권입니다. 동화책이 30권, 위인전이 46권 있고, 나머지는 수학책입니다. 과학책은 몇 권 있습니까?`,
      answer:'48',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 48, 식: 124-(30+46)`
    };
  }
});

// [산술연산] 익준이는 가지고 있던 사탕 중에서 3개를 먹고, 나머지...
T11_external.push({
  key:'external_산술연산_23',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`익준이는 가지고 있던 사탕 중에서 3개를 먹고, 나머지는 민하와 선빈이에게 똑같이 나누어 주었습니다. 민하가 4개를 받았을 때, 익준이가 가지고 있었던 사탕은 모두 몇 개입니까?`,
      answer:'11',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 11, 식: 4*2+3`
    };
  }
});

// [산술연산] 익준이는 친구에게서 생일날 10권의 노트를 선물 받고 ...
T11_external.push({
  key:'external_산술연산_24',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`익준이는 친구에게서 생일날 10권의 노트를 선물 받고 형에게 7권의 책을 선물받았습니다. 노트 10권에 대한 책 7권을 백분율로 나타내시오`,
      answer:'70',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 70, 식: (7/10)*100`
    };
  }
});

// [산술연산] 한 걸음에 엄마는 57cm를 가고, 민하는 34cm를 ...
T11_external.push({
  key:'external_산술연산_25',
  unitId:'m1-1-1-II-2',
  difficulty:2,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 걸음에 엄마는 57cm를 가고, 민하는 34cm를 갑니다. 두 사람이 80걸음씩 걸었을 때, 엄마는 민하보다 몇 cm 앞서 있겠습니까?`,
      answer:'1840',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1840, 식: (57*80)-(34*80)`
    };
  }
});

// [산술연산] 혜민이가 올해 키를 재어보니 158cm였습니다. 작년보...
T11_external.push({
  key:'external_산술연산_26',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`혜민이가 올해 키를 재어보니 158cm였습니다. 작년보다 5cm 컸다면, 혜민이의 작년 키는 몇 cm입니까?`,
      answer:'153',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 153, 식: 158-5`
    };
  }
});

// [산술연산] 어느 대형 서점에 동화책이 781권, 참고서가 814권...
T11_external.push({
  key:'external_산술연산_27',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 대형 서점에 동화책이 781권, 참고서가 814권 있습니다. 오늘 동화책이 385권, 참고서가 289권 팔렸습니다. 남은 책은 모두 몇 권입니까?`,
      answer:'921',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 921, 식: (781-385)+(814-289)`
    };
  }
});

// [산술연산] 준완이는 매일 아침 줄넘기를 평균 120번씩 넘느다고 ...
T11_external.push({
  key:'external_산술연산_28',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`준완이는 매일 아침 줄넘기를 평균 120번씩 넘느다고 합니다. 9월 한 달 동안 매일 했다면 모두 몇 번을 넘는지 구하시오.(단, 9월은 30일까지 있습니다,)`,
      answer:'3600',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3600, 식: 120*30`
    };
  }
});

// [산술연산] 둘레가 300m인 호수를 미진이는 1분동안 100m를 ...
T11_external.push({
  key:'external_산술연산_29',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`둘레가 300m인 호수를 미진이는 1분동안 100m를 걸어가고, 수희는 150m를 걸어갑니다. 만양 동시에 같은 방향으로 출발하였다면, 그들이 출발점에서 셋째 번으로 다시 만나는 때는 출발한 지 몇 분 후입니까?`,
      answer:'18',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 18, 식: 900/(150-100)`
    };
  }
});

// [산술연산] 초록색 클립 163개와 노란색 클립 137개가 있습니다...
T11_external.push({
  key:'external_산술연산_30',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`초록색 클립 163개와 노란색 클립 137개가 있습니다. 이 클립을 6상자에 똑같이 나누어 담으려면 한 상자에 몇 개씩 담아야 합니까?`,
      answer:'50',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 50, 식: (163+137)/6`
    };
  }
});

// [산술연산] 송화는 색종이 100장 중 신혜에게 12장을 주고, 익...
T11_external.push({
  key:'external_산술연산_31',
  unitId:'m1-1-1-II-2',
  difficulty:2,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`송화는 색종이 100장 중 신혜에게 12장을 주고, 익준이에게는 나머지의 62.5%만큼 주었습니다. 남은 색종이는 몇 장입니까?`,
      answer:'33',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 33, 식: (100-12)*(1-0.625)`
    };
  }
});

// [산술연산] 옥수수가 한 다발에 28개씩 30다발 있습니다. 이 옥...
T11_external.push({
  key:'external_산술연산_32',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`옥수수가 한 다발에 28개씩 30다발 있습니다. 이 옥수수를 다시 한 다발에 12개씩 묶어서 23다발을 팔았습니다. 팔고 남은 옥수수는 몇 개인지 구하시오.`,
      answer:'564',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 564, 식: 28*30-12*23`
    };
  }
});

// [산술연산] 주머니 안에 노란 구슬이 6개, 빨간 구슬이 19개 들...
T11_external.push({
  key:'external_산술연산_33',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`주머니 안에 노란 구슬이 6개, 빨간 구슬이 19개 들어 있습니다. 구슬 전체에 대한 노란 구슬의 비율은 몇 %인지 구하시오.`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: (6/(6+19))*100`
    };
  }
});

// [산술연산] 병원 안내도를 살펴보니 6층에 치과가 있고 8층에 내과...
T11_external.push({
  key:'external_산술연산_34',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`병원 안내도를 살펴보니 6층에 치과가 있고 8층에 내과가 있습니다. 이비인후과가 치과와 내과 사이에 있다면 이비인후과는 몇 층에 있을까요?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: (6+8)/2`
    };
  }
});

// [산술연산] 둘레가 85m인 호수 둘레에 A간격으로 은행나무 17그...
T11_external.push({
  key:'external_산술연산_35',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`둘레가 85m인 호수 둘레에 A간격으로 은행나무 17그루를 심었을 떄, A의 값을 구하시오.`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: 85/17`
    };
  }
});

// [산술연산] 신혜는 딸기를 82개 땄습니다. 그 중에서 29개는 동...
T11_external.push({
  key:'external_산술연산_36',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신혜는 딸기를 82개 땄습니다. 그 중에서 29개는 동생에게 주고, 34개는 먹었습니다. 남은 딸기는 몇 개입니까?`,
      answer:'19',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 19, 식: 82-29-34`
    };
  }
});

// [산술연산] 석형이는 도화지 100장을 샀습니다. 매일 6장씩 그림...
T11_external.push({
  key:'external_산술연산_37',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`석형이는 도화지 100장을 샀습니다. 매일 6장씩 그림을 그린다고 하면 9일동안 그리고 남은 도화지는 몇 장입니까?`,
      answer:'46',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 46, 식: 100-6*9`
    };
  }
});

// [산술연산] 0.8에 0.31을 더한 값을A, 0.5에 0.2를 더...
T11_external.push({
  key:'external_산술연산_38',
  unitId:'m1-1-1-II-2',
  difficulty:2,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`0.8에 0.31을 더한 값을A, 0.5에 0.2를 더한 값을B라고 할 때 A-B의 값을 구하시오.`,
      answer:'0.41',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 0.41, 식: (0.8+0.31)-(0.5+0.2)`
    };
  }
});

// [산술연산] 한 시간에 142.9 km를 달리는 버스가 있습니다. ...
T11_external.push({
  key:'external_산술연산_39',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 시간에 142.9 km를 달리는 버스가 있습니다. 같은 빠르기로 3시간을 달리면 버스가 간 거리는 몇 km인지 소수로 나타내시오.`,
      answer:'428.7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 428.7, 식: 142.9*3`
    };
  }
});

// [산술연산] 신혜는 채소 가게에서 고구마 2.827kg과 감자 1....
T11_external.push({
  key:'external_산술연산_40',
  unitId:'m1-1-1-II-2',
  difficulty:2,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신혜는 채소 가게에서 고구마 2.827kg과 감자 1.373kg을 샀습니다. 신혜가 산 채소의 무게는 모두 몇 kg입니까?`,
      answer:'4.2',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4.2, 식: 2.827+1.373`
    };
  }
});

// [산술연산] 8과 어떤 수의 합은 28입니다. 어떤 수를 구하시오....
T11_external.push({
  key:'external_산술연산_41',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`8과 어떤 수의 합은 28입니다. 어떤 수를 구하시오.`,
      answer:'20',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 20, 식: 28-8`
    };
  }
});

// [산술연산] 선물 1개를 포장하는데 끈 0.72m가 필요합니다. 끈...
T11_external.push({
  key:'external_산술연산_42',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`선물 1개를 포장하는데 끈 0.72m가 필요합니다. 끈 35.28m로 선물 몇 개를 포장할 수 있습니까?`,
      answer:'49',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 49, 식: 35.28/0.72`
    };
  }
});

// [산술연산] 버스가 3시간동안 180km만큼 이동했다면, 버스는 시...
T11_external.push({
  key:'external_산술연산_43',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`버스가 3시간동안 180km만큼 이동했다면, 버스는 시속 몇 km로 이동했습니까?`,
      answer:'60',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 60, 식: 180/3`
    };
  }
});

// [산술연산] 민하는 검은 바둑돌 6개와 흰 바둑돌 4개를 가지고 있...
T11_external.push({
  key:'external_산술연산_44',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`민하는 검은 바둑돌 6개와 흰 바둑돌 4개를 가지고 있었습니다. 며칠 후에 세어 보니 검은 바둑돌 2개와 흰 바둑돌 3개가 없어졌습니다. 남은 바둑돌은 모두 몇 개입니까?`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: (6+4)-(2+3)`
    };
  }
});

// [산술연산] 단팥빵 39개와 크림빵 69개가 있습니다. 이 빵을 상...
T11_external.push({
  key:'external_산술연산_45',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`단팥빵 39개와 크림빵 69개가 있습니다. 이 빵을 상자 12개에 똑같은 개수로 나누어 담으려고 합니다. 한 상자에 몇 개씩 담아야 하는지 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: (39+69)/12`
    };
  }
});

// [산술연산] 선빈이네 과수원에서 수확한 사과를 한 상자에 20kg씩...
T11_external.push({
  key:'external_산술연산_46',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`선빈이네 과수원에서 수확한 사과를 한 상자에 20kg씩 담았습니다. 사과 상자를 트럭 한 대에 40상자씩 2대에 실었다면 선빈이네 과수원에서 수확한 사과는 모두 몇 kg입니까?`,
      answer:'1600',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1600, 식: 20*(40*2)`
    };
  }
});

// [산술연산] 색 테이프 377cm가 있습니다. 이 색 테이프를 13...
T11_external.push({
  key:'external_산술연산_47',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`색 테이프 377cm가 있습니다. 이 색 테이프를 13cm씩 모두 자르면 몇 개가 되는지 구하시오.`,
      answer:'29',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 29, 식: 377/13`
    };
  }
});

// [산술연산] 정원이는 폐품을 0.5kg 모았고, 석형이는 0.9kg...
T11_external.push({
  key:'external_산술연산_48',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`정원이는 폐품을 0.5kg 모았고, 석형이는 0.9kg을 모았습니다. 두 사람이 모은 폐품의 무게는 모두 몇 kg 인지 구하시오.`,
      answer:'1.4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1.4, 식: 0.5+0.9`
    };
  }
});

// [산술연산] 9kg의 설탕이 있습니다. 빵 한 개를 만드는데 (1/...
T11_external.push({
  key:'external_산술연산_49',
  unitId:'m1-1-1-II-2',
  difficulty:3,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`9kg의 설탕이 있습니다. 빵 한 개를 만드는데 (1/5)kg의 설탕이 필요하다면 빵은 모두 몇 개를 만들 수 있겠습니까?`,
      answer:'45',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 45, 식: 9/(1/5)`
    };
  }
});

// [산술연산] 정원이네 목장에는 젖소가 362마리, 한우가 233마리...
T11_external.push({
  key:'external_산술연산_50',
  unitId:'m1-1-1-II-2',
  difficulty:1,
  tags:['산술연산','외부DB'],
  gen(){
    return {
      type:'short',
      question:`정원이네 목장에는 젖소가 362마리, 한우가 233마리 있습니다. 정원이네 목장에 있는 젖소와 한우는 모두 몇 마리입니까?`,
      answer:'595',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 595, 식: 362+233`
    };
  }
});

// [순서정하기] 과수원의 사과나무들 중에서 사과가 3번째로 많이 열린 ...
T11_external.push({
  key:'external_순서정하기_1',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`과수원의 사과나무들 중에서 사과가 3번째로 많이 열린 나무엔 28개가 열려있고 5번째로 많이 열린 나무엔 26개가 열려있습니다. 사과가 4번째로 많이 열린 나무에는 몇 개가 열려있습니까?`,
      answer:'27',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 27, 식: none`
    };
  }
});

// [순서정하기] 100m 달리기 대회에서 규현, 준형, 민솔, 강현이 ...
T11_external.push({
  key:'external_순서정하기_2',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`100m 달리기 대회에서 규현, 준형, 민솔, 강현이 순으로 기록이 짧았습니다. 2번째로 빠른 사람은 누구입니까?`,
      answer:'준형',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 준형, 식: none`
    };
  }
});

// [순서정하기] 피겨스케이팅대회에서 예원, 지원, 소윤, 하린, 채은 ...
T11_external.push({
  key:'external_순서정하기_3',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`피겨스케이팅대회에서 예원, 지원, 소윤, 하린, 채은 순으로 공연을 펼치려고 합니다. 3번째로 공연을 하는 사람은 누구입니까?`,
      answer:'소윤',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 소윤, 식: none`
    };
  }
});

// [순서정하기] 교실에서 진영이자리의 왼쪽에는 헤진, 진혁, 승후, 상...
T11_external.push({
  key:'external_순서정하기_4',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`교실에서 진영이자리의 왼쪽에는 헤진, 진혁, 승후, 상우의자리가 순서대로 있습니다. 진영이자리의 왼쪽에서 2번째 자리는 누구의 자리입니까?`,
      answer:'진혁',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 진혁, 식: none`
    };
  }
});

// [순서정하기] 게임회사는 매달 새로운 시리즈를 출시합니다. 2월에 출...
T11_external.push({
  key:'external_순서정하기_5',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`게임회사는 매달 새로운 시리즈를 출시합니다. 2월에 출시한 게임은 3번째시리즈이고 4월에 출시한 게임은 5번째 시리즈입니다. 3월에 출시한 게임은 몇 번째 시리즈입니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [순서정하기] 지수는 이번 시험에서 지민이보다는 시험을 못 봤지만 수...
T11_external.push({
  key:'external_순서정하기_6',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`지수는 이번 시험에서 지민이보다는 시험을 못 봤지만 수영이보다는 시험을 잘 봤습니다. 지민이의 등수가 8등이고 수영이가 10등일 때, 지수는 몇 등입니까?`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [순서정하기] 키가 큰 사람 순서대로 18명이 한 줄로 서 있습니다....
T11_external.push({
  key:'external_순서정하기_7',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`키가 큰 사람 순서대로 18명이 한 줄로 서 있습니다. 지영이가 앞에서부터 6번째에 서 있습니다. 키가 작은 사람부터 순서대로 다시 줄을 서면 지영이는 앞에서부터 몇 번째에 서게 됩니까?`,
      answer:'13',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 13, 식: none`
    };
  }
});

// [순서정하기] 학교에서 열린 벼룩시장에서 물건을 많이 판 사람은 종현...
T11_external.push({
  key:'external_순서정하기_8',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`학교에서 열린 벼룩시장에서 물건을 많이 판 사람은 종현, 아름, 세훈, 도겸, 유라, 소정 순입니다. 3번째로 물건을 많이 판 사람은 누구입니까?`,
      answer:'세훈',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 세훈, 식: none`
    };
  }
});

// [순서정하기] 버스정류장에서 주은, 현주, 나현, 채연, 지우, 현정...
T11_external.push({
  key:'external_순서정하기_9',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`버스정류장에서 주은, 현주, 나현, 채연, 지우, 현정순으로 줄을 서있습니다. 3번째에 서있는 사람은 누구입니까?`,
      answer:'나현',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 나현, 식: none`
    };
  }
});

// [순서정하기] 오늘 아침에 등교를 일찍 한 사람은 중기, 승빈, 시환...
T11_external.push({
  key:'external_순서정하기_10',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`오늘 아침에 등교를 일찍 한 사람은 중기, 승빈, 시환, 호준, 재준, 도경이 순입니다. 3번째로 등교한 사람은 누구입니까?`,
      answer:'시환',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 시환, 식: none`
    };
  }
});

// [순서정하기] 진열대 위에 15개의 그릇을 일렬로 진열하려고 합니다....
T11_external.push({
  key:'external_순서정하기_11',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`진열대 위에 15개의 그릇을 일렬로 진열하려고 합니다. 왼쪽에서 4번째에 있는 그릇은 오른쪽에서 몇 번째에 위치해있습니까?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [순서정하기] 치과진료를 예약한 사람은 동현, 한결, 민규, 재원, ...
T11_external.push({
  key:'external_순서정하기_12',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`치과진료를 예약한 사람은 동현, 한결, 민규, 재원, 민우, 연서 순입니다. 4번째로 예약한 사람은 누구입니까?`,
      answer:'재원',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 재원, 식: none`
    };
  }
});

// [순서정하기] 갓 나온 빵을 사기위해 빵집 앞에 12명이 줄을 서있습...
T11_external.push({
  key:'external_순서정하기_13',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`갓 나온 빵을 사기위해 빵집 앞에 12명이 줄을 서있습니다. 아연이의 앞에 6명이 있을때, 아연이는 뒤에서 몇 번째에 서있습니까?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [순서정하기] 신형 게임기를 사기 위해 선착순으로 22명이 줄을 섰습...
T11_external.push({
  key:'external_순서정하기_14',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신형 게임기를 사기 위해 선착순으로 22명이 줄을 섰습니다. 선우는 앞에서 8번째, 현주는 뒤에서 3번째 일때, 선우와 현주 사이네는 몇 명이 서있습니까?`,
      answer:'11',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 11, 식: none`
    };
  }
});

// [순서정하기] 학생회장 후보자 6명 전원이 연설을 했습니다. 서우보다...
T11_external.push({
  key:'external_순서정하기_15',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`학생회장 후보자 6명 전원이 연설을 했습니다. 서우보다 2명이 먼저 연설을 했을때, 서우는 뒤에서 몇 번째로 연설을 했습니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [순서정하기] 올림픽 탁구경기에서 1위부터 8위까지는 중국, 한국, ...
T11_external.push({
  key:'external_순서정하기_16',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`올림픽 탁구경기에서 1위부터 8위까지는 중국, 한국, 일본, 스웨덴, 독일, 대만, 싱가포르, 프랑스 순입니다. 4위는 어느 국가입니까?`,
      answer:'스웨덴',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 스웨덴, 식: none`
    };
  }
});

// [순서정하기] 새로 출시된 게임기를 사기 위해 선착순으로 18명이 줄...
T11_external.push({
  key:'external_순서정하기_17',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`새로 출시된 게임기를 사기 위해 선착순으로 18명이 줄을 섰습니다. 현준이의 뒤에 9명이 있을때, 현준이는 앞에서 몇 번째에 서있습니까?`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [순서정하기] 올해 정원에서 민들레, 개나리, 무궁화, 국화꽃 순으로...
T11_external.push({
  key:'external_순서정하기_18',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`올해 정원에서 민들레, 개나리, 무궁화, 국화꽃 순으로 꽃이 폈습니다. 3번째로 핀 꽃은 무엇입니까?`,
      answer:'무궁화',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 무궁화, 식: none`
    };
  }
});

// [순서정하기] 이번 달에 칭찬스티커를 많이 모은 사람은 혜연, 도아,...
T11_external.push({
  key:'external_순서정하기_19',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`이번 달에 칭찬스티커를 많이 모은 사람은 혜연, 도아, 재용, 영재, 지수 순입니다. 칭찬스티커를 3번째로 많이 모은 사람은 누구입니까?`,
      answer:'재용',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 재용, 식: none`
    };
  }
});

// [순서정하기] 예은이네 반 학생 29명이 시력검사를 받기위해 줄을 서...
T11_external.push({
  key:'external_순서정하기_20',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`예은이네 반 학생 29명이 시력검사를 받기위해 줄을 서있습니다. 예은이의 앞에 11명이 있을 때, 예은이의 뒤에는 몇 명이 있습니까?`,
      answer:'17',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 17, 식: none`
    };
  }
});

// [순서정하기] 일찍 도착한 사람 순서대로 24명이 한 줄로 서 있습니...
T11_external.push({
  key:'external_순서정하기_21',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`일찍 도착한 사람 순서대로 24명이 한 줄로 서 있습니다. 자영이가 뒤에서부터 9번째에 서 있습니다. 일찍 도착한 사람부터 순서대로 다시 줄을 서면 자영이는 앞에서부터 몇 번째에 서게 됩니까?`,
      answer:'16',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 16, 식: none`
    };
  }
});

// [순서정하기] 버스터미널에서 대전행 버스가 6번째로 출발하고, 서울행...
T11_external.push({
  key:'external_순서정하기_22',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`버스터미널에서 대전행 버스가 6번째로 출발하고, 서울행 버스가 8번째로 출발합니다. 부산행 버스는 대전행 버스보다 늦게 출발하지만 서울행 버스보다 먼저 출발할때, 부산행 버스는 버스터미널에서 몇 번째로 출발합니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [순서정하기] 100m 달리기 대회에서 희진이는 15초, 지윤이는 2...
T11_external.push({
  key:'external_순서정하기_23',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`100m 달리기 대회에서 희진이는 15초, 지윤이는 20초, 명희는 18초, 현아는 21초를 기록했습니다. 2번째로 빠른 사람의 기록은 무엇입니까?`,
      answer:'18',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 18, 식: none`
    };
  }
});

// [순서정하기] 수업시간에 1모둠부터 7모둠까지 모둠순 대로 발표를 하...
T11_external.push({
  key:'external_순서정하기_24',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`수업시간에 1모둠부터 7모둠까지 모둠순 대로 발표를 하려고 합니다. 예서네 모둠은 뒤에서 3번째로 발표를 할때, 예서네 모둠보다 먼저 발표를 하는 모둠은 몇 개입니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [순서정하기] 정은이는 이번 쪽지시험에서 미현이보다 시험을 못 봤지만...
T11_external.push({
  key:'external_순서정하기_25',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`정은이는 이번 쪽지시험에서 미현이보다 시험을 못 봤지만 정은이보다는 시험을 잘 봤습니다. 미현이의 등수가 5등이고 정은이가 7등일 때, 정은이는 몇 등입니까?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [순서정하기] 출석번호가 작은 사람이 앞에서부터 줄을 섰습니다. 출석...
T11_external.push({
  key:'external_순서정하기_26',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`출석번호가 작은 사람이 앞에서부터 줄을 섰습니다. 출석번호가 2, 14, 5, 8, 12, 10, 15번인 학생들 중, 앞에서 3번째로 줄을 선 사람의 번호는 무엇입니까?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [순서정하기] 고리던지기를 하는 순서는 예슬, 채연, 한별, 현아 순...
T11_external.push({
  key:'external_순서정하기_27',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`고리던지기를 하는 순서는 예슬, 채연, 한별, 현아 순입니다. 2번째로 고리를 던지는 사람은 누구입니까?`,
      answer:'채연',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 채연, 식: none`
    };
  }
});

// [순서정하기] 새학기에 만난 학급친구들 모두 자기소개를 하려고 합니다...
T11_external.push({
  key:'external_순서정하기_28',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`새학기에 만난 학급친구들 모두 자기소개를 하려고 합니다. 1번째로 소개한 학생과 뒤에서 2번째로으로 소개한 학생 사이에 24명이 자기소개를 했다면, 학급친구들은 모두 몇 명입니까?`,
      answer:'27',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 27, 식: none`
    };
  }
});

// [순서정하기] 유담이네 반 친구들이 좋아하는 디저트는 마카롱, 케이크...
T11_external.push({
  key:'external_순서정하기_29',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`유담이네 반 친구들이 좋아하는 디저트는 마카롱, 케이크, 아이스크림, 쿠키 순입니다. 유담이네 반에서 3번째로 인기가 많은 디저트는 무엇입니까?`,
      answer:'아이스크림',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 아이스크림, 식: none`
    };
  }
});

// [순서정하기] 나무심기캠페인에서 현준이는 9개 승환이는 11개를 심었...
T11_external.push({
  key:'external_순서정하기_30',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`나무심기캠페인에서 현준이는 9개 승환이는 11개를 심었습니다. 재현이는 현준이보다 많이 심었지만 승환이보다 적게 심었을 때, 재현이가 심은 나무는 몇 개입니까?`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [순서정하기] 버스요금중에서 2번째로 비싼것은 고등학생요금, 4번째로...
T11_external.push({
  key:'external_순서정하기_31',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`버스요금중에서 2번째로 비싼것은 고등학생요금, 4번째로 비싼것은 초등학생요금 입니다. 중학생요금은 고등학생요금보다 싸지만 초등학생요금보다 비쌀때, 중학생요금은 몇 번째로 비싼 요금입니까?`,
      answer:'3',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3, 식: none`
    };
  }
});

// [순서정하기] 신형 휴대폰을 사전예약한 사람은 세은, 도연, 아영, ...
T11_external.push({
  key:'external_순서정하기_32',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신형 휴대폰을 사전예약한 사람은 세은, 도연, 아영, 가윤, 예리, 아현이 순입니다. 3번째로 예약한 사람은 누구입니까?`,
      answer:'아영',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 아영, 식: none`
    };
  }
});

// [순서정하기] 옷장에 걸려있는 성현이 외투의 왼쪽에 윤진, 준범, 현...
T11_external.push({
  key:'external_순서정하기_33',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`옷장에 걸려있는 성현이 외투의 왼쪽에 윤진, 준범, 현주, 도경이의 외투가 순서대로 걸려있습니다. 성현이 외투의 왼쪽에서 2번째에 걸려있는 외투는 누구의 것입니까?`,
      answer:'준범',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 준범, 식: none`
    };
  }
});

// [순서정하기] 치과치료를 받기 위해 대기줄을 서있습니다. 우진이의 앞...
T11_external.push({
  key:'external_순서정하기_34',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`치과치료를 받기 위해 대기줄을 서있습니다. 우진이의 앞에는 5명 뒤에는 6명이 있을때, 줄을 선 사람들은 모두 몇 명입니까?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [순서정하기] 이번 달에 책을 많이 읽은 사람 순서대로 줄을 섰습니다...
T11_external.push({
  key:'external_순서정하기_35',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`이번 달에 책을 많이 읽은 사람 순서대로 줄을 섰습니다. 우영이보다 형준, 주완, 재혁, 동우, 효원이 순으로 책을 많이 읽었을때, 우영이의 앞에있는 사람들 중에서 3번째에 서있는 사람은 누구입니까?`,
      answer:'재혁',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 재혁, 식: none`
    };
  }
});

// [순서정하기] 오늘 민정이네 카페는 녹차, 딸기에이드, 라떼, 아메리...
T11_external.push({
  key:'external_순서정하기_36',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`오늘 민정이네 카페는 녹차, 딸기에이드, 라떼, 아메리카노 순으로 적게 팔았습니다. 3번째로 적게 팔린 음료는 무엇입니까?`,
      answer:'라떼',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 라떼, 식: none`
    };
  }
});

// [순서정하기] 급식을 먹기 위해 선착순으로 줄을 섰습니다. 재훈이보다...
T11_external.push({
  key:'external_순서정하기_37',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`급식을 먹기 위해 선착순으로 줄을 섰습니다. 재훈이보다 늦게왔지만 가람, 수정, 재준, 채현, 해인이 순으로 줄을 섰을 때, 재훈이의 뒤에서 2번째에 서있는 사람은 누구입니까?`,
      answer:'수정',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 수정, 식: none`
    };
  }
});

// [순서정하기] 신발사이즈가 큰 사람은 재원, 민우, 은찬, 지율, 다...
T11_external.push({
  key:'external_순서정하기_38',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신발사이즈가 큰 사람은 재원, 민우, 은찬, 지율, 다연, 예린이 순입니다. 신발사이즈가 2번째로 큰 사람은 누구입니까?`,
      answer:'민우',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 민우, 식: none`
    };
  }
});

// [순서정하기] 진희가 선호하는 외식메뉴는 한식, 양식, 중식, 일식 ...
T11_external.push({
  key:'external_순서정하기_39',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`진희가 선호하는 외식메뉴는 한식, 양식, 중식, 일식 순입니다. 진희가 두번째로 선호하는 외식메뉴는 무엇입니까?`,
      answer:'양식',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 양식, 식: none`
    };
  }
});

// [순서정하기] 올해 축구시즌에서 골을 가장 많이 넣은 선수는 18개,...
T11_external.push({
  key:'external_순서정하기_40',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`올해 축구시즌에서 골을 가장 많이 넣은 선수는 18개, 3번째로 많이 넣은 선수는 16개를 넣었습니다. 2번째로 골을 많이 넣은 선수는 몇 개의 골을 넣었습니까?`,
      answer:'17',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 17, 식: none`
    };
  }
});

// [순서정하기] 50m달리기의 스타트가 1번째로 빠른 사람은 선아이고 ...
T11_external.push({
  key:'external_순서정하기_41',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`50m달리기의 스타트가 1번째로 빠른 사람은 선아이고 3번째로 빠른 사람은 다정이입니다. 신영이는 선아보다 스타트가 느렸지만 다정이보다 빨랐을때, 신영이는 몇 번째로 스타트가 빠릅니까?`,
      answer:'2',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 2, 식: none`
    };
  }
});

// [순서정하기] 선착순으로 줄을 섰을 때 현지는 3번째로 줄을 섰고, ...
T11_external.push({
  key:'external_순서정하기_42',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`선착순으로 줄을 섰을 때 현지는 3번째로 줄을 섰고, 민주는 뒤에서 2번째로 줄을 섰습니다. 현지와 민주 사이에 18명의 사람들이 있을 때, 줄을 선 사람들은 총 몇 명 입니까?`,
      answer:'23',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 23, 식: none`
    };
  }
});

// [순서정하기] 택시기사님이 이번 달에 승객을 가장 많이 태운 날엔 5...
T11_external.push({
  key:'external_순서정하기_43',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`택시기사님이 이번 달에 승객을 가장 많이 태운 날엔 50명을 태웠습니다. 3번째로 많이 태운날엔 48명을 태웠습니다. 2번째로 많이 태운날엔 몇 명을 태웠습니까?`,
      answer:'49',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 49, 식: none`
    };
  }
});

// [순서정하기] 놀이공원 입장표를 구매하기 위해 대기줄을 서있습니다. ...
T11_external.push({
  key:'external_순서정하기_44',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`놀이공원 입장표를 구매하기 위해 대기줄을 서있습니다. 시윤이의 앞에는 7명이 있고 시윤이는 뒤에서 10번째일때, 줄을 선 사람들은 모두 몇 명입니까?`,
      answer:'17',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 17, 식: none`
    };
  }
});

// [순서정하기] 오늘 나연이는 수학문제를 11개 틀렸고 미나는 13문제...
T11_external.push({
  key:'external_순서정하기_45',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`오늘 나연이는 수학문제를 11개 틀렸고 미나는 13문제를 틀렸습니다. 다현이는 나연이보다 많이 틀렸지만 미나보다 적게 틀렸을 때, 다현이가 틀린 수학문제는 몇 개입니까?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [순서정하기] 백화점에서 많이 팔리는 장갑의 색상은 빨강, 검정, 노...
T11_external.push({
  key:'external_순서정하기_46',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`백화점에서 많이 팔리는 장갑의 색상은 빨강, 검정, 노랑, 하늘, 초록 순입니다. 2번째로 많이 팔리는 장갑의 색상은 무엇입니까?`,
      answer:'검정',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 검정, 식: none`
    };
  }
});

// [순서정하기] 신형핸드폰 사전예약을 진행하고있습니다. 지운이보다 15...
T11_external.push({
  key:'external_순서정하기_47',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신형핸드폰 사전예약을 진행하고있습니다. 지운이보다 15명이 먼저 예약했고 18명이 늦게 예약했다면, 핸드폰 사전예약을 한 사람은 모두 몇 명입니까?`,
      answer:'34',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 34, 식: none`
    };
  }
});

// [순서정하기] 신체검사를 받기위해 학생들이 출석번호 순서대로 줄을 서...
T11_external.push({
  key:'external_순서정하기_48',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`신체검사를 받기위해 학생들이 출석번호 순서대로 줄을 서있습니다. 출석번호가 3번과 20번인 학생 사이에는 몇 명의 학생이 있습니까?`,
      answer:'16',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 16, 식: none`
    };
  }
});

// [순서정하기] 올해 도서관에서 11번째로 책을 많이 빌린 사람은 진호...
T11_external.push({
  key:'external_순서정하기_49',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`올해 도서관에서 11번째로 책을 많이 빌린 사람은 진호, 13번째로 많이 빌린 사람은 서원이입니다. 효은이는 진호보다 적게빌렸지만 서원이보다 많이 빌렸을때, 효은이는 몇 번째로 책을 많이 빌렸습니까?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [순서정하기] 은행업무를 보기 위해 대기줄이 서있습니다. 다은이는 앞...
T11_external.push({
  key:'external_순서정하기_50',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['순서정하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`은행업무를 보기 위해 대기줄이 서있습니다. 다은이는 앞에서 3번째 뒤에서 2번째일때, 줄을 선 사람들은 모두 몇 명입니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [조합하기] 서울에서 대전까지 가는 길이 3가지, 대전에서 부산까지...
T11_external.push({
  key:'external_조합하기_1',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`서울에서 대전까지 가는 길이 3가지, 대전에서 부산까지 가는 길이 2가지, 서울에서 부산으로 직접 가는 길이 2가지 있다. 서울에서 부산까지 가는 모든 경우의 수는?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [조합하기] 동준이네 가족은 A, B, C, D, E 5개의 마을 ...
T11_external.push({
  key:'external_조합하기_2',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동준이네 가족은 A, B, C, D, E 5개의 마을 중 4개를 골라 여행을 가려고 한다. 이때 여행하는 순서를 정하는 경우의 수를 구하시오.`,
      answer:'120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 120, 식: none`
    };
  }
});

// [조합하기] 국어, 영어, 수학, 사회, 과학 노트 5권을 책장에 ...
T11_external.push({
  key:'external_조합하기_3',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`국어, 영어, 수학, 사회, 과학 노트 5권을 책장에 한 줄로 정리하려고 한다. 이 때 수학과 과학 노트를 이웃하여 꽂는 방법의 수는?`,
      answer:'48',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 48, 식: none`
    };
  }
});

// [조합하기] 남학생 2명과 여학생 3명을 한 줄로 세울 때, 남학생...
T11_external.push({
  key:'external_조합하기_4',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남학생 2명과 여학생 3명을 한 줄로 세울 때, 남학생끼리 이웃하여 서는 경우의 수를 구하시오.`,
      answer:'48',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 48, 식: none`
    };
  }
});

// [조합하기] 부모를 포함하여 6명의 가족이 원탁에 둘러앉을 때, 6...
T11_external.push({
  key:'external_조합하기_5',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`부모를 포함하여 6명의 가족이 원탁에 둘러앉을 때, 6명이 앉는 경우의 수는?`,
      answer:'120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 120, 식: none`
    };
  }
});

// [조합하기] 다섯 개의 알파벳 A, A, C, C, E를 일렬로 나...
T11_external.push({
  key:'external_조합하기_6',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다섯 개의 알파벳 A, A, C, C, E를 일렬로 나열할 때, 같은 문자는 바로 옆에 오지 않도록 나열하는 경우의 수를 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [조합하기] 12개의 팀이 어느 대회를 진행한다. 먼저 팀을 4개씩...
T11_external.push({
  key:'external_조합하기_7',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`12개의 팀이 어느 대회를 진행한다. 먼저 팀을 4개씩 3개의 조로 나누어 각 조에서 리그전을 한 다음, 각 조의 상위 1개의 팀이 본선에 진출하여 리그전을 진행해 상위 2팀이 결승전을 치뤄 이긴 팀이 우승한다고 할 때, 대회에서 진행하는 경기의 수를 구하여라.`,
      answer:'22',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 22, 식: none`
    };
  }
});

// [조합하기] 남자 6명, 여자 5명이 있는 어떤 모임에서 남자 대표...
T11_external.push({
  key:'external_조합하기_8',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남자 6명, 여자 5명이 있는 어떤 모임에서 남자 대표, 남자 부대표, 여자 대표, 여자 부대표를 각각 1명씩 선출하려고 한다. 이때, 선출하는 방법의 수는 모두 몇 가지인가?`,
      answer:'600',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 600, 식: none`
    };
  }
});

// [조합하기] 2명이 가위바위보를 할 때, 승부가 나지 않는 경우의 ...
T11_external.push({
  key:'external_조합하기_9',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`2명이 가위바위보를 할 때, 승부가 나지 않는 경우의 수는?`,
      answer:'3',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3, 식: none`
    };
  }
});

// [조합하기] 일곱명의 학생 A, B, C, D, E, F, G가 일...
T11_external.push({
  key:'external_조합하기_10',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`일곱명의 학생 A, B, C, D, E, F, G가 일렬로 줄을 설 때, G가 맨 앞에 서는 경우의 수는?`,
      answer:'720',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 720, 식: none`
    };
  }
});

// [조합하기] 주머니 안에 빨간공 3개, 파란공 6개 , 노란공 5개...
T11_external.push({
  key:'external_조합하기_11',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`주머니 안에 빨간공 3개, 파란공 6개 , 노란공 5개가 들어있다. 공을 하나 꺼낼 때, 빨간공이거나 노란공일 경우의 수는?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [조합하기] 어떤 산의 정상까지의 등산로가 4가지가 있다고 한다. ...
T11_external.push({
  key:'external_조합하기_12',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 산의 정상까지의 등산로가 4가지가 있다고 한다. 올라갈 때와 다른길을 택하여 내려오는 경우의 수는?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [조합하기] 어느 도시의 축구 대회는 참가한 팀이 돌아가면서 한 번...
T11_external.push({
  key:'external_조합하기_13',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 도시의 축구 대회는 참가한 팀이 돌아가면서 한 번씩 경기하는 리그전으로 예선을 치룬다. 이 대회에 6명의 팀이 참가했을때, 예선에서 치뤄지는 전체 경기의 수를 구하시오`,
      answer:'15',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 15, 식: none`
    };
  }
});

// [조합하기] 어느 동아리 회원 5명 중에서 회장 1명과 부회장 2명...
T11_external.push({
  key:'external_조합하기_14',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 동아리 회원 5명 중에서 회장 1명과 부회장 2명을 뽑는 방법의 수는?`,
      answer:'30',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 30, 식: none`
    };
  }
});

// [조합하기] 유리병 속에 서로 다른 종류의 사탕 7개가 있다. 이 ...
T11_external.push({
  key:'external_조합하기_15',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`유리병 속에 서로 다른 종류의 사탕 7개가 있다. 이 유리병에서 사탕 3개를 꺼내는 경우의 수는?`,
      answer:'35',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 35, 식: none`
    };
  }
});

// [조합하기] 남학생 4명, 여학생 3명이 한 줄로 서서 등산을 할 ...
T11_external.push({
  key:'external_조합하기_16',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남학생 4명, 여학생 3명이 한 줄로 서서 등산을 할 때, 남녀 학생이 교대로 서는 방법의 수를 구하여라`,
      answer:'144',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 144, 식: none`
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5, 6, 7의 7개 숫자 중에서...
T11_external.push({
  key:'external_조합하기_17',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`1, 2, 3, 4, 5, 6, 7의 7개 숫자 중에서 2개의 숫자를 택하는 방법의 수를 구해라.`,
      answer:'21',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 21, 식: none`
    };
  }
});

// [조합하기] 같은 종류의 연필 5개를 같은 종류의 필기도구통 3개에...
T11_external.push({
  key:'external_조합하기_18',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`같은 종류의 연필 5개를 같은 종류의 필기도구통 3개에 담을 때, 빈 필기도구통이 없도록 담는 경우의 수는?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [조합하기] A, B, C ,D, E 5명이 한 줄로 설 때, C,...
T11_external.push({
  key:'external_조합하기_19',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A, B, C ,D, E 5명이 한 줄로 설 때, C, D는 이웃하고 D가 C뒤에 서는 경우의 수를 구하시오.`,
      answer:'72',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 72, 식: none`
    };
  }
});

// [조합하기] 0, 1, 2, 3, 4, 5를 한 번씩만 사용하여 만...
T11_external.push({
  key:'external_조합하기_20',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`0, 1, 2, 3, 4, 5를 한 번씩만 사용하여 만들 수 있는 다섯 자리의 수 중에서 4의 배수이면서 5의 배수인 수의 개수를 구하시오.`,
      answer:'48',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 48, 식: none`
    };
  }
});

// [조합하기] 2, 3, 4, 6, 7, 8의 숫자가 각각 적힌 6개...
T11_external.push({
  key:'external_조합하기_21',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`2, 3, 4, 6, 7, 8의 숫자가 각각 적힌 6개의 공이 있다. 이 중에서 3개를 뽑아 만들 수 있는 세 자리 자연수 중 642보다 큰 수의 개수를 구하시오.`,
      answer:'51',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 51, 식: none`
    };
  }
});

// [조합하기] 0에서 4까지의 숫자가 각각 적힌 5장의 카드에서 2장...
T11_external.push({
  key:'external_조합하기_22',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`0에서 4까지의 숫자가 각각 적힌 5장의 카드에서 2장을 뽑아 두 자리의 정수를 만들 때, 25미만인 정수의 경우의 수는?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [조합하기] 세 학생이 가위바위보를 할 때 나올 수 있는 모든 경우...
T11_external.push({
  key:'external_조합하기_23',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`세 학생이 가위바위보를 할 때 나올 수 있는 모든 경우의 수는?`,
      answer:'27',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 27, 식: none`
    };
  }
});

// [조합하기] 남학생 6명, 여학생 5명 중에서 대표 3명을 뽑을 떄...
T11_external.push({
  key:'external_조합하기_24',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남학생 6명, 여학생 5명 중에서 대표 3명을 뽑을 떄, 3명 모두 남학생이거나 3명 모두 여학생인 경우의 수를 구하시오`,
      answer:'30',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 30, 식: none`
    };
  }
});

// [조합하기] 4개의 윷가락을 던질 때, 모가 나오는 경우의 수를 구...
T11_external.push({
  key:'external_조합하기_25',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`4개의 윷가락을 던질 때, 모가 나오는 경우의 수를 구하여라( 단, 윷의 등과 배가 나올 확률은 같다.)`,
      answer:'1',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1, 식: none`
    };
  }
});

// [조합하기] 서로 다른 6송이의 꽃을 2송이씩 세 묶음으로 만들어 ...
T11_external.push({
  key:'external_조합하기_26',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`서로 다른 6송이의 꽃을 2송이씩 세 묶음으로 만들어 서로 다른 2개의 꽃병에다가 꽂아 서로 다른 방 3개에 배치하려고 한다. 이때 배치하는 방법의 수를 구하여라`,
      answer:'540',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 540, 식: none`
    };
  }
});

// [조합하기] 7명의 학생 중 반장 1명을 뽑는 경우의수는?...
T11_external.push({
  key:'external_조합하기_27',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`7명의 학생 중 반장 1명을 뽑는 경우의수는?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [조합하기] 각각 서로 다른 소설책 2권, 동화책 3권, 시집 4권...
T11_external.push({
  key:'external_조합하기_28',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`각각 서로 다른 소설책 2권, 동화책 3권, 시집 4권이 있다. 이 중에서 3권을 뽑아 책꽂이에 일렬로 꽂을 때, 동화책은 포함시키지 않는 경우의 수는?`,
      answer:'120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 120, 식: none`
    };
  }
});

// [조합하기] 같은 종류의 공책 9권을 4명의 학생에게 나누어 주는 ...
T11_external.push({
  key:'external_조합하기_29',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`같은 종류의 공책 9권을 4명의 학생에게 나누어 주는 방법의 수는?`,
      answer:'126',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 126, 식: none`
    };
  }
});

// [조합하기] 소영이네 집에서 미술관까지 가는 버스 노선이 3가지, ...
T11_external.push({
  key:'external_조합하기_30',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`소영이네 집에서 미술관까지 가는 버스 노선이 3가지, 미술관에서 박물관까지 걸어갈 수 있는 길이 2가지 이다. 소영이가 집에서 버스를 타고 미술관, 박물관까지 가는 경우의 수는?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [조합하기] 1학년 배구 선수 5명과, 2학년 배구 선수 6명 중에...
T11_external.push({
  key:'external_조합하기_31',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`1학년 배구 선수 5명과, 2학년 배구 선수 6명 중에서 2학년 2명과 1학년 1명을 대표 선수로 선발하고, 1학년 1명을 예비 선수로 선발하는 방법은 총 몇 가지인가?`,
      answer:'300',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 300, 식: none`
    };
  }
});

// [조합하기] 서로 다른 두 개의 주사위를 동시에 던질 때, 나온 눈...
T11_external.push({
  key:'external_조합하기_32',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`서로 다른 두 개의 주사위를 동시에 던질 때, 나온 눈의 차가 3이 되는 경우의 수는?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [조합하기] 가구점에 4종류의 책상과 6종류의 의자가 있다. 책강 ...
T11_external.push({
  key:'external_조합하기_33',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가구점에 4종류의 책상과 6종류의 의자가 있다. 책강 또는 의자를 사는 경우의 수를 구하여라`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [조합하기] 남자 5명과 여자 3명이 출연하는 방송 프로그램이 있다...
T11_external.push({
  key:'external_조합하기_34',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남자 5명과 여자 3명이 출연하는 방송 프로그램이 있다. 이 프로그램에서 남자와 여자를 같은 수로 선택하여 게임을 진행하려고 할 때, 선택할 수 있는 경우의 수는?(단, 한 명도 선택하지 않은 경우는 없다.)`,
      answer:'55',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 55, 식: none`
    };
  }
});

// [조합하기] 5, 6, 7, 8이 적힌 숫자카드를 한 번씩 사용하여...
T11_external.push({
  key:'external_조합하기_35',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`5, 6, 7, 8이 적힌 숫자카드를 한 번씩 사용하여 만든 네 자리 정수 중 7000보다 작은 정수는 몇 가지인지 구하여라.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [조합하기] 5명의 후보 중에서 회장, 부회장, 총무를 1명씩 뽑는...
T11_external.push({
  key:'external_조합하기_36',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`5명의 후보 중에서 회장, 부회장, 총무를 1명씩 뽑는 방법의 수는?`,
      answer:'60',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 60, 식: none`
    };
  }
});

// [조합하기] 수진이네 모둠에는 남학생 4명, 수진이를 포함하여 여학...
T11_external.push({
  key:'external_조합하기_37',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`수진이네 모둠에는 남학생 4명, 수진이를 포함하여 여학생 4명이 있다. 이 모둠에서 반장 1명, 부반장 1명, 서기 1명을 뽑을 때, 수진이가 반장이 되는 경우의 수는?`,
      answer:'42',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 42, 식: none`
    };
  }
});

// [조합하기] A, B, B, B, C, C, D의 7개의 문자를 일...
T11_external.push({
  key:'external_조합하기_38',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A, B, B, B, C, C, D의 7개의 문자를 일렬로 나열할 때, 양 끝에 A와 D가 오도록 나열하는 방법의 수는?`,
      answer:'20',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 20, 식: none`
    };
  }
});

// [조합하기] 7명의 학생을 3개의 팀으로 나누려고 한다. 각 팀에는...
T11_external.push({
  key:'external_조합하기_39',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`7명의 학생을 3개의 팀으로 나누려고 한다. 각 팀에는 최소 1명, 최대 3명까지 포함될 수 있다고 할 때, 3개의 팀으로 나누는 방법의 수는?`,
      answer:'175',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 175, 식: none`
    };
  }
});

// [조합하기] MESSENGER의 9개 문자를 일렬로 나열할 때, M...
T11_external.push({
  key:'external_조합하기_40',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`MESSENGER의 9개 문자를 일렬로 나열할 때, M이 G보다 반드시 앞에 오도록 나열하는 방법의 수는?`,
      answer:'15120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 15120, 식: none`
    };
  }
});

// [조합하기] 남학생 3명과 여학생 2명을 한 줄로 세울 때, 여학생...
T11_external.push({
  key:'external_조합하기_41',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남학생 3명과 여학생 2명을 한 줄로 세울 때, 여학생 2명이 이웃하여 서는 경우의 수는?`,
      answer:'48',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 48, 식: none`
    };
  }
});

// [조합하기] 500원, 100원, 50원 짜리 동전이 각각 2개씩 ...
T11_external.push({
  key:'external_조합하기_42',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`500원, 100원, 50원 짜리 동전이 각각 2개씩 있는 학생이 각 동전을 한 개 이상 사용하여 돈을 지불하는 방법의 수를 구하시오.`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [조합하기] 서울, 대전, 대구, 부산, 울산 5개의 도시를 여행하...
T11_external.push({
  key:'external_조합하기_43',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`서울, 대전, 대구, 부산, 울산 5개의 도시를 여행하려고 한다. 부산 다음에 반드시 울산을 가려고 할 때, 5개의 도시를 여행하는 수는?`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [조합하기] 다음 그림과 같이 한 원 위에 5개의 점이 일정한 간격...
T11_external.push({
  key:'external_조합하기_44',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음 그림과 같이 한 원 위에 5개의 점이 일정한 간격으로 놓여있다. 이 점으로 만들 수 있는 서로 다른 직선의 개수를 구하여라`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [조합하기] 서정, 찬기, 은희, 연지, 대현이가 한 팀을 꾸려 가...
T11_external.push({
  key:'external_조합하기_45',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`서정, 찬기, 은희, 연지, 대현이가 한 팀을 꾸려 가창 경연 대회에 참가하였다. 남자인 찬기와 대현이가 여자들 사이사이에 자리를 잡는 방법의 수는?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [조합하기] 농구 선수는 8명 중에서 경기에 나갈 5명의 선발 선수...
T11_external.push({
  key:'external_조합하기_46',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`농구 선수는 8명 중에서 경기에 나갈 5명의 선발 선수를 뽑는 방법의 수`,
      answer:'56',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 56, 식: none`
    };
  }
});

// [조합하기] 0, 1, 2, 3, 4의 5개의 숫자에서 서로 다른 ...
T11_external.push({
  key:'external_조합하기_47',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`0, 1, 2, 3, 4의 5개의 숫자에서 서로 다른 3개의 수를 택하여 만들 수 있는 세 자리의 자연수 중 3의 배수의 개수는?`,
      answer:'20',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 20, 식: none`
    };
  }
});

// [조합하기] 흰 돌 3개와 검은 돌 5개를 일렬로 나열할 때, 흰 ...
T11_external.push({
  key:'external_조합하기_48',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`흰 돌 3개와 검은 돌 5개를 일렬로 나열할 때, 흰 돌끼리는 서로 이웃하지 않도록 나열하는 경우의 수는? (단, 같은 색의 돌끼리는 구별하지 않는다.)`,
      answer:'80',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 80, 식: none`
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5의 숫자가 각각 적힌 5개의 공...
T11_external.push({
  key:'external_조합하기_49',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`1, 2, 3, 4, 5의 숫자가 각각 적힌 5개의 공 중에서 서로 다른 3개의 공을 뽑아 만들 수 있는 세 자리 자연수 중 홀수의 개수를 구하시오.`,
      answer:'36',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 36, 식: none`
    };
  }
});

// [조합하기] 숫자 1, 2, 3, 4에서 중복을 허락하여 5개를 택...
T11_external.push({
  key:'external_조합하기_50',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['조합하기','외부DB'],
  gen(){
    return {
      type:'short',
      question:`숫자 1, 2, 3, 4에서 중복을 허락하여 5개를 택할 때, 숫자 4가 한 개 이하가 되는 경우의 수는?`,
      answer:'36',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 36, 식: none`
    };
  }
});

// [수찾기1] 조개를 승현이는 23개를 가지고 있고, 지아는 18개,...
T11_external.push({
  key:'external_수찾기1_1',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`조개를 승현이는 23개를 가지고 있고, 지아는 18개, 수빈이는 19개, 현우는 26개를 가지고 있습니다. 가장 많이 조개를 가지고 있는 사람의 개수와 가장 적게 조개를 가지고 있는 사람의 개수의 합을 구하시오.`,
      answer:'44',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 44, 식: none`
    };
  }
});

// [수찾기1] 46 이상 73 미만인 3의 배수를 모두 찾은 후, 해...
T11_external.push({
  key:'external_수찾기1_2',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`46 이상 73 미만인 3의 배수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값에서 뺀 차를 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [수찾기1] 45보다 크고 73보다 작은 홀수를 모두 찾은 후, 해...
T11_external.push({
  key:'external_수찾기1_3',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`45보다 크고 73보다 작은 홀수를 모두 찾은 후, 해당되는 수 중 평균값과 가장 가까운 값과 가장 큰 값을 찾아 더하시오.`,
      answer:'130',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 130, 식: none`
    };
  }
});

// [수찾기1] 28과 41 사이에 있는 3의 배수 중에 9로 나누었을...
T11_external.push({
  key:'external_수찾기1_4',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`28과 41 사이에 있는 3의 배수 중에 9로 나누었을 때 나머지가 0인 수를 찾으시오.`,
      answer:'36',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 36, 식: none`
    };
  }
});

// [수찾기1] 강남역에서 원희네 집까지의 거리는 1500m이고, 유림...
T11_external.push({
  key:'external_수찾기1_5',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`강남역에서 원희네 집까지의 거리는 1500m이고, 유림이네 집까지의 거리는 400m 거리의 3배이며 다빈이네 집까지의 거리는 원희네에서 100m 더 가야한다. 강남역에서 가장 멀리 사는 사람의 집 거리와 가장 가깝에 사는 사람의 집 거리의 차를 구하시오.`,
      answer:'300',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 300, 식: none`
    };
  }
});

// [수찾기1] 로또 번호 67, 66, 77, 74, 88를 뽑았습니...
T11_external.push({
  key:'external_수찾기1_6',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`로또 번호 67, 66, 77, 74, 88를 뽑았습니다. 이 중 가장 큰 두 개의 번호만 맞췄습니다. 해당되는 두 숫자의 합은 무엇입니까?`,
      answer:'165',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 165, 식: none`
    };
  }
});

// [수찾기1] 29 이상, 40 이하의 자연수 중 3의 배수의 개수를...
T11_external.push({
  key:'external_수찾기1_7',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`29 이상, 40 이하의 자연수 중 3의 배수의 개수를 구하시오.`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기1] 다음의 자연수 306 , 502 , 204 , 879 ...
T11_external.push({
  key:'external_수찾기1_8',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음의 자연수 306 , 502 , 204 , 879 , 322가 있습니다. 이 중 가장 큰 수와 세 번째로 큰 수를 찾아 더하시오.`,
      answer:'1201',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1201, 식: none`
    };
  }
});

// [수찾기1] 45 이상 72 이하의 범위에 포함되는 홀수를 모두 찾...
T11_external.push({
  key:'external_수찾기1_9',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`45 이상 72 이하의 범위에 포함되는 홀수를 모두 찾고 그 중 가장 큰 수에서 가장 작은 수를 뺀 차를 구하시오.`,
      answer:'26',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 26, 식: none`
    };
  }
});

// [수찾기1] 6으로 나누어도 나누어 떨어지고, 8로 나누어도 나누어...
T11_external.push({
  key:'external_수찾기1_10',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`6으로 나누어도 나누어 떨어지고, 8로 나누어도 나누어 떨어지는 수 중에서 가장 작은 수를 구하시오.`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [수찾기1] 숫자 카드 5장을 뽑았습니다. (889, 237, 42...
T11_external.push({
  key:'external_수찾기1_11',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`숫자 카드 5장을 뽑았습니다. (889, 237, 420, 801, 637) 한 장의 카드를 더 뽑았을 때, (698) 이 수보다 더 크면서도 가장 가까운 값을 고르시오.`,
      answer:'801',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 801, 식: none`
    };
  }
});

// [수찾기1] 주차장에 네 대의 자동차가 있습니다. 자동차의 번호가 ...
T11_external.push({
  key:'external_수찾기1_12',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`주차장에 네 대의 자동차가 있습니다. 자동차의 번호가 2328, 6786, 1456, 5489일 때, 가장 작은 번호는 무엇입니까?`,
      answer:'1456',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1456, 식: none`
    };
  }
});

// [수찾기1] 이번에 도하네 반 친구들의 수학시험 성적이 각각 97,...
T11_external.push({
  key:'external_수찾기1_13',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`이번에 도하네 반 친구들의 수학시험 성적이 각각 97, 81, 87, 92, 85점이었습니다. 90점 이하의 점수를 받은 친구 수를 구하시오.`,
      answer:'3',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3, 식: none`
    };
  }
});

// [수찾기1] 숫자가 적힌 종이를 임의로 뽑았더니 28, 85, 74...
T11_external.push({
  key:'external_수찾기1_14',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`숫자가 적힌 종이를 임의로 뽑았더니 28, 85, 74, 50, 43가 적혀있습니다. 가장 작은 수와 두 번째로 큰 수를 뽑은 사람이 짝이 된다고 할 때, 짝이 되는 두 숫자의 합을 구하시오.`,
      answer:'102',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 102, 식: none`
    };
  }
});

// [수찾기1] 가방에 과자가 들어있습니다. 빼빼로 23개, 오레오 3...
T11_external.push({
  key:'external_수찾기1_15',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가방에 과자가 들어있습니다. 빼빼로 23개, 오레오 30개, 다이제 28개가 있습니다. 가장 많이 들어있는 과자의 개수와 가장 적게 들어있는 과자의 개수의 합을 구하시오.`,
      answer:'53',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 53, 식: none`
    };
  }
});

// [수찾기1] 사과 농장에서 중헌이는 103개, 상아는 89개, 세민...
T11_external.push({
  key:'external_수찾기1_16',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`사과 농장에서 중헌이는 103개, 상아는 89개, 세민이는 97개의 사과를 수확했습니다. 가장 많이 수확한 사람의 사과 개수는 몇 개입니까?`,
      answer:'103',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 103, 식: none`
    };
  }
});

// [수찾기1] 시장에서 영민이는 16500원을 사용했고, 재석이는 1...
T11_external.push({
  key:'external_수찾기1_17',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`시장에서 영민이는 16500원을 사용했고, 재석이는 15800원을 사용했습니다. 준하는 15000원을 사용했을 때, 15500원 보다 많이 사용하고 16000원보다 적게 사용 한 돈은 얼마입니까?`,
      answer:'15800',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 15800, 식: none`
    };
  }
});

// [수찾기1] 물통에 환동, 동우, 미현이가 물을 가득 채웠습니다. ...
T11_external.push({
  key:'external_수찾기1_18',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`물통에 환동, 동우, 미현이가 물을 가득 채웠습니다. 환동이는 14컵, 동우는 12컵, 미현 이는 15컵을 사용 하였습니다. 가장 많은 컵을 사용한 사람의 컵은 몇 컵입니까?`,
      answer:'15',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 15, 식: none`
    };
  }
});

// [수찾기1] 달리기 시합을 하였습니다. 같은 시간 동안 해찬이는 1...
T11_external.push({
  key:'external_수찾기1_19',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`달리기 시합을 하였습니다. 같은 시간 동안 해찬이는 1780m, 제노는 1567m를, 태용이는 1667m를 달렸습니다. 1600m에 가장 가깝게 달린 친구는 몇 m를 달렸습니까?`,
      answer:'1567',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1567, 식: none`
    };
  }
});

// [수찾기1] 높이가 4cm, 밑변이 3cm인 직각삼각형으로 가장 작...
T11_external.push({
  key:'external_수찾기1_20',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`높이가 4cm, 밑변이 3cm인 직각삼각형으로 가장 작은 정사각형을 만들었습니다. 정사각형의 한 변의 길이는 몇 cm 입니까?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [수찾기1] 태경이는 이번 달 버스를 78번, 기차를 55번, 비행...
T11_external.push({
  key:'external_수찾기1_21',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`태경이는 이번 달 버스를 78번, 기차를 55번, 비행기를 65번, 택시를 47번, 자전거를 10번 탔습니다. 이번 달에 가장 적게 탄 교통 수단의 이용 횟수는 몇 번입니까?`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기1] 51 이상 62 미만인 짝수 중에 4로 나누었을 때 나...
T11_external.push({
  key:'external_수찾기1_22',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`51 이상 62 미만인 짝수 중에 4로 나누었을 때 나머지가 2인 수를 찾고, 해당되는 모든 수의 평균값보다 큰 값을 적으시오.`,
      answer:'58',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 58, 식: none`
    };
  }
});

// [수찾기1] 사과나무에서 사과를 땄습니다. 수광이는 사과를 199개...
T11_external.push({
  key:'external_수찾기1_23',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`사과나무에서 사과를 땄습니다. 수광이는 사과를 199개 땄고, 재영이는 182개, 재범이는 187개를 땄을 때, 195개에 가장 가깝게 사과를 딴 사람의 사과 개수는 몇 개입니까?`,
      answer:'199',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 199, 식: none`
    };
  }
});

// [수찾기1] 다섯 명의 친구가 제비를 뽑았더니 각각 92 , 73 ...
T11_external.push({
  key:'external_수찾기1_24',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다섯 명의 친구가 제비를 뽑았더니 각각 92 , 73 , 65 , 60 , 88가 나왔습니다. 번호 오름차순으로 당번을 한다고 할 때, 가장 먼저 당번을 하게 될 친구의 번호를 적으시오.`,
      answer:'60',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 60, 식: none`
    };
  }
});

// [수찾기1] 용준이네 야구 용품점에는 야구공 78개, 야구배트 55...
T11_external.push({
  key:'external_수찾기1_25',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`용준이네 야구 용품점에는 야구공 78개, 야구배트 55개, 글러브 65개, 유니폼 47벌이 준비되어 있습니다. 가장 수가 적은 물품의 개수는 몇 개입니까?`,
      answer:'47',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 47, 식: none`
    };
  }
});

// [수찾기1] 효정이네 집에서 학교까지는 2039걸음, 효정이네 집에...
T11_external.push({
  key:'external_수찾기1_26',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`효정이네 집에서 학교까지는 2039걸음, 효정이네 집에서 병원까지는 1340걸음, 효정이네 집에서 학원까지는 1588걸음 입니다. 학교와 병원, 학원 중에서 효정이네 집에서 가장 먼 곳은 몇 걸음입니까?`,
      answer:'2039',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 2039, 식: none`
    };
  }
});

// [수찾기1] 클립의 무게는 16g입니다. 볼펜은 클립보다 12g 더...
T11_external.push({
  key:'external_수찾기1_27',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`클립의 무게는 16g입니다. 볼펜은 클립보다 12g 더 무겁고, 지우개는 볼펜보다 20g 더 무겁습니다. 이때, 가장 가벼운 것은 몇 g입니까?`,
      answer:'16',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 16, 식: none`
    };
  }
});

// [수찾기1] 영수는 강아지 산책은 300분 했습니다. 동훈이는 강아...
T11_external.push({
  key:'external_수찾기1_28',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영수는 강아지 산책은 300분 했습니다. 동훈이는 강아지 산책은 239분, 광수는 강아지 산책을 311분 했습니다. 이 중에서 강아지 산책을 많이 시킨 사람의 시간을 몇 분입니까?`,
      answer:'311',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 311, 식: none`
    };
  }
});

// [수찾기1] 미술학원에서 모연이는 그림을 55작품 그렸고, 대영이는...
T11_external.push({
  key:'external_수찾기1_29',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`미술학원에서 모연이는 그림을 55작품 그렸고, 대영이는 82작품, 광남이는 63작품을 그렸을 때, 2의 배수이면서 41로 나누어 떨어지는 작품은 몇 작품입니까?`,
      answer:'82',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 82, 식: none`
    };
  }
});

// [수찾기1] 부산행은 6분마다, 광주행은 14분마다, 진주행은 21...
T11_external.push({
  key:'external_수찾기1_30',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`부산행은 6분마다, 광주행은 14분마다, 진주행은 21분마다 버스가 출발합니다. 오전 6시 10분에 세 방향으로 고속 버스가 동시에 출발하였다면 다음 번 동시에 출발하는 시각은 6시 몇 분입니까?`,
      answer:'52',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 52, 식: none`
    };
  }
});

// [수찾기1] 46 이상 72 미만인 짝수를 모두 찾은 후, 해당되는...
T11_external.push({
  key:'external_수찾기1_31',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`46 이상 72 미만인 짝수를 모두 찾은 후, 해당되는 수 중에 평균값과 가장 가까운 값을 가장 큰 값에서 뺀 차를 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [수찾기1] 포도밭에서 월요일에 560송이, 화요일에 442송이, ...
T11_external.push({
  key:'external_수찾기1_32',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`포도밭에서 월요일에 560송이, 화요일에 442송이, 수요일에 658송이, 목요일에 572송이 포도를 땄습니다. 600송이에 가장 가깝게 포도를 딴 요일의 포도 개수는 몇 송이입니까?`,
      answer:'572',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 572, 식: none`
    };
  }
});

// [수찾기1] A톱니바퀴의 톱니 수는 64개, B톱니바퀴의 톱니 수는...
T11_external.push({
  key:'external_수찾기1_33',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A톱니바퀴의 톱니 수는 64개, B톱니바퀴의 톱니 수는 96개 입니다. 회전하기 전에 처음에 맞물렸던 톱니가 다시 만나려면, A톱니바퀴와 B톱니바퀴는 모두 몇 바퀴 돌아야하는지 구하시오.`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: none`
    };
  }
});

// [수찾기1] 길이가 70m인 도로 위에 처음부터 버드나무는 2m 마...
T11_external.push({
  key:'external_수찾기1_34',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`길이가 70m인 도로 위에 처음부터 버드나무는 2m 마다, 느티나무는 5m 마다 심으려고 합니다. 두 나무가 동시에 심어지는 곳은 몇 군데입니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기1] 6과 15의 공배수 중에서 작은 수부터 넷째 번인 수를...
T11_external.push({
  key:'external_수찾기1_35',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`6과 15의 공배수 중에서 작은 수부터 넷째 번인 수를 구하시오.`,
      answer:'120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 120, 식: none`
    };
  }
});

// [수찾기1] 준표가 마트에서 장을 봤습니다. 과자 78개, 음료 5...
T11_external.push({
  key:'external_수찾기1_36',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`준표가 마트에서 장을 봤습니다. 과자 78개, 음료 55개, 라면 65개, 아이스크림 47개를 샀다고 할 때, 가장 적게 산 물품은 몇 개입니까?`,
      answer:'47',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 47, 식: none`
    };
  }
});

// [수찾기1] 원희의 핸드폰 배터리는 87%이고, 정수의 핸드폰 배터...
T11_external.push({
  key:'external_수찾기1_37',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`원희의 핸드폰 배터리는 87%이고, 정수의 핸드폰 배터리는 92%, 남길이의 핸드폰 배터리는 71%입니다. 배터리양의 차가 가장 크게 될 때의 차를 구하시오.`,
      answer:'21',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 21, 식: none`
    };
  }
});

// [수찾기1] 어느 거리에 각각 60 , 90 , 28 , 56 , ...
T11_external.push({
  key:'external_수찾기1_38',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 거리에 각각 60 , 90 , 28 , 56 , 48, 101 km/h로 달리는 차량들이 있습니다. 이 거리의 제한 속도가 85km/h라고 할 때, 규정을 준수하지 않은 차량의 수는?`,
      answer:'2',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 2, 식: none`
    };
  }
});

// [수찾기1] 기홍이는 계단을 37개, 승기는 46개, 건희는 29개...
T11_external.push({
  key:'external_수찾기1_39',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`기홍이는 계단을 37개, 승기는 46개, 건희는 29개 올랐습니다. 이 중 가장 적은 계단을 오른 사람의 계단 수는?`,
      answer:'29',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 29, 식: none`
    };
  }
});

// [수찾기1] 공사장에 곧게 난 도로에서 시작점을 같이 하여 빨간 깃...
T11_external.push({
  key:'external_수찾기1_40',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`공사장에 곧게 난 도로에서 시작점을 같이 하여 빨간 깃발은 12m 간격으로, 노란 깃발은 8m 간격으로 꽂았습니다. 두 색의 깃발이 처음으로 같이 꽂히는 곳은 시작점에서 몇 m 떨어진 곳입니까?`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [수찾기1] 성민이는 오늘 인형 뽑기를 하여, 가장 많이 뽑은 인형...
T11_external.push({
  key:'external_수찾기1_41',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`성민이는 오늘 인형 뽑기를 하여, 가장 많이 뽑은 인형 종류는 친구들에게 나눠주려고 합니다. 종류별로 78, 55, 65, 47, 10개의 인형을 뽑았을 때, 나눠주게 될 인형의 개수는 몇 개입니까?`,
      answer:'78',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 78, 식: none`
    };
  }
});

// [수찾기1] A마트는 수박을 132개 판매하고, B마트는 수박을 1...
T11_external.push({
  key:'external_수찾기1_42',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A마트는 수박을 132개 판매하고, B마트는 수박을 119개 판매합니다. C마트는 126개 판매할 때, 가장 많이 판매하는 곳 수박 개수와 가장 적게 판매하는 곳 수박 개수의 합을 구하시오.`,
      answer:'251',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 251, 식: none`
    };
  }
});

// [수찾기1] 민주는 화단 왼쪽 끝에서부터 튤립은 6m 간격으로, 해...
T11_external.push({
  key:'external_수찾기1_43',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`민주는 화단 왼쪽 끝에서부터 튤립은 6m 간격으로, 해바라기는 8m 간격으로 심으려고 합니다. 튤립과 해바라기가 처음으로 같이 심어지는 곳은 시작지점으로부터 몇 m 떨어진 곳입니까?`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [수찾기1] 동아리 부서에는 연극부 58명, 경제부 77명, 댄스부...
T11_external.push({
  key:'external_수찾기1_44',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동아리 부서에는 연극부 58명, 경제부 77명, 댄스부 49명이 있습니다. 이 중에서 2의 배수이면서 29로 나누어떨어지는 동아리 부서의 학생 수는 몇 명입니까?`,
      answer:'58',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 58, 식: none`
    };
  }
});

// [수찾기1] 어떤 두 수의 최소공배수가 6일 때, 이 두 수의 공배...
T11_external.push({
  key:'external_수찾기1_45',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 두 수의 최소공배수가 6일 때, 이 두 수의 공배수중 작은 수부터 5개의 합은 얼마인가요?`,
      answer:'90',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 90, 식: none`
    };
  }
});

// [수찾기1] A 버스는 15분, B 버스는 10분마다 출발한다고 합...
T11_external.push({
  key:'external_수찾기1_46',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A 버스는 15분, B 버스는 10분마다 출발한다고 합니다. 지금 동시에 출발했다면 앞으로 두 버스가 다섯 번째로 동시에 출발하는 시간은 몇 분 후입니까?`,
      answer:'150',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 150, 식: none`
    };
  }
});

// [수찾기1] 현빈이는 색종이를 170장 가지고 있고 정아는 194장...
T11_external.push({
  key:'external_수찾기1_47',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현빈이는 색종이를 170장 가지고 있고 정아는 194장, 예진이는 220장을 가지고 있습니다. 이 중에서 180장 이상 230장 이하가 아닌 색종이 장수는 몇 장입니까?`,
      answer:'170',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 170, 식: none`
    };
  }
});

// [수찾기1] 683, 304, 631 중 백의 자리 숫자가 6이고,...
T11_external.push({
  key:'external_수찾기1_48',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`683, 304, 631 중 백의 자리 숫자가 6이고, 일의 자리 숫자가 3인 숫자를 찾으시오.`,
      answer:'683',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 683, 식: none`
    };
  }
});

// [수찾기1] 진수, 수경, 경아는 우표를 사용해 편지를 보냈습니다....
T11_external.push({
  key:'external_수찾기1_49',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`진수, 수경, 경아는 우표를 사용해 편지를 보냈습니다. 오늘까지 진수는 230장, 수경이는 178장, 경아는 210장을 보냈다면 가장 많이 보낸 사람의 편지는 몇 장입니까?`,
      answer:'230',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 230, 식: none`
    };
  }
});

// [수찾기1] 다음의 수 36,30, 24, 33, 27은 A이상인 ...
T11_external.push({
  key:'external_수찾기1_50',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기1','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음의 수 36,30, 24, 33, 27은 A이상인 자연수를 쓴 것이라고 했을 때, A가 될 수 있는 자연수 중 가장 큰 수는 얼마인지 구하시오.`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [수찾기2] 3(3/5)*10의 값은 AB이다. A+B의 값을 구하...
T11_external.push({
  key:'external_수찾기2_1',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`3(3/5)*10의 값은 AB이다. A+B의 값을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 트럭 공장에서 어제는 트럭을 52A대 생산하고, 오늘은...
T11_external.push({
  key:'external_수찾기2_2',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`트럭 공장에서 어제는 트럭을 52A대 생산하고, 오늘은 3B4대 생산했습니다. 총 869대를 생산했을 때, A+B의 값을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 전교생이 1572명인 학교에서 운동회 시간에 짝짓기놀이...
T11_external.push({
  key:'external_수찾기2_3',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`전교생이 1572명인 학교에서 운동회 시간에 짝짓기놀이를 하였습니다. 3명씩 32A모둠이 만들어졌고, 4명씩 1B0모둠이 만들어졌습니다. 이를 만족하는 A, B의 합을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 각 자리의 수가 1에서 9까지의 자연수로 이루어진 세 ...
T11_external.push({
  key:'external_수찾기2_4',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`각 자리의 수가 1에서 9까지의 자연수로 이루어진 세 자리 자연수를 만들려고 할 때, 백의 자리, 십의 자리, 일의 자리 수를 각각 X, Y, Z라고 하자. X< Y <= Z를 만족시키는 세 자리 자연수의 개수를 구하여라`,
      answer:'120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 120, 식: none`
    };
  }
});

// [수찾기2] 상우가 7시간 동안 수확한 사과는 2A7개 입니다. 한...
T11_external.push({
  key:'external_수찾기2_5',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`상우가 7시간 동안 수확한 사과는 2A7개 입니다. 한 시간 당 수확한 사과가 4B개일 때, 알맞은 A,B의 합을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] A를 8로 나누었을 때 몫은 3,나머지는 0입니다. A...
T11_external.push({
  key:'external_수찾기2_6',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A를 8로 나누었을 때 몫은 3,나머지는 0입니다. A를 6으로 나누면 몫은 얼마입니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기2] 승관이네 집에는 암탉이 A마리 있습니다. 그 중 반은 ...
T11_external.push({
  key:'external_수찾기2_7',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`승관이네 집에는 암탉이 A마리 있습니다. 그 중 반은 닭 한마리가 2일에 한 개씩 달걀을 낳고, 나머지는 하루에 한 개씩 달걀을 낳는다고 합니다. 4주일 동안 210개를 낳았다고 할 때, A의 값을 구하시오.`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기2] 두 도시의 인구를 조사했습니다. 첫 번째 도시의 인구는...
T11_external.push({
  key:'external_수찾기2_8',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`두 도시의 인구를 조사했습니다. 첫 번째 도시의 인구는 32A명이고, 두 번째 도시의 인구는 2B6명입니다. 두 도시를 합친 인구가 578명일 때, 이를 만족하는 A,B의 합을 구하시오.`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기2] 명수의 나이는 A살입니다. 동훈이의 나이는 명수의 나이...
T11_external.push({
  key:'external_수찾기2_9',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`명수의 나이는 A살입니다. 동훈이의 나이는 명수의 나이의 (3/5)이고, 형돈의 나이는 명수의 나이의 1(1/5)배입니다. 형돈이의 나이가 36살이고, 동훈이의 나이를 B라고 할때, A-B의 값을 구하시오.`,
      answer:'18',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 18, 식: none`
    };
  }
});

// [수찾기2] 천의 자리가 4, 백의 자리가 3, 십의 자리가 5, ...
T11_external.push({
  key:'external_수찾기2_10',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`천의 자리가 4, 백의 자리가 3, 십의 자리가 5, 일의 자리가 8인 수가 천의 자리가 4, 백의 자리가 A, 십의 자리가 3, 일의 자리가 7인 수보다 클 때 A에 들어갈 수 있는 수의 최대값은?`,
      answer:'3',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3, 식: none`
    };
  }
});

// [수찾기2] 어떤 수 A와 B의 최대공약수는 8이고, 최소공배수는 ...
T11_external.push({
  key:'external_수찾기2_11',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수 A와 B의 최대공약수는 8이고, 최소공배수는 120입니다. 어떤수 A와 B의 합을 구하시오.`,
      answer:'84',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 84, 식: none`
    };
  }
});

// [수찾기2] 세희네 과일가게는 일 주일 동안 사과를 팔았습니다 3일...
T11_external.push({
  key:'external_수찾기2_12',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`세희네 과일가게는 일 주일 동안 사과를 팔았습니다 3일 동안은 하루에 32A씩 팔렸고, 4일 동안은 하루에 1B0씩 팔렸습니다. 일 주일 동안 모두 1572개의 사과를 팔았을 때, 알맞은 A, B의 합을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 16을 2로 나눴을 때의 몫이 A를 7로 나눴을 때의 ...
T11_external.push({
  key:'external_수찾기2_13',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`16을 2로 나눴을 때의 몫이 A를 7로 나눴을 때의 몫과 동일하다. 나머지는 모두 0일 때, A의 값은 무엇입니까?`,
      answer:'56',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 56, 식: none`
    };
  }
});

// [수찾기2] 효원이가 가진 구슬의 개수는 1A6개, 유정이가 가진 ...
T11_external.push({
  key:'external_수찾기2_14',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`효원이가 가진 구슬의 개수는 1A6개, 유정이가 가진 구슬은 B4C개 입니다. 효원이와 유정이가 가진 구슬의 개수가 총 498개일 때, A,B,C의 합은 무엇입니까?`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기2] 현우는 45장의 학종이를 가지고 있습니다. 1A장은 현...
T11_external.push({
  key:'external_수찾기2_15',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현우는 45장의 학종이를 가지고 있습니다. 1A장은 현우가 학을 접는 데 사용하였고, B3장은 친구들에게 나누어 주어서 5장이 남았습니다. 이를 만족하는 A, B의 합을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 오늘 용재의 블로그의 방문자 수는 629명 입니다. 이...
T11_external.push({
  key:'external_수찾기2_16',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`오늘 용재의 블로그의 방문자 수는 629명 입니다. 이 중 4A8명은 처음 방문한 사람들이었고, 나머지 B01명은 방문한 적이 있었던 사람들입니다. 이를 만족하는 A, B의 합을 구하시오.`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기2] 세희는 우표를 32A장, 성중이는 우표를 2B6장 갖고...
T11_external.push({
  key:'external_수찾기2_17',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`세희는 우표를 32A장, 성중이는 우표를 2B6장 갖고 있습니다. 세희와 성중이가 총 578장의 우표를 갖고 있을 때, 이를 만족하는 A,B의 곱을 구하시오.`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기2] 87-(64/AB)의 값이 85일 때, A+B의 값을 ...
T11_external.push({
  key:'external_수찾기2_18',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`87-(64/AB)의 값이 85일 때, A+B의 값을 구하시오.`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: none`
    };
  }
});

// [수찾기2] 소진이네는 양계장을 합니다. 578마리 중에서 암탉이 ...
T11_external.push({
  key:'external_수찾기2_19',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`소진이네는 양계장을 합니다. 578마리 중에서 암탉이 32A마리이고, 나머지 수탉은 2B6마리 입니다. A,B의 합은 무엇입니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기2] 어느 놀이공원의 입장료가 어른은 32A원, 어린이는 1...
T11_external.push({
  key:'external_수찾기2_20',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 놀이공원의 입장료가 어른은 32A원, 어린이는 1B0원 입니다. 3명의 어른과 4명의 어린이가 입장했을 때 1572원이 나왔다면, 알맞은 A, B의 합은 무엇입니까?`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 새벽에 새우잡이 배가 89A마리의 새우를 잡았습니다. ...
T11_external.push({
  key:'external_수찾기2_21',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`새벽에 새우잡이 배가 89A마리의 새우를 잡았습니다. 경매를 통해 4B7마리가 팔렸고, C09마리가 남아있습니다. 알맞은 A, B, C의 합을 구하시오.`,
      answer:'18',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 18, 식: none`
    };
  }
});

// [수찾기2] A.BC/1.4의 값은 8.4이다. A+B+C의 값을 ...
T11_external.push({
  key:'external_수찾기2_22',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A.BC/1.4의 값은 8.4이다. A+B+C의 값을 구하시오.`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [수찾기2] 숫자 카드 3,4,8이 있습니다. 이 숫자 카드를 한 ...
T11_external.push({
  key:'external_수찾기2_23',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`숫자 카드 3,4,8이 있습니다. 이 숫자 카드를 한 번씩만 사용하여, 세 자리 수를 만들 때, 약수의 개수가 가장 많은 세 자리 수 중 가장 큰 수를 구하시오.`,
      answer:'384',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 384, 식: none`
    };
  }
});

// [수찾기2] 40/2=A, 80/B=20, 5C/5=10일때, A+...
T11_external.push({
  key:'external_수찾기2_24',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`40/2=A, 80/B=20, 5C/5=10일때, A+B+C를 구하시오.`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [수찾기2] 소수 A.B가 있다. 이 소수가 1보다 작고, 0.1이...
T11_external.push({
  key:'external_수찾기2_25',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`소수 A.B가 있다. 이 소수가 1보다 작고, 0.1이 5배인 수보다 클 때, 이를 만족하는 가장 작은 소수의 각 자리수의 합 A+B를 구하시오.`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [수찾기2] 종연이네 빵집에서는 한 시간에 A2개의 빵을 굽습니다....
T11_external.push({
  key:'external_수찾기2_26',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`종연이네 빵집에서는 한 시간에 A2개의 빵을 굽습니다. B시간 동안 총 92개의 빵을 구웠을 때, 이를 만족하는 A,B의 합을 구하시오.`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [수찾기2] 0.002*0.3의 값을 0.0AB라 할 때, A+B의...
T11_external.push({
  key:'external_수찾기2_27',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`0.002*0.3의 값을 0.0AB라 할 때, A+B의 값을 구하시오.`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [수찾기2] 유지네 집에서 어제는 수박 1AB개를 수확하고, 오늘은...
T11_external.push({
  key:'external_수찾기2_28',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`유지네 집에서 어제는 수박 1AB개를 수확하고, 오늘은 2AA개를 수확하였습니다. 어제와 오늘 총 368개를 수확했다면, A+B의 값은 무엇입니까?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [수찾기2] 1부터 9까지의 수 중, 51에 A배를 했을 때, 30...
T11_external.push({
  key:'external_수찾기2_29',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`1부터 9까지의 수 중, 51에 A배를 했을 때, 301보다 큰 경우를 만족하는 한 자리 수 A중 가장 작은 값을 구하시오.`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기2] 다은이네 반 학생은 45명 입니다. 음악을 가장 좋아하...
T11_external.push({
  key:'external_수찾기2_30',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다은이네 반 학생은 45명 입니다. 음악을 가장 좋아하는 학생이 1A명, 미술을 가장 좋아하는 학생이 B3명, 음악, 미술을 제외한 다른 과목을 가장 좋아하는 학생이 5명일 때, 알맞은 A, B의 합을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 현진이는 32A원짜리 연필을 3개와 1B0원짜리 지우개...
T11_external.push({
  key:'external_수찾기2_31',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현진이는 32A원짜리 연필을 3개와 1B0원짜리 지우개를 4개를 구입하고 싶습니다. 그러나 갖고 있는 돈 1500원에서 72원이 모자랄 때, 알맞은 A, B의 합을 구하시오.`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기2] 운동장에 청팀과 백팀이 있습니다. 청팀과 백팀의 인원은...
T11_external.push({
  key:'external_수찾기2_32',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`운동장에 청팀과 백팀이 있습니다. 청팀과 백팀의 인원은 똑같이 421명 입니다. 이 중 5A8명이 남학생이고 30B명이 여학생일 때, 알맞는 A, B의 곱을 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [수찾기2] 3(2/3)*2(4/7)=(A/7)=9(B/C)의 식이...
T11_external.push({
  key:'external_수찾기2_33',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`3(2/3)*2(4/7)=(A/7)=9(B/C)의 식이 있다. A-(B*C)의 값을 구하시오.`,
      answer:'45',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 45, 식: none`
    };
  }
});

// [수찾기2] 이번 달 보름이네 사진관에서 증명사진을 찍은 사람은 4...
T11_external.push({
  key:'external_수찾기2_34',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`이번 달 보름이네 사진관에서 증명사진을 찍은 사람은 4A8명, 여권사진을 찍은 사람은 B01명 입니다. 증명사진 혹은 여권사진을 찍은 사람이 모두 629명일 때, 알맞은 A, B의 합을 구하시오.`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기2] 1.7*2.1*3.4=12.ABC의 식이 있다. A+B...
T11_external.push({
  key:'external_수찾기2_35',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`1.7*2.1*3.4=12.ABC의 식이 있다. A+B+C의 값을 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [수찾기2] 한 묶음에는 30개가 들어있는 구슬 A0묶음이 있습니다...
T11_external.push({
  key:'external_수찾기2_36',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 묶음에는 30개가 들어있는 구슬 A0묶음이 있습니다. 5개의 모둠에 5B개씩 나누어 주면 25개가 남습니다. 알맞은 A, B의 합을 구하시오.`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [수찾기2] A와 B를 더하면 32이라고 한다. A와 B를 나누면 ...
T11_external.push({
  key:'external_수찾기2_37',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A와 B를 더하면 32이라고 한다. A와 B를 나누면 3일 때, B는?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [수찾기2] 기훈이네 회사에는 32A의 정규직과 2B6명의 비정규직...
T11_external.push({
  key:'external_수찾기2_38',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`기훈이네 회사에는 32A의 정규직과 2B6명의 비정규직이 있습니다. 회사에 총 578명이 다닐 때, A+B는 무엇입니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기2] 혜민이네 마을에 자동차가 7A8대가 있습니다. 이 중 ...
T11_external.push({
  key:'external_수찾기2_39',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`혜민이네 마을에 자동차가 7A8대가 있습니다. 이 중 400대는 국산차, 32B대는 외제차일 때, 알맞은 A, B의 합을 구하시오.`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기2] 색종이가 A0개 있습니다. 이 색종이를 3명에게 똑같이...
T11_external.push({
  key:'external_수찾기2_40',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`색종이가 A0개 있습니다. 이 색종이를 3명에게 똑같이 20개씩 나누어 가졌습니다. A에 들어갈 수를 구하시오.`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [수찾기2] 전체 장 수가 323장인 위인전이 있습니다. 성훈이는 ...
T11_external.push({
  key:'external_수찾기2_41',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`전체 장 수가 323장인 위인전이 있습니다. 성훈이는 방학동안 2A6장을 읽어서 6B장이 남았습니다. 이를 만족하는 A,B의 곱을 구하시오.`,
      answer:'35',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 35, 식: none`
    };
  }
});

// [수찾기2] 한 개에 500원 하는 과자 4개와 700원 하는 막대...
T11_external.push({
  key:'external_수찾기2_42',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 개에 500원 하는 과자 4개와 700원 하는 막대사탕 7개를 사고 AB000원을 내었더니 거스름돈으로 3,100원을 받았습니다. A-B의 값을 구하시오.`,
      answer:'1',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1, 식: none`
    };
  }
});

// [수찾기2] (3/7)*21의 값과 (B/A)*15의 값은 9로 같...
T11_external.push({
  key:'external_수찾기2_43',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`(3/7)*21의 값과 (B/A)*15의 값은 9로 같다. A+B의 값을 구하시오.`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [수찾기2] 395-18A>210일 때, A안에 들어갈 수 없는 숫...
T11_external.push({
  key:'external_수찾기2_44',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`395-18A>210일 때, A안에 들어갈 수 없는 숫자 중 가장 큰 숫자는 무엇입니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기2] 동그란 모양의 전등이 3개 들어가는 방이 32A개가 있...
T11_external.push({
  key:'external_수찾기2_45',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동그란 모양의 전등이 3개 들어가는 방이 32A개가 있고, 직선 모양의 전등이 4개 들어가는 방이 1B0개가 있을 때 필요한 전등의 개수는 1572개 입니다. 알맞은 A, B의 합을 구하시오.`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기2] 0.1의 자리가 4, 0.01의 자리가 A인 수에 0....
T11_external.push({
  key:'external_수찾기2_46',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`0.1의 자리가 4, 0.01의 자리가 A인 수에 0.458을 더해서 0.938이 되었다고 할 때, A의 값을 구하시오.`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [수찾기2] 한 변의 길이가 1.4cm인 정사각형의 둘레의 길이를 ...
T11_external.push({
  key:'external_수찾기2_47',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 변의 길이가 1.4cm인 정사각형의 둘레의 길이를 A.B라고 할 때 A+B의 값을 구하시오.`,
      answer:'11',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 11, 식: none`
    };
  }
});

// [수찾기2] 호텔에는 A2B개의 방이 있습니다. 이 중 3C4개는 ...
T11_external.push({
  key:'external_수찾기2_48',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`호텔에는 A2B개의 방이 있습니다. 이 중 3C4개는 침대방, 225개는 온돌방 입니다. 알맞은 A, B, C의 합을 구하시오.`,
      answer:'14',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 14, 식: none`
    };
  }
});

// [수찾기2] 어느 영화의 관객 629명 중에서 이 영화를 처음 본 ...
T11_external.push({
  key:'external_수찾기2_49',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 영화의 관객 629명 중에서 이 영화를 처음 본 관객은 4A8명이고, 두번 이상 보는 관객은 B01명입니다. 알맞은 A, B의 합을 구하시오.`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기2] 14/2=A, 36/B=6일 때, A, B의 합을 구하...
T11_external.push({
  key:'external_수찾기2_50',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기2','외부DB'],
  gen(){
    return {
      type:'short',
      question:`14/2=A, 36/B=6일 때, A, B의 합을 구하시오.`,
      answer:'13',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 13, 식: none`
    };
  }
});

// [수찾기3] 어제 축구장에 입장한 관객의 수에 오늘 입장한 관객의 ...
T11_external.push({
  key:'external_수찾기3_1',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어제 축구장에 입장한 관객의 수에 오늘 입장한 관객의 수 593명을 더해야하는 것을 잘못하여 395명를 더하였더니 973이 되었습니다. 바르게 계산하면 축구장에 어제와 오늘 입장한 관객의 수 합은 얼마입니까?`,
      answer:'1171',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1171, 식: none`
    };
  }
});

// [수찾기3] 수현이네 학교는 소풍을 가기 위해 버스를 9대에 나누어...
T11_external.push({
  key:'external_수찾기3_2',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`수현이네 학교는 소풍을 가기 위해 버스를 9대에 나누어 타야 할 것을 잘못하여 7대에 나누어탔더니 한 버스당 38명이 타고 4명의 학생이 남았습니다. 바르게 계산하면 한 버스당 몇 명의 학생이 타게 됩니까?`,
      answer:'30',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 30, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 나...
T11_external.push({
  key:'external_수찾기3_3',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 두 자리 수 중에서 첫 번째로 큰 수를 뺐더니 21이 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [수찾기3] 3을 곱해야하는 어떤 수를 식을 잘못보고 8로 나누었더...
T11_external.push({
  key:'external_수찾기3_4',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`3을 곱해야하는 어떤 수를 식을 잘못보고 8로 나누었더니 14가 되었다. 바르게 계산하면 얼마입니까?`,
      answer:'336',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 336, 식: none`
    };
  }
});

// [수찾기3] 동물원에 놀러온 사람의 수에 어린이 128명을 빼야하는...
T11_external.push({
  key:'external_수찾기3_5',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동물원에 놀러온 사람의 수에 어린이 128명을 빼야하는 것을 잘못하여 28명을 뺐더니 201명이 되었습니다. 바르게 계산하면 동물원에 남아있는 어른은 몇 명입니까?`,
      answer:'101',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 101, 식: none`
    };
  }
});

// [수찾기3] 가득 차 있는 간장통에 1.33L를 빼야할 것을 잘못하...
T11_external.push({
  key:'external_수찾기3_6',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가득 차 있는 간장통에 1.33L를 빼야할 것을 잘못하여 3.11L를 뺐더니 2.76L가 남았습니다. 바르게 계산하면 간장통에는 몇 L가 남았습니까?`,
      answer:'4.54',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4.54, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 제일 작은 수를 나누어야...
T11_external.push({
  key:'external_수찾기3_7',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에 두 자리 수 중에서 제일 작은 수를 나누어야 할 것을 식을 잘못보고 두 자리 수 중에서 세 번째로 작은 수를 더하였더니 72가 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [수찾기3] 우표를 4개씩 묶어야 할 것을 잘못하여 7개씩 묶었더니...
T11_external.push({
  key:'external_수찾기3_8',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`우표를 4개씩 묶어야 할 것을 잘못하여 7개씩 묶었더니 6묶음이 나오고 6개의 우표가 남았습니다. 바르게 계산하면 몇 묶음이 나옵니까?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [수찾기3] 버스 정거장에서 기다리고 있는 남자의 수에 여자 187...
T11_external.push({
  key:'external_수찾기3_9',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`버스 정거장에서 기다리고 있는 남자의 수에 여자 187명을 더해야하는 것을 잘못하여 87명만 더하였더니 259명이 되었습니다. 바르게 계산하면 버스 정거장에서 기다리고 있는 사람들은 모두 몇 명입니까?`,
      answer:'359',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 359, 식: none`
    };
  }
});

// [수찾기3] 동화책의 무게에 1.67kg짜리 위인전을 더해야하는 것...
T11_external.push({
  key:'external_수찾기3_10',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동화책의 무게에 1.67kg짜리 위인전을 더해야하는 것을 잘못하여 0.76kg을 더하였더니 2.57kg이 되었습니다. 바르게 계산하면 동화책과 위인전의 무게는 모두 몇 kg입니까?`,
      answer:'3.48',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3.48, 식: none`
    };
  }
});

// [수찾기3] 동화책을 7일 동안 읽어야 할 것을 잘못하여 10일동안...
T11_external.push({
  key:'external_수찾기3_11',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동화책을 7일 동안 읽어야 할 것을 잘못하여 10일동안 읽었더니 하루에 4쪽씩 읽고 9쪽이 남았습니다. 바르게 계사하면 하루에 몇쪽이 읽게 됩니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기3] 흰색 테이프의 길이에 빨간색 테이프 491cm를 더해야...
T11_external.push({
  key:'external_수찾기3_12',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`흰색 테이프의 길이에 빨간색 테이프 491cm를 더해야하는 것을 잘못하여 91cm를 더하였더니 463cm가 되었습니다. 바르게 계산하면 흰색 테이프와 빨간색 테이프의 길이는 모두 몇cm입니까?`,
      answer:'863',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 863, 식: none`
    };
  }
});

// [수찾기3] 볼펜을 4개씩 선물포장을 해야 할 것을 잘못하여 3개씩...
T11_external.push({
  key:'external_수찾기3_13',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`볼펜을 4개씩 선물포장을 해야 할 것을 잘못하여 3개씩 포장하여 6개의 선물과 2개의 볼펜이 남았습니다. 바르게 계산하면 몇 개의 선물이 나옵니까?`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: none`
    };
  }
});

// [수찾기3] 어느 문방구에서 지난 달에 판매한 색연필의 개수와 이번...
T11_external.push({
  key:'external_수찾기3_14',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 문방구에서 지난 달에 판매한 색연필의 개수와 이번 달에 판매한 색연필 192개를 더해야하는 것을 잘못하여 92개만 더하였더니 173개가 되었습니다. 바르게 계산하면 문방구에서 지난 달과 이번 달에 판매한 색연필은 모두 몇 개 입니까?`,
      answer:'273',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 273, 식: none`
    };
  }
});

// [수찾기3] 솔비는 어떤 수에 23을 곱해야 할것을 잘못하여 더하였...
T11_external.push({
  key:'external_수찾기3_15',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`솔비는 어떤 수에 23을 곱해야 할것을 잘못하여 더하였더니 67이 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'1012',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1012, 식: none`
    };
  }
});

// [수찾기3] 어떤 수를 11을 빼야할 것을 식을 잘못보고 27을 더...
T11_external.push({
  key:'external_수찾기3_16',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수를 11을 빼야할 것을 식을 잘못보고 27을 더하였더니 93이 되었다. 바르게 계산하면 얼마입니까?`,
      answer:'55',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 55, 식: none`
    };
  }
});

// [수찾기3] 어떤 수를 6을 빼야할 것을 식을 잘못보고 더하였더니 ...
T11_external.push({
  key:'external_수찾기3_17',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수를 6을 빼야할 것을 식을 잘못보고 더하였더니 48이 되었다. 바르게 계산하면 얼마입니까?`,
      answer:'36',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 36, 식: none`
    };
  }
});

// [수찾기3] 지우개를 필통에 4개씩 넣어야 할 것을 잘못하여 7개씩...
T11_external.push({
  key:'external_수찾기3_18',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`지우개를 필통에 4개씩 넣어야 할 것을 잘못하여 7개씩 넣었더니 5개의 필통을 사용하고 1개의 지우개가 남았습니다. 바르게 계산하면 몇 개의 필통이 필요합니까?`,
      answer:'9',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 9, 식: none`
    };
  }
});

// [수찾기3] 도로에 8m간격으로 가로등을 세워야 할 것을 잘못하여 ...
T11_external.push({
  key:'external_수찾기3_19',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`도로에 8m간격으로 가로등을 세워야 할 것을 잘못하여 6m간격으로 세웠더니 45개의 가로등을 세우고 2m가 남았습니다. 바르게 계산하면 몇 개의 가로등을 세울 수 있습니까?`,
      answer:'34',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 34, 식: none`
    };
  }
});

// [수찾기3] 진영이는 어떤 껌의 가격을 400원으로 잘못보고 2개를...
T11_external.push({
  key:'external_수찾기3_20',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`진영이는 어떤 껌의 가격을 400원으로 잘못보고 2개를 골라 1000원을 냈는데 거스름 돈 400원을 받았습니다. 어떤 껌의 원래 가격은 얼마입니까?`,
      answer:'300',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 300, 식: none`
    };
  }
});

// [수찾기3] 어떤 수를 10으로 나누어야할 것을 식을 잘못보고 13...
T11_external.push({
  key:'external_수찾기3_21',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수를 10으로 나누어야할 것을 식을 잘못보고 13을 뺐더니 97이 되었다. 바르게 계산하면 얼마입니까?`,
      answer:'11',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 11, 식: none`
    };
  }
});

// [수찾기3] 색종이를 똑같이 3묶음으로 나누어야 할 것을 잘못하여 ...
T11_external.push({
  key:'external_수찾기3_22',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`색종이를 똑같이 3묶음으로 나누어야 할 것을 잘못하여 7묶음으로 나누었더니 한 묶음에 1장씩 나누어주고 5개가 남았습니다. 바르게 계산하면 한 묶음에는 몇 장의 색종이가 있게 됩니까?`,
      answer:'4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 4, 식: none`
    };
  }
});

// [수찾기3] 일영이가 한 줄넘기의 수에 호연이가 한 348번의 줄넘...
T11_external.push({
  key:'external_수찾기3_23',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`일영이가 한 줄넘기의 수에 호연이가 한 348번의 줄넘기를 더해야하는 것을 잘못하여 48만 더하였더니 317번이 되었습니다. 바르게 계산하면 일영이와 호연이는 줄넘기를 모두 몇 번 입니까?`,
      answer:'617',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 617, 식: none`
    };
  }
});

// [수찾기3] 준오가 49에 어떤 수를 곱해야 할 것을 잘못해서 빼었...
T11_external.push({
  key:'external_수찾기3_24',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`준오가 49에 어떤 수를 곱해야 할 것을 잘못해서 빼었더니 44가 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'245',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 245, 식: none`
    };
  }
});

// [수찾기3] 민하는 자신이 딴 딸기의 수에 동생이 딴 딸기 329개...
T11_external.push({
  key:'external_수찾기3_25',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`민하는 자신이 딴 딸기의 수에 동생이 딴 딸기 329개를 더해야하는 것을 잘못하여 291개를 더하였더니 578이 되었습니다. 바르게 계산하면 민하와 동생이 딴 딸기의 합은 몇 개입니까?`,
      answer:'616',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 616, 식: none`
    };
  }
});

// [수찾기3] 아린이네 과수원에 작년에 수확한 포도의 개수에 올해 수...
T11_external.push({
  key:'external_수찾기3_26',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`아린이네 과수원에 작년에 수확한 포도의 개수에 올해 수확한 포도 283개를 더해야하는 것을 잘못하여 83개만 더하였더니 492개가 되었습니다. 바르게 계산하면 아린이네 과수원에서 작년과 올해 수확한 포도는 모두 몇 개입니까?`,
      answer:'692',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 692, 식: none`
    };
  }
});

// [수찾기3] 한 반에 연필 6개씩 나누어야 할 것을 잘못하여 8개씩...
T11_external.push({
  key:'external_수찾기3_27',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 반에 연필 6개씩 나누어야 할 것을 잘못하여 8개씩 나누었더니 5개의 반에 나누어주고 2개의 연필이 남았습니다. 바르게 계산하면 몇 개의 반에 나누어 줄 수 있습니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기3] 민지는 어떤 수에 39를 곱해야 하는데 잘못하여 39를...
T11_external.push({
  key:'external_수찾기3_28',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`민지는 어떤 수에 39를 곱해야 하는데 잘못하여 39를 더했더니 67이 되었습니다. 원래 계산해야했던 식으로 계산하시오.`,
      answer:'1092',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1092, 식: none`
    };
  }
});

// [수찾기3] 민현이네 학교 학생 수에 성운이네 학교 학생 392명을...
T11_external.push({
  key:'external_수찾기3_29',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`민현이네 학교 학생 수에 성운이네 학교 학생 392명을 빼야하는 것을 잘못하여 92명만 뺐더니 317명이 되었습니다. 바르게 계산하면 민현이네 학교 학생 수는 성운이네 학교보다 몇 명 더 많습니까?`,
      answer:'17',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 17, 식: none`
    };
  }
});

// [수찾기3] 채린이네 과수원에서 자신이 딴 딸기에 엄마가 딴 141...
T11_external.push({
  key:'external_수찾기3_30',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`채린이네 과수원에서 자신이 딴 딸기에 엄마가 딴 141개를 빼야하는 것을 잘못하여 41개만 뺐더니 287개가 되었습니다. 바르게 계산하면 채린이는 엄마보다 몇 개 더 많이 땄습니까?`,
      answer:'187',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 187, 식: none`
    };
  }
});

// [수찾기3] 남우네 반 학생들이 피구를 하기 위해 5팀으로 나누어야...
T11_external.push({
  key:'external_수찾기3_31',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`남우네 반 학생들이 피구를 하기 위해 5팀으로 나누어야 할것을 잘못하여 4팀으로 나누었더니 한 팀 당 8명씩 배정되고 3명의 학생이 남았습니다. 바르게 계산하면 한 팀당 몇 명으로 이루어집니까?`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [수찾기3] 송 마을에 있는 학생의 수에 강 마을에 있는 학생 32...
T11_external.push({
  key:'external_수찾기3_32',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`송 마을에 있는 학생의 수에 강 마을에 있는 학생 321명을 빼야하는 것을 잘못하여 21명만 뺐더니 368명이 되었습니다. 바르게 계산하면 송 마을에 학생은 강 마을에 있는 학생보다 몇 명 더 많습니까?`,
      answer:'68',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 68, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에 7을 빼야 할 것을 잘못하여 더했더니 3이 ...
T11_external.push({
  key:'external_수찾기3_33',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에 7을 빼야 할 것을 잘못하여 더했더니 3이 되었다. 바르게 계산한 답을 구하여라.`,
      answer:'-11',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: -11, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 네 번째로 큰 수를 더해...
T11_external.push({
  key:'external_수찾기3_34',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에 두 자리 수 중에서 네 번째로 큰 수를 더해야 할 것을 식을 잘못보고 두 자리 수 중에서 세 번째로 작은 수를 더했더니 182가 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'266',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 266, 식: none`
    };
  }
});

// [수찾기3] 다희와 송이가 낚시를 갔는데 다희가 잡은 물고기의 무게...
T11_external.push({
  key:'external_수찾기3_35',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다희와 송이가 낚시를 갔는데 다희가 잡은 물고기의 무게에 송이가 잡은 물고기 1.83kg을 빼야하는 것을 잘못하여 0.83kg을 뺐더니 2.11kg이 되었습니다. 바르게 계산하면 다희는 송이보다 물고기를 몇 kg 더 많이 잡았습니까?`,
      answer:'1.11',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1.11, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 나...
T11_external.push({
  key:'external_수찾기3_36',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 3을 곱하였더니 96가 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'3',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 3, 식: none`
    };
  }
});

// [수찾기3] 민식이는 어떤 과자의 가격을 2000원으로 잘못보고 3...
T11_external.push({
  key:'external_수찾기3_37',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`민식이는 어떤 과자의 가격을 2000원으로 잘못보고 3개를 골라 10000원을 냈는데 거스름 돈 5500원을 받았습니다. 과자의 원래 가격은 얼마입니까?`,
      answer:'1500',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1500, 식: none`
    };
  }
});

// [수찾기3] 석정이는 과일 가게에서 산 사과의 무게에 포도 4.82...
T11_external.push({
  key:'external_수찾기3_38',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`석정이는 과일 가게에서 산 사과의 무게에 포도 4.82kg을 더해야하는 것을 잘못하여 2.48kg을 더하였더니 5.12kg이 되었습니다. 바르게 계산하면 석정이가 산 과일의 무게는 모두 몇 kg입니까?`,
      answer:'7.46',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7.46, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 여섯번 째로 작은 수를 ...
T11_external.push({
  key:'external_수찾기3_39',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에 두 자리 수 중에서 여섯번 째로 작은 수를 곱해야 할 것을 식을 잘못보고 두 자리 수 중에서 두 번째로 큰 수를 더하였더니 112가 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'210',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 210, 식: none`
    };
  }
});

// [수찾기3] 화이트데이를 기념으로 한 여학생 당 5개의 사탕을 나누...
T11_external.push({
  key:'external_수찾기3_40',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`화이트데이를 기념으로 한 여학생 당 5개의 사탕을 나누어 주어야 할 것을 잘못하여 7개씩 나누어 주었더니 13명이 사탕을 받고 4개의 사탕이 남았습니다. 바르게 계산하면 몇 명의 학생이 사탕을 받을 수 있습니까?`,
      answer:'19',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 19, 식: none`
    };
  }
});

// [수찾기3] 지영이는 11을 곱해야하는 것을 식을 잘못보고 7로 나...
T11_external.push({
  key:'external_수찾기3_41',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`지영이는 11을 곱해야하는 것을 식을 잘못보고 7로 나누었더니 6이 되었다. 바르게 계산하면 얼마입니까?`,
      answer:'462',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 462, 식: none`
    };
  }
});

// [수찾기3] 은빈이네 반 학생을 4모둠으로 나누어 과제를 해야할 것...
T11_external.push({
  key:'external_수찾기3_42',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`은빈이네 반 학생을 4모둠으로 나누어 과제를 해야할 것을 잘못하여 7모둠으로 나누었더니 한 모둠당 2명씩 이루어지고 6명이 남았습니다. 바르게 계산하면 한 모둠당 몇 명으로 이루어집니까?`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: none`
    };
  }
});

// [수찾기3] 영어책을 책꽂이에 3개씩 꽂아야 할 것을 잘못하여 5개...
T11_external.push({
  key:'external_수찾기3_43',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영어책을 책꽂이에 3개씩 꽂아야 할 것을 잘못하여 5개씩 꽂았더니 7개의 책꽂이가 필요하고 4개의 책이 남았습니다. 바르게 계산하면 몇 개의 책꽂이가 필요합니까?`,
      answer:'13',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 13, 식: none`
    };
  }
});

// [수찾기3] 7로 나눠야 하는 어떤 수를 식을 잘못보고 더하였더니 ...
T11_external.push({
  key:'external_수찾기3_44',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`7로 나눠야 하는 어떤 수를 식을 잘못보고 더하였더니 42가 되었다. 바르게 계산하면 얼마입니까?`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: none`
    };
  }
});

// [수찾기3] 나무에 맺힌 귤의 수에 담을 수 있는 바구니의 수 5개...
T11_external.push({
  key:'external_수찾기3_45',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`나무에 맺힌 귤의 수에 담을 수 있는 바구니의 수 5개를 더해야하는 것을 잘못하여 곱하였더니 180이 되었습니다. 바르게 계산하면 얼마입니까?`,
      answer:'41',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 41, 식: none`
    };
  }
});

// [수찾기3] 정진이는 사과의 가격을 2000원으로 잘못보고 4개를 ...
T11_external.push({
  key:'external_수찾기3_46',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`정진이는 사과의 가격을 2000원으로 잘못보고 4개를 골라 10000원을 냈는데 거스름 돈 4000원을 받았습니다. 사과의 원래 가격은 얼마입니까?`,
      answer:'1500',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1500, 식: none`
    };
  }
});

// [수찾기3] 기훈이네 학원에 다니는 여학생의 수에 남학생 84명을 ...
T11_external.push({
  key:'external_수찾기3_47',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`기훈이네 학원에 다니는 여학생의 수에 남학생 84명을 더해야하는 것을 잘못하여 48명을 더하였더니 132가 되었습니다. 바르게 계산하면 기훈이네 학원에 다니는 학생은 몇 명입니까?`,
      answer:'168',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 168, 식: none`
    };
  }
});

// [수찾기3] 수연이는 오늘 외운 영어 단어의 수에서 어제 외운 영어...
T11_external.push({
  key:'external_수찾기3_48',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`수연이는 오늘 외운 영어 단어의 수에서 어제 외운 영어 단어 109개를 빼야하는 것을 잘못하여 19개만 뺐더니 98개가 되었습니다. 바르게 계산하면 오늘은 어제보다 몇 개를 더 외웠습니까?`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [수찾기3] 현리네 집에서 공원까지의 거리를 2번 갔다와야 할 것을...
T11_external.push({
  key:'external_수찾기3_49',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현리네 집에서 공원까지의 거리를 2번 갔다와야 할 것을 잘못하여 4번 달려 갔다왔더니 1024m를 달렸습니다. 바르게 계산하면 현리네 집에서 공원까지 2번 갔다오면 달리는 거리는 몇m입니까?`,
      answer:'512',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 512, 식: none`
    };
  }
});

// [수찾기3] 어떤 수에서 68을 빼야 하는데 식을 잘못보고 53를 ...
T11_external.push({
  key:'external_수찾기3_50',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['수찾기3','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 수에서 68을 빼야 하는데 식을 잘못보고 53를 뺐더니 27이 되었습니다. 바르게 계산한 결과를 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [크기비교] 사탕을 이용하여 저울로 무게를 재었더니 필통은 사탕 1...
T11_external.push({
  key:'external_크기비교_1',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`사탕을 이용하여 저울로 무게를 재었더니 필통은 사탕 15개, 장갑은 동전 19개와 무게가 같았습니다. 필통과 장갑 중 더 가벼운 것은 무엇입니까?`,
      answer:'필통',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 필통, 식: none`
    };
  }
});

// [크기비교] 영은이는 피자의 1/4를 먹었고, 영진이는 피자의 1/...
T11_external.push({
  key:'external_크기비교_2',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영은이는 피자의 1/4를 먹었고, 영진이는 피자의 1/8을 먹었으며, 다영이는 피자의 3/8을 먹었을 때 누가 피자를 더 많이 먹었습니까?`,
      answer:'영은',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 영은, 식: none`
    };
  }
});

// [크기비교] 우진이가 읽으려고 하는 소설책은 140쪽, 동화책은 1...
T11_external.push({
  key:'external_크기비교_3',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`우진이가 읽으려고 하는 소설책은 140쪽, 동화책은 120쪽입니다. 소설책은 하루에 20쪽씩, 동화책은 10쪽씩 읽는다면 3일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?`,
      answer:'동화책',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 동화책, 식: none`
    };
  }
});

// [크기비교] 유섭이와 미림이는 매일 같은 크기의 컵에 우유를 먹습니...
T11_external.push({
  key:'external_크기비교_4',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`유섭이와 미림이는 매일 같은 크기의 컵에 우유를 먹습니다. 유섭이는 1/7의 컵에 5번을 마시고, 미림이는 1/5컵씩 3번을 마십니다. 하루동안 누가 우유를 더 많이 마십니까?`,
      answer:'유섭',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 유섭, 식: none`
    };
  }
});

// [크기비교] 수민이는 구슬을 한 봉지에 12개씩 4봉지를 가지고 있...
T11_external.push({
  key:'external_크기비교_5',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`수민이는 구슬을 한 봉지에 12개씩 4봉지를 가지고 있고, 국주는 구슬을 20개 묶음 2봉지와 낱개로 10개를 가지고 있습니다. 누가 더 많이 가지고 있습니까?`,
      answer:'국주',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 국주, 식: none`
    };
  }
});

// [크기비교] 영수는 숫자카드 2, 19를 가지고 있고 수민이는 숫자...
T11_external.push({
  key:'external_크기비교_6',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영수는 숫자카드 2, 19를 가지고 있고 수민이는 숫자카드 3, 17을 가지고 있습니다. 누구의 숫자 카드의 합이 더 큽니까?`,
      answer:'영수',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 영수, 식: none`
    };
  }
});

// [크기비교] 나현이와 강연이가 리본을 잘라서 나눠가졌습니다. 나현이...
T11_external.push({
  key:'external_크기비교_7',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`나현이와 강연이가 리본을 잘라서 나눠가졌습니다. 나현이의 리본은 12cm, 강연이의 리본은 18cm일 때 누구의 리본이 더 깁니까?`,
      answer:'강연',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 강연, 식: none`
    };
  }
});

// [크기비교] 현정이네 정원에 있는 은행나무의 키는 260cm이고, ...
T11_external.push({
  key:'external_크기비교_8',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현정이네 정원에 있는 은행나무의 키는 260cm이고, 대추나무의 키는 325cm입니다. 어느 나무의 키가 더 큽니까?`,
      answer:'대추나무',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 대추나무, 식: none`
    };
  }
});

// [크기비교] 지훈이의 키는 185cm이고, 현진이의 키는 163cm...
T11_external.push({
  key:'external_크기비교_9',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`지훈이의 키는 185cm이고, 현진이의 키는 163cm입니다. 키가 더 작은 사람은 누구입니까?`,
      answer:'현진',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 현진, 식: none`
    };
  }
});

// [크기비교] 오늘 식당에 온 사람은 총 2540명입니다. 그 중에서...
T11_external.push({
  key:'external_크기비교_10',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`오늘 식당에 온 사람은 총 2540명입니다. 그 중에서 남자가 1230명일 때 여자와 남자 중 더 많은 사람은 누구 입니까?`,
      answer:'여자',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 여자, 식: none`
    };
  }
});

// [크기비교] 은영이는 5000원이 있었는데 아이스크림을 사고 500...
T11_external.push({
  key:'external_크기비교_11',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`은영이는 5000원이 있었는데 아이스크림을 사고 500원짜리 3개를 냈습니다. 윤정이는 4000원이 있었는데 500원짜리 2개를 더 받았습니다. 남아있는 돈은 누가 더 많습니까?`,
      answer:'윤정',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 윤정, 식: none`
    };
  }
});

// [크기비교] 혜주는 진구보다 키가 크고, 주민이는 혜주보다 키가 크...
T11_external.push({
  key:'external_크기비교_12',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`혜주는 진구보다 키가 크고, 주민이는 혜주보다 키가 크고 기민이는 주민이보다 키가 큽니다. 가장 키가 큰 사람은 누구입니까?`,
      answer:'기민',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 기민, 식: none`
    };
  }
});

// [크기비교] 진수는 1.8cm짜리 구슬을 가지고 있고, 환영이는 지...
T11_external.push({
  key:'external_크기비교_13',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`진수는 1.8cm짜리 구슬을 가지고 있고, 환영이는 지름이 4cm인 구슬을 가지고 있습니다. 누구의 구슬이 더 작습니까?`,
      answer:'진수',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 진수, 식: none`
    };
  }
});

// [크기비교] 승아네 농장에 말, 돼지, 소가 있습니다. 동물이 모두...
T11_external.push({
  key:'external_크기비교_14',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`승아네 농장에 말, 돼지, 소가 있습니다. 동물이 모두 80마리가 있을 때 말이 30, 돼지가 35마리가 있습니다. 말, 돼지 소 중에서 가장 적은 수의 동물은 무엇입니까?`,
      answer:'소',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 소, 식: none`
    };
  }
});

// [크기비교] 용진이네 집에서 도서관까지의 거리는 2402m, 교회까...
T11_external.push({
  key:'external_크기비교_15',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`용진이네 집에서 도서관까지의 거리는 2402m, 교회까지의 거리는 3120m입니다. 도서관과 교회 중 더 가까운 곳은 어디입니까?`,
      answer:'도서관',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 도서관, 식: none`
    };
  }
});

// [크기비교] 혜지가 한 달 동안 모은 돈은 8370원이고, 혜인이가...
T11_external.push({
  key:'external_크기비교_16',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`혜지가 한 달 동안 모은 돈은 8370원이고, 혜인이가 한 달 동안 모은 돈은 9270입니다. 혜지와 혜인이 중 한 달 동안 모은 돈이 더 많은 사람은 누구입니까?`,
      answer:'혜인',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 혜인, 식: none`
    };
  }
});

// [크기비교] 소령이는 420개의 단어를 외우고, 가영이는 513개의...
T11_external.push({
  key:'external_크기비교_17',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`소령이는 420개의 단어를 외우고, 가영이는 513개의 단어를 외웠습니다. 누가 더 적은 단어를 외웠습니까?`,
      answer:'소령',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 소령, 식: none`
    };
  }
});

// [크기비교] 동전을 이용하여 양팔 저울로 무게를 재었더니 동화책은 ...
T11_external.push({
  key:'external_크기비교_18',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`동전을 이용하여 양팔 저울로 무게를 재었더니 동화책은 동전 120개, 소설책은 동전 210개와 무게가 같았습니다. 동화책과 소설책 중에서 더 가벼운 것은 무엇입니까?`,
      answer:'동화책',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 동화책, 식: none`
    };
  }
});

// [크기비교] 유희왕 딱지를 혜정이는 250장, 소희는 280장을 모...
T11_external.push({
  key:'external_크기비교_19',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`유희왕 딱지를 혜정이는 250장, 소희는 280장을 모았습니다. 누가 더 적게 모았습니까?`,
      answer:'소희',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 소희, 식: none`
    };
  }
});

// [크기비교] 태진이는 7300원을 저금했고, 민진이는 8450원을 ...
T11_external.push({
  key:'external_크기비교_20',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`태진이는 7300원을 저금했고, 민진이는 8450원을 저금했습니다. 누가 더 적게 저금했습니까?`,
      answer:'태진',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 태진, 식: none`
    };
  }
});

// [크기비교] 성규가 한 달 동안 모은 돈은 14000원 입니다. 규...
T11_external.push({
  key:'external_크기비교_21',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`성규가 한 달 동안 모은 돈은 14000원 입니다. 규성이는 앞으로 한 달에 8000원씩 3달을 모은다고 했을 때 더 많은 돈을 모은 사람은 누구입니까?`,
      answer:'규성',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 규성, 식: none`
    };
  }
});

// [크기비교] 지현이는 귤 3개씩 5묶음과 낱개 2개를 가지고 있고,...
T11_external.push({
  key:'external_크기비교_22',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`지현이는 귤 3개씩 5묶음과 낱개 2개를 가지고 있고, 승호는 귤 4개씩 3묶음과 낱개 1개를 가지고 있습니다. 누가 더 많은 귤을 가지고 있습니까?`,
      answer:'지현',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 지현, 식: none`
    };
  }
});

// [크기비교] 건대입구역에서 경아네 집까지의 거리는 1780m이고, ...
T11_external.push({
  key:'external_크기비교_23',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`건대입구역에서 경아네 집까지의 거리는 1780m이고, 유림이네 집까지의 거리는 2310m입니다. 건대입구역에서 누구의 집이 더 멉니까?`,
      answer:'유림',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 유림, 식: none`
    };
  }
});

// [크기비교] 예지가 한 달 동안 모은 돈은 8370원이고, 예인이가...
T11_external.push({
  key:'external_크기비교_24',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`예지가 한 달 동안 모은 돈은 8370원이고, 예인이가 한 달 동안 모은 돈은 9270입니다. 예지와 예인이 중 한 달 동안 모은 돈이 더 많은 사람은 누구입니까?`,
      answer:'예인',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 예인, 식: none`
    };
  }
});

// [크기비교] 소민, 수현, 현진이의 발의 길이가 각각 220mm, ...
T11_external.push({
  key:'external_크기비교_25',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`소민, 수현, 현진이의 발의 길이가 각각 220mm, 240mm, 235mm입니다. 발의 길이가 가장 짧은 사람은 누구입니까?`,
      answer:'소민',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 소민, 식: none`
    };
  }
});

// [크기비교] 영주, 현수, 민수, 기영이가 토마토를 땄습니다. 영주...
T11_external.push({
  key:'external_크기비교_26',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영주, 현수, 민수, 기영이가 토마토를 땄습니다. 영주는 76개, 현수는 73개, 민수는 98개, 기영이는 79개의 토마토를 땄을 때 가장 적은 토마토를 딴 사람은 누구입니까?`,
      answer:'현수',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 현수, 식: none`
    };
  }
});

// [크기비교] 세 명의 친구가 은행에서 번호표를 뽑았습니다. 장원이의...
T11_external.push({
  key:'external_크기비교_27',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`세 명의 친구가 은행에서 번호표를 뽑았습니다. 장원이의 번호표는 340, 다혜의 번호표는 420, 지석이의 번호표는 376일 때 가장 먼저 번호표를 뽑은 사람은 누구입니까?`,
      answer:'장원',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 장원, 식: none`
    };
  }
});

// [크기비교] 현진이는 2층에 살고, 미정이는 3층에 살고, 민경이는...
T11_external.push({
  key:'external_크기비교_28',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현진이는 2층에 살고, 미정이는 3층에 살고, 민경이는 4층에 삽니다. 가장 높은 층에 사는 사람은 누구입니까?`,
      answer:'민경',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 민경, 식: none`
    };
  }
});

// [크기비교] 윤희는 구슬을 1090개 가지고 있고, 주현이는 구슬을...
T11_external.push({
  key:'external_크기비교_29',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`윤희는 구슬을 1090개 가지고 있고, 주현이는 구슬을 980개 가지고 있습니다. 누가 구슬을 더 많이 가지고 있습니까?`,
      answer:'윤희',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 윤희, 식: none`
    };
  }
});

// [크기비교] 영훈이는 10조각의 피자 중 7조각을 먹었고, 유빈이는...
T11_external.push({
  key:'external_크기비교_30',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영훈이는 10조각의 피자 중 7조각을 먹었고, 유빈이는 10조각의 피자 중 2조각을 먹었을 때 피자를 더 많이 먹은 사람은 누구입니까?`,
      answer:'영훈',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 영훈, 식: none`
    };
  }
});

// [크기비교] 서윤이는 100원짜리 동전 8개, 10원짜리 동전 9개...
T11_external.push({
  key:'external_크기비교_31',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`서윤이는 100원짜리 동전 8개, 10원짜리 동전 9개가 있고, 다영이는 930원이 있습니다. 누가 돈을 더 적게 가지고 있습니까?`,
      answer:'서윤',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 서윤, 식: none`
    };
  }
});

// [크기비교] 영은이네 동네에 초등학교 학생은 모두 600명이고, 고...
T11_external.push({
  key:'external_크기비교_32',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영은이네 동네에 초등학교 학생은 모두 600명이고, 고등학교 학생은 모두 550명 입니다. 초등학교의 여학생은 340명이고, 고등학교의 여학생은 230명 일 때 남학생 수가 더 많은 학교는 어디입니까?`,
      answer:'고등학교',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 고등학교, 식: none`
    };
  }
});

// [크기비교] 희정이 읽으려고 하는 동화책은 300쪽, 희아가 읽으려...
T11_external.push({
  key:'external_크기비교_33',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`희정이 읽으려고 하는 동화책은 300쪽, 희아가 읽으려고 하는 동화책은 340쪽입니다. 희정이와 희아가 하루에 30쪽씩 5일을 읽는다면, 읽지 않은 쪽수는 누가 더 많습니까?`,
      answer:'희아',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 희아, 식: none`
    };
  }
});

// [크기비교] 현수는 연필이 12개, 지우개가 8개 있습니다. 연필을...
T11_external.push({
  key:'external_크기비교_34',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현수는 연필이 12개, 지우개가 8개 있습니다. 연필을 3개, 지우개를 2개 썼습니다. 어느 필기구가 더 적게 남아있습니까?`,
      answer:'지우개',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 지우개, 식: none`
    };
  }
});

// [크기비교] 리본을 한 개 만드는 데 소영이는 테이프를 10cm 사...
T11_external.push({
  key:'external_크기비교_35',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`리본을 한 개 만드는 데 소영이는 테이프를 10cm 사용하였고, 가영이는 8cm사용하였을 때 누가 더 많은 테이프를 사용하였습니까?`,
      answer:'소영',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 소영, 식: none`
    };
  }
});

// [크기비교] 영현이네 집에서 정류장까지는 420m, 은행까지는 51...
T11_external.push({
  key:'external_크기비교_36',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영현이네 집에서 정류장까지는 420m, 은행까지는 518m일 때 정류장과 은행 중에서 더 가까운 곳은 어디입니까?`,
      answer:'정류장',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 정류장, 식: none`
    };
  }
});

// [크기비교] 주만이는 6780걸음, 민현이는 5230걸음을 걸었습니...
T11_external.push({
  key:'external_크기비교_37',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`주만이는 6780걸음, 민현이는 5230걸음을 걸었습니다. 누가 더 많이 걸었습니까?`,
      answer:'주만',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 주만, 식: none`
    };
  }
});

// [크기비교] 사과는 18개씩 묶음 6개, 배는 100개가 있습니다....
T11_external.push({
  key:'external_크기비교_38',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`사과는 18개씩 묶음 6개, 배는 100개가 있습니다. 어느 과일이 더 많습니까?`,
      answer:'사과',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 사과, 식: none`
    };
  }
});

// [크기비교] 딱지를 민호는 32장, 철준이는 20장, 민정이는 10...
T11_external.push({
  key:'external_크기비교_39',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`딱지를 민호는 32장, 철준이는 20장, 민정이는 10장을 가지고 있습니다. 딱지를 가장 많이 가지고 있는 사람은 누구입니까?`,
      answer:'민호',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 민호, 식: none`
    };
  }
});

// [크기비교] 지호는 딱지를 123장, 병기는 딱지를 119장 가지고...
T11_external.push({
  key:'external_크기비교_40',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`지호는 딱지를 123장, 병기는 딱지를 119장 가지고 있습니다. 딱지를 더 적게 가지고 있는 사람은 누구입니까?`,
      answer:'병기',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 병기, 식: none`
    };
  }
});

// [크기비교] 사과는 8개씩 묶음 5개, 귤은 10개씩 묶음 6개가 ...
T11_external.push({
  key:'external_크기비교_41',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`사과는 8개씩 묶음 5개, 귤은 10개씩 묶음 6개가 있습니다. 어느 과일이 더 많습니까?`,
      answer:'귤',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 귤, 식: none`
    };
  }
});

// [크기비교] 현지네 집에서 학교까지의 거리는 1230m, 마트까지의...
T11_external.push({
  key:'external_크기비교_42',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`현지네 집에서 학교까지의 거리는 1230m, 마트까지의 거리는 3490m, 카페까지의 거리는 2300m 일 때 이 중 가장 가까운 곳은 어디입니까?`,
      answer:'학교',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 학교, 식: none`
    };
  }
});

// [크기비교] A산의 높이는 3420m, B산의 높이는 2120m, ...
T11_external.push({
  key:'external_크기비교_43',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`A산의 높이는 3420m, B산의 높이는 2120m, C산의 높이는 2310m 일 때 가장 높은 산은 어디입니까?`,
      answer:'A',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: A, 식: none`
    };
  }
});

// [크기비교] 종현이는 연필 10개를 3명에게 3개씩 나누어 주었고,...
T11_external.push({
  key:'external_크기비교_44',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`종현이는 연필 10개를 3명에게 3개씩 나누어 주었고, 현수는 지우개 7개를 4명에게 1개씩 나누어 주었을 때 남은 개수가 더 많은 사람은 누구입니까?`,
      answer:'현수',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 현수, 식: none`
    };
  }
});

// [크기비교] 수민이는 구슬을 한 봉지에 12개씩 5봉지를 가지고 있...
T11_external.push({
  key:'external_크기비교_45',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`수민이는 구슬을 한 봉지에 12개씩 5봉지를 가지고 있고, 국주는 구슬을 40개 묶음 1봉지와 낱개로 8개를 가지고 있습니다. 누가 더 많이 가지고 있습니까?`,
      answer:'수민',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 수민, 식: none`
    };
  }
});

// [크기비교] 혜정이는 39, 기훈이는 42, 민영이는 89가 쓰여진...
T11_external.push({
  key:'external_크기비교_46',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`혜정이는 39, 기훈이는 42, 민영이는 89가 쓰여진 숫자카드를 가지고 있습니다. 가장 작은 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?`,
      answer:'혜정',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 혜정, 식: none`
    };
  }
});

// [크기비교] 영섭이는 시험에서 74점을 맞았고, 호섭이는 시험에서 ...
T11_external.push({
  key:'external_크기비교_47',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`영섭이는 시험에서 74점을 맞았고, 호섭이는 시험에서 84점을 맞았습니다. 누가 시험에서 더 높은 점수를 얻었습니까?`,
      answer:'호섭',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 호섭, 식: none`
    };
  }
});

// [크기비교] 갯벌에서 지연이는 조개를 76개 캤고, 서진이는 조개를...
T11_external.push({
  key:'external_크기비교_48',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`갯벌에서 지연이는 조개를 76개 캤고, 서진이는 조개를 90개 캤으며 혜영이는 32개를 캤습니다. 누가 조개를 가장 많이 캤습니까?`,
      answer:'지연',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 지연, 식: none`
    };
  }
});

// [크기비교] 복숭아는 귤보다 무겁고, 수박은 복숭아보다 무겁습니다....
T11_external.push({
  key:'external_크기비교_49',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`복숭아는 귤보다 무겁고, 수박은 복숭아보다 무겁습니다. 가장 무거운 과일은 무엇입니까?`,
      answer:'수박',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 수박, 식: none`
    };
  }
});

// [크기비교] 경수가 지예보다 더 많은 구슬을 가지고있고, 유섭이가 ...
T11_external.push({
  key:'external_크기비교_50',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['크기비교','외부DB'],
  gen(){
    return {
      type:'short',
      question:`경수가 지예보다 더 많은 구슬을 가지고있고, 유섭이가 경수보다 더 많은 구슬을 가지고 있습니다. 구슬을 가장 적게 가지고 있는 사람은 누구입니까?`,
      answer:'지예',
      answerType:'string',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 지예, 식: none`
    };
  }
});

// [도형산술] 정원이의 책삭은 가로가 세로의 5배이고, 둘레가 600...
T11_external.push({
  key:'external_도형산술_1',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`정원이의 책삭은 가로가 세로의 5배이고, 둘레가 600cm인 직사각형 모양입니다. 이 책상의 넓이를 구하시오.`,
      answer:'12500',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12500, 식: none`
    };
  }
});

// [도형산술] 가로, 세로의 길이가 각각 10cm, 8cm인 직사각형...
T11_external.push({
  key:'external_도형산술_2',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가로, 세로의 길이가 각각 10cm, 8cm인 직사각형의 가로를 축으로 하여 회전체를 만들었을 때, 이 회전체의 한 밑면의 넓이를 구하시오.`,
      answer:'200.96',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 200.96, 식: none`
    };
  }
});

// [도형산술] 가로 15cm, 세로 7cm, 높이 5cm인 직육면체 ...
T11_external.push({
  key:'external_도형산술_3',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가로 15cm, 세로 7cm, 높이 5cm인 직육면체 모양의 티슈곽 안에 들어가는 티슈의 최대 부피는 얼마인가요?`,
      answer:'525',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 525, 식: none`
    };
  }
});

// [도형산술] 옆면이 모두 서로 합동인 직사각형으로 이루어진 입체도형...
T11_external.push({
  key:'external_도형산술_4',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`옆면이 모두 서로 합동인 직사각형으로 이루어진 입체도형의 밑면은 넓이가 50cm2인 다각형입니다. 이 입체도형의 높이가 8cm라면 부피는 얼마입니까?`,
      answer:'400',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 400, 식: none`
    };
  }
});

// [도형산술] 한 모서리의 길이가 65cm인 정육면체 상자안에 원기둥...
T11_external.push({
  key:'external_도형산술_5',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 모서리의 길이가 65cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들어갈 수 있는 가장 큰 크기의 통의 높이를 구하시오.`,
      answer:'65',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 65, 식: none`
    };
  }
});

// [도형산술] 밑면은 정육각형이고, 옆면은 가로와 세로의 길이가 각각...
T11_external.push({
  key:'external_도형산술_6',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`밑면은 정육각형이고, 옆면은 가로와 세로의 길이가 각각 8cm, 17cm인 직사각형으로 이루어진 각기둥이 있습니다. 이 각기둥의 옆면의 넓이 합은 몇 cm2입니까?`,
      answer:'816',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 816, 식: none`
    };
  }
});

// [도형산술] 평행사변형의 둘레가 28cm이고 한 변의 길이가 6cm...
T11_external.push({
  key:'external_도형산술_7',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`평행사변형의 둘레가 28cm이고 한 변의 길이가 6cm일 때, 이웃하는 변의 길이를 구하시오.`,
      answer:'8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 8, 식: none`
    };
  }
});

// [도형산술] 구각형의 대각선은 총 몇 개인가?...
T11_external.push({
  key:'external_도형산술_8',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`구각형의 대각선은 총 몇 개인가?`,
      answer:'27',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 27, 식: none`
    };
  }
});

// [도형산술] 둘레가 100cm인 직사각형의 가로 길이가 A cm이고...
T11_external.push({
  key:'external_도형산술_9',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`둘레가 100cm인 직사각형의 가로 길이가 A cm이고, 세로의 길이는 가로 길이의 4배입니다. 직사각형의 넓이는 몇 cm2입니까?`,
      answer:'400',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 400, 식: none`
    };
  }
});

// [도형산술] 직사각형 모양의 두 공책이 있습니다. 한 공책은 가로 ...
T11_external.push({
  key:'external_도형산술_10',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`직사각형 모양의 두 공책이 있습니다. 한 공책은 가로 8cm, 세로 12cm이고 다른 공책은 가로 9cm, 세로 15cm일 때. 두 공책의 넓이의 차이를 구하시오.`,
      answer:'39',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 39, 식: none`
    };
  }
});

// [도형산술] 다음 직사각형은 둘레가 40cm입니다. 가로의 길이가 ...
T11_external.push({
  key:'external_도형산술_11',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음 직사각형은 둘레가 40cm입니다. 가로의 길이가 8cm 일 때, 세로의 길이를 구하시오.`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [도형산술] 두 대각선의 길이가 16cm, 18cm인 마름모가 있습...
T11_external.push({
  key:'external_도형산술_12',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`두 대각선의 길이가 16cm, 18cm인 마름모가 있습니다. 이 마름모를 밑면으로 하고, 높이가 10cm인 각기둥의 부피는 몇 cm3입니까?`,
      answer:'1440',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 1440, 식: none`
    };
  }
});

// [도형산술] 송화는 이불 구매를 위해 이불 크기를 비교하고 있습니다...
T11_external.push({
  key:'external_도형산술_13',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`송화는 이불 구매를 위해 이불 크기를 비교하고 있습니다. 직사각형 모양의 이불로 가로 길이는 100cm로 같지만 세로 길이가 150cm, 200cm로 다른 두 이불의 둘레의 차를 구하시오.`,
      answer:'100',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 100, 식: none`
    };
  }
});

// [도형산술] 반지름이 18cm인 원을 원 모양 그대로 줄여 반지름이...
T11_external.push({
  key:'external_도형산술_14',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`반지름이 18cm인 원을 원 모양 그대로 줄여 반지름이 13cm인 원으로 만들었습니다. 줄이기 전과 후에 원의 원주의 차는 몇 cm입니까?`,
      answer:'31.4',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 31.4, 식: none`
    };
  }
});

// [도형산술] 오각뿔은 면이 모두 몇 개입니까?...
T11_external.push({
  key:'external_도형산술_15',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`오각뿔은 면이 모두 몇 개입니까?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [도형산술] 익준이네 텃밭은 한 변의 길이가 5m이다. 텃밭의 모양...
T11_external.push({
  key:'external_도형산술_16',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`익준이네 텃밭은 한 변의 길이가 5m이다. 텃밭의 모양의 정사각형일 때, 익준이네 텃밭의 넓이는 얼마인가?`,
      answer:'25',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 25, 식: none`
    };
  }
});

// [도형산술] 둘레의 길이가 72cm인 정삼각형의 한변의 길이를 구하...
T11_external.push({
  key:'external_도형산술_17',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`둘레의 길이가 72cm인 정삼각형의 한변의 길이를 구하시오.`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [도형산술] 어느 각기둥은 부피가 400cm3입니다. 이 각기둥의 ...
T11_external.push({
  key:'external_도형산술_18',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어느 각기둥은 부피가 400cm3입니다. 이 각기둥의 높이가 8cm일 때, 한 밑면의 넓이는 몇 cm2입니까?`,
      answer:'50',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 50, 식: none`
    };
  }
});

// [도형산술] 가로가 11cm인 직사각형의 둘레가 50cm일 때, 세...
T11_external.push({
  key:'external_도형산술_19',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가로가 11cm인 직사각형의 둘레가 50cm일 때, 세로의 길이를 구하시오.`,
      answer:'14',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 14, 식: none`
    };
  }
});

// [도형산술] 밑면의 반지름이 5cm이고 높이가 7cm인 원기둥 모양...
T11_external.push({
  key:'external_도형산술_20',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`밑면의 반지름이 5cm이고 높이가 7cm인 원기둥 모양의 주스통에 오렌지주스가 가득 들어있습니다. 컵에 주스를 따르고 난 뒤 주스의 높이가 6cm되었을 때, 따른 주스의 부피를 구하시오.`,
      answer:'78.5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 78.5, 식: none`
    };
  }
});

// [도형산술] 다음 입체도형은 밑면의 모양이 사각형이고, 옆면의 모양...
T11_external.push({
  key:'external_도형산술_21',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음 입체도형은 밑면의 모양이 사각형이고, 옆면의 모양이 모두 삼각형입니다. 이 입체도형은 모두 몇 개의 면을 가지고 있나요?`,
      answer:'5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 5, 식: none`
    };
  }
});

// [도형산술] 두 직각삼각형 ㄱㄴㄷ와 ㄹㅁㅂ는 서로 합동입니다. 삼각...
T11_external.push({
  key:'external_도형산술_22',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`두 직각삼각형 ㄱㄴㄷ와 ㄹㅁㅂ는 서로 합동입니다. 삼각형 ㄱㄴㄷ의 밑변은 4cm이고, 삼각형 ㄹㅁㅂ의 높이가 10cm일 때, 삼각형 ㄱㄴㄷ의 넓이는 몇 cm2입니까?`,
      answer:'20',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 20, 식: none`
    };
  }
});

// [도형산술] 넓이가 45cm2인 다각형을 밑면으로 하는 각기둥이 있...
T11_external.push({
  key:'external_도형산술_23',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`넓이가 45cm2인 다각형을 밑면으로 하는 각기둥이 있습니다. 이 각기둥의 부피가 900cm3이면 높이는 얼마인지 구하시오.`,
      answer:'20',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 20, 식: none`
    };
  }
});

// [도형산술] 직각삼각형의 높이를 축으로 한 바퀴 회전시켜 만든 입체...
T11_external.push({
  key:'external_도형산술_24',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`직각삼각형의 높이를 축으로 한 바퀴 회전시켜 만든 입체도형의 높이가 18cm입니다. 입체도형의 밑면의 반지름이 높이보다 1/3 짧을 때, 처음 직각삼각형의 밑변의 길이는 몇 cm입니까?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [도형산술] 한 변의 길이가 11cm인 마름모의 네 각의 크기가 모...
T11_external.push({
  key:'external_도형산술_25',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`한 변의 길이가 11cm인 마름모의 네 각의 크기가 모두 같을 때, 이 마름모의 넓이는 몇 cm2입니까?`,
      answer:'121',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 121, 식: none`
    };
  }
});

// [도형산술] 모서리의 길이가 모두 같은 각뿔이 있습니다. 이 각뿔의...
T11_external.push({
  key:'external_도형산술_26',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`모서리의 길이가 모두 같은 각뿔이 있습니다. 이 각뿔의 면의 수는 9개이고, 한 모서리의 길이가 15cm입니다. 이 각뿔의 모든 모서리의 길이 합은 얼마입니까?`,
      answer:'240',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 240, 식: none`
    };
  }
});

// [도형산술] 철사를 겹치지 않게 모두 사용하여 한 변의 길이가 20...
T11_external.push({
  key:'external_도형산술_27',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`철사를 겹치지 않게 모두 사용하여 한 변의 길이가 20cm 정칠각형을 만들었습니다. 이 철사로 한변의 길이가 5cm인 정사각형을 몇 개까지 만들 수 있습니까? (단, 정사각형은 서로 겹치지 않는다.)`,
      answer:'7',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 7, 식: none`
    };
  }
});

// [도형산술] 평행사변형 한 각의 크기가 140º일 때, 이 각과 마...
T11_external.push({
  key:'external_도형산술_28',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`평행사변형 한 각의 크기가 140º일 때, 이 각과 마주보고 있는 각을 제외한 두 각의 합은 몇 º입니까?`,
      answer:'80',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 80, 식: none`
    };
  }
});

// [도형산술] 십삼각뿔의 꼭짓점은 몇 개입니까?...
T11_external.push({
  key:'external_도형산술_29',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`십삼각뿔의 꼭짓점은 몇 개입니까?`,
      answer:'14',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 14, 식: none`
    };
  }
});

// [도형산술] 직각삼각형의 높이가 12cm이고 밑변이 5cm일 때, ...
T11_external.push({
  key:'external_도형산술_30',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`직각삼각형의 높이가 12cm이고 밑변이 5cm일 때, 높이를 기준으로 한 바퀴 돌려 입체도형을 만들었습니다. 만들어진 입체도형의 밑면의 넓이는 몇 cm2입니까?`,
      answer:'78.5',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 78.5, 식: none`
    };
  }
});

// [도형산술] 높이가 10cm인 육각기둥의 옆면은 모두 합동인 직사각...
T11_external.push({
  key:'external_도형산술_31',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`높이가 10cm인 육각기둥의 옆면은 모두 합동인 직사각형이다. 한 옆면의 가로 길이가 4cm일 때, 육각기둥의 모든 모서리 길이의 합은 얼마인가?`,
      answer:'108',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 108, 식: none`
    };
  }
});

// [도형산술] 어떤 원뿔의 모선은 12cm입니다. 원뿔을 앞에서 본 ...
T11_external.push({
  key:'external_도형산술_32',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`어떤 원뿔의 모선은 12cm입니다. 원뿔을 앞에서 본 모양의 둘레가 50cm일 때, 원뿔 밑면을 이루는 원의 둘레의 길이는 몇 cm입니까?`,
      answer:'81.64',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 81.64, 식: none`
    };
  }
});

// [도형산술] 가로 30m, 세로 20m인 직사각형 모양의 공원의 둘...
T11_external.push({
  key:'external_도형산술_33',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`가로 30m, 세로 20m인 직사각형 모양의 공원의 둘레에 4m 간격으로 광고판을 설치하려고 합니다. 필요한 광고판의 개수는 몇 개입니까?`,
      answer:'25',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 25, 식: none`
    };
  }
});

// [도형산술] 반지름이 9cm인 구가 있습니다. 이 구를 평면으로 잘...
T11_external.push({
  key:'external_도형산술_34',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`반지름이 9cm인 구가 있습니다. 이 구를 평면으로 잘랐을 때 생기는 단면의 최대 넓이를 구하시오.`,
      answer:'254.34',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 254.34, 식: none`
    };
  }
});

// [도형산술] 다음 둔각삼각형의 세 변의 길이가 각각 9cm, 4cm...
T11_external.push({
  key:'external_도형산술_35',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음 둔각삼각형의 세 변의 길이가 각각 9cm, 4cm, 6cm일 때 , 둘레의 길이를 구하시오.`,
      answer:'19',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 19, 식: none`
    };
  }
});

// [도형산술] 평행사변형의 밑변이 16cm이고 높이가 10cm입니다....
T11_external.push({
  key:'external_도형산술_36',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`평행사변형의 밑변이 16cm이고 높이가 10cm입니다. 이 평행사변형을 밑면으로 하는 각기둥의 높이가 15cm일 때, 각기둥의 부피는 얼마입니까?`,
      answer:'2400',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 2400, 식: none`
    };
  }
});

// [도형산술] 성현이는 마트에서 장을 보고 짐을 박스에 담으려고 합니...
T11_external.push({
  key:'external_도형산술_37',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`성현이는 마트에서 장을 보고 짐을 박스에 담으려고 합니다. 박스의 밑면의 가로 세로 길이가 10cm, 5cm이고 높이가 9cm라면, 박스에 담을 수 있는 물건의 최대 부피는 몇 cm3입니까?`,
      answer:'450',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 450, 식: none`
    };
  }
});

// [도형산술] 밑변 16cm인 정삼각형과 반지름 4cm인 반원 두 개...
T11_external.push({
  key:'external_도형산술_38',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`밑변 16cm인 정삼각형과 반지름 4cm인 반원 두 개를 이용하여 하트모형을 만들었을 때 이 하트 모형의 둘레는 몇 cm입니까?(겹치는 부분 없습니다))`,
      answer:'57.12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 57.12, 식: none`
    };
  }
});

// [도형산술] 원기둥 모양으로 생긴 통의 옆면을 색종이로 꾸미려고 합...
T11_external.push({
  key:'external_도형산술_39',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`원기둥 모양으로 생긴 통의 옆면을 색종이로 꾸미려고 합니다. 이 통의 높이가 9cm이고 밑면의 반지름이 6cm일 때, 꾸미기 위해 필요한 색종이의 넓이는 최소 몇 cm2입니까?`,
      answer:'339.12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 339.12, 식: none`
    };
  }
});

// [도형산술] 겉넓이가 384cm2인 정육면체의 부피는 몇 cm3입니...
T11_external.push({
  key:'external_도형산술_40',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`겉넓이가 384cm2인 정육면체의 부피는 몇 cm3입니까?`,
      answer:'512',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 512, 식: none`
    };
  }
});

// [도형산술] 석형이는 부피가 108cm3이고 높이가 10cm인 오각...
T11_external.push({
  key:'external_도형산술_41',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`석형이는 부피가 108cm3이고 높이가 10cm인 오각기둥 모양의 의자를 가지고 있습니다. 이 의자의 밑면의 넓이는 얼마인가요?`,
      answer:'10.8',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10.8, 식: none`
    };
  }
});

// [도형산술] 준완이는 변의 길이가 23cm,13cm인 평행사변형을 ...
T11_external.push({
  key:'external_도형산술_42',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`준완이는 변의 길이가 23cm,13cm인 평행사변형을 털실을 이용하여 만드려고 합니다. 이때 필요한 털실의 길이는 몇 cm인가요?`,
      answer:'72',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 72, 식: none`
    };
  }
});

// [도형산술] 밑면의 반지름이 12cm인 연탄에 반지름이 3cm인 구...
T11_external.push({
  key:'external_도형산술_43',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`밑면의 반지름이 12cm인 연탄에 반지름이 3cm인 구멍이 8개 뚫려 있습니다. 연탄에서 구멍이 뚫리지 않은 부분의 넓이는 얼마입니까?`,
      answer:'226.08',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 226.08, 식: none`
    };
  }
});

// [도형산술] 둘레가 28cm이고, 가로가 8cm인 직사각형이 있습니...
T11_external.push({
  key:'external_도형산술_44',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`둘레가 28cm이고, 가로가 8cm인 직사각형이 있습니다. 세로의 길이는 몇 cm입니까?`,
      answer:'6',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 6, 식: none`
    };
  }
});

// [도형산술] 옆면의 넓이를 모두 더했을 때 그 값이 350cm2인 ...
T11_external.push({
  key:'external_도형산술_45',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`옆면의 넓이를 모두 더했을 때 그 값이 350cm2인 각뿔은 면의 개수가 6개입니다. 옆면이 모두 똑같은 이등변삼각형이고, 이등변삼각형의 높이가 14cm일 때, 밑면의 한 변의 길이는 몇 cm인지 구하시오.`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [도형산술] 부피가 80cm3인 육각기둥 모양의 의자가 있습니다. ...
T11_external.push({
  key:'external_도형산술_46',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`부피가 80cm3인 육각기둥 모양의 의자가 있습니다. 이 의자의 높이가 8cm일 때, 밑면의 넓이를 구하시오.`,
      answer:'10',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 10, 식: none`
    };
  }
});

// [도형산술] 다음 각기둥은 모서리의 개수가 18개입니다. 이 각기둥...
T11_external.push({
  key:'external_도형산술_47',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`다음 각기둥은 모서리의 개수가 18개입니다. 이 각기둥의 꼭짓점의 개수는 몇 개인가요?`,
      answer:'12',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 12, 식: none`
    };
  }
});

// [도형산술] 정삼각형 6개를 이용하여 새로운 정육각형 하나를 만들었...
T11_external.push({
  key:'external_도형산술_48',
  unitId:'m1-1-1-III-5',
  difficulty:3,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`정삼각형 6개를 이용하여 새로운 정육각형 하나를 만들었습니다. 삼각형 한 각의 크기가 180º임과, 1회전의 각이 360º임을 이용하여 정육각형 한 각의 크기를 구하면 몇 º입니까?`,
      answer:'120',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 120, 식: none`
    };
  }
});

// [도형산술] 넓이 6cm2인 정삼각형으로 이루어진 정사면체의 겉넓이...
T11_external.push({
  key:'external_도형산술_49',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`넓이 6cm2인 정삼각형으로 이루어진 정사면체의 겉넓이는 얼마입니까?`,
      answer:'24',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 24, 식: none`
    };
  }
});

// [도형산술] 66cm의 실을 남김없이 사용하여 정삼각형 모양을 만들...
T11_external.push({
  key:'external_도형산술_50',
  unitId:'m1-1-1-III-5',
  difficulty:1,
  tags:['도형산술','외부DB'],
  gen(){
    return {
      type:'short',
      question:`66cm의 실을 남김없이 사용하여 정삼각형 모양을 만들었습니다. 이 정삼각형의 한 변의 길이를 구하시오.`,
      answer:'22',
      answerType:'number',
      tolerance:0,
      unitLabel:'',
      hint:'문제를 차근차근 읽고 식을 세워보세요.',
      explain:`정답: 22, 식: none`
    };
  }
});

window.Templates_external = T11_external;
