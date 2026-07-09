import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "도곡환 다이어트 — 감량부터 유지까지 한약 3단계",
  description:
    "도곡경희한의원에서만 처방하는 다이어트 한약. 도곡환(감량)·수면비움환(보조)·도곡유지환(유지) 세 가지로 다이어트의 시작부터 유지까지 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
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
    headerBg: "bg-amber-50",
    badgeBg: "bg-amber-500",
    labelText: "text-amber-700",
    chip: "bg-amber-100 text-amber-800",
    doseBg: "bg-amber-50/70",
  },
  {
    step: "02",
    label: "보조",
    title: "수면비움환",
    tagline: "편안한 밤이 다이어트를 돕습니다",
    stages: [],
    benefits: ["교감신경 안정", "변비 완화를 도움", "편안한 수면"],
    dose: "하루 2~3회(낮 공복 시) · 취침 전 1숟갈",
    note: "다이어트로 예민해진 몸을 안정시키고 편안히 쉴 수 있게 해 지방 소모를 돕습니다.",
    headerBg: "bg-sky-50",
    badgeBg: "bg-sky-500",
    labelText: "text-sky-700",
    chip: "bg-sky-100 text-sky-800",
    doseBg: "bg-sky-50/70",
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
    headerBg: "bg-emerald-50",
    badgeBg: "bg-emerald-500",
    labelText: "text-emerald-700",
    chip: "bg-emerald-100 text-emerald-800",
    doseBg: "bg-emerald-50/70",
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
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">다이어트</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              도곡환 다이어트
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              세 가지 한약으로 다이어트의
              <br className="hidden md:block" /> 감량부터 유지까지 함께합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-medium mb-4">
              3가지, 그 이상의 솔루션
            </p>
            <h2 className="text-3xl md:text-4xl font-medium">
              감량 · 보조 · 유지
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {products.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl overflow-hidden border border-brown-light/20 bg-white shadow-sm"
              >
                {/* Colored header */}
                <div className={`${p.headerBg} p-6 md:p-8`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`w-9 h-9 rounded-full ${p.badgeBg} text-white flex items-center justify-center font-bold text-sm`}
                    >
                      {p.step}
                    </span>
                    <span className={`${p.labelText} font-semibold text-sm`}>
                      {p.label}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    {p.title}
                  </h3>
                  <p className="text-text-light mt-2">{p.tagline}</p>
                  {p.stages.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.stages.map((st) => (
                        <span
                          key={st}
                          className="px-3 py-1 rounded-full bg-white text-primary text-sm font-medium border border-brown-light/30"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.benefits.map((b) => (
                      <span
                        key={b}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${p.chip}`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center gap-3 ${p.doseBg} rounded-xl px-4 py-3 mb-5`}
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${p.labelText}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-primary font-medium">
                      복용법 · {p.dose}
                    </span>
                  </div>

                  <p className="text-text-light text-sm leading-relaxed">
                    {p.note}
                  </p>
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
