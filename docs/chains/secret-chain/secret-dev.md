---
slug: /secret-dev
title: Getting Secret Network RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Secret Network RPC

## Secret Network Public RPC

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | https://rpc.secret.lava.build |

### Testnet 🧪

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | https://rpc.secret-testnet.lava.build |

## [Gateway](https://gateway.lavanet.xyz/?utm_source=secret-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

To learn more about using the Lava Gateway visit the [Getting Started guide](https://docs.lavanet.xyz/gateway-getting-started?utm_source=secret-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution

Please observe the documentation on both [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-secret-rpc&utm_medium=docs&utm_campaign=docs-to-docs) and [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-secret-rpc&utm_medium=docs&utm_campaign=docs-to-docs) use before getting started.

:::

### Input 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSecret() {

  const secret = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY,  //hide your private key in an environmental variable
    chainIds: 'STRK',
  });

  const SecretBlockResponse =  await secret.sendRelay({
    method: "Secret_blockNumber",
    params: [],
  });


  console.log(SecretBlockResponse);
}

(async () => {
    await useSecret();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSecret() {

  const secret = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'STRK',
    geolocation: "2"
  });

  const SecretBlockResponse =  await secret.sendRelay({
    method: "Secret_blockNumber",
    params: [],
  });


  console.log(SecretBlockResponse);
}

(async () => {
    await useSecret();
  })();
```

</TabItem>

</Tabs>

### Output 📤

<iframe width="100%" src="/img/chains/Secret_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To learn more about our SDK visit the [Getting Started guide](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-secret-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />