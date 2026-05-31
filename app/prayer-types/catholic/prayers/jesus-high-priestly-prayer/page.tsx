import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("catholic", "jesus-high-priestly-prayer");

if (!entry) {
  throw new Error("Missing named prayer detail: catholic/jesus-high-priestly-prayer");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function CatholicJonahsPrayerPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}