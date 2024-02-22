---
slug: /koii
title: Koii x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

<center>

![Koii Logo](/img/chains/koii_logo.svg)

</center>

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/koii-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/koii-node)

<hr />
<br />

<center>

## ⚙️ 支持的 APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_koii.json


### 协议 🔗

| Platform  |  jsonrpc/http | jsonrpc/wss 
| --------- | ------------- | -----------
| Gateway   | ✅            | ✅
| SDK       | ✅            | 

### 方法 🛠️

#### ⌨️ 命令:

```bash
lavad q spec show-chain-info KOIIT
```

#### 📋 列表 :

<details>
<summary> JSONRPC </summary>


- getAccountInfo
- getBalance
- getBlock
- getBlockHeight
- getBlockProduction
- getBlockCommitment
- getBlocks
- getBlocksWithLimit
- getBlockTime
- getClusterNodes
- getEpochInfo
- getEpochSchedule
- getFeeForMessage
- getFirstAvailableBlock
- getGenesisHash
- getHealth
- getHighestSnapshotSlot
- getIdentity
- getInflationGovernor
- getInflationRate
- getInflationReward
- getLargestAccounts
- getLatestBlockhash
- getLeaderSchedule
- getMaxRetransmitSlot
- getMinimumBalanceForRentExemption
- getMultipleAccounts
- getProgramAccounts
- getRecentPerformanceSamples
- getRecentPrioritizationFees
- getSignaturesForAddress
- getSignatureStatuses
- getSlot
- getSlotLeader
- getSlotLeaders
- getStakeActivation
- getStakeMinimumDelegation
- getSupply
- getTokenAccountBalance
- getTokenAccountsByDelegate
- getTokenAccountsByOwner
- getTokenLargestAccounts
- getTokenSupply
- getTransaction
- getTransactionCount
- getVersion
- getVoteAccounts
- isBlockhashValid
- minimumLedgerSlot
- requestAirdrop
- sendTransaction
- simulateTransaction
- getConfirmedBlock
- getConfirmedBlocks
- getConfirmedBlocksWithLimit
- getConfirmedSignaturesForAddress2
- getConfirmedTransaction
- getFeeCalculatorForBlockhash
- getFeeRateGovernor
- getFees
- getRecentBlockhash
- getSnapshotSlot

</details>