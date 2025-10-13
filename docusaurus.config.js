// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const webpack = require('webpack');
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lava Docs",
  tagline: "Decentralizing Web3 Infra",
  url: "https://docs.lavanet.xyz",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lavanet",
  projectName: "docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "7a6c07b5-14a4-47c9-819f-ffc0d86aee42",
      "data-project-name": "Lava",
      "data-project-color": "#3b82f6", // matches modern blue CSS
      "data-project-logo":
        "https://avatars.githubusercontent.com/u/100386277?s=280&v=4",
      async: true,
    },
  ],
  presets: [
    [
      "classic",
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/lavanet/docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4G2GHTV35E",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-P26HFWJW',
        },
      }),
    ],
    [
      "redocusaurus",
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          { id: "lava-api", spec: "lava-api/openapi.yml", route: "lava-api" },
        ],
        theme: {
          primaryColor: "#3b82f6",
          options: { disableSearch: true },
          theme: {
            scrollYOffset: 100,
            sideNavStyle: "id-only",
          },
        },
      },
    ],
  ],

  plugins: [
    "docusaurus-plugin-clarity",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/intro/about', to: '/about' },
          { from: '/iprpc', to: '/public-rpc-endpoints' },
          { from: '/endpoints-overview', to: '/lava-rpc-api-overview'},
          { from: '/gateway-endpoints', to: '/quickstart'},
          { from: '/key-roles', to: '/about'},
          { from: '/key-terms', to: '/about'},
          { from: '/tutorials', to: '/about'},
          { from: '/lava-token', to: '/about'},
          { from: '/restaking-lava', to: '/about'},
          { from: '/how-to-bridge-lava', to: '/about'},
          { from: '/how-to-stake-and-restake-lava', to: '/about'},
          { from: '/supply', to: '/about'},
          { from: '/rewards-restaking', to: '/about'},
          { from: '/distribution', to: '/about'},
          { from: '/growth', to: '/about'},
          { from: '/developer-faq', to: '/lava-public-rpc'},
          { from: '/sdk-integrations', to: '/lava-public-rpc'},
          { from: '/add-lava', to: '/lava-public-rpc'}, 
        ],
      },
    ],
    [
      "docusaurus-plugin-segment",
      { apiKey: "DQPhWiY1Diy8ywBu7fXgqLyii8HR3cXD" },
    ],
    "docusaurus-plugin-hotjar",
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    async function customPlugin() {
      return {
        name: 'custom-plugin',
        configureWebpack() {
          return {
            plugins: [
              new webpack.DefinePlugin({
                'process.env.DEBUG': 'process.env.DEBUG',
              })
            ]
          }
        },
      }
    }
  ],

  markdown: { mermaid: true },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      toc: { minHeadingLevel: 2, maxHeadingLevel: 5 },
      sidebar: { style: 'wide' },
      navbar: {
        title: "Lava Docs",
        logo: { alt: "Lava Docs Logo", src: "img/lava_logo.svg", href: '/about' },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aboutLavaSidebar',
            label: "Docs",
            position: "left",
          },
          {
            href: "https://github.com/lavanet/docs",
            position: "right",
            className: "header-github-link",
            'aria-label': "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Lava Network",
            items: [
              { label: "Lava Home", href: "https://lavanet.xyz" },
              {
                label: "Lava Whitepaper",
                href: "https://cdn.prod.website-files.com/642c9c8327126062770bfdd0/66fd507cdd54cabe7496d478_LavaNetwork-AccessingBlockchains.pdf",
              },
              { label: "Blog", href: "https://www.lavanet.xyz/blog" },
            ],
          },
          {
            title: "Community",
            items: [
              { label: "Discord", href: "https://discord.gg/lava" },
              { label: "Twitter", href: "https://x.com/lavanetxyz" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "GitHub", to: "https://github.com/lavanet" },
              { label: "Youtube", href: "https://www.youtube.com/@lavanetxyz" },
            ],
          },
        ],
      },
      prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
      hotjar: { applicationId: 3059536 },
      image: "img/logo_black_background.png",
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
      },
      clarity: { ID: "iy35qq8h9v" }
    }),
};

module.exports = config;
