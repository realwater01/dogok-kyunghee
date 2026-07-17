import Link from "next/link";
import Image from "next/image";

// 홈 히어로 바로 아래에 오는 수험생 한약 스포트라이트 섹션.
// 증상별 카드로 "공부 컨디션은 의지가 아니라 몸 문제"라는 메시지를 전한다.
const symptoms = [
  {
    title: "집중이 안 돼요",
    description: "오래 앉아 있어도 머리가 멍하고 능률이 오르지 않습니다.",
    image: "/study-focus.png",
  },
  {
    title: "쉽게 지쳐요",
    description: "오후만 되면 방전되고 체력이 버텨주지 못합니다.",
    image: "/study-tired.png",
  },
  {
    title: "긴장되고 잠을 설쳐요",
    description: "시험 불안, 가슴 두근거림, 얕은 수면이 반복됩니다.",
  },
];

export default function StudentSection() {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">수험생</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            공부할 몸을 돕는 한약
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            집중이 안 되고 쉽게 지치는 건
            {" "}<br className="hidden md:block" />
            의지가 아니라 몸의 문제입니다.
            {" "}<br className="hidden md:block" />
            자율신경 균형을 잡아
            {" "}<br className="hidden md:block" />
            공부할 수 있는 몸의 회복을 돕습니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-5">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden flex items-stretch min-h-[160px] md:min-h-[184px]"
            >
              {/* 텍스트 (좌 · 왼쪽 정렬 · 강조) */}
              <div className="flex-1 min-w-0 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                  {symptom.title}
                </h3>
                <p className="text-text-light text-sm md:text-base leading-relaxed">
                  {symptom.description}
                </p>
              </div>

              {/* 사진 (우 · 절반) */}
              <div className="relative w-2/5 md:w-1/2 flex-shrink-0">
                {symptom.image ? (
                  <>
                    <Image
                      src={symptom.image}
                      alt={symptom.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 40vw, 384px"
                    />
                    {/* 텍스트와 맞닿는 왼쪽 가장자리를 살짝 배경색으로 블렌드 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent via-25% to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-brown-light flex items-center justify-center">
                    <span className="text-white/70 text-sm">이미지</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/treatment/student-focus" className="btn-primary inline-block">
            수험생 프로그램 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
