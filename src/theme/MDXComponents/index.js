import MDXComponents from "@theme-original/MDXComponents";

import CommonDetails from "@site/src/enygmah-theme/common-details";
import CommonSummary from "@site/src/enygmah-theme/common-summary";
import CommonTabItem from "@site/src/enygmah-theme/common-tab-item";
import CommonTabs from "@site/src/enygmah-theme/common-tabs";

export default {
  ...MDXComponents,
  details: CommonDetails,
  summary: CommonSummary,
  Tabs: CommonTabs,
  TabItem: CommonTabItem,
};
