---
slug: /supply
title: 🏭 Supply
---

# 🪙 Supply Details

<center>

| Property                | Details                                            |
|-------------------------|----------------------------------------------------|
| 🪙 Token                   | `LAVA`                                               |
| 🔢 Token supply            | `1,000,000,000 LAVA`                                 |
| 📉 Deflation schedule      | See section below on [“Lava Supply and Deflation”](#lava-supply-and-deflation-) |
| 💱 Conversion              | `1 uLAVA` = `1 LAVA` x `10^-6`                           |

</center>

## Economic Actors and Key Terms 👤

- 🛒 **Consumers**  buy Subscription plans in `LAVA` on-chain to gain access to a diverse set of API ‘specs’ via the Lava Protocol.
    -  💸 **Subscription** plans are priced by governance, offer a limited amount of compute units and vary by their specs.
    -  🗜️ **Specifications** or ‘specs’ are governance defined modular objects that specify the types of APIs providers are required to support.
- 🛎️ **Providers** stake tokens on individual specs, ensuring the integrity of their service. A minimum direct stake is required to accept delegations from others. Requests are routed to providers via a stake-weight mechanism.
- ⚖️ **Validators** stake to secure the network. They create blocks, execute transactions and vote on blocks created by other validators.
- 💰 **Token Holders** have the option of staking their tokens to validators, restaking with providers, and participating in on-chain governance.
- 🏆 **Champions** create, develop and maintain RPC and API ‘specs’ and software for rewards. They can also contribute to the community by completing bounties.
- 🔗 **Chains** deposit token incentives to Lava, rewarding Providers for offering specs to their developers and users.

:::tip

 Providers and validators can be separate entities.

:::

## `LAVA` Supply and Deflation 💵

Lava has a fixed supply and no more tokens will be minted. Furthermore, Lava has developed a novel deflationary mechanism for attracting Providers in the initial stages of Mainnet.

6.6% of supply is devoted to “Provider Drops" which are a monthly-distributed reward mechanism for bootstrapping Provider participation. Monthly rewards vary depending on paid demand for services on Lava; higher paid demand generally results in more rewards for Providers who have joined Lava early.

As the network draws more and more consumers, the need for the Drops will decrease, as Providers will make the difference from subscription payments.

Additionally, validator rewards decrease as the percentage of staked LAVA increases, with a linear reduction between a 60-80% stake. At an 80% stake, rewards and half of the subscription fee taxes are burned, removing them from circulation and further controlling the token's inflation.

At month's end, any undistributed Validator rewards are destroyed, aligning Validators' interests with the network's robustness and efficiency.


| Parameter                               | % of total `LAVA` supply |
|-----------------------------------------|------------------------------------|
| 🚀 **Provider Reward Boosts** (“Provider Drops”)| **6.6%**          |
| 🔥 **Range of Burn Rate**                    | **0 - 6.6%**                    |
