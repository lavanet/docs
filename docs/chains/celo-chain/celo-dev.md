---
slug: /celo-dev
title: 获取Celo RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取Celo RPC



<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=celo-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=celo-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### 输入 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCeloMainnet() {

  const celoMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'CELO',
  });

  const celoBlockResponse =  await celoMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(celoBlockResponse);
}

(async () => {
    await useCeloMainnet();
  })();
```
</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useCeloMainnet() {

  const celoMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'CELO',
    geolocation: "2"
  });

  const celoBlockResponse =  await celoMainnet.sendRelay({
    method: "eth_blockNumber",
    params: [],
  });

  console.log(celoBlockResponse);
}

(async () => {
    await useCeloMainnet();
  })();
```

</TabItem>
</Tabs>

### 输出 📤

<iframe width="100%" src="/img/chains/celo_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-celo-rpc&utm_medium=docs&utm_campaign=docs-to-docs)