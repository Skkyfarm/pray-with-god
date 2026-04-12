// /lib/sitelinks.ts

export type NavLink = { label: string; href: string };
export type FooterLink = { label: string; href?: string }; // href optional = non-clickable

export const headerLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "PRAYER TYPES", href: "/prayer-types" },
  { label: "COMMUNITY", href: "/community" },
];

export const supportLinks: NavLink[] = [
  { label: "Support", href: "/support" },
  { label: "Donate", href: "/donate" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Report Issue", href: "/report" },
  { label: "Email Support", href: "mailto:support@praywithgod.ai" },
  { label: "General Contact", href: "mailto:contact@praywithgod.ai" },
];

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Spiritual",
    links: [
      { label: "Daily Prayer", href: "/" },
      { label: "Meditation" },
      { label: "Scripture" },
      { label: "Traditions", href: "/" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Prayer Requests", href: "/community" },
      { label: "Testimonies" },
      { label: "Support Groups" },
      { label: "Share the Site" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Report Issue", href: "/report" },
      { label: "Email Support", href: "mailto:support@praywithgod.ai" },
      { label: "General Contact", href: "mailto:contact@praywithgod.ai" },
    ],
  },
];