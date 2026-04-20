// /components/dashboard/DeleteSavedPrayerButton.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DeleteSavedPrayerButtonProps = {
  savedPrayerId: string;
};

export default function DeleteSavedPrayerButton({
  savedPrayerId,
}: DeleteSavedPrayerButtonProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Remove this prayer from your Saved Prayers?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/prayers/saved/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ savedPrayerId }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error || "Could not delete this saved prayer."
        );
      }

      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not delete this saved prayer."
      );
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className="inline-flex rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isDeleting ? "Removing..." : "Delete"}
      </button>

      {errorMessage ? (
        <p className="max-w-xs text-xs leading-5 text-rose-700">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}