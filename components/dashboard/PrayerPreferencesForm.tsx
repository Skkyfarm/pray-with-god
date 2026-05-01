// /components/dashboard/PrayerPreferencesForm.tsx
"use client";

import { useState } from "react";

type PrayerPreferencesFormProps = {
  initialPreferredTradition: string;
  initialPreferredPrayerStyle: string;
  initialPreferredPrayerType: string;
  initialPreferredVoiceId: string;
  initialPreferredVoiceLabel: string;
  initialUseSavedPrayerPreferences: boolean;
};

type SavePreferencesResponse = {
  ok?: boolean;
  error?: string;
  preferences?: {
    preferredTradition?: string;
    preferredPrayerStyle?: string;
    preferredPrayerType?: string;
    preferredVoiceId?: string;
    preferredVoiceLabel?: string;
    useSavedPrayerPreferences?: boolean;
  };
};

const traditionOptions = [
  { value: "", label: "Choose a preferred tradition" },
  { value: "exploring", label: "Exploring / not sure yet" },
  { value: "protestant", label: "Protestant" },
  { value: "catholic", label: "Catholic" },
  { value: "jewish", label: "Jewish" },
  { value: "muslim", label: "Muslim" },
  { value: "hindu", label: "Hindu" },
  { value: "buddhist", label: "Buddhist" },
];

const prayerStyleOptions = [
  { value: "", label: "Choose a preferred prayer style" },
  { value: "simple", label: "Simple and direct" },
  { value: "warm", label: "Warm and comforting" },
  { value: "reverent", label: "Reverent and traditional" },
  { value: "reflective", label: "Reflective and meditative" },
  { value: "hopeful", label: "Hopeful and encouraging" },
];

const prayerTypeOptions = [
  { value: "", label: "Choose a preferred prayer type" },
  { value: "personal", label: "Personal prayer" },
  { value: "gratitude", label: "Gratitude" },
  { value: "guidance", label: "Guidance" },
  { value: "healing", label: "Healing" },
  { value: "peace", label: "Peace" },
  { value: "forgiveness", label: "Forgiveness" },
  { value: "strength", label: "Strength" },
];

const voiceOptions = [
  { value: "", label: "Use the best available voice" },
  { value: "default", label: "Default device voice" },
  { value: "warm", label: "Warm voice preference" },
  { value: "calm", label: "Calm voice preference" },
  { value: "steady", label: "Steady voice preference" },
];

export default function PrayerPreferencesForm({
  initialPreferredTradition,
  initialPreferredPrayerStyle,
  initialPreferredPrayerType,
  initialPreferredVoiceId,
  initialPreferredVoiceLabel,
  initialUseSavedPrayerPreferences,
}: PrayerPreferencesFormProps) {
  const [preferredTradition, setPreferredTradition] = useState(
    initialPreferredTradition
  );
  const [preferredPrayerStyle, setPreferredPrayerStyle] = useState(
    initialPreferredPrayerStyle
  );
  const [preferredPrayerType, setPreferredPrayerType] = useState(
    initialPreferredPrayerType
  );
  const [preferredVoiceId, setPreferredVoiceId] = useState(
    initialPreferredVoiceId
  );
  const [preferredVoiceLabel, setPreferredVoiceLabel] = useState(
    initialPreferredVoiceLabel
  );
  const [useSavedPrayerPreferences, setUseSavedPrayerPreferences] = useState(
    initialUseSavedPrayerPreferences
  );

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSaving(true);
    setSaveMessage("");
    setErrorMessage("");

    const selectedVoiceLabel =
      voiceOptions.find((option) => option.value === preferredVoiceId)?.label ??
      "";

    try {
      const response = await fetch("/api/preferences", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preferredTradition,
          preferredPrayerStyle,
          preferredPrayerType,
          preferredVoiceId,
          preferredVoiceLabel: selectedVoiceLabel,
          useSavedPrayerPreferences,
        }),
      });

      const data = (await response.json()) as SavePreferencesResponse;

      if (!response.ok) {
        throw new Error(data.error || "Could not save prayer preferences.");
      }

      setPreferredTradition(
        data.preferences?.preferredTradition ?? preferredTradition
      );
      setPreferredPrayerStyle(
        data.preferences?.preferredPrayerStyle ?? preferredPrayerStyle
      );
      setPreferredPrayerType(
        data.preferences?.preferredPrayerType ?? preferredPrayerType
      );
      setPreferredVoiceId(
        data.preferences?.preferredVoiceId ?? preferredVoiceId
      );
      setPreferredVoiceLabel(
        data.preferences?.preferredVoiceLabel ?? selectedVoiceLabel
      );
      setUseSavedPrayerPreferences(
        data.preferences?.useSavedPrayerPreferences ??
          useSavedPrayerPreferences
      );

      setSaveMessage("Prayer preferences saved.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not save prayer preferences."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
      <section className="space-y-5">
        <div>
          <label
            htmlFor="preferredTradition"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Preferred tradition
          </label>
          <select
            id="preferredTradition"
            name="preferredTradition"
            value={preferredTradition}
            onChange={(event) => setPreferredTradition(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          >
            {traditionOptions.map((option) => (
              <option key={option.value || "none"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            You can always choose a different tradition when creating a prayer.
          </p>
        </div>

        <div>
          <label
            htmlFor="preferredPrayerStyle"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Preferred prayer style
          </label>
          <select
            id="preferredPrayerStyle"
            name="preferredPrayerStyle"
            value={preferredPrayerStyle}
            onChange={(event) => setPreferredPrayerStyle(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          >
            {prayerStyleOptions.map((option) => (
              <option key={option.value || "none"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="preferredPrayerType"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Preferred prayer type
          </label>
          <select
            id="preferredPrayerType"
            name="preferredPrayerType"
            value={preferredPrayerType}
            onChange={(event) => setPreferredPrayerType(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          >
            {prayerTypeOptions.map((option) => (
              <option key={option.value || "none"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            This helps PWG start closer to the kind of prayer you usually want.
          </p>
        </div>

        <div>
          <label
            htmlFor="preferredVoiceId"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Preferred read-aloud voice
          </label>
          <select
            id="preferredVoiceId"
            name="preferredVoiceId"
            value={preferredVoiceId}
            onChange={(event) => {
              const nextVoiceId = event.target.value;
              const nextVoiceLabel =
                voiceOptions.find((option) => option.value === nextVoiceId)
                  ?.label ?? "";

              setPreferredVoiceId(nextVoiceId);
              setPreferredVoiceLabel(nextVoiceLabel);
            }}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          >
            {voiceOptions.map((option) => (
              <option key={option.value || "none"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Voice options may vary by device and browser.
            {preferredVoiceLabel ? ` Current choice: ${preferredVoiceLabel}.` : ""}
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 pt-6">
        <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4">
          <input
            type="checkbox"
            name="useSavedPrayerPreferences"
            checked={useSavedPrayerPreferences}
            onChange={(event) =>
              setUseSavedPrayerPreferences(event.target.checked)
            }
            className="mt-1 h-4 w-4 rounded border-black/20"
          />
          <span>
            <span className="block text-sm font-semibold text-slate-900">
              Use these saved prayer preferences
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-500">
              Let PWG use these preferences as your starting point when this
              feature is connected to prayer generation.
            </span>
          </span>
        </label>
      </section>

      {saveMessage ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          {saveMessage}
        </div>
      ) : null}

      {errorMessage ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3 border-t border-black/10 pt-6">
        <button
          type="submit"
          disabled={isSaving}
          className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/40"
        >
          {isSaving ? "Saving..." : "Save Preferences"}
        </button>
      </div>
    </form>
  );
}