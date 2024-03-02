---
slug: /evmos
title: Evmos x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Evmos Logo](/img/chains/evmos_logo.png)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/evmos-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/evmos-node)

<hr />
<br />

<center>

## ⚙️ 支持的 APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_evmos.json


### 协议 🔗

| Platform  |  rest/http | uri/http | tendermint/http | tendermint/wss | jsonrpc/http | jsonrpc/wss
| --------- | -------- |------------| ------------- | ---------------------| ------------ | -----------------
| Gateway   | ✅       | ✅         | ✅            | ✅                   | ✅           | ✅
| SDK       | ✅       |            | ✅            |                      | ✅           | 


### 方法 🛠️
<details>
<summary> 列表</summary>

- /evmos/claims/v1/claims_records
- /evmos/claims/v1/claims_records/{address}
- /evmos/claims/v1/params
- /evmos/claims/v1/total_unclaimed
- /evmos/epochs/v1/current_epoch
- /evmos/epochs/v1/epochs
- /evmos/erc20/v1/params
- /evmos/erc20/v1/token_pairs
- /evmos/erc20/v1/token_pairs/{token}
- /evmos/evm/v1/account/{address}
- /evmos/evm/v1/balances/{address}
- /evmos/evm/v1/base_fee
- /evmos/evm/v1/codes/{address}
- /evmos/evm/v1/cosmos_account/{address}
- /evmos/evm/v1/estimate_gas
- /evmos/evm/v1/eth_call
- /evmos/evm/v1/params
- /evmos/evm/v1/storage/{address}/{key}
- /evmos/evm/v1/trace_block
- /evmos/evm/v1/trace_tx
- /evmos/evm/v1/validator_account/{cons_address}
- /evmos/feemarket/v1/base_fee
- /evmos/feemarket/v1/block_gas
- /evmos/feemarket/v1/params
- /evmos/incentives/v1/allocation_meters
- /evmos/incentives/v1/allocation_meters/{denom}
- /evmos/incentives/v1/gas_meters/{contract}
- /evmos/incentives/v1/gas_meters/{contract}/{participant}
- /evmos/incentives/v1/incentives
- /evmos/incentives/v1/incentives/{contract}
- /evmos/incentives/v1/params
- /evmos/inflation/v1/circulating_supply
- /evmos/inflation/v1/epoch_mint_provision
- /evmos/inflation/v1/inflation_rate
- /evmos/inflation/v1/params
- /evmos/inflation/v1/period
- /evmos/inflation/v1/skipped_epochs
- /evmos/recovery/v1/params
- /evmos/vesting/v1/balances/{address}
- chain-id
- ethermint.evm.v1.Query/Account
- ethermint.evm.v1.Query/Balance
- ethermint.evm.v1.Query/BaseFee
- ethermint.evm.v1.Query/Code
- ethermint.evm.v1.Query/CosmosAccount
- ethermint.evm.v1.Query/EstimateGas
- ethermint.evm.v1.Query/EthCall
- ethermint.evm.v1.Query/Params
- ethermint.evm.v1.Query/Storage
- ethermint.evm.v1.Query/TraceBlock
- ethermint.evm.v1.Query/TraceTx
- ethermint.evm.v1.Query/ValidatorAccount
- ethermint.feemarket.v1.Query/BaseFee
- ethermint.feemarket.v1.Query/BlockGas
- ethermint.feemarket.v1.Query/Params
- evmos.claims.v1.Query/ClaimsRecord
- evmos.claims.v1.Query/ClaimsRecords
- evmos.claims.v1.Query/Params
- evmos.claims.v1.Query/TotalUnclaimed
- evmos.epochs.v1.Query/CurrentEpoch
- evmos.epochs.v1.Query/EpochInfos
- evmos.erc20.v1.Query/Params
- evmos.erc20.v1.Query/TokenPair
- evmos.erc20.v1.Query/TokenPairs
- evmos.incentives.v1.Query/AllocationMeter
- evmos.incentives.v1.Query/AllocationMeters
- evmos.incentives.v1.Query/GasMeter
- evmos.incentives.v1.Query/GasMeters
- evmos.incentives.v1.Query/Incentive
- evmos.incentives.v1.Query/Incentives
- evmos.incentives.v1.Query/Params
- evmos.inflation.v1.Query/CirculatingSupply
- evmos.inflation.v1.Query/EpochMintProvision
- evmos.inflation.v1.Query/InflationRate
- evmos.inflation.v1.Query/Params
- evmos.inflation.v1.Query/Period
- evmos.inflation.v1.Query/SkippedEpochs
- evmos.recovery.v1.Query/Params
- evmos.vesting.v1.Query/Balances

</details>

