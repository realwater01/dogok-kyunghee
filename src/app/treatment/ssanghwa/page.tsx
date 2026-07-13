import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "달이다, 쌍화 — 동의보감 원방에 과학적 탕전을 더한 쌍화탕",
  description:
    "도곡경희한의원의 쌍화탕 ‘달이다, 쌍화’. 동의보감 원방의 취지를 살리되 체질에 맞게 약재를 조절하고, 1시간 냉침·2시간 무압탕전으로 맑고 소화가 편한 탕약을 준비합니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/ssanghwa" },
};

const pagePath = "/treatment/ssanghwa";

const whenUse = [
  {
    t: "환절기·감기 기운",
    d: "일교차가 큰 계절, 으슬으슬한 감기 기운이 돌 때 몸을 돕습니다.",
    icon: "M12 3v2m0 14v2m9-9h-2M5 12H3m14.95-6.95l-1.41 1.41M7.46 16.54l-1.41 1.41m12.31 0l-1.41-1.41M7.46 7.46L6.05 6.05M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    t: "기력 저하·피로",
    d: "과로와 수면 부족으로 기운이 떨어지고 쉬 피로할 때 쓰입니다.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    t: "몸살·오한",
    d: "몸이 쑤시고 오슬오슬 추운 몸살 기운이 있을 때 도움을 줍니다.",
    icon: "M12 4c-1.5 0-3 1-3 3v5c0 2 1.5 4 3 6 1.5-2 3-4 3-6V7c0-2-1.5-3-3-3z",
  },
  {
    t: "병치레 후 회복",
    d: "앓고 난 뒤 기혈을 보하고 컨디션 회복을 돕는 데 씁니다.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const brewing = [
  {
    n: "01",
    t: "1시간 냉침",
    d: "찬물에 약재를 한 시간 담가 유효성분이 충분히 우러나도록 준비합니다.",
  },
  {
    n: "02",
    t: "2시간 무압탕전",
    d: "압력을 가하지 않고 은근하게 달여, 맑고 소화가 편한 탕약으로 만듭니다.",
  },
  {
    n: "03",
    t: "유효성분만",
    d: "불순물과 불필요한 섬유질은 걸러 내고, 필요한 성분만 담아 냅니다.",
  },
];

// 3가지 쌍화탕 라인업.
const products = [
  {
    name: "쌍화탕",
    brand: "달이다, 쌍화",
    price: "30팩 · 89,000원",
    concept: "체질을 크게 타지 않아 두루 쓰는 기본 쌍화탕",
    points: [
      { t: "피로 회복", d: "지친 몸의 피로를 다독이는 데 중점을 둡니다." },
      { t: "긴장 완화", d: "과한 육체적·정신적 긴장을 푸는 데 도움을 줍니다." },
      { t: "상시 복용", d: "체질 부담이 적어 오래 두고 드시기 좋습니다." },
    ],
  },
  {
    name: "강활쌍금탕",
    brand: "",
    price: "30팩 · 115,000원",
    concept: "호흡기가 약하고 감기가 잦은 분을 위한 보약",
    points: [
      {
        t: "호흡기 보약",
        d: "호흡기가 약한 분이 일 년 내내 상시 복용할 수 있는 피로 회복 겸 호흡기 보약입니다.",
      },
      {
        t: "체력·면역력",
        d: "목이 자주 쉬고 감기에 자주 걸리는 분의 체력·면역력을 돕는 한약입니다.",
      },
      {
        t: "상시 보약",
        d: "감기와 장염이 자주 걸리는 분이 곁에 두고 드시는 상시 보약입니다.",
      },
    ],
  },
  {
    name: "총명쌍화탕",
    brand: "총명탕 합 쌍화탕",
    price: "30팩 · 105,000원",
    concept: "총명탕에 쌍화탕을 더한 수험생 처방",
    points: [
      { t: "체력 보충", d: "공부로 지친 체력 소모를 보충하는 데 도움을 줍니다." },
      { t: "긴장 완화", d: "과한 신체적·정신적 긴장을 푸는 데 도움을 줍니다." },
      {
        t: "집중력 향상",
        d: "머리를 맑게 하고 집중력을 돕는 총명탕을 더했습니다.",
      },
    ],
  },
];

const forWhom = [
  "환절기 감기 기운",
  "잦은 피로·무기력",
  "몸살·오한",
  "병후 회복",
  "과로·수면 부족",
  "손발이 찬 냉증",
];

export default function SsanghwaPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "달이다, 쌍화 — 도곡경희한의원",
            description:
              "동의보감 원방의 취지를 살리고 체질에 맞게 약재를 조절한 도곡경희한의원의 쌍화탕. 1시간 냉침·2시간 무압탕전으로 맑고 소화가 편한 탕약을 준비합니다.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "달이다, 쌍화", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-[0.2em] mb-5">
                SSANGHWA
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                달이다, 쌍화
              </h1>
              <p className="text-brown-light text-lg leading-relaxed">
                동의보감 원방에 과학적 탕전을 더했습니다.
                <br className="hidden md:block" /> 진하게가 아니라, 맑고 편하게
                달이는 쌍화탕입니다.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-brown-light/70 text-sm">이미지</span>
            </div>
          </div>
        </div>
      </section>

      {/* 언제 쓰이나 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">쌍화탕, 언제 쓰이나</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              지친 몸을 다독일 때
            </h2>
            <p className="text-text-light leading-relaxed">
              쌍화탕은 기와 혈을 함께 아우르는 처방입니다.
              <br className="hidden md:block" /> 기력이 떨어지거나 감기 기운이
              돌 때, 몸을 다독이는 데 씁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whenUse.map((w) => (
              <div key={w.t} className="bg-secondary rounded-2xl p-7 text-center">
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
                      d={w.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {w.t}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 철학 Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Image placeholder (left) */}
            <div className="aspect-[4/3] rounded-2xl bg-white flex items-center justify-center">
              <span className="text-brown-light text-sm">이미지</span>
            </div>

            <div>
              <p className="text-accent font-medium mb-4">
                도곡경희한의원의 쌍화탕
              </p>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                진하다고 좋은 것이 아닙니다
              </h2>
              <div className="space-y-5 text-text-light leading-relaxed">
                <p>
                  쌍화탕은 진해야 좋다는 생각에, 첨가물이나 흑설탕을 넣거나
                  갈근·숙지황처럼 진하게 우러나는 약재를 많이 더하기도 합니다.
                  하지만 그렇게 진하게 달이면 소화에 부담이 되고, 오래 끓여
                  불필요한 섬유질까지 우러난 탕약이 꼭 좋은 것은 아닙니다.
                </p>
                <p>
                  도곡경희한의원 쌍화탕은 맑고 소화가 편하도록 달입니다. 체질이
                  예민한 아이부터 소화기가 약한 어르신까지, 부담 없이 드실 수
                  있도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 탕전 방식 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">과학적 탕전 방식</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              맑게, 소화가 편하게 달입니다
            </h2>
            <p className="text-text-light leading-relaxed">
              동의보감에 근거한 처방을, 과학적인 탕전 방식으로 달입니다.
              <br className="hidden md:block" /> 냉침과 무압탕전을 거쳐 맑고
              소화가 편한 탕약으로 준비합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-stretch gap-4">
            {brewing.map((step, i) => (
              <div key={step.n} className="flex-1 flex flex-col md:flex-row md:items-stretch gap-4">
                <div className="flex-1 bg-secondary rounded-2xl p-7 text-center flex flex-col">
                  <span className="text-2xl font-semibold text-accent mb-3">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step.t}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>

                {/* 연결 화살표 (마지막 단계 뒤에는 생략) */}
                {i < brewing.length - 1 && (
                  <div className="flex items-center justify-center shrink-0">
                    <svg
                      className="w-7 h-7 text-accent rotate-90 md:rotate-0"
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 라인업 Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">세 가지 쌍화탕</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              목적에 맞춘 세 가지
            </h2>
            <p className="text-text-light leading-relaxed">
              쓰임에 따라 세 가지 쌍화탕을 준비했습니다.
              <br className="hidden md:block" /> 체질과 상황에 맞춰 안내해
              드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <span className="text-brown-light text-sm">이미지</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {p.name}
                  </h3>
                  {p.brand && (
                    <p className="text-accent font-medium text-sm mb-2">
                      {p.brand}
                    </p>
                  )}
                  <span className="self-start px-3 py-1 rounded-full bg-cream text-text-light text-xs mb-4">
                    {p.price}
                  </span>
                  <p className="text-text-light text-sm leading-relaxed mb-5">
                    {p.concept}
                  </p>

                  <ul className="space-y-3 border-t border-cream pt-5 mt-auto">
                    {p.points.map((pt) => (
                      <li key={pt.t} className="flex gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="min-w-0">
                          <span className="font-medium text-primary text-sm">
                            {pt.t}
                          </span>
                          <span className="text-text-light text-sm">
                            {" "}
                            — {pt.d}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이런 분께 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">이런 분께</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              쌍화탕이 도움이 됩니다
            </h2>
          </div>

          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
            {forWhom.map((f) => (
              <span
                key={f}
                className="px-4 py-2.5 bg-secondary text-text-light text-sm rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            나에게 맞는 쌍화탕, 편하게 상담하세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            체질과 상황에 맞는 쌍화탕을 친절하게 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${clinic.telephone}`}
              className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-white text-primary px-8 py-4 rounded font-medium hover:bg-cream transition-colors"
            >
              전화 상담하기
            </a>
            <Link
              href={kakaoChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-transparent border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-primary transition-colors"
            >
              카카오톡 상담
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
