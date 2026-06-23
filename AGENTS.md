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
