---
slug: /
title: Introduction ❕
---

import RoadmapItem from '@site/src/components/RoadmapItem';
import LatestVersion from '@site/src/components/LatestVersion';
import LatestDocsVersion from '@site/src/components/LatestDocsVersion';


# Lava Docs 📑

![Intro Banner](/img/banner/Intro.jpg)  

:::danger Testnet is up and running!
Welcome testers! Thank you for joining the testnet. If you find errors in our docs, please consider [contributing!](https://github.com/lavanet/docs)
:::

## Overview 🔍

Web3 is only as strong as its weakest link. Today, due to complexities and lack of incentives to run your own node, apps rely on costly centralized services, unreliable public RPC endpoints, and self-hosted services. Lava is here to fix it. Access Lava, Access Web3.

Lava is built as an application-specific L1 PoS Blockchain, based on [CosmosSDK](https://tendermint.com/sdk/). We are building the most reliable, modular, and extensible network, which ensures high network performance and secure blockchain access for all web3 APIs. 

Lava documentation is intended to be the definitive reference for all technical aspects of Lava Protocol. For other information about Lava Network, please visit our [blog](https://www.lavanet.xyz/blog?utm_source=intro-page&utm_medium=docs) or review our new [research](https://community.lavanet.xyz/c/research/9?utm_source=intro-page&utm_medium=docs)! 


## Getting started 🌪️

[<RoadmapItem icon="⛓️" title="Supported Chains" description="Learn more about the Chains that Lava supports."/>](/chains)

[<RoadmapItem icon="⚡️" title="Access Web3 APIs" description="Start using Web3 APIs, seamlessly onboarding Lava's network"/>](/access-intro)

[<RoadmapItem icon="🌋" title="Become a Lava Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator)

[<RoadmapItem icon="🔄" title="Become an API Provider" description="Service chain access, grow the network, earn rewards"/>](/provider)

## Version Information ℹ️

|           |                   |
|-----------|-------------------|
| *Lava* Version         | **<LatestVersion />** |
| *Go* Version           | > ** 1.20.5 **        |
| CosmosSDK            |   ** v0.47 **      |
| Current Testnet      |  `lava-testnet-2`  |
| Docs Version         | **<LatestDocsVersion />** |

## Quick Links 🔗

- [🚪 Gateway](https://gateway.lavanet.xyz/?utm_source=intro-page&utm_medium=docs&utm_campaign=docs-to-gateway) - Quick access APIs
- [🔭 Explorer](https://lava.explorers.guru/) - Use our Official Block Explorer
- [💬 Community Forum](https://community.lavanet.xyz/?utm_source=intro-page&utm_medium=docs) - Long-form Discussion
- [🐦 Twitter/X Account](https://twitter.com/lavanetxyz) - Follow us on X!

---

## What is Lava? 🌋

Lava is the first modular data access layer for blockchains. It introduces [`specs`](/specs): a modular primitive that lets contributors permissionlessly add support for new chains and data services to the base protocol. RPC is the first service supported by the protocol but we are soon bringing further choice by integrating with indexing and API partners, such as Subsquid. 

Data consumers send requests to Lava’s network of data providers (node operators), who join Lava to meet demand for data. Lava creates dynamic, scalable markets around any blockchain data service. The protocol also creates crypto-economic guarantees around the quality of service, across speed, uptime and data accuracy. 

By leveraging modular architecture and a peer-to-peer network of node operators, Lava creates a unified platform for accessing the multi-chain world.


### How Does It Work? 🔩

**Developers and data consumers:** 
With Lava, data consumers get easy, fast and reliable access to 30+ chains. The protocol incentivizes providers to offer performant service and algorithmically pairs consumers with the best node available.

**Data providers (RPC node runners, indexers, etc):**
Providers join Lava to reach more developers and to monetize their existing infrastructure. We also have 250+ providers on the Lava testnet, including large providers such as Blockdaemon. Lava also runs programs called Incentivized Public RPC. On these programs, chains such as Evmos, Axelar, NEAR and more pay node operators to serve quality RPC. 


### Why Lava? ❣️

 Lava provides Multi-Chain RPC that just works:

1. **Quality of Service -** Consumers monitor and rate providers based on response time, availability and freshness. When asking for rewards, providers are required to attach their QoS score and are rewarded accordingly.

2. **Data Reliability -** Providers are subject to fraud and fault detection checks, whereby the network uses statistical inference and verifiably random selections to compare the responses of multiple providers. If a conflict is detected, the network uses an honest majority of providers to attain who was wrong, penalizing the offender.

3. **Privacy & Anonymity -** Relays are randomly distributed between a changing list of top providers, so consumers are less likely to get service from the same provider for a significant period of time. Consumer-provider communications happen directly and identities are not linked to Lava Wallets.

4. **Scalability -** Every aspect of Lava is being built with scalability in mind. A single-step reward system, aggregation, direct provider-dApp communication and staking incentives are designed to increase efficiency by sparing unnecessary stress from the network.

5. **Decentralized Access -** We encourage users to access our network in a fully decentralized way. All relays on our network are conducted peer-to-peer (P2P).

6. **Open Source -** Lava is commmitted to open source and modularity. Developers can investigate the code for the chain and any specs implemented.
