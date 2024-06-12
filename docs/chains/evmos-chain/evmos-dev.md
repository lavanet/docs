---
slug: /evmos-dev
title: 获取 Evmos RPC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获取 Evmos RPC

## Evmos ipRPC 🪙
Lava🌋现在为Evmos提供奖励公共RPC。开发者可以获得免费的公共终端。

### Mainnet 🌐

| Service 🔌          | URL 🔗                                 |
|---------------------|----------------------------------------|
| 🟢 tendermint-rpc    | https://tm.evmos.lava.build            |
| 🟢 tendermint-rpc / websocket | wss://tm.evmos.lava.build/websocket |
| 🟢 json-rpc          | https://evmos.lava.build               |
| 🟢 json-rpc / websocket | wss://evmos.lava.build/websocket     |
| 🟢 rest              | https://rest.evmos.lava.build          |
| 🟢 grpc              | grpc.evmos.lava.build:443              |
| 🟢 web-gRPC          | https://grpc.evmos.lava.build          |


### Testnet 🧪

| Service 🔌                  | URL 🔗                                    |
|-----------------------------|-------------------------------------------|
| 🟢 tendermint-rpc            | https://tm.evmos-testnet.lava.build       |
| 🟢 tendermint-rpc / websocket | wss://tm.evmos-testnet.lava.build/websocket |
| 🟢 json-rpc                  | https://evmos-testnet.lava.build          |
| 🟢 json-rpc / websocket      | wss://evmos-testnet.lava.build/websocket  |
| 🟢 rest                      | https://rest.evmos-testnet.lava.build     |
| 🟢 grpc                      | grpc.evmos-testnet.lava.build:443         |
| 🟢 web-gRPC                  | https://grpc.evmos-testnet.lava.build     |


<br />
<hr />

## [Gateway](https://gateway.lavanet.xyz/?utm_source=evmos-dev&utm_medium=docs&utm_campaign=docs-to-gateway)

要了解有关使用Lava网关的更多信息，请访问[入门指南](https://docs.lavanet.xyz/gateway-getting-started?utm_source=evmos-dev&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />
<br />

## [SDK](https://github.com/lavanet/lava-sdk)

### 输入  📥

<Tabs>
<TabItem value="backend" label="BackEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEvmosTestnet() {

  const evmosTestnet = await LavaSDK.create({
    privateKey: process.env.PRIVATE_KEY, //将私钥隐藏在环境变量中
    chainIds: 'EVMOST',
  });

  const evmosBlockResponse =  await evmosTestnet.sendRelay({
    method: "block",
    params: ["15500000"],
  });

  console.log(evmosBlockResponse);
}

(async () => {
    await useEvmosTestnet();
  })();
```
</TabItem>
<TabItem value="frontend" label="FrontEnd">

```jsx
// 使用以下命令安装lavaSDK:
// npm i @lavanet/lava-sdk
const { LavaSDK } = require("@lavanet/lava-sdk")

async function useEvmosTestnet() {

  const evmosTestnet = await LavaSDK.create({
    badge: {
      badgeServerAddress: "https://badges.lavanet.xyz", // 或者您自己的徽章服务器URL
      projectId: "enter_your_project_id_here" 
    },
    chainIds: 'EVMOST',
  });

  const evmosBlockResponse =  await evmosTestnet.sendRelay({
    method: "block",
    params: ["15500000"],
  });

  console.log(evmosBlockResponse);
}

(async () => {
    await useEvmosTestnet();
  })();
```

</TabItem>
</Tabs>

### 输出 📤

<iframe width="100%" src="/img/chains/evmos_call.webm" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

要了解有关我们的SDK的更多信息，请访问[入门指南](https://docs.lavanet.xyz/sdk-getting-started?utm_source=getting-evmos-rpc&utm_medium=docs&utm_campaign=docs-to-docs)

<hr />