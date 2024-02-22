---
slug: /cosmoshub-node
title: 运行 Cosmoshub RPC 节点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 运行 Cosmoshub RPC 节点

## 配置要求 📄 

<Tabs>
<TabItem value="def_req" label="Default">


    RAM: 16 GB RAM
    Storage: 1 TB

</TabItem>

<TabItem value="min_req" label="Full Node">

    RAM: 32 GB RAM
    Storage: 2 TB

</TabItem>


<TabItem value="val_req" label="Validator Node">

    RAM: 32 GB RAM
    Storage: 500 GB - 2 TB

</TabItem>
</Tabs>

## 安装 `gaiad` 

在 CosmosHub 上运行节点的前置条件之一是使用 `gaiad`。要开始使用，请确保您 [install 安装 `gaiad`](https://hub.cosmos.network/main/getting-started/installation.html)。

## 配置和启动节点 🚀

请跟随 Cosmos 官方指南了解如何启动您的节点：
https://hub.cosmos.network/main/hub-tutorials/join-mainnet.html#general-configuration

在运行 `gaiad start` 之前，您需要修改 `~/.gaia/config/config.toml` 和 `~/.gaia/config/app.toml` ！

## 申请我们的提供商孵化计划 📋

在目前的 Testnet 状态下，您还需要通过一个额外的阶段，才能成为 Lava 网络的供应商。请填写[申请表](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-cosmoshub&utm_medium=docs&utm_campaign=cosmoshub-pre-grant)，参加我们的供应商孵化计划。完成此步骤后，请随时在我们的[Discord](https://discord.gg/UxujNZbW) 留言！

## 在Lava网络上设置你的提供商 🌋

一旦您被接受--要在 Lava 网络上设置您的提供商，您可以参考我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-cosmoshub-rpc-node&utm_medium=docs&utm_campaign=cosmoshub-pre-grant)。这将为您提供配置和操作提供商节点的必要信息。