import { NavMenu } from "../types/nav-menu";
import {
  DocumentsIcon,
  IntegrationsIcon,
  TutorialIcon,
  ExamplesIcon,
  AwesomeIcon,
  ExpertIcon,
  ContributeIcon,
  UseCasesIcon,
  EnygmahWeekIcon,
  AboutUsIcon,
  EnygmahStoreIcon,
  EnygmahIcon,
} from "./popover-icons";

export const POPOVERMENUS: NavMenu[] = [
  {
    label: "Open-source",
    items: [
      {
        label: "Documents",
        description: "Everything you need to get started",
        link: "/docs/",
        icon: DocumentsIcon,
      },
      {
        label: "Integrations",
        description: "Discover the enygmah ecosystem",
        link: "/docs",
        icon: IntegrationsIcon,
      },
      {
        label: "Tutorial",
        description: "Your first enygmah application",
        link: "/docs",
        icon: TutorialIcon,
      },
      {
        label: "Examples",
        description: "Ready-made snippets for your project",
        link: "/docs",
        icon: ExamplesIcon,
      },
      {
        label: "Awesome enygmah",
        description: "Repo of awesome things",
        link: "https://github.com/hotaydev/enygmah",
        icon: AwesomeIcon,
      },
    ],
    imageLink: "https://github.com/hotaydev/enygmah",
    imageURL:
            "/img/general-replaceable-images/open-source.png",
  },
  {
    label: "Community",
    items: [
      {
        label: "Hire an expert",
        description: "Find a trusted partner",
        link: "/docs",
        icon: ExpertIcon,
      },
      {
        label: "Contributing",
        description: "Join open-source contributors",
        link: "/docs/contributing/",
        icon: ContributeIcon,
      },
      {
        label: "Use cases",
        description: "Inspiring projects built with enygmah",
        link: "/docs",
        icon: UseCasesIcon,
      },
      {
        label: "enygmahweek ft. Supabase",
        description: "The official enygmah event",
        link: "/docs",
        icon: EnygmahWeekIcon,
      },
      {
        label: "enygmahweek ft. Strapi",
        description: "The official enygmah event",
        link: "/weekdocs",
        icon: EnygmahWeekIcon,
      },
    ],
    imageLink: "/docs",
    imageURL:
            "/img/general-replaceable-images/community.png",
  },
  {
    label: "Company",
    items: [
      {
        label: "About Us",
        description: "Team & company information",
        link: "/docs",
        icon: AboutUsIcon,
      },
      {
        label: "Swag Store",
        description: "T-shirts, caps, and more",
        link: "/docs",
        icon: EnygmahStoreIcon,
      },
      {
        label: "Meet enygmah",
        description: "Call us for any questions",
        link: "/docs",
        icon: EnygmahIcon,
      },
    ],
    imageLink: "/docs",
    imageURL:
            "/img/general-replaceable-images/company.png",
  },
];
