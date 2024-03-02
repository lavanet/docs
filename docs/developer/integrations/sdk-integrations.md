---
slug: /sdk-integrations
title: 库集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 集成 🔌

## 概览 🔎

可以甚至鼓励将Lava与流行的web3开发库一起使用，例如[ethers.js](/ethersjs6)， [web3.js](/web3js)， [cosmjs](/cosmjs)和[viem](/viem)。Lava集成允许开发人员使用他们最喜欢的开发工具构建分散的应用程序(dApps)，同时利用Lava的高质量RPC提供商的分散点对点网络。不需要牺牲常用api的功能，只需在构建时安装和使用指定的Lava集成!

## 使用 🏗️

利用集成是实现多链和去中心化应用的重要方式。由于架构的差异，每个 Lava 集成都有其特点。然而，它们都遵循相同的一般流程：

1. 在您的项目中安装支持的 web3 开发包（例如 `npm i viem`）。
2. 在您的项目中安装 Lava 集成包（例如 `npm i @lavanet/lava-viem`）。
3. 使用正确的 [参数](#parameters) 初始化相应的 SDK 集成对象。下面提供了一个图表供您参考。您必须提供已订阅的 *privateKey* 或有效的 *badge*，但不能同时提供两者。

### ✔️ 必要参数{#parameters}

必须填写的两个主要字段是：用于支付 API 调用费用的 `badge`/`privateKey`和用于让 Lava 知道目标链的`chainIds` 。如果您还没有注册，应从 [Lava Gateway](https://gateway.lavanet.xyz/?utm_source=library-integrations&utm_medium=docs&utm_campaign=lava-phase-2) 注册，在那里您可以轻松获得这两个信息！

```javascript
badge: {
    badgeServerAddress: "https://badges.lavanet.xyz" //or your own URL
    projectId: ""
}

// OR

privateKey: process.env.PRIVATE_KEY

// AND

chainIds: "ETH1"
```

### 📋 所有选项

在创建和初始化 Lava 集成对象时，还可以配置许多其他选项。下面是一个详尽的列表：


| 选项                          | 必要/可选        | 说明                                                                                          |
|-----------------------------|--------------|---------------------------------------------------------------------------------------------|
| `privateKey`                | **Required** | 用于代替`badge`的有效订阅的私人密钥。                                                                      |
| `badge`                     | **Required** | 徽章服务器的公共 URL 和要连接的项目 ID。如果提供了徽章，请移除 `privateKey`。                                           |
| `chainIds`                  | **Required** | 要查询的链的 ID 或链 ID 数组 (e.g., "ETH1" or ["ETH1", "LAV1"])                                       |
| `pairingListConfig`         | Optional     | 用于与 Lava 网络通信的 Lava 配对列表配置。默认为 [Lava-providers](https://github.com/lavanet/lava-providers)。 |
| `network`                   | Optional     | 要使用的配对列表配置中的网络（例如，["mainnet", "testnet"] )                                                  |
| `geolocation`               | Optional     | 使用的地理位置（例如，"1 "表示北美，"2 "表示欧洲-->"1 "为默认值）                                                    |
| `lavaChainId`               | Optional     | Lava 链 ID（Lava Testnet 的默认值为 "lava-testnet-2"）。                                             |
| `secure`                    | Optional     | 通过 HTTPS 通信（临时标记，一旦链默认使用 HTTPS，该标记将被禁用）                                                     |
| `allowInsecureTransport`    | Optional     | 表示在连接提供商时使用不安全传输协议，仅供测试之用                                                                   |
| `logLevel`                  | Optional     | 日志级别设置(e.g., "debug", "info", "warn", "error", "success", "NoPrints")          |
| `transport`                 | Optional     | 用于更改传输方式的传输设置                                     |
| `providerOptimizerStrategy` | Optional     | 用于选择提供商的策略（default: balanced）                                   |
| `maxConcurrentProviders`    | Optional     | 同时使用的最大提供商数量（默认值：3）                            |


:::tip

您可以选择使用以下代码调入一个包含所有这些字段的对象：

```javascript
import { LavaSDKOptions } from "@lavanet/lava-sdk"
```

这需要安装 `@lavanet/lava-sdk` 作为依赖项！

:::

## 仓库 🛠️

![github](/img/github_favicon.ico) [github](https://github.com/lavanet/lava-sdk-providers/):

```
lavanet/lava-sdk-providers
```
