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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[3/4]"
            >
              {symptom.image ? (
                <>
                  <Image
                    src={symptom.image}
                    alt={symptom.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* 하단만 배경색으로 연해지는 그라데이션 (윗부분 얼굴은 선명하게) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary from-5% via-transparent via-40% to-transparent" />
                  {/* 텍스트 (연해진 하단, 어두운 글자) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-1.5">
                      {symptom.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed">
                      {symptom.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* 배경 사진 자리 — 실제 사진을 넣을 때 image 필드를 채우세요. */}
                  <div className="absolute inset-0 bg-brown-light flex items-center justify-center">
                    <span className="text-white/70 text-sm">이미지</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5">
                      {symptom.title}
                    </h3>
                    <p className="text-white/85 text-sm leading-relaxed">
                      {symptom.description}
                    </p>
                  </div>
                </>
              )}
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
