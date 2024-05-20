---
slug: /celestia
title: celestia x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

<center>

![Filecoin Logo](/img/chains/celestia_logo.svg)

</center>

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/celestia-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️
```
"/blob/v1/params"
"/qgb/v1/attestations/requests/{nonce}"
"/qgb/v1/data_commitment/range/height"
"/qgb/v1/evm_address"
"/qgb/v1/attestations/nonce/earliest"
"/qgb/v1/attestations/nonce/latest"
"/qgb/v1/data_commitment/latest"
"/qgb/v1/unbonding"
"/qgb/v1/valset/request/before/{nonce}"
"/qgb/v1/params"
"celestia.qgb.v1.Query/EVMAddress"
"celestia.qgb.v1.Query/LatestUnbondingHeight"
"celestia.qgb.v1.Query/LatestAttestationNonce"
"celestia.qgb.v1.Query/DataCommitmentRangeForHeight"
"celestia.qgb.v1.Query/AttestationRequestByNonce"
"celestia.qgb.v1.Query/EarliestAttestationNonce"
"celestia.blob.v1.Query/Params"
"celestia.qgb.v1.Query/LatestValsetRequestBeforeNonce"
"celestia.qgb.v1.Query/Params"
"celestia.qgb.v1.Query/LatestDataCommitment"
"celestia.mint.v1.Query/AnnualProvisions"
"celestia.mint.v1.Query/GenesisTime"
"celestia.mint.v1.Query/InflationRate"
"blob.Get"
"blob.GetAll"
"blob.GetProof"
"blob.Included"
"blob.Submit"
"das.SamplingStats"
"das.WaitCatchUp"
"fraud.Get"
"header.GetByHash"
"header.GetByHeight"
"header.GetRangeByHeight"
"header.LocalHead"
"header.NetworkHead"
"header.SyncState"
"header.SyncWait"
"header.WaitForHeight"
"node.Ready"
"share.GetEDS"
"share.GetShare"
"share.GetSharesByNamespace"
"share.SharesAvailable"
"state.BalanceForAddress"
"state.BeginRedelegate"
"state.CancelUnbondingDelegation"
"state.Delegate"
"state.QueryDelegation"
"state.QueryRedelegations"
"state.QueryUnbonding"
"state.SubmitPayForBlob"
"state.SubmitTx"
"state.Transfer"
"state.Undelegate"

```

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_celestia.json

