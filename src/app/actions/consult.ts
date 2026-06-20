"use server";

import { sendConsultAlimtalk } from "@/lib/solapi";

export type ConsultInput = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ConsultState = { status: "success" } | { status: "error"; message: string };

// 상담 폼 제출 처리. 입력을 검증하고 한의원으로 알림톡을 발송한다.
export async function submitConsult(input: ConsultInput): Promise<ConsultState> {
  const name = input.name?.trim();
  const phone = input.phone?.trim();
  const message = input.message?.trim();
  const email = input.email?.trim() ?? "";

  if (!name || !phone || !message) {
    return { status: "error", message: "이름, 연락처, 상담 내용을 모두 입력해 주세요." };
  }

  // 템플릿 변수 키는 승인한 알림톡 템플릿의 변수명과 정확히 일치해야 한다.
  const result = await sendConsultAlimtalk({
    "#{이름}": name,
    "#{연락처}": phone,
    "#{이메일}": email || "-",
    "#{내용}": message,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "접수 중 문제가 발생했습니다. 전화(02-6949-1888)로 문의해 주세요.",
    };
  }

  return { status: "success" };
}
