---
slug: /cosmoshub-dev
title: Getting CosmosHub RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting CosmosHub RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-cosmoshub-rpc&utm_medium=docs&utm_campaign=docs-to-docs) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-cosmoshub-rpc&utm_medium=docs&utm_campaign=docs-to-docs) use before getting started.

:::

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCosmoshubMainnet() {

  const cosmoshubMainnet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainID: 'FVM',
  });

  const cosmoshubBlockResponse =  await cosmoshubMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(cosmoshubBlockResponse);
}

(async () => {
    await useCosmoshubMainnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCosmoshubMainnet() {

  const cosmoshubMainnet = await new LavaSDK({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },    
    chainID: 'FVM',
  });

  const cosmoshubBlockResponse =  await cosmoshubMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(cosmoshubBlockResponse);
}

(async () => {
    await useCosmoshubMainnet();
  })();
```
</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/cosmoshub_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-cosmoshub-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=cosmoshub-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=cosmoshub-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />