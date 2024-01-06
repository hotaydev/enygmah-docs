const redirectJson = require("./redirects.json");

/** @type {import('@docusaurus/types/src/index').DocusaurusConfig} */
const siteConfig = {
  title: "enygmah",
  tagline: "The only tool your project needs to guarantee security and quality. Open-source and free.",
  url: "https://enygmah.com",
  baseUrl: "/",
  projectName: "enygmah",
  organizationName: "hotaydev",
  trailingSlash: true,
  favicon: "img/favicon.png",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
                              "https://github.com/hotaydev/enygmah-docs/tree/master/documentation",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          admonitions: {
            tag: ":::",
            keywords: [
              "additional",
              "note",
              "tip",
              "info-tip",
              "info",
              "caution",
              "danger",
              "sourcecode",
              "create-example",
            ],
          },
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/enygmah-theme/css/fonts.css"),
            require.resolve("./src/enygmah-theme/css/custom.css"),
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/split-pane.css"),
            require.resolve("./src/css/demo-page.css"),
          ],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: redirectJson.redirects,
      },
    ],
    async function tailwindcss() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "./plugins/blog-plugin.js",
      {
        blogTitle: "Blog",
        blogDescription: "The enygmah blog",
        routeBasePath: "/blog",
        postsPerPage: 12,
        blogSidebarTitle: "All posts",
        blogSidebarCount: 0,
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} hotay.`,
        },
      },
    ],
  ],
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/nightOwlLight"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-hidden",
          line: "hide-next-line",
          block: { start: "hide-start", end: "hide-end" },
        },
        {
          className: "theme-code-block-added-line",
          line: "added-line",
          block: { start: "added-start", end: "added-end" },
        },
        {
          className: "theme-code-block-removed-line",
          line: "removed-line",
          block: { start: "removed-start", end: "removed-end" },
        },
      ],
    },
    image: "img/hero-image.png",
    algolia: {
      // TODO: Use https://docsearch.algolia.com/ when it's ready for production
      appId: "KRR9VEUPCT",
      apiKey: "cd0188125dcd31fb4b011b5e536d963a",
      indexName: "refine",
      contextualSearch: true,
    },
    metadata: [
      {
        name: "keywords",
        content: "security, cli, tool, dev tool, quality, code quality, code security, code analysis, static analysis, dynamic analysis",
      },
    ],
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
    },
  },
};

module.exports = siteConfig;
