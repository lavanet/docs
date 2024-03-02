---
slug: /base
title: Base x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Base Logo](/img/chains/base_logo.svg)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/base-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/base-node)

<hr />
<br />

<center>

## ⚙️ 支持的 APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_base.json


### 协议 🔗

| Platform  |  jsonrpc/http | jsonrpc/wss 
| --------- | -------- |---------------
| Gateway   | ✅       | ✅
| SDK       | ✅       | 


### 方法 🛠️

#### ⌨️ 命令:

```bash
lavad q spec show-chain-info BASE
```

#### 📋 列表 :

<details>
<summary> JSONRPC </summary>

  - eth_accounts
  - eth_blockNumber
  - eth_call
  - eth_chainId
  - eth_coinbase
  - eth_compileLLL
  - eth_createAccessList
  - eth_estimateGas
  - eth_feeHistory
  - eth_gasPrice
  - eth_getBalance
  - eth_getBlockByHash
  - eth_getBlockByNumber
  - eth_getBlockTransactionCountByHash
  - eth_getBlockTransactionCountByNumber
  - eth_getCode
  - eth_getCompilers
  - eth_getFilterChanges
  - eth_getFilterLogs
  - eth_getLogs
  - eth_getProof
  - eth_getStorageAt
  - eth_getTransactionByBlockHashAndIndex
  - eth_getTransactionByBlockNumberAndIndex
  - eth_getTransactionByHash
  - eth_getTransactionCount
  - eth_getTransactionReceipt
  - eth_getUncleByBlockHashAndIndex
  - eth_getUncleByBlockNumberAndIndex
  - eth_getUncleCountByBlockHash
  - eth_getUncleCountByBlockNumber
  - eth_getWork
  - eth_hashrate
  - eth_maxPriorityFeePerGas
  - eth_mining
  - eth_newBlockFilter
  - eth_newFilter
  - eth_newPendingTransactionFilter
  - eth_protocolVersion
  - eth_sendRawTransaction
  - eth_sendTransaction
  - eth_sign
  - eth_signTransaction
  - eth_subscribe
  - eth_syncing
  - eth_uninstallFilter
  - eth_unsubscribe
  - net_listening
  - net_peerCount
  - net_version
  - rpc_modules
  - web3_clientVersion
  - web3_sha3
  - debug_getBadBlocks
  - debug_getRawBlock
  - debug_getRawHeader
  - debug_getRawReceipts
  - debug_getRawTransaction
  - debug_storageRangeAt
  - debug_traceBlock
  - debug_traceBlockByHash
  - debug_traceBlockByNumber
  - debug_traceCall
  - debug_traceTransaction


</details>





