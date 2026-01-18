import Link from "next/link";

export default function AboutIntroPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brown-bg py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">ABOUT US</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              도곡경희한의원을<br />소개합니다
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              20년 이상의 임상 경험을 바탕으로<br />
              환자 한 분 한 분의 건강을 책임집니다.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">진료 철학</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                몸, 마음, 삶의 균형
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-title first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  나라는 존재는 몸, 마음, 삶 세 가지 요소로 이루어져 있습니다.
                  삶이 원인을 제공하고, 마음이 해석하며, 몸이 반응합니다.
                </p>
                <p>
                  현대인들은 과도한 스트레스와 불규칙한 생활 패턴으로 인해
                  자율신경계의 균형이 깨지기 쉽습니다. 이로 인해 다양한
                  신체적, 정신적 증상이 나타나게 됩니다.
                </p>
                <p>
                  도곡경희한의원은 단순히 증상만을 치료하는 것이 아니라,
                  환자분의 삶 전체를 이해하고 근본적인 원인을 찾아
                  치료하는 것을 목표로 합니다.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-cream to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="text-sm opacity-60">한의원 이미지</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Principle Section */}
      <section className="py-24 bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] bg-gradient-to-br from-white to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm opacity-60">치료 이미지</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium mb-4">치료 원리</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                자율신경 조율 요법
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  도곡경희한의원은 자율신경계를 중심으로 몸과 마음의
                  균형을 회복시키는 치료를 진행합니다.
                </p>
                <p>
                  20년 이상의 임상 경험을 바탕으로 개발된 치료법으로,
                  환자 개개인의 체질과 증상에 맞춘 맞춤형 처방을 제공합니다.
                </p>
                <p>
                  침 치료, 한약 처방, 생활 교정 등을 통합적으로 적용하여
                  근본적인 치료 효과를 이끌어냅니다.
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
              엄선된 친환경 약재
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              GAP 인증 친환경 약재만을 사용하며,
              최신 설비에서 전문 한약사가 직접 조제합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-cream to-brown-light rounded-xl flex items-center justify-center">
                <div className="text-center text-brown-dark">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <p className="text-xs opacity-60">약재 {item}</p>
                </div>
              </div>
            ))}
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
                  도곡경희한의원 원장은 20년 이상의 임상 경험과
                  지속적인 연구를 통해 자율신경계 질환 치료의
                  전문성을 쌓아왔습니다.
                </p>
                <p>
                  환자 한 분 한 분과의 진심 어린 소통을 중요시하며,
                  단순한 치료를 넘어 건강한 삶을 되찾을 수 있도록
                  함께 노력합니다.
                </p>
              </div>

              <div className="doctor-credentials">
                <div className="flex items-center gap-3 credential-item">
                  <span className="bullet-brown"></span>
                  <span className="text-primary">경희대학교 한의과대학 졸업</span>
                </div>
                <div className="flex items-center gap-3 credential-item">
                  <span className="bullet-brown"></span>
                  <span className="text-primary">경희대학교 한의학 석사</span>
                </div>
                <div className="flex items-center gap-3 credential-item">
                  <span className="bullet-brown"></span>
                  <span className="text-primary">대한한의사협회 정회원</span>
                </div>
                <div className="flex items-center gap-3 credential-item">
                  <span className="bullet-brown"></span>
                  <span className="text-primary">20년 이상 임상 경력</span>
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
              환자 한 분 한 분에게 충분한 시간을 드리기 위해
              예약제로 운영됩니다. 프라이빗한 공간에서 편안하게
              상담받으실 수 있습니다.
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
                <p>평일 10:00 - 19:00</p>
                <p>토요일 10:00 - 16:00</p>
                <p>점심 13:00 - 14:00</p>
                <p className="text-accent">일요일/공휴일 휴진</p>
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
                <p className="text-lg text-primary font-medium">02-XXX-XXXX</p>
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
                <p>서울시 강남구 도곡동</p>
                <p>지하철 3호선 도곡역</p>
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
          <Link href="tel:02-XXX-XXXX" className="inline-block bg-white text-brown-dark px-8 py-4 rounded font-medium hover:bg-cream transition-colors">
            전화 상담하기
          </Link>
        </div>
      </section>
    </>
  );
}
