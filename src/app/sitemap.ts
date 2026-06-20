import type { MetadataRoute } from "next";
import { siteUrl, sitePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-20");
  return sitePages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
