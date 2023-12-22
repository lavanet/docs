---
slug: /filecoin-dev
title: Getting Filecoin RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Filecoin RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=filecoin-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=filecoin-dev&utm_medium=docs&utm_campaign=docs-to-docs)

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

async function useFilecoinMainnet() {

  const filecoinMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'FVM',
  });

  const filecoinBlockResponse =  await filecoinMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(filecoinBlockResponse);
}

(async () => {
    await useFilecoinMainnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useFilecoinMainnet() {

  const filecoinMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },    
    chainIds: 'FVM',
  });

  const filecoinBlockResponse =  await filecoinMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(filecoinBlockResponse);
}

(async () => {
    await useFilecoinMainnet();
  })();
```
</TabItem>
</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/filecoin_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-filecoin-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />