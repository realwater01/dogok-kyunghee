import { ImageResponse } from "next/og";

// 파비콘 / 앱 아이콘. 한방(약초)을 상징하는 잎사귀 마크를 브랜드 브라운 위에 올린다.
// 순수 도형으로 그려 작은 크기에서도 또렷하고 폰트 의존이 없다.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#A08060",
          borderRadius: 14,
        }}
      >
        {/* 잎사귀: 마주보는 두 꼭짓점은 뾰족, 나머지는 둥글게 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 36,
            height: 36,
            background: "#F5F0E8",
            borderRadius: "50% 8% 50% 8%",
            transform: "rotate(45deg)",
          }}
        >
          {/* 잎맥 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 5,
              width: 2.5,
              height: 26,
              marginLeft: -1.25,
              background: "#A08060",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
