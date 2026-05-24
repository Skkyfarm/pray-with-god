import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "prayer-of-jabez");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/prayer-of-jabez");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantPrayerOfJabezPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}