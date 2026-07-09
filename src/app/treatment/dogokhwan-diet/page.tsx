import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "도곡환 다이어트 — 도곡경희한의원 다이어트 한약",
  description:
    "도곡환은 도곡경희한의원의 다이어트 한약입니다. 식욕과 대사, 순환의 균형을 도와 무리 없는 체중 관리를 돕습니다. 원내 탕전실에서 직접 조제. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/dogokhwan-diet" },
};

const pagePath = "/treatment/dogokhwan-diet";

const features = [
  {
    title: "식욕 조절을 돕습니다",
    desc: "과도한 식욕과 잦은 군것질을 다스리는 데 도움을 줍니다.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "대사·순환을 살핍니다",
    desc: "잘 붓고 대사가 느린 몸의 순환을 돕습니다.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "원내 직접 조제",
    desc: "경희한약 약재로 원내 탕전실에서 직접 조제합니다.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

const targets = [
  "식욕 조절이 어려운 분",
  "대사가 느리고 잘 붓는 분",
  "무리한 다이어트로 요요를 겪은 분",
  "바빠서 꾸준한 관리가 어려운 분",
];

export default function DogokhwanDietPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "도곡환 다이어트 — 도곡경희한의원",
            description:
              "식욕과 대사, 순환의 균형을 도와 무리 없는 체중 관리를 돕는 도곡경희한의원의 다이어트 한약.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "도곡환 다이어트", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">다이어트</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              도곡환 다이어트
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              무리한 굶기 대신, 몸의 균형을 돕는
              <br className="hidden md:block" /> 도곡경희한의원의 다이어트
              한약입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">도곡환이란</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              몸의 균형부터 살핍니다
            </h2>
            <p className="text-text-light leading-relaxed">
              도곡환은 식욕과 대사, 순환의 균형을 도와 무리 없이 체중을 관리할 수
              있도록 돕는 한약입니다. 굶는 다이어트가 아니라, 잘 관리되는 몸 상태를
              함께 만들어 가는 데 중점을 둡니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14">
            {features.map((f) => (
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
              도곡환을 권합니다
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
            나에게 맞는 다이어트, 편하게 상담하세요
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
