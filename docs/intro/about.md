---
slug: /about
title: 🌋 About Lava
---

# Permissionless and ultra-reliable RPC for any Blockchain

Lava is a decentralized protocol that provides ultra-reliable RPC (Remote Procedure Call) services for blockchain networks. It works by coordinating and aggregating RPC providers, automatically routing traffic to the most efficient and reliable nodes. The protocol uses economic incentives, including provider rewards and reputation systems, to ensure high-quality service delivery. This infrastructure is crucial for AI agents, dapps, and users who need consistent, uninterrupted access to blockchain data and services.


### AI agents and users depend on RPC

Lava's vision is to enable AI agents and anyone to use blockchain apps, 24/7, with no downtime.

Lava is a protocol which coordinates dapp and AI agent traffic on every blockchain. Lava aggregates RPC providers, dynamically scaling to support demand and routing requests to the fastest, most reliable providers.

Incentives are key to the protocol. For example, in the early stages of the network, an allocation of the total supply has been allocated to rewarding data providers. This is designed to bootstrap the supply side of the network, mitigating the cold start problem many networks face.


### Key components of the protocol

Lava Network has many different participants. 

Together, the network provides fast, reliable RPC and data services to AI agents and anyone using blockchain apps. 

1. **Data Providers** e.g. RPC node runners, indexers are entities which join the Lava Network to offer services and earn rewards from different blockchains
2. **Data Consumers** e.g. wallets, dapps, AI agents are entities which use the Lava Network for permissionless, 24/7 access to blockchains, with minimal downtime
4. **Validators** secure the Lava blockchain.
3. **Restaking** allows LAVA holders to direct RPC requests to top providers so consumers benefit from high quality service 
4. **Staking** secures the Lava blockchain. Stakers earn a share of Validator rewards
5. **Slashing and jailing** creates cryptoeconomic incentives for providers to deliver high quality service
6. **Quality of Service** scores are given to providers by consumers, after a RPC requests is handled
7. **Provider Reputation** is an aggregated score which takes into account all historical Quality of Service scores. It measures providers across latency, uptime and accuracy
8. **Incentive Pools** are pools which blockchains create on the Lava blockchain, consisting of rewards for Lava Network contributors. These rewards are often in the native token of the partner chain e.g. NEAR

<center>

```mermaid
flowchart LR
    p1[Contributor] --spec --> lava[[Lava Protocol]]
    lava ---> |rewards| p2((API Providers Pool))
    lava <---> |relays| p2
    lava <--- |compute cost| p3([Consumer])
    lava <--> |relays| p3
```

</center>

:::info
For detailed implementation of specific features, please refer to the [Lava Whitepaper](https://lavanet.xyz/whitepaper).
:::

### Join Lava ecosystem

There are lots of different ways to contirnute to Lava ecosystem. Check out the ecosystem roles [here](./key-roles).

### Join Lava Community
- Join Lava [Discord](https://discord.gg/lavanetxyz) and specific channels for developers and providers
- Join Lava [Telegram](https://t.me/officiallavanetwork)
