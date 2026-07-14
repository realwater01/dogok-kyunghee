import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "도곡환 다이어트 — 감량부터 유지까지 한약",
  description:
    "도곡경희한의원에서만 처방하는 다이어트 한약. 도곡환(감량)·수면비움환(보조)·도곡유지환(유지)으로 다이어트의 시작부터 유지까지 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/dogokhwan-diet" },
};

const pagePath = "/treatment/dogokhwan-diet";

const products = [
  {
    step: "01",
    label: "감량",
    title: "도곡환",
    tagline: "식욕·대사·지방까지, 다이어트 농축환",
    stages: ["1단계", "2단계", "3단계", "plus"],
    benefits: ["식욕 조절을 도움", "대사 활성을 도움", "지방 연소를 도움"],
    dose: "하루 2~3회 · 식사 30분 전",
    note: "매일 건강한 식단과 하루 세 끼 루틴을 지키며 건강한 방식으로 관리합니다. 도곡경희한의원에서만 처방받을 수 있습니다.",
  },
  {
    step: "02",
    label: "보조",
    title: "수면비움환",
    tagline: "공복을 잘 참고 잘 자면 다이어트가 쉽습니다",
    stages: [],
    benefits: ["교감신경 안정", "변비 완화를 도움", "편안한 수면"],
    dose: "하루 2~3회(낮 공복 시) · 취침 전 1숟갈",
    note: "다이어트로 예민해진 몸을 안정시키고 편안히 쉴 수 있게 해 지방 소모를 돕습니다.",
  },
  {
    step: "03",
    label: "유지",
    title: "도곡유지환",
    tagline: "성공한 다이어트를 오래 지킵니다",
    stages: [],
    benefits: ["감량 상태 유지를 도움", "건강한 식습관 유지"],
    dose: "성공 후 · 총 기간의 3배 동안 하루 1번",
    note: "감량한 상태를 오래 유지하고 건강한 식습관이 자리 잡도록 돕는 마무리 한약입니다.",
  },
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
              "도곡환·수면비움환·도곡유지환으로 다이어트의 감량부터 유지까지 돕는 도곡경희한의원의 다이어트 한약.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "도곡환 다이어트", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <p className="text-accent font-medium mb-4">다이어트</p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                도곡환 다이어트
              </h1>
              <p className="text-brown-light text-lg leading-relaxed">
                세 가지 한약으로 다이어트의
                <br className="hidden md:block" /> 감량부터 유지까지 함께합니다.
              </p>
            </div>
            <ImagePlaceholder ratio="aspect-[4/3]" tone="dark" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="text-accent font-medium mb-4">
              3가지, 그 이상의 솔루션
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">
              감량 · 보조 · 유지
            </h2>
          </div>

          <ImagePlaceholder
            ratio="aspect-[16/9]"
            tone="light"
            className="max-w-4xl mx-auto mb-16 md:mb-24"
          />

          <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
            {products.map((p, i) => (
              <div
                key={p.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* 이미지 — 짝수/홀수로 좌우 번갈아 배치 */}
                <ImagePlaceholder
                  ratio="aspect-[4/3]"
                  tone="light"
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                />

                {/* Text */}
                <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl md:text-5xl font-semibold text-brown-light/60">
                      {p.step}
                    </span>
                    <span className="text-accent text-sm font-medium tracking-wide">
                      {p.label}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
                    {p.title}
                  </h3>
                  <p className="text-text-light text-lg mb-6">{p.tagline}</p>

                  {p.stages.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.stages.map((st) => (
                        <span
                          key={st}
                          className="px-3 py-1 rounded-full border border-brown-light/40 text-primary text-sm"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2.5 mb-6">
                    {p.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-text-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-cream pt-4">
                    <p className="text-sm text-text-light">
                      <span className="font-medium text-primary">복용법</span>
                      {"  "}· {p.dose}
                    </p>
                    <p className="text-sm text-text-light leading-relaxed mt-3">
                      {p.note}
                    </p>
                  </div>
                </div>
              </div>
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
