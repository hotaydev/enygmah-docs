import React from "react";
import Layout from "@theme/Layout";
import { DocPageLayout as EnygmahDocPageLayout } from "@site/src/enygmah-theme/doc-page-layout";

export default function DocPageLayout({ children }) {
  return (
    <Layout>
      <EnygmahDocPageLayout>{children}</EnygmahDocPageLayout>
    </Layout>
  );
}
