---
slug: /near
title: NEAR x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![near Logo](/img/chains/near_logo.svg)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/near-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/near-node)

<hr />
<br />

<center>

## ⚙️ 支持的 APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_near.json


### 协议 🔗

| Platform  |  json-rpc |
| --------- | ----------|
| Gateway   | ✅        |
| SDK       | ✅        | 


### 方法 🛠️

#### ⌨️ 命令:

```bash
lavad q spec show-chain-info NEAR
```

#### 📋 列表 :

<details>
<summary> JSONRPC </summary>

  - query
  - EXPERIMENTAL_changes
  - block
  - EXPERIMENTAL_changes_in_block
  - chunk
  - gas_price
  - EXPERIMENTAL_genesis_config
  - EXPERIMENTAL_protocol_config
  - status
  - network_info
  - validators
  - broadcast_tx_async
  - broadcast_tx_commit
  - tx
  - EXPERIMENTAL_tx_status
  - EXPERIMENTAL_receipt

</details>

