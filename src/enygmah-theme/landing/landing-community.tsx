import clsx from "clsx";
import React, { FC, useMemo } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useCommunityStatsContext } from "../../context/CommunityStats";
import useIsBrowser from "@docusaurus/useIsBrowser";

type Props = {
    className?: string;
};

export const LandingCommunity: FC<Props> = ({ className }) => {
  const isBrowser = useIsBrowser();

  const { colorMode } = useColorMode();

  const { githubStarCountText } = useCommunityStatsContext();

  const list = useMemo(() => {
    return [
      {
        stat: githubStarCountText,
        description: "Stars on GitHub",
        href: "https://github.com/hotaydev/enygmah",
      },
      {
        stat: "8K+",
        description:
                    "Projects on production, including large enterprises",
      },
      {
        stat: "32K+",
        description: "Active developers in our open-source community",
      },
      {
        stat: "200K+",
        description: "End users are using apps built with enygmah",
      },
    ];
  }, [githubStarCountText]);

  return (
    <div className={clsx(className, "w-full")}>
      <div
        className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}
      >
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "dark:text-gray-0 text-gray-900",
          )}
        >
            Make part of our{" "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-enygmah-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
            )}
          >
            growing community
          </span>
            .
        </h2>
      </div>

      <div
        className={clsx(
          "mt-8 landing-sm:mt-12 landing-lg:mt-20",
          "flex",
          "flex-col landing-lg:flex-row",
          "gap-4 landing-sm:gap-6",
        )}
      >
        <div
          className={clsx(
            "grid",
            "grid-cols-1 landing-sm:grid-cols-2",
            "gap-4 landing-sm:gap-6",
          )}
        >
          {list.map((item, index) => {
            return (
              <a
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={clsx(
                  "block",
                  "not-prose",
                  "p-4 landing-sm:py-4 landing-sm:px-10",
                  "dark:bg-landing-noise",
                  "dark:bg-gray-800 bg-gray-50",
                  "rounded-2xl landing-sm:rounded-3xl",
                  "no-underline",
                )}
              >
                <div
                  className={clsx(
                    "whitespace-nowrap",
                    "text-[40px] leading-[48px] landing-sm:text-[64px] landing-sm:leading-[72px]",
                    "dark:bg-landing-stats-text-dark bg-landing-stats-text",
                    "bg-clip-text",
                    "text-transparent",
                    "font-bold",
                    "drop-shadow-2xl",
                  )}
                >
                  {item.stat}
                </div>
                <div
                  className={clsx(
                    "mt-2 landing-sm:mt-6",
                    "text-base",
                    "dark:text-gray-400 text-gray-600",
                  )}
                >
                  {item.description}
                </div>
              </a>
            );
          })}
        </div>

        <div
          className={clsx(
            "w-full landing-lg:w-[486px]",
            "not-prose",
            "flex-shrink-0",
            "p-4 ",
            "rounded-2xl landing-sm:rounded-3xl",
            "dark:bg-landing-noise",
            "dark:bg-gray-800 bg-gray-50",
            "text-center flex flex-col justify-around items-center"
          )}
        >
          {isBrowser && (
            <img
              className={clsx("w-[50%] lg:w-[70%]")}
              src={`/img/logo/logo${
                colorMode === "dark" ? "-light" : "-dark"
              }.svg`}
              style={{
                aspectRatio: "176/59",
              }}
              alt="creator"
              loading="lazy"
            />
          )}
          <div
            className={clsx(
              "mt-6",
              "landing-lg:w-[260px]",
              "px-0 landing-sm:px-6",
              "text-base",
              "not-prose",
              "dark:text-gray-400 text-gray-600",
            )}
          >
            Created and Maintained by{" "}
            <a
              href="https://www.hotay.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "dark:text-gray-0 text-gray-900 whitespace-nowrap no-underline",
              )}
            >
              Hotay
            </a>
              , from Brazil.
          </div>
        </div>
      </div>
    </div>
  );
};
