import React from "react";
import clsx from "clsx";
import { LandingHeroGithubStars } from "./parts/landing-hero-github-stars";
import { LandingStartActionIcon } from "../icons/landing-start-action";

import { LandingCopyCommandButton } from "./parts/landing-copy-command-button";
import Link from "@docusaurus/Link";

export const LandingHeroSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "w-full",
        "gap-4",
        "landing-sm:gap-12",
        "landing-md:gap-[59px]",
        "landing-lg:gap-20",
        className,
      )}
    >
      <div
        className={clsx(
          "px-2 landing-sm:px-0",
          "flex",
          "flex",
          "w-full",
          "relative",
          "min-h-[360px]",
          "landing-lg:min-h-[480px]",
          "py-4",
        )}
      >
        <div
          className={clsx(
            "flex",
            "flex-col",
            "justify-center",
            "gap-6",
            "z-[1]",
            "landing-lg:justify-between",
            "landing-lg:py-8",
          )}
        >
          <LandingHeroGithubStars />
          <div className={clsx("flex", "flex-col", "gap-6")}>
            <h1
              className={clsx(
                "text-[32px] leading-[40px]",
                "tracking-[-0.5%]",
                "landing-sm:text-[56px] landing-sm:leading-[72px]",
                "landing-sm:max-w-[588px]",
                "landing-sm:tracking-[-2%]",
                "font-extrabold",
                "text-gray-900 dark:text-gray-0",
              )}
            >
              Security and Quality for your code.
            </h1>
            <p
              className={clsx(
                "font-normal",
                "text-base",
                "text-gray-600 dark:text-gray-300",
                "landing-xs:max-w-[384px]",
              )}
            >
              The only tool your project needs to guarantee security and quality. Open-source and free.
            </p>
          </div>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-start",
              "gap-4",
              "landing-lg:gap-6",
            )}
          >
            <Link
              to="docs"
              className={clsx(
                "self-start",
                "rounded-3xl",
                "!text-gray-0 dark:!text-gray-900",
                "bg-enygmah-blue dark:bg-enygmah-cyan-alt",
                "transition-[filter]",
                "duration-150",
                "ease-in-out",
                "hover:brightness-110",
                "py-3",
                "pl-7 pr-8",
                "landing-md:px-8",
                "landing-lg:pl-7 landing-lg:pr-8",
                "flex",
                "items-center",
                "justify-center",
                "gap-2",
                "hover:!no-underline",
              )}
            >
              <LandingStartActionIcon />
              <span
                className={clsx("text-base", "font-semibold")}
              >
                Get started
              </span>
            </Link>
            <div>
              {/* TODO: after launched, remove this div and keep just the LandingCopyCommandButton element */}
              <LandingCopyCommandButton
                className={clsx("hidden", "landing-sm:block")}
              />
              <p className="text-xs ml-3 mt-1 text-gray-450">Not yet launched</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "hidden landing-md:block",
            "absolute",
            "top-0",
            "right-0",
          )}
        >
          {/* Add content Here */}
          <img src="/img/hero-image.png" alt="Logo" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
