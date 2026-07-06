import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "자율신경계 치료 — 만성두통·어지러움·피로, 공황·불안, 감염·염증",
  description:
    "자율신경계의 조절력이 떨어지면 만성두통·어지러움·피로가 나타납니다. 도곡경희한의원은 순환·수분대사·편두통 등 패턴과 체질에 따라 한약으로 자율신경 조절을 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/autonomic" },
};

const pagePath = "/treatment/autonomic";

const roles = [
  {
    title: "자율신경 조절력 회복",
    desc: "흐트러진 자율신경 균형을 되찾도록 돕습니다.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "순환·에너지 균형",
    desc: "머리와 몸으로 가는 순환과 에너지 공급을 고르게 합니다.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "패턴·체질 맞춤",
    desc: "세 가지 패턴과 개인 체질에 맞춰 처방합니다.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

const patterns = [
  {
    tag: "패턴 1",
    title: "체표·두면부 순환 저하",
    desc: "평소에 머리가 멍하고, 두통이 반복적으로 나타나며, 감기에 자주 걸리기도 합니다. 비염이나 피부염증을 동반하는 경우도 많습니다.",
  },
  {
    tag: "패턴 2",
    title: "수분대사 이상",
    desc: "몸이 잘 붓고 수분대사가 원활하지 않습니다. 이명을 동반하기도 하며, 소화가 잘 되지 않는 경우도 많습니다.",
  },
  {
    tag: "패턴 3",
    title: "혈관기능이상",
    desc: "극심한 편두통(migraine)을 비롯해 유전적이거나 생리 무렵에 나타나는 두통이 있고, 구토감을 동반하기도 합니다.",
  },
];

export default function AutonomicPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "자율신경계 치료 — 도곡경희한의원",
            description:
              "자율신경계 조절을 도와 만성두통·어지러움·피로를 패턴과 체질에 따라 접근하는 한방 치료.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "자율신경계", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">자율신경계</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              만성두통·어지러움·피로
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              오래된 두통과 어지러움, 만성피로의 배경에는
              <br className="hidden md:block" /> 자율신경계의 조절 문제가 있을 수
              있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">자율신경과 증상</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              자율신경계가 두통·어지러움·피로를 만듭니다
            </h2>
            <p className="text-text-light leading-relaxed">
              자율신경계가 흐트러지면 머리로 가는 순환과 수분대사가 무너지며
              두통·어지러움·만성피로가 나타납니다.
              <br className="hidden md:block" /> 그 양상은 크게 세 가지 패턴으로
              나뉩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent font-medium mb-4">증상 패턴</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              이런 패턴으로 나타납니다
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patterns.map((p) => (
              <div key={p.tag} className="bg-white rounded-xl p-7">
                <p className="text-sm font-bold text-accent mb-1">{p.tag}</p>
                <h3 className="text-lg font-semibold text-primary mb-4 pb-4 border-b border-cream">
                  {p.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
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
              증상 조절을 넘어, 몸의 균형까지
            </h2>
            <p className="text-text-light leading-relaxed">
              증상만 가라앉히면 원인이 남아 반복되기 쉽습니다.
              <br className="hidden md:block" /> 한약은 이렇게 작용합니다.
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
            일시적인 증상 조절을 넘어, 두통·어지러움이 덜 반복되는 몸 상태를
            함께 만들어 가는 데 중점을 둡니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            오래된 두통·어지러움, 편하게 상담하세요
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
