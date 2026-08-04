import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["es", "en"];
  const paths = ["", "/home", "/services", "/projects", "/contact", "/precios"];

  return langs.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" || path === "/home" ? 1 : 0.8,
    }))
  );
}
