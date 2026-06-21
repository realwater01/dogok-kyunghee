import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "자율신경계 치료 — 만성두통·어지러움·피로, 공황·불안, 감염·염증",
  description:
    "과도한 스트레스와 불규칙한 생활은 자율신경계의 균형을 무너뜨려 만성두통·어지러움·피로, 공황장애·불안·실신, 잦은 감염·염증을 일으킵니다. 도곡경희한의원은 자연치료로 자율신경을 안정시켜 근본적인 회복을 돕습니다. 강남 매봉역, 전화 02-6949-1888.",
  alternates: { canonical: "/treatment/autonomic" },
};

const pagePath = "/treatment/autonomic";

export default function AutonomicPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema({
            path: pagePath,
            name: "자율신경계 치료 — 도곡경희한의원",
            description:
              "자율신경계 균형 회복을 통해 만성두통·어지러움·피로, 공황장애·불안·실신, 감염·염증을 근본적으로 치료하는 한방 치료.",
          }),
          breadcrumbSchema([
            { name: "홈", path: "/" },
            { name: "자율신경계", path: pagePath },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              자율신경계
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              만성두통·어지러움·피로, 공황장애·불안·실신, 감염·염증까지<br />
              자율신경계의 균형을 회복하여 근본부터 치료합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-text-light leading-relaxed">
              현대인들은 과도한 스트레스와 불규칙한 생활로 인해<br />
              자율신경계의 균형이 깨지기 쉽습니다.<br /><br />
              이로 인해<br />
              면역이상, 각종 감염 및 염증,<br />
              집중력 저하, 만성피로 등을 겪게됩니다.<br /><br />
              저희 한의원은 자연치료를 통해<br />
              자율신경을 안정시키고<br />
              몸의 균형을 찾아 건강한 일상을 되찾을수 있도록 도와드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-10 bg-secondary rounded-xl text-center card-hover">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">정확한 진단</h3>
              <p className="text-text-light text-sm leading-relaxed">
                체계적인 문진과 설문지, 검사 등을 통해<br />
                환자분의 상태를 정확히 파악하고<br />
                치료의 기준점과 목표를 정합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-10 bg-secondary rounded-xl text-center card-hover">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">맞춤 치료</h3>
              <p className="text-text-light text-sm leading-relaxed">
                개인별 체질과 증상에 따른<br />
                적절하고 효과적이며,<br />
                안전한 치료를 제공합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-10 bg-secondary rounded-xl text-center card-hover">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">지속 관리</h3>
              <p className="text-text-light text-sm leading-relaxed">
                치료 후에도 건강한 생활을 유지할 수 있도록<br />
                지속적인 건강관리를 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
