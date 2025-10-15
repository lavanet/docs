// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Single, long sidebar that includes everything
  aboutLavaSidebar: [
    // ==== Previously in aboutLavaSidebar ====
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "About Lava Network", id: "intro/about" },
        { type: "doc", label: "Lava Network Architecture", id: "intro/how-lava-work" },
        { type: "doc", label: "FAQ", id: "intro/faq" },
      ],
    },
    {
      type: "category",
      label: "Lava Public RPC",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Overview", id: "lava-public-rpc/lava-public-rpc-overview" },
        { type: "doc", label: "Lava Public RPC Endpoints", id: "lava-public-rpc/public-rpc-endpoints" },
      ],
    },
    {
      type: "category",
      label: "Lava RPC API",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Overview", id: "lava-rpc-api/public-rpc-api-overview" },
        { type: "doc", label: "Quickstart", id: "lava-rpc-api/quickstart" },
        { type: "doc", label: "Access Plans", id: "lava-rpc-api/rpc-access-plans" },
        { type: "doc", label: "Supported Chains", id: "lava-rpc-api/supported-chains" },
        {
          type: "category",
          label: "API methods",
          collapsible: true,
          collapsed: true,
          items: [
            { type: "doc", label: "Arbitrum API", id: "lava-rpc-api/api-methods/arbitrum" },
            { type: "doc", label: "Axelar API", id: "lava-rpc-api/api-methods/axelar" },
            { type: "doc", label: "Base API", id: "lava-rpc-api/api-methods/base" },
            { type: "doc", label: "Binance Smart Chain API", id: "lava-rpc-api/api-methods/bsc" },
            { type: "doc", label: "CosmosHub API", id: "lava-rpc-api/api-methods/cosmoshub" },
            { type: "doc", label: "Ethereum API", id: "lava-rpc-api/api-methods/ethereum" },
            { type: "doc", label: "Filecoin API", id: "lava-rpc-api/api-methods/filecoin" },
            { type: "doc", label: "Hedera API", id: "lava-rpc-api/api-methods/hedera" },
            { type: "doc", label: "Hyperliquid API", id: "lava-rpc-api/api-methods/hyperliquid" },
            { type: "doc", label: "Lava API", id: "lava-rpc-api/api-methods/lava" },
            { type: "doc", label: "Movement API", id: "lava-rpc-api/api-methods/movement" },
            { type: "doc", label: "Near API", id: "lava-rpc-api/api-methods/near" },
            { type: "doc", label: "Optimism API", id: "lava-rpc-api/api-methods/optimism" },
            { type: "doc", label: "Polygon API", id: "lava-rpc-api/api-methods/polygon" },
            { type: "doc", label: "Solana API", id: "lava-rpc-api/api-methods/solana" },
            { type: "doc", label: "Starkent API", id: "lava-rpc-api/api-methods/starknet" },
            { type: "doc", label: "Union API", id: "lava-rpc-api/api-methods/union" },
            
            
          ]

        },
      ],
    },
    {
      type: "category",
      label: "Enterprise RPC Smart Router",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Overview", id: "smart-router/smart-router" },
        { type: "doc", label: "Key Features", id: "smart-router/key-features" },
        { type: "doc", label: "Architecture Components", id: "smart-router/architecture-components" },
        { type: "doc", label: "Platform Characteristics", id: "smart-router/platform-characteristics" },
      ],
    },

    // ==== Merged from providerSidebar (kept section names) ====
    {
      type: "category",
      label: "Interact with Lava Network",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Wallet Configuration", id: "intro/wallet" },
        { type: "doc", label: "Installing Lava Binaries", id: "intro/install-lava" },
        { type: "doc", label: "Lava Network Explorers", id: "intro/explorers" },
      ],
    },
    {
      type: "category",
      label: "Lava RPC Node Providers",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Lava RPC provider role", id: "provider/provider" },
        {
          type: "category",
          label: "Become a Lava RPC provider",
          collapsible: true,
          collapsed: true,
          items: [
            { type: "doc", label: "1. Run an RPC node", id: "provider/running-nodes/run-nodes" },
            {
              type: "category",
              label: "2. Configure Lavavisor (recommended)",
              collapsible: true,
              collapsed: true,
              link: { type: "doc", id: "provider/lavavisor/lavavisor" },
              items: [
                { type: "doc", label: "Process Wrapper", id: "provider/lavavisor/lavavisor-wrap" },
                { type: "doc", label: "Service Manager", id: "provider/lavavisor/lavavisor-services" },
              ],
            },
            { type: "doc", label: "3. Configure TLS", id: "provider/provider-tls" },
            { type: "doc", label: "4. Configure provider service", id: "provider/provider-setup" },
          ],
        },
        { type: "doc", label: "Load Balancing", id: "provider/provider-load-balancing" },
        { type: "doc", label: "Advanced configurations", id: "provider/provider-features" },
        { type: "doc", label: "Provider Reputation", id: "provider/improving-provider-service" },
        { type: "doc", label: "Provider Rewards", id: "provider/provider-rewards-service" },
        { type: "doc", label: "FAQ", id: "provider/provider-faq" },
      ],
    },
    {
      type: "category",
      label: "Lava Network Validators",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Lava Network Validator role", id: "validator/validator" },
        {
          type: "category",
          label: "Become a validator",
          collapsible: true,
          collapsed: true,
          items: [
            { type: "doc", label: "Hardware Requirements", id: "validator/hardware-requirements" },
            {
              type: "category",
              label: "1. Run Lava Node",
              collapsible: true,
              collapsed: true,
              items: [
                { type: "doc", label: "Mainnet", id: "validator/lava-nodes/mainnet/join-mainnet-manual-cosmovisor" },
                { type: "doc", label: "Testnet", id: "validator/lava-nodes/testnet/join-testnet-manual-cosmovisor" },
                { type: "doc", label: "State-Sync", id: "validator/lava-nodes/state-sync" },
              ],
            },
            { type: "doc", label: "2. Configure a Validator process", id: "validator/validator-manual" },
          ],
        },
        { type: "doc", label: "Validator Rewards", id: "validator/validator-rewards" },
        { type: "doc", label: "Validator Delegation program", id: "validator/validator-delegation" },
        { type: "doc", label: "Lavad Reference", id: "validator/lavad-reference" },
      ],
    },
    {
      type: "category",
      label: "Adding new specs on Lava Network",
      collapsible: false,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
            { type: "doc", label: "Specs", id: "specs/spec" },
            { type: "doc", label: "Creating new specs", id: "specs/add-spec" },
            { type: "doc", label: "Reference Guide", id: "specs/spec-reference" },
            { type: "doc", label: "Spec Proposal Guide", id: "specs/spec-guide" },
          ],
        },
    {
      type: "category",
      label: "Governance",
      collapsible: true,
      className: "custom-sidebar-spacing",
      collapsed: false,
      items: [
        { type: "doc", label: "Governance Overview", id: "governance/overview" },
        { type: "doc", label: "Proposal Types", id: "governance/types" },
        { type: "doc", label: "Governance Parameters", id: "governance/parameters" },
        { type: "doc", label: "Governance Proposals", id: "governance/submit-proposal" },
      ],
    },

    // If you ever want to reintroduce the token section, just drop it back here.
    // ...
  ],
};

module.exports = sidebars;

