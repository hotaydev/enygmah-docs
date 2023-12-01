import Link from "@docusaurus/Link";
import { ArrowRightIcon } from "@site/src/enygmah-theme/icons/arrow-right";
import { LandingRainbowButton } from "@site/src/enygmah-theme/landing-rainbow-button";
import clsx from "clsx";
import React from "react";

declare global {
  interface Window {
    gtag: any;
  }
}

const text = "Struggling with internal tools?";
const description =
    "Explore enygmah's limitless possibilities in crafting CRUD apps, CRM solutions, HR dashboards, and more!";
const image =
    "/img/general-replaceable-images/app-crm.png";

export const BannerSidebar = ({ shouldShowBanner }) => {
  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
            typeof window.gtag !== "undefined" &&
            shouldShowBanner
    ) {
      window.gtag("event", "view_banner", {
        banner_name: "banner-sidebar",
        banner_text: text,
        banner_description: description,
        banner_image: image,
      });
    }
  }, [shouldShowBanner]);

  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "gap-6",
        "py-6",
        "px-4",
        "rounded-2xl",
        "bg-banner-examples-sider-purple",
        "not-prose",
      )}
    >
      <Link
        to={"/docs"}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "flex",
          "w-full h-auto xl:h-[152px]",
          "flex-shrink-0",
          "rounded-md",
          "overflow-hidden",
        )}
      >
        <img src={image} alt={"enygmah App screenshot"} loading="lazy" />
      </Link>

      <h2 className={clsx("text-2xl font-semibold", "text-gray-0")}>
        {text}
      </h2>
      <p className={clsx("text-base", "text-gray-100")}>{description}</p>

      <LandingRainbowButton
        className={clsx("w-max")}
        buttonClassname={clsx("!px-4", "!py-2")}
        href={"/docs"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={clsx("text-gray-900", "text-base", "font-bold")}
        >
                    Try online
        </div>
        <ArrowRightIcon className={clsx("ml-2", "w-4", "h-4")} />
      </LandingRainbowButton>
    </div>
  );
};
