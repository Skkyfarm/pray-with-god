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