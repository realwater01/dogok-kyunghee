import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "비염 — 비염ABC 패턴 한방 치료",
  description:
    "어린이 비염·잦은 감기부터 성인 체질별 비염까지. 도곡경희한의원은 자주 나타나는 비염을 세 가지 패턴(비염ABC)으로 나눠 개인에 맞춰 한약으로 접근합니다. 원내 소량 탕전, 비대면 전화상담·택배. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/rhinitis" },
};

const pagePath = "/treatment/rhinitis";

const patterns = [
  {
    tag: "비염A",
    title: "알레르기성 비염 패턴",
    desc: "봄·가을에 심해지는 알레르기성 비염 패턴입니다. 맑은 콧물과 재채기가 잦다면 이 패턴에 가깝습니다.",
    symptoms: [
      "맑은 콧물",
      "재채기",
      "후비루",
      "코막힘",
      "눈·코 간지러움",
      "잦은 축농증",
    ],
  },
  {
    tag: "비염B",
    title: "코막힘·염증형 패턴",
    desc: "코점막이 잘 붓고 코막힘이 두드러지는 패턴입니다. 기관지염·편도염이 자주 반복된다면 이 패턴에 가깝습니다.",
    symptoms: [
      "뚜렷한 구강호흡",
      "코점막이 붓는 패턴",
      "콧물",
      "반복되는 기관지염·편도염",
      "피부 두드러기",
      "천식 경향",
    ],
  },
  {
    tag: "비염C",
    title: "건조성 비염 패턴",
    desc: "코 점막이 건조해지는 패턴입니다. 코피·코딱지가 잦고 밭은 기침이 이어진다면 이 패턴에 가깝습니다.",
    symptoms: [
      "잦은 코피",
      "목 뒤에 걸린 소량의 후비루",
      "밭은 기침",
      "코딱지",
      "만성 축농증",
    ],
  },
];

export default function RhinitisPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "비염 — 도곡경희한의원",
            description:
              "자주 나타나는 비염을 세 가지 패턴(비염ABC)으로 나눠 개인에 맞춰 한약으로 접근하는 도곡경희한의원의 비염 치료.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "비염", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">비염ABC</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              비염
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              어린이 비염·잦은 감기부터 성인 체질별 비염까지,
              <br className="hidden md:block" /> 자주 나타나는 패턴에 맞춰
              한약으로 접근합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">비염 치료</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-8">
              비염 ABC
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                도곡경희한의원이 오랜 비염 진료 끝에 정리한 비염ABC는 비염을 세
                가지 패턴으로 나눠 접근합니다. 짧은 기간 먼저 치료를 시도해 볼 수
                있고, 아이에게 맞는 패턴을 찾으면 이후에도 그 패턴에 맞춰 꾸준히
                관리하기 쉽습니다.
              </p>
              <p>
                증상 완화에 더해 재발을 줄이고 면역력 회복을 돕는 데 중점을 둔
                한약 치료입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 비염ABC Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent font-medium mb-4">비염ABC</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              세 가지 패턴으로 나눈 맞춤 처방
            </h2>
            <p className="text-text-light leading-relaxed">
              오랜 임상경험을 바탕으로 어린이에게 잘 나타나는 비염 패턴을 나눠
              처방하는, 도곡경희한의원 비염 치료의 노하우가 담긴 처방입니다.
              20~30분 상담으로 증상을 살펴 처방을 정하고, 단순한 증상 관리를 넘어
              앞으로 비염을 어떻게 관리하고 치료해 갈지 함께 상의합니다.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
            {patterns.map((p) => (
              <div
                key={p.tag}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image placeholder (left) */}
                <div className="aspect-[4/3] rounded-2xl bg-white flex items-center justify-center">
                  <span className="text-brown-light text-sm">이미지</span>
                </div>

                {/* Text (right) */}
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-accent">
                    {p.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mt-2 mb-4">
                    {p.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.symptoms.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 bg-white text-text-light text-sm rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">진료 안내</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              이렇게 진료합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                원내 직접 탕전
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                경희한약 약재를 원내 탕전실에서 소량씩 직접 달여 드립니다.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                비대면 상담·택배
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                멀리 계셔도 전화로 증상을 살핀 뒤 한약을 택배로 받아보실 수
                있습니다.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                카카오톡 상담
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                궁금한 점은 카카오톡 채널로 편하게 물어보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            우리 아이 비염, 편하게 상담하세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            증상과 상황에 맞는 처방을 친절하게 안내해 드립니다.
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
