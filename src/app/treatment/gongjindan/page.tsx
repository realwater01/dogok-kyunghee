import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";
import { clinic, kakaoChatUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "사향공진단 — 원장이 직접 원내 조제하는 공진단",
  description:
    "도곡경희한의원은 원장이 원내에서 직접 조제한 사향공진단을 처방합니다. 식약처 인증 정품 사향과 러시아 아바이스크 녹용분골로 원방공진단·사향공진단·두배공진단 세 가지를 준비했습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/gongjindan" },
};

const pagePath = "/treatment/gongjindan";

const process = [
  { n: "01", t: "약재 선별", d: "엄선한 약재를 하나하나 살펴 골라냅니다." },
  { n: "02", t: "미세 분말", d: "고른 약재를 곱게 갈아 미세한 분말로 만듭니다." },
  {
    n: "03",
    t: "사향 손질",
    d: "식약처 인증 사향의 잔여물을 제거한 뒤 곱게 갈아냅니다.",
  },
  { n: "04", t: "배합·제환", d: "약재를 정량대로 배합해 하나하나 환으로 빚습니다." },
  { n: "05", t: "금박·포장", d: "완성한 환에 금박을 입혀 정성껏 포장합니다." },
  { n: "06", t: "원내 처방", d: "원내에서 갓 조제해 신선한 상태로 처방합니다." },
];

const herbs = [
  {
    name: "사향 (麝香)",
    origin: "식약처 인증 정품",
    d: "공진단의 핵심 약재입니다. 막힌 기운을 열고 정신을 맑게 하는 데 쓰이며, 정품 사향을 정량으로 씁니다.",
  },
  {
    name: "녹용분골",
    origin: "러시아 아바이스크",
    d: "녹용 중에서도 상단부의 분골을 사용합니다. 기혈을 보하고 체력 회복을 돕습니다.",
  },
  {
    name: "산수유 (山茱萸)",
    origin: "",
    d: "간과 신을 보하는 약재로, 흩어지기 쉬운 기운을 안으로 잘 갈무리하도록 돕습니다.",
  },
  {
    name: "당귀 (當歸)",
    origin: "",
    d: "혈을 보하고 순환을 도와 몸의 균형을 잡는 데 쓰입니다.",
  },
];

const products = [
  {
    name: "원방공진단",
    musk: "사향 100mg",
    concept: "동의보감 원방에 충실한 기본 공진단",
    tagline: "사향 본연의 작용을 충실히 담았습니다.",
    ingredients: ["사향 100mg", "러시아 아바이스크 녹용분골", "산수유", "당귀"],
    points: [
      {
        t: "뇌 인지 기능",
        d: "수험생의 집중력, 어르신의 인지 기능에 도움을 줍니다.",
      },
      {
        t: "면역력·체력 회복",
        d: "병을 앓은 뒤의 회복을 돕고 체력을 끌어올리는 데 중점을 둡니다.",
      },
      {
        t: "기혈 순환",
        d: "손발 저림, 몸이 붓고 머리가 무거운 증상 완화를 돕습니다.",
      },
    ],
  },
  {
    name: "사향공진단",
    musk: "사향 50mg",
    concept: "실속 있게 오래 복용하는 공진단",
    tagline: "함량은 낮춰 부담을 줄이고, 신선한 사향으로 작용은 살렸습니다.",
    ingredients: ["사향 50mg", "러시아산 아바이스크 녹용분골", "산수유", "당귀"],
    points: [
      {
        t: "예민한 체질",
        d: "약 반응이 빠른, 예민한 분께 부담 없이 맞습니다.",
      },
      {
        t: "어린이·청소년",
        d: "성장기의 체력과 집중력을 돕습니다.",
      },
      {
        t: "장기 복용",
        d: "오래 체력 보조가 필요한 경우에 적합합니다.",
      },
    ],
  },
  {
    name: "두배공진단",
    musk: "사향 200mg",
    concept: "회복에 집중한 프리미엄 공진단",
    tagline: "사향을 동의보감의 두 배로, 녹용분골도 두 배로 담았습니다.",
    ingredients: ["사향 200mg", "녹용분골 2배", "산수유", "당귀"],
    points: [
      {
        t: "빠른 체력 회복",
        d: "많이 지친 몸의 회복을 빠르게 돕는 데 중점을 둡니다.",
      },
      {
        t: "면역력 보강",
        d: "체력이 크게 떨어졌을 때 컨디션 회복을 돕습니다.",
      },
    ],
  },
];

const forWhom = [
  "잦은 피로·무기력",
  "수험생 집중력",
  "어르신 인지 기능",
  "병후 회복",
  "손발 저림·부종",
  "면역력 저하",
  "장기 체력 보조",
];

export default function GongjindanPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "사향공진단 — 도곡경희한의원",
            description:
              "원장이 원내에서 직접 조제하는 사향공진단. 식약처 인증 정품 사향과 러시아 아바이스크 녹용분골로 원방·사향·두배 세 가지 공진단을 준비합니다.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "사향공진단", path: pagePath },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-[0.2em] mb-5">
                GONGJINDAN
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                사향공진단
              </h1>
              <p className="text-brown-light text-lg leading-relaxed">
                공진단의 핵심은 사향입니다.
                <br className="hidden md:block" /> 도곡경희한의원은 원장이 원내에서
                직접 조제해, 갓 만든 공진단을 처방합니다.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-brown-light/70 text-sm">이미지</span>
            </div>
          </div>
        </div>
      </section>

      {/* 사향 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Image placeholder (left) */}
            <div className="aspect-[4/3] rounded-2xl bg-secondary flex items-center justify-center">
              <span className="text-brown-light text-sm">이미지</span>
            </div>

            <div>
              <p className="text-accent font-medium mb-4">공진단의 핵심, 사향</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                사향이 공진단을 결정합니다
              </h2>
              <div className="space-y-5 text-text-light leading-relaxed">
                <p>
                  사향(麝香)은 예로부터 막힌 기운을 열고 정신을 맑게 하는 데 써 온
                  귀한 약재입니다. 공진단의 효과는 어떤 사향을 얼마나 쓰느냐에
                  크게 좌우됩니다.
                </p>
                <p>
                  도곡경희한의원은 식약처 인증을 받은 정품 사향을 정량으로
                  사용합니다. 함량을 눈속임 없이 정직하게 담아, 사향 본연의 작용을
                  살리는 데 중점을 둡니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 조제 과정 Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">원내 직접 조제</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              원장이 직접, 전 과정을 원내에서
            </h2>
            <p className="text-text-light leading-relaxed">
              20년 이상 임상 경험의 원장이 약재 선별부터 제환·포장까지 직접
              조제합니다.
              <br className="hidden md:block" /> 원내에서 갓 만들어 빠르게
              처방하므로, 사향 본연의 작용을 살릴 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl overflow-hidden">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <span className="text-brown-light text-sm">이미지</span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-semibold text-accent">
                      {step.n}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">
                      {step.t}
                    </h3>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 약재 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">약재 이야기</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              무엇으로 빚는가
            </h2>
            <p className="text-text-light leading-relaxed">
              공진단은 네 가지 약재로 이루어집니다.
              <br className="hidden md:block" /> 원산지와 등급까지 살펴 고른
              약재를 씁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {herbs.map((h) => (
              <div
                key={h.name}
                className="bg-secondary rounded-2xl overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Image placeholder */}
                <div className="sm:w-40 aspect-[4/3] sm:aspect-auto bg-cream flex items-center justify-center flex-shrink-0">
                  <span className="text-brown-light text-sm">이미지</span>
                </div>
                <div className="p-6 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap mb-2">
                    <h3 className="text-lg font-semibold text-primary">
                      {h.name}
                    </h3>
                    {h.origin && (
                      <span className="text-xs text-accent font-medium">
                        {h.origin}
                      </span>
                    )}
                  </div>
                  <p className="text-text-light text-sm leading-relaxed">
                    {h.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 라인업 Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-accent font-medium mb-4">세 가지 사향공진단</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              나에게 맞는 공진단
            </h2>
            <p className="text-text-light leading-relaxed">
              사향 함량과 목적에 따라 세 가지로 준비했습니다.
              <br className="hidden md:block" /> 체질과 상황에 맞춰 안내해
              드립니다.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image placeholder (left) */}
                <div className="aspect-[4/3] rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-brown-light text-sm">이미지</span>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                      {p.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium whitespace-nowrap">
                      {p.musk}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-2">{p.concept}</p>
                  <p className="text-text-light leading-relaxed mb-5">
                    {p.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-3 py-1.5 rounded-full bg-cream text-text-light text-sm"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 border-t border-cream pt-5">
                    {p.points.map((pt) => (
                      <li key={pt.t} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="min-w-0">
                          <span className="font-medium text-primary">
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

          {/* Comparison table */}
          <div className="max-w-4xl mx-auto mt-12 overflow-x-auto">
            <table className="w-full min-w-[520px] bg-white rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left font-medium px-5 py-4">구분</th>
                  <th className="font-medium px-5 py-4">원방공진단</th>
                  <th className="font-medium px-5 py-4">사향공진단</th>
                  <th className="font-medium px-5 py-4">두배공진단</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="border-b border-cream">
                  <td className="px-5 py-4 font-medium text-primary">사향</td>
                  <td className="text-center px-5 py-4">100mg</td>
                  <td className="text-center px-5 py-4">50mg</td>
                  <td className="text-center px-5 py-4">200mg</td>
                </tr>
                <tr className="border-b border-cream">
                  <td className="px-5 py-4 font-medium text-primary">녹용분골</td>
                  <td className="text-center px-5 py-4">기본</td>
                  <td className="text-center px-5 py-4">기본</td>
                  <td className="text-center px-5 py-4">2배</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-primary">추천</td>
                  <td className="text-center px-5 py-4">기본에 충실하게</td>
                  <td className="text-center px-5 py-4">오래 실속 있게</td>
                  <td className="text-center px-5 py-4">회복에 집중</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 이런 분께 Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-accent font-medium mb-4">이런 분께</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              공진단이 도움이 됩니다
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
            나에게 맞는 공진단, 편하게 상담하세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            체질과 상황에 맞는 공진단을 친절하게 안내해 드립니다.
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
