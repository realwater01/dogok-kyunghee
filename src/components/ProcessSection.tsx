const steps = [
  {
    number: "01",
    title: "상담 예약",
    description: "전화 또는 온라인으로 편하게 예약하세요.",
  },
  {
    number: "02",
    title: "정밀 진단",
    description: "한의학적 진단을 통해 상태를 파악합니다.",
  },
  {
    number: "03",
    title: "맞춤 치료",
    description: "개인별 맞춤 치료 계획을 수립합니다.",
  },
  {
    number: "04",
    title: "지속 관리",
    description: "치료 후에도 건강을 유지하도록 관리합니다.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section bg-brown-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
            진료 프로세스
          </h2>
          <p className="text-text-light max-w-xl mx-auto">
            처음 방문하시는 분들을 위해 진료 과정을 안내해 드립니다
          </p>
        </div>

        {/* Desktop Process */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-[12.5%] right-[12.5%] h-[1px] bg-brown-light" />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-8">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border border-brown-light shadow-sm">
                    <span className="text-5xl font-light text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="text-text-light text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Process */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-5 bg-white p-6 rounded-xl">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium text-white">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-1 text-primary">{step.title}</h3>
                <p className="text-text-light text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
