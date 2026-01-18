export default function IntroSection() {
  return (
    <section className="section bg-brown-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-accent font-medium mb-4">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
            도곡 경희한의원을 소개합니다
          </h2>
          <p className="text-text-light leading-relaxed">
            현대인들은 과도한 스트레스와 불규칙한 생활로 인해
            자율신경계의 균형이 깨지기 쉽습니다.
            저희 한의원은 근본적인 원인을 찾아 치료하여
            건강한 일상을 되찾을 수 있도록 도와드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-10 bg-white rounded-xl text-center card-hover">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">정확한 진단</h3>
            <p className="text-text-light text-sm leading-relaxed">
              체계적인 문진과 한의학적 진단을 통해
              환자분의 상태를 정확히 파악합니다.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-10 bg-white rounded-xl text-center card-hover">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">맞춤 치료</h3>
            <p className="text-text-light text-sm leading-relaxed">
              개인별 체질과 증상에 맞는
              맞춤형 한방 치료를 제공합니다.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-10 bg-white rounded-xl text-center card-hover">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">지속 관리</h3>
            <p className="text-text-light text-sm leading-relaxed">
              치료 후에도 건강한 생활을 유지할 수 있도록
              지속적인 관리를 도와드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
