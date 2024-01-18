---
slug: /base-dev
title: Getting Base RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Base RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=base-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=base-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useBaseMainnet() {

  const baseMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'BASE',
  });

  const baseBlockResponse =  await baseMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(baseBlockResponse);
}

(async () => {
    await useBaseMainnet();
  })();
```
</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useBaseMainnet() {

  const baseMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'BASE',
    geolocation: "2"
  });

  const baseBlockResponse =  await baseMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(baseBlockResponse);
}

(async () => {
    await useBaseMainnet();
  })();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/base_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-base-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
