import Link from "next/link";
import Image from "next/image";

export default function AboutIntroPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brown-bg py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">ABOUT US</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              도곡경희한의원을
              <br />
              소개합니다
            </h1>
            <p className="text-accent font-bold mb-2">한약, 제대로 달이다</p>
            <p className="text-text-light text-lg leading-relaxed">
              천연약재의 배합을 통한 최적의 자연치료로<br />
              건강한 삶을 되찾아드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-accent font-medium mb-4 text-xl">진료 철학</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                몸과 마음, 자연속에서 균형을 찾다
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-title first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  몸과 마음의 균형이 깨지면<br />
                  몸의 이상반응이 시작됩니다.
                </p>
                <p>
                  자율신경계의 조절력이 떨어지면서<br />
                  면역력은 균형을 잃고<br />
                  외부 바이러스와 세균 감염에는 취약해지고<br />
                  오히려 내 면역이 내 몸을 공격하여 염증을 만들어냅니다.
                </p>
                <p>
                  호르몬 분비에도 이상이 생기며<br />
                  소화문제, 비염, 집중력저하, 만성피로, 두통, 어지러움 등<br />
                  몸에는 이상신호가 발생합니다.
                </p>
                <p>
                  한약은 자율신경계의 조절력을 되찾고<br />
                  흥분된 면역반응은 가라앉히며<br />
                  저하된 면역력을 개선합니다.<br />
                  염증을 줄이고 호르몬 분비를 정상화시킵니다.
                </p>
                <p>
                  자연에서 나는 천연약재들을<br />
                  몸과 마음의 균형을 찾듯이<br />
                  조화롭게 배합하여 처방하면<br />
                  내 몸은 건강하고 활력있는 선순환을 시작합니다.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-center">
              <div className="rounded-2xl overflow-hidden" style={{ maxWidth: '420px' }}>
                <Image
                  src="/rule03.jpg"
                  alt="도곡경희한의원"
                  width={420}
                  height={280}
                  className="w-full h-auto"
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Principle Section */}
      <section className="py-24 bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-white">
              <Image
                src="/The_Autonomic_Nervous_System.jpg"
                alt="자율신경계 다이어그램"
                width={770}
                height={800}
                className="w-full h-auto"
                quality={100}
                unoptimized
              />
              {/* 한글 오버레이 - 영어 텍스트 가림 */}
              <div className="absolute top-[1%] left-[1%] bg-[#b8e6b8] px-4 py-2 text-sm md:text-lg font-bold text-green-800">
                부교감신경
              </div>
              <div className="absolute top-[1%] right-[1%] bg-[#ffd4a8] px-4 py-2 text-sm md:text-lg font-bold text-orange-800">
                교감신경
              </div>
              <div className="absolute top-[7%] left-1/2 -translate-x-1/2 bg-[#fff3c4] px-3 py-1 text-xs md:text-sm font-medium text-yellow-800">
                대뇌
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium mb-4">치료 원리</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                자율신경 조절 치료
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  도곡경희한의원은 자율신경계를 회복시킴으로써<br />
                  집중력을 개선하고<br />
                  면역력을 정상화하며<br />
                  잦은 감염 및 염증을 치료, 예방하며<br />
                  만성피로를 개선하는 치료를 진행합니다.
                </p>
                <p>
                  한약 치료, 침 치료, 자율신경조절 약침, 식생활 개선 등을<br />
                  통합적으로 적용하여<br />
                  근본적인 건강 회복을 이끌어냅니다.
                </p>
              </div>
              <Link href="/about/principle" className="inline-flex items-center mt-8 text-accent font-medium hover:underline">
                치료 원리 자세히 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Medicine Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">약재</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              원내에서 소량씩 탕전
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              경희대학교 법인 경희한약의 엄선된 식약처 인증 약재를 사용하며,<br />
              원내 탕전실에서 소량씩 직접 탕전합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src="/MDH_5728_00005.jpg"
                alt="약재"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                quality={100}
                unoptimized
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src="/MDH_5769_00038.jpg"
                alt="약재"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                quality={100}
                unoptimized
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src="/MDH_5867_00120.jpg"
                alt="약재"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                quality={100}
                unoptimized
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src="/rule.jpg"
                alt="탕전"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-24 bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">원장 소개</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                연구와 임상으로 걸어온 길
              </h2>
              <div className="text-text-light leading-relaxed doctor-description">
                <p>
                  도곡경희한의원 원장은 20년 이상의 임상경험과 지속적인 연구를 통해<br />
                  소아난치질환부터 말기암까지 내과난치질환의 한약치료의 전문성을 쌓아왔습니다.
                </p>
                <p>
                  환자 한분 한분과의 진심어린 소통을 바탕으로,<br />
                  단순한 치료를 넘어 건강한 삶을 되찾을수 있도록 함께 노력합니다.
                </p>
              </div>

              <div className="doctor-credentials">
                <p className="text-accent font-medium mb-3">학력 및 경력</p>
                <div className="credential-item">
                  <span className="text-primary">경희대학교 한의과대학 졸업</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">경희대학교 한의학석사</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">경희대학교 한의학박사</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">경희대한방병원 한방내과 전문의</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">20년 이상 임상경력</span>
                </div>
              </div>

              <div className="doctor-credentials mt-6">
                <p className="text-accent font-medium mb-3">논문 및 연구</p>
                <div className="credential-item">
                  <span className="text-primary">Trials 소화불량 반하사심탕 효과 논문발표</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">미국 SIO 한의학적 암치료 효과 논문발표</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">강동경희대병원 우수교직원상, 논문상 수상</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">대한한방소아과학회지 소아비만환아의 한약치료효과 논문발표</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">AJCM 한약의 폐암치료효과 논문발표</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">ICT 암통증의 뜸치료효과 논문발표</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">ECAM 소아뇌전증의 한약치료효과 논문발표</span>
                </div>
              </div>

              <div className="doctor-credentials mt-6">
                <p className="text-accent font-medium mb-3">강연 및 방송</p>
                <div className="credential-item">
                  <span className="text-primary">고양시한의사회 한의사대상 암치료 강연</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">한의사를 위한 임상아카데미 암치료강연</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">채널A 골든타임 홍삼효과 방송출연</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">채널A 김현욱의 굿모닝 치유비책, 약선, 건강식 등 다수 방송출연</span>
                </div>
                <div className="credential-item">
                  <span className="text-primary">tvN식스센스 쌍화탕 특별출연</span>
                </div>
              </div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-white to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm opacity-60">원장 프로필</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">진료 안내</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              1인 예약제 진료 시스템
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              환자 한 분 한 분에게 충분한 시간을 드리기 위해 예약제로 운영됩니다.
              <br className="hidden md:block" />
              프라이빗한 공간에서 편안하게 상담받으실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">진료 시간</h3>
              <div className="text-text-light text-sm space-y-1 text-center">
                <p>평일 09:00 - 16:30</p>
                <p>토요일 09:00 - 13:00</p>
                <p className="text-accent">일요일/공휴일 휴진</p>
                <p className="text-xs mt-2">평일, 토요일 모두 점심시간 없이 진료합니다</p>
              </div>
            </div>

            <div className="p-8 bg-cream rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">연락처</h3>
              <div className="text-text-light text-sm space-y-1 text-center">
                <p className="text-lg text-primary font-medium">02-6949-1888</p>
                <p>상담 및 예약 문의</p>
              </div>
            </div>

            <div className="p-8 bg-cream rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">오시는 길</h3>
              <div className="text-text-light text-sm space-y-1 text-center">
                <p>서울시 강남구 논현로 28길 24, 1층</p>
                <p>지하철 3호선 매봉역 4번출구</p>
                <Link href="/about/location" className="inline-block mt-2 text-accent hover:underline">
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            건강한 삶의 시작,<br />도곡경희한의원과 함께하세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            궁금한 점이 있으시면 언제든지 문의해 주세요.
            친절하게 상담해 드리겠습니다.
          </p>
          <Link href="tel:02-6949-1888" className="inline-block bg-white text-brown-dark px-8 py-4 rounded font-medium hover:bg-cream transition-colors">
            전화 상담하기
          </Link>
        </div>
      </section>
    </>
  );
}
