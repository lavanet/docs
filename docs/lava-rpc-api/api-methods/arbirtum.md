---
id: arbitrum
slug: /api-methods/arbitrum
title: Arbitrum JSON-RPC (Mainnet & Sepolia)
---

# Arbitrum API Methods

**Supported Networks:**
- **Arbitrum Mainnet** (`ARBITRUM`)
- **Arbitrum Sepolia Testnet** (`ARBITRUMS`)

**Supported Interfaces:**
- **JSON-RPC/HTTP** 
- **JSON-RPC/WEBSOCKET**

---

## JSON-RPC

### Chain and Node Info
- `eth_chainId`
- `net_version`
- `net_listening`
- `net_peerCount`
- `web3_clientVersion`
- `rpc_modules`
- `eth_protocolVersion`
- `eth_syncing`
- `eth_coinbase`

### Blocks
- `eth_blockNumber`
- `eth_getBlockByNumber`
- `eth_getBlockByHash`
- `eth_getBlockTransactionCountByNumber`
- `eth_getBlockTransactionCountByHash`
- `eth_getBlockReceipts`
- `eth_getUncleByBlockNumberAndIndex`
- `eth_getUncleByBlockHashAndIndex`
- `eth_getUncleCountByBlockNumber`
- `eth_getUncleCountByBlockHash`

### Transactions (read)
- `eth_getTransactionByHash`
- `eth_getTransactionByBlockNumberAndIndex`
- `eth_getTransactionByBlockHashAndIndex`
- `eth_getTransactionReceipt`
- `eth_getTransactionCount`

### Transactions (write & simulate)
- `eth_sendRawTransaction`
- `eth_sendTransaction`
- `eth_call`
- `eth_estimateGas`
- `eth_createAccessList`

### Accounts and State
- `eth_accounts`
- `eth_getBalance`
- `eth_getCode`
- `eth_getStorageAt`
- `eth_getProof`

### Logs and Filters
- `eth_getLogs`
- `eth_newFilter`
- `eth_newBlockFilter`
- `eth_newPendingTransactionFilter`
- `eth_getFilterChanges`
- `eth_getFilterLogs`
- `eth_uninstallFilter`

### Fee Market and Gas
- `eth_gasPrice`
- `eth_maxPriorityFeePerGas`
- `eth_feeHistory`

### Mining, Work, and Misc
- `eth_hashrate`
- `eth_mining`
- `eth_getWork`
- `eth_sign`
- `eth_signTransaction`
- `web3_sha3`
- `eth_compileLLL`
- `eth_getCompilers`

### Subscriptions (WebSocket)
- `eth_subscribe`
- `eth_unsubscribe`

---

## JSON-RPC Add-ons

### arbtrace (Arbitrum tracing)
- `arbtrace_block`
- `arbtrace_call`
- `arbtrace_callMany`
- `arbtrace_filter`
- `arbtrace_replayBlockTransactions`
- `arbtrace_replayTransaction`
- `arbtrace_transaction`

### bundler (ERC-4337)
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
