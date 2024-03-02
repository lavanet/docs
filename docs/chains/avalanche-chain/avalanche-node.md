---
slug: /avalanche-node
title: 运行 Avalanche RPC 节点
---

# 运行 Avalanche RPC 节点

## 配置要求 📄 

在开始之前，请确保您的机器满足以下[最低要求](https://docs.avax.network/nodes/build/set-up-node-with-installer#before-you-start):

    CPU: Equivalent of 8 AWS vCPU
    RAM: 16 GiB
    Storage: 1 TiB
    OS: Ubuntu 20.04 or MacOS >= 12
    Network: sustained 5Mbps up/down bandwidth
    Go version >= 1.19.6

## 安装 AvalancheGo 🚀

AvalancheGo是Avalanche节点的一个go实现。这个软件是运行雪崩RPC节点所必需的。
AvalancheGo可以使用bash脚本在本地机器上自动安装，也可以使用一些命令手动安装。雪崩文档中有[自动安装](https://docs.avax.network/nodes/build/set-up-node-with-installer)和[手动安装](https://docs.avax.network/nodes/build/run-avalanche-node-manually)的详细指南。



### 自动化脚本

要使用AvalancheGo install脚本进行自动化安装，请在终端中输入以下命令:

```bash
wget -nd -m https://raw.githubusercontent.com/ava-labs/avalanche-docs/master/scripts/avalanchego-installer.sh;\
chmod 755 avalanchego-installer.sh;\

# 安装主网时，运行以下命令:
./avalanchego-installer.sh

# 安装测试网时，运行以下命令:
./avalanchego-installer.sh --fuji
```

这将开始一个自动化的脚本安装，并提示你配置你的节点。当你被问到RPC端口应该是private还是public时——确保选择`public` !
该节点将在脚本完成后启动。

### 手动构建二进制文件

要手动构建和安装AvalancheGo，请在终端中输入以下命令:


```bash
git clone https://github.com/ava-labs/avalanchego.git
cd avalanchego
./scripts/build.sh

# 要在主网上运行你的节点，运行以下命令:
./build/avalanchego

# 要在Testnet上运行你的节点，请运行以下命令:
./build/avalanchego --network-id=fuji
```

您的节点启动后需要一段时间才能同步。 请等待它同步到最新区块。

# 配置提供商

:::tip
Avalanche有一个将websocket添加到提供商端点的特殊用例。这是因为只有C链支持websocket端点，而X/P链不支持。要了解不同雪崩链类型之间的差异，请查看他们的[文档](https://docs.avax.network/learn/avalanche/avalanche-platform#c-chain)/
:::

下面提供了一个yaml示例。你也可以在LavaMonorepo[这里](https://github.com/lavanet/lava/blob/main/config/provider_examples/avalanch_internal_paths_example.yml)找到它。

```yaml
endpoints:
    - api-interface: jsonrpc
      chain-id: AVAX
      network-address: 127.0.0.1:2221
      node-urls:
        - url: ws://127.0.0.1:3333/C/rpc/ws
          internal-path: "/C/rpc" # c chain like specified in the spec
        - url: https://127.0.0.1:3334/C/avax
          internal-path: "/C/avax" # c/avax like specified in the spec
        - url: https://127.0.0.1:3335/X
          internal-path: "/X" # x chain like specified in the spec
        - url: https://127.0.0.1:3336/P
          internal-path: "/P" # p chain like specified in the spec
```

## 申请我们的提供商孵化计划 📋

在我们目前的Testnet状态中，在您可以成为Lava网络上的提供商之前，还需要通过一个额外的阶段。请填写[申请表格](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-avalanche&utm_medium=docs&utm_campaign=avalanche-pre-grant)。一旦你完成了这一步，请随时在我们的[Discord](https://discord.gg/UxujNZbW)中留言!

## 在Lava网络上设置你的提供商 🌋

一旦你被接受-在Lava网络上设置你的提供商，你可以参考[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-avalanche-rpc-node&utm_medium=docs&utm_campaign=avalanche-pre-grant)可在我们的文档的其他地方。这将为您提供必要的信息，以便在Lava网络上配置和操作您的提供商节点。