import HeroSection from "@/components/HeroSection";
import StudentSection from "@/components/StudentSection";
import IntroSection from "@/components/IntroSection";
import DoctorSection from "@/components/DoctorSection";
import TreatmentSection from "@/components/TreatmentSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/structured-data";

const faqs = [
  {
    question: "도곡경희한의원은 어디에 있나요?",
    answer:
      "서울특별시 강남구 논현로28길 24, 세양빌딩 1층에 있습니다. 지하철 3호선 매봉역 4번 출구에서 도보 7분 거리이며 건물 내 주차가 가능합니다.",
  },
  {
    question: "진료 시간과 예약 방법은 어떻게 되나요?",
    answer:
      "평일 09:00–16:30, 토요일 09:00–13:00에 점심시간 없이 진료하며 일요일과 공휴일은 휴진합니다. 1인 예약제로 운영하므로 02-6949-1888로 전화 예약 후 방문하시면 됩니다.",
  },
  {
    question: "어떤 질환을 치료하나요?",
    answer:
      "자율신경 조절 치료를 중심으로 수험생 집중력 저하, 어린이 ADHD·틱·불안, 불면증, 만성피로, 만성두통과 어지러움, 면역력 저하와 비염 등을 한약·침·약침으로 치료합니다.",
  },
  {
    question: "한약은 어떻게 조제하나요?",
    answer:
      "경희대학교 법인 경희한약의 식약처 인증 약재를 사용하며, 원내 탕전실에서 환자별로 소량씩 직접 탕전합니다.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <HeroSection />
      <StudentSection />
      <IntroSection />
      <DoctorSection />
      <TreatmentSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
