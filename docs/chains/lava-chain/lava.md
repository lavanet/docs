---
slug: /lava
title: Lava x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Lava Logo](/img/chains/lava_logo.svg)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/lava-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/lava-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_lava.json


### Protocols 🔗

| Platform  |  rest/http | uri/http | tendermint/http | tendermint/wss |    grpc | webgrpc |
| --------- | -------- |------------| ------------- | -----------------|---------|---------|
| Gateway   | ✅       | ✅         | ✅            | ✅               | ✅      |   ✅    |
| SDK       | ✅       |            | ✅            |                  |         |    ✅   |




### Methods 🛠️

#### ⌨️ Command:

```bash
lavad q spec show-chain-info LAV1
```
#### ⌨️ Command for Mainnet:

```bash
lavad q spec show-chain-info lava-mainnet-1
```
#### 📋 List :


<details> <summary> REST </summary>

- /lavanet/lava/conflict/conflict_vote
- /lavanet/lava/conflict/conflict_vote/{index}
- /lavanet/lava/conflict/params
- /lavanet/lava/epochstorage/epoch_details
- /lavanet/lava/epochstorage/fixated_params
- /lavanet/lava/epochstorage/params
- /lavanet/lava/epochstorage/stake_storage
- /lavanet/lava/epochstorage/stake_storage/{index}
- /lavanet/lava/pairing/clients/{chainID}
- /lavanet/lava/pairing/epoch_payments
- /lavanet/lava/pairing/epoch_payments/{index}
- /lavanet/lava/pairing/get_pairing/{chainID}/{client}
- /lavanet/lava/pairing/params
- /lavanet/lava/pairing/provider_payment_storage
- /lavanet/lava/pairing/provider_payment_storage/{index}
- /lavanet/lava/pairing/providers/{chainID}
- /lavanet/lava/pairing/unique_payment_storage_client_provider
- /lavanet/lava/pairing/unique_payment_storage_client_provider/{index}
- /lavanet/lava/pairing/user_entry/{address}/{chainID}
- /lavanet/lava/pairing/verify_pairing/{chainID}/{client}/{provider}/{block}
- /lavanet/lava/plans/show_all_plans
- /lavanet/lava/plans/show_plan_info/{plan_index}
- /lavanet/lava/spec/chain/{chainID}
- /lavanet/lava/spec/params
- /lavanet/lava/spec/show_all_chains
- /lavanet/lava/spec/show_chain_info/{chainName}
- /lavanet/lava/spec/spec
- /lavanet/lava/spec/spec/{index}
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
- /cosmos/authz/v1beta1/grants/grantee/{grantee}
- /cosmos/authz/v1beta1/grants/granter/{granter}
- /cosmos/bank/v1beta1/balances/{address}
- /cosmos/bank/v1beta1/balances/{address}/by_denom
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
- /cosmos/tx/v1beta1/decode
- /cosmos/tx/v1beta1/encode
- /cosmos/tx/v1beta1/encode/amino
- /cosmos/tx/v1beta1/simulate
- /cosmos/tx/v1beta1/txs

</details>

<details> <summary> TendermintRPC </summary>

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

<details> <summary> gRPC </summary>

- lavanet.lava.conflict.Query/ConflictVote
- lavanet.lava.conflict.Query/ConflictVoteAll
- lavanet.lava.conflict.Query/Params
- lavanet.lava.epochstorage.Query/EpochDetails
- lavanet.lava.epochstorage.Query/FixatedParams
- lavanet.lava.epochstorage.Query/FixatedParamsAll
- lavanet.lava.epochstorage.Query/Params
- lavanet.lava.epochstorage.Query/StakeStorage
- lavanet.lava.epochstorage.Query/StakeStorageAll
- lavanet.lava.pairing.Query/Clients
- lavanet.lava.pairing.Query/EpochPayments
- lavanet.lava.pairing.Query/EpochPaymentsAll
- lavanet.lava.pairing.Query/SdkPairing
- lavanet.lava.pairing.Query/GetPairing
- lavanet.lava.pairing.Query/Params
- lavanet.lava.pairing.Query/ProviderPaymentStorage
- lavanet.lava.pairing.Query/ProviderPaymentStorageAll
- lavanet.lava.pairing.Query/Providers
- lavanet.lava.pairing.Query/UniquePaymentStorageClientProvider
- lavanet.lava.pairing.Query/UniquePaymentStorageClientProviderAll
- lavanet.lava.pairing.Query/UserEntry
- lavanet.lava.pairing.Query/VerifyPairing
- lavanet.lava.spec.Query/Chain
- lavanet.lava.spec.Query/Params
- lavanet.lava.spec.Query/ShowAllChains
- lavanet.lava.spec.Query/ShowChainInfo
- lavanet.lava.spec.Query/Spec
- lavanet.lava.spec.Query/SpecAll
- cosmos.auth.v1beta1.Query/Account
- grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo
- cosmos.auth.v1beta1.Query/Accounts
- cosmos.auth.v1beta1.Query/ModuleAccountByName
- cosmos.auth.v1beta1.Query/ModuleAccounts
- cosmos.auth.v1beta1.Query/Params
- cosmos.authz.v1beta1.Query/GranteeGrants
- cosmos.authz.v1beta1.Query/GranterGrants
- cosmos.bank.v1beta1.Query/AllBalances
- cosmos.bank.v1beta1.Query/Balance
- cosmos.bank.v1beta1.Query/BaseDenom
- cosmos.bank.v1beta1.Query/DenomMetadata
- cosmos.bank.v1beta1.Query/DenomsMetadata
- cosmos.bank.v1beta1.Query/Params
- cosmos.bank.v1beta1.Query/SpendableBalances
- cosmos.bank.v1beta1.Query/SupplyOf
- cosmos.bank.v1beta1.Query/SupplyOfWithoutOffset
- cosmos.bank.v1beta1.Query/TotalSupply
- cosmos.bank.v1beta1.Query/TotalSupplyWithoutOffset
- cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight
- cosmos.base.tendermint.v1beta1.Service/GetLatestBlock
- cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet
- cosmos.base.tendermint.v1beta1.Service/GetNodeInfo
- cosmos.base.tendermint.v1beta1.Service/GetSyncing
- cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight
- cosmos.distribution.v1beta1.Query/CommunityPool
- cosmos.distribution.v1beta1.Query/DelegationRewards
- cosmos.distribution.v1beta1.Query/DelegationTotalRewards
- cosmos.distribution.v1beta1.Query/DelegatorValidators
- cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress
- cosmos.distribution.v1beta1.Query/Params
- cosmos.distribution.v1beta1.Query/ValidatorCommission
- cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards
- cosmos.distribution.v1beta1.Query/ValidatorSlashes
- cosmos.evidence.v1beta1.Query/AllEvidence
- cosmos.evidence.v1beta1.Query/Evidence
- cosmos.feegrant.v1beta1.Query/Allowance
- cosmos.feegrant.v1beta1.Query/Allowances
- cosmos.feegrant.v1beta1.Query/AllowancesByGranter
- cosmos.gov.v1beta1.Query/Deposit
- cosmos.gov.v1beta1.Query/Deposits
- cosmos.gov.v1beta1.Query/Params
- cosmos.gov.v1beta1.Query/Proposal
- cosmos.gov.v1beta1.Query/Proposals
- cosmos.gov.v1beta1.Query/TallyResult
- cosmos.gov.v1beta1.Query/Vote
- cosmos.gov.v1beta1.Query/Votes
- cosmos.mint.v1beta1.Query/AnnualProvisions
- cosmos.mint.v1beta1.Query/Inflation
- cosmos.mint.v1beta1.Query/Params
- cosmos.params.v1beta1.Query/Params
- cosmos.slashing.v1beta1.Query/Params
- cosmos.slashing.v1beta1.Query/SigningInfo
- cosmos.slashing.v1beta1.Query/SigningInfos
- cosmos.staking.v1beta1.Query/Delegation
- cosmos.staking.v1beta1.Query/DelegatorDelegations
- cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations
- cosmos.staking.v1beta1.Query/DelegatorValidator
- cosmos.staking.v1beta1.Query/DelegatorValidators
- cosmos.staking.v1beta1.Query/HistoricalInfo
- cosmos.staking.v1beta1.Query/Params
- cosmos.staking.v1beta1.Query/Pool
- cosmos.staking.v1beta1.Query/Redelegations
- cosmos.staking.v1beta1.Query/UnbondingDelegation
- cosmos.staking.v1beta1.Query/Validator
- cosmos.staking.v1beta1.Query/ValidatorDelegations
- cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations
- cosmos.staking.v1beta1.Query/Validators
- cosmos.tx.v1beta1.Service/BroadcastTx
- cosmos.tx.v1beta1.Service/GetBlockWithTxs
- cosmos.tx.v1beta1.Service/GetTx
- cosmos.tx.v1beta1.Service/GetTxsEvent
- cosmos.tx.v1beta1.Service/Simulate
- cosmos.upgrade.v1beta1.Query/AppliedPlan
- cosmos.upgrade.v1beta1.Query/CurrentPlan
- cosmos.upgrade.v1beta1.Query/ModuleVersions
- cosmos.upgrade.v1beta1.Query/UpgradedConsensusState
- ibc.applications.interchain_accounts.controller.v1.Query/Params
- ibc.applications.interchain_accounts.host.v1.Query/Params
- ibc.applications.transfer.v1.Query/DenomHash
- ibc.applications.transfer.v1.Query/DenomTrace
- ibc.applications.transfer.v1.Query/DenomTraces
- ibc.applications.transfer.v1.Query/EscrowAddress
- ibc.applications.transfer.v1.Query/Params
- ibc.core.channel.v1.Query/Channel
- ibc.core.channel.v1.Query/ChannelClientState
- ibc.core.channel.v1.Query/ChannelConsensusState
- ibc.core.channel.v1.Query/Channels
- ibc.core.channel.v1.Query/ConnectionChannels
- ibc.core.channel.v1.Query/NextSequenceReceive
- ibc.core.channel.v1.Query/PacketAcknowledgement
- ibc.core.channel.v1.Query/PacketAcknowledgements
- ibc.core.channel.v1.Query/PacketCommitment
- ibc.core.channel.v1.Query/PacketCommitments
- ibc.core.channel.v1.Query/PacketReceipt
- ibc.core.channel.v1.Query/UnreceivedAcks
- ibc.core.channel.v1.Query/UnreceivedPackets
- ibc.core.client.v1.Query/ClientParams
- ibc.core.client.v1.Query/ClientState
- ibc.core.client.v1.Query/ClientStates
- ibc.core.client.v1.Query/ClientStatus
- ibc.core.client.v1.Query/ConsensusState
- ibc.core.client.v1.Query/ConsensusStateHeights
- ibc.core.client.v1.Query/ConsensusStates
- ibc.core.client.v1.Query/UpgradedClientState
- ibc.core.client.v1.Query/UpgradedConsensusState
- ibc.core.connection.v1.Query/ClientConnections
- ibc.core.connection.v1.Query/Connection
- ibc.core.connection.v1.Query/ConnectionClientState
- ibc.core.connection.v1.Query/ConnectionConsensusState
- ibc.core.connection.v1.Query/Connections

</details>

