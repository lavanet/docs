---
slug: /axelar
title: Axelar x Lava
---

import RoadmapItem from '@site/src/components/RoadmapItem'

![Axelar Logo](/img/chains/axelar_logo.svg)

[<RoadmapItem icon="⛏️" title="Get RPC" description="Get access to Lava's Web3 APIs and start building on the network with ease"/>](/axelar-dev)

[<RoadmapItem icon="🚀" title="Run an RPC Node" description="Become a part of Lava's network by running your own RPC node and accessing Web3 APIs seamlessly"/>](/axelar-node)

<hr />
<br />

<center>

## ⚙️ Supported APIs ⚙️

</center>

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_axelar.json


### Protocols 🔗

| Platform  |  rest/http | uri/http | tendermint/http | tendermint/wss     | grpc | web-grpc|
| --------- | -------- |------------| ------------- | ---------------------|------|---------|
| Gateway   | ✅       | ✅         | ✅            | ✅                   |  ✅  | ✅     |
| SDK       | ✅       |            | ✅            |                      |      |         |

### Methods 🛠️

#### ⌨️ Command:

```bash
lavad q spec show-chain-info AXELAR
```

#### 📋 List :

<details>
<summary> REST </summary>

  - /axelar/axelarnet/v1beta1/ibc_transfer_count
  - /axelar/evm/v1beta1/batched_commands/{chain}/{id}
  - /axelar/evm/v1beta1/burner_info
  - /axelar/evm/v1beta1/bytecode/{chain}/{contract}
  - /axelar/evm/v1beta1/chains
  - /axelar/evm/v1beta1/confirmation_height/{chain}
  - /axelar/evm/v1beta1/deposit_state
  - /axelar/evm/v1beta1/erc20_tokens/{chain}
  - /axelar/evm/v1beta1/event/{chain}/{event_id}
  - /axelar/evm/v1beta1/gateway_address/{chain}
  - /axelar/evm/v1beta1/key_address/{chain}
  - /axelar/evm/v1beta1/pending_commands/{chain}
  - /axelar/evm/v1beta1/token_info/{chain}
  - /axelar/evm/v1beta1/command_request
  - /axelar/multisig/v1beta1/key
  - /axelar/multisig/v1beta1/key_id/{chain}
  - /axelar/multisig/v1beta1/keygen_session
  - /axelar/multisig/v1beta1/next_key_id/{chain}
  - /axelar/nexus/v1beta1/assets/{chain}
  - /axelar/nexus/v1beta1/chain_maintainers/{chain}
  - /axelar/nexus/v1beta1/chain_state/{chain}
  - /axelar/nexus/v1beta1/chains
  - /axelar/nexus/v1beta1/chains_by_asset/{asset}
  - /axelar/nexus/v1beta1/fee_info/{chain}/{asset}
  - /axelar/nexus/v1beta1/fee
  - /axelar/nexus/v1beta1/latest_deposit_address/{recipient_addr}/{recipient_chain}/{deposit_chain}
  - /axelar/nexus/v1beta1/recipient_address/{deposit_chain}/{deposit_addr}
  - /axelar/nexus/v1beta1/transfer_fee/{source_chain}/{destination_chain}/{amount}
  - /axelar/nexus/v1beta1/transfer_fee
  - /axelar/nexus/v1beta1/transfer_rate_limit/{chain}/{asset}
  - /axelar/nexus/v1beta1/transfers_for_chain/{chain}/{state}
  - /axelar/nexus/v1beta1/message
  - /axelar/permission/v1beta1/governance_key
  - /axelar/reward/v1beta1/inflation_rate
  - /axelar/reward/v1beta1/params
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

</details>

<details> 
<summary> gRPC </summary>

  - axelar.axelarnet.v1beta1.QueryService/PendingIBCTransferCount
  - axelar.evm.v1beta1.QueryService/BatchedCommands
  - axelar.evm.v1beta1.QueryService/BurnerInfo
  - axelar.evm.v1beta1.QueryService/Bytecode
  - axelar.evm.v1beta1.QueryService/Chains
  - axelar.evm.v1beta1.QueryService/ConfirmationHeight
  - axelar.evm.v1beta1.QueryService/DepositState
  - axelar.evm.v1beta1.QueryService/ERC20Tokens
  - axelar.evm.v1beta1.QueryService/Event
  - axelar.evm.v1beta1.QueryService/GatewayAddress
  - axelar.evm.v1beta1.QueryService/KeyAddress
  - axelar.evm.v1beta1.QueryService/PendingCommands
  - axelar.evm.v1beta1.QueryService/TokenInfo
  - axelar.evm.v1beta1.QueryService/Command
  - axelar.multisig.v1beta1.QueryService/Key
  - axelar.multisig.v1beta1.QueryService/KeyID
  - axelar.multisig.v1beta1.QueryService/KeygenSession
  - axelar.multisig.v1beta1.QueryService/NextKeyID
  - axelar.nexus.v1beta1.QueryService/Assets
  - axelar.nexus.v1beta1.QueryService/ChainMaintainers
  - axelar.nexus.v1beta1.QueryService/ChainState
  - axelar.nexus.v1beta1.QueryService/Chains
  - axelar.nexus.v1beta1.QueryService/ChainsByAsset
  - axelar.nexus.v1beta1.QueryService/FeeInfo
  - axelar.nexus.v1beta1.QueryService/LatestDepositAddress
  - axelar.nexus.v1beta1.QueryService/RecipientAddress
  - axelar.nexus.v1beta1.QueryService/TransferFee
  - axelar.nexus.v1beta1.QueryService/TransferRateLimit
  - axelar.nexus.v1beta1.QueryService/TransfersForChain
  - axelar.nexus.v1beta1.QueryService/Message
  - axelar.permission.v1beta1.Query/GovernanceKey
  - axelar.reward.v1beta1.QueryService/InflationRate
  - axelar.reward.v1beta1.QueryService/Params
  - cosmos.auth.v1beta1.Query/Account
  - grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo
  - cosmos.auth.v1beta1.Query/Accounts
  - cosmos.auth.v1beta1.Query/ModuleAccountByName
  - cosmos.auth.v1beta1.Query/ModuleAccounts
  - cosmos.auth.v1beta1.Query/Params
  - cosmos.authz.v1beta1.Query/GranteeGrants
  - cosmos.authz.v1beta1.Query/GranterGrants
  - cosmos.authz.v1beta1.Query/Grants
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
  - router.v1.Query.Params
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

<details>
<summary> TendermintRPC </summary>

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

<details>
<summary> REST (additional) </summary>

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

</details>