---
slug: /juno-dev
title: 获取 Juno RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Juno RPC

## [Gateway](https://gateway.lavanet.xyz/?utm_source=juno-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

<video width="100%" height="100%" controls><source src="/img/chains/junovideodemo.mp4" type="video/mp4"></source></video>

要了解有关使用 Lava Gateway 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=juno-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

:::caution 

Lava SDK 目前处于 Alpha 阶段。在开始使用前，请查看 [frontend](https://docs.lavanet.xyz/sdk-frontend?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=docs-to-docs) 和 [backend](https://docs.lavanet.xyz/sdk-backend?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=docs-to-docs) 的使用文档。

:::

### 输入 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useJunoTestnet() {

    const junoTestnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
      chainIds: 'JUNT1',
    });

    const junoBlockResponse =  await junoTestnet.sendRelay({
    method: "block",
    params: ["82500"],
      });

    console.log(junoBlockResponse);
}

(async () => {
    await useJunoTestnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装 lavaSDK：
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useJunoTestnet() {

    const junoTestnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", //或您自己的徽章服务器 URL
        projectId: "enter_your_project_id_here" 
      },    
      chainIds: 'JUNT1',
    });

    const junoBlockResponse =  await junoTestnet.sendRelay({
    method: "block",
    params: ["82500"],
      });

    console.log(junoBlockResponse);
}

(async () => {
    await useJunoTestnet();
  })();
```

</TabItem>
</Tabs>

### 输出 📤

<iframe width="100%" src="/img/chains/juno_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关 SDK 的更多信息，请访问 [入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-juno-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />