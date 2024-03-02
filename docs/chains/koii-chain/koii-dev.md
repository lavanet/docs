---
slug: /koii-dev
title: 获取 Koii  RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Koii RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=koii-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用 Lava Gateway 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=koii-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />

## [SDK](https://github.com/lavanet/lava-sdk)

### 输入 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useKoiiTestnet() {

    const koiiTestnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
      chainIds: 'KOIIT',
    });

    const koiiBlockResponse =  await koiiTestnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(koiiBlockResponse);
}

(async () => {
    await useKoiiTestnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useKoiiTestnet() {

    const koiiTestnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // 或您自己的徽章服务器 URL
        projectId: "enter_your_project_id_here" 
      },
      chainIds: 'KOIIT',
      geolocation: "2"
    });

    const koiiBlockResponse =  await koiiTestnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(koiiBlockResponse);
}

(async () => {
    await useKoiiTestnet();
  })();
```

</TabItem>

</Tabs>


### 输出 📤

:::caution
目前可能无法启用 Koii spec 的某些功能。
:::

<iframe width="100%" src="/img/chains/koii_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关 SDK 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-koii-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
