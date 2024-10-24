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

| Service 🔌                    | URL 🔗                                         |
| ----------------------------- | ---------------------------------------------- |
| 🟢 tendermint-rpc             | https://evmos.tendermintrpc.lava.build         |
| 🟢 tendermint-rpc / websocket | wss://evmos.tendermintrpc.lava.build/websocket |
| 🟢 json-rpc                   | https://evmos.lava.build                       |
| 🟢 json-rpc / websocket       | wss://evmos.lava.build                         |
| 🟢 rest                       | https://evmos.rest.lava.build                  |
| 🟢 grpc                       | evmos.grpc.lava.build                          |

### Testnet 🧪

| Service 🔌                    | URL 🔗                                        |
| ----------------------------- | --------------------------------------------- |
| 🟢 tendermint-rpc             | https://tm.evmos-testnet.lava.build           |
| 🟢 tendermint-rpc / websocket | <wss://tm.evmos-testnet.lava.build/websocket> |
| 🟢 json-rpc                   | https://evmos-testnet.lava.build              |
| 🟢 json-rpc / websocket       | <wss://evmos-testnet.lava.build/websocket>    |
| 🟢 rest                       | https://evmost.rest.lava.build                |
| 🟢 grpc                       | grpc.evmos-testnet.lava.build                 |

<br />
<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=evmos-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=evmos-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useEvmosTestnet() {
  const evmosTestnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: "EVMOST",
  });

  const evmosBlockResponse = await evmosTestnet.sendRelay({
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
const { LavaSDK } = require("@lavanet/lava-sdk");

async function useEvmosTestnet() {
  const evmosTestnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL
      projectId: "enter_your_project_id_here",
    },
    chainIds: "EVMOST",
  });

  const evmosBlockResponse = await evmosTestnet.sendRelay({
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
