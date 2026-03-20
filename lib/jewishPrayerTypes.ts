// lib/jewishPrayerTypes.ts

export type JewishPrayerFaqItem = {
  question: string;
  answer: string;
};

export type JewishPrayerType = {
  title: string;
  slug: string;
  shortDescription: string;
  intro: string;
  keyThemes: string[];
  commonMoments: string[];
  exampleSituations: string[];
  faqItems: JewishPrayerFaqItem[];
  relatedDirection: string;
  summary: string;
};

export const JEWISH_PRAYER_TYPES: JewishPrayerType[] = [
  {
    title: 'Shacharit',
    slug: 'shacharit',
    shortDescription:
      'Shacharit is the traditional Jewish morning prayer service, shaping the day with gratitude, praise, and attention to God.',
    intro:
      'In Jewish life, Shacharit is the morning prayer service. It helps begin the day with blessing, remembrance, and orientation toward God. It is not merely a mood-based prayer category but part of the daily rhythm of Jewish prayer.',
    keyThemes: [
      'Morning prayer',
      'Daily rhythm',
      'Blessing and gratitude',
      'Praise',
      'Covenantal remembrance',
      'Beginning the day with God',
    ],
    commonMoments: [
      'At the start of the day',
      'When entering a morning rhythm of prayer',
      'When seeking structure and reverence in Jewish prayer life',
      'When wanting to begin with blessing and remembrance',
      'When learning about the daily prayer pattern',
    ],
    exampleSituations: [
      'A Jewish person may encounter Shacharit in synagogue, at home, or while learning the daily rhythm of Jewish prayer and devotion.',
      'It is especially meaningful for people who want the morning to begin not in rush and distraction, but with blessing, focus, and covenantal memory.',
    ],
    faqItems: [
      {
        question: 'What is Shacharit?',
        answer:
          'Shacharit is the Jewish morning prayer service, traditionally prayed earlier in the day as part of the regular rhythm of Jewish worship.',
      },
      {
        question: 'Is Shacharit just a general morning prayer?',
        answer:
          'No. It is more specific than that. Shacharit is a recognized Jewish prayer service with a real place in Jewish liturgical life.',
      },
      {
        question: 'Why is Shacharit important?',
        answer:
          'It helps shape the day with blessing, praise, and covenantal awareness rather than beginning only in distraction or personal urgency.',
      },
    ],
    relatedDirection:
      'Shacharit naturally connects with Mincha and Maariv as part of the daily Jewish prayer rhythm.',
    summary:
      'Shacharit helps begin the day in Jewish prayer with blessing, praise, and reverent focus.',
  },
  {
    title: 'Mincha',
    slug: 'mincha',
    shortDescription:
      'Mincha is the traditional Jewish afternoon prayer service, creating a pause of attention, humility, and continuity in the middle of the day.',
    intro:
      'Mincha is the Jewish afternoon prayer service. In Jewish life, it acts as a faithful pause in the midst of work, duty, and distraction, returning attention to God during the day’s middle stretch.',
    keyThemes: [
      'Afternoon prayer',
      'Pause in the day',
      'Faithful consistency',
      'Continuity of worship',
      'Attention to God',
      'Humility',
    ],
    commonMoments: [
      'In the afternoon during the regular prayer rhythm',
      'When the day feels rushed and scattered',
      'When wanting to return attention to God mid-day',
      'When learning the pattern of daily Jewish prayer',
      'When seeking steadiness rather than only morning intention',
    ],
    exampleSituations: [
      'A Jewish person may pray Mincha during a workday, while traveling, in synagogue, or at another fitting point in the afternoon.',
      'It can be especially meaningful because it refuses to let the middle of the day become spiritually empty or forgotten.',
    ],
    faqItems: [
      {
        question: 'What is Mincha?',
        answer:
          'Mincha is the Jewish afternoon prayer service, traditionally prayed later in the day before evening.',
      },
      {
        question: 'Why is Mincha meaningful?',
        answer:
          'It creates a sacred pause in the middle of life’s responsibilities and helps carry prayer beyond the morning alone.',
      },
      {
        question: 'Is Mincha optional in spirit even if someone is learning?',
        answer:
          'For learners, it can still be understood as an important part of the daily rhythm, even before one fully adopts the practice in formal ways.',
      },
    ],
    relatedDirection:
      'Mincha naturally connects with Shacharit and Maariv as part of the daily prayer cycle.',
    summary:
      'Mincha brings Jewish prayer into the middle of the day with steadiness and reverence.',
  },
  {
    title: 'Maariv',
    slug: 'maariv',
    shortDescription:
      'Maariv is the traditional Jewish evening prayer service, closing the day with trust, reflection, and remembrance.',
    intro:
      'Maariv is the Jewish evening prayer service. It belongs to the close of day and helps place the night, the self, and the unfinished parts of life before God with trust and continuity.',
    keyThemes: [
      'Evening prayer',
      'Closing the day',
      'Trust in the night',
      'Reflection',
      'Remembrance',
      'Steady devotion',
    ],
    commonMoments: [
      'At the close of day',
      'When wanting to end the day in Jewish prayer',
      'When seeking peace and continuity before night',
      'When learning the rhythm of daily prayer services',
      'When wanting to entrust the evening to God',
    ],
    exampleSituations: [
      'A Jewish person may pray Maariv after work, after synagogue, at home, or as part of a regular evening routine.',
      'It can be especially grounding when the day has been heavy, unfinished, or emotionally noisy and the heart needs a faithful close.',
    ],
    faqItems: [
      {
        question: 'What is Maariv?',
        answer:
          'Maariv is the Jewish evening prayer service, traditionally prayed at night as part of the daily rhythm of Jewish worship.',
      },
      {
        question: 'Why is Maariv important?',
        answer:
          'It helps close the day with prayerful continuity, remembrance, and trust rather than ending the day spiritually scattered.',
      },
      {
        question: 'Does Maariv only matter in synagogue?',
        answer:
          'No. While synagogue life matters deeply, Maariv can also be understood as part of a broader Jewish rhythm of evening prayer and devotion.',
      },
    ],
    relatedDirection:
      'Maariv naturally connects with Shacharit and Mincha in the daily pattern of Jewish prayer.',
    summary:
      'Maariv closes the day with Jewish prayer, trust, and evening remembrance.',
  },
  {
    title: 'Hallel',
    slug: 'hallel',
    shortDescription:
      'Hallel is a Jewish prayer of praise and thanksgiving associated with joy, celebration, and God’s saving faithfulness.',
    intro:
      'Hallel is a form of Jewish praise connected to joy, thanksgiving, and remembrance of God’s faithfulness. It is especially associated with festive and celebratory moments rather than ordinary private mood-based prayer alone.',
    keyThemes: [
      'Praise',
      'Joy',
      'Thanksgiving',
      'Celebration',
      'God’s faithfulness',
      'Festive remembrance',
    ],
    commonMoments: [
      'During joyful or festive occasions',
      'When learning about Jewish praise and thanksgiving',
      'When wanting to understand how celebration appears in Jewish prayer',
      'When reflecting on God’s faithfulness',
      'When prayer takes on a grateful and celebratory tone',
    ],
    exampleSituations: [
      'A Jewish person may encounter Hallel in synagogue or in connection with sacred times marked by praise and celebration.',
      'It is especially meaningful when prayer rises not mainly from burden, but from gratitude, joy, and communal remembrance.',
    ],
    faqItems: [
      {
        question: 'What is Hallel?',
        answer:
          'Hallel refers to Jewish prayers of praise, especially associated with joy, thanksgiving, and festive remembrance of God’s faithfulness.',
      },
      {
        question: 'Is Hallel just any praise prayer?',
        answer:
          'Not exactly. Hallel has a specific place in Jewish religious life and is more than a generic mood of praise.',
      },
      {
        question: 'Why does Hallel matter?',
        answer:
          'It teaches that Jewish prayer is not only about need or sorrow but also about celebration, gratitude, and communal joy.',
      },
    ],
    relatedDirection:
      'Hallel naturally connects with Tehillim and other forms of praise, thanksgiving, and sacred remembrance.',
    summary:
      'Hallel is a Jewish path of praise and thanksgiving shaped by joy and remembrance.',
  },
  {
    title: 'Tehillim',
    slug: 'tehillim',
    shortDescription:
      'Tehillim refers to the Psalms as prayed, recited, and turned to in times of need, gratitude, grief, and hope.',
    intro:
      'In Jewish life, Tehillim often refers to the Psalms as a source of prayer, comfort, praise, lament, and hope. It is one of the most familiar and flexible ways many people enter prayer in times of both suffering and gratitude.',
    keyThemes: [
      'Psalms',
      'Comfort',
      'Hope',
      'Praise and lament',
      'Scriptural prayer',
      'Words for many seasons',
    ],
    commonMoments: [
      'In times of illness or crisis',
      'When words are hard to find',
      'When seeking comfort, strength, or hope',
      'When wanting scriptural language for prayer',
      'When turning to a familiar Jewish source of devotion',
    ],
    exampleSituations: [
      'A Jewish person may turn to Tehillim while praying for healing, comfort after loss, strength in hardship, or gratitude in moments of mercy.',
      'Tehillim is especially meaningful because it can hold joy, fear, grief, praise, and hope all within the same broad sacred tradition.',
    ],
    faqItems: [
      {
        question: 'What is Tehillim?',
        answer:
          'Tehillim refers to the Psalms, especially as they are used in Jewish prayer and devotion.',
      },
      {
        question: 'Why do people turn to Tehillim?',
        answer:
          'Because the Psalms give language for many human conditions, including fear, gratitude, grief, hope, and trust.',
      },
      {
        question: 'Is Tehillim only for crisis?',
        answer:
          'No. It may be especially common in hardship, but it also belongs to praise, gratitude, and ongoing spiritual life.',
      },
    ],
    relatedDirection:
      'Tehillim naturally connects with Hallel, Selichot, and other prayer forms that rely on memory, honesty, and sacred language.',
    summary:
      'Tehillim gives Jewish prayer language for sorrow, praise, need, gratitude, and hope.',
  },
  {
    title: 'Birkat Hamazon',
    slug: 'birkat-hamazon',
    shortDescription:
      'Birkat Hamazon is the Jewish prayer after meals, expressing gratitude for nourishment, sustenance, and God’s provision.',
    intro:
      'Birkat Hamazon is a Jewish prayer after eating, especially after bread, and reflects a life in which nourishment is received with blessing rather than taken for granted.',
    keyThemes: [
      'Blessing after meals',
      'Gratitude',
      'Sustenance',
      'Provision',
      'Sanctifying ordinary life',
      'Remembering dependence on God',
    ],
    commonMoments: [
      'After a shared meal',
      'When learning how Jewish prayer enters ordinary daily life',
      'When reflecting on gratitude for provision',
      'When wanting to honor nourishment with blessing',
      'When building table-centered spiritual habits',
    ],
    exampleSituations: [
      'A Jewish person may pray Birkat Hamazon after a family meal, a holiday meal, or ordinary daily eating, making gratitude part of the table rather than only private feeling.',
      'Its beauty lies in teaching that food, community, and provision are not merely practical but spiritually remembered.',
    ],
    faqItems: [
      {
        question: 'What is Birkat Hamazon?',
        answer:
          'Birkat Hamazon is the Jewish blessing after meals, traditionally recited after eating bread.',
      },
      {
        question: 'Why is Birkat Hamazon important?',
        answer:
          'It teaches gratitude, remembrance, and the sanctification of ordinary life through blessing.',
      },
      {
        question: 'Does Jewish prayer include everyday things like meals?',
        answer:
          'Yes. One of the strengths of Jewish prayer life is that blessing extends deeply into ordinary daily moments.',
      },
    ],
    relatedDirection:
      'Birkat Hamazon naturally connects with gratitude, blessing, and the sanctification of daily life.',
    summary:
      'Birkat Hamazon brings gratitude and blessing into the ordinary act of being fed.',
  },
  {
    title: 'Tefilat Haderech',
    slug: 'tefilat-haderech',
    shortDescription:
      'Tefilat Haderech is the Jewish traveler’s prayer, asking for safe journeying, protection, and peaceful arrival.',
    intro:
      'Tefilat Haderech is a Jewish prayer associated with travel. It expresses human vulnerability on the road and places a journey under God’s protection and care.',
    keyThemes: [
      'Travel prayer',
      'Protection',
      'Safe journey',
      'Trust',
      'Vulnerability',
      'Peaceful arrival',
    ],
    commonMoments: [
      'Before travel',
      'When leaving on a long drive or trip',
      'When praying for loved ones on the road',
      'When wanting Jewish words for safe journeying',
      'When travel feels uncertain or exposed',
    ],
    exampleSituations: [
      'A Jewish person may turn to Tefilat Haderech before a drive, flight, family trip, or other journey that calls for safety and peace.',
      'It can also be meaningful for families who want travel to begin not only with logistics but with prayerful trust.',
    ],
    faqItems: [
      {
        question: 'What is Tefilat Haderech?',
        answer:
          'Tefilat Haderech is the Jewish traveler’s prayer, traditionally said when beginning a journey.',
      },
      {
        question: 'Why is it meaningful?',
        answer:
          'It gives language for vulnerability, protection, and trust when a person sets out on the road.',
      },
      {
        question: 'Is it only for major travel?',
        answer:
          'It is especially associated with meaningful travel, though its underlying themes of trust and safe passage are broadly understandable.',
      },
    ],
    relatedDirection:
      'Tefilat Haderech naturally connects with prayers for protection, trust, and the sanctification of ordinary movement through life.',
    summary:
      'Tefilat Haderech entrusts a journey to God with reverence, protection, and hope.',
  },
  {
    title: 'Kabbalat Shabbat',
    slug: 'kabbalat-shabbat',
    shortDescription:
      'Kabbalat Shabbat is the Jewish prayerful welcome of Shabbat, marked by reverence, joy, rest, and sacred transition.',
    intro:
      'Kabbalat Shabbat welcomes the Sabbath with prayer, song, reverence, and delight. In Jewish life, it is not only a prayer category but a holy transition into sacred time.',
    keyThemes: [
      'Welcoming Shabbat',
      'Sacred time',
      'Joy and reverence',
      'Rest',
      'Transition from work to holiness',
      'Communal worship',
    ],
    commonMoments: [
      'At the beginning of Shabbat',
      'When learning the meaning of Sabbath welcome',
      'When seeking prayer language for sacred transition',
      'When reflecting on rest and holiness',
      'When wanting to understand the joy of Shabbat entry',
    ],
    exampleSituations: [
      'A Jewish person may encounter Kabbalat Shabbat in synagogue, at home, or in family and communal settings that mark the entrance of Shabbat with reverence and joy.',
      'Its power lies in teaching that time itself can be welcomed as holy, not only used or endured.',
    ],
    faqItems: [
      {
        question: 'What is Kabbalat Shabbat?',
        answer:
          'Kabbalat Shabbat is the prayerful and often communal welcome of the Sabbath in Jewish life.',
      },
      {
        question: 'Why does Kabbalat Shabbat matter?',
        answer:
          'It marks the movement from ordinary work into sacred rest, delight, and holy time.',
      },
      {
        question: 'Is it mainly about rest?',
        answer:
          'Rest is part of it, but so are joy, holiness, welcome, and the communal beauty of entering Shabbat.',
      },
    ],
    relatedDirection:
      'Kabbalat Shabbat naturally connects with Shabbat observance, blessing, joy, and sacred rhythms of time.',
    summary:
      'Kabbalat Shabbat welcomes the Sabbath with joy, reverence, and holy transition.',
  },
  {
    title: 'Mussaf',
    slug: 'mussaf',
    shortDescription:
      'Mussaf is an additional Jewish prayer service associated with certain sacred times, expanding the liturgical rhythm of worship.',
    intro:
      'Mussaf is an additional prayer service in Jewish liturgical life, associated with particular days and sacred occasions. It reflects the way Jewish prayer can deepen and expand during holy times.',
    keyThemes: [
      'Additional service',
      'Sacred occasions',
      'Liturgical depth',
      'Holy time',
      'Expanded worship',
      'Structured devotion',
    ],
    commonMoments: [
      'When learning the structure of Jewish liturgical life',
      'During sacred times that include additional prayer',
      'When exploring how worship expands on holy days',
      'When seeking to understand Jewish prayer beyond daily basics',
      'When learning about formal service structure',
    ],
    exampleSituations: [
      'A Jewish learner may encounter Mussaf while studying the structure of synagogue worship and the ways prayer shifts on sacred days.',
      'It is especially meaningful because it shows that time, season, and holiness affect the shape of prayer.',
    ],
    faqItems: [
      {
        question: 'What is Mussaf?',
        answer:
          'Mussaf is an additional Jewish prayer service associated with certain sacred times and liturgical settings.',
      },
      {
        question: 'Why is Mussaf important?',
        answer:
          'It helps show that Jewish prayer life changes in meaningful ways during holy times and is not spiritually flat across the calendar.',
      },
      {
        question: 'Is Mussaf a private mood-based prayer category?',
        answer:
          'No. It is better understood as part of Jewish liturgical structure and sacred-time worship.',
      },
    ],
    relatedDirection:
      'Mussaf naturally connects with synagogue worship, holy days, and the broader structure of Jewish liturgical prayer.',
    summary:
      'Mussaf reflects the expanded depth of Jewish prayer during sacred times.',
  },
  {
    title: 'Tashlich',
    slug: 'tashlich',
    shortDescription:
      'Tashlich is a Jewish practice of reflection, repentance, and symbolic casting away of sins, associated with the High Holy Day season.',
    intro:
      'Tashlich is associated with repentance, self-examination, and symbolic action during the High Holy Day period. It carries themes of turning, release, and moral seriousness before God.',
    keyThemes: [
      'Repentance',
      'Release',
      'Moral reflection',
      'Turning back',
      'Symbolic action',
      'High Holy Days',
    ],
    commonMoments: [
      'During the High Holy Day season',
      'When reflecting on repentance and renewal',
      'When learning about Jewish practices of moral return',
      'When seeking language for letting go of wrongdoing',
      'When wanting to understand symbolic devotional acts',
    ],
    exampleSituations: [
      'A Jewish person may encounter Tashlich in community or family practice during the season of repentance and moral return.',
      'Its meaning is especially strong when a person wants not only regret, but a visible and prayerful sense of turning away from sin.',
    ],
    faqItems: [
      {
        question: 'What is Tashlich?',
        answer:
          'Tashlich is a Jewish practice associated with repentance and symbolic casting away of sins during the High Holy Day season.',
      },
      {
        question: 'Why is Tashlich meaningful?',
        answer:
          'It combines self-examination, repentance, and symbolic action in a way that makes moral return feel concrete.',
      },
      {
        question: 'Is Tashlich mainly symbolic?',
        answer:
          'It is symbolic, but the symbolism points toward something spiritually serious: repentance, release, and renewed moral direction.',
      },
    ],
    relatedDirection:
      'Tashlich naturally connects with Selichot, Vidui, repentance, and spiritual renewal during the High Holy Days.',
    summary:
      'Tashlich gives symbolic expression to repentance, release, and turning back to God.',
  },
  {
    title: 'Selichot',
    slug: 'selichot',
    shortDescription:
      'Selichot are Jewish prayers for forgiveness and mercy, especially associated with repentance and preparation during the High Holy Days.',
    intro:
      'Selichot are prayers focused on forgiveness, mercy, repentance, and preparation of the heart. In Jewish life, they carry a serious and searching tone, especially in the season leading into the High Holy Days.',
    keyThemes: [
      'Forgiveness',
      'Mercy',
      'Repentance',
      'Preparation',
      'Self-examination',
      'High Holy Day seriousness',
    ],
    commonMoments: [
      'During the season of repentance',
      'When seeking mercy and forgiveness',
      'When preparing the heart for the High Holy Days',
      'When reflecting on wrongdoing and return',
      'When learning about Jewish prayers of repentance',
    ],
    exampleSituations: [
      'A Jewish person may encounter Selichot in synagogue, communal prayer, or personal preparation in the season of repentance.',
      'They are especially meaningful when the soul needs seriousness, mercy, and a language of return rather than distraction or avoidance.',
    ],
    faqItems: [
      {
        question: 'What are Selichot?',
        answer:
          'Selichot are Jewish prayers for forgiveness and mercy, especially associated with repentance and the High Holy Day season.',
      },
      {
        question: 'Why are Selichot important?',
        answer:
          'They help prepare the heart through seriousness, repentance, and renewed openness to mercy.',
      },
      {
        question: 'Are Selichot only about guilt?',
        answer:
          'No. They are also about return, mercy, preparation, and moral honesty before God.',
      },
    ],
    relatedDirection:
      'Selichot naturally connect with Vidui, Tashlich, repentance, and High Holy Day preparation.',
    summary:
      'Selichot bring the heart into repentance, mercy, and serious preparation before God.',
  },
  {
    title: 'Vidui',
    slug: 'vidui',
    shortDescription:
      'Vidui is Jewish confession, a prayerful acknowledgment of wrongdoing, moral honesty, and the need to return.',
    intro:
      'Vidui is confession in Jewish prayer life. It is marked by honesty, repentance, humility, and moral clarity rather than denial, evasion, or self-justifying language.',
    keyThemes: [
      'Confession',
      'Moral honesty',
      'Repentance',
      'Humility',
      'Return',
      'Truthfulness before God',
    ],
    commonMoments: [
      'When reflecting on wrongdoing',
      'During repentance and self-examination',
      'When learning how confession functions in Jewish prayer',
      'When seeking moral clarity and return',
      'During serious seasons of spiritual review',
    ],
    exampleSituations: [
      'A Jewish person may encounter Vidui in the context of repentance, liturgical confession, or moral self-examination before God.',
      'It is especially meaningful when a person needs not vague regret, but truthful acknowledgment and a sincere desire to turn back.',
    ],
    faqItems: [
      {
        question: 'What is Vidui?',
        answer:
          'Vidui is Jewish confession, a prayerful acknowledgment of wrongdoing and a movement toward repentance and return.',
      },
      {
        question: 'Why is Vidui important?',
        answer:
          'It teaches moral honesty and keeps repentance from remaining vague or abstract.',
      },
      {
        question: 'Is Vidui only about shame?',
        answer:
          'No. Its deeper purpose is truth, repentance, humility, and renewed direction before God.',
      },
    ],
    relatedDirection:
      'Vidui naturally connects with Selichot, Tashlich, repentance, and the search for mercy and renewal.',
    summary:
      'Vidui is the honest language of confession and return in Jewish prayer life.',
  },
];

export function getJewishPrayerTypeBySlug(
  slug: string
): JewishPrayerType | undefined {
  return JEWISH_PRAYER_TYPES.find((item) => item.slug === slug);
}