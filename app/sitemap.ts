// app/sitemap.ts

import type { MetadataRoute } from "next";

const SITE_URL = "https://praywithgod.ai";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/pray",
  "/prayer-types",
  "/prayer-types/protestant",
  "/prayer-types/catholic",
  "/prayer-types/jewish",
  "/prayer-types/muslim",
  "/prayer-types/hindu",
  "/prayer-types/buddhist",
  "/privacy",
  "/support",
];

const protestantSlugs = [
  "thanksgiving-prayers",
  "intercessory-prayers",
  "petitionary-prayers",
  "praise-prayers",
  "confession-prayers",
  "adoration-prayers",
  "evening-prayers",
  "guidance-prayers",
  "healing-prayers",
  "lament-prayers",
  "morning-prayers",
  "protection-prayers",
];

const catholicSlugs = [
  "adoration",
  "contrition",
  "thanksgiving",
  "petition",
  "intercession",
  "marian-devotion",
  "eucharistic-devotion",
  "prayers-for-mercy",
  "prayers-for-guidance",
  "examination-of-conscience",
  "prayers-for-the-sick",
  "prayers-for-the-dying",
  "family-prayers",
  "vocational-discernment-prayers",
  "morning-offering",
  "night-prayer",
  "advent-prayers",
  "lenten-prayers",
  "easter-prayers",
  "saint-inspired-prayers",
];

const jewishSlugs = [
  "shacharit",
  "mincha",
  "maariv",
  "hallel",
  "tehillim",
  "birkat-hamazon",
  "tefilat-haderech",
  "kabbalat-shabbat",
  "mussaf",
  "tashlich",
  "selichot",
  "vidui",
];

const muslimSlugs = [
  "fajr-prayer",
  "dhuhr-prayer",
  "asr-prayer",
  "maghrib-prayer",
  "isha-prayer",
];

const hinduSlugs = [
  "shanti-path-peace-prayer",
  "gratitude-offering",
  "bhakti-devotional",
  "sankalpa-intention-setting",
  "stuti-praise",
  "prarthana-personal-request",
  "gayatri-sacred-mantra",
  "kshama-prarthana-forgiveness",
];

const buddhistSlugs = [
  "metta-loving-kindness",
  "karuna-compassion",
  "mindfulness-reflection",
  "equanimity-practice",
  "letting-go-release",
  "forgiveness-reflection",
  "dedication-of-merit",
  "refuge-protection",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/pray" || route === "/prayer-types"
          ? 0.9
          : route.startsWith("/prayer-types/")
            ? 0.85
            : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const protestantEntries = protestantSlugs.map((slug) => ({
    url: `${SITE_URL}/prayer-types/protestant/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const catholicEntries = catholicSlugs.map((slug) => ({
    url: `${SITE_URL}/prayer-types/catholic/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const jewishEntries = jewishSlugs.map((slug) => ({
    url: `${SITE_URL}/prayer-types/jewish/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const muslimEntries = muslimSlugs.map((slug) => ({
    url: `${SITE_URL}/prayer-types/muslim/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const hinduEntries = hinduSlugs.map((slug) => ({
    url: `${SITE_URL}/prayer-types/hindu/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const buddhistEntries = buddhistSlugs.map((slug) => ({
    url: `${SITE_URL}/prayer-types/buddhist/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  return [
    ...staticEntries,
    ...protestantEntries,
    ...catholicEntries,
    ...jewishEntries,
    ...muslimEntries,
    ...hinduEntries,
    ...buddhistEntries,
  ];
}