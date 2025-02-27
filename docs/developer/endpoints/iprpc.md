---
slug: /iprpc
title: ipRPC 🔥
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use Incentivized Public RPC (ipRPC) Edpoints
TODO: add API endpoints to all of the chains
Note: once endpoints site is available, this page can be updated to automatically pull info from the same jsinfo api source or host info about available API endpoints. 

Public endpoints and available API methods for each supported chain that has incentivized pools.

## Lava 

<Tabs>
  <TabItem value="mainnet" label="Mainnet">

  | Service           | URL                                        |
  |---------------------|---------------------------------------------|
  | 🟢 rest            | https://lava.lava.build:443                 |
  | 🟢 tendermintrpc   | https://lava.tendermintrpc.lava.build:443   |
  | 🟢 tendermintrpc/ws | wss://lava.tendermintrpc.lava.build/websocket |
  | 🟢 grpc            | lava.grpc.lava.build:443                    |

  </TabItem>

  <TabItem value="testnet" label="Testnet">

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

