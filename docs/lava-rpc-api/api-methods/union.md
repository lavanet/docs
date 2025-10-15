---
id: union
slug: /api-methods/union
title: Union Network APIs (Mainnet & Testnet)
---

# Union API Methods

**Supported Networks**:
- Union Mainnet (`UNION`)
- Union Testnet (`UNIONT`)


**Supported Interfaces**:
- **[REST](#rest)**
- **[gRPC](#grpc)**
- **[TendermintRPC](#tendermintrpc)**

---

## REST

### Feemarket
- `/feemarket/v1/gas_price/{denom}`
- `/feemarket/v1/gas_prices`
- `/feemarket/v1/state`
- `/feemarket/v1/params`

### Cosmos SDK — Auth & Authz
- **Auth:** `/cosmos/auth/v1beta1/account_info/{address}`, `/accounts`, `/accounts/{address}`, `/address_by_id/{id}`, `/bech32`, `/bech32/{address_bytes}`, `/bech32/{address_string}`, `/module_accounts`, `/module_accounts/{name}`, `/params`
- **Authz:** `/cosmos/authz/v1beta1/grants`, `/grants/grantee/{grantee}`, `/grants/granter/{granter}`

### Bank (Balances, Supply, Denoms)
- `/cosmos/bank/v1beta1/balances/{address}`, `/balances/{address}/by_denom`, `/balances/{address}/{denom}`
- `/cosmos/bank/v1beta1/base_denom`
- `/cosmos/bank/v1beta1/denom_owners/{denom}`
- `/cosmos/bank/v1beta1/denoms_metadata`, `/denoms_metadata/{denom}`
- `/cosmos/bank/v1beta1/params`, `/send_enabled`
- `/cosmos/bank/v1beta1/spendable_balances/{address}`, `/spendable_balances/{address}/by_denom`
- `/cosmos/bank/v1beta1/supply`, `/supply/by_denom`, `/supply/{denom}`
- `/cosmos/bank/v1beta1/supply_without_offset`, `/supply_without_offset/{denom}`

### Base / Reflection / Tendermint (Node Info & Introspection)
- `/cosmos/base/node/v1beta1/config`
- `/cosmos/base/reflection/v1beta1/app_descriptor/authn|chain|codec|configuration|query_services|tx_descriptor`
- `/cosmos/base/reflection/v1beta1/interfaces`, `/interfaces/{interface_name}/implementations`
- `/cosmos/base/tendermint/v1beta1/abci_query`
- `/cosmos/base/tendermint/v1beta1/blocks/latest`, `/blocks/{height}`
- `/cosmos/base/tendermint/v1beta1/node_info`, `/syncing`
- `/cosmos/base/tendermint/v1beta1/validatorsets/latest`, `/validatorsets/{height}`

### Consensus
- `/cosmos/consensus/v1/params`

### Distribution (Staking Rewards)
- `/cosmos/distribution/v1beta1/community_pool`
- `/delegators/{delegator_address}/rewards`, `/rewards/{validator_address}`, `/validators`
- `/delegators/{delegator_address}/withdraw_address`
- `/params`
- `/validators/{validator_address}`, `/validators/{validator_address}/commission`, `/outstanding_rewards`, `/slashes`

### Evidence
- `/cosmos/evidence/v1beta1/evidence`, `/evidence/{hash}`

### Feegrant
- `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
- `/allowances/{grantee}`, `/issued/{granter}`

### Governance (v1 & v1beta1)
- **v1:** `/cosmos/gov/v1/params/{params_type}`, `/proposals`, `/proposals/{proposal_id}`, `/deposits`, `/deposits/{depositor}`, `/tally`, `/votes`, `/votes/{voter}`
- **v1beta1:** `/cosmos/gov/v1beta1/params/{params_type}`, `/proposals`, `/proposals/{proposal_id}`, `/deposits`, `/deposits/{depositor}`, `/tally`, `/votes`, `/votes/{voter}`

### Group (DAO)
- `/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}`
- `/proposals/{proposal_id}/tally`
- `/group_policies_by_group/{group_id}`, `/group_policies_by_admin/{admin}`
- `/proposals_by_group_policy/{address}`
- `/votes_by_proposal/{proposal_id}`

### Mint
- `/cosmos/mint/v1beta1/annual_provisions`, `/inflation`, `/params`

### Params
- `/cosmos/params/v1beta1/params`, `/subspaces`

### Slashing
- `/cosmos/slashing/v1beta1/params`
- `/signing_infos`, `/signing_infos/{cons_address}`

### Staking
- `/cosmos/staking/v1beta1/delegations/{delegator_addr}`
- `/delegators/{delegator_addr}/redelegations`, `/unbonding_delegations`
- `/delegators/{delegator_addr}/validators`, `/validators/{validator_addr}`
- `/historical_info/{height}`, `/params`, `/pool`
- `/validators`, `/validators/{validator_addr}/delegations`
- `/validators/{validator_addr}/delegations/{delegator_addr}`
- `/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation`
- `/validators/{validator_addr}/unbonding_delegations`

### Transactions
- `/cosmos/tx/v1beta1/txs`, `/txs/{hash}`, `/txs/block/{height}`
- `/cosmos/tx/v1beta1/decode`, `/encode`, `/encode/amino`, `/simulate`

### Upgrade
- `/cosmos/upgrade/v1beta1/applied_plan/{name}`, `/current_plan`, `/module_versions`
- `/upgraded_consensus_state/{last_height}`, `/authority`

### Node Utility (Legacy)
- `/node_info`, `/syncing`, `/validatorsets/latest`, `/validatorsets/{height}`

### IBC (Apps & Core)
- `/ibc/apps/router/v1/params`
- `/ibc/apps/transfer/v1/channels/{channel_id}/ports/{port_id}/escrow_address`
- `/ibc/apps/transfer/v1/denom_hashes/{trace}`, `/denom_hashes/{trace=**}`
- `/ibc/apps/transfer/v1/denom_traces`, `/denom_traces/{hash}`
- `/ibc/apps/transfer/v1/params`
- `/ibc/apps/interchain_accounts/controller/v1/params`, `/owners/{owner}/connections/{connection_id}`
- `/ibc/apps/interchain_accounts/host/v1/params`
- `/ibc/client/v1/params`
- `/ibc/core/channel/v1/channels`, `/channels/{channel_id}/ports/{port_id}`
- `/client_state`, `/consensus_state/revision/{revision_number}/height/{revision_height}`
- `/next_sequence`, `/next_sequence_send`
- `/packet_acknowledgements`, `/packet_acks/{sequence}`
- `/packet_commitments`, `/packet_commitments/{packet_ack_sequences}/unreceived_acks`
- `/packet_commitments/{packet_commitment_sequences}/unreceived_packets`
- `/packet_commitments/{sequence}`, `/packet_receipts/{sequence}`
- `/ibc/core/connections…` (`/connections`, `/connections/{connection_id}`, `/client_state`, `/consensus_state/revision/{revision_number}/height/{revision_height}`, `/params`)
- `/ibc/core/client…` (`/client_states`, `/client_states/{client_id}`, `/client_status/{client_id}`, `/consensus_states/{client_id}`, `/consensus_states/{client_id}/heights`, `/revision/{revision_number}/height/{revision_height}`, `/upgraded_client_states`, `/upgraded_consensus_states`)
- `/ibc/apps/transfer/v1/denoms/{denom=**}/total_escrow`

---

## gRPC

### Feemarket
- `feemarket.feemarket.v1.Query/GasPrice`
- `feemarket.feemarket.v1.Query/GasPrices`
- `feemarket.feemarket.v1.Query/State`
- `feemarket.feemarket.v1.Query/Params`

### Cosmos SDK — Core Services
- **Auth:** `cosmos.auth.v1beta1.Query/Account`, `/Accounts`, `/ModuleAccountByName`, `/ModuleAccounts`, `/Params`, `/AccountInfo`, `/AccountAddressByID`, `/AddressBytesToString`, `/AddressStringToBytes`, `/Bech32Prefix`
- **Authz:** `cosmos.authz.v1beta1.Query/GranteeGrants`, `/GranterGrants`, `/Grants`
- **Bank:** `cosmos.bank.v1beta1.Query/AllBalances`, `/Balance`, `/BaseDenom`, `/DenomMetadata`, `/DenomsMetadata`, `/Params`, `/SpendableBalances`, `/SpendableBalanceByDenom`, `/SupplyOf`, `/SupplyOfWithoutOffset`, `/TotalSupply`, `/TotalSupplyWithoutOffset`, `/SendEnabled`, `/DenomOwners`
- **Mint:** `cosmos.mint.v1beta1.Query/AnnualProvisions`, `/Inflation`, `/Params`
- **Params:** `cosmos.params.v1beta1.Query/Params`, `/Subspaces`
- **Slashing:** `cosmos.slashing.v1beta1.Query/Params`, `/SigningInfo`, `/SigningInfos`
- **Staking:** `cosmos.staking.v1beta1.Query/*` (Delegation, Delegator* sets, HistoricalInfo, Params, Pool, Redelegations, UnbondingDelegation, Validator*, Validators)
- **Distribution:** `cosmos.distribution.v1beta1.Query/*` (CommunityPool, DelegationRewards/TotalRewards, DelegatorValidators, DelegatorWithdrawAddress, Params, ValidatorCommission/OutstandingRewards/Slashes)
- **Gov v1beta1:** `cosmos.gov.v1beta1.Query/*` (Deposit(s), Deposits, Params, Proposal(s), TallyResult, Vote(s))
- **Gov v1:** `cosmos.gov.v1.Query/*` (Params, Votes, Deposits, Proposal(s), TallyResult, Constitution)
- **Group:** `cosmos.group.v1.Query/*` (Groups, GroupsByMember/Admin, GroupInfo, GroupMembers, GroupPoliciesByGroup/Admin, GroupPolicyInfo, ProposalsByGroupPolicy, Proposal, VotesByProposal/Voter, VoteByProposalVoter, TallyResult)
- **Tx Service:** `cosmos.tx.v1beta1.Service/*` (BroadcastTx, GetBlockWithTxs, GetTx, GetTxsEvent, Simulate, TxEncode/Decode, TxEncodeAmino/TxDecodeAmino)
- **Base / Tendermint:** `cosmos.base.tendermint.v1beta1.Service/*` (GetLatestBlock, GetBlockByHeight, GetLatestValidatorSet, GetNodeInfo, GetSyncing, GetValidatorSetByHeight, ABCIQuery)
- **Base Node:** `cosmos.base.node.v1beta1.Service/Config`
- **Reflection:** `cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations|ListAllInterfaces`
- **Reflection v2alpha1:** `.../GetCodecDescriptor|GetConfigurationDescriptor|GetChainDescriptor|GetTxDescriptor|GetQueryServicesDescriptor|GetAuthnDescriptor`

### IBC (Apps & Core)
- **ICA:** `ibc.applications.interchain_accounts.controller.v1.Query/Params|InterchainAccount`, `...host.v1.Query/Params`
- **Transfer:** `ibc.applications.transfer.v1.Query/DenomHash|DenomTrace|DenomTraces|EscrowAddress|Params|TotalEscrowForDenom`
- **Core Channel:** `ibc.core.channel.v1.Query/*` (Channel, Channels, ChannelClientState, ChannelConsensusState, ConnectionChannels, NextSequenceReceive, Packet* (Ack, Acks, Commitment(s), Receipt), UnreceivedAcks, UnreceivedPackets)
- **Core Client:** `ibc.core.client.v1.Query/*` (ClientParams, ClientState(s), ClientStatus, ConsensusState(s)/Heights, UpgradedClientState, UpgradedConsensusState)
- **Core Connection:** `ibc.core.connection.v1.Query/*` (ClientConnections, Connection(s), ConnectionClientState, ConnectionConsensusState, ConnectionParams)

### Misc
- `router.v1.Query.Params`
- `grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo`

---

## TendermintRPC
- `abci_info`, `abci_query`
- `block`, `block_by_hash`, `block_results`, `block_search`, `blockchain`
- `broadcast_evidence`, `broadcast_tx_async`, `broadcast_tx_commit`, `broadcast_tx_sync`
- `check_tx`, `commit`
- `consensus_params`, `consensus_state`, `dump_consensus_state`
- `genesis`, `genesis_chunked`
- `health`, `status`
- `header`, `header_by_hash`
- `net_info`, `num_unconfirmed_txs`
- `subscribe`, `tx`, `tx_search`, `unconfirmed_txs`
- `unsubscribe`, `unsubscribe_all`
- `validators`
