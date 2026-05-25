import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("catholic", "prayer-of-jabez");

if (!entry) {
  throw new Error("Missing named prayer detail: catholic/prayer-of-jabez");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function CatholicPrayerOfJabezPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}