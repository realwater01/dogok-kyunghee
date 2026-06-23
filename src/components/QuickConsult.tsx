import { clinic, kakaoChatUrl, naverBookingUrl } from "@/lib/site";

// 모든 페이지 우측에 고정으로 떠 있는 빠른 상담 버튼(전화 / 카카오톡 / 네이버 예약).
// 정사각형 버튼을 세로로 쌓는다. 우측 하단 GoToTop·모바일 하단 메뉴와 겹치지 않도록
// 화면 우측 중앙에 배치한다.
export default function QuickConsult() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      <a
        href={`tel:${clinic.telephone}`}
        className="w-14 h-14 rounded-xl shadow-lg bg-accent text-white flex flex-col items-center justify-center gap-0.5 hover:bg-accent-hover transition-colors"
        aria-label="전화 상담"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-[10px] font-medium leading-none">전화연결</span>
      </a>

      <a
        href={kakaoChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-xl shadow-lg bg-[#FEE500] text-[#3A1D1D] flex flex-col items-center justify-center gap-0.5 hover:brightness-95 transition-all"
        aria-label="카카오톡 상담"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C6.486 3 2 6.477 2 10.77c0 2.74 1.83 5.146 4.59 6.52-.2.72-.726 2.62-.83 3.026-.13.5.184.494.387.36.16-.106 2.53-1.72 3.555-2.42.74.108 1.51.165 2.298.165 5.514 0 10-3.477 10-7.77S17.514 3 12 3z" />
        </svg>
        <span className="text-[10px] font-medium leading-none">카톡상담</span>
      </a>

      <a
        href={naverBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-xl shadow-lg bg-[#03C75A] text-white flex flex-col items-center justify-center gap-0.5 hover:brightness-95 transition-all"
        aria-label="네이버 예약"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16.273 12.845 7.376 0H0v24h7.726V11.155L16.624 24H24V0h-7.727z" />
        </svg>
        <span className="text-[10px] font-medium leading-none mt-1">예약하기</span>
      </a>
    </div>
  );
}
