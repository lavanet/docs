---
slug: /cosmoshub-dev
title: 获取 CosmosHub RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 CosmosHub RPC

<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=cosmoshub-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用 Lava Gateway 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=cosmoshub-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### 输入 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCosmoshubMainnet() {

  const cosmoshubMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'COS5',
  });

  const cosmoshubBlockResponse =  await cosmoshubMainnet.sendRelay({
    method: "GET",
    url: "/node_info",
    rpcInterface: "rest",
  });

  console.log(cosmoshubBlockResponse);
}

(async () => {
    await useCosmoshubMainnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCosmoshubMainnet() {

  const cosmoshubMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或您自己的徽章服务器 URL
      projectId: "enter_your_project_id_here" 
    },    
    chainIds: 'COS5',
  });

  const cosmoshubBlockResponse =  await cosmoshubMainnet.sendRelay({
    method: "GET",
    url: "/node_info",
    rpcInterface: "rest",
  });

  console.log(cosmoshubBlockResponse);
}

(async () => {
    await useCosmoshubMainnet();
  })();
```
</TabItem>
</Tabs>