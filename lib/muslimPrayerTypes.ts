// lib/muslimPrayerTypes.ts

export type MuslimPrayerTypeFaq = {
  question: string;
  answer: string;
};

export type MuslimPrayerType = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  commonMoments: string[];
  exampleSituations: string[];
  faqItems: MuslimPrayerTypeFaq[];
  keyThemes: string[];
  relatedDirection: string;
  summary: string;
};

export const MUSLIM_PRAYER_TYPES: MuslimPrayerType[] = [
  {
    slug: "fajr-prayer",
    title: "Fajr Prayer",
    shortDescription:
      "Fajr is the dawn prayer, offered at the beginning of the day as a quiet act of remembrance, dependence, and turning toward God.",
    intro:
      "Fajr belongs to the first light of morning, before the rush of the day fully arrives. It is often experienced as a prayer of awakening, humility, renewal, and readiness. For many people, it represents not only a time of day but a spiritual posture: beginning again before God with sincerity and attention.",
    commonMoments: [
      "At the beginning of a new day",
      "When seeking clarity before responsibilities begin",
      "When wanting to begin the morning with humility and remembrance",
      "During seasons of recommitment, discipline, or spiritual renewal",
    ],
    exampleSituations: [
      "A person wakes before sunrise feeling the weight of the day ahead and wants to begin with steadiness instead of haste.",
      "Someone is trying to rebuild spiritual consistency and wants a clear devotional point of return each morning.",
      "A visitor feels grateful for another day of life and wants to begin in reverence, trust, and remembrance.",
    ],
    faqItems: [
      {
        question: "What kind of spiritual tone does Fajr carry?",
        answer:
          "Fajr often carries a tone of freshness, wakefulness, dependence, humility, and renewed trust in God at the opening of the day.",
      },
      {
        question: "Why might someone seek prayer support around Fajr?",
        answer:
          "Because early morning often sets the emotional and spiritual direction of the whole day. A person may want help beginning with peace, focus, gratitude, or recommitment.",
      },
      {
        question: "Is this page presenting an official religious text?",
        answer:
          "No. This page is meant to explain the prayer type and help a visitor understand its devotional direction. It is not scripture, not a translation, and not an official liturgical source.",
      },
    ],
    keyThemes: [
      "Beginning the day before God",
      "Wakefulness and remembrance",
      "Humility",
      "Fresh mercy",
      "Spiritual discipline",
    ],
    relatedDirection:
      "Fajr is closely related to themes of renewal, morning surrender, clarity, and setting the heart in order before the pressures of the day begin.",
    summary:
      "Fajr prayer is a dawn-facing act of remembrance that helps a person begin the day with humility, steadiness, and spiritual attention.",
  },
  {
    slug: "dhuhr-prayer",
    title: "Dhuhr Prayer",
    shortDescription:
      "Dhuhr is the midday prayer, a sacred pause in the middle of daily activity that re-centers the heart on God.",
    intro:
      "Dhuhr comes in the middle of the day, when attention is often stretched by work, obligations, stress, and distraction. Because of that, it can feel like a merciful interruption: a return from busyness into reverence, focus, and remembrance. It reminds the person that the day is not only about productivity, but also about alignment with God.",
    commonMoments: [
      "In the middle of a busy workday",
      "When feeling mentally scattered or pulled in many directions",
      "When needing a spiritual reset during ordinary responsibilities",
      "During seasons when daily rhythm needs grounding",
    ],
    exampleSituations: [
      "A person has been moving from task to task without breathing and needs a moment of reverent re-centering.",
      "Someone feels pulled between family, work, health, and obligation and wants to stop long enough to remember God again.",
      "A visitor wants help shaping a midday prayerful pause instead of letting the whole day run on impulse.",
    ],
    faqItems: [
      {
        question: "Why is midday prayer spiritually important?",
        answer:
          "Because the middle of the day often reveals what is happening inside us: pressure, distraction, fatigue, hurry, or forgetfulness. Midday prayer gently interrupts that drift.",
      },
      {
        question: "What does Dhuhr help restore?",
        answer:
          "It often helps restore perspective, reverence, steadiness, and awareness that the day belongs to God even in ordinary work.",
      },
      {
        question: "Can this page help someone unfamiliar with Islamic prayer understand the moment better?",
        answer:
          "Yes. The page is meant to explain the devotional direction of the prayer type in clear language while treating the tradition respectfully.",
      },
    ],
    keyThemes: [
      "Midday remembrance",
      "Sacred interruption",
      "Re-centering",
      "Faithfulness in ordinary life",
      "Steadiness under responsibility",
    ],
    relatedDirection:
      "Dhuhr connects naturally with themes of work, pause, discipline, inward recollection, and bringing the middle of the day back under God’s presence.",
    summary:
      "Dhuhr prayer is a midday return to God that interrupts distraction and restores spiritual focus in the middle of daily life.",
  },
  {
    slug: "asr-prayer",
    title: "Asr Prayer",
    shortDescription:
      "Asr is the late afternoon prayer, often marked by perseverance, recollection, and spiritual steadiness as the day begins to decline.",
    intro:
      "Asr belongs to the later part of the day, when fatigue, frustration, or emotional wear may begin to show themselves. It can carry a sense of endurance and watchfulness, helping a person remain mindful rather than letting the closing stretch of the day become spiritually careless or emotionally unguarded.",
    commonMoments: [
      "Late in the day when energy is running low",
      "When perseverance is needed",
      "When trying not to lose spiritual focus after a hard day",
      "During seasons of stress, labor, or endurance",
    ],
    exampleSituations: [
      "A person is tired, worn down, and still has obligations ahead, but wants to keep faithfulness alive through the afternoon.",
      "Someone feels the day slipping away and wants to pause before exhaustion turns into irritation or numbness.",
      "A visitor wants prayer support shaped by patience, resilience, and renewed remembrance before evening begins.",
    ],
    faqItems: [
      {
        question: "What emotional or spiritual place does Asr often meet?",
        answer:
          "Asr often meets people in weariness, persistence, patience, and the need to remain spiritually awake late in the day.",
      },
      {
        question: "Why might Asr matter during stressful seasons?",
        answer:
          "Because it helps a person gather themselves again before fatigue, discouragement, or distraction take over the final part of the day.",
      },
      {
        question: "Is Asr mainly about emotion or discipline?",
        answer:
          "It may involve both. It can be felt emotionally as endurance, but it also reflects the spiritual discipline of remaining faithful throughout the day.",
      },
    ],
    keyThemes: [
      "Perseverance",
      "Late-day steadiness",
      "Patience",
      "Recollection",
      "Remaining mindful",
    ],
    relatedDirection:
      "Asr sits near themes of endurance, discipline, patience, and asking for strength before the day fully turns toward evening.",
    summary:
      "Asr prayer helps a person remain steady, attentive, and faithful in the tiring stretch between midday and evening.",
  },
  {
    slug: "maghrib-prayer",
    title: "Maghrib Prayer",
    shortDescription:
      "Maghrib is the sunset prayer, a devotional turning point that marks the close of daylight and the beginning of evening.",
    intro:
      "Maghrib is often experienced as a prayer of transition. It arrives at the edge between activity and rest, daylight and evening, outward effort and inward return. For many people, it becomes a moment of gratitude, relief, release, and remembrance as the visible day comes to an end.",
    commonMoments: [
      "At sunset or at the close of the active day",
      "When wanting to reflect on what the day has held",
      "When returning home inwardly or outwardly",
      "During moments of gratitude, relief, or evening transition",
    ],
    exampleSituations: [
      "A person has reached the end of a demanding day and wants to offer thanks, release tension, and turn toward peace.",
      "Someone feels emotionally full by evening and wants a prayerful way to cross from work into rest.",
      "A visitor wants language for gratitude, humility, and return as daylight fades.",
    ],
    faqItems: [
      {
        question: "What makes Maghrib feel distinct from other daily prayer moments?",
        answer:
          "Its timing at sunset gives it a strong sense of transition, gratitude, and return as the visible day closes.",
      },
      {
        question: "What kind of inner movement often fits Maghrib?",
        answer:
          "Reflection, thanks, release, and a gentle turning from activity toward rest and remembrance.",
      },
      {
        question: "How can a visitor use this kind of page well?",
        answer:
          "By learning what this prayer direction means and using that understanding to approach the tradition with greater reverence and clarity.",
      },
    ],
    keyThemes: [
      "Sunset transition",
      "Gratitude",
      "Return",
      "Reflection",
      "Release",
    ],
    relatedDirection:
      "Maghrib is closely tied to endings, reflection, gratitude, and the inward crossing from the labor of the day into the quiet of evening.",
    summary:
      "Maghrib prayer marks the sunset threshold with gratitude, reflection, and a reverent turning from labor toward peace.",
  },
  {
    slug: "isha-prayer",
    title: "Isha Prayer",
    shortDescription:
      "Isha is the night prayer, often associated with surrender, trust, quiet reflection, and entrusting unfinished burdens to God.",
    intro:
      "Isha belongs to the stillness of night. It is often a fitting time for release, examination, surrender, and peaceful dependence, especially when worries remain unresolved. The prayer can help a person end the day with reverence rather than carrying all burdens inward alone.",
    commonMoments: [
      "At night before rest",
      "When carrying worries that cannot be solved today",
      "When needing peace, surrender, or spiritual quiet",
      "During seasons of insomnia, anxiety, or reflection",
    ],
    exampleSituations: [
      "A person is lying down with a crowded mind and wants to place unfinished concerns before God instead of carrying them into sleep.",
      "Someone needs a prayerful close to the day marked by humility, trust, and release.",
      "A visitor wants help ending the night with reverence rather than noise, fear, or mental overactivity.",
    ],
    faqItems: [
      {
        question: "Why does night prayer matter so much for many people?",
        answer:
          "Because night often exposes worries, regrets, loneliness, and unresolved concerns. Prayer at that hour can become an act of trust and surrender.",
      },
      {
        question: "What spiritual mood often fits Isha?",
        answer:
          "Quietness, humility, release, inward honesty, dependence, and entrusting oneself to God before sleep.",
      },
      {
        question: "Is this page a substitute for formal religious learning?",
        answer:
          "No. It is a respectful devotional guide to the prayer type, not a replacement for formal religious education, scripture, or official practice.",
      },
    ],
    keyThemes: [
      "Night surrender",
      "Rest",
      "Trust",
      "Peace",
      "Entrusting burdens to God",
    ],
    relatedDirection:
      "Isha relates naturally to peace, letting go, reflection, and the desire to place unresolved matters before God before the day fully ends.",
    summary:
      "Isha prayer is a night-facing act of trust that helps the heart release burdens and settle into peace before rest.",
  },
];

export function getMuslimPrayerTypeBySlug(slug: string) {
  return MUSLIM_PRAYER_TYPES.find((item) => item.slug === slug);
}