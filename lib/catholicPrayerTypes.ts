// /lib/catholicPrayerTypes.ts

export type CatholicPrayerFaqItem = {
  question: string;
  answer: string;
};

export type CatholicPrayerType = {
  title: string;
  slug: string;
  shortDescription: string;
  intro: string;
  keyThemes: string[];
  commonMoments: string[];
  exampleSituations: string[];
  faqItems: CatholicPrayerFaqItem[];
  relatedDirection: string;
  summary: string;
};

export const CATHOLIC_PRAYER_TYPES: CatholicPrayerType[] = [
  {
    title: "Adoration",
    slug: "adoration",
    shortDescription:
      "Adoration is prayer that turns the heart toward God in reverence, love, worship, and awe.",
    intro:
      "In Catholic life, adoration helps a person stop asking for a moment and simply honor God for who He is. It can be quiet, loving, and deeply attentive.",
    keyThemes: [
      "God's holiness",
      "Wonder and reverence",
      "Worship",
      "Love of God",
      "Silence before God",
      "Humble attention",
    ],
    commonMoments: [
      "When you want to begin prayer with reverence rather than requests",
      "During a quiet visit before the Blessed Sacrament",
      "After Mass when your heart feels grateful and still",
      "When you want to re-center on God after a scattered day",
      "When words of worship come more naturally than words of need",
    ],
    exampleSituations: [
      "A Catholic may pray in adoration while sitting quietly in church, kneeling in a chapel, or pausing at home after reading Scripture and being struck by God's goodness.",
      "It can also be a fitting prayer after beauty, mercy, or answered prayer reminds a person that God is worthy of love before any new request is spoken.",
    ],
    faqItems: [
      {
        question: "What is adoration in Catholic prayer?",
        answer:
          "Adoration is prayer focused on God Himself. It is a response of reverence, love, worship, and awe before God's holiness and greatness.",
      },
      {
        question: "Is adoration the same as praise?",
        answer:
          "They overlap, but adoration usually leans more toward reverence and wonder before God, while praise often emphasizes joyful acknowledgment of His goodness and works.",
      },
      {
        question: "Do adoration prayers ask for anything?",
        answer:
          "Usually the main emphasis is not on asking. Adoration places the soul before God in loving worship and can prepare the heart for other kinds of prayer.",
      },
    ],
    relatedDirection:
      "Adoration naturally connects with Eucharistic Devotion, Thanksgiving, and Night Prayer, especially when a person wants to rest quietly in God's presence.",
    summary:
      "Adoration is prayer that looks up, grows still, and loves God for who He is.",
  },
  {
    title: "Contrition",
    slug: "contrition",
    shortDescription:
      "Contrition is prayer of sorrow for sin, repentance, humility, and the desire to return more fully to God.",
    intro:
      "In Catholic prayer life, contrition is not about hopeless shame. It is about honest sorrow, trust in mercy, and a sincere turning of the heart back toward God.",
    keyThemes: [
      "Repentance",
      "Sorrow for sin",
      "Humility",
      "Mercy",
      "Renewal",
      "Return to God",
    ],
    commonMoments: [
      "Before going to Confession",
      "When your conscience feels troubled",
      "After speaking or acting in a way you regret",
      "At the end of the day during honest reflection",
      "When you want to begin again with humility",
    ],
    exampleSituations: [
      "A Catholic may pray in contrition after realizing he has been impatient, selfish, or spiritually careless and wants to come before God truthfully.",
      "It can also arise in quieter moments when someone senses distance from God and wants to return with honesty, repentance, and hope.",
    ],
    faqItems: [
      {
        question: "What is contrition?",
        answer:
          "Contrition is sincere sorrow for sin joined to the desire for forgiveness, amendment of life, and renewed friendship with God.",
      },
      {
        question: "Is contrition only about feeling bad?",
        answer:
          "No. True contrition includes sorrow, but it is also rooted in love of God, trust in mercy, and the desire to turn away from sin.",
      },
      {
        question: "Does contrition connect to Confession?",
        answer:
          "Yes. Contrition is an important part of preparation for the Sacrament of Reconciliation, though it also has a place in daily personal prayer.",
      },
    ],
    relatedDirection:
      "Contrition naturally connects with Examination of Conscience, Prayers for Mercy, and Night Prayer, especially when repentance leads into peace.",
    summary:
      "Contrition is honest sorrow before God that opens the heart to mercy and a fresh beginning.",
  },
  {
    title: "Thanksgiving",
    slug: "thanksgiving",
    shortDescription:
      "Thanksgiving is prayer that expresses gratitude for God's gifts, mercy, provision, and faithful care.",
    intro:
      "In Catholic life, thanksgiving keeps the soul from becoming forgetful. It helps a person notice grace, remember blessings, and respond to God with gratitude.",
    keyThemes: [
      "Gratitude",
      "Providence",
      "Mercy remembered",
      "Joy",
      "Ordinary blessings",
      "Faithful care",
    ],
    commonMoments: [
      "After Mass or Communion",
      "After receiving help, healing, or provision",
      "When a family milestone has gone well",
      "At the close of a peaceful day",
      "When you want to thank God for simple daily mercies",
    ],
    exampleSituations: [
      "A Catholic may pray in thanksgiving after a medical appointment goes better than expected, after a child comes home safely, or after a season of worry begins to lift.",
      "Thanksgiving also fits ordinary life: meals, work, friendship, rest, forgiveness, and the quiet gifts that are easy to overlook.",
    ],
    faqItems: [
      {
        question: "What is a thanksgiving prayer?",
        answer:
          "A thanksgiving prayer is a prayer of gratitude for God's gifts, care, mercy, and blessings, whether large or small.",
      },
      {
        question: "Is thanksgiving only for big moments?",
        answer:
          "No. Catholic thanksgiving can arise from ordinary daily graces as well as major answers to prayer.",
      },
      {
        question: "Why is thanksgiving important?",
        answer:
          "Thanksgiving helps form a grateful heart, strengthens trust, and teaches the soul to recognize God's faithful presence.",
      },
    ],
    relatedDirection:
      "Thanksgiving naturally connects with Adoration, Easter Prayers, and Family Prayers when gratitude spills into worship and shared joy.",
    summary:
      "Thanksgiving helps Catholics notice grace and answer God's goodness with grateful hearts.",
  },
  {
    title: "Petition",
    slug: "petition",
    shortDescription:
      "Petition is prayer that brings personal needs, hopes, burdens, and requests before God with trust.",
    intro:
      "In Catholic life, petition is a natural way of asking for help. It expresses dependence on God without pretending that a person can carry every need alone.",
    keyThemes: [
      "Need",
      "Trust",
      "Dependence on God",
      "Hope",
      "Honest asking",
      "Perseverance",
    ],
    commonMoments: [
      "When you need help with daily burdens",
      "When you are facing uncertainty or fear",
      "When provision or direction is needed",
      "When you feel weak and need grace for the day",
      "When you want to place a specific request before God",
    ],
    exampleSituations: [
      "A Catholic may pray in petition when asking for work, housing, peace in the home, strength for treatment, or patience in a difficult season.",
      "Petition also belongs to ordinary life when a person asks God for wisdom, endurance, protection, or help with something very practical.",
    ],
    faqItems: [
      {
        question: "What is petition prayer?",
        answer:
          "Petition is prayer that asks God for help, grace, provision, healing, wisdom, or other personal needs.",
      },
      {
        question: "Is it selfish to pray for your own needs?",
        answer:
          "No. Catholic prayer includes honest personal requests, so long as they are brought with trust, humility, and openness to God's will.",
      },
      {
        question: "How is petition different from intercession?",
        answer:
          "Petition focuses more directly on personal needs, while intercession is prayer offered on behalf of others.",
      },
    ],
    relatedDirection:
      "Petition naturally connects with Prayers for Guidance, Prayers for Mercy, and Vocational Discernment Prayers when a person needs help and clarity.",
    summary:
      "Petition is prayer that honestly asks God for what is needed and trusts Him with the answer.",
  },
  {
    title: "Intercession",
    slug: "intercession",
    shortDescription:
      "Intercession is prayer offered on behalf of other people, communities, intentions, and needs beyond oneself.",
    intro:
      "In Catholic life, intercession widens the heart. It teaches a person to carry others before God with love, hope, and faithful concern.",
    keyThemes: [
      "Prayer for others",
      "Compassion",
      "Solidarity",
      "Love of neighbor",
      "Hope",
      "Faithful remembrance",
    ],
    commonMoments: [
      "When family or friends are suffering",
      "When a parish or community has urgent needs",
      "When someone asks you to pray for them",
      "Before visiting or calling a person in pain",
      "When world events or tragedies weigh on your heart",
    ],
    exampleSituations: [
      "A Catholic may pray in intercession for a sick relative, a grieving family, a troubled marriage, a struggling child, or a parish facing difficulty.",
      "Intercession can also take in larger needs such as peace, justice, protection for the vulnerable, and mercy for people a person may never meet.",
    ],
    faqItems: [
      {
        question: "What is intercessory prayer?",
        answer:
          "Intercessory prayer is prayer made for other people and their needs, asking God to help, comfort, guide, protect, or heal them.",
      },
      {
        question: "Why is intercession important?",
        answer:
          "Intercession reflects love of neighbor and reminds Catholics that prayer is not only about the self but also about carrying others before God.",
      },
      {
        question: "Can intercession be simple?",
        answer:
          "Yes. Intercession can be brief and direct, or longer and more reflective. Its strength is not in complexity but in faithful love.",
      },
    ],
    relatedDirection:
      "Intercession naturally connects with Prayers for the Sick, Prayers for the Dying, and Family Prayers when concern for others becomes the center of prayer.",
    summary:
      "Intercession is the loving work of bringing other people and their needs before God.",
  },
  {
    title: "Marian Devotion",
    slug: "marian-devotion",
    shortDescription:
      "Marian Devotion is prayerful attention to the Blessed Virgin Mary, asking her intercession and learning from her faith, humility, and obedience.",
    intro:
      "In Catholic life, Marian devotion points believers toward Christ through the example and intercession of His mother. It is often marked by tenderness, trust, and a willingness to say yes to God.",
    keyThemes: [
      "Mary's intercession",
      "Humility",
      "Trust",
      "Motherly care",
      "Obedience to God",
      "Christ-centered devotion",
    ],
    commonMoments: [
      "When praying the Rosary or another Marian devotion",
      "During seasons of family concern or motherhood",
      "When seeking comfort, gentleness, or steadiness",
      "During Advent and other Marian moments of the Church year",
      "When you want help saying yes to God's will",
    ],
    exampleSituations: [
      "A Catholic may turn to Marian devotion when praying for children, for a peaceful home, for purity of heart, or for trust during uncertain seasons.",
      "It can also be a natural path when someone wants to imitate Mary's faithfulness and receive help learning quiet, courageous obedience.",
    ],
    faqItems: [
      {
        question: "What is Marian Devotion?",
        answer:
          "Marian Devotion is prayer and devotion connected to the Blessed Virgin Mary, especially through her intercession and example of faithful discipleship.",
      },
      {
        question: "Does Marian devotion replace prayer to God?",
        answer:
          "No. In Catholic understanding, Marian devotion leads the believer toward Christ and asks Mary's prayers; it does not replace worship of God.",
      },
      {
        question: "Why do Catholics find Marian devotion comforting?",
        answer:
          "Many Catholics experience Marian devotion as tender, steadying, and deeply human because it joins motherly care, humility, and faithful trust in God.",
      },
    ],
    relatedDirection:
      "Marian Devotion naturally connects with Advent Prayers, Family Prayers, and Saint-inspired Prayers when tenderness, trust, and imitation of holiness come together.",
    summary:
      "Marian Devotion helps Catholics seek Mary's intercession and learn from her faithful yes to God.",
  },
  {
    title: "Eucharistic Devotion",
    slug: "eucharistic-devotion",
    shortDescription:
      "Eucharistic Devotion is prayer centered on Christ's real presence, especially in love, reverence, thanksgiving, and quiet adoration.",
    intro:
      "In Catholic life, Eucharistic Devotion invites a person to remain close to Jesus with prayerful attention, especially before the Blessed Sacrament and in the life flowing from the Mass.",
    keyThemes: [
      "Christ's real presence",
      "Reverence",
      "Adoration",
      "Thanksgiving",
      "Silence",
      "Intimacy with Christ",
    ],
    commonMoments: [
      "Before or after Mass",
      "During time in adoration before the Blessed Sacrament",
      "When you want stillness in Christ's presence",
      "When you need to re-center your soul on Jesus",
      "When thanksgiving and worship feel closely joined",
    ],
    exampleSituations: [
      "A Catholic may pray in Eucharistic devotion while kneeling quietly in a chapel, making a short visit to church, or lingering after Communion in gratitude.",
      "It is also fitting when a person feels spiritually dry and simply wants to stay near Christ with reverence rather than many words.",
    ],
    faqItems: [
      {
        question: "What is Eucharistic Devotion?",
        answer:
          "Eucharistic Devotion is prayer focused on Jesus Christ in relation to the Eucharist, especially through reverence, thanksgiving, and adoration.",
      },
      {
        question: "Does Eucharistic Devotion only happen in a chapel?",
        answer:
          "While it is especially fitting before the Blessed Sacrament, Eucharistic devotion also shapes prayer after Mass and deepens a person's love for Christ throughout daily life.",
      },
      {
        question: "Why is silence important here?",
        answer:
          "Silence can help a person remain attentive, reverent, and receptive in Christ's presence, especially when words are not the main focus.",
      },
    ],
    relatedDirection:
      "Eucharistic Devotion naturally connects with Adoration, Thanksgiving, and Prayers for Mercy when the heart wants to remain quietly with Christ.",
    summary:
      "Eucharistic Devotion centers the heart on Christ's presence with reverence, gratitude, and loving attention.",
  },
  {
    title: "Prayers for Mercy",
    slug: "prayers-for-mercy",
    shortDescription:
      "Prayers for Mercy are prayers that ask God for compassion, forgiveness, healing, patience, and merciful help in weakness.",
    intro:
      "In Catholic life, mercy is not abstract. It is something a person seeks when wounded by sin, fear, shame, suffering, or the need for grace.",
    keyThemes: [
      "Mercy",
      "Compassion",
      "Forgiveness",
      "Hope",
      "Healing of the heart",
      "Trust in God",
    ],
    commonMoments: [
      "After failure or spiritual weakness",
      "When shame or discouragement is heavy",
      "Before or after Confession",
      "When asking God to soften the heart",
      "When you need compassionate help more than answers",
    ],
    exampleSituations: [
      "A Catholic may pray for mercy after speaking harshly, after falling into an old habit, or during a season when the conscience feels tender and tired.",
      "Prayers for mercy can also arise in sickness, grief, or exhaustion, when a person needs God's gentleness and not only His strength.",
    ],
    faqItems: [
      {
        question: "What are prayers for mercy?",
        answer:
          "They are prayers asking God for compassion, forgiveness, patience, healing, and help in human weakness.",
      },
      {
        question: "Are mercy prayers only about sin?",
        answer:
          "No. They can include sorrow for sin, but they also fit suffering, fear, discouragement, and any situation where a person needs God's compassionate help.",
      },
      {
        question: "Why are mercy prayers powerful?",
        answer:
          "They teach the soul to stop pretending strength and to turn honestly toward God's tenderness and help.",
      },
    ],
    relatedDirection:
      "Prayers for Mercy naturally connect with Contrition, Examination of Conscience, and Prayers for the Sick when weakness and hope meet.",
    summary:
      "Prayers for Mercy ask God to meet weakness with compassion, forgiveness, and healing grace.",
  },
  {
    title: "Prayers for Guidance",
    slug: "prayers-for-guidance",
    shortDescription:
      "Prayers for Guidance ask God for wisdom, clarity, discernment, patience, and help in choosing the right path.",
    intro:
      "In Catholic prayer life, guidance is not only about quick answers. It is about learning to listen, wait, discern, and move with faithfulness.",
    keyThemes: [
      "Wisdom",
      "Discernment",
      "Clarity",
      "Patience",
      "Docility to God",
      "Right action",
    ],
    commonMoments: [
      "When facing an important decision",
      "When the future feels unclear",
      "When choosing between competing responsibilities",
      "When you need steadiness more than speed",
      "When asking God to show the next right step",
    ],
    exampleSituations: [
      "A Catholic may pray for guidance during a job change, family decision, move, health choice, ministry commitment, or season of personal uncertainty.",
      "These prayers also belong to ordinary life when someone wants God's wisdom for conversations, duties, and small daily choices.",
    ],
    faqItems: [
      {
        question: "What are prayers for guidance?",
        answer:
          "They are prayers asking God for wisdom, discernment, right judgment, and help in knowing how to move forward faithfully.",
      },
      {
        question: "Does guidance always come quickly?",
        answer:
          "Not always. Catholic prayer for guidance often includes waiting, reflection, counsel, and a gradual deepening of peace or clarity.",
      },
      {
        question: "How do guidance and discernment relate?",
        answer:
          "Guidance prayers often lead into discernment, where a person tries to notice God's direction with patience, honesty, and fidelity.",
      },
    ],
    relatedDirection:
      "Prayers for Guidance naturally connect with Petition, Vocational Discernment Prayers, and Morning Offering when a person needs wisdom for the day or the future.",
    summary:
      "Prayers for Guidance help Catholics seek wisdom, clarity, and faithful direction under God's care.",
  },
  {
    title: "Examination of Conscience",
    slug: "examination-of-conscience",
    shortDescription:
      "Examination of Conscience is prayerful reflection on thoughts, actions, omissions, motives, and patterns before God.",
    intro:
      "In Catholic life, examination of conscience helps a person look honestly at the day or season of life in the light of God's mercy and truth.",
    keyThemes: [
      "Honest reflection",
      "Self-knowledge",
      "Repentance",
      "Gratitude",
      "Moral clarity",
      "Readiness for Confession",
    ],
    commonMoments: [
      "Before Confession",
      "At the end of the day",
      "During retreat or spiritual renewal",
      "After conflict or repeated failure",
      "When you want to examine habits honestly",
    ],
    exampleSituations: [
      "A Catholic may make an examination of conscience before the Sacrament of Reconciliation, asking where pride, neglect, impatience, or uncharity have taken root.",
      "It also fits daily life as a quiet evening review that notices grace, failure, patterns, and the need for tomorrow's amendment.",
    ],
    faqItems: [
      {
        question: "What is an examination of conscience?",
        answer:
          "It is a prayerful review of one's life, actions, omissions, and attitudes before God in order to grow in truth, repentance, and holiness.",
      },
      {
        question: "Is examination of conscience only for Confession?",
        answer:
          "No. It is especially helpful before Confession, but it can also be part of a healthy daily or weekly prayer rhythm.",
      },
      {
        question: "Should this become scrupulous?",
        answer:
          "No. A healthy examination of conscience is honest and clear-eyed, but it is meant to lead toward mercy, growth, and peace rather than anxious self-obsession.",
      },
    ],
    relatedDirection:
      "Examination of Conscience naturally connects with Contrition, Prayers for Mercy, and Night Prayer when honest reflection leads into repentance and rest.",
    summary:
      "Examination of Conscience helps Catholics review life truthfully in the light of God's mercy.",
  },
  {
    title: "Prayers for the Sick",
    slug: "prayers-for-the-sick",
    shortDescription:
      "Prayers for the Sick ask God for healing, endurance, comfort, peace, and compassionate care in times of illness.",
    intro:
      "In Catholic life, prayer for the sick holds together hope, tenderness, realism, and trust. It can ask boldly for healing while also asking for strength and peace.",
    keyThemes: [
      "Healing",
      "Comfort",
      "Endurance",
      "Peace",
      "Care for the suffering",
      "Hope in weakness",
    ],
    commonMoments: [
      "After a diagnosis or medical setback",
      "Before surgery or treatment",
      "During chronic pain or fatigue",
      "When visiting someone who is ill",
      "When praying for a loved one in recovery",
    ],
    exampleSituations: [
      "A Catholic may pray for the sick in a hospital room, at bedside, before dialysis or treatment, while waiting for test results, or when carrying concern for someone weakened by illness.",
      "These prayers can also include family members, caregivers, medical teams, and everyone walking through the strain of sickness together.",
    ],
    faqItems: [
      {
        question: "What are prayers for the sick?",
        answer:
          "They are prayers asking God for healing, comfort, endurance, peace, wise care, and merciful presence in illness.",
      },
      {
        question: "Must they only ask for physical healing?",
        answer:
          "No. They may also ask for emotional strength, spiritual peace, patience, support, and grace for everyone involved.",
      },
      {
        question: "Why are these prayers important?",
        answer:
          "They remind the sick and those who love them that suffering is not ignored and that God's mercy can be sought in weakness.",
      },
    ],
    relatedDirection:
      "Prayers for the Sick naturally connect with Intercession, Prayers for Mercy, and Family Prayers when illness touches both body and heart.",
    summary:
      "Prayers for the Sick bring illness, weakness, and hope before God with tenderness and faith.",
  },
  {
    title: "Prayers for the Dying",
    slug: "prayers-for-the-dying",
    shortDescription:
      "Prayers for the Dying ask for peace, mercy, trust, accompaniment, and hope in the face of death.",
    intro:
      "In Catholic life, prayer for the dying is tender and serious. It seeks God's mercy, the nearness of Christ, and peaceful accompaniment in a holy and difficult hour.",
    keyThemes: [
      "Mercy at life's end",
      "Peace",
      "Hope of eternal life",
      "Accompaniment",
      "Trust",
      "Comfort for loved ones",
    ],
    commonMoments: [
      "When a loved one is near death",
      "During hospice or bedside vigil",
      "When serious decline has become clear",
      "When fear surrounds the final days",
      "When family members need words of peace and trust",
    ],
    exampleSituations: [
      "A Catholic may pray for the dying at bedside, in hospice, over the phone with family, or quietly in another room while waiting and grieving.",
      "These prayers can also hold the living, asking for peace, courage, tenderness, and the grace to entrust a loved one to God.",
    ],
    faqItems: [
      {
        question: "What are prayers for the dying?",
        answer:
          "They are prayers asking God for mercy, peace, trust, hope, and loving care for a person approaching death.",
      },
      {
        question: "Are these prayers only for the dying person?",
        answer:
          "No. They also support grieving families, caregivers, and all who need grace in the final hours and days.",
      },
      {
        question: "Why do these prayers matter?",
        answer:
          "They help bring love, reverence, and hope into a profound human moment that can otherwise feel frightening and helpless.",
      },
    ],
    relatedDirection:
      "Prayers for the Dying naturally connect with Prayers for Mercy, Intercession, and Night Prayer when the heart seeks peace and surrender.",
    summary:
      "Prayers for the Dying entrust a soul to God's mercy with tenderness, peace, and hope.",
  },
  {
    title: "Family Prayers",
    slug: "family-prayers",
    shortDescription:
      "Family Prayers gather spouses, children, and households in shared prayer for unity, gratitude, forgiveness, protection, and daily faithfulness.",
    intro:
      "In Catholic life, family prayer gives the home a rhythm of grace. It can be simple and brief, but it helps shape love, memory, and shared trust in God.",
    keyThemes: [
      "Unity",
      "Shared faith",
      "Forgiveness",
      "Gratitude",
      "Daily rhythm",
      "Blessing for the home",
    ],
    commonMoments: [
      "At meals",
      "At bedtime",
      "During family stress or conflict",
      "On birthdays, travel days, or major transitions",
      "During Advent, Lent, and other church seasons",
    ],
    exampleSituations: [
      "A Catholic family may pray together before dinner, before school, at bedtime, before a trip, or when someone in the household is hurting and needs support.",
      "Family prayer also helps mark the seasons of life, giving children and adults alike a shared memory of turning to God together.",
    ],
    faqItems: [
      {
        question: "What are family prayers?",
        answer:
          "Family prayers are shared prayers offered in the home for gratitude, guidance, protection, forgiveness, peace, and mutual care.",
      },
      {
        question: "Do family prayers need to be long or formal?",
        answer:
          "No. Short, regular prayer can be deeply meaningful and often works better than something too heavy to sustain.",
      },
      {
        question: "Why are family prayers valuable?",
        answer:
          "They build a common life of faith, create spiritual memory, and help the household bring both joys and burdens before God together.",
      },
    ],
    relatedDirection:
      "Family Prayers naturally connect with Morning Offering, Night Prayer, and Marian Devotion when the home becomes a place of daily trust and blessing.",
    summary:
      "Family Prayers help households turn together toward God in gratitude, peace, and shared faith.",
  },
  {
    title: "Vocational Discernment Prayers",
    slug: "vocational-discernment-prayers",
    shortDescription:
      "Vocational Discernment Prayers ask for clarity, courage, peace, and fidelity when seeking God's call in life.",
    intro:
      "In Catholic life, vocational discernment is not only about big drama. It is about learning to notice God's invitation and respond with patience, trust, and generosity.",
    keyThemes: [
      "Calling",
      "Discernment",
      "Courage",
      "Peace",
      "Fidelity",
      "Listening for God",
    ],
    commonMoments: [
      "When discerning marriage, priesthood, religious life, or single life",
      "When considering a major life commitment",
      "When feeling torn between options",
      "When you need courage to follow what is right",
      "When you want God's will more than your own preference",
    ],
    exampleSituations: [
      "A Catholic may pray for vocational discernment while considering a relationship, ministry path, religious calling, major move, or life direction that affects the future deeply.",
      "These prayers also fit seasons when a person feels called toward greater service, deeper surrender, or more faithful use of gifts already given.",
    ],
    faqItems: [
      {
        question: "What are vocational discernment prayers?",
        answer:
          "They are prayers asking God for help in recognizing and following His call in one's state of life, commitments, work, and service.",
      },
      {
        question: "Is vocation only about priesthood or religious life?",
        answer:
          "No. In Catholic understanding, vocation includes marriage, consecrated life, priesthood, and other faithful forms of calling and service.",
      },
      {
        question: "What if discernment takes time?",
        answer:
          "That is normal. Discernment often unfolds gradually through prayer, counsel, honesty, and growing peace rather than instant certainty.",
      },
    ],
    relatedDirection:
      "Vocational Discernment Prayers naturally connect with Prayers for Guidance, Petition, and Saint-inspired Prayers when a person is seeking a faithful yes.",
    summary:
      "Vocational Discernment Prayers help Catholics seek God's call with courage, patience, and open hearts.",
  },
  {
    title: "Morning Offering",
    slug: "morning-offering",
    shortDescription:
      "Morning Offering is prayer that places the whole day before God from the very beginning.",
    intro:
      "In Catholic life, Morning Offering helps a person start the day with intention, gratitude, surrender, and a willingness to unite ordinary work and suffering to God.",
    keyThemes: [
      "Consecrating the day",
      "Intention",
      "Readiness",
      "Gratitude at dawn",
      "Offering daily work",
      "Faithful beginning",
    ],
    commonMoments: [
      "Right after waking",
      "Before work or responsibilities begin",
      "When you want to begin the day with purpose",
      "When facing a difficult or uncertain day",
      "When you want to offer both joys and burdens to God",
    ],
    exampleSituations: [
      "A Catholic may pray a Morning Offering at bedside, over coffee, before leaving the house, or before beginning treatment, work, service, or caregiving.",
      "It is especially helpful on hard days when a person wants to place everything into God's hands before the rush begins.",
    ],
    faqItems: [
      {
        question: "What is a Morning Offering?",
        answer:
          "A Morning Offering is a prayer that gives the coming day to God, including work, joys, struggles, relationships, and intentions.",
      },
      {
        question: "Does it need to be long?",
        answer:
          "No. It can be very brief, as long as it sincerely places the day in God's care and service.",
      },
      {
        question: "Why is Morning Offering helpful?",
        answer:
          "It creates direction at the start of the day and helps ordinary life become more intentional, prayerful, and God-centered.",
      },
    ],
    relatedDirection:
      "Morning Offering naturally connects with Prayers for Guidance, Family Prayers, and Advent Prayers when the day begins with expectation and trust.",
    summary:
      "Morning Offering starts the day by placing everything ahead into God's hands.",
  },
  {
    title: "Night Prayer",
    slug: "night-prayer",
    shortDescription:
      "Night Prayer closes the day with reflection, trust, mercy, peace, and rest in God.",
    intro:
      "In Catholic life, Night Prayer helps a person bring the day to a gentle end. It makes room for gratitude, repentance, surrender, and quiet trust before sleep.",
    keyThemes: [
      "Peace at day's end",
      "Rest",
      "Mercy",
      "Reflection",
      "Trust through the night",
      "Surrender",
    ],
    commonMoments: [
      "Before going to sleep",
      "When the mind is restless at night",
      "After a difficult or unfinished day",
      "When you want to release worry to God",
      "As part of a regular evening prayer rhythm",
    ],
    exampleSituations: [
      "A Catholic may pray at bedside after a demanding day, after family stress, after good news, or after a day that needs quiet repentance and release.",
      "Night Prayer is also a fitting way to entrust unresolved problems, fears, and tomorrow itself to God's care before sleep.",
    ],
    faqItems: [
      {
        question: "What is Night Prayer?",
        answer:
          "Night Prayer is prayer offered at the close of the day, often marked by reflection, trust, mercy, thanksgiving, and readiness for rest.",
      },
      {
        question: "Does Night Prayer include repentance?",
        answer:
          "Often it does. Many Catholics naturally join evening reflection, gratitude, and repentance as they close the day before God.",
      },
      {
        question: "Why is Night Prayer useful?",
        answer:
          "It helps calm the heart, release burden, and rest in God rather than carrying every thought into the night alone.",
      },
    ],
    relatedDirection:
      "Night Prayer naturally connects with Examination of Conscience, Contrition, and Prayers for Mercy when the day closes in honesty and peace.",
    summary:
      "Night Prayer helps Catholics end the day with peace, mercy, and trust in God.",
  },
  {
    title: "Advent Prayers",
    slug: "advent-prayers",
    shortDescription:
      "Advent Prayers are prayers of waiting, hope, longing, preparation, and expectation for Christ.",
    intro:
      "In Catholic life, Advent prayer forms the heart to wait well. It combines hope, repentance, longing, and quiet readiness for the coming of the Lord.",
    keyThemes: [
      "Waiting",
      "Hope",
      "Preparation",
      "Longing",
      "Light in darkness",
      "Expectation of Christ",
    ],
    commonMoments: [
      "During the Advent season",
      "When lighting an Advent wreath",
      "When preparing the heart for Christmas",
      "When life feels marked by longing and waiting",
      "When you want to grow in hopeful expectation",
    ],
    exampleSituations: [
      "A Catholic may pray Advent prayers at home with family, before Mass, in the early morning, or in a season when life itself feels like waiting.",
      "These prayers are especially fitting when a person wants to resist hurry and prepare the heart with hope, repentance, and joyful expectation.",
    ],
    faqItems: [
      {
        question: "What are Advent Prayers?",
        answer:
          "They are prayers shaped by the Advent season, marked by waiting, hope, repentance, preparation, and longing for Christ.",
      },
      {
        question: "Are Advent prayers only for December?",
        answer:
          "They belong especially to the Advent season, but their themes of hope and faithful waiting can resonate at other times too.",
      },
      {
        question: "Why are Advent prayers meaningful?",
        answer:
          "They teach the soul to wait with faith, prepare with intention, and hope for Christ's coming with renewed longing.",
      },
    ],
    relatedDirection:
      "Advent Prayers naturally connect with Marian Devotion, Morning Offering, and Saint-inspired Prayers when waiting is joined to trust and preparation.",
    summary:
      "Advent Prayers help Catholics wait for Christ with hope, longing, and readiness.",
  },
  {
    title: "Lenten Prayers",
    slug: "lenten-prayers",
    shortDescription:
      "Lenten Prayers are prayers of repentance, simplicity, self-examination, mercy, and spiritual renewal.",
    intro:
      "In Catholic life, Lent calls the heart toward deeper conversion. Lenten prayer often becomes quieter, plainer, and more searching.",
    keyThemes: [
      "Repentance",
      "Simplicity",
      "Fasting and discipline",
      "Mercy",
      "Self-examination",
      "Renewal",
    ],
    commonMoments: [
      "During the Lenten season",
      "Before Confession",
      "When spiritual habits need renewal",
      "When penance and prayer belong together",
      "When preparing for Holy Week and Easter",
    ],
    exampleSituations: [
      "A Catholic may pray Lenten prayers in the early morning, before Stations of the Cross, during fasting, or when asking God to expose what needs healing and change.",
      "These prayers also fit anyone who feels spiritually dull and wants to return to God with seriousness, honesty, and hope.",
    ],
    faqItems: [
      {
        question: "What are Lenten Prayers?",
        answer:
          "They are prayers shaped by the season of Lent, often focused on repentance, mercy, sacrifice, spiritual clarity, and renewed conversion.",
      },
      {
        question: "Do Lenten prayers need to be severe?",
        answer:
          "Not necessarily. They are often simpler and more searching, but they are meant to lead toward grace and renewal rather than harshness for its own sake.",
      },
      {
        question: "How do Lenten prayers help?",
        answer:
          "They create space for honest repentance, self-examination, discipline, and deeper openness to God's transforming mercy.",
      },
    ],
    relatedDirection:
      "Lenten Prayers naturally connect with Contrition, Examination of Conscience, and Prayers for Mercy when the soul is being called back to God more deeply.",
    summary:
      "Lenten Prayers help Catholics return to God with repentance, simplicity, and renewed hearts.",
  },
  {
    title: "Easter Prayers",
    slug: "easter-prayers",
    shortDescription:
      "Easter Prayers are prayers of resurrection joy, gratitude, hope, and new life in Christ.",
    intro:
      "In Catholic life, Easter prayer is bright with praise and hope. It celebrates Christ's victory over death and the renewal of life that flows from Him.",
    keyThemes: [
      "Resurrection",
      "Joy",
      "Gratitude",
      "New life",
      "Hope",
      "Victory in Christ",
    ],
    commonMoments: [
      "During the Easter season",
      "After a season of grief or heaviness begins to lift",
      "When celebrating renewal, healing, or answered prayer",
      "When joy and gratitude want words",
      "When you want to pray from resurrection hope",
    ],
    exampleSituations: [
      "A Catholic may pray Easter prayers after the Easter Vigil, during the fifty days of Easter, after recovery from hardship, or when new hope has genuinely returned.",
      "These prayers are also fitting whenever a person wants to remember that sorrow does not have the final word in Christ.",
    ],
    faqItems: [
      {
        question: "What are Easter Prayers?",
        answer:
          "They are prayers shaped by the joy, hope, gratitude, and resurrection faith of Easter and the risen life of Christ.",
      },
      {
        question: "Are Easter prayers only joyful?",
        answer:
          "They are strongly joyful, but their joy often comes through contrast with suffering, death, and the long road that preceded resurrection hope.",
      },
      {
        question: "Why are Easter prayers important?",
        answer:
          "They help Christians pray from hope, remember Christ's victory, and receive new life with gratitude and praise.",
      },
    ],
    relatedDirection:
      "Easter Prayers naturally connect with Thanksgiving, Adoration, and Family Prayers when joy becomes shared praise and grateful remembrance.",
    summary:
      "Easter Prayers help Catholics pray from resurrection joy, gratitude, and enduring hope.",
  },
  {
    title: "Saint-inspired Prayers",
    slug: "saint-inspired-prayers",
    shortDescription:
      "Saint-inspired Prayers draw on the witness, virtues, examples, and intercessory help associated with the saints.",
    intro:
      "In Catholic life, the saints are not distant decorations. Their lives can encourage, instruct, and accompany believers who are trying to live faithfully in ordinary and difficult circumstances.",
    keyThemes: [
      "Witness of the saints",
      "Intercession",
      "Holiness",
      "Virtue",
      "Courage",
      "Imitation of faithful lives",
    ],
    commonMoments: [
      "On a saint's feast day",
      "When you need a holy example",
      "When asking help with a particular struggle or calling",
      "When you want encouragement from the Church's lived witness",
      "When faithfulness feels difficult and you need courage",
    ],
    exampleSituations: [
      "A Catholic may pray in a saint-inspired way when seeking courage like a martyr, patience like a humble servant, missionary zeal, deeper prayer, or help with a vocation.",
      "These prayers also fit moments when a person wants to feel connected to the wider communion of saints and the concrete lives of holiness that came before.",
    ],
    faqItems: [
      {
        question: "What are Saint-inspired Prayers?",
        answer:
          "They are prayers shaped by the example, witness, virtues, or intercessory remembrance of particular saints.",
      },
      {
        question: "Do saint-inspired prayers replace prayer to God?",
        answer:
          "No. They remain part of a God-centered Catholic life while drawing encouragement and intercessory help from the saints.",
      },
      {
        question: "Why are saint-inspired prayers helpful?",
        answer:
          "They make holiness feel more concrete and remind believers that grace has been lived out in many real human lives.",
      },
    ],
    relatedDirection:
      "Saint-inspired Prayers naturally connect with Marian Devotion, Vocational Discernment Prayers, and Advent Prayers when example, trust, and holiness guide the heart.",
    summary:
      "Saint-inspired Prayers help Catholics learn from holy lives and seek faithful courage for their own.",
  },
];

export function getCatholicPrayerTypeBySlug(
  slug: string
): CatholicPrayerType | undefined {
  return CATHOLIC_PRAYER_TYPES.find((item) => item.slug === slug);
}