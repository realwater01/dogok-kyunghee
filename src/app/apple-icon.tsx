import { ImageResponse } from "next/og";

// iOS 홈 화면 / 공유용 터치 아이콘. 파비콘과 동일한 잎사귀 마크를 180px로.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 104,
            height: 104,
            background: "#F5F0E8",
            borderRadius: "50% 8% 50% 8%",
            transform: "rotate(45deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 14,
              width: 6,
              height: 76,
              marginLeft: -3,
              background: "#A08060",
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
