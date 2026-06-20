import { createHmac, randomBytes } from "node:crypto";

// 솔라피(Solapi) 알림톡 발송. 별도 SDK 없이 REST + HMAC-SHA256 인증으로 호출한다.
// 필요한 환경변수(.env.local / 배포 환경에 설정):
//   SOLAPI_API_KEY      발급받은 API Key
//   SOLAPI_API_SECRET   발급받은 API Secret
//   SOLAPI_PF_ID        카카오 발신프로필 키(채널 연동 후 발급)
//   SOLAPI_TEMPLATE_ID  승인된 알림톡 템플릿 ID
//   SOLAPI_FROM         솔라피에 사전 등록한 발신번호
//   CLINIC_NOTIFY_TO    상담 알림을 받을 한의원 휴대폰 번호

const SEND_URL = "https://api.solapi.com/messages/v4/send";

type AlimtalkVariables = Record<string, string>;

function getConfig() {
  const {
    SOLAPI_API_KEY,
    SOLAPI_API_SECRET,
    SOLAPI_PF_ID,
    SOLAPI_TEMPLATE_ID,
    SOLAPI_FROM,
    CLINIC_NOTIFY_TO,
  } = process.env;

  if (
    !SOLAPI_API_KEY ||
    !SOLAPI_API_SECRET ||
    !SOLAPI_PF_ID ||
    !SOLAPI_TEMPLATE_ID ||
    !SOLAPI_FROM ||
    !CLINIC_NOTIFY_TO
  ) {
    return null;
  }

  return {
    apiKey: SOLAPI_API_KEY,
    apiSecret: SOLAPI_API_SECRET,
    pfId: SOLAPI_PF_ID,
    templateId: SOLAPI_TEMPLATE_ID,
    from: SOLAPI_FROM,
    to: CLINIC_NOTIFY_TO,
  };
}

function authHeader(apiKey: string, apiSecret: string) {
  const date = new Date().toISOString();
  const salt = randomBytes(32).toString("hex");
  const signature = createHmac("sha256", apiSecret)
    .update(date + salt)
    .digest("hex");
  return `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`;
}

export type SendResult = { ok: true } | { ok: false; reason: "unconfigured" | "failed" };

// 한의원으로 상담 신청 알림톡을 보낸다. 템플릿 변수 키(#{이름} 등)는 승인한 템플릿과 일치해야 한다.
export async function sendConsultAlimtalk(
  variables: AlimtalkVariables
): Promise<SendResult> {
  const config = getConfig();
  if (!config) {
    console.warn("[solapi] 환경변수가 설정되지 않아 알림톡을 보내지 않았습니다.");
    return { ok: false, reason: "unconfigured" };
  }

  try {
    const res = await fetch(SEND_URL, {
      method: "POST",
      headers: {
        Authorization: authHeader(config.apiKey, config.apiSecret),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          to: config.to,
          from: config.from,
          kakaoOptions: {
            pfId: config.pfId,
            templateId: config.templateId,
            variables,
            // 알림톡 실패 시 같은 내용을 문자로 대체 발송
            disableSms: false,
          },
        },
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[solapi] 발송 실패", res.status, detail);
      return { ok: false, reason: "failed" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[solapi] 발송 중 오류", err);
    return { ok: false, reason: "failed" };
  }
}
