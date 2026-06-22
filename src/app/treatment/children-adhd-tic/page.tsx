import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "어린이 ADHD·틱·불안 치료",
  description:
    "집중하지 못하고 산만한 아이, 틱과 불안을 보이는 아이를 위한 근본 원인 치료 프로그램. 도곡경희한의원은 자율신경 균형을 회복시켜 어린이 ADHD·틱·불안을 한약·침으로 치료합니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/children-adhd-tic" },
};

const pagePath = "/treatment/children-adhd-tic";
const faqs = [
  {
    question: "어린이 ADHD·틱을 한방으로 치료할 수 있나요?",
    answer:
      "도곡경희한의원은 ADHD·틱·불안의 근본 원인인 자율신경 불균형을 진단해 어린이 맞춤 한약과 침으로 치료합니다. 증상 억제가 아니라 원인 회복에 중점을 둡니다.",
  },
  {
    question: "몇 살부터 치료가 가능한가요?",
    answer:
      "아이의 연령과 증상에 따라 치료 방법을 조절합니다. 1인 예약제로 충분히 상담한 뒤 연령에 맞는 한약·침 치료 계획을 안내합니다. 02-6949-1888로 문의하세요.",
  },
];

export default function ChildrenAdhdTicPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "어린이 ADHD·틱·불안 치료 — 도곡경희한의원",
            description:
              "자율신경 균형 회복을 통한 어린이 ADHD·틱·불안의 근본 원인 한방 치료 프로그램.",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "어린이 ADHD·틱·불안 치료", path: pagePath },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">CHILDREN ADHD & TIC</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              어린이 ADHD, TIC, 불안 치료
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              집중하지 못하고 산만한 우리 아이를 위한<br />
              근본적인 원인 치료 프로그램
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">부모님의 걱정</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                우리 아이, 이런 증상이 있나요?
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-title first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  수업 시간에 집중하지 못하고 계속 움직이며,
                  한 곳에 가만히 앉아 있기 힘들어하고,
                  갑작스러운 눈 깜빡임이나 어깨 으쓱임 같은 틱 증상이 나타납니다.
                </p>
                <p>
                  충동적으로 행동하고, 작은 일에도 쉽게 짜증을 내며,
                  친구들과의 관계에서 어려움을 겪고,
                  밤에 잠들기 힘들어하거나 자다가 자주 깹니다.
                </p>
                <p>
                  이러한 증상들은 단순히 버릇이나 성격 문제가 아니라,
                  뇌의 신경전달물질 불균형과 자율신경계 조절 장애로 인한
                  의학적 증상입니다.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-cream to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm opacity-60">어린이 이미지</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] bg-gradient-to-br from-white to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="text-sm opacity-60">치료 이미지</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium mb-4">맞춤 솔루션</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                한의학으로<br />근본 원인을 치료합니다
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  도곡경희한의원의 어린이 ADHD·틱 치료는
                  뇌의 신경전달물질 균형을 회복시키고
                  자율신경계를 안정화하여 근본적인 개선을 도모합니다.
                </p>
                <p>
                  침 치료와 아이 체질에 맞춘 한약으로
                  과잉 행동과 충동성을 조절하고,
                  틱 증상을 완화하며, 정서적 안정을 되찾습니다.
                </p>
                <p>
                  약물 부작용 걱정 없이 안전하게 치료하며,
                  아이의 성장 발달을 함께 고려한
                  통합적인 접근을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">치료 효과</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              이런 변화를 경험하실 수 있습니다
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              우리 아이가 건강하고 행복하게 성장할 수 있도록 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">집중력 향상</h3>
              <p className="text-text-light text-sm leading-relaxed">
                수업 시간에 집중할 수 있게 되고,
                학습 능력이 자연스럽게 향상됩니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">틱 증상 완화</h3>
              <p className="text-text-light text-sm leading-relaxed">
                눈 깜빡임, 어깨 으쓱임 등의 틱 증상이
                점차 줄어들고 사라집니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">정서 안정</h3>
              <p className="text-text-light text-sm leading-relaxed">
                쉽게 짜증내거나 화내는 일이 줄어들고,
                감정 조절 능력이 좋아집니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">사회성 개선</h3>
              <p className="text-text-light text-sm leading-relaxed">
                또래 친구들과 원만한 관계를 맺고,
                학교생활에 잘 적응할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">수면 개선</h3>
              <p className="text-text-light text-sm leading-relaxed">
                밤에 편안하게 잠들고 깊은 수면을 취해
                성장과 발달에 도움이 됩니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">불안 감소</h3>
              <p className="text-text-light text-sm leading-relaxed">
                과도한 불안과 두려움이 줄어들어
                자신감 있게 생활할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Method Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">치료 방법</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              3단계 맞춤 케어 시스템
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              아이의 체질과 증상에 맞춘 개별화된 치료로
              안전하고 효과적인 개선을 이룹니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-medium mb-4">정밀 진단</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                아이의 행동 패턴, 증상 정도, 체질 특성 등을
                종합적으로 분석하여 개인별 맞춤 치료 계획을 수립합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>ADHD·틱 증상 평가</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>체질 진단 및 건강 상태 파악</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>생활 습관 및 환경 요인 분석</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-medium mb-4">집중 치료</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                소아침 치료와 체질 맞춤 한약으로 뇌 기능을 안정시키고
                자율신경계 균형을 회복합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>소아 전문 침 치료 (통증 최소화)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>체질별 맞춤 한약 처방</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>신경 안정 및 집중력 향상 치료</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-medium mb-4">생활 관리</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                가정에서 실천할 수 있는 생활 관리법을 안내하여
                치료 효과를 극대화합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>식습관 및 영양 관리</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>수면 패턴 개선 가이드</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>부모 교육 및 양육 상담</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">자주 묻는 질문</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              궁금하신 점을 해결해 드립니다
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                몇 살부터 치료받을 수 있나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                일반적으로 만 4-5세부터 치료가 가능합니다.
                어린 나이일수록 뇌의 가소성이 좋아 치료 효과가 더 빠르게 나타날 수 있습니다.
                아이의 상태와 협조 가능 여부에 따라 개별적으로 판단하므로,
                우선 상담을 통해 확인하시는 것을 권장합니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                치료 기간은 얼마나 걸리나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                증상의 정도와 아이의 상태에 따라 다르지만, 일반적으로 3-6개월의 치료 기간을 권장합니다.
                초기 4-8주 정도면 행동 개선이 눈에 띄게 나타나기 시작하며,
                3개월 이상 꾸준히 치료하면 안정적인 효과를 기대할 수 있습니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                침 치료가 아프지 않나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                소아 전용 침을 사용하며, 일반 침보다 훨씬 얇고 짧아 통증이 거의 없습니다.
                많은 아이들이 처음에는 무서워하지만, 실제로 시술받으면 생각보다 아프지 않다고 합니다.
                아이가 편안하게 받을 수 있도록 충분히 설명하고 배려하며 진행합니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                약물 치료와 병행할 수 있나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                네, 가능합니다. 현재 약물 치료를 받고 계신 경우,
                한의학 치료를 병행하면 약물의 부작용을 줄이고 효과를 높일 수 있습니다.
                한방 치료가 안정되면 담당 소아정신과 의사와 상의하여
                약물을 점차 줄여나갈 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            건강하게 성장하는<br />우리 아이의 미래를 위해
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            어린이 ADHD·틱 치료에 대해 더 궁금하신 점이 있으시면
            언제든지 문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coming-soon" className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-white text-brown-dark px-8 py-4 rounded font-medium hover:bg-cream transition-colors">
              온라인 상담 예약
            </Link>
            <a href="tel:02-6949-1888" className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-transparent border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-brown-dark transition-colors">
              전화 상담하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
