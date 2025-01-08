---
slug: /about
title: 🌋 About Lava
---

# Permissionless and ultra-reliable RPC for any blockchain

## ** Introduction to Lava** 🌋

### **The Challenge of Blockchain Infrastructure** 🌐

Lava enables 24/7 access to blockchain apps, with minimal downtime. 

Lava is a protocol which manages dapp and AI agent traffic on every blockchain. Lava aggregates RPC providers, dynamically scaling to support demand and routing requests to the fastest, most reliable providers. 

Incentives are key to the protocol. For example, in the early stages of the network, an allocation of the total supply has been allocated to rewarding data providers. This is designed to bootstrap the supply side of the network, mitigating the cold start problem many networks face.

### **How Lava works:**

- Data providers such as RPC node runners and indexers join the protocol by staking LAVA on the Lava blockchain. The blockchain maintains a registry of providers
- These providers are chain-specific and aggregated into individual endpoints, to which apps send their user traffic
- Lava coordinates the flow of traffic between apps and providers
- Providers gain a reputation score, based on constant scoring across their latency, uptime and response accuracy
- LAVA holders direct transactions and queries to top providers by restaking LAVA to them

### **Key components of the protocol**

The protocol can be broken down into:

1. **Data Providers** e.g. RPC node runners, indexers are entities which join the Lava Network to offer services and earn rewards from different blockchains
2. **Data Consumers** e.g. wallets, dapps, AI agents are entities which use the Lava Network for permissionless, 24/7 access to blockchains, with minimal downtime
3. **Restaking** allows LAVA holders to direct RPC requests to top providers so consumers benefit from high quality service 
4. **Staking** secures the Lava blockchain 
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

### **Ways you can contribute to Lava:**

- Become an RPC provider - you can serve RPC requests as part of the Lava Network
- Contributor open-source tooling - you can build block explorers, snapshots and other tooling for the Lava ecosystem
- Add support for new chains and services - you can create specifications and propose new chains to be added to Lava. See all existing specifications [here](https://github.com/lavanet/lava/tree/main/specs)

### **Get Started with Lava Network:**
- Join our [Discord](discord.gg/lavanetxyz) and specific channels for developers and providers.
- Join our [Telegram](https://t.me/officiallavanetwork).
- Read our [whitepaper](lavanet.xyz/whitepaper).
