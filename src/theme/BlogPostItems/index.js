import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import TagsList from "@theme/TagsList";

import BlogPostItem from "@theme/BlogPostItem";
import clsx from "clsx";

export default function BlogPostItems({
  items,
  tags,
  component: BlogPostItemComponent = BlogPostItem,
  isTagsPage,
}) {
  return (
    <div
      className={clsx(
        "px-4",
        "blog-md:px-7",
        "blog-2xl:px-0",
        !isTagsPage &&
                    "blog-sm:pb-16 blog-md:pb-8 blog-2xl:pb-12 pb-10",
        !isTagsPage && "blog-md:pt-16 blog-2xl:pt-20",
        isTagsPage && "py-8",
        "max-w-[512px]",
        "blog-md:max-w-screen-blog-md",
        "blog-2xl:max-w-screen-blog-md",
        "w-full",
        "mx-auto",
      )}
    >
      {!isTagsPage && (
        <>
          <div
            className={clsx(
              "flex flex-col blog-md:flex-row items-start lg:items-center justify-between",
              "mb-4 lg:mb-8",
              "px-0 blog-sm:px-6",
              "not-prose",
            )}
          >
            <h2
              className={clsx(
                "!m-0 !mt-0 !mb-0 p-0",
                "blog-lg:mb-12 blog-md:mb-8 mb-8",
                "text-xl blog-sm:text-4xl blog-lg:text-5xl",
                "text-gray-900 dark:text-gray-0",
                "font-semibold",
              )}
            >
              All Posts
            </h2>
          </div>
          <TagsList tags={tags} />
        </>
      )}

      <div
        className={clsx(
          "grid",
          "grid-cols-1 blog-md:grid-cols-3",
          "gap-4 blog-lg:gap-12",
          "pt-6",
          "blog-md:pt-12",
        )}
      >
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        ))}
      </div>
    </div>
  );
}
