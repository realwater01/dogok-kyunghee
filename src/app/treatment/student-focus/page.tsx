import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "수험생 집중력 향상 프로그램",
  description:
    "장시간 학습에 지친 수험생을 위한 집중력·체력 동시 회복 프로그램. 도곡경희한의원은 자율신경 균형을 되찾아 집중력 저하의 근본 원인을 한약·침으로 치료합니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/student-focus" },
};

const pagePath = "/treatment/student-focus";
const faqs = [
  {
    question: "수험생 집중력 저하의 원인은 무엇인가요?",
    answer:
      "장시간 학습으로 인한 자율신경 균형 붕괴, 체력 저하, 수면 부족이 주요 원인입니다. 도곡경희한의원은 단순 각성이 아니라 자율신경 조절을 통해 집중력과 체력을 함께 회복시킵니다.",
  },
  {
    question: "치료 기간은 얼마나 걸리나요?",
    answer:
      "학생의 상태와 학습 강도에 따라 다릅니다. 1인 예약제로 충분히 상담한 뒤 개인별 맞춤 한약과 침 치료 계획을 안내합니다. 자세한 상담은 02-6949-1888로 문의하세요.",
  },
];

export default function StudentFocusPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "수험생 집중력 향상 프로그램 — 도곡경희한의원",
            description:
              "자율신경 균형 회복으로 수험생의 집중력과 체력을 동시에 끌어올리는 한방 치료 프로그램.",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "수험생 집중력 향상 프로그램", path: pagePath },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">STUDENT FOCUS</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              수험생 집중력 향상 프로그램
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              장시간 학습에 지친 수험생들을 위한<br />
              집중력과 체력을 동시에 회복하는 특화 프로그램
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">수험생의 고민</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                이런 증상으로 힘든가요?
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  장시간 책상 앞에 앉아있지만
                  <br />
                  집중이 되지 않고, 머리가 멍하며
                  <br />
                  시험 기간에는 집중해야할 에너지를
                  <br />
                  불안 초조 긴장에 쓰고 있지는 않나요
                </p>
                <br />
                <p>
                  아침에 일어나기 힘들고
                  <br />
                  만성 비염과 두통
                  <br />
                  복통과 변비, 설사와 소화불량
                  <br />
                  잦은 감기와 생리통
                  <br />
                  초조와 불안, 또는 지나치게 쳐지고 몸이 답답한 느낌
                  <br />
                  만성 피로가 모두 brain fog 로 이어집니다.
                </p>
                <br />
                <p>
                  수험생들의 집중력 저하는
                  <br />
                  단순히 의지가 약해서가 아니라
                  <br />
                  한약으로 개선될 수 있는 몸의 병적인 증상입니다.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-cream to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p className="text-sm opacity-60">집중력 이미지</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div>
              <p className="text-accent font-medium mb-4">맞춤 솔루션</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                집중력 저하의 기전을 찾아서 치료합니다
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  수험생마다 집중력 저하의
                  <br />
                  주요원인이 되는 기전을 바로잡아
                  <br />
                  brain fog를 제거하고
                  <br />
                  맑은 정신으로 집중할수 있도록 도와줍니다.
                </p>
                <br />
                <div className="space-y-5">
                  <div className="bg-cream/50 rounded-xl p-5 border border-brown-light/30 flex gap-5 items-stretch">
                    <div className="w-48 flex-shrink-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center">
                      <p className="text-xs text-brown-dark opacity-40">이미지</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent mb-3">1. Gut Thinks</p>
                      <p className="text-base">
                        불규칙한 식사, 적은 신체활동으로
                        <br />
                        장내세균이 단순화되고 과증식되면서
                        <br />
                        독소가 체내로 흡수되고
                        <br />
                        이를 막기 위해 생긴 면역반응은
                        <br />
                        뇌의 활동을 방해하여 brain fog 를 일으킵니다
                        <br />
                        장내 세균이 건강하게 회복되면서
                        <br />
                        머리가 맑아지고 컨디션이 좋아집니다
                      </p>
                    </div>
                  </div>
                  <div className="bg-cream/50 rounded-xl p-5 border border-brown-light/30 flex gap-5 items-stretch">
                    <div className="w-48 flex-shrink-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center">
                      <p className="text-xs text-brown-dark opacity-40">이미지</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent mb-3">2. 머리, 목, 어깨, 체표 순환 개선</p>
                      <p className="text-base">
                        수험생들 중 일부는
                        <br />
                        유독 얼굴이 붉고 목어깨 긴장도가 높으며
                        <br />
                        순환이 떨어집니다
                        <br />
                        만성비염이나 여드름
                        <br />
                        고질적인 두통을 호소하기도 합니다
                        <br />
                        순환을 시켜주고 열을 내려주면
                        <br />
                        머리가 맑아지고 몸이 가벼워집니다
                      </p>
                    </div>
                  </div>
                  <div className="bg-cream/50 rounded-xl p-5 border border-brown-light/30 flex gap-5 items-stretch">
                    <div className="w-48 flex-shrink-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center">
                      <p className="text-xs text-brown-dark opacity-40">이미지</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent mb-3">3. 흉부 과긴장 완화</p>
                      <p className="text-base">
                        흉부가 과긴장되고 뻣뻣해지면
                        <br />
                        건강하게 쓰일 신체 에너지가
                        <br />
                        분노, 불안초조, 우울감 등의
                        <br />
                        정신 에너지로 소모됩니다
                        <br />
                        한약을 통해 흉부의 답답함이 해소되면
                        <br />
                        불안초조가 잦아들고
                        <br />
                        지나친 분노와 짜증이 줄며
                        <br />
                        에너지가 한곳으로 집중됩니다
                      </p>
                    </div>
                  </div>
                  <div className="bg-cream/50 rounded-xl p-5 border border-brown-light/30 flex gap-5 items-stretch">
                    <div className="w-48 flex-shrink-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center">
                      <p className="text-xs text-brown-dark opacity-40">이미지</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent mb-3">4. 기력 보충</p>
                      <p className="text-base">
                        수험생활을 하면서
                        <br />
                        에너지 자체가 소진된 경우도 많습니다
                        <br />
                        체질에 맞는 보약처방과 녹용, 공진단으로
                        <br />
                        체력을 보충해주면
                        <br />
                        기력이 올라가면서
                        <br />
                        지치고 무기력해진 몸에 생기가 돕니다
                      </p>
                    </div>
                  </div>
                </div>
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
              수험생 특화 프로그램으로 학습 능률과 건강을 동시에 개선합니다.
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
                장시간 학습에도 집중력이 흐트러지지 않고,
                학습 내용이 더 잘 기억됩니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">스트레스 해소</h3>
              <p className="text-text-light text-sm leading-relaxed">
                시험에 대한 불안과 긴장이 완화되어
                안정적인 마음 상태를 유지할 수 있습니다.
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
                밤에 깊은 잠을 자고 아침에 개운하게 일어나
                하루를 활기차게 시작할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">기억력 증진</h3>
              <p className="text-text-light text-sm leading-relaxed">
                뇌의 혈액순환이 개선되어 학습한 내용이
                더 오래 기억되고 쉽게 떠올릴 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">체력 증진</h3>
              <p className="text-text-light text-sm leading-relaxed">
                쉽게 지치지 않고 하루 종일 안정적인
                컨디션을 유지할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">소화 기능 개선</h3>
              <p className="text-text-light text-sm leading-relaxed">
                스트레스성 소화불량과 복통이 해소되어
                편안한 상태로 학습에 집중할 수 있습니다.
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
              수험생 개개인의 상태에 맞춘 체계적인 관리로
              최상의 컨디션을 유지하도록 돕습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-medium mb-4">정밀 진단</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                현재의 집중력 상태, 수면 패턴, 스트레스 지수 등을
                종합적으로 분석하여 개인별 맞춤 치료 계획을 수립합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>자율신경 균형 검사</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>스트레스 지수 측정</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>체질 및 건강 상태 파악</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-medium mb-4">집중 치료</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                침 치료와 맞춤 한약으로 뇌의 혈액순환을 개선하고
                자율신경계의 균형을 회복시킵니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>두뇌 혈액순환 개선 침 치료</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>집중력 향상 맞춤 한약</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>체력 보충 보약, 공진단</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-medium mb-4">생활 관리</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                치료 효과를 극대화하고 장기간 유지하기 위한
                생활습관 개선 지도를 제공합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>개인별 영양제 세팅</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>식사, 수면 패턴 개선 가이드</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>스트레스 관리 방법</span>
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
                치료 기간은 얼마나 걸리나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                초등학생은 건강한 성장을 우선시하여 체질상 치우치는 부분을
                완화시켜 건강한 몸을 만드는 것을 목표로 치료기간을 정합니다.
                <br /><br />
                중·고등학생은 개인별 건강이 무너지는 시기에 맞춰 치료하며,
                건강이 나빠지는 시기에 건강한 몸과 맑은 집중력으로
                자꾸 회복할 수 있도록 합니다.
                <br /><br />
                수능을 앞둔 수험생은 최대한 체력을 보충해주고
                머리가 맑아질 수 있도록 몸의 패턴에 맞춰
                집중력 체력을 지속적으로 돕는 방향으로 치료합니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                한약을 먹으면 졸리지 않나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                수험생을 위한 맞춤 한약은 오히려 집중력을 높이고 각성도를 유지하도록
                처방됩니다. 밤에는 깊은 수면을 돕고, 낮에는 맑은 정신을 유지할 수 있도록
                시간대별로 다른 효과를 내는 한약을 조합합니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                시험 직전에 받으면 효과가 있나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                시험 2-3개월 전부터 시작하는 것이 가장 좋지만,
                시험이 임박한 경우에도 긴급 컨디션 조절 프로그램을 통해
                시험 당일 최상의 상태를 만들 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            최상의 컨디션으로<br />목표를 이루세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            수험생 집중력 프로그램에 대해 더 궁금하신 점이 있으시면
            언제든지 문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coming-soon" className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-white text-brown-dark px-8 py-4 rounded font-medium hover:bg-cream transition-colors">
              온라인 상담 예약
            </Link>
            <Link href="tel:02-6949-1888" className="inline-block text-center whitespace-nowrap min-w-[12rem] bg-transparent border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-brown-dark transition-colors">
              전화 상담하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
