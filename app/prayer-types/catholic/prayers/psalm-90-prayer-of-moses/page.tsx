import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("catholic", "psalm-90-prayer-of-moses");

if (!entry) {
  throw new Error("Missing named prayer detail: catholic/psalm-90-prayer-of-moses");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function CatholicPsalm90PrayerOfMosesPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}