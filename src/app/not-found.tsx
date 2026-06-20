import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center py-20">
          <p className="text-accent font-medium mb-4">404</p>
          <h1
            className="text-3xl md:text-4xl font-semibold mb-6 text-primary"
            style={{ fontFamily: "var(--font-batang)" }}
          >
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-text-light leading-relaxed mb-10">
            주소가 바뀌었거나 준비중인 페이지일 수 있습니다.
            <br />
            궁금한 점은 전화로 편하게 문의해 주세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-6949-1888" className="btn-primary text-center">
              전화 상담
            </a>
            <Link href="/" className="btn-outline text-center">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
