import clsx from "clsx";
import React from "react";
import { CautionIcon } from "./icons/caution";
import { CommandLineIcon } from "./icons/command-line";
import { InfoIcon } from "./icons/info";
import { TipIcon } from "./icons/tip";
import { NoteIcon } from "./icons/note";
import { GithubIcon } from "./icons/github";

type Props = {
    type:
        | "caution"
        | "command-line"
        | "sourcecode"
        | "info"
        | "tip"
        | "note"
        | "additional"
        | "danger"
        | "info-tip";
    title?: React.ReactNode;
    children: React.ReactNode;
};

const icons = {
  danger: CautionIcon,
  caution: CautionIcon,
  "command-line": CommandLineIcon,
  sourcecode: GithubIcon,
  info: InfoIcon,
  tip: TipIcon,
  note: NoteIcon,
  additional: NoteIcon,
  "info-tip": TipIcon,
};

const colorTextClasses = {
  danger: "text-enygmah-red",
  caution: "text-[#F2800D] dark:text-enygmah-orange",
  "command-line": "text-enygmah-purple",
  sourcecode: "text-enygmah-pink",
  info: "text-enygmah-blue dark:text-[#6EB3F7]",
  "info-tip": "text-enygmah-blue dark:text-[#6EB3F7]",
  tip: "text-enygmah-green",
  note: "text-enygmah-cyan",
  additional: "text-enygmah-cyan",
};

const colorWrapperClasses = {
  danger: "bg-enygmah-red bg-opacity-10 border-l-enygmah-red",
  caution:
        "bg-[#F2800D]/10 dark:bg-enygmah-orange/10 dark:bg-opacity-10 bg-opacity-10 border-l-enygmah-orange",
  "command-line": "bg-enygmah-purple bg-opacity-10 border-l-enygmah-purple",
  sourcecode: "bg-enygmah-pink bg-opacity-10 border-l-enygmah-pink",
  info: "bg-enygmah-blue/10 dark:bg-[#6EB3F7]/10 bg-opacity-10  dark:bg-opacity-10 border-l-enygmah-blue",
  "info-tip":
        "bg-enygmah-blue/10 dark:bg-[#6EB3F7]/10 bg-opacity-10  dark:bg-opacity-10 border-l-enygmah-blue",
  tip: "bg-enygmah-green bg-opacity-10 border-l-enygmah-green",
  note: "bg-enygmah-cyan bg-opacity-10 border-l-enygmah-cyan",
  additional: "bg-enygmah-cyan bg-opacity-10 border-l-enygmah-cyan",
};

const titles = {
  danger: "DANGER",
  caution: "CAUTION",
  "command-line": "COMMAND LINE",
  sourcecode: "SOURCE CODE",
  info: "INFORMATION",
  tip: "TIP",
  note: "NOTE",
  additional: "ADDITIONAL INFO",
  "info-tip": "INFORMATION",
};

export const Admonition = ({ type, title, children }: Props) => {
  const Icon = icons[type] ?? (() => null);
  const clsText = colorTextClasses[type] ?? "tex-inherit";
  const clsWrapper = colorWrapperClasses[type] ?? "bg-inherit";

  return (
    <div
      className={clsx(
        "rounded-lg",
        "admonition",
        `admonition-${type}`,
        "mb-6",
        clsWrapper,
      )}
    >
      <div
        className={clsx(
          "border-l-4",
          "border-l-solid",
          "border-l-inherit",
          "rounded-tl-lg",
          "rounded-bl-lg",
          "p-4",
          "flex flex-col",
          "gap-2 sm:gap-4",
        )}
      >
        {(title || titles[type]) && (
          <div
            className={clsx(
              "flex",
              "items-center",
              "gap-2",
              "text-xs sm:text-base 2xl:text-base 2xl:leading-7",
              "font-semibold",
              clsText,
            )}
          >
            <Icon />
            <span className="uppercase">
              {title ?? titles[type] ?? ""}
            </span>
          </div>
        )}
        <div className={clsx("text-gray-0", "text-base", "last:mb-0")}>
          {children}
        </div>
      </div>
    </div>
  );
};
