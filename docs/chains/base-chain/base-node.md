---
slug: /base-node
title: 运行 Base RPC 节点
---

# 运行 Base RPC 节点

## 配置要求 📄 

在开始之前，请确保安装[Docker](https://www.docker.com/get-started)。安装好docker后，您可以继续下一步。

    >16 GB RAM
    SSD, 2 TB free space


## 设置Base节点镜像 📥

### 💿 设置 L1 全节点 RPC

在使用 Base 之前，你需要运行一个以太坊 L1 完整节点。如果使用 docker-compose，请设置 `OP_NODE_L1_ETH_RPC`。

### ✨ 克隆仓库

```bash
git clone https://github.com/base-org/node.git
```

取消`docker-compose.yml`中与网络相关的行注释


### 🚀 启动节点

```bash
docker compose up --build
```

现在RPC服务准备好了!

## 申请我们的提供商孵化计划 📋

在我们目前的Testnet状态中，在您可以成为Lava网络上的提供者之前，还需要通过一个额外的阶段。请填写[申请表格](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-base&utm_medium=docs&utm_campaign=base-pre-grant)。一旦你完成了这一步，请随时在我们的[Discord](https://discord.gg/UxujNZbW)中留言!

## 在Lava网络上设置你的提供商 🌋

一旦您被接受-要在Lava网络上设置您的提供商，您可以参阅我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-base-rpc-node&utm_medium=docs&utm_campaign=base-pre-grant)。这将为您提供配置和操作provider节点所需的信息。