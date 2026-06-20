// 구조화 데이터(JSON-LD)를 <script type="application/ld+json">로 출력한다.
// 검색엔진과 LLM이 페이지의 의미를 정확히 파싱하도록 돕는다.
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // 신뢰된 정적 데이터만 직렬화하므로 XSS 위험 없음
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
