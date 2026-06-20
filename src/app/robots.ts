import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// 검색엔진 + LLM/AI 크롤러를 명시적으로 허용한다.
// AI 크롤러를 막으면 ChatGPT·Perplexity·Claude 등의 답변에 인용되지 못한다.
const aiCrawlers = [
  "GPTBot", // OpenAI 학습/검색
  "OAI-SearchBot", // OpenAI ChatGPT Search
  "ChatGPT-User", // ChatGPT 브라우징
  "ClaudeBot", // Anthropic Claude
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Gemini / Google AI
  "Applebot-Extended", // Apple Intelligence
  "Bytespider", // 기타
  "Amazonbot",
  "CCBot", // Common Crawl
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/coming-soon"] },
      ...aiCrawlers.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
