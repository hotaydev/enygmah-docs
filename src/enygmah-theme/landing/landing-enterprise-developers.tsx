import clsx from "clsx";
import React, { FC } from "react";
import {
  AccessControlIcon,
  BlackBoxIcon,
  IdentityIcon,
  MonitorIcon,
  SelfHostedIcon,
  SupportIcon,
} from "../../components/landing/icons";

const list = [
  {
    icon: <AccessControlIcon />,
    title: "Quick integration",
    description:
      "Integrating enygmah takes less than 5 minutes, with the help of our integrations documentation.",
  },
  {
    icon: <IdentityIcon />,
    title: "Code Quality and Security Assurance",
    description:
      "Do not allow commits that do not follow the code standard or that introduce a vulnerability.",
  },
  {
    icon: <SelfHostedIcon />,
    title: "Run anywhere",
    description:
      "Use on pre-commit, within a pipeline, on a virtual machine, or on a physical machine. It's your choice.",
  },
  {
    icon: <MonitorIcon />,
    title: "Extensive docs",
    description:
      "We have a comprehensive documentation covering a wide array of integration types. Simply pick the one that suits your needs.",
  },
  {
    icon: <BlackBoxIcon />,
    title: "Growing Support",
    description:
      "We are vibrant and ever-expanding community. Feel free to ask questions, and share your innovative ideas and suggestions!",
  },
  {
    icon: <SupportIcon />,
    title: "Decide the wait time",
    description:
      "You decide how long you'll wait. enygmah provides quick analyses lasting seconds or more in-depth ones taking several minutes.",
  },
];

type Props = {
    className?: string;
};

export const LandingEnterpriseDevelopers: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "w-full")}>
      <div
        className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
      >
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "dark:text-gray-0 text-gray-900",
          )}
        >
                    Enterprise developers{" "}
          <span className="font-sans text-[#FE251B] drop-shadow-[0_0_30px_rgba(254,37,27,0.3)]">
                        ❤️
          </span>{" "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-enygmah-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
            )}
          >
            enygmah
          </span>
                    .
        </h2>
        <p
          className={clsx(
            "mt-4 landing-sm:mt-6",
            "max-w-md",
            "text-base",
            "dark:text-gray-400 text-gray-600",
          )}
        >
                    enygmah is designed to target the pain points of
                    larger organizations by handling{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-0">
                        security and quality
          </span>
                    , in a simple way.
        </p>
      </div>

      <div
        className={clsx(
          "mt-8 landing-sm:mt-12 landing-lg:mt-20",
          "grid",
          "grid-cols-1 landing-md:grid-cols-2 landing-lg:grid-cols-3",
          "gap-4 landing-sm:gap-12 landing-md:gap-6",
        )}
      >
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "not-prose",
                "p-4 landing-sm:p-10",
                "flex",
                "flex-col landing-sm:flex-row landing-md:flex-col",
                "items-start",
                "gap-6",
                "dark:bg-landing-noise",
                "dark:bg-gray-800 bg-gray-50",
                "rounded-2xl landing-sm:rounded-3xl",
              )}
            >
              <div>{item.icon}</div>
              <div className={clsx("flex", "flex-col", "gap-4")}>
                <div
                  className={clsx(
                    "text-xl",
                    "font-semibold",
                    "text-gray-900 dark:text-gray-0",
                  )}
                >
                  {item.title}
                </div>
                <div
                  className={clsx(
                    "text-base",
                    "dark:text-gray-400 text-gray-600",
                  )}
                >
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
