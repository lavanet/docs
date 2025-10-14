---
slug: /lava-public-rpc
title: Lava Public RPC
---

# Lava Public RPC

Bootstrapping reliable infrastructure is one of the biggest challenges blockchain projects face when supporting dapp developers. 

Many projects rely on either:

- **Centralized RPC providers** - convenient, but concentrated and prone to censorship and creates single points of failure.

- **Community-run setups** - open, but often fragmented, under-maintained, and unreliable.

Lava Public RPC solves this by letting blockchain projects create reward pools to onboard independent and experienced RPC Node Providers to service the requests for their chain. This provides developers with free, high-performance RPC access, powered by a decentralized network of professional RPC Node Providers.

Rewards are distributed to node providers based on measured Quality of Service (QoS), ensuring developers always get fast, reliable access to blockchain data - without needing to run their own nodes.

# Lava Public RPC under the hood

Blockchain projects can quickly bootstrap by adding their chain and providing their developer ecosystem with Lava Public RPC. Here’s how it all works under the hood.

![SupportedChainsList](/img/lava-public-rpc/pools-flow.png)



## Adding the chain on Lava Network

Adding a chain on Lava Network requires creating a spec (specification). Specs are modular blueprints, defined in a simple JSON file, that define the chain, required API methods and interfaces, verifications, costs and a number of other configurations. They can also include optional settings that Lava RPC providers can include in their configurations like:

- **Extensions** - methods that extend the default behaviour of existing API collections. An example of such extensions is support for archival requests.

- **Add Ons** - methods that introduce a new behaviour and API collections. For example, debug nodes may expose additional API methods that are not available on standard nodes.

Specs are typically authored by Lava Network contributors and go through a governance process before being activated. If you would like to add your chain on Lava Network, [reach out to the Lava Network team](https://www.lavanet.xyz/lava-public-rpc#pools-form).

## Public RPC Endpoint for Your Chain

Developers in your blockchain ecosystem need simple, reliable access to underlying blockchain data. Whether it’s a dapp, wallet, or AI agent, they need fast and consistent data without worrying about running their own nodes.

With Lava Public RPC, blockchain projects can provide their developers with a unified RPC endpoint tailored to their chain. This dramatically lowers onboarding friction and accelerates development on your chain.

The unified Lava Public RPC endpoint typically uses the following format:

`yourchain.lava.build`

# Powered by the Unified RPC Engine

All incoming data requests are automatically handled by Lava Network’s RPC Engine, which routes them to the most optimal RPC nodes. Every chain supported on Lava is backed by a network of independent RPC providers.

RPC node providers join Lava permissionlessly and configure their infrastructure to service chain-specific specifications (Specs). The Lava RPC Engine continuously monitors provider performance - tracking metrics such as latency, availability, and data freshness - and uses this data when pairing providers with incoming traffic.

In addition, the Engine considers factors such as geolocation and request type (e.g., archival, debug) to ensure the best eligible provider is selected for each epoch (a 15-minute time period). If a provider becomes unavailable, or if their Quality of Service (QoS) metrics drop, another provider is automatically chosen to serve the traffic.

# Rewards Mechanism Favour High Quality of Service

When foundations and blockchain projects use Lava Public RPC to bootstrap their infrastructure, they create a pool on Lava for their specific chain. Pools can be funded with LAVA, stablecoins, or chain-native tokens.

Rewards are distributed to Lava RPC Node Providers based on their performance. This model ensures providers are fairly compensated for their work while incentivizing the highest Quality of Service across the network.







