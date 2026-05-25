import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "jonahs-prayer");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/jonahs-prayer");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantJonahsPrayerPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}