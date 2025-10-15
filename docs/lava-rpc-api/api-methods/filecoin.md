---
id: filecoin
slug: /api-methods/filecoin
title: Filecoin (FVM) APIs (Mainnet & Testnet)
---

# Filecoin (FVM) API Methods

**Supported Networks**
- Filecoin Mainnet (`FVM`)
- Filecoin Testnet (`FVMT`)

**Supported Interfaces**:
- **JSON-RPC/HTTP**
- **JSON-RPC/WEBSOCEKT**

---

## Native Filecoin JSON-RPC

### General & Auth
- `Filecoin.Version`
- `Filecoin.Web3ClientVersion`
- `Filecoin.AuthVerify`

### Chain & Tipsets
- `Filecoin.ChainHead`
- `Filecoin.ChainGetTipSet`
- `Filecoin.ChainGetTipSetByHeight`
- `Filecoin.ChainGetTipSetAfterHeight`
- `Filecoin.ChainGetBlock`
- `Filecoin.ChainGetBlockMessages`
- `Filecoin.ChainGetMessagesInTipset`
- `Filecoin.ChainGetParentMessages`
- `Filecoin.ChainGetParentReceipts`
- `Filecoin.ChainGetPath`
- `Filecoin.ChainGetGenesis`
- `Filecoin.ChainGetMessage`
- `Filecoin.ChainGetNode`
- `Filecoin.ChainTipSetWeight`
- `Filecoin.ChainHasObj`
- `Filecoin.ChainReadObj`
- `Filecoin.ChainStatObj`
- `Filecoin.ChainBlockstoreInfo`
- `ChainExport`  _(export snapshot)_
- `Filecoin.ChainNotify`  _(subscribe to head changes)_
- `Filecoin.ChainGetEvents`

### State (Actors, Network, Randomness, Deals)
- `Filecoin.StateNetworkName`
- `Filecoin.StateNetworkVersion`
- `Filecoin.StateReadState`
- `Filecoin.StateCall`
- `Filecoin.StateCompute`
- `Filecoin.StateComputeDataCID`
- `Filecoin.StateChangedActors`
- `Filecoin.StateActorCodeCIDs`
- `Filecoin.StateActorManifestCID`
- `Filecoin.StateAccountKey`
- `Filecoin.StateLookupID`
- `Filecoin.StateLookupRobustAddress`
- `Filecoin.StateGetActor`
- `Filecoin.StateGetNetworkParams`
- `Filecoin.StateGetBeaconEntry`
- `Filecoin.StateGetRandomnessFromBeacon`
- `Filecoin.StateGetRandomnessFromTickets`
- `Filecoin.StateGetRandomnessDigestFromBeacon`
- `Filecoin.StateGetRandomnessDigestFromTickets`
- `Filecoin.StateListActors`
- `Filecoin.StateListMessages`
- `Filecoin.StateListMiners`
- `Filecoin.StateCirculatingSupply`
- `Filecoin.StateVMCirculatingSupplyInternal`
- `Filecoin.StateReplay`
- `Filecoin.StateSearchMsg`
- `Filecoin.StateWaitMsg`

#### Market & Deals
- `Filecoin.StateMarketBalance`
- `Filecoin.StateMarketParticipants`
- `Filecoin.StateMarketDeals`
- `Filecoin.StateMarketStorageDeal`
- `Filecoin.StateDealProviderCollateralBounds`

#### Verified Registry
- `Filecoin.StateVerifiedClientStatus`
- `Filecoin.StateVerifierStatus`
- `Filecoin.StateVerifiedRegistryRootKey`

#### Datacap / Allocations & Claims
- `Filecoin.StateGetAllAllocation`
- `Filecoin.StateGetAllClaims`
- `Filecoin.StateGetAllocation`
- `Filecoin.StateGetAllocationForPendingDeal`
- `Filecoin.StateGetAllocations`
- `Filecoin.StateGetClaim`
- `Filecoin.StateGetClaims`

#### Miner & Sectors
- `Filecoin.MinerGetBaseInfo`
- `Filecoin.StateMinerInfo`
- `Filecoin.StateMinerPower`
- `Filecoin.StateMinerSectors`
- `Filecoin.StateMinerActiveSectors`
- `Filecoin.StateMinerSectorCount`
- `Filecoin.StateMinerSectorAllocated`
- `Filecoin.StateMinerAllocated`
- `Filecoin.StateMinerDeadlines`
- `Filecoin.StateMinerPartitions`
- `Filecoin.StateMinerFaults`
- `Filecoin.StateMinerRecoveries`
- `Filecoin.StateMinerProvingDeadline`
- `Filecoin.StateMinerPledgeCollateral`
- `Filecoin.StateMinerPledgeForSector`
- `Filecoin.StateMinerPreCommitDepositForPower`
- `Filecoin.StateSectorGetInfo`
- `Filecoin.StateSectorExpiration`
- `Filecoin.StateSectorPartition`
- `Filecoin.StatePreCommitInfo`

### Mempool (Message Pool)
- `Filecoin.MpoolPending`
- `Filecoin.MpoolGetNonce`
- `Filecoin.MpoolGetConfig`
- `Filecoin.MpoolSelect`
- `Filecoin.MpoolCheckMessages`
- `Filecoin.MpoolCheckPendingMessages`
- `Filecoin.MpoolCheckReplaceMessages`
- `Filecoin.MpoolBatchPush`
- `Filecoin.MpoolBatchPushUntrusted`

### Multisig
- `Filecoin.MsigGetAvailableBalance`
- `Filecoin.MsigGetPending`
- `Filecoin.MsigGetVested`
- `Filecoin.MsigGetVestingSchedule`

### Wallet
- `Filecoin.WalletBalance`
- `Filecoin.WalletValidateAddress`
- `Filecoin.WalletVerify`

### Gas (Filecoin)
- `Filecoin.GasEstimateMessageGas`
- `Filecoin.GasEstimateFeeCap`
- `Filecoin.GasEstimateGasLimit`
- `Filecoin.GasEstimateGasPremium`

### Events
- `Filecoin.GetActorEventsRaw`

### Networking (compat)
- `Filecoin.NetListening`
- `Filecoin.NetVersion`

---

## Filecoin ↔ Ethereum Address Helpers
- `Filecoin.EthAddressToFilecoinAddress`
- `Filecoin.FilecoinAddressToEthAddress`

---

## Ethereum-Compatibility (Filecoin-prefixed)

### Chain & Node
- `Filecoin.EthChainId`
- `Filecoin.EthProtocolVersion`
- `Filecoin.EthSyncing`

### Blocks
- `Filecoin.EthBlockNumber`
- `Filecoin.EthGetBlockByNumber`
- `Filecoin.EthGetBlockByHash`
- `Filecoin.EthGetBlockReceipts`
- `Filecoin.EthGetBlockTransactionCountByNumber`
- `Filecoin.EthGetBlockTransactionCountByHash`

### Transactions - Read
- `Filecoin.EthGetTransactionByHash`
- `Filecoin.EthGetTransactionByHashLimited`
- `Filecoin.EthGetTransactionByBlockNumberAndIndex`
- `Filecoin.EthGetTransactionByBlockHashAndIndex`
- `Filecoin.EthGetTransactionReceipt`
- `Filecoin.EthGetTransactionHashByCid`
- `Filecoin.EthGetMessageCidByTransactionHash`

### Transactions - Write
- `Filecoin.EthSendRawTransaction`

### Accounts & State
- `Filecoin.EthAccounts`
- `Filecoin.EthGetBalance`
- `Filecoin.EthGetTransactionCount`
- `Filecoin.EthGetStorageAt`
- `Filecoin.EthGetCode`
- `Filecoin.EthGetLogs`
- `Filecoin.EthGetFilterLogs`
- `Filecoin.EthGetFilterChanges`
- `Filecoin.EthCall`
- `Filecoin.EthEstimateGas`

### Filters & Subscriptions
- `Filecoin.EthNewFilter`
- `Filecoin.EthNewBlockFilter`
- `Filecoin.EthNewPendingTransactionFilter`
- `Filecoin.EthUninstallFilter`
- `Filecoin.EthSubscribe`
- `Filecoin.EthUnsubscribe`

### Gas & Fees
- `Filecoin.EthGasPrice`
- `Filecoin.EthFeeHistory`
- `Filecoin.EthMaxPriorityFeePerGas`

### Tracing (ETH-style on Filecoin)
- `Filecoin.EthTraceBlock`
- `Filecoin.EthTraceFilter`
- `Filecoin.EthTraceTransaction`
- `Filecoin.EthTraceReplayBlockTransactions`

---

## Standard Ethereum JSON-RPC (also supported on FVM)

### Chain & Node
- `eth_chainId`
- `eth_protocolVersion`
- `eth_syncing`
- `net_version`
- `net_listening`
- `net_peerCount`
- `rpc_modules`
- `web3_clientVersion`
- `web3_sha3`

### Blocks
- `eth_blockNumber`
- `eth_getBlockByNumber`
- `eth_getBlockByHash`
- `eth_getBlockReceipts`
- `eth_getBlockTransactionCountByNumber`
- `eth_getBlockTransactionCountByHash`
- `eth_getUncleCountByBlockNumber`
- `eth_getUncleCountByBlockHash`
- `eth_getUncleByBlockNumberAndIndex`
- `eth_getUncleByBlockHashAndIndex`

### Transactions — Read
- `eth_getTransactionByHash`
- `eth_getTransactionByBlockNumberAndIndex`
- `eth_getTransactionByBlockHashAndIndex`
- `eth_getTransactionReceipt`

### Transactions — Write
- `eth_sendRawTransaction`
- `eth_sendTransaction`
- `eth_signTransaction`
- `eth_sign`

### Accounts & State
- `eth_accounts`
- `eth_getBalance`
- `eth_getTransactionCount`
- `eth_getStorageAt`
- `eth_getCode`
- `eth_getProof`

### Execution (EVM)
- `eth_call`
- `eth_estimateGas`
- `eth_createAccessList`

### Filters, Logs & Subscriptions
- `eth_newFilter`
- `eth_newBlockFilter`
- `eth_newPendingTransactionFilter`
- `eth_getFilterChanges`
- `eth_getFilterLogs`
- `eth_uninstallFilter`
- `eth_getLogs`
- `eth_subscribe`
- `eth_unsubscribe`

### Gas & Fees
- `eth_gasPrice`
- `eth_feeHistory`
- `eth_maxPriorityFeePerGas`

### Mining / Work & Hashrate (legacy compatibility)
- `eth_coinbase`
- `eth_mining`
- `eth_hashrate`
- `eth_getWork`

### Compilers (legacy compatibility)
- `eth_getCompilers`
- `eth_compileLLL`

---

## Add-Ons

### bundler
- `eth_sendUserOperation`
- `eth_estimateUserOperationGas`
- `eth_getUserOperationByHash`
- `eth_getUserOperationReceipt`
- `eth_supportedEntryPoints`


### debug
- `debug_getBadBlocks`
- `debug_getRawBlock`
- `debug_getRawHeader`
- `debug_getRawReceipts`
- `debug_getRawTransaction`
- `debug_storageRangeAt`
- `debug_traceBlock`
- `debug_traceBlockByHash`
- `debug_traceBlockByNumber`
- `debug_traceCall`
- `debug_traceTransaction`


### trace
- `trace_call`
- `trace_block`
- `trace_get`
- `trace_filter`
- `trace_transaction`
- `trace_rawTransaction`
- `trace_replayBlockTransactions`
- `trace_replayTransaction`
