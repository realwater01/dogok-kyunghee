// 사진을 넣기 전까지 자리를 잡아 두는 이미지 플레이스홀더.
// 실제 사진이 준비되면 이 컴포넌트를 next/image <Image>로 교체하면 된다.
//   ratio  : 비율 (기본 4:3). 예) "aspect-[16/9]", "aspect-square"
//   tone   : 배경 톤 — light(흰 섹션용), cream, plain(흰색), dark(어두운 섹션용)
//   label  : 가운데 표시할 안내 텍스트 (기본 "이미지")

type Tone = "light" | "cream" | "plain" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-secondary text-brown-light",
  cream: "bg-cream text-brown-light",
  plain: "bg-white text-brown-light",
  dark: "bg-white/5 border border-white/10 text-brown-light/70",
};

export default function ImagePlaceholder({
  ratio = "aspect-[4/3]",
  tone = "light",
  label = "이미지",
  className = "",
}: {
  ratio?: string;
  tone?: Tone;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`${ratio} ${toneClass[tone]} rounded-2xl flex items-center justify-center overflow-hidden ${className}`}
    >
      <span className="text-sm">{label}</span>
    </div>
  );
}
