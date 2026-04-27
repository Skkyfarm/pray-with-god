// /lib/siteLinks.ts

export type NavLink = { label: string; href: string };

export const headerLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "PRAYER TYPES", href: "/prayer-types" },
  { label: "COMMUNITY", href: "/community" },
];

export const supportLinks: NavLink[] = [
  { label: "Support PWG", href: "/support" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Report Issue", href: "/report" },
];