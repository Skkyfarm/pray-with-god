import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "psalm-90-prayer-of-moses");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/psalm-90-prayer-of-moses");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantPsalm90PrayerOfMosesPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}