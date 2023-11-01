---
slug: /solana-dev
title: Getting Solana  RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Solana RPC


## [SDK](https://github.com/lavanet/lava-sdk)

:::caution

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=docs-to-docs) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=docs-to-docs) use before getting started.

:::

### Input 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSolanaMainnet() {

    const solanaMainnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
      chainIds: 'SOLANA',
    });

    const solanaBlockResponse =  await solanaMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(solanaBlockResponse);
}

(async () => {
    await useSolanaTestnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSolanaMainnet() {

    const solanaMainnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
        projectId: "enter_your_project_id_here" 
      },
      chainIds: 'SOLANA',
      geolocation: "2"
    });

    const solanaBlockResponse =  await solanaMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(solanaBlockResponse);
}

(async () => {
    await useSolanaTestnet();
  })();
```

</TabItem>

</Tabs>


### Output 📤

<iframe width="100%" src="/img/chains/solana_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=solana-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=solana-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />
