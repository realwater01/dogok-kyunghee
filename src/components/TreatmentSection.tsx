import Link from "next/link";

const treatments = [
  {
    title: "수험생 치료",
    description: "수험생 치료 임상경험을 바탕으로 아프지 않고 좋은 컨디션으로 공부에 집중할 수 있도록 안전하고 효과적인 한약치료를 제공합니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
    href: "/treatment/student-autonomic",
  },
  {
    title: "자율신경실조\n- 반복감염, TIC, ADHD, 우울, 공황장애",
    description: "자율신경계 문제는 각종 신경정신문제, 면역력약화를 일으킵니다.\n근본적 접근으로 건강하게 회복하도록 돕습니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    href: "/treatment/children-adhd-tic",
  },
  {
    title: "비염",
    description: "도곡경희한의원만의 비염 패턴 치료 - 비염 ABC 로 정확하게 치료합니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4c-1.5 0-3 1-3 3v5c0 2 1.5 4 3 6 1.5-2 3-4 3-6V7c0-2-1.5-3-3-3zM9 12c-2 0-3.5 1-3.5 2.5S7 17 9 17M15 12c2 0 3.5 1 3.5 2.5S17 17 15 17"
      />
    ),
    href: "/coming-soon",
  },
  {
    title: "도곡경희보약",
    description: "도곡경희한의원의 처방 - 달이다 쌍화, 강활 쌍금탕, 총명 쌍화탕, 사향공진단을 처방받아보세요.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    href: "/coming-soon",
  },
];

export default function TreatmentSection() {
  return (
    <section id="treatment" className="section bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">TREATMENT</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            진료 안내
          </h2>
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
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors whitespace-pre-line">
                    {treatment.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4 whitespace-pre-line">
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
