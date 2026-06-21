export default function DoctorSection() {
  return (
    <section className="section bg-brown-bg">
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
  );
}
