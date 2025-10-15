---

id: hyperliquid
slug: /api-methods/hyperliquid
title: Hyperliquid JSON-RPC (Mainnet & Testnet)

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Hyperliquid API Methods

**Supported Networks**:

- **Hyperliquid Mainnet** (`HYPERLIQUID`)
- **Hyperliquid Testnet** (`HYPERLIQUIDT`)
---

**Supported Interfaces**:
- **JSON-RPC/HTTP**
- **JSON-RPC/WEBSOCKET**



## JSONRPC/HTTPS

### Chain & Node Info

- `eth_chainId`
- `net_version`
- `web3_clientVersion`
- `eth_syncing`

<br/>

### Blocks Info

- `eth_blockNumber`
- `eth_getBlockByNumber`
- `eth_getBlockByHash`
- `eth_getBlockTransactionCountByNumber`
- `eth_getBlockTransactionCountByHash`
- `eth_getBlockReceipts`

<br/>

### Transactions (read, simulate)

- `eth_getTransactionByHash`
- `eth_getTransactionByBlockNumberAndIndex`
- `eth_getTransactionByBlockHashAndIndex`
- `eth_getTransactionReceipt`
- `eth_getTransactionCount`
- `eth_call`
- `eth_estimateGas`


<br/>

### Accounts & State

- `eth_getBalance`
- `eth_getCode`
- `eth_getStorageAt`

<br/>

### Logs & Events

- `eth_getLogs`

<br/>

### Fee Market & Gas

- `eth_gasPrice`
- `eth_feeHistory`
- `eth_maxPriorityFeePerGas`
- `eth_bigBlockGasPrice`

<br/>

### Hyperliquid‑specific (system)

These endpoints expose chain‑specific system transactions that aren’t part of standard Ethereum RPCs. Shapes may differ from vanilla EVM nodes.


- `eth_getSystemTxsByBlockNumber`
- `eth_getSystemTxsByBlockHash(blockHash)`





