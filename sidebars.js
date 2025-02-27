// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  aboutLavaSidebar: [
    {
      type: "category",
      label: "About Lava",
      collapsible: false,
      className: "custom-sidebar-spacing", // Add a custom class
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Lava Overview",
          id: "intro/about",
        },
        {
          type: "doc",
          label: "Roles in Lava ecosystem",
          id: "intro/key-roles",
        },
        {
          type: "doc",
          label: "Lava Architecture",
          id: "intro/how-lava-work",
        },
        {
          type: "doc",
          label: "Key Terms",
          id: "intro/key-terms",
        },
        {
          type: "doc",
          label: "Tutorials",
          id: "intro/tutorials",
        },
      ],
    },
    {
      type: "category",
      label: "Lava token",
      collapsible: false,
      className: "custom-sidebar-spacing", // Add a custom class
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "The Lava Token",
          id: "intro/lava-token",
        },
        {
          type: "doc",
          label: "How to bridge Lava",
          id: "intro/how-to-bridge-lava",
        },
        {
          type: "doc",
          label: "Staking and Restaking Lava",
          id: "intro/how-to-stake-and-restake-lava",
        },
        {
          type: "doc",
          label: "Explorers",
          id: "intro/explorers",
        },
        {
          type: "category",
          label: "Tokenomics",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Supply",
              id: "tokenomics/supply"
            },
            {
              type: "doc",
              label: "Rewards and Restaking",
              id: "tokenomics/rewards-restaking"
            },
            {
              type: "doc",
              label: "Distribution",
              id: "tokenomics/distribution"
            },
            {
              type: "doc",
              label: "Growth",
              id: "tokenomics/growth"
            },
          ],
        },

      ],
    },
    {
      type: "category",
      label: "Governance",
      collapsible: false,
      className: "custom-sidebar-spacing", // Add a custom class
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Governance Overview",
          id: "governance/overview",
        },
        {
          type: "doc",
          label: "Proposal Types",
          id: "governance/types",
        },
        {
          type: "doc",
          label: "Governance Parameters",
          id: "governance/parameters",
        },
        {
          type: "doc",
          label: "Governance Proposals",
          id: "governance/submit-proposal",
        },

      ],
    },
  ],
  getRPCSidebar: [
        {
          type: "category",
          label: "Build with Lava RPC",
          collapsible: false,
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "About Lava RPC",
              id: "developer/subscriptions"
            },
            {
              type: "category",
              label: "Access RPC",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "developer/endpoints/endpoints-overview",
              },
              items: [
                {
                  type: "doc",
                  label: "Use Public Endpoints",
                  id: "developer/endpoints/iprpc"
                },
                {
                  type: "doc",
                  label: "Use Public Community Endpoints",
                  id: "developer/endpoints/public-rpc"
                },
                {
                  type: "doc",
                  label: "Use Magma Gateway",
                  id: "developer/endpoints/gateway-endpoints"
                },
              ],
            },
            {
              type: "doc",
              label: "Server Kit (Beta)",
              id: "developer/access-server-kit"
            },
            {
              type: "category",
              label: "Lava SDK (Beta)",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "developer/sdk/access-sdk",
              },
              items: [
                {
                  type: "doc",
                  label: "Backend",
                  id: "developer/sdk/sdk-backend"
                },
                {
                  type: "doc",
                  label: "Frontend",
                  id: "developer/sdk/sdk-frontend"
                },
                {
                  type: "category",
                  label: "Examples",
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: "generated-index",
                  },
                  items: [
                    {
                      type: "doc",
                      label: "All Blocks App",
                      id: "developer/sdk/examples/all-blocks-app"
                    },
                    {
                      type: "doc",
                      label: "Lava Bazaar",
                      id: "developer/sdk/examples/lava-bazaar"
                    },
                    {
                      type: "doc",
                      label: "Lava SDK Gallery",
                      id: "developer/sdk/examples/lava-sdk-gallery"
                    },
                    {
                      type: "doc",
                      label: "Multichain Example",
                      id: "developer/sdk/examples/sdk-multichain-example"
                    },
                  ],
                }
              ],
            },
            {type: "category",
              label: "Web3 APIs",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "developer/integrations/sdk-integrations",
              },
              items: [
                {
                  type: "doc",
                  label: "cosmjs",
                  id: "developer/integrations/cosmjs"
                },
                {
                  type: "doc",
                  label: "ethersjs5",
                  id: "developer/integrations/ethersjs5"
                },
                {
                  type: "doc",
                  label: "ethersjs6",
                  id: "developer/integrations/ethersjs6"
                },
                {
                  type: "doc",
                  label: "viem",
                  id: "developer/integrations/viem"
                },
                {
                  type: "doc",
                  label: "web3js",
                  id: "developer/integrations/web3js"
                }
              ]
            },
            {
              type: "doc",
              label: "FAQs",
              id: "developer/developer-faq"
            }
          ]
        },
      ],
  validatorsSidebar: [
    {
      type: "category",
      label: "Validators",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "validator/validator",
      },
      items: [
        {
          type: "category",
          label: "Become a validator",
          collapsible: true,
          collapsed: true,
          items:[
            {
              type: "category",
              label: "1. Run Lava Node",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  label: "Testnet",
                  id: "validator/lava-nodes/testnet/join-testnet-manual-cosmovisor"
                },
                {
                  type: "doc",
                  label: "Mainnet",
                  id: "validator/lava-nodes/mainnet/join-mainnet-manual-cosmovisor"
                },
              ],
            },
            {
              type: "doc",
              label: "2. Configure a Validator process",
              id: "validator/validator-manual",
            },
          ],
        },
        {
          type: "doc",
          label: "Validator Rewards",
          id: "validator/validator-rewards"
        },
        {
          type: "doc",
          label: "Validator Delegation program",
          id: "validator/validator-delegation"
        },
        {
          type: "doc",
          label: "Lavad Reference",
          id: "validator/lavad-reference"
        },
        {
          type: "doc",
          label: "FAQ",
          id: "validator/validator-faq"
        },
      ],
    },
  ],
  providerSidebar: [
    {
      type: "category",
      label: "RPC Providers",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Lava RPC provider role",
          id: "provider/provider"
        },
        {
          type: "category",
          label: "Become a Lava RPC provider",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "1. Run an RPC node",
              collapsible: true,
              collapsed: true,
              link: {type: "doc", id: "provider/running-nodes/run-nodes"},
              items: [
                {
                  type: "doc",
                  label: "Lava",
                  id: "provider/running-nodes/lava"
                },
                {
                  type: "doc",
                  label: "Near",
                  id: "provider/running-nodes/near"
                },
                {
                  type: "doc",
                  label: "Ethereum",
                  id: "provider/running-nodes/ethereum"
                },
                {
                  type: "doc",
                  label: "Avalanche",
                  id: "provider/running-nodes/avalanche"
                },
              ]
            },
            {
              type: "category",
              label: "2. Configure Lavavisor (recommended)",
              collapsible: true,
              collapsed: true,
              link: {type: "doc", id: "provider/lavavisor/lavavisor"},
              items: [
                {
                  type: "doc",
                  label: "Process Wrapper",
                  id: "provider/lavavisor/lavavisor-wrap"
                },
                {
                  type: "doc",
                  label: "Service Manager",
                  id: "provider/lavavisor/lavavisor-services"
                },
              ],
            },
            {
              type: "doc",
              label: "3. Configure TLS",
              id:"provider/provider-tls"
            },
            {
              type: "doc",
              label: "4. Configure provider service",
              id: "provider/provider-setup"
            }
          ],
        },
        {
          type: "doc",
          label: "Load Balancing",
          id: "provider/provider-load-balancing"
        },
        {
          type: "doc",
          label: "Advanced configurations",
          id: "provider/provider-features"
        },
        {
          type: "doc",
          label: "Provider Reputation",
          id: "provider/improving-provider-service"
        },
        {
          type: "doc",
          label: "Provider Rewards",
          id: "provider/provider-rewards-service"
        },
        {
          type: "doc",
          label: "lavap reference",
          id: "provider/lavap-reference"
        },
        {
          type: "doc",
          label: "FAQ",
          id: "provider/provider-faq"
        },
      ]
    },
  ],
  rollupSidebar: [
    {
      type: "category",
      label: "RPC Pools",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Power up your chain with Lava",
          id: "rollups/rollups"
        },
        {
          type: "category",
          label: "Specifications",
          collapsible: true,
          collapsed: false,
          link: {type: "doc", id: "rollups/specs/spec"},
          items: [
            {
              type: "doc",
              label: "Add a specification to your chain",
              id: "rollups/specs/add-spec"
            },
            {
              type: "doc",
              label: "Reference Guide",
              id: "rollups/specs/spec-reference"
            },
            {
              type: "doc",
              label: "Spec Proposal Guide",
              id: "rollups/specs/spec-guide"
            },
          ],
        },
      ]
    },
  ]
};

module.exports = sidebars;
