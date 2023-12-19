// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  theSidebar: [
    {
      type: 'category',
      label: 'Introduction 🎉',
      link: {
        type: 'doc',
        id: 'intro/intro'
      },
      collapsible: true,
      collapsed: true,
      items: [
        'intro/about',
        'intro/key-terms',
        'intro/faq',
      ]
    },
    {
      type: 'category',
      label: 'Developers 💻',
      link: {
        type: 'doc',
        id: 'developers/developer-intro'
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category', 
          label: '🌀 Gateway ',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'developers/gateway/gateway-access'
          },
          items: [
            'developers/gateway/gateway-getting-started',
          ]
        },
        {
          type: 'category', 
          label: '🛠️ Server Kit ',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'developers/server-kit/access-server-kit'
          },
          items: []
        },
       {
        type: 'category', 
        label: '📦 SDK',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'developers/sdk/access-sdk'
        },
        items: [
          'developers/sdk/sdk-getting-started',
          'developers/sdk/sdk-backend',
          'developers/sdk/sdk-frontend',
          {
            type: 'category', 
            label: 'Examples 💡',
            collapsible: true,
            collapsed: true,
            link: {
              type: 'doc',
              id: 'developers/sdk/access-sdk'
            },
            items: [
              'developers/sdk/sdk-multichain-example',
              'developers/sdk/lava-sdk-gallery',
              'developers/sdk/lava-bazaar',
            ]
          },

        ]
      },
      {
        type: 'category', 
        label: '🔌 Integrations',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'developers/integrations/sdk-integrations'
        },
        items: [
          'developers/integrations/cosmjs',
          'developers/integrations/ethersjs5',
          'developers/integrations/ethersjs6',
          'developers/integrations/viem',
          'developers/integrations/web3js'
        ]
      },
      {
        type: 'category', 
        label: '🗜️ Specifications',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'specs/spec'
        },
        items: [
          'specs/add-spec',
          'specs/spec-reference'
        ]
     },
      ]
    },
    {
      type: 'category', 
      label: 'Chains ⛓️',
      link: {
        type: 'doc',
        id: 'chains/chains'
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Avalanche',
          collapsible: true,
          collapsed: true,
          description: 'AVAX, AVAXT',
          link: {
            type: 'doc',
            id: 'chains/avalanche-chain/avalanche',
          },
          items: [
            'chains/avalanche-chain/avalanche-dev',
            'chains/avalanche-chain/avalanche-node'
          ]
        },
        {
          type: 'category',
          label: 'Axelar',
          collapsible: true,
          collapsed: true,
          description: 'AXELAR, AXELART',
          link: {
            type: 'doc',
            id: 'chains/axelar-chain/axelar'
          },
          items: [
            'chains/axelar-chain/axelar-dev',
            'chains/axelar-chain/axelar-node'
          ]
        },
        {
          type: 'category',
          label: 'Celo',
          collapsible: true,
          collapsed: true,
          description: 'CELO, ALFAJORES',
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
          label: 'CosmosHub',
          collapsible: true,
          collapsed: true,
          description: 'COS5, COS5T',
          link: {
            type: 'doc',
            id: 'chains/cosmoshub-chain/cosmoshub'
          },
          items: [
            'chains/cosmoshub-chain/cosmoshub-dev',
            'chains/cosmoshub-chain/cosmoshub-node'
          ]
        },
        {
          type: 'category',
          label: 'Evmos',
          collapsible: true,
          collapsed: true,
          description: 'EVMOS, EVMOST',
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
          label: 'Ethereum',
          collapsible: true,
          collapsed: true,
          description: 'ETH1, GTH1',
          link: {
            type: 'doc',
            id: 'chains/ethereum-chain/ethereum'
          },
          items: [
            'chains/ethereum-chain/ethereum-dev',
            'chains/ethereum-chain/ethereum-node'
          ]
        },
        {
          type: 'category',
          label: 'Filecoin',
          collapsible: true,
          collapsed: true,
          description: 'FVM',
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
          description: 'JUN1, JUNT1',
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
          label: 'Lava',
          description: 'LAV1',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/lava-chain/lava'
          },
          items: [
            'chains/lava-chain/lava-dev',
            'chains/lava-chain/lava-node'
          ]
        },
        {
          type: 'category',
          label: 'NEAR',
          description: 'NEAR, NEART',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'chains/near-chain/near'
          },
          items: [
            'chains/near-chain/near-dev',
            'chains/near-chain/near-node'
          ]
        },
        {
          type: 'category',
          label: 'Optimism',
          collapsible: true,
          collapsed: true,
          description: 'OPTM, OPTMT',
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
          description: 'SOL, SOLT',
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
          description: 'STRK, STRKT',
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
      label: 'Web3 APIs ⚡️',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'access-intro'
      },
      items: [
        'public-rpc',
      ],
    },
    {
      type: 'category', 
      label: 'Lava Protocol 🌋',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'power-lava-intro'
      },
      items: [
        'lava-blockchain/install-lava',
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
            {
              type: 'category',
              label: 'Lavavisor',
              collapsible: true,
              collapsed: true,
              description: 'lavavisor',
              link: {
                type: 'doc',
                id: 'provider/lavavisor/lavavisor',
              },
              items: [
                'provider/lavavisor/lavavisor-wrap',
                'provider/lavavisor/lavavisor-services',
              ]
            },
            'provider/provider-setup',
            'provider/provider-features',
            'provider/provider-tls',
            'provider/provider-improve-service'
          ]
        },    
        'lava-blockchain/wallet',
        'lava-blockchain/faucet',
        'lava-blockchain/subscriptions',
        'lava-blockchain/badge-server'
      ]
    },
    `tutorials`,
    'explorers',
    {
      type: 'link',
      label: 'Contribute to Docs',
      href: 'https://github.com/lavanet/docs',
    },
  ],
};

module.exports = sidebars;