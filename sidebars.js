// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  theSidebar: [
    'intro',
    {
      type: 'category', 
      label: 'Access Web3 APIs ⚡️',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'access-intro'
      },
      items: [
        {
          type: 'category', 
          label: 'Gateway Access',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'access-apis/gateway-access'
          },
          items: [
            `access-apis/gateway-getting-started`
          ]
        },    
        'access-apis/access-sdk',
        'access-apis/access-server-kit',
      ]
    },
    {
      type: 'category', 
      label: 'Power-up Lava 🌋',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'power-lava-intro'
      },
      items: [
        'lava-blockchain/hardware-requirements',
        {
          type: 'category', 
          label: 'Join testnet',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'lava-blockchain/join-testnet'
          },
          items: [
            'lava-blockchain/join-testnet-manual-cosmovisor',
            'lava-blockchain/join-testnet-manual'
          ]
        },
        {
          type: 'category', 
          label: 'Be a Validator',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'validator'
          },
          items: [
            'validator/validator-manual',
          ]
        },    
        {
          type: 'category', 
          label: 'Be a Provider',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'provider'
          },
          items: [
            'provider/provider-setup',
          ]
        },    
        'lava-blockchain/faucet',
        'lava-blockchain/account-wallet',
      ]
    },
    {
      type: 'category', 
      label: 'Lava Network',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Lava Blockchain'
      },
      items: [
      ]
    },
    `tutorials`,
    `access-apis/gateway-getting-started`,
    'faq',
    {
      type: 'link',
      label: 'Contribute to Docs',
      href: 'https://github.com/lavanet/docs',
    },
  ],
};

module.exports = sidebars;