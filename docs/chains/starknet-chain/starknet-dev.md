---
slug: /starknet-dev
title: Getting Starknet RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Starknet RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=sdk-alpha) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=sdk-alpha) use before getting started.

:::

### Input


<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useStarknet() {

  const starknet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: 'STRK',
  });

  const starknetBlockResponse =  await starknet.sendRelay({
    method: "starknet_blockNumber",
    params: [],
  });


  console.log(starknetBlockResponse);
}

(async () => {
    await useStarknet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useStarknet() {

  const starknet = await new LavaSDK({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainID: 'STRK',
    geolocation: "2"
  });

  const starknetBlockResponse =  await starknet.sendRelay({
    method: "starknet_blockNumber",
    params: [],
  });


  console.log(starknetBlockResponse);
}

(async () => {
    await useStarknet();
  })();
```
</TabItem>

</Tabs>

### Output

<iframe width="100%" src="/img/chains/starknet_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=sdk-alpha-launch)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](/gateway-getting-started)

