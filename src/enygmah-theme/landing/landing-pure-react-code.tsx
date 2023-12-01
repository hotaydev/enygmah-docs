import clsx from "clsx";
import React, { FC, memo, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwlDark from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import { LandingSectionCtaButton } from "./parts/landing-section-cta-button";
import { useInView } from "framer-motion";
type Props = {
    className?: string;
};

export const LandingPureReactCode: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx(
          "not-prose",
          "h-full",
          "flex-shrink-0",
          "p-2 landing-sm:p-4",
          "rounded-2xl landing-sm:rounded-3xl",
          "dark:bg-landing-noise",
          "dark:bg-gray-800 bg-gray-50",
        )}
      >
        <div
          className={clsx(
            "relative",
            "flex",
            "flex-col",
            "rounded-lg",
            "landing-sm:aspect-[560/240] landing-md:aspect-[624/240]  landing-lg:aspect-[607/299]",
            "dark:bg-landing-component-dark bg-landing-component",
            "border-t-solid border-t",
            "border-t-gray-200 dark:border-t-gray-700",
            "border-opacity-60 dark:border-opacity-60",
            "shadow-[0px_-1.5px_0px_rgba(237,242,247,0.5)] dark:shadow-[0px_-1.5px_0px_rgba(20,20,31,0.5)]",
            "drop-shadow-sm",
          )}
        >
          <BrowserOnly>{() => <CodeSlide />}</BrowserOnly>
          <BrowserOnly>{() => <ReactLogo />}</BrowserOnly>
        </div>
        <div
          className={clsx(
            "not-prose",
            "mt-4 landing-sm:mt-6 landing-lg:mt-10",
            "px-4 landing-sm:px-6",
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
                        100% Pure React code
          </h6>
          <div
            className={clsx(
              "not-prose",
              "flex",
              "items-center",
              "justify-between",
              "flex-wrap",
              "gap-4 landing-sm:gap-8",
              "mb-4 landing-sm:mb-6",
            )}
          >
            <p
              className={clsx(
                "p-0",
                "mt-2 landing-sm:mt-4",
                "text-base",
                "dark:text-gray-400 text-gray-600",
              )}
            >
                            Don’t get locked-in to proprietary, black-box
                            solutions. With enygmah you have always 100% control
                            over your project.
            </p>
            <LandingSectionCtaButton to="https://github.com/hotaydev/enygmah">
                            enygmah on GitHub
            </LandingSectionCtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReactLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <div
      key={colorMode}
      className={clsx(
        "w-[48px] h-[48px]",
        "absolute",
        "bottom-[16px]",
        "right-[16px]",
        "rounded-lg",
        "z-0",
      )}
    >
      <video autoPlay loop muted playsInline className="w-full h-full">
        <source
          src={`/img/general-replaceable-images/react-${colorMode}.mov`}
          type="video/mp4"
        />
        <source
          key={colorMode}
          src={`/img/general-replaceable-images/react-${colorMode}.webm`}
          type="video/webm"
        />
      </video>
    </div>
  );
};

const CodeSlide = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={clsx("rounded-lg", "dark:bg-gray-900 bg-gray-0")}
    >
      <div
        className={clsx(
          "text-[10px] leading-[16px]",
          "h-[268px] landing-md:h-[299px]",
          "font-jetBrains-mono",
          "select-none",
          "overflow-hidden",
          "relative",
          "z-[1px]",
          "dark:text-[#d6deeb] text-gray-900",
          "dark:landing-react-code-mask-dark landing-react-code-mask",
        )}
      >
        <div
          className={clsx(
            "will-change-transform p-2",
            inView && "animate-code-scroll",
          )}
        >
          <HighlightCode />
          <div className={clsx("h-8")} />
          <HighlightCode />
        </div>
      </div>
    </div>
  );
};

const HighlightCode = memo(function HighlightCodeBase() {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  const theme = isDarkTheme ? nightOwlDark : nightOwlLight;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={`${code ?? ""}`.trim()}
      language="tsx"
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div
              {...getLineProps({
                line,
              })}
              key={`${code}-${i}`}
            >
              <span
                className={
                  "dark:text-gray-600 text-gray-500 pl-4 pr-2"
                }
              >
                {i + 1}
              </span>
              {line.map((token, key) => {
                const { children: _children, ...tokenProps } =
                                    getTokenProps({
                                      token,
                                    });

                return (
                  <span
                    {...tokenProps}
                    key={`${token.content}-${key}`}
                    className="whitespace-pre"
                    dangerouslySetInnerHTML={{
                      __html: token.content,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </>
      )}
    </Highlight>
  );
});

const code = `
import React from "react";

import { useList } from "@enygmah/core";

export const List: React.FC = () => {
  const {
    data: { data, total },
    isLoading,
  } = useList();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <h3>Showing {total} products in total.</h3>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
`;
