// /lib/sitelinks.ts

export type NavLink = { label: string; href: string };

export const headerLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "PRAYER TYPES", href: "/prayer-types" },
  { label: "COMMUNITY", href: "/community" },
];

export const supportLinks: NavLink[] = [
  { label: "Help", href: "/support" },
  { label: "Donate", href: "/donate" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Report Issue", href: "/report" },
  { label: "Email Support", href: "mailto:support@praywithgod.ai" },
  { label: "General Contact", href: "mailto:contact@praywithgod.ai" },
];