---
slug: /filecoin-node
title: 运行 Filecoin RPC 节点
---

# 运行 Filecoin RPC 节点

## 配置要求 📄 

在开始之前，Filecoin 节点设置需要许多依赖项才能正确设置。这些依赖项通常已安装在大多数现代 Linux 机器上，但还包括以下内容：

```
mesa-opencl-icd ocl-icd-opencl-dev gcc git bzr jq pkg-config curl clang build-essential hwloc libhwloc-dev wget
```

上述列表仅适用于基于 Debian/Ubuntu 的操作系统。如需不同配置，请查阅 [Lotus docs](https://lotus.filecoin.io/lotus/install/linux/#system-specific)。

:::info

请注意，您还需要 [Go v1.19.7](https://go.dev/dl/) 或更高版本才能成功安装。

:::

## 安装 Lotus Filecoin 节点 🚀

Filecoin 是一个具有不同节点实现的多样化生态系统。每个节点实现都有不同的方法来生成和管理认证令牌。本指南使用[Lotus Filecoin](https://lotus.filecoin.io/lotus/get-started/what-is-lotus/)，它是 Filecoin 网络的参考节点实现。

### 获取 Lotus
要开始操作，请在终端中输入以下内容：

```bash

git clone https://github.com/filecoin-project/lotus.git
cd lotus/
git checkout releases

```

### 决定加入 Mainnet 或 Testnet

```bash
# 加入 mainnet
make clean all

# 或加入测试网或开发网：
make clean calibnet # Calibration with min 32GiB sectors
```

### 编译 Lotus
在终端输入 `sudo make install` 完成安装。
您可以运行 `lotus --version` 来确保该过程成功完成。

:::tip

特定的 CPU 架构可能需要额外的配置。如果遇到任何错误，请查阅 [Lotus Filecoin 文档](https://lotus.filecoin.io/lotus/install/linux/#build-and-install-lotus) 了解更多详情。

:::

## 启动 RPC 服务器 🖥️ 

### 配置 RPC 节点
1. 下载和导入快照
```bash
aria2c -x5 https://snapshots.mainnet.filops.net/minimal/latest.zst
# 根据下载的快照替换 <snapshot-filename> 文件。
lotus daemon --import-snapshot <snapshot-filename> --halt-after-import

```



2. 编辑配置文件 `./.lotus/config.toml` 以运行 RPC。
   为此，您可以找到 `EnableEthRPC`，并确保将其设置为 `true`：

```bash
  # EnableEthRPC 可启用 eth_ rpc，并可存储 eth 交易哈希值与 filecoin 消息 Cids 的映射。
  # 默认情况下，这也将启用 RealTimeFilterAPI 和 HistoricFilterAPI，但可以通过上述配置选项禁用它们。
  #
  # type: bool
  # env var: LOTUS_FEVM_ENABLEETHRPC
    EnableEthRPC = true

```
### 启动

运行以下命令

```bash
nohup lotus daemon > ~/lotus.log 2>&1 &
```

日志信息可在 `~/lotus.log` 中找到 - 您的节点需要稍等片刻才能获取最新块！
之后，您就可以为 RPC 提供服务了！


## 申请加入我们的提供商孵化计划 📋

在目前的 Testnet 状态下，您还需要通过一个额外的阶段，才能成为 Lava 网络的供应商。请填写[申请表](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-filecoin&utm_medium=docs&utm_campaign=filecoin-pre-grant)，参加我们的供应商孵化计划。完成此步骤后，请随时在我们的[Discord](https://discord.gg/UxujNZbW) 留言！

## Setup your Provider on Lava Network 🌋

一旦您被接受--要在 Lava 网络上设置您的提供商，您可以参考我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-filecoin-rpc-node&utm_medium=docs&utm_campaign=filecoin-pre-grant)。这将为您提供配置和操作提供商节点的必要信息。