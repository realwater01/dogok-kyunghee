import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "어린이 성장 — 잘 자랄 몸을 돕는 한방 관리",
  description:
    "키가 클 수 있는 시기는 정해져 있습니다. 도곡경희한의원은 수면·소화·면역·자율신경 컨디션을 함께 살펴 아이가 잘 자랄 수 있는 몸을 한약으로 돕습니다. 원내 소량 탕전, 1인 예약제. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/children-growth" },
};

const pagePath = "/treatment/children-growth";

const causes = [
  {
    title: "수면",
    desc: "성장호르몬은 깊은 잠에서 활발히 분비됩니다. 잠들기 어렵거나 자주 깨면 성장 컨디션이 떨어질 수 있습니다.",
  },
  {
    title: "소화·영양",
    desc: "입이 짧거나 소화가 약해 잘 먹지 못하면, 자라는 데 필요한 영양이 충분히 공급되기 어렵습니다.",
  },
  {
    title: "면역·자율신경",
    desc: "잦은 감염·비염이나 과도한 긴장·스트레스는 자율신경의 균형을 흔들어 성장에 쓰일 에너지를 분산시킵니다.",
  },
];

const targets = [
  "또래보다 키가 작거나 성장 속도가 느린 아이",
  "입이 짧고 소화가 약한 아이",
  "잦은 감염·비염으로 자주 아픈 아이",
  "잠을 깊이 자지 못하는 아이",
  "성장통을 자주 호소하는 아이",
];

export default function ChildrenGrowthPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "어린이 성장 — 도곡경희한의원",
            description:
              "수면·소화·면역·자율신경 컨디션을 함께 살펴 아이가 잘 자랄 수 있는 몸을 한약으로 돕는 도곡경희한의원의 어린이 성장 관리.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "어린이 성장", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">어린이 성장</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              어린이 성장
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              키가 클 수 있는 시기는 정해져 있습니다.
              <br className="hidden md:block" /> 아이가 잘 자랄 수 있는 몸의
              컨디션을 한약으로 돕습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">성장의 골든타임</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              성장에는 때가 있습니다
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                성장판이 닫히면 키는 다시 자라기 어렵습니다. 성장판은 보통
                남아는 중학생 무렵, 여아는 초경 전후로 빠르게 닫히기 시작하며,
                시기에는 개인차가 있습니다.
              </p>
              <p>
                그래서 성장판이 열려 있는 시기에 주기적으로 성장 상태를
                점검하고, 필요한 때에 관리를 시작하는 것이 중요합니다.
              </p>
              <p>
                성장통이라고 여긴 통증이 사실은 아이의 성장 컨디션이 떨어졌다는
                신호일 때도 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent font-medium mb-4">성장이 더딘 이유</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              잘 자라려면 몸의 컨디션이 받쳐줘야 합니다
            </h2>
            <p className="text-text-light leading-relaxed">
              키는 잘 자고, 잘 먹고 소화하고, 몸이 편안할 때 잘 자랍니다. 아래
              세 가지 컨디션이 무너지면 성장이 더뎌질 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {causes.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-7">
                <h3 className="text-xl font-semibold text-accent mb-3">
                  {c.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">성장 한방 관리</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              한약으로 잘 자랄 몸을 돕습니다
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                도곡경희한의원은 수면, 소화, 면역, 자율신경 컨디션을 함께 살펴
                아이의 체질에 맞춘 한약으로 성장에 도움이 되는 몸 상태를
                만들어 갑니다.
              </p>
              <p>
                1인 예약제로 아이의 상태를 충분히 상담하고, 경희한약의 약재를
                원내 탕전실에서 소량씩 직접 달여 처방합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">이런 아이라면</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              성장 상태를 한번 점검해 보세요
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
            우리 아이 성장, 지금 상담해 보세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            아이의 상태와 시기에 맞는 관리를 친절하게 안내해 드립니다.
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
