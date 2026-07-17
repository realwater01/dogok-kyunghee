import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    title: "수험생 집중력 치료",
    description:
      "수험생 치료 임상경험을 바탕으로 좋은 컨디션으로 공부에 집중할 수 있도록 개인에 맞춘 한약 치료를 제공합니다.",
    href: "/treatment/student-autonomic",
    image: "", // 예: "/treatment-student.png"
  },
  {
    title: "자율신경실조\n- 반복감염, TIC, ADHD, 우울, 공황장애",
    description:
      "자율신경계 문제는 각종 신경정신문제, 면역력약화를 일으킵니다.\n원인에 접근하여 건강 회복을 돕습니다.",
    href: "/treatment/children-adhd-tic",
    image: "",
  },
  {
    title: "비염",
    description:
      "어린이 비염, 잦은감기부터 성인 체질별 비염까지\n도곡경희한의원만의 비염패턴치료 - 비염ABC 로 정확하게 치료합니다.",
    href: "/treatment/rhinitis",
    image: "",
  },
  {
    title: "도곡경희보약",
    description:
      "상비약부터 개인 맞춤 한약까지\n“달이다 쌍화, 강활 쌍금탕, 총명 쌍화탕, 사향 공진단”을 처방받아보세요.",
    href: "/coming-soon",
    image: "",
  },
];

export default function TreatmentSection() {
  return (
    <section id="treatment" className="section bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">TREATMENT</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            진료 안내
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((treatment, index) => (
            <Link
              key={index}
              href={treatment.href}
              className="group bg-secondary rounded-2xl overflow-hidden hover:bg-cream transition-all duration-300 border border-transparent hover:border-brown-light flex items-stretch min-h-[200px]"
            >
              {/* 사진 (좌) — 실제 사진을 넣을 때 image 필드를 채우세요. */}
              <div className="relative w-2/5 flex-shrink-0">
                {treatment.image ? (
                  <Image
                    src={treatment.image}
                    alt={treatment.title.replace(/\n.*/, "")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 260px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-brown-light flex items-center justify-center">
                    <span className="text-white/70 text-sm">이미지</span>
                  </div>
                )}
              </div>

              {/* 설명 (우) */}
              <div className="flex-1 min-w-0 p-6 md:p-7 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors whitespace-pre-line">
                  {treatment.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-3 whitespace-pre-line">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center text-sm text-accent font-medium">
                  자세히 보기
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
