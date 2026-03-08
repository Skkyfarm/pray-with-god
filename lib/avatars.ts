export interface AvatarMetadata {
  id: string;
  label: string;
  name: string;
  imagePath: string;
  fallbackPath?: string;
  guidance: string;
  greeting: string;
}

export const AVATARS: Record<string, AvatarMetadata> = {
  grace: {
    id: "grace",
    label: "Non-Denominational",
    name: "Grace",
    imagePath: "/avatars/grace.png",
    fallbackPath: "/avatars/grace.svg",
    greeting: "I’m Grace. I’m here to hold space for you. What brings you here today?",
    guidance: "A gentle presence for all souls."
  },
  quiet: {
    id: "quiet",
    label: "Silence",
    name: "Silence",
    imagePath: "/avatars/grace.png",
    fallbackPath: "/avatars/grace.svg",
    greeting: "Let us begin in the quiet. What is on your heart?",
    guidance: "A space for wordless reflection."
  },
  christian: {
    id: "christian",
    label: "Father Thomas",
    name: "Father Thomas",
    imagePath: "/avatars/minister.png",
    fallbackPath: "/avatars/priest.svg",
    greeting: "Peace be with you. How can I pray for you today?",
    guidance: "Traditional Christian guidance and intercession."
  },
  catholic: {
    id: "catholic",
    label: "Father Thomas",
    name: "Father Thomas",
    imagePath: "/avatars/priest.png",
    fallbackPath: "/avatars/priest.svg",
    greeting: "Peace be with you. What would you like to bring into prayer?",
    guidance: "Traditional Catholic liturgy and intercession."
  },
  protestant: {
    id: "protestant",
    label: "Pastor Blumenthal",
    name: "Pastor Blumenthal",
    imagePath: "/avatars/minister.png",
    fallbackPath: "/avatars/priest.svg",
    greeting: "Welcome. What would you like to bring into prayer?",
    guidance: "Scripture-focused prayer and grace."
  },
  jewish: {
    id: "jewish",
    label: "Rabbi Avram",
    name: "Rabbi Avram",
    imagePath: "/avatars/rabbi.png",
    fallbackPath: "/avatars/rabbi.svg",
    greeting: "Shalom. May we find strength in our shared words. What is on your heart?",
    guidance: "Rooted in Jewish tradition and wisdom."
  },
  muslim: {
    id: "muslim",
    label: "Imam Hassan",
    name: "Imam Hassan",
    imagePath: "/avatars/imam.png",
    fallbackPath: "/avatars/imam.svg",
    greeting: "As-salamu alaykum. Let us seek peace and guidance together.",
    guidance: "Islamic prayer and spiritual support."
  },
  hindu: {
    id: "hindu",
    label: "Hindu Tradition",
    name: "Universal Soul",
    imagePath: "/avatars/hindu.png",
    greeting: "Namaste. What would you like to bring into prayer?",
    guidance: "Seeking connection with the divine within."
  },
  buddhist: {
    id: "buddhist",
    label: "Buddhist Tradition",
    name: "Inner Peace",
    imagePath: "/avatars/buddhist.png",
    greeting: "May you be at peace. What would you like to bring into prayer?",
    guidance: "Mindfulness and compassionate reflection."
  }
};

export type Tradition = keyof typeof AVATARS;