---
id: starknet
slug: /api-methods/starknet
title: StarkNet JSON-RPC (Mainnet & Sepolia)
---

# Starknet API Methods 

**Supported Networks:**

- **Starkent Mainnet** (`STRK`)
- **Starkent Sepolia Testnet** (`STRKS`)

**Supported Inerfaces:**

- **JSON-RPC over HTTPS**  
  Base paths supported by providers may include one of:
  - `/rpc/v0_5`
  - `/rpc/v0_6`
  - `/rpc/v0_7`
  - `/rpc/v0_8`
  - `/` (unversioned root for compatibility)
- **JSON-RPC over WebSocket**  
  WS paths:  
  - `/ws/rpc/v0_6`
  - `/ws/rpc/v0_7`
  - `/ws/rpc/v0_8`
- **Add-ons / Namespaces**  
  - `trace` add-on: advanced tracing and simulation
  - `pathfinder` namespace: extra node utilities and subscriptions

---

## JSON-RPC

### Chain & Node Info
- `starknet_chainId`
- `starknet_specVersion`
- `starknet_syncing`
- `starknet_blockNumber`
- `starknet_blockHashAndNumber`
- `starknet_pendingTransactions`

<br/>

### Blocks
- `starknet_getBlockWithTxs`
- `starknet_getBlockWithTxHashes`
- `starknet_getBlockTransactionCount`

<br/>

### Transactions - Read
- `starknet_getTransactionByHash`
- `starknet_getTransactionByBlockIdAndIndex`
- `starknet_getTransactionReceipt`
- `starknet_getTransactionStatus`

<br/>

### Transactions - Simulate and Fee
- `starknet_call`
- `starknet_estimateFee`
- `starknet_estimateMessageFee`

<br/>

### Account & State
- `starknet_getNonce`
- `starknet_getStorageAt`
- `starknet_getStateUpdate`

<br/>

### Contracts & Classes
- `starknet_getClassHashAt`
- `starknet_getClassAt`
- `starknet_getClass`

<br/>

### Events
- `starknet_getEvents`

<br/>

### Write Transactions
- `starknet_addInvokeTransaction`
- `starknet_addDeclareTransaction`
- `starknet_addDeployAccountTransaction`

---

## JSON-RPC - WebSocket (subscriptions)

Requires a WebSocket endpoint. Availability depends on the provider.

### Pathfinder PubSub
- `pathfinder_subscribe`
- `pathfinder_unsubscribe`

---

## JSON-RPC - Trace add-on

Heavy operations for deep debugging and simulation. Expect higher latency.

### Tracing and Simulation
- `starknet_traceTransaction`
- `starknet_traceBlockTransactions`
- `starknet_simulateTransactions`

---

## Pathfinder namespace (extras)

Utility methods exposed by Pathfinder-compatible nodes.

- `pathfinder_version`
- `pathfinder_getProof`
- `pathfinder_getTransactionStatus`

---
