import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "solomons-prayer-of-dedication");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/solomons-prayer-of-dedication");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantSolomonsPrayerOfDedicationPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}