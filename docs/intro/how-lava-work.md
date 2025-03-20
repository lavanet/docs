---
slug: /lava-architecture
title: ⚙️ How Lava works
---

# **Lava Architecture**

Lava Network is a decentralized protocol designed to provide fast, reliable, and censorship-resistant data infrastructure for any blockchain. The protocol enables seamless data API access for consumers (dApps, wallets, indexers) serviced by high-quality RPC providers.

Lava Blockchain serves as the settlement layer for off-chain Remote Procedure Calls (RPCs), ensuring finalization proofs and reward claims are securely processed on-chain.

The image below provides a simplified view of the Lava Network architecture:

![Lava Architecture](/img/protocol/architecture.png)

### Specifications (Specs)

Lava is governed through on-chain governance. Specifications define modular collections of APIs that providers support. These specifications can be updated, replaced, or added dynamically. 

### Consumers

Consumers—such as AI agents, dApps, wallets, and indexers—request blockchain data through supported APIs. They can interact with Lava through multiple interfaces (using public endpoints, Lava Gateway, Lava SDK).  
They can increase their usage limits by purchasing LAVA subscriptions. The Lava protocol connects consumers and providers through peer-to-peer connections via pairing lists.

### RPC Providers

These APIs are serviced by RPC providers who deliver blockchain data through supported specifications. Providers are ranked using reputation scores, which are calculated based on availability, latency, and synchronization freshness.

### Pairing

Lava uses **PairingLists (PL)** to connect consumers with the best providers:

- Consumers receive a ranked list of providers based on performance and stake (epoch-based).  
- Consumers select and establish peer-to-peer connections with the optimal provider.  
- Data is exchanged securely between the consumer and provider.  
- At epoch completion, consumers report provider performance metrics, which are recorded on-chain, and providers accumulate Compute Units (CU) and claim distributed rewards relative to their workload.
