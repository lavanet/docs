---
slug: /iprpc
title: ipRPC 🔥
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use Incentivized Public RPC (ipRPC) Edpoints
 
Public endpoints and available API methods for each supported chain with incentivized pools.


## Movement
<Tabs>
  <TabItem value="mainnet" label="Mainnet">
   `MOVEMENT`

  | Service           | URL                                        |
  |---------------------|---------------------------------------------|
  | 🟢 rest            | https://movement.lava.build:443                 |

  </TabItem>
</Tabs>

#### Available API methods

<details>
<summary> REST </summary>

- `healthy`
- `accounts/{address}`
- `accounts/{address}/events/{creation_number}`
- `accounts/{address}/events/{event_handle}/{field_name}`
- `accounts/{address}/module/{module_name}`
- `accounts/{address}/modules`
- `accounts/{address}/resource/{resource_type}`
- `accounts/{address}/resources`
- `accounts/{address}/transactions`
- `blocks/by_height/{block_height}`
- `blocks/by_version/{version}`
- `estimate_gas_price`
- `events/{event_key}`
- `spec`
- `transactions/by_hash/{txn_hash}`
- `transactions/wait_by_hash/{txn_hash}`
- `transactions/by_version/{txn_version}`
- `transactions/encode_submission`
- `transactions`


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
| 🟢 rest            | https://near.lava.build:443            |
| 🟢 tendermintrpc   | https://near.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://near.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | near.grpc.lava.build:443                |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`NEART`

| Service           | URL                                        |
|---------------------|---------------------------------------------|
| 🟢 rest            | https://neart.lava.build:443              |
| 🟢 tendermintrpc   | https://neart.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://neart.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | neart.grpc.lava.build:443                 |

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


## Evmos 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`EVMOS`

| Service           | URL                                        |
|---------------------|---------------------------------------------|
| 🟢 rest            | https://evmos.lava.build:443              |
| 🟢 tendermintrpc   | https://evmos.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://evmos.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | evmos.grpc.lava.build:443                 |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`EVMOST`

| Service           | URL                                         |
|---------------------|----------------------------------------------|
| 🟢 rest            | https://evmost.lava.build:443               |
| 🟢 tendermintrpc   | https://evmost.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://evmost.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | evmost.grpc.lava.build:443                 |

</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary> REST </summary>

  - `/evmos/epochs/v1/current_epoch`
  - `/evmos/epochs/v1/epochs`
  - `/evmos/erc20/v1/params`
  - `/evmos/erc20/v1/token_pairs`
  - `/evmos/erc20/v1/token_pairs/{token}`
  - `/evmos/evm/v1/account/{address}`
  - `/evmos/evm/v1/balances/{address}`
  - `/evmos/evm/v1/base_fee`
  - `/evmos/evm/v1/codes/{address}`
  - `/evmos/evm/v1/cosmos_account/{address}`
  - `/evmos/evm/v1/estimate_gas`
  - `/evmos/evm/v1/eth_call`
  - `/evmos/evm/v1/params`
  - `/evmos/evm/v1/storage/{address}/{key}`
  - `/evmos/evm/v1/trace_block`
  - `/evmos/evm/v1/trace_tx`
  - `/evmos/evm/v1/validator_account/{cons_address}`
  - `/evmos/feemarket/v1/base_fee`
  - `/evmos/feemarket/v1/block_gas`
  - `/evmos/feemarket/v1/params`
  - `/evmos/inflation/v1/circulating_supply`
  - `/evmos/inflation/v1/epoch_mint_provision`
  - `/evmos/inflation/v1/inflation_rate`
  - `/evmos/inflation/v1/params`
  - `/evmos/inflation/v1/period`
  - `/evmos/inflation/v1/skipped_epochs`
  - `/evmos/vesting/v2/balances/{address}`
  - `/cosmos/bank/v1beta1/denoms_metadata_by_query_string`
  - `/cosmos/bank/v1beta1/denom_owners_by_query`
  - `/cosmos/base/node/v1beta1/status`
  - `/cosmos/distribution/v1beta1/{owner_address}/tokenize_share_record_rewards`
  - `/cosmos/gov/v1/constitution`
  - `/cosmos/staking/v1beta1/tokenize_share_records`
  - `/cosmos/staking/v1beta1/last_tokenize_share_record_id`
  - `/cosmos/staking/v1beta1/tokenize_share_lock_info/{address}`
  - `/cosmos/staking/v1beta1/tokenize_share_record_by_denom/{denom}`
  - `/cosmos/staking/v1beta1/tokenize_share_record_by_id/{id}`
  - `/cosmos/staking/v1beta1/tokenize_share_record_owned/{owner}`
  - `/cosmos/staking/v1beta1/total_liquid_staked`
  - `/cosmos/staking/v1beta1/total_tokenize_shared_assets`
  - `/ibc/apps/fee/v1/channels/{channel_id}/relayers/{relayer}/counterparty_payee`
  - `/ibc/apps/fee/v1/channels/{channel_id}/ports/{port_id}/fee_enabled`
  - `/ibc/apps/fee/v1/fee_enabled`
  - `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/incentivized_packet`
  - `/ibc/apps/fee/v1/incentivized_packets`
  - `/ibc/apps/fee/v1/channels/{channel_id}/ports/{port_id}/incentivized_packets`
  - `/ibc/apps/fee/v1/channels/{channel_id}/relayers/{relayer}/payee`
  - `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_ack_fees`
  - `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_recv_fees`
  - `/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/total_timeout_fees`
  - `/ibc/apps/transfer/v1/denom_traces/{hash=**}`
  - `/ibc/core/channel/v1/params`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/upgrade`
  - `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/upgrade_error`
  - `/ibc/apps/packetforward/v1/params`
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
  - `/cosmos/bank/v1beta1/denom_owners/{denom}`
  - `/cosmos/bank/v1beta1/denoms_metadata`
  - `/cosmos/bank/v1beta1/denoms_metadata/{denom}`
  - `/cosmos/bank/v1beta1/params`
  - `/cosmos/bank/v1beta1/send_enabled`
  - `/cosmos/bank/v1beta1/spendable_balances/{address}`
  - `/cosmos/bank/v1beta1/spendable_balances/{address}/by_denom`
  - `/cosmos/bank/v1beta1/supply`
  - `/cosmos/bank/v1beta1/supply/by_denom`
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
  - `/cosmos/consensus/v1/params`
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
  - `/cosmos/params/v1beta1/subspaces`
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
  - `/cosmos/upgrade/v1beta1/authority`
  - `/node_info`
  - `/syncing`
  - `/validatorsets/latest`
  - `/validatorsets/{height}`
  - `/cosmos/distribution/v1beta1/validators/{validator_address}`
  - `/ibc/apps/interchain_accounts/controller/v1/params`
  - `/ibc/apps/interchain_accounts/host/v1/params`
  - `/ibc/apps/transfer/v1/channels/{channel_id}/ports/{port_id}/escrow_address`
  - `/ibc/apps/transfer/v1/denom_traces`
  - `/ibc/apps/transfer/v1/params`
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
  - `/ibc/apps/transfer/v1/denom_hashes/{trace=**}`
  - `/ibc/apps/interchain_accounts/controller/v1/owners/{owner}/connections/{connection_id}`
  - `/ibc/apps/transfer/v1/denoms/{denom=**}/total_escrow`
  - `/ethermint/evm/v1/account/{address}`
  - `/ethermint/evm/v1/balances/{address}`
  - `/ethermint/evm/v1/base_fee`
  - `/ethermint/evm/v1/codes/{address}`
  - `/ethermint/evm/v1/cosmos_account/{address}`
  - `/ethermint/evm/v1/estimate_gas`
  - `/ethermint/evm/v1/eth_call`
  - `/ethermint/evm/v1/params`
  - `/ethermint/evm/v1/storage/{address}/{key}`
  - `/ethermint/evm/v1/trace_block`
  - `/ethermint/evm/v1/trace_tx`
  - `/ethermint/evm/v1/validator_account/{cons_address}`
  - `/ethermint/evm/v1/virtual_frontier_bank_contract/by_denom/{min_denom}`
  - `/ethermint/evm/v1/virtual_frontier_bank_contracts`
  - `/ethermint/evm/v1/virtual_frontier_contracts`
  - `/ethermint/evm/v1/virtual_frontier_contracts/{address}`
  - `/ethermint/feemarket/v1/base_fee`
  - `/ethermint/feemarket/v1/block_gas`
  - `/ethermint/feemarket/v1/params`

</details>


<details>
<summary> gRPC </summary>
  - evmos.epochs.v1.Query/CurrentEpoch
  - evmos.epochs.v1.Query/EpochInfos
  - evmos.erc20.v1.Query/Params
  - evmos.erc20.v1.Query/TokenPair
  - evmos.erc20.v1.Query/TokenPairs
  - evmos.inflation.v1.Query/CirculatingSupply
  - evmos.inflation.v1.Query/EpochMintProvision
  - evmos.inflation.v1.Query/InflationRate
  - evmos.inflation.v1.Query/Params
  - evmos.inflation.v1.Query/Period
  - evmos.inflation.v1.Query/SkippedEpochs
  - evmos.vesting.v2.Query/Balances
  - cosmos.autocli.v1.Query/AppOptions
  - cosmos.bank.v1beta1.Query/DenomMetadataByQueryString
  - cosmos.bank.v1beta1.Query/DenomOwnersByQuery
  - cosmos.base.node.v1beta1.Service/Status
  - cosmos.consensus.v1.Query/Params
  - cosmos.distribution.v1beta1.Query/TokenizeShareRecordReward
  - cosmos.gov.v1.Query/Constitution
  - cosmos.reflection.v1.ReflectionService/FileDescriptors
  - cosmos.staking.v1beta1.Query/AllTokenizeShareRecords
  - cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId
  - cosmos.staking.v1beta1.Query/TokenizeShareLockInfo
  - cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom
  - cosmos.staking.v1beta1.Query/TokenizeShareRecordById
  - cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned
  - cosmos.staking.v1beta1.Query/TotalLiquidStaked
  - cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets
  - ibc.applications.fee.v1.Query/CounterpartyPayee
  - ibc.applications.fee.v1.Query/FeeEnabledChannel
  - ibc.applications.fee.v1.Query/FeeEnabledChannels
  - ibc.applications.fee.v1.Query/IncentivizedPacket
  - ibc.applications.fee.v1.Query/IncentivizedPackets
  - ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel
  - ibc.applications.fee.v1.Query/Payee
  - ibc.applications.fee.v1.Query/TotalAckFees
  - ibc.applications.fee.v1.Query/TotalRecvFees
  - ibc.applications.fee.v1.Query/TotalTimeoutFees
  - ibc.core.channel.v1.Query/ChannelParams
  - ibc.core.channel.v1.Query/NextSequenceSend
  - ibc.core.channel.v1.Query/Upgrade
  - ibc.core.channel.v1.Query/UpgradeError
  - ibc.core.client.v1.Query/VerifyMembership
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
  - cosmos.bank.v1beta1.Query/DenomMetadata
  - cosmos.bank.v1beta1.Query/DenomsMetadata
  - cosmos.bank.v1beta1.Query/Params
  - cosmos.bank.v1beta1.Query/SpendableBalances
  - cosmos.bank.v1beta1.Query/SupplyOf
  - cosmos.bank.v1beta1.Query/TotalSupply
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
  - cosmos.base.node.v1beta1.Service/Config
  - cosmos.upgrade.v1beta1.Query/UpgradedConsensusState
  - router.v1.Query.Params
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor
  - cosmos.gov.v1.Query/Votes
  - cosmos.params.v1beta1.Query/Subspaces
  - cosmos.bank.v1beta1.Query/SendEnabled
  - cosmos.upgrade.v1beta1.Query/Authority
  - cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations
  - cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces
  - cosmos.gov.v1.Query/Params
  - cosmos.base.tendermint.v1beta1.Service/ABCIQuery
  - cosmos.bank.v1beta1.Query/SpendableBalanceByDenom
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor
  - cosmos.gov.v1.Query/Deposit
  - cosmos.distribution.v1beta1.Query/ValidatorDistributionInfo
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor
  - cosmos.tx.v1beta1.Service/TxDecodeAmino
  - cosmos.gov.v1.Query/TallyResult
  - cosmos.gov.v1.Query/Deposits
  - cosmos.bank.v1beta1.Query/DenomOwners
  - cosmos.tx.v1beta1.Service/TxDecode
  - cosmos.tx.v1beta1.Service/TxEncodeAmino
  - cosmos.tx.v1beta1.Service/TxEncode
  - cosmos.auth.v1beta1.Query/AddressBytesToString
  - cosmos.gov.v1.Query/Proposal
  - cosmos.gov.v1.Query/Vote
  - cosmos.auth.v1beta1.Query/Bech32Prefix
  - cosmos.auth.v1beta1.Query/AddressStringToBytes
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor
  - cosmos.gov.v1.Query/Proposals
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor
  - cosmos.auth.v1beta1.Query/AccountInfo
  - cosmos.auth.v1beta1.Query/AccountAddressByID
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
  - ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount
  - ibc.applications.transfer.v1.Query/TotalEscrowForDenom
  - ibc.core.connection.v1.Query/ConnectionParams
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
  - ethermint.evm.v1.Query/ListVirtualFrontierBankContracts
  - ethermint.evm.v1.Query/ListVirtualFrontierContracts
  - ethermint.evm.v1.Query/VirtualFrontierBankContractByDenom
  - ethermint.evm.v1.Query/VirtualFrontierContractByAddress
  - ethermint.feemarket.v1.Query/BaseFee
  - ethermint.feemarket.v1.Query/BlockGas
  - ethermint.feemarket.v1.Query/Params

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
  - header
  - header_by_hash

</details>

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
| 🟢 rest            | https://arbitrum.lava.build:443              |
| 🟢 tendermintrpc   | https://arbitrum.tendermintrpc.lava.build:443|
| 🟢 tendermintrpc/ws | wss://arbitrum.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | arbitrum.grpc.lava.build:443                 |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`ARBN`

| Service           | URL                                           |
|---------------------|-----------------------------------------------|
| 🟢 rest            |https://arbn.lava.build:443                  |
| 🟢 tendermintrpc   | https://arbn.tendermintrpc.lava.build:443     |
| 🟢 tendermintrpc/ws | wss://arbn.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | arbn.grpc.lava.build:443                      |

</TabItem>
<TabItem value="sepolia-testnet" label=" Sepolia-Testnet">

`ARBS`

| Service           | URL                                               |
|---------------------|----------------------------------------------------|
| 🟢 rest            | https://arbitrums.lava.build:443                |
| 🟢 tendermintrpc   | https://arbitrums.tendermintrpc.lava.build:443     |
| 🟢 tendermintrpc/ws | wss://arbitrums.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | arbitrums.grpc.lava.build:443                      |

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

## Blast 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`BLAST`

| Service           | URL                                       |
|---------------------|--------------------------------------------|
| 🟢 rest            | https://blast.lava.build:443             |
| 🟢 tendermintrpc   | https://blast.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://blast.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | blast.grpc.lava.build:443                 |

</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary>JSONRPC</summary>
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

</details>


## Optimism 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`OPTM`

| Service           | URL                                           |
|---------------------|------------------------------------------------|
| 🟢 rest            | https://optimism.lava.build:443             |
| 🟢 tendermintrpc   | https://optimism.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://optimism.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | optimism.grpc.lava.build:443                 |

</TabItem>
</Tabs>
<br />


#### Supported API methods

<details>
<summary> JSONRPC </summary>

- eth_getAccounts
- eth_getBlockRange
- eth_sendTransaction
- rollup_gasPrices
- rollup_getInfo

</details>



## Polygon 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`POLYGON`

| Service           | URL                                          |
|---------------------|-----------------------------------------------|
| 🟢 rest            | https://polygon.lava.build:443               |
| 🟢 tendermintrpc   | https://polygon.tendermintrpc.lava.build:443 |
| 🟢 tendermintrpc/ws | wss://polygon.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | polygon.grpc.lava.build:443                 |
</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary> JSONRPC </summary>
  - bor_getAuthor
  - bor_getCurrentProposer
  - bor_getCurrentValidators
  - bor_getRootHash
  - bor_getSignersAtHash
  - qn_getBlockWithReceipts
  - qn_getReceipts
  - txpool_content
  - txpool_inspect
  - txpool_status
  - erigon_blockNumber
  - erigon_forks
  - erigon_getBlockByTimestamp
  - erigon_getBlockReceiptsByBlockHash
  - erigon_getHeaderByHash
  - erigon_getHeaderByNumber
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

</details>


## Solana 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`SOLANA`

| Service           | URL                                            |
|---------------------|-------------------------------------------------|
| 🟢 rest            | https://solana.lava.build:443                   |
| 🟢 tendermintrpc   | https://solana.tendermintrpc.lava.build:443     |
| 🟢 tendermintrpc/ws | wss://solana.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | solana.grpc.lava.build:443                      |
</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary> JSONRPC </summary>

- getAccountInfo
- getBalance
- getBlock
- getBlockHeight
- getBlockProduction
- getBlockCommitment
- getBlocks
- getBlocksWithLimit
- getBlockTime
- getClusterNodes
- getEpochInfo
- getEpochSchedule
- getFeeForMessage
- getFirstAvailableBlock
- getGenesisHash
- getHealth
- getHighestSnapshotSlot
- getIdentity
- getInflationGovernor
- getInflationRate
- getInflationReward
- getLargestAccounts
- getLatestBlockhash
- getLeaderSchedule
- getMaxRetransmitSlot
- getMinimumBalanceForRentExemption
- getMultipleAccounts
- getProgramAccounts
- getRecentPerformanceSamples
- getRecentPrioritizationFees
- getSignaturesForAddress
- getSignatureStatuses
- getSlot
- getSlotLeader
- getSlotLeaders
- getStakeActivation
- getStakeMinimumDelegation
- getSupply
- getTokenAccountBalance
- getTokenAccountsByDelegate
- getTokenAccountsByOwner
- getTokenLargestAccounts
- getTokenSupply
- getTransaction
- getTransactionCount
- getVersion
- getVoteAccounts
- isBlockhashValid
- minimumLedgerSlot
- requestAirdrop
- sendTransaction
- simulateTransaction
- getConfirmedBlock
- getConfirmedBlocks
- getConfirmedBlocksWithLimit
- getConfirmedSignaturesForAddress2
- getConfirmedTransaction
- getFeeCalculatorForBlockhash
- getFeeRateGovernor
- getFees
- getRecentBlockhash
- getSnapshotSlot

</details>

## Filecoin 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`FVM`

| Service           | URL                                            |
|---------------------|-------------------------------------------------|
| 🟢 rest            | https://filecoin.lava.build:443             |
| 🟢 tendermintrpc   | https://filecoin.tendermintrpc.lava.build:443  |
| 🟢 tendermintrpc/ws | wss://filecoin.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | filecoin.grpc.lava.build:443                   |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`FVMT`

| Service           | URL                                                    |
|---------------------|---------------------------------------------------------|
| 🟢 rest            | https://filecoin-testnet.lava.build:443                |
| 🟢 tendermintrpc   | https://filecoin-testnet.tendermintrpc.lava.build:443   |
| 🟢 tendermintrpc/ws | wss://filecoin-testnet.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | filecoin-testnet.grpc.lava.build:443                    |

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
| 🟢 rest            | https://rpc.starknet.lava.build:443 |

</TabItem>
<TabItem value="testnet" label=" Sepolia-Testnet">

`STRKS`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 rest            | https://rpc.starknet-testnet.lava.build:443 |

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


## Aptos 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`APT1`

| Service           | URL                                           |
|---------------------|-----------------------------------------------|
| 🟢 rest            | https://apt1.lava.build:443                   |
| 🟢 tendermintrpc   | https://apt1.tendermintrpc.lava.build:443     |
| 🟢 tendermintrpc/ws | wss://apt1.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | apt1.grpc.lava.build:443                      |
</TabItem>
</Tabs>
<br />


<br />

#### Supported API methods

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
  - `/transactions/by_version/{txn_version}`
  - `/transactions/encode_submission`
  - `/transactions`

</details>

## Ethereum 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`ETH1`

| Service           | URL                                 |
|---------------------|--------------------------------------|
| 🟢 rest            | https://eth1.jsonrpc.lava.build:443 |
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

## Osmosis 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`OSMO`

| Service           | URL                                            |
|---------------------|-------------------------------------------------|
| 🟢 rest            | https://osmosis.rest.lava.build:443            |
| 🟢 tendermintrpc   | https://osmosis.tendermintrpc.lava.build:443    |
| 🟢 tendermintrpc/ws |wss://osmosis.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | https://osmosis.grpc.lava.build:443                   |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`OSMOT`

| Service          | URL                                             |
|---------------------|--------------------------------------------------|
| 🟢 rest            | https://osmosist.rest.lava.build:443           |
| 🟢 tendermintrpc   | https://osmosist.tendermintrpc.lava.build:443    |
| 🟢 tendermintrpc/ws | wss://osmosist.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | ttps://osmosist.grpc.lava.build:443                   |

</TabItem>
</Tabs>
<br />

#### Supported API methods

<details>
<summary> REST </summary>

  - `/osmosis/epochs/v1beta1/current_epoch`
  - `/osmosis/epochs/v1beta1/epochs`
  - `/osmosis/gamm/v1beta1/num_pools`
  - `/osmosis/gamm/v1beta1/pool_type/{pool_id}`
  - `/osmosis/gamm/v1beta1/pools`
  - `/osmosis/gamm/v1beta1/pools/{pool_id}`
  - `/osmosis/gamm/v1beta1/pools/{pool_id}/params`
  - `/osmosis/gamm/v1beta1/pools/{pool_id}/prices`
  - `/osmosis/gamm/v1beta1/pools/{pool_id}/total_pool_liquidity`
  - `/osmosis/gamm/v1beta1/pools/{pool_id}/total_shares`
  - `/osmosis/gamm/v1beta1/total_liquidity`
  - `/osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in`
  - `/osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_out`
  - `/osmosis/incentives/v1beta1/active_gauges`
  - `/osmosis/incentives/v1beta1/active_gauges_per_denom`
  - `/osmosis/incentives/v1beta1/gauge_by_id/{id}`
  - `/osmosis/incentives/v1beta1/gauges`
  - `/osmosis/incentives/v1beta1/lockable_durations`
  - `/osmosis/incentives/v1beta1/module_distributed_coins`
  - `/osmosis/incentives/v1beta1/module_to_distribute_coins`
  - `/osmosis/incentives/v1beta1/rewards_est/{owner}`
  - `/osmosis/incentives/v1beta1/upcoming_gauges`
  - `/osmosis/incentives/v1beta1/upcoming_gauges_per_denom`
  - `/osmosis/lockup/v1beta1/account_locked_coins/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_duration/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_longer_duration/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_pasttime/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_pasttime_denom/{owner}`
  - `/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/{owner}`
  - `/osmosis/lockup/v1beta1/account_unlockable_coins/{owner}`
  - `/osmosis/lockup/v1beta1/account_unlocked_before_time/{owner}`
  - `/osmosis/lockup/v1beta1/account_unlocking_coins/{owner}`
  - `/osmosis/lockup/v1beta1/locked_by_id/{lock_id}`
  - `/osmosis/lockup/v1beta1/locked_denom`
  - `/osmosis/lockup/v1beta1/module_balance`
  - `/osmosis/lockup/v1beta1/module_locked_amount`
  - `/osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/{lock_id}`
  - `/osmosis/mint/v1beta1/epoch_provisions`
  - `/osmosis/mint/v1beta1/params`
  - `/osmosis/pool-incentives/v1beta1/distr_info`
  - `/osmosis/pool-incentives/v1beta1/external_incentive_gauges`
  - `/osmosis/pool-incentives/v1beta1/gauge-ids/{pool_id}`
  - `/osmosis/pool-incentives/v1beta1/incentivized_pools`
  - `/osmosis/pool-incentives/v1beta1/lockable_durations`
  - `/osmosis/pool-incentives/v1beta1/params`
  - `/osmosis/superfluid/v1beta1/all_assets`
  - `/osmosis/superfluid/v1beta1/all_intermediary_accounts`
  - `/osmosis/superfluid/v1beta1/all_superfluid_delegations`
  - `/osmosis/superfluid/v1beta1/asset_multiplier`
  - `/osmosis/superfluid/v1beta1/asset_type`
  - `/osmosis/superfluid/v1beta1/connected_intermediary_account/{lock_id}`
  - `/osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`
  - `/osmosis/superfluid/v1beta1/params`
  - `/osmosis/superfluid/v1beta1/superfluid_delegation_amount`
  - `/osmosis/superfluid/v1beta1/superfluid_delegations/{delegator_address}`
  - `/osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`
  - `/osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/{delegator_address}`
  - `/osmosis/superfluid/v1beta1/total_delegation_by_delegator/{delegator_address}`
  - `/osmosis/tokenfactory/v1beta1/denoms/{denom}/authority_metadata`
  - `/osmosis/tokenfactory/v1beta1/denoms_from_creator/{creator}`
  - `/osmosis/tokenfactory/v1beta1/params`
  - `/osmosis/twap/v1beta1/ArithmeticTwap`
  - `/osmosis/twap/v1beta1/ArithmeticTwapToNow`
  - `/osmosis/twap/v1beta1/Params`
  - `/osmosis/txfees/v1beta1/base_denom`
  - `/osmosis/txfees/v1beta1/denom_pool_id/{denom}`
  - `/osmosis/txfees/v1beta1/fee_tokens`
  - `/osmosis/txfees/v1beta1/spot_price_by_denom`
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
  - `/cosmwasm/wasm/v1/code`
  - `/cosmwasm/wasm/v1/code/{code_id}`
  - `/cosmwasm/wasm/v1/code/{code_id}/contracts`
  - `/cosmwasm/wasm/v1/codes/params`
  - `/cosmwasm/wasm/v1/codes/pinned`
  - `/cosmwasm/wasm/v1/contract/{address}`
  - `/cosmwasm/wasm/v1/contract/{address}/history`
  - `/cosmwasm/wasm/v1/contract/{address}/raw/{query_data}`
  - `/cosmwasm/wasm/v1/contract/{address}/smart/{query_data}`
  - `/cosmwasm/wasm/v1/contract/{address}/state`
  - `/cosmos/consensus/v1/params`
  - `/cosmos/params/v1beta1/subspaces`
  - `/cosmos/upgrade/v1beta1/authority`
  - `/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}`
  - `/cosmos/group/v1/proposals/{proposal_id}/tally`
  - `/cosmos/group/v1/group_policies_by_group/{group_id}`
  - `/cosmos/group/v1/proposals_by_group_policy/{address}`
  - `/cosmos/group/v1/votes_by_proposal/{proposal_id}`
  - `/cosmos/group/v1/group_policies_by_admin/{admin}`
  - `/cosmos/distribution/v1beta1/validators/{validator_address}`
  - `/ibc/apps/transfer/v1/denom_hashes/{trace=**}`
  - `/ibc/apps/interchain_accounts/controller/v1/owners/{owner}/connections/{connection_id}`
  - `/ibc/apps/transfer/v1/denoms/{denom=**}/total_escrow`
  - `/cosmwasm/wasm/v1/contracts/creator/{creator_address}`
  - `/cosmwasm/wasm/v1/contract/build_address`

</details>



<details>
<summary> gRPC </summary>

  - osmosis.epochs.v1beta1.Query/CurrentEpoch
  - osmosis.epochs.v1beta1.Query/EpochInfos
  - osmosis.gamm.v1beta1.Query/EstimateSwapExactAmountIn
  - osmosis.gamm.v1beta1.Query/EstimateSwapExactAmountOut
  - osmosis.gamm.v1beta1.Query/NumPools
  - osmosis.gamm.v1beta1.Query/Pool
  - osmosis.gamm.v1beta1.Query/PoolParams
  - osmosis.gamm.v1beta1.Query/PoolType
  - osmosis.gamm.v1beta1.Query/Pools
  - osmosis.gamm.v1beta1.Query/SpotPrice
  - osmosis.gamm.v1beta1.Query/TotalLiquidity
  - osmosis.gamm.v1beta1.Query/TotalPoolLiquidity
  - osmosis.gamm.v1beta1.Query/TotalShares
  - osmosis.incentives.Query/ActiveGauges
  - osmosis.incentives.Query/ActiveGaugesPerDenom
  - osmosis.incentives.Query/GaugeByID
  - osmosis.incentives.Query/Gauges
  - osmosis.incentives.Query/LockableDurations
  - osmosis.incentives.Query/ModuleDistributedCoins
  - osmosis.incentives.Query/ModuleToDistributeCoins
  - osmosis.incentives.Query/RewardsEst
  - osmosis.incentives.Query/UpcomingGauges
  - osmosis.incentives.Query/UpcomingGaugesPerDenom
  - osmosis.lockup.Query/AccountLockedCoins
  - osmosis.lockup.Query/AccountLockedDuration
  - osmosis.lockup.Query/AccountLockedLongerDuration
  - osmosis.lockup.Query/AccountLockedLongerDurationDenom
  - osmosis.lockup.Query/AccountLockedLongerDurationNotUnlockingOnly
  - osmosis.lockup.Query/AccountLockedPastTime
  - osmosis.lockup.Query/AccountLockedPastTimeDenom
  - osmosis.lockup.Query/AccountLockedPastTimeNotUnlockingOnly
  - osmosis.lockup.Query/AccountUnlockableCoins
  - osmosis.lockup.Query/AccountUnlockedBeforeTime
  - osmosis.lockup.Query/AccountUnlockingCoins
  - osmosis.lockup.Query/LockedByID
  - osmosis.lockup.Query/LockedDenom
  - osmosis.lockup.Query/ModuleBalance
  - osmosis.lockup.Query/ModuleLockedAmount
  - osmosis.lockup.Query/SyntheticLockupsByLockupID
  - osmosis.mint.v1beta1.Query/EpochProvisions
  - osmosis.mint.v1beta1.Query/Params
  - osmosis.poolincentives.v1beta1.Query/DistrInfo
  - osmosis.poolincentives.v1beta1.Query/ExternalIncentiveGauges
  - osmosis.poolincentives.v1beta1.Query/GaugeIds
  - osmosis.poolincentives.v1beta1.Query/IncentivizedPools
  - osmosis.poolincentives.v1beta1.Query/LockableDurations
  - osmosis.poolincentives.v1beta1.Query/Params
  - osmosis.superfluid.Query/AllAssets
  - osmosis.superfluid.Query/AllIntermediaryAccounts
  - osmosis.superfluid.Query/AssetMultiplier
  - osmosis.superfluid.Query/AssetType
  - osmosis.superfluid.Query/ConnectedIntermediaryAccount
  - osmosis.superfluid.Query/EstimateSuperfluidDelegatedAmountByValidatorDenom
  - osmosis.superfluid.Query/Params
  - osmosis.superfluid.Query/SuperfluidDelegationAmount
  - osmosis.superfluid.Query/SuperfluidDelegationsByDelegator
  - osmosis.superfluid.Query/SuperfluidDelegationsByValidatorDenom
  - osmosis.superfluid.Query/SuperfluidUndelegationsByDelegator
  - osmosis.superfluid.Query/TotalDelegationByDelegator
  - osmosis.superfluid.Query/TotalDelegationByValidatorForDenom
  - osmosis.superfluid.Query/TotalSuperfluidDelegations
  - osmosis.tokenfactory.v1beta1.Query/DenomAuthorityMetadata
  - osmosis.tokenfactory.v1beta1.Query/DenomsFromCreator
  - osmosis.tokenfactory.v1beta1.Query/Params
  - osmosis.twap.v1beta1.Query/ArithmeticTwap
  - osmosis.twap.v1beta1.Query/ArithmeticTwapToNow
  - osmosis.twap.v1beta1.Query/Params
  - osmosis.txfees.v1beta1.Query/BaseDenom
  - osmosis.txfees.v1beta1.Query/DenomPoolId
  - osmosis.txfees.v1beta1.Query/DenomSpotPrice
  - osmosis.txfees.v1beta1.Query/FeeTokens
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
  - cosmwasm.wasm.v1.Query/AllContractState
  - cosmwasm.wasm.v1.Query/Code
  - cosmwasm.wasm.v1.Query/Codes
  - cosmwasm.wasm.v1.Query/ContractHistory
  - cosmwasm.wasm.v1.Query/ContractInfo
  - cosmwasm.wasm.v1.Query/ContractsByCode
  - cosmwasm.wasm.v1.Query/Params
  - cosmwasm.wasm.v1.Query/PinnedCodes
  - cosmwasm.wasm.v1.Query/RawContractState
  - cosmwasm.wasm.v1.Query/SmartContractState
  - cosmos.base.node.v1beta1.Service/Config
  - cosmos.group.v1.Query/GroupsByAdmin
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor
  - cosmos.gov.v1.Query/Votes
  - cosmos.params.v1beta1.Query/Subspaces
  - cosmos.bank.v1beta1.Query/SendEnabled
  - cosmos.upgrade.v1beta1.Query/Authority
  - cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations
  - cosmos.group.v1.Query/GroupPolicyInfo
  - cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces
  - cosmos.group.v1.Query/GroupInfo
  - cosmos.gov.v1.Query/Params
  - cosmos.base.tendermint.v1beta1.Service/ABCIQuery
  - cosmos.bank.v1beta1.Query/SpendableBalanceByDenom
  - cosmos.group.v1.Query/VoteByProposalVoter
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor
  - cosmos.gov.v1.Query/Deposit
  - cosmos.distribution.v1beta1.Query/ValidatorDistributionInfo
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor
  - cosmos.group.v1.Query/TallyResult
  - cosmos.tx.v1beta1.Service/TxDecodeAmino
  - cosmos.gov.v1.Query/TallyResult
  - cosmos.group.v1.Query/ProposalsByGroupPolicy
  - cosmos.gov.v1.Query/Deposits
  - cosmos.group.v1.Query/VotesByVoter
  - cosmos.group.v1.Query/VotesByProposal
  - cosmos.bank.v1beta1.Query/DenomOwners
  - cosmos.group.v1.Query/GroupsByMember
  - cosmos.tx.v1beta1.Service/TxDecode
  - cosmos.tx.v1beta1.Service/TxEncodeAmino
  - cosmos.group.v1.Query/Proposal
  - cosmos.tx.v1beta1.Service/TxEncode
  - cosmos.group.v1.Query/Groups
  - cosmos.auth.v1beta1.Query/AddressBytesToString
  - cosmos.group.v1.Query/GroupMembers
  - cosmos.gov.v1.Query/Proposal
  - cosmos.gov.v1.Query/Vote
  - cosmos.auth.v1beta1.Query/Bech32Prefix
  - cosmos.auth.v1beta1.Query/AddressStringToBytes
  - cosmos.group.v1.Query/GroupPoliciesByGroup
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor
  - cosmos.gov.v1.Query/Proposals
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor
  - cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor
  - cosmos.group.v1.Query/GroupPoliciesByAdmin
  - cosmos.auth.v1beta1.Query/AccountInfo
  - cosmos.auth.v1beta1.Query/AccountAddressByID
  - ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount
  - ibc.applications.transfer.v1.Query/TotalEscrowForDenom
  - ibc.core.connection.v1.Query/ConnectionParams
  - cosmwasm.wasm.v1.Query/BuildAddress
  - cosmwasm.wasm.v1.Query/ContractsByCreator

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
  - header
  - header_by_hash

</details>

## Celestia 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`TIA`

| Service           | URL                                             |
|---------------------|--------------------------------------------------|
| 🟢 rest            | https://celestia.rest.lava.build:443            |
| 🟢 tendermintrpc   | https://celestia.tendermintrpc.lava.build:443   |
| 🟢 tendermintrpc/ws | wss://celestia.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | https://celestia.grpc.lava.build:443                    |

</TabItem>
<TabItem value="testnet" label=" Testnet">

`TIAT`

| Service           | URL                                             |
|---------------------|--------------------------------------------------|
| 🟢 rest            | https://celestiatm.rest.lava.build:443          |
| 🟢 tendermintrpc   | https://celestiatm.tendermintrpc.lava.build:443  |
| 🟢 tendermintrpc/ws | wss://celestiatm.tendermintrpc.lava.build/websocket |
| 🟢 grpc            | https://celestiatm.grpc.lava.build:443                  |

</TabItem>
</Tabs>
<br />

## Base 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`BASE`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 rest            | https://base.jsonrpc.lava.build:443     |

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
- debug_getBadBlocks
- debug_getRawBlock
- debug_getRawHeader
- debug_getRawReceipts
- debug_getRawTransaction
- debug_storageRangeAt
- debug_traceBlock
- debug_traceBlockByHash
- debug_traceBlockByNumber
- debug_traceCall
- debug_traceTransaction

</details>

## Avalanche 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`AVAX`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 rest            | https://avax.jsonrpc.lava.build:443     |

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

</details>

## BNB Smart Chain

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`BSC`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 rest            | https://bsc.jsonrpc.lava.build:443      |

</TabItem>
</Tabs>
<br />

#### Supported APIs

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


</details>