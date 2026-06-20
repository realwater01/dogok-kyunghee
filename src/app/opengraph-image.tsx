import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { clinic } from "@/lib/site";

// 카카오톡·페이스북·X·검색 미리보기에 쓰이는 대표 이미지(1200x630).
export const alt = "도곡경희한의원 — 강남 매봉역 자율신경 한의원";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "src/app/_fonts");

export default async function OpengraphImage() {
  const [title, batang, batangBold] = await Promise.all([
    readFile(join(fontDir, "GyeonggiTitle-Bold.woff")),
    readFile(join(fontDir, "GyeonggiBatang-Regular.woff")),
    readFile(join(fontDir, "GyeonggiBatang-Bold.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #F5F0E8 0%, #E8DFD3 100%)",
          padding: "72px 88px",
          fontFamily: "Batang",
          color: "#3D3D3D",
        }}
      >
        {/* 상단: 잎사귀 마크 + 영문 라벨 */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              background: "#A08060",
              borderRadius: 18,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                background: "#F5F0E8",
                borderRadius: "50% 8% 50% 8%",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              color: "#8B7355",
              fontWeight: 700,
            }}
          >
            DOGOK KYUNGHEE
          </div>
        </div>

        {/* 중앙: 상호 + 슬로건 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Title", fontSize: 104, fontWeight: 700, lineHeight: 1.05 }}>
            {clinic.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 22 }}>
            <div style={{ width: 56, height: 5, background: "#A08060", marginRight: 22 }} />
            <div style={{ fontSize: 40, color: "#A08060", fontWeight: 700 }}>{clinic.tagline}</div>
          </div>
          <div style={{ fontSize: 33, color: "#7A7A7A", marginTop: 26 }}>
            강남 매봉역 · 자율신경 조절 한의원
          </div>
        </div>

        {/* 하단: 진료 분야 + 연락처 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 28, color: "#4A4A4A", fontWeight: 700 }}>
            수험생 집중력 · 어린이 ADHD·틱 · 불면 · 만성피로
          </div>
          <div style={{ fontSize: 30, color: "#8B7355", fontWeight: 700 }}>{clinic.telephone}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Title", data: title, weight: 700, style: "normal" },
        { name: "Batang", data: batang, weight: 400, style: "normal" },
        { name: "Batang", data: batangBold, weight: 700, style: "normal" },
      ],
    }
  );
}
