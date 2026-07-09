import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "도곡체질 다이어트 — 체질 맞춤 한방 다이어트",
  description:
    "같은 다이어트도 체질마다 방법이 다릅니다. 도곡경희한의원은 체질을 살펴 개인에 맞는 한약과 생활 관리로 무리 없는 체중 관리를 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/constitution-diet" },
};

const pagePath = "/treatment/constitution-diet";

const steps = [
  {
    title: "체질 분석",
    desc: "살이 찌는 원인과 몸의 반응을 체질에 따라 살핍니다.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "맞춤 한약",
    desc: "체질과 상태에 맞는 한약으로 균형을 돕습니다.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "생활 관리 안내",
    desc: "식습관과 생활을 함께 살펴 오래 유지되도록 돕습니다.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const targets = [
  "다이어트만 하면 쉽게 지치는 분",
  "먹는 양은 적은데 살이 잘 안 빠지는 분",
  "스트레스로 폭식하는 분",
  "체질에 맞는 방법을 찾고 싶은 분",
];

export default function ConstitutionDietPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "도곡체질 다이어트 — 도곡경희한의원",
            description:
              "체질을 살펴 개인에 맞는 한약과 생활 관리로 무리 없는 체중 관리를 돕는 도곡경희한의원의 체질 맞춤 다이어트.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "도곡체질 다이어트", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">다이어트</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              도곡체질 다이어트
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              같은 다이어트도 체질마다 방법이 다릅니다.
              <br className="hidden md:block" /> 나에게 맞는 방향을 찾아
              드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">왜 체질인가요</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              사람마다 살이 찌는 이유가 다릅니다
            </h2>
            <p className="text-text-light leading-relaxed">
              먹는 양, 대사, 스트레스, 몸의 반응은 사람마다 다릅니다. 도곡경희한의원은
              체질을 살펴 개인에 맞는 한약과 생활 관리를 안내해, 무리 없이 오래
              유지되는 체중 관리를 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14">
            {steps.map((f) => (
              <div key={f.title} className="bg-secondary rounded-xl p-7 text-center">
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
                      d={f.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">이런 분께</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              체질 다이어트를 권합니다
            </h2>
          </div>

          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
            {targets.map((t) => (
              <span
                key={t}
                className="px-4 py-2.5 bg-white text-text-light text-sm rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            내 체질에 맞는 다이어트, 편하게 상담하세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            체질과 생활에 맞는 방향을 친절하게 안내해 드립니다.
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
