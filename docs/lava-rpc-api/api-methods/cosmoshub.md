---
id: cosmoshub
slug: /api-methods/cosmoshub
title: Cosmos Hub APIs (Mainnet & Testnet)
---

# CosmosHub API Methods

**Supported Networks**:
- CosmosHub Mainnet (`COSMOSHUB`)
- CosmosHub Testnet (`COSMOSHUBT`)

**Supported Interfaces**:
- **[REST](#rest)**
- **[gRPC](#grpc)**
- **[TendermintRPC](#tendermintrpc)**

---

## REST

### FeeMarket
- `/feemarket/v1/gas_price/{denom}`
- `/feemarket/v1/gas_prices`
- `/feemarket/v1/params`
- `/feemarket/v1/state`

### Interchain Security (CCV Provider)
- `/interchain_security/ccv/provider/consumer_chain_id`
- `/interchain_security/ccv/provider/opted_in_validators/{chain_id}`
- `/interchain_security/ccv/provider/consumer_chain_start_proposals`
- `/interchain_security/ccv/provider/consumer_chain_stop_proposals`
- `/interchain_security/ccv/provider/consumer_chains`
- `/interchain_security/ccv/provider/consumer_chains_per_validator/{provider_address}`
- `/interchain_security/ccv/provider/consumer_genesis/{chain_id}`
- `/interchain_security/ccv/provider/consumer_validators/{chain_id}`
- `/interchain_security/ccv/provider/oldest_unconfirmed_vsc/{chain_id}`
- `/interchain_security/ccv/provider/params`
- `/interchain_security/ccv/provider/proposed_consumer_chains`
- `/interchain_security/ccv/provider/registered_consumer_reward_denoms`
- `/interchain_security/ccv/provider/throttle_state`
- `/interchain_security/ccv/provider/validator_consumer_addr`
- `/interchain_security/ccv/provider/consumer_commission_rate/{chain_id}/{provider_address}`
- `/interchain_security/ccv/provider/validator_provider_addr`

### IBC Rate Limiting (Stride-Labs)
- `/Stride-Labs/ibc-rate-limiting/ratelimit/blacklisted_denoms`
- `/Stride-Labs/ibc-rate-limiting/ratelimit/ratelimits`
- `/Stride-Labs/ibc-rate-limiting/ratelimit/whitelisted_addresses`
- `/Stride-Labs/ibc-rate-limiting/ratelimit/ratelimit/{channel_id}/by_denom`
- `/Stride-Labs/ibc-rate-limiting/ratelimit/ratelimits/{chain_id}`
- `/Stride-Labs/ibc-rate-limiting/ratelimit/ratelimits/{channel_id}`

### Bank (extras)
- `/cosmos/bank/v1beta1/denoms_metadata_by_query_string`
- `/cosmos/bank/v1beta1/denom_owners_by_query`

### Base Node & Health
- `/cosmos/base/node/v1beta1/status`
- `/node_info`
- `/syncing`

### Governance (Constitution)
- `/cosmos/gov/v1/constitution`

### Staking (Tokenized Shares)
- `/cosmos/staking/v1beta1/tokenize_share_records`
- `/cosmos/staking/v1beta1/last_tokenize_share_record_id`
- `/cosmos/staking/v1beta1/tokenize_share_lock_info/{address}`
- `/cosmos/staking/v1beta1/tokenize_share_record_by_denom/{denom}`
- `/cosmos/staking/v1beta1/tokenize_share_record_by_id/{id}`
- `/cosmos/staking/v1beta1/tokenize_share_record_owned/{owner}`
- `/cosmos/staking/v1beta1/total_liquid_staked`
- `/cosmos/staking/v1beta1/total_tokenize_shared_assets`

### IBC Fee
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

### IBC Transfer, Channel & Packet Forwarding
- `/ibc/apps/transfer/v1/denom_traces/{hash=**}`
- `/ibc/core/channel/v1/params`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/upgrade`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/upgrade_error`
- `/ibc/apps/packetforward/v1/params`

### Cosmos SDK — Auth & Authz
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

### Cosmos SDK — Bank
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

### Base Reflection / Tendermint
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

### Consensus
- `/cosmos/consensus/v1/params`

### Distribution
- `/cosmos/distribution/v1beta1/community_pool`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
- `/cosmos/distribution/v1beta1/params`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`
- `/cosmos/distribution/v1beta1/validators/{validator_address}`

### Evidence
- `/cosmos/evidence/v1beta1/evidence`
- `/cosmos/evidence/v1beta1/evidence/{hash}`

### Feegrant
- `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
- `/cosmos/feegrant/v1beta1/allowances/{grantee}`
- `/cosmos/feegrant/v1beta1/issued/{granter}`

### Governance (v1 & v1beta1)
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

### Mint
- `/cosmos/mint/v1beta1/annual_provisions`
- `/cosmos/mint/v1beta1/inflation`
- `/cosmos/mint/v1beta1/params`

### Params
- `/cosmos/params/v1beta1/params`
- `/cosmos/params/v1beta1/subspaces`

### Slashing
- `/cosmos/slashing/v1beta1/params`
- `/cosmos/slashing/v1beta1/signing_infos`
- `/cosmos/slashing/v1beta1/signing_infos/{cons_address}`

### Staking (core)
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

### Transactions (read)
- `/cosmos/tx/v1beta1/txs`
- `/cosmos/tx/v1beta1/txs/block/{height}`
- `/cosmos/tx/v1beta1/txs/{hash}`

### Upgrade
- `/cosmos/upgrade/v1beta1/applied_plan/{name}`
- `/cosmos/upgrade/v1beta1/current_plan`
- `/cosmos/upgrade/v1beta1/module_versions`
- `/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}`
- `/cosmos/upgrade/v1beta1/authority`

### Validators (legacy aliases)
- `/validatorsets/latest`
- `/validatorsets/{height}`

### IBC Core (channels, clients, connections)
- `/ibc/core/channel/v1/channels`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/client_state`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence`
- `/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence_send`
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

### IBC Transfer (extras)
- `/ibc/apps/transfer/v1/denom_hashes/{trace=**}`
- `/ibc/apps/interchain_accounts/controller/v1/owners/{owner}/connections/{connection_id}`
- `/ibc/apps/transfer/v1/denoms/{denom=**}/total_escrow`

### CosmWasm
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
- `/cosmwasm/wasm/v1/contracts/creator/{creator_address}`
- `/cosmwasm/wasm/v1/contract/build_address`

### REST (TX encode/simulate)
- `/cosmos/tx/v1beta1/decode`
- `/cosmos/tx/v1beta1/encode`
- `/cosmos/tx/v1beta1/encode/amino`
- `/cosmos/tx/v1beta1/simulate`
- `/cosmos/tx/v1beta1/txs`

---

## gRPC

### FeeMarket
- `feemarket.feemarket.v1.Query/GasPrice`
- `feemarket.feemarket.v1.Query/GasPrices`
- `feemarket.feemarket.v1.Query/Params`
- `feemarket.feemarket.v1.Query/State`

### Interchain Security (CCV Provider)
- `interchain_security.ccv.provider.v1.Query/QueryAllPairsValConAddrByConsumerChainID`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerChainOptedInValidators`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerChainStarts`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerChainStops`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerChains`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerChainsValidatorHasToValidate`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerGenesis`
- `interchain_security.ccv.provider.v1.Query/QueryConsumerValidators`
- `interchain_security.ccv.provider.v1.Query/QueryOldestUnconfirmedVsc`
- `interchain_security.ccv.provider.v1.Query/QueryParams`
- `interchain_security.ccv.provider.v1.Query/QueryProposedConsumerChainIDs`
- `interchain_security.ccv.provider.v1.Query/QueryRegisteredConsumerRewardDenoms`
- `interchain_security.ccv.provider.v1.Query/QueryThrottleState`
- `interchain_security.ccv.provider.v1.Query/QueryValidatorConsumerAddr`
- `interchain_security.ccv.provider.v1.Query/QueryValidatorConsumerCommissionRate`
- `interchain_security.ccv.provider.v1.Query/QueryValidatorProviderAddr`

### IBC Rate Limiting
- `ratelimit.v1.Query/AllBlacklistedDenoms`
- `ratelimit.v1.Query/AllRateLimits`
- `ratelimit.v1.Query/AllWhitelistedAddresses`
- `ratelimit.v1.Query/RateLimit`
- `ratelimit.v1.Query/RateLimitsByChainId`
- `ratelimit.v1.Query/RateLimitsByChannelId`

### AutoCLI / Reflection
- `cosmos.autocli.v1.Query/AppOptions`
- `cosmos.reflection.v1.ReflectionService/FileDescriptors`

### Bank (extras)
- `cosmos.bank.v1beta1.Query/DenomMetadataByQueryString`
- `cosmos.bank.v1beta1.Query/DenomOwnersByQuery`

### Base Node & Tendermint
- `cosmos.base.node.v1beta1.Service/Status`
- `cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight`
- `cosmos.base.tendermint.v1beta1.Service/GetLatestBlock`
- `cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet`
- `cosmos.base.tendermint.v1beta1.Service/GetNodeInfo`
- `cosmos.base.tendermint.v1beta1.Service/GetSyncing`
- `cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight`
- `cosmos.base.tendermint.v1beta1.Service/ABCIQuery`

### Consensus
- `cosmos.consensus.v1.Query/Params`

### Distribution
- `cosmos.distribution.v1beta1.Query/TokenizeShareRecordReward`
- `cosmos.distribution.v1beta1.Query/CommunityPool`
- `cosmos.distribution.v1beta1.Query/DelegationRewards`
- `cosmos.distribution.v1beta1.Query/DelegationTotalRewards`
- `cosmos.distribution.v1beta1.Query/DelegatorValidators`
- `cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress`
- `cosmos.distribution.v1beta1.Query/Params`
- `cosmos.distribution.v1beta1.Query/ValidatorCommission`
- `cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards`
- `cosmos.distribution.v1beta1.Query/ValidatorSlashes`
- `cosmos.distribution.v1beta1.Query/ValidatorDistributionInfo`

### Governance
- `cosmos.gov.v1.Query/Constitution`
- `cosmos.gov.v1.Query/Params`
- `cosmos.gov.v1.Query/Deposit`
- `cosmos.gov.v1.Query/Deposits`
- `cosmos.gov.v1.Query/Proposal`
- `cosmos.gov.v1.Query/Proposals`
- `cosmos.gov.v1.Query/TallyResult`
- `cosmos.gov.v1.Query/Vote`
- `cosmos.gov.v1.Query/Votes`
- `cosmos.gov.v1beta1.Query/Deposit`
- `cosmos.gov.v1beta1.Query/Deposits`
- `cosmos.gov.v1beta1.Query/Params`
- `cosmos.gov.v1beta1.Query/Proposal`
- `cosmos.gov.v1beta1.Query/Proposals`
- `cosmos.gov.v1beta1.Query/TallyResult`
- `cosmos.gov.v1beta1.Query/Vote`
- `cosmos.gov.v1beta1.Query/Votes`

### Evidence
- `cosmos.evidence.v1beta1.Query/AllEvidence`
- `cosmos.evidence.v1beta1.Query/Evidence`

### Feegrant
- `cosmos.feegrant.v1beta1.Query/Allowance`
- `cosmos.feegrant.v1beta1.Query/Allowances`
- `cosmos.feegrant.v1beta1.Query/AllowancesByGranter`

### Mint
- `cosmos.mint.v1beta1.Query/AnnualProvisions`
- `cosmos.mint.v1beta1.Query/Inflation`
- `cosmos.mint.v1beta1.Query/Params`

### Params
- `cosmos.params.v1beta1.Query/Params`
- `cosmos.params.v1beta1.Query/Subspaces`

### Slashing
- `cosmos.slashing.v1beta1.Query/Params`
- `cosmos.slashing.v1beta1.Query/SigningInfo`
- `cosmos.slashing.v1beta1.Query/SigningInfos`

### Staking (tokenize share & core)
- `cosmos.staking.v1beta1.Query/AllTokenizeShareRecords`
- `cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId`
- `cosmos.staking.v1beta1.Query/TokenizeShareLockInfo`
- `cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom`
- `cosmos.staking.v1beta1.Query/TokenizeShareRecordById`
- `cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned`
- `cosmos.staking.v1beta1.Query/TotalLiquidStaked`
- `cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets`
- `cosmos.staking.v1beta1.Query/Delegation`
- `cosmos.staking.v1beta1.Query/DelegatorDelegations`
- `cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations`
- `cosmos.staking.v1beta1.Query/DelegatorValidator`
- `cosmos.staking.v1beta1.Query/DelegatorValidators`
- `cosmos.staking.v1beta1.Query/HistoricalInfo`
- `cosmos.staking.v1beta1.Query/Params`
- `cosmos.staking.v1beta1.Query/Pool`
- `cosmos.staking.v1beta1.Query/Redelegations`
- `cosmos.staking.v1beta1.Query/UnbondingDelegation`
- `cosmos.staking.v1beta1.Query/Validator`
- `cosmos.staking.v1beta1.Query/ValidatorDelegations`
- `cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations`
- `cosmos.staking.v1beta1.Query/Validators`

### Auth & Authz
- `cosmos.auth.v1beta1.Query/Account`
- `cosmos.auth.v1beta1.Query/Accounts`
- `cosmos.auth.v1beta1.Query/ModuleAccountByName`
- `cosmos.auth.v1beta1.Query/ModuleAccounts`
- `cosmos.auth.v1beta1.Query/Params`
- `cosmos.auth.v1beta1.Query/AccountInfo`
- `cosmos.auth.v1beta1.Query/AccountAddressByID`
- `cosmos.auth.v1beta1.Query/AddressBytesToString`
- `cosmos.auth.v1beta1.Query/Bech32Prefix`
- `cosmos.auth.v1beta1.Query/AddressStringToBytes`
- `cosmos.authz.v1beta1.Query/GranteeGrants`
- `cosmos.authz.v1beta1.Query/GranterGrants`
- `cosmos.authz.v1beta1.Query/Grants`

### Bank (core)
- `cosmos.bank.v1beta1.Query/AllBalances`
- `cosmos.bank.v1beta1.Query/Balance`
- `cosmos.bank.v1beta1.Query/BaseDenom`
- `cosmos.bank.v1beta1.Query/DenomMetadata`
- `cosmos.bank.v1beta1.Query/DenomsMetadata`
- `cosmos.bank.v1beta1.Query/Params`
- `cosmos.bank.v1beta1.Query/SpendableBalances`
- `cosmos.bank.v1beta1.Query/SupplyOf`
- `cosmos.bank.v1beta1.Query/SupplyOfWithoutOffset`
- `cosmos.bank.v1beta1.Query/TotalSupply`
- `cosmos.bank.v1beta1.Query/TotalSupplyWithoutOffset`
- `cosmos.bank.v1beta1.Query/SendEnabled`
- `cosmos.bank.v1beta1.Query/SpendableBalanceByDenom`
- `cosmos.bank.v1beta1.Query/DenomOwners`

### TX Service
- `cosmos.tx.v1beta1.Service/BroadcastTx`
- `cosmos.tx.v1beta1.Service/GetBlockWithTxs`
- `cosmos.tx.v1beta1.Service/GetTx`
- `cosmos.tx.v1beta1.Service/GetTxsEvent`
- `cosmos.tx.v1beta1.Service/Simulate`
- `cosmos.tx.v1beta1.Service/TxDecodeAmino`
- `cosmos.tx.v1beta1.Service/TxDecode`
- `cosmos.tx.v1beta1.Service/TxEncodeAmino`
- `cosmos.tx.v1beta1.Service/TxEncode`

### Upgrade
- `cosmos.upgrade.v1beta1.Query/AppliedPlan`
- `cosmos.upgrade.v1beta1.Query/CurrentPlan`
- `cosmos.upgrade.v1beta1.Query/ModuleVersions`
- `cosmos.upgrade.v1beta1.Query/UpgradedConsensusState`
- `cosmos.upgrade.v1beta1.Query/Authority`

### IBC — Apps (fee, ICA, transfer)
- `ibc.applications.fee.v1.Query/CounterpartyPayee`
- `ibc.applications.fee.v1.Query/FeeEnabledChannel`
- `ibc.applications.fee.v1.Query/FeeEnabledChannels`
- `ibc.applications.fee.v1.Query/IncentivizedPacket`
- `ibc.applications.fee.v1.Query/IncentivizedPackets`
- `ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel`
- `ibc.applications.fee.v1.Query/Payee`
- `ibc.applications.fee.v1.Query/TotalAckFees`
- `ibc.applications.fee.v1.Query/TotalRecvFees`
- `ibc.applications.fee.v1.Query/TotalTimeoutFees`
- `ibc.applications.interchain_accounts.controller.v1.Query/Params`
- `ibc.applications.interchain_accounts.host.v1.Query/Params`
- `ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount`
- `ibc.applications.transfer.v1.Query/DenomHash`
- `ibc.applications.transfer.v1.Query/DenomTrace`
- `ibc.applications.transfer.v1.Query/DenomTraces`
- `ibc.applications.transfer.v1.Query/EscrowAddress`
- `ibc.applications.transfer.v1.Query/Params`
- `ibc.applications.transfer.v1.Query/TotalEscrowForDenom`

### IBC — Core (channel, client, connection)
- `ibc.core.channel.v1.Query/ChannelParams`
- `ibc.core.channel.v1.Query/NextSequenceSend`
- `ibc.core.channel.v1.Query/Upgrade`
- `ibc.core.channel.v1.Query/UpgradeError`
- `ibc.core.channel.v1.Query/Channels`
- `ibc.core.channel.v1.Query/Channel`
- `ibc.core.channel.v1.Query/ChannelClientState`
- `ibc.core.channel.v1.Query/ChannelConsensusState`
- `ibc.core.channel.v1.Query/ConnectionChannels`
- `ibc.core.channel.v1.Query/PacketAcknowledgement`
- `ibc.core.channel.v1.Query/PacketAcknowledgements`
- `ibc.core.channel.v1.Query/PacketCommitment`
- `ibc.core.channel.v1.Query/PacketCommitments`
- `ibc.core.channel.v1.Query/PacketReceipt`
- `ibc.core.channel.v1.Query/UnreceivedAcks`
- `ibc.core.channel.v1.Query/UnreceivedPackets`
- `ibc.core.client.v1.Query/ClientParams`
- `ibc.core.client.v1.Query/ClientState`
- `ibc.core.client.v1.Query/ClientStates`
- `ibc.core.client.v1.Query/ClientStatus`
- `ibc.core.client.v1.Query/ConsensusState`
- `ibc.core.client.v1.Query/ConsensusStateHeights`
- `ibc.core.client.v1.Query/ConsensusStates`
- `ibc.core.client.v1.Query/UpgradedClientState`
- `ibc.core.client.v1.Query/UpgradedConsensusState`
- `ibc.core.client.v1.Query/VerifyMembership`
- `ibc.core.connection.v1.Query/ClientConnections`
- `ibc.core.connection.v1.Query/Connection`
- `ibc.core.connection.v1.Query/ConnectionClientState`
- `ibc.core.connection.v1.Query/ConnectionConsensusState`
- `ibc.core.connection.v1.Query/Connections`
- `ibc.core.connection.v1.Query/ConnectionParams`

### CosmWasm
- `cosmwasm.wasm.v1.Query/AllContractState`
- `cosmwasm.wasm.v1.Query/Code`
- `cosmwasm.wasm.v1.Query/Codes`
- `cosmwasm.wasm.v1.Query/ContractHistory`
- `cosmwasm.wasm.v1.Query/ContractInfo`
- `cosmwasm.wasm.v1.Query/ContractsByCode`
- `cosmwasm.wasm.v1.Query/Params`
- `cosmwasm.wasm.v1.Query/PinnedCodes`
- `cosmwasm.wasm.v1.Query/RawContractState`
- `cosmwasm.wasm.v1.Query/SmartContractState`
- `cosmwasm.wasm.v1.Query/BuildAddress`
- `cosmwasm.wasm.v1.Query/ContractsByCreator`

---

## TendermintRPC
- `dump_consensus_state`
- `abci_info`
- `abci_query`
- `block`
- `block_by_hash`
- `block_results`
- `block_search`
- `blockchain`
- `broadcast_evidence`
- `broadcast_tx_async`
- `broadcast_tx_commit`
- `broadcast_tx_sync`
- `check_tx`
- `commit`
- `consensus_params`
- `consensus_state`
- `genesis`
- `genesis_chunked`
- `health`
- `net_info`
- `num_unconfirmed_txs`
- `status`
- `subscribe`
- `tx`
- `tx_search`
- `unconfirmed_txs`
- `unsubscribe`
- `unsubscribe_all`
- `validators`
- `header`
- `header_by_hash`

