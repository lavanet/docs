---
slug: /axelar-dev
title: 获取 Axelar RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Axelar RPC

## Axelar ipRPC 🪙
Lava🌋现在为Axelar提供了激励的公共RPC。开发人员可以为所有人获得免费的公共端点。

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢 tendermint-rpc    | https://tm.axelar.lava.build            |
| 🟢 tendermint-rpc / websocket | wss://tm.axelar.lava.build/websocket |
| 🟢 rest              | https://rest.axelar.lava.build         |
| 🟢 grpc              | grpc.axelar.lava.build:443             |

### Testnet 🧪

| Service 🔌                  | URL 🔗                                    |
|-----------------------------|-------------------------------------------|
| 🟢 tendermint-rpc            | https://tm.axelar-testnet.lava.build       |
| 🟢 tendermint-rpc / websocket | wss://tm.axelar-testnet.lava.build/websocket |
| 🟢 rest                      | https://rest.axelar-testnet.lava.build     |
| 🟢 grpc                      | grpc.axelar-testnet.lava.build:443        |



## [Gateway](https://gateway.lavanet.xyz/?utm_source=axelar-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=axelar-dev&utm_medium=docs&utm_campaign=docs-to-docs)


## [SDK](https://github.com/lavanet/lava-sdk)

### 输入 📥


<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAxelarMainnet() {

  const AxelarMainnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'AXELAR',
    rpcInterface: 'rest',
  });

  const AxelarBlockResponse =  await AxelarMainnet.sendRelay({
    method: "GET",
    url: "/node_info",
  });

  console.log(AxelarBlockResponse);
}

(async () => {
    await useAxelarMainnet();
  })();
```

</TabItem>

<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useAxelarMainnet() {

  const AxelarMainnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL 
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'AXELAR',
    rpcInterface: "rest",
  });

  const AxelarBlockResponse =  await AxelarMainnet.sendRelay({
    method: "GET",
    url: "/node_info",
  });

  console.log(AxelarBlockResponse);
}

(async () => {
    await useAxelarMainnet();
  })();
```

</TabItem>
</Tabs>

### 输出 📤

<iframe width="100%" src="/img/chains/axelar_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-axelar-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />