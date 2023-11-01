---
slug: /cosmoshub
title: CosmosHub x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Cosmoshub Logo](/img/chains/cosmoshub_logo.svg)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/cosmoshub-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/cosmoshub-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_cosmoshub.json


### Protocols 🔗

| Platform  |  rest/http | uri/http | tendermint/http | tendermint/wss |    grpc | webgrpc |
| --------- | -------- |------------| ------------- | -----------------|---------|---------|
| Gateway   | ✅       | ✅         | ✅            | ✅               | ✅      |   ✅    |
| SDK       | ✅       |            | ✅            |                  |         |    ✅   |


### Methods 🛠️

#### ⌨️ Command:

```bash
lavad q spec show-chain-info COS5
```

#### 📋 List :

<details>
<summary> REST </summary>

- /cosmos/auth/v1beta1/account_info/{address}
- /cosmos/auth/v1beta1/accounts
- /cosmos/auth/v1beta1/accounts/{address}
- /cosmos/auth/v1beta1/address_by_id/{id}
- /cosmos/auth/v1beta1/bech32
- /cosmos/auth/v1beta1/bech32/{address_bytes}
- /cosmos/auth/v1beta1/bech32/{address_string}
- /cosmos/auth/v1beta1/module_accounts
- /cosmos/auth/v1beta1/module_accounts/{name}
- /cosmos/auth/v1beta1/params
- /cosmos/authz/v1beta1/grants
- /cosmos/authz/v1beta1/grants/grantee/{grantee}
- /cosmos/authz/v1beta1/grants/granter/{granter}
- /cosmos/bank/v1beta1/balances/{address}
- /cosmos/bank/v1beta1/balances/{address}/by_denom
- /cosmos/bank/v1beta1/balances/{address}/{denom}
- /cosmos/bank/v1beta1/base_denom
- /cosmos/bank/v1beta1/denom_owners/{denom}
- /cosmos/bank/v1beta1/denoms_metadata
- /cosmos/bank/v1beta1/denoms_metadata/{denom}
- /cosmos/bank/v1beta1/params
- /cosmos/bank/v1beta1/send_enabled
- /cosmos/bank/v1beta1/spendable_balances/{address}
- /cosmos/bank/v1beta1/spendable_balances/{address}/by_denom
- /cosmos/bank/v1beta1/supply
- /cosmos/bank/v1beta1/supply/by_denom
- /cosmos/bank/v1beta1/supply/{denom}
- /cosmos/bank/v1beta1/supply_without_offset
- /cosmos/bank/v1beta1/supply_without_offset/{denom}
- /cosmos/base/node/v1beta1/config
- /cosmos/base/reflection/v1beta1/app_descriptor/authn
- /cosmos/base/reflection/v1beta1/app_descriptor/chain
- /cosmos/base/reflection/v1beta1/app_descriptor/codec
- /cosmos/base/reflection/v1beta1/app_descriptor/configuration
- /cosmos/base/reflection/v1beta1/app_descriptor/query_services
- /cosmos/base/reflection/v1beta1/app_descriptor/tx_descriptor
- /cosmos/base/reflection/v1beta1/interfaces
- /cosmos/base/reflection/v1beta1/interfaces/{interface_name}/implementations
- /cosmos/base/tendermint/v1beta1/abci_query
- /cosmos/base/tendermint/v1beta1/blocks/latest
- /cosmos/base/tendermint/v1beta1/blocks/{height}
- /cosmos/base/tendermint/v1beta1/node_info
- /cosmos/base/tendermint/v1beta1/syncing
- /cosmos/base/tendermint/v1beta1/validatorsets/latest
- /cosmos/base/tendermint/v1beta1/validatorsets/{height}
- /cosmos/distribution/v1beta1/community_pool
- /cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards
- /cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}
- /cosmos/distribution/v1beta1/delegators/{delegator_address}/validators
- /cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address
- /cosmos/distribution/v1beta1/params
- /cosmos/distribution/v1beta1/validators/{validator_address}/commission
- /cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards
- /cosmos/distribution/v1beta1/validators/{validator_address}/slashes
- /cosmos/evidence/v1beta1/evidence
- /cosmos/evidence/v1beta1/evidence/{evidence_hash}
- /cosmos/evidence/v1beta1/evidence/{hash}
- /cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}
- /cosmos/feegrant/v1beta1/allowances/{grantee}
- /cosmos/feegrant/v1beta1/issued/{granter}
- /cosmos/gov/v1/params/{params_type}
- /cosmos/gov/v1/proposals
- /cosmos/gov/v1/proposals/{proposal_id}
- /cosmos/gov/v1/proposals/{proposal_id}/deposits
- /cosmos/gov/v1/proposals/{proposal_id}/deposits/{depositor}
- /cosmos/gov/v1/proposals/{proposal_id}/tally
- /cosmos/gov/v1/proposals/{proposal_id}/votes
- /cosmos/gov/v1/proposals/{proposal_id}/votes/{voter}
- /cosmos/gov/v1beta1/params/{params_type}
- /cosmos/gov/v1beta1/proposals
- /cosmos/gov/v1beta1/proposals/{proposal_id}
- /cosmos/gov/v1beta1/proposals/{proposal_id}/deposits
- /cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}
- /cosmos/gov/v1beta1/proposals/{proposal_id}/tally
- /cosmos/gov/v1beta1/proposals/{proposal_id}/votes
- /cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}
- /cosmos/mint/v1beta1/annual_provisions
- /cosmos/mint/v1beta1/inflation
- /cosmos/mint/v1beta1/params
- /cosmos/params/v1beta1/params
- /cosmos/slashing/v1beta1/params
- /cosmos/slashing/v1beta1/signing_infos
- /cosmos/slashing/v1beta1/signing_infos/{cons_address}
- /cosmos/staking/v1beta1/delegations/{delegator_addr}
- /cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations
- /cosmos/staking/v1beta1/delegators/{delegator_addr}/unbonding_delegations
- /cosmos/staking/v1beta1/delegators/{delegator_addr}/validators
- /cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/{validator_addr}
- /cosmos/staking/v1beta1/historical_info/{height}
- /cosmos/staking/v1beta1/params
- /cosmos/staking/v1beta1/pool
- /cosmos/staking/v1beta1/validators
- /cosmos/staking/v1beta1/validators/{validator_addr}
- /cosmos/staking/v1beta1/validators/{validator_addr}/delegations
- /cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}
- /cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation
- /cosmos/staking/v1beta1/validators/{validator_addr}/unbonding_delegations
- /cosmos/tx/v1beta1/txs
- /cosmos/tx/v1beta1/txs/block/{height}
- /cosmos/tx/v1beta1/txs/{hash}
- /cosmos/upgrade/v1beta1/applied_plan/{name}
- /cosmos/upgrade/v1beta1/current_plan
- /cosmos/upgrade/v1beta1/module_versions
- /cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}
- /node_info
- /syncing
- /validatorsets/latest
- /validatorsets/{height}
- /ibc/apps/interchain_accounts/controller/v1/params
- /ibc/apps/interchain_accounts/host/v1/params
- /ibc/apps/router/v1/params
- /ibc/apps/transfer/v1/channels/{channel_id}/ports/{port_id}/escrow_address
- /ibc/apps/transfer/v1/denom_hashes/{trace}
- /ibc/apps/transfer/v1/denom_traces
- /ibc/apps/transfer/v1/denom_traces/{hash}
- /ibc/apps/transfer/v1/params
- /ibc/client/v1/params
- /ibc/core/channel/v1/channels
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/client_state
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}
- /ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}
- /ibc/core/channel/v1/connections/{connection}/channels
- /ibc/core/client/v1/client_states
- /ibc/core/client/v1/client_states/{client_id}
- /ibc/core/client/v1/client_status/{client_id}
- /ibc/core/client/v1/consensus_states/{client_id}
- /ibc/core/client/v1/consensus_states/{client_id}/heights
- /ibc/core/client/v1/consensus_states/{client_id}/revision/{revision_number}/height/{revision_height}
- /ibc/core/client/v1/params
- /ibc/core/client/v1/upgraded_client_states
- /ibc/core/client/v1/upgraded_consensus_states
- /ibc/core/connection/v1/client_connections/{client_id}
- /ibc/core/connection/v1/connections
- /ibc/core/connection/v1/connections/{connection_id}
- /ibc/core/connection/v1/connections/{connection_id}/client_state
- /ibc/core/connection/v1/connections/{connection_id}/consensus_state/revision/{revision_number}/height/{revision_height}
- /ibc/core/connection/v1/params
- /blocks/latest
- /txs
- /txs/{hash}
- /bank/balances/{address}
- /bank/total
- /bank/total/{denomination}
- /auth/accounts/{address}
- /staking/delegators/{delegatorAddr}/delegations
- /staking/delegators/{delegatorAddr}/delegations/{validatorAddr}
- /staking/delegators/{delegatorAddr}/unbonding_delegations
- /staking/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr}
- /staking/redelegations
- /staking/delegators/{delegatorAddr}/validators
- /staking/delegators/{delegatorAddr}/validators/{validatorAddr}
- /staking/validators
- /staking/validators/{validatorAddr}
- /staking/validators/{validatorAddr}/unbonding_delegations
- /staking/pool
- /staking/parameters
- /slashing/signing_infos
- /slashing/parameters
- /minting/parameters
- /minting/inflation
- /minting/annual-provisions
- /staking/validators/{validatorAddr}/delegations
- /gov/proposals
- /gov/proposals/{proposalId}
- /gov/proposals/{proposalId}/proposer
- /gov/proposals/{proposalId}/deposits
- /gov/proposals/{proposalId}/deposits/{depositor}
- /gov/proposals/{proposalId}/votes
- /gov/proposals/{proposalId}/votes/{voter}
- /gov/proposals/{proposalId}/tally
- /gov/parameters/deposit
- /gov/parameters/tallying
- /gov/parameters/voting
- /distribution/delegators/{delegatorAddr}/rewards
- /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}
- /distribution/delegators/{delegatorAddr}/withdraw_address
- /distribution/validators/{validatorAddr}
- /distribution/validators/{validatorAddr}/outstanding_rewards
- /distribution/validators/{validatorAddr}/rewards
- /distribution/community_pool
- /distribution/parameters
- /cosmos/tx/v1beta1/decode
- /cosmos/tx/v1beta1/encode
- /cosmos/tx/v1beta1/encode/amino
- /cosmos/tx/v1beta1/simulate
- /cosmos/tx/v1beta1/txs
- /txs/encode
- /txs/dencode
- /bank/accounts/{address}/transfers
- /slashing/validators/{validatorAddr}/unjail
- /staking/delegators/{delegatorAddr}/redelegations
- /gov/proposals
- /gov/proposals/param_change
- /gov/proposals/{proposalId}/deposits
- /gov/proposals/{proposalId}/votes
- /distribution/delegators/{delegatorAddr}/rewards
- /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}
- /distribution/delegators/{delegatorAddr}/withdraw_address
- /distribution/validators/{validatorAddr}/rewards
- /cosmos/tx/v1beta1/encode
- /cosmos/tx/v1beta1/encode/amino
- /cosmos/tx/v1beta1/decode
- /cosmos/tx/v1beta1/simulate
- /cosmos/tx/v1beta1/txs
- /txs/encode
- /txs/dencode
- /bank/accounts/{address}/transfers
- /slashing/validators/{validatorAddr}/unjail
- /staking/delegators/{delegatorAddr}/redelegations
- /gov/proposals
- /gov/proposals/param_change
- /gov/proposals/{proposalId}/deposits
- /gov/proposals/{proposalId}/votes
- /distribution/delegators/{delegatorAddr}/rewards
- /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}
- /distribution/delegators/{delegatorAddr}/withdraw_address
- /distribution/validators/{validatorAddr}/rewards


</details>

<details>
<summary>TendermintRPC</summary>

  - dump_consensus_state
  - abci_info
  - abci_query
  - block
  - block_by_hash
  - block_results
  - block_search
  - blockchain
  - broadcast_evidence
  - broadcast_tx_async
  - broadcast_tx_commit
  - broadcast_tx_sync
  - check_tx
  - commit
  - consensus_params
  - consensus_state
  - genesis
  - genesis_chunked
  - health
  - net_info
  - num_unconfirmed_txs
  - status
  - subscribe
  - tx
  - tx_search
  - unconfirmed_txs
  - unsubscribe
  - unsubscribe_all
  - validators

</details>