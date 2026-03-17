export type NavLink = { label: string; href: string };
export type FooterLink = { label: string; href?: string };

export const headerLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "COMMUNITY", href: "/community" },
];

export const supportLinks: NavLink[] = [
  { label: "Donate", href: "/donate" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Report Issue", href: "/report" },
];

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Spiritual",
    links: [
      { label: "Pray", href: "/pray" },
      { label: "Exploring", href: "/pray?path=grace&mode=free" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Prayer Requests", href: "/community" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Mission", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];