import Link from "next/link";

const treatments = [
  {
    title: "자율신경 실조증",
    description: "두통, 어지러움, 소화불량, 심장 두근거림 등 다양한 증상을 동반하는 자율신경계 이상을 치료합니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    href: "/treatment/autonomic",
  },
  {
    title: "불면증",
    description: "잠들기 어렵거나 수면 유지가 힘든 분들을 위해 한방 치료와 생활 교정을 통해 숙면을 되찾아드립니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    ),
    href: "/treatment/insomnia",
  },
  {
    title: "불안장애",
    description: "공황장애, 범불안장애, 사회불안장애 등 다양한 불안 증상을 한방 치료로 안정시켜 드립니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
    href: "/treatment/anxiety",
  },
  {
    title: "소화기 질환",
    description: "위장장애, 과민성 대장증후군, 역류성 식도염 등 소화기 관련 질환을 체질에 맞게 치료합니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    href: "/treatment/digestive",
  },
];

export default function TreatmentSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">TREATMENT</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
            진료 안내
          </h2>
          <p className="text-text-light max-w-xl mx-auto">
            도곡경희한의원에서는 다양한 자율신경계 관련 질환을
            전문적으로 치료하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((treatment, index) => (
            <Link
              key={index}
              href={treatment.href}
              className="group p-8 bg-secondary rounded-xl hover:bg-cream transition-all duration-300 border border-transparent hover:border-brown-light"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors shadow-sm">
                  <svg
                    className="w-7 h-7 text-accent group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {treatment.icon}
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-accent font-medium">
                    자세히 보기
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
