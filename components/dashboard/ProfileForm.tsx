// /components/dashboard/ProfileForm.tsx
"use client";

import { useState } from "react";

type ProfileFormProps = {
  initialDisplayName: string;
  initialZipCode: string;
};

type SaveResponse = {
  ok?: boolean;
  error?: string;
  profile?: {
    displayName?: string;
    zipCode?: string;
  };
};

export default function ProfileForm({
  initialDisplayName,
  initialZipCode,
}: ProfileFormProps) {
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [zipCode, setZipCode] = useState(initialZipCode);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setSaveMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName,
          zipCode,
        }),
      });

      const data = (await response.json()) as SaveResponse;

      if (!response.ok) {
        throw new Error(data.error || "Could not save profile.");
      }

      setDisplayName(data.profile?.displayName ?? "");
      setZipCode(data.profile?.zipCode ?? "");
      setSaveMessage("Profile saved.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Could not save profile."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="displayName"
          className="mb-2 block text-sm font-semibold text-slate-900"
        >
          Display name
        </label>
        <input
          id="displayName"
          name="displayName"
          type="text"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          placeholder="Your display name"
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
        />
        <p className="mt-2 text-xs leading-5 text-slate-500">
          This can be the name you want shown inside your member area.
        </p>
      </div>

      <div>
        <label
          htmlFor="zipCode"
          className="mb-2 block text-sm font-semibold text-slate-900"
        >
          ZIP code
        </label>
        <input
          id="zipCode"
          name="zipCode"
          type="text"
          inputMode="numeric"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
          placeholder="Optional"
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
        />
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Optional. This gives PWG room for future location-aware features later.
        </p>
      </div>

      {saveMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {saveMessage}
        </div>
      ) : null}

      {errorMessage ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={isSaving}
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/40"
        >
          {isSaving ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </form>
  );
}