---
slug: /lava-architecture
title: Lava Protocol Overview
---

# Lava Protocol Overview
Lava Network is a Cosmos-SDK–based, application-specific blockchain that acts as a decentralized coordination layer for blockchain Remote Procedure Calls (RPCs) and APIs.

An RPC (Remote Procedure Call) is the fundamental communication protocol that enables clients (such as wallets, dApps, or AI agents) to interact with blockchains - for example, by fetching account balances, reading smart contract state, or submitting transactions.

The Lava Blockchain serves as the settlement layer for these off-chain RPCs: it records reward claims, verifies service proofs, and ensures RPC Node Providers are held accountable for quality and accuracy. Consumers and Providers interact peer-to-peer, while finalization and dispute resolution are anchored on-chain through Byzantine fault-tolerant consensus (CometBFT).


## Key Actors in Lava Network
- **Consumers** – Applications such as dApps, wallets, indexers, or AI agents that request blockchain data.
- **RPC Node Providers** – Node operators who serve RPC requests for specific chains, staking LAVA to participate and earn rewards.
- **Validators** – Secure the Lava Blockchain itself, validating transactions, consensus, and Provider reward claims.

These roles interact through a hybrid model: low-latency RPC execution off-chain combined with settlement, verification, and incentives on-chain.


## Lava RPC API execution
RPC execution in Lava Network follows a request → relay → proof → settlement flow:

1. **Request initiation** – Consumers (wallets, dApps, indexers, AI agents) request blockchain data or transaction submission via supported APIs. They access Lava RPC API through different interfaces (Gateway, Public Endpoints, or Smart Router), but under the hood, all connect to the same Lava Protocol.

2. **RPC Node Provider selection** – Consumers are matched to RPC Node Providers using pairing lists (see below). These lists ensure a pool of eligible Providers that meet latency, stake, and compliance requirements.

3. **Off-chain relay** – The consumer establishes a direct peer-to-peer connection with a chosen RPC Node Provider. The Provider executes the RPC call against its full node infrastructure and returns the result.

4. **Proofs and metering** – Each response is accompanied by lightweight finalization proofs (for result validity) and compute unit (CU) accounting (for usage metering).

5. **On-chain settlement** – At the end of an epoch, RPC Node Providers submit reward claims to the Lava blockchain. These are validated against usage proofs, and rewards are distributed according to subscription plans and Provider stake.

![Lava Architecture](/img/protocol/architecture1.png)

This design ensures requests remain low-latency and off-chain, while accountability, incentive alignment, and settlement are enforced on-chain.


## Specifications
The Lava Protocol is modular and built around **specifications**: governance-defined blueprints that define the scope of supported APIs. A specification outlines:

- Supported API methods and parameters
- Chain requirements (consensus type, data models)
- RPC Node Provider obligations and minimum performance guarantees
- Cost models and CU accounting
- Verification and proof rules

Specifications can be added, updated, or extended via on-chain governance, allowing Lava RPC API to dynamically support new APIs (e.g., Ethereum JSON-RPC, token APIs, archival queries, or add-ons like `debug` or `trace`). This modularity enables Lava Network to evolve as blockchain and application needs expand.


## Pairing

Lava Network connects consumers to RPC Node Providers using **pairing lists**: algorithmically generated sets of RPC Node Providers optimized for performance and reliability.

### How Pairing Works

1. **Pairing request** 
    
    A consumer sends a GetPairing query to the Lava blockchain (via any Lava RPC Node Provider).

2. **Eligibility check** 

    RPC Node Providers must have staked LAVA, be in good standing (not jailed), and support the required specification and add-ons.

3. **Filtering** 
    
    RPC Node Providers are filtered based on consumer-defined policies like:
    - Spec compatibility (chain + API support)
    - Request type (e.g., archival support)
    - Active status & pairing eligibility
    - Other protocol-level filters

4. **Randomization** 
    
    Eligible RPC Node Providers are pseudorandomly shuffled using a consumer-specific seed derived from the blockchain state.

5. **Scoring (Weighted Random Selection)** 
    
    Each eligible Provider receives a composite score between 0 and 1. The score combines four weighted components:

    | Metric| Description| 
    |-------|-------|
    | Availability      | % of successful responses over time (higher is better)  |
    | Latency           | Request - response time (lower is better) |
    | Sync / Freshness  | How up-to-date the node is (lower lag is better) |
    | Stake | Relative stake weight   |

    :::note
    The actual weights are governance-adjustable and may evolve over time to optimize network outcomes.
    :::

    The final individual provider score is computed as a weighted sum of all scores.


6. **Pairing list delivery** 
    
    The resulting list is valid for one epoch and used by the consumer to establish connections.

    A provider from the list is chosen using continuous probability draw. Once all Providers are scored:
    - All composite scores are summed.
    - A random value is generated between 0 and total score.
    - Providers are iterated cumulatively until the sum exceeds the random value.
    - The Provider at that point is selected.

7. **Consumer - Provider Interaction**

    - Consumers establish peer-to-peer connections with the most optimal RPC Node Provider from the pairing list.
    - Requests are sent, and responses are received through this RPC Node Provider.
    - At the end of each epoch, RPC Node Providers accumulate compute units (CUs) based on serviced demand.
    - Monthly, RPC Node Providers claim rewards proportional to their CU usage and subscription allocations.

## Quality of Service

RPC Node Provider performance is tracked and scored using transparent, on-chain reputation metrics. Key signals include:

- **Latency** – Speed of responses.
- **Availability** – Consistency and uptime.
- **Sync freshness** – Correctness relative to the chain’s latest block.
- **Error rate** – Frequency of failed or invalid responses.

These QoS metrics directly influence RPC Node Provider rewards and pairing eligibility, creating crypto-economic incentives for reliability.

## Global Distribution and Extensibility

Lava Network RPC Node Providers operate across Europe, Asia, and multiple US regions, ensuring low latency and high availability worldwide. The protocol supports archival queries, debugging, tracing, and future API extensions through its specification system. Beyond RPC, the same architecture can extend to indexing, subgraphs, and data APIs, making Lava Network a general-purpose, modular data access layer for Web3.

