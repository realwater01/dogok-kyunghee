import Link from "next/link";
import Image from "next/image";
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
              비염, 패턴을 나눠 접근합니다
            </h2>
            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                알레르기성 비염은 보통 봄·가을에 심해집니다. 코맹맹이 소리가
                나거나 훌쩍이기 시작하는 초기에 치료를 시작하면 회복에 도움이
                됩니다.
              </p>
              <p>
                비염이 오래되면 코 점막의 저항력이 떨어져 가을·겨울에 감기,
                기관지염, 축농증으로 이어지기도 합니다.
              </p>
              <p>
                한약은 증상 완화에 더해 비염이 반복되는 원인 개선에 중점을
                둡니다.
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
              오랜 임상경험을 바탕으로 자주 나타나는 비염을 크게 세 가지
              패턴(A·B·C)으로 나눠 준비한 처방입니다. 전화 상담(20~30분)으로
              증상을 살펴 맞는 처방을 정하며, 패턴에 맞지 않는 경우 개인 맞춤
              처방으로 안내합니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/biyeom-abc.jpg"
              alt="도곡경희한의원 비염ABC 한약과 엄선한 약재"
              width={675}
              height={545}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patterns.map((p) => (
              <div key={p.tag} className="bg-white rounded-xl p-8">
                <p className="text-2xl font-bold text-accent mb-1">{p.tag}</p>
                <h3 className="text-lg font-semibold text-primary mb-5">
                  {p.title}
                </h3>
                <ul className="space-y-2.5">
                  {p.symptoms.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-text-light text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span className="min-w-0">{s}</span>
                    </li>
                  ))}
                </ul>
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
                경희한약의 약재를 원내 탕전실에서 소량씩 직접 달입니다.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                비대면 상담·택배
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                전화 상담으로 증상을 살핀 뒤 한약을 택배로 받아보실 수 있습니다.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">
                카카오톡 상담
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                궁금한 점은 카카오톡 채널로 편하게 문의해 주세요.
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
