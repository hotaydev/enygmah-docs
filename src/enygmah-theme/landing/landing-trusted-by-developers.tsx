import clsx from "clsx";
import { useInView } from "framer-motion";
import React, {
  DetailedHTMLProps,
  FC,
  ReactNode,
  SVGProps,
  useRef,
} from "react";
import {
  Ably,
  Airtable,
  Antd,
  Appwrite,
  Chakra,
  Directus,
  Elide,
  ElideGraphql,
  Firebase,
  Hasura,
  Headless,
  HookForm,
  Mantine,
  Mui,
  ShadCnUI,
  TailwindCss,
} from "../../assets/integration-icons";
import { LandingSectionCtaButton } from "./parts/landing-section-cta-button";

type Props = {
    className?: string;
};

export const LandingTrustedByDevelopers: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "w-full")}>
      <div
        className={clsx(
          "w-full",
          "relative",
          "pb-4 landing-md:pb-10",
          "dark:bg-gray-800 bg-gray-50",
          "rounded-2xl landing-sm:rounded-3xl",
          "overflow-hidden",
        )}
      >
        <div
          className={clsx(
            "landing-packages-mask",
            "pt-4 landing-md:pt-10",
          )}
        >
          <PackagesContainer animDirection="right">
            {[...listOne, ...listOne].map(
              ({ icon: Icon, label }, index) => (
                <PackageItem
                  key={index}
                  label={label}
                  icon={<Icon width="24" height="24" />}
                />
              ),
            )}
          </PackagesContainer>
        </div>

        <div
          className={clsx(
            "not-prose",
            "mt-4 landing-sm:mt-6 landing-lg:mt-10",
            "px-4 landing-sm:px-10",
          )}
        >
          <h6
            className={clsx(
              "p-0",
              "font-semibold",
              "text-base landing-sm:text-2xl",
              "dark:text-gray-300 text-gray-900",
            )}
          >
            Integrate with everything
          </h6>
          <div
            className={clsx(
              "not-prose",
              "flex",
              "items-center",
              "justify-between",
              "flex-wrap",
              "gap-4 landing-sm:gap-8",
            )}
          >
            <p
              className={clsx(
                "p-0",
                "text-base",
                "dark:text-gray-400 text-gray-600",
              )}
            >
                            Out-of-the box integrations for 15+ services
                            including custom REST and GraphQL API’s.
            </p>
            <LandingSectionCtaButton to="/docs">
              See all integrations
            </LandingSectionCtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const PackagesContainer = ({
  children,
  className,
  animDirection,
  ...props
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    animDirection: "left" | "right";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={clsx(
        "relative",
        "flex",
        "items-center",
        animDirection === "left" ? "justify-start" : "justify-end",
      )}
    >
      <div
        className={clsx(
          className,
          inView
            ? animDirection === "left"
              ? "animate-landing-packages-left"
              : "animate-landing-packages-right"
            : "",
          "absolute",
          "left-0",
          "top-0",
          "pr-4",
          "w-auto",
          "flex",
          "items-center",
          "gap-[18px]",
          "mt-6",
          "relative",
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

const PackageItem = (props: {
    icon: ReactNode;
    label: string;
}) => {
  const { icon, label } = props;

  return (
    <div
      className={clsx(
        "group",
        "relative",
        "z-10",
        "flex",
        "items-center",
        "justify-center",
        "gap-3",
        "pl-4 pt-4 pb-4 pr-6",
        "dark:bg-gray-900 bg-gray-0",
        "rounded-full",
        "cursor-pointer",
      )}
    >
      <div>{icon}</div>
      <div
        className={clsx(
          "text-sm",
          "font-medium",
          "dark:bg-landing-packages-text-dark bg-landing-packages-text",
          "bg-clip-text",
          "text-transparent",
          "whitespace-nowrap",
        )}
      >
        {label}
      </div>
    </div>
  );
};

const listOne = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Firebase {...props} />,
    label: "Firebase",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Ably {...props} />,
    label: "Ably",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Airtable {...props} />,
    label: "Airtable",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Appwrite {...props} />,
    label: "Appwrite",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Directus {...props} />,
    label: "Directus",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Elide {...props} />,
    label: "Elide",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ElideGraphql {...props} />,
    label: "Elide GraphQL",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Hasura {...props} />,
    label: "Hasura",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <HookForm {...props} />,
    label: "Hook Form",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Antd {...props} />,
    label: "Ant Design",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Mui {...props} />,
    label: "Material UI",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Mantine {...props} />,
    label: "Mantine",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Chakra {...props} />,
    label: "Chakra UI",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ShadCnUI {...props} />,
    label: "shadcn/ui",
    tooltip: "npx shadcn-ui init",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <TailwindCss {...props} />,
    label: "Tailwind CSS",
    tooltip: "npx tailwindcss init",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
    label: "Headless UI",
  },
];

