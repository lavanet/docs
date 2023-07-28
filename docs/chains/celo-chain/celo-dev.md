---
slug: /celo-dev
title: Getting Celo RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Celo RPC

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

Lava SDK is currently in Alpha. Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-celo-rpc&utm_medium=docs&utm_campaign=sdk-alpha) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-celo-rpc&utm_medium=docs&utm_campaign=sdk-alpha) use before getting started.

:::

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCeloMainnet() {

  const celoMainnet = await new LavaSDK({
    privateKey: process.env.PRIVATE_KEY,
    chainID: 'CELO',
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

  const celoMainnet = await new LavaSDK({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainID: 'CELO',
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


To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-celo-rpc&utm_medium=docs&utm_campaign=sdk-alpha)

<hr />

## [Gateway](https://gateway.lavanet.xyz)

To learn more about using the Lava Gateway visit the [Getting Started guide](/gateway-getting-started)

<hr />
<br />

## Supported APIs

### Specification 📑

https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_avalanche.json


### Protocols 🔗

| Platform  |  jsonrpc | tendermintrpc | uri/http | websocket/http 
| --------- | -------- | ------------- | ---------|---------------
| Gateway   | ✅       |               |          | ✅
| SDK       | ✅       |               |          | 


### Methods 🛠️
<details>
<summary> List </summary>

- eth_chainId

</details>





