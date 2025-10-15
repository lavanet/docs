---
id: polygon
slug: /api-methods/polygon
title: Polygon APIs (Mainnet & Amoy)
---

# Polygon API Methods

**Supported Networks**:
- Polygon Mainnet (`POLYGON`)
- Polyong Testnet (`POLYGONA`)

**Supported Interfaces**:
- **JSON-RPC/HTTP**
- **JSON-RPC/WEBSOCKET**

---

## JSON-RPC

### Chain & Node Info
- `eth_chainId`
- `eth_protocolVersion`
- `eth_syncing`
- `net_version`
- `net_listening`
- `net_peerCount`
- `rpc_modules`
- `web3_clientVersion`
- `web3_sha3`

### Blocks & Headers
- `eth_blockNumber`
- `eth_getBlockByNumber`
- `eth_getBlockByHash`
- `eth_getBlockReceipts`
- `eth_getBlockTransactionCountByNumber`
- `eth_getBlockTransactionCountByHash`
- `eth_getUncleByBlockNumberAndIndex`
- `eth_getUncleByBlockHashAndIndex`
- `eth_getUncleCountByBlockNumber`
- `eth_getUncleCountByBlockHash`

### Transactions (read)
- `eth_getTransactionByHash`
- `eth_getTransactionByBlockNumberAndIndex`
- `eth_getTransactionByBlockHashAndIndex`
- `eth_getTransactionReceipt`

### Transactions (write & execution)
- `eth_sendRawTransaction`
- `eth_sendTransaction`
- `eth_call`
- `eth_estimateGas`
- `eth_createAccessList`
- `eth_signTransaction`

### Accounts & Keys
- `eth_accounts`
- `eth_getBalance`
- `eth_getTransactionCount`
- `eth_coinbase`
- `eth_sign`

### State & Code
- `eth_getCode`
- `eth_getStorageAt`
- `eth_getProof`

### Logs, Filters & Subscriptions
- `eth_newFilter`
- `eth_newBlockFilter`
- `eth_newPendingTransactionFilter`
- `eth_getFilterChanges`
- `eth_getFilterLogs`
- `eth_getLogs`
- `eth_uninstallFilter`
- `eth_subscribe`
- `eth_unsubscribe`

### Gas & Fees
- `eth_gasPrice`
- `eth_feeHistory`
- `eth_maxPriorityFeePerGas`

### Legacy Mining/Work (compat)
- `eth_mining`
- `eth_hashrate`
- `eth_getWork`

---

## Polygon-specific

### Bor (validator/proposer)
- `bor_getAuthor`
- `bor_getCurrentProposer`
- `bor_getCurrentValidators`
- `bor_getRootHash`
- `bor_getSignersAtHash`

### Transaction Pool
- `txpool_content`
- `txpool_inspect`
- `txpool_status`

### Erigon (client extensions)
- `erigon_blockNumber`
- `erigon_forks`
- `erigon_getBlockByTimestamp`
- `erigon_getBlockReceiptsByBlockHash`
- `erigon_getHeaderByHash`
- `erigon_getHeaderByNumber`

### QuickNode (if available)
- `qn_getBlockWithReceipts`
- `qn_getReceipts`

---

## Add-ons

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

### bundler
- `eth_sendUserOperation`
- `eth_estimateUserOperationGas`
- `eth_getUserOperationByHash`
- `eth_getUserOperationReceipt`
- `eth_supportedEntryPoints`
