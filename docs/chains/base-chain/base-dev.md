---
slug: /base-dev
title: 获取 Base RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Base RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=base-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=base-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### 输入 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useBaseMainnet() {

  const baseMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'BASE',
  });

  const baseBlockResponse =  await baseMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(baseBlockResponse);
}

(async () => {
    await useBaseMainnet();
  })();
```
</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useBaseMainnet() {

  const baseMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // Or your own Badge-Server URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'BASE',
    geolocation: "2"
  });

  const baseBlockResponse =  await baseMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(baseBlockResponse);
}

(async () => {
    await useBaseMainnet();
  })();
```

</TabItem>
</Tabs>

### 输出 📤

<iframe width="100%" src="/img/chains/base_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-base-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
