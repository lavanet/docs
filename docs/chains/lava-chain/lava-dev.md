---
slug: /lava-dev
title: Getting Lava RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Lava RPC

## Public RPC

Lava offers self-served RPC as well as  
⚠️ Use our [Official Endpoints](/public-rpc)!

## [Gateway](https://gateway.lavanet.xyz/?utm_source=lava-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=lava-dev&utm_medium=docs&utm_campaign=docs-to-docs)

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

async function uselavaMainnet() {

  const lavaMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //hide your private key in an environmental variable
    chainIds: 'LAV1',
    rpcInterface: 'rest'
  });

  const lavaBlockResponse =  await lavaMainnet.sendRelay({
    connectionType: "GET",
    url: "/cosmos/base/tendermint/v1beta1/node_info"
  });

  console.log(lavaBlockResponse);
}

(async () => {
    await uselavaMainnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function uselavaMainnet() {

  const lavaMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },    
    chainIds: 'LAV1',
    rpcInterface: 'rest'
  });

  const lavaBlockResponse =  await lavaMainnet.sendRelay({
    connectionType: "GET",
    url: "/cosmos/base/tendermint/v1beta1/node_info"
  });

  console.log(lavaBlockResponse);
}

(async () => {
    await uselavaMainnet();
  })();
```
</TabItem>
</Tabs>


To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-lava-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
