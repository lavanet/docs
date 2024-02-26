---
slug: /sdk-getting-started
title: 开始 ⚡
---

# 🔥 Lava SDK 入门

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 🎥 视频演示 (~11m)

<video width="90%" height="90%" controls><source src="/img/tutorial/sdk/sdk-getting-started-v3.mp4" type="video/mp4"></source></video>

<br /> <br />
<hr />
<br />

## 📝 书面指南 (~5m)

### 0. 在网关上注册账户！

使用 [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=sdk-frontend-page&utm_medium=docs&utm_campaign=docs-to-gateway)不是使用 SDK 的严格先决条件，但它提供了一种简单、免费的方法来获取 LavaSDK 初始化所需的`privateKey`或  `badge`。我们建议您决定是在 [backend](/sdk-backend) 还是 [frontend](/sdk-frontend) 上使用 Lava，然后从那里开始。LavaSDK 是点对点（p2p）的，以分散的方式执行中继。

### 1. 使用 Node 包管理器创建新的 Node.JS 项目
首先，我们将选择一个简单的node应用。

```bash
mkdir sdk-project/
cd sdk-project
npm init -y
```

### 2. 使用 yarn 或 NPM 安装 SDK

```bash
npm i @lavanet/lava-sdk
```

or

```bash
yarn add @lavanet/lava-sdk
```

### 3. 创建新的 `index.js` 文件并导入 Lava SDK

```jsx
import { LavaSDK } from "@lavanet/lava-sdk";
```

OR

```jsx
const { LavaSDK } = require("@lavanet/lava-sdk")
```

### 4. 初始化 SDK 实例！

:::info

在 [backend](/sdk-backend)上开发时，目前的最佳做法是将私钥隐藏在环境变量中，而不是以纯文本形式写入代码。现在，我们将使用 `privKey` 作为代替！

在 [frontend](/sdk-frontend) 上开发时，根本不需要使用私钥。只需输入一个badge即可！

:::

<Tabs>
<TabItem value ="frontend" label="Badges">

```jsx
//Our Main Program Function
async function useSDK() {
    // For CosmosHub Testnet, Juno Testnet, & Polygon Testnet Access
    const lavaNetwork = await LavaSDK.create({
      badge: {
        badgeServerAddress: "https://badges.lavanet.xyz" //or your own URL
        projectId: ""
      },
      chainIds: ['COS5T','JUNT1','POLYGON1']
    });
  
```

</TabItem>
<TabItem value ="backend" label="Private Key">

```jsx
//Our Main Program Function
async function useSDK() {
    // For CosmosHub Testnet, Juno Testnet, & Polygon Testnet Access
    const lavaNetwork = await LavaSDK.create({
      privateKey: privKey,
      chainIds: ['COS5T','JUNT1','POLYGON1']
    });

```

</TabItem>
</Tabs>


同时处理的链数量没有限制！除了上述示例中显示的参数外，您还可以查看许多 [可选参数](/sdk-integrations#-all-options)。

使用 `lavad` 可以查看支持的链的完整列表、各自的 ID 和支持的接口。

```bash
lavad q spec show-all-chains
```

如需查看链 ID 的简短列表，请按以下步骤运行：

```bash
lavad q spec show-all-chains | grep chainID
```

### 5. 制作您的查询或请求
我们将通过在`useSDK()`函数中发送中继来实现!


```jsx
//示例Juno查询——从Juno获取任意块!
const junoBlockResponse =  await lavaNetwork.sendRelay({
    method: "block",
    params: ["82500"],
    chainId: "JUNT1",
    apiInterface: "tendermintrpc"
});

console.log("Juno Block: ", junoBlockResponse);

//示例Cosmos查询-从CosmosHub获取最新的块!
const cosmosBlockResponse = await lavaNetwork.sendRelay({
    method: "GET",
    url: "/cosmos/base/tendermint/v1beta1/blocks/latest",
    chainId: "COS5T",
    apiInterface: "rest"
});

console.log("Cosmos Block: ",cosmosBlockResponse)

//示例多边形查询-从Polygon获取最近的块!
const polygonBlockResponse = await lavaNetwork.sendRelay({
    method: "eth_blockNumber",
    params: [],
    chainId: "POLYGON1",
    apiInterface: "jsonrpc"
});

console.log("Polygon Block: ", polygonBlockResponse)
```

### 6. 现在让我们实现程序逻辑!

我们想要调用`useSDK()`来异步运行。

```jsx
(async () => {
    await useSDK();
  })();
```

### 7. Let’s run it!

```jsx
node index.js
```

你将得到3个类似这样的响应:

![Success1](/img/tutorial/sdk/SucccesfulSDKCall1.png)
![Success2](/img/tutorial/sdk/SucccesfulSDKCall2.png)
![Success3](/img/tutorial/sdk/SucccesfulSDKCall3.png)


### **就是这样!您已经成功地使用了LavaSDK。**

有关更多信息，请查看我们的其他文档!

有困难吗?前往我们的[Discord!](https://discord.gg/Tbk5NxTCdA)