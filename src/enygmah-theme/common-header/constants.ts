import {
  DocumentsIcon,
  IntegrationsIcon,
  TutorialIcon,
  ExamplesIcon,
  AwesomeIcon,
  ContributeIcon,
  EnygmahWeekIcon,
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
        label: "Help develop enygmah",
        description: "Submit an Issue or a PR",
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
        label: "Contributing Docs",
        description: "Join open-source contributors.",
        link: "/docs/",
        icon: ContributeIcon,
      },
      {
        label: "Contribution Guide",
        description: "Repo with all that you need to start.",
        link: "https://github.com/hotaydev/enygmah/blob/main/CONTRIBUTING.md",
        icon: EnygmahWeekIcon,
      },
    ],
  },
  {
    isPopover: true,
    label: "Company",
    items: [
      {
        label: "About enygmah",
        description: "Tool important information.",
        link: "https://github.com/hotaydev/enygmah/blob/main/README.md",
        icon: ContributeIcon,
      },
      {
        label: "Meet hotay",
        description: "The company behind the enygmah",
        link: "https://hotay.dev",
        icon: MeetIcon,
      },
    ],
  },
];
