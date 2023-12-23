---
slug: /axelar-dev
title: Getting Axelar RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Axelar RPC

## Axelar ipRPC 🪙
Lava🌋 now offers incentivized public RPC for Axelar. Developers can get free, public endpoints for all.

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢 tendermint-rpc    | https://tm.axelar.lava.build            |
| 🟢 tendermint-rpc / websocket | wss://tm.axelar.lava.build/websocket |
| 🟢 rest              | https://rest.axelar.lava.build         |
| 🟢 grpc              | grpc.axelar.lava.build:443             |

### Testnet 🧪

| Service 🔌                  | URL 🔗                                    |
|-----------------------------|-------------------------------------------|
| 🟢 tendermint-rpc            | https://tm.axelar-testnet.lava.build       |
| 🟢 tendermint-rpc / websocket | wss://tm.axelar-testnet.lava.build/websocket |
| 🟢 rest                      | https://rest.axelar-testnet.lava.build     |
| 🟢 grpc                      | grpc.axelar-testnet.lava.build:443        |



## [Gateway](https://gateway.lavanet.xyz/?utm_source=axelar-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=axelar-dev&utm_medium=docs&utm_campaign=docs-to-docs)


## [SDK](https://github.com/lavanet/lava-sdk)

### Input 📥


<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAxelarMainnet() {

  const AxelarMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'AXELAR',
    rpcInterface: 'rest',
  });

  const AxelarBlockResponse =  await AxelarMainnet.sendRelay({
    method: "GET",
    url: "/node_info",
  });

  console.log(AxelarBlockResponse);
}

(async () => {
    await useAxelarMainnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAxelarMainnet() {

  const AxelarMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'AXELAR',
    rpcInterface: "rest",
  });

  const AxelarBlockResponse =  await AxelarMainnet.sendRelay({
    method: "GET",
    url: "/node_info",
  });

  console.log(AxelarBlockResponse);
}

(async () => {
    await useAxelarMainnet();
  })();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/axelar_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-axelar-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />