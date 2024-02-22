---
slug: /near-dev
title: 获取 NEAR RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 NEAR RPC

## NEAR ipRPC 🪙

Lava🌋为NEAR提供激励公共RPC。开发者可以获得免费的公共终端。

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | <https://near.lava.build> |

### Testnet 🧪

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | <https://near-testnet.lava.build> |

<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=NEAR-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=NEAR-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-NEAR-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

### 输入 📥


<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useNEARMainnet() {

  const nearMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'NEAR',
  });

  const nearBlockResponse =  await nearMainnet.sendRelay({
    method: "block",
    params: {"finality":"final"},
    rpcInterface:  "jsonrpc",
  });

  console.log(nearBlockResponse);
}

(async () => {
    await useNEARMainnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useNEARMainnet() {

  const nearMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'NEAR',
    rpcInterface: "rest",
  });

  const nearBlockResponse =  await nearMainnet.sendRelay({
    method: "block",
    params: {"finality":"final"},
    rpcInterface:  "jsonrpc",
  });

  console.log(nearBlockResponse);
}

(async () => {
    await useNEARMainnet();
  })();
```

</TabItem>
</Tabs>

### 输出 📤

<iframe width="100%" src="/img/chains/near_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-near-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />