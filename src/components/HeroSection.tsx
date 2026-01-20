import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-normal mb-4 tracking-wide text-xl">한약, 제대로 달이다</p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.2] mb-8 text-primary tracking-wider">
              한약으로
              <br />
              몸과 마음을 치료합니다
            </h1>
            <p className="text-lg text-text-light mb-10 max-w-md">
              <span className="font-normal text-primary block mb-3">한약 치료 상위 1% 자부심</span>
              <span className="text-sm font-normal leading-normal block">경희대학교 한의학과 학사 석사 박사</span>
              <span className="text-sm font-normal leading-normal block">20년 경력의 한방내과 전문의</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reservation" className="btn-primary text-center">
                카카오톡 상담 바로가기
              </Link>
              <Link href="/about" className="btn-outline text-center">
                한의원 소개
              </Link>
              <Link href="/naver-reservation" className="btn-primary text-center">
                네이버 예약 바로가기
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
                <p className="text-sm text-text-light mt-1">한약 처방 건수</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-accent">10+</p>
                <p className="text-sm text-text-light mt-1">가성비 좋은 상비약</p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="max-w-[650px] mx-auto">
              <Image
                src="/대표사진.jpg"
                alt="도곡경희한의원 원장"
                width={700}
                height={560}
                className="w-full h-auto rounded-2xl"
                priority
                quality={100}
                unoptimized
              />
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
