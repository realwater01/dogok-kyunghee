import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-medium mb-4 tracking-wide">자율신경 실조 치료 전문</p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] mb-8 text-primary">
              몸과 마음의
              <br />
              건강한 균형을
              <br />
              되찾아드립니다
            </h1>
            <p className="text-lg text-text-light mb-10 leading-relaxed max-w-md">
              20년간의 임상 경험을 바탕으로
              자율신경 실조증, 불면증, 불안장애 등
              현대인의 복잡한 건강 문제를 해결합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reservation" className="btn-primary text-center">
                온라인 상담 예약
              </Link>
              <Link href="/about" className="btn-outline text-center">
                한의원 소개
              </Link>
            </div>

            {/* Quick Info */}
            <div className="mt-16 flex gap-12">
              <div>
                <p className="text-4xl font-semibold text-accent">20+</p>
                <p className="text-sm text-text-light mt-1">년 경력</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-accent">10,000+</p>
                <p className="text-sm text-text-light mt-1">치료 사례</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-accent">98%</p>
                <p className="text-sm text-text-light mt-1">만족도</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-cream to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg
                  className="w-20 h-20 mx-auto mb-4 opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm opacity-60">의료진 사진</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-brown-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
