---
slug: /axelar-node
title: 运行 Axelar RPC 节点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 运行 Axelar RPC 节点

## 配置要求 📄 

在开始之前，请确保您的机器满足以下[最低要求](https://docs.avax.network/nodes/build/set-up-node-with-installer#before-you-start):

<Tabs>
<TabItem value="min_req" label="Minimum">

    CPU: 4 cores
    RAM: 8-16 GB RAM
    Storage: 512 GB
    OS: Ubuntu 18.04 or MacOS(x86)
    ARM 64 or AMD64

</TabItem>

<TabItem value="rec_req" label="Recommended">

```
CPU: 6-8 cores
RAM: 16-32 GB RAM
Storage: 1 TB
OS: Ubuntu 18.04 or MacOS(x86)
```

</TabItem>
</Tabs>

## 安装 📥

:::caution
一些用户报告了Axelarate安装脚本的问题。如果您遇到问题，请考虑制作一个[issue](https://github.com/axelarnetwork/axelarate-community/issues)或尝试手动安装。
:::

克隆Axelarate-Community仓库，然后运行Node安装脚本。
```bash
git clone https://github.com/axelarnetwork/axelarate-community.git
cd axelarate-community
./scripts/setup-node.sh -n [mainnet|testnet]
```

### 启动你的节点! 🚀

运行以下命令来初始化你的节点!

```bash
$AXELARD_HOME/bin/axelard start [moniker] --home $AXELARD_HOME >> $AXELARD_HOME/logs/axelard.log 2>&1 &
```

## Axelar ipRPC 🪙

想接触更多的开发人员并作为节点运运营商获得更多的奖励吗?Axelar向感兴趣的提供商付费。Axelar在其生态系统中为开发者提供激励公共RPC (ipRPC)端点。通过在这里注册，您可以成为我们的主要供应商之一，为去中心化的产品作出贡献。[现在报名吧!](https://lavanet.typeform.com/to/qQ1x6WJs?utm_source=becoming-a-lava-provider-for-axelar&utm_medium=docs&utm_campaign=axelar-post-grant)


## 在Lava网络上设置你的提供商 🌋

一旦您被接受-要在Lava网络上设置您的提供商，您可以参阅我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-axelar-rpc-node&utm_medium=docs&utm_campaign=axelar-post-grant)。这将为您提供在Lava网络上配置和操作provider节点所需的信息。