---
slug: /avalanche
title: Avalanche x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Avalanche Logo](/img/chains/avalanche_logo.svg)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/avalanche-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/avalanche-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_avalanche.json


### Protocols 🔗

| Platform  |  jsonrpc/http | jsonrpc/websocket 
| --------- | -------- |---------------
| Gateway   | ✅       | ✅            |
| SDK       | ✅       |               |


### Methods 🛠️

### Methods 🛠️

#### ⌨️ Command:

```bash
lavad q spec show-chain-info AVAX
```

#### 📋 List :


<details>
<summary> List </summary>

- avax.export
- avax.exportKey
- avax.getAtomicTx
- avax.getAtomicTxStatus
- avax.import
- avax.importKey
- avax.issueTx
- platform.addDelegator
- platform.getBlock
- platform.getBlockchainStatus
- platform.getCurrentSupply
- platform.getCurrentValidators
- platform.getHeight
- platform.getMinStake
- platform.getPendingValidators
- platform.getStakingAssetID
- platform.getTimestamp
- platform.getTotalStake
- platform.getTx
- platform.getTxStatus
- platform.getUTXOs
- platform.getValidatorsAt
- platform.issueTx
- platform.sampleValidators
- platform.validatedBy
- platform.validates
- avm.getAssetDescription
- avm.getBlock
- avm.getBlockByHeight
- avm.getHeight
- avm.getTxStatus
- avm.getUTXOs
- avm.issueTx
- eth_chainId

</details>

