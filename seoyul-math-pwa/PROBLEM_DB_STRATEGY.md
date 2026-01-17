# 수학 문제 DB 확보 전략

## 🎯 목표
중학교 1학년 수학 문제 DB를 대폭 확충하여 난이도별로 촘촘한 문제 제공

---

## 📚 무료 PDF 다운로드 가능 사이트

### 1. 교육부 국가교육정보센터 (NEIS)
- **URL**: https://www.neis.go.kr
- **위치**: 교육과정 자료실 → 평가문항
- **특징**:
  - 연도별, 학년별 필터링 가능
  - 표준화된 평가 문항
  - PDF 형식 제공
- **접근 방법**:
  - 회원가입 필요 (교육관계자 인증)
  - 직접 다운로드

### 2. 한국교육과정평가원 (KICE)
- **URL**: https://www.kice.re.kr
- **위치**: 연구자료 → 평가도구
- **특징**:
  - 표준화된 문항 데이터베이스
  - 난이도, 변별도 정보 포함
  - 평가 기준 상세 설명
- **활용 가능 자료**:
  - 국가수준 학업성취도 평가
  - 기초학력 진단 도구
  - 수학 기초학력 검사
- **접근 방법**:
  - 공개 자료실 활용
  - PDF 다운로드

### 3. EBS eBook 도서관
- **URL**: https://www.ebsmath.co.kr
- **특징**:
  - 중학 수학 문제집 무료 열람
  - 스마트폰 앱으로 접근 가능
  - EBS 중학프리미엄 수학 문제집
- **접근 방법**:
  - EBS 회원가입
  - eBook 뷰어로 열람
  - 일부 PDF 다운로드 가능

### 4. 시도교육청 학습자료
#### 서울특별시교육청 교육연구정보원
- **URL**: https://www.serii.re.kr
- **위치**: 학습자료실 → 수학 기출문제집
- **특징**:
  - 서울시 지필평가 기출문제
  - 단원별 정리
  - PDF 무료 제공

#### 경기도교육청 지식관리시스템
- **URL**: https://www.goe.go.kr
- **특징**:
  - 경기도 학력평가 기출
  - 수학 교과 연구자료

#### 부산광역시교육청
- **URL**: https://www.pen.go.kr
- **특징**:
  - 학력평가 자료
  - 단원별 문제은행

---

## 🌐 웹 크롤링 가능 사이트

### 1. 학교 수학 문제은행 사이트

#### 매쓰플랫 (MathFlat)
- **URL**: https://mathflat.com
- **특징**:
  - AI 기반 수학 문제 생성
  - 단원별/난이도별 문제
  - JSON API 제공 가능성
- **크롤링 전략**:
  - Selenium 활용
  - 문제 ID 추출
  - 이미지 OCR 처리

#### 수학의 정석 온라인
- **URL**: https://jungsuk.com
- **특징**:
  - 정석 시리즈 문제
  - 단원별 체계적 구성
- **크롤링 전략**:
  - Beautiful Soup 활용
  - HTML 파싱

### 2. 온라인 학습 사이트 문제 DB

#### 칸아카데미 한국어
- **URL**: https://ko.khanacademy.org
- **특징**:
  - 무료 학습 플랫폼
  - 번역된 한국어 문제
  - 난이도 단계별 구성
- **API 접근**:
  - Khan Academy API 활용 가능
  - https://api.khanacademy.org

#### 아이스크림 홈런
- **URL**: https://www.home-learn.co.kr
- **특징**:
  - 초중등 학습 콘텐츠
  - 단원별 평가 문제
- **주의**: 유료 서비스, 저작권 고려 필요

### 3. 공개 API가 있는 교육 플랫폼

#### 위두랑 (Wedorang)
- **URL**: https://rang.edunet.net
- **특징**:
  - 교사 공유 학습자료
  - 문제은행 시스템
- **접근**:
  - 교육용 계정 필요
  - API 문의 필요

---

## 🔧 문제 수집 및 처리 파이프라인

### Phase 1: 데이터 수집
```javascript
1. PDF 문서 수집
   - 교육청/평가원 공식 자료
   - 저작권 확인 완료된 자료만

2. 웹 크롤링
   - robots.txt 확인
   - 이용약관 준수
   - Rate limiting 적용
```

### Phase 2: 문제 추출
```javascript
1. PDF 파싱
   - pdfjs 또는 pdf-parse 라이브러리
   - 텍스트 및 이미지 추출

2. OCR 처리 (필요시)
   - Tesseract.js
   - Google Vision API

3. 문제 구조화
   - 문제 번호 인식
   - 문제/선택지/정답 분리
   - 난이도 메타데이터 추출
```

### Phase 3: 데이터베이스 구축
```javascript
{
  "id": "KICE_M1_001",
  "source": "한국교육과정평가원",
  "year": 2024,
  "unitId": "m1-1-1-I-1",
  "difficulty": 3,
  "type": "short",
  "question": "문제 텍스트",
  "answer": "정답",
  "hint": "힌트",
  "explain": "해설",
  "tags": ["소인수분해", "응용"],
  "copyright": "교육용 활용 가능"
}
```

### Phase 4: 템플릿 변환
```javascript
// 수집된 문제를 템플릿 형식으로 변환
function problemToTemplate(problem) {
  return {
    key: problem.id,
    unitId: problem.unitId,
    difficulty: problem.difficulty,
    tags: problem.tags,
    gen() {
      return {
        type: problem.type,
        question: problem.question,
        answer: problem.answer,
        hint: problem.hint,
        explain: problem.explain
      };
    }
  };
}
```

---

## ⚖️ 저작권 고려사항

### 교육용 공정이용 원칙
1. **출처 명시**: 모든 문제에 출처 표기
2. **교육 목적**: 비영리 교육 목적으로만 사용
3. **적정 범위**: 전체의 일부만 활용
4. **변형 허용**: 숫자/변수 변경으로 새로운 문제 생성

### 안전한 사용 전략
- 공공 교육기관 자료 우선 사용
- 문제 유형을 학습하여 유사 문제 생성
- AI 문제 생성 활용 (GPT, Claude 등)

---

## 📊 단계별 실행 계획

### 1단계: 공식 자료 확보 (즉시 실행 가능)
- [ ] 교육부 NEIS 회원가입
- [ ] KICE 평가자료 다운로드
- [ ] 서울교육청 기출문제 수집
- [ ] EBS 문제집 열람

### 2단계: 문제 분석 및 템플릿화 (1-2주)
- [ ] 수집된 문제 분류
- [ ] 난이도 재조정
- [ ] 템플릿 패턴 추출
- [ ] 데이터베이스 구축

### 3단계: 웹 크롤링 (2-4주)
- [ ] 크롤링 스크립트 개발
- [ ] 저작권 검토
- [ ] 자동 수집 시스템 구축

### 4단계: AI 문제 생성 (병행)
- [ ] GPT-4 API 활용
- [ ] 기존 문제 패턴 학습
- [ ] 유사 문제 대량 생성

---

## 🎯 목표 수치

### 현재 상태
- 총 템플릿: 73개
- 난이도1: 16개
- 난이도2: 16개
- 난이도3: 41개

### 목표 (3개월 내)
- 총 템플릿: **500개 이상**
- 난이도1: 150개 (단원당 10개)
- 난이도2: 150개 (단원당 10개)
- 난이도3: 200개 (단원당 12개 이상)
- **실제 기출문제 기반**: 300개
- **AI 생성 문제**: 200개

---

## 📝 다음 액션 아이템

1. **즉시 실행**
   - KICE 사이트 접속하여 평가도구 다운로드
   - 서울교육청 수학 기출문제 수집
   - 문제 유형 분석 시작

2. **이번 주 내**
   - PDF 파싱 스크립트 개발
   - 문제 데이터베이스 스키마 설계
   - 저작권 가이드라인 최종 확인

3. **이번 달 내**
   - 100개 이상 기출문제 수집
   - 50개 템플릿 추가
   - 크롤링 시스템 프로토타입

---

## 🔗 유용한 링크

- KICE: https://www.kice.re.kr
- 교육부 NEIS: https://www.neis.go.kr
- 서울교육청: https://www.sen.go.kr
- EBS Math: https://www.ebsmath.co.kr
- Khan Academy API: https://github.com/Khan/khan-api

---

**작성일**: 2026-01-17  
**최종 수정**: 2026-01-17  
**담당**: GenSpark AI Assistant
