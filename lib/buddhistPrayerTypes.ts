// lib/buddhistPrayerTypes.ts

export type BuddhistPrayerTypeFaq = {
  question: string;
  answer: string;
};

export type BuddhistPrayerType = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  commonMoments: string[];
  exampleSituations: string[];
  faqItems: BuddhistPrayerTypeFaq[];
  keyThemes: string[];
  relatedDirection: string;
  summary: string;
};

export const BUDDHIST_PRAYER_TYPES: BuddhistPrayerType[] = [
  {
    slug: "metta-loving-kindness",
    title: "Metta (Loving Kindness)",
    shortDescription:
      "Metta is a loving-kindness prayer direction centered on goodwill, warmth, gentleness, and the sincere wish for well-being.",
    intro:
      "This prayer type is associated with cultivating benevolence toward oneself and others. It can be especially meaningful when the heart feels harsh, wounded, fearful, reactive, or closed. Rather than feeding resentment or numbness, metta turns the inner life toward kindness, patience, and the hope for good.",
    commonMoments: [
      "When wanting to soften anger, irritation, or emotional hardness",
      "When seeking compassion toward oneself or others",
      "During healing, reconciliation, or emotional recovery",
      "When wanting prayer shaped by goodwill and gentleness",
    ],
    exampleSituations: [
      "A person feels emotionally bruised and wants to pray from kindness rather than bitterness.",
      "Someone is struggling with resentment and wants a prayerful path toward goodwill and inner softening.",
      "A visitor wants a devotional lane marked by gentleness, warmth, and blessing.",
    ],
    faqItems: [
      {
        question: "What is the central movement of metta prayer?",
        answer:
          "Its central movement is from hardness, fear, or hostility toward goodwill, kindness, and a sincere wish for well-being.",
      },
      {
        question: "Can metta include oneself as well as others?",
        answer:
          "Yes. Loving-kindness may be directed inward as well as outward, especially when self-hatred, shame, or exhaustion need gentle healing.",
      },
      {
        question: "Is this page presenting a formal Buddhist liturgical text?",
        answer:
          "No. It is a respectful explanation of the prayer direction in clear modern language, not an official liturgical or scriptural text.",
      },
    ],
    keyThemes: [
      "Loving-kindness",
      "Goodwill",
      "Gentleness",
      "Blessing",
      "Softening of the heart",
    ],
    relatedDirection:
      "Metta is closely related to compassion, forgiveness, reconciliation, emotional healing, and the desire to move through life with benevolence rather than hostility.",
    summary:
      "Metta (Loving Kindness) is a Buddhist prayer direction centered on goodwill, gentleness, and sincere blessing toward self and others.",
  },
  {
    slug: "karuna-compassion",
    title: "Karuna (Compassion)",
    shortDescription:
      "Karuna is a compassion-centered prayer direction shaped by mercy, tenderness, and responsiveness to suffering.",
    intro:
      "This prayer type turns toward suffering with tenderness rather than avoidance. It may arise when a person is carrying grief, witnessing pain, feeling concern for another, or longing to respond to brokenness with mercy instead of indifference. Karuna is not merely pity; it is compassionate presence.",
    commonMoments: [
      "When carrying grief or sorrow",
      "When praying for someone who is suffering",
      "When wanting to respond to pain with mercy and tenderness",
      "During seasons of caregiving, loss, or emotional heaviness",
    ],
    exampleSituations: [
      "A person is grieving and wants prayer language shaped by tenderness rather than denial.",
      "Someone is burdened by another person’s suffering and wants a compassionate devotional lane.",
      "A visitor wants help praying in a spirit of mercy, care, and emotional honesty.",
    ],
    faqItems: [
      {
        question: "How is compassion prayer different from loving-kindness prayer?",
        answer:
          "Loving-kindness often emphasizes goodwill and blessing broadly, while compassion turns more directly toward suffering, pain, and the desire to respond mercifully.",
      },
      {
        question: "When is karuna especially helpful?",
        answer:
          "It is especially helpful when grief, suffering, loss, illness, or emotional heaviness are near at hand.",
      },
      {
        question: "Does compassion prayer require having answers?",
        answer:
          "No. It often begins simply by refusing indifference and choosing tenderness in the presence of suffering.",
      },
    ],
    keyThemes: [
      "Compassion",
      "Mercy",
      "Tenderness",
      "Presence with suffering",
      "Care",
    ],
    relatedDirection:
      "Karuna connects naturally with grief, caregiving, sorrow, mercy, tenderness, and the willingness to remain present to pain without turning away.",
    summary:
      "Karuna (Compassion) is a Buddhist prayer direction of mercy, tenderness, and compassionate presence in the face of suffering.",
  },
  {
    slug: "mindfulness-reflection",
    title: "Mindfulness Reflection",
    shortDescription:
      "Mindfulness Reflection is a prayer direction of attentive awareness, inward honesty, and present-moment steadiness.",
    intro:
      "This prayer type emphasizes clear awareness rather than emotional spiraling or mental drift. It may be especially meaningful when the mind feels scattered, anxious, overactive, or dulled. It encourages a prayerful return to attention, presence, and simple inward truthfulness.",
    commonMoments: [
      "When feeling mentally scattered or overstimulated",
      "During reflection, contemplation, or self-observation",
      "When wanting to become more present and less reactive",
      "When needing prayer shaped by awareness and steadiness",
    ],
    exampleSituations: [
      "A person feels pulled in ten directions and wants prayer that helps them become present again.",
      "Someone notices anxious or repetitive thinking and wants a more grounded inward posture.",
      "A visitor wants a prayer lane marked by awareness, calm observation, and honesty.",
    ],
    faqItems: [
      {
        question: "What is the purpose of mindfulness reflection in prayer?",
        answer:
          "Its purpose is to help a person become attentive, honest, grounded, and less driven by distraction or reactivity.",
      },
      {
        question: "Is mindfulness reflection emotionally flat?",
        answer:
          "No. It may be calm, but it still allows real feeling. It simply encourages awareness without being ruled by every impulse.",
      },
      {
        question: "Why is this prayer lane useful on PWG?",
        answer:
          "Because many people arrive mentally scattered and need a prayerful way to return to presence before deeper spiritual work can happen.",
      },
    ],
    keyThemes: [
      "Awareness",
      "Presence",
      "Attention",
      "Steadiness",
      "Clarity",
    ],
    relatedDirection:
      "Mindfulness Reflection is closely tied to calm observation, inward honesty, contemplative steadiness, and freedom from scattered mental drift.",
    summary:
      "Mindfulness Reflection is a Buddhist prayer direction of attentive presence, inward clarity, and grounded awareness.",
  },
  {
    slug: "equanimity-practice",
    title: "Equanimity Practice",
    shortDescription:
      "Equanimity Practice is a prayer direction centered on steadiness, balance, patience, and freedom from emotional overthrow.",
    intro:
      "This prayer type is often meaningful when life feels unstable, provoking, or emotionally charged. It does not mean coldness or indifference. Rather, it points toward balanced presence, non-reactivity, and a steadier way of meeting both joy and pain without being thrown off center.",
    commonMoments: [
      "When life feels unstable or emotionally turbulent",
      "When needing patience under pressure",
      "When wanting balance instead of overreaction",
      "During seasons of uncertainty, waiting, or stress",
    ],
    exampleSituations: [
      "A person feels constantly pulled up and down by events and wants prayer shaped by inner balance.",
      "Someone is under pressure and wants to respond steadily instead of reactively.",
      "A visitor wants a spiritual lane marked by patience, composure, and groundedness.",
    ],
    faqItems: [
      {
        question: "Does equanimity mean not caring?",
        answer:
          "No. Equanimity means caring without being ruled by emotional extremes. It is steadiness, not apathy.",
      },
      {
        question: "When is this prayer type especially useful?",
        answer:
          "It is useful when a person feels tossed around by stress, uncertainty, conflict, or emotional volatility.",
      },
      {
        question: "What does equanimity protect against?",
        answer:
          "It can protect against reactive spiraling, despair, impulsiveness, and being emotionally captured by every passing circumstance.",
      },
    ],
    keyThemes: [
      "Balance",
      "Patience",
      "Steadiness",
      "Non-reactivity",
      "Composure",
    ],
    relatedDirection:
      "Equanimity Practice sits near patience, groundedness, calm endurance, and the ability to remain inwardly stable amid changing conditions.",
    summary:
      "Equanimity Practice is a Buddhist prayer direction of balance, composure, and steady presence under changing conditions.",
  },
  {
    slug: "letting-go-release",
    title: "Letting Go / Release",
    shortDescription:
      "Letting Go / Release is a prayer direction focused on loosening fear, burden, attachment, resentment, or mental overgripping.",
    intro:
      "This prayer type becomes meaningful when a person feels clenched around something they cannot control or are no longer meant to carry in the same way. It may involve grief, attachment, fear, resentment, regret, or emotional strain. The movement is not toward denial, but toward loosening and release.",
    commonMoments: [
      "When carrying a burden too tightly",
      "When struggling with fear, resentment, or attachment",
      "During grief, endings, or major transitions",
      "When wanting prayer shaped by release and unclenching",
    ],
    exampleSituations: [
      "A person is holding onto something painful and wants prayer that helps them loosen their grip.",
      "Someone feels mentally trapped by resentment or fear and wants a path toward release.",
      "A visitor wants prayer language for surrender, unclenching, and peace.",
    ],
    faqItems: [
      {
        question: "Does letting go mean pretending the pain is gone?",
        answer:
          "No. It means loosening the grasp of what is controlling the heart or mind, even if the pain itself is still real.",
      },
      {
        question: "What kinds of burdens fit this prayer lane?",
        answer:
          "Fear, resentment, grief, regret, anxious control, attachment, and unresolved emotional overgripping may all fit here.",
      },
      {
        question: "Why is release spiritually important?",
        answer:
          "Because clinging can deepen suffering. Prayerful release creates room for peace, freedom, and a less burdened heart.",
      },
    ],
    keyThemes: [
      "Release",
      "Unclenching",
      "Surrender",
      "Freedom",
      "Peace",
    ],
    relatedDirection:
      "Letting Go / Release is closely connected with surrender, peace, grief work, forgiveness, and freedom from emotional overgripping.",
    summary:
      "Letting Go / Release is a Buddhist prayer direction of unclenching, surrender, and moving toward peace and freedom.",
  },
  {
    slug: "forgiveness-reflection",
    title: "Forgiveness Reflection",
    shortDescription:
      "Forgiveness Reflection is a prayer direction of honesty, softening, mercy, and the willingness to release bitterness and move toward repair.",
    intro:
      "This prayer type may arise when a person is wounded, remorseful, hardened, or stuck in blame. It creates space for humility, acknowledgment, and the difficult work of softening toward mercy and release. It does not erase justice or memory, but it loosens the grip of bitterness and defensiveness.",
    commonMoments: [
      "When struggling with resentment, bitterness, or blame",
      "When aware of one’s own failure or need for mercy",
      "During reconciliation, healing, or moral reflection",
      "When wanting prayer shaped by release and repair",
    ],
    exampleSituations: [
      "A person feels consumed by resentment and wants a prayerful way to soften without pretending nothing happened.",
      "Someone is conscious of their own wrongdoing and wants help entering humility and repair.",
      "A visitor wants a devotional lane marked by honesty, mercy, and release.",
    ],
    faqItems: [
      {
        question: "Does forgiveness reflection mean approving wrongdoing?",
        answer:
          "No. It means working toward release, mercy, and freedom from bitterness without pretending harm was good or acceptable.",
      },
      {
        question: "Can forgiveness reflection include oneself?",
        answer:
          "Yes. It may involve self-forgiveness, acknowledgment of failure, and a willingness to begin again with honesty.",
      },
      {
        question: "Why is forgiveness spiritually significant?",
        answer:
          "Because bitterness and self-condemnation can harden the heart. Forgiveness reflection opens space for mercy, humility, and repair.",
      },
    ],
    keyThemes: [
      "Forgiveness",
      "Mercy",
      "Softening",
      "Repair",
      "Release of bitterness",
    ],
    relatedDirection:
      "Forgiveness Reflection connects naturally with compassion, humility, healing, reconciliation, and the desire to be less ruled by blame or hardness.",
    summary:
      "Forgiveness Reflection is a Buddhist prayer direction of mercy, release, and the difficult work of softening toward repair.",
  },
  {
    slug: "dedication-of-merit",
    title: "Dedication of Merit",
    shortDescription:
      "Dedication of Merit is a prayer direction of offering, goodwill, and extending the fruits of practice beyond oneself toward others.",
    intro:
      "This prayer type emphasizes that spiritual practice need not end in the self. It turns outward in generosity, expressing the desire that whatever good has arisen may benefit others as well. It can carry humility, compassion, and the refusal to clutch spiritual effort as private possession.",
    commonMoments: [
      "At the close of prayer, reflection, or spiritual practice",
      "When wanting to direct blessing outward toward others",
      "During compassionate intercession or remembrance",
      "When seeking a less self-centered spiritual posture",
    ],
    exampleSituations: [
      "A person wants to end a devotional moment by extending its benefit toward others rather than keeping it inward only.",
      "Someone is praying with another person’s suffering in mind and wants the tone of generous offering.",
      "A visitor wants a prayer lane marked by humility, generosity, and shared blessing.",
    ],
    faqItems: [
      {
        question: "What is the inner movement of dedication of merit?",
        answer:
          "Its inner movement is outward: from private experience toward shared blessing, compassion, and offered benefit for others.",
      },
      {
        question: "Why is this prayer type meaningful?",
        answer:
          "Because it resists spiritual possessiveness and encourages generosity, humility, and an outward-facing heart.",
      },
      {
        question: "Can this page help non-specialists understand the practice respectfully?",
        answer:
          "Yes. It explains the devotional direction of the prayer type in accessible language while treating the tradition with care.",
      },
    ],
    keyThemes: [
      "Offering",
      "Generosity",
      "Shared blessing",
      "Humility",
      "Compassion for others",
    ],
    relatedDirection:
      "Dedication of Merit is closely tied to generosity, intercession, compassion, humility, and the desire that spiritual good extend beyond the self.",
    summary:
      "Dedication of Merit is a Buddhist prayer direction of offering, generosity, and extending spiritual good toward others.",
  },
  {
    slug: "refuge-protection",
    title: "Refuge / Protection",
    shortDescription:
      "Refuge / Protection is a prayer direction of shelter, steadiness, safety, trust, and turning toward what grounds and protects the heart.",
    intro:
      "This prayer type may become meaningful when a person feels afraid, vulnerable, unsteady, or spiritually exposed. It carries the tone of seeking shelter, direction, and grounded safety. The emphasis is not panic, but the honest recognition that the heart sometimes needs anchoring, protection, and refuge.",
    commonMoments: [
      "When feeling vulnerable, unsafe, or spiritually shaken",
      "During anxiety, fear, or instability",
      "When needing steadiness and grounding",
      "When wanting prayer shaped by shelter and trust",
    ],
    exampleSituations: [
      "A person feels inwardly unsteady and wants a prayerful sense of grounding and refuge.",
      "Someone is going through a fearful season and wants devotional language shaped by protection and steadiness.",
      "A visitor wants a prayer lane marked by safety, anchoring, and calm trust.",
    ],
    faqItems: [
      {
        question: "What does refuge mean in this prayer lane?",
        answer:
          "Refuge means turning toward what grounds, steadies, and shelters the heart rather than remaining lost in fear or instability.",
      },
      {
        question: "Is protection prayer only for crisis moments?",
        answer:
          "No. It may also be meaningful in quieter seasons when a person simply needs grounding, steadiness, or reassurance.",
      },
      {
        question: "Why is refuge spiritually important?",
        answer:
          "Because fear and instability can scatter the mind and heart. Refuge gathers them again toward safety, direction, and trust.",
      },
    ],
    keyThemes: [
      "Refuge",
      "Protection",
      "Safety",
      "Grounding",
      "Trust",
    ],
    relatedDirection:
      "Refuge / Protection is closely connected with safety, steadiness, trust, grounding, and the desire for inward shelter during vulnerable times.",
    summary:
      "Refuge / Protection is a Buddhist prayer direction of shelter, grounding, steadiness, and turning toward safety and trust.",
  },
];

export function getBuddhistPrayerTypeBySlug(slug: string) {
  return BUDDHIST_PRAYER_TYPES.find((item) => item.slug === slug);
}