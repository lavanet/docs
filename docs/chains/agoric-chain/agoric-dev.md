---
slug: /agoric-dev
title: Getting Agoric RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Agoric RPC

## Agoric ipRPC 🪙

Lava🌋 offers incentivized public RPC for Agoric. Developers can get free, public endpoints for all.

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  rest  | <https://agr.rest.lava.build> |
| 🟢  grpc  | <https://agr.grpc.lava.build> |
| 🟢  tendermintrpc | <https://agr.tendermint.lava.build> |

### Testnet 🧪

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  rest  | <https://agrt.rest.lava.build> |
| 🟢  grpc  | <https://agrt.grpc.lava.build> |
| 🟢  tendermintrpc | <https://agrt.tendermint.lava.build> |


## [Gateway](https://gateway.lavanet.xyz/?utm_source=agoric-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=agoric-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />

## [SDK](https://github.com/lavanet/lava-sdk)

### Input 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAgoricMainnet() {

    const agoricMainnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
      chainIds: 'AGOR',
    });

    const agoricBlockResponse =  await agoricMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(agoricBlockResponse);
}

(async () => {
    await useAgoricMainnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAgoricMainnet() {

    const agoricMainnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
        projectId: "enter_your_project_id_here" 
      },
      chainIds: 'AGORT',
      geolocation: "2"
    });

    const agoricBlockResponse =  await agoricMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(agoricBlockResponse);
}

(async () => {
    await useAgoricMainnet();
  })();
```

</TabItem>

</Tabs>


### Output 📤

:::caution
Certain features of Agoric spec may not be currently enabled.
:::

<iframe width="100%" src="/img/chains/agoric_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-agoric-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
