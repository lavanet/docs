---
slug: /starknet-dev
title: 获取 Starknet RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Starknet RPC

## Starknet 公共 RPC

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | <https://rpc.starknet.lava.build> |

### Testnet 🧪

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | <https://rpc.starknet-testnet.lava.build> |

## [Gateway](https://gateway.lavanet.xyz/?utm_source=starknet-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=starknet-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution

Lava SDK目前处于Alpha阶段。在开始之前，请观察[前端](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=docs-to-docs)和[后端](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=docs-to-docs)的文档。

:::

### 输入 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useStarknet() {

  const starknet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY,  //将私钥隐藏在环境变量中
    chainIds: 'STRK',
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
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useStarknet() {

  const starknet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'STRK',
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

### 输出 📤

<iframe width="100%" src="/img/chains/starknet_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-starknet-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />