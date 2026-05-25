import type { Metadata } from "next";
import { NamedPrayerReadMorePage } from "@/components/NamedPrayerReadMorePage";
import { getNamedPrayerDetail } from "@/lib/namedPrayerDetails";

const entry = getNamedPrayerDetail("protestant", "marys-magnificat");

if (!entry) {
  throw new Error("Missing named prayer detail: protestant/marys-magnificat");
}

export const metadata: Metadata = {
  title: entry.metadataTitle,
  description: entry.metadataDescription,
  alternates: {
    canonical: entry.canonical,
  },
};

export default function ProtestantMarysMagnificatPage() {
  return <NamedPrayerReadMorePage entry={entry} />;
}