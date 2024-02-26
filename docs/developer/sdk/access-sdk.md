---
slug: /access-sdk
title: SDK
---

# Lava SDK (Beta)

## 概览 🔎

Lava-SDK**是一个功能强大的JavaScript/TypeScript库，专为开发人员设计。它实现了对 Lava 生态系统支持的所有链的去中心化访问，可在服务器和浏览器环境中使用。通过将 Lava-SDK 导入项目，开发人员可以轻松地与多个区块链进行交互，并构建去中心化应用程序。


![github](/img/github_favicon.ico) [github](https://github.com/lavanet/lava/tree/main/ecosystem/lava-sdk):

```
lavanet/lava/ecosystem/lava-sdk
```

![npm](/img/npm_favicon.ico) [npm](https://www.npmjs.com/package/@lavanet/lava-sdk):

```
@lavanet/lava-sdk
```

## 必要准备 📋

Lava SDK 设置目前需要额外的步骤，但我们正在努力减少先决条件，以迈向 Mainnet。建议流程如下

1. 在 [Lava Gateway](https://gateway.lavanet.xyz?utm_source=access-sdk-page&utm_medium=docs) 上创建一个账户 🎫

2. 将 `@lavanet/lava-sdk` 安装到本地项目库中！📥

3. 决定是做 [frontend](/sdk-frontend) 还是 [backend](/sdk-backend) 🏭 

4. 向 Lava Gateway 添加公钥，或使用 Lava 徽章服务器自动生成的徽章！🔑 📛
 

## 仓库 🔧

📦 [Lava-SDK](https://github.com/lavanet/lava-sdk)：Lava SDK 库的实现。该库为开发人员以去中心化方式与多个区块链网络交互提供核心功能。

📦 [Lava-SDK-providers](https://github.com/lavanet/lava-sdk-providers/tree/feature/implement_ethersjs_provider)：包含用于使用 Lava SDK 底层功能访问区块链的各种第三方库的提供程序实现。Lava-SDK-providers 目前支持 ethers.js、web3.js、cosmjs 和 viem 集成，我们计划在未来添加对更多区块链库和 web3 API 的支持。

📦 [Lava-providers](https://github.com/lavanet/lava-providers)：包含 `sdkSeedProviders.json`，这是 LavaSDK 用来发现第一个连接以访问初始配对数据的提供商的资源。
