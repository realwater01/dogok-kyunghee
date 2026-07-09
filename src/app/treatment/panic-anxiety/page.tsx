import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "공황장애·불안·실신 — 자율신경 과흥분 한방 치료",
  description:
    "갑작스러운 공황과 불안, 실신의 배경에는 자율신경계의 과흥분이 있을 수 있습니다. 도곡경희한의원은 한약으로 몸의 균형을 되찾고 자율신경 조절력을 높여 예민해진 뇌신경을 가라앉히도록 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/panic-anxiety" },
};

const pagePath = "/treatment/panic-anxiety";

const symptoms = [
  "무기력감·우울감",
  "얼굴 홍조",
  "지나친 수족냉감 또는 열감",
  "잦은 감기",
  "소화장애",
  "배뇨·배변장애",
  "심한 생리통",
  "불면",
];

const roles = [
  {
    title: "몸의 균형 회복",
    desc: "흐트러진 몸의 밸런스를 되찾도록 돕습니다.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "자율신경 조절력 강화",
    desc: "과흥분한 자율신경을 안정시켜 조절력을 높입니다.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "뇌신경 과민 완화",
    desc: "예민해진 뇌신경을 가라앉혀 건강한 몸으로 돕습니다.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

export default function PanicAnxietyPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "공황장애·불안·실신 — 도곡경희한의원",
            description:
              "자율신경 과흥분으로 인한 공황·불안·실신을 한약으로 자율신경 조절과 뇌신경 과민 완화를 돕는 한방 치료.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "공황장애·불안·실신", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">자율신경계</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              공황장애·불안·실신
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              갑작스런 불안과 공황, 실신의 배경에는
              <br className="hidden md:block" /> 자율신경계 문제가 있을 수
              있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">왜 생기나요</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              자율신경실조가{" "}<br className="md:hidden" />뇌신경을 흔듭니다
            </h2>
            <p className="text-text-light leading-relaxed">
              자율신경계가 과도하게 흥분하면 뇌신경계도 함께 예민해지면서 공황과
              불안, 실신 같은 증상이 나타납니다.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm md:text-base font-medium">
            <span className="px-5 py-2.5 bg-secondary rounded-full text-primary">
              자율신경계 과흥분
            </span>
            <span className="text-accent font-bold rotate-90 md:rotate-0">→</span>
            <span className="px-5 py-2.5 bg-secondary rounded-full text-primary">
              뇌신경계 과흥분
            </span>
            <span className="text-accent font-bold rotate-90 md:rotate-0">→</span>
            <span className="px-5 py-2.5 bg-accent text-white rounded-full">
              공황·불안·실신
            </span>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">이런 증상</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              이렇게 나타납니다
            </h2>
            <p className="text-text-light leading-relaxed">
              공황장애·불안·실신과 더불어 아래 증상이 함께 나타난다면
              <br className="hidden md:block" /> 자율신경계 문제일 수 있습니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
            {symptoms.map((s) => (
              <span
                key={s}
                className="px-4 py-2.5 bg-white text-text-light text-sm rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Herbal Role Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">한약의 역할</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              예민해진 몸과 신경을{" "}<br className="md:hidden" />가라앉힙니다
            </h2>
            <p className="text-text-light leading-relaxed">
              증상만 누르기보다, 과흥분한 자율신경을 안정시켜
              <br className="hidden md:block" /> 근본 바탕을 다지는 데 중점을
              둡니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roles.map((r) => (
              <div key={r.title} className="bg-secondary rounded-xl p-7 text-center">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={r.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {r.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-text-light leading-relaxed max-w-2xl mx-auto mt-12">
            개인의 체질에 맞춰 한약을 처방하며, 일시적인 증상 조절을 넘어 불안과
            공황이 덜 반복되는 몸 상태를 함께 만들어 가는 데 중점을 둡니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            불안과 공황, 편하게 상담하세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            증상과 체질에 맞는 방향을 친절하게 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${clinic.telephone}`}
              className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-white text-brown-dark px-8 py-4 rounded font-medium hover:bg-cream transition-colors"
            >
              전화 상담하기
            </a>
            <Link
              href={kakaoChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-transparent border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-brown-dark transition-colors"
            >
              카카오톡 상담
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
