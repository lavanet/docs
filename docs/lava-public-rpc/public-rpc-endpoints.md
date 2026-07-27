---
slug: /public-rpc-endpoints
title: Lava Public RPC endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lava Public RPC Endpoints
 
Lava Network provides public RPC endpoints for Lava and Starknet. These endpoints are offered as a public good by the underlying blockchains, making it easy for developers to connect and query data without needing to run their own nodes.

- No signup required
- Immediate access
- Standard RPC interfaces

Simply copy an endpoint into your application, script, or wallet configuration and start making requests.


:::note
Need a dedicated endpoint? Check out [Lava RPC API](../lava-rpc-api/public-rpc-api-overview.md).
:::

<br />

## Lava 

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
   
   `LAVA`

  | Service           | URL                                        |
  |---------------------|---------------------------------------------|
  | 🟢 rest            | https://lava.lava.build                 |
  | 🟢 tendermintrpc   | https://lava.tendermintrpc.lava.build:443   |
  | 🟢 tendermintrpc/ws | wss://lava.tendermintrpc.lava.build/websocket |
  | 🟢 grpc            | lava.grpc.lava.build:443                    |

  </TabItem>

  <TabItem value="testnet" label="Testnet">
   
   `LAV1`

  | Service           | URL                                           |
  |---------------------|-----------------------------------------------|
  | 🟢 rest            | https://lav1.lava.build                     |
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
<br />


## Starknet 

<Tabs>
<TabItem value="mainnet" label=" Mainnet">

`STRK`

| Service           | URL                                     |
|---------------------|------------------------------------------|
| 🟢 jsonrpc            | https://rpc.starknet.lava.build    |

</TabItem>
</Tabs>


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
<br />
