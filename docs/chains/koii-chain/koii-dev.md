---
slug: /koii-dev
title: Getting Koii  RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Koii RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=koii-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=koii-dev&utm_medium=docs&utm_campaign=docs-to-docs)

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

async function useKoiiTestnet() {

    const koiiTestnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
      chainIds: 'KOIIT',
    });

    const koiiBlockResponse =  await koiiTestnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(koiiBlockResponse);
}

(async () => {
    await useKoiiTestnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useKoiiTestnet() {

    const koiiTestnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
        projectId: "enter_your_project_id_here" 
      },
      chainIds: 'KOIIT',
      geolocation: "2"
    });

    const koiiBlockResponse =  await koiiTestnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(koiiBlockResponse);
}

(async () => {
    await useKoiiTestnet();
  })();
```

</TabItem>

</Tabs>


### Output 📤

:::caution
Certain features of Koii spec may not be currently enabled.
:::

<iframe width="100%" src="/img/chains/koii_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-koii-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
