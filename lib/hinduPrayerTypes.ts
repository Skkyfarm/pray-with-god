// lib/hinduPrayerTypes.ts

export type HinduPrayerTypeFaq = {
  question: string;
  answer: string;
};

export type HinduPrayerType = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  commonMoments: string[];
  exampleSituations: string[];
  faqItems: HinduPrayerTypeFaq[];
  keyThemes: string[];
  relatedDirection: string;
  summary: string;
};

export const HINDU_PRAYER_TYPES: HinduPrayerType[] = [
  {
    slug: "shanti-path-peace-prayer",
    title: "Shanti Path (Peace Prayer)",
    shortDescription:
      "Shanti Path is a peace-oriented prayer direction associated with calm, harmony, blessing, and the settling of inner and outer disturbance.",
    intro:
      "This prayer type is often connected with peace, right relation, spiritual quiet, and the hope that agitation may give way to balance. It can feel fitting when a person longs for calm in the mind, peace in the home, gentleness in relationships, or a more centered spiritual atmosphere.",
    commonMoments: [
      "When seeking peace in mind, home, or relationships",
      "During tension, conflict, or emotional unrest",
      "At the beginning or end of a spiritual practice",
      "When wanting to restore inward balance and calm",
    ],
    exampleSituations: [
      "A person feels emotionally stirred up and wants to pray toward peace rather than reactivity.",
      "Someone senses stress in the home and wants a devotional direction shaped by harmony and blessing.",
      "A visitor wants prayer language that supports calm, centeredness, and inward quiet.",
    ],
    faqItems: [
      {
        question: "What is the central tone of a peace prayer in this Hindu lane?",
        answer:
          "Its central tone is calm, blessing, wholeness, harmony, and the desire for disturbance to give way to steadiness.",
      },
      {
        question: "When might this kind of prayer be especially meaningful?",
        answer:
          "It may be especially meaningful during conflict, anxiety, overstimulation, or whenever a person longs for peace within and around them.",
      },
      {
        question: "Is this page presenting a sacred text directly?",
        answer:
          "No. This page explains the prayer direction in respectful modern language. It is not presenting scripture, not translating scripture, and not claiming to be an official liturgical source.",
      },
    ],
    keyThemes: [
      "Peace",
      "Harmony",
      "Calm",
      "Balance",
      "Blessing",
    ],
    relatedDirection:
      "Shanti Path is closely related to prayerful themes of stillness, reconciliation, spiritual grounding, and the hope for peace to spread beyond the self.",
    summary:
      "Shanti Path (Peace Prayer) is a Hindu prayer direction centered on calm, harmony, blessing, and the restoration of balance.",
  },
  {
    slug: "gratitude-offering",
    title: "Gratitude / Offering",
    shortDescription:
      "Gratitude and offering prayer centers on thankfulness, reverence, and the desire to place one’s life, efforts, or blessings before God with humility.",
    intro:
      "This prayer direction emphasizes thankful recognition and devotional offering. It may arise when a person feels blessed, provided for, guided, or simply aware that life itself is not self-created. It can also reflect the desire to offer one’s work, food, intentions, or daily actions with sincerity and reverence.",
    commonMoments: [
      "When feeling thankful for help, provision, or protection",
      "Before or after meaningful work or daily nourishment",
      "When wanting to offer the fruits of one’s efforts",
      "During moments of humility, reverence, or devotion",
    ],
    exampleSituations: [
      "A person feels grateful for a turning point in life and wants to respond with reverence rather than entitlement.",
      "Someone wants to dedicate their work, food, or daily effort in a spirit of offering.",
      "A visitor wants prayer support shaped by thankfulness and devotional sincerity.",
    ],
    faqItems: [
      {
        question: "What makes gratitude and offering a distinct prayer lane?",
        answer:
          "It joins thankfulness with surrender. The person is not only appreciating blessings, but also offering something of the heart, life, or effort back in devotion.",
      },
      {
        question: "Does offering always mean a material offering?",
        answer:
          "Not necessarily. It may also mean offering gratitude, intention, work, discipline, or the inward posture of devotion.",
      },
      {
        question: "How can this page help someone new to Hindu prayer language?",
        answer:
          "It helps explain the devotional mood of gratitude and offering in simple, respectful language so a visitor understands the prayer direction more clearly.",
      },
    ],
    keyThemes: [
      "Thankfulness",
      "Offering",
      "Humility",
      "Reverence",
      "Devotional sincerity",
    ],
    relatedDirection:
      "This prayer type connects naturally with gratitude, consecration, dedication of effort, and the desire to hold blessings with humility rather than possession.",
    summary:
      "Gratitude / Offering is a Hindu prayer direction of thankful reverence, humble devotion, and dedicating life or effort before God.",
  },
  {
    slug: "bhakti-devotional",
    title: "Bhakti Devotional",
    shortDescription:
      "Bhakti Devotional prayer emphasizes loving devotion, closeness to the divine, and heartfelt relationship expressed through reverence and affection.",
    intro:
      "This prayer direction centers on devotion of the heart. It may carry warmth, love, trust, surrender, delight, longing, or faithfulness. Rather than feeling merely formal or conceptual, it often reflects a deeply personal desire to draw near to God in love and reverence.",
    commonMoments: [
      "When longing for closeness to God",
      "During worshipful or devotional practice",
      "When love, trust, and surrender feel central",
      "When wanting prayer shaped by relationship rather than only request",
    ],
    exampleSituations: [
      "A person feels moved toward loving devotion and wants prayer language shaped by reverence and heartfelt nearness.",
      "Someone is less focused on asking for things and more focused on offering love and faithfulness.",
      "A visitor wants a prayer direction marked by affection, devotion, and sacred intimacy.",
    ],
    faqItems: [
      {
        question: "What is the spiritual mood of bhakti prayer?",
        answer:
          "Its spiritual mood is often loving, reverent, relational, and deeply devotional, with the heart turned toward God in affection and trust.",
      },
      {
        question: "Is bhakti mainly emotional?",
        answer:
          "It can be deeply heartfelt, but it also includes loyalty, surrender, reverence, and enduring devotion, not emotion alone.",
      },
      {
        question: "Why might this be helpful on PWG?",
        answer:
          "Because some visitors are not looking mainly for help or answers. They are looking for a prayerful way to express love, devotion, and nearness to God.",
      },
    ],
    keyThemes: [
      "Devotion",
      "Love",
      "Nearness to God",
      "Trust",
      "Surrender",
    ],
    relatedDirection:
      "Bhakti devotion sits near themes of worship, affection, surrender, praise, and the joy of relating to God with the heart fully engaged.",
    summary:
      "Bhakti Devotional prayer is a Hindu lane of loving devotion, reverence, and heartfelt nearness to the divine.",
  },
  {
    slug: "sankalpa-intention-setting",
    title: "Sankalpa (Intention Setting)",
    shortDescription:
      "Sankalpa prayer focuses on intention, resolve, inner alignment, and setting the heart toward a meaningful spiritual or personal direction.",
    intro:
      "This prayer type is associated with inner resolve and conscious direction. It may be especially meaningful when a person wants to live with more purpose, discipline, clarity, or spiritual integrity. It is not simply goal-setting in a secular sense; it is closer to aligning intention with a deeper moral or spiritual path.",
    commonMoments: [
      "At the beginning of a new season, habit, or discipline",
      "When seeking inner clarity and direction",
      "During recommitment after drift or discouragement",
      "When wanting prayer shaped by purpose and alignment",
    ],
    exampleSituations: [
      "A person wants to stop drifting and set a spiritually grounded intention for how they will live.",
      "Someone is beginning a new practice, recovery effort, or disciplined season and wants prayerful resolve.",
      "A visitor wants help naming an intention that feels morally and spiritually anchored.",
    ],
    faqItems: [
      {
        question: "What makes sankalpa more than ordinary self-improvement?",
        answer:
          "Sankalpa points toward deeper alignment of the will, conscience, and spiritual direction, not just personal ambition or productivity.",
      },
      {
        question: "When is this kind of prayer especially fitting?",
        answer:
          "It is fitting when a person wants to begin again, commit to something meaningful, or place a deliberate intention before God.",
      },
      {
        question: "Can this prayer type be used during transition?",
        answer:
          "Yes. It is often especially helpful during turning points, new beginnings, or seasons that call for renewed direction.",
      },
    ],
    keyThemes: [
      "Intention",
      "Resolve",
      "Direction",
      "Discipline",
      "Alignment",
    ],
    relatedDirection:
      "Sankalpa relates to renewed purpose, commitment, self-ordering, and the desire to move forward with spiritual clarity and steadiness.",
    summary:
      "Sankalpa (Intention Setting) is a Hindu prayer direction centered on resolve, clarity, and aligning one’s life with meaningful spiritual purpose.",
  },
  {
    slug: "stuti-praise",
    title: "Stuti (Praise)",
    shortDescription:
      "Stuti is a praise-oriented prayer direction shaped by admiration, reverence, and joyful acknowledgment of divine greatness.",
    intro:
      "This prayer type focuses on praise rather than request. It may rise from awe, gratitude, reverence, devotion, or the simple desire to honor God without immediately asking for anything. It helps the heart look upward in wonder and respect.",
    commonMoments: [
      "When feeling awe, reverence, or admiration",
      "During worshipful reflection",
      "When wanting to honor God without centering personal need",
      "At moments of gratitude, wonder, or sacred joy",
    ],
    exampleSituations: [
      "A person feels moved by beauty, mercy, or divine greatness and wants to respond with praise.",
      "Someone wants prayer that is not mainly about problems, but about reverent acknowledgment.",
      "A visitor wants a devotional lane shaped by admiration, worship, and sacred joy.",
    ],
    faqItems: [
      {
        question: "What is distinctive about praise prayer?",
        answer:
          "Its focus is on honoring God’s greatness, beauty, goodness, or majesty rather than centering human need first.",
      },
      {
        question: "Does praise exclude gratitude?",
        answer:
          "No. Praise and gratitude often overlap, but praise places stronger emphasis on who God is rather than only on what has been received.",
      },
      {
        question: "Why is praise spiritually healthy?",
        answer:
          "Because it lifts attention beyond anxiety and self-concern, helping the heart respond in reverence, joy, and wonder.",
      },
    ],
    keyThemes: [
      "Praise",
      "Awe",
      "Reverence",
      "Joy",
      "Wonder",
    ],
    relatedDirection:
      "Stuti is closely tied to worship, admiration, glad reverence, and the desire to speak of divine greatness with honor and delight.",
    summary:
      "Stuti (Praise) is a Hindu prayer type centered on awe, reverence, and honoring divine greatness with joyful devotion.",
  },
  {
    slug: "prarthana-personal-request",
    title: "Prarthana (Personal Request)",
    shortDescription:
      "Prarthana is a personal-request prayer direction shaped by sincerity, dependence, need, and direct appeal before God.",
    intro:
      "This prayer type reflects the human impulse to ask, seek, and place real needs before God. It may involve help, guidance, protection, healing, mercy, wisdom, provision, or strength. It is often intimate and honest, especially when a person feels limited, vulnerable, or in need of support.",
    commonMoments: [
      "When asking for help, protection, or guidance",
      "During illness, uncertainty, or hardship",
      "When needing wisdom for a decision",
      "When wanting to speak openly to God about real needs",
    ],
    exampleSituations: [
      "A person feels overwhelmed and wants to ask for real help with humility and sincerity.",
      "Someone is facing a difficult choice and needs prayer shaped by guidance and dependence.",
      "A visitor wants language for need, trust, and direct spiritual appeal.",
    ],
    faqItems: [
      {
        question: "Is personal request prayer too self-focused?",
        answer:
          "Not necessarily. Honest request can be a humble act of dependence when it is offered with sincerity, reverence, and trust.",
      },
      {
        question: "What kinds of needs may fit this prayer lane?",
        answer:
          "Needs for guidance, peace, healing, protection, provision, clarity, forgiveness, strength, or help for loved ones may all fit here.",
      },
      {
        question: "What is the value of naming personal need in prayer?",
        answer:
          "Naming the need clearly helps the heart move from vague anxiety toward honest dependence and intentional spiritual seeking.",
      },
    ],
    keyThemes: [
      "Need",
      "Dependence",
      "Guidance",
      "Help",
      "Trust",
    ],
    relatedDirection:
      "Prarthana naturally connects with guidance, petition, humility, protection, and the courage to bring real human need before God.",
    summary:
      "Prarthana (Personal Request) is a Hindu prayer direction of sincere appeal, dependence, and bringing one’s real needs before God.",
  },
  {
    slug: "gayatri-sacred-mantra",
    title: "Gayatri / Sacred Mantra",
    shortDescription:
      "This prayer direction emphasizes sacred repetition, illumination, inward focus, and the desire for spiritual clarity and higher understanding.",
    intro:
      "This lane is associated with reflective, sacred, and contemplative prayerfulness. It may be especially meaningful when a person seeks light, wisdom, focus, purification of thought, or a more centered inner life. The emphasis is not mere repetition for its own sake, but reverent orientation toward spiritual illumination.",
    commonMoments: [
      "When seeking clarity, wisdom, or mental focus",
      "During contemplative or meditative practice",
      "When desiring spiritual illumination",
      "When wanting a prayer direction marked by inward discipline and sacred focus",
    ],
    exampleSituations: [
      "A person feels mentally scattered and longs for a prayerful lane of clarity and illumination.",
      "Someone wants to enter a more contemplative spiritual posture marked by sacred attention.",
      "A visitor seeks language around light, wisdom, focus, and inward purification.",
    ],
    faqItems: [
      {
        question: "What is the defining mood of this prayer type?",
        answer:
          "Its mood is often contemplative, reverent, focused, and oriented toward wisdom, illumination, and sacred inward attention.",
      },
      {
        question: "Why might this kind of page be useful?",
        answer:
          "It helps visitors understand the devotional direction of sacred-focus prayer without pretending to reproduce or replace formal sacred material.",
      },
      {
        question: "Does this page present a mantra itself?",
        answer:
          "No. It explains the prayer lane and spiritual direction in respectful language rather than presenting sacred text or imitating it.",
      },
    ],
    keyThemes: [
      "Illumination",
      "Wisdom",
      "Focus",
      "Clarity",
      "Contemplation",
    ],
    relatedDirection:
      "This prayer type is closely connected with inward stillness, disciplined attention, light, insight, and the desire for purified understanding.",
    summary:
      "Gayatri / Sacred Mantra is a Hindu prayer direction centered on illumination, contemplation, and spiritually focused inward clarity.",
  },
  {
    slug: "kshama-prarthana-forgiveness",
    title: "Kshama Prarthana (Forgiveness)",
    shortDescription:
      "Kshama Prarthana is a forgiveness-oriented prayer direction shaped by humility, repentance, release, and the desire for mercy and restoration.",
    intro:
      "This prayer type belongs to moments of moral honesty, regret, softening, and the need to seek forgiveness. It may involve sorrow over words, actions, neglect, pride, carelessness, or harm done. It can also include the desire to let go of bitterness and move toward restoration inwardly and relationally.",
    commonMoments: [
      "When aware of wrongdoing, pride, or regret",
      "During repentance, self-examination, or moral reflection",
      "When seeking mercy and inward cleansing",
      "When wanting to let go of resentment and move toward restoration",
    ],
    exampleSituations: [
      "A person feels convicted about how they have acted and wants to pray with humility instead of defensiveness.",
      "Someone wants a prayerful way to seek mercy and begin again after failure or carelessness.",
      "A visitor wants help entering a posture of forgiveness, honesty, and inward repair.",
    ],
    faqItems: [
      {
        question: "What is the core movement of forgiveness prayer?",
        answer:
          "Its core movement is from pride or burden toward humility, mercy, cleansing, and the hope of restoration.",
      },
      {
        question: "Is forgiveness prayer only about guilt?",
        answer:
          "No. It may also involve release, reconciliation, moral clarity, softening of the heart, and the willingness to begin again.",
      },
      {
        question: "Why is this prayer lane important?",
        answer:
          "Because spiritual life is not only about praise and peace. It also includes honesty, repentance, forgiveness, and repair when something has gone wrong.",
      },
    ],
    keyThemes: [
      "Forgiveness",
      "Humility",
      "Repentance",
      "Mercy",
      "Restoration",
    ],
    relatedDirection:
      "Kshama Prarthana is closely tied to remorse, mercy, moral clarity, cleansing, and the hope that forgiveness can lead to renewal.",
    summary:
      "Kshama Prarthana (Forgiveness) is a Hindu prayer type centered on humility, mercy, repentance, and restoration.",
  },
];

export function getHinduPrayerTypeBySlug(slug: string) {
  return HINDU_PRAYER_TYPES.find((item) => item.slug === slug);
}