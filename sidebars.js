// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  theSidebar: [
    'intro',
    {
      type: 'category', 
      label: 'Chains ⛓️',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Avalanche',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/avalanche-chain/avalanche'
          },
          items: [
            'chains/avalanche-chain/avalanche-dev',
            'chains/avalanche-chain/avalanche-node'
          ]
        },
        {
          type: 'category',
          label: 'Celo',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/celo-chain/celo'
          },
          items: [
            'chains/celo-chain/celo-dev',
            'chains/celo-chain/celo-node'
          ]
        },
        {
          type: 'category',
          label: 'Evmos',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/evmos-chain/evmos'
          },
          items: [
            'chains/evmos-chain/evmos-dev',
            'chains/evmos-chain/evmos-node'
          ]
        },
        {
          type: 'category',
          label: 'Filecoin',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/filecoin-chain/filecoin'
          },
          items: [
            'chains/filecoin-chain/filecoin-dev',
            'chains/filecoin-chain/filecoin-node'
          ]
        },
        {
          type: 'category',
          label: 'Juno',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/juno-chain/juno'
          },
          items: [
            'chains/juno-chain/juno-dev',
            'chains/juno-chain/juno-node'
          ]
        },
        {
          type: 'category',
          label: 'Optimism',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/optimism-chain/optimism'
          },
          items: [
            'chains/optimism-chain/optimism-dev',
            'chains/optimism-chain/optimism-node'
          ]
        },
        {
          type: 'category',
          label: 'Solana',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/solana-chain/solana'
          },
          items: [
            'chains/solana-chain/solana-dev',
            'chains/solana-chain/solana-node'
          ]
        },
        {
          type: 'category',
          label: 'Starknet',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/starknet-chain/starknet'
          },
          items: [
            'chains/starknet-chain/starknet-dev',
            'chains/starknet-chain/starknet-node'
          ]
        }
      ]
    },
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
            'access-apis/sdk-frontend',
            'access-apis/sdk-backend',
            `access-apis/sdk-getting-started`
          ]
        },
        'access-apis/access-server-kit',
        'public-rpc',
      ],
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
            'validator/validator-rejoin'
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
            'provider/provider-features',
            'provider/provider-tls',
            'provider/lavavisor'
          ]
        },    
        'lava-blockchain/account-wallet',
        'lava-blockchain/faucet',
        'lava-blockchain/subscriptions'
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
    'explorers',
    {
      type: 'link',
      label: 'Contribute to Docs',
      href: 'https://github.com/lavanet/docs',
    },
  ],
};

module.exports = sidebars;