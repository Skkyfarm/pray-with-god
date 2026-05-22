export const PROTESTANT_LORDS_PRAYER_KJV = `Our Father which art in heaven, Hallowed be thy name.

Thy kingdom come. Thy will be done in earth, as it is in heaven.

Give us this day our daily bread.

And forgive us our debts, as we forgive our debtors.

And lead us not into temptation, but deliver us from evil:

For thine is the kingdom, and the power, and the glory, for ever. Amen.`;

export const PROTESTANT_JABEZ_KJV = `And Jabez called on the God of Israel, saying, Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me, and that thou wouldest keep me from evil, that it may not grieve me! And God granted him that which he requested.`;

export const PSALM_23_KJV = `The LORD is my shepherd; I shall not want.

He maketh me to lie down in green pastures: he leadeth me beside the still waters.

He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.

Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.

Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.

Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.`;

export const PSALM_51_KJV = `Have mercy upon me, O God, according to thy lovingkindness: according unto the multitude of thy tender mercies blot out my transgressions.

Wash me throughly from mine iniquity, and cleanse me from my sin.

For I acknowledge my transgressions: and my sin is ever before me.

Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mightest be justified when thou speakest, and be clear when thou judgest.

Behold, I was shapen in iniquity; and in sin did my mother conceive me.

Behold, thou desirest truth in the inward parts: and in the hidden part thou shalt make me to know wisdom.

Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow.

Make me to hear joy and gladness; that the bones which thou hast broken may rejoice.

Hide thy face from my sins, and blot out all mine iniquities.

Create in me a clean heart, O God; and renew a right spirit within me.

Cast me not away from thy presence; and take not thy holy spirit from me.

Restore unto me the joy of thy salvation; and uphold me with thy free spirit.

Then will I teach transgressors thy ways; and sinners shall be converted unto thee.

Deliver me from bloodguiltiness, O God, thou God of my salvation: and my tongue shall sing aloud of thy righteousness.

O Lord, open thou my lips; and my mouth shall shew forth thy praise.

For thou desirest not sacrifice; else would I give it: thou delightest not in burnt offering.

The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.

Do good in thy good pleasure unto Zion: build thou the walls of Jerusalem.

Then shalt thou be pleased with the sacrifices of righteousness, with burnt offering and whole burnt offering: then shall they offer bullocks upon thine altar.`;

export const PSALM_90_KJV = `Lord, thou hast been our dwelling place in all generations.

Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.

Thou turnest man to destruction; and sayest, Return, ye children of men.

For a thousand years in thy sight are but as yesterday when it is past, and as a watch in the night.

Thou carriest them away as with a flood; they are as a sleep: in the morning they are like grass which groweth up.

In the morning it flourisheth, and groweth up; in the evening it is cut down, and withereth.

For we are consumed by thine anger, and by thy wrath are we troubled.

Thou hast set our iniquities before thee, our secret sins in the light of thy countenance.

For all our days are passed away in thy wrath: we spend our years as a tale that is told.

The days of our years are threescore years and ten; and if by reason of strength they be fourscore years, yet is their strength labour and sorrow; for it is soon cut off, and we fly away.

Who knoweth the power of thine anger? even according to thy fear, so is thy wrath.

So teach us to number our days, that we may apply our hearts unto wisdom.

Return, O LORD, how long? and let it repent thee concerning thy servants.

O satisfy us early with thy mercy; that we may rejoice and be glad all our days.

Make us glad according to the days wherein thou hast afflicted us, and the years wherein we have seen evil.

Let thy work appear unto thy servants, and thy glory unto their children.

And let the beauty of the LORD our God be upon us: and establish thou the work of our hands upon us; yea, the work of our hands establish thou it.`;
export const KJV_NAMED_PRAYER_TEXTS: Record<string, string> = {
  "The Lord's Prayer": PROTESTANT_LORDS_PRAYER_KJV,
  "The Prayer of Jabez": PROTESTANT_JABEZ_KJV,
  "Psalm 23": PSALM_23_KJV,
  "Psalm 51": PSALM_51_KJV,
  "Psalm 90 / Prayer of Moses": PSALM_90_KJV,
};

export function normalizeNamedPrayerLabel(label: string) {
  return label
    .replace(/\u2018|\u2019/g, "'")
    .replace(/â€˜|â€™|Ã¢â‚¬Ëœ|Ã¢â‚¬â„¢/g, "'")
    .trim();
}

export function getKjvNamedPrayerText(label: string) {
  return KJV_NAMED_PRAYER_TEXTS[normalizeNamedPrayerLabel(label)] || null;
}