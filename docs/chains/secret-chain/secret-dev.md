---
slug: /secret-dev
title: Getting Secret Network RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Secret Network RPC

## Secret Network 公共 RPC

### 主网 🌐

| 服务 🔌             | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | <https://rpc.secret.lava.build> |

### 测试网 🧪

| 服务 🔌             | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  json-rpc  | <https://rpc.secret-testnet.lava.build> |

## [网关](https://gateway.lavanet.xyz/?utm_source=secret-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解更多关于使用 Lava 网关的信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=secret-dev&utm_medium=docs&utm_campaign=docs-to-docs)

## [SDK](https://github.com/lavanet/lava-sdk)

:::警告

在开始之前，请仔细阅读[前端](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-secret-rpc&utm_medium=docs&utm_campaign=docs-to-docs)和[后端](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-secret-rpc&utm_medium=docs&utm_campaign=docs-to-docs)使用文档。

:::

### 输入 📥

<Tabs>

<TabItem value="backend" label="后端">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSecret() {

  const secret = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY,  // 将私钥隐藏在环境变量中
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
<TabItem value="frontend" label="前端">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSecret() {

  const secret = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器 URL 
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

### 输出 📤

<iframe width="100%" src="/img/chains/Secret_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解更多关于我们的 SDK 的信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-secret-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />