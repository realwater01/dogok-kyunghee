import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "준비중",
  description: "준비중인 페이지입니다. 곧 더 나은 내용으로 찾아뵙겠습니다.",
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center py-20">
          <p className="text-accent font-medium mb-4">COMING SOON</p>
          <h1
            className="text-3xl md:text-4xl font-semibold mb-6 text-primary"
            style={{ fontFamily: "var(--font-batang)" }}
          >
            준비중입니다
          </h1>
          <p className="text-text-light leading-relaxed mb-10">
            현재 내용을 정성껏 준비하고 있습니다.
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
