// /components/dashboard/SavePrayerButton.tsx
"use client";

import { useState } from "react";

type SavePrayerButtonProps = {
  generatedPrayerId: string;
  initiallySaved?: boolean;
};

type SavePrayerResponse = {
  ok?: boolean;
  error?: string;
  alreadySaved?: boolean;
  savedPrayerId?: string;
};

export default function SavePrayerButton({
  generatedPrayerId,
  initiallySaved = false,
}: SavePrayerButtonProps) {
  const [isSaved, setIsSaved] = useState(initiallySaved);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSave() {
    if (isSaved || isSaving) {
      return;
    }

    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/prayers/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          generatedPrayerId,
        }),
      });

      const data = (await response.json()) as SavePrayerResponse;

      if (!response.ok) {
        throw new Error(data.error || "Could not save prayer.");
      }

      setIsSaved(true);
      setMessage(data.alreadySaved ? "Already saved." : "Prayer saved.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Could not save prayer."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleSave}
        disabled={isSaved || isSaving}
        className="inline-flex w-fit rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/40"
      >
        {isSaved ? "Saved" : isSaving ? "Saving..." : "Save Prayer"}
      </button>

      {message ? (
        <p className="text-sm text-emerald-700">{message}</p>
      ) : null}

      {errorMessage ? (
        <p className="text-sm text-red-700">{errorMessage}</p>
      ) : null}
    </div>
  );
}
