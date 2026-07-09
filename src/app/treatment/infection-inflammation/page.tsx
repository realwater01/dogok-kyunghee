import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "감염·염증 — 자율신경실조와 면역력 한방 치료",
  description:
    "잦은 감염과 잘 낫지 않는 염증의 배경에는 자율신경계의 조절 이상이 있을 수 있습니다. 도곡경희한의원은 한약으로 자율신경 조절력을 높여 건강한 면역을 되찾고 반복되는 감염·염증에서 벗어나도록 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/infection-inflammation" },
};

const pagePath = "/treatment/infection-inflammation";

const symptoms = [
  "감기를 계속 달고 삶",
  "감염이 너무 쉽게 옮음",
  "염증이 잘 낫지 않고 지속",
  "잦은 비염·편도염",
  "잘 낫지 않는 방광염·장염",
  "만성 피로 동반",
];

const roles = [
  {
    title: "자율신경 조절력 강화",
    desc: "흐트러진 자율신경을 안정시켜 조절력을 높입니다.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "건강한 면역 형성",
    desc: "지속되는 감염에 맞설 면역이 자리 잡도록 돕습니다.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "좋은 컨디션 유지",
    desc: "반복되는 감염·염증에서 벗어나 컨디션을 지키도록 돕습니다.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

export default function InfectionInflammationPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "감염·염증 — 도곡경희한의원",
            description:
              "자율신경실조로 인한 면역력 저하와 잦은 감염·지속되는 염증을 한약으로 자율신경 조절과 면역 회복을 돕는 한방 치료.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "감염·염증", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">자율신경계</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              감염·염증
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              잦은 감염과 잘 낫지 않는 염증의 배경에는
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
            <p className="text-accent font-medium mb-4">왜 반복되나요</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              자율신경실조가{" "}<br className="md:hidden" />면역을 무너뜨립니다
            </h2>
            <p className="text-text-light leading-relaxed">
              자율신경계는 뇌 깊은 곳의 시상하부가 조절합니다. 시상하부는 호르몬
              분비와 기본적인 생명 유지 활동까지 관장하는데, 이 조절이 흐트러지면
              면역력이 떨어져 감염과 염증이 반복되고, 오래되면 면역질환으로
              이어지기도 합니다.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm md:text-base font-medium">
            <span className="px-5 py-2.5 bg-secondary rounded-full text-primary">
              자율신경 조절 이상
            </span>
            <span className="text-accent font-bold rotate-90 md:rotate-0">→</span>
            <span className="px-5 py-2.5 bg-secondary rounded-full text-primary">
              면역력 저하
            </span>
            <span className="text-accent font-bold rotate-90 md:rotate-0">→</span>
            <span className="px-5 py-2.5 bg-accent text-white rounded-full">
              잦은 감염·지속되는 염증
            </span>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">이런 경우라면</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              자율신경계를 확인해 보세요
            </h2>
            <p className="text-text-light leading-relaxed">
              감기를 계속 달고 살거나, 감염이 너무 쉽게 옮거나,
              <br className="hidden md:block" /> 염증이 잘 낫지 않고 지속된다면
              자율신경계 문제일 수 있습니다.
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
              자율신경을 바로잡아{" "}<br className="md:hidden" />면역을 되찾습니다
            </h2>
            <p className="text-text-light leading-relaxed">
              증상만 누르기보다, 자율신경 조절력을 높여
              <br className="hidden md:block" /> 반복되는 감염과 염증에서
              벗어나도록 돕습니다.
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
            개인의 체질에 맞춰 한약을 처방하며, 잦은 감염과 염증이 덜 반복되는
            몸을 함께 만들어 가는 데 중점을 둡니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            반복되는 감염·염증, 편하게 상담하세요
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
