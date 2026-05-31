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
  {
    tradition: "protestant",
    slug: "simeons-song-nunc-dimittis",
    label: "Simeon's Song / Nunc Dimittis",
    eyebrow: "Biblical Protestant Prayer",
    title: "Simeon's Song / Nunc Dimittis",
    intro:
      "Simeon's Song, also known as the Nunc Dimittis, is a biblical prayer from Luke 2 giving thanks for seeing God's salvation and light for the nations.",
    metadataTitle: "Simeon's Song / Nunc Dimittis | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Simeon's Song, also known as the Nunc Dimittis, from Luke 2:29-32, a biblical prayer of peace, fulfillment, salvation, and light for the nations.",
    canonical: "/prayer-types/protestant/prayers/simeons-song-nunc-dimittis",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Simeon%27s+Song+%2F+Nunc+Dimittis&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Simeon's Song appears in Luke 2 when Simeon sees the child Jesus in the temple. Having waited for the consolation of Israel, Simeon blesses God and speaks of peace, salvation, light, and glory.",
          "The Latin title Nunc Dimittis comes from the opening idea of departing in peace. The prayer is brief, but it holds deep trust that God's promise has been fulfilled.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Simeon's Song is often associated with peace, fulfillment, evening prayer, readiness, and confidence in God's salvation.",
          "It gives language for resting in God's promises and recognizing Christ as light for the Gentiles and glory for Israel.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Simeon's Song may be prayed word for word, read slowly as a prayer of peace, or used as a guide for thanking God for salvation, fulfilled promises, and light in times of waiting.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Luke 2:29-32 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "jesus-high-priestly-prayer",
    label: "Jesus' High Priestly Prayer",
    eyebrow: "Biblical Protestant Prayer",
    title: "Jesus' High Priestly Prayer",
    intro:
      "Jesus' High Priestly Prayer is the biblical prayer from John 17 in which Jesus prays for glorification, protection, sanctification, unity, and love among His followers.",
    metadataTitle: "Jesus' High Priestly Prayer | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Jesus' High Priestly Prayer from John 17, a biblical prayer for glorification, protection, sanctification, unity, love, and faithful witness.",
    canonical: "/prayer-types/protestant/prayers/jesus-high-priestly-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Jesus%27+High+Priestly+Prayer&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Jesus' High Priestly Prayer appears in John 17 near the close of Jesus' farewell words to His disciples. Jesus lifts His eyes to heaven and prays to the Father before the events of His betrayal and crucifixion unfold.",
          "The prayer includes Jesus' petitions concerning His glory, His disciples, their protection from evil, their sanctification in truth, and the unity of all who will believe through their witness.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Jesus' High Priestly Prayer is treasured because it shows Jesus praying for His people with love, purpose, and intercession.",
          "It gives language for praying about holiness, mission, unity, protection, truth, love, and faithful witness in the world.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Jesus' High Priestly Prayer may be read word for word, prayed slowly in sections, or used as a guide for interceding for disciples, churches, families, and believers throughout the world.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of John 17 for this Protestant prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "solomons-prayer-of-dedication",
    label: "Solomon's Prayer of Dedication",
    eyebrow: "Biblical Protestant Prayer",
    title: "Solomon's Prayer of Dedication",
    intro:
      "Solomon's Prayer of Dedication is a biblical prayer from 1 Kings 8 asking God to hear, forgive, guide, and show mercy to His people.",
    metadataTitle: "Solomon's Prayer of Dedication | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Solomon's Prayer of Dedication from 1 Kings 8, a biblical prayer for God's presence, mercy, forgiveness, justice, and faithfulness.",
    canonical: "/prayer-types/protestant/prayers/solomons-prayer-of-dedication",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=protestant&mode=classic&prayerLabel=Solomon%27s+Prayer+of+Dedication&prayerKind=named",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Solomon's Prayer of Dedication appears in 1 Kings 8 during the dedication of the temple in Jerusalem. Solomon stands before the altar of the LORD and prays in the presence of the congregation of Israel.",
          "The prayer praises God's covenant faithfulness, asks that His eyes be open toward the temple, and repeatedly asks God to hear from heaven, forgive, and act with mercy.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant prayer life, Solomon's Prayer of Dedication is remembered as a model of reverence, confession, intercession, and trust in God's mercy.",
          "It gives language for dedicating sacred work to God while acknowledging that no building, ministry, or human effort can contain Him.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Solomon's Prayer may be read word for word, prayed in sections, or used as a guide when dedicating a church, ministry, household, project, or season of service to God.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of 1 Kings 8:22-53 for this Protestant prayer path. A parallel temple dedication prayer also appears in 2 Chronicles 6, and other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "nicene-creed",
    label: "Nicene Creed",
    eyebrow: "Foundational Protestant Prayer",
    title: "Nicene Creed",
    intro:
      "The Nicene Creed is a historic Christian confession of faith received across many branches of Christianity. Many Protestant traditions use it in worship, teaching, discipleship, and doctrinal formation.",
    metadataTitle: "Nicene Creed | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about the Nicene Creed in Protestant Christian practice, its historical role, and why PWG is reviewing exact wording before displaying the traditional text.",
    canonical: "/prayer-types/protestant/prayers/nicene-creed",
    primaryActionLabel: "Start a Protestant Prayer",
    primaryActionHref: "/pray?path=protestant",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "Historical setting",
        paragraphs: [
          "The Nicene Creed is one of the most widely recognized statements of Christian faith. It is historically connected with the early church councils of Nicaea and Constantinople and has been used for centuries to summarize core Christian belief.",
          "Its themes include faith in God the Father, Jesus Christ the Son, the Holy Spirit, the church, baptism, resurrection, and the life of the world to come.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant prayer",
        paragraphs: [
          "In Protestant life, the Nicene Creed is often used as a confession of faith in worship and teaching. It helps believers speak shared Christian belief clearly and reverently.",
          "Although it is more of a creed than a personal petition, it can still shape prayer by turning the heart toward worship, trust, doctrine, and the mystery of God's saving work.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be used devotionally",
        paragraphs: [
          "The Nicene Creed may be reflected on line by line, studied as a summary of Christian belief, or used as a prompt for worship and thanksgiving. PWG currently presents this page as educational background while exact traditional wording remains under review.",
        ],
      },
      {
        tone: "amber",
        heading: "Wording review note",
        paragraphs: [
          "PWG is reviewing the exact wording and source status for traditional versions of the Nicene Creed before making any full copyable text available. Until that review is complete, this page provides educational context rather than a verbatim creed text.",
        ],
      },
    ],
  },
  {
    tradition: "protestant",
    slug: "prayer-of-st-francis",
    label: "Prayer of St. Francis",
    eyebrow: "Christian Prayer ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â Source Review Pending",
    title: "Prayer of St. Francis",
    intro:
      "The Prayer of St. Francis is a widely loved Christian prayer associated with peace, humility, love, forgiveness, and service. PWG is reviewing its source and wording status before displaying a copyable version.",
    metadataTitle: "Prayer of St. Francis | Protestant Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about the Prayer of St. Francis, its devotional themes of peace, humility, love, forgiveness, and service, and why PWG is reviewing exact wording before displaying the full text.",
    canonical: "/prayer-types/protestant/prayers/prayer-of-st-francis",
    primaryActionLabel: "Start a Protestant Prayer",
    primaryActionHref: "/pray?path=protestant",
    backLabel: "Back to Protestant Prayers",
    backHref: "/prayer-types/protestant",
    sections: [
      {
        tone: "sky",
        heading: "What is the Prayer of St. Francis?",
        paragraphs: [
          "The Prayer of St. Francis, sometimes called the Peace Prayer, is a beloved Christian prayer connected with themes of peace, humility, forgiveness, love, consolation, understanding, and self-giving service.",
          "Although it is commonly associated with St. Francis of Assisi, source history indicates that the prayer in its familiar form is much later than Francis himself.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Protestant life",
        paragraphs: [
          "In Protestant settings, the Prayer of St. Francis is often appreciated devotionally for its call to be an instrument of peace and reconciliation.",
          "Even when not used liturgically, its themes can help shape prayers for humility, forgiveness, mercy, service, and love toward neighbors.",
        ],
      },
      {
        tone: "slate",
        heading: "How PWG treats this text",
        paragraphs: [
          "Because the Prayer of St. Francis is not a King James Version biblical passage and its familiar English wording has a separate publication history, PWG is keeping the exact wording under source and permissions review before displaying a copyable version.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "The Prayer of St. Francis is commonly associated with St. Francis of Assisi, but it is generally treated by modern source research as a later prayer, with the current form traced to early twentieth-century France. PWG is presenting educational context here while source, wording, and permission status are reviewed.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "psalm-23",
    label: "Psalm 23",
    eyebrow: "Biblical Catholic Prayer",
    title: "Psalm 23",
    intro:
      "Psalm 23 is one of the most beloved biblical prayers of trust, comfort, and confidence in God's shepherding care.",
    metadataTitle: "Psalm 23 | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Psalm 23 as a biblical prayer of trust, comfort, guidance, and God's shepherding care in Catholic prayer life.",
    canonical: "/prayer-types/catholic/prayers/psalm-23",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Psalm+23&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic life, Psalm 23 is often prayed, sung, or read in times of fear, grief, illness, uncertainty, or deep need for reassurance.",
          "The psalm is also treasured in pastoral care, funerals, hospital visits, family prayer, private devotion, and moments when a person needs to rest in God's care.",
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
          "PWG currently provides the King James Version wording of Psalm 23 for this Catholic prayer path. Other modern Bible translations may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "psalm-51",
    label: "Psalm 51",
    eyebrow: "Biblical Catholic Prayer",
    title: "Psalm 51",
    intro:
      "Psalm 51 is a biblical prayer of confession, repentance, cleansing, and renewed devotion to God.",
    metadataTitle: "Psalm 51 | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Psalm 51 as a biblical prayer of confession, mercy, cleansing, restoration, and renewed devotion in Catholic prayer life.",
    canonical: "/prayer-types/catholic/prayers/psalm-51",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Psalm+51&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Psalm 51 is often prayed as a penitential psalm, especially in seasons and moments of repentance, examination of conscience, and return to God's mercy.",
          "It helps give words to contrition without despair, trusting that God can cleanse, restore joy, and renew the heart.",
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
          "PWG currently provides the King James Version wording of Psalm 51 for this Catholic prayer path. Other modern Bible translations and official liturgical versions may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "psalm-90-prayer-of-moses",
    label: "Psalm 90 / Prayer of Moses",
    eyebrow: "Biblical Catholic Prayer",
    title: "Psalm 90 / Prayer of Moses",
    intro:
      "Psalm 90 is a biblical prayer of Moses that reflects on God's eternity, human frailty, wisdom, mercy, and the lasting work of God's hands.",
    metadataTitle: "Psalm 90 / Prayer of Moses | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Psalm 90 as the Prayer of Moses, a biblical prayer of God's eternity, human frailty, wisdom, mercy, and lasting work in Catholic prayer life.",
    canonical: "/prayer-types/catholic/prayers/psalm-90-prayer-of-moses",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Psalm+90+%2F+Prayer+of+Moses&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Psalm 90 can be used for reflection, repentance, wisdom, grief, aging, legacy, and renewed dependence on God.",
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
          "PWG currently provides the King James Version wording of Psalm 90 for this Catholic prayer path. Other modern Bible translations and official liturgical versions may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "lords-prayer",
    label: "The Lord's Prayer",
    eyebrow: "Biblical Catholic Prayer",
    title: "The Lord's Prayer",
    intro:
      "The Lord's Prayer is the prayer Jesus taught His disciples and is central to Christian prayer. PWG currently offers the King James Version wording as a shared biblical text rather than official Catholic liturgical wording.",
    metadataTitle: "The Lord's Prayer | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about The Lord's Prayer as a biblical prayer taught by Jesus and treasured in Catholic prayer life, with KJV wording provided as a shared biblical text.",
    canonical: "/prayer-types/catholic/prayers/lords-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=The+Lord%27s+Prayer&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "The Lord's Prayer is taught by Jesus in the Gospels and has become one of the central prayers of Christian life.",
          "Its petitions turn the heart toward God's name, kingdom, will, daily provision, forgiveness, mercy, and deliverance from evil.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic life, the Lord's Prayer is prayed in the Mass, in the Rosary, in personal devotion, and in many moments of family and communal prayer.",
          "PWG presents this page as a biblical prayer path using KJV wording, while recognizing that official Catholic liturgical wording and modern translations may have separate source and permission considerations.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "The Lord's Prayer may be prayed word for word, reflected on line by line, or used as a pattern for personal prayer: adoration, surrender, daily dependence, forgiveness, and trust in God's protection.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides King James Version wording for this Catholic prayer path as a shared biblical Christian text. This is not presented as official Catholic liturgical wording, and other modern Bible translations or official liturgical forms may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "prayer-of-jabez",
    label: "The Prayer of Jabez",
    eyebrow: "Biblical Catholic Prayer",
    title: "The Prayer of Jabez",
    intro:
      "The Prayer of Jabez is a short biblical prayer from 1 Chronicles 4:10. It asks God for blessing, enlarged territory, His hand of help, and protection from evil.",
    metadataTitle: "The Prayer of Jabez | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about The Prayer of Jabez from 1 Chronicles 4:10, its biblical setting, devotional meaning, and use as a Catholic biblical prayer.",
    canonical: "/prayer-types/catholic/prayers/prayer-of-jabez",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=The+Prayer+of+Jabez&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, the Prayer of Jabez may be received as a brief biblical prayer of dependence, trust, calling, and protection.",
          "PWG presents it as a biblical prayer, not as a formula or guarantee. Its themes can help a person ask humbly for God's blessing, guidance, presence, and protection.",
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
          "PWG currently provides the King James Version wording of 1 Chronicles 4:10 for this Catholic prayer path. Other modern Bible translations and official Catholic biblical or liturgical texts may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "hannahs-prayer",
    label: "Hannah's Prayer",
    eyebrow: "Biblical Catholic Prayer",
    title: "Hannah's Prayer",
    intro:
      "Hannah's Prayer is a biblical prayer of praise from 1 Samuel 2 that celebrates God's holiness, strength, justice, and care for the humble.",
    metadataTitle: "Hannah's Prayer | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Hannah's Prayer from 1 Samuel 2, a biblical prayer of praise, gratitude, reversal, humility, and trust in God's justice and strength.",
    canonical: "/prayer-types/catholic/prayers/hannahs-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Hannah%27s+Prayer&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Hannah's Prayer may be received as a biblical song of gratitude, surrendered trust, and praise after suffering.",
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
          "PWG currently provides the King James Version wording of Hannah's Prayer from 1 Samuel 2:1-10 for this Catholic prayer path. Other modern Bible translations and official Catholic biblical or liturgical texts may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "jonahs-prayer",
    label: "Jonah's Prayer",
    eyebrow: "Biblical Catholic Prayer",
    title: "Jonah's Prayer",
    intro:
      "Jonah's Prayer is a biblical prayer from Jonah 2, spoken from distress and remembered as a prayer of repentance, deliverance, thanksgiving, and renewed obedience to God.",
    metadataTitle: "Jonah's Prayer | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Jonah's Prayer from Jonah 2, a biblical prayer of distress, repentance, deliverance, thanksgiving, and renewed trust in God's mercy.",
    canonical: "/prayer-types/catholic/prayers/jonahs-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Jonah%27s+Prayer&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Jonah's Prayer may be received as a biblical prayer for moments of distress, repentance, rescue, and returning to God's will.",
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
          "PWG currently provides the King James Version wording of Jonah's Prayer from Jonah 2 for this Catholic prayer path. Other modern Bible translations and official Catholic biblical or liturgical texts may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "daniels-prayer",
    label: "Daniel's Prayer",
    eyebrow: "Biblical Catholic Prayer",
    title: "Daniel's Prayer",
    intro:
      "Daniel's Prayer is a biblical prayer of confession, repentance, intercession, and appeal for God's mercy from Daniel 9.",
    metadataTitle: "Daniel's Prayer | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Daniel's Prayer from Daniel 9, a biblical prayer of confession, repentance, intercession, covenant mercy, and hope in God's restoration.",
    canonical: "/prayer-types/catholic/prayers/daniels-prayer",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Daniel%27s+Prayer&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Daniel's Prayer may be received as a biblical model of humble confession, intercession, repentance, and appeal to God's mercy.",
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
          "PWG currently provides the King James Version wording of Daniel 9:4-19 for this Catholic prayer path. Other modern Bible translations and official Catholic biblical or liturgical texts may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "marys-magnificat",
    label: "Mary's Magnificat",
    eyebrow: "Biblical Catholic Prayer",
    title: "Mary's Magnificat",
    intro:
      "Mary's Magnificat is a biblical song of praise from Luke 1, rejoicing in God's mercy, holiness, faithfulness, and care for the lowly.",
    metadataTitle: "Mary's Magnificat | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Mary's Magnificat from Luke 1, a biblical prayer of praise, mercy, humility, reversal, and God's covenant faithfulness.",
    canonical: "/prayer-types/catholic/prayers/marys-magnificat",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Mary%27s+Magnificat&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
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
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Mary's Magnificat is treasured as a biblical canticle of worship, humility, hope, and trust in God's saving work.",
          "It gives language for praising God through Mary's words, remembering His mercy across generations and His care for the humble and hungry.",
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
          "PWG currently provides the King James Version wording of Luke 1:46-55 for this Catholic prayer path. Other modern Bible translations and official Catholic biblical or liturgical texts may have separate copyright or permission considerations.",
        ],
      },
    ],
  },
  {
    tradition: "catholic",
    slug: "simeons-song-nunc-dimittis",
    label: "Simeon's Song / Nunc Dimittis",
    eyebrow: "Biblical Catholic Prayer",
    title: "Simeon's Song / Nunc Dimittis",
    intro:
      "Simeon's Song, also known as the Nunc Dimittis, is a biblical prayer from Luke 2 giving thanks for seeing God's salvation and light for the nations.",
    metadataTitle: "Simeon's Song / Nunc Dimittis | Catholic Prayers | PrayWithGod.ai",
    metadataDescription:
      "Learn about Simeon's Song, also known as the Nunc Dimittis, from Luke 2:29-32, a biblical prayer of peace, fulfillment, salvation, and light for the nations.",
    canonical: "/prayer-types/catholic/prayers/simeons-song-nunc-dimittis",
    primaryActionLabel: "Read / pray this prayer",
    primaryActionHref:
      "/pray?path=catholic&mode=classic&prayerLabel=Simeon%27s+Song+%2F+Nunc+Dimittis&prayerKind=named",
    backLabel: "Back to Catholic Prayers",
    backHref: "/prayer-types/catholic",
    sections: [
      {
        tone: "sky",
        heading: "Biblical setting",
        paragraphs: [
          "Simeon's Song appears in Luke 2 when Simeon sees the child Jesus in the temple. Having waited for the consolation of Israel, Simeon blesses God and speaks of peace, salvation, light, and glory.",
          "The Latin title Nunc Dimittis comes from the opening idea of departing in peace. The prayer is brief, but it holds deep trust that God's promise has been fulfilled.",
        ],
      },
      {
        tone: "slate",
        heading: "Why it matters in Catholic prayer",
        paragraphs: [
          "In Catholic prayer life, Simeon's Song is treasured as a biblical canticle of peace, fulfillment, salvation, and trust in God's promises.",
          "It gives language for ending a day, a season, or a time of waiting with gratitude, surrender, and hope in God's saving light.",
        ],
      },
      {
        tone: "slate",
        heading: "How it may be prayed",
        paragraphs: [
          "Simeon's Song may be prayed word for word, read slowly as a prayer of peace, or used as a guide for entrusting one's life, waiting, and hope to God.",
        ],
      },
      {
        tone: "amber",
        heading: "Source note",
        paragraphs: [
          "PWG currently provides the King James Version wording of Luke 2:29-32 for this Catholic prayer path. Other modern Bible translations and official Catholic biblical or liturgical texts may have separate copyright or permission considerations.",
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