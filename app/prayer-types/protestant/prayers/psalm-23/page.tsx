import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "psalm-23");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/psalm-23");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantPsalm23Page() {
  return <NamedPrayerReadMorePage entry={entry} />;
}