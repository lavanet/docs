---
slug: /secret
title: Secret Network x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

<center>

![Secret Logo](/img/chains/secret_logo.svg)

</center>

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/secret-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_secret.json


### Protocols 🔗

| Platform  |  REST | gRPC  |
| --------- | -------- | ---- |
| Gateway   |    ❌   | ❌   |
| SDK       |    ❌   | ❌   | 


### Methods 🛠️
<details>
<summary> REST </summary>

- /compute/v1beta1/contract_history/{contract_address}
- /mauth/interchain_account/owner/{owner}/connection/{connection_id}
- /registration/v1beta1/registration-key
- /compute/v1beta1/query/{contract_address}
- /compute/v1beta1/contract_address/{label}
- /compute/v1beta1/label/{contract_address}
- /compute/v1beta1/code/{code_id}
- /compute/v1beta1/info/{contract_address}
- /compute/v1beta1/contracts/{code_id}
- /compute/v1beta1/code_hash/by_contract_address/{contract_address}
- /emergencybutton/v1beta1/params
- /registration/v1beta1/tx-key
- /compute/v1beta1/codes
- /registration/v1beta1/encrypted-seed/{pub_key}
- /compute/v1beta1/code_hash/by_code_id/{code_id}

</details>

<details>
<summary> gRPC </summary>

- secret.compute.v1beta1.Query/ContractsByCodeId
- secret.emergencybutton.v1beta1.Query/Params
- secret.registration.v1beta1.Query/TxKey
- secret.compute.v1beta1.Query/CodeHashByCodeId
- secret.compute.v1beta1.Query/ContractHistory
- secret.compute.v1beta1.Query/LabelByAddress
- secret.intertx.v1beta1.Query/InterchainAccountFromAddress
- secret.registration.v1beta1.Query/EncryptedSeed
- secret.compute.v1beta1.Query/ContractInfo
- secret.compute.v1beta1.Query/Codes
- secret.registration.v1beta1.Query/RegistrationKey
- secret.compute.v1beta1.Query/Code
- secret.compute.v1beta1.Query/QuerySecretContract
- secret.compute.v1beta1.Query/CodeHashByContractAddress
- secret.compute.v1beta1.Query/AddressByLabel

</details>

