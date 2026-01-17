const fs = require('fs');
const yaml = require('js-yaml');
const os = require('os');
const path = require('path');

// OpenAI 클라이언트 설정
let OpenAI;
try {
  OpenAI = require('openai').default;
} catch(e) {
  console.log('openai 패키지를 설치합니다...');
  require('child_process').execSync('npm install openai js-yaml', {stdio: 'inherit'});
  OpenAI = require('openai').default;
}

// 설정 로드
const configPath = path.join(os.homedir(), '.genspark_llm.yaml');
let config = null;

if (fs.existsSync(configPath)) {
  const fileContents = fs.readFileSync(configPath, 'utf8');
  config = yaml.load(fileContents);
}

const client = new OpenAI({
  apiKey: config?.openai?.api_key || process.env.OPENAI_API_KEY,
  baseURL: config?.openai?.base_url || process.env.OPENAI_BASE_URL,
});

// 단원 정보
const units = {
  'm1-1-1-I-1': {
    name: '소인수분해',
    topics: '소수, 합성수, 소인수, 소인수분해, 거듭제곱'
  },
  'm1-1-1-I-2': {
    name: '최대공약수와 최소공배수',
    topics: '공약수, 최대공약수(GCD), 공배수, 최소공배수(LCM), 서로소'
  },
  'm1-1-1-II-1': {
    name: '정수와 유리수',
    topics: '양수, 음수, 정수, 유리수, 수직선, 절댓값, 대소관계'
  },
  'm1-1-1-II-2': {
    name: '정수와 유리수의 계산',
    topics: '덧셈, 뺄셈, 곱셈, 나눗셈, 사칙연산, 혼합계산'
  },
  'm1-1-1-III-1': {
    name: '문자의 사용과 식',
    topics: '문자, 대입, 식의 값, 항, 계수, 차수'
  },
  'm1-1-1-III-2': {
    name: '일차식의 계산',
    topics: '일차식, 동류항, 덧셈, 뺄셈, 분배법칙, 괄호 풀기'
  },
  'm1-1-1-III-3': {
    name: '방정식과 그 해',
    topics: '방정식, 등식, 좌변, 우변, 해, 근'
  },
  'm1-1-1-III-4': {
    name: '일차방정식의 풀이',
    topics: '이항, 등식의 성질, 방정식 풀이, 검산'
  },
  'm1-1-1-III-5': {
    name: '일차방정식의 활용',
    topics: '문장제, 나이, 거리속력시간, 농도, 과부족, 실생활 응용'
  }
};

// 문제 생성 함수
async function generateProblems(unitId, difficulty, count = 15) {
  const unit = units[unitId];
  
  const prompt = `당신은 중학교 1학년 수학 문제 출제 전문가입니다.

**단원**: ${unit.name}
**주제**: ${unit.topics}
**난이도**: ${difficulty}/3 (1=기초, 2=중급, 3=고급/내신)

**요구사항**:
1. ${count}가지 서로 다른 유형의 문제를 만들어주세요
2. 각 유형은 완전히 달라야 합니다 (단순 숫자만 바뀌는 것이 아님)
3. 난이도 ${difficulty}에 맞는 수준으로 출제
4. 난이도 3은 실제 내신 시험 고난도 문제 수준

**난이도별 기준**:
- 난이도 1: 개념 이해, 기본 계산, 정의 확인
- 난이도 2: 개념 응용, 복합 계산, 2-3단계 풀이
- 난이도 3: 복합 추론, 조건 분석, 실생활 응용, 4단계 이상 풀이

**JSON 형식으로 응답해주세요**:
\`\`\`json
[
  {
    "key": "unique_problem_key",
    "type": "문제 유형 설명",
    "difficulty": ${difficulty},
    "tags": ["태그1", "태그2"],
    "question": "문제 텍스트",
    "answer": "정답",
    "answerType": "number 또는 string",
    "hint": "힌트",
    "explain": "상세 풀이"
  }
]
\`\`\`

**중요**: 
- 실제 내신 기출 문제 스타일로 작성
- 각 문제는 랜덤 생성 가능하도록 변수 범위 포함
- 숫자는 구체적으로 (예: randInt(10,50))`;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`단원: ${unit.name} | 난이도: ${difficulty}`);
  console.log(`${'='.repeat(60)}\n`);

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-5',
      messages: [
        { role: 'system', content: '당신은 중학교 수학 문제 출제 전문가입니다. 항상 JSON 형식으로 응답합니다.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.9,
      max_tokens: 4000
    });

    const response = completion.choices[0].message.content;
    
    // JSON 추출
    const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/) || response.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error('JSON 형식을 찾을 수 없습니다.');
      return [];
    }

    const problems = JSON.parse(jsonMatch[1] || jsonMatch[0]);
    console.log(`✅ ${problems.length}개 문제 생성 완료`);
    
    return problems;
  } catch (error) {
    console.error(`❌ 에러: ${error.message}`);
    return [];
  }
}

// 템플릿 코드 생성
function generateTemplateCode(unitId, difficulty, problems) {
  let code = `\n// ${units[unitId].name} - 난이도 ${difficulty}\n`;
  
  problems.forEach((prob, idx) => {
    code += `T11.push({
  key:'${prob.key || `auto_${unitId}_d${difficulty}_${idx+1}`}',
  unitId:'${unitId}',
  difficulty:${difficulty},
  tags:${JSON.stringify(prob.tags || [])},
  gen(){
    const {randInt, choice} = GenCore;
    // ${prob.type || '자동생성'}
    return {
      type:'short',
      question:\`${prob.question}\`,
      answer:'${prob.answer}',
      answerType:'${prob.answerType || 'string'}',
      tolerance:0,
      unitLabel:'',
      hint:\`${prob.hint}\`,
      explain:\`${prob.explain}\`
    };
  }
});

`;
  });
  
  return code;
}

// 메인 실행
async function main() {
  console.log('\n🤖 AI 기반 수학 문제 자동 생성 시스템');
  console.log('=' .repeat(60));
  
  const allCode = [];
  allCode.push("// AI 자동 생성 템플릿\nconst T11 = [];\n");
  
  // 9개 단원 × 3개 난이도 = 27개 배치
  const unitIds = Object.keys(units).slice(0, 3); // 우선 3개 단원만
  
  for (const unitId of unitIds) {
    for (let difficulty = 1; difficulty <= 3; difficulty++) {
      const problems = await generateProblems(unitId, difficulty, 10); // 각 10개씩
      if (problems.length > 0) {
        const code = generateTemplateCode(unitId, difficulty, problems);
        allCode.push(code);
      }
      
      // API 제한 방지
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  allCode.push("\nwindow.Templates_1_1 = T11;");
  
  // 파일 저장
  const outputPath = 'js/generator/templates_1_1_ai.js';
  fs.writeFileSync(outputPath, allCode.join('\n'));
  
  console.log(`\n✅ 완료! 파일 생성: ${outputPath}`);
  console.log(`총 생성된 템플릿 수: ${allCode.join('').match(/T11\.push/g)?.length || 0}개`);
}

main().catch(console.error);
