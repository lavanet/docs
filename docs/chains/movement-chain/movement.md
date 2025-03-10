---
slug: /movement
title: Movement x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Movement Logo](/img/chains/movement_logo.svg)


[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/bera-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/bera-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://github.com/lavanet/lava/blob/main/specs/mainnet-1/specs/movement.json

### Methods 🛠️

```bash
lavad q spec show-chain-info MOVEMENT
```


#### 📋 List :

<details>
<summary> REST </summary>


- healthy
- accounts/{address}
- accounts/{address}/events/{creation_number}
- accounts/{address}/events/{event_handle}/{field_name}
- accounts/{address}/module/{module_name}
- accounts/{address}/modules
- accounts/{address}/resource/{resource_type}
- accounts/{address}/resources
- accounts/{address}/transactions
- blocks/by_height/{block_height}
- blocks/by_version/{version}
- estimate_gas_price
- events/{event_key}
- spec
- transactions/by_hash/{txn_hash}
- transactions/wait_by_hash/{txn_hash}
- transactions/by_version/{txn_version}
- transactions/encode_submission
- transactions


</details>

