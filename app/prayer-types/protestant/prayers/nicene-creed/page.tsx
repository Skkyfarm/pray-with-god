import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "nicene-creed");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/nicene-creed");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantNiceneCreedPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}