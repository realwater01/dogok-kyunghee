<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 의료광고 심의 준수 (필수)

이 사이트는 한의원 홈페이지로, 모든 산문(카피·설명·FAQ·메타데이터·llms.txt)은 **의료법 제56조 의료광고 금지** 기준을 따라야 한다. 문구를 새로 만들거나 고칠 때 항상 적용한다.

- 금지: 최고·최상·1등·유일·제일·가장·상위 N%·완치·100%·보장·확실·부작용 없는·안전한(단정)·근본치료(단정형 "근본적으로/근본부터 치료")·극대화·비교·환자후기.
- 권장: "~을 돕습니다 / ~할 수 있습니다 / ~에 중점을 둡니다 / 원인에 접근합니다 / 균형 회복" 같은 돕는·완화 톤. 자격·경력·논문은 사실만.
- 화면 카피와 함께 메타데이터·`src/lib/site.ts`·`public/llms.txt`도 동일 기준으로 맞춘다.

상세 기준과 치환 예시: `docs/의료광고-문구-가이드.md`

# 모바일 반응형 (필수)

새 페이지·컴포넌트는 처음부터 모바일(390px)에서 깨지지 않게 만든다. 아래 패턴을 지킨다.

- **손으로 넣는 줄바꿈은 데스크톱 전용**: `<br />` 대신 `{" "}<br className="hidden md:block" />` (모바일에선 공백으로 자연스럽게 흐름). 단 **큰 제목(h1/h2)의 2줄 디자인 줄바꿈은 `<br />` 그대로 유지**(모바일에서 한 줄로 흘러 넘치지 않도록). 문단 간격용 `<br /><br />`도 유지.
- **flex 안의 텍스트 컨테이너엔 `min-w-0`**: 안 그러면 긴 글이 안 줄바뀜되어 카드/행이 넘친다.
- **가로 나열은 `flex-wrap`**, 항목 간격은 모바일에서 좁게(`gap-4 md:gap-12` 식).
- **고정폭 요소(표 `min-w-[480px]` 등)는 `overflow-x-auto`로 감싼다** (페이지가 아니라 그 컨테이너만 스크롤).
- **off-canvas(모바일 메뉴 서랍) 등 `translate-x-full` fixed 요소**는 가로 스크롤을 유발하므로 루트에 `html { overflow-x: hidden }` 유지(globals.css). body에도 `overflow-x-hidden` 적용됨.
- 컨테이너는 `container mx-auto px-6` 패턴, 텍스트 폭은 `max-w-*` + `mx-auto`.

**검증(완성 전 필수)**: `--window-size` 스크린샷은 더 넓게 렌더 후 잘라 착시를 만들므로 쓰지 말 것. 대신 실제 390px 뷰포트를 CDP로 강제하는 스크립트로 확인한다(dev 서버 필요):

```
node scripts/mobile-check.mjs /경로
```

→ 가로 넘침 여부 + 넘치는 요소 목록 + 정확한 모바일 스크린샷(`/tmp/mobile_*.png`)을 출력한다. "넘침 없음, 0개"가 나오도록 조율한 뒤 마무리한다.
