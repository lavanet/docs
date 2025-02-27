---
slug: /submit-proposal
title: Governance Proposals
---

# 📜 How To Submit and Vote on a Proposal

The proposal life cycle on Lava Network involves several stages, starting from submission to final implementation. Each stage has specific requirements and parameters that ensure a transparent and efficient governance process. Let's dive into each phase with a clear, step-by-step guide and examples.

---

## 1. Proposal Submission

### Overview

The first step in the governance process is to submit a proposal Before this, a community member may want to post the proposal for feedback in the [Lava Community Forum](https://community.lavanet.xyz). 

Proposals can be of different types, such as text proposals, parameter change proposals, software upgrade proposals, and spec proposals. To submit a proposal, users must meet the minimum deposit requirement and provide the necessary metadata.

### Requirements

- 💰 **Minimum Deposit**:
- **Mainnet**: 7,000 LAVA
- **Note**: Users can initiate the proposal with **only 25% of the minimum deposit** (1,750 LAVA).
- If the full deposit is not reached within the deposit period, the proposal is **withdrawn**, and the initial deposit is refunded.
- **Testnet**: 1,500 LAVA
- 📄 **Proposal JSON File**: Contains proposal details like title, summary, metadata, and deposit information.

### How to Submit a Proposal

0. Community members are encouraged to post major proposals in the [Lava Community Forum](https://community.lavanet.xyz) for feedback, prior to onchain submission. 

1. **Prepare a JSON file** with your proposal details. Example:

```json
{
  "messages": [
    {
      "@type": "/cosmos.bank.v1beta1.MsgSend",
      "from_address": "lava1xyz...",
      "to_address": "lava1abc...",
      "amount": [{ "denom": "ulava", "amount": "1000" }]
    }
  ],
  "metadata": "QmTp6Rf7... (IPFS link or base64 metadata)",
  "deposit": "7500000000ulava",
  "title": "Increase Community Pool Funding",
  "summary": "This proposal aims to increase the community pool funding to support ecosystem projects.",
  "expedited": false
}
```

1. **Submit the proposal** using the Lava CLI command:

```shell
lavad tx gov submit-proposal path/to/proposal.json --from <wallet_name> --chain-id lava-mainnet-1 --gas auto --gas-adjustment 1.2 --node https://lava.tendermintrpc.lava.build:443
```

If successful, you will see a transaction hash confirming submission. The proposal then enters the **Deposit Period**.

---

## 2\. Deposit Period

### Overview

The Deposit Period is the time frame during which users can contribute additional deposits. The proposal must reach the **minimum deposit threshold** to proceed to the voting stage.

### Requirements

- **Mainnet Minimum Deposit**: 7,000 LAVA
- **Testnet Minimum Deposit**: 1,500 LAVA
- **Max Deposit Period**:
  - **Mainnet**: 2 days
  - **Testnet**: 2 days

If the required deposit is not met, the proposal is rejected, and the deposit may be returned.

### Contributing to a Proposal's Deposit

Use this command:

```shell
lavad tx gov deposit <proposal_id> <amount>ulava --from <wallet_name> --chain-id lava-mainnet-1 --gas auto --node https://lava.tendermintrpc.lava.build:443
```

Example:

```shell
lavad tx gov deposit 15 2000000000ulava --from mywallet --chain-id lava-mainnet-1 --gas auto --node https://lava.tendermintrpc.lava.build:443
```

If the deposit threshold is reached, the proposal moves to the **Voting Period**.

---

## 3\. Voting Period

### Overview

The Voting Period is when users cast their votes. Only staked LAVA tokens can be used for voting. Options include:

- ✅ **Yes**: In favor of the proposal.
- ❌ **No**: Against the proposal.
- 🚫 **No with Veto**: Indicates the proposal is malicious or spam. A high veto vote burns the deposit.
- 🤷 **Abstain**: Neutral, neither supporting nor opposing.

### Voting Duration

- **Mainnet**: 4 days
- **Testnet**: 12 hours

### How to Vote - Via CLI

Command:

```shell
lavad tx gov vote <proposal_id> <vote_option> --from <wallet_name> --chain-id lava-mainnet-1 --gas auto --node https://lava.tendermintrpc.lava.build:443
```

Example:

```shell
lavad tx gov vote 15 yes --from mywallet --chain-id lava-mainnet-1 --gas auto --node https://lava.tendermintrpc.lava.build:443
```

> 📌 **Note**: You can change your vote anytime during the voting period. The last vote cast is counted.

### How to Vote via Explorer

1. 🌐 **Open the Explorer**: Visit the [Mallifera Lava Explorer](https://lava-explorer.mellifera.network/lava).
2. 📂 **Navigate to Governance**: Click on the **Governance** tab to see all active proposals.

   ![governance](/img/governance/governance.png)

3. 🔗 **Connect Your Wallet**: Click on **Connect Wallet** and select a supported wallet (e.g., Keplr, Leap).

   ![wallet](/img/governance/wallet.png)

4. 🗳️ **Cast Your Vote**: Select a proposal, choose your voting option (**Yes**, **No**, **No with Veto**, or **Abstain**), and confirm your vote.

   ![vote](/img/governance/vote.png)

---

## 4\. Tallying and Passing Criteria

### Overview

At the end of the Voting Period, votes are tallied based on:

- 📊 **Quorum**: Minimum participation required.
  - **Mainnet & Testnet**: 33.4%
- ✅ **Threshold**: Minimum "Yes" votes required.
  - **Mainnet & Testnet**: 50%
- 🚫 **Veto Threshold**: Maximum "No with Veto" votes allowed.
  - **Mainnet & Testnet**: 33.4%

### Outcome

- **Passed**: Proposal moves forward for implementation.
- **Rejected**: Proposal is dismissed, and deposit is refunded (unless vetoed).
- **Vetoed**: Deposit is burned, and proposal is dismissed.

> Example: Proposal ID 15 passes if it gets 50% "Yes" votes, meets a quorum of 33.4%, and has less than 33.4% "No with Veto" votes.

## 5. Implementation

If the proposal passes the tallying process, it moves to the implementation stage. Depending on the type of proposal (e.g., parameter change, software upgrade), the changes may be executed automatically by the network or require manual updates by node operators.

### Example of Automatic Implementation

For a **parameter change proposal**, the new parameter values are applied across the network as soon as the proposal is accepted.

### Example of Manual Implementation

For a **software upgrade proposal**, validators must update their nodes to the new software version within the specified upgrade window.

- **Mainnet**: 7,000 LAVA
  - **Note**: Users can start the proposal with **only 25% of the minimum deposit** (1,750 LAVA).
  - If the full deposit is not met during the deposit period, the proposal is **withdrawn**, and the initial deposit is refunded. If vetoed, the entire deposit is **burned**.
- **Testnet**: 1,500 LAVA
