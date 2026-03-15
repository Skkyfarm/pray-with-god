export type NavLink = { label: string; href: string };
export type FooterLink = { label: string; href?: string }; // href optional = non-clickable

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
      { label: "Circles", href: "/community" },
      { label: "Events" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Library", href: "/library" },
      { label: "Guides" },
      { label: "Podcasts" },
      { label: "Videos" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Mission", href: "/about" },
      { label: "Exploring", href: "/pray?path=grace&mode=free" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];