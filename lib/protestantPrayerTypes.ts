// /lib/protestantPrayerTypes.ts

export type ProtestantPrayerFaqItem = {
  question: string;
  answer: string;
};

export type ProtestantPrayerType = {
  title: string;
  slug: string;
  shortDescription: string;
  intro: string;
  keyThemes: string[];
  commonMoments: string[];
  exampleSituations: string[];
  faqItems: ProtestantPrayerFaqItem[];
  relatedDirection: string;
  summary: string;
};

export const PROTESTANT_PRAYER_TYPES: ProtestantPrayerType[] = [
  {
    title: "Adoration Prayers",
    slug: "adoration-prayers",
    shortDescription:
      "Prayers centered on worship, reverence, awe, and the greatness of God.",
    intro:
      "Adoration prayers are prayers of worship. In Protestant life, they turn the heart toward the greatness, holiness, love, and majesty of God. Instead of beginning with requests, an adoration prayer begins with reverence.",
    keyThemes: [
      "God’s holiness",
      "God’s greatness",
      "Worship and reverence",
      "Wonder and awe",
      "Love for God",
      "Humility before God",
    ],
    commonMoments: [
      "When you want to focus on God rather than your own requests",
      "When you feel grateful, awed, or deeply moved in prayer",
      "When you want to begin prayer with worship and reverence",
      "When you need to re-center your heart on who God is",
      "When words of praise come more naturally than words of request",
    ],
    exampleSituations: [
      "A person may pray an adoration prayer at sunrise, during a quiet devotional time, after reading Scripture, after being struck by the beauty of creation, or during a season when they want to grow in worship rather than only in request-driven prayer.",
      "It can also be a healthy starting place for someone who feels overwhelmed. Adoration shifts attention from fear and pressure toward the steady character of God.",
    ],
    faqItems: [
      {
        question: "What is an adoration prayer?",
        answer:
          "An adoration prayer is a prayer of worship that focuses on who God is rather than on what we want God to do. It expresses reverence, awe, love, and honor toward God.",
      },
      {
        question: "Is adoration the same as praise?",
        answer:
          "They are closely related, but adoration usually leans more toward reverence, awe, and the holiness of God, while praise often emphasizes gratitude and celebration of what God has done.",
      },
      {
        question: "Do adoration prayers ask for anything?",
        answer:
          "Usually the main emphasis is not on asking. Adoration prayers are centered on worship. Still, many Christians begin with adoration before moving into confession, thanksgiving, or petition.",
      },
    ],
    relatedDirection:
      "Adoration prayers naturally connect with praise prayers and thanksgiving prayers.",
    summary:
      "Adoration prayers help believers stop, look up, and worship God for who He is.",
  },
  {
    title: "Confession Prayers",
    slug: "confession-prayers",
    shortDescription:
      "Prayers of repentance, honesty, grace, forgiveness, and spiritual renewal.",
    intro:
      "Confession prayers are prayers of honest repentance. In Protestant life, they help believers come before God truthfully, admit sin or failure, seek mercy, and receive the grace that restores and renews.",
    keyThemes: [
      "Honesty before God",
      "Repentance and humility",
      "Seeking forgiveness",
      "Spiritual renewal",
      "Grace and mercy",
      "Turning back to God",
    ],
    commonMoments: [
      "When you feel convicted about sin, failure, or wrong choices",
      "When you want to be honest with God about your heart",
      "When you need to ask for forgiveness and renewal",
      "When prayer has felt distant and you want to return with humility",
      "When you want to clear what is weighing on your conscience before God",
    ],
    exampleSituations: [
      "A person may pray a confession prayer after speaking harshly, acting selfishly, giving in to temptation, ignoring a needed act of love, or realizing they have grown spiritually dull or distant.",
      "Confession may also arise in quieter ways. Someone might not be carrying a dramatic failure, but simply sense that they need to come before God with honesty, humility, and a fresh willingness to be changed.",
    ],
    faqItems: [
      {
        question: "What is a confession prayer?",
        answer:
          "A confession prayer is a prayer in which a person honestly acknowledges sin, failure, brokenness, or spiritual drift before God and seeks His mercy, forgiveness, and renewal.",
      },
      {
        question: "Is confession prayer only about guilt?",
        answer:
          "No. While confession does involve honesty about sin and failure, it is also deeply connected to grace, cleansing, restored fellowship with God, and a renewed desire to walk faithfully.",
      },
      {
        question: "Do Protestants practice confession prayers regularly?",
        answer:
          "Yes. In Protestant life, confession may appear in personal prayer, church worship, devotional reflection, or moments of private repentance. It is a normal part of sincere Christian prayer.",
      },
    ],
    relatedDirection:
      "Confession prayers naturally connect with petitionary prayers, guidance prayers, lament prayers, and thanksgiving prayers, especially when repentance leads into renewed trust and gratitude.",
    summary:
      "Confession prayers help believers come clean before God with truth, humility, mercy, and hope.",
  },
  {
    title: "Thanksgiving Prayers",
    slug: "thanksgiving-prayers",
    shortDescription:
      "Prayers that express gratitude for God’s goodness, provision, mercy, and care.",
    intro:
      "Thanksgiving prayers are prayers of gratitude. In Protestant life, they help believers recognize God’s goodness, remember His faithfulness, and respond with joy rather than spiritual forgetfulness.",
    keyThemes: [
      "Gratitude",
      "Remembering God’s goodness",
      "Provision and care",
      "Joy",
      "Mercy received",
      "Daily blessings",
    ],
    commonMoments: [
      "When a prayer has been answered",
      "After a good day, safe trip, or meaningful moment",
      "When you want to thank God for ordinary daily mercies",
      "When gratitude needs words",
      "When you want to begin or end prayer with thankfulness",
    ],
    exampleSituations: [
      "Someone may pray a thanksgiving prayer after healing, provision, reconciliation, good news, or the simple kindness of an ordinary peaceful day.",
      "These prayers also fit seasons of recovery, reflection, and growth, when a believer wants to remember that grace has been present all along.",
    ],
    faqItems: [
      {
        question: "What is a thanksgiving prayer?",
        answer:
          "A thanksgiving prayer is a prayer that expresses gratitude to God for His goodness, care, mercy, provision, and faithfulness.",
      },
      {
        question: "Does thanksgiving only belong in big moments?",
        answer:
          "No. Thanksgiving can arise from both major answers to prayer and small daily mercies that might otherwise be overlooked.",
      },
      {
        question: "Why are thanksgiving prayers important?",
        answer:
          "They help believers remember God’s goodness, strengthen trust, and cultivate a grateful heart.",
      },
    ],
    relatedDirection:
      "Thanksgiving prayers naturally connect with adoration prayers, praise prayers, and evening prayers.",
    summary:
      "Thanksgiving prayers help believers answer God’s goodness with gratitude and joy.",
  },
  {
    title: "Intercessory Prayers",
    slug: "intercessory-prayers",
    shortDescription:
      "Prayers offered on behalf of other people, families, communities, and needs.",
    intro:
      "Intercessory prayers are prayers for others. In Protestant life, they help believers carry family members, friends, neighbors, churches, and even strangers before God with compassion and hope.",
    keyThemes: [
      "Prayer for others",
      "Compassion",
      "Love of neighbor",
      "Burden-bearing",
      "Hope",
      "Faithful concern",
    ],
    commonMoments: [
      "When someone asks you to pray for them",
      "When a loved one is sick, grieving, or afraid",
      "When your church or community is in need",
      "When world events weigh heavily on your heart",
      "When you want your prayer life to include others more deeply",
    ],
    exampleSituations: [
      "A believer may offer intercessory prayer for a friend’s surgery, a family in crisis, a child making hard choices, a community after tragedy, or missionaries and ministries serving others.",
      "Intercessory prayer can also include public leaders, the lonely, the poor, the persecuted, and people whose names the believer may never know.",
    ],
    faqItems: [
      {
        question: "What is intercessory prayer?",
        answer:
          "Intercessory prayer is prayer offered on behalf of someone else, asking God to help, heal, guide, protect, comfort, or provide for them.",
      },
      {
        question: "Why is intercessory prayer important?",
        answer:
          "It reflects love of neighbor and reminds believers that prayer is not only about personal needs but also about carrying others before God.",
      },
      {
        question: "Does intercessory prayer need special wording?",
        answer:
          "No. It can be simple or detailed. The heart of intercession is faithful love, not polished language.",
      },
    ],
    relatedDirection:
      "Intercessory prayers naturally connect with healing prayers, protection prayers, and guidance prayers.",
    summary:
      "Intercessory prayers are the loving practice of bringing other people and their needs before God.",
  },
  {
    title: "Petitionary Prayers",
    slug: "petitionary-prayers",
    shortDescription:
      "Prayers that bring personal needs, requests, burdens, and hopes before God.",
    intro:
      "Petitionary prayers are prayers of asking. In Protestant life, they give believers permission to bring real needs before God honestly, humbly, and trustingly.",
    keyThemes: [
      "Honest asking",
      "Dependence on God",
      "Need and hope",
      "Trust",
      "Perseverance",
      "Personal burdens",
    ],
    commonMoments: [
      "When you need help, provision, or wisdom",
      "When the future feels uncertain",
      "When you are overwhelmed and need God’s help",
      "When you are facing a specific burden or request",
      "When you want to place your needs before God plainly",
    ],
    exampleSituations: [
      "Someone may pray a petitionary prayer for work, housing, healing, peace in the home, strength in suffering, or help making it through the day.",
      "Petitionary prayer also belongs in ordinary life, where believers ask God for patience, clarity, endurance, courage, and practical help.",
    ],
    faqItems: [
      {
        question: "What is a petitionary prayer?",
        answer:
          "A petitionary prayer is a prayer that asks God for help, provision, guidance, healing, strength, wisdom, or some other personal need.",
      },
      {
        question: "Is petitionary prayer selfish?",
        answer:
          "No. Bringing personal needs before God is a normal and faithful part of Protestant prayer life when done with humility and trust.",
      },
      {
        question: "How is petition different from intercession?",
        answer:
          "Petition usually focuses on one’s own needs, while intercession focuses on the needs of others.",
      },
    ],
    relatedDirection:
      "Petitionary prayers naturally connect with guidance prayers, healing prayers, and confession prayers.",
    summary:
      "Petitionary prayers help believers ask God honestly for what they need.",
  },
  {
    title: "Praise Prayers",
    slug: "praise-prayers",
    shortDescription:
      "Prayers that celebrate God’s character, faithfulness, power, and love.",
    intro:
      "Praise prayers rejoice in who God is and what He has done. In Protestant life, they often carry a tone of celebration, gratitude, and glad acknowledgment of God’s greatness.",
    keyThemes: [
      "Celebration of God",
      "Joy",
      "God’s faithfulness",
      "God’s power",
      "Gratitude",
      "Worship",
    ],
    commonMoments: [
      "When your heart feels joyful in God’s goodness",
      "When worship feels natural and overflowing",
      "After answered prayer or deliverance",
      "When you want to speak openly of God’s faithfulness",
      "When beginning prayer with joy and confidence",
    ],
    exampleSituations: [
      "A believer may offer a praise prayer during worship, after receiving good news, after a difficult season begins to lift, or when reflecting on God’s faithfulness over time.",
      "Praise can also rise in simple moments when the heart is moved by Scripture, music, beauty, or the memory of God’s care.",
    ],
    faqItems: [
      {
        question: "What is a praise prayer?",
        answer:
          "A praise prayer is a prayer that celebrates God’s character, works, goodness, power, and faithfulness with joy and gratitude.",
      },
      {
        question: "How is praise different from adoration?",
        answer:
          "Praise often emphasizes joyful celebration of what God has done, while adoration leans more toward reverence, awe, and worship of who God is.",
      },
      {
        question: "Can praise be quiet as well as expressive?",
        answer:
          "Yes. Praise may be exuberant or quiet, but in either case it acknowledges God with gladness and honor.",
      },
    ],
    relatedDirection:
      "Praise prayers naturally connect with adoration prayers, thanksgiving prayers, and morning prayers.",
    summary:
      "Praise prayers celebrate God’s goodness, faithfulness, and power with joy.",
  },
  {
    title: "Lament Prayers",
    slug: "lament-prayers",
    shortDescription:
      "Prayers of sorrow, grief, struggle, and faith offered in times of pain.",
    intro:
      "Lament prayers bring pain into the presence of God without pretending everything is fine. In Protestant life, lament gives believers words for sorrow, grief, confusion, and faithful protest.",
    keyThemes: [
      "Sorrow",
      "Grief",
      "Honesty in pain",
      "Faith under pressure",
      "Crying out to God",
      "Hope in darkness",
    ],
    commonMoments: [
      "When you are grieving loss or heartbreak",
      "When suffering feels heavy or prolonged",
      "When injustice, fear, or confusion press on the heart",
      "When you want to pray honestly in pain",
      "When faith feels strained but not abandoned",
    ],
    exampleSituations: [
      "A believer may pray a lament after death, betrayal, illness, violence, deep disappointment, or a season of unanswered questions.",
      "Lament is also fitting when a person feels spiritually exhausted and needs a truthful way to cry out without losing hold of God.",
    ],
    faqItems: [
      {
        question: "What is a lament prayer?",
        answer:
          "A lament prayer is a prayer of grief, sorrow, complaint, and honest struggle brought before God in faith.",
      },
      {
        question: "Is lament a lack of faith?",
        answer:
          "No. Lament is often an act of faith because it brings pain to God instead of turning away from Him.",
      },
      {
        question: "Why are lament prayers important?",
        answer:
          "They give believers permission to be truthful in suffering while still reaching toward God with hope.",
      },
    ],
    relatedDirection:
      "Lament prayers naturally connect with confession prayers, healing prayers, and evening prayers.",
    summary:
      "Lament prayers help believers speak honestly to God from within sorrow and pain.",
  },
  {
    title: "Morning Prayers",
    slug: "morning-prayers",
    shortDescription:
      "Prayers to begin the day with gratitude, direction, peace, and trust.",
    intro:
      "Morning prayers begin the day with God. In Protestant life, they often set the tone for gratitude, purpose, dependence, and peace before the day gathers speed.",
    keyThemes: [
      "Beginning the day with God",
      "Gratitude",
      "Direction",
      "Peace",
      "Trust",
      "Readiness",
    ],
    commonMoments: [
      "Right after waking",
      "Before work, school, or responsibilities begin",
      "When you want to start the day with calm and intention",
      "When a difficult day lies ahead",
      "When you want to offer the day to God early",
    ],
    exampleSituations: [
      "Someone may pray a morning prayer at bedside, with coffee, in the car before work, before caregiving begins, or before a difficult appointment.",
      "Morning prayer is especially helpful when a believer wants to resist starting the day in distraction, anxiety, or hurry.",
    ],
    faqItems: [
      {
        question: "What is a morning prayer?",
        answer:
          "A morning prayer is a prayer offered at the start of the day, often asking for guidance, peace, strength, wisdom, and a heart turned toward God.",
      },
      {
        question: "Do morning prayers need to be long?",
        answer:
          "No. A morning prayer can be very short and still be deeply meaningful when offered with sincerity and focus.",
      },
      {
        question: "Why are morning prayers helpful?",
        answer:
          "They help believers begin the day with intention, peace, and trust rather than rushing straight into pressure.",
      },
    ],
    relatedDirection:
      "Morning prayers naturally connect with praise prayers, guidance prayers, and thanksgiving prayers.",
    summary:
      "Morning prayers help believers begin the day with gratitude, direction, and trust in God.",
  },
  {
    title: "Evening Prayers",
    slug: "evening-prayers",
    shortDescription:
      "Prayers for reflection, release, peace, protection, and rest at day’s end.",
    intro:
      "Evening prayers are prayers that close the day with God. In Protestant life, they help believers reflect, give thanks, release burdens, and rest in God’s care as the day comes to an end.",
    keyThemes: [
      "Closing the day with God",
      "Reflection and gratitude",
      "Peace and rest",
      "Release of worry",
      "Trust through the night",
      "God’s steady presence",
    ],
    commonMoments: [
      "When you want to end the day with prayer and peace",
      "When your mind is still busy and you need help settling down",
      "When you want to reflect on the day before resting",
      "When you need to release worry, regret, or stress to God",
      "When you want to entrust the night and tomorrow to His care",
    ],
    exampleSituations: [
      "Someone may pray an evening prayer after a demanding day of work, after family stress, before sleep during a season of anxiety, after receiving difficult news, or simply as a peaceful daily habit that closes the day in trust.",
      "Evening prayers are also helpful on good days. A believer may use them to thank God for ordinary mercies, reflect on where grace appeared, and settle into rest without rushing past the meaning of the day.",
    ],
    faqItems: [
      {
        question: "What is an evening prayer?",
        answer:
          "An evening prayer is a prayer offered at the close of day. It often includes gratitude, reflection, confession, release of worry, and trust in God’s care through the night.",
      },
      {
        question: "Do evening prayers have to be formal?",
        answer:
          "No. In Protestant practice, evening prayers may be short and simple or longer and more reflective. They can be quiet, personal prayers that help a believer end the day in peace.",
      },
      {
        question: "Why are evening prayers helpful?",
        answer:
          "Evening prayers can calm the mind, help a person reflect honestly, and place unfinished concerns into God’s hands. They create a gentle rhythm of peace, trust, and rest at day’s end.",
      },
    ],
    relatedDirection:
      "Evening prayers naturally connect with thanksgiving prayers, confession prayers, protection prayers, and lament prayers.",
    summary:
      "Evening prayers help believers end the day with reflection, release, peace, and trust.",
  },
  {
    title: "Healing Prayers",
    slug: "healing-prayers",
    shortDescription:
      "Prayers for physical, emotional, mental, and spiritual healing and restoration.",
    intro:
      "Healing prayers bring wounded places before God. In Protestant life, they often hold together hope for healing, trust in God’s care, and honesty about weakness and pain.",
    keyThemes: [
      "Healing",
      "Restoration",
      "Hope",
      "Comfort",
      "God’s care in weakness",
      "Peace",
    ],
    commonMoments: [
      "When facing illness or recovery",
      "When emotional pain feels heavy",
      "When praying for someone who is suffering",
      "When long fatigue or weakness is wearing you down",
      "When you want to ask God for restoration in body, mind, or spirit",
    ],
    exampleSituations: [
      "A believer may pray a healing prayer before treatment, at bedside, after hard news, during recovery, or in the middle of long-term suffering.",
      "Healing prayers also fit emotional wounds, anxiety, grief, spiritual dryness, and situations where the person needs both strength and comfort.",
    ],
    faqItems: [
      {
        question: "What is a healing prayer?",
        answer:
          "A healing prayer is a prayer asking God for restoration, relief, comfort, peace, and healing in body, mind, heart, or spirit.",
      },
      {
        question: "Do healing prayers only ask for physical healing?",
        answer:
          "No. Healing prayers may include emotional, mental, relational, and spiritual healing as well as physical healing.",
      },
      {
        question: "Why do healing prayers matter?",
        answer:
          "They help believers bring suffering honestly before God and ask for mercy, help, comfort, and restoration.",
      },
    ],
    relatedDirection:
      "Healing prayers naturally connect with intercessory prayers, lament prayers, and protection prayers.",
    summary:
      "Healing prayers bring wounded places before God with hope, honesty, and trust.",
  },
  {
    title: "Guidance Prayers",
    slug: "guidance-prayers",
    shortDescription:
      "Prayers for wisdom, discernment, direction, and clarity in decision-making.",
    intro:
      "Guidance prayers seek God’s wisdom for the next step. In Protestant life, they often arise when the future is unclear and a believer wants direction rather than panic or guesswork.",
    keyThemes: [
      "Wisdom",
      "Discernment",
      "Direction",
      "Clarity",
      "Patience",
      "Trust in God’s leading",
    ],
    commonMoments: [
      "When facing a major decision",
      "When life feels uncertain or confusing",
      "When you need wisdom rather than speed",
      "When trying to choose between several paths",
      "When you want to ask God for the next right step",
    ],
    exampleSituations: [
      "A believer may pray for guidance during a job change, family decision, health choice, ministry opportunity, move, or difficult conversation.",
      "Guidance prayers also belong to ordinary life when someone wants wisdom for priorities, relationships, responsibilities, and daily decisions.",
    ],
    faqItems: [
      {
        question: "What is a guidance prayer?",
        answer:
          "A guidance prayer is a prayer asking God for wisdom, discernment, clarity, and direction in a decision or season of uncertainty.",
      },
      {
        question: "Does guidance always come quickly?",
        answer:
          "Not always. Guidance may come gradually through prayer, Scripture, counsel, peace, conviction, and time.",
      },
      {
        question: "Why are guidance prayers helpful?",
        answer:
          "They help believers slow down, seek God’s wisdom, and move forward with more trust and clarity.",
      },
    ],
    relatedDirection:
      "Guidance prayers naturally connect with petitionary prayers, morning prayers, and confession prayers.",
    summary:
      "Guidance prayers help believers seek wisdom and direction for the next faithful step.",
  },
  {
    title: "Protection Prayers",
    slug: "protection-prayers",
    shortDescription:
      "Prayers asking for safety, covering, strength, and God’s watchful care.",
    intro:
      "Protection prayers ask God for guarding, strength, and peace in the face of danger, fear, vulnerability, or uncertainty. In Protestant life, they express trust in God’s care without pretending life is risk-free.",
    keyThemes: [
      "Safety",
      "God’s covering",
      "Strength",
      "Trust",
      "Watchful care",
      "Peace under pressure",
    ],
    commonMoments: [
      "Before travel or a hard day",
      "When fear or danger feels close",
      "When praying for children or loved ones",
      "When asking God to guard the home or family",
      "When you need courage as well as safety",
    ],
    exampleSituations: [
      "A believer may pray a protection prayer before a night shift, during bad weather, before a difficult trip, over children leaving the house, or during a season of vulnerability and fear.",
      "Protection prayers can also include strength of mind and heart, not only outward safety, especially when the person is facing intimidation, anxiety, or uncertainty.",
    ],
    faqItems: [
      {
        question: "What is a protection prayer?",
        answer:
          "A protection prayer is a prayer asking God for safety, covering, strength, peace, and watchful care in the face of danger, fear, or uncertainty.",
      },
      {
        question: "Are protection prayers only for emergencies?",
        answer:
          "No. They may be prayed in emergencies, but they also fit ordinary concerns such as travel, family life, stressful work, and daily vulnerability.",
      },
      {
        question: "Why are protection prayers helpful?",
        answer:
          "They help believers entrust fear and vulnerability to God while asking for safety, steadiness, and courage.",
      },
    ],
    relatedDirection:
      "Protection prayers naturally connect with evening prayers, intercessory prayers, and healing prayers.",
    summary:
      "Protection prayers ask God for safety, strength, and peace in vulnerable moments.",
  },
];

export function getProtestantPrayerTypeBySlug(
  slug: string
): ProtestantPrayerType | undefined {
  return PROTESTANT_PRAYER_TYPES.find((item) => item.slug === slug);
}