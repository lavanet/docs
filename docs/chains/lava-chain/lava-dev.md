---
slug: /lava-dev
title: 获取 Lava RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Lava RPC

## 公共 RPC

Lava也提供自助式RPC
⚠️ 使用我们的 [Official Endpoints](/public-rpc)!

## [Gateway](https://gateway.lavanet.xyz/?utm_source=lava-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=lava-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## SDK

### 输入 📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function uselavaMainnet() {

  const lavaMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'LAV1',
    rpcInterface: 'rest'
  });

  const lavaBlockResponse =  await lavaMainnet.sendRelay({
    connectionType: "GET",
    url: "/cosmos/base/tendermint/v1beta1/node_info"
  });

  console.log(lavaBlockResponse);
}

(async () => {
    await uselavaMainnet();
  })();
```

</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function uselavaMainnet() {

  const lavaMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL
      projectId: "enter_your_project_id_here" 
    },    
    chainIds: 'LAV1',
    rpcInterface: 'rest'
  });

  const lavaBlockResponse =  await lavaMainnet.sendRelay({
    connectionType: "GET",
    url: "/cosmos/base/tendermint/v1beta1/node_info"
  });

  console.log(lavaBlockResponse);
}

(async () => {
    await uselavaMainnet();
  })();
```
</TabItem>
</Tabs>


要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-lava-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
