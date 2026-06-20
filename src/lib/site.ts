// 사이트 전역에서 재사용하는 한의원 기본 정보(NAP) 및 메타 상수.
// 메타데이터, 구조화 데이터(JSON-LD), sitemap, robots, llms.txt가 모두 여기서 값을 가져온다.

export const siteUrl = "https://dogokkyunghee.com";

export const clinic = {
  name: "도곡경희한의원",
  nameEn: "Dogok Kyunghee Korean Medicine Clinic",
  tagline: "한약, 제대로 달이다",
  description:
    "도곡경희한의원은 서울 강남 매봉역 인근의 1인 예약제 한의원입니다. 자율신경 조절 치료를 중심으로 수험생 집중력, 어린이 ADHD·틱·불안, 불면증, 만성피로, 면역 질환을 한약·침·약침으로 치료합니다.",
  url: siteUrl,
  telephone: "02-6949-1888",
  fax: "070-5208-0631",
  email: "jsryan@naver.com",
  address: {
    full: "서울특별시 강남구 논현로28길 24, 세양빌딩 1층",
    streetAddress: "논현로28길 24, 세양빌딩 1층",
    addressLocality: "강남구",
    addressRegion: "서울특별시",
    postalCode: "06280",
    addressCountry: "KR",
  },
  // 매봉역(서울 지하철 3호선) 인근 좌표
  geo: { latitude: 37.4866, longitude: 127.0476 },
  transit: "지하철 3호선 매봉역 4번 출구에서 도보 7분",
  parking: "건물 내 주차 가능",
  priceRange: "₩₩",
  // 영업시간: 평일 09:00-16:30, 토 09:00-13:00, 일·공휴일 휴진 (점심시간 없음)
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "16:30" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  openingHoursText: "평일 09:00–16:30, 토요일 09:00–13:00, 일요일·공휴일 휴진 (점심시간 없이 진료)",
} as const;

export const doctor = {
  name: "원장",
  jobTitle: "한의사 · 한방내과 전문의",
  description:
    "20년 이상의 임상 경험과 지속적인 연구를 바탕으로 소아 난치질환부터 내과 난치질환까지 한약 치료의 전문성을 쌓아온 경희대 한의학박사.",
  credentials: [
    "경희대학교 한의과대학 졸업",
    "경희대학교 한의학석사",
    "경희대학교 한의학박사",
    "경희대한방병원 한방내과 전문의",
    "20년 이상 임상경력",
  ],
} as const;

// 주요 진료 분야 (구조화 데이터 medicalSpecialty / availableService 용)
export const services = [
  "자율신경 조절 치료",
  "수험생 집중력 향상",
  "어린이 ADHD·틱·불안 치료",
  "불면증 치료",
  "만성피로 개선",
  "면역력 개선",
  "비염 치료",
] as const;

// 사이트맵·내비게이션에 실제 존재하는 페이지 목록
export const sitePages = [
  { path: "/", title: "홈", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about/intro", title: "한의원 소개", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about/principle", title: "치료 원리", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/location", title: "오시는 길", changeFrequency: "yearly", priority: 0.7 },
  { path: "/treatment/student-focus", title: "수험생 집중력 향상 프로그램", changeFrequency: "monthly", priority: 0.8 },
  { path: "/treatment/student-autonomic", title: "수험생 치료 프로그램", changeFrequency: "monthly", priority: 0.8 },
  { path: "/treatment/children-adhd-tic", title: "어린이 ADHD·틱·불안 치료", changeFrequency: "monthly", priority: 0.8 },
] as const;
