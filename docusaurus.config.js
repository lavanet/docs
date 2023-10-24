// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lava Docs",
  tagline: "Decentralizing Web3 Infra",
  url: "https://docs.lavanet.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lavanet",
  projectName: "docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

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
      navbar: {
        title: "Lava Docs",
        logo: {
          alt: "Lava Docs Logo",
          src: "img/lava_logo.svg",
        },
        items: [
          {
            label: "Web3 APIs ⚡️",
            position: "left",
            to: "access-intro",
          },
          {
            label: "Lava Binaries 🌋",
            position: "left",
            to: "power-lava",
          },
          {
            href: "https://lavanet.xyz",
            label: "Lava Home",
            position: "right",
          },
          {
            href: "https://github.com/lavanet/docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://discord.gg/Tbk5NxTCdA",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Lava. Docs built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      hotjar: {
        applicationId: 3059536,
      },
      announcementBar: {
        id: "no_token",
        content:
          'Lava testnet is live. Mainnet tokens not yet available. <B>Beware of scams.</B> Need help? <a target="_blank" href="https://discord.gg/5VcqgwMmkA">Join our Discord.</a>',
        backgroundColor: "#AA0000",
        textColor: "#FFFFFF",
        isCloseable: true,
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
