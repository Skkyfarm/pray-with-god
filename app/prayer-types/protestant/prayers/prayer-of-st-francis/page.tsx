import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "prayer-of-st-francis");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/prayer-of-st-francis");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantPrayerOfStFrancisPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}