import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "도곡체질 다이어트 — 체질 맞춤 한방 다이어트",
  description:
    "다이어트는 단순한 감량이 아니라 잘 빠지는 몸을 만드는 과정입니다. 도곡경희한의원은 체질을 분석해 잘 빠지는 길을 찾고, 개인에 맞는 한약으로 다이어트를 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/constitution-diet" },
};

const pagePath = "/treatment/constitution-diet";

const custom = ["체질 분석", "생활 패턴", "감량 목표", "체형"];

const causes = [
  {
    name: "습담",
    hanja: "濕痰",
    desc: "노폐물과 수분이 잘 빠지지 않고 쌓여 몸이 무겁고 잘 붓습니다.",
    icon: "M12 4c-1.5 0-3 1-3 3v5c0 2 1.5 4 3 6 1.5-2 3-4 3-6V7c0-2-1.5-3-3-3zM9 12c-2 0-3.5 1-3.5 2.5S7 17 9 17M15 12c2 0 3.5 1 3.5 2.5S17 17 15 17",
  },
  {
    name: "어혈",
    hanja: "瘀血",
    desc: "순환이 더뎌 대사가 느려지고 살이 잘 빠지지 않습니다.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    name: "기체",
    hanja: "氣滯",
    desc: "기 순환이 막혀 식욕 조절과 스트레스에 영향을 줍니다.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const diagnose = [
  {
    title: "개인별 체질 분석",
    desc: "타고난 체질과 몸의 반응 패턴을 살핍니다.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    photo: true,
  },
  {
    title: "인바디 분석",
    desc: "체성분·근육·체지방을 수치로 확인합니다.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    // 실제 사진을 넣을 때: public에 파일을 두고 아래 photo 자리를 <Image>로 교체.
    photo: true,
  },
  {
    title: "진맥",
    desc: "맥을 짚어 순환과 몸의 상태를 확인합니다.",
    icon: "M7 11.5V14m0 0v4a2 2 0 002 2h4.5a4 4 0 004-4v-3.5a1.5 1.5 0 00-3 0m-2.5 0V8a1.5 1.5 0 00-3 0v3.5m3-.5V6.5a1.5 1.5 0 013 0V11m-6 .5V9a1.5 1.5 0 00-3 0v2.5c0 .8.2 1.5.6 2.1",
    photo: true,
  },
];

const approaches = [
  {
    title: "대사·순환 회복",
    desc: "느려진 대사와 순환을 도와 잘 빠지는 몸 상태를 만듭니다.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "식욕·식습관 조절",
    desc: "과도한 식욕을 다스리고 건강한 식습관을 돕습니다.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "노폐물·부기 관리",
    desc: "잘 붓고 순환이 더딘 몸의 노폐물 배출을 돕습니다.",
    icon: "M12 4c-1.5 0-3 1-3 3v5c0 2 1.5 4 3 6 1.5-2 3-4 3-6V7c0-2-1.5-3-3-3zM9 12c-2 0-3.5 1-3.5 2.5S7 17 9 17M15 12c2 0 3.5 1 3.5 2.5S17 17 15 17",
  },
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
              "체질을 분석해 잘 빠지는 길을 찾고 개인에 맞는 한약으로 다이어트를 돕는 도곡경희한의원의 체질 맞춤 다이어트.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "도곡체질 다이어트", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#26344A] text-white section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">다이어트</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              도곡체질 다이어트
            </h1>
            <p className="text-brown-light text-lg leading-relaxed">
              체질마다 잘 빠지는 길이 다릅니다.
              <br className="hidden md:block" /> 나에게 맞는 방향을 찾아
              드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">다이어트, 다시 봅니다</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              굶는다고 빠지지 않습니다
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                살이 잘 빠지지 않는 건 의지가 부족해서가 아닙니다. 몸이 잘 빠지는
                상태가 아니기 때문입니다.
              </p>
              <p>
                다이어트는 단순히 체중을 줄이는 일이 아니라, 대사와 순환이 제대로
                도는 ‘잘 빠지는 몸’을 만들어 가는 과정입니다.
              </p>
            </div>
          </div>

          {/* 빠지지 않는 원인 다이어그램 */}
          <div className="max-w-4xl mx-auto mt-14">
            <p className="text-center text-sm font-semibold text-accent mb-6">
              빠지지 않는 데는 원인이 있습니다
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {causes.map((c) => (
                <div
                  key={c.name}
                  className="bg-brown-bg rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={c.icon}
                      />
                    </svg>
                  </div>
                  <div className="flex items-baseline justify-center gap-1.5 mb-2">
                    <h3 className="text-lg font-semibold text-primary">
                      {c.name}
                    </h3>
                    <span className="text-xs text-text-light">{c.hanja}</span>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 원인 → 결과 연결 */}
            <div className="flex justify-center my-4">
              <svg
                className="w-7 h-7 text-accent rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>

            <p className="max-w-xl mx-auto text-center text-text-light leading-relaxed">
              이런 원인부터 살펴 잘 빠지는 몸 상태로 되돌리는 것이 먼저입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Constitution Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">도곡체질 다이어트</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              체질마다 빠지는 길이 다릅니다
            </h2>
            <p className="text-text-light leading-relaxed">
              먹는 양, 대사, 순환, 스트레스에 반응하는 방식은 사람마다 다릅니다.
              도곡경희한의원은 체질을 살펴 잘 빠지는 길을 찾고, 개인에 맞는 한약으로
              무리 없는 관리를 돕습니다.
            </p>
          </div>

          <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-3">
            {custom.map((c) => (
              <span
                key={c}
                className="px-4 py-2.5 bg-white text-text-light text-sm rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 진료 프로세스 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">진료 프로세스</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              진단부터 처방까지, 개인에 맞춰
            </h2>
            <p className="text-text-light leading-relaxed">
              체질과 인바디, 진맥으로 몸 상태를 살핀 뒤{" "}
              <br className="hidden md:block" />
              개인에 맞는 탕약으로 다이어트를 돕습니다.
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* 진단 3요소 */}
            <div className="flex-1 min-w-0">
              <p className="text-center text-sm font-semibold text-accent mb-4">
                STEP 1 · 진단
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                {diagnose.map((d) => (
                  <div
                    key={d.title}
                    className="bg-brown-bg rounded-2xl p-6 text-center"
                  >
                    {d.photo ? (
                      // 사진 자리표시자 — public에 파일을 두고 next/image로 교체하세요.
                      <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center mb-4">
                        <span className="text-brown-light text-xs">
                          {d.title} 사진
                        </span>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={d.icon}
                          />
                        </svg>
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {d.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 연결 화살표 */}
            <div className="flex items-center justify-center shrink-0 lg:mt-9">
              <svg
                className="w-8 h-8 text-accent rotate-90 lg:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>

            {/* 처방 결과 */}
            <div className="lg:w-72 shrink-0">
              <p className="text-center text-sm font-semibold text-accent mb-4">
                STEP 2 · 처방
              </p>
              <div className="bg-brown-dark text-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">개인별 맞춤 탕약</h3>
                <p className="text-brown-light text-sm leading-relaxed">
                  진단 결과에 맞춰 체질과 상태에 맞는 한약을 조제합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">이렇게 돕습니다</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              잘 빠지는 몸을 만듭니다
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {approaches.map((a) => (
              <div key={a.title} className="bg-secondary rounded-xl p-7 text-center">
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
                      d={a.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {a.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-text-light leading-relaxed max-w-2xl mx-auto mt-12">
            체질과 상태에 맞춘 한약과 생활 관리로, 무리 없이 오래 유지되는 다이어트를
            함께 만들어 갑니다.
          </p>
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
