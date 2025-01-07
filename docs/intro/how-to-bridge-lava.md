---
slug: /how-to-bridge-lava
title: 🌉 How to bridge Lava
---

# **How Lava Works ⚙️**

The Lava Network facilitates seamless, decentralized data exchange across multiple blockchains, driven by key mechanisms and incentivized roles. Lava operates as both a blockchain and an off-chain protocol, with specifications as the essential blueprints defining how blockchain data is accessed, processed, and verified. These specifications outline everything from supported APIs to data handling rules, guiding the interactions among Data Providers, Consumers, Validators, Champions, and Delegators to maintain a secure and efficient data-sharing network.

### 🔍 **Specifications: Foundation of the Lava Network**

At the heart of Lava are **specifications** 📜, JSON-based blueprints created by **Spec Champions**. Specifications define the requirements for each blockchain or API, including supported chain types, data transfer rules, Compute Units (CU) for API calls, and data validation checks. As blockchain technology evolves, Spec Champions update specifications to address new demands, ensuring Lava remains adaptable and reliable.

Data Providers use these specifications to configure their services according to Lava's standards, ensuring accurate and consistent data delivery across the network. Consumers, in turn, rely on these specifications to understand available data and how to access it.

### 🎁 **Incentive Pools: Extra Rewards for Providers & Restakers**

Lava **Incentive Pools** 💸 provide additional rewards funded by ecosystem stakeholders like DAOs, foundations, and major contributors. These pools incentivize Providers by offering extra rewards for delivering RPC data to Consumers. Here’s how they work:

- **Rewards**: Incentive pools are funded with LAVA tokens and other tokens, providing incentives for specific services or blockchains. For example, a NEAR RPC Provider on Lava could earn NEAR tokens.
- **Distribution**: Providers serving data under relevant specifications receive rewards from both the incentive pools and the regular network incentives (e.g., LAVA).

The pool structure follows a configurable emission schedule and maintains a minimum funding threshold to ensure quality service. This threshold ensures that token rewards meet a minimum value, preventing spam and incentivizing high-quality service.

### 🔄 **Restaking: Boosting Network Security and Capital Efficiency**

Lava’s **restaking** mechanism allows users to enhance Providers’ capabilities by staking tokens with Lava Validators and then restaking them with selected Data Providers. By restaking, Providers can increase their delegation and their stake-weight in the selection algorithm, allowing them to handle more RPC requests and earn more rewards.

Restaking also improves network security, reduces costs, and increases capital efficiency, as node runners must stake with a Validator before becoming a Provider.

**Restaking Benefits**:

- **Capital Efficiency** 💼: Providers who have staked with Validators can restake to boost trusted Providers, enhancing the network's overall service quality.
- **Reduced Security Costs** 🛡️: By enabling double-layered staking, restaking lowers the overall costs for securing the network while incentivizing high-performing Providers.

In the future, Lava’s restaking mechanism could expand to support additional services beyond RPC, allowing contributors to participate in and elevate other critical functions across the network.

### 🏗️ **Lava as a Blockchain and Off-Chain Protocol**

Node runners join Lava by restaking on the Lava blockchain, making them eligible to appear on **Pairing Lists** 📄.

The **Pairing List** serves as a dynamic directory, stored on the Lava blockchain, of available Providers ranked by metrics like stake, geographic proximity, response time, uptime, and data reliability. This list helps Consumers identify and connect with the best-performing Providers for their needs and is valid for a defined period called an **epoch**.

The Lava protocol facilitates data exchange via off-chain, **peer-to-peer (P2P) connections** 🔗:

1. **Pairing List Access** 📜: Consumers retrieve a pairing list from the blockchain to find the best-matching Providers based on their requirements.
2. **Direct Connection** 🔌: Consumers initiate P2P connections with their chosen Providers for efficient data transfer.
3. **Compute Units (CU)** 🖥️: Providers calculate CU based on the computational work involved in fulfilling requests. CU acts as a measure of resource use, helping Providers earn proportionate rewards.

This off-chain approach ensures fast data delivery while maintaining a reputation score for each Provider, reflecting their historical performance in latency, uptime, and accuracy. Over time, Consumers tend to select Providers with consistently high scores, reinforcing Lava’s focus on reliable service.

### 🌐 **Roles in the Lava Network**

The Lava ecosystem functions through the coordinated efforts of several roles, each contributing to data reliability and security.

- **Data Providers** 🌍: Use the **Provider Kit** to deliver data in line with Lava specifications. They stake LAVA tokens with Validators and set up nodes to serve requests. Providers are ranked in the pairing list and rewarded based on their performance and CU output.
- **Data Consumers** 📲: Access blockchain data via **LavaSDK**, **incentivized endpoints**, or **Gateway Endpoints**. They spend LAVA tokens to retrieve data from Providers selected through the pairing list, setting up P2P connections for direct data exchange.
- **Validators** 🔐: Maintain network security by validating transactions, proposing blocks, and achieving consensus. Validators are rewarded in LAVA tokens for contributing to network stability.
- **Champions** 🛠️: As the creators and maintainers of specifications, Champions set the standards that govern data access and delivery on Lava. They update specifications as needed, adapting to the evolving blockchain landscape.
- **Delegators** 💼: Support the network by staking and restaking LAVA tokens with high-performing Providers and Validators. Delegators share in the rewards based on the entities they back, contributing to Lava’s data reliability and service quality.

### 🔄 **Revenue Switching in Lava**

Lava’s revenue switching is a mechanism by which it can expand to additional services beyond RPC. By dynamically adjusting incentives to support diverse data services, Lava enables contributors and restakers to participate in multiple layers of the network. This adaptability ensures that Lava can evolve as blockchain and data-sharing demands grow over time.
