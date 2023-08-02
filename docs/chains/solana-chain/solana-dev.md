---
slug: /solana-dev
title: Getting Solana  RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Solana RPC


## [SDK](https://github.com/lavanet/lava-sdk)

:::caution

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=sdk-alpha) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=sdk-alpha) use before getting started.

:::

### Input 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSolanaMainnet() {

    const solanaMainnet = await new LavaSDK({
      privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
      chainID: 'SOLANA',
    });

    const solanaBlockResponse =  await solanaMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(solanaBlockResponse);
}

(async () => {
    await useSolanaTestnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSolanaMainnet() {

    const solanaMainnet = await new LavaSDK({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
        projectId: "enter_your_project_id_here" 
      },
      chainID: 'SOLANA',
      geolocation: "2"
    });

    const solanaBlockResponse =  await solanaMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(solanaBlockResponse);
}

(async () => {
    await useSolanaTestnet();
  })();
```

</TabItem>

</Tabs>


### Output 📤

<iframe width="100%" src="/img/chains/solana_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=solana-pre-grant)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=solana-pre-grant)

<hr />
<br />


## Supported APIs 

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_solana.json


| Platform  |  jsonrpc/http | jsonrpc/wss 
| --------- | ------------- | -----------
| Gateway   | ✅            | ✅
| SDK       | ✅            | 

<details>
<summary> All Methods</summary>


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