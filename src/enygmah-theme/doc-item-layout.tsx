import DocItemContent from "@theme/DocItem/Content";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemPaginator from "@theme/DocItem/Paginator";
import clsx from "clsx";
import React from "react";
import { DocBreadcrumbs } from "./doc-breadcrumbs";
import { DocTOC } from "./doc-toc";
import { DocTOCMobile } from "./doc-toc-mobile";

export const DocItemLayout = ({ children }) => {
  return (
    <>
      <div
        className={clsx(
          "flex-1",
          "flex flex-col",
          "items-center justify-start",
          "px-4 sm:px-0 py-4 sm:py-14",
          "relative",
          "w-full",
        )}
      >
        <div className={clsx("max-w-screen-content w-full")}>
          <div className={clsx("flex flex-col", "mb-8")}>
            <DocBreadcrumbs />
          </div>
          <DocTOCMobile />
          <div className={clsx("enygmah-prose")}>
            <DocItemContent>{children}</DocItemContent>
          </div>
          <DocItemFooter />
        </div>
        <div className={clsx("max-w-screen-content", "w-full")}>
          <DocItemPaginator />
        </div>
      </div>
      <DocTOC />
    </>
  );
};
