// /lib/accountCapabilities.ts

export type ViewerKind = "visitor" | "signed_in_user" | "supporter";

export type SupportStatus =
  | "none"
  | "active"
  | "canceled"
  | "expired"
  | "past_supporter"
  | "manual"
  | string;

export type MemberStatusLike = {
  is_member?: boolean | null;
  support_status?: SupportStatus | null;
  support_type?: string | null;
  support_plan?: string | null;
  support_current_period_end?: string | Date | null;
  support_canceled_at?: string | Date | null;
  lifetime_support_cents?: number | null;
};

export type AccountCapabilitiesInput = {
  userId?: string | null;
  memberStatus?: MemberStatusLike | null;
  now?: Date;
};

export type AccountCapabilities = {
  viewerKind: ViewerKind;

  isVisitor: boolean;
  isSignedIn: boolean;
  isSupporter: boolean;

  canGeneratePrayers: boolean;
  canPrintPrayers: boolean;
  canSharePrayers: boolean;
  canUseReadAloud: boolean;
  canChangeVoice: boolean;

  canUseAccountDashboard: boolean;
  canUseBasicProfile: boolean;
  canPostCommunityReflection: boolean;

  canSavePrayers: boolean;
  canViewSavedPrayers: boolean;
  canRenameSavedPrayers: boolean;
  canDeleteSavedPrayers: boolean;

  canViewPrayerHistory: boolean;
  canUseSavedPrayerPreferences: boolean;

  supportStatus: SupportStatus;
  supportPlan: string | null;
  supportCurrentPeriodEnd: string | null;
  lifetimeSupportCents: number;
};

function toDate(value: string | Date | null | undefined): Date | null {
  if (!value) return null;

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

export function hasActiveSupport(
  memberStatus: MemberStatusLike | null | undefined,
  now: Date = new Date()
): boolean {
  if (!memberStatus) return false;

  const supportStatus = memberStatus.support_status ?? "none";
  const supportType = memberStatus.support_type ?? null;
  const periodEnd = toDate(memberStatus.support_current_period_end);
  const canceledAt = toDate(memberStatus.support_canceled_at);

  // New preferred rule:
  // active support is active until the current period ends.
  if (supportStatus === "active") {
    if (!periodEnd) return true;
    return periodEnd.getTime() > now.getTime();
  }

  // Backward-compatible manual supporter rule.
  // This keeps our existing test/manual supporter state working until
  // we fully migrate older rows into the newer support_status fields.
  if (
    memberStatus.is_member === true &&
    (supportType === "manual" || supportStatus === "manual")
  ) {
    if (!periodEnd) return true;
    return periodEnd.getTime() > now.getTime();
  }

  // If a supporter canceled but the paid/support period has not ended,
  // they keep supporter access until the period expires.
  if (supportStatus === "canceled" && periodEnd && canceledAt) {
    return periodEnd.getTime() > now.getTime();
  }

  return false;
}

export function getAccountCapabilities(
  input: AccountCapabilitiesInput
): AccountCapabilities {
  const now = input.now ?? new Date();
  const userId = input.userId ?? null;
  const memberStatus = input.memberStatus ?? null;

  const isSignedIn = Boolean(userId);
  const isSupporter = isSignedIn && hasActiveSupport(memberStatus, now);

  const viewerKind: ViewerKind = !isSignedIn
    ? "visitor"
    : isSupporter
      ? "supporter"
      : "signed_in_user";

  const supportStatus = memberStatus?.support_status ?? "none";
  const supportCurrentPeriodEnd =
    memberStatus?.support_current_period_end instanceof Date
      ? memberStatus.support_current_period_end.toISOString()
      : memberStatus?.support_current_period_end ?? null;

  const lifetimeSupportCents = memberStatus?.lifetime_support_cents ?? 0;

  return {
    viewerKind,

    isVisitor: viewerKind === "visitor",
    isSignedIn,
    isSupporter,

    // Core prayer features stay free for everyone.
    canGeneratePrayers: true,
    canPrintPrayers: true,
    canSharePrayers: true,
    canUseReadAloud: true,
    canChangeVoice: true,

    // Signed-in features.
    canUseAccountDashboard: isSignedIn,
    canUseBasicProfile: isSignedIn,
    canPostCommunityReflection: isSignedIn,

    // Active supporter features.
    canSavePrayers: isSupporter,
    canViewSavedPrayers: isSupporter,
    canRenameSavedPrayers: isSupporter,
    canDeleteSavedPrayers: isSupporter,

    // Future supporter continuity/history features.
    canViewPrayerHistory: isSupporter,
    canUseSavedPrayerPreferences: isSupporter,

    supportStatus,
    supportPlan: memberStatus?.support_plan ?? null,
    supportCurrentPeriodEnd,
    lifetimeSupportCents,
  };
}

export function getSupporterAccessMessage(
  capabilities: AccountCapabilities
): string {
  if (capabilities.isSupporter) {
    return "Your supporter features are active.";
  }

  if (capabilities.isSignedIn) {
    return "Support PrayWithGod.ai to save prayers and use deeper account features.";
  }

  return "Sign in and support PrayWithGod.ai to save prayers and return to them later.";
}

export function getViewerKindLabel(viewerKind: ViewerKind): string {
  if (viewerKind === "supporter") return "Supporter";
  if (viewerKind === "signed_in_user") return "Signed-in User";
  return "Visitor";
}