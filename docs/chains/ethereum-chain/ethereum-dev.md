---
slug: /ethereum-dev
title: 获取 Ethereum RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Ethereum RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=ethereum-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用 Lava Gateway 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=ethereum-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## SDK

### 输入 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEthereumMainnet() {

  const ethereumMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
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
// 使用以下命令安装 lavaSDK：
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