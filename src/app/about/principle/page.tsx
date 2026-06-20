export default function PrinciplePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">TREATMENT</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              치료원리
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              자율신경계를 중심으로 몸과 마음의 균형을 회복시키는<br />
              도곡경희한의원의 치료 원리를 소개합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary">
                  자율신경계란?
                </h2>
                <div className="space-y-4 text-text-light leading-relaxed">
                  <p>
                    자율신경계는 우리 몸의 항상성을 유지하는 핵심 시스템입니다.
                    심장 박동, 호흡, 소화, 체온 조절 등 의지와 관계없이
                    자동으로 조절되는 모든 기능을 담당합니다.
                  </p>
                  <p>
                    자율신경계는 교감신경과 부교감신경으로 구성되어 있으며,
                    이 두 신경이 균형을 이룰 때 우리 몸은 건강한 상태를 유지합니다.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary">
                  자율신경 실조의 원인
                </h2>
                <div className="space-y-4 text-text-light leading-relaxed">
                  <p>
                    현대인들은 과도한 스트레스, 불규칙한 수면, 잘못된 식습관,
                    운동 부족 등으로 인해 자율신경계의 균형이 쉽게 깨집니다.
                  </p>
                  <p>
                    이로 인해 두통, 어지러움, 불면증, 소화불량, 심장 두근거림,
                    불안감 등 다양한 증상이 나타나게 됩니다.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "과도한 스트레스",
                    "불규칙한 수면 패턴",
                    "잘못된 식습관",
                    "운동 부족",
                    "과로 및 피로 누적",
                    "감정적 충격"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                      <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                      <span className="text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary">
                  도곡경희한의원의 치료 접근법
                </h2>
                <div className="space-y-4 text-text-light leading-relaxed">
                  <p>
                    도곡경희한의원은 단순히 증상을 완화하는 것이 아니라,
                    자율신경계의 균형을 근본적으로 회복시키는 치료를 목표로 합니다.
                  </p>
                  <p>
                    환자 개개인의 체질, 생활 패턴, 증상의 원인을 종합적으로 분석하여
                    맞춤형 치료 계획을 수립합니다.
                  </p>
                </div>
              </div>

              {/* Treatment Steps */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-8 text-primary">
                  치료 과정
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "정밀 진단",
                      description: "한의학적 진단법을 통해 환자의 체질과 증상을 정확히 파악합니다. 맥진, 설진, 문진 등을 종합하여 진단합니다."
                    },
                    {
                      step: "02",
                      title: "맞춤 처방",
                      description: "진단 결과를 바탕으로 개인별 맞춤 한약을 처방합니다. 자율신경계 조절에 효과적인 약재를 선별하여 조제합니다."
                    },
                    {
                      step: "03",
                      title: "침 치료",
                      description: "자율신경계와 관련된 경혈점에 침 치료를 시행합니다. 막힌 기혈 순환을 원활하게 하여 증상을 개선합니다."
                    },
                    {
                      step: "04",
                      title: "생활 교정",
                      description: "약물 치료와 함께 생활 습관 개선을 안내합니다. 수면, 식이, 운동 등 일상에서 실천할 수 있는 방법을 제안합니다."
                    },
                    {
                      step: "05",
                      title: "지속 관리",
                      description: "치료 후에도 재발 방지와 건강 유지를 위한 정기적인 관리를 진행합니다."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 p-6 bg-cream rounded-xl">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-primary mb-2">{item.title}</h3>
                        <p className="text-text-light text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
