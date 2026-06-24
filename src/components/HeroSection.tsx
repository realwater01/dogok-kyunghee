import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      {/* 상단 영역 - 흰 배경 */}
      <div className="bg-white pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-8 text-primary tracking-wider">
                한약으로
                <br />
                몸과 마음을 치료합니다
              </h1>
              <p className="text-xl text-text-light mb-6 max-w-md">
                <span className="text-2xl font-normal text-accent block mb-3">집중력, 체력, 자율신경계 치료</span>
                <span className="text-base font-normal leading-normal block">경희대학교 한의학과 학사 석사 박사</span>
                <span className="text-base font-normal leading-normal block">20년 경력의 한방내과 전문의</span>
              </p>
            </div>

            {/* 빈 공간 (사진은 아래로 이동) */}
            <div className="order-1 lg:order-2"></div>
          </div>
        </div>
      </div>

      {/* 하단 영역 - 베이지 배경 (한약 설명 + 사진) */}
      <div className="bg-[#FAF8F5]">
        <div className="container mx-auto px-6 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-8 lg:gap-12 items-end">
            {/* 한약, 제대로 달이다 텍스트 */}
            <div className="order-2 lg:order-1 lg:pl-16">
              <p className="text-accent font-bold mb-6 tracking-wide text-xl">한약, 제대로 달이다</p>
              <p className="text-accent font-normal tracking-wide text-sm leading-relaxed max-w-md mb-8">
                한약은 자연으로부터 온 다양한 약재를 엄선하고,
                {" "}<br className="hidden md:block" />
                개인의 체질에 맞게 조화롭게 배합해
                {" "}<br className="hidden md:block" />
                몸과 마음의 균형을 회복하도록 돕는
                {" "}<br className="hidden md:block" />
                자연에 가까운 치료법입니다.
                <br /><br />
                바쁜 일상 속 스트레스와 과로,
                {" "}<br className="hidden md:block" />
                잘못된 생활습관으로
                {" "}<br className="hidden md:block" />
                현대인은 건강을 놓치곤 합니다.
                <br /><br />
                도곡경희한의원은
                {" "}<br className="hidden md:block" />
                한 사람, 한 사람을 위해
                {" "}<br className="hidden md:block" />
                정성껏 직접 달인 한약으로
                {" "}<br className="hidden md:block" />
                몸의 회복과 체질의 균형을 돕습니다.
                <br /><br />
                당신의 일상이 다시 편안해질 수 있도록
                {" "}<br className="hidden md:block" />
                편안한 공간에서 문을 열고 기다립니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:02-6949-1888" className="btn-primary text-center">
                  전화 상담 바로가기
                </a>
                <Link href="/about" className="btn-outline text-center">
                  한의원 소개
                </Link>
              </div>

            </div>

            {/* Doctor Image */}
            <div className="order-1 lg:order-2 relative flex items-end lg:-mr-6">
              <div className="w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10"></div>
                <Image
                  src="/daepyo.jpg"
                  alt="도곡경희한의원 원장"
                  width={900}
                  height={720}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex gap-12 py-12 lg:pl-16">
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
