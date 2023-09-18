---
slug: /evmos-dev
title: Getting Evmos RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Evmos RPC

## Evmos ipRPC 🪙
Lava🌋 now offers incentivized public RPC for Evmos. Developers can get free, public endpoints for all.

### Mainnet 🌐

| Service 🔌 | URL 🔗 |
|--------|-------|
| 🟢 tendermint-rpc | https://tendermint.evmos-mainnet.public.lavanet.xyz  |
| 🟢 tendermint-rpc / websocket | wss://ws-tendermint.evmos-mainnet.public.lavanet.xyz  |
| 🟢 json-rpc | https://json-rpc.evmos-mainnet.public.lavanet.xyz   |
| 🟢 json-rpc / websocket | wss://ws-rpc.evmos-mainnet.public.lavanet.xyz   |  
| 🟢 rest | https://rest.evmos-mainnet.public.lavanet.xyz   |
| 🟢 grpc | grpc.evmos-mainnet.public.lavanet.xyz:30000 |

### Testnet 🧪

| Service 🔌 | URL 🔗 |
|--------|-------|
| 🟢 tendermint-rpc | https://tendermint.evmos-testnet.public.lavanet.xyz  |
| 🟢 tendermint-rpc / websocket | wss://ws-tendermint.evmos-testnet.public.lavanet.xyz  |
| 🟢 json-rpc | https://json-rpc.evmos-testnet.public.lavanet.xyz   |
| 🟢 json-rpc / websocket | wss://ws-rpc.evmos-testnet.public.lavanet.xyz   |  
| 🟢 rest | https://rest.evmos-testnet.public.lavanet.xyz   |
| 🟢 grpc | grpc.evmos-testnet.public.lavanet.xyz:30000 |

<br />
<hr />

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=docs-to-docs) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=docs-to-docs) use before getting started.

:::


### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEvmosTestnet() {

  const evmosTestnet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainID: 'EVMOST',
  });

  const evmosBlockResponse =  await evmosTestnet.sendRelay({
    method: "block",
    params: ["15500000"],
  });

  console.log(evmosBlockResponse);
}

(async () => {
    await useEvmosTestnet();
  })();
```
</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEvmosTestnet() {

  const evmosTestnet = await new LavaSDK({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainID: 'EVMOST',
  });

  const evmosBlockResponse =  await evmosTestnet.sendRelay({
    method: "block",
    params: ["15500000"],
  });

  console.log(evmosBlockResponse);
}

(async () => {
    await useEvmosTestnet();
  })();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/evmos_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=evmos-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=evmos-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />