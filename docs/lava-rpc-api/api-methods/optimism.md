---
id: optimism
slug: /api-methods/optimism
title: Optimism APIs (Mainnet & Testnet)
---

# Optimism API Methods

**Supported Networks**:
- Optimism Mainnet (`OPTM`)
- Optimism Testnet (`OPTMS`)

**Supported Interfaces**:
- **JSON-RPC/HTTP**
- **JSON-RPC/WEBSOCKET**

---

## JSON-RPC

### Chain & Node
- `eth_chainId`
- `net_version`
- `net_listening`
- `net_peerCount`
- `rpc_modules`
- `web3_clientVersion`
- `web3_sha3`
- `eth_protocolVersion`
- `eth_syncing`

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
- `eth_signTransaction`
- `eth_sendTransaction`
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


### Network-specific (Optimism)
- `eth_getBlockRange`
- `rollup_gasPrices`
- `rollup_getInfo`

---

## Add-Ons:

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


