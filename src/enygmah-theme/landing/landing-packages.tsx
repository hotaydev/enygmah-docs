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
  Aws,
  Bitbucket,
  Codecov,
  Docker,
  Gitlab,
  Jenkins,
  Snyk,
  Sonar,
  Terraform,
} from "../../assets/integration-icons";
import { LandingSectionCtaButton } from "./parts/landing-section-cta-button";
import { GithubIcon } from "../icons/github";

type Props = {
  className?: string;
};

export const LandingPackages: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "w-full")}>
      <div className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}>
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "dark:text-gray-0 text-gray-900"
          )}
        >
          Start{" "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-green-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.3)]",
              "text-enygmah-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]"
            )}
          >
            faster
          </span>
          , maintain{" "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-enygmah-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]"
            )}
          >
            easier
          </span>
          , manage{" "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-red dark:drop-shadow-[0_0_30px_rgba(255,76,77,0.4)]",
              "text-enygmah-purple drop-shadow-[0_0_30px_rgba(128,0,255,0.3)]"
            )}
          >
            complexity
          </span>
          .
        </h2>
      </div>

      <div
        className={clsx(
          "w-full",
          "relative",
          "mt-8 landing-sm:mt-12 landing-lg:mt-20",
          "pb-4 landing-md:pb-10",
          "dark:bg-landing-packages-dark bg-landing-packages",
          "dark:bg-gray-800 bg-gray-50",
          "rounded-2xl landing-sm:rounded-3xl",
          "overflow-hidden"
        )}
      >
        <div className={clsx("landing-packages-mask", "pt-4 landing-md:pt-10")}>
          <PackagesContainer animDirection="right">
            {[...listOne, ...listOne].map(({ icon: Icon, label }, index) => (
              <PackageItem
                key={index}
                label={label}
                icon={<Icon width="24" height="24" />}
              />
            ))}
          </PackagesContainer>
          <PackagesContainer animDirection="left">
            {[...listTwo, ...listTwo].map(({ icon: Icon, label }, index) => (
              <PackageItem
                key={index}
                label={label}
                icon={<Icon width="24" height="24" />}
              />
            ))}
          </PackagesContainer>
        </div>

        <div
          className={clsx(
            "not-prose",
            "mt-4 landing-sm:mt-6 landing-lg:mt-10",
            "px-4 landing-sm:px-10"
          )}
        >
          <h6
            className={clsx(
              "p-0",
              "font-semibold",
              "text-base landing-sm:text-2xl",
              "dark:text-gray-300 text-gray-900"
            )}
          >
            Seamless connectivity
          </h6>
          <div
            className={clsx(
              "not-prose",
              "flex",
              "items-center",
              "justify-between",
              "flex-wrap",
              "gap-4 landing-sm:gap-8"
            )}
          >
            <p
              className={clsx(
                "p-0",
                "mt-2 landing-sm:mt-4",
                "text-base",
                "dark:text-gray-400 text-gray-600"
              )}
            >
              Out-of-the box integrations for 15+ services including custom REST
              and GraphQL API’s.
            </p>
            <LandingSectionCtaButton to="/docs">
              All integrations
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
        animDirection === "left" ? "justify-start" : "justify-end"
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
          "relative"
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

const PackageItem = (props: { icon: ReactNode; label: string }) => {
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
        "cursor-pointer"
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
          "whitespace-nowrap"
        )}
      >
        {label}
      </div>
    </div>
  );
};

const listOne = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <GithubIcon {...props} />,
    label: "Github Actions",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Bitbucket {...props} />,
    label: "Bitbucket",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Jenkins {...props} />,
    label: "Jenkins",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Docker {...props} />,
    label: "Docker",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Gitlab {...props} />,
    label: "Gitlab",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Terraform {...props} />,
    label: "Terraform",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Codecov {...props} />,
    label: "Codecov",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Aws {...props} />,
    label: "AWS",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Snyk {...props} />,
    label: "Snyk",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Sonar {...props} />,
    label: "Sonarqube",
  },
];

const listTwo = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <GithubIcon {...props} />,
    label: "Github Actions",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Bitbucket {...props} />,
    label: "Bitbucket",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Jenkins {...props} />,
    label: "Jenkins",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Docker {...props} />,
    label: "Docker",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Gitlab {...props} />,
    label: "Gitlab",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Terraform {...props} />,
    label: "Terraform",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Codecov {...props} />,
    label: "Codecov",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Aws {...props} />,
    label: "AWS",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Snyk {...props} />,
    label: "Snyk",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Sonar {...props} />,
    label: "Sonarqube",
  },
];
