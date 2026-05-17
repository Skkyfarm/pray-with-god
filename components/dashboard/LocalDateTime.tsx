// /components/dashboard/LocalDateTime.tsx

"use client";

import { useEffect, useState } from "react";

type LocalDateTimeProps = {
  value: string | null;
  fallback?: string;
};

function formatLocalDateTime(value: string | null, fallback: string) {
  if (!value) return fallback;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function LocalDateTime({
  value,
  fallback = "Unknown date",
}: LocalDateTimeProps) {
  const [formattedDate, setFormattedDate] = useState(fallback);

  useEffect(() => {
    setFormattedDate(formatLocalDateTime(value, fallback));
  }, [value, fallback]);

  return <>{formattedDate}</>;
}
