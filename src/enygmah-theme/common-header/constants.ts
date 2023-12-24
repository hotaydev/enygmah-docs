import {
  DocumentsIcon,
  IntegrationsIcon,
  TutorialIcon,
  ExamplesIcon,
  AwesomeIcon,
  ContributeIcon,
  EnygmahWeekIcon,
  HackathonsIcon,
  AboutUsIcon,
  StoreIcon,
  MeetIcon,
  BlogIcon,
} from "../icons/popover";

export type NavbarPopoverItemType = {
    isPopover: true;
    label: string;
    items: {
        label: string;
        description: string;
        link: string;
        icon: React.FC;
    }[];
};

export type NavbarItemType = {
    isPopover?: false;
    label: string;
    icon?: React.FC;
    href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
  {
    isPopover: true,
    label: "Open-source",
    items: [
      {
        label: "Documentation",
        description: "Everything you need to get started.",
        link: "/docs/",
        icon: DocumentsIcon,
      },
      {
        label: "Tutorial",
        description: "Create your first enygmah application.",
        link: "/docs",
        icon: TutorialIcon,
      },
      {
        label: "Awesome enygmah",
        description: "Repository of awesome things.",
        link: "https://github.com/hotaydev/enygmah",
        icon: AwesomeIcon,
      },
      {
        label: "Integrations",
        description: "Discover the enygmah ecosystem.",
        link: "/docs",
        icon: IntegrationsIcon,
      },
      {
        label: "Examples",
        description: "Ready-made snippets for your projects.",
        link: "/docs",
        icon: ExamplesIcon,
      },
      {
        label: "Blog",
        description: "Articles about web development.",
        link: "/blog",
        icon: BlogIcon,
      },
    ],
  },
  {
    isPopover: true,
    label: "Community",
    items: [
      {
        label: "Contributing",
        description: "Join open-source contributors.",
        link: "/docs/",
        icon: ContributeIcon,
      },
      {
        label: "enygmahWeek",
        description: "Weekly projects to practice enygmah.",
        link: "/docs",
        icon: EnygmahWeekIcon,
      },
      {
        label: "Hackathons",
        description: "Compete in hackathons and earn prizes!",
        link: "/docs",
        icon: HackathonsIcon,
      },
    ],
  },
  {
    isPopover: true,
    label: "Company",
    items: [
      {
        label: "About enygmah",
        description: "Team & company information.",
        link: "/docs",
        icon: AboutUsIcon,
      },
      {
        label: "Swag Store",
        description: "T-shirts, caps, and more!",
        link: "/docs",
        icon: StoreIcon,
      },
      {
        label: "Meet enygmah",
        description: "Call us for any questions",
        link: "/docs",
        icon: MeetIcon,
      },
    ],
  },
];
