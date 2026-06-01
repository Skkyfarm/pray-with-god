export type TraditionAboutKey =
  | 'grace'
  | 'protestant'
  | 'catholic'
  | 'jewish'
  | 'muslim'
  | 'hindu'
  | 'buddhist';

export type TraditionAboutSection = {
  heading: string;
  body: string;
};

export type TraditionAboutEntry = {
  key: TraditionAboutKey;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  prayerMeaning: string;
  respectfulUse: string;
  sections: TraditionAboutSection[];
  prayHref: string;
  prayerTypesHref: string;
};

export const traditionAboutEntries: Record<TraditionAboutKey, TraditionAboutEntry> = {
  grace: {
    key: 'grace',
    label: 'Exploring',
    eyebrow: 'Simple Prayer',
    title: 'About simple prayer',
    subtitle: 'A gentle place to begin when you are not sure what to say.',
    intro:
      'Simple Prayer is PrayWithGod.ai’s plain-language entry point. It is meant for people who want a quiet moment of prayer, reflection, hope, or honesty without choosing a specific religious tradition first.',
    prayerMeaning:
      'Here, prayer means bringing a need, gratitude, burden, question, or hope into a reverent moment. Some visitors may understand that as speaking with God. Others may experience it as reflection, stillness, or seeking peace.',
    respectfulUse:
      'This section is intentionally broad. It does not replace a faith community, pastor, priest, rabbi, imam, teacher, counselor, or medical support. It simply helps you begin with sincerity.',
    sections: [
      {
        heading: 'What is this path?',
        body:
          'This is not a denomination or formal tradition. It is a simple doorway for people who want help forming words for prayer or reflection.',
      },
      {
        heading: 'How do people use it?',
        body:
          'Visitors can ask for a quick prayer, customize a prayer around a situation, or choose feelings and needs that help shape the tone.',
      },
      {
        heading: 'Why begin this way?',
        body:
          'Many people come to prayer unsure, tired, overwhelmed, or new to faith language. A simple starting place can make the first step feel less intimidating.',
      },
      {
        heading: 'What should a respectful visitor understand?',
        body:
          'Simple Prayer is broad on purpose. If you already belong to a religious tradition, you may prefer that tradition’s section for more specific language and structure.',
      },
    ],
    prayHref: '/pray?path=grace&mode=free',
    prayerTypesHref: '/pray?path=grace&mode=free',
  },

  protestant: {
    key: 'protestant',
    label: 'Protestant',
    eyebrow: 'Christian Tradition',
    title: 'About Protestant prayer',
    subtitle: 'A Scripture-shaped, personal way of praying with God.',
    intro:
      'Protestant Christianity includes many churches and communities that emphasize the Bible, faith in Jesus Christ, grace, repentance, worship, and a direct personal relationship with God.',
    prayerMeaning:
      'Prayer is commonly understood as speaking with God through praise, confession, thanksgiving, petition, intercession, lament, and listening. Protestant prayer is often personal, Bible-shaped, and offered in Jesus’ name.',
    respectfulUse:
      'Protestant traditions vary widely. A Baptist, Methodist, Lutheran, Pentecostal, Reformed, Anglican, or non-denominational Christian may pray in different styles while sharing many core Christian convictions.',
    sections: [
      {
        heading: 'What is this tradition?',
        body:
          'Protestant Christianity grew from reform movements within Western Christianity and now includes many distinct churches and worship styles.',
      },
      {
        heading: 'What does prayer mean in this tradition?',
        body:
          'Prayer is often seen as honest communion with God: praising Him, confessing sin, asking for help, giving thanks, and praying for others.',
      },
      {
        heading: 'Why do people pray this way?',
        body:
          'Many Protestants emphasize prayer from the heart, shaped by Scripture and trust in God’s grace rather than by a single required form.',
      },
      {
        heading: 'What should a respectful outsider understand?',
        body:
          'Protestant prayer language may sound intimate and direct. That reflects the tradition’s emphasis on personal relationship with God through Christ.',
      },
    ],
    prayHref: '/pray?path=protestant&mode=free',
    prayerTypesHref: '/pray?path=protestant&mode=classic',
  },

  catholic: {
    key: 'catholic',
    label: 'Catholic',
    eyebrow: 'Christian Tradition',
    title: 'About Catholic prayer',
    subtitle: 'A sacramental, communal, and devotional way of praying with God.',
    intro:
      'Catholic Christianity is a historic Christian tradition centered on worship of God, the life and teachings of Jesus Christ, the sacraments, Scripture, prayer, and the life of the Church.',
    prayerMeaning:
      'Catholic prayer includes praise, thanksgiving, repentance, petition, intercession, meditation, contemplation, devotion, and participation in the liturgical life of the Church.',
    respectfulUse:
      'Catholic prayer often includes formal prayers, saints, Mary, liturgical seasons, and sacramental language. These should be approached with care rather than treated as generic spiritual decorations.',
    sections: [
      {
        heading: 'What is this tradition?',
        body:
          'Catholic Christianity is one of the largest and oldest Christian traditions, with a rich life of worship, sacrament, Scripture, teaching, and devotional prayer.',
      },
      {
        heading: 'What does prayer mean in this tradition?',
        body:
          'Prayer is communion with God, shaped by personal devotion and by the Church’s shared worship across time and place.',
      },
      {
        heading: 'Why do people pray this way?',
        body:
          'Catholic prayer often joins personal need with the wider life of the Church, including liturgy, saints, the sacraments, and seasons of the Christian year.',
      },
      {
        heading: 'What should a respectful outsider understand?',
        body:
          'Some Catholic prayers are fixed traditional texts. PrayWithGod.ai separates original prayer assistance from verbatim traditional prayers that require public-domain or permission review.',
      },
    ],
    prayHref: '/pray?path=catholic&mode=free',
    prayerTypesHref: '/pray?path=catholic&mode=classic',
  },

  jewish: {
    key: 'jewish',
    label: 'Jewish',
    eyebrow: 'Jewish Tradition',
    title: 'About Jewish prayer',
    subtitle: 'A covenant-shaped life of blessing, remembrance, praise, and return.',
    intro:
      'Judaism is a historic religious tradition rooted in covenant, Torah, worship of the One God, sacred time, community, memory, ethics, and the practices of Jewish life.',
    prayerMeaning:
      'Jewish prayer can include praise, blessing, thanksgiving, confession, petition, remembrance, study, and communal worship. It is often deeply connected to Hebrew liturgy, sacred time, and peoplehood.',
    respectfulUse:
      'Jewish prayer should be approached with humility. Some prayers belong to particular communal settings, languages, histories, and obligations, and should not be casually repackaged.',
    sections: [
      {
        heading: 'What is this tradition?',
        body:
          'Judaism is a living tradition of faith, law, memory, worship, learning, family, community, and covenant with the One God.',
      },
      {
        heading: 'What does prayer mean in this tradition?',
        body:
          'Prayer often means blessing God, remembering God’s faithfulness, seeking mercy, giving thanks, and joining the community’s ordered rhythms of worship.',
      },
      {
        heading: 'Why do people pray this way?',
        body:
          'Jewish prayer is shaped by sacred texts, daily and seasonal rhythms, community, memory, and the call to live faithfully before God.',
      },
      {
        heading: 'What should a respectful outsider understand?',
        body:
          'Jewish prayer is not simply “Christian prayer with different wording.” It belongs to its own covenantal, communal, linguistic, and historical setting.',
      },
    ],
    prayHref: '/pray?path=jewish&mode=free',
    prayerTypesHref: '/pray?path=jewish&mode=classic',
  },

  muslim: {
    key: 'muslim',
    label: 'Muslim',
    eyebrow: 'Islamic Tradition',
    title: 'About Muslim prayer',
    subtitle: 'A disciplined, reverent orientation toward Allah.',
    intro:
      'Islam is a monotheistic tradition centered on worship of Allah, submission to God, the Qur’an, the Prophet Muhammad, mercy, accountability, and a life shaped by faith and practice.',
    prayerMeaning:
      'Muslim prayer includes the formal daily prayers known as salah, as well as personal supplication known as du’a. PrayWithGod.ai does not replace salah or present generated text as Qur’an or official Islamic prayer.',
    respectfulUse:
      'Islamic prayer language should be handled with special care. The Qur’an is not casual inspirational text, and formal acts of worship have specific requirements in Muslim life.',
    sections: [
      {
        heading: 'What is this tradition?',
        body:
          'Islam is a faith of worship, submission, mercy, remembrance, moral responsibility, and devotion to Allah.',
      },
      {
        heading: 'What does prayer mean in this tradition?',
        body:
          'Prayer can refer to formal salah, performed at appointed times, and to du’a, personal supplication asking Allah for mercy, guidance, help, or forgiveness.',
      },
      {
        heading: 'Why do people pray this way?',
        body:
          'Muslim prayer forms the day around remembrance of Allah, humility, gratitude, discipline, and dependence on divine mercy.',
      },
      {
        heading: 'What should a respectful outsider understand?',
        body:
          'Generated devotional text should not be confused with Qur’an, hadith, salah, or an authoritative Islamic ruling. When in doubt, consult a knowledgeable Muslim teacher or community.',
      },
    ],
    prayHref: '/pray?path=muslim&mode=free',
    prayerTypesHref: '/pray?path=muslim&mode=classic',
  },

  hindu: {
    key: 'hindu',
    label: 'Hindu',
    eyebrow: 'Hindu Tradition',
    title: 'About Hindu prayer',
    subtitle: 'A diverse world of devotion, mantra, offering, and sacred presence.',
    intro:
      'Hindu traditions are diverse and ancient, including many forms of devotion, philosophy, ritual, meditation, sacred story, temple worship, household practice, and understandings of the divine.',
    prayerMeaning:
      'Prayer may take the form of devotion, mantra, offering, praise, gratitude, meditation, surrender, or intention. Different Hindu communities understand and practice prayer in different ways.',
    respectfulUse:
      'Hindu sacred names, mantras, and deities should be approached respectfully. Generated text should not be treated as a mantra, scripture, priestly instruction, or authoritative translation.',
    sections: [
      {
        heading: 'What is this tradition?',
        body:
          'Hindu tradition is not a single uniform system. It includes many lineages, philosophies, rituals, sacred texts, deities, and devotional paths.',
      },
      {
        heading: 'What does prayer mean in this tradition?',
        body:
          'Prayer may involve devotion to a chosen deity, chanting, offerings, gratitude, meditation, or a sincere intention placed before the divine.',
      },
      {
        heading: 'Why do people pray this way?',
        body:
          'Hindu prayer can express devotion, seek blessing, cultivate peace, honor sacred presence, and align everyday life with dharma.',
      },
      {
        heading: 'What should a respectful outsider understand?',
        body:
          'Avoid flattening Hindu traditions into one idea. Sacred names, images, and mantras carry living meaning for communities and families.',
      },
    ],
    prayHref: '/pray?path=hindu&mode=free',
    prayerTypesHref: '/pray?path=hindu&mode=classic',
  },

  buddhist: {
    key: 'buddhist',
    label: 'Buddhist',
    eyebrow: 'Buddhist Tradition',
    title: 'About Buddhist prayer and reflection',
    subtitle: 'A contemplative path of mindfulness, compassion, refuge, and awakening.',
    intro:
      'Buddhist traditions are diverse and often focus on awakening, compassion, mindfulness, wisdom, ethical living, meditation, refuge, and freedom from suffering.',
    prayerMeaning:
      'In many Buddhist settings, prayer may look different from speaking to a Creator God. It may involve chanting, refuge, dedication of merit, compassion practice, aspiration, remembrance, or meditative reflection.',
    respectfulUse:
      'Buddhist traditions should not be reduced to calm feelings or generic mindfulness. Practices often belong to specific lineages, communities, teachers, and vows.',
    sections: [
      {
        heading: 'What is this tradition?',
        body:
          'Buddhism includes many schools and cultures, often centered on the Buddha’s teaching, the path of practice, compassion, wisdom, and liberation from suffering.',
      },
      {
        heading: 'What does prayer mean in this tradition?',
        body:
          'Prayer may be better understood as aspiration, chanting, refuge, compassion practice, dedication, or contemplative reflection, depending on the tradition.',
      },
      {
        heading: 'Why do people pray this way?',
        body:
          'These practices can cultivate compassion, steadiness, humility, mindfulness, gratitude, and commitment to the well-being of all beings.',
      },
      {
        heading: 'What should a respectful outsider understand?',
        body:
          'Not all Buddhist prayer is God-centered. PrayWithGod.ai uses careful language here so the section remains reverent without forcing Buddhist practice into another tradition’s frame.',
      },
    ],
    prayHref: '/pray?path=buddhist&mode=free',
    prayerTypesHref: '/pray?path=buddhist&mode=classic',
  },
};

export function getTraditionAboutEntry(
  key: string | null | undefined,
): TraditionAboutEntry | null {
  const normalized = (key || '').toLowerCase();

  if (normalized === 'christian') {
    return traditionAboutEntries.protestant;
  }

  if (
    normalized === 'grace' ||
    normalized === 'protestant' ||
    normalized === 'catholic' ||
    normalized === 'jewish' ||
    normalized === 'muslim' ||
    normalized === 'hindu' ||
    normalized === 'buddhist'
  ) {
    return traditionAboutEntries[normalized];
  }

  return null;
}
