// import { FooterDiscordIcon } from "./icons/footer-discord";
import { FooterGithubIcon } from "./icons/footer-github";
import { FooterLinkedinIcon } from "./icons/footer-linkedin";
// import { FooterRedditIcon } from "./icons/footer-reddit";
import { FooterTwitterIcon } from "./icons/footer-twitter";

export const menuItems = [
  {
    label: "Resources",
    items: [
      {
        label: "Getting Started",
        href: "/docs",
      },
      {
        label: "Tutorials",
        href: "/docs",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    label: "Product",
    items: [
      {
        label: "Examples",
        href: "/docs",
      },
      {
        label: "Integrations",
        href: "/docs",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About",
        href: "/docs",
      },
      {
        label: "Store",
        href: "#",
      },
      {
        label: "Contact Us",
        href: "mailto:hi@enygmah.com",
      },
    ],
  },
];

export const secondaryMenuItems = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "License",
    href: "https://github.com/hotaydev/hotay/blob/main/LICENSE",
  },
];

export const socialLinks = [
  {
    icon: FooterGithubIcon,
    href: "https://github.com/hotaydev/enygmah",
  },
  // {
  //   icon: FooterDiscordIcon,
  //   href: "https://discord.gg/hotaydev",
  // },
  // {
  //   icon: FooterRedditIcon,
  //   href: "https://www.reddit.com/r/hotaydev/",
  // },
  {
    icon: FooterTwitterIcon,
    href: "https://twitter.com/hotaydev",
  },
  {
    icon: FooterLinkedinIcon,
    href: "https://www.linkedin.com/company/hotaydev",
  },
];
