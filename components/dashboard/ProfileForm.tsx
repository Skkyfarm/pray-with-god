// /components/dashboard/ProfileForm.tsx
"use client";

import { useState } from "react";

type ProfileFormProps = {
  initialDisplayName: string;
  initialZipCode: string;

  // Optional for now so the current dashboard profile page does not break
  // until we update /app/dashboard/profile/page.tsx to pass these values in.
  initialFirstName?: string;
  initialLastName?: string;
  initialCity?: string;
  initialStateRegion?: string;
  initialCountry?: string;
};

type SaveResponse = {
  ok?: boolean;
  error?: string;
  profile?: {
    displayName?: string;
    zipCode?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    stateRegion?: string;
    country?: string;
  };
};

export default function ProfileForm({
  initialDisplayName,
  initialZipCode,
  initialFirstName = "",
  initialLastName = "",
  initialCity = "",
  initialStateRegion = "",
  initialCountry = "",
}: ProfileFormProps) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [city, setCity] = useState(initialCity);
  const [stateRegion, setStateRegion] = useState(initialStateRegion);
  const [country, setCountry] = useState(initialCountry);
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
          firstName,
          lastName,
          displayName,
          city,
          stateRegion,
          country,
          zipCode,
        }),
      });

      const data = (await response.json()) as SaveResponse;

      if (!response.ok) {
        throw new Error(data.error || "Could not save profile.");
      }

      setFirstName(data.profile?.firstName ?? firstName);
      setLastName(data.profile?.lastName ?? lastName);
      setDisplayName(data.profile?.displayName ?? displayName);
      setCity(data.profile?.city ?? city);
      setStateRegion(data.profile?.stateRegion ?? stateRegion);
      setCountry(data.profile?.country ?? country);
      setZipCode(data.profile?.zipCode ?? zipCode);

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
    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
      <section className="space-y-5">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Your name
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            These details help personalize your PrayWithGod.ai member area.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Last name"
              autoComplete="family-name"
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
            />
          </div>
        </div>

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
            placeholder="The name you want shown inside PWG"
            autoComplete="nickname"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            This can be your first name, full name, or any name you prefer.
          </p>
        </div>
      </section>

      <section className="space-y-5 border-t border-black/10 pt-6">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Location
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Optional. This helps keep your profile ready for future local and
            regional features.
          </p>
        </div>

        <div>
          <label
            htmlFor="city"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="City"
            autoComplete="address-level2"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="stateRegion"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              State / Region
            </label>
            <input
              id="stateRegion"
              name="stateRegion"
              type="text"
              value={stateRegion}
              onChange={(event) => setStateRegion(event.target.value)}
              placeholder="State or region"
              autoComplete="address-level1"
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
            />
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              ZIP / Postal code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              inputMode="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              placeholder="ZIP or postal code"
              autoComplete="postal-code"
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder="Country"
            autoComplete="country-name"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
          />
        </div>
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
          {isSaving ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </form>
  );
}