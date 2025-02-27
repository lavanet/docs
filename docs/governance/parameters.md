---
slug: /parameters
title: Governance Parameters
---

# 🛠️ Governance Parameters

The Lava Network’s governance is designed to be flexible and adaptive, with specific parameters governing the proposal and voting process. These parameters define the rules and thresholds required for proposals to progress through different stages, ensuring a fair and transparent decision-making process.

In this section, we will cover the governance parameters for both the **Mainnet** and **Testnet**, highlighting the differences to help users understand the distinct requirements for each environment.

---

## Mainnet Governance Parameters

| **Parameter**                                        | **Description**                                                                                                   | **Value**       |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------- |
| 💰 **Min Deposit**                                   | The minimum amount of LAVA required to submit a standard proposal.                                                | **7,000 LAVA**  |
| 🏦 **Min Deposit to Enter Deposit Period**           | 25% of the Min Deposit Amount for proposals.                                                                      | **1,750 LAVA**  |
| ⚡ **Expedited Min Deposit**                         | The minimum amount of LAVA required for an expedited proposal.                                                    | **14,000 LAVA** |
| 💵 **Expedited Min Deposit to Enter Deposit Period** | 25% of the expedited Min Deposit amount.                                                                          | **3,500 LAVA**  |
| ⏳ **Max Deposit Period**                            | The maximum time allowed to reach the required deposit amount for both regular and expedited proposals.           | **2 days**      |
| 🗳️ **Voting Period**                                 | The duration for which voting is open on a standard proposal.                                                     | **4 days**      |
| 🕐 **Expedited Voting Period**                       | The duration for which voting is open on an expedited proposal.                                                   | **1 hour**      |
| 📊 **Quorum**                                        | The minimum percentage of total staked tokens that must participate in the vote for it to be valid.               | **33.4%**       |
| ✅ **Threshold**                                     | The minimum percentage of "Yes" votes (excluding Abstain votes) required for the proposal to pass.                | **50%**         |
| 🚫 **Veto Threshold**                                | The maximum percentage of "No with Veto" votes allowed before the proposal is rejected and the deposit is burned. | **33.4%**       |

> 📌 **Note**: These parameters are adjustable through governance proposals, allowing the community to modify them as needed based on network conditions and requirements.

---

## Testnet Governance Parameters

The testnet governance parameters are designed to enable faster iterations and experimentation, helping the community to test and refine proposals before they are submitted on the mainnet.

| **Parameter**             | **Description**                                                                                                   | **Value**      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------- |
| 💰 **Min Deposit**        | The minimum amount of LAVA required to submit a proposal.                                                         | **1,500 LAVA** |
| ⏳ **Max Deposit Period** | The maximum time allowed to reach the required deposit amount.                                                    | **2 days**     |
| 🗳️ **Voting Period**      | The duration for which voting is open on a proposal.                                                              | **12 hours**   |
| 📊 **Quorum**             | The minimum percentage of total staked tokens that must participate in the vote for it to be valid.               | **33.4%**      |
| ✅ **Threshold**          | The minimum percentage of "Yes" votes (excluding Abstain votes) required for the proposal to pass.                | **50%**        |
| 🚫 **Veto Threshold**     | The maximum percentage of "No with Veto" votes allowed before the proposal is rejected and the deposit is burned. | **33.4%**      |

> 📌 **Note**: The testnet parameters are more lenient to encourage active participation and quicker decision-making. This setup allows users to gain experience and provide feedback on the governance process without the high stakes of the mainnet environment.

---

### Modifiable Parameters

The governance parameters listed above are **modifiable by governance**, meaning that the community can propose changes to these values if necessary. This flexibility ensures that the governance model can adapt to changing network conditions, scaling requirements, and user feedback.
