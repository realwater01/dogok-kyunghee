// 모바일(390px) 화면 검증 스크립트.
// 진짜 모바일 뷰포트를 CDP로 강제해 (1) 가로 넘침 요소를 찾아내고
// (2) 전체 페이지 스크린샷을 저장한다.
// --window-size 방식 스크린샷은 더 넓게 렌더 후 잘라 착시를 만들므로 쓰지 않는다.
//
// 사용법:
//   node scripts/mobile-check.mjs [경로 또는 URL] [출력png]
//   예) node scripts/mobile-check.mjs /treatment/student-focus
//       node scripts/mobile-check.mjs http://localhost:3000/about/location /tmp/loc.png
//
// dev 서버(localhost:3000)가 떠 있어야 한다.

import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const WIDTH = 390;
const HEIGHT = 844;
const PORT = 9200 + Math.floor(Date.now() % 700); // 대략 고유 포트

const arg = process.argv[2] || "/";
const url = arg.startsWith("http") ? arg : `http://localhost:3000${arg}`;
const slug = arg.replace(/^https?:\/\/[^/]+/, "").replace(/[^\w]+/g, "_") || "home";
const outPng = process.argv[3] || `/tmp/mobile_${slug}.png`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  `--remote-debugging-port=${PORT}`,
  `--window-size=${WIDTH},${HEIGHT}`,
  url,
]);

let ws;
function cleanup(code = 0) {
  try { ws?.close(); } catch {}
  try { chrome.kill(); } catch {}
  process.exit(code);
}

try {
  // 디버거 뜰 때까지 대기
  let target;
  for (let i = 0; i < 40; i++) {
    await sleep(300);
    try {
      const list = await (await fetch(`http://localhost:${PORT}/json/list`)).json();
      target = list.find((t) => t.type === "page" && (t.url || "").includes(url.replace(/^https?:\/\//, "").split("/")[0]));
      if (target) break;
    } catch {}
  }
  if (!target) throw new Error("CDP 타깃을 찾지 못했습니다. dev 서버가 떠 있나요?");

  ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 0;
  const pending = {};
  const send = (method, params = {}) =>
    new Promise((res) => {
      const i = ++id;
      pending[i] = res;
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending[m.id]) { pending[m.id](m); delete pending[m.id]; }
  };
  await new Promise((r) => (ws.onopen = r));

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width: WIDTH, height: HEIGHT, deviceScaleFactor: 2, mobile: true,
  });
  await sleep(700);

  // 가로 넘침 요소 탐지.
  // overflow-x(auto/scroll/hidden/clip) 컨테이너 안의 요소는 자체 스크롤/클립되므로 제외한다.
  const overflowExpr = `(() => {
    const vw = innerWidth;
    const sw = document.documentElement.scrollWidth;
    const clipped = (el) => {
      let p = el.parentElement;
      while (p && p !== document.body) {
        const ox = getComputedStyle(p).overflowX;
        if (['auto','scroll','hidden','clip'].includes(ox)) return true;
        p = p.parentElement;
      }
      return false;
    };
    const bad = [];
    document.querySelectorAll('body *').forEach(el => {
      const r = el.getBoundingClientRect();
      const st = getComputedStyle(el);
      if (st.position === 'fixed' || st.display === 'none' || r.width === 0) return;
      if (r.right > vw + 1 && r.left < vw && !clipped(el)) {
        bad.push({ right: Math.round(r.right), tag: el.tagName,
          cls: (el.className?.toString?.() || '').slice(0, 55),
          txt: (el.textContent || '').trim().slice(0, 25) });
      }
    });
    bad.sort((a, b) => b.right - a.right);
    return JSON.stringify({ vw, sw, overflowCount: bad.length, worst: bad.slice(0, 6) });
  })()`;
  const res = await send("Runtime.evaluate", { expression: overflowExpr, returnByValue: true });
  const report = JSON.parse(res.result.result.value);

  // 전체 페이지 스크린샷
  const h = (await send("Runtime.evaluate", {
    expression: "document.documentElement.scrollHeight", returnByValue: true,
  })).result.result.value;
  const shot = await send("Page.captureScreenshot", {
    format: "png", captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: WIDTH, height: Math.min(h, 12000), scale: 1 },
  });
  writeFileSync(outPng, Buffer.from(shot.result.data, "base64"));

  console.log(`\n[모바일 검증] ${url}`);
  console.log(`  뷰포트 ${report.vw}px / 문서폭 ${report.sw}px  →  ${report.sw > report.vw ? "⚠️ 가로 넘침" : "✓ 넘침 없음"}`);
  console.log(`  넘치는 요소: ${report.overflowCount}개`);
  if (report.worst.length) {
    for (const w of report.worst) console.log(`   - ${w.tag}.${w.cls}  (right ${w.right}) "${w.txt}"`);
  }
  console.log(`  스크린샷: ${outPng} (폭 780px = 390 CSS × 2)\n`);
  cleanup(0);
} catch (err) {
  console.error("[모바일 검증] 오류:", err.message);
  cleanup(1);
}
