---
id: base
slug: /api-methods/base
title: Base APIs (Mainnet & Testnet)
---

# Base API Methods

**Supported Networks:**
- Base Mainnet (`BASE`)
- Base Testnet (`BASES`)

**Supported Interfaces**
- **JSON-RPC/HTTP**
**JSON-RPC/WEBSOCKET**


---
## JSON-RPC
### Chain and network info
- `eth_chainId`
- `eth_protocolVersion`
- `net_version`
- `net_listening`
- `net_peerCount`
- `web3_clientVersion`
- `rpc_modules`

### Blocks and headers
- `eth_blockNumber`
- `eth_getBlockByHash`
- `eth_getBlockByNumber`
- `eth_getBlockReceipts`
- `eth_getBlockTransactionCountByHash`
- `eth_getBlockTransactionCountByNumber`
- `eth_getUncleByBlockHashAndIndex`
- `eth_getUncleByBlockNumberAndIndex`
- `eth_getUncleCountByBlockHash`
- `eth_getUncleCountByBlockNumber`

### Logs and filters
- `eth_newFilter`
- `eth_newBlockFilter`
- `eth_newPendingTransactionFilter`
- `eth_getFilterChanges`
- `eth_getFilterLogs`
- `eth_getLogs`
- `eth_uninstallFilter`

### Accounts, balances, nonces, signing
- `eth_accounts`
- `eth_getBalance`
- `eth_getTransactionCount`
- `eth_sign`
- `eth_signTransaction`
- `eth_coinbase`

### State, code, and contract calls
- `eth_call`
- `eth_getCode`
- `eth_getStorageAt`
- `eth_getProof`

### Transactions - read
- `eth_getTransactionByHash`
- `eth_getTransactionByBlockHashAndIndex`
- `eth_getTransactionByBlockNumberAndIndex`
- `eth_getTransactionReceipt`

### Transactions - send and preparation
- `eth_sendRawTransaction`
- `eth_sendTransaction`
- `eth_estimateGas`
- `eth_createAccessList`
- `eth_maxPriorityFeePerGas`
- `eth_gasPrice`
- `eth_feeHistory`

### Mining and PoW utilities
- `eth_mining`
- `eth_hashrate`
- `eth_getWork`

### Sync and subscriptions
- `eth_syncing`
- `eth_subscribe`
- `eth_unsubscribe`

### Utilities and compilers
- `web3_sha3`
- `eth_getCompilers`
- `eth_compileLLL`

#### Add-on: bundler
- `eth_sendUserOperation`
- `eth_estimateUserOperationGas`
- `eth_getUserOperationByHash`
- `eth_getUserOperationReceipt`
- `eth_supportedEntryPoints`

#### Add-on: debug
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

#### Add-on: trace
- `trace_call`
- `trace_block`
- `trace_get`
- `trace_filter`
- `trace_transaction`
- `trace_rawTransaction`
- `trace_replayBlockTransactions`
- `trace_replayTransaction`