import Link from "next/link";

// 홈 히어로 바로 아래에 오는 수험생 한약 스포트라이트 섹션.
// 증상별 카드로 "공부 컨디션은 의지가 아니라 몸 문제"라는 메시지를 전한다.
const symptoms = [
  {
    title: "집중이 안 돼요",
    description: "오래 앉아 있어도 머리가 멍하고 능률이 오르지 않습니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
  {
    title: "쉽게 지쳐요",
    description: "오후만 되면 방전되고 체력이 버텨주지 못합니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "긴장되고 잠을 설쳐요",
    description: "시험 불안, 가슴 두근거림, 얕은 수면이 반복됩니다.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    ),
  },
];

export default function StudentSection() {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">수험생</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            공부할 몸을 만드는 한약
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            집중이 안 되고 쉽게 지치는 건
            <br />
            의지가 아니라 몸의 문제입니다.
            <br />
            자율신경 균형을 잡아
            <br />
            공부할 수 있는 몸의 회복을 돕습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="p-5 md:p-8 bg-white rounded-xl border border-transparent hover:border-brown-light transition-all duration-300 flex items-center gap-4 text-left md:flex-col md:text-center md:gap-0"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-5">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {symptom.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-3 text-primary">
                  {symptom.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {symptom.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/treatment/student-focus" className="btn-primary inline-block">
            수험생 프로그램 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
