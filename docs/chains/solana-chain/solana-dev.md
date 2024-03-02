---
slug: /solana-dev
title: 获取 Solana  RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Solana RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=solana-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用 Lava Gateway 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=solana-dev&utm_medium=docs&utm_campaign=docs-to-docs)

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

async function useSolanaMainnet() {

    const solanaMainnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
      chainIds: 'SOLANA',
    });

    const solanaBlockResponse =  await solanaMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(solanaBlockResponse);
}

(async () => {
    await useSolanaTestnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useSolanaMainnet() {

    const solanaMainnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // 或您自己的徽章服务器 URL
        projectId: "enter_your_project_id_here" 
      },
      chainIds: 'SOLANA',
      geolocation: "2"
    });

    const solanaBlockResponse =  await solanaMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(solanaBlockResponse);
}

(async () => {
    await useSolanaTestnet();
  })();
```

</TabItem>

</Tabs>


### 输出 📤

<iframe width="100%" src="/img/chains/solana_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关 SDK 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-solana-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
