


prayer TRADITIONS SUPPORTED:

* NON-DENOMINATIONAL
  
* DENOMINATIONAL
CHRISTIAN
  -Catholic
  -Protestant
JEWISH
MUSLIM
HINDU
BUDDIST

PRAYER TYPE LISTS (include these exact items):
Catholic:
•	Adoration
•	Confession
•	Thanksgiving
•	Supplication
•	The Lord’s Prayer
•	The Prayer of Jabez
•	The Serenity Prayer
•	The Prayer of St. Francis
•	The Prayer of Hannah
•	The Prayer of King Solomon
•	The Prayer of Mary, the mother of Jesus
•	The Prayer of St. Augustine
•	The Prayer of St. Ignatius of Loyola
•	The Prayer of St. Therese of Lisieux
Protestant:
•	Confessional Prayers
•	Thanksgiving Prayers
•	Intercessory Prayers
•	Petitionary Prayers
•	Adoration Prayers
•	Praise Prayers
•	Lamentation Prayers
•	Liturgical Prayers
•	Prayers of Penitence
•	Meditative Prayers
Jewish:
•	Shacharit
•	Mincha
•	Maariv
•	Kabbalat Shabbat
•	Mussaf
•	Hallel
•	Vidui
•	Selichot
•	Tehillim
•	Tashlich
•	Birkat Hamazon
•	Tefilat Haderech
Muslim:
•	Fajr Prayer
•	Dhuhr Prayer
•	Asr Prayer
•	Maghrib Prayer
•	Isha Prayer

•	Two tabs:
o	Non-denominational

o	Denominational (filter by tradition)
•	Implement a “message board stub”:
o	seed posts in /data/community.json
o	allow posting anonymously (default) to localStorage
o	show disclaimer: “Demo mode — public posting and moderation coming soon.”
•	Add simple “Report” button that just shows a modal explaining moderation will be added later.

7.	Donation Page (stub)
On /donate:

*Hindu and Buddhist “Types of Prayers” you can use

Hindu: good “types” for your UX
These map well to a “choose a type” interface while staying broad and non-sectarian:
Gāyatrī / Sacred Mantra Prayer (mantra-focused, uplifting)
Bhakti Devotional Prayer (love + devotion; personal relationship with the Divine)
Stuti (praise/adoration; honoring Divine qualities)
Prārthanā (personal request/prayer; guidance, protection, healing)
Śānti Pāṭha (peace prayer; calm, harmony, protection)
Sankalpa (intention-setting prayer; inner transformation and resolve)
Gratitude / Offering Prayer (thankfulness; “may this offering be pure” tone)
Kṣamā Prārthanā (forgiveness/cleansing prayer; humility + renewal)
Tone/structure guidance (what you already started):
poetic imagery
devotion language
inner transformation theme

Buddhist: “types” that fit Buddhism accurately
Buddhism is usually less “prayer to a deity” and more vow, aspiration, compassion, and mind training. So call them “prayer types” in UX, but structure them as practices/aspirations:
Metta (Loving-Kindness) Aspiration (warmth toward self/others)
Karunā (Compassion) Aspiration (relief of suffering; outward focus)
Mindfulness / Present-Awareness Reflection (grounding + steadiness)
Release of Anxiety / Letting Go (non-clinging language)
Forgiveness & Reconciliation Reflection (softening + repair)
Dedication of Merit (wish goodness to spread to all beings)
Protection / Refuge Prayer (calm refuge language; non-fear-based)
Equanimity Practice (balance, acceptance, steadiness)
Tone/structure guidance (your rules are good):
present awareness
compassion outward
release of suffering
minimal theistic language

If you want it extra clean, you can label Buddhist ones as “Reflections” or “Aspirations” in the copy, while still treating them as “types” in the UI.

I. Home Page Design
A. Spiritual-themed background. Crepuscular rays over beautiful lands. In the center of the page, an attractive, motherly AI woman avatar (mother thing) welcomes you, and invites you to select from the links below. 
Key Details About the Mother Thing from “Have spacesuit will travel” by Robert Heinlein:
•	Role: She is a protective figure, 
•	Nature: She is a member of an advanced, benevolent alien race (referred to as Vegan) who acts as an intergalactic guardian. But a beautiful human woman to us
•	Escape: She plays a crucial role in engineering an escape from their captors, demonstrating high intelligence and compassion. 
She is trained as a chatbot to answer questions and has a polite, pleasant, calming, and inviting appearance and manner. She is trained in human psychology and ministerial caring.
B. The Welcome Paragraph is spoken by “Grace, (The Welcome Paragraph's text is formed from the following links and functions on the page). ‘She’ explains all about the Pray with God site, which includes her asking you for your name, age, location, and what brings you here, and for you to choose from the following Pages:
	1. Quick Prayer Request  Prayer Request page (nondenominational)
2. Invitation to pray (denominational) Types of Prayers page
		3. Invitation to become a Pray With God Site Member  Membership Page
		4. Join Our Community Page  Community Page
		5. Invitation to donate to help Others  Donation page

* Here is the current file list for the project:
Root Directory
.env.example
.gitignore
metadata.json
next-env.d.ts
package.json
package-lock.json
postcss.config.js
tailwind.config.js
tsconfig.json
/app (Next.js App Router)
layout.tsx (Root layout)
page.tsx (Homepage)
globals.css (Global styles)
/about/page.tsx
/choose/page.tsx (Tradition selection)
/choose/christian/page.tsx
/pray/page.tsx (Main prayer interface)
/support/page.tsx
/health/ (Health check directory)
/prayer-request/ (Prayer request directory)
/components (Reusable UI)
AvatarHero.tsx
FooterLinkArray.tsx
GraceCard.tsx
GuideAvatar.tsx
NameCapture.tsx
TraditionCards.tsx
/lib (Utilities & Data)
avatars.ts (Tradition and avatar definitions)
/public
Static assets (images, icons, etc.)
_____________________________________________________________________________________________

# PrayWithGod.ai — Design Spec (PWG Version 3)

## Vision
PrayWithGod.ai is a universal, compassionate prayer experience that helps people express need, gratitude, grief, hope, and transformation across multiple spiritual traditions.

The experience centers on a welcoming guide (“Grace”) and tradition-specific guides who help shape prayer language respectfully.

---

## Core Prayer Paths

### 1. Quick Prayer (Non-Denominational)
- Guided by Grace
- User shares situation
- Prayer generated using structured templates + tone rules
- Option:
  - Pray with me (guided)
  - Show prayer text

### 2. Types of Prayers (Tradition-Specific)
User selects a tradition and a prayer type.
The system shapes language, structure, imagery, and tone accordingly.

Supported traditions:
- Grace (universal)
- Catholic
- Protestant
- Jewish
- Muslim
- Hindu
- Buddhist

---

## Formation Rules by Tradition

### Grace (Universal)
- Simple acknowledgment
- Gentle prayer language
- Hope line
- Quiet release

### Catholic
- Invocation
- Petition
- Surrender to God’s will
- Traditional closing tone

### Protestant
- Conversational pastoral voice
- Scripture-flavored encouragement
- Direct address to God

### Jewish
- Reflective naming (Source of Peace, Eternal One)
- Wisdom framing
- Hope rooted in continuity

### Muslim
- Mercy attributes of God
- Trust language
- Submission framing
- Closing peace tone

### Hindu
- Poetic imagery
- Devotion language (Bhakti)
- Inner transformation theme
- Sacred intention language

### Buddhist
- Present awareness
- Compassion outward
- Release of suffering
- Minimal theistic language
- Dedication of goodness to all beings

---

## Prayer Type Lists

### Catholic
Adoration  
Confession  
Thanksgiving  
Supplication  
The Lord’s Prayer  
The Prayer of Jabez  
The Serenity Prayer  
The Prayer of St. Francis  
The Prayer of Hannah  
The Prayer of King Solomon  
The Prayer of Mary  
The Prayer of St. Augustine  
The Prayer of St. Ignatius of Loyola  
The Prayer of St. Therese of Lisieux  

### Protestant
Confessional  
Thanksgiving  
Intercessory  
Petition  
Adoration  
Praise  
Lament  
Liturgical  
Penitence  
Meditative  

### Jewish
Shacharit  
Mincha  
Maariv  
Kabbalat Shabbat  
Mussaf  
Hallel  
Vidui  
Selichot  
Tehillim  
Tashlich  
Birkat Hamazon  
Tefilat Haderech  

### Muslim
Fajr  
Dhuhr  
Asr  
Maghrib  
Isha  

---

## Hindu Prayer Types
Gayatri / Sacred Mantra  
Bhakti Devotional  
Stuti (Praise)  
Prarthana (Personal Request)  
Shanti Path (Peace Prayer)  
Sankalpa (Intention Setting)  
Gratitude / Offering  
Kshama Prarthana (Forgiveness)

---

## Buddhist Prayer / Reflection Types
Metta (Loving Kindness)  
Karuna (Compassion)  
Mindfulness Reflection  
Letting Go / Release  
Forgiveness Reflection  
Dedication of Merit  
Refuge / Protection  
Equanimity Practice  

---

## UX Principles
- Calm, human, non-judgmental
- Short readable prayers
- Guided option always available
- Respectful representation of traditions
- No coercion
- Gentle crisis guidance when needed

---

## Technical Direction (Current)
- Next.js App Router
- Tailwind
- LocalStorage for profile + session
- Template-based generation with future AI layer
- GitHub + Vercel deployment

---

## Next Phase Focus
- Scroll positioning fix (reading flow)
- Finalize prayer generation engine
- Avatar expansion for traditions
- AI-assisted prayer refinement
- Community evolution
- 
