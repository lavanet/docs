---
id: lava
slug: /api-methods/lava
title: Lava Network APIs (Mainnet)
---

# Lava Blockchain API Methods

**Supported Networks**:
- Lava Mainnet (`LAVA`)
- Lava Testnet (`LAV1`)

**Supported Interfaces**:
- **[REST](#rest)**
- **[gRPC](#grpc)**
- **[TendermintRPC](#tendermintrpc)**

---

## REST

### Lava-specific modules

**Conflict**
- `/lavanet/lava/conflict/conflict_vote`
- `/lavanet/lava/conflict/conflict_vote/{index}`
- `/lavanet/lava/conflict/consumer_conflicts/{consumer}`
- `/lavanet/lava/conflict/provider_conflicts/{provider}`
- `/lavanet/lava/conflict/params`

**Epoch Storage**
- `/lavanet/lava/epochstorage/epoch_details`
- `/lavanet/lava/epochstorage/fixated_params`
- `/lavanet/lava/epochstorage/fixated_params/{index}`
- `/lavanet/lava/epochstorage/params`
- `/lavanet/lava/epochstorage/stake_storage`
- `/lavanet/lava/epochstorage/stake_storage/{index}`
- `/lavanet/lava/epochstorage/provider_metadata/{provider}`

**Pairing**
- `/lavanet/lava/pairing/clients/{chainID}`
- `/lavanet/lava/pairing/epoch_payments`
- `/lavanet/lava/pairing/epoch_payments/{index}`
- `/lavanet/lava/pairing/get_pairing/{chainID}/{client}`
- `/lavanet/lava/pairing/params`
- `/lavanet/lava/pairing/provider/{address}/{chainID}`
- `/lavanet/lava/pairing/provider_monthly_payout/{provider}`
- `/lavanet/lava/pairing/provider_payment_storage`
- `/lavanet/lava/pairing/provider_payment_storage/{index}`
- `/lavanet/lava/pairing/providers/{chainID}`
- `/lavanet/lava/pairing/providers_epoch_cu`
- `/lavanet/lava/pairing/provider_pairing_chance/{provider}/{chainID}/{geolocation}/{cluster}`
- `/lavanet/lava/pairing/provider_reputation/{provider}/{chainID}/{cluster}`
- `/lavanet/lava/pairing/provider_reputation_details/{address}/{chainID}/{cluster}`
- `/lavanet/lava/pairing/sdk_pairing`
- `/lavanet/lava/pairing/static_providers_list/{chainID}`
- `/lavanet/lava/pairing/unique_payment_storage_client_provider`
- `/lavanet/lava/pairing/unique_payment_storage_client_provider/{index}`
- `/lavanet/lava/pairing/user_entry/{address}/{chainID}`
- `/lavanet/lava/pairing/verify_pairing/{chainID}/{client}/{provider}/{block}`
- `/lavanet/lava/pairing/subscription_monthly_payout/{consumer}`
- `/lavanet/lava/pairing/effective_policy/{consumer}/{specID}`

**Plans**
- `/lavanet/lava/plans/list`
- `/lavanet/lava/plans/info/{plan_index}`
- `/lavanet/lava/plans/params`
- `/lavanet/lava/plans/show_all_plans`
- `/lavanet/lava/plans/show_plan_info/{plan_index}`

**Spec**
- `/lavanet/lava/spec/chain/{chainID}`
- `/lavanet/lava/spec/params`
- `/lavanet/lava/spec/show_all_chains`
- `/lavanet/lava/spec/show_chain_info/{chainName}`
- `/lavanet/lava/spec/spec`
- `/lavanet/lava/spec/spec/{index}`
- `/lavanet/lava/spec/spec/{ChainID}`
- `/lavanet/lava/spec/spec_raw`
- `/lavanet/lava/spec/spec_raw/{ChainID}`

**Timer Store**
- `/lavanet/lava/timerstore/all_timers/{store_key}/{prefix}`
- `/lavanet/lava/timerstore/next/{store_key}/{prefix}`
- `/lavanet/lava/timerstore/store_keys`

**Fixation Store**
- `/lavanet/lava/fixationstore/Entry/{store_key}/{prefix}/{key}/{block}`
- `/lavanet/lava/fixationstore/all_indices/{store_key}/{prefix}`
- `/lavanet/lava/fixationstore/store_keys`
- `/lavanet/lava/fixationstore/versions/{store_key}/{prefix}/{key}`

**Rewards**
- `/lavanet/lava/rewards/params`
- `/lavanet/lava/rewards/pools`
- `/lavanet/lava/rewards/block_reward`
- `/lavanet/lava/rewards/iprpc_provider_reward/{provider}`
- `/lavanet/lava/rewards/iprpc_spec_reward/{spec}`
- `/lavanet/lava/rewards/SpecTrackedInfo/{chain_id}/{provider}`
- `/lavanet/lava/rewards/show_iprpc_data`

**Downtime**
- `/lavanet/lava/downtime/v1/params`
- `/lavanet/lava/downtime/v1/query_downtime`

**Dual Staking**
- `/lavanet/lava/dualstaking/params`
- `/lavanet/lava/dualstaking/delegator_providers/{delegator}`
- `/lavanet/lava/dualstaking/delegator_rewards/{delegator}`
- `/lavanet/lava/dualstaking/delegator_rewards/{delegator}/{provider}/{chain_id}`
- `/lavanet/lava/dualstaking/provider_delegators/{provider}`

**Subscription**
- `/lavanet/lava/subscription/params`
- `/lavanet/lava/subscription/list`
- `/lavanet/lava/subscription/list_projects/{subscription}`
- `/lavanet/lava/subscription/current/{consumer}`
- `/lavanet/lava/subscription/next_to_month_expiry`
- `/lavanet/lava/subscription/tracked_usage/{subscription}`
- `/lavanet/lava/subscription/estimated_pools_rewards`
- `/lavanet/lava/subscription/estimated_provider_rewards/{provider}/{amount_delegator}`
- `/lavanet/lava/subscription/estimated_rewards/{provider}/{chain_id}/{amount_delegator}`
- `/lavanet/lava/subscription/estimated_validator_rewards/{validator}/{amount_delegator}`

**Projects**
- `/lavanet/lava/projects/params`
- `/lavanet/lava/projects/info/{project}`
- `/lavanet/lava/projects/developer/{developer}`

**Protocol**
- `/lavanet/lava/protocol/params`

---

### Cosmos SDK & IBC

**Auth**
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

**Authz**
- `/cosmos/authz/v1beta1/grants`
- `/cosmos/authz/v1beta1/grants/grantee/{grantee}`
- `/cosmos/authz/v1beta1/grants/granter/{granter}`

**Bank**
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
- `/cosmos/bank/v1beta1/supply/{denom}`
- `/cosmos/bank/v1beta1/supply/by_denom`
- `/cosmos/bank/v1beta1/supply_without_offset`
- `/cosmos/bank/v1beta1/supply_without_offset/{denom}`

**Base / Node / Tendermint**
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

**Consensus**
- `/cosmos/consensus/v1/params`

**Distribution**
- `/cosmos/distribution/v1beta1/community_pool`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators`
- `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
- `/cosmos/distribution/v1beta1/params`
- `/cosmos/distribution/v1beta1/validators/{validator_address}`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards`
- `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`

**Evidence**
- `/cosmos/evidence/v1beta1/evidence`
- `/cosmos/evidence/v1beta1/evidence/{hash}`

**Feegrant**
- `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
- `/cosmos/feegrant/v1beta1/allowances/{grantee}`
- `/cosmos/feegrant/v1beta1/issued/{granter}`

**Gov v1 + v1beta1**
- `/cosmos/gov/v1/params/{params_type}`
- `/cosmos/gov/v1/proposals`
- `/cosmos/gov/v1/proposals/{proposal_id}`
- `/cosmos/gov/v1/proposals/{proposal_id}/deposits`
- `/cosmos/gov/v1/proposals/{proposal_id}/tally`
- `/cosmos/gov/v1/proposals/{proposal_id}/votes`
- `/cosmos/gov/v1/proposals/{proposal_id}/votes/{voter}`
- `/cosmos/gov/v1/constitution`
- `/cosmos/gov/v1beta1/params/{params_type}`
- `/cosmos/gov/v1beta1/proposals`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/votes`
- `/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}`

**Group**
- `/cosmos/group/v1/group_policies_by_admin/{admin}`
- `/cosmos/group/v1/group_policies_by_group/{group_id}`
- `/cosmos/group/v1/group_policies_by_group/{group_id}`
- `/cosmos/group/v1/group_policies_by_admin/{admin}`
- `/cosmos/group/v1/proposals_by_group_policy/{address}`
- `/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}`
- `/cosmos/group/v1/votes_by_proposal/{proposal_id}`

**Mint**
- `/cosmos/mint/v1beta1/annual_provisions`
- `/cosmos/mint/v1beta1/inflation`
- `/cosmos/mint/v1beta1/params`

**Params**
- `/cosmos/params/v1beta1/params`
- `/cosmos/params/v1beta1/subspaces`

**Slashing**
- `/cosmos/slashing/v1beta1/params`
- `/cosmos/slashing/v1beta1/signing_infos`
- `/cosmos/slashing/v1beta1/signing_infos/{cons_address}`

**Staking**
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

**Tx**
- `/cosmos/tx/v1beta1/txs`
- `/cosmos/tx/v1beta1/txs/{hash}`
- `/cosmos/tx/v1beta1/txs/block/{height}`
- `/cosmos/tx/v1beta1/decode`
- `/cosmos/tx/v1beta1/encode`
- `/cosmos/tx/v1beta1/encode/amino`
- `/cosmos/tx/v1beta1/simulate`

**Upgrade**
- `/cosmos/upgrade/v1beta1/applied_plan/{name}`
- `/cosmos/upgrade/v1beta1/current_plan`
- `/cosmos/upgrade/v1beta1/module_versions`
- `/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}`
- `/cosmos/upgrade/v1beta1/authority`

**Node utility**
- `/node_info`
- `/syncing`
- `/validatorsets/latest`
- `/validatorsets/{height}`

**IBC (apps & core)**
- `/ibc/apps/router/v1/params`
- `/ibc/apps/transfer/v1/channels/{channel_id}/ports/{port_id}/escrow_address`
- `/ibc/apps/transfer/v1/denom_hashes/{trace}`
- `/ibc/apps/transfer/v1/denom_hashes/{trace=**}`
- `/ibc/apps/transfer/v1/denom_traces`
- `/ibc/apps/transfer/v1/denom_traces/{hash}`
- `/ibc/apps/transfer/v1/params`
- `/ibc/apps/transfer/v1/denoms/{denom=**}/total_escrow`
- `/ibc/apps/interchain_accounts/controller/v1/params`
- `/ibc/apps/interchain_accounts/controller/v1/owners/{owner}/connections/{connection_id}`
- `/ibc/apps/interchain_accounts/host/v1/params`
- `/ibc/client/v1/params`
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

---

## gRPC

### Lava-specific services
- `lavanet.lava.conflict.Query/ConflictVote`
- `lavanet.lava.conflict.Query/ConflictVoteAll`
- `lavanet.lava.conflict.Query/Params`
- `lavanet.lava.conflict.Query/ConsumerConflicts`
- `lavanet.lava.conflict.Query/ProviderConflicts`

- `lavanet.lava.epochstorage.Query/EpochDetails`
- `lavanet.lava.epochstorage.Query/FixatedParams`
- `lavanet.lava.epochstorage.Query/FixatedParamsAll`
- `lavanet.lava.epochstorage.Query/Params`
- `lavanet.lava.epochstorage.Query/StakeStorage`
- `lavanet.lava.epochstorage.Query/StakeStorageAll`
- `lavanet.lava.epochstorage.Query/ProviderMetaData`

- `lavanet.lava.pairing.Query/Clients`
- `lavanet.lava.pairing.Query/EpochPayments`
- `lavanet.lava.pairing.Query/EpochPaymentsAll`
- `lavanet.lava.pairing.Query/SdkPairing`
- `lavanet.lava.pairing.Query/GetPairing`
- `lavanet.lava.pairing.Query/Params`
- `lavanet.lava.pairing.Query/ProviderPaymentStorage`
- `lavanet.lava.pairing.Query/ProviderPaymentStorageAll`
- `lavanet.lava.pairing.Query/Providers`
- `lavanet.lava.pairing.Query/ProvidersEpochCu`
- `lavanet.lava.pairing.Query/Provider`
- `lavanet.lava.pairing.Query/ProviderPairingChance`
- `lavanet.lava.pairing.Query/ProviderMonthlyPayout`
- `lavanet.lava.pairing.Query/SubscriptionMonthlyPayout`
- `lavanet.lava.pairing.Query/ProviderReputation`
- `lavanet.lava.pairing.Query/ProviderReputationDetails`
- `lavanet.lava.pairing.Query/UniquePaymentStorageClientProvider`
- `lavanet.lava.pairing.Query/UniquePaymentStorageClientProviderAll`
- `lavanet.lava.pairing.Query/UserEntry`
- `lavanet.lava.pairing.Query/VerifyPairing`
- `lavanet.lava.pairing.Query/EffectivePolicy`
- `lavanet.lava.pairing.Query/StaticProvidersList`

- `lavanet.lava.plans.Query/Info`
- `lavanet.lava.plans.Query/List`
- `lavanet.lava.plans.Query/Params`

- `lavanet.lava.projects.Query/Info`
- `lavanet.lava.projects.Query/Developer`
- `lavanet.lava.projects.Query/Params`

- `lavanet.lava.protocol.Query/Params`

- `lavanet.lava.rewards.Query/BlockReward`
- `lavanet.lava.rewards.Query/Params`
- `lavanet.lava.rewards.Query/Pools`
- `lavanet.lava.rewards.Query/IprpcProviderRewardEstimation`
- `lavanet.lava.rewards.Query/IprpcSpecReward`
- `lavanet.lava.rewards.Query/SpecTrackedInfo`
- `lavanet.lava.rewards.Query/ShowIprpcData`

- `lavanet.lava.subscription.Query/Current`
- `lavanet.lava.subscription.Query/List`
- `lavanet.lava.subscription.Query/ListProjects`
- `lavanet.lava.subscription.Query/NextToMonthExpiry`
- `lavanet.lava.subscription.Query/Params`
- `lavanet.lava.subscription.Query/TrackedUsage`
- `lavanet.lava.subscription.Query/EstimatedRewards`
- `lavanet.lava.subscription.Query/EstimatedProviderRewards`
- `lavanet.lava.subscription.Query/EstimatedPoolsRewards`
- `lavanet.lava.subscription.Query/EstimatedValidatorRewards`

- `lavanet.lava.dualstaking.Query/Params`
- `lavanet.lava.dualstaking.Query/DelegatorRewards`
- `lavanet.lava.dualstaking.Query/DelegatorRewardsList`
- `lavanet.lava.dualstaking.Query/DelegatorProviders`
- `lavanet.lava.dualstaking.Query/ProviderDelegators`

- `lavanet.lava.downtime.v1.Query/QueryParams`
- `lavanet.lava.downtime.v1.Query/QueryDowntime`

- `lavanet.lava.spec.Query/Chain`
- `lavanet.lava.spec.Query/Params`
- `lavanet.lava.spec.Query/ShowAllChains`
- `lavanet.lava.spec.Query/ShowChainInfo`
- `lavanet.lava.spec.Query/Spec`
- `lavanet.lava.spec.Query/SpecAll`
- `lavanet.lava.spec.Query/SpecRaw`
- `lavanet.lava.spec.Query/SpecAllRaw`

- `lavanet.lava.fixationstore.Query/AllIndices`
- `lavanet.lava.fixationstore.Query/Entry`
- `lavanet.lava.fixationstore.Query/Versions`
- `lavanet.lava.fixationstore.Query/StoreKeys`

- `lavanet.lava.timerstore.Query/AllTimers`
- `lavanet.lava.timerstore.Query/Next`
- `lavanet.lava.timerstore.Query/StoreKeys`

---

### Cosmos SDK & IBC

- `cosmos.auth.v1beta1.Query/*` (Accounts, ModuleAccounts, Params, Account, AccountInfo, Bech32 & helpers)
- `cosmos.authz.v1beta1.Query/*` (Grants)
- `cosmos.bank.v1beta1.Query/*` (Balances, Supply, Params, Denoms, Spendable, BaseDenom, SendEnabled)
- `cosmos.base.tendermint.v1beta1.Service/*` (GetLatestBlock, GetBlockByHeight, NodeInfo, Syncing, ValidatorSet)
- `cosmos.base.node.v1beta1.Service/Config`
- `cosmos.consensus.v1.Query/Params`
- `cosmos.distribution.v1beta1.Query/*`
- `cosmos.evidence.v1beta1.Query/*`
- `cosmos.feegrant.v1beta1.Query/*`
- `cosmos.gov.v1beta1.Query/*`
- `cosmos.gov.v1.Query/*` (Params, Votes, Deposits, Proposal(s), TallyResult, Constitution)
- `cosmos.group.v1.Query/*` (Groups, Policies, Proposals, Votes, Members)
- `cosmos.mint.v1beta1.Query/*`
- `cosmos.params.v1beta1.Query/*` (Params, Subspaces)
- `cosmos.reflection.v1.ReflectionService/FileDescriptors`
- `cosmos.slashing.v1beta1.Query/*`
- `cosmos.staking.v1beta1.Query/*`
- `cosmos.tx.v1beta1.Service/*` (Simulate, BroadcastTx, GetTx, GetTxsEvent, Encode/Decode incl. Amino, GetBlockWithTxs, TxEncode/Decode)
- `cosmos.upgrade.v1beta1.Query/*`
- `ibc.applications.interchain_accounts.controller.v1.Query/*`
- `ibc.applications.interchain_accounts.host.v1.Query/*`
- `ibc.applications.transfer.v1.Query/*`
- `ibc.applications.fee.v1.Query/*`
- `ibc.core.channel.v1.Query/*`
- `ibc.core.client.v1.Query/*`
- `ibc.core.connection.v1.Query/*`

(Plus `grpc.reflection.v1alpha.ServerReflection/ServerReflectionInfo`.)

---

## TendermintRPC

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
- `dump_consensus_state`
- `genesis`
- `genesis_chunked`
- `health`
- `header`
- `header_by_hash`
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

