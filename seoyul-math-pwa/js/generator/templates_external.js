// 외부 DB 고품질 문제 (중1 수준)
const T11_external = [];


// [산술연산] 석형이의 키는 178.5cm이고, 신혜의 키는 157.3입니다. 둘의 키 차이는 몇 cm입...
T11_external.push({
  key:"external_산술연산_6",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이의 키는 178.5cm이고, 신혜의 키는 157.3입니다. 둘의 키 차이는 몇 cm입니까?",
      answer:"21.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21.2, 식: 178.5-157.3"
    };
  }
});

// [산술연산] 새 연필의 무게는 113.28g이고 몽당 연필의 무게의 3.2배라고 합니다. 몽당 연필의 ...
T11_external.push({
  key:"external_산술연산_11",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새 연필의 무게는 113.28g이고 몽당 연필의 무게의 3.2배라고 합니다. 몽당 연필의 무게는 몇 g입니까?",
      answer:"35.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35.4, 식: 113.28/3.2"
    };
  }
});

// [산술연산] 농장에 양이 60마리 있습니다. 20마리는 큰 우리에 넣었고, 남은 양들은 8마리씩 작은 ...
T11_external.push({
  key:"external_산술연산_12",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"농장에 양이 60마리 있습니다. 20마리는 큰 우리에 넣었고, 남은 양들은 8마리씩 작은 우리에 넣으려고 합니다. 몇 개의 작은 우리가 필요합니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: (60-20)/8"
    };
  }
});

// [산술연산] 티셔츠와 바지가 총 45개 있습니다. 바지가 티셔츠보다 5개 적게 있다면, 티셔츠는 몇 개...
T11_external.push({
  key:"external_산술연산_14",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"티셔츠와 바지가 총 45개 있습니다. 바지가 티셔츠보다 5개 적게 있다면, 티셔츠는 몇 개 있습니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: (45+5)/2"
    };
  }
});

// [산술연산] 둘레가 119.6m인 운동장이 있습니다. 이 운동장의 둘레를 3바퀴 반 뛰었다면, 뛴 거리...
T11_external.push({
  key:"external_산술연산_15",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 119.6m인 운동장이 있습니다. 이 운동장의 둘레를 3바퀴 반 뛰었다면, 뛴 거리는 몇 m입니까?",
      answer:"418.6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 418.6, 식: 119.6*3.5"
    };
  }
});

// [산술연산] 한 개에 300원 하는 과자를 2개 사면 과자 한 개를 더 준다고 합니다. 과자를 2 개 ...
T11_external.push({
  key:"external_산술연산_17",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 개에 300원 하는 과자를 2개 사면 과자 한 개를 더 준다고 합니다. 과자를 2 개 샀을 때 과자 한 개를 얼마씩 주고 산 셈인지 구하시오.",
      answer:"200",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 200, 식: 300*2/(2+1)"
    };
  }
});

// [산술연산] 축구장의 좌석은 오른쪽으로 1씩 커지고, 아래로 8씩 커지도록 좌석 번호가 부착되어 있습니...
T11_external.push({
  key:"external_산술연산_18",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"축구장의 좌석은 오른쪽으로 1씩 커지고, 아래로 8씩 커지도록 좌석 번호가 부착되어 있습니다. 좌석 번호는 서로 겹치지 않고, 총 96개의 좌석이 마련되어있을 때, 왼쪽으로부터 5번째, 위에서부터 9번째에 위치한 좌석은 처음 좌석보다 몇이 더 큽니까?",
      answer:"68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 68, 식: 1*(5-1)+8*(9-1)"
    };
  }
});

// [산술연산] 석형이네 반 학교 화단에 튤립이 70송이 장미가 35송이 피어있었습니다. 그중에서 50송이...
T11_external.push({
  key:"external_산술연산_19",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이네 반 학교 화단에 튤립이 70송이 장미가 35송이 피어있었습니다. 그중에서 50송이는 꽃이 졌습니다. 화단에 남은 꽃은 몇 송이입니까?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: (70+35)-50"
    };
  }
});

// [산술연산] 석형이네 반 학급 문고의 책은 모두 124권입니다. 동화책이 30권, 위인전이 46권 있고...
T11_external.push({
  key:"external_산술연산_22",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이네 반 학급 문고의 책은 모두 124권입니다. 동화책이 30권, 위인전이 46권 있고, 나머지는 수학책입니다. 과학책은 몇 권 있습니까?",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: 124-(30+46)"
    };
  }
});

// [산술연산] 한 걸음에 엄마는 57cm를 가고, 민하는 34cm를 갑니다. 두 사람이 80걸음씩 걸었을...
T11_external.push({
  key:"external_산술연산_25",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 걸음에 엄마는 57cm를 가고, 민하는 34cm를 갑니다. 두 사람이 80걸음씩 걸었을 때, 엄마는 민하보다 몇 cm 앞서 있겠습니까?",
      answer:"1840",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1840, 식: (57*80)-(34*80)"
    };
  }
});

// [산술연산] 어느 대형 서점에 동화책이 781권, 참고서가 814권 있습니다. 오늘 동화책이 385권,...
T11_external.push({
  key:"external_산술연산_27",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 대형 서점에 동화책이 781권, 참고서가 814권 있습니다. 오늘 동화책이 385권, 참고서가 289권 팔렸습니다. 남은 책은 모두 몇 권입니까?",
      answer:"921",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 921, 식: (781-385)+(814-289)"
    };
  }
});

// [산술연산] 둘레가 300m인 호수를 미진이는 1분동안 100m를 걸어가고, 수희는 150m를 걸어갑니...
T11_external.push({
  key:"external_산술연산_29",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 300m인 호수를 미진이는 1분동안 100m를 걸어가고, 수희는 150m를 걸어갑니다. 만양 동시에 같은 방향으로 출발하였다면, 그들이 출발점에서 셋째 번으로 다시 만나는 때는 출발한 지 몇 분 후입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: 900/(150-100)"
    };
  }
});

// [산술연산] 초록색 클립 163개와 노란색 클립 137개가 있습니다. 이 클립을 6상자에 똑같이 나누어...
T11_external.push({
  key:"external_산술연산_30",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"초록색 클립 163개와 노란색 클립 137개가 있습니다. 이 클립을 6상자에 똑같이 나누어 담으려면 한 상자에 몇 개씩 담아야 합니까?",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: (163+137)/6"
    };
  }
});

// [산술연산] 옥수수가 한 다발에 28개씩 30다발 있습니다. 이 옥수수를 다시 한 다발에 12개씩 묶어...
T11_external.push({
  key:"external_산술연산_32",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옥수수가 한 다발에 28개씩 30다발 있습니다. 이 옥수수를 다시 한 다발에 12개씩 묶어서 23다발을 팔았습니다. 팔고 남은 옥수수는 몇 개인지 구하시오.",
      answer:"564",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 564, 식: 28*30-12*23"
    };
  }
});

// [산술연산] 0.8에 0.31을 더한 값을A, 0.5에 0.2를 더한 값을B라고 할 때 A-B의 값을 ...
T11_external.push({
  key:"external_산술연산_38",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"0.8에 0.31을 더한 값을A, 0.5에 0.2를 더한 값을B라고 할 때 A-B의 값을 구하시오.",
      answer:"0.41",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.41, 식: (0.8+0.31)-(0.5+0.2)"
    };
  }
});

// [산술연산] 한 시간에 142.9 km를 달리는 버스가 있습니다. 같은 빠르기로 3시간을 달리면 버스가...
T11_external.push({
  key:"external_산술연산_39",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 시간에 142.9 km를 달리는 버스가 있습니다. 같은 빠르기로 3시간을 달리면 버스가 간 거리는 몇 km인지 소수로 나타내시오.",
      answer:"428.7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 428.7, 식: 142.9*3"
    };
  }
});

// [산술연산] 신혜는 채소 가게에서 고구마 2.827kg과 감자 1.373kg을 샀습니다. 신혜가 산 채...
T11_external.push({
  key:"external_산술연산_40",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜는 채소 가게에서 고구마 2.827kg과 감자 1.373kg을 샀습니다. 신혜가 산 채소의 무게는 모두 몇 kg입니까?",
      answer:"4.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.2, 식: 2.827+1.373"
    };
  }
});

// [산술연산] 선물 1개를 포장하는데 끈 0.72m가 필요합니다. 끈 35.28m로 선물 몇 개를 포장할...
T11_external.push({
  key:"external_산술연산_42",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선물 1개를 포장하는데 끈 0.72m가 필요합니다. 끈 35.28m로 선물 몇 개를 포장할 수 있습니까?",
      answer:"49",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 49, 식: 35.28/0.72"
    };
  }
});

// [산술연산] 단팥빵 39개와 크림빵 69개가 있습니다. 이 빵을 상자 12개에 똑같은 개수로 나누어 담...
T11_external.push({
  key:"external_산술연산_45",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"단팥빵 39개와 크림빵 69개가 있습니다. 이 빵을 상자 12개에 똑같은 개수로 나누어 담으려고 합니다. 한 상자에 몇 개씩 담아야 하는지 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: (39+69)/12"
    };
  }
});

// [산술연산] 선빈이네 과수원에서 수확한 사과를 한 상자에 20kg씩 담았습니다. 사과 상자를 트럭 한 ...
T11_external.push({
  key:"external_산술연산_46",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이네 과수원에서 수확한 사과를 한 상자에 20kg씩 담았습니다. 사과 상자를 트럭 한 대에 40상자씩 2대에 실었다면 선빈이네 과수원에서 수확한 사과는 모두 몇 kg입니까?",
      answer:"1600",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1600, 식: 20*(40*2)"
    };
  }
});

// [산술연산] 준완이가 과학 시간에 실험을 하는 데 3g짜리 분동이 40개, 5g짜리 분동이 25개 있었...
T11_external.push({
  key:"external_산술연산_51",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이가 과학 시간에 실험을 하는 데 3g짜리 분동이 40개, 5g짜리 분동이 25개 있었습니다. 분동은 모두 몇 g입니까?",
      answer:"245",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 245, 식: 3*40+5*25"
    };
  }
});

// [산술연산] 길이가 30cm인 리본을 3cm씩 겹쳐서 한 줄로 이으려고 할 때, 10개의 리본을 이어 ...
T11_external.push({
  key:"external_산술연산_54",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 30cm인 리본을 3cm씩 겹쳐서 한 줄로 이으려고 할 때, 10개의 리본을 이어 붙인 길이는 몇 cm인가?",
      answer:"273",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 273, 식: 30*10-3*(10-1)"
    };
  }
});

// [산술연산] 준완이는 100일 동안 윗몸일으키기를 했습니다. 40일 동안은 50번씩, 나머지는 60번씩...
T11_external.push({
  key:"external_산술연산_55",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이는 100일 동안 윗몸일으키기를 했습니다. 40일 동안은 50번씩, 나머지는 60번씩 했다면 준완이는 100일 동안 윗몸일으키기를 몇 번 한 것입니까?",
      answer:"5600",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5600, 식: 40*50+((100-40)*60)"
    };
  }
});

// [산술연산] 익준이는 3m의 리본을 가지고 있고, 준완이는 익준이의 (32/15)배 길이의 리본을 가지...
T11_external.push({
  key:"external_산술연산_56",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 3m의 리본을 가지고 있고, 준완이는 익준이의 (32/15)배 길이의 리본을 가지고 있습니다. 준완이가 가지고 있는 리본의 길이는 몇 m입니까?",
      answer:"(32/5)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (32/5), 식: 3*(32/15)"
    };
  }
});

// [산술연산] 신혜는 귤을 20.42kg을 땄고, 어머니께서는 41.4kg을 땄습니다. 두 사람이 딴 귤...
T11_external.push({
  key:"external_산술연산_59",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜는 귤을 20.42kg을 땄고, 어머니께서는 41.4kg을 땄습니다. 두 사람이 딴 귤을 한 상자에 5.62kg씩 담는다면, 상자는 모두 몇 개가 필요합니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: (20.42+41.4)/5.62"
    };
  }
});

// [산술연산] 정원이네 학교의 6학년 학생은 200명이고, 그중에서 남학생은 106명입니다. 남학생은 전...
T11_external.push({
  key:"external_산술연산_62",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이네 학교의 6학년 학생은 200명이고, 그중에서 남학생은 106명입니다. 남학생은 전체 학생의 몇 %입니까?",
      answer:"53",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 53, 식: (106/200)*100"
    };
  }
});

// [산술연산] 사과와 배의 값의 합은 8800원입니다. 사과의 값이 배의 값보다 1000원 더 싸다면 사...
T11_external.push({
  key:"external_산술연산_64",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사과와 배의 값의 합은 8800원입니다. 사과의 값이 배의 값보다 1000원 더 싸다면 사과의 값은 얼마인지 구하시오.",
      answer:"3900",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3900, 식: (8800-1000)/2"
    };
  }
});

// [산술연산] 한 상자에 12개씩 들어 있는 사과가 4상자가 있고, 한 상자에 6개씩 들어 있는 배가 1...
T11_external.push({
  key:"external_산술연산_66",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 상자에 12개씩 들어 있는 사과가 4상자가 있고, 한 상자에 6개씩 들어 있는 배가 10상자가 있습니다. 사과는 한 개에 500원, 배는 한 개에 400원을 받고 모두 팔았다면 사과와 배를 판 금액은 모두 얼마인지 구해 보시오.",
      answer:"48000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48000, 식: (12*4)*500+(6*10)*400"
    };
  }
});

// [산술연산] 전교생이 300명인 중학교의 4/15는 2학년이고, 2학년의 3/5는 여학생입니다. 2학년...
T11_external.push({
  key:"external_산술연산_68",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전교생이 300명인 중학교의 4/15는 2학년이고, 2학년의 3/5는 여학생입니다. 2학년 여학생은 몇 명입니까?",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: 300*(4/15)*(3/5)"
    };
  }
});

// [산술연산] 어느 학교 교실에서 난로를 한 시간 사용하는 데 3.28L의 석유가 소비된다고 합니다. 하...
T11_external.push({
  key:"external_산술연산_69",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 학교 교실에서 난로를 한 시간 사용하는 데 3.28L의 석유가 소비된다고 합니다. 하루에 5시간씩 6일간 사용한다면, 석유는 모두 몇 L가 소비되는지 구하시오.",
      answer:"98.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 98.4, 식: 3.28*5*6"
    };
  }
});

// [산술연산] 한 개의 무게가 0.36kg인 배가 30개 들어 있는 바구니의 무게는 11.26kg입니다....
T11_external.push({
  key:"external_산술연산_70",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 개의 무게가 0.36kg인 배가 30개 들어 있는 바구니의 무게는 11.26kg입니다. 바구니만의 무게는 몇 kg입니까?",
      answer:"0.46",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.46, 식: 11.26-0.36*30"
    };
  }
});

// [산술연산] 100m를 민하는 21.65초에 달렸고, 선빈이는 19.85초에 달렸습니다. 선빈이는 민하...
T11_external.push({
  key:"external_산술연산_72",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100m를 민하는 21.65초에 달렸고, 선빈이는 19.85초에 달렸습니다. 선빈이는 민하보다 몇 초 빨리 달렸는지 구하시오.",
      answer:"1.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.8, 식: 21.65-19.85"
    };
  }
});

// [산술연산] 준완이는 전체 쪽수가 70쪽인 책을 어제까지 38쪽 읽었습니다. 남은 책을 앞으로 4일 동...
T11_external.push({
  key:"external_산술연산_74",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이는 전체 쪽수가 70쪽인 책을 어제까지 38쪽 읽었습니다. 남은 책을 앞으로 4일 동안 다 읽으려고 한다면, 하루에 몇 쪽씩 읽어야 합니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: (70-38)/4"
    };
  }
});

// [산술연산] 갓 잡은 물고기 한 마리의 처음 무게가 1.73kg이었습니다. 이 물고기를 2시간 후에 달...
T11_external.push({
  key:"external_산술연산_78",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"갓 잡은 물고기 한 마리의 처음 무게가 1.73kg이었습니다. 이 물고기를 2시간 후에 달아 보니 무게가 줄어 1.58kg 이 되었습니다. 이 물고기 65마리를 담은 상자의 처음 무게와 2시간 후의 무게의 차는 몇 kg입니까?",
      answer:"9.75",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9.75, 식: 1.73*65-1.58*65"
    };
  }
});

// [산술연산] 뜨거운 물 5.8 L와 차가운 물 4.96L를 섞었습니다. 섞은 물을 물병 4개에 똑같이 ...
T11_external.push({
  key:"external_산술연산_80",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"뜨거운 물 5.8 L와 차가운 물 4.96L를 섞었습니다. 섞은 물을 물병 4개에 똑같이 나누어 담았다면 물병 한 개에 담은 물은 몇 L입니까?",
      answer:"2.69",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2.69, 식: (5.8+4.96)/4"
    };
  }
});

// [산술연산] 익준이는 하루에 평균 40분씩 달리기를 합니다. 2주일 동안 달리기를 한다면 모두 몇 분이...
T11_external.push({
  key:"external_산술연산_83",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 하루에 평균 40분씩 달리기를 합니다. 2주일 동안 달리기를 한다면 모두 몇 분이 걸리는지 구하시오.",
      answer:"560",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 560, 식: 40*(7*2)"
    };
  }
});

// [산술연산] 정원이는 4.3L의 페인트로 넓이가 15.91m2인 벽을 모두 칠하였습니다. 1L의 페인트...
T11_external.push({
  key:"external_산술연산_84",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이는 4.3L의 페인트로 넓이가 15.91m2인 벽을 모두 칠하였습니다. 1L의 페인트로 몇 m2의 벽을 칠한 셈입니까?",
      answer:"3.7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.7, 식: 15.91/4.3"
    };
  }
});

// [산술연산] 어떤 정육면체의 한 면의 넓이가 36cm2라면, 이 정육면체의 부피는 얼마입니까?...
T11_external.push({
  key:"external_산술연산_85",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 정육면체의 한 면의 넓이가 36cm2라면, 이 정육면체의 부피는 얼마입니까?",
      answer:"216",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 216, 식: (36/6)*6*6"
    };
  }
});

// [산술연산] 주스 3.2L가 들어 있는 병의 무게는 2.78kg입니다. 이 병에서 주스의 0.75 만큼...
T11_external.push({
  key:"external_산술연산_87",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주스 3.2L가 들어 있는 병의 무게는 2.78kg입니다. 이 병에서 주스의 0.75 만큼을 사용한 후 무게를 달아 보니 1.58kg이었습니다. 병만의 무게는 몇 kg 인지 구하시오.",
      answer:"1.18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.18, 식: 2.78-(2.78-1.58)/0.75"
    };
  }
});

// [산술연산] 익준이는 소금 30g을 녹여 소금물 150g을 만든 컨에 물 100g을 더 넣었습니다. 명...
T11_external.push({
  key:"external_산술연산_88",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 소금 30g을 녹여 소금물 150g을 만든 컨에 물 100g을 더 넣었습니다. 명주가 만든 소금물 양에 대한 소금의 양의 비율은 몇 %입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: (30/(150+100))*100"
    };
  }
});

// [산술연산] 빈 수조에 현선이는 물을 1분 동안 1.45L씩 부었고, 동시에 석진이는 물을 1분 동안 ...
T11_external.push({
  key:"external_산술연산_89",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"빈 수조에 현선이는 물을 1분 동안 1.45L씩 부었고, 동시에 석진이는 물을 1분 동안 0.72L씩 덜어냈습니다. 이 수조에 물을 가득 채우는데 9분이 걸렸다면 수조의 들이는 몇 L인가요?",
      answer:"6.57",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6.57, 식: (1.45-0.72)*9"
    };
  }
});

// [산술연산] 송화네 반 아이들은 모두 자전거나 버스를 타고 소풍 장소에 도착했습니다. 자전거를 타고 온...
T11_external.push({
  key:"external_산술연산_90",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화네 반 아이들은 모두 자전거나 버스를 타고 소풍 장소에 도착했습니다. 자전거를 타고 온 학생 수는 34명이고, 이 수는 버스를 타고 도착한 학생 수의 2배보다 8명이 많은 수입니다. 송화네 반 전체 학생 수는 몇 명입니까?",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: 34+(34-8)/2"
    };
  }
});

// [산술연산] 한국 축구 대표팀은 작년에 외구팀과 20경기를 하여 그 중에서 12경기를 이겼습니다. 한국...
T11_external.push({
  key:"external_산술연산_92",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한국 축구 대표팀은 작년에 외구팀과 20경기를 하여 그 중에서 12경기를 이겼습니다. 한국 축구 대표팀의 승률을 백분율로 나타내시오.",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: (12/20)*100"
    };
  }
});

// [산술연산] 껌은 500원, 초콜릿은 900원, 사탕은 300원, 젤리는 300원 입니다. 초콜릿 가격...
T11_external.push({
  key:"external_산술연산_93",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"껌은 500원, 초콜릿은 900원, 사탕은 300원, 젤리는 300원 입니다. 초콜릿 가격을 1300원으로 바꾼다면 평균 가격은 얼마가 높아지는지 구하시오.",
      answer:"100",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100, 식: (1300-900)/4"
    };
  }
});

// [산술연산] 송화네 학교 3학년 학생은 남학생이 245명, 여학생이 239명입니다. 3학년 학생 모두에...
T11_external.push({
  key:"external_산술연산_96",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화네 학교 3학년 학생은 남학생이 245명, 여학생이 239명입니다. 3학년 학생 모두에게 공책을 2권씩 나누어 주려고 합니다. 필요한 공책은 모두 몇 권입니까?",
      answer:"968",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 968, 식: (245+239)*2"
    };
  }
});

// [산술연산] 어느 배구팀이 1회에는 75점, 2회에는 87점, 3회에는 83점, 4회에는 92점, 5회...
T11_external.push({
  key:"external_산술연산_97",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 배구팀이 1회에는 75점, 2회에는 87점, 3회에는 83점, 4회에는 92점, 5회에는 78점을 득점하였습니다. 이 배구팀의 평균 득점을 구하시오.",
      answer:"83",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 83, 식: (75+87+83+92+78)/5"
    };
  }
});

// [산술연산] 석형이의 국어와 수학 두 과목 평균 점수는 90점이고, 사회 점수는 63점입니다. 세 과목...
T11_external.push({
  key:"external_산술연산_100",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이의 국어와 수학 두 과목 평균 점수는 90점이고, 사회 점수는 63점입니다. 세 과목의 평균 점수는 몇 점인지 구하시오.",
      answer:"81",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 81, 식: (90*2+63)/3"
    };
  }
});

// [산술연산] 익준이는 매일 아침에 우유를 한 개씩 마십니다. 6월의 어느 날 우유 한 개의 값이 740...
T11_external.push({
  key:"external_산술연산_101",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 매일 아침에 우유를 한 개씩 마십니다. 6월의 어느 날 우유 한 개의 값이 740원에서 800원으로 올라 6월의 우윳값으로 23040원을 냈습니다. 6월에 오른 우윳값으로 먹은 우유는 몇 개인가요? (단, 6월은 30일까지 있습니다.)",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: (23040-(740*30))/(800-740)"
    };
  }
});

// [산술연산] 딸기가 32개 있었습니다. 어제 13개를 먹고 오늘 6개를 먹었습니다. 딸기는 몇 개가 남...
T11_external.push({
  key:"external_산술연산_104",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딸기가 32개 있었습니다. 어제 13개를 먹고 오늘 6개를 먹었습니다. 딸기는 몇 개가 남았습니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: 32-13-6"
    };
  }
});

// [산술연산] 한 걸음에 삼촌은 71cm를 가고, 신혜는 40cm를 갑니다. 두 사람이 50걸음씩 걸었을...
T11_external.push({
  key:"external_산술연산_106",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 걸음에 삼촌은 71cm를 가고, 신혜는 40cm를 갑니다. 두 사람이 50걸음씩 걸었을 때, 삼촌은 신혜보다 몇 cm 앞서 있겠습니까?",
      answer:"1550",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1550, 식: (71*50)-(40*50)"
    };
  }
});

// [산술연산] 사탕이 8개식 4봉지와 낱개 12개가 있습니다. 사탕은 모두 몇 개 입니까?...
T11_external.push({
  key:"external_산술연산_107",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사탕이 8개식 4봉지와 낱개 12개가 있습니다. 사탕은 모두 몇 개 입니까?",
      answer:"44",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 44, 식: 8*4+12"
    };
  }
});

// [산술연산] 이번 달에 익준이가 받은 용돈은 9500원이고, 정원이는 익준이보다 1200원 적게 받고,...
T11_external.push({
  key:"external_산술연산_108",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이번 달에 익준이가 받은 용돈은 9500원이고, 정원이는 익준이보다 1200원 적게 받고, 석형이와 준완이는 8000원씩을 받았습니다. 이달에 네 사람이 받은 용돈의 평균을 구하시오.",
      answer:"8450",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8450, 식: (9500+(9500-1200)+8000+8000)/4"
    };
  }
});

// [산술연산] 송화네 반 학생은 39명입니다. 반에서 소풍을 가는 데 남자 19명, 여자 17명이 갔습니...
T11_external.push({
  key:"external_산술연산_109",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화네 반 학생은 39명입니다. 반에서 소풍을 가는 데 남자 19명, 여자 17명이 갔습니다. 소풍을 가지 않는 학생은 몇 명인지 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: 39-(19+17)"
    };
  }
});

// [산술연산] 선빈이가 장바구니에 우유, 감자, 케첩, 과자, 라면을 담았습니다. 우유는 1540원, 감...
T11_external.push({
  key:"external_산술연산_112",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이가 장바구니에 우유, 감자, 케첩, 과자, 라면을 담았습니다. 우유는 1540원, 감자는 1200원, 케첩은 1450원, 과자는 1300원, 라면은 900원 입니다. 장바구니에 담은 물건 중 우유를 1000원짜리 우유로 바꾼다면 장바구니에 담은 물건들의 평균 금액은 얼마가 줄어드는지 구하시오.",
      answer:"108",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 108, 식: (1540-1000)/5"
    };
  }
});

// [산술연산] 가게에서 옥수수빵을 한 봉지에 1560원에 사 와서 1800원에 팔고 있습니다. 이 옥수수...
T11_external.push({
  key:"external_산술연산_116",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가게에서 옥수수빵을 한 봉지에 1560원에 사 와서 1800원에 팔고 있습니다. 이 옥수수빵을 30봉지 팔았다면 이익금은 모두 얼마입니까?",
      answer:"7200",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7200, 식: (1800-1560)*30"
    };
  }
});

// [산술연산] 4.5분에 4.32L의 물이 나오는 수도가 있습니다. 24L들이의 물통을 수도물에 채우려면...
T11_external.push({
  key:"external_산술연산_118",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"4.5분에 4.32L의 물이 나오는 수도가 있습니다. 24L들이의 물통을 수도물에 채우려면 몇 분을 기다려야 합니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: 24/(4.32/4.5)"
    };
  }
});

// [산술연산] 익준이네 집에서 석형이네 집까지의 거리는 1000m입니다. 익준이네 집에서 석형이네 집을 ...
T11_external.push({
  key:"external_산술연산_119",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이네 집에서 석형이네 집까지의 거리는 1000m입니다. 익준이네 집에서 석형이네 집을 향해 출발하여 250m를 갔습니다. 석형이네 집까지 가는데 남은 거리는 전체의 얼마인지 소수로 나타내어 보세요.",
      answer:"0.75",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.75, 식: (1000-250)/1000"
    };
  }
});

// [산술연산] 정원이는 색연필 색종이 4장을 600원에 샀습니다. 이 색종이 12장을 사려면 얼마가 필요...
T11_external.push({
  key:"external_산술연산_124",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이는 색연필 색종이 4장을 600원에 샀습니다. 이 색종이 12장을 사려면 얼마가 필요한지 구하시오.",
      answer:"1800",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1800, 식: (600/4)*12"
    };
  }
});

// [산술연산] 선빈이네 반 학생 수는 모두 37명입니다. 이들에게 각각 4권의 노트를 선물하려고 하는데 ...
T11_external.push({
  key:"external_산술연산_126",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이네 반 학생 수는 모두 37명입니다. 이들에게 각각 4권의 노트를 선물하려고 하는데 노트 한 권의 가격은 110원입니다. 모두 얼마가 필요합니까?",
      answer:"16280",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16280, 식: (37*4)*110"
    };
  }
});

// [산술연산] 둘레가 586m인 운동장이 있습니다. 이 운동장의 둘레를 익준이는 17바퀴 달렸고, 신혜는...
T11_external.push({
  key:"external_산술연산_127",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 586m인 운동장이 있습니다. 이 운동장의 둘레를 익준이는 17바퀴 달렸고, 신혜는 13바퀴 달렸습니다. 익준이는 신혜보다 몇 m 더 많이 달렸습니까?",
      answer:"2344",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2344, 식: 586*17-586*13"
    };
  }
});

// [산술연산] 아버지의 몸무게는 84kg이고 나의 몸무게는 42kg입니다. 내 동생의 몸무게는 나의 몸무...
T11_external.push({
  key:"external_산술연산_128",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아버지의 몸무게는 84kg이고 나의 몸무게는 42kg입니다. 내 동생의 몸무게는 나의 몸무게의 80%라고 하면, 아버지의 몸무게는 동생의 몸무게의 몇 배인지 구하시오.",
      answer:"2.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2.5, 식: 84/(42*(8/10))"
    };
  }
});

// [산술연산] 넓이가 8600m2인 화단이 있습니다. 전체의 18.5%에는 꽃을 심고, 꽃을 심은 화단의...
T11_external.push({
  key:"external_산술연산_131",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 8600m2인 화단이 있습니다. 전체의 18.5%에는 꽃을 심고, 꽃을 심은 화단의 넓이의 45%에는 맨드라미를 심었습니다. 맨드라미를 심은 화단의 넓이는 몇 m2입니까?",
      answer:"715.95",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 715.95, 식: (8600*0.185)*0.45"
    };
  }
});

// [산술연산] 16/2=A/7을 만족하는 A를 구하시오....
T11_external.push({
  key:"external_산술연산_133",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"16/2=A/7을 만족하는 A를 구하시오.",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: (16/2)/(1/7)"
    };
  }
});

// [산술연산] 익준이네 집의 9월 전력 사용량은 63.6kw였습니다. 하루에 몇 kw를 사용했는지 구하시...
T11_external.push({
  key:"external_산술연산_136",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이네 집의 9월 전력 사용량은 63.6kw였습니다. 하루에 몇 kw를 사용했는지 구하시오. (9월은 30일까지 있습니다.)",
      answer:"2.12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2.12, 식: 63.6/30"
    };
  }
});

// [산술연산] 선빈이는 550원짜리 지점토 1개와 350원짜리 공책 1권을 사고 1000원을 냈습니다. ...
T11_external.push({
  key:"external_산술연산_138",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 550원짜리 지점토 1개와 350원짜리 공책 1권을 사고 1000원을 냈습니다. 거스름돈은 얼마인지 구하시오.",
      answer:"100",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100, 식: 1000-(550+350)"
    };
  }
});

// [산술연산] 농장에 말이 50마리 있습니다. 15마리는 큰 우리에 넣었고, 남은 말들은 5마리씩 작은 ...
T11_external.push({
  key:"external_산술연산_142",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"농장에 말이 50마리 있습니다. 15마리는 큰 우리에 넣었고, 남은 말들은 5마리씩 작은 우리에 넣으려고 합니다. 몇 개의 작은 우리가 필요합니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: (50-15)/5"
    };
  }
});

// [산술연산] 석형이네 반 아이들 8명이 모여 (14/3) L의 물을 똑같이 나누어 마시려고 합니다. 한...
T11_external.push({
  key:"external_산술연산_148",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이네 반 아이들 8명이 모여 (14/3) L의 물을 똑같이 나누어 마시려고 합니다. 한 사람이 마실 수 있는 물은 몇 L 인지 구하시오.",
      answer:"(14/24)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (14/24), 식: (14/3)/8"
    };
  }
});

// [산술연산] 고추를 정원잉는 1.74kg 땄고, 준완이는 정원이보다 0.19kg 더 많이 땄으며, 석형...
T11_external.push({
  key:"external_산술연산_149",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"고추를 정원잉는 1.74kg 땄고, 준완이는 정원이보다 0.19kg 더 많이 땄으며, 석형이는 준완이보다 0.22kg 더 많이 땄습니다. 세 사람이 딴 고추는 모두 몇 kg 인지 구하시오.",
      answer:"5.82",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5.82, 식: 1.74+(1.74+0.19)+(1.74+0.19+0.22)"
    };
  }
});

// [산술연산] 가로에 대한 둘레의 비율이 2.5인 직사각형 모양의 화단이 있습니다. 이 직사각형 모양의 ...
T11_external.push({
  key:"external_산술연산_151",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로에 대한 둘레의 비율이 2.5인 직사각형 모양의 화단이 있습니다. 이 직사각형 모양의 화단의 가로가 20m일 때 넓이는 몇 m2인지 구하시오.",
      answer:"100",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100, 식: ((20*2.5)/2-20)*20"
    };
  }
});

// [산술연산] 100이 4개, 10이 0개, 1이 9개인 수를 5배 한 수는 얼마인가요?...
T11_external.push({
  key:"external_산술연산_153",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100이 4개, 10이 0개, 1이 9개인 수를 5배 한 수는 얼마인가요?",
      answer:"2045",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2045, 식: (100*4+1*9)*5"
    };
  }
});

// [산술연산] 주영이는 전체 쪽수가 200쪽인 책을 어제까지 36쪽 읽었습니다. 남은 책을 앞으로 ?일 ...
T11_external.push({
  key:"external_산술연산_154",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주영이는 전체 쪽수가 200쪽인 책을 어제까지 36쪽 읽었습니다. 남은 책을 앞으로 ?일 동안 다 읽으려고 한다면, 하루에 몇 쪽씩 읽어야 합니까?",
      answer:"41",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 41, 식: (200-36)/4"
    };
  }
});

// [산술연산] 어느 문방구점에서는 4000원짜리 체육복을 3600원에 판다고 합니다. 이 문방구의 할인율...
T11_external.push({
  key:"external_산술연산_156",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 문방구점에서는 4000원짜리 체육복을 3600원에 판다고 합니다. 이 문방구의 할인율은 몇 %입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: ((4000-3600)/4000)*100"
    };
  }
});

// [산술연산] 한 명이 피자 한 판의 (1/3) 조각씩 먹으려고 합니다. 27명이 먹으려면 피자는 모두 ...
T11_external.push({
  key:"external_산술연산_157",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 명이 피자 한 판의 (1/3) 조각씩 먹으려고 합니다. 27명이 먹으려면 피자는 모두 몇 판 필요한지 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: (1/3)*27"
    };
  }
});

// [산술연산] 정원이는 월요일에 줄넘기를 20회 하고, 매일 5회씩 늘려가며 일주일 동안 줄넘기를 하였습...
T11_external.push({
  key:"external_산술연산_158",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이는 월요일에 줄넘기를 20회 하고, 매일 5회씩 늘려가며 일주일 동안 줄넘기를 하였습니다. 정원이는 하루에 줄넘기를 평균 몇 회씩 한 셈인지 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: (20+25+30+35+40+45+50)/7"
    };
  }
});

// [산술연산] 신혜의 키는 163.4cm이고 송화의 키는 170.2cm입니다. 둘의 키를 합치면 몇 cm...
T11_external.push({
  key:"external_산술연산_159",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜의 키는 163.4cm이고 송화의 키는 170.2cm입니다. 둘의 키를 합치면 몇 cm입니까?",
      answer:"333.6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 333.6, 식: 163.4+170.2"
    };
  }
});

// [산술연산] 신혜와 동생은 아버지를 따라 한강으로 낚시를 갔습니다. 신혜가 잡은 물고기의 무게는 3.2...
T11_external.push({
  key:"external_산술연산_162",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜와 동생은 아버지를 따라 한강으로 낚시를 갔습니다. 신혜가 잡은 물고기의 무게는 3.25kg이고, 동생이 잡은 물고기의 무게는 2.1kg이었습니다. 신혜는 동생보다 물고기를 몇 kg 더 많이 잡았는지 구하시오.",
      answer:"1.15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.15, 식: 3.25-2.1"
    };
  }
});

// [산술연산] 동물원에 있는 호랑이는 하루에 8.4kg의 고기를 먹습니다. 호랑이는 고기 50.4kg을 ...
T11_external.push({
  key:"external_산술연산_164",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 있는 호랑이는 하루에 8.4kg의 고기를 먹습니다. 호랑이는 고기 50.4kg을 며칠 동안 먹을 수 있는지 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: 50.4/8.4"
    };
  }
});

// [산술연산] 장난감 가게에서 30000원 하는 장난감을 15% 할인하여 판매한다고 합니다. 장난감의 판...
T11_external.push({
  key:"external_산술연산_170",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"장난감 가게에서 30000원 하는 장난감을 15% 할인하여 판매한다고 합니다. 장난감의 판매 가격은 얼마입니까?",
      answer:"25500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25500, 식: 30000-30000*(15/100)"
    };
  }
});

// [산술연산] 벽돌 234개를 한 층에 6개씩 3줄로 쌓으려고 합니다. 모두 몇 층까지 쌓을 수 있겠습니...
T11_external.push({
  key:"external_산술연산_172",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"벽돌 234개를 한 층에 6개씩 3줄로 쌓으려고 합니다. 모두 몇 층까지 쌓을 수 있겠습니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: 234/(6*3)"
    };
  }
});

// [산술연산] 10보다 크고 20보다 작은 수는 모두 몇 개 입니까?...
T11_external.push({
  key:"external_산술연산_173",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"10보다 크고 20보다 작은 수는 모두 몇 개 입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: (20-10)-1"
    };
  }
});

// [산술연산] 한 상자에 15개씩 들어 있는 토마토가 5상자가 있고, 한 상자에 4개씩 들어 있는 참외가...
T11_external.push({
  key:"external_산술연산_175",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 상자에 15개씩 들어 있는 토마토가 5상자가 있고, 한 상자에 4개씩 들어 있는 참외가 20상자가 있습니다. 토마토는 한 개에 700원, 참외는 한 개에 500원을 받고 모두 팔았다면 토마토와 참외를 판 금액은 모두 얼마인지 구해 보시오.",
      answer:"92500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 92500, 식: (15*5)*700+(4*20)*500"
    };
  }
});

// [산술연산] 수범이네 반 학생은 모두 A명 입니다. 그 중 (1/5)은 안경을 쓰고, 나머지의 (4/7...
T11_external.push({
  key:"external_산술연산_177",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수범이네 반 학생은 모두 A명 입니다. 그 중 (1/5)은 안경을 쓰고, 나머지의 (4/7)은 콘텍트렌즈를 사용합니다. 콘텍트렌즈를 사용하는 학생이 16명일 때, A를 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: (16/(4/17))/(1-(1/5))"
    };
  }
});

// [산술연산] 5에 어떤 수를 두 번 더하였더니 19가 되었습니다. 어떤 수는 무엇입니까?...
T11_external.push({
  key:"external_산술연산_178",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"5에 어떤 수를 두 번 더하였더니 19가 되었습니다. 어떤 수는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: (19-5)/2"
    };
  }
});

// [산술연산] 익준이는 저수지 둘레에 250cm 간격으로 나무를 심었습니다. 저수지의 둘레의 길이가 80...
T11_external.push({
  key:"external_산술연산_179",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 저수지 둘레에 250cm 간격으로 나무를 심었습니다. 저수지의 둘레의 길이가 80000cm이고, 나무의 값이 2 그루에 7000원이라면 나무 값은 모두 얼마가 들었습니까?",
      answer:"1120000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1120000, 식: (80000/250)*(7000/2)"
    };
  }
});

// [산술연산] 상자를 작은 트럭에는 136개 실을 수 있고, 큰 트럭에는 247개를 실을 수 있습니다. ...
T11_external.push({
  key:"external_산술연산_180",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상자를 작은 트럭에는 136개 실을 수 있고, 큰 트럭에는 247개를 실을 수 있습니다. 작은 트럭이 5대, 큰 트럭이 7대 있다면, 트럭에 상자를 모두 몇 개 실을 수 있습니까?",
      answer:"2409",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2409, 식: (136*5)+(247*7)"
    };
  }
});

// [산술연산] 익준이는 월요일에 줄넘기를 30회 하고, 매일 10회씩 늘려가며 일주일 동안 줄넘기를 하였...
T11_external.push({
  key:"external_산술연산_181",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 월요일에 줄넘기를 30회 하고, 매일 10회씩 늘려가며 일주일 동안 줄넘기를 하였습니다. 익준이는 하루에 줄넘기를 평균 몇 회씩 한 셈인지 구하시오.",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: (30+40+50+60+70+80+90)/7"
    };
  }
});

// [산술연산] 체력장을 하는데 익준이는 공 던지기에서 62.42m를 던졌고 신혜는 55.34m를 던졌습니...
T11_external.push({
  key:"external_산술연산_185",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체력장을 하는데 익준이는 공 던지기에서 62.42m를 던졌고 신혜는 55.34m를 던졌습니다. 익준이는 신혜보다 얼마나 더 멀리 던졌습니까?",
      answer:"7.08",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7.08, 식: 62.42-55.34"
    };
  }
});

// [산술연산] 1분 동안에 (5/6)cm씩 타는 양초가 있습니다. 12분 동안 촛불을 켰다면, 양초는 몇...
T11_external.push({
  key:"external_산술연산_186",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1분 동안에 (5/6)cm씩 타는 양초가 있습니다. 12분 동안 촛불을 켰다면, 양초는 몇 cm 탔습니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: (5/6)*12"
    };
  }
});

// [산술연산] 밥 1공기를 짓는데 필요한 쌀은 92g입니다. 밥을 매일 3공기씩 먹는다면 30일 동안 먹...
T11_external.push({
  key:"external_산술연산_187",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밥 1공기를 짓는데 필요한 쌀은 92g입니다. 밥을 매일 3공기씩 먹는다면 30일 동안 먹는 쌀의 양은 몇 g입니까?",
      answer:"8280",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8280, 식: (92*3)*30"
    };
  }
});

// [산술연산] 무게가 같은 과자 6봉지를 상자에 넣어 저울에 무게를 재어 보니 1300g 이었습니다. 여...
T11_external.push({
  key:"external_산술연산_188",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"무게가 같은 과자 6봉지를 상자에 넣어 저울에 무게를 재어 보니 1300g 이었습니다. 여기에 똑같은 과자 4봉지를 더 올려 놓고 무게를 재엇더니 1800g이 되었습니다. 과자 한 봉지의 무게는 몇 g인지 구하시오.",
      answer:"125",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 125, 식: (1800-1300)/4"
    };
  }
});

// [산술연산] 가는 100이 5개, 10이 9개, 1이 14개 인 수이고, 나는 85에서 10씩 4번 뛰...
T11_external.push({
  key:"external_산술연산_190",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가는 100이 5개, 10이 9개, 1이 14개 인 수이고, 나는 85에서 10씩 4번 뛰어 센 수입니다. 가와 나가 나타내는 수의 합을 구하시오.",
      answer:"729",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 729, 식: (100*5+10*9+1*14)+(85+10*4)"
    };
  }
});

// [산술연산] 신혜의 걸음 너비는 0.65m이고, 1분 동안 90걸음을 걷습니다. 집에서 학교까지 14분...
T11_external.push({
  key:"external_산술연산_191",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜의 걸음 너비는 0.65m이고, 1분 동안 90걸음을 걷습니다. 집에서 학교까지 14분이 걸렸다면, 신혜네 집에서 학교까지는 몇 m 인지 구하시오.",
      answer:"819",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 819, 식: 0.65*90*14"
    };
  }
});

// [산술연산] 어느 공장에서는 과자를 하루에 1200봉지 생산해야 한다고 합니다. 지금까지 생산한 과자를...
T11_external.push({
  key:"external_산술연산_192",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 공장에서는 과자를 하루에 1200봉지 생산해야 한다고 합니다. 지금까지 생산한 과자를 한 상자에 20봉지씩 담았더니 40상자가 되었습니다. 앞으로 몇 봉지를 더 생산해야 오늘 생산량을 채울 수 있습니까?",
      answer:"400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 400, 식: 1200-(20*40)"
    };
  }
});

// [산술연산] 신혜가 장바구니에 우유, 감자, 케첩, 과자, 라면을 담았습니다. 우유는 1220원, 감자...
T11_external.push({
  key:"external_산술연산_194",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜가 장바구니에 우유, 감자, 케첩, 과자, 라면을 담았습니다. 우유는 1220원, 감자는 1200원, 케첩은 1450원, 라면은 900원 입니다. 장바구니에 담은 물건 중 우유를 900원짜리 우유로 바꾼다면 장바구니에 담은 물건들의 평균 금액은 얼마가 줄어드는지 구하시오.",
      answer:"80",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 80, 식: (1220-900)/4"
    };
  }
});

// [산술연산] 윗접시저울의 왼쪽 접시에 무게가 290g인 필통을 올려놓고 오른쪽 접시에 100g짜리 분통...
T11_external.push({
  key:"external_산술연산_195",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윗접시저울의 왼쪽 접시에 무게가 290g인 필통을 올려놓고 오른쪽 접시에 100g짜리 분통 2개와 50g짜리 분통 1개를 올려놓았더니 윗접시저울이 왼쪽으로 기울었습니다. 윗접시저울이 수평이 되려면 1g짜리 분통이 몇 개 필요한지 구허시오.",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: 290-(100*2+50*1)"
    };
  }
});

// [산술연산] 주차장에 자동차가 45대 있습니다. 자동차가 17대 빠져 나가고, 34대가 들어왔습니다. ...
T11_external.push({
  key:"external_산술연산_196",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주차장에 자동차가 45대 있습니다. 자동차가 17대 빠져 나가고, 34대가 들어왔습니다. 주차장에는 자동차가 몇 대 있습니까?",
      answer:"62",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 62, 식: 45-17+34"
    };
  }
});

// [산술연산] 남학생 63명은 7명씩 모둠을 만들고, 여학생 72명은 9명씩 모둠을 만들었습니다. 모두 ...
T11_external.push({
  key:"external_산술연산_197",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"남학생 63명은 7명씩 모둠을 만들고, 여학생 72명은 9명씩 모둠을 만들었습니다. 모두 몇 모둠을 만들었습니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: 63/7+72/9"
    };
  }
});

// [산술연산] 농구에서 자유투는 정해진 선 뒤의 반원 내에서 슛을 던져 1점을 얻을 수 있는 기회를 주는...
T11_external.push({
  key:"external_산술연산_198",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"농구에서 자유투는 정해진 선 뒤의 반원 내에서 슛을 던져 1점을 얻을 수 있는 기회를 주는 것을 말합니다. 어느 농구 선수의 자유투 성공률이 80%입니다. 이 선수가 자유투를 65회 던졌을 때 성공한 자유투는 몇 회인지 구하시오.",
      answer:"52",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 52, 식: 65*0.8"
    };
  }
});

// [산술연산] 남학생 45명과 여학생 43명이 있습니다. 이 학생들을 섞어서 똑같이 4모둠으로 나누어 과...
T11_external.push({
  key:"external_산술연산_199",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"남학생 45명과 여학생 43명이 있습니다. 이 학생들을 섞어서 똑같이 4모둠으로 나누어 과학실험을 하려고 합니다. 한 모둠은 몇 명이 됩니까?",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: (45+43)/4"
    };
  }
});

// [산술연산] 들이가 12.54L인 큰 물통을 가득 채우려면, 2.09L들이의 바가지로 적어도 몇 번 부...
T11_external.push({
  key:"external_산술연산_200",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"들이가 12.54L인 큰 물통을 가득 채우려면, 2.09L들이의 바가지로 적어도 몇 번 부어야 합니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: 12.54/2.09"
    };
  }
});

// [산술연산] 어떤 책을 하루에 25쪽씩 A일 읽으면 마지막 날에는 20쪽만 읽으면 책을 끝까지 읽을 수...
T11_external.push({
  key:"external_산술연산_201",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 책을 하루에 25쪽씩 A일 읽으면 마지막 날에는 20쪽만 읽으면 책을 끝까지 읽을 수 있습니다. 이 책을 하루에 30쪽씩 A일읽으면 25쪽씩 읽을 때보다 이틀을 더 빨리 읽을 수 있습니다. A의 값을 구하시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: 20+(30*2)/(30-25)"
    };
  }
});

// [산술연산] 한 상자에 18개씩 들어 있는 토마토가 5상자 있고, 한 상자에 4개씩 들어 있는 참외가 ...
T11_external.push({
  key:"external_산술연산_202",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 상자에 18개씩 들어 있는 토마토가 5상자 있고, 한 상자에 4개씩 들어 있는 참외가 20상자 있습니다. 토마토는 한 개에 500원, 참외는 한 개에 700원을 받고 모두 팔았다면 토마토와 참외를 판 금액은 모두 얼마인지 구하시오.",
      answer:"101000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 101000, 식: 18*5*500+4*20*700"
    };
  }
});

// [산술연산] 신혜는 사진 18장을 사진첩에 붙였습니다. 사진첩 한 쪽에 4장씩 붙였더니 사진 두 장이 ...
T11_external.push({
  key:"external_산술연산_203",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜는 사진 18장을 사진첩에 붙였습니다. 사진첩 한 쪽에 4장씩 붙였더니 사진 두 장이 남았습니다. 신혜가 붙인 사진첩은 몇 쪽입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: (18-2)/4"
    };
  }
});

// [산술연산] 750원짜리 음료수 한 병과 600원짜리 과자 한 봉지를 사고 2000원을 냈습니다. 거스...
T11_external.push({
  key:"external_산술연산_206",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"750원짜리 음료수 한 병과 600원짜리 과자 한 봉지를 사고 2000원을 냈습니다. 거스름돈은 얼마를 받아야 합니까?",
      answer:"650",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 650, 식: 2000-(750+600)"
    };
  }
});

// [산술연산] 준완이는 콜라 1.75L가 들어 있는 병에 1.39L를 마셨습니다. 남아 있는 콜라는 몇 ...
T11_external.push({
  key:"external_산술연산_207",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이는 콜라 1.75L가 들어 있는 병에 1.39L를 마셨습니다. 남아 있는 콜라는 몇 L 인지 구하시오.",
      answer:"0.36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.36, 식: 1.75-1.39"
    };
  }
});

// [산술연산] 굵기가 일정한 철근 1m의 무게는 0.85kg입니다. 이와 같은 철근 56m의 무게는 몇 ...
T11_external.push({
  key:"external_산술연산_212",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"굵기가 일정한 철근 1m의 무게는 0.85kg입니다. 이와 같은 철근 56m의 무게는 몇 kg 인지 구하시오.",
      answer:"47.6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47.6, 식: 0.85*56"
    };
  }
});

// [산술연산] 익준이는 매일 300원씩 6일 동안 저금하였고, 석형이는 익준이가 저금한 돈의 2배보다 1...
T11_external.push({
  key:"external_산술연산_215",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 매일 300원씩 6일 동안 저금하였고, 석형이는 익준이가 저금한 돈의 2배보다 1100원씩 더 많이 저금하였습니다. 민하는 매일 400원씩 3주 동안 저금하였다면, 민하가 저금한 돈은 익준이와 석형이가 저금한 돈의 합보다 얼마나 더 많습니까?",
      answer:"1900",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1900, 식: 400*7*3-(300*6+300*6*2+1100)"
    };
  }
});

// [산술연산] 보트 한 대를 10분 동안 타는 비용이 1500원이라고 합니다. 이 보트를 12명이 각각 ...
T11_external.push({
  key:"external_산술연산_217",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"보트 한 대를 10분 동안 타는 비용이 1500원이라고 합니다. 이 보트를 12명이 각각 13500원을 내어 A대를 빌려서 3시간 동안 탔습니다. A의 값을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: (13500/((3*60/10)*1500))*12"
    };
  }
});

// [산술연산] 과자점에서는 매일 똑같은 양의 밀가루를 쓰는데 10일 동안 (23/3) kg의 밀가루를 사...
T11_external.push({
  key:"external_산술연산_219",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과자점에서는 매일 똑같은 양의 밀가루를 쓰는데 10일 동안 (23/3) kg의 밀가루를 사용했습니다. 3일 동안 사용하는 밀가루 양은 몇 kg 인지 구하시오.",
      answer:"(23/10)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (23/10), 식: ((23/3)/10)*3"
    };
  }
});

// [산술연산] 신혜는 사진 31장을 사진첩에 붙였습니다. 사진첩 한 쪽에 5장씩 붙였더니 사진 한 장이 ...
T11_external.push({
  key:"external_산술연산_221",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜는 사진 31장을 사진첩에 붙였습니다. 사진첩 한 쪽에 5장씩 붙였더니 사진 한 장이 남았습니다. 신혜가 붙인 사진첩은 몇 쪽입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: (31-1)/5"
    };
  }
});

// [산술연산] 가로가 17cm, 세로가 28cm인 직사각형이 있습니다. 이 직사각형의 둘레는 몇 cm입니...
T11_external.push({
  key:"external_산술연산_222",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로가 17cm, 세로가 28cm인 직사각형이 있습니다. 이 직사각형의 둘레는 몇 cm입니까?",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: (17+28)*2"
    };
  }
});

// [산술연산] 길이가 36cm인 끈으로 가장 큰 정사각형을 만들었다. 이 정사각형의 넓이를 구하시오....
T11_external.push({
  key:"external_산술연산_223",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 36cm인 끈으로 가장 큰 정사각형을 만들었다. 이 정사각형의 넓이를 구하시오.",
      answer:"81",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 81, 식: (36/4)*(36/4)"
    };
  }
});

// [산술연산] 익준이가 가진 돈은 정원이가 가진 돈의 2.5배이고, 정원이가 가진 돈은 석형이가 가진 돈...
T11_external.push({
  key:"external_산술연산_228",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이가 가진 돈은 정원이가 가진 돈의 2.5배이고, 정원이가 가진 돈은 석형이가 가진 돈의 1.5배입니다. 익준이가 가진 돈이 4200원이면, 석형이가 가진 돈은 얼마입니까?",
      answer:"1120",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1120, 식: (4200/2.5)/1.5"
    };
  }
});

// [산술연산] 혜현이의 한 걸음의 길이는 0.39m입니다. 집에서 공원까지의 0.156km의 거리를 A걸...
T11_external.push({
  key:"external_산술연산_231",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜현이의 한 걸음의 길이는 0.39m입니다. 집에서 공원까지의 0.156km의 거리를 A걸음으로 걸었다고 할때, A의 값을 구하시오.",
      answer:"400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 400, 식: 156/0.39"
    };
  }
});

// [산술연산] 파란색 리본 1cm의 무게가 0.7g입니다. 이 파란색 리본 20cm의 무게는 몇 g입니까...
T11_external.push({
  key:"external_산술연산_233",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"파란색 리본 1cm의 무게가 0.7g입니다. 이 파란색 리본 20cm의 무게는 몇 g입니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: 0.7*20"
    };
  }
});

// [산술연산] 신혜의 키는 136.4cm입니다. 익준이가 신혜보다 14.6cm 더 크다면 익준이의 키는 ...
T11_external.push({
  key:"external_산술연산_234",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜의 키는 136.4cm입니다. 익준이가 신혜보다 14.6cm 더 크다면 익준이의 키는 몇 cm입니까?",
      answer:"151",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 151, 식: 136.4+14.6"
    };
  }
});

// [산술연산] 체력장을 하는데 석형이는 공 던지기에서 67.24m를 던졌고, 선빈이는 58.84m를 던졌...
T11_external.push({
  key:"external_산술연산_237",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체력장을 하는데 석형이는 공 던지기에서 67.24m를 던졌고, 선빈이는 58.84m를 던졌습니다. 석형이가 얼마나 더 멀리 던졌는지 구하시오.",
      answer:"8.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8.4, 식: 67.24-58.84"
    };
  }
});

// [산술연산] 아버지의 하루 근무시간은 8시간이고, 5월은 31일까지 있습니다. 한 달에 4번 쉬고 일하...
T11_external.push({
  key:"external_산술연산_239",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아버지의 하루 근무시간은 8시간이고, 5월은 31일까지 있습니다. 한 달에 4번 쉬고 일하신다면 5월에 아버지께서 일하신 시간은 모두 몇 시간입니까?",
      answer:"216",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 216, 식: (31-4)*8"
    };
  }
});

// [산술연산] 도자기를 만드는 데 민하가 사용한 찰흙의 무게는 0.65kg이고 석형이가 사용한 찰흙의 무...
T11_external.push({
  key:"external_산술연산_241",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도자기를 만드는 데 민하가 사용한 찰흙의 무게는 0.65kg이고 석형이가 사용한 찰흙의 무게는 0.61kg입니다. 민하는 석형이보다 찰흙을 얼마나 더 많이 사용하였습니까?",
      answer:"0.04",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.04, 식: 0.65-0.61"
    };
  }
});

// [산술연산] 한 묶음의 21권인 공책 13묶음이 있습니다. 학생 39명에게 나누어 주면 한 사림이 몇 ...
T11_external.push({
  key:"external_산술연산_242",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 묶음의 21권인 공책 13묶음이 있습니다. 학생 39명에게 나누어 주면 한 사림이 몇 권씩 받겠습니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: 21*13/39"
    };
  }
});

// [산술연산] 익준이네 학교 학생들이 버스 한 대에 43명씩 24대에 탔더니 22명이 남았습니다. 익준이...
T11_external.push({
  key:"external_산술연산_243",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이네 학교 학생들이 버스 한 대에 43명씩 24대에 탔더니 22명이 남았습니다. 익준이네 학교 학생은 모두 몇 명입니까?",
      answer:"1054",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1054, 식: 43*24+22"
    };
  }
});

// [산술연산] 송화는 공책을 32권 가지고 있습니다. 이 중에서 (5/8)를 사용하였다면, 송화가 사용한...
T11_external.push({
  key:"external_산술연산_244",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화는 공책을 32권 가지고 있습니다. 이 중에서 (5/8)를 사용하였다면, 송화가 사용한 공책은 모두 몇 권입니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: 32*(5/8)"
    };
  }
});

// [산술연산] 가로가 12m, 세로가 3m10cm인 직사각형의 넓이를 구하시오....
T11_external.push({
  key:"external_산술연산_247",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로가 12m, 세로가 3m10cm인 직사각형의 넓이를 구하시오.",
      answer:"37.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 37.2, 식: 12*3.1"
    };
  }
});

// [산술연산] 어머니께서 만 원을 가지고 과일을 사려고 합니다. 500원짜리 사과 5개와 250원짜리 귤...
T11_external.push({
  key:"external_산술연산_248",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어머니께서 만 원을 가지고 과일을 사려고 합니다. 500원짜리 사과 5개와 250원짜리 귤 10개를 사셨다면, 거스름돈을 얼마를 받아야 됩니까?",
      answer:"5000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5000, 식: 10000-(500*5+250*10)"
    };
  }
});

// [산술연산] 감은 상자에 평균 60개씩 15 상자가 있고, 배는 한 상자에 평균 50개씩 10 상자가 ...
T11_external.push({
  key:"external_산술연산_249",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"감은 상자에 평균 60개씩 15 상자가 있고, 배는 한 상자에 평균 50개씩 10 상자가 있고, 귤은 한 상자에 평균 150개씩 5상자가 있습니다. 감은 한 개에 400원씩, 배는 한 개에 500원씩, 귤은 한 개에 350원씩 받고 팔았다면 판 돈은 모두 얼마입니까?",
      answer:"872500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 872500, 식: 60*15*400+50*10*500+150*5*350"
    };
  }
});

// [산술연산] 한 걸음에 삼촌은 84cm를 가고, 민하는 39cm를 갑니다. 두 사람이 20걸음씩 걸었을...
T11_external.push({
  key:"external_산술연산_250",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 걸음에 삼촌은 84cm를 가고, 민하는 39cm를 갑니다. 두 사람이 20걸음씩 걸었을 때, 삼촌은 민하보다 몇 cm 앞서 있겠습니까?",
      answer:"900",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 900, 식: (84*20)-(39*20)"
    };
  }
});

// [산술연산] 동화책 22권과 시집 14권이 있습니다. 이 책을 종류에 상관없이 2단 책장에 똑같이 나누...
T11_external.push({
  key:"external_산술연산_251",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동화책 22권과 시집 14권이 있습니다. 이 책을 종류에 상관없이 2단 책장에 똑같이 나누어 꽂으려고 합니다. 책을 책장 한 단에 몇 권씩 꽂아야 합니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: (22+14)/2"
    };
  }
});

// [산술연산] 수현이의 몸무게가 45.125kg입니다. 지훈이는 수연이보다 Akg 더 적게 나갑니다. 지...
T11_external.push({
  key:"external_산술연산_253",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수현이의 몸무게가 45.125kg입니다. 지훈이는 수연이보다 Akg 더 적게 나갑니다. 지훈이의 몸무게가 42.12kg일 때 A의 값을 구하시오.",
      answer:"3.01",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.01, 식: 45.125-42.12"
    };
  }
});

// [산술연산] 익준이는 가지고 있던 돈의 (1/3)을 불우이웃돕기 성금으로 내었고, 준완이는 가지고 있던...
T11_external.push({
  key:"external_산술연산_254",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 가지고 있던 돈의 (1/3)을 불우이웃돕기 성금으로 내었고, 준완이는 가지고 있던 돈의 (1/6)을 불우이웃돕기 성금으로 내었습니다. 그런데 익준이와 준완이가 낸 돈은 1500원으로 같았습니다. 익준이와 처음에 가지고 있던 돈과 준완이가 처음에 가지고 있던 돈의 합을 구하시오.",
      answer:"13500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13500, 식: 1500/(1/3)+1500/(1/6)"
    };
  }
});

// [산술연산] 과자 5봉지의 무게는 780g이고, 사탕 한 봉지의 무게는 290g입니다. 사탕 2봉지의 ...
T11_external.push({
  key:"external_산술연산_255",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과자 5봉지의 무게는 780g이고, 사탕 한 봉지의 무게는 290g입니다. 사탕 2봉지의 무게는 과자 3봉지의 무게보다 얼마나 더 무겁습니까?",
      answer:"112",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 112, 식: (290*2)-(780/5*3)"
    };
  }
});

// [산술연산] 형의 멀리던지기 기록은 33.6m이고, 동생의 기록은 8.4m입니다. 형은 동생의 몇 배를...
T11_external.push({
  key:"external_산술연산_257",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"형의 멀리던지기 기록은 33.6m이고, 동생의 기록은 8.4m입니다. 형은 동생의 몇 배를 던졌습니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: 33.6/8.4"
    };
  }
});

// [산술연산] 한 모서리가 13cm인 정육면체의 부피는 얼마입니까?...
T11_external.push({
  key:"external_산술연산_261",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리가 13cm인 정육면체의 부피는 얼마입니까?",
      answer:"2197",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2197, 식: 13*13*13"
    };
  }
});

// [산술연산] 도매상에서 8500원에 사 온 상품에 20%의 이익을 붙여 정가를 정하였습니다. 이 상품의...
T11_external.push({
  key:"external_산술연산_265",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도매상에서 8500원에 사 온 상품에 20%의 이익을 붙여 정가를 정하였습니다. 이 상품의 정가는 얼마입니까?",
      answer:"10200",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10200, 식: 8500+(8500*(2/10))"
    };
  }
});

// [산술연산] 신혜는 1회에서 5회까지 수학 시험을 보았는데 5회까지 본 수학 성적의 평균은 88.6점입...
T11_external.push({
  key:"external_산술연산_266",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜는 1회에서 5회까지 수학 시험을 보았는데 5회까지 본 수학 성적의 평균은 88.6점입니다. 6회째 시험에서 최소한 몇 점을 받아야 평균 점수가 90점 이상이 되는지 구하시오.",
      answer:"97",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 97, 식: (90*6)-(88.6*5)"
    };
  }
});

// [산술연산] 준완이네 반 학생은 32명 입니다. 그 중에 여학생은 18명이라면, 여학생 수에 대한 남학...
T11_external.push({
  key:"external_산술연산_268",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이네 반 학생은 32명 입니다. 그 중에 여학생은 18명이라면, 여학생 수에 대한 남학생 수의 비의 값을 분수로 나타내시오.",
      answer:"(7/9)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (7/9), 식: ((32-18)/18)"
    };
  }
});

// [산술연산] 유치원에 학생 수가 총 56명인데, 여학생이 남학생보다 8명 많습니다. 여학생은 몇 명입니...
T11_external.push({
  key:"external_산술연산_270",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유치원에 학생 수가 총 56명인데, 여학생이 남학생보다 8명 많습니다. 여학생은 몇 명입니까?",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: (56+8)/2"
    };
  }
});

// [산술연산] 민하네 학교 5학년 학생은 남학생이 212명, 여학생이 251명입니다. 5학년 학생 모두에...
T11_external.push({
  key:"external_산술연산_273",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민하네 학교 5학년 학생은 남학생이 212명, 여학생이 251명입니다. 5학년 학생 모두에게 공책을 2권씩 나누어 주려고 합니다. 필요한 공책은 모두 몇 권입니까?",
      answer:"926",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 926, 식: (212+251)*2"
    };
  }
});

// [산술연산] 쌀 15.3kg에서 2.87을 썼씁니다. 남은 쌀은 몇 kg인지 구하시오....
T11_external.push({
  key:"external_산술연산_274",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"쌀 15.3kg에서 2.87을 썼씁니다. 남은 쌀은 몇 kg인지 구하시오.",
      answer:"12.43",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12.43, 식: 15.3-2.87"
    };
  }
});

// [산술연산] 복숭아 한 개의 무게는 0.32kg이고, 사과 한 개의 무게는 0.79kg입니다. 복숭아 ...
T11_external.push({
  key:"external_산술연산_275",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"복숭아 한 개의 무게는 0.32kg이고, 사과 한 개의 무게는 0.79kg입니다. 복숭아 한 개와 사과 한 개의 무게는 모두 몇 kg인지 구하시오.",
      answer:"1.11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.11, 식: 0.32+0.79"
    };
  }
});

// [산술연산] 큰 상자의 무게는 32.96kg이고, 작은 상자의 무게는 8.24kg입니다. 큰 상자의 무...
T11_external.push({
  key:"external_산술연산_276",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"큰 상자의 무게는 32.96kg이고, 작은 상자의 무게는 8.24kg입니다. 큰 상자의 무게는 작은 상자의 무게의 몇 배입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: 32.96/8.24"
    };
  }
});

// [산술연산] 익준이의 몸무게는 42.8 kg, 석형이의 몸무게는 41.6kg, 준완이의 몸무게는 39....
T11_external.push({
  key:"external_산술연산_278",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이의 몸무게는 42.8 kg, 석형이의 몸무게는 41.6kg, 준완이의 몸무게는 39.8kg 입니다. 세 명의 평균 몸무게를 구하시오",
      answer:"41.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 41.4, 식: (42.8+41.6+39.8)/3"
    };
  }
});

// [산술연산] 0.871의 10배의 수는 A이다. A의 값을 구하시오....
T11_external.push({
  key:"external_산술연산_279",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"0.871의 10배의 수는 A이다. A의 값을 구하시오.",
      answer:"8.71",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8.71, 식: 0.871*10"
    };
  }
});

// [산술연산] 선빈이는 휴일날 어머니와 약수터에 갔습니다. 약수터 정상까지 가기 위해서는 350개의 계단...
T11_external.push({
  key:"external_산술연산_280",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 휴일날 어머니와 약수터에 갔습니다. 약수터 정상까지 가기 위해서는 350개의 계단을 올라가야 하는데 선빈이는 210개의 계단을 올라왔습니다. 선빈이가 올라간 계단은 전체 계단의 몇 %입니까?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: (210/350)*100"
    };
  }
});

// [산술연산] 상자를 작은 트럭에는 79개 실을 수 있고, 큰 트럭에는 150개를 실을 수 있습니다. 작...
T11_external.push({
  key:"external_산술연산_281",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상자를 작은 트럭에는 79개 실을 수 있고, 큰 트럭에는 150개를 실을 수 있습니다. 작은 트럭이 4대, 큰 트럭이 3대 있다면, 트럭에 상자를 모두 몇 개 실을 수 있습니까?",
      answer:"766",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 766, 식: (79*4)+(150*3)"
    };
  }
});

// [산술연산] 한 상자에 8개씩 들어있는 만두 6개의 상자를 한 명에게 A개씩 나누어 준다면 12명에게 ...
T11_external.push({
  key:"external_산술연산_282",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 상자에 8개씩 들어있는 만두 6개의 상자를 한 명에게 A개씩 나누어 준다면 12명에게 나누어 줄 수 있다고 할 때, A의 값을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: (8*6)/12"
    };
  }
});

// [산술연산] 선빈이네 음식점에서는 하루에 달걀을 79개씩 사용한다고 합니다. 한 판에 30개인 달걀 1...
T11_external.push({
  key:"external_산술연산_283",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이네 음식점에서는 하루에 달걀을 79개씩 사용한다고 합니다. 한 판에 30개인 달걀 18판을 사서 6일 동안 사용하였습니다. 남은 달걀을 똑같이 2일 동안 사용하려면 하루에 몇 개씩 사용해야 합니까?",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: (30*18-79*6)/2"
    };
  }
});

// [산술연산] 12등분 하면 한 도막이 (3/4)m가 되는 끈이 있습니다. 이 끈의 (3/8)을 사용하면...
T11_external.push({
  key:"external_산술연산_284",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"12등분 하면 한 도막이 (3/4)m가 되는 끈이 있습니다. 이 끈의 (3/8)을 사용하면 몇 m의 끈이 남겠습니까?",
      answer:"5.625",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5.625, 식: ((3/4)*12)*(1-(3/8))"
    };
  }
});

// [산술연산] 길이가 18cm인 색 테이프를 3cm씩 겹치게 이어 붙이려고 합니다. 색 테이프 12장을 ...
T11_external.push({
  key:"external_산술연산_287",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 18cm인 색 테이프를 3cm씩 겹치게 이어 붙이려고 합니다. 색 테이프 12장을 이어 붙이면 전체 길이는 몇 cm가 됩니까?",
      answer:"183",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 183, 식: (18*12)-(3*(12-1))"
    };
  }
});

// [산술연산] 민하는 한 권에 480원 하는 공책 26권과 한 개에 240원 하는 지우개 43개를 샀습니...
T11_external.push({
  key:"external_산술연산_288",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민하는 한 권에 480원 하는 공책 26권과 한 개에 240원 하는 지우개 43개를 샀습니다. 공책과 지우개의 값은 모두 얼마입니까?",
      answer:"22800",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22800, 식: 480*26+240*43"
    };
  }
});

// [산술연산] 길이가 0.08km인 기차가 0.6km의 다리를 건너는데 0.25분이 걸렸습니다. 이 기차...
T11_external.push({
  key:"external_산술연산_289",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 0.08km인 기차가 0.6km의 다리를 건너는데 0.25분이 걸렸습니다. 이 기차가 5분 동안 달린다면 몇 km를 달리겠습니까?",
      answer:"13.6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13.6, 식: (0.08+0.6)/0.25*5"
    };
  }
});

// [산술연산] 선생님께서 학생들에게 색종이를 나누어 주었습니다. 남학생에게는 파란색 종이를 18장씩 나누...
T11_external.push({
  key:"external_산술연산_295",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선생님께서 학생들에게 색종이를 나누어 주었습니다. 남학생에게는 파란색 종이를 18장씩 나누어 주었고, 20명의 여학생에게는 빨간 색종이를 15장씩 나누어 주었습니다. 지금 선생님께서 갖고 있는 색종이가 13장이고, 처음에 선생님이 가지고 있던 색종이가 727장이라면, 이 반의 남학생 수는 몇 명입니까?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: ((727-13)-(20*15))/18"
    };
  }
});

// [산술연산] 준완이네 집의 외가는 친척들이 모두 모이면 25명이 됩니다. 그중에서 이모는 6명입니다. ...
T11_external.push({
  key:"external_산술연산_301",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이네 집의 외가는 친척들이 모두 모이면 25명이 됩니다. 그중에서 이모는 6명입니다. 25명 중 이모들은 몇 %입니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: (6/25)*100"
    };
  }
});

// [산술연산] 익준이네 학교의 6학년 학생 수는 400명입니다. 그중에서 여학생 수는 30%이고, 여학생...
T11_external.push({
  key:"external_산술연산_302",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이네 학교의 6학년 학생 수는 400명입니다. 그중에서 여학생 수는 30%이고, 여학생 중 15%는 익준이네 반이라고 합니다. 익준이네 반 여학생은 몇 명입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: (400*0.3)*0.15"
    };
  }
});

// [산술연산] 익준이네 집에서 기르는 강아지와 고양이의 다리 수를 세어 보니 모두 24개였습니다. 고양이...
T11_external.push({
  key:"external_산술연산_303",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이네 집에서 기르는 강아지와 고양이의 다리 수를 세어 보니 모두 24개였습니다. 고양이가 3마리라면 강아지는 몇 마리입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: (24-4*3)/4"
    };
  }
});

// [산술연산] 경수는 저수지 둘레의 120cm간격으로 나무를 심었습니다. 저수지의 둘레의 길이가 600m...
T11_external.push({
  key:"external_산술연산_305",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경수는 저수지 둘레의 120cm간격으로 나무를 심었습니다. 저수지의 둘레의 길이가 600m이고, 나무의 값이 A그루에 5000원입니다. 가지고 있는 돈 625000을 다 썼을 때, A의 값을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: (60000/120)/(625000/5000)"
    };
  }
});

// [산술연산] 동화책 14권과 시집 14권이 있습니다. 이 책을 종류에 상관없이 4단 책장에 똑같이 나누...
T11_external.push({
  key:"external_산술연산_306",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동화책 14권과 시집 14권이 있습니다. 이 책을 종류에 상관없이 4단 책장에 똑같이 나누어 꽂으려고 합니다. 책을 책장 한 단에 몇 권씩 꽂아야 합니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: (14+14)/4"
    };
  }
});

// [산술연산] 석형이네 음식점에서는 하루에 달걀을 79개씩 사용한다고 합니다. 한 판에 30개인 달걀 1...
T11_external.push({
  key:"external_산술연산_308",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이네 음식점에서는 하루에 달걀을 79개씩 사용한다고 합니다. 한 판에 30개인 달걀 18판을 사서 6일 동안 사용하였습니다. 남은 달걀을 똑같이 2일동안 사용하려면 하루에 몇 개씩 사용해야 합니까?",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: (30*18-79*6)/2"
    };
  }
});

// [산술연산] 민하의 미술, 음악, 체육 세 과목의 평균 점수는 95점입니다. 여기에 수학 점수를 넣어 ...
T11_external.push({
  key:"external_산술연산_309",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민하의 미술, 음악, 체육 세 과목의 평균 점수는 95점입니다. 여기에 수학 점수를 넣어 네 과목의 평균을 구하니 94점이 되었습니다. 민하의 수학 점수는 몇 점인지 구하시오.",
      answer:"91",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 91, 식: (94*4)-(95*3)"
    };
  }
});

// [산술연산] 딸기 1kg의 값은 5600원입니다. 딸기 (13/4)kg은 얼마입니까?...
T11_external.push({
  key:"external_산술연산_312",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딸기 1kg의 값은 5600원입니다. 딸기 (13/4)kg은 얼마입니까?",
      answer:"16250",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16250, 식: 5000*(13/4)"
    };
  }
});

// [산술연산] 18*3=6*A를 만족하는 어떤 수 A를 구하시오....
T11_external.push({
  key:"external_산술연산_315",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"18*3=6*A를 만족하는 어떤 수 A를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: (18*3)/6"
    };
  }
});

// [산술연산] 민하는 사진 49장을 사진첩에 붙였습니다. 사진첩 한 쪽에 6장씩 붙였더니 사진 한 장이 ...
T11_external.push({
  key:"external_산술연산_320",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민하는 사진 49장을 사진첩에 붙였습니다. 사진첩 한 쪽에 6장씩 붙였더니 사진 한 장이 남았습니다. 은지가 붙인 사진첩은 몇 쪽입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: (49-1)/6"
    };
  }
});

// [산술연산] 무게가 똑같은 비누 8장을 상자에 넣어 무게를 재어 보았더니 650g이었습니다. 여기에 똑...
T11_external.push({
  key:"external_산술연산_322",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"무게가 똑같은 비누 8장을 상자에 넣어 무게를 재어 보았더니 650g이었습니다. 여기에 똑같은 비누 5장을 더 넣어 재어 보았더니 1025g이었습니다. 상자의 무게는 몇 g입니까?",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: 650-(((1025-650)/5)*8)"
    };
  }
});

// [산술연산] 석형이네 반 학생 수는 50명입니다. 이 중에서 2%가 결석하였다면 결석한 학생은 몇 명 ...
T11_external.push({
  key:"external_산술연산_324",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이네 반 학생 수는 50명입니다. 이 중에서 2%가 결석하였다면 결석한 학생은 몇 명 입니까?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1, 식: 50*0.02"
    };
  }
});

// [산술연산] 익준이는 1주일 동안 245쪽의 책을 읽었고, 신혜는 5일 동안 220쪽의 책을 읽었습니다...
T11_external.push({
  key:"external_산술연산_326",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이는 1주일 동안 245쪽의 책을 읽었고, 신혜는 5일 동안 220쪽의 책을 읽었습니다. 매일 똑같은 양을 읽었다면, 두 사람이 하루에 읽은 쪽수의 합은 얼마입니까? (1주일은 7일입니다.)",
      answer:"79",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 79, 식: (245/7)+(220/5)"
    };
  }
});

// [산술연산] A의 7.4배는 44.4입니다. A의 값을 구하시오....
T11_external.push({
  key:"external_산술연산_327",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A의 7.4배는 44.4입니다. A의 값을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: 4.44/7.4"
    };
  }
});

// [산술연산] 선물 한 개를 포장하는데 빨간색 리본 14cm, 파란색 리본 21cm가 필요합니다. 같은 ...
T11_external.push({
  key:"external_산술연산_329",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선물 한 개를 포장하는데 빨간색 리본 14cm, 파란색 리본 21cm가 필요합니다. 같은 선물 18개를 포장하는데 필요한 리본은 모두 몇 cm인가요?",
      answer:"630",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 630, 식: (14+21)*18"
    };
  }
});

// [산술연산] 한 시간에 전체의 (2/15)이 타서 없어지는 양초가 있습니다. 이 양초에 불을 붙이고 얼...
T11_external.push({
  key:"external_산술연산_330",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 시간에 전체의 (2/15)이 타서 없어지는 양초가 있습니다. 이 양초에 불을 붙이고 얼마 뒤에 양초의 남은 부분이 전체의 (1/15)이 되었습니다. 불을 붙인지 몇 시간 후입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: (1-1/15)/(2/15)"
    };
  }
});

// [산술연산] 선빈이의 키는 161.8cm이고 민하의 키는 신혜 보다 3.9cm 작습니다. 송화의 키는 ...
T11_external.push({
  key:"external_산술연산_333",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이의 키는 161.8cm이고 민하의 키는 신혜 보다 3.9cm 작습니다. 송화의 키는 민하보다 7.3cm 크다고 합니다. 송화의 키는 몇 cm인지 구하시오.",
      answer:"165.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 165.2, 식: (161.8-3.9)+7.3"
    };
  }
});

// [산술연산] 340쪽의 동화책을 어제는 62쪽, 오늘은 95쪽을 읽었습니다. 동화책읠 남은 부분은 몇 ...
T11_external.push({
  key:"external_산술연산_334",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"340쪽의 동화책을 어제는 62쪽, 오늘은 95쪽을 읽었습니다. 동화책읠 남은 부분은 몇 쪽입니까?",
      answer:"183",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 183, 식: 340-(62+95)"
    };
  }
});

// [산술연산] 선빈이는 24000원을 저금 하였는데, 그 중 45%를 찾아서 찾은 돈의 60%를 가지고 ...
T11_external.push({
  key:"external_산술연산_339",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 24000원을 저금 하였는데, 그 중 45%를 찾아서 찾은 돈의 60%를 가지고 장난감을 샀습니다. 장난감을 산 돈은 얼마입니까?",
      answer:"6480",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6480, 식: (24000*0.45)*0.6"
    };
  }
});

// [산술연산] 상점에서 한 개에 90원 하는 사탕 36개와 한 개에 300원 하는 빵 15개를 샀습니다....
T11_external.push({
  key:"external_산술연산_341",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상점에서 한 개에 90원 하는 사탕 36개와 한 개에 300원 하는 빵 15개를 샀습니다. 물건값으로 얼마를 내야 합니까?",
      answer:"7740",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7740, 식: 90*36+300*15"
    };
  }
});

// [산술연산] 어머니께서 석형이에게 책값으로 20000원을 주셨습니다. 석형이가 책을 사고 보니 7000...
T11_external.push({
  key:"external_산술연산_342",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어머니께서 석형이에게 책값으로 20000원을 주셨습니다. 석형이가 책을 사고 보니 7000원이 남았습니다. 책값은 어머니께 받은 돈의 몇 %입니까?",
      answer:"65",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 65, 식: (20000-7000)/20000*100"
    };
  }
});

// [산술연산] 주스 (91/8) L를 7개의 병에 똑같이 나누어 담으려고 합니다. 한 병에 몇 L 씩 담...
T11_external.push({
  key:"external_산술연산_344",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주스 (91/8) L를 7개의 병에 똑같이 나누어 담으려고 합니다. 한 병에 몇 L 씩 담으면 되겠습니까?",
      answer:"(13/8)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (13/8), 식: (91/8)/7"
    };
  }
});

// [산술연산] 욕조에 (4/7) 만큼 채우는 물이 60L 들어갔습니다. 이 욕조를 가득 채우려면 몇 L의...
T11_external.push({
  key:"external_산술연산_345",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"욕조에 (4/7) 만큼 채우는 물이 60L 들어갔습니다. 이 욕조를 가득 채우려면 몇 L의 물이 필요합니까?",
      answer:"105",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 105, 식: 60/(4/7)"
    };
  }
});

// [산술연산] 비율이 0.625이고 기준량이 200일 때, 비교하는 양을 구하시오....
T11_external.push({
  key:"external_산술연산_346",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"비율이 0.625이고 기준량이 200일 때, 비교하는 양을 구하시오.",
      answer:"125",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 125, 식: 200*0.625"
    };
  }
});

// [산술연산] 정원이는 월요일에 윗몸일으키기를 20회 하고, 매일 10회씩 늘려가며 일주일 동안 줄넘기를...
T11_external.push({
  key:"external_산술연산_349",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이는 월요일에 윗몸일으키기를 20회 하고, 매일 10회씩 늘려가며 일주일 동안 줄넘기를 하였습니다. 정원이는 하루에 윗몸일으키기를 평균 몇 회씩 한 셈인지 구하시오.",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: (20+30+40+50+60+70+80)/7"
    };
  }
});

// [산술연산] 석형이의 수학 성적은 85점, 사회 성적은 90점, 영어 성적은 75점, 국어 성적은 80...
T11_external.push({
  key:"external_산술연산_350",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이의 수학 성적은 85점, 사회 성적은 90점, 영어 성적은 75점, 국어 성적은 80점입니다. 네 과목의 평균 점수는 몇 점인지 구하시오.",
      answer:"82.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 82.5, 식: (85+90+75+80)/4"
    };
  }
});

// [산술연산] 정원이네 농장의 소와 돼지 한 마리는 각각 하루에 4.5kg, 3.7kg의 사료를 먹는다고...
T11_external.push({
  key:"external_산술연산_352",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이네 농장의 소와 돼지 한 마리는 각각 하루에 4.5kg, 3.7kg의 사료를 먹는다고 합니다. 정원이네 농장엣 소 12마리와 돼지 9마리가 있다면, 하루에 몇 kg의 사료가 필요하겠습니까?",
      answer:"87.3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 87.3, 식: (4.5*12)+(3.7*9)"
    };
  }
});

// [산술연산] 찬곤이네 저금 통장에 지난달과 이번 달에 생긴 이자의 합은 1245원, 차는 123원 입니...
T11_external.push({
  key:"external_산술연산_354",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"찬곤이네 저금 통장에 지난달과 이번 달에 생긴 이자의 합은 1245원, 차는 123원 입니다. 이번 달에 이자가 더 많이 들어왔을 때, 이번 달 이자는 얼마입니까?",
      answer:"684",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 684, 식: (1245+123)/2"
    };
  }
});

// [산술연산] 한 상자에 18개씩 들어 있는 배가 3상자가 있고, 한 상자에 6개씩 들어 있는 망고가 4...
T11_external.push({
  key:"external_산술연산_355",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 상자에 18개씩 들어 있는 배가 3상자가 있고, 한 상자에 6개씩 들어 있는 망고가 4상자가 있습니다. 배는 한 개에 900원, 망고는 한 개에 1200원을 받고 모두 팔았다면 토마토와 참외를 판 금액은 모두 얼마인지 구해 보시오.",
      answer:"77400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 77400, 식: (18*3)*900+(6*4)*1200"
    };
  }
});

// [산술연산] 한 개에 300원하는 초콜릿을 10개 사면 한 개의 값을 할인해 준다고 한다. 초콜릿 10...
T11_external.push({
  key:"external_산술연산_359",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 개에 300원하는 초콜릿을 10개 사면 한 개의 값을 할인해 준다고 한다. 초콜릿 10개를 사면 초콜릿을 한 개에 얼마씩 주고 산 셈이 되는지 구하시오.",
      answer:"270",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 270, 식: ((300*10)-300)/10"
    };
  }
});

// [산술연산] 문구접에서 수첩과 지우개를 샀습니다. 수첩은 850원, 지우개는 650원인데 11명의 어린...
T11_external.push({
  key:"external_산술연산_360",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"문구접에서 수첩과 지우개를 샀습니다. 수첩은 850원, 지우개는 650원인데 11명의 어린이에게 수첩과 지우개를 각각 1개씩 주었다면 돈은 모두 얼마가 들었는지 구하시오.",
      answer:"16500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16500, 식: 850*11+650*11"
    };
  }
});

// [산술연산] 익준이네 가족은 하루에 5.6L의 물을 마신다고 합니다. 매일 같은 양의 물을 마신다면, ...
T11_external.push({
  key:"external_산술연산_361",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이네 가족은 하루에 5.6L의 물을 마신다고 합니다. 매일 같은 양의 물을 마신다면, 1년 동안에는 몇 L의 물을 마시겠습니까? (단, 1년은 365일입니다.)",
      answer:"2044",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2044, 식: 5.6*365"
    };
  }
});

// [산술연산] 신혜가 가지고 있는 끈의 길이는 11.267m입니다. 민하가 갖고 있는 끈의 길이는 신혜가...
T11_external.push({
  key:"external_산술연산_362",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜가 가지고 있는 끈의 길이는 11.267m입니다. 민하가 갖고 있는 끈의 길이는 신혜가 갖고 있는 것보다 0.357m 짧다면 민하가 갖고 있는 끈의 길이는 몇 m 인지 구하시오.",
      answer:"10.91",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10.91, 식: 11.267-0.357"
    };
  }
});

// [산술연산] 어느 놀이공원의 입장료가 어른은 1500원, 어린이는 900원입니다. 지난 일요일에 놀이공...
T11_external.push({
  key:"external_산술연산_363",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 놀이공원의 입장료가 어른은 1500원, 어린이는 900원입니다. 지난 일요일에 놀이공원에 입장한 사람은 어른이 341명, 어린이가 506명이었습니다. 오늘은 어른 312명과 어린이 몇 명이 입장하였는데, 입장료 수입이 54300원이 줄었다고 합니다. 오늘 입장한 어린이는 몇 명입니까?",
      answer:"494",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 494, 식: 506-(54300-(341-312)*1500)/900"
    };
  }
});

// [산술연산] 단축 마라톤 대회에 참가한 선수는 250명입니다. 그중에서 218명이 완주하였습니다. 완주...
T11_external.push({
  key:"external_산술연산_364",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"단축 마라톤 대회에 참가한 선수는 250명입니다. 그중에서 218명이 완주하였습니다. 완주한 선수는 참가한 선수의 몇 %입니까?",
      answer:"87.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 87.2, 식: (218/250)*100"
    };
  }
});

// [산술연산] 밀가루 85kg을 하루에 3.4kg 씩 쓰면, 모두 며칠 동안 쓸 수 있습니까?...
T11_external.push({
  key:"external_산술연산_366",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밀가루 85kg을 하루에 3.4kg 씩 쓰면, 모두 며칠 동안 쓸 수 있습니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: 85/3.4"
    };
  }
});

// [산술연산] 신혜의 몸무게는 30kg입니다. 삼촌의 몸무게는 신혜의 몸무게의 (17/6)배라고 합니다....
T11_external.push({
  key:"external_산술연산_367",
  unitId:"m1-1-1-III-5",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신혜의 몸무게는 30kg입니다. 삼촌의 몸무게는 신혜의 몸무게의 (17/6)배라고 합니다. 삼촌의 몸무게는 몇 kg입니까?",
      answer:"85",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 85, 식: 30*(17/6)"
    };
  }
});

// [산술연산] 가로가 20cm이고 세로는 가로의 0.4cm인 직사각형이 있습니다. 이 직사각형의 넓이를 ...
T11_external.push({
  key:"external_산술연산_371",
  unitId:"m1-1-1-II-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로가 20cm이고 세로는 가로의 0.4cm인 직사각형이 있습니다. 이 직사각형의 넓이를 구하시오.",
      answer:"160",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 160, 식: (20*0.4)*20"
    };
  }
});

// [산술연산] 송화의 국어와 사회 두 과목의 평균 점수는 77점이고, 수학은 92점입니다. 세 과목의 평...
T11_external.push({
  key:"external_산술연산_373",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화의 국어와 사회 두 과목의 평균 점수는 77점이고, 수학은 92점입니다. 세 과목의 평균 점수는 몇 점입니까?",
      answer:"82",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 82, 식: (77*2+92)/3"
    };
  }
});

// [산술연산] 강당에 의자를 1600개 놓아야 합니다. 지금까지 빨간 의자는 112개씩 8줄, 파란 의자...
T11_external.push({
  key:"external_산술연산_374",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["산술연산","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"강당에 의자를 1600개 놓아야 합니다. 지금까지 빨간 의자는 112개씩 8줄, 파란 의자는 109개씩 5줄 놓았습니다. 앞으로 몇 개를 더 놓아야 합니까?",
      answer:"159",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 159, 식: 1600-(112*8+109*5)"
    };
  }
});

// [순서정하기] 과수원의 사과나무들 중에서 사과가 3번째로 많이 열린 나무엔 28개가 열려있고 5번째로 많...
T11_external.push({
  key:"external_순서정하기_376",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과수원의 사과나무들 중에서 사과가 3번째로 많이 열린 나무엔 28개가 열려있고 5번째로 많이 열린 나무엔 26개가 열려있습니다. 사과가 4번째로 많이 열린 나무에는 몇 개가 열려있습니까?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [순서정하기] 100m 달리기 대회에서 규현, 준형, 민솔, 강현이 순으로 기록이 짧았습니다. 2번째로 ...
T11_external.push({
  key:"external_순서정하기_377",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100m 달리기 대회에서 규현, 준형, 민솔, 강현이 순으로 기록이 짧았습니다. 2번째로 빠른 사람은 누구입니까?",
      answer:"준형",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 준형, 식: none"
    };
  }
});

// [순서정하기] 키가 큰 사람 순서대로 18명이 한 줄로 서 있습니다. 지영이가 앞에서부터 6번째에 서 있...
T11_external.push({
  key:"external_순서정하기_382",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"키가 큰 사람 순서대로 18명이 한 줄로 서 있습니다. 지영이가 앞에서부터 6번째에 서 있습니다. 키가 작은 사람부터 순서대로 다시 줄을 서면 지영이는 앞에서부터 몇 번째에 서게 됩니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 진열대 위에 15개의 그릇을 일렬로 진열하려고 합니다. 왼쪽에서 4번째에 있는 그릇은 오른...
T11_external.push({
  key:"external_순서정하기_386",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진열대 위에 15개의 그릇을 일렬로 진열하려고 합니다. 왼쪽에서 4번째에 있는 그릇은 오른쪽에서 몇 번째에 위치해있습니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [순서정하기] 갓 나온 빵을 사기위해 빵집 앞에 12명이 줄을 서있습니다. 아연이의 앞에 6명이 있을때,...
T11_external.push({
  key:"external_순서정하기_388",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"갓 나온 빵을 사기위해 빵집 앞에 12명이 줄을 서있습니다. 아연이의 앞에 6명이 있을때, 아연이는 뒤에서 몇 번째에 서있습니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [순서정하기] 신형 게임기를 사기 위해 선착순으로 22명이 줄을 섰습니다. 선우는 앞에서 8번째, 현주는...
T11_external.push({
  key:"external_순서정하기_389",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신형 게임기를 사기 위해 선착순으로 22명이 줄을 섰습니다. 선우는 앞에서 8번째, 현주는 뒤에서 3번째 일때, 선우와 현주 사이네는 몇 명이 서있습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 새로 출시된 게임기를 사기 위해 선착순으로 18명이 줄을 섰습니다. 현준이의 뒤에 9명이 ...
T11_external.push({
  key:"external_순서정하기_392",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새로 출시된 게임기를 사기 위해 선착순으로 18명이 줄을 섰습니다. 현준이의 뒤에 9명이 있을때, 현준이는 앞에서 몇 번째에 서있습니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [순서정하기] 예은이네 반 학생 29명이 시력검사를 받기위해 줄을 서있습니다. 예은이의 앞에 11명이 있...
T11_external.push({
  key:"external_순서정하기_395",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예은이네 반 학생 29명이 시력검사를 받기위해 줄을 서있습니다. 예은이의 앞에 11명이 있을 때, 예은이의 뒤에는 몇 명이 있습니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [순서정하기] 일찍 도착한 사람 순서대로 24명이 한 줄로 서 있습니다. 자영이가 뒤에서부터 9번째에 서...
T11_external.push({
  key:"external_순서정하기_396",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일찍 도착한 사람 순서대로 24명이 한 줄로 서 있습니다. 자영이가 뒤에서부터 9번째에 서 있습니다. 일찍 도착한 사람부터 순서대로 다시 줄을 서면 자영이는 앞에서부터 몇 번째에 서게 됩니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [순서정하기] 100m 달리기 대회에서 희진이는 15초, 지윤이는 20초, 명희는 18초, 현아는 21초...
T11_external.push({
  key:"external_순서정하기_398",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100m 달리기 대회에서 희진이는 15초, 지윤이는 20초, 명희는 18초, 현아는 21초를 기록했습니다. 2번째로 빠른 사람의 기록은 무엇입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [순서정하기] 출석번호가 작은 사람이 앞에서부터 줄을 섰습니다. 출석번호가 2, 14, 5, 8, 12,...
T11_external.push({
  key:"external_순서정하기_401",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"출석번호가 작은 사람이 앞에서부터 줄을 섰습니다. 출석번호가 2, 14, 5, 8, 12, 10, 15번인 학생들 중, 앞에서 3번째로 줄을 선 사람의 번호는 무엇입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [순서정하기] 진희가 선호하는 외식메뉴는 한식, 양식, 중식, 일식 순입니다. 진희가 두번째로 선호하는 ...
T11_external.push({
  key:"external_순서정하기_414",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진희가 선호하는 외식메뉴는 한식, 양식, 중식, 일식 순입니다. 진희가 두번째로 선호하는 외식메뉴는 무엇입니까?",
      answer:"양식",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 양식, 식: none"
    };
  }
});

// [순서정하기] 올해 축구시즌에서 골을 가장 많이 넣은 선수는 18개, 3번째로 많이 넣은 선수는 16개를...
T11_external.push({
  key:"external_순서정하기_415",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 축구시즌에서 골을 가장 많이 넣은 선수는 18개, 3번째로 많이 넣은 선수는 16개를 넣었습니다. 2번째로 골을 많이 넣은 선수는 몇 개의 골을 넣었습니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [순서정하기] 50m달리기의 스타트가 1번째로 빠른 사람은 선아이고 3번째로 빠른 사람은 다정이입니다. ...
T11_external.push({
  key:"external_순서정하기_416",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"50m달리기의 스타트가 1번째로 빠른 사람은 선아이고 3번째로 빠른 사람은 다정이입니다. 신영이는 선아보다 스타트가 느렸지만 다정이보다 빨랐을때, 신영이는 몇 번째로 스타트가 빠릅니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [순서정하기] 선착순으로 줄을 섰을 때 현지는 3번째로 줄을 섰고, 민주는 뒤에서 2번째로 줄을 섰습니다...
T11_external.push({
  key:"external_순서정하기_417",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선착순으로 줄을 섰을 때 현지는 3번째로 줄을 섰고, 민주는 뒤에서 2번째로 줄을 섰습니다. 현지와 민주 사이에 18명의 사람들이 있을 때, 줄을 선 사람들은 총 몇 명 입니까?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [순서정하기] 택시기사님이 이번 달에 승객을 가장 많이 태운 날엔 50명을 태웠습니다. 3번째로 많이 태...
T11_external.push({
  key:"external_순서정하기_418",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"택시기사님이 이번 달에 승객을 가장 많이 태운 날엔 50명을 태웠습니다. 3번째로 많이 태운날엔 48명을 태웠습니다. 2번째로 많이 태운날엔 몇 명을 태웠습니까?",
      answer:"49",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 49, 식: none"
    };
  }
});

// [순서정하기] 신형핸드폰 사전예약을 진행하고있습니다. 지운이보다 15명이 먼저 예약했고 18명이 늦게 예...
T11_external.push({
  key:"external_순서정하기_422",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신형핸드폰 사전예약을 진행하고있습니다. 지운이보다 15명이 먼저 예약했고 18명이 늦게 예약했다면, 핸드폰 사전예약을 한 사람은 모두 몇 명입니까?",
      answer:"34",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 34, 식: none"
    };
  }
});

// [순서정하기] 신체검사를 받기위해 학생들이 출석번호 순서대로 줄을 서있습니다. 출석번호가 3번과 20번인...
T11_external.push({
  key:"external_순서정하기_423",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신체검사를 받기위해 학생들이 출석번호 순서대로 줄을 서있습니다. 출석번호가 3번과 20번인 학생 사이에는 몇 명의 학생이 있습니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [순서정하기] 올해 도서관에서 11번째로 책을 많이 빌린 사람은 진호, 13번째로 많이 빌린 사람은 서원...
T11_external.push({
  key:"external_순서정하기_424",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 도서관에서 11번째로 책을 많이 빌린 사람은 진호, 13번째로 많이 빌린 사람은 서원이입니다. 효은이는 진호보다 적게빌렸지만 서원이보다 많이 빌렸을때, 효은이는 몇 번째로 책을 많이 빌렸습니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [순서정하기] 새학기에 모두 자기소개를 하려고 합니다. 재민이보다 13명이 먼저 자기소개를 하고 14명이...
T11_external.push({
  key:"external_순서정하기_429",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새학기에 모두 자기소개를 하려고 합니다. 재민이보다 13명이 먼저 자기소개를 하고 14명이 나중에 했다면, 재민이네 반은 모두 몇 명입니까?",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [순서정하기] 텃밭에서 소민이는 배추 15포기를 뽑았고 보라는 17포기를 뽑았습니다. 하영이는 소민이보다...
T11_external.push({
  key:"external_순서정하기_435",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"텃밭에서 소민이는 배추 15포기를 뽑았고 보라는 17포기를 뽑았습니다. 하영이는 소민이보다 많이 뽑았지만 보라보다 적게 뽑았을 때, 하영이가 뽑은 배추는 몇포기 입니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [순서정하기] 민수는 목욕탕에서 위로부터 2번째, 아래로부터 3번째, 왼쪽으로부터 5번째에 위치한 옷장을...
T11_external.push({
  key:"external_순서정하기_439",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민수는 목욕탕에서 위로부터 2번째, 아래로부터 3번째, 왼쪽으로부터 5번째에 위치한 옷장을 이용했습니다. 총 40개의 옷장이 있을 때, 민수가 사용한 옷장은 오른쪽으로부터 몇 번째에 위치하였습니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [순서정하기] 올해 강수량이 높은 달은 11, 4 ,10, 12, 3, 5, 10, 9, 8, 7, 6,...
T11_external.push({
  key:"external_순서정하기_445",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 강수량이 높은 달은 11, 4 ,10, 12, 3, 5, 10, 9, 8, 7, 6, 1, 2월 순입니다. 열번째로 강수량이 높은 달은 몇월입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [순서정하기] 점심시간의 급식실 앞에 학생들이 줄을 섰습니다. 앞에서 7번째에 서있는 학생과 뒤에서 10...
T11_external.push({
  key:"external_순서정하기_446",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"점심시간의 급식실 앞에 학생들이 줄을 섰습니다. 앞에서 7번째에 서있는 학생과 뒤에서 10번째에 서있는 학생 사이에 11명이 있을때, 급식실 앞에 줄서있는 학생은 모두 몇 명입니까?",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [순서정하기] 피아노연주회에서 지원이는 12번째로 공연을 하고 은서는 14번째로 연주를 합니다. 하은이는...
T11_external.push({
  key:"external_순서정하기_448",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"피아노연주회에서 지원이는 12번째로 공연을 하고 은서는 14번째로 연주를 합니다. 하은이는 지원이보다 나중에 연주를 하지만 은서보다 먼저 공연을 할 때, 하은이는 몇 번째로 연주를 합니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 연수네 반 24명이 체육시간에 뜀틀을 하기 위해 줄을 섰습니다. 연수보다 10명이 나중에 ...
T11_external.push({
  key:"external_순서정하기_449",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"연수네 반 24명이 체육시간에 뜀틀을 하기 위해 줄을 섰습니다. 연수보다 10명이 나중에 뜀틀을 뛴다면, 연서는 몇 번째로 뜀틀을 뜁니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [순서정하기] 헬스장에서 팔굽혀펴기를 했습니다. 윤호는 13개를 했고 성민이는 11개를 했습니다. 정우는...
T11_external.push({
  key:"external_순서정하기_452",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"헬스장에서 팔굽혀펴기를 했습니다. 윤호는 13개를 했고 성민이는 11개를 했습니다. 정우는 윤호보다 적게 했지만 성민이보다 많이 했을때, 정우는 팔굽혀펴기를 몇 개했습니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [순서정하기] 올해 마트에서 매출이 높았던 달은 5, 8, 9, 10, 7, 2, 12, 4, 11, 3...
T11_external.push({
  key:"external_순서정하기_455",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 마트에서 매출이 높았던 달은 5, 8, 9, 10, 7, 2, 12, 4, 11, 3, 6, 1월 순입니다. 매출이 아홉번째로 높았던 달은 몇월입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 새학기에 만난 29명의 학생들이 모두 자기소개를 하려고 합니다. 재현이보다 14명이 나중에...
T11_external.push({
  key:"external_순서정하기_457",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새학기에 만난 29명의 학생들이 모두 자기소개를 하려고 합니다. 재현이보다 14명이 나중에 자기소개를 했다면, 재민이는 몇 번째로 자기소개를 했습니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [순서정하기] 번호가 적힌 책들이 번호 순서대로 책꽂이에 꽂혀있습니다. 12번책과 26번책 사이에는 몇 ...
T11_external.push({
  key:"external_순서정하기_460",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"번호가 적힌 책들이 번호 순서대로 책꽂이에 꽂혀있습니다. 12번책과 26번책 사이에는 몇 개의 책이 꽂혀있습니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 정원에 장미 15송이, 튤립 17송이가 심어져있습니다. 해바라기는 장미보다 많이 심어져있지...
T11_external.push({
  key:"external_순서정하기_462",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원에 장미 15송이, 튤립 17송이가 심어져있습니다. 해바라기는 장미보다 많이 심어져있지만 튤립보다 적게 심어져있을때, 정원에 심어진 해바라기는 몇송이입니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [순서정하기] 신형핸드폰을 구매한 사람 60명의 사람들이 순서대로 경품추첨권을 받았습니다. 민승이보다 3...
T11_external.push({
  key:"external_순서정하기_465",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신형핸드폰을 구매한 사람 60명의 사람들이 순서대로 경품추첨권을 받았습니다. 민승이보다 34명이 먼저 구매했을때, 민승이는 뒤에서 몇 번째로 경품추첨권을 받았습니까?",
      answer:"26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 26, 식: none"
    };
  }
});

// [순서정하기] 올해 치과예약이 가장 많았던 달은 9, 3, 5, 7, 11, 8, 2, 12, 4, 1,...
T11_external.push({
  key:"external_순서정하기_468",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 치과예약이 가장 많았던 달은 9, 3, 5, 7, 11, 8, 2, 12, 4, 1, 10, 6월 순입니다. 일곱번째로 예약이 많았던 달은 몇월입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [순서정하기] 과수원의 감나무들 중에서 감이 2번째로 많이 열린 나무엔 25개가 열려있고, 4번째로 많이...
T11_external.push({
  key:"external_순서정하기_472",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과수원의 감나무들 중에서 감이 2번째로 많이 열린 나무엔 25개가 열려있고, 4번째로 많이 열린 나무엔 23개가 열려있습니다. 감이 3번째로 많이 열린 나무엔 몇 개가 열려있습니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [순서정하기] 오늘 도서관에서 책을 빌린 사람은 24명입니다. 3번째로 책을 빌린 사람과 24번째로 빌린...
T11_external.push({
  key:"external_순서정하기_473",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 도서관에서 책을 빌린 사람은 24명입니다. 3번째로 책을 빌린 사람과 24번째로 빌린 사람 사이에는 몇 명의 사람들이 책을 빌려갔습니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [순서정하기] 30명의 학생들이 신체검사를 받기위해 일렬로 줄을 섰습니다. 1번째에 선 학생과 뒤에서 7...
T11_external.push({
  key:"external_순서정하기_474",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"30명의 학생들이 신체검사를 받기위해 일렬로 줄을 섰습니다. 1번째에 선 학생과 뒤에서 7번째에 서있는 학생 사이에는 몇 명이 있습니까?",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [순서정하기] 예방접종을 맞기 위해 사람들이 대기표를 받고 기다리고있습니다. 수빈이의 앞번호는 32번 뒷...
T11_external.push({
  key:"external_순서정하기_479",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예방접종을 맞기 위해 사람들이 대기표를 받고 기다리고있습니다. 수빈이의 앞번호는 32번 뒷번호는 34번일때, 수빈이는 몇 번째로 예방접종을 맞을 수 있습니까?",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: none"
    };
  }
});

// [순서정하기] 예방접종을 맞기위해 사람들이 순서대로 대기표를 받았습니다. 은희는 14번이고 지수는 27번...
T11_external.push({
  key:"external_순서정하기_483",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예방접종을 맞기위해 사람들이 순서대로 대기표를 받았습니다. 은희는 14번이고 지수는 27번일때, 은희보다 늦게 예방접종을 맞고 지수보다 먼저 맞는 사람은 몇 명입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [순서정하기] 번호가 적힌 컵을 번호 순서대로 왼쪽에서부터 나열하려고합니다. 컵의 번호가 12, 15, ...
T11_external.push({
  key:"external_순서정하기_489",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"번호가 적힌 컵을 번호 순서대로 왼쪽에서부터 나열하려고합니다. 컵의 번호가 12, 15, 13, 17, 14, 16번일때, 왼쪽에서 4번째에 나열된 컵은 몇 번컵 입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [순서정하기] 체육시간에 윗몸일으키기를 많이 한 학생들은 30, 28, 27, 25, 22, 20, 18...
T11_external.push({
  key:"external_순서정하기_490",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육시간에 윗몸일으키기를 많이 한 학생들은 30, 28, 27, 25, 22, 20, 18개 순으로 많이 했습니다. 6번째로 윗몸일으키기를 많이 한 학생은 몇 개를 했습니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [순서정하기] 27명의 학생들이 음악시간에 노래를 부르려고 합니다. 소영이는 4번째로 노래를 부르고 성현...
T11_external.push({
  key:"external_순서정하기_494",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"27명의 학생들이 음악시간에 노래를 부르려고 합니다. 소영이는 4번째로 노래를 부르고 성현이는 마지막으로 노래를 부르기로 했을때, 소영이와 성현이 사이에는 몇 명의 학생들이 노래를 불러야합니까?",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [순서정하기] 선미는 색연필에 적힌 번호가 8. 11, 13, 9, 10, 12로 번호가 큰 순서대로 나...
T11_external.push({
  key:"external_순서정하기_498",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선미는 색연필에 적힌 번호가 8. 11, 13, 9, 10, 12로 번호가 큰 순서대로 나열하려고 합니다. 3번째로 나열되는 색연필은 몇 번입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 한 묶음에 사과가 많이 들어있는 순서대로 묶음들을 나열하려고 합니다. 각 묶음에 3, 10...
T11_external.push({
  key:"external_순서정하기_504",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 묶음에 사과가 많이 들어있는 순서대로 묶음들을 나열하려고 합니다. 각 묶음에 3, 10, 8, 12, 6개의 사과가 들어있을때, 2번째에 나열된 묶음에는 사과가 몇 개 들어있습니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [순서정하기] 번호가 쓰여 있는 만화책을 번호 순서대로 책꽂이에 꽂으려고 합니다. 번호는 하나씩 커지고,...
T11_external.push({
  key:"external_순서정하기_509",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"번호가 쓰여 있는 만화책을 번호 순서대로 책꽂이에 꽂으려고 합니다. 번호는 하나씩 커지고, 어떤 만화책의 앞에는 22번이 뒤에는 24번이 있다면 이 만화책의 번호는 몇 번입니까?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [순서정하기] 동아리에 10번째로 가입한 사람은 주원이이고, 12번째로 가입한 사람은 고은이입니다. 지영...
T11_external.push({
  key:"external_순서정하기_512",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동아리에 10번째로 가입한 사람은 주원이이고, 12번째로 가입한 사람은 고은이입니다. 지영이는 주원이보다 늦게 가입했지만 고은이보다 일찍 가입했다면, 지영이는 몇 번째로 동아리에 가입했습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 버스정류장에 13명의 사람이 줄을 서있습니다. 승민이의 앞에 5명의 사람이 있을때, 승민이...
T11_external.push({
  key:"external_순서정하기_516",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"버스정류장에 13명의 사람이 줄을 서있습니다. 승민이의 앞에 5명의 사람이 있을때, 승민이 뒤에는 몇 명이 있습니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [순서정하기] 오늘 도서관에 25번째로 온 사람은 유진이, 27번째로 온 사람은 준희입니다. 연지는 유진...
T11_external.push({
  key:"external_순서정하기_517",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 도서관에 25번째로 온 사람은 유진이, 27번째로 온 사람은 준희입니다. 연지는 유진이보다 늦게 왔지만 준희보다 일찍 왔을때, 연지는 몇 번째로 도서관에 왔습니까?",
      answer:"26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 26, 식: none"
    };
  }
});

// [순서정하기] 과수원에서 수확한 복숭아 158개를 일렬로 나열된 3개의 바구니에 담으려고 합니다. 첫번째...
T11_external.push({
  key:"external_순서정하기_518",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과수원에서 수확한 복숭아 158개를 일렬로 나열된 3개의 바구니에 담으려고 합니다. 첫번째바구니에 53개, 세번째바구니에 55개가 담겨있다면, 두번째바구니에는 몇 개의 오렌지가 담겨있습니까?",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: none"
    };
  }
});

// [순서정하기] 50명이 신형핸드폰 사전예약을 했습니다. 지현이보다 17명이 먼저 예약했을때, 지현이는 뒤...
T11_external.push({
  key:"external_순서정하기_520",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"50명이 신형핸드폰 사전예약을 했습니다. 지현이보다 17명이 먼저 예약했을때, 지현이는 뒤에서 몇 번째로 예약했습니까?",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: none"
    };
  }
});

// [순서정하기] 준석이네 반 28명이 키가 큰 순서대로 줄을 섰습니다. 준석이는 반에서 7번째로 키가 클때...
T11_external.push({
  key:"external_순서정하기_526",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준석이네 반 28명이 키가 큰 순서대로 줄을 섰습니다. 준석이는 반에서 7번째로 키가 클때, 뒤에서 몇 번째에 서게됩니까?",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [순서정하기] 은우는 클리어파일의 번호가 12, 16, 13, 17, 15, 11, 14 로 아무렇게나 ...
T11_external.push({
  key:"external_순서정하기_529",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은우는 클리어파일의 번호가 12, 16, 13, 17, 15, 11, 14 로 아무렇게나 꽂혀있는 클리어파일을 큰 번호부터 순서대로 꽂으려고 합니다. 바르게 꽂았을 때, 2번째에 꽂혀있는 책의 번호는 몇 입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [순서정하기] 현우네 반 학생 33명이 건강검진을 받기위해 줄을 서있습니다. 현우의 뒤에 7명이 있을 때...
T11_external.push({
  key:"external_순서정하기_531",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현우네 반 학생 33명이 건강검진을 받기위해 줄을 서있습니다. 현우의 뒤에 7명이 있을 때 현우의 앞에는 몇 명이 있습니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [순서정하기] 우유를 용량이 큰 순서대로 나열했더니 500, 350, 250, 200, 150, 100,...
T11_external.push({
  key:"external_순서정하기_534",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우유를 용량이 큰 순서대로 나열했더니 500, 350, 250, 200, 150, 100, 50 mL우유 순으로 진열됐습니다. 4번째로 큰 우유의 용량은 얼마입니까?",
      answer:"200",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 200, 식: none"
    };
  }
});

// [순서정하기] 은행업무를 보기위해 사람들이 대기표를 받고 기다리고있습니다. 수빈이의 앞번호는 13번 뒷번...
T11_external.push({
  key:"external_순서정하기_539",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은행업무를 보기위해 사람들이 대기표를 받고 기다리고있습니다. 수빈이의 앞번호는 13번 뒷번호는 15번일때, 수빈이는 몇 번째로 은행업무를 볼 수 있습니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [순서정하기] 피겨대회에서 민영이는 10등을 했고 혜정이는 12등을 했습니다. 민아는 민영이보다 점수가 ...
T11_external.push({
  key:"external_순서정하기_541",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"피겨대회에서 민영이는 10등을 했고 혜정이는 12등을 했습니다. 민아는 민영이보다 점수가 낮지만 혜정이보단 점수가 높다면, 민아는 몇 등입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 신형 게임기를 사기 위해 선착순으로 줄을 섰습니다. 6번째로 줄을 선 사람과 마지막으로 줄...
T11_external.push({
  key:"external_순서정하기_544",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신형 게임기를 사기 위해 선착순으로 줄을 섰습니다. 6번째로 줄을 선 사람과 마지막으로 줄을 선 사람 사이에 13명이 있다면, 줄을 선 사람은 모두 몇 명입니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [순서정하기] 농구경기장 입장권의 번호가 11, 17, 13, 15, 12, 16, 14 번으로, 번호순...
T11_external.push({
  key:"external_순서정하기_548",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"농구경기장 입장권의 번호가 11, 17, 13, 15, 12, 16, 14 번으로, 번호순서대로 줄을서서 입장할 때, 5번째로 줄을 서있는 사람의 입장권은 몇 번입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 신형핸드폰 사전판매을 번호표 순서대로 진행하고있습니다. 슬아의 앞사람의 번호는 23번이고 ...
T11_external.push({
  key:"external_순서정하기_549",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신형핸드폰 사전판매을 번호표 순서대로 진행하고있습니다. 슬아의 앞사람의 번호는 23번이고 슬아의 뒷사람의 번호가 25번일때, 슬아는 몇 번째로 휴대폰을 살수있습니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [순서정하기] 치과치료를 받기위해 사람들이 순차적으로 번호표를 받고 기다리고있습니다. 대기번호 11번과 ...
T11_external.push({
  key:"external_순서정하기_550",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"치과치료를 받기위해 사람들이 순차적으로 번호표를 받고 기다리고있습니다. 대기번호 11번과 19번 사이에는 몇 명이 번호표를 받았습니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [순서정하기] 지우는 8층에 살고있고, 채연이는 위에서 11번째에 살고있습니다. 채연이의 집이 지우의집 ...
T11_external.push({
  key:"external_순서정하기_555",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지우는 8층에 살고있고, 채연이는 위에서 11번째에 살고있습니다. 채연이의 집이 지우의집 바로 아래층일때, 아파트는 몇 층입니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [순서정하기] 서점에서 개최된 작가 사인회에서 사인을 받기위해 52명이 줄을 서있습니다. 은율이는 뒤에서...
T11_external.push({
  key:"external_순서정하기_557",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서점에서 개최된 작가 사인회에서 사인을 받기위해 52명이 줄을 서있습니다. 은율이는 뒤에서 28번째일때, 은율이의 앞에는 몇 명이 있습니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [순서정하기] 예솔이는 왼쪽에서 3번째, 뒤에서 4번째, 앞에서 2번째에 위치한 의자에 앉아있습니다. 각...
T11_external.push({
  key:"external_순서정하기_560",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예솔이는 왼쪽에서 3번째, 뒤에서 4번째, 앞에서 2번째에 위치한 의자에 앉아있습니다. 각 줄마다 의자의 수는 같고 총 40개의 의자가 있을 때, 예솔이가 앉은 의자는 오른쪽에서 몇 번째에 위치하였습니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [순서정하기] 인혜네 반 학생들이 키 순서로 줄을 섰을 때 인혜의 앞에는 12명, 뒤에는 15명의 학생들...
T11_external.push({
  key:"external_순서정하기_561",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인혜네 반 학생들이 키 순서로 줄을 섰을 때 인혜의 앞에는 12명, 뒤에는 15명의 학생들이 있었습니다. 인혜네 반은 총 몇 명입니까?",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [순서정하기] 마카롱가게는 이번 달 17일에 20세트를 예약받았고 19일에 22세트를 예약받았습니다. 오...
T11_external.push({
  key:"external_순서정하기_562",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"마카롱가게는 이번 달 17일에 20세트를 예약받았고 19일에 22세트를 예약받았습니다. 오늘은 17일보다 예약을 많이 받았지만 19일보다 적게 받았을 때, 총 몇 세트를 예약받았습니까?",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [순서정하기] 신발가게의 신발을 사이즈가 큰 순서대로 나열했을때 250, 245, 240, 235, 23...
T11_external.push({
  key:"external_순서정하기_566",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신발가게의 신발을 사이즈가 큰 순서대로 나열했을때 250, 245, 240, 235, 230, 225순으로 나열됐습니다. 2번째로 큰 사이즈는 몇입니까?",
      answer:"230",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 230, 식: none"
    };
  }
});

// [순서정하기] 과일가게에 들어온 과일상자들을 무거운 순서대로 왼쪽에서부터 나열하려고 합니다. 10, 14...
T11_external.push({
  key:"external_순서정하기_569",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과일가게에 들어온 과일상자들을 무거운 순서대로 왼쪽에서부터 나열하려고 합니다. 10, 14, 12, 8, 15, 20 kg의 과일상자들이 있을 때, 왼쪽에서 2번째에 있는 과일상자는 몇kg입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [순서정하기] 급식을 먹으려는 학생들이 줄을 서있습니다. 앞에서 1번째에 서있는 학생과 뒤에서 2번째에 ...
T11_external.push({
  key:"external_순서정하기_575",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"급식을 먹으려는 학생들이 줄을 서있습니다. 앞에서 1번째에 서있는 학생과 뒤에서 2번째에 서있는 학생 사이에 24명이 있을때, 줄을 선 학생은 모두 몇 명입니까?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [순서정하기] 한정판 레고를 사기위한 사람들이 선착순으로 줄을 서서 기다리고 있습니다. 승민이는 7번째로...
T11_external.push({
  key:"external_순서정하기_577",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한정판 레고를 사기위한 사람들이 선착순으로 줄을 서서 기다리고 있습니다. 승민이는 7번째로 왔고 윤우는 25번째로 왔을때, 승민이와 윤우사이에 서있는 사람은 모두 몇 명입니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [순서정하기] 한정판 레고를 사기위해 가게 앞에 12명이 줄을 서있습니다. 도준이는 뒤에서 3번째일때, ...
T11_external.push({
  key:"external_순서정하기_578",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한정판 레고를 사기위해 가게 앞에 12명이 줄을 서있습니다. 도준이는 뒤에서 3번째일때, 도준이의 앞에는 몇 명의 사람들이 있습니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [순서정하기] 유명가수의 사인을 받기 위해 팬들 60명이 줄을 서있습니다. 대현이의 뒤에 31명이 있다면...
T11_external.push({
  key:"external_순서정하기_580",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유명가수의 사인을 받기 위해 팬들 60명이 줄을 서있습니다. 대현이의 뒤에 31명이 있다면 대현이의 앞에는 몇 명의 팬들이 있습니까?",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [순서정하기] 전교회장선거에서 민석이는 35표 정훈이는 33표를 받았습니다. 호석이는 민석이보다 적은 표...
T11_external.push({
  key:"external_순서정하기_581",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전교회장선거에서 민석이는 35표 정훈이는 33표를 받았습니다. 호석이는 민석이보다 적은 표를 받았지만 정훈이보다 많이 받았을때, 호석이는 몇표를 받았습니까?",
      answer:"34",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 34, 식: none"
    };
  }
});

// [순서정하기] 민경이는 콘서트장에 입장하기 위해 앞에서 7번째에 서있고, 소연이는 뒤에서부터 13번째에 ...
T11_external.push({
  key:"external_순서정하기_583",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민경이는 콘서트장에 입장하기 위해 앞에서 7번째에 서있고, 소연이는 뒤에서부터 13번째에 서있습니다. 민경이와 소연이 사이에 35명의 사람들이 있을 때, 콘서트장에 입장하기 위해 서있는 사람들은 총 몇 명입니까?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: none"
    };
  }
});

// [순서정하기] 체력측정시간에 팔굽혀펴기를 많이 한 학생들은 17, 15, 13, 11, 9, 8개 순으로...
T11_external.push({
  key:"external_순서정하기_584",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체력측정시간에 팔굽혀펴기를 많이 한 학생들은 17, 15, 13, 11, 9, 8개 순으로 했습니다. 5번째로 팔굽혀펴기를 많이 한 학생은 몇 개를 했습니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [순서정하기] 번호가 적힌 컵을 번호 순서대로 왼쪽에서부터 나열하려고합니다. 컵의 번호가 12, 15, ...
T11_external.push({
  key:"external_순서정하기_586",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"번호가 적힌 컵을 번호 순서대로 왼쪽에서부터 나열하려고합니다. 컵의 번호가 12, 15, 13, 17, 14, 16번일때, 오른쪽에서 2번째에 나열된 컵은 몇 번컵 입니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [순서정하기] 영화관의 맨 앞줄에 관객들 16명이 나란히 앉아있습니다. 왼쪽에서 7번째에 앉은 관객은, ...
T11_external.push({
  key:"external_순서정하기_589",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영화관의 맨 앞줄에 관객들 16명이 나란히 앉아있습니다. 왼쪽에서 7번째에 앉은 관객은, 오른쪽에서 몇 번째 자리에 앉아있습니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [순서정하기] 출석번호가 작은 사람이 앞에서부터 줄을 섰습니다. 출석번호가 2, 14, 5, 8, 12,...
T11_external.push({
  key:"external_순서정하기_595",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"출석번호가 작은 사람이 앞에서부터 줄을 섰습니다. 출석번호가 2, 14, 5, 8, 12, 10, 15번인 학생들 중, 뒤에서 3번째로 줄을 선 사람의 번호는 무엇입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [순서정하기] 비행기의 좌석들이 30줄로 되어있습니다. 각 줄의 좌석수는 같고 지예는 왼쪽에서 2번째, ...
T11_external.push({
  key:"external_순서정하기_598",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"비행기의 좌석들이 30줄로 되어있습니다. 각 줄의 좌석수는 같고 지예는 왼쪽에서 2번째, 오른쪽에서 5번째에 앉아있을때, 비행기엔 몇 개의 좌석이 있습니까?",
      answer:"180",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 180, 식: none"
    };
  }
});

// [순서정하기] 대한이는 7살, 민국이는 9살, 만세는 12살 입니다. 둘째는 몇 살입니까?...
T11_external.push({
  key:"external_순서정하기_599",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"대한이는 7살, 민국이는 9살, 만세는 12살 입니다. 둘째는 몇 살입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [순서정하기] 학교 앞에 새로 문을 연 영어학원의 10번째 등록자는 우빈이, 12번째 등록자는 혜원이입니...
T11_external.push({
  key:"external_순서정하기_600",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"학교 앞에 새로 문을 연 영어학원의 10번째 등록자는 우빈이, 12번째 등록자는 혜원이입니다. 나은이는 우빈이보다 늦게 등록했지만 혜원이보다 먼저 등록했을 때, 나은이는 영어학원에 몇 번째로 등록했습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 준우네 반 학생들이 신체검사를 받기위해 줄을 섰습니다. 앞에서 4번째에 있는 학생과 뒤에서...
T11_external.push({
  key:"external_순서정하기_601",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준우네 반 학생들이 신체검사를 받기위해 줄을 섰습니다. 앞에서 4번째에 있는 학생과 뒤에서 7번째에 있는 학생 사이에 14명이 있을때, 준우네 반 학생들은 모두 몇 명입니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [순서정하기] 정민이 SNS의 팔로워 수는 88명이고, 지수는 90명입니다. 유찬이의 팔로워수는 정민이보...
T11_external.push({
  key:"external_순서정하기_602",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정민이 SNS의 팔로워 수는 88명이고, 지수는 90명입니다. 유찬이의 팔로워수는 정민이보다 많고 지수보다 적을때, 유찬이 SNS의 팔로워 수는 몇 명입니까?",
      answer:"89",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 89, 식: none"
    };
  }
});

// [순서정하기] 몸무게가 가벼운 사람부터 순서대로 21명이 한 줄로 서 있습니다. 지우가 앞에서부터 3번째...
T11_external.push({
  key:"external_순서정하기_608",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"몸무게가 가벼운 사람부터 순서대로 21명이 한 줄로 서 있습니다. 지우가 앞에서부터 3번째에 서 있습니다. 몸무게가 무거운 사람부터 순서대로 다시 줄을 서면 지우는 앞에서부터 몇 번째에 서게 됩니까?",
      answer:"19",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 19, 식: none"
    };
  }
});

// [순서정하기] 지민이는 아파트의 아래에서부터 6번째, 위에서부터 16번째 층에 살고 있습니다. 아파트는 ...
T11_external.push({
  key:"external_순서정하기_610",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지민이는 아파트의 아래에서부터 6번째, 위에서부터 16번째 층에 살고 있습니다. 아파트는 총 몇 층입니까?",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [순서정하기] 올해 야구시합에서 3번째로 홈런을 많이 친 선수는 12개, 5번째로 홈런을 많이 친 선수는...
T11_external.push({
  key:"external_순서정하기_612",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 야구시합에서 3번째로 홈런을 많이 친 선수는 12개, 5번째로 홈런을 많이 친 선수는 10개를 쳤습니다. 4번째로 홈런을 많이 친 선수는 홈런을 몇 개 쳤습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 체육시간에 뜀틀을 하기 위해 줄을 섰습니다. 연서는 앞에서 5번째 준우는 뒤에서 4번째에 ...
T11_external.push({
  key:"external_순서정하기_614",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육시간에 뜀틀을 하기 위해 줄을 섰습니다. 연서는 앞에서 5번째 준우는 뒤에서 4번째에 서있을때, 연서와 준우 사이에는 12명이 있습니다. 줄을 선 사람은 모두 몇 명입니까?",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [순서정하기] 미현이는 책의 번호가 17. 13, 15, 12, 16, 14로 아무렇게나 정리된 책을 번...
T11_external.push({
  key:"external_순서정하기_619",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미현이는 책의 번호가 17. 13, 15, 12, 16, 14로 아무렇게나 정리된 책을 번호 순대로 책꽂이에 꽂으려고 합니다. 세번째로 꽂힌 책은 몇 번책입니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [순서정하기] 42명의 사람들이 백신을 맞기 위해 줄을 서있습니다. 주희는 앞에서 16번째에 서있을때, ...
T11_external.push({
  key:"external_순서정하기_621",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"42명의 사람들이 백신을 맞기 위해 줄을 서있습니다. 주희는 앞에서 16번째에 서있을때, 주희는 뒤에서 몇 번째에 서있습니까?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [순서정하기] 한정판 레고를 사기위해 선착순으로 줄을 선 사람들이 번호표를 받았습니다. 윤주의 앞사람의 ...
T11_external.push({
  key:"external_순서정하기_626",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한정판 레고를 사기위해 선착순으로 줄을 선 사람들이 번호표를 받았습니다. 윤주의 앞사람의 번호는 17번 뒷사람의 번호는 19번일때, 윤주의 번호는 몇 번입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [순서정하기] 예방접종을 맞기 위해 대기줄을 서있습니다. 서진이의 앞에는 11명 뒤에는 13명이 있을때,...
T11_external.push({
  key:"external_순서정하기_627",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예방접종을 맞기 위해 대기줄을 서있습니다. 서진이의 앞에는 11명 뒤에는 13명이 있을때, 줄을 선 사람들은 모두 몇 명입니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [순서정하기] 100m 달리기 결승선을 민정, 예린, 지희, 수연, 인경, 나현이 순으로 통과했습니다. ...
T11_external.push({
  key:"external_순서정하기_629",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100m 달리기 결승선을 민정, 예린, 지희, 수연, 인경, 나현이 순으로 통과했습니다. 3번째로 결승선을 통과한 사람은 누구입니까?",
      answer:"지희",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지희, 식: none"
    };
  }
});

// [순서정하기] 진열장에 시계 12개를 나란히 진열하려고 합니다. 오른쪽에서 3번째에 있는 시계는 왼쪽에서...
T11_external.push({
  key:"external_순서정하기_630",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진열장에 시계 12개를 나란히 진열하려고 합니다. 오른쪽에서 3번째에 있는 시계는 왼쪽에서 몇 번째에 위치해있습니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [순서정하기] 체육시간에 출석번호 순서대로 수행평가를 하려고 합니다. 동현이의 앞번호는 18번 뒷번호는 ...
T11_external.push({
  key:"external_순서정하기_632",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육시간에 출석번호 순서대로 수행평가를 하려고 합니다. 동현이의 앞번호는 18번 뒷번호는 20번일때, 동현이는 몇 번째로 수행평가를 합니까?",
      answer:"19",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 19, 식: none"
    };
  }
});

// [순서정하기] 음악시간에 출석번호 순서대로 수행평가를 하려고 합니다. 서은이의 앞번호는 19번 뒷번호는 ...
T11_external.push({
  key:"external_순서정하기_637",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"음악시간에 출석번호 순서대로 수행평가를 하려고 합니다. 서은이의 앞번호는 19번 뒷번호는 21번일때, 서은이는 몇 번째로 수행평가를 합니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [순서정하기] 진열대에 머그컵 15개가 왼쪽에서부터 크기별로 진열되어있습니다. 주희가 고른 머그컵의 오른...
T11_external.push({
  key:"external_순서정하기_642",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진열대에 머그컵 15개가 왼쪽에서부터 크기별로 진열되어있습니다. 주희가 고른 머그컵의 오른쪽에 8개가 있다면, 주희가 고른 머그컵은 몇 번째로 큰 머그컵입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [순서정하기] 집에 화분이 가장 많은 사람은 12개가 있고 3번째로 많은 사람은 10개가 있습니다. 집에...
T11_external.push({
  key:"external_순서정하기_648",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"집에 화분이 가장 많은 사람은 12개가 있고 3번째로 많은 사람은 10개가 있습니다. 집에 있는 화분이 2번째로 많은 사람은 몇 개가 있습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 유명 가수의 사인을 받기위해 30명이 줄을 서있습니다. 은율이는 앞에서 3번째이고 도현이는...
T11_external.push({
  key:"external_순서정하기_653",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유명 가수의 사인을 받기위해 30명이 줄을 서있습니다. 은율이는 앞에서 3번째이고 도현이는 뒤에서 4번째일때, 은율이와 도현이 사이에는 몇 명이 있습니까?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [순서정하기] 양궁을 하고있는 선수들 15명이 일렬로 서있습니다. 한국선수의 오른편에 10명이 서있을때,...
T11_external.push({
  key:"external_순서정하기_657",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"양궁을 하고있는 선수들 15명이 일렬로 서있습니다. 한국선수의 오른편에 10명이 서있을때, 한국선수는 왼쪽에서 몇 번째에 서있습니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [순서정하기] 새로 출시된 노트북을 사기위해 42명의 사람들이 줄을 서있습니다. 앞에서 3번째에 서있는 ...
T11_external.push({
  key:"external_순서정하기_663",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새로 출시된 노트북을 사기위해 42명의 사람들이 줄을 서있습니다. 앞에서 3번째에 서있는 사람과 뒤에서 10번째에 서있는 사람 사이에는 몇 명의 사람들이 줄을 서있습니까?",
      answer:"29",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 29, 식: none"
    };
  }
});

// [순서정하기] 수진이의 자리는 앞에서 2번째, 뒤에서 4번째 왼쪽으로부터 3번째입니다. 각 줄의 자릿수는...
T11_external.push({
  key:"external_순서정하기_664",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수진이의 자리는 앞에서 2번째, 뒤에서 4번째 왼쪽으로부터 3번째입니다. 각 줄의 자릿수는 같고 총 30개의 자리가 있을떄, 수진이는 오른쪽에서 몇 번째 자리입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [순서정하기] 50m 달리기 대회에서 희진이는 9초, 지윤이는 12초, 명희는 10초, 현아는 13초를 ...
T11_external.push({
  key:"external_순서정하기_669",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"50m 달리기 대회에서 희진이는 9초, 지윤이는 12초, 명희는 10초, 현아는 13초를 기록했습니다. 2번째로 느린 사람의 기록은 무엇입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [순서정하기] 100m 달리기 대회에서 스타트가 빠른 사람은 찬우, 진영, 형민, 수혁, 준수, 승준이 ...
T11_external.push({
  key:"external_순서정하기_674",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100m 달리기 대회에서 스타트가 빠른 사람은 찬우, 진영, 형민, 수혁, 준수, 승준이 순입니다. 4번째로 스타트가 빠른 사람은 누구입니까?",
      answer:"수혁",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수혁, 식: none"
    };
  }
});

// [순서정하기] 진영이의 도장판에는 칭찬도장이 12개 찍혀있고, 혜성이의 도장판에는 칭찬도장이 14개 찍혀...
T11_external.push({
  key:"external_순서정하기_675",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진영이의 도장판에는 칭찬도장이 12개 찍혀있고, 혜성이의 도장판에는 칭찬도장이 14개 찍혀있습니다. 신우는 진영이보다 칭찬도장을 많이 받았지만 혜성이보다 적게 받았을때, 신우의 도장판에는 칭찬도장이 몇 개 찍혀있습니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 도서관에 새로 들어온 동화책 30권을 책꽂이에 꽂았습니다. 왼쪽에서 8번째에 꽂힌 책은 오...
T11_external.push({
  key:"external_순서정하기_677",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도서관에 새로 들어온 동화책 30권을 책꽂이에 꽂았습니다. 왼쪽에서 8번째에 꽂힌 책은 오른쪽에서 몇 번째에 꽂혀있습니까?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [순서정하기] 서우네 학교는 수업을 1시간씩 합니다. 9시에 국어수업을 시작했고, 11시에 영어수업을 시...
T11_external.push({
  key:"external_순서정하기_681",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서우네 학교는 수업을 1시간씩 합니다. 9시에 국어수업을 시작했고, 11시에 영어수업을 시작했을때, 수학수업은 국어수업보다 늦게했지만, 영어수업보다 먼저했습니다. 수학수업은 몇시에 시작했습니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [순서정하기] 50m 달리기 기록의 측정 순서는 주영, 혜리, 성준, 승혁, 태원 순입니다. 3번째로 기...
T11_external.push({
  key:"external_순서정하기_684",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"50m 달리기 기록의 측정 순서는 주영, 혜리, 성준, 승혁, 태원 순입니다. 3번째로 기록을 측정하는 사람은 누구입니까?",
      answer:"성준",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 성준, 식: none"
    };
  }
});

// [순서정하기] 백신을 맞기위한 38명이 대기줄을 서있습니다. 재영이는 앞에서 8번째 현지는 뒤에서 12번...
T11_external.push({
  key:"external_순서정하기_685",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"백신을 맞기위한 38명이 대기줄을 서있습니다. 재영이는 앞에서 8번째 현지는 뒤에서 12번째일때, 재영이와 현지 사이에 줄을 선 사람들은 모두 몇 명입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [순서정하기] 마트에서 13명의 손님들이 계산을 하기 위해 줄을 서있습니다. 정아보다 4명이 먼저 계산할...
T11_external.push({
  key:"external_순서정하기_690",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"마트에서 13명의 손님들이 계산을 하기 위해 줄을 서있습니다. 정아보다 4명이 먼저 계산할때, 정아는 뒤에서 몇 번째에 서있습니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [순서정하기] 아침 조회를 하기 위해 학생들이 운동장에 줄을 섰습니다. 태민이는 왼쪽에서부터 5번째, 오...
T11_external.push({
  key:"external_순서정하기_692",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아침 조회를 하기 위해 학생들이 운동장에 줄을 섰습니다. 태민이는 왼쪽에서부터 5번째, 오른쪽에서부터 14번째에 서있고, 모든 줄에는 각각 10명의 학생들이 서있습니다. 운동장에 있는 학생들은 총 몇 명입니까?",
      answer:"180",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 180, 식: none"
    };
  }
});

// [순서정하기] 올림픽에서 사격을 하기 위해 선수들이 나란히 서있습니다. 한국선수의 왼쪽에 12명 오른쪽에...
T11_external.push({
  key:"external_순서정하기_695",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올림픽에서 사격을 하기 위해 선수들이 나란히 서있습니다. 한국선수의 왼쪽에 12명 오른쪽에 20명이 있을 때, 사격에 출전한 선수들은 총 몇 명입니까?",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: none"
    };
  }
});

// [순서정하기] 택배기사님이 어제 배달한 택배는 62개 오늘 배달한 택배는 64개입니다. 내일 배달할 택배...
T11_external.push({
  key:"external_순서정하기_697",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"택배기사님이 어제 배달한 택배는 62개 오늘 배달한 택배는 64개입니다. 내일 배달할 택배는 어제 배달한 택배보다 많지만 오늘 배달한 택배보다 적을때, 택배기사님은 내일 몇 개의 택배를 배달해야합니까?",
      answer:"63",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 63, 식: none"
    };
  }
});

// [순서정하기] 윤서의 집과 학교까지의 거리는 반에서 13번째로 가깝고, 민재의 집과 학교까지의 거리는 1...
T11_external.push({
  key:"external_순서정하기_699",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤서의 집과 학교까지의 거리는 반에서 13번째로 가깝고, 민재의 집과 학교까지의 거리는 15번째로 가깝습니다. 유준이의 집은 윤서네 집보다 학교와 멀지만 민재네 집보다 학교와가까울때, 유준이네 집은 반에서 몇 번째로 학교와 가깝습니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [순서정하기] 초상화 17개가 벽에 나란히 걸려있습니다. 오른쪽에서 7번째에 승현이의 초상화가 걸려있을 ...
T11_external.push({
  key:"external_순서정하기_700",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"초상화 17개가 벽에 나란히 걸려있습니다. 오른쪽에서 7번째에 승현이의 초상화가 걸려있을 때, 승현이의 초상화는 왼쪽에서 몇 번째에 걸려있습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 연수네 반은 학생이 총 32명 있습니다. 반 학생들이 한 줄로 섰을 때, 연수는 앞에서부터...
T11_external.push({
  key:"external_순서정하기_702",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"연수네 반은 학생이 총 32명 있습니다. 반 학생들이 한 줄로 섰을 때, 연수는 앞에서부터 7번째에 위치하고 있습니다. 연수는 뒤에서부터 몇 번째에 서있습니까?",
      answer:"26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 26, 식: none"
    };
  }
});

// [순서정하기] 한 봉지에 귤이 많이 들어있는 순서대로 봉지들을 나열하려고 합니다. 각 봉지에 4, 10,...
T11_external.push({
  key:"external_순서정하기_705",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 봉지에 귤이 많이 들어있는 순서대로 봉지들을 나열하려고 합니다. 각 봉지에 4, 10, 8, 12, 6 개의 귤이 들어있을때, 3번째에 나열된 봉지에는 귤이 몇 개가 들어있습니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [순서정하기] 빨간색 차는 오른쪽에서 3번째, 앞에서 4번째, 뒤에서 5번째에 위치한 자리에 주차되어있습...
T11_external.push({
  key:"external_순서정하기_714",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"빨간색 차는 오른쪽에서 3번째, 앞에서 4번째, 뒤에서 5번째에 위치한 자리에 주차되어있습니다. 주차장엔 48개의 자리가 있고 각 줄의 주차칸수는 같을 때, 빨간색차는 왼쪽으로부터 몇 번째에 위치하였습니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [순서정하기] 예준이네 반에서 생일이 12번째로 빠른 사람은 지우이고, 14번째로 빠른 사람은 도윤이 입...
T11_external.push({
  key:"external_순서정하기_718",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예준이네 반에서 생일이 12번째로 빠른 사람은 지우이고, 14번째로 빠른 사람은 도윤이 입니다. 예준이는 지우보다 늦게 태어났지만 도윤이보다 일찍 태어났을때, 예준이는 반에서 생일이 몇 번째로 빠릅니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 백신을 맞기 위해 22명이 대기줄을 서있습니다. 민재의 앞에 14명이 있을때, 민재는 뒤에...
T11_external.push({
  key:"external_순서정하기_720",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"백신을 맞기 위해 22명이 대기줄을 서있습니다. 민재의 앞에 14명이 있을때, 민재는 뒤에서 몇 번째에 있습니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [순서정하기] 육상대회에서 선수들 12명이 달리고있습니다. 앞에서 2번째인 선수와 뒤에서 3번째인 선수 ...
T11_external.push({
  key:"external_순서정하기_721",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"육상대회에서 선수들 12명이 달리고있습니다. 앞에서 2번째인 선수와 뒤에서 3번째인 선수 사이에는 몇 명의 선수들이 있습니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [순서정하기] 100m 달리기의 기록을 성호, 민재, 인성, 진아, 다정 순으로 측정했습니다. 2번째로 ...
T11_external.push({
  key:"external_순서정하기_722",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100m 달리기의 기록을 성호, 민재, 인성, 진아, 다정 순으로 측정했습니다. 2번째로 기록을 측정한 사람은 누구입니까?",
      answer:"민재",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민재, 식: none"
    };
  }
});

// [순서정하기] 크리스마스 케이크를 사기위해 빵집 앞에 20명이 줄을 서있습니다. 소현이는 앞에서 11번째...
T11_external.push({
  key:"external_순서정하기_723",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"크리스마스 케이크를 사기위해 빵집 앞에 20명이 줄을 서있습니다. 소현이는 앞에서 11번째에 서있을 때, 소현이는 뒤에서 몇 번째 입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [순서정하기] 올해 주안이는 영화를 12편 봤고 지수는 14편을 봤습니다. 소민이는 주안이보다 영화를 많...
T11_external.push({
  key:"external_순서정하기_726",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올해 주안이는 영화를 12편 봤고 지수는 14편을 봤습니다. 소민이는 주안이보다 영화를 많이 보고 지수보다 적게 봤습니다. 소민이가 올해 본 영화는 모두 몇편입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 번호가 쓰여 있는 만화책을 번호 순서대로 책꽂이에 꽂으려고 합니다. 번호는 하나씩 커지고,...
T11_external.push({
  key:"external_순서정하기_727",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"번호가 쓰여 있는 만화책을 번호 순서대로 책꽂이에 꽂으려고 합니다. 번호는 하나씩 커지고, 어떤 만화책의 앞에는 12번이 뒤에는 14번이 있다면 이 만화책의 번호는 몇 번입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 예진이네 반 학생 29명이 시력검사를 받기위해 줄을 서있습니다. 예진이는 뒤에서 4번째에 ...
T11_external.push({
  key:"external_순서정하기_730",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예진이네 반 학생 29명이 시력검사를 받기위해 줄을 서있습니다. 예진이는 뒤에서 4번째에 서있을때, 예진이는 앞에서 몇 번째로 서있습니까?",
      answer:"26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 26, 식: none"
    };
  }
});

// [순서정하기] 놀이공워 표를 끊기위해 21명이 줄을 섰습니다. 민영이는 앞에서 5번째 혜인이는 뒤에서 3...
T11_external.push({
  key:"external_순서정하기_732",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이공워 표를 끊기위해 21명이 줄을 섰습니다. 민영이는 앞에서 5번째 혜인이는 뒤에서 3번째일때 민영이와 혜인이 사이에는 몇 명이 있습니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 피아노 연주회에서 혜선, 가현, 다은, 채원, 사랑, 지현 순으로 연주하기로 했습니다. 세...
T11_external.push({
  key:"external_순서정하기_739",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"피아노 연주회에서 혜선, 가현, 다은, 채원, 사랑, 지현 순으로 연주하기로 했습니다. 세 번째로 연주하는 사람은 누구입니까?",
      answer:"다은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다은, 식: none"
    };
  }
});

// [순서정하기] 옷가게의 옷을 사이즈가 작은 순으로 나열했을때 80, 85, 90, 95, 100, 105...
T11_external.push({
  key:"external_순서정하기_741",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옷가게의 옷을 사이즈가 작은 순으로 나열했을때 80, 85, 90, 95, 100, 105순으로 나열됐습니다. 3번째로 작은 사이즈는 무엇입니까?",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: none"
    };
  }
});

// [순서정하기] 현장체험학습을 간 학생들 18명이 줄을 서서 등산을 하고 있습니다. 하린이는 앞에서 7번째...
T11_external.push({
  key:"external_순서정하기_742",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현장체험학습을 간 학생들 18명이 줄을 서서 등산을 하고 있습니다. 하린이는 앞에서 7번째에 서있을때, 하린이의 뒤에는 몇 명의 학생들이 등산을 하고 있습니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [순서정하기] 키 순서대로 줄을 섰습니다. 12번째로 큰 학생과 20번째로 큰 학생사이에는 몇 명이 있습...
T11_external.push({
  key:"external_순서정하기_745",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"키 순서대로 줄을 섰습니다. 12번째로 큰 학생과 20번째로 큰 학생사이에는 몇 명이 있습니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [순서정하기] 아침조회시간에 규빈이는 앞에서 6번째, 뒤에서 5번째, 왼쪽에서 8번째에 서있습니다. 각 ...
T11_external.push({
  key:"external_순서정하기_746",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아침조회시간에 규빈이는 앞에서 6번째, 뒤에서 5번째, 왼쪽에서 8번째에 서있습니다. 각 줄마다 학생수는 같고 총 200명의 학생이 서있을때, 규빈이는 오른쪽으로부터 몇 번째에 서있습니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [순서정하기] 서점에서 신간 소설책을 20번째로 구매한 사람은 예솔이, 22번째로 구매한 사람은 연재입니...
T11_external.push({
  key:"external_순서정하기_750",
  unitId:"m1-1-1-I-1",
  difficulty:2,
  tags:["순서정하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서점에서 신간 소설책을 20번째로 구매한 사람은 예솔이, 22번째로 구매한 사람은 연재입니다. 효준이는 예솔이보다 늦게 구매했지만 연재보다 일찍 구매했을 때, 효준이는 소설책을 몇 번째로 구매했습니까?",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [조합하기] 다섯 개의 알파벳 A, A, C, C, E를 일렬로 나열할 때, 같은 문자는 바로 옆에 오...
T11_external.push({
  key:"external_조합하기_756",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다섯 개의 알파벳 A, A, C, C, E를 일렬로 나열할 때, 같은 문자는 바로 옆에 오지 않도록 나열하는 경우의 수를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [조합하기] 12개의 팀이 어느 대회를 진행한다. 먼저 팀을 4개씩 3개의 조로 나누어 각 조에서 리그...
T11_external.push({
  key:"external_조합하기_757",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"12개의 팀이 어느 대회를 진행한다. 먼저 팀을 4개씩 3개의 조로 나누어 각 조에서 리그전을 한 다음, 각 조의 상위 1개의 팀이 본선에 진출하여 리그전을 진행해 상위 2팀이 결승전을 치뤄 이긴 팀이 우승한다고 할 때, 대회에서 진행하는 경기의 수를 구하여라.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [조합하기] 일곱명의 학생 A, B, C, D, E, F, G가 일렬로 줄을 설 때, G가 맨 앞에 서...
T11_external.push({
  key:"external_조합하기_760",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일곱명의 학생 A, B, C, D, E, F, G가 일렬로 줄을 설 때, G가 맨 앞에 서는 경우의 수는?",
      answer:"720",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 720, 식: none"
    };
  }
});

// [조합하기] 2, 3, 4, 6, 7, 8의 숫자가 각각 적힌 6개의 공이 있다. 이 중에서 3개를 뽑...
T11_external.push({
  key:"external_조합하기_771",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2, 3, 4, 6, 7, 8의 숫자가 각각 적힌 6개의 공이 있다. 이 중에서 3개를 뽑아 만들 수 있는 세 자리 자연수 중 642보다 큰 수의 개수를 구하시오.",
      answer:"51",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 51, 식: none"
    };
  }
});

// [조합하기] 0에서 4까지의 숫자가 각각 적힌 5장의 카드에서 2장을 뽑아 두 자리의 정수를 만들 때,...
T11_external.push({
  key:"external_조합하기_772",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"0에서 4까지의 숫자가 각각 적힌 5장의 카드에서 2장을 뽑아 두 자리의 정수를 만들 때, 25미만인 정수의 경우의 수는?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [조합하기] 세 학생이 가위바위보를 할 때 나올 수 있는 모든 경우의 수는?...
T11_external.push({
  key:"external_조합하기_773",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 학생이 가위바위보를 할 때 나올 수 있는 모든 경우의 수는?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [조합하기] 5, 6, 7, 8이 적힌 숫자카드를 한 번씩 사용하여 만든 네 자리 정수 중 7000보다...
T11_external.push({
  key:"external_조합하기_785",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"5, 6, 7, 8이 적힌 숫자카드를 한 번씩 사용하여 만든 네 자리 정수 중 7000보다 작은 정수는 몇 가지인지 구하여라.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [조합하기] 500원, 100원, 50원 짜리 동전이 각각 2개씩 있는 학생이 각 동전을 한 개 이상 ...
T11_external.push({
  key:"external_조합하기_792",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"500원, 100원, 50원 짜리 동전이 각각 2개씩 있는 학생이 각 동전을 한 개 이상 사용하여 돈을 지불하는 방법의 수를 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [조합하기] 서정, 찬기, 은희, 연지, 대현이가 한 팀을 꾸려 가창 경연 대회에 참가하였다. 남자인 ...
T11_external.push({
  key:"external_조합하기_795",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서정, 찬기, 은희, 연지, 대현이가 한 팀을 꾸려 가창 경연 대회에 참가하였다. 남자인 찬기와 대현이가 여자들 사이사이에 자리를 잡는 방법의 수는?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [조합하기] 1부터 7까지 적힌 7등분 한 원판 A와 1부터 5까지 적힌 5등분 한 원판 B이 있다. ...
T11_external.push({
  key:"external_조합하기_805",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 7까지 적힌 7등분 한 원판 A와 1부터 5까지 적힌 5등분 한 원판 B이 있다. 두 원판 A,B를 동시에 돌려서 두 원판이 멈출 때, 원판 A의 바늘이 가리키는 숫자를 십의자리, 원판 B의 바늘이 가리키는 숫자를 일의 자리로 하는 두 자리의 자연수를 만들려고 한다. 이때 51 이상인 자연수의 개수를 구하시오.(단, 바늘이 경계선을 가리키는 경우는 생각하지 않는다.)",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [조합하기] A, B, C세명의 후보 가운데서 두 명을 뽑을 때, 한명은 실장, 다른 한명은 부실장으로...
T11_external.push({
  key:"external_조합하기_811",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C세명의 후보 가운데서 두 명을 뽑을 때, 한명은 실장, 다른 한명은 부실장으로 뽑는 경우의 수는?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [조합하기] 가영이는 볼펜을 사려고 문구점에 갔다. 문구점에 볼펜이 A회사 제품 7가지, B회사 제품 ...
T11_external.push({
  key:"external_조합하기_816",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가영이는 볼펜을 사려고 문구점에 갔다. 문구점에 볼펜이 A회사 제품 7가지, B회사 제품 5가지, C회사 제품 11가지가 있을 때, 이 문구점에서 볼펜을 사는 경우의 수는?",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [조합하기] 한국, 중국, 일본, 미국 대표의 네 명의 육상 선수가 달리는 트랙을 정하려고 한다. 트랙...
T11_external.push({
  key:"external_조합하기_823",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한국, 중국, 일본, 미국 대표의 네 명의 육상 선수가 달리는 트랙을 정하려고 한다. 트랙을 정하는 경우의 수는?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5 다섯 개의 숫자를 한 번만 사용하여 만든 세 자리의 자연수 중에서...
T11_external.push({
  key:"external_조합하기_825",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1, 2, 3, 4, 5 다섯 개의 숫자를 한 번만 사용하여 만든 세 자리의 자연수 중에서 240보다 작은 자연수의 경우의 수는?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [조합하기] A, B, C, D, E, F 여섯 명의 학생을 일렬로 세울 때, A와 B가 이웃하여 서는...
T11_external.push({
  key:"external_조합하기_826",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C, D, E, F 여섯 명의 학생을 일렬로 세울 때, A와 B가 이웃하여 서는 경우의 수는?",
      answer:"240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 240, 식: none"
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5 다섯 개의 숫자를 한번만 사용하여 만든 세 자리 정수 중 240보...
T11_external.push({
  key:"external_조합하기_828",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1, 2, 3, 4, 5 다섯 개의 숫자를 한번만 사용하여 만든 세 자리 정수 중 240보다 작은 정수의 경우의 수는?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [조합하기] f...
T11_external.push({
  key:"external_조합하기_835",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"f",
      answer:"70",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 70, 식: none"
    };
  }
});

// [조합하기] 왼쪽으로 읽거나 오른쪽으로 읽어도 똑같은 자연수인 77, 353, 1991 등을 대칭수...
T11_external.push({
  key:"external_조합하기_842",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"왼쪽으로 읽거나 오른쪽으로 읽어도 똑같은 자연수인 77, 353, 1991 등을 "대칭수"라 하자. 10보다 크고 1000보다 작은 대칭수의 개수는?",
      answer:"99",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 99, 식: none"
    };
  }
});

// [조합하기] 자연수 210을 1보다 큰 두 자연수의 곱으로 나타내는 경우의 수는?(단, 곱하는 순서는 ...
T11_external.push({
  key:"external_조합하기_846",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"자연수 210을 1보다 큰 두 자연수의 곱으로 나타내는 경우의 수는?(단, 곱하는 순서는 생각하지 않는다.)",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [조합하기] 현수는 한 달에 3일은 자전거를 타려고 한다. 1일부터 30일까지 30개의 날짜 중에서 자...
T11_external.push({
  key:"external_조합하기_850",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현수는 한 달에 3일은 자전거를 타려고 한다. 1일부터 30일까지 30개의 날짜 중에서 자전거를 탈 3개의 날짜를 택하는 경우의 수를 구하시오",
      answer:"4060",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4060, 식: none"
    };
  }
});

// [조합하기] 세 사람이 가위바위보를 할 때, 일어날 수 있는 모든 경우의 수를 구하여라....
T11_external.push({
  key:"external_조합하기_852",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 사람이 가위바위보를 할 때, 일어날 수 있는 모든 경우의 수를 구하여라.",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [조합하기] 한 개의 주사위를 세번 던질 때, 첫 번째와 두 번째에 나온 눈의 수의 차가 세번째에 나온...
T11_external.push({
  key:"external_조합하기_856",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 개의 주사위를 세번 던질 때, 첫 번째와 두 번째에 나온 눈의 수의 차가 세번째에 나온 눈의 수와 같은 경우의수",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [조합하기] 2인용 의자가 6개의 각각의 자리에 1번부터 12번까지 번호가 붙어있다. 이 자리에 남학생...
T11_external.push({
  key:"external_조합하기_857",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2인용 의자가 6개의 각각의 자리에 1번부터 12번까지 번호가 붙어있다. 이 자리에 남학생 4명과 여학생 4명을 앉히려고 할 때, 남학생과 여학생이 옆자리의 짝이 되게 하는 경우의 수를 구하여라.",
      answer:"138240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 138240, 식: none"
    };
  }
});

// [조합하기] 1부터 30까지의 자연수가 적힌 30장의 카드 중에 한 장을 뽑을 때, 7의 배수가 나오는...
T11_external.push({
  key:"external_조합하기_863",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 30까지의 자연수가 적힌 30장의 카드 중에 한 장을 뽑을 때, 7의 배수가 나오는 경우의 수는?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [조합하기] A, B 두개의 주사위를 동시에 던질 때, A주사위의 눈이 B 주사위 눈의 약수가 되는 경...
T11_external.push({
  key:"external_조합하기_865",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B 두개의 주사위를 동시에 던질 때, A주사위의 눈이 B 주사위 눈의 약수가 되는 경우의 수",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [조합하기] 1에서 100까지의 자연수 중에서 5의 배수 또는 7의 배수인 자연수는 모두 몇 개인가?...
T11_external.push({
  key:"external_조합하기_868",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1에서 100까지의 자연수 중에서 5의 배수 또는 7의 배수인 자연수는 모두 몇 개인가?",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [조합하기] 0, 1, 2, 3, 4, 5의 6개의 숫자로 중복을 허용하여 만들 수 있는 네 자리의 자...
T11_external.push({
  key:"external_조합하기_879",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"0, 1, 2, 3, 4, 5의 6개의 숫자로 중복을 허용하여 만들 수 있는 네 자리의 자연수 중에서 4000보다 큰 자연수의 개수를 구하시오",
      answer:"431",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 431, 식: none"
    };
  }
});

// [조합하기] 4개의 숫자 0, 1, 2, 3을 중복을 허용하여 만들 수 있는 네 자리의 자연수를 크기가...
T11_external.push({
  key:"external_조합하기_887",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"4개의 숫자 0, 1, 2, 3을 중복을 허용하여 만들 수 있는 네 자리의 자연수를 크기가 작은 수부터 차례대로 나열할 때, 2200은 몇 번째 수인가?",
      answer:"97",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 97, 식: none"
    };
  }
});

// [조합하기] 1, 3, 4, 6, 7이 적힌 숫자 카드 5장을 사용하여 431보다 큰 세자리 수를 만들...
T11_external.push({
  key:"external_조합하기_889",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1, 3, 4, 6, 7이 적힌 숫자 카드 5장을 사용하여 431보다 큰 세자리 수를 만들려고 할 때의 경우의 수를 구하시오.",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [조합하기] 5PR = 60일때 R 의 값을 구하여라....
T11_external.push({
  key:"external_조합하기_896",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"5PR = 60일때 R 의 값을 구하여라.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [조합하기] 서로 다른 두 개의 주사위를 동시에 던질 때, 나오는 눈의 수의 곱이 18이상인 경우의 수...
T11_external.push({
  key:"external_조합하기_898",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서로 다른 두 개의 주사위를 동시에 던질 때, 나오는 눈의 수의 곱이 18이상인 경우의 수는?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [조합하기] A, B, C 세사람이 가위 바위 보를 할 때 세 사람이 서로 다른 것을 내는 경우의 수는...
T11_external.push({
  key:"external_조합하기_899",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C 세사람이 가위 바위 보를 할 때 세 사람이 서로 다른 것을 내는 경우의 수는?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [조합하기] 10원 동전 4개, 50원 동전 2개, 100원 동전 1개가 있다. 이 동전을 최소한 1개...
T11_external.push({
  key:"external_조합하기_900",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"10원 동전 4개, 50원 동전 2개, 100원 동전 1개가 있다. 이 동전을 최소한 1개 이상 사용하여 만들 수 있는 금액의 수를 구하여라.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [조합하기] 세 사람이 가위바위보를 할 때, 일어날 수 있는 모든 경우의 수를 구하시오...
T11_external.push({
  key:"external_조합하기_904",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 사람이 가위바위보를 할 때, 일어날 수 있는 모든 경우의 수를 구하시오",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [조합하기] 크기가 서로 다른 두 개의 주사위를 동시에 던질때, 나온 두 눈의 곱이 짝수가 되는 경우의...
T11_external.push({
  key:"external_조합하기_909",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"크기가 서로 다른 두 개의 주사위를 동시에 던질때, 나온 두 눈의 곱이 짝수가 되는 경우의 수는?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [조합하기] 여학생 써니, 유리, 제시카와 남학생 온유, 태민이가 일렬로 서서 춤을 추려고 한다. 이때...
T11_external.push({
  key:"external_조합하기_916",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"여학생 써니, 유리, 제시카와 남학생 온유, 태민이가 일렬로 서서 춤을 추려고 한다. 이때 남자들은 남자끼리, 여자는 여자끼리 이웃하여 서는 경우의 수는?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [조합하기] 16개의 팀이 어느 대회를 진행한다. 먼저 팀을 4개씩 4개의 조로 나누어 각 조에서 리그...
T11_external.push({
  key:"external_조합하기_926",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"16개의 팀이 어느 대회를 진행한다. 먼저 팀을 4개씩 4개의 조로 나누어 각 조에서 리그전을 한 다음, 각 조의 상위 2개의 팀이 8강에 진출하여 토너먼트를 진행해 결승전에서 이긴 팀이 우승한다고 할 때, 대회에서 진행하는 경기의 수를 구하여라.",
      answer:"31",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 31, 식: none"
    };
  }
});

// [조합하기] 볼록십각형에 대하여 대각선의 개수를 구하시오...
T11_external.push({
  key:"external_조합하기_929",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"볼록십각형에 대하여 대각선의 개수를 구하시오",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [조합하기] 1부터 40까지의 자연수가 각각 하나씩 적힌 40장의 카드가 있다. 이 중에서 한 장의 카...
T11_external.push({
  key:"external_조합하기_930",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 40까지의 자연수가 각각 하나씩 적힌 40장의 카드가 있다. 이 중에서 한 장의 카드를 뽑을 때, 4의 배수가 나오는 경우의 수를 구하시오",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [조합하기] 서로 다른 두 개의 주사위를 동시에 던질 때, 나오는 눈의 수의 곱이 18이상인 경우의 수...
T11_external.push({
  key:"external_조합하기_934",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서로 다른 두 개의 주사위를 동시에 던질 때, 나오는 눈의 수의 곱이 18이상인 경우의 수는?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [조합하기] 동전 두 개를 동시에 던질 때, 서로 같은 면이 나올 경우의 수는?...
T11_external.push({
  key:"external_조합하기_935",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동전 두 개를 동시에 던질 때, 서로 같은 면이 나올 경우의 수는?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [조합하기] 15개의 팀이 참가하는 대회가 있다. 조별 예선은 5개 팀씩 3개의 조로 나누어 각 조에 ...
T11_external.push({
  key:"external_조합하기_939",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"15개의 팀이 참가하는 대회가 있다. 조별 예선은 5개 팀씩 3개의 조로 나누어 각 조에 속한 모든 팀이 서로 한 번씩 경기를 하여 조별 1위, 2위인 6개 팀이 서로 한 번씩 경기를 하여 조별 1위, 2위인 팀을 확정하여 결승전을 치룬다고 한다. 이때 이 대회에서 치루는 모든 경기의 수를 구하시오.(단, 비기는 경우는 없다.)",
      answer:"46",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 46, 식: none"
    };
  }
});

// [조합하기] 학생 A, B, C, D, E 중에서 청소 당번을 정하려고 한다. 가위바위보를 하여 진 사...
T11_external.push({
  key:"external_조합하기_949",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"학생 A, B, C, D, E 중에서 청소 당번을 정하려고 한다. 가위바위보를 하여 진 사람이 청소당번을 할때, C가 청소 당번으로 결정되는 경우의 수는?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [조합하기] A, B, C ,D, E 다섯 명이 한 줄로 설 때, C, D는 이웃하고 D가 C뒤에 서는...
T11_external.push({
  key:"external_조합하기_956",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C ,D, E 다섯 명이 한 줄로 설 때, C, D는 이웃하고 D가 C뒤에 서는 경우의 수를 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [조합하기] 1부터 7까지의 숫자가 각각 하나씩 적힌 7개의 공이 들어 있는 상자가 있다. 이 상자에서...
T11_external.push({
  key:"external_조합하기_959",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 7까지의 숫자가 각각 하나씩 적힌 7개의 공이 들어 있는 상자가 있다. 이 상자에서 연속하여 공을 세 번 꺼낼 때, 만들 수 있는 세 자리 정수 중 350보다 작은 정수의 개수는?(단, 꺼낸 공은 다시 넣지 않는다.)",
      answer:"75",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 75, 식: none"
    };
  }
});

// [조합하기] 서로 다른 동전 A, B와 서로 다른 주사위 M, N을 동시에 던질 때, 일어나는 모든 경...
T11_external.push({
  key:"external_조합하기_964",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서로 다른 동전 A, B와 서로 다른 주사위 M, N을 동시에 던질 때, 일어나는 모든 경우의 수를 구하시오.",
      answer:"144",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 144, 식: none"
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5의 다섯 장의 카드에서 한 장씩 세번 뽑아 세자리의 정수를 만들 때...
T11_external.push({
  key:"external_조합하기_967",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1, 2, 3, 4, 5의 다섯 장의 카드에서 한 장씩 세번 뽑아 세자리의 정수를 만들 때, 432 초과인 수가 나오는 경우의 수는?(단, 같은 카드를 여러번 뽑을 수 있다)",
      answer:"38",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 38, 식: none"
    };
  }
});

// [조합하기] 찬영, 석준, 승필, 정재가 축구를 하려고 한다. 가위바위보를 하여 진 사람이 골키퍼를 할...
T11_external.push({
  key:"external_조합하기_971",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"찬영, 석준, 승필, 정재가 축구를 하려고 한다. 가위바위보를 하여 진 사람이 골키퍼를 할 때, 가위바위보를 한 번 하여 찬영이가 골키퍼로 결정되는 경우의 수는?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [조합하기] 1부터 40까지의 자연수가 각각 하나씩 적힌 40장의 카드가 있다. 이 중에서 한 장의 카...
T11_external.push({
  key:"external_조합하기_973",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 40까지의 자연수가 각각 하나씩 적힌 40장의 카드가 있다. 이 중에서 한 장의 카드를 뽑을 때, 4와 5의 공배수가 나오는 경우의 수를 구하시오",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [조합하기] 1부터 80까지의 자연수가 각각 하나씩 적힌 80장의 카드 중에서 한 장을 뽑을 때, 6의...
T11_external.push({
  key:"external_조합하기_979",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 80까지의 자연수가 각각 하나씩 적힌 80장의 카드 중에서 한 장을 뽑을 때, 6의 배수가 나오는 경우의 수는?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [조합하기] 1에서 9까지의 자연수가 각각 적혀있는 9개의 공에서 2개의 공을 꺼낼 때, 두 수의 합이...
T11_external.push({
  key:"external_조합하기_981",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1에서 9까지의 자연수가 각각 적혀있는 9개의 공에서 2개의 공을 꺼낼 때, 두 수의 합이 12 또는 홀수일 경우의 수를 구하시오",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [조합하기] A, B, C, D, E 다섯 명을 일렬로 세울 때, B와 E가 이웃하는 경우의 수를 구하...
T11_external.push({
  key:"external_조합하기_986",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C, D, E 다섯 명을 일렬로 세울 때, B와 E가 이웃하는 경우의 수를 구하시오.",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: none"
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5, 6의 숫자가 각각 적힌 6장의 카드에서 2장을 뽑아 만들 수 있...
T11_external.push({
  key:"external_조합하기_994",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1, 2, 3, 4, 5, 6의 숫자가 각각 적힌 6장의 카드에서 2장을 뽑아 만들 수 있는 두 자리의 자연수 중 43보다 큰 수의 개수는?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [조합하기] 2에서 7까지의 숫자가 각각 적힌 6장의 카드에서 두 장을 뽑아 만들 수 있는 두 자리의 ...
T11_external.push({
  key:"external_조합하기_1000",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2에서 7까지의 숫자가 각각 적힌 6장의 카드에서 두 장을 뽑아 만들 수 있는 두 자리의 정수 중에서 40이상이 되는 경우는?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [조합하기] 십의 자리의 수와 일의 자리의 수가 모두 홀수인 두 자리의 자연수의 개수를 구하시오...
T11_external.push({
  key:"external_조합하기_1007",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"십의 자리의 수와 일의 자리의 수가 모두 홀수인 두 자리의 자연수의 개수를 구하시오",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [조합하기] 빨간색, 주황색, 노란색, 초록색, 파란색 물감을 사용하여 A, B, C의 세 영역에 모두...
T11_external.push({
  key:"external_조합하기_1014",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"빨간색, 주황색, 노란색, 초록색, 파란색 물감을 사용하여 A, B, C의 세 영역에 모두 다른 색을 칠하는 경우의 수는?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [조합하기] 상자 속에서 1부터 20까지의 자연수가 각각 적힌 20장의 카드가 있다. 이 중에서 한 장...
T11_external.push({
  key:"external_조합하기_1015",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상자 속에서 1부터 20까지의 자연수가 각각 적힌 20장의 카드가 있다. 이 중에서 한 장의 카드를 뽑을 때, 4의 배수 또는 6의 배수가 적힌 카드를 뽑는 경우의 수를 구하시오",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [조합하기] 여학생 4명, 남학생 N명이 일렬로 설 때, 여학생끼리 이웃하여 서는 경우는 576가지이다...
T11_external.push({
  key:"external_조합하기_1021",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"여학생 4명, 남학생 N명이 일렬로 설 때, 여학생끼리 이웃하여 서는 경우는 576가지이다. 이때 N의 값을 구하여라.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [조합하기] 1, 2, 3, 4, 5의 숫자가 각각 하나씩 적힌 5장의 카드에서 임의로 2장을 뽑아 만...
T11_external.push({
  key:"external_조합하기_1023",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1, 2, 3, 4, 5의 숫자가 각각 하나씩 적힌 5장의 카드에서 임의로 2장을 뽑아 만들 수 있는 두 자리의 자연수 중 40 이상인 수의 개수는?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [조합하기] 1부터 40까지의 자연수가 적힌 40장의 카드 중에 한 장을 뽑을 때, 3의 배수가 나오는...
T11_external.push({
  key:"external_조합하기_1034",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 40까지의 자연수가 적힌 40장의 카드 중에 한 장을 뽑을 때, 3의 배수가 나오는 경우의 수는?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [조합하기] 7개의 검은 바둑돌과 8개의 흰 바둑돌이 있다. 이 15개의 바둑돌을 일렬로 나열할 때, ...
T11_external.push({
  key:"external_조합하기_1040",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"7개의 검은 바둑돌과 8개의 흰 바둑돌이 있다. 이 15개의 바둑돌을 일렬로 나열할 때, 좌우대칭이 되도록 나열하는 방법의 수를 구하여라",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [조합하기] 현서, 서운, 세경, 석영, 건우 다섯명이 자동차 경주를 하려고 한다. 다섯 개의 레인의 ...
T11_external.push({
  key:"external_조합하기_1042",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현서, 서운, 세경, 석영, 건우 다섯명이 자동차 경주를 하려고 한다. 다섯 개의 레인의 출발선이 일렬로 붙어있고, 석영이와 건우는 사이가 좋지 않아서 바로 옆 라인에 붙어서 출발할 수 없다. 다섯 명이 출발선에 설 수 있는 경우의 수는?",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [조합하기] 동전 한 개를 두 번 던질 때, 첫 번째에는 앞면, 두번째에는 뒷면이 나오는 경우의 수를 ...
T11_external.push({
  key:"external_조합하기_1045",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동전 한 개를 두 번 던질 때, 첫 번째에는 앞면, 두번째에는 뒷면이 나오는 경우의 수를 구하시오",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1, 식: none"
    };
  }
});

// [조합하기] A, B, C, D, E 다섯 명 중에서 대표 두 명을 뽑는 경우의 수는?...
T11_external.push({
  key:"external_조합하기_1048",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C, D, E 다섯 명 중에서 대표 두 명을 뽑는 경우의 수는?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [조합하기] 세 사람이 가위바위보를 할 때, 승부가 정해지는 경우의 수를 구하시오...
T11_external.push({
  key:"external_조합하기_1049",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 사람이 가위바위보를 할 때, 승부가 정해지는 경우의 수를 구하시오",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [조합하기] A, B, C, D, E 다섯 명이 버스 맨 뒷자리에 나란히 앉을 때, B와 C가 이웃하여...
T11_external.push({
  key:"external_조합하기_1050",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C, D, E 다섯 명이 버스 맨 뒷자리에 나란히 앉을 때, B와 C가 이웃하여 앉는 경우의 수를 구하시오",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: none"
    };
  }
});

// [조합하기] 각 면에 1에서 12까지의 수가 적힌 정십이면체를 두 번 던질 때, 바닥에 오는 면에 적힌...
T11_external.push({
  key:"external_조합하기_1057",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"각 면에 1에서 12까지의 수가 적힌 정십이면체를 두 번 던질 때, 바닥에 오는 면에 적힌 수가 첫 번째에는 10의 약수, 두 번째에는 3의 배수인 경우의 수를 구해라",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [조합하기] 1부터 50까지의 자연수가 적힌 50장의 카드 중에 한 장을 뽑을 때, 50의 약수가 나오...
T11_external.push({
  key:"external_조합하기_1058",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 50까지의 자연수가 적힌 50장의 카드 중에 한 장을 뽑을 때, 50의 약수가 나오는 경우의 수는?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [조합하기] A, B, C, D, E 다섯 명이 자동차 경주를 하려고 한다. A와 B는 서로 사이가 좋...
T11_external.push({
  key:"external_조합하기_1064",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C, D, E 다섯 명이 자동차 경주를 하려고 한다. A와 B는 서로 사이가 좋지 않아서 바로 옆라인에 붙어서는 출발할 수 없다. 다섯 명이 출발선에 설 수 있는 경우의 수를 구하여라.",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [조합하기] 1에서 12까지의 숫자가 적혀 있는 카드 주머니 A에서 1개를 꺼내고 , 5에서 10까지의...
T11_external.push({
  key:"external_조합하기_1068",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1에서 12까지의 숫자가 적혀 있는 카드 주머니 A에서 1개를 꺼내고 , 5에서 10까지의 숫자가 적혀 있는 카드 주머니 B에서 1개를 꺼낼 때, A에서는 3의 배수, B에서는 4의 배수가 나오는 경우의 수는?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [조합하기] 서로 다른 두 개의 주사위 A, B를 동시에 던질 때, 나오는 두 눈의 수의 합이 홀수인 ...
T11_external.push({
  key:"external_조합하기_1075",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서로 다른 두 개의 주사위 A, B를 동시에 던질 때, 나오는 두 눈의 수의 합이 홀수인 경우의 수를 구하시오",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [조합하기] 세 사람이 가위바위보를 할 때, 승부가 정해지지 않는다면 그 경우의 수를 구하시오...
T11_external.push({
  key:"external_조합하기_1089",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 사람이 가위바위보를 할 때, 승부가 정해지지 않는다면 그 경우의 수를 구하시오",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [조합하기] 0, 1, 2, 3, 4, 5의 숫자가 각각 적힌 6개의 공 중에서 2개를 뽑아 만들 수 ...
T11_external.push({
  key:"external_조합하기_1095",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"0, 1, 2, 3, 4, 5의 숫자가 각각 적힌 6개의 공 중에서 2개를 뽑아 만들 수 있는 두 자리 자연수 중 41미만인 수의 개수를 구하시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [조합하기] 10부터 89까지의 자연수가 각각 하나씩 적힌 80장의 카드 중에서 한 장을 뽑을 때, 5...
T11_external.push({
  key:"external_조합하기_1096",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"10부터 89까지의 자연수가 각각 하나씩 적힌 80장의 카드 중에서 한 장을 뽑을 때, 5의 배수가 나오는 경우의 수는?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [조합하기] 2, 3, 5, 7, 9, 11의 수가 각각 적힌 5장의 카드에서 2장을 뽑아 만들 수 있...
T11_external.push({
  key:"external_조합하기_1098",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2, 3, 5, 7, 9, 11의 수가 각각 적힌 5장의 카드에서 2장을 뽑아 만들 수 있는 분수는 모두 몇 개인가?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [조합하기] 1부터 20까지의 자연수가 각각 하나씩 적힌 20장의 카드가 있다. 이 중에서 한 장의 카...
T11_external.push({
  key:"external_조합하기_1099",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 20까지의 자연수가 각각 하나씩 적힌 20장의 카드가 있다. 이 중에서 한 장의 카드를 뽑을 때, 4의 배수가 나오는 경우의 수를 구하시오",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [조합하기] A, B, C, D ,E 다섯명의 계주 선수가 400M를 달리는 순서를 정할 때, B가 세...
T11_external.push({
  key:"external_조합하기_1101",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A, B, C, D ,E 다섯명의 계주 선수가 400M를 달리는 순서를 정할 때, B가 세 번째에 달리도록 순서를 정하는 경우의 수는?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [조합하기] 각 면에 1부터 20까지의 수가 한 개씩 적혀있는 정이십면체를 던질 때, 4의 배수가 나오...
T11_external.push({
  key:"external_조합하기_1102",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"각 면에 1부터 20까지의 수가 한 개씩 적혀있는 정이십면체를 던질 때, 4의 배수가 나오는 경우의 수를 구하시오",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [조합하기] 1부터 40까지의 자연수가 각각 하나씩 적힌 40장의 카드가 있다. 이 중에서 한 장의 카...
T11_external.push({
  key:"external_조합하기_1115",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 40까지의 자연수가 각각 하나씩 적힌 40장의 카드가 있다. 이 중에서 한 장의 카드를 뽑을 때, 4의 배수 또는 5의 배수가 나오는 경우의 수를 구하시오",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [조합하기] 갑, 을, 병, 정 네 명의 선수를 일렬로 세울 때, 갑과 을이 이웃하는 경우의 수를 구하...
T11_external.push({
  key:"external_조합하기_1121",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["조합하기","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"갑, 을, 병, 정 네 명의 선수를 일렬로 세울 때, 갑과 을이 이웃하는 경우의 수를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 조개를 승현이는 23개를 가지고 있고, 지아는 18개, 수빈이는 19개, 현우는 26개를 ...
T11_external.push({
  key:"external_수찾기1_1126",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"조개를 승현이는 23개를 가지고 있고, 지아는 18개, 수빈이는 19개, 현우는 26개를 가지고 있습니다. 가장 많이 조개를 가지고 있는 사람의 개수와 가장 적게 조개를 가지고 있는 사람의 개수의 합을 구하시오.",
      answer:"44",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 44, 식: none"
    };
  }
});

// [수찾기1] 46 이상 73 미만인 3의 배수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값...
T11_external.push({
  key:"external_수찾기1_1127",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 73 미만인 3의 배수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값에서 뺀 차를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 45보다 크고 73보다 작은 홀수를 모두 찾은 후, 해당되는 수 중 평균값과 가장 가까운 ...
T11_external.push({
  key:"external_수찾기1_1128",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45보다 크고 73보다 작은 홀수를 모두 찾은 후, 해당되는 수 중 평균값과 가장 가까운 값과 가장 큰 값을 찾아 더하시오.",
      answer:"130",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 130, 식: none"
    };
  }
});

// [수찾기1] 28과 41 사이에 있는 3의 배수 중에 9로 나누었을 때 나머지가 0인 수를 찾으시오....
T11_external.push({
  key:"external_수찾기1_1129",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"28과 41 사이에 있는 3의 배수 중에 9로 나누었을 때 나머지가 0인 수를 찾으시오.",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기1] 강남역에서 원희네 집까지의 거리는 1500m이고, 유림이네 집까지의 거리는 400m 거리의...
T11_external.push({
  key:"external_수찾기1_1130",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"강남역에서 원희네 집까지의 거리는 1500m이고, 유림이네 집까지의 거리는 400m 거리의 3배이며 다빈이네 집까지의 거리는 원희네에서 100m 더 가야한다. 강남역에서 가장 멀리 사는 사람의 집 거리와 가장 가깝에 사는 사람의 집 거리의 차를 구하시오.",
      answer:"300",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 300, 식: none"
    };
  }
});

// [수찾기1] 로또 번호 67, 66, 77, 74, 88를 뽑았습니다. 이 중 가장 큰 두 개의 번호만...
T11_external.push({
  key:"external_수찾기1_1131",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"로또 번호 67, 66, 77, 74, 88를 뽑았습니다. 이 중 가장 큰 두 개의 번호만 맞췄습니다. 해당되는 두 숫자의 합은 무엇입니까?",
      answer:"165",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 165, 식: none"
    };
  }
});

// [수찾기1] 29 이상, 40 이하의 자연수 중 3의 배수의 개수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1132",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"29 이상, 40 이하의 자연수 중 3의 배수의 개수를 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기1] 다음의 자연수 306 , 502 , 204 , 879 , 322가 있습니다. 이 중 가장 ...
T11_external.push({
  key:"external_수찾기1_1133",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 자연수 306 , 502 , 204 , 879 , 322가 있습니다. 이 중 가장 큰 수와 세 번째로 큰 수를 찾아 더하시오.",
      answer:"1201",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1201, 식: none"
    };
  }
});

// [수찾기1] 45 이상 72 이하의 범위에 포함되는 홀수를 모두 찾고 그 중 가장 큰 수에서 가장 작은...
T11_external.push({
  key:"external_수찾기1_1134",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45 이상 72 이하의 범위에 포함되는 홀수를 모두 찾고 그 중 가장 큰 수에서 가장 작은 수를 뺀 차를 구하시오.",
      answer:"26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 26, 식: none"
    };
  }
});

// [수찾기1] 숫자 카드 5장을 뽑았습니다. (889, 237, 420, 801, 637) 한 장의 카드...
T11_external.push({
  key:"external_수찾기1_1136",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"숫자 카드 5장을 뽑았습니다. (889, 237, 420, 801, 637) 한 장의 카드를 더 뽑았을 때, (698) 이 수보다 더 크면서도 가장 가까운 값을 고르시오.",
      answer:"801",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 801, 식: none"
    };
  }
});

// [수찾기1] 주차장에 네 대의 자동차가 있습니다. 자동차의 번호가 2328, 6786, 1456, 54...
T11_external.push({
  key:"external_수찾기1_1137",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주차장에 네 대의 자동차가 있습니다. 자동차의 번호가 2328, 6786, 1456, 5489일 때, 가장 작은 번호는 무엇입니까?",
      answer:"1456",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1456, 식: none"
    };
  }
});

// [수찾기1] 이번에 도하네 반 친구들의 수학시험 성적이 각각 97, 81, 87, 92, 85점이었습니...
T11_external.push({
  key:"external_수찾기1_1138",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이번에 도하네 반 친구들의 수학시험 성적이 각각 97, 81, 87, 92, 85점이었습니다. 90점 이하의 점수를 받은 친구 수를 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기1] 숫자가 적힌 종이를 임의로 뽑았더니 28, 85, 74, 50, 43가 적혀있습니다. 가장...
T11_external.push({
  key:"external_수찾기1_1139",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"숫자가 적힌 종이를 임의로 뽑았더니 28, 85, 74, 50, 43가 적혀있습니다. 가장 작은 수와 두 번째로 큰 수를 뽑은 사람이 짝이 된다고 할 때, 짝이 되는 두 숫자의 합을 구하시오.",
      answer:"102",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 102, 식: none"
    };
  }
});

// [수찾기1] 가방에 과자가 들어있습니다. 빼빼로 23개, 오레오 30개, 다이제 28개가 있습니다. 가...
T11_external.push({
  key:"external_수찾기1_1140",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가방에 과자가 들어있습니다. 빼빼로 23개, 오레오 30개, 다이제 28개가 있습니다. 가장 많이 들어있는 과자의 개수와 가장 적게 들어있는 과자의 개수의 합을 구하시오.",
      answer:"53",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 53, 식: none"
    };
  }
});

// [수찾기1] 시장에서 영민이는 16500원을 사용했고, 재석이는 15800원을 사용했습니다. 준하는 1...
T11_external.push({
  key:"external_수찾기1_1142",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시장에서 영민이는 16500원을 사용했고, 재석이는 15800원을 사용했습니다. 준하는 15000원을 사용했을 때, 15500원 보다 많이 사용하고 16000원보다 적게 사용 한 돈은 얼마입니까?",
      answer:"15800",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15800, 식: none"
    };
  }
});

// [수찾기1] 물통에 환동, 동우, 미현이가 물을 가득 채웠습니다. 환동이는 14컵, 동우는 12컵, 미...
T11_external.push({
  key:"external_수찾기1_1143",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물통에 환동, 동우, 미현이가 물을 가득 채웠습니다. 환동이는 14컵, 동우는 12컵, 미현 이는 15컵을 사용 하였습니다. 가장 많은 컵을 사용한 사람의 컵은 몇 컵입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [수찾기1] 달리기 시합을 하였습니다. 같은 시간 동안 해찬이는 1780m, 제노는 1567m를, 태용...
T11_external.push({
  key:"external_수찾기1_1144",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"달리기 시합을 하였습니다. 같은 시간 동안 해찬이는 1780m, 제노는 1567m를, 태용이는 1667m를 달렸습니다. 1600m에 가장 가깝게 달린 친구는 몇 m를 달렸습니까?",
      answer:"1567",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1567, 식: none"
    };
  }
});

// [수찾기1] 태경이는 이번 달 버스를 78번, 기차를 55번, 비행기를 65번, 택시를 47번, 자전거...
T11_external.push({
  key:"external_수찾기1_1146",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"태경이는 이번 달 버스를 78번, 기차를 55번, 비행기를 65번, 택시를 47번, 자전거를 10번 탔습니다. 이번 달에 가장 적게 탄 교통 수단의 이용 횟수는 몇 번입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 51 이상 62 미만인 짝수 중에 4로 나누었을 때 나머지가 2인 수를 찾고, 해당되는 모...
T11_external.push({
  key:"external_수찾기1_1147",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51 이상 62 미만인 짝수 중에 4로 나누었을 때 나머지가 2인 수를 찾고, 해당되는 모든 수의 평균값보다 큰 값을 적으시오.",
      answer:"58",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 58, 식: none"
    };
  }
});

// [수찾기1] 다섯 명의 친구가 제비를 뽑았더니 각각 92 , 73 , 65 , 60 , 88가 나왔습니...
T11_external.push({
  key:"external_수찾기1_1149",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다섯 명의 친구가 제비를 뽑았더니 각각 92 , 73 , 65 , 60 , 88가 나왔습니다. 번호 오름차순으로 당번을 한다고 할 때, 가장 먼저 당번을 하게 될 친구의 번호를 적으시오.",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기1] 효정이네 집에서 학교까지는 2039걸음, 효정이네 집에서 병원까지는 1340걸음, 효정이네...
T11_external.push({
  key:"external_수찾기1_1151",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효정이네 집에서 학교까지는 2039걸음, 효정이네 집에서 병원까지는 1340걸음, 효정이네 집에서 학원까지는 1588걸음 입니다. 학교와 병원, 학원 중에서 효정이네 집에서 가장 먼 곳은 몇 걸음입니까?",
      answer:"2039",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2039, 식: none"
    };
  }
});

// [수찾기1] 클립의 무게는 16g입니다. 볼펜은 클립보다 12g 더 무겁고, 지우개는 볼펜보다 20g ...
T11_external.push({
  key:"external_수찾기1_1152",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"클립의 무게는 16g입니다. 볼펜은 클립보다 12g 더 무겁고, 지우개는 볼펜보다 20g 더 무겁습니다. 이때, 가장 가벼운 것은 몇 g입니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [수찾기1] 영수는 강아지 산책은 300분 했습니다. 동훈이는 강아지 산책은 239분, 광수는 강아지 ...
T11_external.push({
  key:"external_수찾기1_1153",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영수는 강아지 산책은 300분 했습니다. 동훈이는 강아지 산책은 239분, 광수는 강아지 산책을 311분 했습니다. 이 중에서 강아지 산책을 많이 시킨 사람의 시간을 몇 분입니까?",
      answer:"311",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 311, 식: none"
    };
  }
});

// [수찾기1] 미술학원에서 모연이는 그림을 55작품 그렸고, 대영이는 82작품, 광남이는 63작품을 그렸...
T11_external.push({
  key:"external_수찾기1_1154",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미술학원에서 모연이는 그림을 55작품 그렸고, 대영이는 82작품, 광남이는 63작품을 그렸을 때, 2의 배수이면서 41로 나누어 떨어지는 작품은 몇 작품입니까?",
      answer:"82",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 82, 식: none"
    };
  }
});

// [수찾기1] 부산행은 6분마다, 광주행은 14분마다, 진주행은 21분마다 버스가 출발합니다. 오전 6시...
T11_external.push({
  key:"external_수찾기1_1155",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부산행은 6분마다, 광주행은 14분마다, 진주행은 21분마다 버스가 출발합니다. 오전 6시 10분에 세 방향으로 고속 버스가 동시에 출발하였다면 다음 번 동시에 출발하는 시각은 6시 몇 분입니까?",
      answer:"52",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 52, 식: none"
    };
  }
});

// [수찾기1] 46 이상 72 미만인 짝수를 모두 찾은 후, 해당되는 수 중에 평균값과 가장 가까운 값을...
T11_external.push({
  key:"external_수찾기1_1156",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 72 미만인 짝수를 모두 찾은 후, 해당되는 수 중에 평균값과 가장 가까운 값을 가장 큰 값에서 뺀 차를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 포도밭에서 월요일에 560송이, 화요일에 442송이, 수요일에 658송이, 목요일에 572...
T11_external.push({
  key:"external_수찾기1_1157",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"포도밭에서 월요일에 560송이, 화요일에 442송이, 수요일에 658송이, 목요일에 572송이 포도를 땄습니다. 600송이에 가장 가깝게 포도를 딴 요일의 포도 개수는 몇 송이입니까?",
      answer:"572",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 572, 식: none"
    };
  }
});

// [수찾기1] A톱니바퀴의 톱니 수는 64개, B톱니바퀴의 톱니 수는 96개 입니다. 회전하기 전에 처음...
T11_external.push({
  key:"external_수찾기1_1158",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A톱니바퀴의 톱니 수는 64개, B톱니바퀴의 톱니 수는 96개 입니다. 회전하기 전에 처음에 맞물렸던 톱니가 다시 만나려면, A톱니바퀴와 B톱니바퀴는 모두 몇 바퀴 돌아야하는지 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기1] 길이가 70m인 도로 위에 처음부터 버드나무는 2m 마다, 느티나무는 5m 마다 심으려고 ...
T11_external.push({
  key:"external_수찾기1_1159",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 70m인 도로 위에 처음부터 버드나무는 2m 마다, 느티나무는 5m 마다 심으려고 합니다. 두 나무가 동시에 심어지는 곳은 몇 군데입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기1] 6과 15의 공배수 중에서 작은 수부터 넷째 번인 수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1160",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6과 15의 공배수 중에서 작은 수부터 넷째 번인 수를 구하시오.",
      answer:"120",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 120, 식: none"
    };
  }
});

// [수찾기1] 원희의 핸드폰 배터리는 87%이고, 정수의 핸드폰 배터리는 92%, 남길이의 핸드폰 배터리...
T11_external.push({
  key:"external_수찾기1_1162",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원희의 핸드폰 배터리는 87%이고, 정수의 핸드폰 배터리는 92%, 남길이의 핸드폰 배터리는 71%입니다. 배터리양의 차가 가장 크게 될 때의 차를 구하시오.",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [수찾기1] 어느 거리에 각각 60 , 90 , 28 , 56 , 48, 101 km/h로 달리는 차량...
T11_external.push({
  key:"external_수찾기1_1163",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 거리에 각각 60 , 90 , 28 , 56 , 48, 101 km/h로 달리는 차량들이 있습니다. 이 거리의 제한 속도가 85km/h라고 할 때, 규정을 준수하지 않은 차량의 수는?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 기홍이는 계단을 37개, 승기는 46개, 건희는 29개 올랐습니다. 이 중 가장 적은 계단...
T11_external.push({
  key:"external_수찾기1_1164",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기홍이는 계단을 37개, 승기는 46개, 건희는 29개 올랐습니다. 이 중 가장 적은 계단을 오른 사람의 계단 수는?",
      answer:"29",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 29, 식: none"
    };
  }
});

// [수찾기1] 공사장에 곧게 난 도로에서 시작점을 같이 하여 빨간 깃발은 12m 간격으로, 노란 깃발은 ...
T11_external.push({
  key:"external_수찾기1_1165",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공사장에 곧게 난 도로에서 시작점을 같이 하여 빨간 깃발은 12m 간격으로, 노란 깃발은 8m 간격으로 꽂았습니다. 두 색의 깃발이 처음으로 같이 꽂히는 곳은 시작점에서 몇 m 떨어진 곳입니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기1] A마트는 수박을 132개 판매하고, B마트는 수박을 119개 판매합니다. C마트는 126개...
T11_external.push({
  key:"external_수찾기1_1167",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A마트는 수박을 132개 판매하고, B마트는 수박을 119개 판매합니다. C마트는 126개 판매할 때, 가장 많이 판매하는 곳 수박 개수와 가장 적게 판매하는 곳 수박 개수의 합을 구하시오.",
      answer:"251",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 251, 식: none"
    };
  }
});

// [수찾기1] 동아리 부서에는 연극부 58명, 경제부 77명, 댄스부 49명이 있습니다. 이 중에서 2의...
T11_external.push({
  key:"external_수찾기1_1169",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동아리 부서에는 연극부 58명, 경제부 77명, 댄스부 49명이 있습니다. 이 중에서 2의 배수이면서 29로 나누어떨어지는 동아리 부서의 학생 수는 몇 명입니까?",
      answer:"58",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 58, 식: none"
    };
  }
});

// [수찾기1] A 버스는 15분, B 버스는 10분마다 출발한다고 합니다. 지금 동시에 출발했다면 앞으로...
T11_external.push({
  key:"external_수찾기1_1171",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A 버스는 15분, B 버스는 10분마다 출발한다고 합니다. 지금 동시에 출발했다면 앞으로 두 버스가 다섯 번째로 동시에 출발하는 시간은 몇 분 후입니까?",
      answer:"150",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 150, 식: none"
    };
  }
});

// [수찾기1] 683, 304, 631 중 백의 자리 숫자가 6이고, 일의 자리 숫자가 3인 숫자를 찾으...
T11_external.push({
  key:"external_수찾기1_1173",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"683, 304, 631 중 백의 자리 숫자가 6이고, 일의 자리 숫자가 3인 숫자를 찾으시오.",
      answer:"683",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 683, 식: none"
    };
  }
});

// [수찾기1] 다음의 수 36,30, 24, 33, 27은 A이상인 자연수를 쓴 것이라고 했을 때, A가...
T11_external.push({
  key:"external_수찾기1_1175",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 수 36,30, 24, 33, 27은 A이상인 자연수를 쓴 것이라고 했을 때, A가 될 수 있는 자연수 중 가장 큰 수는 얼마인지 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기1] 이현이의 학교는 점심시간이 45분이고, 수주의 학교는 점심시간이 66분, 혜진이의 학교는 ...
T11_external.push({
  key:"external_수찾기1_1176",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이현이의 학교는 점심시간이 45분이고, 수주의 학교는 점심시간이 66분, 혜진이의 학교는 점심시간이 72분일 때, 가장 오래 점심시간을 갖는 학교는 몇 분입니까?",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [수찾기1] 16 이상, 33 미만의 자연수 중 24보다 큰 수의 합을 구하시오....
T11_external.push({
  key:"external_수찾기1_1177",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"16 이상, 33 미만의 자연수 중 24보다 큰 수의 합을 구하시오.",
      answer:"228",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 228, 식: none"
    };
  }
});

// [수찾기1] 지용이의 친척은 34명이고, 대성이의 친척은 28명, 영배의 친척은 16명입니다. 이 중에...
T11_external.push({
  key:"external_수찾기1_1178",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지용이의 친척은 34명이고, 대성이의 친척은 28명, 영배의 친척은 16명입니다. 이 중에서, 64의 약수인 친척 수를 고르시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [수찾기1] 두 개의 직선 위에 시작점을 같이하여, 네모 모양과 별 모양을 각각 30mm, 20mm 간...
T11_external.push({
  key:"external_수찾기1_1180",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 개의 직선 위에 시작점을 같이하여, 네모 모양과 별 모양을 각각 30mm, 20mm 간격으로 그리고 있습니다. 두 모양이 처음부터 200mm 사이에서 같은 위치에 그려지는 곳이 몇 곳인지 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기1] 학교 운동장 둘레에 교문에서부터 8m 간격으로 나무를 심고, 20m 간격으로 가로등을 설치...
T11_external.push({
  key:"external_수찾기1_1181",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"학교 운동장 둘레에 교문에서부터 8m 간격으로 나무를 심고, 20m 간격으로 가로등을 설치하는데 나무와 가로등이 겹쳐질 경우에는 가로등을 세우려고 합니다. 운동장의 둘레가 400m라면 나무는 모두 몇 그루 필요합니까?",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [수찾기1] 소영이는 대구역까지 가기 위해 버스를 탔습니다. 학교에서 대구역까지의 거리는 730m, 도...
T11_external.push({
  key:"external_수찾기1_1182",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소영이는 대구역까지 가기 위해 버스를 탔습니다. 학교에서 대구역까지의 거리는 730m, 도서관에서 대구역까지의 거리는 816m입니다. 집에서 대구역까지의 거리는 788m일 때, 800m에 가장 가까운 거리는 몇 m입니까?",
      answer:"788",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 788, 식: none"
    };
  }
});

// [수찾기1] 어떤 두 자리수에 9를 곱해야 할 것을 잘못하여 일의 자리 숫자와 십의 자리 숫자를 바꾸어...
T11_external.push({
  key:"external_수찾기1_1183",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 두 자리수에 9를 곱해야 할 것을 잘못하여 일의 자리 숫자와 십의 자리 숫자를 바꾸어 14를 더하였더니 68이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"405",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 405, 식: none"
    };
  }
});

// [수찾기1] 은별, 하늘, 서율이는 배지를 모읍니다. 1년동안 은별이는 914개, 하늘이는 943개, ...
T11_external.push({
  key:"external_수찾기1_1184",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은별, 하늘, 서율이는 배지를 모읍니다. 1년동안 은별이는 914개, 하늘이는 943개, 서율이는 928개 모았을 때, 935개에 가장 가깝게 배지를 모은 사람의 개수는 몇 개인가?",
      answer:"928",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 928, 식: none"
    };
  }
});

// [수찾기1] 민지가 읽으려고 하는 소설책은 700쪽, 위인전은 650쪽, 만화책은 500쪽 입니다. 하...
T11_external.push({
  key:"external_수찾기1_1186",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민지가 읽으려고 하는 소설책은 700쪽, 위인전은 650쪽, 만화책은 500쪽 입니다. 하루에 소설책은 70쪽씩, 위인전은 80쪽씩, 만화책은 60쪽씩 읽는다면, 4일 동안 읽었을 때에 읽지 않은 남은 쪽수가 가장 적은 책의 쪽수는 몇 입니까?",
      answer:"260",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 260, 식: none"
    };
  }
});

// [수찾기1] 소희의 집은 56평이고, 선예의 집은 48평, 유빈이의 집은 51평입니다. 이 중에서, 6...
T11_external.push({
  key:"external_수찾기1_1187",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소희의 집은 56평이고, 선예의 집은 48평, 유빈이의 집은 51평입니다. 이 중에서, 6의 배수이면서 8로 나누어떨어지는 집 평수를 고르시오.",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: none"
    };
  }
});

// [수찾기1] 어떤 두 자리수에 5를 곱해야 할 것을 잘못하여 두 자리 수의 십의 자리 숫자와 일의 자리...
T11_external.push({
  key:"external_수찾기1_1188",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 두 자리수에 5를 곱해야 할 것을 잘못하여 두 자리 수의 십의 자리 숫자와 일의 자리 숫자를 바꾸어 4를 곱했더니 68이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"85",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 85, 식: none"
    };
  }
});

// [수찾기1] 지희는 A개의 사탕을 가지고 있습니다. 사탕은 10개보다 많고 19개보다 적습니다. 지희가...
T11_external.push({
  key:"external_수찾기1_1190",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지희는 A개의 사탕을 가지고 있습니다. 사탕은 10개보다 많고 19개보다 적습니다. 지희가 가지고 있는 사탕의 수가 4의 배수라고 할 때, A에 들어갈 수 있는 모든 수의 합을 구하시오.",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [수찾기1] 각자 사탕이 30개 있습니다. 수영이는 사탕의 1/6을 갖고, 태연이는 사탕의 7/30을 ...
T11_external.push({
  key:"external_수찾기1_1191",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"각자 사탕이 30개 있습니다. 수영이는 사탕의 1/6을 갖고, 태연이는 사탕의 7/30을 가졌습니다. 윤아는 사탕의 2/5을 가졌을 때, 가장 많이 가진 사람의 사탕 개수와 가장 적게 가진 사람의 사탕 개수의 합을 구하시오.",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [수찾기1] 다음의 자연수 489, 813, 905, 576, 377가 있을 때, 가장 큰 값을 제외하...
T11_external.push({
  key:"external_수찾기1_1192",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 자연수 489, 813, 905, 576, 377가 있을 때, 가장 큰 값을 제외하면 다음으로 가장 큰 값은 무엇입니까?",
      answer:"813",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 813, 식: none"
    };
  }
});

// [수찾기1] 지음이는 학교에서 집까지 버스로 24정거장을 지나고, 서하는 학교에서 집까지 버스로 13정...
T11_external.push({
  key:"external_수찾기1_1194",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지음이는 학교에서 집까지 버스로 24정거장을 지나고, 서하는 학교에서 집까지 버스로 13정거장을 지납니다. 고윤이는 학교에서 집까지 버스로 32정거장을 지날 때, 20정거장 이상 지나는 사람의 정거장 개수의 합을 구하시오.",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기1] 어떤 두 자리수에 14를 곱해야 할 것을 잘못하여 일의 자리 숫자와 십의 자리 숫자를 바뀐...
T11_external.push({
  key:"external_수찾기1_1195",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 두 자리수에 14를 곱해야 할 것을 잘못하여 일의 자리 숫자와 십의 자리 숫자를 바뀐 수에 14를 곱하였더니 144가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"434",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 434, 식: none"
    };
  }
});

// [수찾기1] 번호가 적힌 종이를 5명이 뽑았더니 38, 48, 76, 16, 31가 나왔습니다. 가장 ...
T11_external.push({
  key:"external_수찾기1_1196",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"번호가 적힌 종이를 5명이 뽑았더니 38, 48, 76, 16, 31가 나왔습니다. 가장 큰 수를 제외하고 나머지 중에 가장 큰 두 수를 뽑은 사람이 팀을 하기로 했을 때, 팀이 될 두 사람의 숫자를 모두 더하시오.",
      answer:"86",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 86, 식: none"
    };
  }
});

// [수찾기1] 어느 고속버스 터미널에서 버스가 전주행은 12분, 마산행은 18분마다 출발한다고 합니다. ...
T11_external.push({
  key:"external_수찾기1_1197",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 고속버스 터미널에서 버스가 전주행은 12분, 마산행은 18분마다 출발한다고 합니다. 오전 5시에 버스가 두 방향으로 동시에 출발한다면, 다음 번 동시에 출발하는 시간은 5시 몇 분인가요?",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기1] 도로 위에 시작점을 같이 하여 은행나무는 15m 간격으로 꽃은 9m 간격으로 심으려고 합니...
T11_external.push({
  key:"external_수찾기1_1198",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도로 위에 시작점을 같이 하여 은행나무는 15m 간격으로 꽃은 9m 간격으로 심으려고 합니다. 시작점 이후 은행나무와 꽃이 처음으로 같이 겹쳐지는 곳은 시작지점으로부터 몇 m 떨어진 곳입니까?",
      answer:"45",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 45, 식: none"
    };
  }
});

// [수찾기1] 67.2, 38.0, 57.6, 56.9, 97.9가 적힌 숫자 카드 중에서 가장 작은 두...
T11_external.push({
  key:"external_수찾기1_1199",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"67.2, 38.0, 57.6, 56.9, 97.9가 적힌 숫자 카드 중에서 가장 작은 두 수를 찾아 더하시오.",
      answer:"94.9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 94.9, 식: none"
    };
  }
});

// [수찾기1] 425, 395, 495, 550 중에서 500에 가장 가까운 수는 무엇입니까?...
T11_external.push({
  key:"external_수찾기1_1200",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"425, 395, 495, 550 중에서 500에 가장 가까운 수는 무엇입니까?",
      answer:"495",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 495, 식: none"
    };
  }
});

// [수찾기1] 46보다 크거나 같고, 73보다 작은 홀수를 모두 찾은 후, 해당되는 수 중에 이들의 중앙...
T11_external.push({
  key:"external_수찾기1_1201",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46보다 크거나 같고, 73보다 작은 홀수를 모두 찾은 후, 해당되는 수 중에 이들의 중앙값을 찾으시오.",
      answer:"59",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 59, 식: none"
    };
  }
});

// [수찾기1] 음료수 자판기에서 주희는 22캔을 뽑았고 리영이는 주희보다 4캔 적게 뽑았습니다. 주영이는...
T11_external.push({
  key:"external_수찾기1_1202",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"음료수 자판기에서 주희는 22캔을 뽑았고 리영이는 주희보다 4캔 적게 뽑았습니다. 주영이는 25캔을 뽑았을 때, 가장 많이 뽑은 사람의 음료수 캔은 몇 캔입니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [수찾기1] 어느 자동차 회사에서 판매하는 차량들의 연비는 각각 78, 55, 65, 47, 10 km...
T11_external.push({
  key:"external_수찾기1_1204",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 자동차 회사에서 판매하는 차량들의 연비는 각각 78, 55, 65, 47, 10 km/l 입니다. 가장 연비가 좋은 차량을 구매하려고 할 때, 구매하게 될 차량의 연비는 몇 km/l입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 건물마다 17, 23, 41, 29, 32층이 있습니다. 재윤이는 30층까지는 계단을 이용...
T11_external.push({
  key:"external_수찾기1_1206",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"건물마다 17, 23, 41, 29, 32층이 있습니다. 재윤이는 30층까지는 계단을 이용한다고 할 때, 계단으로 다닐 수 있는 건물의 수를 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기1] 다음의 숫자 45, 99, 73, 50, 44가 있습니다. 이 숫자들 중 가장 큰 값과 중...
T11_external.push({
  key:"external_수찾기1_1207",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 숫자 45, 99, 73, 50, 44가 있습니다. 이 숫자들 중 가장 큰 값과 중앙값을 찾아 두 수의 차를 구하시오.",
      answer:"49",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 49, 식: none"
    };
  }
});

// [수찾기1] 동물원에 원숭이가 70마리가 있고, 토끼 43마리, 호랑이 57마리가 있습니다. 가장 많은...
T11_external.push({
  key:"external_수찾기1_1208",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 원숭이가 70마리가 있고, 토끼 43마리, 호랑이 57마리가 있습니다. 가장 많은 동물의 마릿수와 가장 적은 동물의 마릿수를 합하시오.",
      answer:"113",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 113, 식: none"
    };
  }
});

// [수찾기1] 29 이상 41 미만인 3의 배수이면서 6으로 나누었을 때 나머지가 0인 수의 개수를 구하...
T11_external.push({
  key:"external_수찾기1_1209",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"29 이상 41 미만인 3의 배수이면서 6으로 나누었을 때 나머지가 0인 수의 개수를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 46 이상 72 이하인 홀수가 있습니다. 이 중에 53보다 작은 수를 모두 더하여 값을 기...
T11_external.push({
  key:"external_수찾기1_1211",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 72 이하인 홀수가 있습니다. 이 중에 53보다 작은 수를 모두 더하여 값을 기입하시오.",
      answer:"147",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 147, 식: none"
    };
  }
});

// [수찾기1] 책상 위에 숫자가 적힌 다섯 개의 공이 놓여 있습니다. 아무 공을 하나 집었더니 숫자가 4...
T11_external.push({
  key:"external_수찾기1_1212",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"책상 위에 숫자가 적힌 다섯 개의 공이 놓여 있습니다. 아무 공을 하나 집었더니 숫자가 42였고, 남은 네 개의 공에는 32, 47, 83, 94가 적혀 있습니다. 남은 공 중에 잡은 공과 가장 가까운 수를 찾으시오.",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: none"
    };
  }
});

// [수찾기1] 어느 자동차 회사에서 판매하는 차량들의 연비는 각각 78, 55, 65, 47, 10 km...
T11_external.push({
  key:"external_수찾기1_1213",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 자동차 회사에서 판매하는 차량들의 연비는 각각 78, 55, 65, 47, 10 km/l 입니다. 가장 연비가 좋지 않은 차량은 판매를 중지하려고 할 때, 폐기될 차량의 연비는 몇 km/l입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 오늘 서울은 비가 423분 동안 내렸고, 전주는 비가 618분 내렸습니다. 부산은 375분...
T11_external.push({
  key:"external_수찾기1_1214",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 서울은 비가 423분 동안 내렸고, 전주는 비가 618분 내렸습니다. 부산은 375분 내렸을 때, 5의 배수이면서 75로 나누어떨어지는 지역은 비가 몇 분 내렸습니까?",
      answer:"375",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 375, 식: none"
    };
  }
});

// [수찾기1] 다음의 숫자 74, 42, 39, 22, 72가 있을 때, 위 숫자들의 평균값과 가장 가까...
T11_external.push({
  key:"external_수찾기1_1216",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 숫자 74, 42, 39, 22, 72가 있을 때, 위 숫자들의 평균값과 가장 가까운 값에서 가장 작은 값을 뺀 차를 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기1] 경아는 요리학원을 다니고 있습니다. 오늘 배운 레시피에는 설탕이 78스푼, 소금이 55스푼...
T11_external.push({
  key:"external_수찾기1_1217",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경아는 요리학원을 다니고 있습니다. 오늘 배운 레시피에는 설탕이 78스푼, 소금이 55스푼, 참기름이 65스푼, 참깨가 47스푼, 고추가루가 10스푼 들어갑니다. 가장 많이 넣어야 되는 재료는 몇 스푼이 필요합니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 혜주는 11, 현수는 23, 수아는 14, 영진이는 5가 쓰여져 있는 숫자 카드를 가지고 ...
T11_external.push({
  key:"external_수찾기1_1218",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜주는 11, 현수는 23, 수아는 14, 영진이는 5가 쓰여져 있는 숫자 카드를 가지고 있습니다. 22의 약수인 숫자 카드를 고르시오.",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 현진이가 교과서에 필기를 해둔 페이지는 162, 334, 552, 320, 980쪽입니다....
T11_external.push({
  key:"external_수찾기1_1220",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현진이가 교과서에 필기를 해둔 페이지는 162, 334, 552, 320, 980쪽입니다. 앞쪽부터 순서대로 공부하고 있고, 지금 334페이지를 읽었을 때, 다음으로 공부하게 될 페이지 수를 고르시오.",
      answer:"552",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 552, 식: none"
    };
  }
});

// [수찾기1] 지현이는 6일마다, 은미는 8일마다 장을 보러 갑니다. 4월 23일에 지현이와 은미가 같이...
T11_external.push({
  key:"external_수찾기1_1222",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지현이는 6일마다, 은미는 8일마다 장을 보러 갑니다. 4월 23일에 지현이와 은미가 같이 장에 갔다면, 다음번에 같이 장에 가는 날은 A월 B일 입니다. 4월은 30일까지 있을때, A+B의 값을 구하시오.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [수찾기1] 사과 84개와 144개가 있습니다. 이것을 되도록 많은 사람들에게 남김없이 똑같이 나누어 ...
T11_external.push({
  key:"external_수찾기1_1223",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사과 84개와 144개가 있습니다. 이것을 되도록 많은 사람들에게 남김없이 똑같이 나누어 주려고 할 때, 몇 명에게 나누어 줄 수 있습니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 51보다 크고 62보다 같거나 작은 모든 짝수를 찾아 해당되는 수의 평균값보다 작은 값을 ...
T11_external.push({
  key:"external_수찾기1_1225",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51보다 크고 62보다 같거나 작은 모든 짝수를 찾아 해당되는 수의 평균값보다 작은 값을 모두 더하시오.",
      answer:"156",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 156, 식: none"
    };
  }
});

// [수찾기1] 태준이는 수학 문제를 풀고 있습니다. 오늘 덧셈 문제 78개, 뺄셈 문제 55개, 곱셈 문...
T11_external.push({
  key:"external_수찾기1_1226",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"태준이는 수학 문제를 풀고 있습니다. 오늘 덧셈 문제 78개, 뺄셈 문제 55개, 곱셈 문제 65개, 나눗셈 문제 47개를 풀었다면, 가장 조금 푼 유형은 몇 문제 풀었습니까?/",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: none"
    };
  }
});

// [수찾기1] 부산으로 여행을 갔습니다. 주이는 집에서부터 부산까지 245분이 걸렸고, 승희는 집에서 부...
T11_external.push({
  key:"external_수찾기1_1227",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부산으로 여행을 갔습니다. 주이는 집에서부터 부산까지 245분이 걸렸고, 승희는 집에서 부산까지 189분이 걸렸습니다. 정훈이는 집에서 부산까지 213분이 걸렸을 때, 부산까지 가장 오래 걸린 사람의 시간과 가장 적게 걸린 사람의 차를 구하시오.",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기1] 가로가 36cm, 세로가 45cm인 직사각형을 남는 부분 없이 잘라서 크기가 같은 정사각형...
T11_external.push({
  key:"external_수찾기1_1228",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로가 36cm, 세로가 45cm인 직사각형을 남는 부분 없이 잘라서 크기가 같은 정사각형 여러 개를 만들려고 합니다. 모두 몇 가지 종류의 정사각형을 만들 수 있겠습니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기1] 백의 자리 숫자가 5, 일의 자리 숫자가 3인 세 자리 수 중에서 가장 큰 수보다 327 ...
T11_external.push({
  key:"external_수찾기1_1229",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"백의 자리 숫자가 5, 일의 자리 숫자가 3인 세 자리 수 중에서 가장 큰 수보다 327 더 큰 수는 얼마입니까?",
      answer:"920",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 920, 식: none"
    };
  }
});

// [수찾기1] 고속버스 터미널에서 버스가 대전행은 15분, 광주행은 12분마다 출발한다고 합니다. 오전 ...
T11_external.push({
  key:"external_수찾기1_1230",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"고속버스 터미널에서 버스가 대전행은 15분, 광주행은 12분마다 출발한다고 합니다. 오전 7시에 대전과 광주로 가는 첫차가 동시에 출발한다면, 다섯째 번으로 동시에 출발하는 시각은 언제입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 가영, 도하, 의진이는 자리를 바꿨습니다. 가영이는 원래 자리보다 13칸 이동하였고, 도하...
T11_external.push({
  key:"external_수찾기1_1232",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가영, 도하, 의진이는 자리를 바꿨습니다. 가영이는 원래 자리보다 13칸 이동하였고, 도하는 원래 자리보다 20칸을 이동했습니다. 의진이는 원래 자리보다 8칸을 이동했을 때, 가장 많이 이동한 칸의 개수와 가장 적게 이동한 칸의 개수의 차를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 2000년도 중학교 평균 입학생은 1210명이였습니다. 2010년도 중학교 평균 입학생은 ...
T11_external.push({
  key:"external_수찾기1_1233",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2000년도 중학교 평균 입학생은 1210명이였습니다. 2010년도 중학교 평균 입학생은 1080명, 2020년도 중학교 평균 입학생은 823명입니다. 이때, 1000명 이상 1250명 이하가 아닌 평균 입학생은 몇 명입니까?",
      answer:"823",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 823, 식: none"
    };
  }
});

// [수찾기1] 2.87, 2.53, 0.73, 3.64의 4가지 수 중에서 가장 큰 수는 A이고, 두 번...
T11_external.push({
  key:"external_수찾기1_1234",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2.87, 2.53, 0.73, 3.64의 4가지 수 중에서 가장 큰 수는 A이고, 두 번째로 작은 수는 B이다. A+B의 값을 구하시오.",
      answer:"6.17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6.17, 식: none"
    };
  }
});

// [수찾기1] 해원이네 TV는 채널이 892개가 나오고, 희주네 TV는 채널이 989개, 호수네 TV는 ...
T11_external.push({
  key:"external_수찾기1_1235",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"해원이네 TV는 채널이 892개가 나오고, 희주네 TV는 채널이 989개, 호수네 TV는 채널이 811개가 나옵니다. 830개 이상 나오는 사람의 채널 개수를 모두 더하시오.",
      answer:"1881",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1881, 식: none"
    };
  }
});

// [수찾기1] 90과 120의 최대공약수를 A, 16과 24의 최소공배수를 B 라고 할 때, A와B중 더...
T11_external.push({
  key:"external_수찾기1_1236",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"90과 120의 최대공약수를 A, 16과 24의 최소공배수를 B 라고 할 때, A와B중 더 큰 수의 값을 구하시오.",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: none"
    };
  }
});

// [수찾기1] 성아, 예현, 승완이는 이틀동안 줄넘기를 한 횟수를 기록하였더니 성아는 530회, 예현이는...
T11_external.push({
  key:"external_수찾기1_1237",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성아, 예현, 승완이는 이틀동안 줄넘기를 한 횟수를 기록하였더니 성아는 530회, 예현이는 762회, 승완이는 857회 였습니다. 이 중에서 6의 배수이면서 127로 나누어 떨어지는 줄넘기 횟수를 고르시오.",
      answer:"762",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 762, 식: none"
    };
  }
});

// [수찾기1] 다음의 수 13 1/5, 15.9, 16.4 중 15이상 20이하가 아닌 수는 무엇입니까?...
T11_external.push({
  key:"external_수찾기1_1238",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 수 13 1/5, 15.9, 16.4 중 15이상 20이하가 아닌 수는 무엇입니까?",
      answer:"13 1/5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13 1/5, 식: none"
    };
  }
});

// [수찾기1] 세 명의 친구는 눈싸움을 했습니다. 경수는 친구들을 123번 맞혔고, 백현이는 98번을 맞...
T11_external.push({
  key:"external_수찾기1_1239",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 명의 친구는 눈싸움을 했습니다. 경수는 친구들을 123번 맞혔고, 백현이는 98번을 맞혔습니다. 세훈이는 친구들을 111번 맞혔을 때, 맞힌 횟수의 차가 가장 크게 될 때의 차를 구하시오.",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [수찾기1] 웅이는 햄버거 20개를 먹었고 희선이는 13개, 복희는 18개, 하진이는 11개를 먹었습니...
T11_external.push({
  key:"external_수찾기1_1240",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"웅이는 햄버거 20개를 먹었고 희선이는 13개, 복희는 18개, 하진이는 11개를 먹었습니다. 이 중에서 15개 이상 먹은 사람의 햄버거 개수를 찾아 그 수를 모두 더하시오.",
      answer:"38",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 38, 식: none"
    };
  }
});

// [수찾기1] 네 명의 친구가 식당에서 대기 번호표를 뽑았습니다. 장원이의 번호표는 892, 다혜의 번호...
T11_external.push({
  key:"external_수찾기1_1241",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"네 명의 친구가 식당에서 대기 번호표를 뽑았습니다. 장원이의 번호표는 892, 다혜의 번호표는 1320, 지석이의 번호표는 998, 수은이의 번호표는 1289입니다. 이 중에서 가장 큰 수를 가진 번호표와 가장 작은 수를 가진 번호표의 합을 구하시오.",
      answer:"2212",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2212, 식: none"
    };
  }
});

// [수찾기1] 제비를 뽑았더니 번호가 31, 75, 27, 49, 60였습니다. 숫자가 가장 큰 사람이 ...
T11_external.push({
  key:"external_수찾기1_1242",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"제비를 뽑았더니 번호가 31, 75, 27, 49, 60였습니다. 숫자가 가장 큰 사람이 이기기로 했는데, 원래 가장 큰 숫자를 가진 사람이 제비를 잃어버려 탈락했습니다. 그렇다면 이기게 되는 사람의 숫자는 몇입니까?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기1] A배는 80분마다, B배는 120분마다 출발한다고 합니다. 오전 10시에 A배와 B가 동시...
T11_external.push({
  key:"external_수찾기1_1244",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A배는 80분마다, B배는 120분마다 출발한다고 합니다. 오전 10시에 A배와 B가 동시에 출발하였다면, 다음번 동시에 출발할 시각은 A시 B분입니다. A+B의 값을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기1] 주현이는 과학책을 1100쪽 읽었고, 사회책은 987쪽, 미술책은 1089쪽을 읽었습니다....
T11_external.push({
  key:"external_수찾기1_1245",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주현이는 과학책을 1100쪽 읽었고, 사회책은 987쪽, 미술책은 1089쪽을 읽었습니다. 이 중에서 가장 많이 읽은 책의 쪽수와 가장 적게 읽은 책의 쪽수의 차를 구하시오.",
      answer:"113",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 113, 식: none"
    };
  }
});

// [수찾기1] 친구들이 등심 25인분, 안심 30인분, 갈비살 17인분을 준비하였는데, 모든 종류를 동시...
T11_external.push({
  key:"external_수찾기1_1246",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"친구들이 등심 25인분, 안심 30인분, 갈비살 17인분을 준비하였는데, 모든 종류를 동시에 1인분씩 구워 먹으려고 합니다. 먹다가 더 이상 묶어서 먹을 수 없게 되어 남는 고기는 보관하려고 할 때, 남은 고기는 몇 인분입니까?",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [수찾기1] 로또 번호를 5가지 뽑았는데, 그 수는 23, 75, 38, 13, 41입니다. 가장 큰 ...
T11_external.push({
  key:"external_수찾기1_1248",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"로또 번호를 5가지 뽑았는데, 그 수는 23, 75, 38, 13, 41입니다. 가장 큰 수와 세 번째로 큰 수의 번호를 맞췄을 때, 해당되는 두 수의 합을 구하시오.",
      answer:"113",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 113, 식: none"
    };
  }
});

// [수찾기1] 오늘 식당에 온 청소년은 1503명, 어린이는 845명, 성인은 1130명입니다. 그 중에...
T11_external.push({
  key:"external_수찾기1_1250",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 식당에 온 청소년은 1503명, 어린이는 845명, 성인은 1130명입니다. 그 중에서 가장 많이 온 사람의 수와 가장 적게 온 사람 수의 합을 구하시오.",
      answer:"2348",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2348, 식: none"
    };
  }
});

// [수찾기1] 46 이상 72 이하인 짝수가 있습니다. 이 중에 53보다 작은 수를 모두 더하여 값을 기...
T11_external.push({
  key:"external_수찾기1_1251",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 72 이하인 짝수가 있습니다. 이 중에 53보다 작은 수를 모두 더하여 값을 기입하시오.",
      answer:"196",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 196, 식: none"
    };
  }
});

// [수찾기1] 46 이상 73 미만인 홀수를 모두 찾은 후, 해당되는 수의 중앙값과 평균값에 가장 가까운...
T11_external.push({
  key:"external_수찾기1_1252",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 73 미만인 홀수를 모두 찾은 후, 해당되는 수의 중앙값과 평균값에 가장 가까운 수를 찾아 큰 값에서 작은 값을 뺀 차를 구하시오.",
      answer:"0",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0, 식: none"
    };
  }
});

// [수찾기1] 점심시간에 희주는 400g의 사과를 1/2 만큼 먹었고, 민영이는 500g의 사과를 1/4...
T11_external.push({
  key:"external_수찾기1_1253",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"점심시간에 희주는 400g의 사과를 1/2 만큼 먹었고, 민영이는 500g의 사과를 1/4만큼 먹었습니다. 주희는 600g의 사과를 1/5 만큼 먹었을 때 가장 많이 먹은 그램 수와 적게 먹은 그램 수의 차를 구하시오.",
      answer:"80",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 80, 식: none"
    };
  }
});

// [수찾기1] 78 , 55 , 86 , 68 , 95의 숫자 중 67보다 큰 수의 개수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1254",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"78 , 55 , 86 , 68 , 95의 숫자 중 67보다 큰 수의 개수를 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기1] 놀이공원에서 롤러코스터 대기 시간은 120분이고 회전목마 대기 시간은 68분, 바이킹 대기...
T11_external.push({
  key:"external_수찾기1_1255",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이공원에서 롤러코스터 대기 시간은 120분이고 회전목마 대기 시간은 68분, 바이킹 대기 시간은 135분일 때, 가장 긴 대기 시간은 몇 분입니까?",
      answer:"135",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 135, 식: none"
    };
  }
});

// [수찾기1] 캐릭터 딱지를 예진이는 1730장, 연주는 1782장, 채원이는 1801장, 예나는 174...
T11_external.push({
  key:"external_수찾기1_1256",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 예진이는 1730장, 연주는 1782장, 채원이는 1801장, 예나는 1748장을 모았습니다. 1750장보다 더 많이 딱지를 모은 사람은 몇 명입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 공찬이네 목장에는 소 78마리, 돼지 55마리, 양 65마리, 닭 47마리를 키우고 있습니...
T11_external.push({
  key:"external_수찾기1_1257",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공찬이네 목장에는 소 78마리, 돼지 55마리, 양 65마리, 닭 47마리를 키우고 있습니다. 가장 조금 키우고 있는 동물의 수를 찾으시오.",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: none"
    };
  }
});

// [수찾기1] 구경이의 한글 타자수는 478이고, 민구의 한글 타자수는 422, 사해의 한글 타자수는 5...
T11_external.push({
  key:"external_수찾기1_1258",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"구경이의 한글 타자수는 478이고, 민구의 한글 타자수는 422, 사해의 한글 타자수는 577입니다. 이때, 타자수가 450 이상이면서 600 이하가 아닌 사람의 타자수는 몇 타자입니까?",
      answer:"422",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 422, 식: none"
    };
  }
});

// [수찾기1] 다음의 숫자 74, 42, 39, 22, 72가 있습니다. 이 중 가장 작은 값과 평균값에...
T11_external.push({
  key:"external_수찾기1_1259",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 숫자 74, 42, 39, 22, 72가 있습니다. 이 중 가장 작은 값과 평균값에서 가장 가까운 값을 찾아 합을 구하시오.",
      answer:"64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 64, 식: none"
    };
  }
});

// [수찾기1] 나영이네 동네에서는 백신 접종을 하고 있습니다. 오늘 연령별로 50대 78명, 40대 55...
T11_external.push({
  key:"external_수찾기1_1260",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나영이네 동네에서는 백신 접종을 하고 있습니다. 오늘 연령별로 50대 78명, 40대 55명, 30대 65명, 20대 47명, 10대 10명이 접종을 했습니다. 이 때, 가장 적게 접종을 받은 연령대의 인원은 몇 명입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 병진이의 반에서 당번 횟수를 정하려 합니다. 가장 적은 횟수를 한 사람은 가장 많이 한 사...
T11_external.push({
  key:"external_수찾기1_1261",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"병진이의 반에서 당번 횟수를 정하려 합니다. 가장 적은 횟수를 한 사람은 가장 많이 한 사람의 횟수까지 더 해야합니다. 일년 동안 각각 27, 29, 30, 25, 33회 했다면, 가장 적게한 사람은 몇 회 더 해야합니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기1] 머리를 지우는 21cm 잘랐고, 백현이는 11cm, 혜훈이는 14cm 잘랐습니다. 가장 조...
T11_external.push({
  key:"external_수찾기1_1262",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"머리를 지우는 21cm 잘랐고, 백현이는 11cm, 혜훈이는 14cm 잘랐습니다. 가장 조금 자른 사람의 길이는 몇 cm입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 경선이는 수학 대회에서 1등을 30번 했고, 연지는 1등을 22번 했습니다. 지환이는 1등...
T11_external.push({
  key:"external_수찾기1_1263",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경선이는 수학 대회에서 1등을 30번 했고, 연지는 1등을 22번 했습니다. 지환이는 1등을 35번 했을 때, 가장 많이 1등을 한 사람의 횟수는 몇 번입니까?",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기1] 피아노 대회가 있어 주영, 시연, 하정이는 피아노 연주 연습을 했습니다. 주영이는 한 곡을...
T11_external.push({
  key:"external_수찾기1_1266",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"피아노 대회가 있어 주영, 시연, 하정이는 피아노 연주 연습을 했습니다. 주영이는 한 곡을 78번, 시연이는 한 곡을 85번, 하정이는 한 곡을 68번 연주했습니다. 이 중에서, 70번 이상 90번 이하로 연습하지 않은 사람의 연주 횟수는 몇 번입니까?",
      answer:"68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 68, 식: none"
    };
  }
});

// [수찾기1] 효진이의 그림 전시회에 방문객 수가 월요일에 78명, 화요일에 55명, 수요일에 65명, ...
T11_external.push({
  key:"external_수찾기1_1267",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효진이의 그림 전시회에 방문객 수가 월요일에 78명, 화요일에 55명, 수요일에 65명, 목요일에 47명, 금요일에 10명이었습니다. 가장 방문객이 많았던 요일의 방문객 수를 구하시오.",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 다음은 다섯 개의 자연수 45, 99, 73, 50, 44입니다. 여기서 가장 작은 값과 ...
T11_external.push({
  key:"external_수찾기1_1270",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음은 다섯 개의 자연수 45, 99, 73, 50, 44입니다. 여기서 가장 작은 값과 위 수들의 중앙값을 찾아 두 수를 더하시오.",
      answer:"94",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 94, 식: none"
    };
  }
});

// [수찾기1] 어떤 두 자리수에 7을 곱해야 할 것을 잘못하여 일의 자리 숫자와 십의 자리 숫자를 바꾸어...
T11_external.push({
  key:"external_수찾기1_1271",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 두 자리수에 7을 곱해야 할 것을 잘못하여 일의 자리 숫자와 십의 자리 숫자를 바꾸어 12를 더하였더니 86이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"329",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 329, 식: none"
    };
  }
});

// [수찾기1] 과학시험에서 수민, 지연, 아현이는 각각 89점, 93점, 81점을 맞았습니다. 100점에...
T11_external.push({
  key:"external_수찾기1_1272",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과학시험에서 수민, 지연, 아현이는 각각 89점, 93점, 81점을 맞았습니다. 100점에 가장 가깝게 맞은 사람의 점수는 몇 점입니까?",
      answer:"93",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 93, 식: none"
    };
  }
});

// [수찾기1] 28 초과 41 미만인 3의 배수 중에 가장 작은 수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1273",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"28 초과 41 미만인 3의 배수 중에 가장 작은 수를 구하시오.",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [수찾기1] 다음 60.5, 27.8, 78.8, 20.7가 적힌 네 개의 카드가 있을 때, 세 번째로...
T11_external.push({
  key:"external_수찾기1_1274",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 60.5, 27.8, 78.8, 20.7가 적힌 네 개의 카드가 있을 때, 세 번째로 큰 수를 구하시오.",
      answer:"27.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27.8, 식: none"
    };
  }
});

// [수찾기1] 공원에서 영아는 5232걸음을 걸었고, 수진이는 7822걸음, 은영이는 6523걸음, 유진...
T11_external.push({
  key:"external_수찾기1_1275",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원에서 영아는 5232걸음을 걸었고, 수진이는 7822걸음, 은영이는 6523걸음, 유진이는 7100 걸음을 걸었습니다. 6500걸음보다 많이 걸은 사람은 몇 명입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기1] 놀이기구를 한 번에 7명씩 탈 수 있습니다. A팀은 113명, B팀은 175명, C팀은 1...
T11_external.push({
  key:"external_수찾기1_1276",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이기구를 한 번에 7명씩 탈 수 있습니다. A팀은 113명, B팀은 175명, C팀은 155명 있을 때, 남는 인원 없이 나눠서 놀이기구를 탈 수 있는 팀의 인원은 몇 명입니까?",
      answer:"175",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 175, 식: none"
    };
  }
});

// [수찾기1] 준하는 8cm간격으로, 정민이는 12cm간격으로 직선 위에 점을 찍었습니다. 시작지점엔 점...
T11_external.push({
  key:"external_수찾기1_1277",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준하는 8cm간격으로, 정민이는 12cm간격으로 직선 위에 점을 찍었습니다. 시작지점엔 점을 찍지 않을 때 두 사람이 찍은 점의 위치가 다섯째 번으로 같게 되는 곳은 시작점으로부터 몇 cm 떨어진 곳입니까?",
      answer:"120",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 120, 식: none"
    };
  }
});

// [수찾기1] 기우는 돈을 20000원 가지고 있고, 한 달에 2000원씩 사용합니다. 현진이는 돈을 1...
T11_external.push({
  key:"external_수찾기1_1278",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기우는 돈을 20000원 가지고 있고, 한 달에 2000원씩 사용합니다. 현진이는 돈을 10000원 가지고 있고 한 달에 1000원씩 사용합니다. 동우는 돈을 15000을 가지고 있고 한 달에 1000원씩 사용할 때, 4달 후에 돈을 가장 남은 사람의 돈은 얼마입니까?",
      answer:"6000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6000, 식: none"
    };
  }
});

// [수찾기1] 아라의 반에서는 이번 소풍으로 동물원에 갔습니다. 사자가 15마리, 호랑이가 25마리, 원...
T11_external.push({
  key:"external_수찾기1_1279",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아라의 반에서는 이번 소풍으로 동물원에 갔습니다. 사자가 15마리, 호랑이가 25마리, 원숭이가 37마리, 기린이 12마리, 독수리가 21마리 있었다고 할 때, 이 중에 가장 수가 많은 동물은 몇 마리입니까?",
      answer:"37",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 37, 식: none"
    };
  }
});

// [수찾기1] 민희와 친구들은 매일 꾸준히 걷기로 약속하였습니다. 가장 오랫동안 운동을 한 친구에게 운동...
T11_external.push({
  key:"external_수찾기1_1281",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민희와 친구들은 매일 꾸준히 걷기로 약속하였습니다. 가장 오랫동안 운동을 한 친구에게 운동화를 선물로 주려고 합니다. 각각 78, 55, 65, 47, 10일동안 빠짐없이 걷기 운동을 성공했다고 할 때, 며칠동안 유지한 사람이 운동화 선물을 받을 수 있을지 고르시오.",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 둘레의 길이가 200m인 운동장이 있습니다. 이 운동장의 둘레에 파란 깃발은 8m마다, 빨...
T11_external.push({
  key:"external_수찾기1_1282",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레의 길이가 200m인 운동장이 있습니다. 이 운동장의 둘레에 파란 깃발은 8m마다, 빨간 깃발은 10m마다 꽂으려고 합니다. 이 두 깃발이 함께 꽂히는 곳은 몇 군데입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기1] 마태, 준수, 윤후는 카드 게임을 하고 있습니다. 마태는 게임에서 16번을 이겼고, 준수는...
T11_external.push({
  key:"external_수찾기1_1283",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"마태, 준수, 윤후는 카드 게임을 하고 있습니다. 마태는 게임에서 16번을 이겼고, 준수는 28번, 윤후는 13번을 이겼습니다. 이 중에서, 20번 이하로 이긴 사람의 횟수를 모두 더하시오.",
      answer:"29",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 29, 식: none"
    };
  }
});

// [수찾기1] 멀리 뛰기 대회를 하여, 선수들이 각각 78, 55, 65, 47, 10m를 뛰었습니다. ...
T11_external.push({
  key:"external_수찾기1_1284",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"멀리 뛰기 대회를 하여, 선수들이 각각 78, 55, 65, 47, 10m를 뛰었습니다. 꼴찌를 제외하고 결승전에 진출할 수 있습니다. 탈락하게 될 선수의 기록은 몇 m입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 담비네 집에서 은행까지의 거리는 760m, 편의점까지의 거리는 540m, 학교까지의 거리는...
T11_external.push({
  key:"external_수찾기1_1285",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"담비네 집에서 은행까지의 거리는 760m, 편의점까지의 거리는 540m, 학교까지의 거리는 420m 일 때 가장 가까운 곳은 어디입니까?",
      answer:"420",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 420, 식: none"
    };
  }
});

// [수찾기1] 곤충 채집 방학 숙제가 있습니다. 도윤이는 32마리, 하준이는 35마리, 지유는 40마리의...
T11_external.push({
  key:"external_수찾기1_1286",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"곤충 채집 방학 숙제가 있습니다. 도윤이는 32마리, 하준이는 35마리, 지유는 40마리의 곤충을 잡았을 때, 가장 적게 잡은 사람의 곤충 수를 찾으시오.",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [수찾기1] 라엘이의 가방 세로의 길이는 25cm이고, 성경이의 가방 세로 길이는 52cm, 도연이의 ...
T11_external.push({
  key:"external_수찾기1_1288",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"라엘이의 가방 세로의 길이는 25cm이고, 성경이의 가방 세로 길이는 52cm, 도연이의 가방 세로 길이는 47cm입니다. 이때, 4의 배수이면서 13으로 나누어떨어지는 사람의 가방 세로 길이는 몇 cm입니까?",
      answer:"52",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 52, 식: none"
    };
  }
});

// [수찾기1] 혜진이와 현수, 미연이는 카드 놀이를 하고 있습니다. 혜진이는 500에서 160 큰 수를 ...
T11_external.push({
  key:"external_수찾기1_1289",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜진이와 현수, 미연이는 카드 놀이를 하고 있습니다. 혜진이는 500에서 160 큰 수를 가지고 있고, 현수는 650에서 10씩 3번 뛰어서 센 수를 가지고 있고, 미연이는 720을 가지고 있습니다. 가장 큰 수를 가지고 있는 사람의 숫자는 몇 입니까?",
      answer:"720",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 720, 식: none"
    };
  }
});

// [수찾기1] 회지는 54, 여름이는 56, 예은이는 41이 쓰여져 있는 숫자 카드를 가지고 있습니다. ...
T11_external.push({
  key:"external_수찾기1_1291",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"회지는 54, 여름이는 56, 예은이는 41이 쓰여져 있는 숫자 카드를 가지고 있습니다. 카드의 수가 7의 배수이면서 8로 나누어떨어지는 카드의 수는 몇 입니까?",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기1] 체육대회를 위해 반 티셔츠를 주문했습니다. 다현이네 반은 티셔츠 45장, 훈이네 반은 티셔...
T11_external.push({
  key:"external_수찾기1_1294",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육대회를 위해 반 티셔츠를 주문했습니다. 다현이네 반은 티셔츠 45장, 훈이네 반은 티셔츠 33장, 선주네 반은 티셔츠 41장을 주문했습니다. 40장 이상 주문한 반의 티셔츠 개수를 모두 더하시오.",
      answer:"86",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 86, 식: none"
    };
  }
});

// [수찾기1] 40번부터 70번까지의 추첨표를 가진 사람들이 있습니다. 이번에 뽑은 숫자의 배수인 사람들...
T11_external.push({
  key:"external_수찾기1_1295",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"40번부터 70번까지의 추첨표를 가진 사람들이 있습니다. 이번에 뽑은 숫자의 배수인 사람들은 탈락입니다. 6을 뽑았다고 할 때, 탈락되는 사람의 수는 몇 명입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기1] 어느 집단에 나이가 7, 33, 34, 12, 27, 40살인 사람들이 있습니다. 나이가 ...
T11_external.push({
  key:"external_수찾기1_1296",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 집단에 나이가 7, 33, 34, 12, 27, 40살인 사람들이 있습니다. 나이가 어린 사람부터 놀이기구를 탑승한다고 할 때, 가장 먼저 놀이기구를 탑승할 수 있는 사람의 나이는 몇 살입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기1] 어느 오케스트라에 클라리넷 78명, 플룻 55명, 바이올린 65명, 트럼펫 47명, 트럼본...
T11_external.push({
  key:"external_수찾기1_1297",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 오케스트라에 클라리넷 78명, 플룻 55명, 바이올린 65명, 트럼펫 47명, 트럼본 10명이 있습니다. 가장 인원이 많은 악기에는 몇 명이 있습니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 직선 위에 시작점을 같이 하여 빨간색 점은 28mm 간격으로, 파란색 점은 40mm 간격으...
T11_external.push({
  key:"external_수찾기1_1299",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직선 위에 시작점을 같이 하여 빨간색 점은 28mm 간격으로, 파란색 점은 40mm 간격으로 찍어 나갑니다. 두 색의 점이 처음으로 같이 찍히는 곳은 시작점으로부터 몇 mm 떨어진 곳입니까?",
      answer:"280",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 280, 식: none"
    };
  }
});

// [수찾기1] 60 초과 87 이하인 모든 홀수를 찾으시오. 그리고 해당되는 홀수의 평균값보다 큰 값을 ...
T11_external.push({
  key:"external_수찾기1_1300",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"60 초과 87 이하인 모든 홀수를 찾으시오. 그리고 해당되는 홀수의 평균값보다 큰 값을 모두 더하여 기입하시오.",
      answer:"567",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 567, 식: none"
    };
  }
});

// [수찾기1] 46 이상 73 미만인 홀수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값에서 ...
T11_external.push({
  key:"external_수찾기1_1301",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 73 미만인 홀수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값에서 뺀 차를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 원반 멀리 날리기 대회를 하여, 기록이 가장 안 좋은 사람은 특별 훈련을 하기로 했습니다....
T11_external.push({
  key:"external_수찾기1_1302",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원반 멀리 날리기 대회를 하여, 기록이 가장 안 좋은 사람은 특별 훈련을 하기로 했습니다. 현정이는 41m, 고수는 38m, 형진이는 40m, 대성이는 33m를 던졌을 때, 특별 훈련을 하게 될 사람의 기록을 기입하시오.",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: none"
    };
  }
});

// [수찾기1] 다영이네 반은 총 90명이고 서윤이네 반은 총 70명입니다. 여진이네 반은 80명일 때 다...
T11_external.push({
  key:"external_수찾기1_1303",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다영이네 반은 총 90명이고 서윤이네 반은 총 70명입니다. 여진이네 반은 80명일 때 다영이네 반은 15명씩, 서윤이네 반은 7명씩 여진이네 반은 10명씩 조를 짰을 때, 조가 가장 많은 반과 가장 적은 반의 조의 개수의 합은 몇 입니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [수찾기1] 물품을 사기 위하여 1번 줄은 44명, 2번 줄은 97명, 3번 줄은 72명, 4번 줄은 ...
T11_external.push({
  key:"external_수찾기1_1304",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물품을 사기 위하여 1번 줄은 44명, 2번 줄은 97명, 3번 줄은 72명, 4번 줄은 54명이 기다리고 있습니다. 가장 인원이 많은 줄을 다른 줄로 옮겨주려고 합니다. 이 때 옮겨야 할 줄의 인원은 몇 명입니까?",
      answer:"97",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 97, 식: none"
    };
  }
});

// [수찾기1] 철수 친구들의 발 사이즈는 160, 140, 145, 180mm입니다. 가장 큰 사이즈는 ...
T11_external.push({
  key:"external_수찾기1_1305",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철수 친구들의 발 사이즈는 160, 140, 145, 180mm입니다. 가장 큰 사이즈는 몇 mm입니까?",
      answer:"180",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 180, 식: none"
    };
  }
});

// [수찾기1] 언니는 부모님께 용돈을 100000원 받았습니다. 남동생은 언니보다 20000원 적게 받았...
T11_external.push({
  key:"external_수찾기1_1306",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"언니는 부모님께 용돈을 100000원 받았습니다. 남동생은 언니보다 20000원 적게 받았고, 여동생은 남동생 보다 30000원 더 받았습니다. 이때 가장 많이 용돈 받은 사람의 돈은 얼마입니까?",
      answer:"110000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 110000, 식: none"
    };
  }
});

// [수찾기1] 곧게 난 도로에 시작점을 같이 하여 가로등은 12m 간격으로, 가로수는 10m 간격으로 심...
T11_external.push({
  key:"external_수찾기1_1307",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"곧게 난 도로에 시작점을 같이 하여 가로등은 12m 간격으로, 가로수는 10m 간격으로 심었습니다. 가로등과 가로수가 처음으로 같이 심어지게 되는 곳은 시작지점에서 몇 m 떨어진 곳입니까?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기1] 준섭이와 민수는 둘레의 길이가 400m인 운동장을 돌고있습니다. 1분 동안 준섭이는 200...
T11_external.push({
  key:"external_수찾기1_1308",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준섭이와 민수는 둘레의 길이가 400m인 운동장을 돌고있습니다. 1분 동안 준섭이는 200m 를 걸어가고, 민수는 100m를 걸어갑니다. 만약 동시에 출발점에서 같은 방향으로 출발하였다면, 둘이 출발점에서 셋째 번으로 다시 만나는 때는 출발한 지 몇 분 후입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 최고시에서는 이번 지진 재해에 대하여 가장 많은 가구가 피해를 입은 동네부터 먼저 지원을 ...
T11_external.push({
  key:"external_수찾기1_1309",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"최고시에서는 이번 지진 재해에 대하여 가장 많은 가구가 피해를 입은 동네부터 먼저 지원을 하려고 합니다. 동네별로 78, 55, 65, 47, 10가구의 피해가 있었다면, 마지막에 지원을 받게 될 동네의 피해 가구 수를 고르시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 광주행 기차는 27분마다, 대전행 기차는 18분마다 출발한다고 합니다. 오전 9시에 동시에...
T11_external.push({
  key:"external_수찾기1_1310",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"광주행 기차는 27분마다, 대전행 기차는 18분마다 출발한다고 합니다. 오전 9시에 동시에 출발했다면, 그 이후에 오전에 광주행 기차와 대전행 기차가 동시에 출발하는 시간은 9시 몇 분입니까?",
      answer:"54",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 54, 식: none"
    };
  }
});

// [수찾기1] 도서관에서 한비는 책을 56번 열람하였고, 민재는 34번, 채리는 50번을 열람하였습니다....
T11_external.push({
  key:"external_수찾기1_1311",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도서관에서 한비는 책을 56번 열람하였고, 민재는 34번, 채리는 50번을 열람하였습니다. 책을 가장 많이 열람한 친구의 횟수와 가장 적게 열람한 친구의 횟수 합을 구하시오.",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: none"
    };
  }
});

// [수찾기1] 호수 둘레를 한 바퀴 도는데 A자전거는 12분, B자전거는 15분 걸리며 한 바퀴 돈 후 ...
T11_external.push({
  key:"external_수찾기1_1312",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호수 둘레를 한 바퀴 도는데 A자전거는 12분, B자전거는 15분 걸리며 한 바퀴 돈 후 3분씩 쉬고 다시 달립니다. 두 자전거가 지금 동시에 출발하면 다음에 동시에 출발하는 것은 몇 분 뒤입니까?",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: none"
    };
  }
});

// [수찾기1] 상진이네 과수원에서 올해 딸기를 78개, 수박을 55개, 참외를 65개, 사과를 47개, ...
T11_external.push({
  key:"external_수찾기1_1313",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상진이네 과수원에서 올해 딸기를 78개, 수박을 55개, 참외를 65개, 사과를 47개, 배를 10개 수확했습니다. 이 중 가장 적게 수확한 과일의 개수를 찾으시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 기계 A는 12일마다, 기계 B는 18일 마다 점검을합니다. 한 주는 월화수목금토일 총 7...
T11_external.push({
  key:"external_수찾기1_1315",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기계 A는 12일마다, 기계 B는 18일 마다 점검을합니다. 한 주는 월화수목금토일 총 7일의 반복이고, 금요일인 오늘 두 기계를 점검했다면, 두 기계가 다음 금요일에 처음으로 동시에 점검받는 날은 며칠 후인지 구하시오.",
      answer:"252",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 252, 식: none"
    };
  }
});

// [수찾기1] 115, 791, 346, 667, 453의 숫자 중 가장 큰 수에서 가장 작은 수를 뺀 ...
T11_external.push({
  key:"external_수찾기1_1316",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"115, 791, 346, 667, 453의 숫자 중 가장 큰 수에서 가장 작은 수를 뺀 차는 무엇입니까?",
      answer:"676",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 676, 식: none"
    };
  }
});

// [수찾기1] 재희네 학교에서 독감이 유행하여 반마다 78, 55, 65, 47, 10명의 환자가 나왔습...
T11_external.push({
  key:"external_수찾기1_1317",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재희네 학교에서 독감이 유행하여 반마다 78, 55, 65, 47, 10명의 환자가 나왔습니다. 가장 적은 환자가 있는 반은 그대로 대면 수업을 진행한다고 할 때, 대면 수업을 하게 될 반의 환자 수를 찾으시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 민서네 정육점에서 소고기를 78kg, 돼지를 55kg, 오리를 65kg, 닭을 47kg 팔...
T11_external.push({
  key:"external_수찾기1_1318",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민서네 정육점에서 소고기를 78kg, 돼지를 55kg, 오리를 65kg, 닭을 47kg 팔았습니다. 가장 적게 판매한 고기 종류는 몇 kg 팔았습니까?",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: none"
    };
  }
});

// [수찾기1] 치훈이네 학교에서는 국어를 좋아하는 학생이 78명, 수학을 좋아하는 학생이 55명, 영어를...
T11_external.push({
  key:"external_수찾기1_1320",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"치훈이네 학교에서는 국어를 좋아하는 학생이 78명, 수학을 좋아하는 학생이 55명, 영어를 좋아하는 학생이 65명, 과학을 좋아하는 학생이 47명, 도덕을 좋아하는 학생이 10명 있습니다. 가장 인기가 적은 과목에는 몇 명이 있습니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 30분마다 출발하는 버스와 45분마다 출발하는 버스가 동시에 출발한였다면, 바로 다음으로 ...
T11_external.push({
  key:"external_수찾기1_1321",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"30분마다 출발하는 버스와 45분마다 출발하는 버스가 동시에 출발한였다면, 바로 다음으로 두 버스가 동시에 출발하는 시간은 몇 분 후입니까?",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: none"
    };
  }
});

// [수찾기1] 책상 위에 287, 345, 306, 444, 791가 적힌 숫자 카드가 5장 있습니다. ...
T11_external.push({
  key:"external_수찾기1_1322",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"책상 위에 287, 345, 306, 444, 791가 적힌 숫자 카드가 5장 있습니다. 이 중에서 두 번째로 큰 수를 제외하고 가장 큰 숫자 카드 두 장을 골라 합을 구하시오.",
      answer:"1136",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1136, 식: none"
    };
  }
});

// [수찾기1] A 빵집은 빵을 849개 판매하고, B 빵집은 빵을 984개, C 빵집은 895개를 판매합...
T11_external.push({
  key:"external_수찾기1_1325",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A 빵집은 빵을 849개 판매하고, B 빵집은 빵을 984개, C 빵집은 895개를 판매합니다. 가장 많이 빵을 판매하는 곳의 빵 개수와 가장 적게 빵을 판매하는 곳의 빵 개수의 차를 구하시오.",
      answer:"135",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 135, 식: none"
    };
  }
});

// [수찾기1] 어느 극장의 관객 수가 월요일에 525명, 화요일에 787명, 수요일에 813명, 목요일에...
T11_external.push({
  key:"external_수찾기1_1326",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 극장의 관객 수가 월요일에 525명, 화요일에 787명, 수요일에 813명, 목요일에 683명, 금요일에 624명, 토요일에 956명, 일요일에 810명이었습니다. 지난 일주일 간 가장 관객이 많았던 요일에서 가장 관객이 적었던 요일 사이에 관객 수의 차는 얼마입니까?",
      answer:"431",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 431, 식: none"
    };
  }
});

// [수찾기1] 평화가 한 달 동안 모은 돈은 14310원이고, 나형이가 모은 돈은 16320원, 희수가 ...
T11_external.push({
  key:"external_수찾기1_1327",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평화가 한 달 동안 모은 돈은 14310원이고, 나형이가 모은 돈은 16320원, 희수가 모은 돈은 18800원 입니다. 한 달 동안 더 많은 돈을 모은 친구의 돈은 얼마 입니까?",
      answer:"18800",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18800, 식: none"
    };
  }
});

// [수찾기1] 일반 버스는 9분마다, 좌석버스는 15분마다 출발합니다. 지금 두 버스가 동시에 출발했다면...
T11_external.push({
  key:"external_수찾기1_1328",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일반 버스는 9분마다, 좌석버스는 15분마다 출발합니다. 지금 두 버스가 동시에 출발했다면 3시간동안 총 몇번 동시에 출발합니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기1] 정신이와 친구들이 1년 동안 먹은 햄버거의 수를 비교했습니다. 각각 47, 49, 38, ...
T11_external.push({
  key:"external_수찾기1_1329",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정신이와 친구들이 1년 동안 먹은 햄버거의 수를 비교했습니다. 각각 47, 49, 38, 35, 55개를 먹었다고 할 때, 7의 배수만큼 먹은 사람의 햄버거 수를 모두 더하시오.",
      answer:"84",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 84, 식: none"
    };
  }
});

// [수찾기1] 숙희네 학교에서는 1년간 벌점이 가장 많이 쌓인 학생에게 학교 청소를 시키려고 합니다. 각...
T11_external.push({
  key:"external_수찾기1_1330",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"숙희네 학교에서는 1년간 벌점이 가장 많이 쌓인 학생에게 학교 청소를 시키려고 합니다. 각각 78, 55, 65, 47, 10점을 받은 학생들이 있다고 할 때, 청소를 하게 될 학생의 벌점을 찾으시오.",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 46 이상 72 이하인 짝수가 있습니다. 이 중에 63보다 큰 수를 모두 찾아 그 합을 구...
T11_external.push({
  key:"external_수찾기1_1331",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 72 이하인 짝수가 있습니다. 이 중에 63보다 큰 수를 모두 찾아 그 합을 구하시오.",
      answer:"340",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 340, 식: none"
    };
  }
});

// [수찾기1] 지원이는 둘레가 180m인 원 모양의 꽃밭의 둘레에 6m 간격으로 나무를 심고, 9m 간격...
T11_external.push({
  key:"external_수찾기1_1332",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지원이는 둘레가 180m인 원 모양의 꽃밭의 둘레에 6m 간격으로 나무를 심고, 9m 간격으로 벤치를 놓았습니다. 나무와 벤치가 겹친느 곳에는 벤치만 놓았다면, 꽃밭의 둘레에 심은 나무는 몇 그루입니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기1] 3에서 11까지의 수 카드를 수의 순서대로 놓았을 때, 뒤에서부터 4번째에 놓인 수 카드의...
T11_external.push({
  key:"external_수찾기1_1333",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3에서 11까지의 수 카드를 수의 순서대로 놓았을 때, 뒤에서부터 4번째에 놓인 수 카드의 수는 몇 입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기1] 7분마다 한 번씩 울리는 벨, 15분마다 울리는 벨, 5분마다 울리는 벨의 세 가지 종류가...
T11_external.push({
  key:"external_수찾기1_1334",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"7분마다 한 번씩 울리는 벨, 15분마다 울리는 벨, 5분마다 울리는 벨의 세 가지 종류가 있습니다. 지금 처음으로 세 개의 벨이 동시에 울렸다면 다음 번 동시에 울리는 시간은 몇 분 후입니까?",
      answer:"105",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 105, 식: none"
    };
  }
});

// [수찾기1] 강아지 간식을 규리는 27개, 하영이는 24개, 승원이는 32개 만들었습니다. 세 명의 간...
T11_external.push({
  key:"external_수찾기1_1335",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"강아지 간식을 규리는 27개, 하영이는 24개, 승원이는 32개 만들었습니다. 세 명의 간식을 하나씩 묶어 세트로 만들려 할 때, 남는 간식의 수를 구하시오.",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 음료수를 태환이는 71병, 선형이는 56병, 진규는 61병 마셨습니다. 이 중 가장 적게 ...
T11_external.push({
  key:"external_수찾기1_1338",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"음료수를 태환이는 71병, 선형이는 56병, 진규는 61병 마셨습니다. 이 중 가장 적게 마신 사람은 몇 병의 음료수를 마셨습니까?",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기1] 청량리 행 지하철은 4 분마다, 인천 행 지하철은 46분마다 들어옵니다. 오전 11 시에 ...
T11_external.push({
  key:"external_수찾기1_1339",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"청량리 행 지하철은 4 분마다, 인천 행 지하철은 46분마다 들어옵니다. 오전 11 시에 청량리행과 인천행이 동시에 들어왔다면 다음 번 동시에 들어오는 시각은 A시 B분일때, A+B의 값을 구하시오.",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [수찾기1] 60보다 크고 88보다 작은 홀수 중에 6으로 나눠서 나머지가 3인 수를 찾고, 해당되는 ...
T11_external.push({
  key:"external_수찾기1_1340",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"60보다 크고 88보다 작은 홀수 중에 6으로 나눠서 나머지가 3인 수를 찾고, 해당되는 모든 수의 평균값보다 큰 값을 모두 더하시오.",
      answer:"168",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 168, 식: none"
    };
  }
});

// [수찾기1] 세 친구가 다트를 했습니다. 준이는 7점 5번, 빈이는 8점 4번, 대영이는 11점 2번을...
T11_external.push({
  key:"external_수찾기1_1342",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 친구가 다트를 했습니다. 준이는 7점 5번, 빈이는 8점 4번, 대영이는 11점 2번을 얻었습니다. 이 중에서 점수가 64의 약수인 것을 고르시오",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [수찾기1] 본형이와 상우, 정국이는 게임을 하였습니다. 본형이는 13점을 획득하였고, 상우는 19점 ...
T11_external.push({
  key:"external_수찾기1_1343",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"본형이와 상우, 정국이는 게임을 하였습니다. 본형이는 13점을 획득하였고, 상우는 19점 , 정국이는 16점을 획득하였습니다. 이 중에서 48의 약수인 점수를 고르시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [수찾기1] 51보다 크고 62보다 작은 짝수 중에 4로 나누었을 때 나머지가 2인 수를 찾고, 해당되...
T11_external.push({
  key:"external_수찾기1_1345",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51보다 크고 62보다 작은 짝수 중에 4로 나누었을 때 나머지가 2인 수를 찾고, 해당되는 모든 수의 평균값보다 작은 값을 찾으시오.",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: none"
    };
  }
});

// [수찾기1] 다솜이네 초밥집에서는 초밥을 종류별로 하나씩 넣어 한 세트를 만듭니다. 계란 초밥 49개,...
T11_external.push({
  key:"external_수찾기1_1346",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다솜이네 초밥집에서는 초밥을 종류별로 하나씩 넣어 한 세트를 만듭니다. 계란 초밥 49개, 광어 초밥 66개, 연어 초밥 71개, 새우 초밥 58개가 있고, 최대한 세트를 많이 만들었을 때 들어간 초밥의 총 개수를 구하시오.",
      answer:"196",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 196, 식: none"
    };
  }
});

// [수찾기1] 60과 88 사이에 있는 수 중에서 홀수인 수를 모두 찾아 더하시오....
T11_external.push({
  key:"external_수찾기1_1347",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"60과 88 사이에 있는 수 중에서 홀수인 수를 모두 찾아 더하시오.",
      answer:"1036",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1036, 식: none"
    };
  }
});

// [수찾기1] 멀리 뛰기 대회를 하여, 선수들이 각각 78, 55, 65, 47, 10m를 뛰었습니다. ...
T11_external.push({
  key:"external_수찾기1_1348",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"멀리 뛰기 대회를 하여, 선수들이 각각 78, 55, 65, 47, 10m를 뛰었습니다. 1등에게 상을 주려고 합니다. 상을 받을 선수의 기록은 몇 m입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 현재네 학교에서 올해 장기자랑을 하여 반별로 78, 55, 65, 47, 10표를 받았습니...
T11_external.push({
  key:"external_수찾기1_1350",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현재네 학교에서 올해 장기자랑을 하여 반별로 78, 55, 65, 47, 10표를 받았습니다. 가장 득표가 적은 반은 벌칙을 한다고 할 때, 벌칙을 할 반의 득표 수를 찾으시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 직선에서 0mm부터 시작하여 보라색 점은 3mm 간격으로, 주황색 점은 5mm 간격으로 찍...
T11_external.push({
  key:"external_수찾기1_1351",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직선에서 0mm부터 시작하여 보라색 점은 3mm 간격으로, 주황색 점은 5mm 간격으로 찍어 나갑니다. 두 색깔의 점이 0mm부터 100mm까지 같이 찍히는 곳은 몇 군데 입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기1] 홍도와 윤복이, 송화는 동화책을 읽었습니다. 홍도는 23쪽을 읽었고, 윤복이는 27쪽을 읽...
T11_external.push({
  key:"external_수찾기1_1352",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"홍도와 윤복이, 송화는 동화책을 읽었습니다. 홍도는 23쪽을 읽었고, 윤복이는 27쪽을 읽었습니다. 송화는 윤복이보다 10쪽을 더 읽었을 때, 가장 많이 책을 읽은 사람의 쪽 수는 몇 쪽입니까?",
      answer:"37",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 37, 식: none"
    };
  }
});

// [수찾기1] TV 시상식에서 유재석은 상을 78회 받았고, 강호동은 54회, 이경규는 48회 받았습니다...
T11_external.push({
  key:"external_수찾기1_1354",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"TV 시상식에서 유재석은 상을 78회 받았고, 강호동은 54회, 이경규는 48회 받았습니다. 이때, 3의 배수이면서 26으로 나누어 떨어지는 사람의 상 받은 횟수는 몇 회입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 정수의 손 길이는 20cm, 이현이는 정수보다 2cm 작습니다. 강찬이의 손 길이는 21c...
T11_external.push({
  key:"external_수찾기1_1355",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정수의 손 길이는 20cm, 이현이는 정수보다 2cm 작습니다. 강찬이의 손 길이는 21cm 일때, 36의 약수인 사람의 손 길이는 몇 cm입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기1] 공이 들어있는 통을 들고 가다가 두 번째로 큰 숫자가 적힌 공을 잃어버렸습니다. 원래 78...
T11_external.push({
  key:"external_수찾기1_1356",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공이 들어있는 통을 들고 가다가 두 번째로 큰 숫자가 적힌 공을 잃어버렸습니다. 원래 787, 101, 381, 556, 767라는 공이 들어있었다면, 이제 가장 큰 두 수의 합은 무엇입니까?",
      answer:"1343",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1343, 식: none"
    };
  }
});

// [수찾기1] 물건을 사기 위해 사람들이 줄을 서서 대기하고 있고, 각 줄에 있는 인원 수가 91, 46...
T11_external.push({
  key:"external_수찾기1_1357",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물건을 사기 위해 사람들이 줄을 서서 대기하고 있고, 각 줄에 있는 인원 수가 91, 46, 84, 82, 17명입니다. 가장 인원이 많은 줄에서 가장 인원이 적은 줄로 조금 옮겨주려고 하는데, 이 때 두 줄의 인원 차이는 몇 명입니까?",
      answer:"74",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 74, 식: none"
    };
  }
});

// [수찾기1] 달리기 경주를 하였습니다. 100m를 달리는데 성현이는 12초, 민수는 15초, 영현이는 ...
T11_external.push({
  key:"external_수찾기1_1358",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"달리기 경주를 하였습니다. 100m를 달리는데 성현이는 12초, 민수는 15초, 영현이는 11초, 의진이는 17초가 걸렸습니다. 가장 빨리 달린 사람의 초는 몇 초입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 어느 식당에 각각 1800, 9000, 2050, 3450원인 메뉴가 있습니다. 돈이 부족...
T11_external.push({
  key:"external_수찾기1_1359",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 식당에 각각 1800, 9000, 2050, 3450원인 메뉴가 있습니다. 돈이 부족하여 가장 싼 음식을 먹으려고 할 때, 먹게 될 음식의 가격을 찾으시오.",
      answer:"1800",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1800, 식: none"
    };
  }
});

// [수찾기1] 6, 18, AB, 162와 같은 규칙으로 수를 나열할 때, A*B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기1_1360",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6, 18, AB, 162와 같은 규칙으로 수를 나열할 때, A*B의 값을 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기1] 색연필 3타와 지우개 40개를 될 수 있는 대로 많은 학생들에게 남김없이 똑같이 나누어 주...
T11_external.push({
  key:"external_수찾기1_1361",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"색연필 3타와 지우개 40개를 될 수 있는 대로 많은 학생들에게 남김없이 똑같이 나누어 주려고 할때, 최대 몇 명까지 나누어 줄 수 있습니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기1] 42.0, 74.7, 18.4, 81.7, 1.6 중에서 26보다 낮으면서 가장 가까운 값...
T11_external.push({
  key:"external_수찾기1_1362",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"42.0, 74.7, 18.4, 81.7, 1.6 중에서 26보다 낮으면서 가장 가까운 값을 찾으시오.",
      answer:"18.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18.4, 식: none"
    };
  }
});

// [수찾기1] 미애와 경민이는 3월 15일에 태권도 연습을 시작하여 미애는 10일마다. 경민이는 4일마다...
T11_external.push({
  key:"external_수찾기1_1363",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미애와 경민이는 3월 15일에 태권도 연습을 시작하여 미애는 10일마다. 경민이는 4일마다 연습을 하기로 하였습니다. 두 사람이 3월 15일 이후 처음으로 같이 연습을 하게 되는 날은 A월 B일입니다. A+B의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기1] 대구행은 20분마다, 광주행은 30분마다 출발한다고 합니다. 오전 6시 15분에 버스가 동...
T11_external.push({
  key:"external_수찾기1_1364",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"대구행은 20분마다, 광주행은 30분마다 출발한다고 합니다. 오전 6시 15분에 버스가 동시에 출발하였고, 그 다음으로 동시에 출발하게 되는 시각은 A시 B분일 때, A+B의 값을 구하시오.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [수찾기1] 선수들이 높이뛰기 대회에 참가하여 78, 55, 65, 47, 10m의 기록을 세웠습니다....
T11_external.push({
  key:"external_수찾기1_1365",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선수들이 높이뛰기 대회에 참가하여 78, 55, 65, 47, 10m의 기록을 세웠습니다. 가장 낮게 뛴 선수는 탈락하게 됩니다. 이 때, 탈락하는 선수의 기록은 몇 m입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 어느 극장의 관객 수가 월요일에 413명, 화요일에 944명, 수요일에 303명, 목요일에...
T11_external.push({
  key:"external_수찾기1_1366",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 극장의 관객 수가 월요일에 413명, 화요일에 944명, 수요일에 303명, 목요일에 668명, 금요일에 322명, 토요일에 417명, 일요일에 263명이었습니다. 가장 관객이 많은 요일에 행사 일정을 계획하려고 할 때, 고르게 될 요일의 관객 수를 찾으시오.",
      answer:"944",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 944, 식: none"
    };
  }
});

// [수찾기1] 56보다 큰 두 자리 자연수이며, 11로 나눈 나머지가 가장 큰 수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1367",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"56보다 큰 두 자리 자연수이며, 11로 나눈 나머지가 가장 큰 수를 구하시오.",
      answer:"nan",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: nan, 식: none"
    };
  }
});

// [수찾기1] 기마전에 올라탈 사람을 뽑기 위해 몸무게를 비교하였습니다. 각각 78, 55, 65, 47...
T11_external.push({
  key:"external_수찾기1_1368",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기마전에 올라탈 사람을 뽑기 위해 몸무게를 비교하였습니다. 각각 78, 55, 65, 47kg인 사람들이 있을 때, 뽑힐 사람의 몸무게를 찾으시오.",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: none"
    };
  }
});

// [수찾기1] 자연수 74, 42, 39, 22, 72 중에 가장 큰 값과 평균값에서 가장 가까운 값을 ...
T11_external.push({
  key:"external_수찾기1_1370",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"자연수 74, 42, 39, 22, 72 중에 가장 큰 값과 평균값에서 가장 가까운 값을 찾은 뒤, 두 수의 합을 계산하여 기입하시오.",
      answer:"116",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 116, 식: none"
    };
  }
});

// [수찾기1] 45보다 크고 72보다 작은 짝수를 모두 찾은 후, 해당되는 수 중에 중앙값과 가장 작은 ...
T11_external.push({
  key:"external_수찾기1_1374",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45보다 크고 72보다 작은 짝수를 모두 찾은 후, 해당되는 수 중에 중앙값과 가장 작은 값을 찾아 더하시오.",
      answer:"104",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 104, 식: none"
    };
  }
});

// [수찾기1] 원반 멀리 날리기 대결을 하여, 현수는 27m, 희정이는 22m, 찬형이는 44m, 희수는...
T11_external.push({
  key:"external_수찾기1_1375",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원반 멀리 날리기 대결을 하여, 현수는 27m, 희정이는 22m, 찬형이는 44m, 희수는 18m를 던졌습니다. 대결의 2등 기록은 몇 m입니까?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [수찾기1] 오늘 저녁에 공원에서 영진이는 남걸이와 현우와 함께 달리기를 하였습니다. 영진이는 12km...
T11_external.push({
  key:"external_수찾기1_1376",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 저녁에 공원에서 영진이는 남걸이와 현우와 함께 달리기를 하였습니다. 영진이는 12km를 달렸고, 남걸이 17km를 달렸습니다. 현우는 10km를 달렸을 때, 5의 배수이면서 2로 나누어떨어지는 사람의 달린 거리는 몇 km입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 15분마다 출발하는 버스와 40분마다 출발하는 기차가 있습니다. 오후 3시 정각에 버스와 ...
T11_external.push({
  key:"external_수찾기1_1377",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"15분마다 출발하는 버스와 40분마다 출발하는 기차가 있습니다. 오후 3시 정각에 버스와 기차가 동시에 출바랬다면, 다음 번 동시에 출발하는 시각은 오후 A시 B분입니다. A+B를 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기1] 수학시험에서 민형이는 90점, 지철이는 85점, 승관이는 83점이고, 과학시험에서 민형이는...
T11_external.push({
  key:"external_수찾기1_1378",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수학시험에서 민형이는 90점, 지철이는 85점, 승관이는 83점이고, 과학시험에서 민형이는 65점, 지철이는 80점, 승관이는 76점을 맞았습니다. 160점에 가장 가까운 시험의 총 점은 몇 점입니까?",
      answer:"159",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 159, 식: none"
    };
  }
});

// [수찾기1] 숫자 카드 25, 40, 17 세 장이 있습니다. 카드에 적혀있는 수 중 가장 큰 수는 어...
T11_external.push({
  key:"external_수찾기1_1379",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"숫자 카드 25, 40, 17 세 장이 있습니다. 카드에 적혀있는 수 중 가장 큰 수는 어떤 수입니까?",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [수찾기1] 51과 62 사이에 있는 짝수를 모두 찾아 그 중에 가장 큰 수를 고르시오....
T11_external.push({
  key:"external_수찾기1_1380",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51과 62 사이에 있는 짝수를 모두 찾아 그 중에 가장 큰 수를 고르시오.",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기1] 18분마다 출발하는 버스와 30분마다 출발하는 기차가 있습니다. 11시에 동시에 출발했다면...
T11_external.push({
  key:"external_수찾기1_1381",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"18분마다 출발하는 버스와 30분마다 출발하는 기차가 있습니다. 11시에 동시에 출발했다면 23시 전까지 버스와 기차가 동시에 출발하는 때는 모두 몇 번입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기1] 재연, 증석, 사경이는 쇼핑을 하였습니다. 재연이는 총 240000원을 사용했고, 증석이는...
T11_external.push({
  key:"external_수찾기1_1382",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재연, 증석, 사경이는 쇼핑을 하였습니다. 재연이는 총 240000원을 사용했고, 증석이는 총 175000원, 사경이는 총 289000원을 사용했습니다. 이 중에서, 200000원 이상 돈을 사용한 사람은 몇 명입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 도하네 학교에서 좋아하는 게임 종류를 조사했습니다. 레이싱 게임 78명, 슈팅 게임 55명...
T11_external.push({
  key:"external_수찾기1_1383",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도하네 학교에서 좋아하는 게임 종류를 조사했습니다. 레이싱 게임 78명, 슈팅 게임 55명, 전략 게임 65명, 심리 게임 47명의 결과가 나왔다고 할 때, 몇 명의 인원이 가장 인기가 없는 게임을 좋아하는지 찾으시오.",
      answer:"47",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 47, 식: none"
    };
  }
});

// [수찾기1] 오늘 놀이공원에서 츄러스 1459개가 팔렸고, 컵 아이스크림이 1894개, 주스가 2002...
T11_external.push({
  key:"external_수찾기1_1384",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 놀이공원에서 츄러스 1459개가 팔렸고, 컵 아이스크림이 1894개, 주스가 2002개가 팔렸을 때, 1500개 이상 판 음식의 종류는 몇 가지입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 게시판에 다섯 장의 숫자 카드가 붙어있습니다. (585, 664, 626, 703, 982...
T11_external.push({
  key:"external_수찾기1_1385",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"게시판에 다섯 장의 숫자 카드가 붙어있습니다. (585, 664, 626, 703, 982) 이 중 가장 큰 수에서 가장 작은 수를 뺀 값은 얼마입니까?",
      answer:"397",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 397, 식: none"
    };
  }
});

// [수찾기1] 일기 예보를 보았더니 앞으로 15, 27, 83, 29, 95mm의 예보가 있습니다. 강수...
T11_external.push({
  key:"external_수찾기1_1386",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일기 예보를 보았더니 앞으로 15, 27, 83, 29, 95mm의 예보가 있습니다. 강수량이 적은 날에 여행 계획을 잡는다고 할 때, 두 날의 강수량 합을 적으시오.",
      answer:"42",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 42, 식: none"
    };
  }
});

// [수찾기1] 정하네 반은 1번부터 36번까지 있습니다. 약수의 개수가 2개인 번호의 학생들에게만 우유를...
T11_external.push({
  key:"external_수찾기1_1387",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정하네 반은 1번부터 36번까지 있습니다. 약수의 개수가 2개인 번호의 학생들에게만 우유를 나누어 주었을 때, 우유를 받은 학생이 A명일 때, 알맞은 A를 구하시오.",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 철수 친구들의 발 사이즈는 160, 140, 145, 180mm입니다. 이 중 가장 작은 ...
T11_external.push({
  key:"external_수찾기1_1392",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철수 친구들의 발 사이즈는 160, 140, 145, 180mm입니다. 이 중 가장 작은 사이즈는 몇 mm입니까?",
      answer:"140",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 140, 식: none"
    };
  }
});

// [수찾기1] 어느 버스 정류장에서 일반 버스는 15분마다, 직행 버스는 18분마다 출발한다고 합니다. ...
T11_external.push({
  key:"external_수찾기1_1393",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 버스 정류장에서 일반 버스는 15분마다, 직행 버스는 18분마다 출발한다고 합니다. 오전7시에 처음으로 동시에 출발한다면 12시전까지는 모두 몇 번 동시에 출발하겠습니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기1] 직선 위에 시작점을 같이 하여, 노란색 점은 10mm 간격으로, 파란색 점은 12mm 간격...
T11_external.push({
  key:"external_수찾기1_1395",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직선 위에 시작점을 같이 하여, 노란색 점은 10mm 간격으로, 파란색 점은 12mm 간격으로 찍어 나갑니다. 두 색깔의 점이 셋째 번으로 같이 찍히는 곳은 시작점으로부터 몇 mm 떨어진 곳입니까?",
      answer:"180",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 180, 식: none"
    };
  }
});

// [수찾기1] 대구행은 20분마다, 광주행은 30분마다 출발한다고 합니다. 오전 6시 15분에 버스가 동...
T11_external.push({
  key:"external_수찾기1_1396",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"대구행은 20분마다, 광주행은 30분마다 출발한다고 합니다. 오전 6시 15분에 버스가 동시에 출발하였고, 그 다음으로 동시에 출발하게 되는 시각은 A시 B분일 때, A+B의 값을 구하시오.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [수찾기1] 60 이상 88 미만인 수들이 있습니다. 홀수이면서도 6으로 나누었을 때 나머지가 3인 수...
T11_external.push({
  key:"external_수찾기1_1397",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"60 이상 88 미만인 수들이 있습니다. 홀수이면서도 6으로 나누었을 때 나머지가 3인 수를 모두 찾고, 그 중 가장 작은 수를 구하시오.",
      answer:"63",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 63, 식: none"
    };
  }
});

// [수찾기1] 이번 달에 동해는 버스를 37회, 건영이는 15회, 권호는 31회 탔습니다. 이 중 3의 ...
T11_external.push({
  key:"external_수찾기1_1398",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이번 달에 동해는 버스를 37회, 건영이는 15회, 권호는 31회 탔습니다. 이 중 3의 배수만큼 버스를 이용한 사람의 횟수는 얼마입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [수찾기1] 바이오리듬의 신체적 주기는 20일이고, 감정적 주기는 28일입니다. 오늘 두 가지 주기가 ...
T11_external.push({
  key:"external_수찾기1_1400",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"바이오리듬의 신체적 주기는 20일이고, 감정적 주기는 28일입니다. 오늘 두 가지 주기가 함께 시작하였다면, 다시 두 가지 주기가 함께 시작하는 날은 며칠 후 입니까?",
      answer:"140",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 140, 식: none"
    };
  }
});

// [수찾기1] 다음 자연수 76, 60, 42, 70, 10 중에, 62보다 크면서 가장 가까운 수를 찾...
T11_external.push({
  key:"external_수찾기1_1401",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 자연수 76, 60, 42, 70, 10 중에, 62보다 크면서 가장 가까운 수를 찾으시오.",
      answer:"70",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 70, 식: none"
    };
  }
});

// [수찾기1] 지선이와 친구들은 곶감을 각각 81, 76, 54 ,64, 51개 가지고 있습니다. 8개씩...
T11_external.push({
  key:"external_수찾기1_1402",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지선이와 친구들은 곶감을 각각 81, 76, 54 ,64, 51개 가지고 있습니다. 8개씩 접시에 나눠담으려 할 때, 남는 곶감 없이 담을 수 있는 사람의 곶감 수를 찾으시오.",
      answer:"64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 64, 식: none"
    };
  }
});

// [수찾기1] 고속 버스 터미널에서 부산행은 6분마다, 광주행은 15분마다, 진주행은 24분마다 버스가 ...
T11_external.push({
  key:"external_수찾기1_1403",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"고속 버스 터미널에서 부산행은 6분마다, 광주행은 15분마다, 진주행은 24분마다 버스가 출발합니다. 세 개의 버스가 동시에 출발 한 후 다음 번 동시에 출발하기까지 몇 분 걸립니까?",
      answer:"120",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 120, 식: none"
    };
  }
});

// [수찾기1] 상민이는 영화사에 취업하기 위해 준비 중입니다. 이번 분기에 회사별로 78, 55, 65,...
T11_external.push({
  key:"external_수찾기1_1404",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상민이는 영화사에 취업하기 위해 준비 중입니다. 이번 분기에 회사별로 78, 55, 65, 47, 10명을 채용한다는 공고가 있었습니다. 가장 적은 인원을 뽑는 회사부터 지원서를 제출하려고 할 때, 처음 제출할 회사의 채용 인원은 몇 명입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 일기 예보를 보았더니 앞으로의 강수량이 39 , 16 , 88 , 63 , 12mm입니다....
T11_external.push({
  key:"external_수찾기1_1405",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일기 예보를 보았더니 앞으로의 강수량이 39 , 16 , 88 , 63 , 12mm입니다. 비가 가장 적게 올 날에 소풍을 가려고 할 때, 소풍을 갈 날의 강수량을 적으시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 짜장면 빨리 먹기 대회에서 강희는 짜장면 1개를 80초 동안 먹었고, 기광이는 짜장면 1개...
T11_external.push({
  key:"external_수찾기1_1406",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"짜장면 빨리 먹기 대회에서 강희는 짜장면 1개를 80초 동안 먹었고, 기광이는 짜장면 1개를 93초 동안 먹었습니다. 두준이는 짜장면 1개를 44초 먹었을 때 세 명의 친구가 짜장면 1개를 먹을 때 걸린 시간을 모두 더하시오.",
      answer:"217",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 217, 식: none"
    };
  }
});

// [수찾기1] 2자리 수 중 95초과인 자연수에서 가장 작은 수를 쓰시오....
T11_external.push({
  key:"external_수찾기1_1407",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2자리 수 중 95초과인 자연수에서 가장 작은 수를 쓰시오.",
      answer:"96",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 96, 식: none"
    };
  }
});

// [수찾기1] 우빈이의 생일 파티를 위해 전등을 설치하려 합니다. 빨간 전등은 27개, 파란 전등은 41...
T11_external.push({
  key:"external_수찾기1_1408",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우빈이의 생일 파티를 위해 전등을 설치하려 합니다. 빨간 전등은 27개, 파란 전등은 41개, 초록 전등은 24개 있습니다. 이 중 가장 적은 전등의 개수만큼 각각 설치하려 할 때, 설치할 총 전등의 수를 구하시오.",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [수찾기1] 주연이는 용돈을 20일마다, 민우는 30일마다 받는다고 합니다. 오늘 두 사람이 모두 용돈...
T11_external.push({
  key:"external_수찾기1_1409",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주연이는 용돈을 20일마다, 민우는 30일마다 받는다고 합니다. 오늘 두 사람이 모두 용돈을 받았다면 동시에 용돈을 받는 날은 며칠 후입니까?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기1] 7, 12, 17, 22 와 같은 규칙으로 수를 계속해서 나열해나갈때, A번째에 들어갈 수...
T11_external.push({
  key:"external_수찾기1_1410",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"7, 12, 17, 22 와 같은 규칙으로 수를 계속해서 나열해나갈때, A번째에 들어갈 수는 37이다. A의 값을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기1] 45, 90, 135, 150, 180 중에서 9와 15의 공배수가 아닌 수는 몇 입니까?...
T11_external.push({
  key:"external_수찾기1_1411",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45, 90, 135, 150, 180 중에서 9와 15의 공배수가 아닌 수는 몇 입니까?",
      answer:"150",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 150, 식: none"
    };
  }
});

// [수찾기1] 준호의 집에는 사과가 12개, 레몬 5개, 파인애플 2개, 배 15개가 있습니다. 이 중에...
T11_external.push({
  key:"external_수찾기1_1412",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준호의 집에는 사과가 12개, 레몬 5개, 파인애플 2개, 배 15개가 있습니다. 이 중에서 가장 많이 있는 과일의 수와 가장 적게 있는 과일의 수를 더하시오.",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [수찾기1] 체육 시간에 달리기를 했습니다. 어느 다섯 명의 기록이 각각 35.7, 61.0, 75.7...
T11_external.push({
  key:"external_수찾기1_1413",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육 시간에 달리기를 했습니다. 어느 다섯 명의 기록이 각각 35.7, 61.0, 75.7, 31.6, 85.0초일 때, 1등과 꼴찌의 기록 차이는 몇 초입니까?",
      answer:"53.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 53.4, 식: none"
    };
  }
});

// [수찾기1] 60cm의 종이 테이프 위에 3cm 간격으로 빨간색 점을, 5cm 간격으로 노란색 점을 찍...
T11_external.push({
  key:"external_수찾기1_1414",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"60cm의 종이 테이프 위에 3cm 간격으로 빨간색 점을, 5cm 간격으로 노란색 점을 찍으려고 합니다. 종이 테이프의 양끝을 시작점과 끝점으로 할 때, 두 색깔의 점이 같은 위치에 찍히게 되는 곳은 몇 군데입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기1] 승관이와 민규, 정한이는 영화를 봤습니다. 승관이는 영화를 162분 민규는 210분, 정한...
T11_external.push({
  key:"external_수찾기1_1415",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승관이와 민규, 정한이는 영화를 봤습니다. 승관이는 영화를 162분 민규는 210분, 정한이는 229분을 봤습니다. 세 친구중에 200분 이상 230분 이하로 영화를 보지 않은 친구의 시간은 몇 분입니까?",
      answer:"162",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 162, 식: none"
    };
  }
});

// [수찾기1] 45 이상 73 미만인 3의 배수 중에 6으로 나누었을 때 나머지가 3인 수를 찾고, 해당...
T11_external.push({
  key:"external_수찾기1_1416",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45 이상 73 미만인 3의 배수 중에 6으로 나누었을 때 나머지가 3인 수를 찾고, 해당되는 모든 수의 평균값보다 작은 값을 더하시오.",
      answer:"102",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 102, 식: none"
    };
  }
});

// [수찾기1] 깜빡이 X는 15초 동안 켜져 있다가 3초 동안 꺼지고, 깜빡이 Y는 20초 동안 켜져 있...
T11_external.push({
  key:"external_수찾기1_1417",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"깜빡이 X는 15초 동안 켜져 있다가 3초 동안 꺼지고, 깜빡이 Y는 20초 동안 켜져 있다가 4초 동안 꺼집니다. 2개의 깜빡이가 동시에 켜진 후 다음 번 동시에 켜지기까지는 몇 초가 걸립니까?",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [수찾기1] 네 사람이 식당 아르바이트를 했습니다. 민정이네 식당 손님은 236명, 호준이네 식당 손님...
T11_external.push({
  key:"external_수찾기1_1418",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"네 사람이 식당 아르바이트를 했습니다. 민정이네 식당 손님은 236명, 호준이네 식당 손님은 191명, 소정이네 식당 손님은 278명, 하이네 식당 손님은 184명이 왔습니다. 가장 많이 온 식당의 손님은 몇 명입니까?",
      answer:"278",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 278, 식: none"
    };
  }
});

// [수찾기1] 다음의 숫자 45, 99, 73, 50, 44가 있습니다. 이 수들의 평균값에 가장 가까운...
T11_external.push({
  key:"external_수찾기1_1419",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 숫자 45, 99, 73, 50, 44가 있습니다. 이 수들의 평균값에 가장 가까운 값과 중앙값을 찾아 큰 값에서 작은 값을 뺀 차를 구하시오.",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [수찾기1] 겨울이의 다리 길이는 110cm이고, 현정이의 다리 길이는 118cm, 상수의 다리길이는 ...
T11_external.push({
  key:"external_수찾기1_1420",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"겨울이의 다리 길이는 110cm이고, 현정이의 다리 길이는 118cm, 상수의 다리길이는 116 cm입니다. 이때, 115cm 이상인 사람의 다리 길이를 모두 더하시오.",
      answer:"234",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 234, 식: none"
    };
  }
});

// [수찾기1] 45보다 크고 73보다 작은 3의 배수 중, 63 다음으로 큰 수를 찾으시오....
T11_external.push({
  key:"external_수찾기1_1421",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45보다 크고 73보다 작은 3의 배수 중, 63 다음으로 큰 수를 찾으시오.",
      answer:"66",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 66, 식: none"
    };
  }
});

// [수찾기1] 소민, 수현, 현진이의 신발 사이즈는 각각 220mm, 240mm, 235mm입니다. 신발...
T11_external.push({
  key:"external_수찾기1_1422",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소민, 수현, 현진이의 신발 사이즈는 각각 220mm, 240mm, 235mm입니다. 신발 사이즈의 차이가 가장 크게 될 때의 차를 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기1] 현우, 경주, 진주의 한 뼘의 길이가 각각 149mm, 138mm, 152mm입니다. 14...
T11_external.push({
  key:"external_수찾기1_1423",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현우, 경주, 진주의 한 뼘의 길이가 각각 149mm, 138mm, 152mm입니다. 145mm 이상 160mm 이하가 아닌 사람의 한 뼘의 길이는 몇 mm입니까?",
      answer:"138",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 138, 식: none"
    };
  }
});

// [수찾기1] 도훈이네 학교에서 좋아하는 게임 종류를 조사했습니다. 레이싱 게임 78명, 슈팅 게임 55...
T11_external.push({
  key:"external_수찾기1_1424",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도훈이네 학교에서 좋아하는 게임 종류를 조사했습니다. 레이싱 게임 78명, 슈팅 게임 55명, 전략 게임 65명, 심리 게임 47명의 결과가 나왔다고 할 때, 가장 인기가 많은 게임에는 몇 명이 있는지 찾으시오.",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 이삿짐을 옮기려면 A트럭은 10번, B트럭은 6번, C트럭은 17번이다. A, B, C 트...
T11_external.push({
  key:"external_수찾기1_1425",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이삿짐을 옮기려면 A트럭은 10번, B트럭은 6번, C트럭은 17번이다. A, B, C 트럭 중 20의 약수인 트럭 횟수를 고르시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 어느 가을의 기온이 11, 22, 19, 27, 33도였습니다. 이 중 가장 추운 날은 몇...
T11_external.push({
  key:"external_수찾기1_1426",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 가을의 기온이 11, 22, 19, 27, 33도였습니다. 이 중 가장 추운 날은 몇 도였는지 찾으시오.",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기1] 15와 25로 나누어 떨어지는 수 중 400에 가장 가까운 수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1428",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"15와 25로 나누어 떨어지는 수 중 400에 가장 가까운 수를 구하시오.",
      answer:"375",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 375, 식: none"
    };
  }
});

// [수찾기1] 선진이는 만두 68개를 만들었고, 민환이는 만두 51개, 은지는 만두 89개를 만들었습니다...
T11_external.push({
  key:"external_수찾기1_1431",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선진이는 만두 68개를 만들었고, 민환이는 만두 51개, 은지는 만두 89개를 만들었습니다. 이 중에서, 2의 배수이면서 34로 나누어떨어지는 만두 개수는 몇 개 입니까?",
      answer:"68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 68, 식: none"
    };
  }
});

// [수찾기1] 24분마다 출발하는 버스와 30분마다 출발하는 기차가 있습니다. 동시에 출발한 후 12시간...
T11_external.push({
  key:"external_수찾기1_1432",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"24분마다 출발하는 버스와 30분마다 출발하는 기차가 있습니다. 동시에 출발한 후 12시간 동안 동시에 출발하는 것은 모두 몇 번입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기1] 어느 날의 풍속이 각각 10, 2, 8, 34, 21m/s일 때, 가장 바람이 강하게 불었...
T11_external.push({
  key:"external_수찾기1_1433",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 날의 풍속이 각각 10, 2, 8, 34, 21m/s일 때, 가장 바람이 강하게 불었던 날의 풍속을 고르시오.",
      answer:"34",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 34, 식: none"
    };
  }
});

// [수찾기1] 다영, 다윤, 지한이는 각각 학교를 10번, 8번, 13번 결석을 했습니다. 10번 이상 ...
T11_external.push({
  key:"external_수찾기1_1434",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다영, 다윤, 지한이는 각각 학교를 10번, 8번, 13번 결석을 했습니다. 10번 이상 결석한 사람은 몇 명입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 동은이와 지수 성현이는 고양이 사료를 구매했습니다. 동은이는 사료 15kg, 지수는 사료 ...
T11_external.push({
  key:"external_수찾기1_1436",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동은이와 지수 성현이는 고양이 사료를 구매했습니다. 동은이는 사료 15kg, 지수는 사료 25kg, 성현이는 사료 10kg를 구매했을 때, 가장 적은 사료를 구매한 사람의 사료 무게는 몇 kg입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 고속 버스 터미널에서 부산행은 6분마다, 광주행은 10분마다, 진주행은 15분마다 버스가 ...
T11_external.push({
  key:"external_수찾기1_1439",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"고속 버스 터미널에서 부산행은 6분마다, 광주행은 10분마다, 진주행은 15분마다 버스가 출발합니다. 3개의 버스가 동시에 출발 한 후 다음 번 동시에 출발하기까지 몇 분 걸립니까?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [수찾기1] 공원 둘레에 12m 간격으로 나무를 심고, 30m마다 가로등을 세우려고 합니다. 나무를 심...
T11_external.push({
  key:"external_수찾기1_1441",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원 둘레에 12m 간격으로 나무를 심고, 30m마다 가로등을 세우려고 합니다. 나무를 심을 곳과 가로등을 세울 곳이 겹쳐지면 가로등만 세우려고 합니다. 이 공원의 둘레가 780m이면 나무는 몇 그루가 필요하겠습니까?",
      answer:"52",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 52, 식: none"
    };
  }
});

// [수찾기1] 가로, 세로가 각각 8cm, 12cm인 직사각형 모양의 색종이를 늘어놓아 될 수 있는 대로...
T11_external.push({
  key:"external_수찾기1_1442",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로, 세로가 각각 8cm, 12cm인 직사각형 모양의 색종이를 늘어놓아 될 수 있는 대로 작은 정사각형을 만들려고 합니다. 정사각형의 한 변의 길이는 몇 cm로 해야 합니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기1] 한라산은 1950m, 태백산은 1566m, 설악산은 1708m, 덕유산은 1614m, 입니...
T11_external.push({
  key:"external_수찾기1_1443",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한라산은 1950m, 태백산은 1566m, 설악산은 1708m, 덕유산은 1614m, 입니다. 병규가 이번에 오른 산의 높이는 1598m이고, 높은 순서대로 차근차근 오른다고 했을 때, 병규가 다음에 오를 산의 높이는 몇 m입니까?",
      answer:"1614",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1614, 식: none"
    };
  }
});

// [수찾기1] 정류장에서 시내 버스는 8분마다, 좌석 버스는 12분마다 출발한다고 합니다. 오전 8시에 ...
T11_external.push({
  key:"external_수찾기1_1444",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정류장에서 시내 버스는 8분마다, 좌석 버스는 12분마다 출발한다고 합니다. 오전 8시에 처음으로 동시에 출발하였다면 오전 8시부터 오전 11시까지 동시에 출발하는 것은 모두 몇 번입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기1] 장원이가 가지고 있는 피아노의의 가로 길이는 257m이고, 하늘이가 가지고 있는 피아노 가...
T11_external.push({
  key:"external_수찾기1_1445",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"장원이가 가지고 있는 피아노의의 가로 길이는 257m이고, 하늘이가 가지고 있는 피아노 가로 길이는 167m, 희진이가 가지고 있는 피아노의 가로 길이는 236m입니다. 이 중에서 가장 긴 피아노를 가지고 있는 사람의 피아노 가로 길이는 몇 m입니까?",
      answer:"257",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 257, 식: none"
    };
  }
});

// [수찾기1] 체육 시간에 달리기 시합을 하여 다섯 명의 기록이 각각 82.2, 40.3, 75.1, 6...
T11_external.push({
  key:"external_수찾기1_1447",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육 시간에 달리기 시합을 하여 다섯 명의 기록이 각각 82.2, 40.3, 75.1, 62.5, 63.1초가 나왔습니다. 각자 다음 등수의 사람에게 요령을 가르쳐주기로 하였을 때, 40.3초의 기록을 가진 사람이 가르치게 될 사람의 기록은 몇 초입니까?",
      answer:"62.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 62.5, 식: none"
    };
  }
});

// [수찾기1] 공원에 윤철이는 나무를 21그루 심었고, 준기는 34그루, 서진이는 29그루를 심었을 때,...
T11_external.push({
  key:"external_수찾기1_1448",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원에 윤철이는 나무를 21그루 심었고, 준기는 34그루, 서진이는 29그루를 심었을 때, 25그루 이상 심은 사람의 나무 개수를 모두 더하시오.",
      answer:"63",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 63, 식: none"
    };
  }
});

// [수찾기1] 구현, 지혜, 슬기는 중간고사를 봤습니다. 시험 총점은 각각 734점, 812점, 757점...
T11_external.push({
  key:"external_수찾기1_1449",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"구현, 지혜, 슬기는 중간고사를 봤습니다. 시험 총점은 각각 734점, 812점, 757점입니다. 이때, 14의 배수이면서 58로 나누어떨어지는 점수는 몇 점입니까?",
      answer:"812",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 812, 식: none"
    };
  }
});

// [수찾기1] 한희는 110 , 재희는 822 , 보현이는 627 , 소혜는 307 , 기준이는 737의...
T11_external.push({
  key:"external_수찾기1_1450",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한희는 110 , 재희는 822 , 보현이는 627 , 소혜는 307 , 기준이는 737의 숫자가 적힌 카드를 각각 뽑았습니다. 각 자리 수를 더했을 때 가장 큰 수가 나오는 사람이 이기는 내기를 했을 때, 이기게 되는 사람의 카드 숫자를 찾으시오.",
      answer:"nan",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: nan, 식: none"
    };
  }
});

// [수찾기1] 가장 숫자가 큰 사람이 이기는 내기에서 5명이 번호가 적힌 종이를 각각 뽑았더니 67 , ...
T11_external.push({
  key:"external_수찾기1_1452",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가장 숫자가 큰 사람이 이기는 내기에서 5명이 번호가 적힌 종이를 각각 뽑았더니 67 , 34 , 89 , 39 , 30이 나왔습니다. 이길 사람의 숫자를 찾으시오.",
      answer:"89",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 89, 식: none"
    };
  }
});

// [수찾기1] 37 이상, 50 이하의 자연수 중 짝수의 개수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1453",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"37 이상, 50 이하의 자연수 중 짝수의 개수를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기1] 호수의 산책로는 총 5000m입니다. 호수 입구에서부터 산책로를 따라 45m마다 의자를 설...
T11_external.push({
  key:"external_수찾기1_1454",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호수의 산책로는 총 5000m입니다. 호수 입구에서부터 산책로를 따라 45m마다 의자를 설치하였고, 72m마다 꽃을 심었습니다. 의자와 꽃을 동시에 볼 수 있는 곳은 모두 몇 군데입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기1] 반에서 키 순서대로 자리 배치를 하였습니다. 승우의 키는 180cm, 윤진이의 키는 173...
T11_external.push({
  key:"external_수찾기1_1456",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"반에서 키 순서대로 자리 배치를 하였습니다. 승우의 키는 180cm, 윤진이의 키는 173cm, 다연의 키는 166cm, 민수의 키는 178cm입니다. 가장 큰 키여서 맨 뒤에 앉게 될 사람의 키는 몇 cm입니까?",
      answer:"180",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 180, 식: none"
    };
  }
});

// [수찾기1] 생태공원의 총 길이는 4000m입니다. 입구에서부터 24m마다 식물 체험학습 코너가 있고,...
T11_external.push({
  key:"external_수찾기1_1457",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"생태공원의 총 길이는 4000m입니다. 입구에서부터 24m마다 식물 체험학습 코너가 있고, 60m마다 동물 체험학습 코너가 있습니다. 그리고 식물과 동물 체험학습 코너가 만나는 곳에는 쉼터가 있습니다. 둘째 번 쉼터는 입구에서부터 거리가 얼마나 떨어져 있습니까?",
      answer:"240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 240, 식: none"
    };
  }
});

// [수찾기1] 나은이네 햄버거 가게에서 불고기 버거 74개, 새우 버거 57개, 치즈 버거 63개를 만들...
T11_external.push({
  key:"external_수찾기1_1458",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나은이네 햄버거 가게에서 불고기 버거 74개, 새우 버거 57개, 치즈 버거 63개를 만들 수 있습니다. 세 종류의 버거를 묶은 세트를 최대한 만들었다고 할 때, 사용된 총 햄버거의 수를 구하시오.",
      answer:"171",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 171, 식: none"
    };
  }
});

// [수찾기1] 46 이상 73 미만인 홀수를 모두 찾은 후, 해당되는 수 중에 이들의 중앙값보다 큰 수의...
T11_external.push({
  key:"external_수찾기1_1459",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 73 미만인 홀수를 모두 찾은 후, 해당되는 수 중에 이들의 중앙값보다 큰 수의 개수를 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기1] 다음 공에 25, 16, 32, 24, 21이 적혀있을 때, 24 이상의 수가 적힌 공을 ...
T11_external.push({
  key:"external_수찾기1_1461",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 공에 25, 16, 32, 24, 21이 적혀있을 때, 24 이상의 수가 적힌 공을 찾아 그 수를 모두 더하시오.",
      answer:"81",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 81, 식: none"
    };
  }
});

// [수찾기1] 46 이상 72 이하인 홀수가 있습니다. 이 중에 63보다 큰 수를 모두 찾아 그 합을 구...
T11_external.push({
  key:"external_수찾기1_1462",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 72 이하인 홀수가 있습니다. 이 중에 63보다 큰 수를 모두 찾아 그 합을 구하시오.",
      answer:"272",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 272, 식: none"
    };
  }
});

// [수찾기1] 임의의 공을 5개 뽑아 자연수 398, 826, 998, 824, 374가 나왔습니다. 여...
T11_external.push({
  key:"external_수찾기1_1463",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"임의의 공을 5개 뽑아 자연수 398, 826, 998, 824, 374가 나왔습니다. 여기서 가장 큰 수와 가장 작은 수를 합하면 얼마입니까?",
      answer:"1372",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1372, 식: none"
    };
  }
});

// [수찾기1] 45보다 크고 73보다 작은 3의 배수 중, 53 다음으로 작은 수를 찾으시오....
T11_external.push({
  key:"external_수찾기1_1465",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45보다 크고 73보다 작은 3의 배수 중, 53 다음으로 작은 수를 찾으시오.",
      answer:"51",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 51, 식: none"
    };
  }
});

// [수찾기1] 노트북을 샀습니다. 원희는 2300000원 노트북을 샀고, 혁진이는 원희보다 600000원...
T11_external.push({
  key:"external_수찾기1_1466",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"노트북을 샀습니다. 원희는 2300000원 노트북을 샀고, 혁진이는 원희보다 600000원 더 비싼 노트북을 샀습니다. 경주는 3100000원 노트북을 샀을 때, 제일 비싼 노트북을 산 사람의 가격은 얼마입니까?",
      answer:"3100000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3100000, 식: none"
    };
  }
});

// [수찾기1] 이현이의 그림 전시회에 방문객 수가 월요일에 78명, 화요일에 55명, 수요일에 65명, ...
T11_external.push({
  key:"external_수찾기1_1467",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이현이의 그림 전시회에 방문객 수가 월요일에 78명, 화요일에 55명, 수요일에 65명, 목요일에 47명, 금요일에 10명이었습니다. 가장 방문객이 적었던 요일의 방문객 수를 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기1] 어느 아쿠아리움에 있는 동물들의 개체 수가 너무 많아져서 가장 개체가 많은 종은 다른 장소...
T11_external.push({
  key:"external_수찾기1_1468",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 아쿠아리움에 있는 동물들의 개체 수가 너무 많아져서 가장 개체가 많은 종은 다른 장소로 보내려고 합니다. 돌고래 78마리, 상어 55마리, 거북이 65마리, 해마 47마리가 있다고 할 때, 다른 곳으로 옮겨질 종의 개체 수를 찾으시오.",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 산책로에서 강을 따라 지연이는 570걸음을 걸었고, 현주는 540걸음을 걸었습니다. 영기 ...
T11_external.push({
  key:"external_수찾기1_1469",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"산책로에서 강을 따라 지연이는 570걸음을 걸었고, 현주는 540걸음을 걸었습니다. 영기 는 567걸음을 걸었을 때, 가장 많이 걸은 사람은 몇 걸음입니까?",
      answer:"570",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 570, 식: none"
    };
  }
});

// [수찾기1] 세 친구는 도토리를 줍고 있습니다. 현지는 140개, 지수는 250개, 채영이는 130개의...
T11_external.push({
  key:"external_수찾기1_1470",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 친구는 도토리를 줍고 있습니다. 현지는 140개, 지수는 250개, 채영이는 130개의 도토리를 주웠습니다. 세친구가 가지고 있는 도토리의 개수 중 135개 이상 260개 이하가 아닌 도토리의 개수는 몇입니까?",
      answer:"130",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 130, 식: none"
    };
  }
});

// [수찾기1] 전구가 하나는 5초 동안 켜졌다 4초동안 꺼지고, 다른 하나는 12초 동안 켜졌다 3초 동...
T11_external.push({
  key:"external_수찾기1_1471",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전구가 하나는 5초 동안 켜졌다 4초동안 꺼지고, 다른 하나는 12초 동안 켜졌다 3초 동안 꺼집니다. 두 전구가 모두 오후8시에 켜졌다면 9시까지 두 전구가 동시에 켜진는 경우는 모두 몇 번입니까?",
      answer:"80",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 80, 식: none"
    };
  }
});

// [수찾기1] 공원에 밤나무가 78그루, 은행나무가 55그루, 단풍나무가 65그루, 소나무가 47그루 있...
T11_external.push({
  key:"external_수찾기1_1473",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원에 밤나무가 78그루, 은행나무가 55그루, 단풍나무가 65그루, 소나무가 47그루 있습니다. 이 중 가장 많은 수의 나무는 몇 그루입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 양궁대회에서 5판동안 서울이는 50점, 민수는 45점, 희진이는 39점입니다. 40점 이상...
T11_external.push({
  key:"external_수찾기1_1474",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"양궁대회에서 5판동안 서울이는 50점, 민수는 45점, 희진이는 39점입니다. 40점 이상 맞은 사람은 몇 명입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 46 이상 72 미만인 짝수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값에서 ...
T11_external.push({
  key:"external_수찾기1_1476",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"46 이상 72 미만인 짝수를 모두 찾은 후, 해당되는 수 중에 중앙값을 가장 큰 값에서 뺀 차를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기1] 시소를 탔습니다. 동현이는 85kg, 민정이는 60kg, 수아는 동현이보다 30kg 가볍울...
T11_external.push({
  key:"external_수찾기1_1477",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시소를 탔습니다. 동현이는 85kg, 민정이는 60kg, 수아는 동현이보다 30kg 가볍울 때, 이 중에서 가장 가벼워 시소가 올라가는 몸무게는 몇 kg입니까?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: none"
    };
  }
});

// [수찾기1] 경준이는 15일마다, 진주는 20일마다 청소당번이 돌아옵니다. 두사람이 오늘 같이 청소를 ...
T11_external.push({
  key:"external_수찾기1_1478",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경준이는 15일마다, 진주는 20일마다 청소당번이 돌아옵니다. 두사람이 오늘 같이 청소를 했다면 다음 번에 같이 청소하는 날은 며칠 후입니까?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기1] 헬스장에서 지혜는 런닝을 78분을 뛰고, 민하는 54분을, 이삭이는 65분을 뛰었습니다. ...
T11_external.push({
  key:"external_수찾기1_1479",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"헬스장에서 지혜는 런닝을 78분을 뛰고, 민하는 54분을, 이삭이는 65분을 뛰었습니다. 이때, 가장 런닝을 적게 뛴 사람의 시간은 몇 분입니까?",
      answer:"54",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 54, 식: none"
    };
  }
});

// [수찾기1] 51 이상 62 미만인 짝수 중에 가장 큰 수보다 44 더 큰 수를 구하시오....
T11_external.push({
  key:"external_수찾기1_1480",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51 이상 62 미만인 짝수 중에 가장 큰 수보다 44 더 큰 수를 구하시오.",
      answer:"104",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 104, 식: none"
    };
  }
});

// [수찾기1] 45보다 크고 73보다 작은 홀수 중, 63 다음으로 큰 수를 찾으시오....
T11_external.push({
  key:"external_수찾기1_1481",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"45보다 크고 73보다 작은 홀수 중, 63 다음으로 큰 수를 찾으시오.",
      answer:"65",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 65, 식: none"
    };
  }
});

// [수찾기1] (가), (나), (다), (라) 4개의 상자가 있습니다. (가) 상자는 무게가 15kg이...
T11_external.push({
  key:"external_수찾기1_1482",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(가), (나), (다), (라) 4개의 상자가 있습니다. (가) 상자는 무게가 15kg이고, (나) 상자는 (라) 상자보다 5kg 더 무겁습니다. (다)상자는 (가) 상자보다 2kg 가볍고, (라) 상자는 21kg 입니다. 이때, 가장 무거운 상자의 무게는 몇 kg입니까?",
      answer:"26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 26, 식: none"
    };
  }
});

// [수찾기1] 선수들이 높이뛰기 대회에 참가하여 78, 55, 65, 47, 10m의 기록을 세웠습니다....
T11_external.push({
  key:"external_수찾기1_1483",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선수들이 높이뛰기 대회에 참가하여 78, 55, 65, 47, 10m의 기록을 세웠습니다. 가장 높이 뛴 선수에게 우승상을 주려고 합니다. 이 때, 우승상을 받을 선수의 기록은 몇 m입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 숫자 74, 42, 39, 22, 72가 있습니다. 여기서 가장 큰 값을 찾고, 평균값에서...
T11_external.push({
  key:"external_수찾기1_1484",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"숫자 74, 42, 39, 22, 72가 있습니다. 여기서 가장 큰 값을 찾고, 평균값에서 가장 가까운 값을 뺀 차를 구하시오.",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [수찾기1] 다음 수 9, 15, 13 중에서 36의 약수인 것을 고르시오....
T11_external.push({
  key:"external_수찾기1_1485",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 수 9, 15, 13 중에서 36의 약수인 것을 고르시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기1] 다음의 숫자 53.8, 42.9, 58.7, 48.0, 93.5 중에, 자연수 51보다 작...
T11_external.push({
  key:"external_수찾기1_1487",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음의 숫자 53.8, 42.9, 58.7, 48.0, 93.5 중에, 자연수 51보다 작은 수를 모두 골라 개수를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기1] 어느 여름, 기온이 25, 22, 37, 41, 33도였습니다. 이 중 가장 더운 날은 몇...
T11_external.push({
  key:"external_수찾기1_1488",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 여름, 기온이 25, 22, 37, 41, 33도였습니다. 이 중 가장 더운 날은 몇 도였는지 찾으시오.",
      answer:"41",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 41, 식: none"
    };
  }
});

// [수찾기1] 청량리 행 지하철은 4 분마다, 인천 행 지하철은 46분마다 들어옵니다. 오전 11 시에 ...
T11_external.push({
  key:"external_수찾기1_1490",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"청량리 행 지하철은 4 분마다, 인천 행 지하철은 46분마다 들어옵니다. 오전 11 시에 청량리행과 인천행이 동시에 들어왔다면 다음 번 동시에 들어오는 시각은 A시 B분일때, A+B의 값을 구하시오.",
      answer:"23",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 23, 식: none"
    };
  }
});

// [수찾기1] 범준이는 잠자리를 43마리, 장수풍뎅이를 27마리, 사슴벌레를 30마리 잡았습니다. 가장 ...
T11_external.push({
  key:"external_수찾기1_1491",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"범준이는 잠자리를 43마리, 장수풍뎅이를 27마리, 사슴벌레를 30마리 잡았습니다. 가장 많이 잡은 곤충은 풀어주려고 합니다. 이 때 풀어줄 곤충의 마릿수는?",
      answer:"43",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 43, 식: none"
    };
  }
});

// [수찾기1] 통 안에 숫자가 적힌 공 5개가 들어 있습니다. 숫자는 524, 896, 299, 971,...
T11_external.push({
  key:"external_수찾기1_1493",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"통 안에 숫자가 적힌 공 5개가 들어 있습니다. 숫자는 524, 896, 299, 971, 239이며, 이 다섯 개의 공 중에서 크기가 중간인 공을 찾아 값을 적으시오.",
      answer:"524",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 524, 식: none"
    };
  }
});

// [수찾기1] 지영이네 반 학생 수는 40명과 50명 사이입니다. 지영이네 반 학생들은 3열로 세워도, ...
T11_external.push({
  key:"external_수찾기1_1494",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지영이네 반 학생 수는 40명과 50명 사이입니다. 지영이네 반 학생들은 3열로 세워도, 7열로 세워도 남는 학생이 없다면 지영이네 반 학생은 모두 몇 명입니까?",
      answer:"42",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 42, 식: none"
    };
  }
});

// [수찾기1] 어느 식당에 각각 700, 3500, 2200, 900원인 메뉴가 있습니다. 가장 비싼 음...
T11_external.push({
  key:"external_수찾기1_1495",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 식당에 각각 700, 3500, 2200, 900원인 메뉴가 있습니다. 가장 비싼 음식을 먹으려고 할 때, 이 음식의 가격을 찾으시오.",
      answer:"3500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3500, 식: none"
    };
  }
});

// [수찾기1] 8.31의 100배인 수, 80의 0.1배인 수, 3.2의 10배 인 수들 중에 가장 큰 ...
T11_external.push({
  key:"external_수찾기1_1496",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"8.31의 100배인 수, 80의 0.1배인 수, 3.2의 10배 인 수들 중에 가장 큰 수는 A일 때, A의 값을 구하시오.",
      answer:"831",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 831, 식: none"
    };
  }
});

// [수찾기1] 민주네 학교에서 독감이 유행하여 반마다 78, 55, 65, 47, 10명의 환자가 나왔습...
T11_external.push({
  key:"external_수찾기1_1497",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민주네 학교에서 독감이 유행하여 반마다 78, 55, 65, 47, 10명의 환자가 나왔습니다. 가장 많은 환자가 있는 반은 비대면 수업을 진행하려고 할 때, 비대면 수업을 하게 될 반의 환자 수를 찾으시오.",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 현동이네 화원에는 장미 78송이, 튤립 55송이, 무궁화 65송이, 개나리 47송이를 기르...
T11_external.push({
  key:"external_수찾기1_1498",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현동이네 화원에는 장미 78송이, 튤립 55송이, 무궁화 65송이, 개나리 47송이를 기르고 있습니다. 가장 수가 많은 꽃은 몇 송이입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [수찾기1] 뽑힌 로또 번호는 66, 60, 35, 77, 84였습니다. 가장 낮은 두 수를 맞췄다고 ...
T11_external.push({
  key:"external_수찾기1_1499",
  unitId:"m1-1-1-III-1",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"뽑힌 로또 번호는 66, 60, 35, 77, 84였습니다. 가장 낮은 두 수를 맞췄다고 했을 때, 두 수의 합을 구하시오.",
      answer:"95",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 95, 식: none"
    };
  }
});

// [수찾기1] 여름에 일주일동안 정태는 에어컨을 578분 틀었고, 연수는 645분, 순우는 699분 틀었...
T11_external.push({
  key:"external_수찾기1_1500",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기1","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"여름에 일주일동안 정태는 에어컨을 578분 틀었고, 연수는 645분, 순우는 699분 틀었습니다. 이때, 600분 이상 700분 이하로 에어컨을 틀지 않은 사람의 시간은 몇 분 입니까?",
      answer:"578",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 578, 식: none"
    };
  }
});

// [수찾기2] 트럭 공장에서 어제는 트럭을 52A대 생산하고, 오늘은 3B4대 생산했습니다. 총 869대...
T11_external.push({
  key:"external_수찾기2_1502",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"트럭 공장에서 어제는 트럭을 52A대 생산하고, 오늘은 3B4대 생산했습니다. 총 869대를 생산했을 때, A+B의 값을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 전교생이 1572명인 학교에서 운동회 시간에 짝짓기놀이를 하였습니다. 3명씩 32A모둠이 ...
T11_external.push({
  key:"external_수찾기2_1503",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전교생이 1572명인 학교에서 운동회 시간에 짝짓기놀이를 하였습니다. 3명씩 32A모둠이 만들어졌고, 4명씩 1B0모둠이 만들어졌습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 승관이네 집에는 암탉이 A마리 있습니다. 그 중 반은 닭 한마리가 2일에 한 개씩 달걀을 ...
T11_external.push({
  key:"external_수찾기2_1507",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승관이네 집에는 암탉이 A마리 있습니다. 그 중 반은 닭 한마리가 2일에 한 개씩 달걀을 낳고, 나머지는 하루에 한 개씩 달걀을 낳는다고 합니다. 4주일 동안 210개를 낳았다고 할 때, A의 값을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 두 도시의 인구를 조사했습니다. 첫 번째 도시의 인구는 32A명이고, 두 번째 도시의 인구...
T11_external.push({
  key:"external_수찾기2_1508",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 도시의 인구를 조사했습니다. 첫 번째 도시의 인구는 32A명이고, 두 번째 도시의 인구는 2B6명입니다. 두 도시를 합친 인구가 578명일 때, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 명수의 나이는 A살입니다. 동훈이의 나이는 명수의 나이의 (3/5)이고, 형돈의 나이는 명...
T11_external.push({
  key:"external_수찾기2_1509",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"명수의 나이는 A살입니다. 동훈이의 나이는 명수의 나이의 (3/5)이고, 형돈의 나이는 명수의 나이의 1(1/5)배입니다. 형돈이의 나이가 36살이고, 동훈이의 나이를 B라고 할때, A-B의 값을 구하시오.",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 어떤 수 A와 B의 최대공약수는 8이고, 최소공배수는 120입니다. 어떤수 A와 B의 합을...
T11_external.push({
  key:"external_수찾기2_1511",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수 A와 B의 최대공약수는 8이고, 최소공배수는 120입니다. 어떤수 A와 B의 합을 구하시오.",
      answer:"84",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 84, 식: none"
    };
  }
});

// [수찾기2] 세희네 과일가게는 일 주일 동안 사과를 팔았습니다 3일 동안은 하루에 32A씩 팔렸고, 4...
T11_external.push({
  key:"external_수찾기2_1512",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세희네 과일가게는 일 주일 동안 사과를 팔았습니다 3일 동안은 하루에 32A씩 팔렸고, 4일 동안은 하루에 1B0씩 팔렸습니다. 일 주일 동안 모두 1572개의 사과를 팔았을 때, 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 16을 2로 나눴을 때의 몫이 A를 7로 나눴을 때의 몫과 동일하다. 나머지는 모두 0일 ...
T11_external.push({
  key:"external_수찾기2_1513",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"16을 2로 나눴을 때의 몫이 A를 7로 나눴을 때의 몫과 동일하다. 나머지는 모두 0일 때, A의 값은 무엇입니까?",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기2] 현우는 45장의 학종이를 가지고 있습니다. 1A장은 현우가 학을 접는 데 사용하였고, B3...
T11_external.push({
  key:"external_수찾기2_1515",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현우는 45장의 학종이를 가지고 있습니다. 1A장은 현우가 학을 접는 데 사용하였고, B3장은 친구들에게 나누어 주어서 5장이 남았습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 오늘 용재의 블로그의 방문자 수는 629명 입니다. 이 중 4A8명은 처음 방문한 사람들이...
T11_external.push({
  key:"external_수찾기2_1516",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 용재의 블로그의 방문자 수는 629명 입니다. 이 중 4A8명은 처음 방문한 사람들이었고, 나머지 B01명은 방문한 적이 있었던 사람들입니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 세희는 우표를 32A장, 성중이는 우표를 2B6장 갖고 있습니다. 세희와 성중이가 총 57...
T11_external.push({
  key:"external_수찾기2_1517",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세희는 우표를 32A장, 성중이는 우표를 2B6장 갖고 있습니다. 세희와 성중이가 총 578장의 우표를 갖고 있을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 87-(64/AB)의 값이 85일 때, A+B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1518",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"87-(64/AB)의 값이 85일 때, A+B의 값을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 소진이네는 양계장을 합니다. 578마리 중에서 암탉이 32A마리이고, 나머지 수탉은 2B6...
T11_external.push({
  key:"external_수찾기2_1519",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소진이네는 양계장을 합니다. 578마리 중에서 암탉이 32A마리이고, 나머지 수탉은 2B6마리 입니다. A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 어느 놀이공원의 입장료가 어른은 32A원, 어린이는 1B0원 입니다. 3명의 어른과 4명의...
T11_external.push({
  key:"external_수찾기2_1520",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 놀이공원의 입장료가 어른은 32A원, 어린이는 1B0원 입니다. 3명의 어른과 4명의 어린이가 입장했을 때 1572원이 나왔다면, 알맞은 A, B의 합은 무엇입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 새벽에 새우잡이 배가 89A마리의 새우를 잡았습니다. 경매를 통해 4B7마리가 팔렸고, C...
T11_external.push({
  key:"external_수찾기2_1521",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새벽에 새우잡이 배가 89A마리의 새우를 잡았습니다. 경매를 통해 4B7마리가 팔렸고, C09마리가 남아있습니다. 알맞은 A, B, C의 합을 구하시오.",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 40/2=A, 80/B=20, 5C/5=10일때, A+B+C를 구하시오....
T11_external.push({
  key:"external_수찾기2_1524",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"40/2=A, 80/B=20, 5C/5=10일때, A+B+C를 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] 종연이네 빵집에서는 한 시간에 A2개의 빵을 굽습니다. B시간 동안 총 92개의 빵을 구웠...
T11_external.push({
  key:"external_수찾기2_1526",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"종연이네 빵집에서는 한 시간에 A2개의 빵을 굽습니다. B시간 동안 총 92개의 빵을 구웠을 때, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 유지네 집에서 어제는 수박 1AB개를 수확하고, 오늘은 2AA개를 수확하였습니다. 어제와 ...
T11_external.push({
  key:"external_수찾기2_1528",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유지네 집에서 어제는 수박 1AB개를 수확하고, 오늘은 2AA개를 수확하였습니다. 어제와 오늘 총 368개를 수확했다면, A+B의 값은 무엇입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 1부터 9까지의 수 중, 51에 A배를 했을 때, 301보다 큰 경우를 만족하는 한 자리 ...
T11_external.push({
  key:"external_수찾기2_1529",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 9까지의 수 중, 51에 A배를 했을 때, 301보다 큰 경우를 만족하는 한 자리 수 A중 가장 작은 값을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 다은이네 반 학생은 45명 입니다. 음악을 가장 좋아하는 학생이 1A명, 미술을 가장 좋아...
T11_external.push({
  key:"external_수찾기2_1530",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다은이네 반 학생은 45명 입니다. 음악을 가장 좋아하는 학생이 1A명, 미술을 가장 좋아하는 학생이 B3명, 음악, 미술을 제외한 다른 과목을 가장 좋아하는 학생이 5명일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 현진이는 32A원짜리 연필을 3개와 1B0원짜리 지우개를 4개를 구입하고 싶습니다. 그러나...
T11_external.push({
  key:"external_수찾기2_1531",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현진이는 32A원짜리 연필을 3개와 1B0원짜리 지우개를 4개를 구입하고 싶습니다. 그러나 갖고 있는 돈 1500원에서 72원이 모자랄 때, 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 운동장에 청팀과 백팀이 있습니다. 청팀과 백팀의 인원은 똑같이 421명 입니다. 이 중 5...
T11_external.push({
  key:"external_수찾기2_1532",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"운동장에 청팀과 백팀이 있습니다. 청팀과 백팀의 인원은 똑같이 421명 입니다. 이 중 5A8명이 남학생이고 30B명이 여학생일 때, 알맞는 A, B의 곱을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 이번 달 보름이네 사진관에서 증명사진을 찍은 사람은 4A8명, 여권사진을 찍은 사람은 B0...
T11_external.push({
  key:"external_수찾기2_1534",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이번 달 보름이네 사진관에서 증명사진을 찍은 사람은 4A8명, 여권사진을 찍은 사람은 B01명 입니다. 증명사진 혹은 여권사진을 찍은 사람이 모두 629명일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 1.7*2.1*3.4=12.ABC의 식이 있다. A+B+C의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1535",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1.7*2.1*3.4=12.ABC의 식이 있다. A+B+C의 값을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] A와 B를 더하면 32이라고 한다. A와 B를 나누면 3일 때, B는?...
T11_external.push({
  key:"external_수찾기2_1537",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A와 B를 더하면 32이라고 한다. A와 B를 나누면 3일 때, B는?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 기훈이네 회사에는 32A의 정규직과 2B6명의 비정규직이 있습니다. 회사에 총 578명이 ...
T11_external.push({
  key:"external_수찾기2_1538",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기훈이네 회사에는 32A의 정규직과 2B6명의 비정규직이 있습니다. 회사에 총 578명이 다닐 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 혜민이네 마을에 자동차가 7A8대가 있습니다. 이 중 400대는 국산차, 32B대는 외제차...
T11_external.push({
  key:"external_수찾기2_1539",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜민이네 마을에 자동차가 7A8대가 있습니다. 이 중 400대는 국산차, 32B대는 외제차일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 색종이가 A0개 있습니다. 이 색종이를 3명에게 똑같이 20개씩 나누어 가졌습니다. A에 ...
T11_external.push({
  key:"external_수찾기2_1540",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"색종이가 A0개 있습니다. 이 색종이를 3명에게 똑같이 20개씩 나누어 가졌습니다. A에 들어갈 수를 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 전체 장 수가 323장인 위인전이 있습니다. 성훈이는 방학동안 2A6장을 읽어서 6B장이 ...
T11_external.push({
  key:"external_수찾기2_1541",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전체 장 수가 323장인 위인전이 있습니다. 성훈이는 방학동안 2A6장을 읽어서 6B장이 남았습니다. 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] 한 개에 500원 하는 과자 4개와 700원 하는 막대사탕 7개를 사고 AB000원을 내었...
T11_external.push({
  key:"external_수찾기2_1542",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 개에 500원 하는 과자 4개와 700원 하는 막대사탕 7개를 사고 AB000원을 내었더니 거스름돈으로 3,100원을 받았습니다. A-B의 값을 구하시오.",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1, 식: none"
    };
  }
});

// [수찾기2] (3/7)*21의 값과 (B/A)*15의 값은 9로 같다. A+B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1543",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(3/7)*21의 값과 (B/A)*15의 값은 9로 같다. A+B의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 395-18A>210일 때, A안에 들어갈 수 없는 숫자 중 가장 큰 숫자는 무엇입니까?...
T11_external.push({
  key:"external_수찾기2_1544",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"395-18A>210일 때, A안에 들어갈 수 없는 숫자 중 가장 큰 숫자는 무엇입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 동그란 모양의 전등이 3개 들어가는 방이 32A개가 있고, 직선 모양의 전등이 4개 들어가...
T11_external.push({
  key:"external_수찾기2_1545",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동그란 모양의 전등이 3개 들어가는 방이 32A개가 있고, 직선 모양의 전등이 4개 들어가는 방이 1B0개가 있을 때 필요한 전등의 개수는 1572개 입니다. 알맞은 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 0.1의 자리가 4, 0.01의 자리가 A인 수에 0.458을 더해서 0.938이 되었다고...
T11_external.push({
  key:"external_수찾기2_1546",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"0.1의 자리가 4, 0.01의 자리가 A인 수에 0.458을 더해서 0.938이 되었다고 할 때, A의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 호텔에는 A2B개의 방이 있습니다. 이 중 3C4개는 침대방, 225개는 온돌방 입니다. ...
T11_external.push({
  key:"external_수찾기2_1548",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호텔에는 A2B개의 방이 있습니다. 이 중 3C4개는 침대방, 225개는 온돌방 입니다. 알맞은 A, B, C의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 어느 영화의 관객 629명 중에서 이 영화를 처음 본 관객은 4A8명이고, 두번 이상 보는...
T11_external.push({
  key:"external_수찾기2_1549",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 영화의 관객 629명 중에서 이 영화를 처음 본 관객은 4A8명이고, 두번 이상 보는 관객은 B01명입니다. 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 14/2=A, 36/B=6일 때, A, B의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1550",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"14/2=A, 36/B=6일 때, A, B의 합을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 23를 어떤수 A로 나누었더니 나머지가 3이 되었습니다. 이 때, 어떤 수 A에 들어갈 수...
T11_external.push({
  key:"external_수찾기2_1551",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"23를 어떤수 A로 나누었더니 나머지가 3이 되었습니다. 이 때, 어떤 수 A에 들어갈 수 있는 A의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 소연이네 목장에서는 578마리의 염소를 기릅니다. 이 중 32A마리가 젖소이고 나머지 2B...
T11_external.push({
  key:"external_수찾기2_1552",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소연이네 목장에서는 578마리의 염소를 기릅니다. 이 중 32A마리가 젖소이고 나머지 2B6마리는 젖소가 아닙니다. 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 4679에서 A1을 더한 수보다 4622가 클 때, A에 들어갈 수 있는 값의 최소값은?...
T11_external.push({
  key:"external_수찾기2_1553",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"4679에서 A1을 더한 수보다 4622가 클 때, A에 들어갈 수 있는 값의 최소값은?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 2.87에 3.123을 더하면 A.BC3이 된다고 할 때, A+B-C의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1554",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2.87에 3.123을 더하면 A.BC3이 된다고 할 때, A+B-C의 값을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 어떤 분수 (A/B)에 3을 곱했더니 (9/11)이 되었다. 어떤 분수 (A/B)의 분자는...
T11_external.push({
  key:"external_수찾기2_1555",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 분수 (A/B)에 3을 곱했더니 (9/11)이 되었다. 어떤 분수 (A/B)의 분자는 무엇입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기2] A/5=B이고 B*B=64일 때, 이를 만족하는 A를 구하시오....
T11_external.push({
  key:"external_수찾기2_1556",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A/5=B이고 B*B=64일 때, 이를 만족하는 A를 구하시오.",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [수찾기2] 매점에 콜라 32A개와 사이다 2B6개가 재고로 있습니다. 콜라와 사이다의 재고가 총 57...
T11_external.push({
  key:"external_수찾기2_1558",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"매점에 콜라 32A개와 사이다 2B6개가 재고로 있습니다. 콜라와 사이다의 재고가 총 578개 일 때, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 소현이네 신발가게에 운동화가 32A 켤레, 구두가 2B6 켤레 있습니다. 운동화와 구두가 ...
T11_external.push({
  key:"external_수찾기2_1559",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소현이네 신발가게에 운동화가 32A 켤레, 구두가 2B6 켤레 있습니다. 운동화와 구두가 총 578 켤레가 있을 때, A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 현정이는 어제 만화책을 1AB쪽 읽었고, 오늘은 2BA쪽 읽었습니다. 현정이가 어제와 오늘...
T11_external.push({
  key:"external_수찾기2_1560",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현정이는 어제 만화책을 1AB쪽 읽었고, 오늘은 2BA쪽 읽었습니다. 현정이가 어제와 오늘 총 377쪽을 읽었을 때, A와 B의 곱 무엇입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 세 자연수 X,Y,Z에 대하여 방정식 X+Y+Z =21을 만족시키는 홀수로만 이뤄진 해의 ...
T11_external.push({
  key:"external_수찾기2_1561",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 자연수 X,Y,Z에 대하여 방정식 X+Y+Z =21을 만족시키는 홀수로만 이뤄진 해의 개수는?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: none"
    };
  }
});

// [수찾기2] 나연이는 한 시간에 A3개의 종이학을 접을 수 있습니다. B시간 동안 총 92개의 종이학을...
T11_external.push({
  key:"external_수찾기2_1562",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나연이는 한 시간에 A3개의 종이학을 접을 수 있습니다. B시간 동안 총 92개의 종이학을 만들었다면, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 94를 7로 나누었더니 몫이 A이고, 나머지가 B이었습니다. A-B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1563",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"94를 7로 나누었더니 몫이 A이고, 나머지가 B이었습니다. A-B의 값을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 문영이는 친구 생일 선물로 32A원을 사용했고, 간식을 사 먹는 데 2B6원을 사용했습니다...
T11_external.push({
  key:"external_수찾기2_1565",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"문영이는 친구 생일 선물로 32A원을 사용했고, 간식을 사 먹는 데 2B6원을 사용했습니다. 생일 선물과 간식을 산 비용이 총 578원일 때, 이를 만족하는 A+B를 구하시오",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 은정이는 421개가 들어있는 사탕을 2박스 준비했습니다. 이 중 5A8개는 친구들에게 나누...
T11_external.push({
  key:"external_수찾기2_1566",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은정이는 421개가 들어있는 사탕을 2박스 준비했습니다. 이 중 5A8개는 친구들에게 나누어 주었고, 30B개가 남았습니다. 이를 만족하는 A, B의 곱을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 가A나를 가*나*가로 나타날 때, 3A(8/23)의 값은 (B/C)이다, B+C의 값을 구...
T11_external.push({
  key:"external_수찾기2_1567",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가A나를 가*나*가로 나타날 때, 3A(8/23)의 값은 (B/C)이다, B+C의 값을 구하시오.",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [수찾기2] 혜린이는 10분 동안 A2개의 줄넘기를 넘었습니다. B0초 동안 92개의 줄넘기를 넘었을 ...
T11_external.push({
  key:"external_수찾기2_1569",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜린이는 10분 동안 A2개의 줄넘기를 넘었습니다. B0초 동안 92개의 줄넘기를 넘었을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 다음 식 35A+2B4=C51을 만족하는 A, B, C를 구하여 세 자리 수 BAC를 만들...
T11_external.push({
  key:"external_수찾기2_1571",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 식 35A+2B4=C51을 만족하는 A, B, C를 구하여 세 자리 수 BAC를 만들면 얼마입니까?",
      answer:"976",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 976, 식: none"
    };
  }
});

// [수찾기2] 태민이네 학교에서 햄버거를 주문했습니다. 7A8명의 전교생 중에서 400명이 새우 버거를 ...
T11_external.push({
  key:"external_수찾기2_1572",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"태민이네 학교에서 햄버거를 주문했습니다. 7A8명의 전교생 중에서 400명이 새우 버거를 주문하고, 32B명이 불고기 버거를 주문했다면, 알맞은 A, B의 합을 구하시오",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] A마리의 강아지에게 간식을 B3g씩 주려고 합니다. 준비해야 하는 간식이 모두 92g일 때...
T11_external.push({
  key:"external_수찾기2_1573",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A마리의 강아지에게 간식을 B3g씩 주려고 합니다. 준비해야 하는 간식이 모두 92g일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 은지네 마을에는 1572명이 살고 있습니다. 가족 구성원이 3명인 가족이 32A가구, 가족...
T11_external.push({
  key:"external_수찾기2_1574",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은지네 마을에는 1572명이 살고 있습니다. 가족 구성원이 3명인 가족이 32A가구, 가족 구성원이 4명인 가족이 1B0가구 살고 있을 때, 이를 만족하는 A, B의 합은 무엇입니까? (단, 마을에는 3인 가족과 4인 가족만 살고 있습니다.)",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 인형 공장에서 평일 동안에는 54A개의 인형을 생산하고, 주말 동안에는 1B9개의 인형을 ...
T11_external.push({
  key:"external_수찾기2_1575",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인형 공장에서 평일 동안에는 54A개의 인형을 생산하고, 주말 동안에는 1B9개의 인형을 생산한다. 일주일 동안 총 685개를 생산할 때, A*B는 무엇입니까?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 작년 이산화탄소 농도는 A10ppm이고 올해 이산화탄소 농도는 작년보다 B0ppm 증가하였...
T11_external.push({
  key:"external_수찾기2_1576",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"작년 이산화탄소 농도는 A10ppm이고 올해 이산화탄소 농도는 작년보다 B0ppm 증가하였습니다. 작년과 올해의 이산화탄소 농도의 합은 830ppm일 때, A+B는 무엇입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 다영이네 학교의 전교생은 629명입니다. 이 중 A01명이 기숙사 생활을 할 수 있고, 나...
T11_external.push({
  key:"external_수찾기2_1578",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다영이네 학교의 전교생은 629명입니다. 이 중 A01명이 기숙사 생활을 할 수 있고, 나머지 4B8명은 통학을 해야 합니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 10/2>27/A에 들어갈 수 있는 알맞은 한 자리 수를 구하시오....
T11_external.push({
  key:"external_수찾기2_1579",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"10/2>27/A에 들어갈 수 있는 알맞은 한 자리 수를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 지연이는 편의점에서 A00원짜리 음료수 3개와 음료수의 2배보다 100원 더 비싼 과자를 ...
T11_external.push({
  key:"external_수찾기2_1580",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지연이는 편의점에서 A00원짜리 음료수 3개와 음료수의 2배보다 100원 더 비싼 과자를 5개 샀습니다. 과자 5개를 구입한 가격이 음료수 3개를 구입한 가격보다 1900원 더 비쌀 때, 이를 만족하는 A를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 문구점에서 종합장은 32A원, 공책은 2B6원 입니다. 초희가 종합장 한 장과 공책 한 장...
T11_external.push({
  key:"external_수찾기2_1581",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"문구점에서 종합장은 32A원, 공책은 2B6원 입니다. 초희가 종합장 한 장과 공책 한 장을 사서 578원이 나왔습니다. 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 소희네 집에서는 578마리의 닭을 키우고 있습니다. 이 중 32A마리를 팔고, 나머지 2B...
T11_external.push({
  key:"external_수찾기2_1582",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소희네 집에서는 578마리의 닭을 키우고 있습니다. 이 중 32A마리를 팔고, 나머지 2B6마리가 남았습니다. 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 도희는 32A원씩 3일 저금하였고, 성현이는 1B0원씩 4일 저금하였습니다. 2000원보다...
T11_external.push({
  key:"external_수찾기2_1583",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도희는 32A원씩 3일 저금하였고, 성현이는 1B0원씩 4일 저금하였습니다. 2000원보다 428원 모자르게 모았다면, 이에 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 다연이네 학교에서는 학생들이 좋아하는 운동을 조사했습니다. 32A명은 축구라고 답했고, 2...
T11_external.push({
  key:"external_수찾기2_1584",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다연이네 학교에서는 학생들이 좋아하는 운동을 조사했습니다. 32A명은 축구라고 답했고, 2B6명은 농구라고 답했습니다. 축구와 농구를 좋아하는 학생이 578명일 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 어느 식당에서 식중독 균이 발견되었습니다. 그 날 방문한 손님 4A7명 중에서 B3C명은 ...
T11_external.push({
  key:"external_수찾기2_1585",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 식당에서 식중독 균이 발견되었습니다. 그 날 방문한 손님 4A7명 중에서 B3C명은 식중독에 걸렸고, 나머지 226명은 괜찮았다고 합니다. 알맞은 A, B, C의 합을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 51을 A번 더했을 때, 301보다 큰 경우를 만족하는 한 자리수 A의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1588",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51을 A번 더했을 때, 301보다 큰 경우를 만족하는 한 자리수 A의 합을 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] 채현이네 아버지는 자연산 버섯 채취를 하십니다. 한 산 당 최대 A3개의 버섯을 채취할 수...
T11_external.push({
  key:"external_수찾기2_1589",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"채현이네 아버지는 자연산 버섯 채취를 하십니다. 한 산 당 최대 A3개의 버섯을 채취할 수 있고, B개의 산에 대해서 허가를 받았을 때, 최대로 채취할 수 있는 버섯의 개수는 92개 일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 희연와 지연이는 과수원에서 사과를 수확하였습니다. 희연는 3.35kg을 수확하고, 지연이는...
T11_external.push({
  key:"external_수찾기2_1590",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희연와 지연이는 과수원에서 사과를 수확하였습니다. 희연는 3.35kg을 수확하고, 지연이는 3.01kg을 수확하여 모두 A.BC라고 할 때, A+B+C의 값을 구하시오.",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기2] 전교생 498명에게 기후변화에 대한 인식을 물어봤습니다. 심각하다고 응답한 학생이 A4B명...
T11_external.push({
  key:"external_수찾기2_1591",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전교생 498명에게 기후변화에 대한 인식을 물어봤습니다. 심각하다고 응답한 학생이 A4B명, 기후변화를 체감하지 못한다고 응답한 학생이 1C6명입니다. 이를 만족하는 A, B, C의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 재영이네 마을의 보건소에서 예방 주사를 맞아야하는 어린이는 A2B명 입니다. 이 중 3C4...
T11_external.push({
  key:"external_수찾기2_1592",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재영이네 마을의 보건소에서 예방 주사를 맞아야하는 어린이는 A2B명 입니다. 이 중 3C4명은 주사를 맞았고, 나머지 225명은 아직 맞지 않았습니다. 이를 만족하는 A, B, C의 합은 무엇입니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 책장 한 칸에 들어갈 수 있는 책이 A3권 입니다. 책장이 B칸 있을 때 모두 92권의 책...
T11_external.push({
  key:"external_수찾기2_1593",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"책장 한 칸에 들어갈 수 있는 책이 A3권 입니다. 책장이 B칸 있을 때 모두 92권의 책이 들어간다면, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 51에 A배를 했을 때, 301보다 큰 경우를 만족하는 한 자리수 A의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1594",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51에 A배를 했을 때, 301보다 큰 경우를 만족하는 한 자리수 A의 합을 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] 어느 병원에 백신을 예약한 사람은 755명 입니다. 백신을 2차에 걸쳐서 맞아야 할 때, ...
T11_external.push({
  key:"external_수찾기2_1595",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 병원에 백신을 예약한 사람은 755명 입니다. 백신을 2차에 걸쳐서 맞아야 할 때, 1차까지 접종한 사람은 13A명, 2차까지 접종한 사람은 3B2명, 아직 한번도 맞지 않은 사람은 C48명 입니다. 이를 만족하는 A, B, C의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 소풍을 위해 300봉지의 과자를 구입했습니다. 9A명의 학생들에게 동일하게 B봉지씩 나눠주...
T11_external.push({
  key:"external_수찾기2_1596",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소풍을 위해 300봉지의 과자를 구입했습니다. 9A명의 학생들에게 동일하게 B봉지씩 나눠주고 21봉지가 남았다면, 이를 만족하는 A, B의 합은 무엇입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 창현이네 반에서는 폐지를 주었습니다. 여학생은 17A장을 모았고, 남학생은 2B9장을 모았...
T11_external.push({
  key:"external_수찾기2_1597",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"창현이네 반에서는 폐지를 주었습니다. 여학생은 17A장을 모았고, 남학생은 2B9장을 모았습니다. 이틀 동안 390장을 모았을 때, A+B는 무엇입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] A+40=6*A의 식을 만족하는 어떤수 A를 구하시오....
T11_external.push({
  key:"external_수찾기2_1598",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A+40=6*A의 식을 만족하는 어떤수 A를 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 5891가 5430에서 50씩 A번 뛰어서 센 수보다 클 때, A에 들어갈 수 있는 최소값...
T11_external.push({
  key:"external_수찾기2_1599",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"5891가 5430에서 50씩 A번 뛰어서 센 수보다 클 때, A에 들어갈 수 있는 최소값은?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 현준이는 빨간 우표를 32A장, 파란 우표를 2B6장 갖고 있습니다. 총 578장의 우표를...
T11_external.push({
  key:"external_수찾기2_1600",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현준이는 빨간 우표를 32A장, 파란 우표를 2B6장 갖고 있습니다. 총 578장의 우표를 갖고 있을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 1부터 15까지의 자연수 중 4로 나누어 떨어지는 수 A의 모든 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1601",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 15까지의 자연수 중 4로 나누어 떨어지는 수 A의 모든 합을 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] 수현이는 1시간에 A3개의 수학 문제를 풀 수 있습니다. B시간 동안 문제를 풀어서 총 9...
T11_external.push({
  key:"external_수찾기2_1602",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수현이는 1시간에 A3개의 수학 문제를 풀 수 있습니다. B시간 동안 문제를 풀어서 총 92문제를 풀었다면, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 3에서 5씩 커지는 수가 있습니다. 99보다 큰 수가 A번 째에 처음으로 나타날 때, A는...
T11_external.push({
  key:"external_수찾기2_1604",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3에서 5씩 커지는 수가 있습니다. 99보다 큰 수가 A번 째에 처음으로 나타날 때, A는 몇 인지 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기2] 온라인 게임에서 같은 팀인 우석이와 종인이는 각각 A56점과 3B8점을 냈습니다. 이 팀의...
T11_external.push({
  key:"external_수찾기2_1605",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"온라인 게임에서 같은 팀인 우석이와 종인이는 각각 A56점과 3B8점을 냈습니다. 이 팀의 합산 점수는 854점일 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기2] (17+AB-6)/6*13의 값을 52라고 할 때, A+B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1607",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(17+AB-6)/6*13의 값을 52라고 할 때, A+B의 값을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 정하네 도시에 강아지나 고양이를 키우는 가구는 7A8가구가 있습니다. 이 중 400가구는 ...
T11_external.push({
  key:"external_수찾기2_1608",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정하네 도시에 강아지나 고양이를 키우는 가구는 7A8가구가 있습니다. 이 중 400가구는 강아지, 32B가구는 고양이를 키울 때, 알맞은 A, B의 합은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 식목일에 마을 앞산에 나무를 심었습니다. 목표는 323그루를 심는 것인데, 현재까지 2A6...
T11_external.push({
  key:"external_수찾기2_1609",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"식목일에 마을 앞산에 나무를 심었습니다. 목표는 323그루를 심는 것인데, 현재까지 2A6그루를 심어서 6B그루가 남았습니다. 이를 만족하는 A, B의 곱을 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] 2*A=24, B*C=24, A/B=4 일 때, A,C의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1610",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2*A=24, B*C=24, A/B=4 일 때, A,C의 합을 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기2] 둘레가 137.6m인 연못이 있습니다. 이 연못의 둘레를 5바퀴 반 돌았다면, 걸은 거리를...
T11_external.push({
  key:"external_수찾기2_1611",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 137.6m인 연못이 있습니다. 이 연못의 둘레를 5바퀴 반 돌았다면, 걸은 거리를 A.B라고 할 때, A-B의 값을 구하시오.",
      answer:"748",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 748, 식: none"
    };
  }
});

// [수찾기2] 6*(72/B)의 값을 54라고 할 때, A의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1612",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6*(72/B)의 값을 54라고 할 때, A의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 기차는 한 시간에 75.2km를 달리고 버스는 54.2km를 달립니다. 기차와 버스가 동시...
T11_external.push({
  key:"external_수찾기2_1613",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기차는 한 시간에 75.2km를 달리고 버스는 54.2km를 달립니다. 기차와 버스가 동시에 출발하여 2시간 30분 동안 달렸다면, 기차와 버스가 달린 거리의 합을 2AB.5이라 할 때, A+B의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 백현이의 색 테이프 길이는 131.4cm이고, 동생의 색 테이프의 길이는 백현이의 색 테이...
T11_external.push({
  key:"external_수찾기2_1614",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"백현이의 색 테이프 길이는 131.4cm이고, 동생의 색 테이프의 길이는 백현이의 색 테이프 길이 보다 7.4cm 더 길다. 동생의 색 테이프를 A, 모든 색 테이프의 합을 B라고 할 때, A+B의 값을 구하시오.",
      answer:"409",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 409, 식: none"
    };
  }
});

// [수찾기2] 10을 A로 나눴을 때의 몫이 27을 A로 나눴을 때의 몫보다 클 때, A에 들어갈 수 있...
T11_external.push({
  key:"external_수찾기2_1617",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"10을 A로 나눴을 때의 몫이 27을 A로 나눴을 때의 몫보다 클 때, A에 들어갈 수 있는 한 자리 자연수를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 서진이네 음식점에서는 달걀을 하루에 9A개씩 사용한다고 합니다. 한 판에 30개인 달걀 1...
T11_external.push({
  key:"external_수찾기2_1618",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서진이네 음식점에서는 달걀을 하루에 9A개씩 사용한다고 합니다. 한 판에 30개인 달걀 10판을 사고 B일 동안 사용하여 달걀 21개가 남았을 때, 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 세진이는 3일 동안 하루에 A00원을 저금하고, 5일 동안은 하루에 A00원의 두배보다 1...
T11_external.push({
  key:"external_수찾기2_1619",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세진이는 3일 동안 하루에 A00원을 저금하고, 5일 동안은 하루에 A00원의 두배보다 100원 더 많게 저금했습니다. 8일 동안 모인 금액이 3100원일 때, 알맞은 A를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 어느 극장에 주말동안의 총 관람객은 578명이었습니다. 토요일에 32A명이 입장했고, 일요...
T11_external.push({
  key:"external_수찾기2_1620",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 극장에 주말동안의 총 관람객은 578명이었습니다. 토요일에 32A명이 입장했고, 일요일에 2B6명이 입장했다면, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] A+B=24, A/B=7 를 만족하는 A, B가 있을 때, A와 B의 차를 구하시오....
T11_external.push({
  key:"external_수찾기2_1622",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A+B=24, A/B=7 를 만족하는 A, B가 있을 때, A와 B의 차를 구하시오.",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 자동차 공장에서 어제 생산한 차는 25A대이고, 오늘 생산한 차는 4AB대이다. 이틀 동안...
T11_external.push({
  key:"external_수찾기2_1623",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"자동차 공장에서 어제 생산한 차는 25A대이고, 오늘 생산한 차는 4AB대이다. 이틀 동안 687대를 생산했을 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 도서관에서 책을 기부 받았습니다. 어제는 31A권, 오늘은 4B2권을 받았습니다. 총 74...
T11_external.push({
  key:"external_수찾기2_1624",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도서관에서 책을 기부 받았습니다. 어제는 31A권, 오늘은 4B2권을 받았습니다. 총 748권을 받았을 때, A+B는 무엇입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] A+B=15, A/B=2 일 때, A는?...
T11_external.push({
  key:"external_수찾기2_1626",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A+B=15, A/B=2 일 때, A는?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] A25ml의 음료가 있습니다. 이 중 2BCml를 마셔서 247ml가 남았습니다. 이를 만...
T11_external.push({
  key:"external_수찾기2_1627",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A25ml의 음료가 있습니다. 이 중 2BCml를 마셔서 247ml가 남았습니다. 이를 만족하는 A,B,C의 합을 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기2] 3*(A/B)=(9/11)일 때, 다음을 만족하는 분수 (A/B)에 대해서 B-A를 구하시...
T11_external.push({
  key:"external_수찾기2_1628",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3*(A/B)=(9/11)일 때, 다음을 만족하는 분수 (A/B)에 대해서 B-A를 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 지은이네 회사에서는 2000개의 교구를 만들었습니다. 3개의 학교에 32A개씩 팔았고, 4...
T11_external.push({
  key:"external_수찾기2_1629",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지은이네 회사에서는 2000개의 교구를 만들었습니다. 3개의 학교에 32A개씩 팔았고, 4개의 학교에 1B0개씩 팔았습니다. 남은 교구가 428개일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 주경이는 오전에 동화책을 32A쪽을 읽었고, 오후에 2B6쪽을 읽었다. 오늘 총 578쪽을...
T11_external.push({
  key:"external_수찾기2_1630",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주경이는 오전에 동화책을 32A쪽을 읽었고, 오후에 2B6쪽을 읽었다. 오늘 총 578쪽을 읽었다면, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 한 봉지에 30개씩 들어있는 사탕이 A0봉지가 있습니다. 20명의 학생들을 4명씩 모둠으로...
T11_external.push({
  key:"external_수찾기2_1631",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 봉지에 30개씩 들어있는 사탕이 A0봉지가 있습니다. 20명의 학생들을 4명씩 모둠으로 나누어 사탕을 한 모둠에 5B개씩 나누어 주면 25개가 남습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 한 엘레베이터 당 탈 수 있는 인원은 A3명 입니다. 총 B대의 엘레베이터가 있을 때, 탈...
T11_external.push({
  key:"external_수찾기2_1632",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 엘레베이터 당 탈 수 있는 인원은 A3명 입니다. 총 B대의 엘레베이터가 있을 때, 탈 수 있는 인원이 92명이라면, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 넓이가 324m2인 정사각형 모양의 땅이 있습니다. 이 땅의 가로를 처음 길이보다 (1/3...
T11_external.push({
  key:"external_수찾기2_1633",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 324m2인 정사각형 모양의 땅이 있습니다. 이 땅의 가로를 처음 길이보다 (1/3)만큼 늘리고, 세로는 처음 길이의 (5/9)로 줄여서 직사각형 모양을 만드려고 합니다. 늘린 가로의 길이를 A, 줄인 세로의 길이를 B, 새로 만든 직사각형의 둘레의 길이를 C라고 할 때, A*B-C의 값을 구하시오.",
      answer:"172",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 172, 식: none"
    };
  }
});

// [수찾기2] 가로가 Am이고, 세로는 가로의 3(3/6)배인 42m인 직사각형 모양의 밭이 있습니다. ...
T11_external.push({
  key:"external_수찾기2_1635",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로가 Am이고, 세로는 가로의 3(3/6)배인 42m인 직사각형 모양의 밭이 있습니다. 이 밭의 넓이를 B라고 할 때, A+B의 값을 구하시오.",
      answer:"504",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 504, 식: none"
    };
  }
});

// [수찾기2] 수연이네 채소 가게에서 피망이 32A개, 파가 2B6개 팔렸습니다. 팔린 피망과 파가 57...
T11_external.push({
  key:"external_수찾기2_1637",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수연이네 채소 가게에서 피망이 32A개, 파가 2B6개 팔렸습니다. 팔린 피망과 파가 578개라면, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 310<51*A을 만족하는 모든 한 자리수 A의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1638",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"310<51*A을 만족하는 모든 한 자리수 A의 합을 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] 18.67+8.7-4.3의 값이 AB.CD일 때 A+B+C+D의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1639",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"18.67+8.7-4.3의 값이 AB.CD일 때 A+B+C+D의 값을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 미술 수업에 참가한 학생 중 32A명은 그리기를 했고, 2B6명은 만들기를 했습니다. 총 ...
T11_external.push({
  key:"external_수찾기2_1640",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미술 수업에 참가한 학생 중 32A명은 그리기를 했고, 2B6명은 만들기를 했습니다. 총 578명이 수업에 참여있을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] A에 3을 곱한 값이 3B을 B로 나눈 값과 동일하다. B*B=36일 때, A는?...
T11_external.push({
  key:"external_수찾기2_1642",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A에 3을 곱한 값이 3B을 B로 나눈 값과 동일하다. B*B=36일 때, A는?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 과학 실험에서, 4A7ml의 알코올이 있었는데, B3ml를 사용하여 226ml가 남았습니다...
T11_external.push({
  key:"external_수찾기2_1643",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과학 실험에서, 4A7ml의 알코올이 있었는데, B3ml를 사용하여 226ml가 남았습니다. 이 때, A+B+C는 무엇입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 2A는 25보다 클 때, A 안에 들어갈 수 있는 수 중에서 가장 큰 수는?...
T11_external.push({
  key:"external_수찾기2_1644",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2A는 25보다 클 때, A 안에 들어갈 수 있는 수 중에서 가장 큰 수는?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 초록은행의 예금 고객은 32A명이고, 적금 고객은 2B6명입니다. 예금과 적금을 든 고객이...
T11_external.push({
  key:"external_수찾기2_1645",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"초록은행의 예금 고객은 32A명이고, 적금 고객은 2B6명입니다. 예금과 적금을 든 고객이 총 578명일 때, A+B는? (단, 예금고객과 적금고객은 겹치지 않음.)",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 어떤 수 A에 8을 곱한 것은 어떤 수 A에 3을 곱한 것보다 30이 더 크다고 합니다. ...
T11_external.push({
  key:"external_수찾기2_1646",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수 A에 8을 곱한 것은 어떤 수 A에 3을 곱한 것보다 30이 더 크다고 합니다. 이때 A는 무엇입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 서현이는 어제 줄넘기를 2A6번 넘었고, 오늘은 어제보다 6B번 더 넘어서 323번을 넘었...
T11_external.push({
  key:"external_수찾기2_1647",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서현이는 어제 줄넘기를 2A6번 넘었고, 오늘은 어제보다 6B번 더 넘어서 323번을 넘었습니다. 알맞은 A, B의 곱은 무엇입니까?",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] 17*3-121/11+14의 값을 AA라고 할 때, A의 값을 구하시오. (A는 같은 수 ...
T11_external.push({
  key:"external_수찾기2_1648",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"17*3-121/11+14의 값을 AA라고 할 때, A의 값을 구하시오. (A는 같은 수 입니다)",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] (3/4)*(5/9)*(16/25)의 값이 (A/B)일 때, A+B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1649",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(3/4)*(5/9)*(16/25)의 값이 (A/B)일 때, A+B의 값을 구하시오.",
      answer:"19",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 19, 식: none"
    };
  }
});

// [수찾기2] 한 묶음에 10장인 색종이가 A8묶음 있습니다. 이 색종이를 남학생에게 97장, 여학생이게...
T11_external.push({
  key:"external_수찾기2_1650",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 묶음에 10장인 색종이가 A8묶음 있습니다. 이 색종이를 남학생에게 97장, 여학생이게 8B장 나누어 주려고 합니다. 이를 만족하는 A, B의 합은 무엇입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 휴대폰 매장에서 어제 판매한 휴대폰은 A대이고, 오늘 판매한 휴대폰은 B대 입니다. 어제와...
T11_external.push({
  key:"external_수찾기2_1651",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"휴대폰 매장에서 어제 판매한 휴대폰은 A대이고, 오늘 판매한 휴대폰은 B대 입니다. 어제와 오늘 판매한 휴대폰의 합은 9, 곱은 20입니다. 오늘보다 어제 많이 판매했을 때, A는 몇 대 입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 한 시간에 A3mm의 강수량이 내렸습니다. B시간 동안 비가 와서 총 92mm의 강수량이 ...
T11_external.push({
  key:"external_수찾기2_1655",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 시간에 A3mm의 강수량이 내렸습니다. B시간 동안 비가 와서 총 92mm의 강수량이 발생했다면, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 선생님께서 학생들에게 스티커를 나눠주셨습니다. 여학생에게는 3장씩 32A명에게 나누어 주었...
T11_external.push({
  key:"external_수찾기2_1656",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선생님께서 학생들에게 스티커를 나눠주셨습니다. 여학생에게는 3장씩 32A명에게 나누어 주었고, 남학생에게는 4장씩 1B0명에게 나누어 주었습니다. 지금 선생님께서 갖고 있는 색종이가 428장이고, 처음 선생님이 갖고 있던 색종이가 2000장이라면, 이를 만족하는 A, B의 곱은 무엇입니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기2] 큰 수 A는 작은 수 B의 3배이고, 두 수의 합은 12일 때, 두 수의 곱을 구하시오....
T11_external.push({
  key:"external_수찾기2_1657",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"큰 수 A는 작은 수 B의 3배이고, 두 수의 합은 12일 때, 두 수의 곱을 구하시오.",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [수찾기2] 영진이는 매점에서 6병에 12000원하는 음료수와, 8개에 2B00원하는 과자를 3개 샀습...
T11_external.push({
  key:"external_수찾기2_1658",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영진이는 매점에서 6병에 12000원하는 음료수와, 8개에 2B00원하는 과자를 3개 샀습니다. 총 2900원이 나왔을 때, 알맞은 A, B의 합은 무엇입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 성연이네 아이스크림 가게에서는 한 시간에 A2개의 아이스크림을 팔았습니다. B시간 동안 총...
T11_external.push({
  key:"external_수찾기2_1659",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성연이네 아이스크림 가게에서는 한 시간에 A2개의 아이스크림을 팔았습니다. B시간 동안 총 92개의 아이스크림을 팔았다면, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 욕조에는 일정한 빠르기로 뜨거운 물이 나오는 수도와 찬물이 나오는 수도가 있습니다. 뜨거운...
T11_external.push({
  key:"external_수찾기2_1660",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"욕조에는 일정한 빠르기로 뜨거운 물이 나오는 수도와 찬물이 나오는 수도가 있습니다. 뜨거운 물이 나오는 수도는 20초에 5.51L의 물이 나오고, 찬물이 나오는 수도는 1분에 19.4L의 물이 나옵니다. 두 수도를 동시에 틀어 5분 동안 물을 받았을 때, 받은 물의 양은 모두 ABC.65L입니다. A*B*C의 값을 구하시오.",
      answer:"63",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 63, 식: none"
    };
  }
});

// [수찾기2] 51을 A번 더했을 때, 301보다 큰 경우를 만족하는 한 자리수 A중 가장 작은 값을 구...
T11_external.push({
  key:"external_수찾기2_1661",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"51을 A번 더했을 때, 301보다 큰 경우를 만족하는 한 자리수 A중 가장 작은 값을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 버스에 AB명의 승객이 타고 있습니다. 이 중에서 (5/9)이 남자이고, 여자는 12명이 ...
T11_external.push({
  key:"external_수찾기2_1662",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"버스에 AB명의 승객이 타고 있습니다. 이 중에서 (5/9)이 남자이고, 여자는 12명이 타고 있습니다. A+B의 값을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] AB/7+6의 값이 13일 떄, B-A의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1664",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"AB/7+6의 값이 13일 떄, B-A의 값을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 오늘 식물원에 입장한 사람은 어른이 32A명 어린이가 2B6명으로 총 578명입니다. 이 ...
T11_external.push({
  key:"external_수찾기2_1665",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 식물원에 입장한 사람은 어른이 32A명 어린이가 2B6명으로 총 578명입니다. 이 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 희지네 과수원에서 작년에는 24A를 수확하고 올해는, 1B3개를 더 수확해서 2년간 총 6...
T11_external.push({
  key:"external_수찾기2_1666",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희지네 과수원에서 작년에는 24A를 수확하고 올해는, 1B3개를 더 수확해서 2년간 총 647개를 수확했습니다. A+B의 값은 무엇입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 지원이네 학교에서 체력 검정을 실시했습니다. 578명의 전교생 중에서 32A명은 통과하고,...
T11_external.push({
  key:"external_수찾기2_1667",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지원이네 학교에서 체력 검정을 실시했습니다. 578명의 전교생 중에서 32A명은 통과하고, 2B6명은 통과하지 못했습니다. 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 3*A.23의 값이 6.69일 때, A의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1668",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3*A.23의 값이 6.69일 때, A의 값을 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 소령이는 곱셈 연습을 하고 있습니다. 5A8*7B=41464을 만족하기 위해서는, 5A8*...
T11_external.push({
  key:"external_수찾기2_1669",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소령이는 곱셈 연습을 하고 있습니다. 5A8*7B=41464을 만족하기 위해서는, 5A8*B=1704와 5A8*7=3C7D의 조건이 필요합니다. 이를 만족하는 A,B,C,D의 합을 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] (5/8)에 (1/A)를 나눈 후, 6을 곱하면 30이 될 때, 이를 만족시키는 A의 값을...
T11_external.push({
  key:"external_수찾기2_1672",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(5/8)에 (1/A)를 나눈 후, 6을 곱하면 30이 될 때, 이를 만족시키는 A의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 지민이는 용돈 2A70원을 받았습니다. 일주일에 걸쳐서 쓰려면 동일하게 하루에 4B0원씩 ...
T11_external.push({
  key:"external_수찾기2_1673",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지민이는 용돈 2A70원을 받았습니다. 일주일에 걸쳐서 쓰려면 동일하게 하루에 4B0원씩 사용해야 합니다. 이를 만족하는 A,B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 찬혁이는 어제 줄넘기를 1A3번 넘었고, 오늘은 15A번 넘었습니다. 모두 297번을 넘었...
T11_external.push({
  key:"external_수찾기2_1674",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"찬혁이는 어제 줄넘기를 1A3번 넘었고, 오늘은 15A번 넘었습니다. 모두 297번을 넘었을 때, A의 값을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 지난 달 방문한 관광객은 13AB명, 이번 달은 지난달보다 4B6명 늘어서 총 3110명이...
T11_external.push({
  key:"external_수찾기2_1675",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지난 달 방문한 관광객은 13AB명, 이번 달은 지난달보다 4B6명 늘어서 총 3110명이 되었습니다. A+B는 무엇입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 관광 버스에 남자가 32A명, 여자가 1B7명 타고 있습니다. 여자가 남자보다 127명 더...
T11_external.push({
  key:"external_수찾기2_1676",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"관광 버스에 남자가 32A명, 여자가 1B7명 타고 있습니다. 여자가 남자보다 127명 더 적게 타고 있을 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 동석이는 동화책, 위인전, 만화책을 모두 182권을 가지고 있습니다. 동화책과 위인전 수의...
T11_external.push({
  key:"external_수찾기2_1677",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동석이는 동화책, 위인전, 만화책을 모두 182권을 가지고 있습니다. 동화책과 위인전 수의 합은 전체 책의 수의 (11/37)이고, 만화책 수의 합은 전체 책의 수의 (7/13)입니다. 위인전의 수가 A0권이고, 동화책과 위인전의 차는 BC일 때, A-B+C의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 이번 스키 캠프에 A2B명이 신청하였습니다. 여자는 3C4명, 남자는 225명일 때, 알맞...
T11_external.push({
  key:"external_수찾기2_1678",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이번 스키 캠프에 A2B명이 신청하였습니다. 여자는 3C4명, 남자는 225명일 때, 알맞은 A, B, C를 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 방과 후 학습에 신청한 학생은 지난 달에 3A5이번 달에 2AB명으로 두 달 동안 총 56...
T11_external.push({
  key:"external_수찾기2_1679",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"방과 후 학습에 신청한 학생은 지난 달에 3A5이번 달에 2AB명으로 두 달 동안 총 569명일 때, A*B는 무엇입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 93을 6으로 나누었더니 몫은 A 나머지는 3이고, 81을 9로 나누었더니 몫이 B입니다....
T11_external.push({
  key:"external_수찾기2_1680",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"93을 6으로 나누었더니 몫은 A 나머지는 3이고, 81을 9로 나누었더니 몫이 B입니다. A-B의 값을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 31과 AB의 곱은 두 자리 수 입니다. AB에 들어갈 수 있는 수 중 가장 큰 수를 쓰시...
T11_external.push({
  key:"external_수찾기2_1681",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"31과 AB의 곱은 두 자리 수 입니다. AB에 들어갈 수 있는 수 중 가장 큰 수를 쓰시오.",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [수찾기2] 소은이네 과일 가게에서 사과는 한 개에 323원이고 배는 한 개에 2A6원 입니다. 사과보...
T11_external.push({
  key:"external_수찾기2_1682",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소은이네 과일 가게에서 사과는 한 개에 323원이고 배는 한 개에 2A6원 입니다. 사과보다 배가 6B원 저렴할 때, 알맞은 A, B의 곱은 무엇입니까?",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] 집에서 학교까지 차로 A2분이 걸립니다. B번 왕복했을 때, 184분이 걸렸을 때, 이를 ...
T11_external.push({
  key:"external_수찾기2_1683",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"집에서 학교까지 차로 A2분이 걸립니다. B번 왕복했을 때, 184분이 걸렸을 때, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 신종 감기바이러스가 유행하였습니다. 전교생 578명 중 32A명이 감기로 인해 결석하고, ...
T11_external.push({
  key:"external_수찾기2_1684",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"신종 감기바이러스가 유행하였습니다. 전교생 578명 중 32A명이 감기로 인해 결석하고, 2B6명만 등교를 했습니다. 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 상진이는 85A*B7의 결과인 C를 계산하고 싶습니다. 85A*7=5D78, 85A*B0=...
T11_external.push({
  key:"external_수찾기2_1685",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상진이는 85A*B7의 결과인 C를 계산하고 싶습니다. 85A*7=5D78, 85A*B0=2EF20일 때, C를 구하시오",
      answer:"31598",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 31598, 식: none"
    };
  }
});

// [수찾기2] 354+A3B=4C6일 때, A+B+C의 값은 무엇입니까?...
T11_external.push({
  key:"external_수찾기2_1686",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"354+A3B=4C6일 때, A+B+C의 값은 무엇입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기2] 아버지의 연세는 41살이시고, 수연이는 9살입니다. 아버지의 연세가 수연이의 A배보다 B살...
T11_external.push({
  key:"external_수찾기2_1687",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아버지의 연세는 41살이시고, 수연이는 9살입니다. 아버지의 연세가 수연이의 A배보다 B살 더 많을 때, A가 최대일 때의 A+B를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 장난감 가게에서 로봇은 32A개가 있고, 인형은 2B6개가 있습니다. 로봇과 인형이 총 5...
T11_external.push({
  key:"external_수찾기2_1688",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"장난감 가게에서 로봇은 32A개가 있고, 인형은 2B6개가 있습니다. 로봇과 인형이 총 578개일 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 오전에 판매한 오이는 A개이고, 오후에 판매한 오이는 B개이다. 오전과 오후동안 판매한 오...
T11_external.push({
  key:"external_수찾기2_1689",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오전에 판매한 오이는 A개이고, 오후에 판매한 오이는 B개이다. 오전과 오후동안 판매한 오이의 합이 9개, 곱이 20개이다. 오전에 오후보다 많이 팔았다면, 오전에 판매한 오이는 몇 개 입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 어느 회사의 사원은 629명입니다. 이 중 4A8명이 재택근무를 하고 B01명은 회사로 출...
T11_external.push({
  key:"external_수찾기2_1690",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 회사의 사원은 629명입니다. 이 중 4A8명이 재택근무를 하고 B01명은 회사로 출근을 할 때, 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 84/(A*7)=4 라고 했을 때, A의 수를 구하시오....
T11_external.push({
  key:"external_수찾기2_1692",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"84/(A*7)=4 라고 했을 때, A의 수를 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기2] 노래 경연 대회에 7A8팀이 지원했습니다. 이 중 400팀만 본선에 진출하고 나머지 32B...
T11_external.push({
  key:"external_수찾기2_1693",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"노래 경연 대회에 7A8팀이 지원했습니다. 이 중 400팀만 본선에 진출하고 나머지 32B팀은 예선에서 탈락하게 됩니다. 이 식을 만족하는 A, B의 합은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 정아는 29A회의 줄넘기를 하고, 연희는 정아보다 B4회 더 많이 했습니다. 두 사람이 총...
T11_external.push({
  key:"external_수찾기2_1694",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정아는 29A회의 줄넘기를 하고, 연희는 정아보다 B4회 더 많이 했습니다. 두 사람이 총 640회의 줄넘기를 하였다면 A*B는 무엇입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [수찾기2] 선분 ㄱㄴ의 길이는 1m입니다. 점 ㄱ은 1분에 1(3/4)cm씩 움직이고, 점 ㄴ은 2(...
T11_external.push({
  key:"external_수찾기2_1696",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선분 ㄱㄴ의 길이는 1m입니다. 점 ㄱ은 1분에 1(3/4)cm씩 움직이고, 점 ㄴ은 2(2/5)cm씩 움직입니다. 두 점이 동시에 출발하여 20분 후에 점 ㄱ이 움직인 거리는 Acm, 점ㄴ이 움직인 거리는 Bcm입니다. B-A의 값을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 현준이는 위인전과 동화책을 샀습니다. 위인전은 152쪽, 동화책은 1A0쪽이었습니다. 첫날...
T11_external.push({
  key:"external_수찾기2_1697",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현준이는 위인전과 동화책을 샀습니다. 위인전은 152쪽, 동화책은 1A0쪽이었습니다. 첫날에는 32쪽을 읽었고, 나머지는 매일 B쪽씩을 12일 동안 읽어서 다 읽었다고 합니다. 알맞은 A, B의 합을 구하시오.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [수찾기2] 이번 주 의류 매장에서 옷을 산 사람은 629명 입니다. 4A8명은 상의를 샀고, 나머지 ...
T11_external.push({
  key:"external_수찾기2_1700",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이번 주 의류 매장에서 옷을 산 사람은 629명 입니다. 4A8명은 상의를 샀고, 나머지 B01명은 하의를 샀습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 수진이네 의자 공장에서 어제 생산한 의자는 32A개이고 오늘 생산한 의자는 2B6개 입니다...
T11_external.push({
  key:"external_수찾기2_1702",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수진이네 의자 공장에서 어제 생산한 의자는 32A개이고 오늘 생산한 의자는 2B6개 입니다. 이틀 동안 생산한 의자의 개수가 578개라면, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 36/3을 계산했을 때 몫은 1A, 나머지는B일 때, A+B를 구하시오....
T11_external.push({
  key:"external_수찾기2_1703",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"36/3을 계산했을 때 몫은 1A, 나머지는B일 때, A+B를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 일의 자리 숫자가 4인 세 자리 수가 있습니다. 이 수와 이 수의 십의 자리 숫자 B와 일...
T11_external.push({
  key:"external_수찾기2_1704",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일의 자리 숫자가 4인 세 자리 수가 있습니다. 이 수와 이 수의 십의 자리 숫자 B와 일의 자리 숫자를 바꾼 합이 710일 때, 이 수의 백의 자리 숫자 A는 얼마입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기2] 가희네 아파트 내에는 헬스장이 있습니다. 모두 7A8가구 중 400가구는 헬스장에 등록을 ...
T11_external.push({
  key:"external_수찾기2_1705",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가희네 아파트 내에는 헬스장이 있습니다. 모두 7A8가구 중 400가구는 헬스장에 등록을 하였고 나머지 32B가구는 등록하지 않았습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 소진이네 우동가게는 한 시간에 A2 그릇의 우동을 팔았습니다. B시간 동안 총 92그릇을 ...
T11_external.push({
  key:"external_수찾기2_1706",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소진이네 우동가게는 한 시간에 A2 그릇의 우동을 팔았습니다. B시간 동안 총 92그릇을 팔았을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 버스에 578명이 타고 출발하여 첫째 정류장에서 32A명이 내렸습니다. 지금 버스 안에 2...
T11_external.push({
  key:"external_수찾기2_1707",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"버스에 578명이 타고 출발하여 첫째 정류장에서 32A명이 내렸습니다. 지금 버스 안에 2B6명이 있을 때, 이를 만족하는 A,B의 곱은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 8*4A=336일때, A를 구하시오....
T11_external.push({
  key:"external_수찾기2_1708",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"8*4A=336일때, A를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 영주는 32A0원짜리 조각 케이크 3개와 1B00원짜리 음료수 4병을 샀습니다. 15720...
T11_external.push({
  key:"external_수찾기2_1709",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영주는 32A0원짜리 조각 케이크 3개와 1B00원짜리 음료수 4병을 샀습니다. 15720원을 내야한다고 할 때, 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 길이가 5.14cm인 색 종이 5장을 이어 붙였습니다. 풀칠할 때 겹쳐진 부분의 길이가 1...
T11_external.push({
  key:"external_수찾기2_1711",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 5.14cm인 색 종이 5장을 이어 붙였습니다. 풀칠할 때 겹쳐진 부분의 길이가 1.4cm입니다. 전체 색 테이프의 길이를 AB.C라고 할 때, A+B+C의 값을 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기2] 35를 4로 나누었을 때 몫은 8이고 나머지는 3이었습니다. 이 식을 맞게 계산 했는지 확...
T11_external.push({
  key:"external_수찾기2_1712",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"35를 4로 나누었을 때 몫은 8이고 나머지는 3이었습니다. 이 식을 맞게 계산 했는지 확인하기 위해, 35=8*A+B를 계산했을 때 A+B를 구하시오",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 떡볶이를 만들기 위해 떡 32Ag과 어묵 2B6g이 필요합니다. 필요한 떡과 어묵이 총 5...
T11_external.push({
  key:"external_수찾기2_1713",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"떡볶이를 만들기 위해 떡 32Ag과 어묵 2B6g이 필요합니다. 필요한 떡과 어묵이 총 578g일 때, A+B를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 24*7A=1728일 때, A를 구하시오....
T11_external.push({
  key:"external_수찾기2_1714",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"24*7A=1728일 때, A를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] A3에 B배를 하였더니 92가 되었습니다. A는?...
T11_external.push({
  key:"external_수찾기2_1715",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A3에 B배를 하였더니 92가 되었습니다. A는?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 주경이네 학교에 동생이 있는 학생은 32A명이고, 동생이 없는 학생은 2B6명 입니다. 전...
T11_external.push({
  key:"external_수찾기2_1716",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주경이네 학교에 동생이 있는 학생은 32A명이고, 동생이 없는 학생은 2B6명 입니다. 전교생이 578명일 때, 이를 만족하는 A,B의 곱은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 아린이네는 소를 키웁니다. 총 A2B마리 중에서 C1마리를 팔아서 102마리가 남았습니다....
T11_external.push({
  key:"external_수찾기2_1717",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아린이네는 소를 키웁니다. 총 A2B마리 중에서 C1마리를 팔아서 102마리가 남았습니다. 이를 만족하는 A,B,C의 곱을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 학생 한 명 당 32A원짜리 초콜릿 3개와 1B0원짜리 사탕 4개를 주려고 합니다. 학생 ...
T11_external.push({
  key:"external_수찾기2_1718",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"학생 한 명 당 32A원짜리 초콜릿 3개와 1B0원짜리 사탕 4개를 주려고 합니다. 학생 한 명에게 선물을 주기 위해 드는 비용이 1572원일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 지경는 전체가 578쪽인 위인전을 오전에 처음부터 32A쪽까지 읽었고, 2B6쪽이 남았습니...
T11_external.push({
  key:"external_수찾기2_1719",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지경는 전체가 578쪽인 위인전을 오전에 처음부터 32A쪽까지 읽었고, 2B6쪽이 남았습니다. 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 은영이네 부모님 회사에는 578명의 직원이 있습니다. 여자 사원이 32A명, 남자 사원이 ...
T11_external.push({
  key:"external_수찾기2_1720",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은영이네 부모님 회사에는 578명의 직원이 있습니다. 여자 사원이 32A명, 남자 사원이 2B6명이 있을 때, 이를 만족하는 A+B를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 선용이네 해산물가게에는 오징어가 323마리 있습니다. 이 중에서 오늘 2A6마리를 팔아서 ...
T11_external.push({
  key:"external_수찾기2_1721",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선용이네 해산물가게에는 오징어가 323마리 있습니다. 이 중에서 오늘 2A6마리를 팔아서 남은 오징어는 6B마리 입니다. 이를 만족하는 A, B의 곱을 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] A와 B의 합은 36이고, A는 B의 3배이다. 이 때 A의 값은?...
T11_external.push({
  key:"external_수찾기2_1722",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A와 B의 합은 36이고, A는 B의 3배이다. 이 때 A의 값은?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [수찾기2] 식목일에 세 마을에서 나무 심기 행사를 했습니다. 첫 째 마을에서는 13A그루를 심었고, ...
T11_external.push({
  key:"external_수찾기2_1723",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"식목일에 세 마을에서 나무 심기 행사를 했습니다. 첫 째 마을에서는 13A그루를 심었고, 둘 째 마을에선느 3B2그루, 셋 째 마을에서는 C48그루를 심었습니다. 세 마을에서 심은 나무를 모두 더하면 755그루 일 때, 알맞은 A, B, C의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 재석이네 마을에는 7A8명이 살고 있습니다. 이 중 종교가 있는 주민은 400명이고, 나머...
T11_external.push({
  key:"external_수찾기2_1724",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재석이네 마을에는 7A8명이 살고 있습니다. 이 중 종교가 있는 주민은 400명이고, 나머지 32B명은 종교가 없습니다. 이를 만족하는 A, B의 합은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 6.124*A=61.24이고, 7.834*B=783.4일 때, A*B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1725",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6.124*A=61.24이고, 7.834*B=783.4일 때, A*B의 값을 구하시오.",
      answer:"1000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1000, 식: none"
    };
  }
});

// [수찾기2] 성연이네 중학교 1학년의 학급 당 정원은 30명 입니다. 모두 10개의 학급이 있고, A개...
T11_external.push({
  key:"external_수찾기2_1727",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성연이네 중학교 1학년의 학급 당 정원은 30명 입니다. 모두 10개의 학급이 있고, A개의 초등학교에서 9B명씩 성연이네 중학교에 진학을 할 때 21자리가 남습니다. 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 연필의 길이는 0.21m이고, 색연필의 길이는 0.29m입니다. 연필과 색연필의 길이는 모...
T11_external.push({
  key:"external_수찾기2_1728",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"연필의 길이는 0.21m이고, 색연필의 길이는 0.29m입니다. 연필과 색연필의 길이는 모두 A.Bm라고 할 때 A+B의 값을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 현주는 578장의 색종이를 가지고 있습니다. 이 중 32A장으로는 학을 접었고, 2B6장으...
T11_external.push({
  key:"external_수찾기2_1729",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현주는 578장의 색종이를 가지고 있습니다. 이 중 32A장으로는 학을 접었고, 2B6장으로는 배를 접었습니다. 알맞은 A, B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 어느 공장에서 한 박스에 30개씩 들어있는 못을 10박스 샀습니다. 하나의 의자를 만드는데...
T11_external.push({
  key:"external_수찾기2_1730",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 공장에서 한 박스에 30개씩 들어있는 못을 10박스 샀습니다. 하나의 의자를 만드는데 A개의 못이 필요하고, 총 9B개의 의자를 만들었을 때, 21개의 못이 남았습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 8A는 86보다 작을 때, A 안에 들어 갈 수 있는 수 중에서 가장 큰 수와 가장 작은 ...
T11_external.push({
  key:"external_수찾기2_1731",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"8A는 86보다 작을 때, A 안에 들어 갈 수 있는 수 중에서 가장 큰 수와 가장 작은 수의 합은?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 상희네 과일가게는 한 시간에 A2개의 사과를 팔았습니다. B시간 동안 총 92개의 사과를 ...
T11_external.push({
  key:"external_수찾기2_1732",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상희네 과일가게는 한 시간에 A2개의 사과를 팔았습니다. B시간 동안 총 92개의 사과를 팔았을 때, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 지은이네 중국 음식점에서 이번 주에 자장면 주문은 400건이 들어왔고, 짬뽕 주문은 32A...
T11_external.push({
  key:"external_수찾기2_1735",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지은이네 중국 음식점에서 이번 주에 자장면 주문은 400건이 들어왔고, 짬뽕 주문은 32A건이 들어왔습니다. 이번 주에 들어오는 자장면, 짬뽕 주문이 모두 7B8건일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 마을에 9A3명의 주민이 살았는데, 6B명이 이사를 가게 되어 847명이 남았습니다. 이를...
T11_external.push({
  key:"external_수찾기2_1736",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"마을에 9A3명의 주민이 살았는데, 6B명이 이사를 가게 되어 847명이 남았습니다. 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 현준이는 1년동안 책 32A권을 읽었고, 현성이는 2B6권을 읽었습니다. 현준이와 현성이가...
T11_external.push({
  key:"external_수찾기2_1737",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현준이는 1년동안 책 32A권을 읽었고, 현성이는 2B6권을 읽었습니다. 현준이와 현성이가 578권을 읽었을 때, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 규식이네 학교에서 신종 유행 감기로 인해 일부 학생들만 등교를 하기로 했습니다. 7A명의 ...
T11_external.push({
  key:"external_수찾기2_1738",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"규식이네 학교에서 신종 유행 감기로 인해 일부 학생들만 등교를 하기로 했습니다. 7A명의 전교생 중 400명은 오늘 등교를 했고, 나머지 32B명은 내일 등교를 합니다. 이를 만족하는 A, B의 합은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 127.3+127.3+127.3+127.3의 값을 A09.B라고 할 떄, A+B의 값을 구...
T11_external.push({
  key:"external_수찾기2_1739",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"127.3+127.3+127.3+127.3의 값을 A09.B라고 할 떄, A+B의 값을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] A와 B의 곱은 24, A를 B로 나누면 6일 때, A와 B의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1740",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A와 B의 곱은 24, A를 B로 나누면 6일 때, A와 B의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 채림이는 체리 578개를 수확했고, 바자회에서 이 중 32A개를 팔았습니다. 2B6개가 남...
T11_external.push({
  key:"external_수찾기2_1741",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"채림이는 체리 578개를 수확했고, 바자회에서 이 중 32A개를 팔았습니다. 2B6개가 남았을 때, 이를 만족하는 A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 86/6를 계산했을 때 몫은 AB이고, 나머지는 2일때, A+B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1742",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"86/6를 계산했을 때 몫은 AB이고, 나머지는 2일때, A+B의 값을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 자동차 판매점에는 300대의 차량이 있습니다. 하루에 9A대의 차량을 동일하게 B일 동안 ...
T11_external.push({
  key:"external_수찾기2_1743",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"자동차 판매점에는 300대의 차량이 있습니다. 하루에 9A대의 차량을 동일하게 B일 동안 팔아서 남은 차량은 21대 입니다. 알맞은 A, B의 곱을 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기2] 컴퓨터 게임에서 현우는 5A8점을 얻었고, 건우는 30B점을 얻었습니다. 둘이 합쳐서 84...
T11_external.push({
  key:"external_수찾기2_1744",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"컴퓨터 게임에서 현우는 5A8점을 얻었고, 건우는 30B점을 얻었습니다. 둘이 합쳐서 842점을 얻었을 때, 알맞은 A, B의 곱은 무엇입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 3.4*8.7*1.4=41.ABC의 식이 있다. A+B+C의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1746",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3.4*8.7*1.4=41.ABC의 식이 있다. A+B+C의 값을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 수희네 학원에는 7A8명의 학생이 있습니다. 이 중 400명은 단일 과목만 듣고 있고, 3...
T11_external.push({
  key:"external_수찾기2_1747",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수희네 학원에는 7A8명의 학생이 있습니다. 이 중 400명은 단일 과목만 듣고 있고, 32B명은 여러 과목을 듣고 있습니다. 알맞은 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] A와 B의 합은 12이고 A를 B로 나누면 몫은 2, 나머지는 0이다. 이때 A-B는?...
T11_external.push({
  key:"external_수찾기2_1748",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A와 B의 합은 12이고 A를 B로 나누면 몫은 2, 나머지는 0이다. 이때 A-B는?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 세령이는 2000cm의 실을 갖고 있습니다. 뜨개질로 목도리 3개와 장갑 4개를 만들려고 ...
T11_external.push({
  key:"external_수찾기2_1749",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세령이는 2000cm의 실을 갖고 있습니다. 뜨개질로 목도리 3개와 장갑 4개를 만들려고 합니다. 목도리는 하나 당 32Acm의 실이 필요하고, 장갑은 하나 당 1B0cm의 실이 필요합니다. 이를 다 만들면 428cm의 실이 남는다고 할 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 전교생이 629명인 학교에 유행성 눈병이 발병했습니다. 4A8명은 걸리지 않았고, 나머지 ...
T11_external.push({
  key:"external_수찾기2_1750",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전교생이 629명인 학교에 유행성 눈병이 발병했습니다. 4A8명은 걸리지 않았고, 나머지 B01명은 걸렸을 때, 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 진아는 하루에 책을 A00쪽씩 3일동안 읽고, 5일 동안은 A00쪽의 2배보다 100쪽 더...
T11_external.push({
  key:"external_수찾기2_1751",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진아는 하루에 책을 A00쪽씩 3일동안 읽고, 5일 동안은 A00쪽의 2배보다 100쪽 더 많이 읽었습니다. 8일 동안 모두 3100쪽을 읽었을 때, 알맞은 A를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 세연이네 안경 가게에는 842개의 안경이 있습니다. 이 중 5A8개를 판매하여 30B개가 ...
T11_external.push({
  key:"external_수찾기2_1752",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세연이네 안경 가게에는 842개의 안경이 있습니다. 이 중 5A8개를 판매하여 30B개가 남았습니다. 알맞은 A, B의 곱을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 지형이는 A00원씩 4일 동안 저금하였고, 현수는 지형이가 저금한 돈의 2배보다 100원 ...
T11_external.push({
  key:"external_수찾기2_1753",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지형이는 A00원씩 4일 동안 저금하였고, 현수는 지형이가 저금한 돈의 2배보다 100원 더 많게 5일 동안 저금하였습니다. 현수가 저금한 돈이 지형이가 저금한 돈보다 1900원 많을 때, 이를 만족하는 A를 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 피자 가게에서 지난 달 51A판이 팔렸고, 이번 달은 4B3판이 팔렸습니다. 두 달동안 총...
T11_external.push({
  key:"external_수찾기2_1754",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"피자 가게에서 지난 달 51A판이 팔렸고, 이번 달은 4B3판이 팔렸습니다. 두 달동안 총 1000판이 팔렸다면, A*B는 무엇입니까?",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기2] A에 B를 더했을 때 16이고, B를 나누면 3이다. A와 B의 차는?...
T11_external.push({
  key:"external_수찾기2_1755",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A에 B를 더했을 때 16이고, B를 나누면 3이다. A와 B의 차는?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 현지는 하루에 동화책을 A3쪽 씩 읽었습니다. B일 동안 동화책을 읽었을 때, 92쪽을 읽...
T11_external.push({
  key:"external_수찾기2_1756",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현지는 하루에 동화책을 A3쪽 씩 읽었습니다. B일 동안 동화책을 읽었을 때, 92쪽을 읽었다면, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 주리네 분식 집에서 떡볶이가 32A인분, 순대가 2B6인분 팔렸습니다. 떡볶이와 순대가 총...
T11_external.push({
  key:"external_수찾기2_1757",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주리네 분식 집에서 떡볶이가 32A인분, 순대가 2B6인분 팔렸습니다. 떡볶이와 순대가 총 578인분 팔렸다면, A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 1분 동안에 (3/4)씩 타는 양초가 있습니다. A분 동안 촛불 켜서 양초의 12cm가 탔...
T11_external.push({
  key:"external_수찾기2_1758",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1분 동안에 (3/4)씩 타는 양초가 있습니다. A분 동안 촛불 켜서 양초의 12cm가 탔습니다. A의 값을 구하시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [수찾기2] 은헤는 심부름을 하여 받은 용돈을 모았습니다. 3일 동안은 32A원을 받았고, 4일 동안은...
T11_external.push({
  key:"external_수찾기2_1760",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은헤는 심부름을 하여 받은 용돈을 모았습니다. 3일 동안은 32A원을 받았고, 4일 동안은 1B0원을 받았습니다. 일주일 동안 1572원을 모았을 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 47+6-14의 값은 A이고, 67-(75-9)의 값은 B이고, 79-58의 값은 C이라고...
T11_external.push({
  key:"external_수찾기2_1761",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"47+6-14의 값은 A이고, 67-(75-9)의 값은 B이고, 79-58의 값은 C이라고 할 때, A+B-C의 값을 구하시오.",
      answer:"19",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 19, 식: none"
    };
  }
});

// [수찾기2] 문구점에 빨간색 색연필과 파란색 색연필이 있습니다. 두 색연필의 총 개수는 93A개이고, ...
T11_external.push({
  key:"external_수찾기2_1762",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"문구점에 빨간색 색연필과 파란색 색연필이 있습니다. 두 색연필의 총 개수는 93A개이고, 빨간색 색연필의 개수는 B57개 입니다. 따라서 남은 파란색 색연필 개수는 2C8개 입니다. 이를 만족하는 A,B,C의 합을 구하시오.",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 시은이는 2000원을 가지고 32A원짜리 공책 3권과 1B0원자리 지우개를 4개를 샀습니다...
T11_external.push({
  key:"external_수찾기2_1763",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시은이는 2000원을 가지고 32A원짜리 공책 3권과 1B0원자리 지우개를 4개를 샀습니다. 거스름돈을 428원 받았다면, 알맞은 A, B의 합은 무엇입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 163-120/6*4의 값을 AB라고 할 때, A+B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1764",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"163-120/6*4의 값을 AB라고 할 때, A+B의 값을 구하시오.",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기2] 서준이네 학교의 학생수는 578명입니다. 보호자의 직업이 회사원인 학생은 32A명, 보호자...
T11_external.push({
  key:"external_수찾기2_1765",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서준이네 학교의 학생수는 578명입니다. 보호자의 직업이 회사원인 학생은 32A명, 보호자가 다른 직업을 가진 학생은 2B6명입니다. 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 비누 공장에서 오늘 578개의 비누를 생산했습니다. 장미향 비누는 32A개, 라벤더향 비누...
T11_external.push({
  key:"external_수찾기2_1766",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"비누 공장에서 오늘 578개의 비누를 생산했습니다. 장미향 비누는 32A개, 라벤더향 비누는 2B6개 입니다. 이를 만족하는 A,B의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 추석에 재익이, 재식이 형제는 송편을 만들었습니다. 재익이 4A8개를 만들었고, 재식이는 ...
T11_external.push({
  key:"external_수찾기2_1767",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"추석에 재익이, 재식이 형제는 송편을 만들었습니다. 재익이 4A8개를 만들었고, 재식이는 B01개를 만들었습니다. 형제가 만든 송편이 모두 629개일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 어느 가구 공장에 의자 1572개를 생산해 달라는 주문이 들어왔습니다. 3일 동안 하루에 ...
T11_external.push({
  key:"external_수찾기2_1768",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 가구 공장에 의자 1572개를 생산해 달라는 주문이 들어왔습니다. 3일 동안 하루에 32A개를 제작했고, 앞으로 4일동안 하루에 1B0개씩 제작하면 주문량을 다 만들 수 있다고 합니다. 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 어린이 2명이 목욕을 갔는데, 목욕비가 만 5세 미만의 어린이는 1500원, 만 5세 이상...
T11_external.push({
  key:"external_수찾기2_1769",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어린이 2명이 목욕을 갔는데, 목욕비가 만 5세 미만의 어린이는 1500원, 만 5세 이상은 2000원입니다. 두 어린이가 내는 목욕비의 범위가 A이상 B이하라고 했을 때, A와 B의 차를 구하시오.",
      answer:"1000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1000, 식: none"
    };
  }
});

// [수찾기2] 공원에 총 A57그루의 밤나무와 은행나무가 있습니다. 이 중 2A9그루가 밤나무 입니다. ...
T11_external.push({
  key:"external_수찾기2_1771",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원에 총 A57그루의 밤나무와 은행나무가 있습니다. 이 중 2A9그루가 밤나무 입니다. 따라서 나머지 48C나무는 은행나무 입니다. 이를 만족하는 A,B,C의 합을 구하시오.",
      answer:"21",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21, 식: none"
    };
  }
});

// [수찾기2] 야구 용품점에서 야구공이 32A개, 야구 방망이가 2B6개 팔렸습니다. 팔린 야구공과 야구...
T11_external.push({
  key:"external_수찾기2_1772",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"야구 용품점에서 야구공이 32A개, 야구 방망이가 2B6개 팔렸습니다. 팔린 야구공과 야구 방망이의 개수가 578개라면, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] AA*B=220을 만족하는 A,B의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1773",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"AA*B=220을 만족하는 A,B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 초롱이네 학교의 여학생 중 32A명은 머리를 묶고, 2B6명은 머리를 풀고 있습니다. 여학...
T11_external.push({
  key:"external_수찾기2_1775",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"초롱이네 학교의 여학생 중 32A명은 머리를 묶고, 2B6명은 머리를 풀고 있습니다. 여학생이 총 578명일 때, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 286+36A>157+495 라고 했을 때, A에 들어갈 수 있는 숫자의 모든 합을 구하시...
T11_external.push({
  key:"external_수찾기2_1776",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"286+36A>157+495 라고 했을 때, A에 들어갈 수 있는 숫자의 모든 합을 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기2] 6*74=A44일 때, A를 구하시오....
T11_external.push({
  key:"external_수찾기2_1777",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6*74=A44일 때, A를 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] (4/7)*(35/12)의 값은 (A/B)이다. A-B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1778",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(4/7)*(35/12)의 값은 (A/B)이다. A-B의 값을 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 동물원으로 체험 학습을 간 인원은 578명입니다. 이 중에서 여학생이 32A명, 남학생이 ...
T11_external.push({
  key:"external_수찾기2_1779",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원으로 체험 학습을 간 인원은 578명입니다. 이 중에서 여학생이 32A명, 남학생이 2B6명일 때, 이를 만족하는 A,B를 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 하림이네 학교의 32A명의 학생의 부모님은 맞벌이를 하시고, 2B6명의 학생의 부모님은 맞...
T11_external.push({
  key:"external_수찾기2_1780",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"하림이네 학교의 32A명의 학생의 부모님은 맞벌이를 하시고, 2B6명의 학생의 부모님은 맞벌이를 하시지 않습니다. 이 때, A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 영환이네 학교의 전교생은 A2B명 입니다. 유행성 감기로 인해 3C4명이 감기에 걸리고 나...
T11_external.push({
  key:"external_수찾기2_1781",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영환이네 학교의 전교생은 A2B명 입니다. 유행성 감기로 인해 3C4명이 감기에 걸리고 나머지 225명은 걸리지 않았습니다. 이를 만족하는 A, B, C의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 지수네 동네 주민은 7A8명입니다. 이 중 아파트에 살고 있는 사람은 400명, 주택에 살...
T11_external.push({
  key:"external_수찾기2_1782",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지수네 동네 주민은 7A8명입니다. 이 중 아파트에 살고 있는 사람은 400명, 주택에 살고 있는 사람은 32B명일 때, 알맞은 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 1부터 9까지의 자연수 중에서, 63/9<A를 만족하는 A의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1783",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 9까지의 자연수 중에서, 63/9<A를 만족하는 A의 합을 구하시오.",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [수찾기2] 현지는 문제집에 있는 7A5개의 문제 중에서, 43B개를 풀어서 C34개의 문제가 남았습니...
T11_external.push({
  key:"external_수찾기2_1784",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현지는 문제집에 있는 7A5개의 문제 중에서, 43B개를 풀어서 C34개의 문제가 남았습니다. 이때 A+B+C는 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 지윤이가 가진 수는 100이 3, 10이 2, 1이 3인 수이고, 연희가 가진 수는 100...
T11_external.push({
  key:"external_수찾기2_1785",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지윤이가 가진 수는 100이 3, 10이 2, 1이 3인 수이고, 연희가 가진 수는 100이 2, 10이 A, 1이 6인 수 입니다. 두 수의 차가 6B일 때, 알맞은 A, B의 곱을 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] 현진이는 94A원을 받았습니다. 6B0원의 사탕을 사먹고 나니 C52원이 남았습니다. 이를...
T11_external.push({
  key:"external_수찾기2_1786",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현진이는 94A원을 받았습니다. 6B0원의 사탕을 사먹고 나니 C52원이 남았습니다. 이를 만족하는 A,B,C의 합을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 17*6/A의 값은 17이고, 64/2*3의 값을 B6이라고 할 때, A*B의 값을 구하시...
T11_external.push({
  key:"external_수찾기2_1789",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"17*6/A의 값은 17이고, 64/2*3의 값을 B6이라고 할 때, A*B의 값을 구하시오.",
      answer:"54",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 54, 식: none"
    };
  }
});

// [수찾기2] 소현이는 해외로 이민 온 지 629일이 되었습니다. 629일 중 4A8일 동안은 날씨가 맑...
T11_external.push({
  key:"external_수찾기2_1790",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소현이는 해외로 이민 온 지 629일이 되었습니다. 629일 중 4A8일 동안은 날씨가 맑았고, 나머지 B01일 동안은 비가 왔습니다. 알맞은 A, B의 합은 무엇입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 우현이네 전등 가게에는 형광등 400개와 백열등 32A개가 있습니다. 모두 7B8개의 전등...
T11_external.push({
  key:"external_수찾기2_1792",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우현이네 전등 가게에는 형광등 400개와 백열등 32A개가 있습니다. 모두 7B8개의 전등이 있을 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 오전에 타일을 32A장을 붙였고, 오후에 2B6장을 붙였습니다. 오늘 하루동안 578장의 ...
T11_external.push({
  key:"external_수찾기2_1793",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오전에 타일을 32A장을 붙였고, 오후에 2B6장을 붙였습니다. 오늘 하루동안 578장의 타일을 붙였을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 노트 30권씩 들어있는 묶음이 A0묶음 있습니다. 5B명의 학생들에게 5권씩 나누어 주어서...
T11_external.push({
  key:"external_수찾기2_1794",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"노트 30권씩 들어있는 묶음이 A0묶음 있습니다. 5B명의 학생들에게 5권씩 나누어 주어서 25권이 남았습니다. 만약, 6권씩 나누어 주면 C권이 모자랄 때, C는 무엇입니까?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [수찾기2] 동인이는 매일윗몸일으키기를 3A번씩 합니다. 30일동안 1050번 했다고 했을 때 A의 값...
T11_external.push({
  key:"external_수찾기2_1795",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동인이는 매일윗몸일으키기를 3A번씩 합니다. 30일동안 1050번 했다고 했을 때 A의 값을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 규현이는 마트에서 귤 23A와 사과 3B1개를 샀습니다. 사과와 귤을 총 C84개 샀을 때...
T11_external.push({
  key:"external_수찾기2_1796",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"규현이는 마트에서 귤 23A와 사과 3B1개를 샀습니다. 사과와 귤을 총 C84개 샀을 때, 이를 만족하는 A,B,C의 합을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 올 해 새로운 가족을 찾은 강아지는 578마리 입니다. 이 중 32A마리는 유기견이었고, ...
T11_external.push({
  key:"external_수찾기2_1797",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"올 해 새로운 가족을 찾은 강아지는 578마리 입니다. 이 중 32A마리는 유기견이었고, 2B6마리는 가정에서 분양되었습니다. 이를 만족시키는 A+B를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 68에 A를 곱했을 때의 값이 200과 300사이에 있을 수 있도록 하는 A값들의 합을 구...
T11_external.push({
  key:"external_수찾기2_1798",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"68에 A를 곱했을 때의 값이 200과 300사이에 있을 수 있도록 하는 A값들의 합을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 방정식 X+Y+Z =17을 만족시키는 홀수인 해의 개수는?(단 미지수는 자연수이다)...
T11_external.push({
  key:"external_수찾기2_1799",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"방정식 X+Y+Z =17을 만족시키는 홀수인 해의 개수는?(단 미지수는 자연수이다)",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기2] 수연이는 오전에 줄넘기를 2A0번 넘었고, 오후에 23B번 넘었습니다. 오늘 수연이는 모두...
T11_external.push({
  key:"external_수찾기2_1800",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수연이는 오전에 줄넘기를 2A0번 넘었고, 오후에 23B번 넘었습니다. 오늘 수연이는 모두 447번의 줄넘기를 넘었을 때, A+B의 값을 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기2] 두 자리 소수A,B가 있습니다. 이 소수의 합은 3.17이고, 차는 0.21이고, 두 수의...
T11_external.push({
  key:"external_수찾기2_1801",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 자리 소수A,B가 있습니다. 이 소수의 합은 3.17이고, 차는 0.21이고, 두 수의 곱은 2.C01D일 때,C+D의 값을 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 도연이는 5780m를 걷기로 계획하였는데, 32A0m를 걸었을 때 비가 와서 나머지 2B6...
T11_external.push({
  key:"external_수찾기2_1802",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도연이는 5780m를 걷기로 계획하였는데, 32A0m를 걸었을 때 비가 와서 나머지 2B60m는 걷지 못했습니다. 이를 만족시키는 A,B의 합을 구하시오.",
      answer:"70",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 70, 식: none"
    };
  }
});

// [수찾기2] 수학 문제집에서 한 단원 당 문제가 A3개가 있습니다. 문제집에 B개의 단원이 있고 문제가...
T11_external.push({
  key:"external_수찾기2_1804",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수학 문제집에서 한 단원 당 문제가 A3개가 있습니다. 문제집에 B개의 단원이 있고 문제가 모두 92개일 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 민아가 계단으로 한 층을 올라가는데 A3초가 걸립니다. B층까지 계단으로 올라갔을 때 92...
T11_external.push({
  key:"external_수찾기2_1805",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민아가 계단으로 한 층을 올라가는데 A3초가 걸립니다. B층까지 계단으로 올라갔을 때 92초가 걸렸다면, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 주은이네 반에서 국어, 영어, 수학에 대해서 과목 선호도 조사를 했습니다. 학급 인원 45...
T11_external.push({
  key:"external_수찾기2_1807",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주은이네 반에서 국어, 영어, 수학에 대해서 과목 선호도 조사를 했습니다. 학급 인원 45명 중, 국어를 좋아하는 학생은 1A명, 수학을 좋아하는 학생은 B3명, 영어를 좋아하는 학생은 5명이었습니다. 이에 알맞은 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 2000cm짜리 실이 있습니다. 한 변당 32Acm인 정삼각형을 만들고, 한 변당 1B0c...
T11_external.push({
  key:"external_수찾기2_1808",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2000cm짜리 실이 있습니다. 한 변당 32Acm인 정삼각형을 만들고, 한 변당 1B0cm인 정사각형을 만들어서 428cm가 남았습니다. 이 때, A, B의 합은 무엇입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 20,23,32,35의 수들 중에서 5로 나누어 떨어지는 수는 A0,BC입니다. 이때, A...
T11_external.push({
  key:"external_수찾기2_1809",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"20,23,32,35의 수들 중에서 5로 나누어 떨어지는 수는 A0,BC입니다. 이때, A+B+C의 값을 구하시오",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 혜연이네 학교의 전체 학생 수는 1000명 입니다. 여학생 수가 남학생 수보다 200명 많...
T11_external.push({
  key:"external_수찾기2_1811",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜연이네 학교의 전체 학생 수는 1000명 입니다. 여학생 수가 남학생 수보다 200명 많을 때, 여학생 수는 몇 명 입니까?",
      answer:"600",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 600, 식: none"
    };
  }
});

// [수찾기2] 우현이네 학교의 전체 학생 수는 A56명이고, 이 중 1BC명이 여학생, 나머지 320명이...
T11_external.push({
  key:"external_수찾기2_1812",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우현이네 학교의 전체 학생 수는 A56명이고, 이 중 1BC명이 여학생, 나머지 320명이 남학생 입니다. 이 때, A+B+C 값은 무엇입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 경은이는 45권의 책을 가지고 있습니다. 이 중 1A권이 위인전, B3권이 만화책이고, 위...
T11_external.push({
  key:"external_수찾기2_1815",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경은이는 45권의 책을 가지고 있습니다. 이 중 1A권이 위인전, B3권이 만화책이고, 위인전, 만화책이 아닌 책은 5권이 있습니다. 이를 만족하는 A를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 세호는 578장의 색종이를 가지고 있습니다. 이 중 32A를 친구들에게 나눠주고, 세호는 ...
T11_external.push({
  key:"external_수찾기2_1816",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세호는 578장의 색종이를 가지고 있습니다. 이 중 32A를 친구들에게 나눠주고, 세호는 남은 2B6장을 가졌습니다. 이 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 323쪽 짜리 책에서 오늘 2A6쪽까지 읽었습니다. 남아 있는 책의 쪽수가 6B쪽일 때, ...
T11_external.push({
  key:"external_수찾기2_1817",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"323쪽 짜리 책에서 오늘 2A6쪽까지 읽었습니다. 남아 있는 책의 쪽수가 6B쪽일 때, 알맞은 A, B의 곱을 구하시오.",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [수찾기2] 5380에서 천의 자리 숫자는 A, 십의 자리 숫자는 B이다. A+B는?...
T11_external.push({
  key:"external_수찾기2_1819",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"5380에서 천의 자리 숫자는 A, 십의 자리 숫자는 B이다. A+B는?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 혜인이는 분식집에서 6인분에 12000원하는 떡볶이 A인분과, 8개에 2B00원 하는 어묵...
T11_external.push({
  key:"external_수찾기2_1820",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜인이는 분식집에서 6인분에 12000원하는 떡볶이 A인분과, 8개에 2B00원 하는 어묵을 3개 주문에서 2900원이 나왔습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 음료수가 30개씩 들어있는 박스가 A0박스 있습니다. 5B명의 사람에게 5병씩 나누어 주어...
T11_external.push({
  key:"external_수찾기2_1822",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"음료수가 30개씩 들어있는 박스가 A0박스 있습니다. 5B명의 사람에게 5병씩 나누어 주어서 25병이 남았습니다, 알맞은 A, B의 합을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 성연이네 학교 3학년은 9A1명입니다. 이 중 45B명이 남학생이고 나머지 463명이 여학...
T11_external.push({
  key:"external_수찾기2_1823",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성연이네 학교 3학년은 9A1명입니다. 이 중 45B명이 남학생이고 나머지 463명이 여학생입니다. 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [수찾기2] 장난감 공장에서 하루에 578개의 로봇을 생산합니다. 그 중 32A가 불량품이고 나머지 2...
T11_external.push({
  key:"external_수찾기2_1824",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"장난감 공장에서 하루에 578개의 로봇을 생산합니다. 그 중 32A가 불량품이고 나머지 2B6개만 정상입니다. 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] (1/6)*(1/3)*(1/2)=(1/A)*(1/2)=(1/36)의 식에 알맞은 A의 값을...
T11_external.push({
  key:"external_수찾기2_1825",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(1/6)*(1/3)*(1/2)=(1/A)*(1/2)=(1/36)의 식에 알맞은 A의 값을 구하시오.",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 일주일 동안의 지용이의 핸드폰 요금은 15720원이 나왔습니다. 3일 동안은 32A0원이었...
T11_external.push({
  key:"external_수찾기2_1826",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일주일 동안의 지용이의 핸드폰 요금은 15720원이 나왔습니다. 3일 동안은 32A0원이었고, 4일 동안은 1B00원이었습니다. 이를 만족하는 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 종이 1장의 무게는 4.2g입니다. 종이 10장의 무게를 A, 100장의 무게를 B라고 할...
T11_external.push({
  key:"external_수찾기2_1827",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"종이 1장의 무게는 4.2g입니다. 종이 10장의 무게를 A, 100장의 무게를 B라고 할 때, A+B의 값을 구하시오.",
      answer:"462",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 462, 식: none"
    };
  }
});

// [수찾기2] 7+17*6-5의 값과 6+18*13-AB의 값이 10C로 같다고 할 때, A+B-C의 값...
T11_external.push({
  key:"external_수찾기2_1828",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"7+17*6-5의 값과 6+18*13-AB의 값이 10C로 같다고 할 때, A+B-C의 값을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 빨간색 테이프 65cm와 파란색 테이프 56cm가 있습니다. 이 테이프를 각각 Acm씩 잘...
T11_external.push({
  key:"external_수찾기2_1831",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"빨간색 테이프 65cm와 파란색 테이프 56cm가 있습니다. 이 테이프를 각각 Acm씩 잘라 리본을 만들 때, 빨간색 리본은 8개 만들고, 파란색 리본은 B개 만들었을 경우 A+B의 값을 구하시오.",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [수찾기2] 아파트 부녀회장 선거에 한 명의 후보만 나왔습니다. 무효표 없이 찬반 투표를 진행하였을 때...
T11_external.push({
  key:"external_수찾기2_1832",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아파트 부녀회장 선거에 한 명의 후보만 나왔습니다. 무효표 없이 찬반 투표를 진행하였을 때, 모두 A2B표 중에서 3C4표가 찬성표, 나머지 225표가 반대표였습니다. 알맞은 A, B, C의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 상환이네 가게에서 어제 오이 18A개를 팔고, 오늘은 어제보다 B배 더 팔았습니다. 어제와...
T11_external.push({
  key:"external_수찾기2_1834",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상환이네 가게에서 어제 오이 18A개를 팔고, 오늘은 어제보다 B배 더 팔았습니다. 어제와 오늘 총 396개를 팔았다면, A+B는 무엇입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 효진이네 부동산에 등록된 아파트와 주택이 7A8가구 입니다. 아파트는 400가구, 주택은 ...
T11_external.push({
  key:"external_수찾기2_1835",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효진이네 부동산에 등록된 아파트와 주택이 7A8가구 입니다. 아파트는 400가구, 주택은 32B가구일 때, 올바른 A, B의 합을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 소현이네 과일 가게에는 300개의 토마토가 있습니다. 하루에 9A개씩 B일 동안 동일하게 ...
T11_external.push({
  key:"external_수찾기2_1836",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소현이네 과일 가게에는 300개의 토마토가 있습니다. 하루에 9A개씩 B일 동안 동일하게 팔아서 21개의 토마토가 남았을 때, 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 70cm를 m로 바꾸면 A.B이다. A*B의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1837",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"70cm를 m로 바꾸면 A.B이다. A*B의 값을 구하시오.",
      answer:"0",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0, 식: none"
    };
  }
});

// [수찾기2] 규진이네 학교의 32A명은 동아리 활동을 신청했고 2B6명은 신청하지 않았습니다. 전교생이...
T11_external.push({
  key:"external_수찾기2_1838",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"규진이네 학교의 32A명은 동아리 활동을 신청했고 2B6명은 신청하지 않았습니다. 전교생이 578명일 때, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 길이가 2000m인 철사로 한 변의 길이가 32Am인 정삼각형 1개와, 한 변의 길이가 1...
T11_external.push({
  key:"external_수찾기2_1839",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 2000m인 철사로 한 변의 길이가 32Am인 정삼각형 1개와, 한 변의 길이가 1B0인 정사각형 1개를 만들고 428m의 철사가 남았다면, 이를 만족하는 A, B의 곱은 무엇입니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기2] 성은이는 딸기맛 사탕을 A42개 갖고 있고, 지원이는 성은이보다 5*B개 많이 갖고 있습니...
T11_external.push({
  key:"external_수찾기2_1840",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성은이는 딸기맛 사탕을 A42개 갖고 있고, 지원이는 성은이보다 5*B개 많이 갖고 있습니다. 성은이와 지원이가 갖고 있는 사탕이 모두 294개일 때, A+B의 값을 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기2] 2(3/4)*(3/10)*1(1/9)의 값이 (11/A)일 때, A의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1841",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2(3/4)*(3/10)*1(1/9)의 값이 (11/A)일 때, A의 값을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 수희네 마을 사람들 중 32A명이 안경을 쓰고 있고, 나머지 2B6명은 안경을 안쓰고 있습...
T11_external.push({
  key:"external_수찾기2_1842",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수희네 마을 사람들 중 32A명이 안경을 쓰고 있고, 나머지 2B6명은 안경을 안쓰고 있습니다. 마을에 총 578명이 살고 있을 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 옷가게에 반팔 티셔츠 32A장과 긴팔 티셔츠 2B6장이 있습니다. 반팔과 긴팔 티셔츠가 총...
T11_external.push({
  key:"external_수찾기2_1843",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옷가게에 반팔 티셔츠 32A장과 긴팔 티셔츠 2B6장이 있습니다. 반팔과 긴팔 티셔츠가 총 578장이 있을 때, A+B를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 3A는 37보다 클 때, A 안에 들어갈 수 있는 모든 수의 합은?...
T11_external.push({
  key:"external_수찾기2_1844",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3A는 37보다 클 때, A 안에 들어갈 수 있는 모든 수의 합은?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [수찾기2] 4의 배수이면서 6의 배수인 수 A 중에 100보다 작은 수의 합을 구하시오....
T11_external.push({
  key:"external_수찾기2_1845",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"4의 배수이면서 6의 배수인 수 A 중에 100보다 작은 수의 합을 구하시오.",
      answer:"240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 240, 식: none"
    };
  }
});

// [수찾기2] 채연이는 줄넘기를 13A번 하였고, 효진이는 채연이보다 B5개 더 많이 하였습니다. 둘이 ...
T11_external.push({
  key:"external_수찾기2_1846",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"채연이는 줄넘기를 13A번 하였고, 효진이는 채연이보다 B5개 더 많이 하였습니다. 둘이 합해서 총 285번의 줄넘기를 하였다면, A+B는 무엇입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 석진이네 학교에서 운동회를 했습니다. 32A명은 체육복을 입고 있고, 2B6명은 체육복을 ...
T11_external.push({
  key:"external_수찾기2_1848",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석진이네 학교에서 운동회를 했습니다. 32A명은 체육복을 입고 있고, 2B6명은 체육복을 입지 않았습니다. 전교생이 578명일 때, 이를 만족하는 A,B의 곱을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 풍선이 578개 있었습니다. 이 중 32A개를 터뜨려서 2B6개가 남았습니다. 이를 만족하...
T11_external.push({
  key:"external_수찾기2_1849",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"풍선이 578개 있었습니다. 이 중 32A개를 터뜨려서 2B6개가 남았습니다. 이를 만족하는 A,B의 곱은 무엇입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기2] 승철이는 A쪽짜리 문제집을 사서 전체의 (4/7)를 풀었습니다. 문제집을 모두 풀려면 90...
T11_external.push({
  key:"external_수찾기2_1850",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승철이는 A쪽짜리 문제집을 사서 전체의 (4/7)를 풀었습니다. 문제집을 모두 풀려면 90쪽을 더 풀어야 합니다. A의 값을 구하시오.",
      answer:"210",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 210, 식: none"
    };
  }
});

// [수찾기2] 수지네 학교에서 우유를 주문했습니다. 작년는 73A개, 올해는 8B6개를 주문했습니다. 2...
T11_external.push({
  key:"external_수찾기2_1851",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수지네 학교에서 우유를 주문했습니다. 작년는 73A개, 올해는 8B6개를 주문했습니다. 2년 동안 1C89개를 주문했을 때, A+B+C 값을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 소진이네 반은 남학생이 1A명, 여학생이 B3명 입니다. 그 중 안경을 낀 학생이 28명,...
T11_external.push({
  key:"external_수찾기2_1852",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소진이네 반은 남학생이 1A명, 여학생이 B3명 입니다. 그 중 안경을 낀 학생이 28명, 안경을 끼지 않은 학생이 17명일 때, 알맞은 A, B의 합은 무엇입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 1월부터 3월까지 미술관에 방문한 사람은 모두 755명 입니다. 1월에는 13A명, 2월에...
T11_external.push({
  key:"external_수찾기2_1853",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1월부터 3월까지 미술관에 방문한 사람은 모두 755명 입니다. 1월에는 13A명, 2월에는 3B2명, 3월에는 C48명이 방문했을 때, 알맞은 A, B, C의 합을 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 연지네 공장에서는 하루에 421개의 인형을 생산했습니다. 이틀 동안 생산한 인형에서 5A8...
T11_external.push({
  key:"external_수찾기2_1854",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"연지네 공장에서는 하루에 421개의 인형을 생산했습니다. 이틀 동안 생산한 인형에서 5A8개는 정상이고 30B개가 불량일 때, 이를 만족하는 A, B의 곱을 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기2] 두 수의 곱을 1000에 가장 가깝게 만들려고 합니다. 31*AB=CDE일 때, 이를 만족...
T11_external.push({
  key:"external_수찾기2_1855",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 수의 곱을 1000에 가장 가깝게 만들려고 합니다. 31*AB=CDE일 때, 이를 만족하는 A,B의 합을 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기2] 연못의 깊이를 재려고 길이가 4cm 차이나는 막대 2개를 준비했습니다. 두 개의 막대를 깊...
T11_external.push({
  key:"external_수찾기2_1856",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"연못의 깊이를 재려고 길이가 4cm 차이나는 막대 2개를 준비했습니다. 두 개의 막대를 깊이가 같은 연못에 수직으로 세웠더니, 긴 막대의 (6/11)과 짧은 막대의 (2/3)가 물에 잠겼습니다. 전 작은 막대의 길이를 A, 긴 막대의 길이를 B라고 할 때, A+B의 값을 구하시오.",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기2] 회사 직원 755명 중 자동차를 통해 출근하는 사람은 13A명, 대중교통을 이용하는 사람은...
T11_external.push({
  key:"external_수찾기2_1857",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"회사 직원 755명 중 자동차를 통해 출근하는 사람은 13A명, 대중교통을 이용하는 사람은 3B2명, 걸어오는 사람은 C48명 입니다. 이를 만족하는 A, B, C의 합은 무엇입니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기2] 재흥이는 방학동안 7권의 책을 읽었습니다. 32A쪽 짜리 책 3권, 1B0쪽 짜리 책 4권...
T11_external.push({
  key:"external_수찾기2_1858",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재흥이는 방학동안 7권의 책을 읽었습니다. 32A쪽 짜리 책 3권, 1B0쪽 짜리 책 4권을 읽어서 모두 1572쪽을 읽었을 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기2] 진아네 가구 공장에 책상 629개 제작 주문이 들어왔습니다. 전체 주문 중 4A8개는 학생...
T11_external.push({
  key:"external_수찾기2_1859",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진아네 가구 공장에 책상 629개 제작 주문이 들어왔습니다. 전체 주문 중 4A8개는 학생용 책상이고, 나머지 B01개는 선생님용 책상입니다. 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 1부터 9까지의 어떤 수 A가 있습니다. 이 A로 만든 두자리수와 A를 곱하면 539가 됩...
T11_external.push({
  key:"external_수찾기2_1861",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"1부터 9까지의 어떤 수 A가 있습니다. 이 A로 만든 두자리수와 A를 곱하면 539가 됩니다. 이를 만족하는 A는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 대현이네 아파트에서 리모델링 신청을 받았습니다. 총 578가구 중에서 32A가구는 리모델링...
T11_external.push({
  key:"external_수찾기2_1862",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"대현이네 아파트에서 리모델링 신청을 받았습니다. 총 578가구 중에서 32A가구는 리모델링을 신청했고, 나머지 2B6가구는 신청하지 않았습니다. 이를 만족하는 A+B를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] (A/3)*(5/7)의 값은 (5/21)이다. A의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1863",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(A/3)*(5/7)의 값은 (5/21)이다. A의 값을 구하시오.",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1, 식: none"
    };
  }
});

// [수찾기2] 아령이네 반 학생은 모두 30명입니다. 아령이네 반 학생 중에서 안경을 쓴 학생은 전체 학...
T11_external.push({
  key:"external_수찾기2_1864",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아령이네 반 학생은 모두 30명입니다. 아령이네 반 학생 중에서 안경을 쓴 학생은 전체 학생 수의 (3/5)이고, 안경을 쓴 학생의 (1/3)이 여학생입니다. 안경을 쓴 여학생의 수를 A, 안경을 쓴 남학생의 수를 B라고 할 때, B-A의 값을 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] 조기 한 두름은 20마리 입니다. 100두름을 하루에 32A마리씩 3일동안 팔고, 1B0마...
T11_external.push({
  key:"external_수찾기2_1865",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"조기 한 두름은 20마리 입니다. 100두름을 하루에 32A마리씩 3일동안 팔고, 1B0마리를 4일동안 팔았더니 428마리가 남았습니다. 이를 만족하는 A, B의 곱을 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기2] 세윤이는 1월부터 6월까지 32A시간 동안 발레 연습을 했고, 7월부터 12월까지 2B6시...
T11_external.push({
  key:"external_수찾기2_1866",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세윤이는 1월부터 6월까지 32A시간 동안 발레 연습을 했고, 7월부터 12월까지 2B6시간 발레 연습을 했습니다. 1년 동안 578시간을 연습했을 때, A+B를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 이현이네 학교의 전교생은 629명 입니다. 이 중 코딩 자격증이 있는 학생은 4A8명이고,...
T11_external.push({
  key:"external_수찾기2_1867",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이현이네 학교의 전교생은 629명 입니다. 이 중 코딩 자격증이 있는 학생은 4A8명이고, 없는 학생은 B01명 입니다. 알맞은 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기2] 하루에 팔 수 있는 커피는 A3잔 입니다. B일 동안 총 92잔을 팔았다면, 이를 만족하는...
T11_external.push({
  key:"external_수찾기2_1868",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"하루에 팔 수 있는 커피는 A3잔 입니다. B일 동안 총 92잔을 팔았다면, 이를 만족하는 A,B의 합은 무엇입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기2] A+B=30, A/B=4일 때, A-B는?...
T11_external.push({
  key:"external_수찾기2_1870",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A+B=30, A/B=4일 때, A-B는?",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] 상진이네는 김장을 위해 배추 89A포기를 샀습니다. 오전 중에 4B7포기를 담궈서 C09포...
T11_external.push({
  key:"external_수찾기2_1871",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"상진이네는 김장을 위해 배추 89A포기를 샀습니다. 오전 중에 4B7포기를 담궈서 C09포기가 남았습니다. 이를 만족시키는 A,B,C의 합을 구하시오.",
      answer:"18",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 18, 식: none"
    };
  }
});

// [수찾기2] (A/5)에 8을 더한 후 5를 곱하였더니 42가 되었습니다. A의 값을 구하시오....
T11_external.push({
  key:"external_수찾기2_1872",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"(A/5)에 8을 더한 후 5를 곱하였더니 42가 되었습니다. A의 값을 구하시오.",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [수찾기2] 오늘 박물관에 여자는 48A명, 남자는 3B9명 입장했습니다. 총 입장 인원이 832명일 ...
T11_external.push({
  key:"external_수찾기2_1873",
  unitId:"m1-1-1-III-2",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 박물관에 여자는 48A명, 남자는 3B9명 입장했습니다. 총 입장 인원이 832명일 때, A+B는 무엇입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기2] 사탕이 300개가 있습니다. 삼형제에게 동일하게 9A개씩 나눠주고 21개가 남았을 때, 이...
T11_external.push({
  key:"external_수찾기2_1875",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기2","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사탕이 300개가 있습니다. 삼형제에게 동일하게 9A개씩 나눠주고 21개가 남았을 때, 이를 만족하는 A, B의 합을 구하시오.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기3] 어제 축구장에 입장한 관객의 수에 오늘 입장한 관객의 수 593명을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_1876",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어제 축구장에 입장한 관객의 수에 오늘 입장한 관객의 수 593명을 더해야하는 것을 잘못하여 395명를 더하였더니 973이 되었습니다. 바르게 계산하면 축구장에 어제와 오늘 입장한 관객의 수 합은 얼마입니까?",
      answer:"1171",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1171, 식: none"
    };
  }
});

// [수찾기3] 수현이네 학교는 소풍을 가기 위해 버스를 9대에 나누어 타야 할 것을 잘못하여 7대에 나누...
T11_external.push({
  key:"external_수찾기3_1877",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수현이네 학교는 소풍을 가기 위해 버스를 9대에 나누어 타야 할 것을 잘못하여 7대에 나누어탔더니 한 버스당 38명이 타고 4명의 학생이 남았습니다. 바르게 계산하면 한 버스당 몇 명의 학생이 타게 됩니까?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 두 자...
T11_external.push({
  key:"external_수찾기3_1878",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 두 자리 수 중에서 첫 번째로 큰 수를 뺐더니 21이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 3을 곱해야하는 어떤 수를 식을 잘못보고 8로 나누었더니 14가 되었다. 바르게 계산하면 ...
T11_external.push({
  key:"external_수찾기3_1879",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3을 곱해야하는 어떤 수를 식을 잘못보고 8로 나누었더니 14가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"336",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 336, 식: none"
    };
  }
});

// [수찾기3] 동물원에 놀러온 사람의 수에 어린이 128명을 빼야하는 것을 잘못하여 28명을 뺐더니 20...
T11_external.push({
  key:"external_수찾기3_1880",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 놀러온 사람의 수에 어린이 128명을 빼야하는 것을 잘못하여 28명을 뺐더니 201명이 되었습니다. 바르게 계산하면 동물원에 남아있는 어른은 몇 명입니까?",
      answer:"101",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 101, 식: none"
    };
  }
});

// [수찾기3] 가득 차 있는 간장통에 1.33L를 빼야할 것을 잘못하여 3.11L를 뺐더니 2.76L가 ...
T11_external.push({
  key:"external_수찾기3_1881",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가득 차 있는 간장통에 1.33L를 빼야할 것을 잘못하여 3.11L를 뺐더니 2.76L가 남았습니다. 바르게 계산하면 간장통에는 몇 L가 남았습니까?",
      answer:"4.54",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.54, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 제일 작은 수를 나누어야 할 것을 식을 잘못보고 두 자리 수...
T11_external.push({
  key:"external_수찾기3_1882",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 제일 작은 수를 나누어야 할 것을 식을 잘못보고 두 자리 수 중에서 세 번째로 작은 수를 더하였더니 72가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기3] 버스 정거장에서 기다리고 있는 남자의 수에 여자 187명을 더해야하는 것을 잘못하여 87명...
T11_external.push({
  key:"external_수찾기3_1884",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"버스 정거장에서 기다리고 있는 남자의 수에 여자 187명을 더해야하는 것을 잘못하여 87명만 더하였더니 259명이 되었습니다. 바르게 계산하면 버스 정거장에서 기다리고 있는 사람들은 모두 몇 명입니까?",
      answer:"359",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 359, 식: none"
    };
  }
});

// [수찾기3] 동화책의 무게에 1.67kg짜리 위인전을 더해야하는 것을 잘못하여 0.76kg을 더하였더니...
T11_external.push({
  key:"external_수찾기3_1885",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동화책의 무게에 1.67kg짜리 위인전을 더해야하는 것을 잘못하여 0.76kg을 더하였더니 2.57kg이 되었습니다. 바르게 계산하면 동화책과 위인전의 무게는 모두 몇 kg입니까?",
      answer:"3.48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.48, 식: none"
    };
  }
});

// [수찾기3] 흰색 테이프의 길이에 빨간색 테이프 491cm를 더해야하는 것을 잘못하여 91cm를 더하였...
T11_external.push({
  key:"external_수찾기3_1887",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"흰색 테이프의 길이에 빨간색 테이프 491cm를 더해야하는 것을 잘못하여 91cm를 더하였더니 463cm가 되었습니다. 바르게 계산하면 흰색 테이프와 빨간색 테이프의 길이는 모두 몇cm입니까?",
      answer:"863",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 863, 식: none"
    };
  }
});

// [수찾기3] 어느 문방구에서 지난 달에 판매한 색연필의 개수와 이번 달에 판매한 색연필 192개를 더해...
T11_external.push({
  key:"external_수찾기3_1889",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 문방구에서 지난 달에 판매한 색연필의 개수와 이번 달에 판매한 색연필 192개를 더해야하는 것을 잘못하여 92개만 더하였더니 173개가 되었습니다. 바르게 계산하면 문방구에서 지난 달과 이번 달에 판매한 색연필은 모두 몇 개 입니까?",
      answer:"273",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 273, 식: none"
    };
  }
});

// [수찾기3] 솔비는 어떤 수에 23을 곱해야 할것을 잘못하여 더하였더니 67이 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_1890",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"솔비는 어떤 수에 23을 곱해야 할것을 잘못하여 더하였더니 67이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"1012",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1012, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 11을 빼야할 것을 식을 잘못보고 27을 더하였더니 93이 되었다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_1891",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 11을 빼야할 것을 식을 잘못보고 27을 더하였더니 93이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 6을 빼야할 것을 식을 잘못보고 더하였더니 48이 되었다. 바르게 계산하면 얼마...
T11_external.push({
  key:"external_수찾기3_1892",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 6을 빼야할 것을 식을 잘못보고 더하였더니 48이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기3] 도로에 8m간격으로 가로등을 세워야 할 것을 잘못하여 6m간격으로 세웠더니 45개의 가로등...
T11_external.push({
  key:"external_수찾기3_1894",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도로에 8m간격으로 가로등을 세워야 할 것을 잘못하여 6m간격으로 세웠더니 45개의 가로등을 세우고 2m가 남았습니다. 바르게 계산하면 몇 개의 가로등을 세울 수 있습니까?",
      answer:"34",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 34, 식: none"
    };
  }
});

// [수찾기3] 진영이는 어떤 껌의 가격을 400원으로 잘못보고 2개를 골라 1000원을 냈는데 거스름 돈...
T11_external.push({
  key:"external_수찾기3_1895",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진영이는 어떤 껌의 가격을 400원으로 잘못보고 2개를 골라 1000원을 냈는데 거스름 돈 400원을 받았습니다. 어떤 껌의 원래 가격은 얼마입니까?",
      answer:"300",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 300, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 10으로 나누어야할 것을 식을 잘못보고 13을 뺐더니 97이 되었다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_1896",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 10으로 나누어야할 것을 식을 잘못보고 13을 뺐더니 97이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기3] 일영이가 한 줄넘기의 수에 호연이가 한 348번의 줄넘기를 더해야하는 것을 잘못하여 48만...
T11_external.push({
  key:"external_수찾기3_1898",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일영이가 한 줄넘기의 수에 호연이가 한 348번의 줄넘기를 더해야하는 것을 잘못하여 48만 더하였더니 317번이 되었습니다. 바르게 계산하면 일영이와 호연이는 줄넘기를 모두 몇 번 입니까?",
      answer:"617",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 617, 식: none"
    };
  }
});

// [수찾기3] 준오가 49에 어떤 수를 곱해야 할 것을 잘못해서 빼었더니 44가 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_1899",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준오가 49에 어떤 수를 곱해야 할 것을 잘못해서 빼었더니 44가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"245",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 245, 식: none"
    };
  }
});

// [수찾기3] 민지는 어떤 수에 39를 곱해야 하는데 잘못하여 39를 더했더니 67이 되었습니다. 원래 ...
T11_external.push({
  key:"external_수찾기3_1903",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민지는 어떤 수에 39를 곱해야 하는데 잘못하여 39를 더했더니 67이 되었습니다. 원래 계산해야했던 식으로 계산하시오.",
      answer:"1092",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1092, 식: none"
    };
  }
});

// [수찾기3] 민현이네 학교 학생 수에 성운이네 학교 학생 392명을 빼야하는 것을 잘못하여 92명만 뺐...
T11_external.push({
  key:"external_수찾기3_1904",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민현이네 학교 학생 수에 성운이네 학교 학생 392명을 빼야하는 것을 잘못하여 92명만 뺐더니 317명이 되었습니다. 바르게 계산하면 민현이네 학교 학생 수는 성운이네 학교보다 몇 명 더 많습니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [수찾기3] 채린이네 과수원에서 자신이 딴 딸기에 엄마가 딴 141개를 빼야하는 것을 잘못하여 41개만...
T11_external.push({
  key:"external_수찾기3_1905",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"채린이네 과수원에서 자신이 딴 딸기에 엄마가 딴 141개를 빼야하는 것을 잘못하여 41개만 뺐더니 287개가 되었습니다. 바르게 계산하면 채린이는 엄마보다 몇 개 더 많이 땄습니까?",
      answer:"187",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 187, 식: none"
    };
  }
});

// [수찾기3] 송 마을에 있는 학생의 수에 강 마을에 있는 학생 321명을 빼야하는 것을 잘못하여 21명...
T11_external.push({
  key:"external_수찾기3_1907",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송 마을에 있는 학생의 수에 강 마을에 있는 학생 321명을 빼야하는 것을 잘못하여 21명만 뺐더니 368명이 되었습니다. 바르게 계산하면 송 마을에 학생은 강 마을에 있는 학생보다 몇 명 더 많습니까?",
      answer:"68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 68, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 네 번째로 큰 수를 더해야 할 것을 식을 잘못보고 두 자리 ...
T11_external.push({
  key:"external_수찾기3_1909",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 네 번째로 큰 수를 더해야 할 것을 식을 잘못보고 두 자리 수 중에서 세 번째로 작은 수를 더했더니 182가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"266",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 266, 식: none"
    };
  }
});

// [수찾기3] 다희와 송이가 낚시를 갔는데 다희가 잡은 물고기의 무게에 송이가 잡은 물고기 1.83kg을...
T11_external.push({
  key:"external_수찾기3_1910",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다희와 송이가 낚시를 갔는데 다희가 잡은 물고기의 무게에 송이가 잡은 물고기 1.83kg을 빼야하는 것을 잘못하여 0.83kg을 뺐더니 2.11kg이 되었습니다. 바르게 계산하면 다희는 송이보다 물고기를 몇 kg 더 많이 잡았습니까?",
      answer:"1.11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.11, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 3을 ...
T11_external.push({
  key:"external_수찾기3_1911",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 3을 곱하였더니 96가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기3] 민식이는 어떤 과자의 가격을 2000원으로 잘못보고 3개를 골라 10000원을 냈는데 거스...
T11_external.push({
  key:"external_수찾기3_1912",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민식이는 어떤 과자의 가격을 2000원으로 잘못보고 3개를 골라 10000원을 냈는데 거스름 돈 5500원을 받았습니다. 과자의 원래 가격은 얼마입니까?",
      answer:"1500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1500, 식: none"
    };
  }
});

// [수찾기3] 석정이는 과일 가게에서 산 사과의 무게에 포도 4.82kg을 더해야하는 것을 잘못하여 2....
T11_external.push({
  key:"external_수찾기3_1913",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석정이는 과일 가게에서 산 사과의 무게에 포도 4.82kg을 더해야하는 것을 잘못하여 2.48kg을 더하였더니 5.12kg이 되었습니다. 바르게 계산하면 석정이가 산 과일의 무게는 모두 몇 kg입니까?",
      answer:"7.46",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7.46, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 여섯번 째로 작은 수를 곱해야 할 것을 식을 잘못보고 두 자...
T11_external.push({
  key:"external_수찾기3_1914",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 여섯번 째로 작은 수를 곱해야 할 것을 식을 잘못보고 두 자리 수 중에서 두 번째로 큰 수를 더하였더니 112가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"210",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 210, 식: none"
    };
  }
});

// [수찾기3] 화이트데이를 기념으로 한 여학생 당 5개의 사탕을 나누어 주어야 할 것을 잘못하여 7개씩 ...
T11_external.push({
  key:"external_수찾기3_1915",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"화이트데이를 기념으로 한 여학생 당 5개의 사탕을 나누어 주어야 할 것을 잘못하여 7개씩 나누어 주었더니 13명이 사탕을 받고 4개의 사탕이 남았습니다. 바르게 계산하면 몇 명의 학생이 사탕을 받을 수 있습니까?",
      answer:"19",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 19, 식: none"
    };
  }
});

// [수찾기3] 지영이는 11을 곱해야하는 것을 식을 잘못보고 7로 나누었더니 6이 되었다. 바르게 계산하...
T11_external.push({
  key:"external_수찾기3_1916",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지영이는 11을 곱해야하는 것을 식을 잘못보고 7로 나누었더니 6이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"462",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 462, 식: none"
    };
  }
});

// [수찾기3] 7로 나눠야 하는 어떤 수를 식을 잘못보고 더하였더니 42가 되었다. 바르게 계산하면 얼마...
T11_external.push({
  key:"external_수찾기3_1919",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"7로 나눠야 하는 어떤 수를 식을 잘못보고 더하였더니 42가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [수찾기3] 나무에 맺힌 귤의 수에 담을 수 있는 바구니의 수 5개를 더해야하는 것을 잘못하여 곱하였더...
T11_external.push({
  key:"external_수찾기3_1920",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나무에 맺힌 귤의 수에 담을 수 있는 바구니의 수 5개를 더해야하는 것을 잘못하여 곱하였더니 180이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"41",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 41, 식: none"
    };
  }
});

// [수찾기3] 정진이는 사과의 가격을 2000원으로 잘못보고 4개를 골라 10000원을 냈는데 거스름 돈...
T11_external.push({
  key:"external_수찾기3_1921",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정진이는 사과의 가격을 2000원으로 잘못보고 4개를 골라 10000원을 냈는데 거스름 돈 4000원을 받았습니다. 사과의 원래 가격은 얼마입니까?",
      answer:"1500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1500, 식: none"
    };
  }
});

// [수찾기3] 기훈이네 학원에 다니는 여학생의 수에 남학생 84명을 더해야하는 것을 잘못하여 48명을 더...
T11_external.push({
  key:"external_수찾기3_1922",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"기훈이네 학원에 다니는 여학생의 수에 남학생 84명을 더해야하는 것을 잘못하여 48명을 더하였더니 132가 되었습니다. 바르게 계산하면 기훈이네 학원에 다니는 학생은 몇 명입니까?",
      answer:"168",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 168, 식: none"
    };
  }
});

// [수찾기3] 수연이는 오늘 외운 영어 단어의 수에서 어제 외운 영어 단어 109개를 빼야하는 것을 잘못...
T11_external.push({
  key:"external_수찾기3_1923",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수연이는 오늘 외운 영어 단어의 수에서 어제 외운 영어 단어 109개를 빼야하는 것을 잘못하여 19개만 뺐더니 98개가 되었습니다. 바르게 계산하면 오늘은 어제보다 몇 개를 더 외웠습니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기3] 현리네 집에서 공원까지의 거리를 2번 갔다와야 할 것을 잘못하여 4번 달려 갔다왔더니 10...
T11_external.push({
  key:"external_수찾기3_1924",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현리네 집에서 공원까지의 거리를 2번 갔다와야 할 것을 잘못하여 4번 달려 갔다왔더니 1024m를 달렸습니다. 바르게 계산하면 현리네 집에서 공원까지 2번 갔다오면 달리는 거리는 몇m입니까?",
      answer:"512",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 512, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에서 68을 빼야 하는데 식을 잘못보고 53를 뺐더니 27이 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_1925",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에서 68을 빼야 하는데 식을 잘못보고 53를 뺐더니 27이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기3] 태훈이는 8로 나눠야하는 것을 잘못보고 2를 곱하였더니 64가 되었다. 바르게 계산하면 얼...
T11_external.push({
  key:"external_수찾기3_1927",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"태훈이는 8로 나눠야하는 것을 잘못보고 2를 곱하였더니 64가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기3] 철수네 농장의 오리의 수에 호철이네 농장 오리의 수 159마리를 더해야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_1928",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철수네 농장의 오리의 수에 호철이네 농장 오리의 수 159마리를 더해야하는 것을 잘못하여 59마리만 더 했더니 385가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"485",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 485, 식: none"
    };
  }
});

// [수찾기3] 놀이공원에 입장한 사람을 세어볼 때 성인의 수에서 어린이 424명을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_1929",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이공원에 입장한 사람을 세어볼 때 성인의 수에서 어린이 424명을 더해야하는 것을 잘못하여 343명을 더하였더니 555가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"636",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 636, 식: none"
    };
  }
});

// [수찾기3] 미도가 사과의 총 개수에 3을 곱해야 할 것을 잘못하여 빼었더니 72가 되었습니다. 바르게...
T11_external.push({
  key:"external_수찾기3_1930",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미도가 사과의 총 개수에 3을 곱해야 할 것을 잘못하여 빼었더니 72가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"225",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 225, 식: none"
    };
  }
});

// [수찾기3] 3을 곱해야하는 어떤 수를 식을 잘못보고 84를 더하였더니 117가 되었다. 바르게 계산하...
T11_external.push({
  key:"external_수찾기3_1931",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3을 곱해야하는 어떤 수를 식을 잘못보고 84를 더하였더니 117가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"99",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 99, 식: none"
    };
  }
});

// [수찾기3] 준수는 (21/5)을 곱해야하는 것을 잘못보고 (2/7)를 더하였더니 (11/3)이 되었다...
T11_external.push({
  key:"external_수찾기3_1932",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준수는 (21/5)을 곱해야하는 것을 잘못보고 (2/7)를 더하였더니 (11/3)이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"(71/5)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (71/5), 식: none"
    };
  }
});

// [수찾기3] 근수는 3을 곱해야하는 것을 잘못보고 4를 곱하였더니 272가 되었다. 바르게 계산하면 얼...
T11_external.push({
  key:"external_수찾기3_1933",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"근수는 3을 곱해야하는 것을 잘못보고 4를 곱하였더니 272가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"204",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 204, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 곱해야 할 것을 식을 잘못보고 9로 나...
T11_external.push({
  key:"external_수찾기3_1934",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 곱해야 할 것을 식을 잘못보고 9로 나누었더니 41이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"4428",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4428, 식: none"
    };
  }
});

// [수찾기3] 교회에 다니는 남학생의 수에 여학생 103명을 더해야하는 것을 잘못하여 13명을 더하였더니...
T11_external.push({
  key:"external_수찾기3_1935",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"교회에 다니는 남학생의 수에 여학생 103명을 더해야하는 것을 잘못하여 13명을 더하였더니 112명이 되었습니다. 바르게 계산하면 교회에 다니는 학생은 모두 몇 명입니까?",
      answer:"202",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 202, 식: none"
    };
  }
});

// [수찾기3] 빨간 장미와 흰장미를 13개의 꽃병에 나누어 꽂아야 할 것을 잘못하여 11개의 꽃병에 꽂았...
T11_external.push({
  key:"external_수찾기3_1936",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"빨간 장미와 흰장미를 13개의 꽃병에 나누어 꽂아야 할 것을 잘못하여 11개의 꽃병에 꽂았더니 한 꽃병당 4송이씩 꽂고 8송이가 남았습니다. 바르게 계산하면 한 꽃병당 몇송이를 꽂을 수 있습니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기3] 종민이가 가지고 있는 포도의 무게에 종민이가 먹은 3.18kg을 빼야하는 것을 잘못하여 1...
T11_external.push({
  key:"external_수찾기3_1938",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"종민이가 가지고 있는 포도의 무게에 종민이가 먹은 3.18kg을 빼야하는 것을 잘못하여 1.83kg을 뺐더니 6.31kg이 남았습니다. 바르게 계산하면 종민이가 먹고 남은 포도는 몇 kg입니까?",
      answer:"4.96",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.96, 식: none"
    };
  }
});

// [수찾기3] 과일 가게에서 판매한 포도의 수와 귤 121개를 더해야하는 것을 잘못하여 21개만 더하였더...
T11_external.push({
  key:"external_수찾기3_1939",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과일 가게에서 판매한 포도의 수와 귤 121개를 더해야하는 것을 잘못하여 21개만 더하였더니 132가 되었습니다. 바르게 계산하면 과일 가게에서 판매한 포도와 귤의 합은 몇 개 입니까?",
      answer:"232",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 232, 식: none"
    };
  }
});

// [수찾기3] 소라네 학교 운동장을 한바퀴 돌은 걸음걸이 수에 3을 곱해야하는 것을 잘못하여 더하였더니 ...
T11_external.push({
  key:"external_수찾기3_1940",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소라네 학교 운동장을 한바퀴 돌은 걸음걸이 수에 3을 곱해야하는 것을 잘못하여 더하였더니 392걸음이 나왔습니다. 바르게 계산하면 얼마입니까?",
      answer:"1167",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1167, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 8로 나누어야 할 것을 식을 잘못보고 곱하였더니 256이 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_1941",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 8로 나누어야 할 것을 식을 잘못보고 곱하였더니 256이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 3을 곱해야 할 것을 잘못하여 3으로 나누었더니 몫이 15이고, 나머지가 2였습...
T11_external.push({
  key:"external_수찾기3_1942",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 3을 곱해야 할 것을 잘못하여 3으로 나누었더니 몫이 15이고, 나머지가 2였습니다. 바르게 계산한 답은 얼마입니까?",
      answer:"141",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 141, 식: none"
    };
  }
});

// [수찾기3] 과일가게서 산 딸기의 무게에서 귤 2.56kg을 빼야하는 것을 잘못하여 0.56kg을 뺐더...
T11_external.push({
  key:"external_수찾기3_1943",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과일가게서 산 딸기의 무게에서 귤 2.56kg을 빼야하는 것을 잘못하여 0.56kg을 뺐더니 3.98kg이 되었습니다. 바르게 계산하면 딸기는 귤보다 몇 kg 더 무겁습니까?",
      answer:"1.98",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.98, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 5를 곱해야 하는데 잘못하여 더했더니 74가 되었습니다. 바르게 계산한 값은 얼...
T11_external.push({
  key:"external_수찾기3_1944",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 5를 곱해야 하는데 잘못하여 더했더니 74가 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"345",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 345, 식: none"
    };
  }
});

// [수찾기3] 민영이는 자신의 생일 든 달을 나타내는 숫자에 14를 곱하고 31을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_1945",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민영이는 자신의 생일 든 달을 나타내는 숫자에 14를 곱하고 31을 더해야하는 것을 잘못하여 14만 더하였더니 32가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"283",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 283, 식: none"
    };
  }
});

// [수찾기3] 원영이는 26을 빼야하는 어떤 수를 잘못보고 45를 뺐더니 87이 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_1946",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원영이는 26을 빼야하는 어떤 수를 잘못보고 45를 뺐더니 87이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"106",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 106, 식: none"
    };
  }
});

// [수찾기3] 47을 더해야하는 어떤 수를 식을 잘못보고 36을 더했더니 137이 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_1947",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"47을 더해야하는 어떤 수를 식을 잘못보고 36을 더했더니 137이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"148",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 148, 식: none"
    };
  }
});

// [수찾기3] 지수는 9를 곱해야하는 것을 식을 잘못보고 4로 나누었더니 27이 되었다. 바르게 계산하면...
T11_external.push({
  key:"external_수찾기3_1948",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지수는 9를 곱해야하는 것을 식을 잘못보고 4로 나누었더니 27이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"972",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 972, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 2를 곱해야 하는데 잘못하여 더했더니 42가 되었습니다. 바르게 계산한 값은 얼...
T11_external.push({
  key:"external_수찾기3_1949",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 2를 곱해야 하는데 잘못하여 더했더니 42가 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"80",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 80, 식: none"
    };
  }
});

// [수찾기3] 춘식이네 농장에 돼지의 개수에 소 147마리를 빼야하는 것을 잘못하여 47마리만 뺐더니 2...
T11_external.push({
  key:"external_수찾기3_1950",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"춘식이네 농장에 돼지의 개수에 소 147마리를 빼야하는 것을 잘못하여 47마리만 뺐더니 237마리가 되었습니다. 바르게 계산하면 돼지는 소보다 몇 마리 더 많습니까?",
      answer:"137",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 137, 식: none"
    };
  }
});

// [수찾기3] 편의점에서 파는 피자는 과자의 가격에 3배에 2900원을 더해야하는 것을 잘못하여 2900...
T11_external.push({
  key:"external_수찾기3_1951",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"편의점에서 파는 피자는 과자의 가격에 3배에 2900원을 더해야하는 것을 잘못하여 2900원만 더하였더니 9200원이 되었습니다. 바르게 계산하면 피자는 얼마 입니까?",
      answer:"21800",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 21800, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 6을 곱해야 할 것을 잘못하여 뺐더니 94가 되었습니다. 바르게 계산하면 얼마입...
T11_external.push({
  key:"external_수찾기3_1952",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 6을 곱해야 할 것을 잘못하여 뺐더니 94가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"600",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 600, 식: none"
    };
  }
});

// [수찾기3] 청군팀이 가지고 있는 깃발의 수에 백군팀이 가지고 있는 깃발 123개를 빼야하는 것을 잘못...
T11_external.push({
  key:"external_수찾기3_1953",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"청군팀이 가지고 있는 깃발의 수에 백군팀이 가지고 있는 깃발 123개를 빼야하는 것을 잘못하여 23개만 뺐더니 287개가 되었습니다. 바르게 계산하면 청군팀은 백군팀보다 몇 개의 깃발을 더 가지고 있습니까?",
      answer:"187",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 187, 식: none"
    };
  }
});

// [수찾기3] 양계장에서 지난 달에 태어난 병아리의 수에서 이번 달에 태어난 병아리의 수 293마리를 더...
T11_external.push({
  key:"external_수찾기3_1954",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"양계장에서 지난 달에 태어난 병아리의 수에서 이번 달에 태어난 병아리의 수 293마리를 더해야하는 것을 잘못하여 29마리를 더하였더니 493이 되었습니다. 바르게 계산하면 양계장에서 지난 달과 이번 달에 태어난 병아리 수의 합은 몇 마리입니까?",
      answer:"757",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 757, 식: none"
    };
  }
});

// [수찾기3] 야구장에 입장한 성인의 수에 어린이 217명을 더해야할 것을 잘못하여 71명만 더하였더니 ...
T11_external.push({
  key:"external_수찾기3_1955",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"야구장에 입장한 성인의 수에 어린이 217명을 더해야할 것을 잘못하여 71명만 더하였더니 382명이 되었습니다. 바르게 계산하면 야구장에 입장한 성인과 어린이는 모두 몇 명입니까?",
      answer:"528",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 528, 식: none"
    };
  }
});

// [수찾기3] 동네 도서실에 만화책 수에 동화책 43권을 더해야하는 것을 잘못하여 뺐더니 19권이 되었습...
T11_external.push({
  key:"external_수찾기3_1956",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동네 도서실에 만화책 수에 동화책 43권을 더해야하는 것을 잘못하여 뺐더니 19권이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"105",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 105, 식: none"
    };
  }
});

// [수찾기3] 제시는 어제 넘은 줄넘기의 수에 오늘 넘은 273번을 빼야하는 것을 잘못하여 73번만 뺐더...
T11_external.push({
  key:"external_수찾기3_1957",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"제시는 어제 넘은 줄넘기의 수에 오늘 넘은 273번을 빼야하는 것을 잘못하여 73번만 뺐더니 381번이 되었습니다. 바르게 계산하면 어제 넘은 줄넘기와 오늘 넘은 줄넘기의 차는 얼마입니까?",
      answer:"181",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 181, 식: none"
    };
  }
});

// [수찾기3] 슈퍼마켓에서 어제 판매한 껌의 개수에 오늘 판매한 99개의 껌을 더해야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_1958",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"슈퍼마켓에서 어제 판매한 껌의 개수에 오늘 판매한 99개의 껌을 더해야하는 것을 잘못하여 19개를 더하였더니 117개가 되었습니다. 바르게 계산하면 슈퍼마켓에서 어제와 오늘 판매한 껌은 모두 몇 개 입니까?",
      answer:"197",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 197, 식: none"
    };
  }
});

// [수찾기3] 미술관에 입장한 성인의 수에서 어린이 관객 143명을 더해야하는 것을 잘못하여 43명만 더...
T11_external.push({
  key:"external_수찾기3_1959",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미술관에 입장한 성인의 수에서 어린이 관객 143명을 더해야하는 것을 잘못하여 43명만 더하였더니 321이 되었습니다. 바르게 계산하면 미술관에 방문한 총 관객의 수는 얼마입니까?",
      answer:"421",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 421, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 17로 나누어야할 것을 잘못하여 48로 나누었더니 몫이 두 번째로 작은 두 자리...
T11_external.push({
  key:"external_수찾기3_1961",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 17로 나누어야할 것을 잘못하여 48로 나누었더니 몫이 두 번째로 작은 두 자리 짝수이고, 나머지는 나올수 있는 나머지 중에서 가장 큰 수였습니다. 바르게 계산하였을 때 나머지를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기3] 극장에 있는 학생의 수에 남자 학생 192명을 빼야하는 것을 잘못하여 92명만 뺐더니 29...
T11_external.push({
  key:"external_수찾기3_1962",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"극장에 있는 학생의 수에 남자 학생 192명을 빼야하는 것을 잘못하여 92명만 뺐더니 297명이 되었습니다. 바르게 계산하면 극장에 있는 여자 학생은 몇 명입니까?",
      answer:"197",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 197, 식: none"
    };
  }
});

// [수찾기3] 박물관에 어제 입장한 관객의 수에서 오늘 입장한 관객의 수 394명을 더해야하는 것을 잘못...
T11_external.push({
  key:"external_수찾기3_1965",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"박물관에 어제 입장한 관객의 수에서 오늘 입장한 관객의 수 394명을 더해야하는 것을 잘못하여 94명만 더하였더니 412가 되었습니다. 바르게 계산하면 박물관에 어제와 오늘 방문한 관객의 합은 얼마입니까?",
      answer:"712",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 712, 식: none"
    };
  }
});

// [수찾기3] 어머니의 나이에서 12을 뺀 다음 5로 나누어야 할 것을 잘못하여 5를 나누었더니 몫이 8...
T11_external.push({
  key:"external_수찾기3_1966",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어머니의 나이에서 12을 뺀 다음 5로 나누어야 할 것을 잘못하여 5를 나누었더니 몫이 8이고 나머지가 2가 나왔습니다. 바르게 계산하면 얼마입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기3] 호태는 어제 국어 문제를 푼 개수에 오늘 푼 109개의 문제를 더해야하는 것을 잘못하여 1...
T11_external.push({
  key:"external_수찾기3_1968",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호태는 어제 국어 문제를 푼 개수에 오늘 푼 109개의 문제를 더해야하는 것을 잘못하여 19개를 더하였더니 97문제가 되었습니다. 바르게 계산하면 호태가 어제와 오늘 푼 문제는 모두 몇 문제입니까?",
      answer:"187",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 187, 식: none"
    };
  }
});

// [수찾기3] 4를 곱해야하는 어떤 수를 식을 잘못보고 8을 곱하였더니 144가 되었다. 바르게 계산하면...
T11_external.push({
  key:"external_수찾기3_1969",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"4를 곱해야하는 어떤 수를 식을 잘못보고 8을 곱하였더니 144가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [수찾기3] 감자밭에 뿌린 비료의 무게에 옥수수밭에 뿌린 5.36kg을 더해야하는 것을 잘못하여 3.6...
T11_external.push({
  key:"external_수찾기3_1971",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"감자밭에 뿌린 비료의 무게에 옥수수밭에 뿌린 5.36kg을 더해야하는 것을 잘못하여 3.65kg를 더하였더니 6.12kg이 되었습니다. 바르게 계산하면 감자밭과 옥수수밭에 뿌린 비료는 모두 몇 kg입니까?",
      answer:"7.83",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7.83, 식: none"
    };
  }
});

// [수찾기3] 희철이는 구슬 전체 갯수에서 3을 나누어야 할 것을 잘못하여 더하였더니 123이 되었습니다...
T11_external.push({
  key:"external_수찾기3_1972",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희철이는 구슬 전체 갯수에서 3을 나누어야 할 것을 잘못하여 더하였더니 123이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [수찾기3] 민호는 어떤 수에 43을 곱해야할 것을 잘못하여 뺐더니 86이 되었습니다. 바르게 계산한 ...
T11_external.push({
  key:"external_수찾기3_1973",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민호는 어떤 수에 43을 곱해야할 것을 잘못하여 뺐더니 86이 되었습니다. 바르게 계산한 값은 얼마입니까?",
      answer:"1849",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1849, 식: none"
    };
  }
});

// [수찾기3] 다현이는 예금통장에 있는 돈에서 오늘 273원을 빼야하는 것을 잘못하여 73원만 뺐더니 2...
T11_external.push({
  key:"external_수찾기3_1975",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다현이는 예금통장에 있는 돈에서 오늘 273원을 빼야하는 것을 잘못하여 73원만 뺐더니 289원이 남았습니다. 바르게 계산하면 예금통장에 남아있는 돈은 얼마입니까?",
      answer:"89",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 89, 식: none"
    };
  }
});

// [수찾기3] 원철이가 가지고 있는 철사에서 1.98m를 사용해서 토끼를 만들어야하는 것을 잘못하여 0....
T11_external.push({
  key:"external_수찾기3_1976",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원철이가 가지고 있는 철사에서 1.98m를 사용해서 토끼를 만들어야하는 것을 잘못하여 0.89m를 사용하여 만들었더니 9.73m가 남았습니다. 바르게 계산하면 남은 철사의 길이는 몇 m입니까?",
      answer:"8.64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8.64, 식: none"
    };
  }
});

// [수찾기3] 455와 어떤 수를 곱해야 할 것을 455에서 어떤 수를 뺐더니 387이 되었습니다. 바르...
T11_external.push({
  key:"external_수찾기3_1977",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"455와 어떤 수를 곱해야 할 것을 455에서 어떤 수를 뺐더니 387이 되었습니다. 바르게 계산하시오.",
      answer:"30940",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30940, 식: none"
    };
  }
});

// [수찾기3] 밭에서 승현이가 캔 고구마의 무게에 진수가 캔 6.38kg을 빼야하는 것을 잘못하여 3.6...
T11_external.push({
  key:"external_수찾기3_1979",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밭에서 승현이가 캔 고구마의 무게에 진수가 캔 6.38kg을 빼야하는 것을 잘못하여 3.68kg을 뺐더니 4.72kg이 되었습니다. 바르게 계산하면 승현이는 진수보다 몇 kg 더 캤습니까?",
      answer:"2.02",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2.02, 식: none"
    };
  }
});

// [수찾기3] 진희네 학교의 전체 학생 수에서 남학생 211명을 빼야하는 것을 잘못하여 122명을 뺐더니...
T11_external.push({
  key:"external_수찾기3_1981",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진희네 학교의 전체 학생 수에서 남학생 211명을 빼야하는 것을 잘못하여 122명을 뺐더니 312명이 되었습니다. 바르게 계산하면 진희네 학교의 여학생의 수는 몇 명입니까?",
      answer:"223",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 223, 식: none"
    };
  }
});

// [수찾기3] 채령이가 읽은 동화책의 쪽수에 위인전 253쪽을 더해야하는 것을 잘못하여 53쪽을 더하였더...
T11_external.push({
  key:"external_수찾기3_1982",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"채령이가 읽은 동화책의 쪽수에 위인전 253쪽을 더해야하는 것을 잘못하여 53쪽을 더하였더니 314쪽이 되었습니다. 바르게 계산하면 채령이가 읽은 동화책과 위인전은 모두 몇 쪽입니까?",
      answer:"514",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 514, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 4로 나누어야 할 것을 식을 잘못보고 곱하였더니 128이 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_1983",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 4로 나누어야 할 것을 식을 잘못보고 곱하였더니 128이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기3] 경마장에 올해 참여한 말의 수에 작년에 참여한 291마리를 빼야하는 것을 잘못하여 192마...
T11_external.push({
  key:"external_수찾기3_1985",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경마장에 올해 참여한 말의 수에 작년에 참여한 291마리를 빼야하는 것을 잘못하여 192마리를 뺐더니 311마리가 되었습니다. 바르게 계산하면 올해는 작년보다 몇 마리 더 참여했습니까?",
      answer:"212",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 212, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 빼야 할 것을 식을 잘못보고 두 자리 ...
T11_external.push({
  key:"external_수찾기3_1986",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 빼야 할 것을 식을 잘못보고 두 자리 수 중에서 네 번째로 큰 수를 더하였더니 147이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [수찾기3] 지섭이는 8을 곱해야하는 것을 잘못보고 52을 뺐더니 21이 되었다. 바르게 계산하면 얼마...
T11_external.push({
  key:"external_수찾기3_1987",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지섭이는 8을 곱해야하는 것을 잘못보고 52을 뺐더니 21이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"584",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 584, 식: none"
    };
  }
});

// [수찾기3] 공책을 14권씩 묶어야 할 것을 잘못하여 15권씩 묶었더니 2묶음이 나오고 12권의 공책이...
T11_external.push({
  key:"external_수찾기3_1988",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공책을 14권씩 묶어야 할 것을 잘못하여 15권씩 묶었더니 2묶음이 나오고 12권의 공책이 남았습니다. 바르게 계산하면 몇 묶음이 나옵니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에서 15를 빼야 할 것을 식을 잘못보고 7로 나누었더니 8이 되었습니다. 바르게 ...
T11_external.push({
  key:"external_수찾기3_1991",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에서 15를 빼야 할 것을 식을 잘못보고 7로 나누었더니 8이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"41",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 41, 식: none"
    };
  }
});

// [수찾기3] 호시네 과수원에 있는 감나무의 수에 사과나무 294그루를 더해야하는 것을 잘못하여 492를...
T11_external.push({
  key:"external_수찾기3_1993",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호시네 과수원에 있는 감나무의 수에 사과나무 294그루를 더해야하는 것을 잘못하여 492를 더하였더니 534가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"336",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 336, 식: none"
    };
  }
});

// [수찾기3] 준영이는 오늘 읽은 동화책의 페이지 수에서 내일 읽을 동화책 페이지 수 183쪽을 더해야하...
T11_external.push({
  key:"external_수찾기3_1994",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준영이는 오늘 읽은 동화책의 페이지 수에서 내일 읽을 동화책 페이지 수 183쪽을 더해야하는 것을 잘못하여 83만 더하였더니 372가 되었습니다. 바르게 계산하면 준영이가 읽어야할 동화책의 페이지 수는 얼마입니까?",
      answer:"472",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 472, 식: none"
    };
  }
});

// [수찾기3] 숙명이가 가지고 있는 색 테이프의 길이에 명희가 가지고 있는 2.41m를 빼야하는 것을 잘...
T11_external.push({
  key:"external_수찾기3_1996",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"숙명이가 가지고 있는 색 테이프의 길이에 명희가 가지고 있는 2.41m를 빼야하는 것을 잘못하여 1.24m를 뺐더니 2.81m가 되었습니다. 바르게 계산하면 숙명이는 명희보다 색 테이프를 몇 m 더 가지고 있습니까?",
      answer:"1.64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.64, 식: none"
    };
  }
});

// [수찾기3] 송화네 가족 중에서 어머니는 송화의 나이에 3배에 3살 많다고 해야할 것을 잘못하여 2배에...
T11_external.push({
  key:"external_수찾기3_1997",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화네 가족 중에서 어머니는 송화의 나이에 3배에 3살 많다고 해야할 것을 잘못하여 2배에 3살이 많다고 했더니 27살이 나왔습니다. 바르게 계산하면 어머니의 연세는 몇 세입니까?",
      answer:"39",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 39, 식: none"
    };
  }
});

// [수찾기3] 민우네 학교에 2학년의 학생 수에 4학년의 학생 203명을 빼야하는 것을 잘못하여 23명만...
T11_external.push({
  key:"external_수찾기3_1998",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민우네 학교에 2학년의 학생 수에 4학년의 학생 203명을 빼야하는 것을 잘못하여 23명만 뺐더니 287명이 되었습니다. 바르게 계산하면 2학년은 4학년보다 몇 명 더 많습니까?",
      answer:"107",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 107, 식: none"
    };
  }
});

// [수찾기3] 시청에서 오늘 심은 나무에 어제 심은 나무 293그루를 빼야하는 것을 잘못하여 93그루만 ...
T11_external.push({
  key:"external_수찾기3_1999",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시청에서 오늘 심은 나무에 어제 심은 나무 293그루를 빼야하는 것을 잘못하여 93그루만 뺐더니 312그루가 되었습니다. 바르게 계산하면 오늘은 어제보다 몇 그루 더 많이 심었습니까?",
      answer:"112",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 112, 식: none"
    };
  }
});

// [수찾기3] 로봇 공장에서 어제 로봇 생산수에 오늘 생산한 로봇 192개를 더해야하는 것을 잘못하여 1...
T11_external.push({
  key:"external_수찾기3_2000",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"로봇 공장에서 어제 로봇 생산수에 오늘 생산한 로봇 192개를 더해야하는 것을 잘못하여 129개를 더하였더니 347이 되었습니다. 바르게 계산하면 로봇 공장에서 총 생산한 로봇의 수는 몇 개 입니까?",
      answer:"410",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 410, 식: none"
    };
  }
});

// [수찾기3] 슈퍼마켓에 있는 포도맛 사탕의 개수에 자두맛 사탕 172봉지를 더해야하는 것을 잘못하여 7...
T11_external.push({
  key:"external_수찾기3_2001",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"슈퍼마켓에 있는 포도맛 사탕의 개수에 자두맛 사탕 172봉지를 더해야하는 것을 잘못하여 72봉지만 더하였더니 263봉지가 되었습니다. 바르게 계산하면 포도맛과 자두맛 사탕은 모두 몇 봉지 입니까?",
      answer:"363",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 363, 식: none"
    };
  }
});

// [수찾기3] 동원이는 어제 만화책을 읽은 시간에 오늘 만화책을 읽은 38분을 더해야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2002",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동원이는 어제 만화책을 읽은 시간에 오늘 만화책을 읽은 38분을 더해야하는 것을 잘못하여 83분을 더하였더니 263분이 되었습니다. 바르게 계산하면 동원이는 만화책을 몇 분 동안 읽었습니까?",
      answer:"218",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 218, 식: none"
    };
  }
});

// [수찾기3] 동물원에서 걸은 만보기의 수에서 놀이공원에서 걸은 만보기의 수 498을 더해야하는 것을 잘...
T11_external.push({
  key:"external_수찾기3_2003",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에서 걸은 만보기의 수에서 놀이공원에서 걸은 만보기의 수 498을 더해야하는 것을 잘못하여 98만 더하였더니 749가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"1159",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1159, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 3를 곱해야 하는데 잘못하여 더했더니 52가 되었습니다. 바르게 계산한 값은 얼...
T11_external.push({
  key:"external_수찾기3_2004",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 3를 곱해야 하는데 잘못하여 더했더니 52가 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"147",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 147, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 14를 곱해야 할 것을 잘못하여 14를 더했더니 98가 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_2005",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 14를 곱해야 할 것을 잘못하여 14를 더했더니 98가 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"1176",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1176, 식: none"
    };
  }
});

// [수찾기3] 규빈이가 어제 산 라면의 가격에 오늘 산 과자 382원을 더해야하는 것을 잘못하여 82원만...
T11_external.push({
  key:"external_수찾기3_2006",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"규빈이가 어제 산 라면의 가격에 오늘 산 과자 382원을 더해야하는 것을 잘못하여 82원만 더하였더니 1930원이 되었습니다. 바르게 계산하면 규빈이가 어제 산 라면과 오늘 산 과자의 합은 얼마 입니까?",
      answer:"2230",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2230, 식: none"
    };
  }
});

// [수찾기3] 병규는 9일날 달린 거리에 11일날 달린 거리 0.3km을 더해야하는 것을 잘못하여 뺐더니...
T11_external.push({
  key:"external_수찾기3_2007",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"병규는 9일날 달린 거리에 11일날 달린 거리 0.3km을 더해야하는 것을 잘못하여 뺐더니 0.5km가 되었습니다. 바르게 계산하면 병규는 9일과 11일날 달린 거리는 모두 몇 km입니까?",
      answer:"1.1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.1, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 7로 나누어야할 것을 식을 잘못보고 더하였더니 35가 되었다. 바르게 계산하면 ...
T11_external.push({
  key:"external_수찾기3_2009",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 7로 나누어야할 것을 식을 잘못보고 더하였더니 35가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 22를...
T11_external.push({
  key:"external_수찾기3_2010",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 두 번째로 작은 수를 나누어야 할 것을 식을 잘못보고 22를 더하였더니 154가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 셋째 번으로 작은 수를 곱해야 하는데 잘못하여 넷째 번으로 ...
T11_external.push({
  key:"external_수찾기3_2011",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 셋째 번으로 작은 수를 곱해야 하는데 잘못하여 넷째 번으로 큰 수를 더했더니 181이 되었습니다. 올바르게 계산하시오.",
      answer:"1020",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1020, 식: none"
    };
  }
});

// [수찾기3] 공장에서 올해 생산한 컴퓨터의 수에 작년에 생산한 컴퓨터 783대를 빼야하는 것을 잘못하여...
T11_external.push({
  key:"external_수찾기3_2012",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공장에서 올해 생산한 컴퓨터의 수에 작년에 생산한 컴퓨터 783대를 빼야하는 것을 잘못하여 83대만 뺐더니 1021대가 되었습니다. 바르게 계산하면 올해는 작년보다 몇 대 더 많이 생산했습니까?",
      answer:"321",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 321, 식: none"
    };
  }
});

// [수찾기3] 호시네 과일 가게에 있는 사과의 개수에 귤 372개를 빼야하는 것을 잘못하여 72개만 뺐더...
T11_external.push({
  key:"external_수찾기3_2013",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호시네 과일 가게에 있는 사과의 개수에 귤 372개를 빼야하는 것을 잘못하여 72개만 뺐더니 328개가 되었습니다. 바르게 계산하면 사과는 귤보다 몇 개 더 많습니까?",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [수찾기3] 물을 채울 수 있는 욕조에 물 2.83L를 부어야하는 것을 잘못하여 3.28L를 부었더니 ...
T11_external.push({
  key:"external_수찾기3_2015",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물을 채울 수 있는 욕조에 물 2.83L를 부어야하는 것을 잘못하여 3.28L를 부었더니 3.43L를 더 채울 수 있었습니다. 바르게 계산하면 몇 L를 더 채울 수 있습니까?",
      answer:"3.88",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.88, 식: none"
    };
  }
});

// [수찾기3] 정훈이는 35를 빼야하는 어떤 수를 잘못보고 25를 뺐더니 43이 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_2016",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정훈이는 35를 빼야하는 어떤 수를 잘못보고 25를 뺐더니 43이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: none"
    };
  }
});

// [수찾기3] 어린이 회관에 어제 입장한 사람의 수에 오늘 입장한 643명을 더해야하는 것을 잘못하여 3...
T11_external.push({
  key:"external_수찾기3_2017",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어린이 회관에 어제 입장한 사람의 수에 오늘 입장한 643명을 더해야하는 것을 잘못하여 364명을 더하였더니 720명이 되었습니다. 바르게 계산하면 어린이 회관에 어제와 오늘 입장한 사람은 모두 몇 명입니까?",
      answer:"999",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 999, 식: none"
    };
  }
});

// [수찾기3] 골목길에서 주운 사과의 무게에 배 0.31kg을 빼야하는 것을 잘못하여 0.13kg을 뺐더...
T11_external.push({
  key:"external_수찾기3_2018",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"골목길에서 주운 사과의 무게에 배 0.31kg을 빼야하는 것을 잘못하여 0.13kg을 뺐더니 0.52kg이 되었습니다. 바르게 계산하면 사과는 배보다 몇 kg 더 무겁습니까?",
      answer:"0.34",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.34, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 32를 곱해야 할 것을 더하였더니 82가 되었다. 바르게 계산한 값은?...
T11_external.push({
  key:"external_수찾기3_2019",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 32를 곱해야 할 것을 더하였더니 82가 되었다. 바르게 계산한 값은?",
      answer:"1600",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1600, 식: none"
    };
  }
});

// [수찾기3] 승헌이네 학교의 여학생의 수에 남학생 263명을 더해야하는 것을 잘못하여 63명만 더하였더...
T11_external.push({
  key:"external_수찾기3_2021",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승헌이네 학교의 여학생의 수에 남학생 263명을 더해야하는 것을 잘못하여 63명만 더하였더니 273명이 되었습니다. 바르게 계산하면 승헌이네 학교의 전체 학생 수는 몇 명입니까?",
      answer:"473",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 473, 식: none"
    };
  }
});

// [수찾기3] 귤을 8개씩 담아야 할 것을 잘못하여 11개씩 담았더니 7상자가 나오고 3개의 귤이 남았습...
T11_external.push({
  key:"external_수찾기3_2022",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"귤을 8개씩 담아야 할 것을 잘못하여 11개씩 담았더니 7상자가 나오고 3개의 귤이 남았습니다. 바르게 계산하면 몇 개의 상자가 나옵니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 미술관에 어제 입장한 관객수에 오늘 입장한 관객 328명을 더해야하는 것을 잘못하여 38명...
T11_external.push({
  key:"external_수찾기3_2024",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미술관에 어제 입장한 관객수에 오늘 입장한 관객 328명을 더해야하는 것을 잘못하여 38명만 더하였더니 557이 되었습니다. 바르게 계산하면 미술관에 어제와 오늘 입장한 관객의 합은 몇 명입니까?",
      answer:"847",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 847, 식: none"
    };
  }
});

// [수찾기3] 승희네 농장에 사슴들에게 5개씩 먹이를 줘야 할 것을 잘못하여 3개씩 먹이를 줬더니 11마...
T11_external.push({
  key:"external_수찾기3_2025",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승희네 농장에 사슴들에게 5개씩 먹이를 줘야 할 것을 잘못하여 3개씩 먹이를 줬더니 11마리에게 주고 1개의 먹이가 남았습니다. 바르게 계산하면 몇 마리의 사슴에게 먹이를 줄 수 있습니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기3] 오징어 게임을 하기 위해 9명씩 나누어야 할 것을 8명씩 나누었더니 12팀이 나오고 3명이...
T11_external.push({
  key:"external_수찾기3_2026",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오징어 게임을 하기 위해 9명씩 나누어야 할 것을 8명씩 나누었더니 12팀이 나오고 3명이 남았습니다. 바르게 계산하면 몇 개의 팀이 만들어집니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 7을 더해야 할 것을 식을 잘못보고 곱하였더니 49가 되었습니다. 바르게 계산하...
T11_external.push({
  key:"external_수찾기3_2027",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 7을 더해야 할 것을 식을 잘못보고 곱하였더니 49가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기3] 리정이네는 김장을 작년에 담은 배추의 개수에 올해 담은 283포기를 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2030",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"리정이네는 김장을 작년에 담은 배추의 개수에 올해 담은 283포기를 더해야하는 것을 잘못하여 83포기만 더하였더니 327포기가 되었습니다. 바르게 계산하면 리정이네가 작년과 올해 담은 김장은 모두 몇 포기입니까?",
      answer:"527",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 527, 식: none"
    };
  }
});

// [수찾기3] 승관이네 집에서 학교까지의 거리에 학교에서 은행까지의 거리인 235m를 더해야하는 것을 잘...
T11_external.push({
  key:"external_수찾기3_2031",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승관이네 집에서 학교까지의 거리에 학교에서 은행까지의 거리인 235m를 더해야하는 것을 잘못하여 35m만 더하였더니 149가 되었습니다. 바르게 계산하면 승관이네 집에서 은행까지의 거리는 얼마입니까?",
      answer:"349",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 349, 식: none"
    };
  }
});

// [수찾기3] 주한이는 예금 통장에 있는 돈에 오늘 870원을 예금해야할 것을 잘못하여 87원을 예금했더...
T11_external.push({
  key:"external_수찾기3_2032",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주한이는 예금 통장에 있는 돈에 오늘 870원을 예금해야할 것을 잘못하여 87원을 예금했더니 938원이 되었습니다. 바르게 계산하면 주한이의 예금 통장에 있는 돈은 얼마입니까?",
      answer:"1730",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1730, 식: none"
    };
  }
});

// [수찾기3] 현정이가 넘은 줄넘기의 수에 정희가 넘은 줄넘기 347번을 빼야하는 것을 잘못하여 47번만...
T11_external.push({
  key:"external_수찾기3_2034",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현정이가 넘은 줄넘기의 수에 정희가 넘은 줄넘기 347번을 빼야하는 것을 잘못하여 47번만 뺐더니 325번이 되었습니다. 바르게 계산하면 현정이는 정희보다 몇 번 더 넘었습니까?",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [수찾기3] 놀이터에 12명의 아이들에게 자전거를 나누어야 할 것을 잘못하여 8명의 아이들에게 나누었더...
T11_external.push({
  key:"external_수찾기3_2035",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이터에 12명의 아이들에게 자전거를 나누어야 할 것을 잘못하여 8명의 아이들에게 나누었더니 한 아이당 4개의 자전거를 갖고 4개의 자전거가 남았습니다. 바르게 계산하면 한 아이당 몇 개의 자전거를 갖게 됩니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기3] 승합차 한대에 8명이 나누어 타야 할 것을 잘못하여 6명이 나누어 탔더니 13대의 승합차를...
T11_external.push({
  key:"external_수찾기3_2036",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승합차 한대에 8명이 나누어 타야 할 것을 잘못하여 6명이 나누어 탔더니 13대의 승합차를 사용하고 2명이 남았습니다. 바르게 계산하면 승합차 몇 개가 필요합니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 동물원에 성인 입장권에 어린이 입장권 130장을 더해야하는 것을 잘못하여 30장을 더하였더...
T11_external.push({
  key:"external_수찾기3_2037",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 성인 입장권에 어린이 입장권 130장을 더해야하는 것을 잘못하여 30장을 더하였더니 280장이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"380",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 380, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 12를 곱해야 할 것을 잘못해서 더했더니 42가 되었습니다. 바르게 계산한 답은...
T11_external.push({
  key:"external_수찾기3_2038",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 12를 곱해야 할 것을 잘못해서 더했더니 42가 되었습니다. 바르게 계산한 답은 얼마입니까?",
      answer:"360",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 360, 식: none"
    };
  }
});

// [수찾기3] 용수는 15를 빼야하는 것을 잘못보고 27을 더하였더니 97이 되었다. 바르게 계산하면 얼...
T11_external.push({
  key:"external_수찾기3_2039",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"용수는 15를 빼야하는 것을 잘못보고 27을 더하였더니 97이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: none"
    };
  }
});

// [수찾기3] 유진이는 어떤수에 12를 곱해야 할 것을 숫자를 잘못보고 21를 곱하였더니 105가 되었습...
T11_external.push({
  key:"external_수찾기3_2041",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유진이는 어떤수에 12를 곱해야 할 것을 숫자를 잘못보고 21를 곱하였더니 105가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"60",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 60, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 곱해야 할 것을 식을 잘못보고 3을 곱...
T11_external.push({
  key:"external_수찾기3_2042",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 세 번째로 작은 수를 곱해야 할 것을 식을 잘못보고 3을 곱하였더니 171이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"684",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 684, 식: none"
    };
  }
});

// [수찾기3] 홍수는 자신의 나이에 3을 곱해야하는 것을 잘못하여 2를 곱했더니 24가 되었습니다. 바르...
T11_external.push({
  key:"external_수찾기3_2043",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"홍수는 자신의 나이에 3을 곱해야하는 것을 잘못하여 2를 곱했더니 24가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기3] 주스가 가득 들어 있는 병의 무게에 빈 병의 무게 1.42kg을 빼야하는 것을 잘못하여 0...
T11_external.push({
  key:"external_수찾기3_2044",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주스가 가득 들어 있는 병의 무게에 빈 병의 무게 1.42kg을 빼야하는 것을 잘못하여 0.41kg을 뺐더니 3.84kg이 되었습니다. 바르게 계산하면 주스의 무게는 몇 kg입니까?",
      answer:"2.83",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2.83, 식: none"
    };
  }
});

// [수찾기3] 체육시간에 윗몸 일으키기 100개를 하는데 나미가 걸린 시간에 사라가 걸린 78.2초를 빼...
T11_external.push({
  key:"external_수찾기3_2045",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체육시간에 윗몸 일으키기 100개를 하는데 나미가 걸린 시간에 사라가 걸린 78.2초를 빼야하는 것을 잘못하여 28.7초를 뺐더니 101.5초가 나왔습니다. 바르게 계산하면 나미는 사라보다 몇 초 더 걸렸습니까?",
      answer:"52",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 52, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 8을 곱해야 하는데 잘못하여 더했더니 78이 되었습니다. 바르게 계산한 값은 얼...
T11_external.push({
  key:"external_수찾기3_2046",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 8을 곱해야 하는데 잘못하여 더했더니 78이 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"560",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 560, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 14를 곱해야 할 것을 식을 잘못보고 4로 나누었더니 6이 되었습니다. 바르게 ...
T11_external.push({
  key:"external_수찾기3_2047",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 14를 곱해야 할 것을 식을 잘못보고 4로 나누었더니 6이 되었습니다. 바르게 계산한 답은 얼마입니까?",
      answer:"336",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 336, 식: none"
    };
  }
});

// [수찾기3] 초아네 야채 가게에서 상추의 무게에 깻잎 0.33kg을 더해야하는 것을 잘못하여 뺐더니 0...
T11_external.push({
  key:"external_수찾기3_2048",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"초아네 야채 가게에서 상추의 무게에 깻잎 0.33kg을 더해야하는 것을 잘못하여 뺐더니 0.06kg이 되었습니다. 바르게 계산하면 상추와 깻잎은 모두 몇 kg입니까?",
      answer:"0.72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.72, 식: none"
    };
  }
});

// [수찾기3] 효주의 키에 하늬의 키 138.8cm를 빼야하는 것을 잘못하여 0.38cm를 뺐더니 154...
T11_external.push({
  key:"external_수찾기3_2049",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효주의 키에 하늬의 키 138.8cm를 빼야하는 것을 잘못하여 0.38cm를 뺐더니 154.7cm가 되었습니다. 바르게 계산하면 효주는 하늬보다 몇 cm 더 큽니까?",
      answer:"16.28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16.28, 식: none"
    };
  }
});

// [수찾기3] A를 10으로 나누고 2를 곱해야 할 것을 잘못하여 10을 더하고 2를 나누었더니 30이 ...
T11_external.push({
  key:"external_수찾기3_2051",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A를 10으로 나누고 2를 곱해야 할 것을 잘못하여 10을 더하고 2를 나누었더니 30이 되었습니다. 다시 바르게 계산해보니 10이 나왔다고 할 때, A의 값을 구하시오.",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: none"
    };
  }
});

// [수찾기3] 인형 공장에서 어제 만든 인형의 개수에 오늘 만든 573개의 인형을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2052",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인형 공장에서 어제 만든 인형의 개수에 오늘 만든 573개의 인형을 더해야하는 것을 잘못하여 375개를 더하였더니 781개가 되었습니다. 바르게 계산하면 인형 공장에서 어제와 오늘 만든 인형은 모두 몇 개 입니까?",
      answer:"979",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 979, 식: none"
    };
  }
});

// [수찾기3] 주희가 접을 종이학의 개수에 선영이가 접은 종이학 209개를 더해야하는 것을 잘못하여 29...
T11_external.push({
  key:"external_수찾기3_2054",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주희가 접을 종이학의 개수에 선영이가 접은 종이학 209개를 더해야하는 것을 잘못하여 29개를 더했더니 301이 되었습니다. 바르게 계산하면 주희와 선영이가 접은 종이학은 모두 몇 개 입니까?",
      answer:"481",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 481, 식: none"
    };
  }
});

// [수찾기3] 학교에서 오늘 심은 개나리의 개수에서 어제 심은 장미 283송이를 빼야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2055",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"학교에서 오늘 심은 개나리의 개수에서 어제 심은 장미 283송이를 빼야하는 것을 잘못하여 83송이만 뺐더니 367송이가 되었습니다. 바르게 계산하면 개나리와 장미의 차는 얼마입니까?",
      answer:"167",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 167, 식: none"
    };
  }
});

// [수찾기3] 공원에 있는 밤나무의 개수에 은행나무 108그루를 더해야하는 것을 잘못하여 18그루만 더하...
T11_external.push({
  key:"external_수찾기3_2056",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원에 있는 밤나무의 개수에 은행나무 108그루를 더해야하는 것을 잘못하여 18그루만 더하였더니107그루가 되었습니다. 바르게 계산하면 공원에 있는 밤나무와 은행나무는 모두 몇 그루 입니까?",
      answer:"197",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 197, 식: none"
    };
  }
});

// [수찾기3] 익준이가 가지고 있는 책의 무게에 송화가 가지고 있는 책 1.39kg을 더해야하는 것을 잘...
T11_external.push({
  key:"external_수찾기3_2058",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"익준이가 가지고 있는 책의 무게에 송화가 가지고 있는 책 1.39kg을 더해야하는 것을 잘못하여 0.93kg을 더하였더니 3.15kg이 되었습니다. 바르게 계산하면 익준이와 송화가 가지고 있는 책의 무게는 모두 몇 kg입니까?",
      answer:"3.61",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.61, 식: none"
    };
  }
});

// [수찾기3] 도서실에서 작년에 책을 빌린 학생의 수에 올해 책을 빌린 학생 873명을 더해야하는 것을 ...
T11_external.push({
  key:"external_수찾기3_2059",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도서실에서 작년에 책을 빌린 학생의 수에 올해 책을 빌린 학생 873명을 더해야하는 것을 잘못하여 378명을 더하였더니 1008명이 되었습니다. 바르게 계산하면 도서실에서 작년과 올해 책을 빌린 학생은 모두 몇 명입니까?",
      answer:"1503",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1503, 식: none"
    };
  }
});

// [수찾기3] 풍경 마을에 살고 있는 남자의 수에서 여자의 수 56명을 더해야하는 것을 잘못하여 65명을...
T11_external.push({
  key:"external_수찾기3_2060",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"풍경 마을에 살고 있는 남자의 수에서 여자의 수 56명을 더해야하는 것을 잘못하여 65명을 더하였더니 103명이 되었습니다. 바르게 계산하면 풍경 마을에 살고 있는 사람의 수는 몇 명입니까?",
      answer:"94",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 94, 식: none"
    };
  }
});

// [수찾기3] 민설이는 어떤 CD의 가격을 6000원으로 잘못보고 4개를 골라 25000원을 냈는데 거스...
T11_external.push({
  key:"external_수찾기3_2061",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민설이는 어떤 CD의 가격을 6000원으로 잘못보고 4개를 골라 25000원을 냈는데 거스름 돈 3000원을 받았습니다. 어떤 CD의 원래 가격은 얼마입니까?",
      answer:"5500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5500, 식: none"
    };
  }
});

// [수찾기3] 축구장에 입장한 성인의 수에 학생 278명을 더해야하는 것을 잘못하여 78명만 더하였더니 ...
T11_external.push({
  key:"external_수찾기3_2062",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"축구장에 입장한 성인의 수에 학생 278명을 더해야하는 것을 잘못하여 78명만 더하였더니 438명이 되었습니다. 바르게 계산하면 축구장에 입장한 성인와 학생은 모두 몇 명입니까?",
      answer:"678",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 678, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에서 158을 빼야 할 것을 잘못하여 249를 빼었더니 258이 되었습니다. 바르게...
T11_external.push({
  key:"external_수찾기3_2063",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에서 158을 빼야 할 것을 잘못하여 249를 빼었더니 258이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"349",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 349, 식: none"
    };
  }
});

// [수찾기3] 현정이는 52를 더해야하는 어떤 수를 잘못보고 15를 더했더니 93이 되었습니다. 바르게 ...
T11_external.push({
  key:"external_수찾기3_2067",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현정이는 52를 더해야하는 어떤 수를 잘못보고 15를 더했더니 93이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"130",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 130, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 36을 곱해야 할 것을 잘못하여 뺐더니 418이 되었습니다. 바르게 계산한 값은...
T11_external.push({
  key:"external_수찾기3_2068",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 36을 곱해야 할 것을 잘못하여 뺐더니 418이 되었습니다. 바르게 계산한 값은 얼마입니까?",
      answer:"16344",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16344, 식: none"
    };
  }
});

// [수찾기3] 연못 속에 있는 잉어의 수에 붕어 102마리를 더해야하는 것을 잘못하여 39마리를 더하였더...
T11_external.push({
  key:"external_수찾기3_2069",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"연못 속에 있는 잉어의 수에 붕어 102마리를 더해야하는 것을 잘못하여 39마리를 더하였더니 172가 되었습니다. 바르게 계산하면 연못 속에 있는 잉어와 붕어의 합은 몇 마리 입니까?",
      answer:"235",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 235, 식: none"
    };
  }
});

// [수찾기3] 공장에서 공책을 2시간 동안 만들어야 할 것을 잘못하여 5시간 동안 만들었더니 60개가 만...
T11_external.push({
  key:"external_수찾기3_2070",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공장에서 공책을 2시간 동안 만들어야 할 것을 잘못하여 5시간 동안 만들었더니 60개가 만들어졌습니다. 바르게 계산하면 2시간 동안 몇 개의 공책이 만들어집니까?",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [수찾기3] 준성이는 어제 아침에 달린 거리에 오늘 아침에 달린 2.31km를 더해야하는 것을 잘못하여...
T11_external.push({
  key:"external_수찾기3_2071",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준성이는 어제 아침에 달린 거리에 오늘 아침에 달린 2.31km를 더해야하는 것을 잘못하여 1.32km를 더했더니 3.11km가 되었습니다. 바르게 계산하면 준성이가 어제와 오늘 아침에 달린 거리는 몇 km입니까?",
      answer:"4.1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.1, 식: none"
    };
  }
});

// [수찾기3] 수영장에 어제 입장한 사람의 수에 오늘 입장한 321명을 빼야하는 것을 잘못하여 231명만...
T11_external.push({
  key:"external_수찾기3_2072",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수영장에 어제 입장한 사람의 수에 오늘 입장한 321명을 빼야하는 것을 잘못하여 231명만 뺐더니 198명이 되었습니다. 바르게 계산하면 수영장에 어제와 오늘 입장한 사람 수의 차는 몇 명입니까?",
      answer:"108",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 108, 식: none"
    };
  }
});

// [수찾기3] 3학년 학생들이 넣은 콩 주머니 개수에 2학년 학생들이 넣은 콩 주머니 278개를 빼야하는...
T11_external.push({
  key:"external_수찾기3_2073",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3학년 학생들이 넣은 콩 주머니 개수에 2학년 학생들이 넣은 콩 주머니 278개를 빼야하는 것을 잘못하여 78개만 뺐더니 382개가 되었습니다. 바르게 계산하면 3학년은 2학년보다 몇 개 더 많이 넣었습니까?",
      answer:"182",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 182, 식: none"
    };
  }
});

// [수찾기3] 놀이공원에 놀러온 학생의 수에 여학생 392명을 빼야하는 것을 잘못하여 92명만 뺐더니 4...
T11_external.push({
  key:"external_수찾기3_2075",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이공원에 놀러온 학생의 수에 여학생 392명을 빼야하는 것을 잘못하여 92명만 뺐더니 463명이 되었습니다. 바르게 계산하면 놀이공원에 놀러온 남학생은 몇 명입니까?",
      answer:"163",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 163, 식: none"
    };
  }
});

// [수찾기3] 식물원에 있는 수국의 개수에 토끼풀 478송이를 더해야하는 것을 잘못하여 48송이만 더하였...
T11_external.push({
  key:"external_수찾기3_2076",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"식물원에 있는 수국의 개수에 토끼풀 478송이를 더해야하는 것을 잘못하여 48송이만 더하였더니 263송이가 되었습니다. 바르게 계산하면 식물원에 있는 수국과 토끼풀은 모두 몇 송이 입니까?",
      answer:"693",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 693, 식: none"
    };
  }
});

// [수찾기3] 나비의 총 개수에 14를 곱해야 할 것을 잘못하여 뺏더니 27이 되었습니다. 바르게 계산하...
T11_external.push({
  key:"external_수찾기3_2077",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나비의 총 개수에 14를 곱해야 할 것을 잘못하여 뺏더니 27이 되었습니다. 바르게 계산하면 나비는 총 몇 마리 입니까?",
      answer:"574",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 574, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 (7/3)을 곱해야할 것을 더하였더니 (11/4)이 되었다. 바르게 계산하면 얼...
T11_external.push({
  key:"external_수찾기3_2078",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 (7/3)을 곱해야할 것을 더하였더니 (11/4)이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"35/36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35/36, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 12를 더하고 5를 곱해야 할 것을 잘못하여 21을 더하고 5로 나누었더니 10...
T11_external.push({
  key:"external_수찾기3_2079",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 12를 더하고 5를 곱해야 할 것을 잘못하여 21을 더하고 5로 나누었더니 10이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"205",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 205, 식: none"
    };
  }
});

// [수찾기3] 미나네 학교 3학년의 여학생 수에 남학생 수 184명을 더해야하는 것을 잘못하여 81명만 ...
T11_external.push({
  key:"external_수찾기3_2080",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미나네 학교 3학년의 여학생 수에 남학생 수 184명을 더해야하는 것을 잘못하여 81명만 더하였더니 290이 되었습니다. 바르게 계산하면 미나네 학교 3학년의 학생 수는 몇 명입니까?",
      answer:"393",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 393, 식: none"
    };
  }
});

// [수찾기3] 31을 빼야하는 어떤 수를 식을 잘못보고 11을 더하였더니 52가 되었다. 바르게 계산하면...
T11_external.push({
  key:"external_수찾기3_2081",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"31을 빼야하는 어떤 수를 식을 잘못보고 11을 더하였더니 52가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 아버지의 나이에서 3을 더한 다음 6을 곱해야 할 것을 잘못하여 6만 더하였더니 54가 나...
T11_external.push({
  key:"external_수찾기3_2082",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아버지의 나이에서 3을 더한 다음 6을 곱해야 할 것을 잘못하여 6만 더하였더니 54가 나왔습니다. 바르게 계산하면 얼마입니까?",
      answer:"306",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 306, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 3으로 나누어야 할 것을 잘못하여 8을 곱했더니 72가 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_2083",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 3으로 나누어야 할 것을 잘못하여 8을 곱했더니 72가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 9로 나누어야할 것을 식을 잘못보고 더하였더니 81이 되었다. 바르게 계산하면 ...
T11_external.push({
  key:"external_수찾기3_2085",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 9로 나누어야할 것을 식을 잘못보고 더하였더니 81이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기3] 100원짜리 동전의 무게에 50원짜리 동전 3.51g을 빼야하는 것을 잘못하여 1.53g을...
T11_external.push({
  key:"external_수찾기3_2086",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"100원짜리 동전의 무게에 50원짜리 동전 3.51g을 빼야하는 것을 잘못하여 1.53g을 뺐더니 2.44g이 되었습니다. 바르게 계산하면 100원짜리 동전은 50원짜리 동전보다 몇 g 더 무겁습니까?",
      answer:"0.46",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.46, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 9로 나누어야할 것을 식을 잘못보고 9을 뺀 후 9로 나누었더니 몫이 13이 되...
T11_external.push({
  key:"external_수찾기3_2088",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 9로 나누어야할 것을 식을 잘못보고 9을 뺀 후 9로 나누었더니 몫이 13이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기3] 일남이가 가지고 있는 딱지의 수에 말숙이가 가지고 있는 딱지 128개를 더해야하는 것을 잘...
T11_external.push({
  key:"external_수찾기3_2091",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일남이가 가지고 있는 딱지의 수에 말숙이가 가지고 있는 딱지 128개를 더해야하는 것을 잘못하여 183개를 더하였더니 275가 되었습니다. 바르게 계산하면 일남이와 말숙이가 가지고 있는 딱지의 합은 몇 개 입니까?",
      answer:"220",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 220, 식: none"
    };
  }
});

// [수찾기3] 남국이는 집에서 문방구까지의 걸음걸이 수에 문방구에서 도서관까지 263걸음을 더해야하는 것...
T11_external.push({
  key:"external_수찾기3_2092",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"남국이는 집에서 문방구까지의 걸음걸이 수에 문방구에서 도서관까지 263걸음을 더해야하는 것을 잘못하여 172걸음을 더하였더니 475걸음이 되었습니다. 바르게 계산하면 집에서 도서관까지 몇걸음이 나옵니까?",
      answer:"566",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 566, 식: none"
    };
  }
});

// [수찾기3] 4를 곱해야하는 어떤 수를 식을 잘못보고 91을 뺐더니 34가 되었다. 바르게 계산하면 얼...
T11_external.push({
  key:"external_수찾기3_2093",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"4를 곱해야하는 어떤 수를 식을 잘못보고 91을 뺐더니 34가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 500, 식: none"
    };
  }
});

// [수찾기3] 수영장에 있는 남자 어린이의 수에서 여자 어린이 279명을 더해야하는 것을 잘못하여 뺐더니...
T11_external.push({
  key:"external_수찾기3_2094",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수영장에 있는 남자 어린이의 수에서 여자 어린이 279명을 더해야하는 것을 잘못하여 뺐더니 34가 되었습니다. 바르게 계산하면 수영장에 있는 어린이의 수는 얼마입니까?",
      answer:"592",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 592, 식: none"
    };
  }
});

// [수찾기3] 성재가 딴 사과의 무게에 성철이가 딴 사과 2.81kg을 빼야하는 것을 잘못하여 1.28k...
T11_external.push({
  key:"external_수찾기3_2095",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성재가 딴 사과의 무게에 성철이가 딴 사과 2.81kg을 빼야하는 것을 잘못하여 1.28kg을 뺐더니 1.99kg이 나왔습니다. 바르게 계산하면 성재는 성철이보다 몇 kg 더 땄습니까?",
      answer:"0.46",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.46, 식: none"
    };
  }
});

// [수찾기3] 봉선이는 자신의 키에 언니의 키 154cm를 더해야하는 것을 잘못하여 뺏더니 12가 되었습...
T11_external.push({
  key:"external_수찾기3_2096",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"봉선이는 자신의 키에 언니의 키 154cm를 더해야하는 것을 잘못하여 뺏더니 12가 되었습니다. 바르게 계산하면 봉선이와 언니의 키의 합은 얼마입니까?",
      answer:"320",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 320, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 9로 나누어야할 것을 식을 잘못보고 5를 곱하였더니 495가 되었다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_2097",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 9로 나누어야할 것을 식을 잘못보고 5를 곱하였더니 495가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기3] 주영이네 과수원에 사과나무의 개수에 배나무 162그루를 빼야하는 것을 잘못하여 62그루만 ...
T11_external.push({
  key:"external_수찾기3_2098",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주영이네 과수원에 사과나무의 개수에 배나무 162그루를 빼야하는 것을 잘못하여 62그루만 뺐더니 217가 되었습니다. 바르게 계산하면 사과나무는 배나무보다 몇 그루 더 많습니까?",
      answer:"117",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 117, 식: none"
    };
  }
});

// [수찾기3] 민수는 풍선 갯수에 30을 곱해야할 것을 잘못하여 더하였더니 95가 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_2099",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민수는 풍선 갯수에 30을 곱해야할 것을 잘못하여 더하였더니 95가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"1950",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1950, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 7을 곱해야할 것을 식을 잘못보고 12를 더하였더니 24가 되었다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_2101",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 7을 곱해야할 것을 식을 잘못보고 12를 더하였더니 24가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"84",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 84, 식: none"
    };
  }
});

// [수찾기3] 놀이공원에 어제 입장한 사람의 수에 오늘 입장한 412명을 더해야하는 것을 잘못하여 214...
T11_external.push({
  key:"external_수찾기3_2102",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이공원에 어제 입장한 사람의 수에 오늘 입장한 412명을 더해야하는 것을 잘못하여 214명을 더하였더니 638명이 되었습니다. 바르게 계산하면 놀이공원에 어제와 오늘 입장한 사람은 모두 몇 명 입니까?",
      answer:"836",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 836, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 (2/3)를 곱해야할 것을 식을 잘못보고 (1/4)를 더하였더니 (21/5)이 ...
T11_external.push({
  key:"external_수찾기3_2103",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 (2/3)를 곱해야할 것을 식을 잘못보고 (1/4)를 더하였더니 (21/5)이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"(79/30)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (79/30), 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 7로 나누어야 할 것을 식을 잘못보고 12로 나누었더니 몫이 8이고, 나머지가 ...
T11_external.push({
  key:"external_수찾기3_2105",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 7로 나누어야 할 것을 식을 잘못보고 12로 나누었더니 몫이 8이고, 나머지가 5이었습니다. 바르게 계산하면 몫과 나머지의 차는 얼마입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [수찾기3] 집에서 슈퍼마켓까지의 거리에 슈퍼마켓에서 학교까지의 거리 263m를 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2107",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"집에서 슈퍼마켓까지의 거리에 슈퍼마켓에서 학교까지의 거리 263m를 더해야하는 것을 잘못하여 63m만 더하였더니 382가 되었습니다. 바르게 계산하면 집에서 학교까지의 거리는 몇m입니까?",
      answer:"582",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 582, 식: none"
    };
  }
});

// [수찾기3] 나래는 삼촌의 키에 자신의 키 142.6cm를 빼야하는 것을 잘못하여 26.4cm를 뺐더니...
T11_external.push({
  key:"external_수찾기3_2110",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나래는 삼촌의 키에 자신의 키 142.6cm를 빼야하는 것을 잘못하여 26.4cm를 뺐더니 161.3cm이 되었습니다. 바르게 계산하면 삼촌은 나래보다 몇 cm 더 큽니까?",
      answer:"45.1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 45.1, 식: none"
    };
  }
});

// [수찾기3] 희지네 과수원에서 딴 배의 개수에 유리네 과수원에서 딴 739개를 빼야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2111",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희지네 과수원에서 딴 배의 개수에 유리네 과수원에서 딴 739개를 빼야하는 것을 잘못하여 397개를 뺐더니 1983개가 되었습니다. 바르게 계산하면 희지네는 유리네보다 배를 몇 개 더 많이 땄습니까?",
      answer:"1641",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1641, 식: none"
    };
  }
});

// [수찾기3] 놀이공원에 월요일날 입장한 관객의 수에 수요일날 입장한 관객 482명을 더해야하는 것을 잘...
T11_external.push({
  key:"external_수찾기3_2113",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이공원에 월요일날 입장한 관객의 수에 수요일날 입장한 관객 482명을 더해야하는 것을 잘못하여 48명만 더하였더니 371이 되었습니다. 바르게 계산하면 놀이공원에 월요일과 수요일날 입장한 관객의 합은 몇 명입니까?",
      answer:"805",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 805, 식: none"
    };
  }
});

// [수찾기3] 국어책의 쪽수에 수학책 367쪽을 더해야하는 것을 잘못하여 67쪽을 더하였더니 298쪽이 ...
T11_external.push({
  key:"external_수찾기3_2114",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"국어책의 쪽수에 수학책 367쪽을 더해야하는 것을 잘못하여 67쪽을 더하였더니 298쪽이 되었습니다. 바르게 계산하면 국어책과 수학책의 쪽수를 더하면 모두 몇 쪽입니까?",
      answer:"598",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 598, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 두번 째로 큰 수를 더해야 할 것을 식을 잘못보고 두 자리 ...
T11_external.push({
  key:"external_수찾기3_2116",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 두번 째로 큰 수를 더해야 할 것을 식을 잘못보고 두 자리 수 중에서 다섯 번째로 작은 수를 더했더니 102가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"186",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 186, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 7을 곱해야할 것을 식을 잘못보고 13을 곱하였더니 139가 되었다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_2120",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 7을 곱해야할 것을 식을 잘못보고 13을 곱하였더니 139가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"74.85",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 74.85, 식: none"
    };
  }
});

// [수찾기3] 시청에 어린이날을 맞이하여 행사에 참여한 어린이의 수에서 여자 아이 295명을 빼야하는 것...
T11_external.push({
  key:"external_수찾기3_2121",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시청에 어린이날을 맞이하여 행사에 참여한 어린이의 수에서 여자 아이 295명을 빼야하는 것을 잘못하여 95명만 뺐더니 468명이 되었습니다. 바르게 계산하면 행사에 참여한 남자 아이는 몇 명입니까?",
      answer:"268",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 268, 식: none"
    };
  }
});

// [수찾기3] 호영이네 학교 운동장에 일정한 간격을 두고 8그루를 심어야 할것을 잘못하여 9그루를 심었더...
T11_external.push({
  key:"external_수찾기3_2123",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호영이네 학교 운동장에 일정한 간격을 두고 8그루를 심어야 할것을 잘못하여 9그루를 심었더니 28m 간격으로 심고 4m가 남았습니다. 바르게 계산하면 몇m 간격으로 심어야 하겠습니까?",
      answer:"32",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 32, 식: none"
    };
  }
});

// [수찾기3] 어느 농장에 돼지를 한 우리에 5마리씩 넣어야 할 것을 잘못하여 4마리씩 넣었더니 17개의...
T11_external.push({
  key:"external_수찾기3_2124",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 농장에 돼지를 한 우리에 5마리씩 넣어야 할 것을 잘못하여 4마리씩 넣었더니 17개의 우리를 사용하고 2마리의 돼지가 남았습니다. 바르게 계산하면 몇 개의 우리를 필요로 합니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [수찾기3] 종이비행기를 날리는데 승재가 날린 종이비행기의 거리에 규리가 날린 종이비행기의 거리 3.3...
T11_external.push({
  key:"external_수찾기3_2126",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"종이비행기를 날리는데 승재가 날린 종이비행기의 거리에 규리가 날린 종이비행기의 거리 3.31m를 빼야하는 것을 잘못하여 1.31m를 뺐더니 3.08m가 되었습니다. 바르게 계산하면 승재는 규리보다 몇 m 더 멀리 날렸습니까?",
      answer:"1.08",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.08, 식: none"
    };
  }
});

// [수찾기3] 귤을 7사람에게 남김없이 똑같이 나누어야 할 것을 잘못하여 6사람에게 나누었더니 11개씩 ...
T11_external.push({
  key:"external_수찾기3_2128",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"귤을 7사람에게 남김없이 똑같이 나누어야 할 것을 잘못하여 6사람에게 나누었더니 11개씩 가지고 4개의 귤이 남았습니다. 바르게 계산하면귤을 한 사람당 몇 개씩 가지게 됩니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 훈이네 학교의 2학년 전체 학생 수에 3학년 387명을 더해야하는 것을 잘못하여 87명만 ...
T11_external.push({
  key:"external_수찾기3_2129",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"훈이네 학교의 2학년 전체 학생 수에 3학년 387명을 더해야하는 것을 잘못하여 87명만 더하였더니 376명이 되었습니다. 바르게 계산하면 훈이네 학교의 2학년과 3학년은 모두 몇 명입니까?",
      answer:"676",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 676, 식: none"
    };
  }
});

// [수찾기3] 축구 동아리에 있는 사람의 수에 남자 298명을 빼야하는 것을 잘못하여 98명만 뺐더니 2...
T11_external.push({
  key:"external_수찾기3_2130",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"축구 동아리에 있는 사람의 수에 남자 298명을 빼야하는 것을 잘못하여 98명만 뺐더니 261명이 되었습니다. 바르게 계산하면 축구 동아리에 있는 여자는 몇 명입니까?",
      answer:"61",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 61, 식: none"
    };
  }
});

// [수찾기3] 윤옥이는 가지고 있는 215원에 할머니가 주신 돈을 더해야할 것을 잘못하여 뺐더니 87이 ...
T11_external.push({
  key:"external_수찾기3_2132",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤옥이는 가지고 있는 215원에 할머니가 주신 돈을 더해야할 것을 잘못하여 뺐더니 87이 되었습니다. 바르게 계산하면 윤옥이는 할머니가 주신 돈까지 합해서 얼마를 가지고 있습니까?",
      answer:"343",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 343, 식: none"
    };
  }
});

// [수찾기3] 홍희는 자신이 가지고 있는 돈에 오빠가 가지고 있는 394원을 더해야하는 것을 잘못하여 1...
T11_external.push({
  key:"external_수찾기3_2137",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"홍희는 자신이 가지고 있는 돈에 오빠가 가지고 있는 394원을 더해야하는 것을 잘못하여 194원을 더하였더니 521원이 되었습니다. 바르게 계산하면 홍희와 오빠가 가지고 있는 돈은 모두 얼마입니까?",
      answer:"721",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 721, 식: none"
    };
  }
});

// [수찾기3] 지현이는 3학년 때 몸무게에 4학년때 몸무게인 24.5kg을 빼야하는 것을 잘못하여 4.5...
T11_external.push({
  key:"external_수찾기3_2139",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지현이는 3학년 때 몸무게에 4학년때 몸무게인 24.5kg을 빼야하는 것을 잘못하여 4.5kg을 뺐더니 28.8kg이 되었습니다. 바르게 계산하면 지현이는 3학년때보다 4학년때 몸무게가 몇 kg 빠졌습니까?",
      answer:"8.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8.8, 식: none"
    };
  }
});

// [수찾기3] 도연이가 채소 가게에서 산 고구마의 무게에 감자 1.52kg을 더해야하는 것을 잘못하여 0...
T11_external.push({
  key:"external_수찾기3_2140",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도연이가 채소 가게에서 산 고구마의 무게에 감자 1.52kg을 더해야하는 것을 잘못하여 0.52kg을 더하였더니 2.13kg이 되었습니다. 바르게 계산하면 도연이가 산 채소의 무게는 모두 몇 kg입니까?",
      answer:"3.13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.13, 식: none"
    };
  }
});

// [수찾기3] 미나의 키에서 나연이의 키 143cm를 빼야하는 것을 잘못하여 43cm만 뺐더니 127cm...
T11_external.push({
  key:"external_수찾기3_2141",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미나의 키에서 나연이의 키 143cm를 빼야하는 것을 잘못하여 43cm만 뺐더니 127cm가 되었습니다. 바르게 계산하면 미나는 나연이보다 몇 cm 큽니까?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [수찾기3] 과학문제를 하루에 5문제씩 풀기로 한 것을 잘못하여 3문제씩 풀었더니 16일 동안 풀고 2...
T11_external.push({
  key:"external_수찾기3_2143",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과학문제를 하루에 5문제씩 풀기로 한 것을 잘못하여 3문제씩 풀었더니 16일 동안 풀고 2문제가 남았습니다. 바르게 계산하면 며칠 동안 문제를 풉니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 도서관에서 집까지의 거리에서 53m를 더해야 하는 것을 잘못하여 뺐더니 237이 되었습니다...
T11_external.push({
  key:"external_수찾기3_2144",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도서관에서 집까지의 거리에서 53m를 더해야 하는 것을 잘못하여 뺐더니 237이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"343",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 343, 식: none"
    };
  }
});

// [수찾기3] 도서관에서 어제 책을 빌린 학생의 수에 오늘 책을 빌린 학생 352명을 빼야하는 것을 잘못...
T11_external.push({
  key:"external_수찾기3_2145",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도서관에서 어제 책을 빌린 학생의 수에 오늘 책을 빌린 학생 352명을 빼야하는 것을 잘못하여 52명만 뺐더니 381명이 되었습니다. 바르게 계산하면 어제 책을 빌린 학생이 오늘 책을 빌린 학생보다 몇 명 더 많습니까?",
      answer:"81",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 81, 식: none"
    };
  }
});

// [수찾기3] 영진이는 자신의 키에서 누나의 키 164cm를 더해야하는 것을 잘못하여 뺏더니 19가 되었...
T11_external.push({
  key:"external_수찾기3_2147",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영진이는 자신의 키에서 누나의 키 164cm를 더해야하는 것을 잘못하여 뺏더니 19가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"347",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 347, 식: none"
    };
  }
});

// [수찾기3] 농구장에 있는 남자의 수에 여자 298명을 더해야하는 것을 잘못하여 98명만 더하였더니 3...
T11_external.push({
  key:"external_수찾기3_2149",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"농구장에 있는 남자의 수에 여자 298명을 더해야하는 것을 잘못하여 98명만 더하였더니 392명이 되었습니다. 바르게 계산하면 농구장에 있는 사람의 수는 모두 몇 명입니까?",
      answer:"592",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 592, 식: none"
    };
  }
});

// [수찾기3] 유람선에 어제 탄 관람객의 수에 오늘 탄 관람객 376명을 더해야하는 것을 잘못하여 76명...
T11_external.push({
  key:"external_수찾기3_2150",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유람선에 어제 탄 관람객의 수에 오늘 탄 관람객 376명을 더해야하는 것을 잘못하여 76명만 더하였더니 436명이 되었습니다. 바르게 계산하면 유람선에 어제와 오늘 탄 관람객은 모두 몇 명입니까?",
      answer:"736",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 736, 식: none"
    };
  }
});

// [수찾기3] 우주네 농장의 소의 전체 수에 영지네 농장의 염소의 수 32마리를 더해야하는 것을 잘못하여...
T11_external.push({
  key:"external_수찾기3_2151",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우주네 농장의 소의 전체 수에 영지네 농장의 염소의 수 32마리를 더해야하는 것을 잘못하여 23마리를 더했더니 47마리가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"56",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 56, 식: none"
    };
  }
});

// [수찾기3] 미희는 동화책을 12일 동안 다 읽어야 할 것을 잘못하여 7일 동안 읽었더니 10쪽씩 읽고...
T11_external.push({
  key:"external_수찾기3_2152",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미희는 동화책을 12일 동안 다 읽어야 할 것을 잘못하여 7일 동안 읽었더니 10쪽씩 읽고 2쪽이 남았습니다. 바르게 계산하면 하루에 몇쪽씩 읽어야 합니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 5를 곱해야 하는데 잘못하여 5를 뺐더니 120이 되었습니다. 바르게 계산한 값...
T11_external.push({
  key:"external_수찾기3_2153",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 5를 곱해야 하는데 잘못하여 5를 뺐더니 120이 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"625",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 625, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 18을 곱해야 할 것을 잘못하여 36을 더했더니 128이 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_2154",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 18을 곱해야 할 것을 잘못하여 36을 더했더니 128이 되었습니다. 바르게 계산한 값과 잘못 계산한 값의 차는 얼마인가요?",
      answer:"1528",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1528, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 3을 곱해야할 것을 식을 잘못보고 두 자리 수 중에서 네 번째로 큰 수를 뺐더니...
T11_external.push({
  key:"external_수찾기3_2156",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 3을 곱해야할 것을 식을 잘못보고 두 자리 수 중에서 네 번째로 큰 수를 뺐더니 14가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"330",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 330, 식: none"
    };
  }
});

// [수찾기3] 석형이는 32에 어떤 수를 곱해야 하는데 잘못하여 더하였더니 80이 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_2157",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이는 32에 어떤 수를 곱해야 하는데 잘못하여 더하였더니 80이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"1536",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1536, 식: none"
    };
  }
});

// [수찾기3] 효성이는 어떤 책의 가격을 7000원으로 잘못보고 2개를 골라 15000원을 냈는데 거스름...
T11_external.push({
  key:"external_수찾기3_2158",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효성이는 어떤 책의 가격을 7000원으로 잘못보고 2개를 골라 15000원을 냈는데 거스름 돈 3000원을 받았습니다. 어떤 책의 원래 가격은 얼마입니까?",
      answer:"6000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6000, 식: none"
    };
  }
});

// [수찾기3] 재현이네 농장에 있는 소의 수에 양의 수 32마리를 더해야하는 것을 잘못하여 23마리를 더...
T11_external.push({
  key:"external_수찾기3_2159",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재현이네 농장에 있는 소의 수에 양의 수 32마리를 더해야하는 것을 잘못하여 23마리를 더하였더니 67이 되었습니다. 바르게 계산하면 재현이네 농장에 있는 소와 양의 합은 몇 마리 입니까?",
      answer:"76",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 76, 식: none"
    };
  }
});

// [수찾기3] 지선이의 키에 유리의 키 165.2cm를 빼야하는 것을 잘못하여 156.2cm를 뺐더니 1...
T11_external.push({
  key:"external_수찾기3_2161",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지선이의 키에 유리의 키 165.2cm를 빼야하는 것을 잘못하여 156.2cm를 뺐더니 11.5cm가 되었습니다. 바르게 계산하면 지선이는 유리보다 몇 cm큽니까?",
      answer:"2.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2.5, 식: none"
    };
  }
});

// [수찾기3] 미라는 42에 어떤수를 곱해야할 것을 잘못하여 더하였더니 49가 되었습니다. 바르게 계산하...
T11_external.push({
  key:"external_수찾기3_2162",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미라는 42에 어떤수를 곱해야할 것을 잘못하여 더하였더니 49가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"294",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 294, 식: none"
    };
  }
});

// [수찾기3] 동물원에 있는 펭귄의 수에 물개 102마리를 더해야하는 것을 잘못하여 12마리만 더하였더니...
T11_external.push({
  key:"external_수찾기3_2165",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 있는 펭귄의 수에 물개 102마리를 더해야하는 것을 잘못하여 12마리만 더하였더니 93마리가 되었습니다. 바르게 계산하면 펭귄과 물개는 모두 몇 마리입니까?",
      answer:"183",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 183, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 4를 곱해야 할 것을 잘못하여 뺐더니 52가 되었습니다. 바르게 계산하면 얼마입...
T11_external.push({
  key:"external_수찾기3_2166",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 4를 곱해야 할 것을 잘못하여 뺐더니 52가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"224",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 224, 식: none"
    };
  }
});

// [수찾기3] 정민이가 가지고 있는 구슬의 무게에 효연이가 가지고 있는 구슬 2.31g을 더해야하는 것을...
T11_external.push({
  key:"external_수찾기3_2167",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정민이가 가지고 있는 구슬의 무게에 효연이가 가지고 있는 구슬 2.31g을 더해야하는 것을 잘못하여 1.23g을 더하였더니 2.36g이 되었습니다. 바르게 계산하면 정민이와 효연이가 가지고 있는 구슬의 무게는 모두 몇 g입니까?",
      answer:"3.44",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.44, 식: none"
    };
  }
});

// [수찾기3] 나무의 전체 갯수에서 7로 나누어야 할것을 잘못하여 더하였더니 35가 되었습니다. 바르게 ...
T11_external.push({
  key:"external_수찾기3_2168",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나무의 전체 갯수에서 7로 나누어야 할것을 잘못하여 더하였더니 35가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [수찾기3] 별 스티커를 다이어리 7개에 나누어 붙여야 할 것을 잘못하여 4개의 다이어리에 붙였더니 한...
T11_external.push({
  key:"external_수찾기3_2169",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"별 스티커를 다이어리 7개에 나누어 붙여야 할 것을 잘못하여 4개의 다이어리에 붙였더니 한 다이어리당 12개씩 붙이고 1개의 스티커가 남았습니다. 바르게 계산하면 한 다이어리당 몇 개의 스티커가 필요합니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [수찾기3] 소희는 어떤 빵의 가격을 4000원으로 잘못보고 2개를 골라 10000원을 냈는데 거스름 ...
T11_external.push({
  key:"external_수찾기3_2171",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소희는 어떤 빵의 가격을 4000원으로 잘못보고 2개를 골라 10000원을 냈는데 거스름 돈 3000원을 받았습니다. 어떤 빵의 원래 가격은 얼마입니까?",
      answer:"3500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3500, 식: none"
    };
  }
});

// [수찾기3] 극장에 있는 사람의 수에 어린이 101명을 빼야하는 것을 잘못하여 11명을 뺐더니 237명...
T11_external.push({
  key:"external_수찾기3_2172",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"극장에 있는 사람의 수에 어린이 101명을 빼야하는 것을 잘못하여 11명을 뺐더니 237명이 되었습니다. 바르게 계산하면 극장에 있는 어른은 몇 명입니까?",
      answer:"147",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 147, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 19를 곱해야 할 것을 더했더니 840이 되었습니다. 바르게 계산한 값을 구하시...
T11_external.push({
  key:"external_수찾기3_2173",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 19를 곱해야 할 것을 더했더니 840이 되었습니다. 바르게 계산한 값을 구하시오.",
      answer:"15599",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15599, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 9를 곱해야 하는데 잘못하여 더했더니 109가 되었습니다. 바르게 계산한 값은 ...
T11_external.push({
  key:"external_수찾기3_2174",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 9를 곱해야 하는데 잘못하여 더했더니 109가 되었습니다. 바르게 계산한 값은 얼마인가요?",
      answer:"900",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 900, 식: none"
    };
  }
});

// [수찾기3] 지난 일요일에 식물원에 입장한 어른의 수에 600원을 곱하고 어린이 192명에 300원을 ...
T11_external.push({
  key:"external_수찾기3_2175",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지난 일요일에 식물원에 입장한 어른의 수에 600원을 곱하고 어린이 192명에 300원을 곱해야하는 것을 잘못하여 어린이 129명에 곱하였더니 어른과 어린이의 합이 166500원이 되었습니다. 바르게 계산하면 식물원에 입장한 어른은 몇 명입니까?",
      answer:"213",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 213, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 6으로 나누어야 할 것을 잘못하여 곱하였더니 36이 되었습니다. 바르게 계산하면...
T11_external.push({
  key:"external_수찾기3_2177",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 6으로 나누어야 할 것을 잘못하여 곱하였더니 36이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"1",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1, 식: none"
    };
  }
});

// [수찾기3] 청이가 어제 외운 영어단어의 수에 오늘 외운 23개의 단어를 더해야하는 것을 잘못하여 32...
T11_external.push({
  key:"external_수찾기3_2178",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"청이가 어제 외운 영어단어의 수에 오늘 외운 23개의 단어를 더해야하는 것을 잘못하여 32개를 더하였더니 73개가 되었습니다. 바르게 계산하면 청이가 어제와 오늘 외운 영어 단어는 모두 몇 개 입니까?",
      answer:"64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 64, 식: none"
    };
  }
});

// [수찾기3] 송이는 자신이 가지고 있는 돈에 강이가 가지고 있는 돈 472원을 더해야하는 것을 잘못하여...
T11_external.push({
  key:"external_수찾기3_2179",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송이는 자신이 가지고 있는 돈에 강이가 가지고 있는 돈 472원을 더해야하는 것을 잘못하여 72원만 더하였더니 582원이 되었습니다. 바르게 계산하면 송이와 강이가 가지고 있는 돈은 모두 얼마 입니까?",
      answer:"982",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 982, 식: none"
    };
  }
});

// [수찾기3] 동물원에 수요일에 방문한 사람의 수에 토요일에 방문한 294명을 더해야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2180",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 수요일에 방문한 사람의 수에 토요일에 방문한 294명을 더해야하는 것을 잘못하여 94명만 더하였더니 231명이 되었습니다. 바르게 계산하면 동물원에 수요일과 토요일에 방문한 사람은 모두 몇 명 입니까?",
      answer:"431",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 431, 식: none"
    };
  }
});

// [수찾기3] 닭의 전체 다리 수에서 9를 곱해야할 것을 잘못하여 더하였더니 39가 되었습니다. 바르게 ...
T11_external.push({
  key:"external_수찾기3_2181",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"닭의 전체 다리 수에서 9를 곱해야할 것을 잘못하여 더하였더니 39가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"270",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 270, 식: none"
    };
  }
});

// [수찾기3] 박물관에 입장한 어른의 수에 어린이 387명을 더해야하는 것을 잘못하여 뺏더니 38명이 되...
T11_external.push({
  key:"external_수찾기3_2182",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"박물관에 입장한 어른의 수에 어린이 387명을 더해야하는 것을 잘못하여 뺏더니 38명이 되었습니다. 바르게 계산하면 박물관에 입장한 사람은 모두 몇 명입니까?",
      answer:"812",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 812, 식: none"
    };
  }
});

// [수찾기3] 학교에 있는 나무의 총 개수에서 4를 곱해야 할 것을 잘못하여 더하였더니 57이 되었습니다...
T11_external.push({
  key:"external_수찾기3_2183",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"학교에 있는 나무의 총 개수에서 4를 곱해야 할 것을 잘못하여 더하였더니 57이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"212",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 212, 식: none"
    };
  }
});

// [수찾기3] 새벽이는 자신이 가지고 있는 돈에 알리가 가지고 있는 돈 281원을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2184",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"새벽이는 자신이 가지고 있는 돈에 알리가 가지고 있는 돈 281원을 더해야하는 것을 잘못하여 81원만 더하였더니 363원이 되었습니다. 바르게 계산하면 새벽이와 알리가 가지고 있는 돈은 모두 얼마입니까?",
      answer:"563",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 563, 식: none"
    };
  }
});

// [수찾기3] 지난 토요일에 박물관에 입장한 어린이의 수에 100원을 곱하고 어른 102명에 300원을 ...
T11_external.push({
  key:"external_수찾기3_2186",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지난 토요일에 박물관에 입장한 어린이의 수에 100원을 곱하고 어른 102명에 300원을 곱해야하는 것을 잘못하여 어른 12명에 곱하였더니 어른과 어린이의 합이 13400원이 나왔습니다. 바르게 계산하면 박물관에 입장한 어린이는 몇 명입니까?",
      answer:"98",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 98, 식: none"
    };
  }
});

// [수찾기3] 원영이가 주운 빈병의 개수에 혜원이가 주운 281병을 빼야하는 것을 잘못하여 182병을 뺐...
T11_external.push({
  key:"external_수찾기3_2188",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원영이가 주운 빈병의 개수에 혜원이가 주운 281병을 빼야하는 것을 잘못하여 182병을 뺐더니 193병이 되었습니다. 바르게 계산하면 원영이는 혜원이보다 몇 병 많습니까?",
      answer:"94",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 94, 식: none"
    };
  }
});

// [수찾기3] 형수네 가족은 과수원에서 첫째날에 딴 사과에 둘째 날에 딴 사과 892개를 빼야하는 것을 ...
T11_external.push({
  key:"external_수찾기3_2191",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"형수네 가족은 과수원에서 첫째날에 딴 사과에 둘째 날에 딴 사과 892개를 빼야하는 것을 잘못하여 298개를 뺐더니 1023개가 되었습니다. 바르게 계산하면 첫째 날에는 둘째 날보다 사과를 몇 개 더 많이 땄습니까?",
      answer:"429",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 429, 식: none"
    };
  }
});

// [수찾기3] 체력장에서 달리기를 하는데 승채의 기록에서 효성이의 12.98초를 빼야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2192",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"체력장에서 달리기를 하는데 승채의 기록에서 효성이의 12.98초를 빼야하는 것을 잘못하여 2.98초를 뺐더니 14.76초가 되었습니다. 바르게 계산하면 승채는 효성이보다 몇 초 더 빨리 들어왔습니까?",
      answer:"4.76",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.76, 식: none"
    };
  }
});

// [수찾기3] 6으로 나눠야 하는 어떤 수를 식을 잘못보고 17을 뺐더니 31이 되었다. 바르게 계산하면...
T11_external.push({
  key:"external_수찾기3_2193",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6으로 나눠야 하는 어떤 수를 식을 잘못보고 17을 뺐더니 31이 되었다. 바르게 계산하면 얼마입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기3] 나은이가 운동장을 달린 거리에 건후가 운동장을 달린 거리 346m를 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2194",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나은이가 운동장을 달린 거리에 건후가 운동장을 달린 거리 346m를 더해야하는 것을 잘못하여 46m만 더하였더니 382m가 되었습니다. 바르게 계산하면 나은이와 건후가 운동장을 달린 거리는 모두 몇m입니까?",
      answer:"682",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 682, 식: none"
    };
  }
});

// [수찾기3] 아현이네 집에서 학교까지의 거리에 학교에서 병원까지의 거리 2.13km를 더해야하는 것을 ...
T11_external.push({
  key:"external_수찾기3_2195",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"아현이네 집에서 학교까지의 거리에 학교에서 병원까지의 거리 2.13km를 더해야하는 것을 잘못하여 1.32km를 더하였더니 3.73km가 되었습니다. 바르게 계산하면 아현이네 집에서 병원까지의 거리는 몇 km입니까?",
      answer:"4.54",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.54, 식: none"
    };
  }
});

// [수찾기3] 묵현이는 동생의 나이에 4를 더한 다음 2를 곱해야하는 것을 잘못하여 4만 곱하였더니 24...
T11_external.push({
  key:"external_수찾기3_2196",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"묵현이는 동생의 나이에 4를 더한 다음 2를 곱해야하는 것을 잘못하여 4만 곱하였더니 24가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [수찾기3] 미란이는 어제 줄넘기를 넘은 수에 오늘 넘은 392번의 줄넘기를 더해야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2197",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미란이는 어제 줄넘기를 넘은 수에 오늘 넘은 392번의 줄넘기를 더해야하는 것을 잘못하여 92만 더하였더니 384이 되었습니다. 바르게 계산하면 미란이가 어제와 오늘 넘은 줄넘기는 몇 번입니까?",
      answer:"684",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 684, 식: none"
    };
  }
});

// [수찾기3] 태희네 양계장의 닭의 수와 호재네 양계장의 닭의 수 234마리를 더해야하는 것을 잘못하여 ...
T11_external.push({
  key:"external_수찾기3_2198",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"태희네 양계장의 닭의 수와 호재네 양계장의 닭의 수 234마리를 더해야하는 것을 잘못하여 43마리만 더하였더니 298이 되었습니다. 바르게 계산하면 태희네와 호재네 양계장의 닭의 합은 몇 마리 입니까?",
      answer:"489",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 489, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에서 (2/3)을 빼야 하는데 식을 잘못보고 (7/6)을 뺐더니 (14/3)이 되었...
T11_external.push({
  key:"external_수찾기3_2199",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에서 (2/3)을 빼야 하는데 식을 잘못보고 (7/6)을 뺐더니 (14/3)이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"(31/6)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (31/6), 식: none"
    };
  }
});

// [수찾기3] 청군이 던진 콩주머니의 수에 백군이 던진 콩주머니 839개를 빼야하는 것을 잘못하여 93개...
T11_external.push({
  key:"external_수찾기3_2200",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"청군이 던진 콩주머니의 수에 백군이 던진 콩주머니 839개를 빼야하는 것을 잘못하여 93개만 뺐더니 896개가 되었습니다. 바르게 계산하면 청군은 백군보다 몇 개 더 많이 던졌습니까?",
      answer:"150",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 150, 식: none"
    };
  }
});

// [수찾기3] 물이 가득 들어 있는 컵의 무게에서 컵에 든 물의 반을 먹고 나서 무게를 재었을 때 나온 ...
T11_external.push({
  key:"external_수찾기3_2201",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물이 가득 들어 있는 컵의 무게에서 컵에 든 물의 반을 먹고 나서 무게를 재었을 때 나온 2.19kg를 빼야하는 것을 잘못하여 1.92kg을 뺐더니 1.85kg이 나왔습니다. 바르게 계산하면 병만의 무게는 몇 kg입니까?",
      answer:"1.58",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.58, 식: none"
    };
  }
});

// [수찾기3] 식물원에 어제 입장한 관객의 수에 오늘 입장한 관객의 수 193명을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2202",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"식물원에 어제 입장한 관객의 수에 오늘 입장한 관객의 수 193명을 더해야하는 것을 잘못하여 뺐더니 183이 되었습니다. 바르게 계산하면 식물원에 입장한 어제와 오늘의 관객수의 합은 몇 명입니까?",
      answer:"569",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 569, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 (1/4)을 빼야할 것을 식을 잘못보고 (5/2)을 더하였더니 (13/4)가 되...
T11_external.push({
  key:"external_수찾기3_2204",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 (1/4)을 빼야할 것을 식을 잘못보고 (5/2)을 더하였더니 (13/4)가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"(1/2)",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: (1/2), 식: none"
    };
  }
});

// [수찾기3] 은빈이는 용돈을 7일동안 저금통에 저금하고 200원을 더해야할 것을 잘못하여 10일동안 저...
T11_external.push({
  key:"external_수찾기3_2205",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은빈이는 용돈을 7일동안 저금통에 저금하고 200원을 더해야할 것을 잘못하여 10일동안 저금하였더니 2900원이 되었습니다. 바르게 계산하면 은빈이의 저금통에는 얼마가 있습니까?",
      answer:"2090",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2090, 식: none"
    };
  }
});

// [수찾기3] 지민이네 반에서 어제 주운 밤의 개수에 오늘 주운 387개의 밤을 더해야하는 것을 잘못하여...
T11_external.push({
  key:"external_수찾기3_2206",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지민이네 반에서 어제 주운 밤의 개수에 오늘 주운 387개의 밤을 더해야하는 것을 잘못하여 87개만 더하였더니 418개가 되었습니다. 바르게 계산하면 지민이네 반에서 어제와 오늘 주운 밤은 모두 몇 개 입니까?",
      answer:"718",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 718, 식: none"
    };
  }
});

// [수찾기3] 철승이의 키에서 아버지의 키 181cm를 더해야하는 것을 잘못하여 81만 더하였더니 275...
T11_external.push({
  key:"external_수찾기3_2207",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철승이의 키에서 아버지의 키 181cm를 더해야하는 것을 잘못하여 81만 더하였더니 275가 되었습니다. 바르게 계산하면 철승이와 아버지의 키의 합은 얼마입니까?",
      answer:"375",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 375, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 5로 나누어야 할 것을 식을 잘못보고 더하였더니 20이 되었습니다. 바르게 계산...
T11_external.push({
  key:"external_수찾기3_2208",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 5로 나누어야 할 것을 식을 잘못보고 더하였더니 20이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 8로 나누어야할 것을 식을 잘못보고 뺐더니 72가 되었다. 바르게 계산하면 얼마...
T11_external.push({
  key:"external_수찾기3_2209",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 8로 나누어야할 것을 식을 잘못보고 뺐더니 72가 되었다. 바르게 계산하면 얼마입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [수찾기3] 미영이는 동화책의 전체 쪽수에 오늘 읽은 273쪽을 빼야하는 것을 잘못하여 73쪽만 뺐더니...
T11_external.push({
  key:"external_수찾기3_2211",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미영이는 동화책의 전체 쪽수에 오늘 읽은 273쪽을 빼야하는 것을 잘못하여 73쪽만 뺐더니 483쪽이 되었습니다. 바르게 계산하면 미영이가 읽어야 할 동화책은 몇 쪽이 남았습니까?",
      answer:"283",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 283, 식: none"
    };
  }
});

// [수찾기3] 미주가 계산기에서 2를 뺀 다음 5를 곱해야 하는 것을 잘못하여 5만 더하였더니 34가 되...
T11_external.push({
  key:"external_수찾기3_2212",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미주가 계산기에서 2를 뺀 다음 5를 곱해야 하는 것을 잘못하여 5만 더하였더니 34가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"135",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 135, 식: none"
    };
  }
});

// [수찾기3] 동운이는 동화책을 12쪽 씩 읽어야 할 것을 잘못하여 7쪽씩 읽었더니 13일이 걸렸고 5쪽...
T11_external.push({
  key:"external_수찾기3_2213",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동운이는 동화책을 12쪽 씩 읽어야 할 것을 잘못하여 7쪽씩 읽었더니 13일이 걸렸고 5쪽이 남았습니다. 바르게 계산하면 동운이는 책을 다 읽는데 며칠이 걸리겠습니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [수찾기3] 오늘 야구장에 입장한 어린이의 수에 성인의 수 358명을 더해야하는 것을 잘못하여 38명만...
T11_external.push({
  key:"external_수찾기3_2214",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 야구장에 입장한 어린이의 수에 성인의 수 358명을 더해야하는 것을 잘못하여 38명만 더하였더니 287명이 되었습니다. 바르게 계산하면 오늘 야구장에 입장한 관객의 수는 몇 명 입니까?",
      answer:"607",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 607, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에서 45를 더해야 하는데 식을 잘못보고 26을 더했더니 97이 되었습니다. 바르게...
T11_external.push({
  key:"external_수찾기3_2216",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에서 45를 더해야 하는데 식을 잘못보고 26을 더했더니 97이 되었습니다. 바르게 계산한 결과를 구하시오.",
      answer:"116",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 116, 식: none"
    };
  }
});

// [수찾기3] 과자를 한봉지에 9개씩 나누어야 할것을 잘못하여 7개씩 나누었더니 11봉지가 나오고 4개의...
T11_external.push({
  key:"external_수찾기3_2217",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"과자를 한봉지에 9개씩 나누어야 할것을 잘못하여 7개씩 나누었더니 11봉지가 나오고 4개의 과자가 남았습니다. 바르게 계산하면 몇 봉지가 나옵니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [수찾기3] 동물원에 어제 입장한 관객의 수에 오늘 입장한 관객의 수 393명을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2218",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동물원에 어제 입장한 관객의 수에 오늘 입장한 관객의 수 393명을 더해야하는 것을 잘못하여 93명만 더하였더니 411이 되었습니다. 바르게 계산하면 동물원에 어제와 오늘 입장한 관객수의 합은 몇 명 입니까?",
      answer:"711",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 711, 식: none"
    };
  }
});

// [수찾기3] 76에 어떤 수를 곱해야 할 것을 잘못해서 더했더니 81이 되었습니다. 바르게 계산한 답은...
T11_external.push({
  key:"external_수찾기3_2220",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"76에 어떤 수를 곱해야 할 것을 잘못해서 더했더니 81이 되었습니다. 바르게 계산한 답은 얼마입니까?",
      answer:"380",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 380, 식: none"
    };
  }
});

// [수찾기3] 원영이는 어떤 수에 24를 곱해야할 것을 숫자를 잘못보고 42를 뺐더니 13이 되었습니다....
T11_external.push({
  key:"external_수찾기3_2221",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원영이는 어떤 수에 24를 곱해야할 것을 숫자를 잘못보고 42를 뺐더니 13이 되었습니다. 원래대로 계산했을 때의 답은 얼마입니까?",
      answer:"1320",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1320, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 2로 나누어야 할 것을 식을 잘못보고 곱하였더니 144가 되었습니다. 바르게 계...
T11_external.push({
  key:"external_수찾기3_2222",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 2로 나누어야 할 것을 식을 잘못보고 곱하였더니 144가 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [수찾기3] 튤립을 4송이 더 사야할 것을 잘못하여 10송이 덜 샀더니 전체수가 14송이가 되었습니다....
T11_external.push({
  key:"external_수찾기3_2223",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"튤립을 4송이 더 사야할 것을 잘못하여 10송이 덜 샀더니 전체수가 14송이가 되었습니다. 바르게 계산하면 튤립의 수는 얼마입니까?",
      answer:"28",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28, 식: none"
    };
  }
});

// [수찾기3] 솔지네 학교의 남학생의 수에서 여학생 수 268명을 더해야하는 것을 잘못하여 68명만 더하...
T11_external.push({
  key:"external_수찾기3_2224",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"솔지네 학교의 남학생의 수에서 여학생 수 268명을 더해야하는 것을 잘못하여 68명만 더하였더니 336명이 되었습니다. 바르게 계산하면 솔지네 학교의 전체 학생은 모두 몇 명입니까?",
      answer:"536",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 536, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 84를 곱해야 할 것을 잘못하여 더하였더니 167이 되었다. 바르게 계산한 값과...
T11_external.push({
  key:"external_수찾기3_2225",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 84를 곱해야 할 것을 잘못하여 더하였더니 167이 되었다. 바르게 계산한 값과 잘못 계산한 값의 차이를 구하시오.",
      answer:"6805",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6805, 식: none"
    };
  }
});

// [수찾기3] 효민이는 어떤 핫도그의 가격을 3500원으로 잘못보고 4개를 골라 15000원을 냈는데 거...
T11_external.push({
  key:"external_수찾기3_2226",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효민이는 어떤 핫도그의 가격을 3500원으로 잘못보고 4개를 골라 15000원을 냈는데 거스름 돈 3000원을 받았습니다. 어떤 핫도그의 원래 가격은 얼마입니까?",
      answer:"3000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3000, 식: none"
    };
  }
});

// [수찾기3] 영화관에서 영화를 보고 있는 여자의 수에 남자 102명을 더해야하는 것을 잘못하여 12명만...
T11_external.push({
  key:"external_수찾기3_2228",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영화관에서 영화를 보고 있는 여자의 수에 남자 102명을 더해야하는 것을 잘못하여 12명만 더하였더니 97명이 되었습니다. 바르게 계산하면 영화관에서 영화를 보고 있는 사람은 모두 몇 명입니까?",
      answer:"187",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 187, 식: none"
    };
  }
});

// [수찾기3] 박물관에서 기념품을 3시간 동안 만들어야 할 것을 잘못하여 2시간 동안 만들었더니 136개...
T11_external.push({
  key:"external_수찾기3_2229",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"박물관에서 기념품을 3시간 동안 만들어야 할 것을 잘못하여 2시간 동안 만들었더니 136개가 만들어졌습니다. 바르게 계산하면 박물관에서 3시간 동안 몇 개의 기념품이 만들어집니까?",
      answer:"204",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 204, 식: none"
    };
  }
});

// [수찾기3] 수잔이는 오늘까지 푼 수학문제의 수에서 내일 풀어야 할 문제 45개를 더해야하는 것을 잘못...
T11_external.push({
  key:"external_수찾기3_2230",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수잔이는 오늘까지 푼 수학문제의 수에서 내일 풀어야 할 문제 45개를 더해야하는 것을 잘못하여 32만 더했더니 193개가 되었습니다. 바르게 계산하면 수잔이가 내일까지 푸는 문제의 수는 얼마입니까?",
      answer:"206",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 206, 식: none"
    };
  }
});

// [수찾기3] 현아는 어제 읽은 국어책의 쪽수에 오늘 읽은 163쪽을 더해야하는 것을 잘못하여 63쪽만 ...
T11_external.push({
  key:"external_수찾기3_2231",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현아는 어제 읽은 국어책의 쪽수에 오늘 읽은 163쪽을 더해야하는 것을 잘못하여 63쪽만 더하였더니 219쪽이 되었습니다. 바르게 계산하면 현아가 어제와 오늘 동화책을 모두 몇 쪽 읽었습니까?",
      answer:"319",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 319, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 두 자리 수 중에서 다섯 번째로 작은 수를 곱해야 할 것을 식을 잘못보고 7을 ...
T11_external.push({
  key:"external_수찾기3_2232",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 두 자리 수 중에서 다섯 번째로 작은 수를 곱해야 할 것을 식을 잘못보고 7을 곱하였더니 63이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"126",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 126, 식: none"
    };
  }
});

// [수찾기3] 은해네 학교의 여학생의 수에 남학생 153명을 더해야하는 것을 잘못하여 15명을 뺐더니 1...
T11_external.push({
  key:"external_수찾기3_2233",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은해네 학교의 여학생의 수에 남학생 153명을 더해야하는 것을 잘못하여 15명을 뺐더니 176명이 되었습니다. 바르게 계산하면 은해네 학교의 전체 학생은 모두 몇 명입니까?",
      answer:"344",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 344, 식: none"
    };
  }
});

// [수찾기3] 카페에서 어제 판매된 커피의 수와 오늘 판매된 커피의 수 153잔을 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2235",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"카페에서 어제 판매된 커피의 수와 오늘 판매된 커피의 수 153잔을 더해야하는 것을 잘못하여 53잔만 더하였더니 301이 되었습니다. 바르게 계산하면 카페에서 어제와 오늘 판매된 커피의 합은 몇잔 입니까?",
      answer:"401",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 401, 식: none"
    };
  }
});

// [수찾기3] 수필 공장에서 어제 만든 컴퓨터의 수에 오늘 만든 354대를 더해야하는 것을 잘못하여 34...
T11_external.push({
  key:"external_수찾기3_2237",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수필 공장에서 어제 만든 컴퓨터의 수에 오늘 만든 354대를 더해야하는 것을 잘못하여 345대를 더하였더니 658이 되었습니다. 바르게 계산하면 수필 공장에서 어제와 오늘 만든 컴퓨터의 합은 몇 대 입니까?",
      answer:"667",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 667, 식: none"
    };
  }
});

// [수찾기3] 어제 호인이가 달린 거리에 미애가 달린 거리 2.95km를 빼야하는 것을 잘못하여 0.59...
T11_external.push({
  key:"external_수찾기3_2238",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어제 호인이가 달린 거리에 미애가 달린 거리 2.95km를 빼야하는 것을 잘못하여 0.59km를 뺐더니 3.18km가 되었습니다. 바르게 계산하면 호인이는 미애보다 몇 km 더 달렸습니까?",
      answer:"0.82",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.82, 식: none"
    };
  }
});

// [수찾기3] 어떤 수에 7를 곱해야 할 것을 잘못해서 더했더니 26이 되었습니다. 바르게 계산한 답은 ...
T11_external.push({
  key:"external_수찾기3_2242",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수에 7를 곱해야 할 것을 잘못해서 더했더니 26이 되었습니다. 바르게 계산한 답은 얼마입니까?",
      answer:"133",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 133, 식: none"
    };
  }
});

// [수찾기3] 하니네 학교 학생들이 소풍에서 2명씩 앉으라고 한것을 잘못하여 5명씩 앉았더니 12개의 의...
T11_external.push({
  key:"external_수찾기3_2244",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"하니네 학교 학생들이 소풍에서 2명씩 앉으라고 한것을 잘못하여 5명씩 앉았더니 12개의 의자를 사용하고 2명의 학생이 남았습니다. 바르게 계산하면 몇 개의 의자를 필요로 합니까?",
      answer:"31",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 31, 식: none"
    };
  }
});

// [수찾기3] 초콜릿을 한 봉지에 6개씩 담아야 할 것을 잘못하여 4개씩 담았더니 19봉지가 나오고 2개...
T11_external.push({
  key:"external_수찾기3_2245",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"초콜릿을 한 봉지에 6개씩 담아야 할 것을 잘못하여 4개씩 담았더니 19봉지가 나오고 2개의 초콜릿이 남았습니다. 바르게 계산하면 몇 봉지가 나옵니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [수찾기3] 놀이터에 있는 자전거의 바퀴의 갯수에서 8을 곱해야할 것을 잘못하여 더하였더니 87이 되었...
T11_external.push({
  key:"external_수찾기3_2246",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"놀이터에 있는 자전거의 바퀴의 갯수에서 8을 곱해야할 것을 잘못하여 더하였더니 87이 되었습니다. 바르게 계산하면 얼마입니까?",
      answer:"632",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 632, 식: none"
    };
  }
});

// [수찾기3] 시청에서 작년에 심은 가로수의 수에 올해 심은 342그루의 가로수를 더해야하는 것을 잘못하...
T11_external.push({
  key:"external_수찾기3_2247",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시청에서 작년에 심은 가로수의 수에 올해 심은 342그루의 가로수를 더해야하는 것을 잘못하여 234그루를 더하였더니 493이 되었습니다. 바르게 계산하면 시청에서 작년과 올해 심은 가로수의 수는 몇 그루 입니까?",
      answer:"601",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 601, 식: none"
    };
  }
});

// [수찾기3] 시현이가 가지고 있는 색 테이프에 여진이가 가지고 있는 색 테이프 2.11cm를 더해야하는...
T11_external.push({
  key:"external_수찾기3_2248",
  unitId:"m1-1-1-III-4",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시현이가 가지고 있는 색 테이프에 여진이가 가지고 있는 색 테이프 2.11cm를 더해야하는 것을 잘못하여 1.22cm를 더했더니 2.45cm이 되었습니다. 바르게 계산하면 시현이와 여진이가 가지고 있는 색 테이프는 모두 몇 cm입니까?",
      answer:"3.34",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.34, 식: none"
    };
  }
});

// [수찾기3] 어떤 수를 8로 나누어야할 것을 식을 잘못보고 9를 더하였더니 43이 되었다. 바른 답을 ...
T11_external.push({
  key:"external_수찾기3_2250",
  unitId:"m1-1-1-III-3",
  difficulty:2,
  tags:["수찾기3","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 수를 8로 나누어야할 것을 식을 잘못보고 9를 더하였더니 43이 되었다. 바른 답을 구하시오.",
      answer:"4.25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.25, 식: none"
    };
  }
});

// [크기비교] 사탕을 이용하여 저울로 무게를 재었더니 필통은 사탕 15개, 장갑은 동전 19개와 무게가 ...
T11_external.push({
  key:"external_크기비교_2251",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사탕을 이용하여 저울로 무게를 재었더니 필통은 사탕 15개, 장갑은 동전 19개와 무게가 같았습니다. 필통과 장갑 중 더 가벼운 것은 무엇입니까?",
      answer:"필통",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 필통, 식: none"
    };
  }
});

// [크기비교] 우진이가 읽으려고 하는 소설책은 140쪽, 동화책은 120쪽입니다. 소설책은 하루에 20쪽...
T11_external.push({
  key:"external_크기비교_2253",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우진이가 읽으려고 하는 소설책은 140쪽, 동화책은 120쪽입니다. 소설책은 하루에 20쪽씩, 동화책은 10쪽씩 읽는다면 3일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"동화책",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 동화책, 식: none"
    };
  }
});

// [크기비교] 영수는 숫자카드 2, 19를 가지고 있고 수민이는 숫자카드 3, 17을 가지고 있습니다. ...
T11_external.push({
  key:"external_크기비교_2256",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영수는 숫자카드 2, 19를 가지고 있고 수민이는 숫자카드 3, 17을 가지고 있습니다. 누구의 숫자 카드의 합이 더 큽니까?",
      answer:"영수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영수, 식: none"
    };
  }
});

// [크기비교] 나현이와 강연이가 리본을 잘라서 나눠가졌습니다. 나현이의 리본은 12cm, 강연이의 리본은...
T11_external.push({
  key:"external_크기비교_2257",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"나현이와 강연이가 리본을 잘라서 나눠가졌습니다. 나현이의 리본은 12cm, 강연이의 리본은 18cm일 때 누구의 리본이 더 깁니까?",
      answer:"강연",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 강연, 식: none"
    };
  }
});

// [크기비교] 현정이네 정원에 있는 은행나무의 키는 260cm이고, 대추나무의 키는 325cm입니다. 어...
T11_external.push({
  key:"external_크기비교_2258",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현정이네 정원에 있는 은행나무의 키는 260cm이고, 대추나무의 키는 325cm입니다. 어느 나무의 키가 더 큽니까?",
      answer:"대추나무",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 대추나무, 식: none"
    };
  }
});

// [크기비교] 지훈이의 키는 185cm이고, 현진이의 키는 163cm입니다. 키가 더 작은 사람은 누구입...
T11_external.push({
  key:"external_크기비교_2259",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지훈이의 키는 185cm이고, 현진이의 키는 163cm입니다. 키가 더 작은 사람은 누구입니까?",
      answer:"현진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현진, 식: none"
    };
  }
});

// [크기비교] 오늘 식당에 온 사람은 총 2540명입니다. 그 중에서 남자가 1230명일 때 여자와 남자...
T11_external.push({
  key:"external_크기비교_2260",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 식당에 온 사람은 총 2540명입니다. 그 중에서 남자가 1230명일 때 여자와 남자 중 더 많은 사람은 누구 입니까?",
      answer:"여자",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 여자, 식: none"
    };
  }
});

// [크기비교] 은영이는 5000원이 있었는데 아이스크림을 사고 500원짜리 3개를 냈습니다. 윤정이는 4...
T11_external.push({
  key:"external_크기비교_2261",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은영이는 5000원이 있었는데 아이스크림을 사고 500원짜리 3개를 냈습니다. 윤정이는 4000원이 있었는데 500원짜리 2개를 더 받았습니다. 남아있는 돈은 누가 더 많습니까?",
      answer:"윤정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤정, 식: none"
    };
  }
});

// [크기비교] 혜주는 진구보다 키가 크고, 주민이는 혜주보다 키가 크고 기민이는 주민이보다 키가 큽니다....
T11_external.push({
  key:"external_크기비교_2262",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜주는 진구보다 키가 크고, 주민이는 혜주보다 키가 크고 기민이는 주민이보다 키가 큽니다. 가장 키가 큰 사람은 누구입니까?",
      answer:"기민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 기민, 식: none"
    };
  }
});

// [크기비교] 승아네 농장에 말, 돼지, 소가 있습니다. 동물이 모두 80마리가 있을 때 말이 30, 돼...
T11_external.push({
  key:"external_크기비교_2264",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"승아네 농장에 말, 돼지, 소가 있습니다. 동물이 모두 80마리가 있을 때 말이 30, 돼지가 35마리가 있습니다. 말, 돼지 소 중에서 가장 적은 수의 동물은 무엇입니까?",
      answer:"소",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소, 식: none"
    };
  }
});

// [크기비교] 용진이네 집에서 도서관까지의 거리는 2402m, 교회까지의 거리는 3120m입니다. 도서관...
T11_external.push({
  key:"external_크기비교_2265",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"용진이네 집에서 도서관까지의 거리는 2402m, 교회까지의 거리는 3120m입니다. 도서관과 교회 중 더 가까운 곳은 어디입니까?",
      answer:"도서관",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 도서관, 식: none"
    };
  }
});

// [크기비교] 혜지가 한 달 동안 모은 돈은 8370원이고, 혜인이가 한 달 동안 모은 돈은 9270입니...
T11_external.push({
  key:"external_크기비교_2266",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜지가 한 달 동안 모은 돈은 8370원이고, 혜인이가 한 달 동안 모은 돈은 9270입니다. 혜지와 혜인이 중 한 달 동안 모은 돈이 더 많은 사람은 누구입니까?",
      answer:"혜인",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜인, 식: none"
    };
  }
});

// [크기비교] 소령이는 420개의 단어를 외우고, 가영이는 513개의 단어를 외웠습니다. 누가 더 적은 ...
T11_external.push({
  key:"external_크기비교_2267",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소령이는 420개의 단어를 외우고, 가영이는 513개의 단어를 외웠습니다. 누가 더 적은 단어를 외웠습니까?",
      answer:"소령",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소령, 식: none"
    };
  }
});

// [크기비교] 동전을 이용하여 양팔 저울로 무게를 재었더니 동화책은 동전 120개, 소설책은 동전 210...
T11_external.push({
  key:"external_크기비교_2268",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동전을 이용하여 양팔 저울로 무게를 재었더니 동화책은 동전 120개, 소설책은 동전 210개와 무게가 같았습니다. 동화책과 소설책 중에서 더 가벼운 것은 무엇입니까?",
      answer:"동화책",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 동화책, 식: none"
    };
  }
});

// [크기비교] 유희왕 딱지를 혜정이는 250장, 소희는 280장을 모았습니다. 누가 더 적게 모았습니까?...
T11_external.push({
  key:"external_크기비교_2269",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유희왕 딱지를 혜정이는 250장, 소희는 280장을 모았습니다. 누가 더 적게 모았습니까?",
      answer:"소희",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소희, 식: none"
    };
  }
});

// [크기비교] 태진이는 7300원을 저금했고, 민진이는 8450원을 저금했습니다. 누가 더 적게 저금했습...
T11_external.push({
  key:"external_크기비교_2270",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"태진이는 7300원을 저금했고, 민진이는 8450원을 저금했습니다. 누가 더 적게 저금했습니까?",
      answer:"태진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 태진, 식: none"
    };
  }
});

// [크기비교] 성규가 한 달 동안 모은 돈은 14000원 입니다. 규성이는 앞으로 한 달에 8000원씩 ...
T11_external.push({
  key:"external_크기비교_2271",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성규가 한 달 동안 모은 돈은 14000원 입니다. 규성이는 앞으로 한 달에 8000원씩 3달을 모은다고 했을 때 더 많은 돈을 모은 사람은 누구입니까?",
      answer:"규성",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 규성, 식: none"
    };
  }
});

// [크기비교] 건대입구역에서 경아네 집까지의 거리는 1780m이고, 유림이네 집까지의 거리는 2310m입...
T11_external.push({
  key:"external_크기비교_2273",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"건대입구역에서 경아네 집까지의 거리는 1780m이고, 유림이네 집까지의 거리는 2310m입니다. 건대입구역에서 누구의 집이 더 멉니까?",
      answer:"유림",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 유림, 식: none"
    };
  }
});

// [크기비교] 예지가 한 달 동안 모은 돈은 8370원이고, 예인이가 한 달 동안 모은 돈은 9270입니...
T11_external.push({
  key:"external_크기비교_2274",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예지가 한 달 동안 모은 돈은 8370원이고, 예인이가 한 달 동안 모은 돈은 9270입니다. 예지와 예인이 중 한 달 동안 모은 돈이 더 많은 사람은 누구입니까?",
      answer:"예인",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 예인, 식: none"
    };
  }
});

// [크기비교] 소민, 수현, 현진이의 발의 길이가 각각 220mm, 240mm, 235mm입니다. 발의 ...
T11_external.push({
  key:"external_크기비교_2275",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소민, 수현, 현진이의 발의 길이가 각각 220mm, 240mm, 235mm입니다. 발의 길이가 가장 짧은 사람은 누구입니까?",
      answer:"소민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소민, 식: none"
    };
  }
});

// [크기비교] 영주, 현수, 민수, 기영이가 토마토를 땄습니다. 영주는 76개, 현수는 73개, 민수는 ...
T11_external.push({
  key:"external_크기비교_2276",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영주, 현수, 민수, 기영이가 토마토를 땄습니다. 영주는 76개, 현수는 73개, 민수는 98개, 기영이는 79개의 토마토를 땄을 때 가장 적은 토마토를 딴 사람은 누구입니까?",
      answer:"현수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현수, 식: none"
    };
  }
});

// [크기비교] 세 명의 친구가 은행에서 번호표를 뽑았습니다. 장원이의 번호표는 340, 다혜의 번호표는 ...
T11_external.push({
  key:"external_크기비교_2277",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 명의 친구가 은행에서 번호표를 뽑았습니다. 장원이의 번호표는 340, 다혜의 번호표는 420, 지석이의 번호표는 376일 때 가장 먼저 번호표를 뽑은 사람은 누구입니까?",
      answer:"장원",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 장원, 식: none"
    };
  }
});

// [크기비교] 서윤이는 100원짜리 동전 8개, 10원짜리 동전 9개가 있고, 다영이는 930원이 있습니...
T11_external.push({
  key:"external_크기비교_2281",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서윤이는 100원짜리 동전 8개, 10원짜리 동전 9개가 있고, 다영이는 930원이 있습니다. 누가 돈을 더 적게 가지고 있습니까?",
      answer:"서윤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 서윤, 식: none"
    };
  }
});

// [크기비교] 영은이네 동네에 초등학교 학생은 모두 600명이고, 고등학교 학생은 모두 550명 입니다....
T11_external.push({
  key:"external_크기비교_2282",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영은이네 동네에 초등학교 학생은 모두 600명이고, 고등학교 학생은 모두 550명 입니다. 초등학교의 여학생은 340명이고, 고등학교의 여학생은 230명 일 때 남학생 수가 더 많은 학교는 어디입니까?",
      answer:"고등학교",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 고등학교, 식: none"
    };
  }
});

// [크기비교] 희정이 읽으려고 하는 동화책은 300쪽, 희아가 읽으려고 하는 동화책은 340쪽입니다. 희...
T11_external.push({
  key:"external_크기비교_2283",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희정이 읽으려고 하는 동화책은 300쪽, 희아가 읽으려고 하는 동화책은 340쪽입니다. 희정이와 희아가 하루에 30쪽씩 5일을 읽는다면, 읽지 않은 쪽수는 누가 더 많습니까?",
      answer:"희아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희아, 식: none"
    };
  }
});

// [크기비교] 현수는 연필이 12개, 지우개가 8개 있습니다. 연필을 3개, 지우개를 2개 썼습니다. 어...
T11_external.push({
  key:"external_크기비교_2284",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현수는 연필이 12개, 지우개가 8개 있습니다. 연필을 3개, 지우개를 2개 썼습니다. 어느 필기구가 더 적게 남아있습니까?",
      answer:"지우개",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지우개, 식: none"
    };
  }
});

// [크기비교] 영현이네 집에서 정류장까지는 420m, 은행까지는 518m일 때 정류장과 은행 중에서 더 ...
T11_external.push({
  key:"external_크기비교_2286",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영현이네 집에서 정류장까지는 420m, 은행까지는 518m일 때 정류장과 은행 중에서 더 가까운 곳은 어디입니까?",
      answer:"정류장",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정류장, 식: none"
    };
  }
});

// [크기비교] 주만이는 6780걸음, 민현이는 5230걸음을 걸었습니다. 누가 더 많이 걸었습니까?...
T11_external.push({
  key:"external_크기비교_2287",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주만이는 6780걸음, 민현이는 5230걸음을 걸었습니다. 누가 더 많이 걸었습니까?",
      answer:"주만",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주만, 식: none"
    };
  }
});

// [크기비교] 사과는 18개씩 묶음 6개, 배는 100개가 있습니다. 어느 과일이 더 많습니까?...
T11_external.push({
  key:"external_크기비교_2288",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사과는 18개씩 묶음 6개, 배는 100개가 있습니다. 어느 과일이 더 많습니까?",
      answer:"사과",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 사과, 식: none"
    };
  }
});

// [크기비교] 딱지를 민호는 32장, 철준이는 20장, 민정이는 10장을 가지고 있습니다. 딱지를 가장 ...
T11_external.push({
  key:"external_크기비교_2289",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딱지를 민호는 32장, 철준이는 20장, 민정이는 10장을 가지고 있습니다. 딱지를 가장 많이 가지고 있는 사람은 누구입니까?",
      answer:"민호",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민호, 식: none"
    };
  }
});

// [크기비교] 지호는 딱지를 123장, 병기는 딱지를 119장 가지고 있습니다. 딱지를 더 적게 가지고 ...
T11_external.push({
  key:"external_크기비교_2290",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지호는 딱지를 123장, 병기는 딱지를 119장 가지고 있습니다. 딱지를 더 적게 가지고 있는 사람은 누구입니까?",
      answer:"병기",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 병기, 식: none"
    };
  }
});

// [크기비교] 현지네 집에서 학교까지의 거리는 1230m, 마트까지의 거리는 3490m, 카페까지의 거리...
T11_external.push({
  key:"external_크기비교_2292",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현지네 집에서 학교까지의 거리는 1230m, 마트까지의 거리는 3490m, 카페까지의 거리는 2300m 일 때 이 중 가장 가까운 곳은 어디입니까?",
      answer:"학교",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 학교, 식: none"
    };
  }
});

// [크기비교] A산의 높이는 3420m, B산의 높이는 2120m, C산의 높이는 2310m 일 때 가장...
T11_external.push({
  key:"external_크기비교_2293",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A산의 높이는 3420m, B산의 높이는 2120m, C산의 높이는 2310m 일 때 가장 높은 산은 어디입니까?",
      answer:"A",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: A, 식: none"
    };
  }
});

// [크기비교] 혜정이는 39, 기훈이는 42, 민영이는 89가 쓰여진 숫자카드를 가지고 있습니다. 가장 ...
T11_external.push({
  key:"external_크기비교_2296",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜정이는 39, 기훈이는 42, 민영이는 89가 쓰여진 숫자카드를 가지고 있습니다. 가장 작은 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"혜정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜정, 식: none"
    };
  }
});

// [크기비교] 영섭이는 시험에서 74점을 맞았고, 호섭이는 시험에서 84점을 맞았습니다. 누가 시험에서 ...
T11_external.push({
  key:"external_크기비교_2297",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영섭이는 시험에서 74점을 맞았고, 호섭이는 시험에서 84점을 맞았습니다. 누가 시험에서 더 높은 점수를 얻었습니까?",
      answer:"호섭",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 호섭, 식: none"
    };
  }
});

// [크기비교] 갯벌에서 지연이는 조개를 76개 캤고, 서진이는 조개를 90개 캤으며 혜영이는 32개를 캤...
T11_external.push({
  key:"external_크기비교_2298",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"갯벌에서 지연이는 조개를 76개 캤고, 서진이는 조개를 90개 캤으며 혜영이는 32개를 캤습니다. 누가 조개를 가장 많이 캤습니까?",
      answer:"지연",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지연, 식: none"
    };
  }
});

// [크기비교] 복숭아는 귤보다 무겁고, 수박은 복숭아보다 무겁습니다. 가장 무거운 과일은 무엇입니까?...
T11_external.push({
  key:"external_크기비교_2299",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"복숭아는 귤보다 무겁고, 수박은 복숭아보다 무겁습니다. 가장 무거운 과일은 무엇입니까?",
      answer:"수박",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수박, 식: none"
    };
  }
});

// [크기비교] 경수가 지예보다 더 많은 구슬을 가지고있고, 유섭이가 경수보다 더 많은 구슬을 가지고 있습...
T11_external.push({
  key:"external_크기비교_2300",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경수가 지예보다 더 많은 구슬을 가지고있고, 유섭이가 경수보다 더 많은 구슬을 가지고 있습니다. 구슬을 가장 적게 가지고 있는 사람은 누구입니까?",
      answer:"지예",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지예, 식: none"
    };
  }
});

// [크기비교] 세 친구가 책을 읽고 있습니다. 아영이는 128쪽, 다현이는 146쪽, 나라는 119쪽을 ...
T11_external.push({
  key:"external_크기비교_2301",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 친구가 책을 읽고 있습니다. 아영이는 128쪽, 다현이는 146쪽, 나라는 119쪽을 읽었습니다. 누가 책을 가장 많이 읽었습니까?",
      answer:"다현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다현, 식: none"
    };
  }
});

// [크기비교] 주현이는 돈을 20000원 가지고 있고, 한 달에 2000원씩 사용합니다. 현진이는 돈을 ...
T11_external.push({
  key:"external_크기비교_2302",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주현이는 돈을 20000원 가지고 있고, 한 달에 2000원씩 사용합니다. 현진이는 돈을 10000원 가지고 있고 한 달에 3000원씩 저금합니다. 4달 후에 돈을 더 많이 가지고 있는 사람은 누구입니까?",
      answer:"현진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현진, 식: none"
    };
  }
});

// [크기비교] 어떤 과일 가게에 사과가 230개, 귤이 450개가 있습니다. 오늘 사과 100개, 귤 2...
T11_external.push({
  key:"external_크기비교_2303",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 과일 가게에 사과가 230개, 귤이 450개가 있습니다. 오늘 사과 100개, 귤 240개를 팔았습니다. 어느 과일이 더 많이 남아있습니까?",
      answer:"귤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 귤, 식: none"
    };
  }
});

// [크기비교] 트렁크에 짐을 가득 채우려면 A트럭은 15번, B트럭은 12번 이동해야 합니다. A와 B중...
T11_external.push({
  key:"external_크기비교_2304",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"트렁크에 짐을 가득 채우려면 A트럭은 15번, B트럭은 12번 이동해야 합니다. A와 B중 더 많은 짐을 이동할 수 있는 것은 무엇입니까?",
      answer:"B",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: B, 식: none"
    };
  }
});

// [크기비교] 명주는 100원짜리 동전을 3개, 10원짜리 동전을 13개 가지고 있고 영진이는 100원짜...
T11_external.push({
  key:"external_크기비교_2305",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"명주는 100원짜리 동전을 3개, 10원짜리 동전을 13개 가지고 있고 영진이는 100원짜리 동전을 4개 가지고 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"명주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 명주, 식: none"
    };
  }
});

// [크기비교] 혜진, 주원이는 우표를 모읍니다. 오늘까지 혜진이 13장씩 6묶음, 주원이는 132장을 모...
T11_external.push({
  key:"external_크기비교_2307",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜진, 주원이는 우표를 모읍니다. 오늘까지 혜진이 13장씩 6묶음, 주원이는 132장을 모았다면 우표를 더 많이 모은 사람은 누구입니까?",
      answer:"주원",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주원, 식: none"
    };
  }
});

// [크기비교] 정현이와 세은이는 각각 4200원, 5400원을 저금하였습니다. 다음 달부터 매달 정현이는...
T11_external.push({
  key:"external_크기비교_2308",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정현이와 세은이는 각각 4200원, 5400원을 저금하였습니다. 다음 달부터 매달 정현이는 300원씩, 세은이는 200원씩 저금한다면 3개월 후에는 정현이와 세은이 중 누가 더 많은 돈을 저금합니까?",
      answer:"세은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 세은, 식: none"
    };
  }
});

// [크기비교] 주은이는 지수보다 나이가 적고, 세은이는 주은이보다 나이가 적습니다. 누구의 나이가 가장 ...
T11_external.push({
  key:"external_크기비교_2310",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주은이는 지수보다 나이가 적고, 세은이는 주은이보다 나이가 적습니다. 누구의 나이가 가장 많습니까?",
      answer:"지수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지수, 식: none"
    };
  }
});

// [크기비교] 호윤이는 시장에서 당근 4/13kg과 양파 6/13kg를 사 왔습니다. 당근과 양파 중 어...
T11_external.push({
  key:"external_크기비교_2311",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호윤이는 시장에서 당근 4/13kg과 양파 6/13kg를 사 왔습니다. 당근과 양파 중 어느 것을 더 많이 샀습니까?",
      answer:"양파",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 양파, 식: none"
    };
  }
});

// [크기비교] 동은이는 지수보다 나이가 적고, 세은이는 동은이보다 나이가 적습니다. 누구의 나이가 가장 ...
T11_external.push({
  key:"external_크기비교_2312",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동은이는 지수보다 나이가 적고, 세은이는 동은이보다 나이가 적습니다. 누구의 나이가 가장 많습니까?",
      answer:"지수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지수, 식: none"
    };
  }
});

// [크기비교] 이정이는 종이를 15장씩 묶음 8개와 낱개 12장을 가지고 있고, 규진이는 종이 20장씩 ...
T11_external.push({
  key:"external_크기비교_2314",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이정이는 종이를 15장씩 묶음 8개와 낱개 12장을 가지고 있고, 규진이는 종이 20장씩 묶음 8개를 가지고 있습니다. 누구의 종이가 더 많습니까?",
      answer:"규진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 규진, 식: none"
    };
  }
});

// [크기비교] 딱지를 우정이는 231장, 민주는 223장, 현아는 240장을 가지고 있습니다. 딱지를 가...
T11_external.push({
  key:"external_크기비교_2315",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딱지를 우정이는 231장, 민주는 223장, 현아는 240장을 가지고 있습니다. 딱지를 가장 많이 가지고 있는 사람은 누구입니까?",
      answer:"현아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현아, 식: none"
    };
  }
});

// [크기비교] 두 친구가 도토리를 줍고 있습니다. 현지는 349개, 지수는 250개의 도토리를 주웠습니다...
T11_external.push({
  key:"external_크기비교_2316",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 친구가 도토리를 줍고 있습니다. 현지는 349개, 지수는 250개의 도토리를 주웠습니다. 누가 더 많이 주웠습니까?",
      answer:"현지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현지, 식: none"
    };
  }
});

// [크기비교] 수진이네 학교 학생은 모두 1000명이고, 희수네 학교 학생은 모두 1500명입니다. 수진...
T11_external.push({
  key:"external_크기비교_2317",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수진이네 학교 학생은 모두 1000명이고, 희수네 학교 학생은 모두 1500명입니다. 수진이네 학교 여학생은 500명이고 희수네 학교 여학생은 800명일 때 남학생이 더 많은 학교는 어디입니까?",
      answer:"희수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희수, 식: none"
    };
  }
});

// [크기비교] 호진이는 1000원짜리 지폐 3장과 100원짜리 동전 7개를 가지고 있고, 예진이는 350...
T11_external.push({
  key:"external_크기비교_2318",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호진이는 1000원짜리 지폐 3장과 100원짜리 동전 7개를 가지고 있고, 예진이는 3500원을 가지고 있습니다. 누가 더 많은 돈을 가지고 있습니까?",
      answer:"호진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 호진, 식: none"
    };
  }
});

// [크기비교] 민주는 색종이를 120장 가지고 있고, 윤지는 색종이를 76장 2묶음을 가지고 있습니다. ...
T11_external.push({
  key:"external_크기비교_2319",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민주는 색종이를 120장 가지고 있고, 윤지는 색종이를 76장 2묶음을 가지고 있습니다. 누가 색종이를 더 많이 가지고 있습니까?",
      answer:"윤지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤지, 식: none"
    };
  }
});

// [크기비교] 영은이의 키는 158cm이고, 준형이의 키는 180cm입니다. 누구의 키가 더 작습니까?...
T11_external.push({
  key:"external_크기비교_2320",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영은이의 키는 158cm이고, 준형이의 키는 180cm입니다. 누구의 키가 더 작습니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 수현이네 학교 학생은 모두 800명이고, 희영이네 학교 학생은 모두 900명입니다. 수현이...
T11_external.push({
  key:"external_크기비교_2322",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수현이네 학교 학생은 모두 800명이고, 희영이네 학교 학생은 모두 900명입니다. 수현이네 학교 남학생은 400명이고 희영이네 학교 남학생은 350명일 때 여학생이 더 적은 학교는 어디입니까?",
      answer:"수현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수현, 식: none"
    };
  }
});

// [크기비교] 세 친구가 책을 읽고 있습니다. 아영이는 228쪽, 다현이는 246쪽, 나희는 229쪽을 ...
T11_external.push({
  key:"external_크기비교_2323",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 친구가 책을 읽고 있습니다. 아영이는 228쪽, 다현이는 246쪽, 나희는 229쪽을 읽었습니다. 누가 책을 가장 많이 읽었습니까?",
      answer:"다현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다현, 식: none"
    };
  }
});

// [크기비교] 영수는 34, 희창이는 20, 진아는 23이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가...
T11_external.push({
  key:"external_크기비교_2324",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영수는 34, 희창이는 20, 진아는 23이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장 작은 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"희창",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희창, 식: none"
    };
  }
});

// [크기비교] 자경이네 집에서 정류장까지의 거리는 1357m, 경찰서까지의 거리는 1532m, 여행사까지...
T11_external.push({
  key:"external_크기비교_2325",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"자경이네 집에서 정류장까지의 거리는 1357m, 경찰서까지의 거리는 1532m, 여행사까지의 거리는 1278m일 때 가장 가까운 곳은 어디입니까?",
      answer:"여행사",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 여행사, 식: none"
    };
  }
});

// [크기비교] 호영이는 지우개을 6개 가지고 있고, 보성이는 지우개을 23개 가지고 있습니다. 누가 지우...
T11_external.push({
  key:"external_크기비교_2326",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호영이는 지우개을 6개 가지고 있고, 보성이는 지우개을 23개 가지고 있습니다. 누가 지우개을 더 많이 가지고 있습니까?",
      answer:"보성",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 보성, 식: none"
    };
  }
});

// [크기비교] 수지, 필수, 평화는 달리기를 하였습니다. 같은 시간 동안 수지는 100m, 필수는 132...
T11_external.push({
  key:"external_크기비교_2328",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수지, 필수, 평화는 달리기를 하였습니다. 같은 시간 동안 수지는 100m, 필수는 132m, 평화는 98m를 달렸다고 할 때 누가 가장 빠릅니까?",
      answer:"필수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 필수, 식: none"
    };
  }
});

// [크기비교] 장원이가 가지고 있는 피아노의 가로의 길이는 200cm, 세로의 길이는 300cm입니다. ...
T11_external.push({
  key:"external_크기비교_2329",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"장원이가 가지고 있는 피아노의 가로의 길이는 200cm, 세로의 길이는 300cm입니다. 가로와 세로중에서 어느 쪽이 더 깁니까?",
      answer:"세로",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 세로, 식: none"
    };
  }
});

// [크기비교] 우영이가 읽으려고 하는 만화책은 240쪽, 동화책은 120쪽입니다. 만화책은 하루에 20쪽...
T11_external.push({
  key:"external_크기비교_2331",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우영이가 읽으려고 하는 만화책은 240쪽, 동화책은 120쪽입니다. 만화책은 하루에 20쪽씩, 동화책은 10쪽씩 읽는다면 4일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"만화책",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 만화책, 식: none"
    };
  }
});

// [크기비교] 캐릭터 딱지를 예준이는 298장, 소휘는 310장을 모았습니다. 누가 더 많이 모았습니까?...
T11_external.push({
  key:"external_크기비교_2332",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 예준이는 298장, 소휘는 310장을 모았습니다. 누가 더 많이 모았습니까?",
      answer:"소휘",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소휘, 식: none"
    };
  }
});

// [크기비교] 진호는 1000원짜리 지폐 4장과 100원짜리 동전 8개를 가지고 있고, 현주는 5000원...
T11_external.push({
  key:"external_크기비교_2333",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진호는 1000원짜리 지폐 4장과 100원짜리 동전 8개를 가지고 있고, 현주는 5000원을 가지고 있습니다. 누가 더 많은 돈을 가지고 있습니까?",
      answer:"현주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현주, 식: none"
    };
  }
});

// [크기비교] 은영이네 학교 학년별 학생 수를 조사하였습니다. 은영이네 학교의 총 학생 수는 1200명이...
T11_external.push({
  key:"external_크기비교_2334",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은영이네 학교 학년별 학생 수를 조사하였습니다. 은영이네 학교의 총 학생 수는 1200명이고 3학년까지 있으며 1학년 학생 수는 500, 2학년 학생 수는 450명 일 때,가장 적은 학생이 있는 학년은 몇학년 입니까?",
      answer:"3학년",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3학년, 식: none"
    };
  }
});

// [크기비교] 지우개를 민영이는 42장, 보현이는 22장, 혜임이는 19장을 가지고 있습니다. 지우개를 ...
T11_external.push({
  key:"external_크기비교_2335",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지우개를 민영이는 42장, 보현이는 22장, 혜임이는 19장을 가지고 있습니다. 지우개를 가장 많이 가지고 있는 사람은 누구입니까?",
      answer:"민영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민영, 식: none"
    };
  }
});

// [크기비교] 서윤이는 국어 시험지의 30 문제 중에서 14문제를 풀었고, 다영이는 16문제를 풀었습니다...
T11_external.push({
  key:"external_크기비교_2336",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서윤이는 국어 시험지의 30 문제 중에서 14문제를 풀었고, 다영이는 16문제를 풀었습니다. 누가 더 많이 풀었습니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 현빈이는 색종이를 170장 가지고 있고, 정아는 194장 가지고 있습니다. 누가 색종이를 ...
T11_external.push({
  key:"external_크기비교_2337",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현빈이는 색종이를 170장 가지고 있고, 정아는 194장 가지고 있습니다. 누가 색종이를 더 많이 가지고 있습니까?",
      answer:"정아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정아, 식: none"
    };
  }
});

// [크기비교] 두 친구가 밤을 줍고 있습니다. 지현이는 254개, 주아는 310개를 주웠습니다. 누가 더...
T11_external.push({
  key:"external_크기비교_2338",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 친구가 밤을 줍고 있습니다. 지현이는 254개, 주아는 310개를 주웠습니다. 누가 더 적게 주웠습니까?",
      answer:"지현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지현, 식: none"
    };
  }
});

// [크기비교] 서윤이는 영어 시험지의 30 문제 중에서 24문제를 풀었고, 다영이는 21문제를 풀었습니다...
T11_external.push({
  key:"external_크기비교_2339",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서윤이는 영어 시험지의 30 문제 중에서 24문제를 풀었고, 다영이는 21문제를 풀었습니다. 누가 더 적게 풀었습니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 동휘와 호연이는 수 카드를 두 장씩 가지고 있습니다. 동휘의 숫자카드는 120, 340이고...
T11_external.push({
  key:"external_크기비교_2340",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동휘와 호연이는 수 카드를 두 장씩 가지고 있습니다. 동휘의 숫자카드는 120, 340이고 호연이의 숫자 카드는 210, 134일 때 누가 가진 숫자 카드의 합이 더 큽니까?",
      answer:"동휘",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 동휘, 식: none"
    };
  }
});

// [크기비교] 수정이와 혜준이는 우표를 모읍니다. 오늘까지 수정이는 10장씩 8묶음, 혜준이는 11장씩 ...
T11_external.push({
  key:"external_크기비교_2342",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수정이와 혜준이는 우표를 모읍니다. 오늘까지 수정이는 10장씩 8묶음, 혜준이는 11장씩 6묶음을 모았다면 우표를 더 많이 모은 사람은 누구입니까?",
      answer:"수정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수정, 식: none"
    };
  }
});

// [크기비교] 수현이네 학교 학생은 모두 1500명이고, 희영이네 학교 학생은 모두 2000명입니다. 수...
T11_external.push({
  key:"external_크기비교_2343",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수현이네 학교 학생은 모두 1500명이고, 희영이네 학교 학생은 모두 2000명입니다. 수현이네 학교 남학생은 782명이고 희영이네 학교 남학생은 1200명일 때 여학생이 더 적은 학교는 어디입니까?",
      answer:"수현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수현, 식: none"
    };
  }
});

// [크기비교] 영은이네 반에는 위인전이 120권, 동화책이 203권 있습니다. 위인전과 동화책 중에서 어...
T11_external.push({
  key:"external_크기비교_2344",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영은이네 반에는 위인전이 120권, 동화책이 203권 있습니다. 위인전과 동화책 중에서 어느 것이 더 적습니까?",
      answer:"위인전",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 위인전, 식: none"
    };
  }
});

// [크기비교] 현무와 혜성이는 수 카드를 두 장씩 가지고 있습니다. 현무의 숫자 카드는 12, 40이고 ...
T11_external.push({
  key:"external_크기비교_2345",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현무와 혜성이는 수 카드를 두 장씩 가지고 있습니다. 현무의 숫자 카드는 12, 40이고 혜성이의 숫자 카드는 21, 34 일 때 누가 가진 숫자 카드의 합이 더 큽니까?",
      answer:"현무",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현무, 식: none"
    };
  }
});

// [크기비교] 민주네 반 학생 수는 35명이고, 현아네 반 학생 수는 32명입니다. 누구의 반에 학생 수...
T11_external.push({
  key:"external_크기비교_2346",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민주네 반 학생 수는 35명이고, 현아네 반 학생 수는 32명입니다. 누구의 반에 학생 수가 더 많습니까?",
      answer:"민주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민주, 식: none"
    };
  }
});

// [크기비교] 형주는 물을 아침에 200ml, 점심에 400ml, 저녁에 500ml 마셨습니다. 형주는 ...
T11_external.push({
  key:"external_크기비교_2347",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"형주는 물을 아침에 200ml, 점심에 400ml, 저녁에 500ml 마셨습니다. 형주는 하루 중 언제 물을 가장 많이 마셨습니까?",
      answer:"저녁",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 저녁, 식: none"
    };
  }
});

// [크기비교] 바닷가 갯벌에서 수아이 조개를 134개 캤고, 규성이는 129개 캤을 때 조개를 더 적게 ...
T11_external.push({
  key:"external_크기비교_2348",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"바닷가 갯벌에서 수아이 조개를 134개 캤고, 규성이는 129개 캤을 때 조개를 더 적게 캔 사람은 누구입니까?",
      answer:"규성",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 규성, 식: none"
    };
  }
});

// [크기비교] 영후는 100원짜리 동전 3개, 50원짜리 동전 3개를 가지고 있고, 지현이는 500원이 ...
T11_external.push({
  key:"external_크기비교_2350",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영후는 100원짜리 동전 3개, 50원짜리 동전 3개를 가지고 있고, 지현이는 500원이 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"지현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지현, 식: none"
    };
  }
});

// [크기비교] 선예는 우표 180장을 모았고, 주진이는 290장을 모았을 때 우표를 더 많이 모은 사람이...
T11_external.push({
  key:"external_크기비교_2351",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선예는 우표 180장을 모았고, 주진이는 290장을 모았을 때 우표를 더 많이 모은 사람이 누구입니까?",
      answer:"주진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주진, 식: none"
    };
  }
});

// [크기비교] 물통에 환경, 우미, 미정이가 물을 가득 채웠습니다. 환경이는 14컵, 우미는 12컵, 미...
T11_external.push({
  key:"external_크기비교_2353",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물통에 환경, 우미, 미정이가 물을 가득 채웠습니다. 환경이는 14컵, 우미는 12컵, 미정이는 15컵을 사용 하였을 때 누구의 컵이 가장 큽니까?",
      answer:"우미",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 우미, 식: none"
    };
  }
});

// [크기비교] 지훈이는 수희보다 무겁고, 다영이는 수희보다 가볍습니다. 가장 가벼운 사람은 누구입니까?...
T11_external.push({
  key:"external_크기비교_2354",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지훈이는 수희보다 무겁고, 다영이는 수희보다 가볍습니다. 가장 가벼운 사람은 누구입니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 다영이의 키는 145.7cm이고, 남걸이의 키는 167.3cm일 때 누구의 키가 더 작습니...
T11_external.push({
  key:"external_크기비교_2355",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다영이의 키는 145.7cm이고, 남걸이의 키는 167.3cm일 때 누구의 키가 더 작습니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 지섭이의 나이는 40살, 동건이의 나이는 36살입니다. 누구의 나이가 더 많습니까?...
T11_external.push({
  key:"external_크기비교_2356",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지섭이의 나이는 40살, 동건이의 나이는 36살입니다. 누구의 나이가 더 많습니까?",
      answer:"지섭",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지섭, 식: none"
    };
  }
});

// [크기비교] 집안 장소별 세균 수를 조사하였습니다. 세균 수가 씽크대에는 27800마리, 전화기에는 1...
T11_external.push({
  key:"external_크기비교_2357",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"집안 장소별 세균 수를 조사하였습니다. 세균 수가 씽크대에는 27800마리, 전화기에는 186000마리, 변기에는 64500마리가 있습니다. 세균이 가장 많은 곳은 어디입니까?",
      answer:"전화기",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 전화기, 식: none"
    };
  }
});

// [크기비교] 서윤이의 키는 167cm이고, 범준이의 키는 173cm입니다. 누구의 키가 더 큽니까?...
T11_external.push({
  key:"external_크기비교_2359",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서윤이의 키는 167cm이고, 범준이의 키는 173cm입니다. 누구의 키가 더 큽니까?",
      answer:"범준",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 범준, 식: none"
    };
  }
});

// [크기비교] 현준이는 4200원을 저금했고, 진영이는 5600원을 저금했습니다. 누가 더 적게 저금했습...
T11_external.push({
  key:"external_크기비교_2360",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현준이는 4200원을 저금했고, 진영이는 5600원을 저금했습니다. 누가 더 적게 저금했습니까?",
      answer:"현준",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현준, 식: none"
    };
  }
});

// [크기비교] 유현이가 가진 리본의 길이는 100m입니다. 1/2는 잘라서 영은이를 주고, 1/4는 영진...
T11_external.push({
  key:"external_크기비교_2361",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유현이가 가진 리본의 길이는 100m입니다. 1/2는 잘라서 영은이를 주고, 1/4는 영진이를 줬을 때 영은이와 영진이의 리본 중 누구의 리본의 길이가 더 깁니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 줄넘기를 준원이는 82번 넘었고, 민아는 56번 넘었습니다. 누가 줄넘기를 더 많이 넘었습...
T11_external.push({
  key:"external_크기비교_2362",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"줄넘기를 준원이는 82번 넘었고, 민아는 56번 넘었습니다. 누가 줄넘기를 더 많이 넘었습니까?",
      answer:"준원",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 준원, 식: none"
    };
  }
});

// [크기비교] 선욱이는 테이프 17.9cm를 가지고 있고, 화섭이는 테이프 23.8cm를 가지고 있습니다...
T11_external.push({
  key:"external_크기비교_2363",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선욱이는 테이프 17.9cm를 가지고 있고, 화섭이는 테이프 23.8cm를 가지고 있습니다. 누구의 테이프가 더 깁니까?",
      answer:"선욱",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 선욱, 식: none"
    };
  }
});

// [크기비교] 오늘 식당에 온 사람은 총 2540명입니다. 그 중에서 남자가 1160명일 때 여자와 남자...
T11_external.push({
  key:"external_크기비교_2366",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 식당에 온 사람은 총 2540명입니다. 그 중에서 남자가 1160명일 때 여자와 남자 중 더 적은 사람은 누구 입니까?",
      answer:"남자",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 남자, 식: none"
    };
  }
});

// [크기비교] 캐릭터 딱지를 영은이는 3425장, 진민이는 3241장 모았습니다. 누가 더 많이 모았습니...
T11_external.push({
  key:"external_크기비교_2367",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 영은이는 3425장, 진민이는 3241장 모았습니다. 누가 더 많이 모았습니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 주혁이가 한 달 동안 모은 돈은 7760원이고, 민혁이가 모은 돈은 12330원입니다. 한...
T11_external.push({
  key:"external_크기비교_2368",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주혁이가 한 달 동안 모은 돈은 7760원이고, 민혁이가 모은 돈은 12330원입니다. 한 달 동안 더 많은 돈을 모은 친구는 누구입니까?",
      answer:"민혁",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민혁, 식: none"
    };
  }
});

// [크기비교] 캐릭터 딱지를 영은이는 2425장, 진민이는 2241장 모았습니다. 누가 더 많이 모았습니...
T11_external.push({
  key:"external_크기비교_2369",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 영은이는 2425장, 진민이는 2241장 모았습니다. 누가 더 많이 모았습니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 수진이네 학교 학생은 모두 952명이고, 희수네 학교 학생은 모두 1490명입니다. 수진이...
T11_external.push({
  key:"external_크기비교_2370",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수진이네 학교 학생은 모두 952명이고, 희수네 학교 학생은 모두 1490명입니다. 수진이네 학교 여학생은 400명이고 희수네 학교 여학생은 800명일 때 남학생이 더 많은 학교는 어디입니까?",
      answer:"희수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희수, 식: none"
    };
  }
});

// [크기비교] 우기네 집에서 교회까지의 거리는 780m, 마트까지의 거리는 1750m, 도서관까지의 거리...
T11_external.push({
  key:"external_크기비교_2371",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우기네 집에서 교회까지의 거리는 780m, 마트까지의 거리는 1750m, 도서관까지의 거리는 1300m 일 때 이 중 가장 가까운 곳은 어디입니까?",
      answer:"교회",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 교회, 식: none"
    };
  }
});

// [크기비교] 오늘 도서관에 온 사람은 총 1540명입니다. 그 중에서 남자가 780명일 때 여자와 남자...
T11_external.push({
  key:"external_크기비교_2372",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 도서관에 온 사람은 총 1540명입니다. 그 중에서 남자가 780명일 때 여자와 남자 중 더 많은 사람은 누구 입니까?",
      answer:"남자",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 남자, 식: none"
    };
  }
});

// [크기비교] 주휘는 사탕을 14개씩 3묶음과 낱개 9개를 가지고 있고, 민영이는 사탕을 65개를 가지고...
T11_external.push({
  key:"external_크기비교_2373",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주휘는 사탕을 14개씩 3묶음과 낱개 9개를 가지고 있고, 민영이는 사탕을 65개를 가지고 있습니다. 누가 사탕을 더 많이 가지고 있습니까?",
      answer:"민영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민영, 식: none"
    };
  }
});

// [크기비교] 수민이와 우형이가 줄넘기를 한 횟수를 기록하였더니 수민이는 14320회, 우형이는 1231...
T11_external.push({
  key:"external_크기비교_2374",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수민이와 우형이가 줄넘기를 한 횟수를 기록하였더니 수민이는 14320회, 우형이는 12310회였습니다. 누가 더 많이 했습니까?",
      answer:"수민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수민, 식: none"
    };
  }
});

// [크기비교] 동전을 이용하여 양팔 저울로 무게를 재었더니 양파은 동전 36개, 감자는 동전 48개와 무...
T11_external.push({
  key:"external_크기비교_2375",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동전을 이용하여 양팔 저울로 무게를 재었더니 양파은 동전 36개, 감자는 동전 48개와 무게가 같았습니다. 양파와 감자 중에서 더 무거운 것은 무엇입니까?",
      answer:"감자",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 감자, 식: none"
    };
  }
});

// [크기비교] 지호는 딱지를 112장, 현수는 딱지를 119장 가지고 있습니다. 딱지를 더 많이 가지고 ...
T11_external.push({
  key:"external_크기비교_2376",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지호는 딱지를 112장, 현수는 딱지를 119장 가지고 있습니다. 딱지를 더 많이 가지고 있는 사람은 누구입니까?",
      answer:"현수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현수, 식: none"
    };
  }
});

// [크기비교] 선주는 지환이보다 무겁고, 우진이는 선주보다 무겁습니다. 지은이가 지환이보다 가볍다면 가장...
T11_external.push({
  key:"external_크기비교_2377",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선주는 지환이보다 무겁고, 우진이는 선주보다 무겁습니다. 지은이가 지환이보다 가볍다면 가장 가벼운 사람은 누구입니까?",
      answer:"지은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지은, 식: none"
    };
  }
});

// [크기비교] 지수는 4000원을 4일 동안 저금했고, 지영이는 7500원을 3일 동안 저금했습니다. 하...
T11_external.push({
  key:"external_크기비교_2380",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지수는 4000원을 4일 동안 저금했고, 지영이는 7500원을 3일 동안 저금했습니다. 하루동안 저금한 금액은 누가 더 많습니까?",
      answer:"지영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지영, 식: none"
    };
  }
});

// [크기비교] 재석이는 276개의 밤을 줍고, 광수는 340개의 밤을 주웠습니다. 누가 더 많이 주웠습니...
T11_external.push({
  key:"external_크기비교_2383",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재석이는 276개의 밤을 줍고, 광수는 340개의 밤을 주웠습니다. 누가 더 많이 주웠습니까?",
      answer:"광수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 광수, 식: none"
    };
  }
});

// [크기비교] 효정이네 집에서 학교까지는 2039걸음, 효정이네 집에서 병원까지는 1340걸음 입니다. ...
T11_external.push({
  key:"external_크기비교_2384",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"효정이네 집에서 학교까지는 2039걸음, 효정이네 집에서 병원까지는 1340걸음 입니다. 학교와 병원 중에서 효정이네 집에서 더 먼 곳은 어디입니까?",
      answer:"학교",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 학교, 식: none"
    };
  }
});

// [크기비교] 석훈이는 1000원짜리 지폐 7장을 가지고 있고, 정연이는 100원짜리 동전 65개와 10...
T11_external.push({
  key:"external_크기비교_2385",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석훈이는 1000원짜리 지폐 7장을 가지고 있고, 정연이는 100원짜리 동전 65개와 10원짜리 동전 40개를 가지고 있습니다. 석훈이와 정연이 중 누가 돈을 더 적게 가지고 있습니까?",
      answer:"정연",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정연, 식: none"
    };
  }
});

// [크기비교] 서윤이는 국어 시험지의 40 문제 중에서 17문제를 풀었고, 다영이는 27문제를 풀었습니다...
T11_external.push({
  key:"external_크기비교_2386",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서윤이는 국어 시험지의 40 문제 중에서 17문제를 풀었고, 다영이는 27문제를 풀었습니다. 누가 더 많이 풀었습니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 공원에 어린이가 435명 있습니다. 그 중에서 여자 어린이가 280명 일 때 여자 어린이와...
T11_external.push({
  key:"external_크기비교_2388",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공원에 어린이가 435명 있습니다. 그 중에서 여자 어린이가 280명 일 때 여자 어린이와 남자 어린이 중 누가 더 많이 있습니까?",
      answer:"여자",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 여자, 식: none"
    };
  }
});

// [크기비교] 가지는 귤보다 무겁고, 복숭아는 가지보다 무겁습니다. 가장 무거운 것은 어느 것입니까?...
T11_external.push({
  key:"external_크기비교_2390",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가지는 귤보다 무겁고, 복숭아는 가지보다 무겁습니다. 가장 무거운 것은 어느 것입니까?",
      answer:"복숭아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 복숭아, 식: none"
    };
  }
});

// [크기비교] 혁준이네 집에는 책이 45권 있고, 효석이네 집에는 책이 44권 있습니다. 누구네 집에 책...
T11_external.push({
  key:"external_크기비교_2391",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혁준이네 집에는 책이 45권 있고, 효석이네 집에는 책이 44권 있습니다. 누구네 집에 책이 더 많습니까?",
      answer:"혁준",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혁준, 식: none"
    };
  }
});

// [크기비교] 라엘이가 가지고 있는 가방의 가로의 길이는 25cm, 세로의 길이는 43cm입니다. 가로와...
T11_external.push({
  key:"external_크기비교_2392",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"라엘이가 가지고 있는 가방의 가로의 길이는 25cm, 세로의 길이는 43cm입니다. 가로와 세로 중에서 어느 쪽이 더 깁니까?",
      answer:"세로",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 세로, 식: none"
    };
  }
});

// [크기비교] 두 친구가 도토리를 줍고 있습니다. 현지는 140개, 지수는 250개의 도토리를 주웠습니다...
T11_external.push({
  key:"external_크기비교_2393",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 친구가 도토리를 줍고 있습니다. 현지는 140개, 지수는 250개의 도토리를 주웠습니다. 누가 더 많이 주웠습니까?",
      answer:"지수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지수, 식: none"
    };
  }
});

// [크기비교] 진현이는 색종이를 60장, 구현이는 색종이를 12장 3묶음 가지고 있을 때 누구의 색종이가...
T11_external.push({
  key:"external_크기비교_2394",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진현이는 색종이를 60장, 구현이는 색종이를 12장 3묶음 가지고 있을 때 누구의 색종이가 더 적습니까?",
      answer:"구현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 구현, 식: none"
    };
  }
});

// [크기비교] 진민이는 색종이를 590장, 민정이는 색종이를 100장 5묶음 가지고 있을 때 누구의 색종...
T11_external.push({
  key:"external_크기비교_2395",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진민이는 색종이를 590장, 민정이는 색종이를 100장 5묶음 가지고 있을 때 누구의 색종이가 더 많습니까?",
      answer:"민정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민정, 식: none"
    };
  }
});

// [크기비교] 소진이는 색종이를 1143장 가지고 있고, 수민이는 1132장 가지고 있습니다. 누가 색종...
T11_external.push({
  key:"external_크기비교_2396",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소진이는 색종이를 1143장 가지고 있고, 수민이는 1132장 가지고 있습니다. 누가 색종이를 더 적게 가지고 있습니까?",
      answer:"수민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수민, 식: none"
    };
  }
});

// [크기비교] 혜성이는 1130원을 가지고 있고, 지석이는 100원짜리 동전 11개를 가지고 있습니다. ...
T11_external.push({
  key:"external_크기비교_2398",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜성이는 1130원을 가지고 있고, 지석이는 100원짜리 동전 11개를 가지고 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"혜성",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜성, 식: none"
    };
  }
});

// [크기비교] 지훈이의 키는 183cm이고, 현진이의 키는 172cm입니다. 키가 더 작은 사람은 누구입...
T11_external.push({
  key:"external_크기비교_2400",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지훈이의 키는 183cm이고, 현진이의 키는 172cm입니다. 키가 더 작은 사람은 누구입니까?",
      answer:"현진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현진, 식: none"
    };
  }
});

// [크기비교] 호민이는 동전을 6개 가지고 있고, 보현이는 동전을 23개 가지고 있습니다. 누가 동전을 ...
T11_external.push({
  key:"external_크기비교_2401",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호민이는 동전을 6개 가지고 있고, 보현이는 동전을 23개 가지고 있습니다. 누가 동전을 더 많이 가지고 있습니까?",
      answer:"보현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 보현, 식: none"
    };
  }
});

// [크기비교] 본길이와 상욱이는 게임을 하였습니다. 본길이는 520점을 획득하였고, 상욱이는 480점을 ...
T11_external.push({
  key:"external_크기비교_2402",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"본길이와 상욱이는 게임을 하였습니다. 본길이는 520점을 획득하였고, 상욱이는 480점을 획득하였습니다. 누가 더 많은 점수를 획득 하였습니까?",
      answer:"본길",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 본길, 식: none"
    };
  }
});

// [크기비교] 선미는 우표 430장을 모았고, 진현이는 340장을 모았을 때 우표를 더 많이 모은 사람이...
T11_external.push({
  key:"external_크기비교_2405",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선미는 우표 430장을 모았고, 진현이는 340장을 모았을 때 우표를 더 많이 모은 사람이 누구입니까?",
      answer:"선미",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 선미, 식: none"
    };
  }
});

// [크기비교] 재용이네 집에서 학교까지의 거리는 3520m, 교회까지의 거리는 3120m입니다. 학교과 ...
T11_external.push({
  key:"external_크기비교_2406",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재용이네 집에서 학교까지의 거리는 3520m, 교회까지의 거리는 3120m입니다. 학교과 교회 중 더 가까운 곳은 어디입니까?",
      answer:"교회",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 교회, 식: none"
    };
  }
});

// [크기비교] 은영이와 시윤이가 숫자 카드 놀이를 하고 있습니다. 은영이는 178에서 149를 더한 수를...
T11_external.push({
  key:"external_크기비교_2407",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은영이와 시윤이가 숫자 카드 놀이를 하고 있습니다. 은영이는 178에서 149를 더한 수를, 시윤이는 713에서 356을 뺀 수를 가지고 있을 때 누구의 숫자 카드가 더 큽니까?",
      answer:"시윤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 시윤, 식: none"
    };
  }
});

// [크기비교] 호민이는 동전을 17개 가지고 있고, 보현이는 동전을 25개 가지고 있습니다. 누가 동전을...
T11_external.push({
  key:"external_크기비교_2408",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호민이는 동전을 17개 가지고 있고, 보현이는 동전을 25개 가지고 있습니다. 누가 동전을 더 적게 가지고 있습니까?",
      answer:"호민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 호민, 식: none"
    };
  }
});

// [크기비교] 세 명의 친구가 은행에서 번호표를 뽑았습니다. 영수는 510, 진수는 498, 민아는 51...
T11_external.push({
  key:"external_크기비교_2409",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 명의 친구가 은행에서 번호표를 뽑았습니다. 영수는 510, 진수는 498, 민아는 514를 뽑았을 때 누가 가장 먼저 번호표를 뽑았습니까?",
      answer:"진수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진수, 식: none"
    };
  }
});

// [크기비교] 민지는 26, 준하는 30, 영수는 51이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장...
T11_external.push({
  key:"external_크기비교_2410",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민지는 26, 준하는 30, 영수는 51이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장 작은 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"민지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민지, 식: none"
    };
  }
});

// [크기비교] 영수는 34, 희창이는 20, 진아는 23이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가...
T11_external.push({
  key:"external_크기비교_2411",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영수는 34, 희창이는 20, 진아는 23이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장 큰 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"영수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영수, 식: none"
    };
  }
});

// [크기비교] 공깃돌을 서윤이는 124개, 민주는 20개 가지고 있었습니다. 서윤이가 민주에게 50개를 ...
T11_external.push({
  key:"external_크기비교_2412",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공깃돌을 서윤이는 124개, 민주는 20개 가지고 있었습니다. 서윤이가 민주에게 50개를 주었을 때 공깃돌을 더 많이 가지고 있는 사람은 누구입니까?",
      answer:"서윤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 서윤, 식: none"
    };
  }
});

// [크기비교] 인정이와 정민이는 수 카드를 한 장씩 가지고 있습니다. 인정이의 수 카드는 622이고, 정...
T11_external.push({
  key:"external_크기비교_2413",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인정이와 정민이는 수 카드를 한 장씩 가지고 있습니다. 인정이의 수 카드는 622이고, 정민이의 수 카드는 549입니다, 누가 가진 수 카드의 숫자가 더 작습니까?",
      answer:"정민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정민, 식: none"
    };
  }
});

// [크기비교] 재용이네 집에서 은행까지의 거리는 13420m이고 정류장까지의 거리는 14203m입니다. ...
T11_external.push({
  key:"external_크기비교_2415",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재용이네 집에서 은행까지의 거리는 13420m이고 정류장까지의 거리는 14203m입니다. 은행과 정류장 중에서 어느 곳이 더 가깝습니까?",
      answer:"은행",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 은행, 식: none"
    };
  }
});

// [크기비교] 지우개를 미주는 15개를 가지고 있고 소희는 17개 가지고 있습니다. 누가 지우개를 더 많...
T11_external.push({
  key:"external_크기비교_2416",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지우개를 미주는 15개를 가지고 있고 소희는 17개 가지고 있습니다. 누가 지우개를 더 많이 가지고 있습니까?",
      answer:"소희",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소희, 식: none"
    };
  }
});

// [크기비교] 윤아의 키는 168.7cm이고, 지민이의 키는 179.8cm일 때 누구의 키가 더 작습니까...
T11_external.push({
  key:"external_크기비교_2417",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤아의 키는 168.7cm이고, 지민이의 키는 179.8cm일 때 누구의 키가 더 작습니까?",
      answer:"윤아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤아, 식: none"
    };
  }
});

// [크기비교] 색종이를 소진이는 143장 가지고 있고, 종수는 132장 가지고 있습니다. 누가 색종이를 ...
T11_external.push({
  key:"external_크기비교_2418",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"색종이를 소진이는 143장 가지고 있고, 종수는 132장 가지고 있습니다. 누가 색종이를 더 적게 가지고 있습니까?",
      answer:"종수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 종수, 식: none"
    };
  }
});

// [크기비교] 선호네집부터 은행까지의 거리는 2310m이고 도서관까지의 거리는 2340m일 때 선호네 집...
T11_external.push({
  key:"external_크기비교_2419",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선호네집부터 은행까지의 거리는 2310m이고 도서관까지의 거리는 2340m일 때 선호네 집에서 더 먼 곳은 어디입니까?",
      answer:"도서관",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 도서관, 식: none"
    };
  }
});

// [크기비교] 영진이는 영은이보다 무겁습니다. 다영이는 영은이보다 가볍습니다. 이중 가장 무거운 사람은 ...
T11_external.push({
  key:"external_크기비교_2421",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영진이는 영은이보다 무겁습니다. 다영이는 영은이보다 가볍습니다. 이중 가장 무거운 사람은 누구입니까?",
      answer:"영진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영진, 식: none"
    };
  }
});

// [크기비교] 현주네 집에서 학교까지의 거리는 430m, 마트까지의 거리는 270m, 카페까지의 거리는 ...
T11_external.push({
  key:"external_크기비교_2422",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현주네 집에서 학교까지의 거리는 430m, 마트까지의 거리는 270m, 카페까지의 거리는 230m 일 때 이 중 가장 가까운 곳은 어디입니까?",
      answer:"카페",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 카페, 식: none"
    };
  }
});

// [크기비교] 지연이는 430걸음을 걸었고, 현주는 540걸음을 걸었습니다. 누가 더 적게 걸었습니까?...
T11_external.push({
  key:"external_크기비교_2423",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지연이는 430걸음을 걸었고, 현주는 540걸음을 걸었습니다. 누가 더 적게 걸었습니까?",
      answer:"지연",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지연, 식: none"
    };
  }
});

// [크기비교] 현진이는 3020원을 저금했고, 진영이는 2900원을 저금했습니다. 누가 더 적게 저금했습...
T11_external.push({
  key:"external_크기비교_2424",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현진이는 3020원을 저금했고, 진영이는 2900원을 저금했습니다. 누가 더 적게 저금했습니까?",
      answer:"진영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진영, 식: none"
    };
  }
});

// [크기비교] 오늘 놀이공원에 온 사람은 모두 780명입니다. 이중 여자가 360명일 때 남자와 여자 중...
T11_external.push({
  key:"external_크기비교_2426",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 놀이공원에 온 사람은 모두 780명입니다. 이중 여자가 360명일 때 남자와 여자 중 누가 더 많이 왔습니까?",
      answer:"여자",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 여자, 식: none"
    };
  }
});

// [크기비교] 영아는 5636걸음을 걸었고, 수진이는 7866걸음을 걸었습니다. 누가 더 많이 걸었습니까...
T11_external.push({
  key:"external_크기비교_2427",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영아는 5636걸음을 걸었고, 수진이는 7866걸음을 걸었습니다. 누가 더 많이 걸었습니까?",
      answer:"수진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수진, 식: none"
    };
  }
});

// [크기비교] 두 친구가 도토리를 줍고 있습니다. 경혜는 48개, 수진이는 52개를 주웠습니다. 누가 더...
T11_external.push({
  key:"external_크기비교_2428",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 친구가 도토리를 줍고 있습니다. 경혜는 48개, 수진이는 52개를 주웠습니다. 누가 더 많이 주웠습니까?",
      answer:"수진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수진, 식: none"
    };
  }
});

// [크기비교] 만지는 색종이를 30장씩 묶음 4개와 낱개 14장을 가지고 있고, 규현이는 색종이 20장씩...
T11_external.push({
  key:"external_크기비교_2429",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"만지는 색종이를 30장씩 묶음 4개와 낱개 14장을 가지고 있고, 규현이는 색종이 20장씩 묶음 6개를 가지고 있습니다. 누구의 색종이가 더 적습니까?",
      answer:"규현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 규현, 식: none"
    };
  }
});

// [크기비교] 정인이와 진민이는 수 카드를 한 장씩 가지고 있습니다. 정인이의 수 카드는 223이고, 진...
T11_external.push({
  key:"external_크기비교_2430",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정인이와 진민이는 수 카드를 한 장씩 가지고 있습니다. 정인이의 수 카드는 223이고, 진민이의 수 카드는 549입니다, 누가 가진 수 카드의 숫자가 더 큽니까?",
      answer:"진민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진민, 식: none"
    };
  }
});

// [크기비교] 영은이와 다영이가 숫자 카드 놀이를 하고 있습니다. 영은이는 13에서 14를 더한 수를, ...
T11_external.push({
  key:"external_크기비교_2431",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영은이와 다영이가 숫자 카드 놀이를 하고 있습니다. 영은이는 13에서 14를 더한 수를, 다영이는 30에서 10을 뺀 수를 가지고 있을 때 누구의 숫자 카드가 더 큽니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 수진이네 학교 학생은 모두 952명이고, 희수네 학교 학생은 모두 490명입니다. 수진이네...
T11_external.push({
  key:"external_크기비교_2432",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수진이네 학교 학생은 모두 952명이고, 희수네 학교 학생은 모두 490명입니다. 수진이네 학교 여학생은 400명이고 희수네 학교 여학생은 210명일 때 남학생이 더 많은 학교는 어디입니까?",
      answer:"수진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수진, 식: none"
    };
  }
});

// [크기비교] 가림이는 1000원짜리 지폐 3장과 500원짜리 동전 6개를 가지고 있고, 현주는 5000...
T11_external.push({
  key:"external_크기비교_2433",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가림이는 1000원짜리 지폐 3장과 500원짜리 동전 6개를 가지고 있고, 현주는 5000원짜리 지폐 1장과 100원자리 동전 3개를 가지고 있을 때 누가 더 많은 돈을 가지고 있습니까?",
      answer:"가림",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 가림, 식: none"
    };
  }
});

// [크기비교] 민석이의 키는 172.3cm이고 윤석이의 키는 182.8cm 일 때 누구의 키가 더 큽니까...
T11_external.push({
  key:"external_크기비교_2434",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민석이의 키는 172.3cm이고 윤석이의 키는 182.8cm 일 때 누구의 키가 더 큽니까?",
      answer:"윤석",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤석, 식: none"
    };
  }
});

// [크기비교] 인정이와 정민이는 수 카드를 한 장씩 가지고 있습니다. 인정이의 수 카드는 622이고, 정...
T11_external.push({
  key:"external_크기비교_2435",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인정이와 정민이는 수 카드를 한 장씩 가지고 있습니다. 인정이의 수 카드는 622이고, 정민이의 수 카드는 549입니다, 누가 가진 수 카드의 숫자가 더 큽니까?",
      answer:"인정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 인정, 식: none"
    };
  }
});

// [크기비교] 윤선이의 키는 157.7cm이고, 륜영이의 키는 187.3cm일 때 누구의 키가 더 작습니...
T11_external.push({
  key:"external_크기비교_2437",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤선이의 키는 157.7cm이고, 륜영이의 키는 187.3cm일 때 누구의 키가 더 작습니까?",
      answer:"윤선",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤선, 식: none"
    };
  }
});

// [크기비교] 유주는 6370원을 가지고 있고, 병지는 7870원을 가지고 있습니다. 누가 돈을 더 많이...
T11_external.push({
  key:"external_크기비교_2439",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유주는 6370원을 가지고 있고, 병지는 7870원을 가지고 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"병지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 병지, 식: none"
    };
  }
});

// [크기비교] 강남역에서 원희네 집까지의 거리는 1550m이고, 유림이네 집까지의 거리는 450m의 거리...
T11_external.push({
  key:"external_크기비교_2441",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"강남역에서 원희네 집까지의 거리는 1550m이고, 유림이네 집까지의 거리는 450m의 거리를 3배 만큼 가야할 때 강남역에서 누구의 집이 더 멉니까?",
      answer:"원희",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 원희, 식: none"
    };
  }
});

// [크기비교] 담비네 집에서 은행까지의 거리는 760m, 편의점까지의 거리는 540m, 학교까지의 거리는...
T11_external.push({
  key:"external_크기비교_2442",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"담비네 집에서 은행까지의 거리는 760m, 편의점까지의 거리는 540m, 학교까지의 거리는 420m일 때 가장 가까운 곳은 어디입니까?",
      answer:"학교",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 학교, 식: none"
    };
  }
});

// [크기비교] 혁준이네 집에는 책이 25권 있고, 효석이네 집에는 책이 42권 있습니다. 누구네 집에 책...
T11_external.push({
  key:"external_크기비교_2443",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혁준이네 집에는 책이 25권 있고, 효석이네 집에는 책이 42권 있습니다. 누구네 집에 책이 더 많습니까?",
      answer:"효석",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 효석, 식: none"
    };
  }
});

// [크기비교] 유섭이의 저금액은 9830원이고 형주의 저금액은 7620원입니다. 저금액이 더 많은 사람은...
T11_external.push({
  key:"external_크기비교_2444",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유섭이의 저금액은 9830원이고 형주의 저금액은 7620원입니다. 저금액이 더 많은 사람은 누구입니까?",
      answer:"유섭",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 유섭, 식: none"
    };
  }
});

// [크기비교] 사과는 토마토보다 무겁고, 배는 사과보다 무겁습니다. 가장 가벼운 것은 어느 것입니까?...
T11_external.push({
  key:"external_크기비교_2445",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사과는 토마토보다 무겁고, 배는 사과보다 무겁습니다. 가장 가벼운 것은 어느 것입니까?",
      answer:"토마토",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 토마토, 식: none"
    };
  }
});

// [크기비교] 한솔이는 7000원을, 민규는 4700원을 저금했다면 더 적게 저금한 사람은 누구입니까?...
T11_external.push({
  key:"external_크기비교_2446",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한솔이는 7000원을, 민규는 4700원을 저금했다면 더 적게 저금한 사람은 누구입니까?",
      answer:"민규",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민규, 식: none"
    };
  }
});

// [크기비교] 호준이는 딱지를 145장, 지현이는 딱지를 134장, 양원이는 122장을 가지고 있습니다....
T11_external.push({
  key:"external_크기비교_2447",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호준이는 딱지를 145장, 지현이는 딱지를 134장, 양원이는 122장을 가지고 있습니다. 딱지를 더 적게 가지고 있는 사람은 누구입니까?",
      answer:"지현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지현, 식: none"
    };
  }
});

// [크기비교] 점심시간에 희주는 700g의 사과를 1/3 만큼 먹었고, 민영이는 500g의 사과를 3/4...
T11_external.push({
  key:"external_크기비교_2448",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"점심시간에 희주는 700g의 사과를 1/3 만큼 먹었고, 민영이는 500g의 사과를 3/4만큼 먹었을 때 누가 더 사과를 적게 먹었습니까?",
      answer:"희주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희주, 식: none"
    };
  }
});

// [크기비교] 딱지를 민주는 32장, 지훈이는 20장, 민정이는 8장을 가지고 있습니다. 딱지를 가장 적...
T11_external.push({
  key:"external_크기비교_2449",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딱지를 민주는 32장, 지훈이는 20장, 민정이는 8장을 가지고 있습니다. 딱지를 가장 적게 가지고 있는 사람은 누구입니까?",
      answer:"민정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민정, 식: none"
    };
  }
});

// [크기비교] 순호는 1650원이 있고, 명진이는 500원짜리 3개를 가지고 있습니다. 누가 돈을 더 적...
T11_external.push({
  key:"external_크기비교_2452",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"순호는 1650원이 있고, 명진이는 500원짜리 3개를 가지고 있습니다. 누가 돈을 더 적게 가지고 있습니까?",
      answer:"명진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 명진, 식: none"
    };
  }
});

// [크기비교] 캐릭터 딱지를 예진이는 1730장, 연주는 1782장을 모았습니다. 누가 더 적게 모았습니...
T11_external.push({
  key:"external_크기비교_2453",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 예진이는 1730장, 연주는 1782장을 모았습니다. 누가 더 적게 모았습니까?",
      answer:"연주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 연주, 식: none"
    };
  }
});

// [크기비교] 선욱이는 테이프 18.6cm를 가지고 있고, 화섭이는 테이프 22.4cm를 가지고 있습니다...
T11_external.push({
  key:"external_크기비교_2454",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선욱이는 테이프 18.6cm를 가지고 있고, 화섭이는 테이프 22.4cm를 가지고 있습니다. 누구의 테이프가 더 깁니까?",
      answer:"화섭",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 화섭, 식: none"
    };
  }
});

// [크기비교] 정인이와 정민이는 수 카드를 한 장씩 가지고 있습니다. 정인이의 수 카드는 673이고, 정...
T11_external.push({
  key:"external_크기비교_2455",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정인이와 정민이는 수 카드를 한 장씩 가지고 있습니다. 정인이의 수 카드는 673이고, 정민이의 수 카드는 549입니다, 누가 가진 수 카드의 숫자가 더 큽니까?",
      answer:"정인",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정인, 식: none"
    };
  }
});

// [크기비교] 진수는 8000원을 4일 동안 저금했고, 진영이는 7500원을 3일 동안 저금했습니다. 하...
T11_external.push({
  key:"external_크기비교_2456",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진수는 8000원을 4일 동안 저금했고, 진영이는 7500원을 3일 동안 저금했습니다. 하루동안 저금한 금액은 누가 더 많습니까?",
      answer:"진영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진영, 식: none"
    };
  }
});

// [크기비교] 공깃돌을 다영이는 600개, 민주는 47개 가지고 있었습니다. 다영이가 민주에게 200개를...
T11_external.push({
  key:"external_크기비교_2457",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공깃돌을 다영이는 600개, 민주는 47개 가지고 있었습니다. 다영이가 민주에게 200개를 주었을 때 공깃돌을 더 많이 가지고 있는 사람은 누구입니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 공깃돌을 서영이는 157개, 윤서는 20개 가지고 있었습니다. 서영이가 윤서에게 50개를 ...
T11_external.push({
  key:"external_크기비교_2458",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"공깃돌을 서영이는 157개, 윤서는 20개 가지고 있었습니다. 서영이가 윤서에게 50개를 주었을 때 공깃돌을 더 많이 가지고 있는 사람은 누구입니까?",
      answer:"서영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 서영, 식: none"
    };
  }
});

// [크기비교] 주혁이가 한 달 동안 모은 돈은 7760원이고, 민혁이가 모은 돈은 6540원입니다. 한 ...
T11_external.push({
  key:"external_크기비교_2459",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주혁이가 한 달 동안 모은 돈은 7760원이고, 민혁이가 모은 돈은 6540원입니다. 한 달 동안 더 많은 돈을 모은 친구는 누구입니까?",
      answer:"주혁",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주혁, 식: none"
    };
  }
});

// [크기비교] 일년 간 강수량은 서울이 인천보다 많고, 광주가 서울보다 많습니다. 가장 비가 많이 온 곳...
T11_external.push({
  key:"external_크기비교_2461",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"일년 간 강수량은 서울이 인천보다 많고, 광주가 서울보다 많습니다. 가장 비가 많이 온 곳은 어디입니까?",
      answer:"광주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 광주, 식: none"
    };
  }
});

// [크기비교] 윤준이네 과수원에서는 귤나무 40그루에서 귤 1600개를 땄고, 지윤이네 과수원에서는 귤나...
T11_external.push({
  key:"external_크기비교_2462",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤준이네 과수원에서는 귤나무 40그루에서 귤 1600개를 땄고, 지윤이네 과수원에서는 귤나무 30그루에서 귤 1500개를 땄습니다. 한 그루당 딴 귤의 수가 많은 과수원은 어디입니까?",
      answer:"지윤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지윤, 식: none"
    };
  }
});

// [크기비교] 유미는 우표 388장을 모았고, 주은이는 340장을 모았을 때 우표를 더 많이 모은 사람이...
T11_external.push({
  key:"external_크기비교_2463",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"유미는 우표 388장을 모았고, 주은이는 340장을 모았을 때 우표를 더 많이 모은 사람이 누구입니까?",
      answer:"유미",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 유미, 식: none"
    };
  }
});

// [크기비교] 코코는 사탕을 18개 가지고 있고, 민재는 사탕을 23개 가지고 있습니다. 누가 사탕을 더...
T11_external.push({
  key:"external_크기비교_2464",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"코코는 사탕을 18개 가지고 있고, 민재는 사탕을 23개 가지고 있습니다. 누가 사탕을 더 많이 가지고 있습니까?",
      answer:"민재",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민재, 식: none"
    };
  }
});

// [크기비교] 혁주가 한 달 동안 모은 돈은 8260원이고, 민선이가 모은 돈은 15320원입니다. 한 ...
T11_external.push({
  key:"external_크기비교_2465",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혁주가 한 달 동안 모은 돈은 8260원이고, 민선이가 모은 돈은 15320원입니다. 한 달 동안 더 많은 돈을 모은 친구는 누구입니까?",
      answer:"민선",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민선, 식: none"
    };
  }
});

// [크기비교] 어떤 과일 가게에 사과가 400개, 귤이 600개 있습니다. 오늘 사과 230개, 귤 35...
T11_external.push({
  key:"external_크기비교_2466",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 과일 가게에 사과가 400개, 귤이 600개 있습니다. 오늘 사과 230개, 귤 350개를 팔았습니다. 어느 과일이 더 많이 남았습니까?",
      answer:"사과",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 사과, 식: none"
    };
  }
});

// [크기비교] A컵으로 물을 10번 부어서 수조를 가득 채운 후, B컵으로 15번을 덜어 내어 수조를 비...
T11_external.push({
  key:"external_크기비교_2467",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"A컵으로 물을 10번 부어서 수조를 가득 채운 후, B컵으로 15번을 덜어 내어 수조를 비웠습니다. A, B컵 중에서 크기가 더 큰 컵은 어느 것입니까?",
      answer:"A",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: A, 식: none"
    };
  }
});

// [크기비교] 본형이와 상우는 게임을 하였습니다. 본형이는 13점을 획득하였고, 상우는 19점을 획득하였...
T11_external.push({
  key:"external_크기비교_2468",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"본형이와 상우는 게임을 하였습니다. 본형이는 13점을 획득하였고, 상우는 19점을 획득하였습니다. 누가 더 많은 점수를 획득 하였습니까?",
      answer:"상우",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 상우, 식: none"
    };
  }
});

// [크기비교] 지수는 색종이를 120개씩 묶음 2개와 낱개 30장을 가지고 있고, 현규는 색종이 100장...
T11_external.push({
  key:"external_크기비교_2469",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지수는 색종이를 120개씩 묶음 2개와 낱개 30장을 가지고 있고, 현규는 색종이 100장씩 3묶음을 가지고 있습니다. 누구의 색종이가 더 많습니까?",
      answer:"현규",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현규, 식: none"
    };
  }
});

// [크기비교] 수학시험에서 민형이는 90점, 지철이는 85점, 과학시험에서 민형이는 65점, 지철이는 8...
T11_external.push({
  key:"external_크기비교_2471",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수학시험에서 민형이는 90점, 지철이는 85점, 과학시험에서 민형이는 65점, 지철이는 80점을 맞았습니다. 시험 총 점은 누가 더 높습니까?",
      answer:"지철",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지철, 식: none"
    };
  }
});

// [크기비교] 예주, 미연, 경미는 우표를 모읍니다. 오늘까지 예주는 23장, 미연이는 27장, 경미는 ...
T11_external.push({
  key:"external_크기비교_2472",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예주, 미연, 경미는 우표를 모읍니다. 오늘까지 예주는 23장, 미연이는 27장, 경미는 19장을 모았을 때 가장 적게 모은 사람은 누구입니까?",
      answer:"경미",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 경미, 식: none"
    };
  }
});

// [크기비교] 이현이가 읽으려고 하는 동화책은 1230쪽, 위인전은 1400쪽입니다. 하루에 동화책은 1...
T11_external.push({
  key:"external_크기비교_2473",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이현이가 읽으려고 하는 동화책은 1230쪽, 위인전은 1400쪽입니다. 하루에 동화책은 100쪽씩, 위인전은 100쪽씩 읽는다면, 3일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"위인전",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 위인전, 식: none"
    };
  }
});

// [크기비교] 세 친구가 게임을 하고 있습니다. 아현이는 120점, 다현이는 143점, 나현이는 132점...
T11_external.push({
  key:"external_크기비교_2474",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 친구가 게임을 하고 있습니다. 아현이는 120점, 다현이는 143점, 나현이는 132점을 얻었습니다. 점수를 가장 많이 얻은 사람은 누구입니까?",
      answer:"다현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다현, 식: none"
    };
  }
});

// [크기비교] 가영이네 집에서 정류장까지는 13220m, 은행까지는 20318m일 때 정류장과 은행 중에...
T11_external.push({
  key:"external_크기비교_2476",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가영이네 집에서 정류장까지는 13220m, 은행까지는 20318m일 때 정류장과 은행 중에서 더 가까운 곳은 어디입니까?",
      answer:"정류장",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정류장, 식: none"
    };
  }
});

// [크기비교] 오늘 저녁에 영진이는 남걸이와 함께 달리기를 하였습니다. 영진이는 66km를 달렸고, 남걸...
T11_external.push({
  key:"external_크기비교_2477",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘 저녁에 영진이는 남걸이와 함께 달리기를 하였습니다. 영진이는 66km를 달렸고, 남걸이 76km를 달렸습니다. 누가 더 많이 달렸습니까?",
      answer:"남걸",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 남걸, 식: none"
    };
  }
});

// [크기비교] 희정이네 학교 학생은 모두 1000명이고, 현주네 학교 학생은 모두 950명 입니다. 희정...
T11_external.push({
  key:"external_크기비교_2478",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희정이네 학교 학생은 모두 1000명이고, 현주네 학교 학생은 모두 950명 입니다. 희정이네 학교의 여학생은 450명이고, 현주네 학교의 여학생은 430명 일 때 남학생 수가 더 많은 학교는 어디입니까?",
      answer:"희정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희정, 식: none"
    };
  }
});

// [크기비교] 귤은 9개씩 묶음 3개, 복숭아는 30개가 있습니다. 어느 과일이 더 적습니까?...
T11_external.push({
  key:"external_크기비교_2479",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"귤은 9개씩 묶음 3개, 복숭아는 30개가 있습니다. 어느 과일이 더 적습니까?",
      answer:"귤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 귤, 식: none"
    };
  }
});

// [크기비교] 재용이네 집에서 은행까지의 거리는 3420m이고 정류장까지의 거리는 4003m입니다. 은행...
T11_external.push({
  key:"external_크기비교_2480",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재용이네 집에서 은행까지의 거리는 3420m이고 정류장까지의 거리는 4003m입니다. 은행과 정류장 중에서 어느 곳이 더 가깝습니까?",
      answer:"은행",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 은행, 식: none"
    };
  }
});

// [크기비교] 준형이는 구현이보다 키가 작고, 진경이는 구현이보다 키가 크고 민재는 진경이보다 키가 큽니...
T11_external.push({
  key:"external_크기비교_2481",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준형이는 구현이보다 키가 작고, 진경이는 구현이보다 키가 크고 민재는 진경이보다 키가 큽니다. 가장 키가 작은 사람은 누구입니까?",
      answer:"준형",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 준형, 식: none"
    };
  }
});

// [크기비교] 서윤이는 국어 시험지의 문제 중에서 7/20을 풀었고, 다영이는 9/20을 풀었습니다. 누...
T11_external.push({
  key:"external_크기비교_2482",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"서윤이는 국어 시험지의 문제 중에서 7/20을 풀었고, 다영이는 9/20을 풀었습니다. 누가 더 많이 풀었습니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 호윤이는 시장에서 당근 4/13kg과 양파 7/13kg를 사 왔습니다. 당근과 양파 중 어...
T11_external.push({
  key:"external_크기비교_2483",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"호윤이는 시장에서 당근 4/13kg과 양파 7/13kg를 사 왔습니다. 당근과 양파 중 어느 것을 더 적게 샀습니까?",
      answer:"당근",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 당근, 식: none"
    };
  }
});

// [크기비교] 참외는 10개, 사과는 35개가 있습니다. 5명이 참외와 수박을 같은 개수로 나눠가진다고 ...
T11_external.push({
  key:"external_크기비교_2484",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"참외는 10개, 사과는 35개가 있습니다. 5명이 참외와 수박을 같은 개수로 나눠가진다고 했을 때 한 사람이 가질 수 있는 개수가 더 적은 과일은 무엇입니까?",
      answer:"참외",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 참외, 식: none"
    };
  }
});

// [크기비교] 재용이네 집에서 도서관까지의 거리는 3401m, 교회까지의 거리는 3120m입니다. 도서관...
T11_external.push({
  key:"external_크기비교_2485",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재용이네 집에서 도서관까지의 거리는 3401m, 교회까지의 거리는 3120m입니다. 도서관과 교회 중 더 가까운 곳은 어디입니까?",
      answer:"교회",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 교회, 식: none"
    };
  }
});

// [크기비교] 물통에 환동, 동우, 미현이가 물을 가득 채웠습니다. 환동이는 14컵, 동우는 12컵, 미...
T11_external.push({
  key:"external_크기비교_2487",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"물통에 환동, 동우, 미현이가 물을 가득 채웠습니다. 환동이는 14컵, 동우는 12컵, 미현이는 15컵을 사용 하였을 때 누구의 컵이 가장 큽니까?",
      answer:"동우",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 동우, 식: none"
    };
  }
});

// [크기비교] 세 명의 친구가 은행에서 번호표를 뽑았습니다. 미선이의 번호표는 264, 혜진이의 번호표는...
T11_external.push({
  key:"external_크기비교_2488",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 명의 친구가 은행에서 번호표를 뽑았습니다. 미선이의 번호표는 264, 혜진이의 번호표는 243, 희영이의 번호표는 316일 때 가장 먼저 번호표를 뽑은 사람은 누구입니까?",
      answer:"혜진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜진, 식: none"
    };
  }
});

// [크기비교] 자전거 경주를 하였습니다. 같은 시간 동안 민재는 5420m, 현수는 4320m를 달렸습니...
T11_external.push({
  key:"external_크기비교_2490",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"자전거 경주를 하였습니다. 같은 시간 동안 민재는 5420m, 현수는 4320m를 달렸습니다. 누가 더 적게 달렸습니까?",
      answer:"현수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현수, 식: none"
    };
  }
});

// [크기비교] 선빈이는 100원짜리 35개, 10원짜리 34개, 정민이는 100원짜리 28개, 10원짜리...
T11_external.push({
  key:"external_크기비교_2491",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 100원짜리 35개, 10원짜리 34개, 정민이는 100원짜리 28개, 10원짜리 52개를 가졌습니다. 누가 더 많이 가졌습니까?",
      answer:"선빈",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 선빈, 식: none"
    };
  }
});

// [크기비교] 은지네 학교 학년별 학생 수를 조사하였습니다. 1학년 학생 수는 100, 2학년 학생 수는...
T11_external.push({
  key:"external_크기비교_2492",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"은지네 학교 학년별 학생 수를 조사하였습니다. 1학년 학생 수는 100, 2학년 학생 수는 128, 3학년 학생 수는 98 일 때 가장 많은 학생이 있는 학년은 몇학년 입니까?",
      answer:"2학년",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2학년, 식: none"
    };
  }
});

// [크기비교] 민현이와 성우는 매일 같은 크기의 컵에 콜라를 먹습니다. 민현이는 1/6컵씩 12번, 성우...
T11_external.push({
  key:"external_크기비교_2493",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민현이와 성우는 매일 같은 크기의 컵에 콜라를 먹습니다. 민현이는 1/6컵씩 12번, 성우는 1/2컵씩 6번을 마십니다. 하루동안 누가 콜라를 더 적게 마십니까?",
      answer:"민현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민현, 식: none"
    };
  }
});

// [크기비교] 예지의 키는 161.3cm이고, 승찬이의 키는 180cm일 때 누구의 키가 더 큽니까?...
T11_external.push({
  key:"external_크기비교_2494",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예지의 키는 161.3cm이고, 승찬이의 키는 180cm일 때 누구의 키가 더 큽니까?",
      answer:"승찬",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 승찬, 식: none"
    };
  }
});

// [크기비교] 본길이와 준호가 카드 놀이를 하고 있습니다. 본길이는 120에서 230 큰 수를 가지고 있...
T11_external.push({
  key:"external_크기비교_2495",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"본길이와 준호가 카드 놀이를 하고 있습니다. 본길이는 120에서 230 큰 수를 가지고 있고, 준호는 221에서 20씩 5번 뛰어서 센 수를 가지고 있습니다. 누구의 숫자 카드가 더 큽니까?",
      answer:"본길",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 본길, 식: none"
    };
  }
});

// [크기비교] 342명이 공원에서 운동을 하고, 100명이 체육관에서 운동을 하고 있습니다. 공원에서 1...
T11_external.push({
  key:"external_크기비교_2497",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"342명이 공원에서 운동을 하고, 100명이 체육관에서 운동을 하고 있습니다. 공원에서 100명이 체육관에 가서 운동을 한다면 어디서 운동을 하는 사람이 더 많습니까?",
      answer:"공원",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 공원, 식: none"
    };
  }
});

// [크기비교] 주만이는 6780걸음, 민현이는 5230걸음을 걸었습니다. 누가 더 적게 걸었습니까?...
T11_external.push({
  key:"external_크기비교_2498",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주만이는 6780걸음, 민현이는 5230걸음을 걸었습니다. 누가 더 적게 걸었습니까?",
      answer:"민현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민현, 식: none"
    };
  }
});

// [크기비교] 진규가 한 달 동안 모은 돈은 19000원 입니다. 규성이는 앞으로 한 달에 6000원씩 ...
T11_external.push({
  key:"external_크기비교_2499",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진규가 한 달 동안 모은 돈은 19000원 입니다. 규성이는 앞으로 한 달에 6000원씩 3달을 모은다고 했을 때 더 많은 돈을 모은 사람은 누구입니까?",
      answer:"진규",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진규, 식: none"
    };
  }
});

// [크기비교] 리본을 영은이는 0.1cm씩 20개, 영진이는 0.2cm씩 16개, 서윤이는 0.3cm씩 ...
T11_external.push({
  key:"external_크기비교_2500",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"리본을 영은이는 0.1cm씩 20개, 영진이는 0.2cm씩 16개, 서윤이는 0.3cm씩 10개를 사용하였을 때 가장 많이 사용한 사람은 누구입니까?",
      answer:"영진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영진, 식: none"
    };
  }
});

// [크기비교] 예쁜 집 사진이 있는 엽서를 현지는 23장 가지고 있고 영은이는 30장 가지고 있습니다. ...
T11_external.push({
  key:"external_크기비교_2501",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예쁜 집 사진이 있는 엽서를 현지는 23장 가지고 있고 영은이는 30장 가지고 있습니다. 누가 엽서를 더 많이 가지고 있습니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 리본을 한 개 만드는 데 소현이는 테이프를 115cm 사용하였고, 가현이는 92cm사용하였...
T11_external.push({
  key:"external_크기비교_2502",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"리본을 한 개 만드는 데 소현이는 테이프를 115cm 사용하였고, 가현이는 92cm사용하였을 때 누가 더 많은 테이프를 사용하였습니까?",
      answer:"소현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소현, 식: none"
    };
  }
});

// [크기비교] 선빈이는 100원짜리 50개, 10원짜리 64개, 선영이는 100원짜리 45개, 10원짜리...
T11_external.push({
  key:"external_크기비교_2503",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 100원짜리 50개, 10원짜리 64개, 선영이는 100원짜리 45개, 10원짜리 134개를 가졌습니다. 누가 더 많이 가졌습니까?",
      answer:"선영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 선영, 식: none"
    };
  }
});

// [크기비교] 수정이네 집에서 문구점까지의 거리는 백화점까지의 거리보다 가깝고, 도서관까지의 거리는 문구...
T11_external.push({
  key:"external_크기비교_2504",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수정이네 집에서 문구점까지의 거리는 백화점까지의 거리보다 가깝고, 도서관까지의 거리는 문구점까지의 거리보다 가깝습니다. 수정이네 집에서 가장 먼 곳은 어디입니까?",
      answer:"백화점",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 백화점, 식: none"
    };
  }
});

// [크기비교] 진수는 8500원을 5일 동안 저금했고, 진영이는 7550원을 3일 동안 저금했습니다. 하...
T11_external.push({
  key:"external_크기비교_2505",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진수는 8500원을 5일 동안 저금했고, 진영이는 7550원을 3일 동안 저금했습니다. 하루동안 저금한 금액은 누가 더 많습니까?",
      answer:"진영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진영, 식: none"
    };
  }
});

// [크기비교] 국민이와 선주가 가지고 있는 리본의 길이를 쟀더니 국민이의 리본은 33.8cm이고 선주의 ...
T11_external.push({
  key:"external_크기비교_2506",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"국민이와 선주가 가지고 있는 리본의 길이를 쟀더니 국민이의 리본은 33.8cm이고 선주의 리본은 23.4cm였습니다. 누구의 리본이 더 깁니까?",
      answer:"국민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 국민, 식: none"
    };
  }
});

// [크기비교] 홍도와 윤복이는 동화책을 읽었습니다. 홍도는 333쪽을 읽었고, 윤복이는 432쪽을 읽었습...
T11_external.push({
  key:"external_크기비교_2507",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"홍도와 윤복이는 동화책을 읽었습니다. 홍도는 333쪽을 읽었고, 윤복이는 432쪽을 읽었습니다. 누가 더 많이 읽었습니까?",
      answer:"윤복",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤복, 식: none"
    };
  }
});

// [크기비교] 달리기 경주를 하였습니다. 100m를 달리는데 성현이는 12초, 민수는 18초가 걸렸습니다...
T11_external.push({
  key:"external_크기비교_2508",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"달리기 경주를 하였습니다. 100m를 달리는데 성현이는 12초, 민수는 18초가 걸렸습니다. 누가 더 빨리 달렸습니까?",
      answer:"성현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 성현, 식: none"
    };
  }
});

// [크기비교] 가영이는 100원짜리 동전을 6개, 10원짜리 동전을 13개 가지고 있고, 성주는 800원...
T11_external.push({
  key:"external_크기비교_2509",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가영이는 100원짜리 동전을 6개, 10원짜리 동전을 13개 가지고 있고, 성주는 800원을 가지고 있습니다. 누가 돈을 더 적게 가지고 있습니까?",
      answer:"가영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 가영, 식: none"
    };
  }
});

// [크기비교] 오늘까지 경현이는 우표를 25장씩 7묶음, 혜린이는 우표 120장을 모았다면 우표를 더 많...
T11_external.push({
  key:"external_크기비교_2510",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오늘까지 경현이는 우표를 25장씩 7묶음, 혜린이는 우표 120장을 모았다면 우표를 더 많이 모은 사람은 누구입니까?",
      answer:"경현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 경현, 식: none"
    };
  }
});

// [크기비교] 미술시간에 연주는 물감의 3/20을 사용하였고, 주희는 물감의 3/10를 사용하였을 때 물...
T11_external.push({
  key:"external_크기비교_2511",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미술시간에 연주는 물감의 3/20을 사용하였고, 주희는 물감의 3/10를 사용하였을 때 물감을 누가 더 많이 사용하였습니까?",
      answer:"주희",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주희, 식: none"
    };
  }
});

// [크기비교] 영은이와 영진이가 강낭콩을 기르는데, 일주일 후 영은이의 것은 13.5cm, 영진이의 것은...
T11_external.push({
  key:"external_크기비교_2512",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영은이와 영진이가 강낭콩을 기르는데, 일주일 후 영은이의 것은 13.5cm, 영진이의 것은 13.2cm입니다. 누구의 강낭콩이 더 많이 자랐습니까?",
      answer:"영은",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영은, 식: none"
    };
  }
});

// [크기비교] 사과는 귤보다 무겁고, 복숭아는 사과보다 무겁습니다. 가장 무거운 것은 어느 것입니까?...
T11_external.push({
  key:"external_크기비교_2513",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사과는 귤보다 무겁고, 복숭아는 사과보다 무겁습니다. 가장 무거운 것은 어느 것입니까?",
      answer:"복숭아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 복숭아, 식: none"
    };
  }
});

// [크기비교] 영민이는 16500원을 저금했고, 준하는 12300원을 저금했습니다. 누가 더 적게 저금했...
T11_external.push({
  key:"external_크기비교_2514",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영민이는 16500원을 저금했고, 준하는 12300원을 저금했습니다. 누가 더 적게 저금했습니까?",
      answer:"준하",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 준하, 식: none"
    };
  }
});

// [크기비교] 혜진이와 현수가 카드 놀이를 하고 있습니다. 혜진이는 500에서 160 큰 수를 가지고 있...
T11_external.push({
  key:"external_크기비교_2518",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜진이와 현수가 카드 놀이를 하고 있습니다. 혜진이는 500에서 160 큰 수를 가지고 있고, 현수는 650에서 10씩 3번 뛰어서 센 수를 가지고 있습니다. 누구의 숫자 카드가 더 큽니까?",
      answer:"현수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현수, 식: none"
    };
  }
});

// [크기비교] 진주, 수경, 경아는 우표를 모읍니다. 오늘까지 진주는 230장, 수경이는 178장, 경아...
T11_external.push({
  key:"external_크기비교_2519",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진주, 수경, 경아는 우표를 모읍니다. 오늘까지 진주는 230장, 수경이는 178장, 경아는 165장을 모았다면 가장 많이 모은 사람은 누구입니까?",
      answer:"진주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진주, 식: none"
    };
  }
});

// [크기비교] 강진이와 상우는 게임을 하였습니다. 강진이는 33점을 획득하였고, 상우는 39점을 획득하였...
T11_external.push({
  key:"external_크기비교_2520",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"강진이와 상우는 게임을 하였습니다. 강진이는 33점을 획득하였고, 상우는 39점을 획득하였습니다. 누가 더 많은 점수를 획득 하였습니까?",
      answer:"상우",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 상우, 식: none"
    };
  }
});

// [크기비교] 수진이는 색종이를 30장씩 묶음 4개와 낱개 12장을 가지고 있고, 규현이는 색종이 20장...
T11_external.push({
  key:"external_크기비교_2521",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수진이는 색종이를 30장씩 묶음 4개와 낱개 12장을 가지고 있고, 규현이는 색종이 20장씩 묶음 6개를 가지고 있습니다. 누구의 색종이가 더 많습니까?",
      answer:"수진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수진, 식: none"
    };
  }
});

// [크기비교] 현지는 영진이와 줄넘기를 하고 있습니다. 현지는 하루에 200번을 7일동안 넘고, 영진이는...
T11_external.push({
  key:"external_크기비교_2523",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현지는 영진이와 줄넘기를 하고 있습니다. 현지는 하루에 200번을 7일동안 넘고, 영진이는 하루에 300번을 5일동안 넘을 때 줄넘기를 더 적게 넘은 사람은 누구입니까?",
      answer:"현지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현지, 식: none"
    };
  }
});

// [크기비교] 수아는 14320원을 저금했고, 범준이는 20190원을 저금했습니다. 누가 더 적게 저금했...
T11_external.push({
  key:"external_크기비교_2524",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수아는 14320원을 저금했고, 범준이는 20190원을 저금했습니다. 누가 더 적게 저금했습니까?",
      answer:"수아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수아, 식: none"
    };
  }
});

// [크기비교] 네 사람이 줄넘기를 하였습니다. 경진이는 167번, 현호는 165번, 수영이는 143번, ...
T11_external.push({
  key:"external_크기비교_2525",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"네 사람이 줄넘기를 하였습니다. 경진이는 167번, 현호는 165번, 수영이는 143번, 영진이는 187번 하였습니다. 누가 줄넘기를 가장 많이 하였습니까?",
      answer:"영진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영진, 식: none"
    };
  }
});

// [크기비교] 달리기 경주를 하였습니다. 같은 시간 동안 현수는 1728m를, 윤비는 2210m를 달렸습...
T11_external.push({
  key:"external_크기비교_2528",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"달리기 경주를 하였습니다. 같은 시간 동안 현수는 1728m를, 윤비는 2210m를 달렸습니다. 누가 더 적게 달렸습니까?",
      answer:"현수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현수, 식: none"
    };
  }
});

// [크기비교] 준형이는 구현이보다 키가 크고, 진경이는 구현이보다 키가 작고 민재는 진경이보다 키가 작습...
T11_external.push({
  key:"external_크기비교_2530",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준형이는 구현이보다 키가 크고, 진경이는 구현이보다 키가 작고 민재는 진경이보다 키가 작습니다. 가장 키가 작은 사람은 누구입니까?",
      answer:"민재",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민재, 식: none"
    };
  }
});

// [크기비교] 인정이와 진민이는 수 카드를 한 장씩 가지고 있습니다. 인정이의 수 카드는 622이고, 진...
T11_external.push({
  key:"external_크기비교_2532",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인정이와 진민이는 수 카드를 한 장씩 가지고 있습니다. 인정이의 수 카드는 622이고, 진민이의 수 카드는 430입니다, 누가 가진 수 카드의 숫자가 더 작습니까?",
      answer:"진민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진민, 식: none"
    };
  }
});

// [크기비교] 혜원이는 초콜릿을 32개 가지고 있고, 윤지는 초콜릿을 35개 가지고 있습니다. 누가 초콜...
T11_external.push({
  key:"external_크기비교_2533",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜원이는 초콜릿을 32개 가지고 있고, 윤지는 초콜릿을 35개 가지고 있습니다. 누가 초콜릿을 더 많이 가지고 있습니까?",
      answer:"윤지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤지, 식: none"
    };
  }
});

// [크기비교] 수지는 19920원을 저금했고, 영주는 12760원을 저금했습니다. 누가 더 많이 저금했습...
T11_external.push({
  key:"external_크기비교_2534",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수지는 19920원을 저금했고, 영주는 12760원을 저금했습니다. 누가 더 많이 저금했습니까?",
      answer:"수지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수지, 식: none"
    };
  }
});

// [크기비교] 수아는 4530원이 있었는데 1000원짜리 3장을 용돈으로 더 받았습니다. 선규는 7230...
T11_external.push({
  key:"external_크기비교_2535",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수아는 4530원이 있었는데 1000원짜리 3장을 용돈으로 더 받았습니다. 선규는 7230원이 있었는데 1200원으로 음료수를 샀습니다. 남아 있는 돈은 누가 더 많습니까?",
      answer:"수아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수아, 식: none"
    };
  }
});

// [크기비교] 동전을 이용하여 양팔 저울로 무게를 재었더니 동화책은 동전 660개, 소설책은 동전 700...
T11_external.push({
  key:"external_크기비교_2536",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동전을 이용하여 양팔 저울로 무게를 재었더니 동화책은 동전 660개, 소설책은 동전 700개와 무게가 같았습니다. 동화책과 소설책 중에서 더 가벼운 것은 무엇입니까?",
      answer:"동화책",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 동화책, 식: none"
    };
  }
});

// [크기비교] 진규가 한 달 동안 모은 돈은 23000원 입니다. 규성이는 앞으로 한 달에 8000원씩 ...
T11_external.push({
  key:"external_크기비교_2537",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진규가 한 달 동안 모은 돈은 23000원 입니다. 규성이는 앞으로 한 달에 8000원씩 3달을 모은다고 했을 때 더 많은 돈을 모은 사람은 누구입니까?",
      answer:"진규",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진규, 식: none"
    };
  }
});

// [크기비교] 우진이가 읽으려고 하는 소설책은 140쪽, 위인전은 120쪽입니다. 소설책은 하루에 20쪽...
T11_external.push({
  key:"external_크기비교_2538",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"우진이가 읽으려고 하는 소설책은 140쪽, 위인전은 120쪽입니다. 소설책은 하루에 20쪽씩, 위인전은 10쪽씩 읽는다면 3일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"위인전",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 위인전, 식: none"
    };
  }
});

// [크기비교] 홍도와 윤복이는 동화책을 읽었습니다. 홍도는 123쪽을 읽었고, 윤복이는 97쪽을 읽었습니...
T11_external.push({
  key:"external_크기비교_2540",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"홍도와 윤복이는 동화책을 읽었습니다. 홍도는 123쪽을 읽었고, 윤복이는 97쪽을 읽었습니다. 누가 더 많이 읽었습니까?",
      answer:"홍도",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 홍도, 식: none"
    };
  }
});

// [크기비교] 미정이가 읽으려고 하는 동화책은 1200쪽, 소설책은 800쪽입니다. 하루에 동화책은 70...
T11_external.push({
  key:"external_크기비교_2541",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미정이가 읽으려고 하는 동화책은 1200쪽, 소설책은 800쪽입니다. 하루에 동화책은 70쪽씩, 소설책은 50쪽씩 읽는다면 10일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"동화책",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 동화책, 식: none"
    };
  }
});

// [크기비교] 혜영, 주현이는 우표를 모읍니다. 오늘까지 혜영이 24장씩 6묶음, 주현이는 120장을 모...
T11_external.push({
  key:"external_크기비교_2543",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜영, 주현이는 우표를 모읍니다. 오늘까지 혜영이 24장씩 6묶음, 주현이는 120장을 모았다면 우표를 더 많이 모은 사람은 누구입니까?",
      answer:"혜영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜영, 식: none"
    };
  }
});

// [크기비교] 영은이와 서윤이가 숫자 카드 놀이를 하고 있습니다. 영은이는 178에서 149를 더한 수를...
T11_external.push({
  key:"external_크기비교_2544",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영은이와 서윤이가 숫자 카드 놀이를 하고 있습니다. 영은이는 178에서 149를 더한 수를, 서윤이는 713에서 356을 뺀 수를 가지고 있을 때 누구의 숫자 카드가 더 큽니까?",
      answer:"서윤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 서윤, 식: none"
    };
  }
});

// [크기비교] 민주네 반 학생 수는 25명이고, 현아네 반 학생 수는 22명입니다. 누구의 반에 학생 수...
T11_external.push({
  key:"external_크기비교_2545",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민주네 반 학생 수는 25명이고, 현아네 반 학생 수는 22명입니다. 누구의 반에 학생 수가 더 많습니까?",
      answer:"민주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민주, 식: none"
    };
  }
});

// [크기비교] 혜주는 19, 현수는 23, 수아는 14가 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장...
T11_external.push({
  key:"external_크기비교_2546",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜주는 19, 현수는 23, 수아는 14가 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장 큰 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"현수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현수, 식: none"
    };
  }
});

// [크기비교] 재영이네 동네에 초등학교 학생은 모두 600명이고, 고등학교 학생은 모두 550명 입니다....
T11_external.push({
  key:"external_크기비교_2547",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재영이네 동네에 초등학교 학생은 모두 600명이고, 고등학교 학생은 모두 550명 입니다. 초등학교의 여학생은 340명이고, 고등학교의 여학생은 270명 일 때 남학생 수가 더 많은 학교는 어디입니까?",
      answer:"고등학교",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 고등학교, 식: none"
    };
  }
});

// [크기비교] 냉장고에 사과와 귤이 들어 있습니다. 사과는 220개씩 4봉지가 있고 귤은 100개씩 9봉...
T11_external.push({
  key:"external_크기비교_2548",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"냉장고에 사과와 귤이 들어 있습니다. 사과는 220개씩 4봉지가 있고 귤은 100개씩 9봉지가 있습니다. 사과와 귤 중에서 어느 것이 더 많습니까?",
      answer:"귤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 귤, 식: none"
    };
  }
});

// [크기비교] 동현이는 수아보다 무겁고, 다영이는 수아보다 가볍습니다. 가장 가벼운 사람은 누구입니까?...
T11_external.push({
  key:"external_크기비교_2549",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동현이는 수아보다 무겁고, 다영이는 수아보다 가볍습니다. 가장 가벼운 사람은 누구입니까?",
      answer:"다영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다영, 식: none"
    };
  }
});

// [크기비교] 혜진이는 17, 기훈이는 34, 영민이는 23가 쓰여진 숫자카드를 가지고 있습니다. 가장 ...
T11_external.push({
  key:"external_크기비교_2550",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜진이는 17, 기훈이는 34, 영민이는 23가 쓰여진 숫자카드를 가지고 있습니다. 가장 작은 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"혜진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜진, 식: none"
    };
  }
});

// [크기비교] 윤지는 1982와 198을 모았습니다. 시영이는 1984과 98을 모았습니다. 누가 모은 ...
T11_external.push({
  key:"external_크기비교_2551",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤지는 1982와 198을 모았습니다. 시영이는 1984과 98을 모았습니다. 누가 모은 수의 합이 더 큽니까?",
      answer:"윤지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤지, 식: none"
    };
  }
});

// [크기비교] 볼펜의 무게는 클립 22개의 무게와 같고, 지우개는 클립 10개의 무게와 같습니다. 볼펜과...
T11_external.push({
  key:"external_크기비교_2552",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"볼펜의 무게는 클립 22개의 무게와 같고, 지우개는 클립 10개의 무게와 같습니다. 볼펜과 지우개 중에서 어느 것이 더 무겁습니까?",
      answer:"볼펜",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 볼펜, 식: none"
    };
  }
});

// [크기비교] 진수와 나라는 동화책을 읽었습니다. 진수는 25쪽을 읽었고, 나라는 27쪽을 읽었다면 동화...
T11_external.push({
  key:"external_크기비교_2553",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"진수와 나라는 동화책을 읽었습니다. 진수는 25쪽을 읽었고, 나라는 27쪽을 읽었다면 동화책을 더 많이 읽은 사람은 누구입니까?",
      answer:"나라",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 나라, 식: none"
    };
  }
});

// [크기비교] 혜영이와 현경이가 카드 놀이를 하고 있습니다. 혜영이는 100에서 260 큰 수를 가지고 ...
T11_external.push({
  key:"external_크기비교_2554",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜영이와 현경이가 카드 놀이를 하고 있습니다. 혜영이는 100에서 260 큰 수를 가지고 있고, 현경이는 320을 가지고 있습니다. 누구의 숫자 카드가 더 큽니까?",
      answer:"혜영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜영, 식: none"
    };
  }
});

// [크기비교] 영준이네 반에는 위인전이 120권, 동화책이 145권 있습니다. 위인전과 동화책 중에서 어...
T11_external.push({
  key:"external_크기비교_2555",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영준이네 반에는 위인전이 120권, 동화책이 145권 있습니다. 위인전과 동화책 중에서 어느 것이 더 적습니까?",
      answer:"위인전",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 위인전, 식: none"
    };
  }
});

// [크기비교] 정욱이는 1000원짜리 지폐를 3개, 가현이는 500원짜리 동전을 3개 가지고 있습니다. ...
T11_external.push({
  key:"external_크기비교_2557",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정욱이는 1000원짜리 지폐를 3개, 가현이는 500원짜리 동전을 3개 가지고 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"정욱",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정욱, 식: none"
    };
  }
});

// [크기비교] 재석이는 사탕을 11개씩 묶음 4개와 낱개 9개를 가지고 있고, 예준이는 사탕을 50개를 ...
T11_external.push({
  key:"external_크기비교_2558",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재석이는 사탕을 11개씩 묶음 4개와 낱개 9개를 가지고 있고, 예준이는 사탕을 50개를 가지고 있습니다. 누가 더 적은 사탕을 가지고 있습니까?",
      answer:"예준",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 예준, 식: none"
    };
  }
});

// [크기비교] 도엽이와 윤지는 동화책을 읽었습니다. 도엽이는 76쪽을 읽었고, 윤지는 82쪽을 읽었습니다...
T11_external.push({
  key:"external_크기비교_2559",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"도엽이와 윤지는 동화책을 읽었습니다. 도엽이는 76쪽을 읽었고, 윤지는 82쪽을 읽었습니다. 누가 더 많이 읽었습니까?",
      answer:"윤지",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 윤지, 식: none"
    };
  }
});

// [크기비교] 캐릭터 딱지를 민선이는 1730장, 연주는 1782장을 모았습니다. 누가 더 적게 모았습니...
T11_external.push({
  key:"external_크기비교_2560",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 민선이는 1730장, 연주는 1782장을 모았습니다. 누가 더 적게 모았습니까?",
      answer:"연주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 연주, 식: none"
    };
  }
});

// [크기비교] 리본을 한 개 만드는 데 소영이는 테이프를 102cm 사용하였고, 가영이는 87cm사용하였...
T11_external.push({
  key:"external_크기비교_2561",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"리본을 한 개 만드는 데 소영이는 테이프를 102cm 사용하였고, 가영이는 87cm사용하였을 때 누가 더 많은 테이프를 사용하였습니까?",
      answer:"소영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소영, 식: none"
    };
  }
});

// [크기비교] 딱지를 호민이는 42장, 보현이는 22장, 혜임이는 38장을 가지고 있습니다. 딱지를 가장...
T11_external.push({
  key:"external_크기비교_2562",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딱지를 호민이는 42장, 보현이는 22장, 혜임이는 38장을 가지고 있습니다. 딱지를 가장 적게 가지고 있는 사람은 누구입니까?",
      answer:"보현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 보현, 식: none"
    };
  }
});

// [크기비교] 민영, 준형는 우표를 모읍니다. 오늘까지 민영이 20장씩 6묶음, 준형이는 149장을 모았...
T11_external.push({
  key:"external_크기비교_2564",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민영, 준형는 우표를 모읍니다. 오늘까지 민영이 20장씩 6묶음, 준형이는 149장을 모았다면 우표를 더 많이 모은 사람은 누구입니까?",
      answer:"준형",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 준형, 식: none"
    };
  }
});

// [크기비교] 바닷가 갯벌에서 수아는 조개를 34개 캤고, 규민이는 29개 캤을 때 조개를 더 많이 캔 ...
T11_external.push({
  key:"external_크기비교_2566",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"바닷가 갯벌에서 수아는 조개를 34개 캤고, 규민이는 29개 캤을 때 조개를 더 많이 캔 사람은 누구입니까?",
      answer:"수아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수아, 식: none"
    };
  }
});

// [크기비교] 캐릭터 딱지를 예정이는 200장, 소휘는 300장을 모았습니다. 누가 더 많이 모았습니까?...
T11_external.push({
  key:"external_크기비교_2568",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"캐릭터 딱지를 예정이는 200장, 소휘는 300장을 모았습니다. 누가 더 많이 모았습니까?",
      answer:"소휘",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 소휘, 식: none"
    };
  }
});

// [크기비교] 정현이네 학교 학생은 모두 520명이고, 주현이네 학교 학생은 모두 430명 입니다. 정현...
T11_external.push({
  key:"external_크기비교_2569",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정현이네 학교 학생은 모두 520명이고, 주현이네 학교 학생은 모두 430명 입니다. 정현이네 학교의 여학생은 200명이고, 주현이네 학교의 여학생은 160명 일 때 남학생 수가 더 많은 학교는 어디입니까?",
      answer:"정현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정현, 식: none"
    };
  }
});

// [크기비교] 볼펜의 무게는 클립 30개의 무게와 같고, 지우개는 클립 24개의 무게와 같습니다. 볼펜과...
T11_external.push({
  key:"external_크기비교_2570",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"볼펜의 무게는 클립 30개의 무게와 같고, 지우개는 클립 24개의 무게와 같습니다. 볼펜과 지우개 중에서 어느 것이 더 가볍습니까?",
      answer:"지우개",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지우개, 식: none"
    };
  }
});

// [크기비교] 선욱이는 색종이를 320장, 현민이는 색종이를 120장 3묶음 가지고 있을 때 누구의 색종...
T11_external.push({
  key:"external_크기비교_2573",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선욱이는 색종이를 320장, 현민이는 색종이를 120장 3묶음 가지고 있을 때 누구의 색종이가 더 많습니까?",
      answer:"현민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현민, 식: none"
    };
  }
});

// [크기비교] 주휘는 사탕을 87개 가지고 있고, 민영이는 사탕을 53개 가지고 있습니다. 누가 사탕을 ...
T11_external.push({
  key:"external_크기비교_2575",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주휘는 사탕을 87개 가지고 있고, 민영이는 사탕을 53개 가지고 있습니다. 누가 사탕을 더 많이 가지고 있습니까?",
      answer:"주휘",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주휘, 식: none"
    };
  }
});

// [크기비교] 경현, 현준이는 우표를 모읍니다. 오늘까지 경현이 24장씩 6묶음, 현준이는 100장을 모...
T11_external.push({
  key:"external_크기비교_2576",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경현, 현준이는 우표를 모읍니다. 오늘까지 경현이 24장씩 6묶음, 현준이는 100장을 모았다면 우표를 더 많이 모은 사람은 누구입니까?",
      answer:"경현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 경현, 식: none"
    };
  }
});

// [크기비교] 영수는 32, 해창이는 20, 진아는 23이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가...
T11_external.push({
  key:"external_크기비교_2578",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영수는 32, 해창이는 20, 진아는 23이 쓰여져 있는 숫자 카드를 가지고 있습니다. 가장 작은 수가 쓰인 숫자 카드를 가지고 있는 사람은 누구입니까?",
      answer:"해창",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 해창, 식: none"
    };
  }
});

// [크기비교] 주휘는 사탕을 14개 가지고 있고, 민영이는 사탕을 53개 가지고 있습니다. 누가 사탕을 ...
T11_external.push({
  key:"external_크기비교_2579",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주휘는 사탕을 14개 가지고 있고, 민영이는 사탕을 53개 가지고 있습니다. 누가 사탕을 더 많이 가지고 있습니까?",
      answer:"민영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민영, 식: none"
    };
  }
});

// [크기비교] 주만이는 6780걸음, 현민이는 5230걸음을 걸었습니다. 누가 더 많이 걸었습니까?...
T11_external.push({
  key:"external_크기비교_2580",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주만이는 6780걸음, 현민이는 5230걸음을 걸었습니다. 누가 더 많이 걸었습니까?",
      answer:"주만",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주만, 식: none"
    };
  }
});

// [크기비교] 민지가 읽으려고 하는 만화책은 1500쪽, 소설책은 980쪽입니다. 하루에 만화책은 70쪽...
T11_external.push({
  key:"external_크기비교_2581",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민지가 읽으려고 하는 만화책은 1500쪽, 소설책은 980쪽입니다. 하루에 만화책은 70쪽씩, 소설책은 50쪽씩 읽는다면 10일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"만화책",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 만화책, 식: none"
    };
  }
});

// [크기비교] 미현이의 키는 광희보다 크고, 지민이의 키가 미현이보다 큽니다. 누구의 키가 가장 큽니까?...
T11_external.push({
  key:"external_크기비교_2582",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"미현이의 키는 광희보다 크고, 지민이의 키가 미현이보다 큽니다. 누구의 키가 가장 큽니까?",
      answer:"지민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지민, 식: none"
    };
  }
});

// [크기비교] 재율이가 읽으려고 하는 소설책은 500쪽, 위인전은 600쪽입니다. 하루에 소설책은 30쪽...
T11_external.push({
  key:"external_크기비교_2584",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재율이가 읽으려고 하는 소설책은 500쪽, 위인전은 600쪽입니다. 하루에 소설책은 30쪽씩, 위인전은 50쪽씩 읽는다면, 4일 동안 읽었을 때에 읽지 않은 쪽수는 어느 책이 더 많습니까?",
      answer:"위인전",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 위인전, 식: none"
    };
  }
});

// [크기비교] 주영이는 7230걸음, 민준이는 6540걸음을 걸었습니다. 누가 더 적게 걸었습니까?...
T11_external.push({
  key:"external_크기비교_2585",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주영이는 7230걸음, 민준이는 6540걸음을 걸었습니다. 누가 더 적게 걸었습니까?",
      answer:"민준",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민준, 식: none"
    };
  }
});

// [크기비교] 딱지를 민호는 32장, 철준이는 20장, 민정이는 10장을 가지고 있습니다. 딱지를 가장 ...
T11_external.push({
  key:"external_크기비교_2586",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"딱지를 민호는 32장, 철준이는 20장, 민정이는 10장을 가지고 있습니다. 딱지를 가장 적게 가지고 있는 사람은 누구입니까?",
      answer:"민정",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 민정, 식: none"
    };
  }
});

// [크기비교] 세 명의 친구가 은행에서 번호표를 뽑았습니다. 장원이의 번호표는 240, 다혜의 번호표는 ...
T11_external.push({
  key:"external_크기비교_2587",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 명의 친구가 은행에서 번호표를 뽑았습니다. 장원이의 번호표는 240, 다혜의 번호표는 220, 지석이의 번호표는 346일 때 가장 먼저 번호표를 뽑은 사람은 누구입니까?",
      answer:"다혜",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 다혜, 식: none"
    };
  }
});

// [크기비교] 두 친구가 도토리를 줍고 있습니다. 경주는 142개, 수진이는 163개를 주웠습니다. 누가...
T11_external.push({
  key:"external_크기비교_2588",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 친구가 도토리를 줍고 있습니다. 경주는 142개, 수진이는 163개를 주웠습니다. 누가 더 많이 주웠습니까?",
      answer:"수진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수진, 식: none"
    };
  }
});

// [크기비교] 희정이 읽으려고 하는 동화책은 300쪽, 희아가 읽으려고 하는 동화책은 340쪽입니다. 희...
T11_external.push({
  key:"external_크기비교_2589",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희정이 읽으려고 하는 동화책은 300쪽, 희아가 읽으려고 하는 동화책은 340쪽입니다. 희정이와 희아가 하루에 30쪽씩 10일을 읽는다면, 읽지 않은 쪽수는 누가 더 많습니까?",
      answer:"희아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희아, 식: none"
    };
  }
});

// [크기비교] 주영이는 색종이를 50개씩 묶음 3개와 낱개 16장을 가지고 있고, 아영이는 색종이 170...
T11_external.push({
  key:"external_크기비교_2590",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주영이는 색종이를 50개씩 묶음 3개와 낱개 16장을 가지고 있고, 아영이는 색종이 170장을 가지고 있습니다. 누구의 색종이가 더 적습니까?",
      answer:"주영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주영, 식: none"
    };
  }
});

// [크기비교] 현진이는 색종이를 80장, 구현이는 색종이를 14장 5묶음 가지고 있을 때 누구의 색종이가...
T11_external.push({
  key:"external_크기비교_2591",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현진이는 색종이를 80장, 구현이는 색종이를 14장 5묶음 가지고 있을 때 누구의 색종이가 더 적습니까?",
      answer:"구현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 구현, 식: none"
    };
  }
});

// [크기비교] 소연이는 색종이 40장을 가지고 있고, 진주는 140장을 가지고 있습니다. 누가 색종이를 ...
T11_external.push({
  key:"external_크기비교_2592",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"소연이는 색종이 40장을 가지고 있고, 진주는 140장을 가지고 있습니다. 누가 색종이를 더 많이 가지고 있습니까?",
      answer:"진주",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 진주, 식: none"
    };
  }
});

// [크기비교] 냉장고에 사과와 귤이 들어 있습니다. 사과는 25개씩 5봉지가 있고 귤은 10개씩 13봉지...
T11_external.push({
  key:"external_크기비교_2593",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"냉장고에 사과와 귤이 들어 있습니다. 사과는 25개씩 5봉지가 있고 귤은 10개씩 13봉지가 있습니다. 사과와 귤 중에서 어느 것이 더 많습니까?",
      answer:"귤",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 귤, 식: none"
    };
  }
});

// [크기비교] 인아의 저금통에는 55630원이 들어있고, 민경이의 저금통에는 43920원이 들어있습니다....
T11_external.push({
  key:"external_크기비교_2594",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"인아의 저금통에는 55630원이 들어있고, 민경이의 저금통에는 43920원이 들어있습니다. 저금액이 더 많은 사람은 누구입니까?",
      answer:"인아",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 인아, 식: none"
    };
  }
});

// [크기비교] 혜수는 수학 시험지의 문제 중에서 7/10을 풀었고, 원희는 5/12을 풀었습니다. 누가 ...
T11_external.push({
  key:"external_크기비교_2596",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜수는 수학 시험지의 문제 중에서 7/10을 풀었고, 원희는 5/12을 풀었습니다. 누가 더 많이 풀었습니까?",
      answer:"혜수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜수, 식: none"
    };
  }
});

// [크기비교] 성현이는 2550원을, 준형이는 3450원을 저금했다면, 더 많이 저금한 사람은 누구입니까...
T11_external.push({
  key:"external_크기비교_2597",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"성현이는 2550원을, 준형이는 3450원을 저금했다면, 더 많이 저금한 사람은 누구입니까?",
      answer:"준형",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 준형, 식: none"
    };
  }
});

// [크기비교] 지수는 2231걸음을 걸었고, 현아는 6623걸음을 걸었습니다. 누가 더 적게 걸었습니까?...
T11_external.push({
  key:"external_크기비교_2598",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지수는 2231걸음을 걸었고, 현아는 6623걸음을 걸었습니다. 누가 더 적게 걸었습니까?",
      answer:"지수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지수, 식: none"
    };
  }
});

// [크기비교] 경수는 사탕을 19개 먹었고, 이현이는 사탕을 13개 먹었습니다. 누가 더 많은 사탕을 먹...
T11_external.push({
  key:"external_크기비교_2600",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경수는 사탕을 19개 먹었고, 이현이는 사탕을 13개 먹었습니다. 누가 더 많은 사탕을 먹었습니까?",
      answer:"경수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 경수, 식: none"
    };
  }
});

// [크기비교] 화섭이는 시험에서 87점을 맞았고, 나래는 시험에서 92점을 맞았습니다. 시험에서 더 높은...
T11_external.push({
  key:"external_크기비교_2601",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"화섭이는 시험에서 87점을 맞았고, 나래는 시험에서 92점을 맞았습니다. 시험에서 더 높은 점수를 얻은 사람은 누구입니까?",
      answer:"나래",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 나래, 식: none"
    };
  }
});

// [크기비교] 조개를 송현이는 23개 가지고 있고, 지아는 18개 가지고 있습니다. 누가 조개를 더 많이...
T11_external.push({
  key:"external_크기비교_2602",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"조개를 송현이는 23개 가지고 있고, 지아는 18개 가지고 있습니다. 누가 조개를 더 많이 가지고 있습니까?",
      answer:"송현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 송현, 식: none"
    };
  }
});

// [크기비교] 수민이와 우형이가 9일동안 줄넘기를 한 횟수를 기록하였더니 수민이는 4320회, 우형이는 ...
T11_external.push({
  key:"external_크기비교_2604",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수민이와 우형이가 9일동안 줄넘기를 한 횟수를 기록하였더니 수민이는 4320회, 우형이는 2310회였습니다. 누가 더 많이 했습니까?",
      answer:"수민",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 수민, 식: none"
    };
  }
});

// [크기비교] 예쁜 집 사진이 있는 엽서를 현주는 234장 가지고 있고 영진이는 340장 가지고 있습니다...
T11_external.push({
  key:"external_크기비교_2605",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"예쁜 집 사진이 있는 엽서를 현주는 234장 가지고 있고 영진이는 340장 가지고 있습니다. 누가 엽서를 더 많이 가지고 있습니까?",
      answer:"영진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영진, 식: none"
    };
  }
});

// [크기비교] 주아는 500원짜리 동전을 4개, 100원짜리 동전을 9개 가지고 있고 화연이는 500원짜...
T11_external.push({
  key:"external_크기비교_2606",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주아는 500원짜리 동전을 4개, 100원짜리 동전을 9개 가지고 있고 화연이는 500원짜리 동전을 8개 가지고 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"화연",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 화연, 식: none"
    };
  }
});

// [크기비교] 동원이가 윤기보다 줄넘기를 더 많이 넘고, 명숙이가 동원이보다 줄넘기를 더 많이 넘었을 때...
T11_external.push({
  key:"external_크기비교_2607",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"동원이가 윤기보다 줄넘기를 더 많이 넘고, 명숙이가 동원이보다 줄넘기를 더 많이 넘었을 때 줄넘기를 가장 많이 넘은 사람은 누구입니까?",
      answer:"명숙",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 명숙, 식: none"
    };
  }
});

// [크기비교] 지아가 가진 리본의 길이는 100m입니다. 1/5는 잘라서 영은이를 주고, 1/4는 영진이...
T11_external.push({
  key:"external_크기비교_2608",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지아가 가진 리본의 길이는 100m입니다. 1/5는 잘라서 영은이를 주고, 1/4는 영진이를 줬을 때 영은이와 영진이의 리본 중 누구의 리본의 길이가 더 깁니까?",
      answer:"영진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 영진, 식: none"
    };
  }
});

// [크기비교] 충재네 집에서 정류장까지의 거리는 1352m, 은행까지의 거리는 1998m, 학교까지의 거...
T11_external.push({
  key:"external_크기비교_2609",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"충재네 집에서 정류장까지의 거리는 1352m, 은행까지의 거리는 1998m, 학교까지의 거리는 2991m일 때 가장 먼 곳은 어디입니까?",
      answer:"학교",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 학교, 식: none"
    };
  }
});

// [크기비교] 주현이는 사탕을 5개씩 묶음 3개와 낱개 7개를 가지고 있고, 민주는 사탕을 17개를 가지...
T11_external.push({
  key:"external_크기비교_2610",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"주현이는 사탕을 5개씩 묶음 3개와 낱개 7개를 가지고 있고, 민주는 사탕을 17개를 가지고 있습니다. 누구의 사탕이 더 많습니까?",
      answer:"주현",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 주현, 식: none"
    };
  }
});

// [크기비교] 윤희의 키는 168cm이고 재덕이의 키는 183cm이다. 누구의 키가 더 큽니까?...
T11_external.push({
  key:"external_크기비교_2611",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"윤희의 키는 168cm이고 재덕이의 키는 183cm이다. 누구의 키가 더 큽니까?",
      answer:"재덕",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 재덕, 식: none"
    };
  }
});

// [크기비교] 현수는 8000원을 4일 동안 저금했고, 현영이는 7500원을 3일 동안 저금했습니다. 하...
T11_external.push({
  key:"external_크기비교_2612",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"현수는 8000원을 4일 동안 저금했고, 현영이는 7500원을 3일 동안 저금했습니다. 하루동안 저금한 금액은 누가 더 많습니까?",
      answer:"현영",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 현영, 식: none"
    };
  }
});

// [크기비교] 혜성이는 1230원을 가지고 있고, 지석이는 100원짜리 동전 12개를 가지고 있습니다. ...
T11_external.push({
  key:"external_크기비교_2614",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜성이는 1230원을 가지고 있고, 지석이는 100원짜리 동전 12개를 가지고 있습니다. 누가 돈을 더 많이 가지고 있습니까?",
      answer:"혜성",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 혜성, 식: none"
    };
  }
});

// [크기비교] 정수와 민정이는 각각 4300원, 3200원을 저금하였습니다. 다음 달부터 매달 정수는 5...
T11_external.push({
  key:"external_크기비교_2615",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정수와 민정이는 각각 4300원, 3200원을 저금하였습니다. 다음 달부터 매달 정수는 500원씩, 민정이는 600원씩 저금한다면 6개월 후에는 정수와 민정이 중에서 적게 저금한 사람은 누구입니까?",
      answer:"정수",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 정수, 식: none"
    };
  }
});

// [크기비교] 지훈이의 몸무게는 80kg이고, 지선이의 몸무게는 43kg입니다. 몸무게가 더 적은 사람은...
T11_external.push({
  key:"external_크기비교_2616",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지훈이의 몸무게는 80kg이고, 지선이의 몸무게는 43kg입니다. 몸무게가 더 적은 사람은 누구입니까?",
      answer:"지선",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 지선, 식: none"
    };
  }
});

// [크기비교] 희성이와 민희는 과수원에서 사과를 수확하였습니다. 희성이는 11kg을 수확하고 민희는 20...
T11_external.push({
  key:"external_크기비교_2618",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"희성이와 민희는 과수원에서 사과를 수확하였습니다. 희성이는 11kg을 수확하고 민희는 20kg을 수확하였다고 할 때, 더 많이 수확한 사람은 누구입니까?",
      answer:"희성",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 희성, 식: none"
    };
  }
});

// [크기비교] 경진이는 1000원짜리 지폐 5장을 가지고 있고, 송아는 100원짜리 동전 40개와 500...
T11_external.push({
  key:"external_크기비교_2619",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"경진이는 1000원짜리 지폐 5장을 가지고 있고, 송아는 100원짜리 동전 40개와 500원짜리 동전 3개를 가지고 있습니다. 경진이와 송아 중에서 누가 돈을 더 적게 가지고 있습니까?",
      answer:"경진",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 경진, 식: none"
    };
  }
});

// [크기비교] 342명이 공원에서 운동을 하고, 70명이 체육관에서 운동을 하고 있습니다. 공원에서 70...
T11_external.push({
  key:"external_크기비교_2620",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"342명이 공원에서 운동을 하고, 70명이 체육관에서 운동을 하고 있습니다. 공원에서 70명이 체육관에 가서 운동을 한다면 어디서 운동을 하는 사람이 더 많습니까?",
      answer:"공원",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 공원, 식: none"
    };
  }
});

// [크기비교] 컵은 동전 667개의 무게와 같고, 접시는 동전 665개의 무게와 같습니다. 컵과 접시 중...
T11_external.push({
  key:"external_크기비교_2621",
  unitId:"m1-1-1-II-1",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"컵은 동전 667개의 무게와 같고, 접시는 동전 665개의 무게와 같습니다. 컵과 접시 중에서 더 가벼운 것은 무엇입니까?",
      answer:"접시",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 접시, 식: none"
    };
  }
});

// [크기비교] 민준이네 학교 학년별 학생 수를 조사하였습니다. 민준이네 학교의 총 학생 수는 1500명이...
T11_external.push({
  key:"external_크기비교_2622",
  unitId:"m1-1-1-I-2",
  difficulty:2,
  tags:["크기비교","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민준이네 학교 학년별 학생 수를 조사하였습니다. 민준이네 학교의 총 학생 수는 1500명이고 3학년까지 있으며 1학년 학생 수는 500, 2학년 학생 수는 450명 일 때,가장 적은 학생이 있는 학년은 몇학년 입니까?",
      answer:"2학년",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2학년, 식: none"
    };
  }
});

// [도형산술] 정원이의 책삭은 가로가 세로의 5배이고, 둘레가 600cm인 직사각형 모양입니다. 이 책상...
T11_external.push({
  key:"external_도형산술_2626",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이의 책삭은 가로가 세로의 5배이고, 둘레가 600cm인 직사각형 모양입니다. 이 책상의 넓이를 구하시오.",
      answer:"12500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12500, 식: none"
    };
  }
});

// [도형산술] 가로 15cm, 세로 7cm, 높이 5cm인 직육면체 모양의 티슈곽 안에 들어가는 티슈의 ...
T11_external.push({
  key:"external_도형산술_2628",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 15cm, 세로 7cm, 높이 5cm인 직육면체 모양의 티슈곽 안에 들어가는 티슈의 최대 부피는 얼마인가요?",
      answer:"525",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 525, 식: none"
    };
  }
});

// [도형산술] 옆면이 모두 서로 합동인 직사각형으로 이루어진 입체도형의 밑면은 넓이가 50cm2인 다각형...
T11_external.push({
  key:"external_도형산술_2629",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옆면이 모두 서로 합동인 직사각형으로 이루어진 입체도형의 밑면은 넓이가 50cm2인 다각형입니다. 이 입체도형의 높이가 8cm라면 부피는 얼마입니까?",
      answer:"400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 400, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 65cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들...
T11_external.push({
  key:"external_도형산술_2630",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 65cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들어갈 수 있는 가장 큰 크기의 통의 높이를 구하시오.",
      answer:"65",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 65, 식: none"
    };
  }
});

// [도형산술] 밑면은 정육각형이고, 옆면은 가로와 세로의 길이가 각각 8cm, 17cm인 직사각형으로 이...
T11_external.push({
  key:"external_도형산술_2631",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면은 정육각형이고, 옆면은 가로와 세로의 길이가 각각 8cm, 17cm인 직사각형으로 이루어진 각기둥이 있습니다. 이 각기둥의 옆면의 넓이 합은 몇 cm2입니까?",
      answer:"816",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 816, 식: none"
    };
  }
});

// [도형산술] 평행사변형의 둘레가 28cm이고 한 변의 길이가 6cm일 때, 이웃하는 변의 길이를 구하시...
T11_external.push({
  key:"external_도형산술_2632",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평행사변형의 둘레가 28cm이고 한 변의 길이가 6cm일 때, 이웃하는 변의 길이를 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 구각형의 대각선은 총 몇 개인가?...
T11_external.push({
  key:"external_도형산술_2633",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"구각형의 대각선은 총 몇 개인가?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [도형산술] 둘레가 100cm인 직사각형의 가로 길이가 A cm이고, 세로의 길이는 가로 길이의 4배입...
T11_external.push({
  key:"external_도형산술_2634",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 100cm인 직사각형의 가로 길이가 A cm이고, 세로의 길이는 가로 길이의 4배입니다. 직사각형의 넓이는 몇 cm2입니까?",
      answer:"400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 400, 식: none"
    };
  }
});

// [도형산술] 직사각형 모양의 두 공책이 있습니다. 한 공책은 가로 8cm, 세로 12cm이고 다른 공책...
T11_external.push({
  key:"external_도형산술_2635",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직사각형 모양의 두 공책이 있습니다. 한 공책은 가로 8cm, 세로 12cm이고 다른 공책은 가로 9cm, 세로 15cm일 때. 두 공책의 넓이의 차이를 구하시오.",
      answer:"39",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 39, 식: none"
    };
  }
});

// [도형산술] 다음 직사각형은 둘레가 40cm입니다. 가로의 길이가 8cm 일 때, 세로의 길이를 구하시...
T11_external.push({
  key:"external_도형산술_2636",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 직사각형은 둘레가 40cm입니다. 가로의 길이가 8cm 일 때, 세로의 길이를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 두 대각선의 길이가 16cm, 18cm인 마름모가 있습니다. 이 마름모를 밑면으로 하고, ...
T11_external.push({
  key:"external_도형산술_2637",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 대각선의 길이가 16cm, 18cm인 마름모가 있습니다. 이 마름모를 밑면으로 하고, 높이가 10cm인 각기둥의 부피는 몇 cm3입니까?",
      answer:"1440",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1440, 식: none"
    };
  }
});

// [도형산술] 송화는 이불 구매를 위해 이불 크기를 비교하고 있습니다. 직사각형 모양의 이불로 가로 길이...
T11_external.push({
  key:"external_도형산술_2638",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화는 이불 구매를 위해 이불 크기를 비교하고 있습니다. 직사각형 모양의 이불로 가로 길이는 100cm로 같지만 세로 길이가 150cm, 200cm로 다른 두 이불의 둘레의 차를 구하시오.",
      answer:"100",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100, 식: none"
    };
  }
});

// [도형산술] 반지름이 18cm인 원을 원 모양 그대로 줄여 반지름이 13cm인 원으로 만들었습니다. 줄...
T11_external.push({
  key:"external_도형산술_2639",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"반지름이 18cm인 원을 원 모양 그대로 줄여 반지름이 13cm인 원으로 만들었습니다. 줄이기 전과 후에 원의 원주의 차는 몇 cm입니까?",
      answer:"31.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 31.4, 식: none"
    };
  }
});

// [도형산술] 둘레의 길이가 72cm인 정삼각형의 한변의 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2642",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레의 길이가 72cm인 정삼각형의 한변의 길이를 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [도형산술] 어느 각기둥은 부피가 400cm3입니다. 이 각기둥의 높이가 8cm일 때, 한 밑면의 넓이...
T11_external.push({
  key:"external_도형산술_2643",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 각기둥은 부피가 400cm3입니다. 이 각기둥의 높이가 8cm일 때, 한 밑면의 넓이는 몇 cm2입니까?",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: none"
    };
  }
});

// [도형산술] 가로가 11cm인 직사각형의 둘레가 50cm일 때, 세로의 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2644",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로가 11cm인 직사각형의 둘레가 50cm일 때, 세로의 길이를 구하시오.",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [도형산술] 다음 입체도형은 밑면의 모양이 사각형이고, 옆면의 모양이 모두 삼각형입니다. 이 입체도형은...
T11_external.push({
  key:"external_도형산술_2646",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 입체도형은 밑면의 모양이 사각형이고, 옆면의 모양이 모두 삼각형입니다. 이 입체도형은 모두 몇 개의 면을 가지고 있나요?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 넓이가 45cm2인 다각형을 밑면으로 하는 각기둥이 있습니다. 이 각기둥의 부피가 900c...
T11_external.push({
  key:"external_도형산술_2648",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 45cm2인 다각형을 밑면으로 하는 각기둥이 있습니다. 이 각기둥의 부피가 900cm3이면 높이는 얼마인지 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [도형산술] 직각삼각형의 높이를 축으로 한 바퀴 회전시켜 만든 입체도형의 높이가 18cm입니다. 입체도...
T11_external.push({
  key:"external_도형산술_2649",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직각삼각형의 높이를 축으로 한 바퀴 회전시켜 만든 입체도형의 높이가 18cm입니다. 입체도형의 밑면의 반지름이 높이보다 1/3 짧을 때, 처음 직각삼각형의 밑변의 길이는 몇 cm입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 11cm인 마름모의 네 각의 크기가 모두 같을 때, 이 마름모의 넓이는 몇...
T11_external.push({
  key:"external_도형산술_2650",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 11cm인 마름모의 네 각의 크기가 모두 같을 때, 이 마름모의 넓이는 몇 cm2입니까?",
      answer:"121",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 121, 식: none"
    };
  }
});

// [도형산술] 모서리의 길이가 모두 같은 각뿔이 있습니다. 이 각뿔의 면의 수는 9개이고, 한 모서리의 ...
T11_external.push({
  key:"external_도형산술_2651",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"모서리의 길이가 모두 같은 각뿔이 있습니다. 이 각뿔의 면의 수는 9개이고, 한 모서리의 길이가 15cm입니다. 이 각뿔의 모든 모서리의 길이 합은 얼마입니까?",
      answer:"240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 240, 식: none"
    };
  }
});

// [도형산술] 철사를 겹치지 않게 모두 사용하여 한 변의 길이가 20cm 정칠각형을 만들었습니다. 이 철...
T11_external.push({
  key:"external_도형산술_2652",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철사를 겹치지 않게 모두 사용하여 한 변의 길이가 20cm 정칠각형을 만들었습니다. 이 철사로 한변의 길이가 5cm인 정사각형을 몇 개까지 만들 수 있습니까? (단, 정사각형은 서로 겹치지 않는다.)",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [도형산술] 평행사변형 한 각의 크기가 140º일 때, 이 각과 마주보고 있는 각을 제외한 두 각의 합...
T11_external.push({
  key:"external_도형산술_2653",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평행사변형 한 각의 크기가 140º일 때, 이 각과 마주보고 있는 각을 제외한 두 각의 합은 몇 º입니까?",
      answer:"80",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 80, 식: none"
    };
  }
});

// [도형산술] 직각삼각형의 높이가 12cm이고 밑변이 5cm일 때, 높이를 기준으로 한 바퀴 돌려 입체도...
T11_external.push({
  key:"external_도형산술_2655",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직각삼각형의 높이가 12cm이고 밑변이 5cm일 때, 높이를 기준으로 한 바퀴 돌려 입체도형을 만들었습니다. 만들어진 입체도형의 밑면의 넓이는 몇 cm2입니까?",
      answer:"78.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78.5, 식: none"
    };
  }
});

// [도형산술] 어떤 원뿔의 모선은 12cm입니다. 원뿔을 앞에서 본 모양의 둘레가 50cm일 때, 원뿔 ...
T11_external.push({
  key:"external_도형산술_2657",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 원뿔의 모선은 12cm입니다. 원뿔을 앞에서 본 모양의 둘레가 50cm일 때, 원뿔 밑면을 이루는 원의 둘레의 길이는 몇 cm입니까?",
      answer:"81.64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 81.64, 식: none"
    };
  }
});

// [도형산술] 평행사변형의 밑변이 16cm이고 높이가 10cm입니다. 이 평행사변형을 밑면으로 하는 각기...
T11_external.push({
  key:"external_도형산술_2661",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평행사변형의 밑변이 16cm이고 높이가 10cm입니다. 이 평행사변형을 밑면으로 하는 각기둥의 높이가 15cm일 때, 각기둥의 부피는 얼마입니까?",
      answer:"2400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2400, 식: none"
    };
  }
});

// [도형산술] 밑변 16cm인 정삼각형과 반지름 4cm인 반원 두 개를 이용하여 하트모형을 만들었을 때 ...
T11_external.push({
  key:"external_도형산술_2663",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑변 16cm인 정삼각형과 반지름 4cm인 반원 두 개를 이용하여 하트모형을 만들었을 때 이 하트 모형의 둘레는 몇 cm입니까?(겹치는 부분 없습니다))",
      answer:"57.12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 57.12, 식: none"
    };
  }
});

// [도형산술] 겉넓이가 384cm2인 정육면체의 부피는 몇 cm3입니까?...
T11_external.push({
  key:"external_도형산술_2665",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"겉넓이가 384cm2인 정육면체의 부피는 몇 cm3입니까?",
      answer:"512",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 512, 식: none"
    };
  }
});

// [도형산술] 석형이는 부피가 108cm3이고 높이가 10cm인 오각기둥 모양의 의자를 가지고 있습니다....
T11_external.push({
  key:"external_도형산술_2666",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"석형이는 부피가 108cm3이고 높이가 10cm인 오각기둥 모양의 의자를 가지고 있습니다. 이 의자의 밑면의 넓이는 얼마인가요?",
      answer:"10.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10.8, 식: none"
    };
  }
});

// [도형산술] 준완이는 변의 길이가 23cm,13cm인 평행사변형을 털실을 이용하여 만드려고 합니다. 이...
T11_external.push({
  key:"external_도형산술_2667",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이는 변의 길이가 23cm,13cm인 평행사변형을 털실을 이용하여 만드려고 합니다. 이때 필요한 털실의 길이는 몇 cm인가요?",
      answer:"72",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 72, 식: none"
    };
  }
});

// [도형산술] 밑면의 반지름이 12cm인 연탄에 반지름이 3cm인 구멍이 8개 뚫려 있습니다. 연탄에서 ...
T11_external.push({
  key:"external_도형산술_2668",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 반지름이 12cm인 연탄에 반지름이 3cm인 구멍이 8개 뚫려 있습니다. 연탄에서 구멍이 뚫리지 않은 부분의 넓이는 얼마입니까?",
      answer:"226.08",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 226.08, 식: none"
    };
  }
});

// [도형산술] 둘레가 28cm이고, 가로가 8cm인 직사각형이 있습니다. 세로의 길이는 몇 cm입니까?...
T11_external.push({
  key:"external_도형산술_2669",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 28cm이고, 가로가 8cm인 직사각형이 있습니다. 세로의 길이는 몇 cm입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 옆면의 넓이를 모두 더했을 때 그 값이 350cm2인 각뿔은 면의 개수가 6개입니다. 옆면...
T11_external.push({
  key:"external_도형산술_2670",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옆면의 넓이를 모두 더했을 때 그 값이 350cm2인 각뿔은 면의 개수가 6개입니다. 옆면이 모두 똑같은 이등변삼각형이고, 이등변삼각형의 높이가 14cm일 때, 밑면의 한 변의 길이는 몇 cm인지 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 부피가 80cm3인 육각기둥 모양의 의자가 있습니다. 이 의자의 높이가 8cm일 때, 밑면...
T11_external.push({
  key:"external_도형산술_2671",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부피가 80cm3인 육각기둥 모양의 의자가 있습니다. 이 의자의 높이가 8cm일 때, 밑면의 넓이를 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 다음 각기둥은 모서리의 개수가 18개입니다. 이 각기둥의 꼭짓점의 개수는 몇 개인가요?...
T11_external.push({
  key:"external_도형산술_2672",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 각기둥은 모서리의 개수가 18개입니다. 이 각기둥의 꼭짓점의 개수는 몇 개인가요?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 정삼각형 6개를 이용하여 새로운 정육각형 하나를 만들었습니다. 삼각형 한 각의 크기가 18...
T11_external.push({
  key:"external_도형산술_2673",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정삼각형 6개를 이용하여 새로운 정육각형 하나를 만들었습니다. 삼각형 한 각의 크기가 180º임과, 1회전의 각이 360º임을 이용하여 정육각형 한 각의 크기를 구하면 몇 º입니까?",
      answer:"120",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 120, 식: none"
    };
  }
});

// [도형산술] 66cm의 실을 남김없이 사용하여 정삼각형 모양을 만들었습니다. 이 정삼각형의 한 변의 길...
T11_external.push({
  key:"external_도형산술_2675",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"66cm의 실을 남김없이 사용하여 정삼각형 모양을 만들었습니다. 이 정삼각형의 한 변의 길이를 구하시오.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [도형산술] 어떤 각뿔의 꼭짓점의 수를 세어보았더니 13개였습니다. 이 각뿔의 모서리 수를 구하세요....
T11_external.push({
  key:"external_도형산술_2676",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각뿔의 꼭짓점의 수를 세어보았더니 13개였습니다. 이 각뿔의 모서리 수를 구하세요.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [도형산술] 마름모에 대각선 하나를 그어 합동인 삼각형 한 쌍을 만들었습니다. 이 대각선의 길이가 15...
T11_external.push({
  key:"external_도형산술_2678",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"마름모에 대각선 하나를 그어 합동인 삼각형 한 쌍을 만들었습니다. 이 대각선의 길이가 15cm이고 마름모 한 변의 길이가 6cm일 때, 만들어진 삼각형 하나의 둘레의 길이는 몇 cm입니까?",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [도형산술] 지름이 90cm인 훌라후프를 직선으로 5번 굴렸습니다. 훌라후프가 굴러간 거리를 구하시오....
T11_external.push({
  key:"external_도형산술_2681",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 90cm인 훌라후프를 직선으로 5번 굴렸습니다. 훌라후프가 굴러간 거리를 구하시오.",
      answer:"1413",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1413, 식: none"
    };
  }
});

// [도형산술] 가로와 세로의 비가 7:4인 직사각형 모양의 밭의 둘레에 울타리를 만들기 위해 철사를 겹치...
T11_external.push({
  key:"external_도형산술_2682",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로와 세로의 비가 7:4인 직사각형 모양의 밭의 둘레에 울타리를 만들기 위해 철사를 겹치지 않게 둘렀습니다. 사용한 철사가 66m라면 밭의 넓이는 몇 m2입니까?",
      answer:"252",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 252, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 22cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들...
T11_external.push({
  key:"external_도형산술_2683",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 22cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들어갈 수 있는 가장 큰 크기의 통의 부피를 구하시오?.",
      answer:"8358.68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8358.68, 식: none"
    };
  }
});

// [도형산술] 가로 15cm, 세로 5cm인 직사각형 모양의 카펫의 넓이는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2686",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 15cm, 세로 5cm인 직사각형 모양의 카펫의 넓이는 얼마입니까?",
      answer:"75",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 75, 식: none"
    };
  }
});

// [도형산술] 지름이 14cm인 원 모양의 피자와, 한 변의 길이가 14cm인 정사각형 모양의 피자가 각...
T11_external.push({
  key:"external_도형산술_2687",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 14cm인 원 모양의 피자와, 한 변의 길이가 14cm인 정사각형 모양의 피자가 각각 한 판 씩 있습니다. 두 피자의 넓이 차이는 몇 cm2입니까?",
      answer:"42.14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 42.14, 식: none"
    };
  }
});

// [도형산술] 지름이 40cm인 원 모양의 쿠키를 똑같이 8조각으로 나누었습니다. 쿠키 한 조각의 넓이는...
T11_external.push({
  key:"external_도형산술_2694",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 40cm인 원 모양의 쿠키를 똑같이 8조각으로 나누었습니다. 쿠키 한 조각의 넓이는 몇 cm입니까?",
      answer:"157",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 157, 식: none"
    };
  }
});

// [도형산술] 밑면의 원주가 31.4cm이고 높이가 8cm인 원기둥의 부피는 몇 cm3입니까?...
T11_external.push({
  key:"external_도형산술_2698",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 원주가 31.4cm이고 높이가 8cm인 원기둥의 부피는 몇 cm3입니까?",
      answer:"628",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 628, 식: none"
    };
  }
});

// [도형산술] 종이에 한 각의 크기가 120º인 삼각형이 그려져있습니다. 이 삼각형이 이등변삼각형일 때,...
T11_external.push({
  key:"external_도형산술_2699",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"종이에 한 각의 크기가 120º인 삼각형이 그려져있습니다. 이 삼각형이 이등변삼각형일 때, 다른 한 각의 크기는 몇 º입니까?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [도형산술] 가로9.5cm, 세로 13.5cm인 직각삼각형을 세로를 기준으로 한 바퀴 돌렸을때 생기는 ...
T11_external.push({
  key:"external_도형산술_2704",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로9.5cm, 세로 13.5cm인 직각삼각형을 세로를 기준으로 한 바퀴 돌렸을때 생기는 원뿔의 밑면의 넓이를 구하시오.",
      answer:"283.39",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 283.39, 식: none"
    };
  }
});

// [도형산술] 정원이는 도화지를 사진을 이용해 꾸미고 있습니다. 가로 10cm, 세로 15cm의 직사각형...
T11_external.push({
  key:"external_도형산술_2705",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정원이는 도화지를 사진을 이용해 꾸미고 있습니다. 가로 10cm, 세로 15cm의 직사각형 모양의 사진 5개를 가로 50cm, 세로 70cm인 직사각형 도화지에 붙였을 때 남은 공간의 면적을 구하시오.",
      answer:"2750",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2750, 식: none"
    };
  }
});

// [도형산술] 어떤 각뿔의 밑면이 정구각형이고 그 둘레가 90cm입니다. 이 각뿔의 옆면이 모두 이등변삼...
T11_external.push({
  key:"external_도형산술_2707",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각뿔의 밑면이 정구각형이고 그 둘레가 90cm입니다. 이 각뿔의 옆면이 모두 이등변삼각형이며, 삼각형 세 변 중 한 변은 12cm입니다. 이 각뿔의 모든 모서리 길이를 더하면 몇 cm입니까?",
      answer:"198",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 198, 식: none"
    };
  }
});

// [도형산술] 송화는 실을 겹치지 않게 사용하여 두 변의 길이가 각각 16cm, 19cm인 평행사변형을 ...
T11_external.push({
  key:"external_도형산술_2709",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"송화는 실을 겹치지 않게 사용하여 두 변의 길이가 각각 16cm, 19cm인 평행사변형을 만들었습니다. 평행사변형 둘레의 길이는 몇 cm입니까?",
      answer:"70",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 70, 식: none"
    };
  }
});

// [도형산술] 수학 문제집의 가로 길이가 10cm, 세로 길이가 15cm이고 직각사각형의 모양 일 때, ...
T11_external.push({
  key:"external_도형산술_2712",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"수학 문제집의 가로 길이가 10cm, 세로 길이가 15cm이고 직각사각형의 모양 일 때, 이 수학 문제집의 넓이를 구하시오.",
      answer:"150",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 150, 식: none"
    };
  }
});

// [도형산술] 각기둥의 두 밑면의 넓이의 합이 100cm2이고, 부피는 600cm3입니다. 이 각기둥의 ...
T11_external.push({
  key:"external_도형산술_2714",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"각기둥의 두 밑면의 넓이의 합이 100cm2이고, 부피는 600cm3입니다. 이 각기둥의 높이는 몇 cm입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 마름모의 네 각의 크기의 합은 360º입니다. 한 각의 크기가 50º일 때, 이웃하는 각의...
T11_external.push({
  key:"external_도형산술_2717",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"마름모의 네 각의 크기의 합은 360º입니다. 한 각의 크기가 50º일 때, 이웃하는 각의 크기는 몇 º입니까?",
      answer:"130",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 130, 식: none"
    };
  }
});

// [도형산술] 길이가 48cm인 철사를 이용하여 정육각형을 만들어 보려고 합니다. 철사의 끝 부분이 겹치...
T11_external.push({
  key:"external_도형산술_2718",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 48cm인 철사를 이용하여 정육각형을 만들어 보려고 합니다. 철사의 끝 부분이 겹치지 않고, 남지 않도록 하여 만들었을 때, 정육각형 한 변의 길이는 몇 cm로 해야 합니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 혜인이는 높이가 30cm이고 밑면의 반지름이 7cm인 원기둥 모양의 베개를 포장하려고 합니...
T11_external.push({
  key:"external_도형산술_2719",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"혜인이는 높이가 30cm이고 밑면의 반지름이 7cm인 원기둥 모양의 베개를 포장하려고 합니다. 베개의 옆면만 포장지로 포장을 하려고 할 때, 필요한 포장지의 최소 넓이를 구하시오.",
      answer:"1318.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1318.8, 식: none"
    };
  }
});

// [도형산술] 가로 11cm, 세로 12cm인 직사각형 모양의 화이트 보드의 둘레의 길이는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2720",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 11cm, 세로 12cm인 직사각형 모양의 화이트 보드의 둘레의 길이는 얼마입니까?",
      answer:"46",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 46, 식: none"
    };
  }
});

// [도형산술] 모양이 서로 다른 세 각기둥의 꼭짓점의 수의 합이 27개 일 때, 이 세 각기둥의 모서리의...
T11_external.push({
  key:"external_도형산술_2723",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"모양이 서로 다른 세 각기둥의 꼭짓점의 수의 합이 27개 일 때, 이 세 각기둥의 모서리의 수의 합을 구하시오.",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: none"
    };
  }
});

// [도형산술] 이등변삼각형에서 길이가 같은 두 변이 이루는 각의 크기가 110º입니다. 이 삼각형의 밑각...
T11_external.push({
  key:"external_도형산술_2724",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이등변삼각형에서 길이가 같은 두 변이 이루는 각의 크기가 110º입니다. 이 삼각형의 밑각의 크기는 몇 º입니까?",
      answer:"35",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 35, 식: none"
    };
  }
});

// [도형산술] 철사를 겹치지 않게 사용하여 세 모서리의 길이가 15cm, 7cm, 5cm인 직육면체를 만...
T11_external.push({
  key:"external_도형산술_2725",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철사를 겹치지 않게 사용하여 세 모서리의 길이가 15cm, 7cm, 5cm인 직육면체를 만들었습니다. 직육면체를 만드는데 사용한 철사의 길이는 몇 cm입니까?",
      answer:"108",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 108, 식: none"
    };
  }
});

// [도형산술] 둘레가 34cm이고, 가로가 7cm인 직사각형의 넓이는 몇 cm2 입니까?...
T11_external.push({
  key:"external_도형산술_2726",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 34cm이고, 가로가 7cm인 직사각형의 넓이는 몇 cm2 입니까?",
      answer:"70",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 70, 식: none"
    };
  }
});

// [도형산술] 지름이 12cm인 세 원이 서로 맞닿게 그려져있습니다. 이 세 원의 중심을 이어서 삼각형을...
T11_external.push({
  key:"external_도형산술_2727",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 12cm인 세 원이 서로 맞닿게 그려져있습니다. 이 세 원의 중심을 이어서 삼각형을 그렸다면, 삼각형의 둘레는 얼마인지 구하시오.",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [도형산술] 길이가 20cm인 막대의 길이를 지름으로 하는 원의 원주는 몇 cm입니까?...
T11_external.push({
  key:"external_도형산술_2728",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 20cm인 막대의 길이를 지름으로 하는 원의 원주는 몇 cm입니까?",
      answer:"62.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 62.8, 식: none"
    };
  }
});

// [도형산술] 한 면의 넓이가 64cm2인 정육면체의 부피는 몇 cm3입니까?...
T11_external.push({
  key:"external_도형산술_2729",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 면의 넓이가 64cm2인 정육면체의 부피는 몇 cm3입니까?",
      answer:"512",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 512, 식: none"
    };
  }
});

// [도형산술] 둘레가 24cm인 정사각형 3개를 겹치지 않게 한 줄로 이어붙여 만든 직사각형의 둘레의 길...
T11_external.push({
  key:"external_도형산술_2732",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 24cm인 정사각형 3개를 겹치지 않게 한 줄로 이어붙여 만든 직사각형의 둘레의 길이는 몇 cm입니까?",
      answer:"48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 48, 식: none"
    };
  }
});

// [도형산술] 밑면이 한 변의 길이가 6cm인 정사각형인 직육면체에 한 변의 길이가 3cm인 정육면체 1...
T11_external.push({
  key:"external_도형산술_2734",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면이 한 변의 길이가 6cm인 정사각형인 직육면체에 한 변의 길이가 3cm인 정육면체 12개가 들어갑니다. 이 입체도형의 높이는 몇 cm입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 높이가 10cm인 삼각기둥의 밑면은 밑변의 길이가 5cm이고, 높이가 16cm입니다. 이 ...
T11_external.push({
  key:"external_도형산술_2735",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이가 10cm인 삼각기둥의 밑면은 밑변의 길이가 5cm이고, 높이가 16cm입니다. 이 삼각기둥의 부피는 몇 입니까?",
      answer:"400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 400, 식: none"
    };
  }
});

// [도형산술] 한 밑면의 둘레가 48cm이며, 전체 모서리가 152cm인 팔각기둥이 있습니다. 이 기둥의...
T11_external.push({
  key:"external_도형산술_2737",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 밑면의 둘레가 48cm이며, 전체 모서리가 152cm인 팔각기둥이 있습니다. 이 기둥의 높이는 몇 cm입니까?",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [도형산술] 육각기둥인 경우 밑면과 수직인 면의 개수를 구하시오....
T11_external.push({
  key:"external_도형산술_2738",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"육각기둥인 경우 밑면과 수직인 면의 개수를 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 어떤 각뿔의 모든 모서리의 길이가 같고 그 합이 210cm입니다. 이 각뿔의 꼭짓점의 수가...
T11_external.push({
  key:"external_도형산술_2740",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각뿔의 모든 모서리의 길이가 같고 그 합이 210cm입니다. 이 각뿔의 꼭짓점의 수가 8개일 때, 한 모서리의 길이는 몇 cm입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [도형산술] 두 대각선의 길이가 모두 20cm인 마름모를 밑면으로 하는 각기둥 모양의 찻잔이 있습니다....
T11_external.push({
  key:"external_도형산술_2742",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 대각선의 길이가 모두 20cm인 마름모를 밑면으로 하는 각기둥 모양의 찻잔이 있습니다. 이 찻잔에 차를 최대 800cm3까지 따를 수 있다면, 찻잔의 높이는 얼마입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [도형산술] 넓이가 70cm2인 다각형을 밑면으로 하는 각기둥의 높이가 6cm입니다. 이 각기둥의 부피...
T11_external.push({
  key:"external_도형산술_2743",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 70cm2인 다각형을 밑면으로 하는 각기둥의 높이가 6cm입니다. 이 각기둥의 부피는 몇 cm3입니까?",
      answer:"420",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 420, 식: none"
    };
  }
});

// [도형산술] 높이가 20cm, 밑면의 반지름이 7cm인 원기둥이 있습니다. 이 원기둥을 앞에서 본 평면...
T11_external.push({
  key:"external_도형산술_2747",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이가 20cm, 밑면의 반지름이 7cm인 원기둥이 있습니다. 이 원기둥을 앞에서 본 평면도형의 넓이는 얼마입니까?",
      answer:"280",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 280, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 11cm인 정사각형을 이등분하여 직사각형 2개로 만들었습니다. 직사각형 1...
T11_external.push({
  key:"external_도형산술_2749",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 11cm인 정사각형을 이등분하여 직사각형 2개로 만들었습니다. 직사각형 1개의 둘레는 몇 cm입니까?",
      answer:"33",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 33, 식: none"
    };
  }
});

// [도형산술] 둘레가 60cm인 평행사변형의 이웃한 두 변의 길이의 합을 구하시오....
T11_external.push({
  key:"external_도형산술_2750",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 60cm인 평행사변형의 이웃한 두 변의 길이의 합을 구하시오.",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [도형산술] 한 각이 90º인 삼각형의 넓이가 42cm2입니다. 이 삼각형의 높이가 6cm일 때, 밑변...
T11_external.push({
  key:"external_도형산술_2751",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 각이 90º인 삼각형의 넓이가 42cm2입니다. 이 삼각형의 높이가 6cm일 때, 밑변의 길이는 몇 cm입니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [도형산술] 부피가 729cm3인 정육면체의 한 모서리의 길이는 얼마인가요?...
T11_external.push({
  key:"external_도형산술_2753",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부피가 729cm3인 정육면체의 한 모서리의 길이는 얼마인가요?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 직육면체의 모서리의 수는 직육면체의 꼭짓점의 수의 몇 배입니까?...
T11_external.push({
  key:"external_도형산술_2754",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직육면체의 모서리의 수는 직육면체의 꼭짓점의 수의 몇 배입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [도형산술] 밑면이 넓이가 40cm2인 다각형이고, 옆면들이 직사각형으로 이루어진 입체도형의 높이가 6...
T11_external.push({
  key:"external_도형산술_2755",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면이 넓이가 40cm2인 다각형이고, 옆면들이 직사각형으로 이루어진 입체도형의 높이가 6cm입니다. 이 입체도형의 부피는 얼마인지 구하시오.",
      answer:"240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 240, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 32cm인 정사각형 종이 안에 크기가 같은 원4개를 겹치는 부분 없이 그릴...
T11_external.push({
  key:"external_도형산술_2756",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 32cm인 정사각형 종이 안에 크기가 같은 원4개를 겹치는 부분 없이 그릴 때 한 원의 최대 둘레는 얼마입니까?",
      answer:"50.24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50.24, 식: none"
    };
  }
});

// [도형산술] 가로, 세로 길이가 45cm, 80cm인 직사각형 모양의 창문을 만들기 위해 필요한 유리의...
T11_external.push({
  key:"external_도형산술_2757",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로, 세로 길이가 45cm, 80cm인 직사각형 모양의 창문을 만들기 위해 필요한 유리의 넓이는 몇 cm2입니까?",
      answer:"3600",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3600, 식: none"
    };
  }
});

// [도형산술] 부피가 300cm3인 각기둥의 높이가 12cm일 때, 밑면의 넓이를 구하시오....
T11_external.push({
  key:"external_도형산술_2758",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부피가 300cm3인 각기둥의 높이가 12cm일 때, 밑면의 넓이를 구하시오.",
      answer:"25",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 25, 식: none"
    };
  }
});

// [도형산술] 길이가 64cm인 털실을 이용하여 가장 큰 정사각형을 만들었을 때, 한 변의 길이를 구하시...
T11_external.push({
  key:"external_도형산술_2759",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 64cm인 털실을 이용하여 가장 큰 정사각형을 만들었을 때, 한 변의 길이를 구하시오.",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [도형산술] 반지름이 3cm인 원 모양의 스티커 4장을 종이에 겹치지 않게 붙였습니다. 종이의 넓이가 ...
T11_external.push({
  key:"external_도형산술_2760",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"반지름이 3cm인 원 모양의 스티커 4장을 종이에 겹치지 않게 붙였습니다. 종이의 넓이가 250cm2일 때, 스티커가 붙지 않은 부분은 몇 cm2입니까?",
      answer:"136.96",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 136.96, 식: none"
    };
  }
});

// [도형산술] 다음 정육면체를 이루고 있는 모든 면의 넓이의 합이 216cm2 일 때, 정육면체의 한 모...
T11_external.push({
  key:"external_도형산술_2761",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 정육면체를 이루고 있는 모든 면의 넓이의 합이 216cm2 일 때, 정육면체의 한 모서리의 길이를 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 정삼각형 세 변의 길이의 합이 39cm입니다. 한 변의 길이는 몇 cm입니까?...
T11_external.push({
  key:"external_도형산술_2763",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정삼각형 세 변의 길이의 합이 39cm입니다. 한 변의 길이는 몇 cm입니까?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [도형산술] 지민이는 반지름이 10m인 원 모양의 산책길을 따라 몇 바퀴 뛰었습니다. 지민이가 뛴 거리...
T11_external.push({
  key:"external_도형산술_2765",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지민이는 반지름이 10m인 원 모양의 산책길을 따라 몇 바퀴 뛰었습니다. 지민이가 뛴 거리가 1256m일 때, 지민이가 산책길을 몇 바퀴 뛰었는지 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [도형산술] 세 변의 길이가 모두 같은 삼각형의 둘레는 36cm입니다. 한 변의 길이는 몇 cm입니까?...
T11_external.push({
  key:"external_도형산술_2767",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 변의 길이가 모두 같은 삼각형의 둘레는 36cm입니다. 한 변의 길이는 몇 cm입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 꼭짓점의 수가 24개인 각기둥은 몇 개의 모서리를 가지고 있습니까?...
T11_external.push({
  key:"external_도형산술_2768",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"꼭짓점의 수가 24개인 각기둥은 몇 개의 모서리를 가지고 있습니까?",
      answer:"36",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 36, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 14cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들...
T11_external.push({
  key:"external_도형산술_2770",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 14cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들어갈 수 있는 가장 큰 크기의 통의 부피는 몇 cm3입니까?",
      answer:"2154.04",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2154.04, 식: none"
    };
  }
});

// [도형산술] 정십각형의 한 각의 크기를 구하시오....
T11_external.push({
  key:"external_도형산술_2771",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정십각형의 한 각의 크기를 구하시오.",
      answer:"144",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 144, 식: none"
    };
  }
});

// [도형산술] 어떤 각뿔을 보고, 면과 모서리의 수를 세어 더했더니 16이 되었습니다. 이 각뿔의 밑면의...
T11_external.push({
  key:"external_도형산술_2772",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각뿔을 보고, 면과 모서리의 수를 세어 더했더니 16이 되었습니다. 이 각뿔의 밑면의 변의 수를 구하시오.",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 가로, 세로의 길이가 모두 90cm인 정사각형 담요의 넓이는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2775",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로, 세로의 길이가 모두 90cm인 정사각형 담요의 넓이는 얼마입니까?",
      answer:"8100",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8100, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 12cm인 정육면체 모양의 두부를 같은 간격으로 가로,세로 3등분 하여...
T11_external.push({
  key:"external_도형산술_2776",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 12cm인 정육면체 모양의 두부를 같은 간격으로 가로,세로 3등분 하여 잘랐습니다. 이때 잘린 두부 하나의 부피는 얼마인지 구하시오.",
      answer:"27",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 27, 식: none"
    };
  }
});

// [도형산술] 반지름이 14m인 원 모양의 광장 중심에 반지름이 5m인 분수대를 설치하려고 합니다. 분수...
T11_external.push({
  key:"external_도형산술_2778",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"반지름이 14m인 원 모양의 광장 중심에 반지름이 5m인 분수대를 설치하려고 합니다. 분수대를 제외한 광장의 넓이는 몇 m2입니까?",
      answer:"536.94",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 536.94, 식: none"
    };
  }
});

// [도형산술] 색종이의 둘레가 48cm이고 가로와 세로의 비가 5:7일 때, 가로의 길이는 몇 cm입니까...
T11_external.push({
  key:"external_도형산술_2779",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"색종이의 둘레가 48cm이고 가로와 세로의 비가 5:7일 때, 가로의 길이는 몇 cm입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 가로 3cm, 세로 4cm, 높이 5cm 인 직육면체 모양의 지우개가 있습니다. 한 면의 ...
T11_external.push({
  key:"external_도형산술_2780",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 3cm, 세로 4cm, 높이 5cm 인 직육면체 모양의 지우개가 있습니다. 한 면의 길이가 30cm인 정육면체 모양의 상자 안에 지우개를 빈틈없이 쌓으려고 합니다. 지우개를 모두 몇 개 쌓을 수 있나요?",
      answer:"450",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 450, 식: none"
    };
  }
});

// [도형산술] 면의 수가 12개인 각기둥의 모서리의 수는 몇 개 인가요?...
T11_external.push({
  key:"external_도형산술_2788",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"면의 수가 12개인 각기둥의 모서리의 수는 몇 개 인가요?",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [도형산술] 밑면이 다각형이고 옆면은 삼각형인 입체도형은 15개의 꼭짓점을 가지고 있습니다. 이 입체도...
T11_external.push({
  key:"external_도형산술_2790",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면이 다각형이고 옆면은 삼각형인 입체도형은 15개의 꼭짓점을 가지고 있습니다. 이 입체도형의 밑면은 몇 개의 변을 가지고 있습니까?",
      answer:"14",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 14, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 22cm이고, 둘레의 길이가 70cm인 평행사변형의 다른 한 변의 길이는?...
T11_external.push({
  key:"external_도형산술_2791",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 22cm이고, 둘레의 길이가 70cm인 평행사변형의 다른 한 변의 길이는?",
      answer:"13",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13, 식: none"
    };
  }
});

// [도형산술] 넓이가 90cm2이고 높이가 9cm인 평행사변형이 있습니다. 이 평행사변형의 한 변의 길이...
T11_external.push({
  key:"external_도형산술_2792",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 90cm2이고 높이가 9cm인 평행사변형이 있습니다. 이 평행사변형의 한 변의 길이가 15cm일 때, 네 변의 길이의 합은 얼마입니까?",
      answer:"50",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50, 식: none"
    };
  }
});

// [도형산술] 재인이가 가지고 있는 각기둥은 모서리의 길이가 모두 같고, 모서리의 길이를 모두 더하면 4...
T11_external.push({
  key:"external_도형산술_2793",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"재인이가 가지고 있는 각기둥은 모서리의 길이가 모두 같고, 모서리의 길이를 모두 더하면 450cm입니다. 재인이의 각기둥 밑면의 모양이 십각형일 때, 한 모서리의 길이는 얼마입니까?",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [도형산술] 세 변의 길이가 같은 삼각형의 둘레가 36cm일 때, 한변의 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2794",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세 변의 길이가 같은 삼각형의 둘레가 36cm일 때, 한변의 길이를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 높이가 20cm이고 부피가 500cm3인 사각기둥의 밑면은 정사각형입니다. 이 정사각형의 ...
T11_external.push({
  key:"external_도형산술_2795",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이가 20cm이고 부피가 500cm3인 사각기둥의 밑면은 정사각형입니다. 이 정사각형의 한 변의 길이는 몇 cm입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 직사각형 모양의 주방 매트를 구매하려고 합니다. 구매하려는 매트의 크기가 가로 20cm, ...
T11_external.push({
  key:"external_도형산술_2801",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직사각형 모양의 주방 매트를 구매하려고 합니다. 구매하려는 매트의 크기가 가로 20cm, 세로 50cm인 경우 이 매트의 둘레를 구하시오.",
      answer:"140",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 140, 식: none"
    };
  }
});

// [도형산술] 원기둥의 밑면은 반지름이 8cm인 원입니다. 이 원기둥을 앞에서 봤을 때 나타나는 평면도형...
T11_external.push({
  key:"external_도형산술_2803",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원기둥의 밑면은 반지름이 8cm인 원입니다. 이 원기둥을 앞에서 봤을 때 나타나는 평면도형의 둘레가 56cm일 때, 이 원기둥의 부피를 구하시오.",
      answer:"2411.52",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2411.52, 식: none"
    };
  }
});

// [도형산술] 밑면이 사각형인 각뿔의 면의 수는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2804",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면이 사각형인 각뿔의 면의 수는 얼마입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 지름이 20cm인 원을 밑면으로 하는 원기둥 모양의 컵이 있습니다. 이 컵의 지름과 높이를...
T11_external.push({
  key:"external_도형산술_2805",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 20cm인 원을 밑면으로 하는 원기둥 모양의 컵이 있습니다. 이 컵의 지름과 높이를 모두 3배로 늘렸을 때의 부피가 4800cm3일 때, 처음 원기둥의 높이는 몇 cm입니까?",
      answer:"0.57",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 0.57, 식: none"
    };
  }
});

// [도형산술] 넓이가 36cm2 인 정사각형의 둘레의 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2808",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 36cm2 인 정사각형의 둘레의 길이를 구하시오.",
      answer:"24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 24, 식: none"
    };
  }
});

// [도형산술] 다음 직육면체의 밑면은 정사각형이고, 밑면의 둘레는 12cm입니다. 높이는 5cm라고 할 ...
T11_external.push({
  key:"external_도형산술_2809",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 직육면체의 밑면은 정사각형이고, 밑면의 둘레는 12cm입니다. 높이는 5cm라고 할 때, 직육면체의 겉넓이는 몇 cm2 입니까?",
      answer:"78",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78, 식: none"
    };
  }
});

// [도형산술] 반지름이 20cm인 구를 반으로 똑같이 잘랐을 때, 자른 면의 넓이는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2810",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"반지름이 20cm인 구를 반으로 똑같이 잘랐을 때, 자른 면의 넓이는 얼마입니까?",
      answer:"1256",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1256, 식: none"
    };
  }
});

// [도형산술] 오각형인 경우 한 내각의 크기가 85도 일 때 나머지 내각의 합은 몇 도입니까?...
T11_external.push({
  key:"external_도형산술_2811",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"오각형인 경우 한 내각의 크기가 85도 일 때 나머지 내각의 합은 몇 도입니까?",
      answer:"455",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 455, 식: none"
    };
  }
});

// [도형산술] 두 정육각형의 둘레의 길이가 각각 54cm, 66cm일 때, 두 육각형의 한 변의 길이의 ...
T11_external.push({
  key:"external_도형산술_2812",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 정육각형의 둘레의 길이가 각각 54cm, 66cm일 때, 두 육각형의 한 변의 길이의 차는 얼마입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [도형산술] 길이가 40cm인 끈으로 철수는 한 변의 길이가 10cm인 정사각형을 만들었고, 영희는 같...
T11_external.push({
  key:"external_도형산술_2813",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 40cm인 끈으로 철수는 한 변의 길이가 10cm인 정사각형을 만들었고, 영희는 같은 길이의 끈을 남김없이 이용하여 세로 12cm인 직사각형을 만들었다. 두 사람이 만든 사각형의 넓이의 차를 구하여라.",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 14cm인 정사각형 안에 원을 그리려고 합니다. 이때 원의 최대 넓이를 구...
T11_external.push({
  key:"external_도형산술_2814",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 14cm인 정사각형 안에 원을 그리려고 합니다. 이때 원의 최대 넓이를 구하시오.",
      answer:"153.86",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 153.86, 식: none"
    };
  }
});

// [도형산술] 시완이는 직육면체 모양의 저금통을 가지고 있습니다. 이 저금통의 세 모서리의 길이가 10c...
T11_external.push({
  key:"external_도형산술_2817",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"시완이는 직육면체 모양의 저금통을 가지고 있습니다. 이 저금통의 세 모서리의 길이가 10cm, 9cm, 13cm일 때, 저금통의 부피는 몇 cm3입니까?",
      answer:"1170",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1170, 식: none"
    };
  }
});

// [도형산술] 밑변의 길이가 12cm, 높이가 16cm인 삼각형에서 밑변의 길이를 40% 늘였습니다. 늘...
T11_external.push({
  key:"external_도형산술_2821",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑변의 길이가 12cm, 높이가 16cm인 삼각형에서 밑변의 길이를 40% 늘였습니다. 늘어난 삼각형의 넓이는 몇 cm2입니까?",
      answer:"134.4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 134.4, 식: none"
    };
  }
});

// [도형산술] 3명의 친구가 높이가 15cm이고 밑면의 반지름이 6cm인 원기둥 모양의 병에 가득 차있는...
T11_external.push({
  key:"external_도형산술_2822",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"3명의 친구가 높이가 15cm이고 밑면의 반지름이 6cm인 원기둥 모양의 병에 가득 차있는 주스를 똑같이 나누어 마시려고 합니다. 한 사람이 마시게 되는 주스의 부피는 얼마입니까?",
      answer:"565.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 565.2, 식: none"
    };
  }
});

// [도형산술] 지수는 버스를 타고 5600m 이동하였습니다. 지수가 탄 버스 바퀴의 반지름이 1.5m일 ...
T11_external.push({
  key:"external_도형산술_2823",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지수는 버스를 타고 5600m 이동하였습니다. 지수가 탄 버스 바퀴의 반지름이 1.5m일 때, 바퀴는 몇 번 회전하였습니까?",
      answer:"594.48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 594.48, 식: none"
    };
  }
});

// [도형산술] 육각기둥은 면이 모두 몇 개 입니까?...
T11_external.push({
  key:"external_도형산술_2825",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"육각기둥은 면이 모두 몇 개 입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 20cm인 정사각형 안에 꼭 맞게 원을 하나 그렸습니다. 이 원의 둘레의 ...
T11_external.push({
  key:"external_도형산술_2826",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 20cm인 정사각형 안에 꼭 맞게 원을 하나 그렸습니다. 이 원의 둘레의 길이는 얼마입니까?",
      answer:"62.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 62.8, 식: none"
    };
  }
});

// [도형산술] 어떤 각기둥을 위에서 보았더니 오각형 모양이었습니다. 이 각기둥의 꼭짓점의 개수는 몇 개인...
T11_external.push({
  key:"external_도형산술_2828",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각기둥을 위에서 보았더니 오각형 모양이었습니다. 이 각기둥의 꼭짓점의 개수는 몇 개인가요?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 밑면의 모든 각의 합이 360º인 각기둥이 있습니다. 이 각기둥의 모든 면은 서로 합동이고...
T11_external.push({
  key:"external_도형산술_2830",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 모든 각의 합이 360º인 각기둥이 있습니다. 이 각기둥의 모든 면은 서로 합동이고 겉넓이는 150cm2입니다. 밑면의 한 변의 길이가 A cm일 때, 각기둥의 부피는 몇 cm3입니까?",
      answer:"125",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 125, 식: none"
    };
  }
});

// [도형산술] 칠각형의 모든 각의 합은 몇 도인지 구하시오....
T11_external.push({
  key:"external_도형산술_2831",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"칠각형의 모든 각의 합은 몇 도인지 구하시오.",
      answer:"900",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 900, 식: none"
    };
  }
});

// [도형산술] 선빈이는 집 주위에 울타리를 설치하려고 합니다. 가로 10m, 세로 20m인 직사각형 형태...
T11_external.push({
  key:"external_도형산술_2834",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 집 주위에 울타리를 설치하려고 합니다. 가로 10m, 세로 20m인 직사각형 형태로 울타리를 설치할 때, 5m길이의 울타리는 몇 개 필요한가요?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 블록모양이 평행사변형일 때, 이 블록에서 이웃하는 두 각의 합은?...
T11_external.push({
  key:"external_도형산술_2836",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"블록모양이 평행사변형일 때, 이 블록에서 이웃하는 두 각의 합은?",
      answer:"180",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 180, 식: none"
    };
  }
});

// [도형산술] 밑면의 넓이가 50cm2인 정팔각기둥의 높이가 9cm라면 부피는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2837",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 넓이가 50cm2인 정팔각기둥의 높이가 9cm라면 부피는 얼마입니까?",
      answer:"450",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 450, 식: none"
    };
  }
});

// [도형산술] 높이 16cm, 부피 640cm3인 각기둥의 두 밑면의 넓이의 합은 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2839",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이 16cm, 부피 640cm3인 각기둥의 두 밑면의 넓이의 합은 얼마입니까?",
      answer:"80",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 80, 식: none"
    };
  }
});

// [도형산술] 이웃한 두 변의 길이의 합이 15cm이 직사각형의 둘레의 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2840",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"이웃한 두 변의 길이의 합이 15cm이 직사각형의 둘레의 길이를 구하시오.",
      answer:"30",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 30, 식: none"
    };
  }
});

// [도형산술] 한변의 길이가 12.2cm인 정사각형 3개와 정삼각형 2개로 이루어진 오면체의 총 둘레를 ...
T11_external.push({
  key:"external_도형산술_2841",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한변의 길이가 12.2cm인 정사각형 3개와 정삼각형 2개로 이루어진 오면체의 총 둘레를 구하시오.",
      answer:"109.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 109.8, 식: none"
    };
  }
});

// [도형산술] 부피가 500cm3인 사이다를 담기 위해 각기둥 모양의 컵을 준비했습니다. 컵 밑면의 넓이...
T11_external.push({
  key:"external_도형산술_2842",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부피가 500cm3인 사이다를 담기 위해 각기둥 모양의 컵을 준비했습니다. 컵 밑면의 넓이가 25cm2일 때, 사이다를 담기 위한 컵의 높이는 최소 몇 cm이어야 합니까?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [도형산술] 평행사변형의 한 각의 크기가 140º일 때, 이 각과 마주보는 각의 합은 몇 º입니까?...
T11_external.push({
  key:"external_도형산술_2843",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평행사변형의 한 각의 크기가 140º일 때, 이 각과 마주보는 각의 합은 몇 º입니까?",
      answer:"280",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 280, 식: none"
    };
  }
});

// [도형산술] 어떤 삼각형의 밑변과 높이의 비가 4:5이고 밑변이 12cm일 때, 삼각형의 넓이를 구하시...
T11_external.push({
  key:"external_도형산술_2845",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 삼각형의 밑변과 높이의 비가 4:5이고 밑변이 12cm일 때, 삼각형의 넓이를 구하시오.",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: none"
    };
  }
});

// [도형산술] 둘레가 84.5cm인 삼각형 A와 삼각형A와 합동인 삼각형 B의 둘레의 합은 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2847",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 84.5cm인 삼각형 A와 삼각형A와 합동인 삼각형 B의 둘레의 합은 얼마입니까?",
      answer:"169",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 169, 식: none"
    };
  }
});

// [도형산술] 지름이 15m인 원형 틀에 30개의 전등을 일정한 간격에 맞추어 달고자 합니다. 전등 사이...
T11_external.push({
  key:"external_도형산술_2848",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 15m인 원형 틀에 30개의 전등을 일정한 간격에 맞추어 달고자 합니다. 전등 사이의 간격은 몇 m입니까?",
      answer:"1.57",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1.57, 식: none"
    };
  }
});

// [도형산술] 꼭짓점이 14개인 각뿔의 면과 모서리 수의 합을 구하시오....
T11_external.push({
  key:"external_도형산술_2850",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"꼭짓점이 14개인 각뿔의 면과 모서리 수의 합을 구하시오.",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 16cm인 정삼각형 안에 정삼각형의 세 꼭짓점을 각각 원의 중심으로 하는 ...
T11_external.push({
  key:"external_도형산술_2852",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 16cm인 정삼각형 안에 정삼각형의 세 꼭짓점을 각각 원의 중심으로 하는 반지름이 8cm인 원 3개의 일부를 그렸습니다. 그려진 부분의 넓이는 몇 cm2입니까?",
      answer:"100.48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100.48, 식: none"
    };
  }
});

// [도형산술] 둘레가 30cm인 정팔각형의 한 변은 몇 cm인지 소수로 나타내어 보시오....
T11_external.push({
  key:"external_도형산술_2854",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 30cm인 정팔각형의 한 변은 몇 cm인지 소수로 나타내어 보시오.",
      answer:"3.75",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3.75, 식: none"
    };
  }
});

// [도형산술] 지름이 50cm인 훌라후프가 직선으로 5번 굴렀을 때, 훌라후프가 나아간 거리는 몇 cm입...
T11_external.push({
  key:"external_도형산술_2856",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 50cm인 훌라후프가 직선으로 5번 굴렀을 때, 훌라후프가 나아간 거리는 몇 cm입니까?",
      answer:"785",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 785, 식: none"
    };
  }
});

// [도형산술] 삼각형의 두 각의 크기가 30º, 60º 일 때, 마지막 각의 크기는 몇 º입니까?...
T11_external.push({
  key:"external_도형산술_2857",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"삼각형의 두 각의 크기가 30º, 60º 일 때, 마지막 각의 크기는 몇 º입니까?",
      answer:"90",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 90, 식: none"
    };
  }
});

// [도형산술] 전선 15cm를 이용해 이등변삼각형을 만드려고 합니다. 길이가 같은 두 변의 길이가 6cm...
T11_external.push({
  key:"external_도형산술_2858",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"전선 15cm를 이용해 이등변삼각형을 만드려고 합니다. 길이가 같은 두 변의 길이가 6cm일 때, 나머지 한 변의 길이를 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 50cm인 정육면체 모양의 도토리묵을 10개로 똑같이 나누었을 때, 한...
T11_external.push({
  key:"external_도형산술_2859",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 50cm인 정육면체 모양의 도토리묵을 10개로 똑같이 나누었을 때, 한 조각의 부피를 구하시오.",
      answer:"12500",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12500, 식: none"
    };
  }
});

// [도형산술] 넓이가 40cm2인 직사각형의 가로 길이는 8cm입니다. 직사각형의 세로 길이는 몇 cm입...
T11_external.push({
  key:"external_도형산술_2860",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 40cm2인 직사각형의 가로 길이는 8cm입니다. 직사각형의 세로 길이는 몇 cm입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 높이가 20cm이고 밑면의 반지름은 15cm인 원뿔이 있습니다. 이 원뿔을 앞에서 본 평면...
T11_external.push({
  key:"external_도형산술_2861",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이가 20cm이고 밑면의 반지름은 15cm인 원뿔이 있습니다. 이 원뿔을 앞에서 본 평면도형은 넓이가 몇 cm2입니까?",
      answer:"300",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 300, 식: none"
    };
  }
});

// [도형산술] 2개의 각의 크기가 모두 60º인 삼각형이 있습니다. 삼각형 한 변의 길이가 4.4cm일 ...
T11_external.push({
  key:"external_도형산술_2862",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"2개의 각의 크기가 모두 60º인 삼각형이 있습니다. 삼각형 한 변의 길이가 4.4cm일 때, 삼각형 둘레의 길이는 몇 cm입니까?",
      answer:"13.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13.2, 식: none"
    };
  }
});

// [도형산술] 둘레가 80cm인 정팔각형을 밑면으로 하는 각기둥의 높이는 7cm입니다. 이 각기둥의 모든...
T11_external.push({
  key:"external_도형산술_2863",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 80cm인 정팔각형을 밑면으로 하는 각기둥의 높이는 7cm입니다. 이 각기둥의 모든 옆면의 넓이를 합하면 몇 cm2입니까?",
      answer:"560",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 560, 식: none"
    };
  }
});

// [도형산술] 모든 모서리의 길이가 13cm으로 같은 직육면체 모양의 식빵의 겉넓이의 합은 얼마인지 구하...
T11_external.push({
  key:"external_도형산술_2864",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"모든 모서리의 길이가 13cm으로 같은 직육면체 모양의 식빵의 겉넓이의 합은 얼마인지 구하시오.",
      answer:"1014",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1014, 식: none"
    };
  }
});

// [도형산술] 밑면의 모양이 사각형인 각뿔과 각기둥의 모서리의 합을 구하시오....
T11_external.push({
  key:"external_도형산술_2866",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 모양이 사각형인 각뿔과 각기둥의 모서리의 합을 구하시오.",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [도형산술] 다음 각뿔은 모서리의 개수가 16개입니다. 이 각뿔의 꼭짓점의 개수는 몇 개인가요?...
T11_external.push({
  key:"external_도형산술_2869",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"다음 각뿔은 모서리의 개수가 16개입니다. 이 각뿔의 꼭짓점의 개수는 몇 개인가요?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 육각뿔에서 면의 모양이 삼각형인 면의 수를 구하시오....
T11_external.push({
  key:"external_도형산술_2870",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"육각뿔에서 면의 모양이 삼각형인 면의 수를 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 4cm인 마름모의 한 각의 크기는 60º입니다. 이 각과 마주보는 대각선을...
T11_external.push({
  key:"external_도형산술_2871",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 4cm인 마름모의 한 각의 크기는 60º입니다. 이 각과 마주보는 대각선을 하나 그어서 만들어진 삼각형의 둘레의 길이는 몇 cm입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 높이가 8cm이고 모든 모서리 길이의 합이 84cm인 정삼각기둥이 있습니다. 밑면에 해당하...
T11_external.push({
  key:"external_도형산술_2872",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이가 8cm이고 모든 모서리 길이의 합이 84cm인 정삼각기둥이 있습니다. 밑면에 해당하는 삼각형 한 변의 길이는 몇 cm입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 두 정사각형은 둘레가 각각 8cm, 16cm입니다. 이때, 두 정사각형의 넓이의 차를 구하...
T11_external.push({
  key:"external_도형산술_2874",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"두 정사각형은 둘레가 각각 8cm, 16cm입니다. 이때, 두 정사각형의 넓이의 차를 구하시오.",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 겉넓이가 216cm2인 정육면체의 부피는 얼마입니까?...
T11_external.push({
  key:"external_도형산술_2875",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"겉넓이가 216cm2인 정육면체의 부피는 얼마입니까?",
      answer:"216",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 216, 식: none"
    };
  }
});

// [도형산술] 길이가 40cm인 철사를 이용하여 밑변의 길이가 10cm인 이등변삼각형을 만들었습니다. 나...
T11_external.push({
  key:"external_도형산술_2877",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"길이가 40cm인 철사를 이용하여 밑변의 길이가 10cm인 이등변삼각형을 만들었습니다. 나머지 두 변의 길이는 각각 몇 cm인지 구하시오.",
      answer:"15",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 15, 식: none"
    };
  }
});

// [도형산술] 원뿔을 앞에서 봤더니 밑변의 길이가 10cm이고, 높이가 15cm인 이등변삼각형 모양이었습...
T11_external.push({
  key:"external_도형산술_2880",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원뿔을 앞에서 봤더니 밑변의 길이가 10cm이고, 높이가 15cm인 이등변삼각형 모양이었습니다. 이 원뿔의 밑면의 넓이는 얼마입니까?",
      answer:"78.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78.5, 식: none"
    };
  }
});

// [도형산술] 넓이가 75cm2인 마름모의 한 대각선의 길이가 15cm입니다. 다른 대각선의 길이는 몇 ...
T11_external.push({
  key:"external_도형산술_2884",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 75cm2인 마름모의 한 대각선의 길이가 15cm입니다. 다른 대각선의 길이는 몇 cm입니까?",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 8cm인 정사각형이 밑면인 물통에 돌이 담겨있습니다. 이 물통에 320cm...
T11_external.push({
  key:"external_도형산술_2886",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 8cm인 정사각형이 밑면인 물통에 돌이 담겨있습니다. 이 물통에 320cm3의 물을 담았더니 물의 높이가 7cm가 되었다면, 원래 있던 돌의 부피는 얼마인지 구하시오.",
      answer:"128",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 128, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 12cm인 정사각형 모양의 색종이를 잘라 만들 수 있는 가장 큰 원의 넓이...
T11_external.push({
  key:"external_도형산술_2887",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 12cm인 정사각형 모양의 색종이를 잘라 만들 수 있는 가장 큰 원의 넓이는 몇 cm2입니까?",
      answer:"113.04",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 113.04, 식: none"
    };
  }
});

// [도형산술] 민하는 전기장판을 구매하려고 합니다. 가로의 길이는 10cm로 일치하지만 세로의 길이가 각...
T11_external.push({
  key:"external_도형산술_2889",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민하는 전기장판을 구매하려고 합니다. 가로의 길이는 10cm로 일치하지만 세로의 길이가 각각 20cm, 30cm로 다른 두 전기장판의 넓이의 차이를 구하시오.",
      answer:"100",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100, 식: none"
    };
  }
});

// [도형산술] 어떤 각기둥은 모든 면이 사각형으로 이루어져 있습니다. 이 각기둥의 꼭짓점의 개수를 구하시...
T11_external.push({
  key:"external_도형산술_2891",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각기둥은 모든 면이 사각형으로 이루어져 있습니다. 이 각기둥의 꼭짓점의 개수를 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 준완이는 가로 4cm, 세로1cm, 높이2cm의 껌을 20개 구매하였습니다. 껌은 직육면체...
T11_external.push({
  key:"external_도형산술_2895",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"준완이는 가로 4cm, 세로1cm, 높이2cm의 껌을 20개 구매하였습니다. 껌은 직육면체의 모양이며 이 껌을 상자에 넣어 보관하려고 합니다. 이때 상자의 최소 부피를 구하시오.",
      answer:"160",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 160, 식: none"
    };
  }
});

// [도형산술] 사다리꼴에서 평행하는 두 변 중 한 변의 길이는 5cm이고, 다른 한 변은 7cm이다. 사...
T11_external.push({
  key:"external_도형산술_2897",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"사다리꼴에서 평행하는 두 변 중 한 변의 길이는 5cm이고, 다른 한 변은 7cm이다. 사다리꼴의 넓이가 36cm2일 때, 사다리꼴의 높이는 몇 cm입니까?",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 14cm인 마름모와 한 변의 길이가 10cm인 마름모가 있습니다. 두 마름...
T11_external.push({
  key:"external_도형산술_2900",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 14cm인 마름모와 한 변의 길이가 10cm인 마름모가 있습니다. 두 마름모의 둘레의 길이의 차는 몇 cm입니까?",
      answer:"16",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 16, 식: none"
    };
  }
});

// [도형산술] 가로 33cm, 높이 14cm 인 평행사변형의 넓이를 구하시오....
T11_external.push({
  key:"external_도형산술_2901",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 33cm, 높이 14cm 인 평행사변형의 넓이를 구하시오.",
      answer:"462",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 462, 식: none"
    };
  }
});

// [도형산술] 한 밑면의 둘레가 40cm이고, 높이가 7cm인 각기둥의 면의 개수는 10개입니다. 이 각...
T11_external.push({
  key:"external_도형산술_2902",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 밑면의 둘레가 40cm이고, 높이가 7cm인 각기둥의 면의 개수는 10개입니다. 이 각기둥의 모든 모서리의 길이를 더하면 몇 cm가 됩니까?",
      answer:"136",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 136, 식: none"
    };
  }
});

// [도형산술] 둘레가 58cm인 평행사변형이 있습니다. 한 변이 이웃하는 변보다 5cm 길 때, 긴 변의...
T11_external.push({
  key:"external_도형산술_2904",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 58cm인 평행사변형이 있습니다. 한 변이 이웃하는 변보다 5cm 길 때, 긴 변의 길이는 얼마입니까?",
      answer:"17",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 17, 식: none"
    };
  }
});

// [도형산술] 팔각기둥의 밑면의 변의 개수를 구하시오....
T11_external.push({
  key:"external_도형산술_2905",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"팔각기둥의 밑면의 변의 개수를 구하시오.",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 밑면의 한 변의 길이가 6cm인 정사각형을 밑변으로 가진 직육면체의 겉넓이가 324cm2일...
T11_external.push({
  key:"external_도형산술_2907",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 한 변의 길이가 6cm인 정사각형을 밑변으로 가진 직육면체의 겉넓이가 324cm2일 때, 높이를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 11cm인 정육면체의 모든 모서리의 길이의 합은 몇 cm입니까?...
T11_external.push({
  key:"external_도형산술_2910",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 11cm인 정육면체의 모든 모서리의 길이의 합은 몇 cm입니까?",
      answer:"132",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 132, 식: none"
    };
  }
});

// [도형산술] 평행사변형인 경우 한 내각의 크기가 81.2도 일 때 마주보는 내각을 제외한 두 각의 크기...
T11_external.push({
  key:"external_도형산술_2917",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평행사변형인 경우 한 내각의 크기가 81.2도 일 때 마주보는 내각을 제외한 두 각의 크기는 몇 도인가요?",
      answer:"98.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 98.8, 식: none"
    };
  }
});

// [도형산술] 평행사변형의 한 각의 크기가 50º일 때, 이웃하는 각의 크기는 몇 º입니까?...
T11_external.push({
  key:"external_도형산술_2918",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"평행사변형의 한 각의 크기가 50º일 때, 이웃하는 각의 크기는 몇 º입니까?",
      answer:"130",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 130, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 12cm인 정사각형 안에 원을 그릴 때, 원주의 최대 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2920",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 12cm인 정사각형 안에 원을 그릴 때, 원주의 최대 길이를 구하시오.",
      answer:"37.68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 37.68, 식: none"
    };
  }
});

// [도형산술] 민주가 가지고 있는 티켓은 직사각형 모양이고 가로, 세로의 길이가 각각 20cm, 7cm입...
T11_external.push({
  key:"external_도형산술_2923",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"민주가 가지고 있는 티켓은 직사각형 모양이고 가로, 세로의 길이가 각각 20cm, 7cm입니다. 민주의 티켓은 넓이가 몇 cm2입니까?",
      answer:"140",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 140, 식: none"
    };
  }
});

// [도형산술] 둘레의 길이가 12.6cm인 정사각형을 크기가 같은 정사각형 9개로 나누었습니다. 작은 정...
T11_external.push({
  key:"external_도형산술_2924",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레의 길이가 12.6cm인 정사각형을 크기가 같은 정사각형 9개로 나누었습니다. 작은 정사각형 한 개의 둘레는 몇 cm입니까?",
      answer:"4.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4.2, 식: none"
    };
  }
});

// [도형산술] 넓이가 150cm2인 삼각형이 있습니다. 이 삼각형의 높이가 25cm일 때, 밑변의 길이는...
T11_external.push({
  key:"external_도형산술_2925",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 150cm2인 삼각형이 있습니다. 이 삼각형의 높이가 25cm일 때, 밑변의 길이는 몇 cm입니까?",
      answer:"12",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 12, 식: none"
    };
  }
});

// [도형산술] 영서가 가지고 있는 각기둥은 부피가 600cm3이고, 높이가 15cm입니다. 이 각기둥은 ...
T11_external.push({
  key:"external_도형산술_2927",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"영서가 가지고 있는 각기둥은 부피가 600cm3이고, 높이가 15cm입니다. 이 각기둥은 밑면의 넓이가 얼마입니까?",
      answer:"40",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 40, 식: none"
    };
  }
});

// [도형산술] 옆넓이가 219.8cm2인 원기둥의 높이가 5cm일 때, 밑면의 반지름의 길이를 구하시오....
T11_external.push({
  key:"external_도형산술_2928",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옆넓이가 219.8cm2인 원기둥의 높이가 5cm일 때, 밑면의 반지름의 길이를 구하시오.",
      answer:"7",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 7, 식: none"
    };
  }
});

// [도형산술] 어느 각뿔의 꼭짓점의 수와 면의 수를 합하였더니 20이었습니다. 이 각기둥의 밑면의 변의 ...
T11_external.push({
  key:"external_도형산술_2931",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어느 각뿔의 꼭짓점의 수와 면의 수를 합하였더니 20이었습니다. 이 각기둥의 밑면의 변의 수를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 둘레가 32cm인 정사각형의 넓이는 몇 cm2입니까?...
T11_external.push({
  key:"external_도형산술_2932",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 32cm인 정사각형의 넓이는 몇 cm2입니까?",
      answer:"64",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 64, 식: none"
    };
  }
});

// [도형산술] 철사로 한 모서리의 길이가 13cm인 정육면체을 만들려고 합니다. 철사는 적어도 몇 cm가...
T11_external.push({
  key:"external_도형산술_2933",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"철사로 한 모서리의 길이가 13cm인 정육면체을 만들려고 합니다. 철사는 적어도 몇 cm가 필요합니까?",
      answer:"156",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 156, 식: none"
    };
  }
});

// [도형산술] 어떤 두 개의 원기둥의 밑면은 모두 반지름이 5cm인 원입니다. 한 원기둥은 높이가 15c...
T11_external.push({
  key:"external_도형산술_2934",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 두 개의 원기둥의 밑면은 모두 반지름이 5cm인 원입니다. 한 원기둥은 높이가 15cm이고 다른 원기둥의 높이가 20cm일 때, 두 원기둥의 옆넓이의 차를 구하시오.",
      answer:"157",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 157, 식: none"
    };
  }
});

// [도형산술] 둘레가 68cm인 평행사변형이 있습니다. 한 변이 이웃하는 변보다 7cm 길 때, 짧은 변...
T11_external.push({
  key:"external_도형산술_2935",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 68cm인 평행사변형이 있습니다. 한 변이 이웃하는 변보다 7cm 길 때, 짧은 변의 길이는 얼마입니까?",
      answer:"13.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 13.5, 식: none"
    };
  }
});

// [도형산술] 선빈이는 매트리스를 구매하려고 합니다. 구매하려는 매트리스의 크기가 가로 100cm, 세로...
T11_external.push({
  key:"external_도형산술_2936",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이는 매트리스를 구매하려고 합니다. 구매하려는 매트리스의 크기가 가로 100cm, 세로 200cm, 높이 50cm일 때, 이 매트리스의 부피는 얼마입니까?",
      answer:"1000000",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1000000, 식: none"
    };
  }
});

// [도형산술] 밑면의 둘레가 동일한 정오각기둥과 정육각기둥은 높이가 12cm이고 모든 옆면의 넓이의 합은...
T11_external.push({
  key:"external_도형산술_2938",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면의 둘레가 동일한 정오각기둥과 정육각기둥은 높이가 12cm이고 모든 옆면의 넓이의 합은 720cm2입니다. 두 각기둥의 밑면을 이루는 도형의 한 변의 길이의 차는 얼마입니까?",
      answer:"2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2, 식: none"
    };
  }
});

// [도형산술] 가로 150cm, 세로 200cm 인 직사각형 모양의 작품을 천으로 가리려고 합니다. 가로...
T11_external.push({
  key:"external_도형산술_2939",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 150cm, 세로 200cm 인 직사각형 모양의 작품을 천으로 가리려고 합니다. 가로,세로 모두 20cm의 여유를 가지고 천을 제작한다고 할 때 필요한 천의 최소 넓이는 얼마인가요?",
      answer:"37400",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 37400, 식: none"
    };
  }
});

// [도형산술] 가로 14cm, 세로 13cm인 직사각형의 둘레를 구하시오....
T11_external.push({
  key:"external_도형산술_2941",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"가로 14cm, 세로 13cm인 직사각형의 둘레를 구하시오.",
      answer:"54",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 54, 식: none"
    };
  }
});

// [도형산술] 원 모양의 식탁에 5명이 일정한 거리를 유지하며 앉으려고 합니다. 식탁의 반지름이 80cm...
T11_external.push({
  key:"external_도형산술_2943",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원 모양의 식탁에 5명이 일정한 거리를 유지하며 앉으려고 합니다. 식탁의 반지름이 80cm라면, 사람들 사이의 거리는 얼마입니까?",
      answer:"100.48",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 100.48, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 44cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들...
T11_external.push({
  key:"external_도형산술_2946",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 44cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들어갈 수 있는 가장 큰 크기의 통의 밑면의 반지름을 구하시오.",
      answer:"22",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 22, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 18cm인 정사각형 종이 안에 크기가 같은 원4개를 겹치는 부분 없이 그릴...
T11_external.push({
  key:"external_도형산술_2948",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 18cm인 정사각형 종이 안에 크기가 같은 원4개를 겹치는 부분 없이 그릴 때 한 원의 최대 둘레를 구하시오?",
      answer:"28.26",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 28.26, 식: none"
    };
  }
});

// [도형산술] 직사각형인 밑면의 가로, 세로 길이가 모두 15cm인 물통에 물을 10cm 높이만큼 채웠습...
T11_external.push({
  key:"external_도형산술_2949",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직사각형인 밑면의 가로, 세로 길이가 모두 15cm인 물통에 물을 10cm 높이만큼 채웠습니다. 물의 부피는 얼마입니까?",
      answer:"2250",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 2250, 식: none"
    };
  }
});

// [도형산술] 부피가 20000cm3인 박스 안에 한 모서리의 길이가 10cm인 정육면체의 스펀지를 가득...
T11_external.push({
  key:"external_도형산술_2955",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"부피가 20000cm3인 박스 안에 한 모서리의 길이가 10cm인 정육면체의 스펀지를 가득 넣을 때 들어가는 스폰지의 최댓값은 얼마인가요?",
      answer:"20",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 20, 식: none"
    };
  }
});

// [도형산술] 한 변의 길이가 5cm인 정사각형 모양의 비스켓이 있습니다. 동생에게 한 입 주고난 뒤 남...
T11_external.push({
  key:"external_도형산술_2957",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 변의 길이가 5cm인 정사각형 모양의 비스켓이 있습니다. 동생에게 한 입 주고난 뒤 남은 넓이가 15cm2 일 때, 동생이 먹은 넓이를 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 밑변과 높이가 15cm로 같은 평행사변형이 밑면인 각기둥 모양의 주전자가 있습니다. 주전자...
T11_external.push({
  key:"external_도형산술_2958",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑변과 높이가 15cm로 같은 평행사변형이 밑면인 각기둥 모양의 주전자가 있습니다. 주전자의 높이가 평행사변형의 높이보다 3배 더 길다면, 주전자 안에 담을 수 있는 물의 최대 부피는 몇 cm3입니까?",
      answer:"10125",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10125, 식: none"
    };
  }
});

// [도형산술] 원의 둘레가 31.4cm일 때 원의 넓이를 구하시오....
T11_external.push({
  key:"external_도형산술_2960",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"원의 둘레가 31.4cm일 때 원의 넓이를 구하시오.",
      answer:"78.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 78.5, 식: none"
    };
  }
});

// [도형산술] 6개의 면이 있는 각기둥이 있습니다. 이 각기둥의 높이가 12cm이고, 밑면의 둘레가 40...
T11_external.push({
  key:"external_도형산술_2961",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"6개의 면이 있는 각기둥이 있습니다. 이 각기둥의 높이가 12cm이고, 밑면의 둘레가 40cm일 때, 전체 모서리 길이의 합은 얼마입니까?",
      answer:"128",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 128, 식: none"
    };
  }
});

// [도형산술] 밑면이 팔각형인 각뿔의 꼭짓점의 개수를 구하시오....
T11_external.push({
  key:"external_도형산술_2963",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"밑면이 팔각형인 각뿔의 꼭짓점의 개수를 구하시오.",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 넓이가 23.4cm2인 삼각형 A와 삼각형 A의 선대칭도형 B의 넓이의 합은 몇 cm2입니...
T11_external.push({
  key:"external_도형산술_2964",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 23.4cm2인 삼각형 A와 삼각형 A의 선대칭도형 B의 넓이의 합은 몇 cm2입니까?",
      answer:"46.8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 46.8, 식: none"
    };
  }
});

// [도형산술] 팔각형은 몇 개의 각을 가지고 있습니까?...
T11_external.push({
  key:"external_도형산술_2965",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"팔각형은 몇 개의 각을 가지고 있습니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 선빈이네 창고는 직사각형 모양이고, 가로의 길이가 세로의 길이의 4배라고 합니다. 창고의 ...
T11_external.push({
  key:"external_도형산술_2966",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"선빈이네 창고는 직사각형 모양이고, 가로의 길이가 세로의 길이의 4배라고 합니다. 창고의 둘레가 600m일 때, 이 창고의 가로의 길이를 구하시오.",
      answer:"240",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 240, 식: none"
    };
  }
});

// [도형산술] 한 모서리의 길이가 11cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들...
T11_external.push({
  key:"external_도형산술_2969",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"한 모서리의 길이가 11cm인 정육면체 상자안에 원기둥모양의 통을 넣을 때, 상자 안에 들어갈 수 있는 가장 큰 크기의 통의 밑면의 넓이를 구하시오.",
      answer:"50.24",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 50.24, 식: none"
    };
  }
});

// [도형산술] 정다각형인 밑면을 갖는 각뿔의 밑면의 둘레는 88cm입니다. 이 각뿔의 면의 개수가 9개일...
T11_external.push({
  key:"external_도형산술_2971",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정다각형인 밑면을 갖는 각뿔의 밑면의 둘레는 88cm입니다. 이 각뿔의 면의 개수가 9개일 때, 밑면의 한 변의 길이는 몇 cm입니까?",
      answer:"11",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 11, 식: none"
    };
  }
});

// [도형산술] 지름이 8cm인 원이 밑면이고, 높이가 15cm인 원기둥이 있습니다. 이 원기둥을 위와 앞...
T11_external.push({
  key:"external_도형산술_2973",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름이 8cm인 원이 밑면이고, 높이가 15cm인 원기둥이 있습니다. 이 원기둥을 위와 앞에서 본 도형들의 넓이의 차이는 얼마입니까?",
      answer:"69.76",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 69.76, 식: none"
    };
  }
});

// [도형산술] 어떤 직사각형은 둘레가 28cm이고, 세로가 10cm입니다. 이 직사각형의 가로는 몇 cm...
T11_external.push({
  key:"external_도형산술_2974",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 직사각형은 둘레가 28cm이고, 세로가 10cm입니다. 이 직사각형의 가로는 몇 cm입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [도형산술] 직각 삼각형인 경우 한각의 크기가 35도 일 때 직각 이외의 나머지 한 각의 크기는 몇 도...
T11_external.push({
  key:"external_도형산술_2975",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직각 삼각형인 경우 한각의 크기가 35도 일 때 직각 이외의 나머지 한 각의 크기는 몇 도입니까?",
      answer:"55",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 55, 식: none"
    };
  }
});

// [도형산술] 반지름이 12cm이고, 높이가 5cm인 원기둥 모양의 막대가 4바퀴 굴렀다면, 이동한 거리...
T11_external.push({
  key:"external_도형산술_2978",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"반지름이 12cm이고, 높이가 5cm인 원기둥 모양의 막대가 4바퀴 굴렀다면, 이동한 거리는 몇 cm입니까?",
      answer:"1507.2",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 1507.2, 식: none"
    };
  }
});

// [도형산술] 겉넓이가 471cm2인 원기둥의 높이가 10cm이고 밑면의 반지름은 A cm입니다. 밑면의...
T11_external.push({
  key:"external_도형산술_2979",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"겉넓이가 471cm2인 원기둥의 높이가 10cm이고 밑면의 반지름은 A cm입니다. 밑면의 반지름의 길이는 몇 cm입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 둘레가 50cm인 정다각형을 밑면으로 하는 각기둥의 면의 개수가 총 12개입니다. 밑면의 ...
T11_external.push({
  key:"external_도형산술_2980",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 50cm인 정다각형을 밑면으로 하는 각기둥의 면의 개수가 총 12개입니다. 밑면의 한 변의 길이는 몇 cm입니까?",
      answer:"5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 5, 식: none"
    };
  }
});

// [도형산술] 세로에 대한 가로의 비율이 5/3인 직사각형이 있습니다. 이 직사각형의 세로가 15cm일 ...
T11_external.push({
  key:"external_도형산술_2983",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"세로에 대한 가로의 비율이 5/3인 직사각형이 있습니다. 이 직사각형의 세로가 15cm일 때, 넓이는 몇 cm2입니까?",
      answer:"375",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 375, 식: none"
    };
  }
});

// [도형산술] 삼각형의 두 내각의 합이 112도 일 때 나머지 한 내각은 몇 도입니까?...
T11_external.push({
  key:"external_도형산술_2984",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"삼각형의 두 내각의 합이 112도 일 때 나머지 한 내각은 몇 도입니까?",
      answer:"68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 68, 식: none"
    };
  }
});

// [도형산술] 넓이가 486cm2인 정육면체 전개도가 있습니다. 이 전개도로 만들 수 있는 정육면체의 한...
T11_external.push({
  key:"external_도형산술_2985",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 486cm2인 정육면체 전개도가 있습니다. 이 전개도로 만들 수 있는 정육면체의 한 변의 길이는 얼마입니까?",
      answer:"9",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 9, 식: none"
    };
  }
});

// [도형산술] 정삼각형의 한 각의 크기와 정사각형의 한 각의 크기의 합은 얼마인가요?...
T11_external.push({
  key:"external_도형산술_2986",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정삼각형의 한 각의 크기와 정사각형의 한 각의 크기의 합은 얼마인가요?",
      answer:"150",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 150, 식: none"
    };
  }
});

// [도형산술] 어떤 각뿔의 모서리와 면의 수를 세어보았더니 그 합이 28이었습니다. 이 각뿔의 모서리와 ...
T11_external.push({
  key:"external_도형산술_2987",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각뿔의 모서리와 면의 수를 세어보았더니 그 합이 28이었습니다. 이 각뿔의 모서리와 면의 수의 차는 얼마입니까?",
      answer:"8",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 8, 식: none"
    };
  }
});

// [도형산술] 둘레가 18cm이며, 가로의 길이가 세로의 길이의 2배인 직사각형 모양의 텃밭이 있습니다....
T11_external.push({
  key:"external_도형산술_2988",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 18cm이며, 가로의 길이가 세로의 길이의 2배인 직사각형 모양의 텃밭이 있습니다. 이 텃밭의 세로 길이를 구하시오.",
      answer:"3",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 3, 식: none"
    };
  }
});

// [도형산술] 높이가 13cm인 원기둥 옆면의 넓이가 816.4cm2라고 했을 때, 밑면의 반지름을 구하...
T11_external.push({
  key:"external_도형산술_2992",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"높이가 13cm인 원기둥 옆면의 넓이가 816.4cm2라고 했을 때, 밑면의 반지름을 구하시오.",
      answer:"10",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 10, 식: none"
    };
  }
});

// [도형산술] 정육면체의 겉넓이는 한 면의 넓이의 몇 배 인지 구하시오....
T11_external.push({
  key:"external_도형산술_2993",
  unitId:"m1-1-2-III-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"정육면체의 겉넓이는 한 면의 넓이의 몇 배 인지 구하시오.",
      answer:"6",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 6, 식: none"
    };
  }
});

// [도형산술] 옆면이 모두 합동인 이등변삼각형으로 이루어진 각뿔의 밑면은 한 변이 6cm인 정사각형입니다...
T11_external.push({
  key:"external_도형산술_2994",
  unitId:"m1-1-2-III-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"옆면이 모두 합동인 이등변삼각형으로 이루어진 각뿔의 밑면은 한 변이 6cm인 정사각형입니다. 각뿔의 겉넓이가 84cm2일 때, 이등변삼각형의 높이는 몇 cm입니까?",
      answer:"4",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 4, 식: none"
    };
  }
});

// [도형산술] 둘레가 48cm이고, 가로가 14cm인 직사각형의 넓이를 구하시오....
T11_external.push({
  key:"external_도형산술_2995",
  unitId:"m1-1-2-I-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"둘레가 48cm이고, 가로가 14cm인 직사각형의 넓이를 구하시오.",
      answer:"140",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 140, 식: none"
    };
  }
});

// [도형산술] 지름의 길이가 14cm인 원의 원주는 몇 cm입니까?...
T11_external.push({
  key:"external_도형산술_2996",
  unitId:"m1-1-2-I-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"지름의 길이가 14cm인 원의 원주는 몇 cm입니까?",
      answer:"43.96",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 43.96, 식: none"
    };
  }
});

// [도형산술] 넓이가 36cm2인 정사각형의 한 변의 길이를 반지름으로 가지고 있는 원의 원주를 구하시오...
T11_external.push({
  key:"external_도형산술_2998",
  unitId:"m1-1-2-I-3",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"넓이가 36cm2인 정사각형의 한 변의 길이를 반지름으로 가지고 있는 원의 원주를 구하시오.",
      answer:"37.68",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 37.68, 식: none"
    };
  }
});

// [도형산술] 어떤 각기둥은 높이가 15cm이고, 전체 면의 개수가 10개입니다. 이 각기둥의 밑면이 정...
T11_external.push({
  key:"external_도형산술_2999",
  unitId:"m1-1-2-II-1",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"어떤 각기둥은 높이가 15cm이고, 전체 면의 개수가 10개입니다. 이 각기둥의 밑면이 정다각형이면서 한 변의 길이가 7cm라면, 전체 모서리 길이의 합은 얼마인지 구하시오.",
      answer:"232",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 232, 식: none"
    };
  }
});

// [도형산술] 직각 삼각형인 경우 한각의 크기가 44.5도 일 때 직각 이외의 나머지 한 각의 크기는 몇...
T11_external.push({
  key:"external_도형산술_3000",
  unitId:"m1-1-2-II-2",
  difficulty:2,
  tags:["도형산술","외부DB","고품질"],
  gen(){
    return {
      type:"short",
      question:"직각 삼각형인 경우 한각의 크기가 44.5도 일 때 직각 이외의 나머지 한 각의 크기는 몇 도입니까?",
      answer:"45.5",
      answerType:"number",
      tolerance:0.1,
      unitLabel:"",
      hint:"문제를 차근차근 읽고 식을 세워보세요.",
      explain:"정답: 45.5, 식: none"
    };
  }
});

window.Templates_external = T11_external;
