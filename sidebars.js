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
          label: 'Gateway',
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
        {
          type: 'category', 
          label: 'SDK',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'access-apis/access-sdk'
          },
          items: [
            'access-apis/sdk-prerequisites',
            `access-apis/sdk-getting-started`
          ]
        },
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
            'provider/provider-features'
          ]
        },    
        'lava-blockchain/account-wallet',
        'lava-blockchain/faucet',
        'lava-blockchain/subscriptions'
      ]
    },
    {
      type: 'category', 
      label: 'Chains ⛓️',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Junø',
          collapsible: true,
          collapsed: true,
          items: [
            'chains/juno-chain/juno-dev',
            'chains/juno-chain/juno-node'            
          ]
        }
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
    'faq',
    {
      type: 'link',
      label: 'Contribute to Docs',
      href: 'https://github.com/lavanet/docs',
    },
  ],
};

module.exports = sidebars;