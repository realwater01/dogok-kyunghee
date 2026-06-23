import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "수험생 치료 프로그램 — 집중력과 자율신경 균형 회복",
  description:
    "같은 집중력 저하라도 원인은 학생마다 다릅니다. 도곡경희한의원은 수험생의 자율신경 균형을 회복시켜 집중력과 체력을 함께 끌어올리는 맞춤 한방 치료를 진행합니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/student-autonomic" },
};

const pagePath = "/treatment/student-autonomic";
const faqs = [
  {
    question: "집중력 저하의 원인이 학생마다 다른가요?",
    answer:
      "네. 같은 집중력 저하라도 체력 저하, 불안, 수면 문제, 자율신경 불균형 등 원인이 다릅니다. 도곡경희한의원은 원인을 진단해 학생별 맞춤 한약·침 치료를 설계합니다.",
  },
  {
    question: "수험생 치료는 학업에 지장을 주지 않나요?",
    answer:
      "1인 예약제로 진료해 대기 시간을 줄였고, 한약 복용과 주기적인 침 치료 위주라 학업 일정에 맞춰 진행할 수 있습니다.",
  },
];

export default function StudentAutonomicPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "수험생 치료 프로그램 — 도곡경희한의원",
            description:
              "자율신경 균형 회복을 통해 수험생의 집중력과 체력을 끌어올리는 원인별 맞춤 한방 치료.",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "수험생 치료 프로그램", path: pagePath },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              수험생 치료 프로그램
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              지친 수험생들을 위한<br />
              집중력과 자율신경균형 회복 치료
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">집중력 저하는 같은데 원인이 달라요</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                개인별 집중력 향상 치료 한약
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  공부할 양은 많고 시험 스트레스로 집중해야할 시간에
                  <br />
                  아프거나, 불안초조함으로 집중력이 온전하지 못한 경험을
                  많이 합니다.
                </p>
                <p>
                  수험생들의 집중력저하는 단순히 마음가짐의 문제가 아니라
                  <br />
                  몸의 이상상태입니다.
                </p>
                <p>
                  개인별 체질을 고려한 치료한약으로
                  <br />
                  비건강할때 나타나는 체질별 몸의 반응을 치료함으로써
                  <br />
                  건강은 회복되고 집중력이 향상됩니다.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-cream to-brown-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm opacity-60">자율신경 이미지</p>
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
              <p className="text-accent font-medium mb-4">체력 집중력향상</p>
              <h2 className="text-3xl md:text-4xl font-medium mb-8">
                수험생 사향공진단
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  도곡경희한의원의 수험생 자율신경실조 치료 프로그램은
                  교감신경과 부교감신경의 균형을 회복시켜
                  신체 증상의 개선을 돕습니다.
                </p>
                <p>
                  침 치료와 맞춤 한약으로 소화기능을 정상화하고,
                  두통과 긴장성 통증을 완화하며,
                  우울감과 불안감을 해소합니다.
                </p>
                <p>
                  단순히 증상을 억제하는 것이 아니라,
                  몸의 자연 치유력을 회복시켜 건강한 상태로
                  학업에 집중할 수 있도록 돕습니다.
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
              자율신경 균형 회복으로 신체와 정신 건강을 동시에 개선합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">소화불량 개선</h3>
              <p className="text-text-light text-sm leading-relaxed">
                스트레스성 소화불량, 복통, 메스꺼움이 사라지고
                편안하게 식사할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">두통 완화</h3>
              <p className="text-text-light text-sm leading-relaxed">
                긴장성 두통과 편두통이 줄어들고,
                맑은 정신으로 학습에 집중할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">우울감 해소</h3>
              <p className="text-text-light text-sm leading-relaxed">
                무기력하고 우울한 감정이 개선되어
                의욕적으로 하루를 시작할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">긴장 완화</h3>
              <p className="text-text-light text-sm leading-relaxed">
                시험에 대한 과도한 긴장과 불안이 해소되어
                안정된 마음으로 시험을 준비할 수 있습니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">활력 회복</h3>
              <p className="text-text-light text-sm leading-relaxed">
                아침에 일어나기 힘들고 하루 종일 피곤했던 증상이 개선되어
                활기찬 생활이 가능합니다.
              </p>
            </div>

            <div className="p-8 bg-cream rounded-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">신체 증상 개선</h3>
              <p className="text-text-light text-sm leading-relaxed">
                가슴 두근거림, 손발 저림, 어지러움 등
                다양한 자율신경 증상이 완화됩니다.
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
              수험생 개개인의 증상에 맞춘 체계적인 관리로
              자율신경 균형을 회복합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-medium mb-4">정밀 진단</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                현재의 자율신경 상태, 주요 증상, 스트레스 원인 등을
                종합적으로 분석하여 개인별 맞춤 치료 계획을 수립합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>자율신경 균형 검사</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>소화기능 및 신체 증상 평가</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>스트레스 및 정서 상태 파악</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-medium mb-4">집중 치료</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                침 치료와 맞춤 한약으로 자율신경계의 균형을 회복하고
                신체 증상의 개선을 돕습니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>자율신경 조절 침 치료</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>소화기능 개선 맞춤 한약</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>두통·긴장 완화 치료</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <div className="text-accent text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-medium mb-4">생활 관리</h3>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                치료에 도움이 되고 재발을 줄이는 데 도움이 되도록
                생활습관 개선 지도를 제공합니다.
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>식습관 및 소화 관리</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>수면 및 휴식 가이드</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bullet-brown"></span>
                  <span>스트레스 해소 방법</span>
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
                자율신경실조증은 어떤 질환인가요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                자율신경실조증은 교감신경과 부교감신경의 균형이 깨져서 나타나는 다양한 신체 증상입니다.
                스트레스가 주요 원인이며, 소화불량, 두통, 어지러움, 가슴 두근거림, 우울감 등
                여러 증상이 동시에 나타날 수 있습니다. 특히 수험생의 경우 장시간의 학업 스트레스가
                자율신경계에 부담을 주어 발생하기 쉽습니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                치료 기간은 얼마나 걸리나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                증상의 정도에 따라 개인차가 있지만, 일반적으로 2-3개월의 치료 기간을 권장합니다.
                초기 2-3주 내에 소화불량과 두통 등의 주요 증상이 호전되기 시작하며,
                4-8주 정도면 자율신경 균형이 회복되어 전반적인 컨디션이 개선됩니다.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                약을 먹지 않고도 치료할 수 있나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                한약과 침 치료를 병행하는 것이 도움이 되지만,
                침 치료만으로도 증상 개선이 가능합니다. 환자분의 상태와 선호도에 따라
                치료 방법을 조절할 수 있으니 상담 시 편하게 말씀해 주세요.
              </p>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span className="text-accent">Q.</span>
                재발하지 않나요?
              </h3>
              <p className="text-text-light leading-relaxed pl-6">
                치료를 통해 자율신경 균형을 회복한 후, 생활습관 개선과 스트레스 관리를 병행하면
                재발을 방지할 수 있습니다. 시험 기간이나 스트레스가 많은 시기에는
                정기적인 관리 치료를 받는 것을 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            건강한 몸과 마음으로<br />목표를 향해 나아가세요
          </h2>
          <p className="text-brown-light mb-8 max-w-xl mx-auto">
            수험생 자율신경실조 치료에 대해 더 궁금하신 점이 있으시면
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
