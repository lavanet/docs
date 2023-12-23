---
slug: /ethereum-dev
title: Getting Ethereum RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Ethereum RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=ethereum-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=ethereum-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## SDK

### Input 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEthereumMainnet() {

  const ethereumMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'ETH1',
  });

  const ethereumBlockResponse =  await ethereumMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(ethereumBlockResponse);
}

(async () => {
    await useEthereumMainnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEthereumMainnet() {

  const ethereumMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },    
    chainIds: 'ETH1',
  });

  const ethereumBlockResponse =  await ethereumMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(ethereumBlockResponse);
}

(async () => {
    await useEthereumMainnet();
  })();
```
</TabItem>
</Tabs>

<hr />