---
slug: /celo-dev
title: Getting Celo RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Celo RPC



<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=celo-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=celo-dev&utm_medium=docs&utm_campaign=docs-to-docs)

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

async function useCeloMainnet() {

  const celoMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'CELO',
  });

  const celoBlockResponse =  await celoMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(celoBlockResponse);
}

(async () => {
    await useCeloMainnet();
  })();
```
</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCeloMainnet() {

  const celoMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'CELO',
    geolocation: "2"
  });

  const celoBlockResponse =  await celoMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(celoBlockResponse);
}

(async () => {
    await useCeloMainnet();
  })();
```

</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/celo_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-celo-rpc&utm_medium=docs&utm_campaign=docs-to-docs)