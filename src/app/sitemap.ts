import type { MetadataRoute } from "next"
import { nav } from "@/lib/site"

const base = "https://www.antoniosnypizza.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }))
}
