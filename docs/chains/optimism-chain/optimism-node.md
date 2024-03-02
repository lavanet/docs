---
slug: /optimism-node
title: 运行 Optimism RPC 节点
---

## 配置要求 📄 

开始之前，请确认您的计算机符合以下 [系统要求](https://github.com/smartcontracts/simple-optimism-node#recommended-hardware)：

```
    docker installed
    16GB+ RAM
    2TB SSD
    10mb/s+ download

```

## 通过 Docker 安装 🚀

在 Optimism 上运行节点最好通过 Docker 来完成，不过，如果您想采取手动构建的步骤，可以参考 [此处](https://community.optimism.io/docs/developers/build/run-a-node/#non-docker-configuration) 提供的指南。

### 克隆存储库

```bash
git clone https://github.com/smartcontracts/simple-optimism-node.git
cd simple-optimism-node
cp .env.example .env
```

### 配置节点

您需要打开 `.env` 文件，并根据您的喜好更改文件的环境变量。请注意，您可能需要启动一个旧版节点以获取完整的历史区块数据。确保填写 `REQUIRED` 部分中的所有变量。


### 启动节点

```bash
docker compose --profile current up -d
```

That's it! You're good to go.

## 申请加入我们的提供商孵化计划 📋

在我们目前的 Testnet 状态下，您还需要通过一个额外的阶段才能成为 Lava 网络的供应商。请填写[申请表](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-optimism&utm_medium=docs&utm_campaign=optimism-pre-grant)，参加我们的供应商孵化计划。完成此步骤后，请随时在我们的[Discord](https://discord.gg/UxujNZbW) 留言！

## 在 Lava 网络上设置您的提供商 🌋

一旦您被接受--要在 Lava 网络上设置您的提供商，您可以参考我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-optimism-rpc-node&utm_medium=docs&utm_campaign=optimism-pre-grant)。这将为您提供配置和操作提供商节点的必要信息。