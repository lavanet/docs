---
slug: /near-dev
title: Getting NEAR RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting NEAR RPC

## NEAR ipRPC 🪙
Lava🌋 will soon offer incentivized public RPC for NEAR. Developers can get free, public endpoints for all.

<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=NEAR-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=NEAR-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-NEAR-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

### Input 📥


<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useNEARMainnet() {

  const nearMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'NEAR',
  });

  const nearBlockResponse =  await nearMainnet.sendRelay({
    method: "block",
    params: {"finality":"final"},
    rpcInterface:  "jsonrpc",
  });

  console.log(nearBlockResponse);
}

(async () => {
    await useNEARMainnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useNEARMainnet() {

  const nearMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'NEAR',
    rpcInterface: "rest",
  });

  const nearBlockResponse =  await nearMainnet.sendRelay({
    method: "block",
    params: {"finality":"final"},
    rpcInterface:  "jsonrpc",
  });

  console.log(nearBlockResponse);
}

(async () => {
    await useNEARMainnet();
  })();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/near_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-near-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />