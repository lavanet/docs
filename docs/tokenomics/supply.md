---
slug: /supply
title: 🏭 Supply
---

# 🪙 Tokenomics: Supply Details

<center>

| Property                | Details                                            |
|-------------------------|----------------------------------------------------|
| 🪙 Token                   | `LAVA`                                               |
| 🔢 Token supply            | `1,000,000,000 LAVA`                                 |
| 📉 Deflation schedule      | See section below on “Lava deflation”. |
| 💱 Conversion              | `1 uLAVA` = `1 LAVA` x `10^-6`                           |

</center>

## 👤 Economic Actors and Key Terms

- 🛒 **Consumers**  buy Subscription plans in `LAVA` on-chain to gain access to a diverse set of API ‘specs’ via the Lava Protocol.
    -  💸 **Subscription** plans are priced by governance, offer a limited amount of compute units and vary by their specs.
    -  🗜️ **Specifications** or ‘specs’ are governance defined modular objects that specify the types of APIs providers are required to support.
- 🛎️ **Providers** stake tokens on individual specs, ensuring the integrity of their service. A minimum direct stake is required to accept delegations from others. Requests are routed to providers via a stake-weight mechanism.
- ⚖️ **Validators** stake to secure the network. They create blocks, execute transactions and vote on blocks created by other validators.
- 💰 **Token Holders** have the option of staking their tokens to validators, restaking with providers, and participating in on-chain governance.
- 🏆 **Champions** create, develop and maintain RPC and API ‘specs’ and software for rewards. They can also contribute to the community by completing bounties.
- 🔨 **Contributors** and their rewards are set by governance per ‘spec’.
- 🔗 **Chains** deposit token incentives to Lava, rewarding Providers for offering specs to their developers and users.

:::tip

 Providers and validators can be separate entities.

:::

## `LAVA` deflation

Lava has a fixed supply and no more tokens will be minted. Furthermore, Lava has developed a novel deflationary mechanism for bootstrapping demand for the network’s service i.e. RPC and APIs.  `LAVA` deflates at a rate depending on how much of the monthly reward pool for Providers is burned.

6.6% of the total supply is distributed on a monthly basis over 4 years to Providers as a reward boost called a Provider Drop. This reserve is a fixed allocation of rewards available for the first 4 years and emitted once a month, burning the previous month’s unused allocation. It is used to further incentivize participation from Providers in the network while it is still early in revenue generated from subscriptions. 

As the network draws more and more consumers, the need for the Drops will decrease, as Providers will make the difference from subscription payments.


| Parameter                               | % of total `LAVA` supply |
|-----------------------------------------|------------------------------------|
| 🚀 **Provider Reward Boosts** (“Provider Drops”)| **6.6%**          |
| 🔥 **Range of Burn Rate  **                    | **0 - 6.6%**                    |
