---
slug: /iprpc
title: ipRPC 🔥
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use Incentivized Public RPC (ipRPC) Edpoints
 
Public endpoints and available API methods for each supported chain with incentivized pools, sponsored by a specific chain. These public endpoints are completely free and rate-limited at 3 req/s. 

:::tip
Don't see the chain you would like to get RPC access to? Check out the [Lava Gateway](gateway-endpoints.md) for more supported chains.
:::


## Movement
<Tabs>
  <TabItem value="mainnet" label="Mainnet">
   `MOVEMENT`

  | Service           | URL                                        |
  |---------------------|---------------------------------------------|
  | 🟢 rest            | https://movement.lava.build:443                 |

  </TabItem>
  <TabItem value="testnet" label="Testnet">
   `MOVEMENTT`

  | Service           | URL                                        |
  |---------------------|---------------------------------------------|
  | 🟢 rest            | https://movementt.lava.build:443                 |

  </TabItem>
</Tabs>

#### Available API methods

<details>
<summary> REST </summary>

- `/-/healthy`
- `/accounts/{address}`
- `/accounts/{address}/events/{creation_number}`
- `/accounts/{address}/events/{event_handle}/{field_name}`
- `/accounts/{address}/module/{module_name}`
- `/accounts/{address}/modules`
- `/accounts/{address}/resource/{resource_type}`
- `/accounts/{address}/resources`
- `/accounts/{address}/transactions`
- `/blocks/by_height/{block_height}`
- `/blocks/by_version/{version}`
- `/estimate_gas_price`
- `/events/{event_key}`
- `/spec`
- `/transactions/by_hash/{txn_hash}`
- `/transactions/wait_by_hash/{txn_hash}`
- `/transactions/by_version/{txn_version}`
- `/transactions/encode_submission`
- `/transactions`


</details>


## Lava 

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
   `LAVA`

  | Service           | URL                                        |
  |---------------------|---------------------------------------------|
  | 🟢 rest            | https://lava.lava.build:443                 |
  | 🟢 tendermintrpc   | https://lava.tendermintrpc.lava.build:443   |
  | 🟢 tendermintrpc/ws | wss://lava.tendermintrpc.lava.build/websocket |
  | 🟢 grpc            | lava.grpc.lava.build:443                    |

  </TabItem>

  <TabItem value="testnet" label="Testnet">
   `LAV1`

  | Service           | URL                                           |
  |---------------------|-----------------------------------------------|
  | 🟢 rest            | https://lav1.lava.build:443                   |
  | 🟢 tendermintrpc   | https://lav1.tendermintrpc.lava.build:443     |
  | 🟢 tendermintrpc/ws | wss://lav1.tendermintrpc.lava.build/websocket |
  | 🟢 grpc            | lav1.grpc.lava.build:443                      |

  </TabItem>
</Tabs>

#### Available API methods:

<details>
<summary> REST </summary>

- `/lavanet/lava/conflict/conflict_vote`
- `/lavanet/lava/conflict/conflict_vote/{index}`
- `/lavanet/lava/conflict/params`
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
<summary> gRPC </summary>

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

## Cosmos Hub

<Tabs>
<TabItem value="mainnet" label="Mainnet">

 `COSMOSHUB`

| Service           | URL                                             |
|---------------------|--------------------------------------------------|
| 🟢 rest            | https://cosmoshub.lava.build:443                 |
| 🟢 tendermintrpc   | https://cosmoshub.tendermintrpc.lava.build:443  |
| 🟢 tendermintrpc/ws | wss://cosmoshub.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | cosmoshub.grpc.lava.build:443                    |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`COSMOSHUBT`

| Service           | URL                                               |
|---------------------|----------------------------------------------------|
| 🟢 rest            | https://cosmoshubt.lava.build:443                 |
| 🟢 tendermintrpc   | https://cosmoshubt.tendermintrpc.lava.build:443   |
| 🟢 tendermintrpc/ws |wss://cosmoshubt.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | cosmoshubt.grpc.lava.build:443                     |

</TabItem>
</Tabs>
<br />

#### Available API methods

<details>
<summary> REST </summary>

- `/cosmos/auth/v1beta1/account_info/{address}`
- `/cosmos/auth/v1beta1/accounts`
- `/cosmos/auth/v1beta1/accounts/{address}`
- `/cosmos/auth/v1beta1/address_by_id/{id}`
- `/cosmos/auth/v1beta1/bech32`
- `/cosmos/auth/v1beta1/bech32/{address_bytes}`
- `/cosmos/auth/v1beta1/bech32/{address_string}`
- `/cosmos/auth/v1beta1/module_accounts`
- `/cosmos/auth/v1beta1/module_accounts/{name}`
- `/cosmos/auth/v1beta1/params`
- `/cosmos/authz/v1beta1/grants`
- `/cosmos/authz/v1beta1/grants/grantee/{grantee}`
- `/cosmos/authz/v1beta1/grants/granter/{granter}`
- `/cosmos/bank/v1beta1/balances/{address}`
- `/cosmos/bank/v1beta1/balances/{address}/by_denom`
- `/cosmos/bank/v1beta1/balances/{address}/{denom}`
- `/cosmos/bank/v1beta1/base_denom`
- `/cosmos/bank/v1beta1/denom_owners/{denom}`
- `/cosmos/bank/v1beta1/denoms_metadata`
- `/cosmos/bank/v1beta1/denoms_metadata/{denom}`
- `/cosmos/bank/v1beta1/params`
- `/cosmos/bank/v1beta1/send_enabled`
- `/cosmos/bank/v1beta1/spendable_balances/{address}`
- `/cosmos/bank/v1beta1/spendable_balances/{address}/by_denom`
- `/cosmos/bank/v1beta1/supply`
- `/cosmos/bank/v1beta1/supply/by_denom`
- `/cosmos/bank/v1beta1/supply/{denom}`
- `/cosmos/bank/v1beta1/supply_without_offset`
- `/cosmos/bank/v1beta1/supply_without_offset/{denom}`
- `/cosmos/base/node/v1beta1/config`
- `/cosmos/base/reflection/v1beta1/app_descriptor/authn`
- `/cosmos/base/reflection/v1beta1/app_descriptor/chain`
- `/cosmos/base/reflection/v1beta1/app_descriptor/codec`
- `/cosmos/base/reflection/v1beta1/app_descriptor/configuration`
- `/cosmos/base/reflection/v1beta1/app_descriptor/query_services`
- `/cosmos/base/reflection/v1beta1/app_descriptor/tx_descriptor`
- `/cosmos/base/reflection/v1beta1/interfaces`
- `/cosmos/base/reflection/v1beta1/interfaces/{interface_name}/implementations`
- `/cosmos/base/tendermint/v1beta1/abci_query`
- `/cosmos/base/tendermint/v1beta1/blocks/latest`
- `/cosmos/base/tendermint/v1beta1/blocks/{height}`
- `/cosmos/base/tendermint/v1beta1/node_info`
- `/cosmos/base/tendermint/v1beta1/syncing`
- `/cosmos/base/tendermint/v1beta1/validatorsets/latest`
- `/cosmos/base/tendermint/v1beta1/validatorsets/{height}`
- `/cosmos/distribution/v1beta1/community_pool`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
- `/cosmos/distribution/v1beta1/params`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`
- `/cosmos/evidence/v1beta1/evidence`
- `/cosmos/evidence/v1beta1/evidence/{evidence_hash}`
- `/cosmos/evidence/v1beta1/evidence/{hash}`
- `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
- `/cosmos/feegrant/v1beta1/allowances/{grantee}`
- `/cosmos/feegrant/v1beta1/issued/{granter}`
- `/cosmos/gov/v1/params/{params_type}`
- `/cosmos/gov/v1/proposals`
- `/cosmos/gov/v1/proposals/{proposal_id}`
- `/cosmos/gov/v1/proposals/{proposal_id}/deposits`
- `/cosmos/gov/v1/proposals/{proposal_id}/deposits/{depositor}`
- `/cosmos/gov/v1/proposals/{proposal_id}/tally`
- `/cosmos/gov/v1/proposals/{proposal_id}/votes`
- `/cosmos/gov/v1/proposals/{proposal_id}/votes/{voter}`
- `/cosmos/gov/v1beta1/params/{params_type}`
- `/cosmos/gov/v1beta1/proposals`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/votes`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}`
- `/cosmos/mint/v1beta1/annual_provisions`
- `/cosmos/mint/v1beta1/inflation`
- `/cosmos/mint/v1beta1/params`
- `/cosmos/params/v1beta1/params`
- `/cosmos/slashing/v1beta1/params`
- `/cosmos/slashing/v1beta1/signing_infos`
- `/cosmos/slashing/v1beta1/signing_infos/{cons_address}`
- `/cosmos/staking/v1beta1/delegations/{delegator_addr}`
- `/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations`
- `/cosmos/staking/v1beta1/delegators/{delegator_addr}/unbonding_delegations`
- `/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators`
- `/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/{validator_addr}`
- `/cosmos/staking/v1beta1/historical_info/{height}`
- `/cosmos/staking/v1beta1/params`
- `/cosmos/staking/v1beta1/pool`
- `/cosmos/staking/v1beta1/validators`
- `/cosmos/staking/v1beta1/validators/{validator_addr}`
- `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations`
- `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}`
- `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation`
- `/cosmos/staking/v1beta1/validators/{validator_addr}/unbonding_delegations`
- `/cosmos/tx/v1beta1/txs`
- `/cosmos/tx/v1beta1/txs/block/{height}`
- `/cosmos/tx/v1beta1/txs/{hash}`
- `/cosmos/upgrade/v1beta1/applied_plan/{name}`
- `/cosmos/upgrade/v1beta1/current_plan`
- `/cosmos/upgrade/v1beta1/module_versions`
- `/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}`
- `/node_info`
- `/syncing`
- `/validatorsets/latest`
- `/validatorsets/{height}`
- `/ibc/apps/interchain_accounts/controller/v1/params`
- `/ibc/apps/interchain_accounts/host/v1/params`
- `/ibc/apps/router/v1/params`
- `/ibc/apps/transfer/v1/channels/{channel_id}/ports/{port_id}/escrow_address`
- `/ibc/apps/transfer/v1/denom_hashes/{trace}`
- `/ibc/apps/transfer/v1/denom_traces`
- `/ibc/apps/transfer/v1/denom_traces/{hash}`
- `/ibc/apps/transfer/v1/params`
- `/ibc/client/v1/params`
- `/ibc/core/channel/v1/channels`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/client_state`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}`
- `/ibc/core/channel/v1/connections/{connection}/channels`
- `/ibc/core/client/v1/client_states`
- `/ibc/core/client/v1/client_states/{client_id}`
- `/ibc/core/client/v1/client_status/{client_id}`
- `/ibc/core/client/v1/consensus_states/{client_id}`
- `/ibc/core/client/v1/consensus_states/{client_id}/heights`
- `/ibc/core/client/v1/consensus_states/{client_id}/revision/{revision_number}/height/{revision_height}`
- `/ibc/core/client/v1/params`
- `/ibc/core/client/v1/upgraded_client_states`
- `/ibc/core/client/v1/upgraded_consensus_states`
- `/ibc/core/connection/v1/client_connections/{client_id}`
- `/ibc/core/connection/v1/connections`
- `/ibc/core/connection/v1/connections/{connection_id}`
- `/ibc/core/connection/v1/connections/{connection_id}/client_state`
- `/ibc/core/connection/v1/connections/{connection_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
- `/ibc/core/connection/v1/params`
- `/blocks/latest`
- `/txs`
- `/txs/{hash}`
- `/bank/balances/{address}`
- `/bank/total`
- `/bank/total/{denomination}`
- `/auth/accounts/{address}`
- `/staking/delegators/{delegatorAddr}/delegations`
- `/staking/delegators/{delegatorAddr}/delegations/{validatorAddr}`
- `/staking/delegators/{delegatorAddr}/unbonding_delegations`
- `/staking/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr}`
- `/staking/redelegations`
- `/staking/delegators/{delegatorAddr}/validators`
- `/staking/delegators/{delegatorAddr}/validators/{validatorAddr}`
- `/staking/validators`
- `/staking/validators/{validatorAddr}`
- `/staking/validators/{validatorAddr}/unbonding_delegations`
- `/staking/pool`
- `/staking/parameters`
- `/slashing/signing_infos`
- `/slashing/parameters`
- `/minting/parameters`
- `/minting/inflation`
- `/minting/annual-provisions`
- `/staking/validators/{validatorAddr}/delegations`
- `/gov/proposals`
- `/gov/proposals/{proposalId}`
- `/gov/proposals/{proposalId}/proposer`
- `/gov/proposals/{proposalId}/deposits`
- `/gov/proposals/{proposalId}/deposits/{depositor}`
- `/gov/proposals/{proposalId}/votes`
- `/gov/proposals/{proposalId}/votes/{voter}`
- `/gov/proposals/{proposalId}/tally`
- `/gov/parameters/deposit`
- `/gov/parameters/tallying`
- `/gov/parameters/voting`
- `/distribution/delegators/{delegatorAddr}/rewards`
- `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
- `/distribution/delegators/{delegatorAddr}/withdraw_address`
- `/distribution/validators/{validatorAddr}`
- `/distribution/validators/{validatorAddr}/outstanding_rewards`
- `/distribution/validators/{validatorAddr}/rewards`
- `/distribution/community_pool`
- `/distribution/parameters`
- `/cosmos/tx/v1beta1/decode`
- `/cosmos/tx/v1beta1/encode`
- `/cosmos/tx/v1beta1/encode/amino`
- `/cosmos/tx/v1beta1/simulate`
- `/cosmos/tx/v1beta1/txs`
- `/txs/encode`
- `/txs/dencode`
- `/bank/accounts/{address}/transfers`
- `/slashing/validators/{validatorAddr}/unjail`
- `/staking/delegators/{delegatorAddr}/redelegations`
- `/gov/proposals`
- `/gov/proposals/param_change`
- `/gov/proposals/{proposalId}/deposits`
- `/gov/proposals/{proposalId}/votes`
- `/distribution/delegators/{delegatorAddr}/rewards`
- `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
- `/distribution/delegators/{delegatorAddr}/withdraw_address`
- `/distribution/validators/{validatorAddr}/rewards`
- `/cosmos/tx/v1beta1/encode`
- `/cosmos/tx/v1beta1/encode/amino`
- `/cosmos/tx/v1beta1/decode`
- `/cosmos/tx/v1beta1/simulate`
- `/cosmos/tx/v1beta1/txs`
- `/txs/encode`
- `/txs/dencode`
- `/bank/accounts/{address}/transfers`
- `/slashing/validators/{validatorAddr}/unjail`
- `/staking/delegators/{delegatorAddr}/redelegations`
- `/gov/proposals`
- `/gov/proposals/param_change`
- `/gov/proposals/{proposalId}/deposits`
- `/gov/proposals/{proposalId}/votes`
- `/distribution/delegators/{delegatorAddr}/rewards`
- `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
- `/distribution/delegators/{delegatorAddr}/withdraw_address`
- `/distribution/validators/{validatorAddr}/rewards`

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


## Near 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`NEAR`

| Service           | URL                                       |
|---------------------|------------------------------------------|
| 🟢 jsonrpc            | https://near.lava.build:443            |
             

</TabItem>
<TabItem value="testnet" label=" Testnet">

`NEART`

| Service           | URL                                        |
|---------------------|---------------------------------------------|
| 🟢 jsonrpc            | https://neart.lava.build:443              |

</TabItem>
</Tabs>
<br />

#### Available API methods
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


## Stargaze 

<Tabs>
<TabItem value="mainnet" label="Mainnet">

`STRGZ`

| Service           | URL                                        |
|---------------------|---------------------------------------------|
| 🟢 rest            | https://strgz.lava.build:443              |
| 🟢 tendermintrpc   | https://strgz.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://strgz.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | strgz.grpc.lava.build:443                 |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`STRGZT`

| Service           | URL                                         |
|---------------------|----------------------------------------------|
| 🟢 rest            | https://strgzt.lava.build:443              |
| 🟢 tendermintrpc   | https://strgzt.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://strgzt.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | strgzt.grpc.lava.build:443                 |

</TabItem>
</Tabs>
<br />

#### Available API methods
<details> 
<summary> REST </summary>

- `/stargaze/globalfee/v1/contract_authorization/{contract_address}`
- `/stargaze/globalfee/v1/code_authorization/{code_id}`
- `/stargaze/tokenfactory/v1/denoms_from_creator/{creator}`
- `/stargaze/tokenfactory/v1/denoms/{denom}/authority_metadata`
- `/stargaze/mint/v1beta1/params`
- `/stargaze/mint/v1beta1/annual_provisions`
- `/stargaze/cron/v1/list-privileged`
- `/stargaze/claim/v1beta1/total_claimable/{address}`
- `/stargaze/claim/v1beta1/params`
- `/stargaze/claim/v1beta1/module_account_balance`
- `/stargaze/claim/v1beta1/claimable_for_action/{address}/{action}`
- `/stargaze/claim/v1beta1/claim_record/{address}`
- `/stargaze/alloc/v1beta1/params`

</details>

<details> 
<summary> gRPC </summary>

- publicawesome.stargaze.mint.v1beta1.Query/AnnualProvisions
- publicawesome.stargaze.globalfee.v1.Query/CodeAuthorization
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

## Axelar 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`AXELAR`

| Service           | URL                                         |
|---------------------|----------------------------------------------|
| 🟢 rest            | https://axelar.lava.build:443               |
| 🟢 tendermintrpc   | https://axelar.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://axelar.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | axelar.grpc.lava.build:443                 |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`AXELART`

| Service          | URL                                          |
|---------------------|-----------------------------------------------|
| 🟢 rest            | https://axelart.lava.build:443              |
| 🟢 tendermintrpc   | https://axelart.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://axelart.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | axelart.grpc.lava.build:443                 |

</TabItem>
</Tabs>
<br />

#### Available API methods

<details>
<summary> REST </summary>

  - `/axelar/axelarnet/v1beta1/ibc_transfer_count`
  - `/axelar/evm/v1beta1/batched_commands/{chain}/{id}`
  - `/axelar/evm/v1beta1/burner_info`
  - `/axelar/evm/v1beta1/bytecode/{chain}/{contract}`
  - `/axelar/evm/v1beta1/chains`
  - `/axelar/evm/v1beta1/confirmation_height/{chain}`
  - `/axelar/evm/v1beta1/deposit_state`
  - `/axelar/evm/v1beta1/erc20_tokens/{chain}`
  - `/axelar/evm/v1beta1/event/{chain}/{event_id}`
  - `/axelar/evm/v1beta1/gateway_address/{chain}`
  - `/axelar/evm/v1beta1/key_address/{chain}`
  - `/axelar/evm/v1beta1/pending_commands/{chain}`
  - `/axelar/evm/v1beta1/token_info/{chain}`
  - `/axelar/evm/v1beta1/command_request`
  - `/axelar/multisig/v1beta1/key`
  - `/axelar/multisig/v1beta1/key_id/{chain}`
  - `/axelar/multisig/v1beta1/keygen_session`
  - `/axelar/multisig/v1beta1/next_key_id/{chain}`
  - `/axelar/nexus/v1beta1/assets/{chain}`
  - `/axelar/nexus/v1beta1/chain_maintainers/{chain}`
  - `/axelar/nexus/v1beta1/chain_state/{chain}`
  - `/axelar/nexus/v1beta1/chains`
  - `/axelar/nexus/v1beta1/chains_by_asset/{asset}`
  - `/axelar/nexus/v1beta1/fee_info/{chain}/{asset}`
  - `/axelar/nexus/v1beta1/fee`
  - `/axelar/nexus/v1beta1/latest_deposit_address/{recipient_addr}/{recipient_chain}/{deposit_chain}`
  - `/axelar/nexus/v1beta1/recipient_address/{deposit_chain}/{deposit_addr}`
  - `/axelar/nexus/v1beta1/transfer_fee/{source_chain}/{destination_chain}/{amount}`
  - `/axelar/nexus/v1beta1/transfer_fee`
  - `/axelar/nexus/v1beta1/transfer_rate_limit/{chain}/{asset}`
  - `/axelar/nexus/v1beta1/transfers_for_chain/{chain}/{state}`
  - `/axelar/nexus/v1beta1/message`
  - `/axelar/permission/v1beta1/governance_key`
  - `/axelar/reward/v1beta1/inflation_rate`
  - `/axelar/reward/v1beta1/params`
  - `/cosmos/auth/v1beta1/account_info/{address}`
  - `/cosmos/auth/v1beta1/accounts`
  - `/cosmos/auth/v1beta1/accounts/{address}`
  - `/cosmos/auth/v1beta1/address_by_id/{id}`
  - `/cosmos/auth/v1beta1/bech32`
  - `/cosmos/auth/v1beta1/bech32/{address_bytes}`
  - `/cosmos/auth/v1beta1/bech32/{address_string}`
  - `/cosmos/auth/v1beta1/module_accounts`
  - `/cosmos/auth/v1beta1/module_accounts/{name}`
  - `/cosmos/auth/v1beta1/params`
  - `/cosmos/authz/v1beta1/grants`
  - `/cosmos/authz/v1beta1/grants/grantee/{grantee}`
  - `/cosmos/authz/v1beta1/grants/granter/{granter}`
  - `/cosmos/bank/v1beta1/balances/{address}`
  - `/cosmos/bank/v1beta1/balances/{address}/by_denom`
  - `/cosmos/bank/v1beta1/balances/{address}/{denom}`
  - `/cosmos/bank/v1beta1/base_denom`
  - `/cosmos/bank/v1beta1/denom_owners/{denom}`
  - `/cosmos/bank/v1beta1/denoms_metadata`
  - `/cosmos/bank/v1beta1/denoms_metadata/{denom}`
  - `/cosmos/bank/v1beta1/params`
  - `/cosmos/bank/v1beta1/send_enabled`
  - `/cosmos/bank/v1beta1/spendable_balances/{address}`
  - `/cosmos/bank/v1beta1/spendable_balances/{address}/by_denom`
  - `/cosmos/bank/v1beta1/supply`
  - `/cosmos/bank/v1beta1/supply/by_denom`
  - `/cosmos/bank/v1beta1/supply/{denom}`
  - `/cosmos/bank/v1beta1/supply_without_offset`
  - `/cosmos/bank/v1beta1/supply_without_offset/{denom}`
  - `/cosmos/base/node/v1beta1/config`
  - `/cosmos/base/reflection/v1beta1/app_descriptor/authn`
  - `/cosmos/base/reflection/v1beta1/app_descriptor/chain`
  - `/cosmos/base/reflection/v1beta1/app_descriptor/codec`
  - `/cosmos/base/reflection/v1beta1/app_descriptor/configuration`
  - `/cosmos/base/reflection/v1beta1/app_descriptor/query_services`
  - `/cosmos/base/reflection/v1beta1/app_descriptor/tx_descriptor`
  - `/cosmos/base/reflection/v1beta1/interfaces`
  - `/cosmos/base/reflection/v1beta1/interfaces/{interface_name}/implementations`
  - `/cosmos/base/tendermint/v1beta1/abci_query`
  - `/cosmos/base/tendermint/v1beta1/blocks/latest`
  - `/cosmos/base/tendermint/v1beta1/blocks/{height}`
  - `/cosmos/base/tendermint/v1beta1/node_info`
  - `/cosmos/base/tendermint/v1beta1/syncing`
  - `/cosmos/base/tendermint/v1beta1/validatorsets/latest`
  - `/cosmos/base/tendermint/v1beta1/validatorsets/{height}`
  - `/cosmos/distribution/v1beta1/community_pool`
  - `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
  - `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
  - `/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators`
  - `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
  - `/cosmos/distribution/v1beta1/params`
  - `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
  - `/cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards`
  - `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`
  - `/cosmos/evidence/v1beta1/evidence`
  - `/cosmos/evidence/v1beta1/evidence/{evidence_hash}`
  - `/cosmos/evidence/v1beta1/evidence/{hash}`
  - `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
  - `/cosmos/feegrant/v1beta1/allowances/{grantee}`
  - `/cosmos/feegrant/v1beta1/issued/{granter}`
  - `/cosmos/gov/v1/params/{params_type}`
  - `/cosmos/gov/v1/proposals`
  - `/cosmos/gov/v1/proposals/{proposal_id}`
  - `/cosmos/gov/v1/proposals/{proposal_id}/deposits`
  - `/cosmos/gov/v1/proposals/{proposal_id}/deposits/{depositor}`
  - `/cosmos/gov/v1/proposals/{proposal_id}/tally`
  - `/cosmos/gov/v1/proposals/{proposal_id}/votes`
  - `/cosmos/gov/v1/proposals/{proposal_id}/votes/{voter}`
  - `/cosmos/gov/v1beta1/params/{params_type}`
  - `/cosmos/gov/v1beta1/proposals`
  - `/cosmos/gov/v1beta1/proposals/{proposal_id}`
  - `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits`
  - `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}`
  - `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`
  - `/cosmos/gov/v1beta1/proposals/{proposal_id}/votes`
  - `/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}`
  - `/cosmos/mint/v1beta1/annual_provisions`
  - `/cosmos/mint/v1beta1/inflation`
  - `/cosmos/mint/v1beta1/params`
  - `/cosmos/params/v1beta1/params`
  - `/cosmos/slashing/v1beta1/params`
  - `/cosmos/slashing/v1beta1/signing_infos`
  - `/cosmos/slashing/v1beta1/signing_infos/{cons_address}`
  - `/cosmos/staking/v1beta1/delegations/{delegator_addr}`
  - `/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations`
  - `/cosmos/staking/v1beta1/delegators/{delegator_addr}/unbonding_delegations`
  - `/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators`
  - `/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/{validator_addr}`
  - `/cosmos/staking/v1beta1/historical_info/{height}`
  - `/cosmos/staking/v1beta1/params`
  - `/cosmos/staking/v1beta1/pool`
  - `/cosmos/staking/v1beta1/validators`
  - `/cosmos/staking/v1beta1/validators/{validator_addr}`
  - `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations`
  - `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}`
  - `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation`
  - `/cosmos/staking/v1beta1/validators/{validator_addr}/unbonding_delegations`
  - `/cosmos/tx/v1beta1/txs`
  - `/cosmos/tx/v1beta1/txs/block/{height}`
  - `/cosmos/tx/v1beta1/txs/{hash}`
  - `/cosmos/upgrade/v1beta1/applied_plan/{name}`
  - `/cosmos/upgrade/v1beta1/current_plan`
  - `/cosmos/upgrade/v1beta1/module_versions`
  - `/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}`
  - `/node_info`
  - `/syncing`
  - `/validatorsets/latest`
  - `/validatorsets/{height}`
  - `/ibc/apps/interchain_accounts/controller/v1/params`
  - `/ibc/apps/interchain_accounts/host/v1/params`
  - `/ibc/apps/router/v1/params`
  - `/ibc/apps/transfer/v1/channels/{channel_id}/ports/{port_id}/escrow_address`
  - `/ibc/apps/transfer/v1/denom_hashes/{trace}`
  - `/ibc/apps/transfer/v1/denom_traces`
  - `/ibc/apps/transfer/v1/denom_traces/{hash}`
  - `/ibc/apps/transfer/v1/params`
  - `/ibc/client/v1/params`
  - `/ibc/core/channel/v1/channels`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/client_state`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}`
  - `/ibc/core/channel/v1/connections/{connection}/channels`
  - `/ibc/core/client/v1/client_states`
  - `/ibc/core/client/v1/client_states/{client_id}`
  - `/ibc/core/client/v1/client_status/{client_id}`
  - `/ibc/core/client/v1/consensus_states/{client_id}`
  - `/ibc/core/client/v1/consensus_states/{client_id}/heights`
  - `/ibc/core/client/v1/consensus_states/{client_id}/revision/{revision_number}/height/{revision_height}`
  - `/ibc/core/client/v1/params`
  - `/ibc/core/client/v1/upgraded_client_states`
  - `/ibc/core/client/v1/upgraded_consensus_states`
  - `/ibc/core/connection/v1/client_connections/{client_id}`
  - `/ibc/core/connection/v1/connections`
  - `/ibc/core/connection/v1/connections/{connection_id}`
  - `/ibc/core/connection/v1/connections/{connection_id}/client_state`
  - `/ibc/core/connection/v1/connections/{connection_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
  - `/ibc/core/connection/v1/params`
  - `/blocks/latest`
  - `/txs`
  - `/txs/{hash}`
  - `/bank/balances/{address}`
  - `/bank/total`
  - `/bank/total/{denomination}`
  - `/auth/accounts/{address}`
  - `/staking/delegators/{delegatorAddr}/delegations`
  - `/staking/delegators/{delegatorAddr}/delegations/{validatorAddr}`
  - `/staking/delegators/{delegatorAddr}/unbonding_delegations`
  - `/staking/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr}`
  - `/staking/redelegations`
  - `/staking/delegators/{delegatorAddr}/validators`
  - `/staking/delegators/{delegatorAddr}/validators/{validatorAddr}`
  - `/staking/validators`
  - `/staking/validators/{validatorAddr}`
  - `/staking/validators/{validatorAddr}/unbonding_delegations`
  - `/staking/pool`
  - `/staking/parameters`
  - `/slashing/signing_infos`
  - `/slashing/parameters`
  - `/minting/parameters`
  - `/minting/inflation`
  - `/minting/annual-provisions`
  - `/staking/validators/{validatorAddr}/delegations`
  - `/gov/proposals`
  - `/gov/proposals/{proposalId}`
  - `/gov/proposals/{proposalId}/proposer`
  - `/gov/proposals/{proposalId}/deposits`
  - `/gov/proposals/{proposalId}/deposits/{depositor}`
  - `/gov/proposals/{proposalId}/votes`
  - `/gov/proposals/{proposalId}/votes/{voter}`
  - `/gov/proposals/{proposalId}/tally`
  - `/gov/parameters/deposit`
  - `/gov/parameters/tallying`
  - `/gov/parameters/voting`
  - `/distribution/delegators/{delegatorAddr}/rewards`
  - `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
  - `/distribution/delegators/{delegatorAddr}/withdraw_address`
  - `/distribution/validators/{validatorAddr}`
  - `/distribution/validators/{validatorAddr}/outstanding_rewards`
  - `/distribution/validators/{validatorAddr}/rewards`
  - `/distribution/community_pool`
  - `/distribution/parameters`

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

  - `/cosmos/tx/v1beta1/decode`
  - `/cosmos/tx/v1beta1/encode`
  - `/cosmos/tx/v1beta1/encode/amino`
  - `/cosmos/tx/v1beta1/simulate`
  - `/cosmos/tx/v1beta1/txs`
  - `/txs/encode`
  - `/txs/dencode`
  - `/bank/accounts/{address}/transfers`
  - `/slashing/validators/{validatorAddr}/unjail`
  - `/staking/delegators/{delegatorAddr}/redelegations`
  - `/gov/proposals`
  - `/gov/proposals/param_change`
  - `/gov/proposals/{proposalId}/deposits`
  - `/gov/proposals/{proposalId}/votes`
  - `/distribution/delegators/{delegatorAddr}/rewards`
  - `/distribution/delegators/{delegatorAddr}/rewards/{validatorAddr}`
  - `/distribution/delegators/{delegatorAddr}/withdraw_address`
  - `/distribution/validators/{validatorAddr}/rewards`

</details>



## Arbitrum 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`ARB1`

| Service           | URL                                          |
|---------------------|-----------------------------------------------|
| 🟢 jsonrpc            | https://arbitrum.lava.build:443              |


</TabItem>
<TabItem value="sepolia-testnet" label=" Sepolia-Testnet">

`ARBS`

| Service           | URL                                               |
|---------------------|----------------------------------------------------|
| 🟢 jsonrpc            | https://arbitrums.lava.build:443                |

</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary> JSONRPC </summary>

- eth_accounts
- eth_blockNumber
- eth_call
- eth_chainId
- eth_coinbase
- eth_compileLLL
- eth_createAccessList
- eth_estimateGas
- eth_feeHistory
- eth_gasPrice
- eth_getBalance
- eth_getBlockByHash
- eth_getBlockByNumber
- eth_getBlockReceipts
- eth_getBlockTransactionCountByHash
- eth_getBlockTransactionCountByNumber
- eth_getCode
- eth_getCompilers
- eth_getFilterChanges
- eth_getFilterLogs
- eth_getLogs
- eth_getProof
- eth_getStorageAt
- eth_getTransactionByBlockHashAndIndex
- eth_getTransactionByBlockNumberAndIndex
- eth_getTransactionByHash
- eth_getTransactionCount
- eth_getTransactionReceipt
- eth_getUncleByBlockHashAndIndex
- eth_getUncleByBlockNumberAndIndex
- eth_getUncleCountByBlockHash
- eth_getUncleCountByBlockNumber
- eth_getWork
- eth_hashrate
- eth_maxPriorityFeePerGas
- eth_mining
- eth_newBlockFilter
- eth_newFilter
- eth_newPendingTransactionFilter
- eth_protocolVersion
- eth_sendRawTransaction
- eth_sendTransaction
- eth_sign
- eth_signTransaction
- eth_subscribe
- eth_syncing
- eth_uninstallFilter
- eth_unsubscribe
- net_listening
- net_peerCount
- net_version
- rpc_modules
- web3_clientVersion
- web3_sha3
- arbtrace_block
- arbtrace_call
- arbtrace_callMany
- arbtrace_filter
- arbtrace_replayBlockTransactions
- arbtrace_replayTransaction
- arbtrace_transaction
- debug_getBadBlocks
- debug_getRawBlock
- debug_getRawHeader
- debug_getRawReceipts
- debug_getRawTransaction
- debug_storageRangeAt
- debug_traceBlockByHash
- debug_traceBlockByNumber
- debug_traceCall
- debug_traceTransaction

</details>


## Filecoin 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`FVM`

| Service           | URL                                            |
|---------------------|-------------------------------------------------|
| 🟢 jsonrpc            | https://filecoin.lava.build:443             |


</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary> JSONRPC </summary>

- Filecoin.ChainGetBlock
- Filecoin.ChainGetBlockMessages
- Filecoin.ChainGetGenesis
- Filecoin.ChainGetMessage
- Filecoin.ChainGetNode
- Filecoin.ChainGetParentMessages
- Filecoin.ChainGetParentReceipts
- Filecoin.ChainGetPath
- Filecoin.ChainGetTipSet
- Filecoin.ChainGetTipSetAfterHeight
- Filecoin.ChainGetTipSetByHeight
- Filecoin.ChainHasObj
- Filecoin.ChainHead
- Filecoin.ChainNotify
- Filecoin.ChainReadObj
- Filecoin.ClientQueryAsk
- Filecoin.GasEstimateFeeCap
- Filecoin.GasEstimateGasLimit
- Filecoin.GasEstimateGasPremium
- Filecoin.MpoolGetNonce
- Filecoin.MpoolPending
- Filecoin.MpoolPush
- Filecoin.StateAccountKey
- Filecoin.StateAllMinerFaults
- Filecoin.StateCall
- Filecoin.StateChangedActors
- Filecoin.StateCompute
- Filecoin.StateDealProviderCollateralBounds
- Filecoin.StateDecodeParams
- Filecoin.StateGetActor
- Filecoin.StateGetReceipt
- Filecoin.StateListActors
- Filecoin.StateListMessages
- Filecoin.StateListMiners
- Filecoin.StateLookupID
- Filecoin.StateMarketBalance
- Filecoin.StateMarketDeals
- Filecoin.StateMarketParticipants
- Filecoin.StateMarketStorageDeal
- Filecoin.StateMinerActiveSectors
- Filecoin.StateMinerAvailableBalance
- Filecoin.StateMinerDeadlines
- Filecoin.StateMinerFaults
- Filecoin.StateMinerInfo
- Filecoin.StateMinerInitialPledgeCollateral
- Filecoin.StateMinerPartitions
- Filecoin.StateMinerPower
- Filecoin.StateMinerPreCommitDepositForPower
- Filecoin.StateMinerProvingDeadline
- Filecoin.StateMinerRecoveries
- Filecoin.StateMinerSectorAllocated
- Filecoin.StateMinerSectorCount
- Filecoin.StateMinerSectors
- Filecoin.StateNetworkName
- Filecoin.StateNetworkVersion
- Filecoin.StateReadState
- Filecoin.StateReplay
- Filecoin.StateSearchMsg
- Filecoin.StateSearchMsgLimited
- Filecoin.StateSectorExpiration
- Filecoin.StateSectorGetInfo
- Filecoin.StateSectorPartition
- Filecoin.StateSectorPreCommitInfo
- Filecoin.StateVMCirculatingSupplyInternal
- Filecoin.StateVerifiedClientStatus
- Filecoin.StateVerifiedRegistryRootKey
- Filecoin.StateVerifierStatus
- Filecoin.SyncState
- Filecoin.WalletBalance
- Filecoin.WalletValidateAddress
- Filecoin.WalletVerify
- Filecoin.EthAccounts
- Filecoin.EthBlockNumber
- Filecoin.EthCall
- Filecoin.EthChainId
- Filecoin.EthEstimateGas
- Filecoin.EthFeeHistory
- Filecoin.EthGasPrice
- Filecoin.EthGetBalance
- Filecoin.EthGetBlockByHash
- Filecoin.EthGetBlockByNumber
- Filecoin.EthGetBlockTransactionCountByHash
- Filecoin.EthGetBlockTransactionCountByNumber
- Filecoin.EthGetCode
- Filecoin.EthGetFilterChanges
- Filecoin.EthGetFilterLogs
- Filecoin.EthGetLogs
- Filecoin.EthGetMessageCidByTransactionHash
- Filecoin.EthGetStorageAt
- Filecoin.EthGetTransactionByHash
- Filecoin.EthGetTransactionCount
- Filecoin.EthGetTransactionHashByCid
- Filecoin.EthGetTransactionReceipt
- Filecoin.EthMaxPriorityFeePerGas

</details>

## Starknet 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`STRK`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 jsonrpc            | https://rpc.starknet.lava.build:443 |

</TabItem>
<TabItem value="testnet" label=" Sepolia-Testnet">

`STRKS`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 jsonrpc            | https://rpc.starknet-testnet.lava.build:443 |

</TabItem>
</Tabs>

<br />

#### Supported API methods

<details>
<summary> JSONRPC </summary>

- starknet_blockNumber
- starknet_blockHashAndNumber
- starknet_call
- starknet_chainId
- starknet_estimateFee
- starknet_getBlockTransactionCount
- starknet_getBlockWithTxHashes
- starknet_getBlockWithTxs
- starknet_getClass
- starknet_getClassAt
- starknet_getClassHashAt
- starknet_getEvents
- starknet_getNonce
- starknet_getStateUpdate
- starknet_getStorageAt
- starknet_getTransactionByBlockIdAndIndex
- starknet_getTransactionByHash
- starknet_getTransactionReceipt
- starknet_pendingTransactions
- starknet_syncing

</details>
