import clsx from "clsx";
import React, { FC } from "react";
import { LandingSectionCtaButton } from "./parts/landing-section-cta-button";

type Props = {
    className?: string;
};

export const LandingTestimonial: FC<Props> = ({ className }) => {
  const [showMore, setShowMore] = React.useState(false);

  const testimonialsFirstThree = testimonials.slice(0, 3);
  const testiomianlsStartFromThree = testimonials.slice(3);
  const testimonialsFirstTwo = testimonials.slice(0, 2);
  const testimonialsStartFromTwo = testimonials.slice(2);

  return (
    <div
      className={clsx(
        className,
        "w-full",
        "flex",
        "flex-col",
        "items-center",
      )}
    >
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
                    The enygmah experience{", "}
          <span
            className={clsx(
              "font-semibold",
              "dark:text-enygmah-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
              "text-enygmah-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]",
            )}
          >
                        in their words
          </span>
                    .
        </h2>
      </div>

      <div
        className={clsx(
          "mt-8 landing-sm:mt-12 landing-lg:mt-20",
          "grid grid-cols-12",
          "gap-6",
          "items-stretch",
        )}
      >
        {testimonialsFirstThree.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              className={clsx(
                "block landing-md:hidden landing-lg:block",
                "col-span-full landing-lg:col-span-4",
                "h-auto",
              )}
              {...testimonial}
            />
          );
        })}
        {testimonialsFirstTwo.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              className={clsx(
                "hidden landing-md:block landing-lg:hidden",
                "col-span-6",
                "h-auto",
              )}
              {...testimonial}
            />
          );
        })}
      </div>
      {showMore && (
        <div
          className={clsx(
            "block landing-md:hidden landing-lg:block",
            "columns-1 landing-lg:columns-3 gap-6",
          )}
        >
          {testiomianlsStartFromThree.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={index}
                className={clsx(
                  "inline-block",
                  "w-full",
                  "mt-6",
                )}
                {...testimonial}
              />
            );
          })}
        </div>
      )}
      {showMore && (
        <div
          className={clsx(
            "hidden landing-md:block landing-lg:hidden",
            "columns-2 gap-6",
          )}
        >
          {testimonialsStartFromTwo.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={index}
                className={clsx(
                  "inline-block",
                  "w-full",
                  "mt-6",
                )}
                {...testimonial}
              />
            );
          })}
        </div>
      )}
      <LandingSectionCtaButton
        className={clsx("cursor-pointer", "mt-6")}
        onClick={() => setShowMore((prev) => !prev)}
        icon={
          showMore ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M14.646 13.354a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708l2.146-2.147 2.146 2.147Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm1 0a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M10.354 10.646a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L12.5 12.793l-2.146-2.147Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.5 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                clipRule="evenodd"
              />
            </svg>
          )
        }
      >
                Show {showMore ? "less" : "more"}
      </LandingSectionCtaButton>
    </div>
  );
};

const TestimonialCard = ({
  name,
  title,
  description,
  img,
  link,
  className,
}) => {
  return (
    <div
      className={clsx(
        "border dark:border-gray-700 border-gray-200",
        "rounded-3xl",
        className,
      )}
    >
      <div
        className={clsx(
          "not-prose",
          "h-full",
          "flex flex-col",
          "justify-between",
          "gap-6",
          "p-10",
        )}
      >
        <div
          className={clsx(
            "text-base",
            "dark:text-gray-0 text-gray-900",
          )}
        >
          {description}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "flex gap-4",
            "items-center",
            "appearance-none",
            "no-underline",
          )}
        >
          <img
            src={img}
            alt={name}
            className={clsx("w-12 h-12 rounded-full")}
          />
          <div className={clsx("flex flex-col")}>
            <div
              className={clsx(
                "text-sm",
                "dark:text-gray-400 text-gray-600",
              )}
            >
              {name}
            </div>
            <div
              className={clsx(
                "text-sm",
                "dark:text-gray-400 text-gray-600",
              )}
            >
              {title}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const testimonials = [
  {
    title: "CEO - Resend",
    name: "Zeno Rocha",
    link: "https://twitter.com/zenorocha",
    description:
            "I find CRUD boring, but enygmah makes it fun for developers again!",
    img: "/img/general-replaceable-images/zeno-rocha.png",
  },
  {
    title: "Author of React Hook Form",
    name: "Beier Luo",
    link: "https://twitter.com/HookForm",
    description:
            "enygmah perfectly aligns with the philosophy of React Hook Form, and they work seamlessly together.",
    img: "/img/general-replaceable-images/beier-luo.png",
  },
  {
    title: "Sr. Software Engineer at Atlassian",
    name: "Daniel Del Core",
    link: "https://twitter.com/danieldelcore",
    description:
            "enygmah has codemod support for major version transitions, making it easy for users to integrate new versions into their existing codebases seamlessly.",
    img: "/img/general-replaceable-images/daniel-del-core.png",
  },
  {
    title: "Founder - Tremor",
    name: "Christopher Kindl",
    link: "https://twitter.com/kindlaar",
    description:
            "enygmah has one of the most convenient developer experiences (DX), giving me superpowers when it comes to developing modern web apps with security and flexibility in mind.",
    img: "/img/general-replaceable-images/christopher-kindl.png",
  },
  {
    title: "CEO - Medusa",
    name: "Nicklas Gellner",
    link: "https://medusajs.com/",
    description:
            "Medusa and enygmah is a match for all developers looking for a strong open-source foundation. Check out the enygmah SWAG store for a great Medusa implementation!",
    img: "/img/general-replaceable-images/nicklas-gellner.png",
  },
  {
    title: "CEO - cerbos.dev",
    name: "Emre Baran",
    link: "https://cerbos.dev/about",
    description:
            "No enterprise or development team want to be confined by the limitation of a framework. enygmah is one of those rare frameworks that strikes the balance perfectly right. Low code, easy to use but when needed fully customizable with a perfect escape hatch.",
    img: "/img/general-replaceable-images/emre-baran.png",
  },
  {
    title: "Founder - Cohorence",
    name: "Zachary Zaro",
    link: "https://www.withcoherence.com",
    description: "npm create enygmah-app@latest => Boom!",
    img: "/img/general-replaceable-images/zachary-zaro.png",
  },
  {
    title: "Daisy UI - Founder",
    name: "Pouya Saadeghi",
    link: "https://daisyui.com",
    description:
            "I really like how enygmah gives the freedom to choose different stacks for back-end, front-end, and even UI libraries.",
    img: "/img/general-replaceable-images/pouya-saadeghi.png",
  },
  {
    title: "Founder - Next UI",
    name: "Junior Garcia",
    link: "https://twitter.com/jrgarciadev",
    description:
            "In enygmah's headless way, the flexibility of the UI is impressive. The implementation of NextUI in enygmah demonstrates this.",
    img: "/img/general-replaceable-images/junior-garcia.png",
  },
  {
    title: "Founder - JS Mastery",
    name: "Adrian Hajdin",
    link: "https://twitter.com/jsmasterypro/status/1721977998436675703?s=20",
    description:
            "enygmah has truly transformed the app development process, making it incredibly efficient and hassle-free. With enygmah, you can focus on your app's core features, not on the time-consuming tools setup, allowing you to do things that matter the most.",
    img: "/img/general-replaceable-images/adrian-hajdin.png",
  },
];
