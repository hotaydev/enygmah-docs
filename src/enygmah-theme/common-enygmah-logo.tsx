import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { EnygmahLogoIcon } from "./icons/enygmah-logo";

interface Props {
    className?: string;
}

export const EnygmahLogo = ({ className }: Props) => {
  return (
    <div className={clsx("flex", "items-center", className)}>
      <Link
        to="/"
        className={clsx(
          "flex",
          "items-center justify-center",
          "mr-3",
          "no-underline",
        )}
      >
        <EnygmahLogoIcon
          className={clsx(
            "text-gray-900 dark:text-gray-0",
            "w-[100px]",
          )}
        />
      </Link>
      <Link
        to="/docs"
        className={clsx(
          "flex",
          "items-center justify-center",
          "no-underline",
        )}
      >
        <span
          className={clsx(
            "text-gray-500 dark:text-gray-0",
            "mt-px sm:mt-0 text-[11px] sm:text-base leading-none font-normal",
          )}
        >
          Documentation
        </span>
      </Link>
    </div>
  );
};
