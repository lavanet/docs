---
slug: /stargaze
title: Stargaze x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

<center>

![Filecoin Logo](/img/chains/stargaze_logo.svg)

</center>

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/stargaze-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/stargaze-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_stargaze.json


### Protocols 🔗

| Platform  | gRPC | rest/http | tendermint/wss | tendermint | webgRPC |
| --------- |------|-----------|----------------|------------|---------|
| Gateway   | ✅   | ✅        | ✅             | ✅         | ✅     |
| SDK       |      | ✅        | ✅             | ✅         |        |



### Methods 🛠️
<details>
<summary> REST </summary>

- /stargaze/globalfee/v1/contract_authorization/{contract_address}
- /stargaze/globalfee/v1/code_authorization/{code_id}
- /stargaze/tokenfactory/v1/denoms_from_creator/{creator}
- /stargaze/tokenfactory/v1/denoms/{denom}/authority_metadata
- /stargaze/mint/v1beta1/params
- /stargaze/mint/v1beta1/annual_provisions
- /stargaze/cron/v1/list-privileged
- /stargaze/claim/v1beta1/total_claimable/{address}
- /stargaze/claim/v1beta1/params
- /stargaze/claim/v1beta1/module_account_balance
- /stargaze/claim/v1beta1/claimable_for_action/{address}/{action}
- /stargaze/claim/v1beta1/claim_record/{address}
- /stargaze/alloc/v1beta1/params

</details>

<details>
<summary> gRPC </summary>

- publicawesome.stargaze.globalfee.v1.Query/CodeAuthorization
- publicawesome.stargaze.mint.v1beta1.Query/AnnualProvisions
- publicawesome.stargaze.globalfee.v1.Query/Params
- publicawesome.stargaze.mint.v1beta1.Query/Params
- publicawesome.stargaze.cron.v1.Query/ListPrivileged
- publicawesome.stargaze.alloc.v1beta1.Query/Params
- osmosis.tokenfactory.v1beta1.Query/Params
- osmosis.tokenfactory.v1beta1.Query/DenomAuthorityMetadata
- publicawesome.stargaze.cron.v1.Query/Params
- osmosis.tokenfactory.v1beta1.Query/DenomsFromCreator
- publicawesome.stargaze.globalfee.v1.Query/ContractAuthorization
- publicawesome.stargaze.globalfee.v1.Query/Authorizations

</details>
