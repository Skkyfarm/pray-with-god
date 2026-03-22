// app/robots.ts

import type { MetadataRoute } from "next";

const SITE_URL = "https://praywithgod.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}