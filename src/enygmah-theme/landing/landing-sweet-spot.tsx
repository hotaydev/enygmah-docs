import React, { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import {
  AuthenticationIcon,
  ChartsIcon,
  DataTablesIcon,
  FormsIcon,
  ListIcon,
  WizardsIcon,
} from "../../components/landing/icons";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Props = {
    className?: string;
};

export const LandingSweetSpot: FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const isBrowser = useIsBrowser();

  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  const [activeIndex, setActiveIndex] = useState(0);

  const [shouldIncrement, setShouldIncrement] = useState(true);

  useEffect(() => {
    if (!shouldIncrement) {
      return;
    }

    let interval: NodeJS.Timeout;
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % list.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [shouldIncrement, inView]);

  return (
    <div ref={ref} className={clsx(className, "w-full")}>
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
          The{" "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-enygmah-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
            )}
          >
          sweet spot
          </span>{" "}
          achieved with a quick security configuration
        </h2>
        <p
          className={clsx(
            "mt-4 landing-sm:mt-6",
            "max-w-md",
            "text-base",
            "dark:text-gray-400 text-gray-600",
          )}
        >
          Implementing these processes requires a lot of time. But it doesn&apos;t have to be this way.
          enygmah simplifies this implementation, making this process easier and faster.
        </p>
      </div>

      <div className={clsx("mt-8 landing-sm:mt-12 landing-lg:mt-20")}>
        <div
          className={clsx(
            "select-none",
            "relative",
            "h-[752px] landing-sm:h-[874px] landing-md:h-[984px] landing-lg:h-[688px]",
            "not-prose",
            "pt-4 landing-sm:pt-10 landing-lg:pt-20",
            "pb-4 landing-lg:pb-0",
            "pl-4 landing-sm:pl-10",
            "dark:bg-gray-800 bg-gray-50",
            "rounded-2xl landing-sm:rounded-3xl",
            "overflow-hidden",
            "dark:bg-noise",
          )}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              key={activeIndex}
              className={clsx(
                "absolute",
                "inset-0",
                "z-0",
                "landing-xs:bg-landing-sweet-spot-glow-position-xs",
                "landing-lg:bg-landing-sweet-spot-glow-position-lg",
                "landing-md:bg-landing-sweet-spot-glow-position-md",
                "landing-xs:bg-landing-sweet-spot-glow-size-xs",
                "landing-lg:bg-landing-sweet-spot-glow-size-lg",
              )}
              style={{
                backgroundRepeat: "repeat, no-repeat",
              }}
            />
          </AnimatePresence>
          <div
            className={clsx(
              "relative",
              "z-[1]",
              "h-full w-full",
              "flex flex-col landing-lg:grid landing-lg:grid-cols-12",
            )}
          >
            <div
              className={clsx(
                "not-prose",
                "pr-6 landing-sm:pr-0",
                "landing-sm:max-w-[540px] landing-md:max-w-[760px] landing-lg:max-w-[416px]",
                "landing-lg:col-span-5",
                "landing-lg:mt-16",
              )}
            >
              <h3
                className={clsx(
                  "text-base landing-sm:text-xl font-semibold",
                  "dark:text-gray-300 text-gray-700",
                )}
              >
                Business applications not only share fundemental UI elements, but also the underlying logic.
              </h3>
              <p
                className={clsx(
                  "mt-6",
                  "text-base",
                  "dark:text-gray-400 text-gray-600",
                )}
              >
                Stop writing repetitive code for CRUD, security and state management. Let enygmah automatically transform your UI elements to enterprise-grade:
              </p>
              <div
                className={clsx(
                  "mt-4 landing-sm:mt-10",
                  "w-max",
                  "grid",
                  "grid-cols-2 landing-sm:grid-cols-3 landing-lg:grid-cols-2",
                  "landing-sm:gap-x-2 gap-y-4",
                  "not-prose",
                )}
              >
                {list.map((item, index) => {
                  const active = index === activeIndex;
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.iconText}
                      onClick={() => {
                        setShouldIncrement(false);
                        setActiveIndex(index);
                      }}
                      className={clsx(
                        "appearance-none",
                        "focus:outline-none",
                        "cursor-pointer",
                        active
                          ? "dark:bg-gray-900 bg-gray-0"
                          : "dark:bg-gray-900/50 bg-gray-0/50",

                        "w-max",
                        "flex",
                        "items-center",
                        "justify-start",
                        "gap-1",
                        "px-4 py-2",
                        "rounded-full",
                        "text-sm landing-sm:text-base",
                      )}
                    >
                      <div>
                        <Icon active={active} />
                      </div>
                      <div
                        className={clsx(
                          active
                            ? "dark:text-gray-0 text-gray-900"
                            : "dark:text-gray-400 text-gray-600",
                        )}
                      >
                        {item.iconText}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {isBrowser && (
              <div
                className={clsx(
                  "relative",
                  "h-full",
                  "mt-4 landing-sm:mt-[72px] landing-lg:mt-0",
                  "flex",
                  "landing-lg:col-start-7 landing-lg:col-end-13",
                )}
              >
                <div
                  className={clsx(
                    "w-full",
                    "h-full",
                    "z-[1]",
                    "landing-lg:absolute",
                    "top-0 right-0",
                  )}
                >
                  {list.map((item, index) => {
                    const active = index === activeIndex;

                    return (
                      <img
                        key={index}
                        src={
                          isDarkTheme
                            ? item.image1Dark
                            : item.image1Light
                        }
                        alt="UI of enygmah"
                        className={clsx(
                          "block",
                          "object-cover",
                          "object-left-top",
                          "w-full landing-md:w-[874px] landing-lg:w-full",
                          "h-full landing-lg:h-[464px]",
                          "landing-md:pl-20 landing-lg:pl-0",
                          "absolute",
                          "top-0 right-0",
                          active && "delay-300",
                          active
                            ? "translate-x-0"
                            : "translate-x-full",
                          active
                            ? "opacity-100"
                            : "opacity-0",
                          "transition-[transform,opacity] duration-500 ease-in-out",
                        )}
                      />
                    );
                  })}
                </div>

                {list.map((item, index) => {
                  const active = index === activeIndex;

                  return (
                    <div
                      key={index}
                      className={clsx(
                        "block",
                        "z-[2]",
                        "w-[328px] landing-sm:w-[488px]",
                        "absolute",
                        "bottom-0 landing-sm:bottom-[4px] landing-lg:bottom-[78px]",
                        "-left-2 landing-lg:-left-20",
                        "rounded-xl",
                        "dark:bg-gray-900 bg-gray-0",
                        "dark:shadow-landing-sweet-spot-code-dark",
                        "shadow-landing-sweet-spot-code-light",
                        active && "delay-300",
                        active
                          ? "translate-y-0"
                          : "translate-y-full",
                        active
                          ? "opacity-100"
                          : "opacity-0",
                        "transition-[transform,opacity] duration-500 ease-in-out",
                      )}
                    >
                      <div className={clsx("p-4 dark:text-gray-200 text-gray-800")} dangerouslySetInnerHTML={{ __html: item.code }}></div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const list = [
  {
    icon: (props: { active: boolean }) => (
      <DataTablesIcon
        className={clsx(
          props.active
            ? "dark:text-[#FA3852] text-[#D22D2D]"
            : "text-gray-500",
        )}
      />
    ),
    iconText: "Locally",
    code: "<span class=\"text-gray-500\">$</span> enygmah",
    image1Dark:
            "/img/options-images/systems.png",
    image1Light:
            "/img/options-images/systems.png",
  },
  {
    icon: (props: { active: boolean }) => (
      <ListIcon
        className={clsx(
          props.active
            ? "dark:text-[#F98C1F] text-[#F46A25]"
            : "text-gray-500",
        )}
      />
    ),
    iconText: "Cloud / Pipeline",
    code: "<span class=\"text-gray-500\">$</span> enygmah --output=<span class=\"text-gray-500\">&lt;file&gt;</span>",
    image1Dark:
            "/img/options-images/pipelines-dark.png",
    image1Light:
            "/img/options-images/pipelines.png",
  },
  {
    icon: (props: { active: boolean }) => (
      <ChartsIcon
        className={clsx(
          props.active
            ? "dark:text-[#F9D51F] text-[#FF9F1A]"
            : "text-gray-500",
        )}
      />
    ),
    iconText: "Customizable",
    code: "<span class=\"text-gray-500\">$</span> enygmah --severity=<span class=\"text-gray-500\">&lt;severity&gt;</span> --analyze=<span class=\"text-gray-500\">&lt;types&gt;</span>",
    image1Dark:
            "/img/options-images/customize.png",
    image1Light:
            "/img/options-images/customize.png",
  },
  {
    icon: (props: { active: boolean }) => (
      <FormsIcon
        className={clsx(
          props.active
            ? "dark:text-[#47D1BF] text-[#089191]"
            : "text-gray-500",
        )}
      />
    ),
    iconText: "Pre-commit",
    code: "<span class=\"text-gray-500\">$</span> enygmah --new-code",
    image1Dark:
            "/img/options-images/commit-dark.png",
    image1Light:
            "/img/options-images/commit-light.png",
  },
  {
    icon: (props: { active: boolean }) => (
      <WizardsIcon
        className={clsx(
          props.active
            ? "dark:text-[#3DB8F5] text-[#1F80E0]"
            : "text-gray-500",
        )}
      />
    ),
    iconText: "Quality",
    code: "<span class=\"text-gray-500\">$</span> enygmah --analyze=<span class=\"text-gray-500\">quality</span>",
    image1Dark:
            "/img/options-images/quality.png",
    image1Light:
            "/img/options-images/quality.png",
  },
  {
    icon: (props: { active: boolean }) => (
      <AuthenticationIcon
        className={clsx(
          props.active
            ? "dark:text-[#5959FF] text-[#693BC6]"
            : "text-gray-500",
        )}
      />
    ),
    iconText: "Security",
    code: "<span class=\"text-gray-500\">$</span> enygmah --analyze=<span class=\"text-gray-500\">security</span>",
    image1Dark:
            "/img/options-images/security.png",
    image1Light:
            "/img/options-images/security.png",
  },
];
