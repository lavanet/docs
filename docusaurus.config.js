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
      "data-project-color": "#4B1112",
      "data-project-logo":
        "https://avatars.githubusercontent.com/u/100386277?s=280&v=4",
      async: true,
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
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
      /** @type {import('redocusaurus').PresetEntry} */
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            id: "lava-api",
            spec: "lava-api/openapi.yml",
            route: "lava-api",
          },
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: "#1890ff",
          /**
           * Options to pass to redoc
           * @see https://github.com/redocly/redoc#redoc-options-object
           */
          options: { disableSearch: true },
          /**
           * Options to pass to override RedocThemeObject
           * @see https://github.com/Redocly/redoc#redoc-theme-object
           */
          theme: {
            scrollYOffset: 100,
            sideNavStyle: "id-only",
            // nativeScrollbars: false
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
          {
            from: '/',
            to: '/about',
          },
        ],
      },
    ],
    [
      "docusaurus-plugin-segment",
      {
        apiKey: "DQPhWiY1Diy8ywBu7fXgqLyii8HR3cXD",
      },
    ],
    "docusaurus-plugin-hotjar",
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    async function customPlugin(context, opts) {
      return {
        name: 'custom-plugin',
        configureWebpack(config, isServer, utils, content) {
          // Modify internal webpack config. If returned value is an Object, it
          // will be merged into the final config using webpack-merge;
          // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.
          return {
            plugins: [
              new webpack.DefinePlugin({
                // IMPORTANT: To fix debug library‘s bug
                // {}.DEBUG = namespaces; // SyntaxError: Unexpected token '.'
                'process.env.DEBUG': 'process.env.DEBUG',
              })
            ]
          }
        },
      }
    }
  ],

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      toc: {
        minHeadingLevel: 2, // Minimum heading level to track
        maxHeadingLevel: 5, // Maximum heading level to track
      },
      sidebar: {
        style: 'wide', // Make it appear like GitBook
      },
      navbar: {
        title: "Lava Docs",
        logo: {
          alt: "Lava Docs Logo",
          src: "img/lava_logo.svg",
        },
        items: [
          { 
            type: 'docSidebar',
            sidebarId: 'aboutLavaSidebar',
            label: "About Lava",
            position: "left",
            to: "developer",
          },
          {
            type: 'docSidebar',
            sidebarId: 'getRPCSidebar',
            label: "Use Lava RPC",
            position: "left",
            to: "power-lava",
          },
          {
            type: 'docSidebar',
            sidebarId: 'validatorsSidebar',
            label: "Validators",
            position: "left",
            to: "validator",
          },
          {
            type: 'docSidebar',
            sidebarId: 'providerSidebar',
            label: "RPC Providers",
            position: "left",
            to: "power-lava",
          },
          {
            type: 'docSidebar',
            sidebarId: 'rollupSidebar',
            label: "RPC Pools",
            position: "left",
            to: "power-lava",
          },
          {
            href: "https://github.com/lavanet/docs",
            position: "right",
            className: "header-github-link", // Custom CSS class
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
              {
                label: "Lava Home",
                href: "https://lavanet.xyz",
              },
              {
                label: "Lava Whitepaper",
                href: "https://cdn.prod.website-files.com/642c9c8327126062770bfdd0/66fd507cdd54cabe7496d478_LavaNetwork-AccessingBlockchains.pdf",
              },
              {
                label: "Blog",
                href: "https://blog.lavanet.xyz",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/lava",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/lavanetxyz",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                to: "https://github.com/lavanet",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@lavanetxyz",
              },
            ],
          },
        ],
      },      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      hotjar: {
        applicationId: 3059536,
      },
      image: "img/logo_black_background.png",
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,

        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY,

        indexName: process.env.ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,
      },
      clarity: {
        ID: "iy35qq8h9v", // Instructions below
      }
    }),
};

module.exports = config;