export type PrayerSafetyLevel = "normal" | "support" | "crisis";
export type PrayerSafetyCategory =
  | "none"
  | "self_harm"
  | "violence"
  | "abuse";

export type PrayerSafetyNotice = {
  level: "support" | "crisis";
  title: string;
  body: string;
  resources: string[];
};

export type PrayerSafetyResult = {
  level: PrayerSafetyLevel;
  category: PrayerSafetyCategory;
  matchedRules: string[];
  safetyNotice?: PrayerSafetyNotice;
};

const SELF_HARM_PATTERNS: Array<[string, RegExp]> = [
  [
    "self-harm desire",
    /\b(kill myself|end my life|want to die|don't want to live|do not want to live|suicidal|suicide|hurt myself|self harm|self-harm)\b/i,
  ],
  [
    "self-harm hopelessness",
    /\b(no reason to live|better off without me|i am a burden|can't go on|can’t go on)\b/i,
  ],
];

const VIOLENCE_PATTERNS: Array<[string, RegExp]> = [
  [
    "violent intent",
    /\b(i want to kill|i could kill|kill him|kill her|kill them|murder him|murder her|hurt someone|attack someone|shoot someone|stab someone)\b/i,
  ],
];

const ABUSE_PATTERNS: Array<[string, RegExp]> = [
  [
    "abuse or unsafe home",
    /\b(abuse|abusive|being abused|domestic violence|not safe at home|unsafe at home|someone is hurting me|someone keeps hurting me|afraid of being hurt|scared of being hurt|afraid someone will hurt me|scared someone will hurt me|i am afraid of being hurt|i'm afraid of being hurt|i am scared of being hurt|i'm scared of being hurt|i may be hurt|i might be hurt|he might hurt me|she might hurt me|they might hurt me|he may hurt me|she may hurt me|they may hurt me)\b/i,
  ],
];

const IMMEDIACY_PATTERNS: Array<[string, RegExp]> = [
  [
    "immediacy",
    /\b(right now|tonight|today|this minute|about to|soon)\b/i,
  ],
  [
    "plan",
    /\b(have a plan|made a plan|wrote a note|saying goodbye|said goodbye|gave away my things|gave away important items)\b/i,
  ],
];

function testPatterns(
  text: string,
  patterns: Array<[string, RegExp]>,
  matchedRules: string[]
) {
  let matched = false;

  for (const [label, pattern] of patterns) {
    if (pattern.test(text)) {
      matched = true;
      matchedRules.push(label);
    }
  }

  return matched;
}

function buildSupportNotice(level: "support" | "crisis"): PrayerSafetyNotice {
  if (level === "crisis") {
    return {
      level,
      title: "Please reach out to a real person right now.",
      body:
        "What you wrote may involve immediate danger, self-harm, violence, or an unsafe situation. Prayer can still matter, but PWG is not a crisis service.",
      resources: [
        "U.S.: Call or text 988",
        "Mexico: Línea de la Vida — 800 911 2000",
        "If there is immediate danger, call 911 or your local emergency services now",
        "Contact a trusted family member, friend, spiritual leader, or licensed mental health professional right away",
      ],
    };
  }

  return {
    level,
    title: "Please consider real-world support too.",
    body:
      "What you wrote may involve self-harm, violence, or a serious safety concern. Alongside prayer, reaching out to real-world support could help.",
    resources: [
      "U.S.: Call or text 988",
      "Mexico: Línea de la Vida — 800 911 2000",
      "If there is immediate danger, call 911 or your local emergency services",
      "You could also contact a trusted family member, friend, spiritual leader, or licensed mental health professional",
    ],
  };
}

export function detectPrayerSafety(
  values: Array<string | null | undefined>
): PrayerSafetyResult {
  const text = values
    .filter((value): value is string => typeof value === "string")
    .join("\n")
    .trim();

  if (!text) {
    return {
      level: "normal",
      category: "none",
      matchedRules: [],
    };
  }

  const matchedRules: string[] = [];

  const hasSelfHarm = testPatterns(text, SELF_HARM_PATTERNS, matchedRules);
  const hasViolence = testPatterns(text, VIOLENCE_PATTERNS, matchedRules);
  const hasAbuse = testPatterns(text, ABUSE_PATTERNS, matchedRules);
  const hasImmediacy = testPatterns(text, IMMEDIACY_PATTERNS, matchedRules);

  if ((hasSelfHarm || hasViolence || hasAbuse) && hasImmediacy) {
    return {
      level: "crisis",
      category: hasSelfHarm
        ? "self_harm"
        : hasViolence
          ? "violence"
          : "abuse",
      matchedRules,
      safetyNotice: buildSupportNotice("crisis"),
    };
  }

  if (hasSelfHarm || hasViolence || hasAbuse) {
    return {
      level: "support",
      category: hasSelfHarm
        ? "self_harm"
        : hasViolence
          ? "violence"
          : "abuse",
      matchedRules,
      safetyNotice: buildSupportNotice("support"),
    };
  }

  return {
    level: "normal",
    category: "none",
    matchedRules,
  };
}