// /components/dashboard/RenameSavedPrayerButton.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type RenameSavedPrayerButtonProps = {
  savedPrayerId: string;
  currentTitle: string;
};

export default function RenameSavedPrayerButton({
  savedPrayerId,
  currentTitle,
}: RenameSavedPrayerButtonProps) {
  const router = useRouter();
  const [isRenaming, setIsRenaming] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleRename() {
    const nextTitle = window.prompt(
      "Rename this saved prayer:",
      currentTitle || "Saved Prayer"
    );

    if (nextTitle === null) {
      return;
    }

    const cleanTitle = nextTitle.replace(/\s+/g, " ").trim();

    if (!cleanTitle) {
      setErrorMessage("Please enter a title for this saved prayer.");
      return;
    }

    if (cleanTitle.length > 120) {
      setErrorMessage("Please keep saved prayer titles under 120 characters.");
      return;
    }

    if (cleanTitle === currentTitle) {
      return;
    }

    setIsRenaming(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/prayers/saved/rename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedPrayerId,
          title: cleanTitle,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error || "Could not rename this saved prayer."
        );
      }

      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not rename this saved prayer."
      );
    } finally {
      setIsRenaming(false);
    }
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleRename}
        disabled={isRenaming}
        className="inline-flex rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isRenaming ? "Renaming..." : "Rename"}
      </button>

      {errorMessage ? (
        <p className="max-w-xs text-xs leading-5 text-rose-700">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}