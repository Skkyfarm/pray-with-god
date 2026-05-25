// /lib/namedPrayerDetails.ts

export type NamedPrayerTradition = "protestant" | "catholic";

export type NamedPrayerSectionTone = "sky" | "slate" | "amber";

export type NamedPrayerDetailSection = {
  heading: string;
  paragraphs: string[];
  tone?: NamedPrayerSectionTone;
};

export type NamedPrayerDetail = {
  tradition: NamedPrayerTradition;
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metadataTitle: string;
  metadataDescription: string;
  canonical: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  backLabel: string;
  backHref: string;
  sections: NamedPrayerDetailSection[];
};

function normalizeNamedPrayerDetailLabel(label: string) {
  return label.replace(/\u2018|\u2019/g, "'").trim();
}

export const NAMED_PRAYER_DETAILS: NamedPrayerDetail[] = [
  {
    tradition: "protestant",
    slug: "lords-prayer",
    label: "The Lord's Prayer",
    eyebrow: "Foundational Protestant Prayer",
    title: "The Lord's Prayer",
    intro:
      "The Lord's Prayer is one of the central prayers of Christian life. It is treasured across many Protestant traditions as both a prayer to be spoken and a pattern for learning how to pray.",
    metadataTitle: "The Lord's Prayer | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about The Lord's Prayer in Protestant Christian practice, its biblical roots, and how it is used in worship, discipleship, and personal devotion.",
    canonical: "/prayer-types/protestant/prayers/lords-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=The+Lord%27s+Prayer&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical roots",
        paragraphs: [
          "The Lord's Prayer comes from Jesus' teaching in the Gospels, especially in the Sermon on the Mount in Matthew and in a shorter form in Luke. Christians have long received it as a direct teaching from Jesus about prayer.",
          "Its movement is simple and profound: reverence for God, surrender to God's will, daily dependence, forgiveness, moral guidance, and deliverance from evil.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In many Protestant churches, The Lord's Prayer is prayed in worship, taught to children and new believers, used in catechism or discipleship, and remembered as a guide for personal prayer.",
          "Protestants often value it not only as a fixed prayer, but also as a model. Each line can shape a person's own prayers: honoring God, seeking His kingdom, asking for provision, confessing the need for forgiveness, and looking to God for protection.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Some people pray The Lord's Prayer word for word. Others pause over each phrase and use it as a doorway into personal prayer. In both cases, the prayer gives structure to the heart: worship first, then trust, need, mercy, and deliverance.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording for this Protestant prayer path. Other modern Bible translations and liturgical forms may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "apostles-creed",
    label: "Apostles' Creed",
    eyebrow: "Foundational Protestant Prayer",
    title: "Apostles' Creed",
    intro:
      "The Apostles' Creed is a historic Christian confession of faith. Many Protestant traditions use it in worship, teaching, discipleship, and confirmation as a concise summary of core Christian belief.",
    metadataTitle: "Apostles' Creed | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about the Apostles' Creed in Protestant Christian practice, its historical role, and why PWG is reviewing exact wording before displaying the traditional text.",
    canonical: "/prayer-types/protestant/prayers/apostles-creed",
    primaryActionLabel: "Start a Protestant Prayer",
    primaryActionHref: "/pray?path=protestant",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "What is the Apostles' Creed?",
        paragraphs: [
          "The Apostles' Creed is not a prayer from the Bible itself. It is a historic statement of Christian faith that summarizes central teachings about God the Father, Jesus Christ, the Holy Spirit, the church, forgiveness, resurrection, and eternal life.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant life",
        paragraphs: [
          "In Protestant settings, the Apostles' Creed may be spoken during worship, taught in catechism or confirmation, used in discipleship, or studied as a compact guide to historic Christian belief.",
          "Some Protestant churches recite it regularly. Others use it more occasionally as a teaching tool. In either case, it helps connect present-day believers with the broad stream of Christian faith handed down through the centuries.",
        ],
      },
      {
        tone: "slate",
        heading: "How PWG treats this text",
        paragraphs: [
          "Because the Apostles' Creed is a historical creed rather than a passage from the King James Version Bible, PWG is keeping its exact traditional wording under source and permission review before displaying a copyable version.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "This page explains the historical and devotional significance of the Apostles' Creed. PWG is not currently displaying the full traditional creed text here while wording, source, and permission status are reviewed.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "prayer-of-jabez",
    label: "The Prayer of Jabez",
    eyebrow: "Biblical Protestant Prayer",
    title: "The Prayer of Jabez",
    intro:
      "The Prayer of Jabez is a short biblical prayer from 1 Chronicles 4:10. It asks God for blessing, enlarged territory, His hand of help, and protection from evil.",
    metadataTitle: "The Prayer of Jabez | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about The Prayer of Jabez from 1 Chronicles 4:10, its biblical setting, devotional meaning, and use in Protestant prayer life.",
    canonical: "/prayer-types/protestant/prayers/prayer-of-jabez",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=The+Prayer+of+Jabez&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Jabez appears briefly in 1 Chronicles among the genealogies of Israel. His prayer stands out because the biblical text pauses to remember both his character and his request to God.",
          "The prayer is direct and compact. Jabez asks God to bless him, to enlarge his coast, to keep His hand with him, and to keep him from evil and grief.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant devotional life, the Prayer of Jabez is often used as a simple prayer of trust, calling, and dependence on God. It can be understood as asking not merely for comfort, but for God's help in living faithfully and fruitfully.",
          "Many believers have prayed it when seeking God's guidance, provision, protection, or a larger field of service. PWG presents it as a biblical prayer, not as a formula or guarantee.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "The Prayer of Jabez may be prayed word for word, reflected on line by line, or used as a starting point for personal prayer. Its themes include blessing, calling, God's presence, protection, and freedom from harm.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of 1 Chronicles 4:10 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "psalm-23",
    label: "Psalm 23",
    eyebrow: "Biblical Protestant Prayer",
    title: "Psalm 23",
    intro:
      "Psalm 23 is one of the most beloved biblical prayers of trust, comfort, and confidence in God's shepherding care.",
    metadataTitle: "Psalm 23 | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Psalm 23 as a biblical prayer of trust, comfort, guidance, and God's shepherding care in Protestant prayer life.",
    canonical: "/prayer-types/protestant/prayers/psalm-23",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Psalm+23&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Psalm 23 is traditionally associated with David and is one of the most recognized prayers in the Book of Psalms. It speaks of the LORD as shepherd, guide, provider, protector, and host.",
          "Its imagery moves from green pastures and still waters to the valley of the shadow of death, and finally to the goodness and mercy of God's presence.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant life, Psalm 23 is often prayed or read in times of fear, grief, illness, uncertainty, or deep need for reassurance. It gives language to trust when a person may not know what else to say.",
          "The psalm is also treasured in worship, pastoral care, funerals, hospital visits, family prayer, and private devotion because it holds comfort and courage together.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Psalm 23 may be prayed word for word, read slowly as a meditation, or used phrase by phrase as a guide for personal prayer. Its themes include trust, rest, restoration, courage, provision, and hope.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Psalm 23 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "psalm-51",
    label: "Psalm 51",
    eyebrow: "Biblical Protestant Prayer",
    title: "Psalm 51",
    intro:
      "Psalm 51 is a biblical prayer of confession, repentance, cleansing, and renewed devotion to God.",
    metadataTitle: "Psalm 51 | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Psalm 51 as a biblical prayer of confession, mercy, cleansing, restoration, and renewed devotion in Protestant prayer life.",
    canonical: "/prayer-types/protestant/prayers/psalm-51",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Psalm+51&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Psalm 51 is traditionally associated with David's repentance after his sin involving Bathsheba and Uriah. It gives voice to honest confession before God and a plea for mercy, cleansing, and renewal.",
          "The psalm moves from confession and forgiveness toward restoration, a clean heart, a steadfast spirit, and renewed praise.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Psalm 51 is often used as a prayer of repentance, humility, and spiritual renewal. It helps believers bring sin, failure, and guilt honestly before God while trusting in His mercy.",
          "The psalm is especially meaningful because it does not treat confession as despair. It points toward cleansing, restored joy, and a renewed willingness to walk faithfully with God.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Psalm 51 may be prayed word for word, read slowly as a confession, or used phrase by phrase as a guide for personal repentance and renewal. Its themes include mercy, cleansing, truth, restoration, joy, and a clean heart.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Psalm 51 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "psalm-90-prayer-of-moses",
    label: "Psalm 90 / Prayer of Moses",
    eyebrow: "Biblical Protestant Prayer",
    title: "Psalm 90 / Prayer of Moses",
    intro:
      "Psalm 90 is a biblical prayer of Moses that reflects on God's eternity, human frailty, wisdom, mercy, and the lasting work of God's hands.",
    metadataTitle: "Psalm 90 / Prayer of Moses | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Psalm 90 as the Prayer of Moses, a biblical prayer of God's eternity, human frailty, wisdom, mercy, and lasting work in Protestant prayer life.",
    canonical: "/prayer-types/protestant/prayers/psalm-90-prayer-of-moses",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Psalm+90+%2F+Prayer+of+Moses&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Psalm 90 is traditionally identified as a prayer of Moses. It stands as one of the most solemn and reflective prayers in the Book of Psalms, holding God's eternity beside the shortness and fragility of human life.",
          "The prayer asks God to teach His people to number their days, to satisfy them with mercy, and to establish the work of their hands.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Psalm 90 is often used for reflection, repentance, wisdom, grief, aging, legacy, and renewed dependence on God. It gives words for moments when life feels brief, fragile, or uncertain.",
          "The psalm does not end in despair. It turns toward God's mercy, gladness, beauty, and the hope that God can make faithful work endure.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Psalm 90 may be prayed word for word, read slowly as a meditation on time and eternity, or used as a guide for asking God for wisdom, mercy, joy, and lasting fruitfulness.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Psalm 90 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "hannahs-prayer",
    label: "Hannah's Prayer",
    eyebrow: "Biblical Protestant Prayer",
    title: "Hannah's Prayer",
    intro:
      "Hannah's Prayer is a biblical prayer of praise from 1 Samuel 2 that celebrates God's holiness, strength, justice, and care for the humble.",
    metadataTitle: "Hannah's Prayer | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Hannah's Prayer from 1 Samuel 2, a biblical prayer of praise, gratitude, reversal, humility, and trust in God's justice and strength.",
    canonical: "/prayer-types/protestant/prayers/hannahs-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Hannah%27s+Prayer&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Hannah's Prayer appears in 1 Samuel 2 after God answers Hannah's long season of grief and longing with the birth of Samuel.",
          "Her prayer is not only personal thanksgiving. It rises into praise of God's holiness, strength, justice, and power to lift the lowly.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Hannah's Prayer is often remembered as a model of gratitude, surrendered trust, and praise after suffering.",
          "It gives language for worshiping God as the One who sees the humble, reverses human pride, strengthens the weak, and acts with holy justice.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Hannah's Prayer may be prayed word for word, read as a song of thanksgiving, or used as a guide for praising God after a season of waiting, grief, answered prayer, or renewed hope.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Hannah's Prayer from 1 Samuel 2:1-10 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "jonahs-prayer",
    label: "Jonah's Prayer",
    eyebrow: "Biblical Protestant Prayer",
    title: "Jonah's Prayer",
    intro:
      "Jonah's Prayer is a biblical prayer from Jonah 2, spoken from distress and remembered as a prayer of repentance, deliverance, thanksgiving, and renewed obedience to God.",
    metadataTitle: "Jonah's Prayer | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Jonah's Prayer from Jonah 2, a biblical prayer of distress, repentance, deliverance, thanksgiving, and renewed trust in God's mercy.",
    canonical: "/prayer-types/protestant/prayers/jonahs-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Jonah%27s+Prayer&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Jonah's Prayer appears in Jonah 2 after Jonah has fled from God's call and finds himself in deep distress. From the belly of the fish, Jonah cries out to the LORD and remembers God's power to save.",
          "The prayer moves through danger, judgment, remembrance, thanksgiving, and surrender. It ends with the declaration that salvation belongs to the LORD.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Jonah's Prayer is often remembered as a prayer for moments of distress, repentance, rescue, and returning to God's will.",
          "It gives language for crying out when a person feels overwhelmed, far from where they should be, or in need of God's mercy and deliverance.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Jonah's Prayer may be prayed word for word, read slowly as a confession of dependence, or used as a guide for returning to God with honesty, gratitude, and renewed obedience.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Jonah's Prayer from Jonah 2 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "daniels-prayer",
    label: "Daniel's Prayer",
    eyebrow: "Biblical Protestant Prayer",
    title: "Daniel's Prayer",
    intro:
      "Daniel's Prayer is a biblical prayer of confession, repentance, intercession, and appeal for God's mercy from Daniel 9.",
    metadataTitle: "Daniel's Prayer | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Daniel's Prayer from Daniel 9, a biblical prayer of confession, repentance, intercession, covenant mercy, and hope in God's restoration.",
    canonical: "/prayer-types/protestant/prayers/daniels-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Daniel%27s+Prayer&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Daniel's Prayer appears in Daniel 9 as Daniel seeks the LORD with prayer, supplications, fasting, sackcloth, and ashes.",
          "The prayer confesses the sins of the people, acknowledges God's righteousness, remembers God's covenant mercy, and asks Him to hear, forgive, and restore.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Daniel's Prayer is often remembered as a model of humble confession, intercession, repentance, and appeal to God's mercy.",
          "It gives language for praying not only as an individual, but on behalf of a people, a church, a community, or a nation in need of God's forgiveness and restoration.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Daniel's Prayer may be prayed word for word, read slowly as a confession, or used as a guide for interceding with humility, honesty, and trust in God's covenant mercy.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Daniel 9:4-19 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "marys-magnificat",
    label: "Mary's Magnificat",
    eyebrow: "Biblical Protestant Prayer",
    title: "Mary's Magnificat",
    intro:
      "Mary's Magnificat is a biblical song of praise from Luke 1, rejoicing in God's mercy, holiness, faithfulness, and care for the lowly.",
    metadataTitle: "Mary's Magnificat | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Mary's Magnificat from Luke 1, a biblical prayer of praise, mercy, humility, reversal, and God's covenant faithfulness.",
    canonical: "/prayer-types/protestant/prayers/marys-magnificat",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Mary%27s+Magnificat&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Mary's Magnificat appears in Luke 1 after Mary visits Elisabeth. Mary responds with a song of praise that magnifies the Lord and rejoices in God her Saviour.",
          "The prayer celebrates God's mercy, holiness, strength, and faithfulness to His promises. It also speaks of God lifting the lowly, filling the hungry, and humbling the proud.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Mary's Magnificat is treasured as a biblical song of worship, humility, hope, and trust in God's saving work.",
          "It gives language for praising God when His mercy becomes personal, while also remembering that His faithfulness reaches across generations.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Mary's Magnificat may be prayed word for word, read slowly as a song of praise, or used as a guide for worshiping God for His mercy, holiness, justice, and faithfulness.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Luke 1:46-55 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
];

export function getNamedPrayerDetail(
  tradition: NamedPrayerTradition,
  slug: string,
) {
  return (
    NAMED_PRAYER_DETAILS.find(
      (entry) => entry.tradition === tradition && entry.slug === slug,
    ) || null
  );
}

export function getNamedPrayerDetailHref(
  tradition: NamedPrayerTradition,
  label: string,
) {
  const normalizedLabel = normalizeNamedPrayerDetailLabel(label);

  const entry = NAMED_PRAYER_DETAILS.find(
    (candidate) =>
      candidate.tradition === tradition &&
      normalizeNamedPrayerDetailLabel(candidate.label) === normalizedLabel,
  );

  return entry ? entry.canonical : null;
}