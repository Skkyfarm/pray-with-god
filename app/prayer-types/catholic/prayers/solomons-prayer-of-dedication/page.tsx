import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("catholic", "solomons-prayer-of-dedication");

if (!entry) {
  throw new Error("Missing named prayer detail: catholic/solomons-prayer-of-dedication");
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