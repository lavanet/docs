---
slug: /agoric-dev
title: 获取Agoric RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取Agoric RPC

## Agoric ipRPC 🪙

LAVA🌋为Agoric提供奖励公共RPC。开发者可以获得免费的公共终端。

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  rest  | <https://agr.rest.lava.build> |
| 🟢  grpc  | <https://agr.grpc.lava.build> |
| 🟢  tendermintrpc | <https://agr.tendermint.lava.build> |

### Testnet 🧪

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢  rest  | <https://agrt.rest.lava.build> |
| 🟢  grpc  | <https://agrt.grpc.lava.build> |
| 🟢  tendermintrpc | <https://agrt.tendermint.lava.build> |


## [Gateway](https://gateway.lavanet.xyz/?utm_source=agoric-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=agoric-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />

## [SDK](https://github.com/lavanet/lava-sdk)

### 输入 📥

<Tabs>

<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAgoricMainnet() {

    const agoricMainnet = await LavaSDK.create({
      privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
      chainIds: 'AGOR',
    });

    const agoricBlockResponse =  await agoricMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(agoricBlockResponse);
}

(async () => {
    await useAgoricMainnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// Install lavaSDK with the following command:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAgoricMainnet() {

    const agoricMainnet = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL 
        projectId: "enter_your_project_id_here" 
      },
      chainIds: 'AGORT',
      geolocation: "2"
    });

    const agoricBlockResponse =  await agoricMainnet.sendRelay({
      method: "getBlockHeight",
      params: [],
    });

    console.log(agoricBlockResponse);
}

(async () => {
    await useAgoricMainnet();
  })();
```

</TabItem>

</Tabs>


### 输出 📤

:::caution
Agoric spec 的某些功能目前可能没有启用。
:::

<iframe width="100%" src="/img/chains/agoric_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-agoric-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
