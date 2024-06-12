---
slug: /near-node
title: 运行 NEAR RPC 节点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 运行 NEAR RPC 节点

## 配置要求 📄 

在开始之前，请确保您的机器满足以下[最低要求](https://near-nodes.io/rpc/hardware-rpc):

<Tabs>
<TabItem value="rec_req" label="Recommended">

    CPU: 8-Core (16-Thread) Intel i7/Xeon or equivalent with AVX support
    RAM: 20GB DDR4
    Storage: 1TB SSD  - NVMe SSD recommended
    OS: MacOS / Linux

</TabItem>

<TabItem value="min_req" label="Minimum">

```
CPU: 8-Core (16-Thread) Intel i7/Xeon or equivalent with AVX support
RAM: 12GB DDR4
Storage: 500GB SSD
OS: MacOS / Linux
```

</TabItem>
</Tabs>

:::tip

安装NEAR还需要当前安装[Rust](https://www.rust-lang.org/)、[Git](https://git-scm.com/)以及许多常用的开发工具(`python`、`docker`、`awscli`和`protobuf-compiler`)。

:::

## 安装 📥

### 获取 `nearcore`

克隆`nearcore`仓库到你的机器并切换到它。

```bash
git clone https://github.com/near/nearcore
cd nearcore
git fetch origin --tags
```

获取 [latest release](https://github.com/near/nearcore/releases).

```bash
git checkout tags/<RELEASE TAG HERE> -b mynode
```

### 编译最新的稳定版本

确保你在正确的文件夹(`/nearcore/`)中，然后运行以下命令:

```bash
make release
```

:::caution
`make release`将编译`nearcore`。编译是一个时间密集型过程，在推荐的硬件上可能需要大约30分钟或更长时间。
:::

### 配置release文件夹
使用一个命令，您可以创建所需的目录结构——生成配置。json, node_key。Json，并下载一个生成器。你选择的chain-id对应的Json。


<Tabs>
<TabItem value="near-main" label="🌐 Mainnet">

```bash
./target/release/neard --home ~/.near init --chain-id mainnet --download-genesis --download-config
```


</TabItem>

<TabItem value="near-test" label="🧪 Testnet">

```bash
./target/release/neard --home ~/.near init --chain-id testnet --download-genesis --download-config
```

</TabItem>
</Tabs>

### 启动你的节点! 🚀

运行以下命令来初始化你的节点!

```bash

# 获取备份数据
aws s3 --no-sign-request cp s3://near-protocol-public/backups/mainnet/rpc/latest .
LATEST=$(cat latest)
aws s3 --no-sign-request cp --no-sign-request --recursive s3://near-protocol-public/backups/mainnet/rpc/$LATEST ~/.near/data

# 启动节点!
./target/release/neard --home ~/.near run
```

## 配置提供商 🔧

在你的节点准备就绪后，你可以使用provider来设置。
使用以下模板设置提供程序配置文件：

<Tabs>
<TabItem value="near-ex-conf1" label="🌐 Mainnet Example">

```yaml
endpoints:
 - api-interface: jsonrpc
   chain-id: NEAR
   network-address:
    address: "127.0.0.1:port"
    disable-tls: true
   node-urls:
    - url: https://endpoint/mainnet/erpc

metrics-listen-address: ":port"
```

</TabItem>
<TabItem value="near-ex-conf2" label="🧪 Testnet Example">

```yaml
endpoints:
 - api-interface: jsonrpc
   chain-id: NEART
   network-address:
    address: "127.0.0.1:port"
    disable-tls: true
   node-urls:
    - url: https://endpoint/testnet/erpc

metrics-listen-address: ":port"
```


</TabItem>
</Tabs>

## NEAR ipRPC 🪙

作为节点运行者，想接触更多开发者并获得更多奖励？NEAR 为其生态系统中的开发者提供激励公共 RPC (ipRPC)端点。在这里注册，您就可以成为我们的主要供应商之一，为去中心化公共产品做出贡献。[立即注册！](https://lavanet.typeform.com/to/plCaDdVM?utm_source=becoming-a-lava-provider-for-near&utm_medium=docs&utm_campaign=near-post-grant)


## 在 Lava 网络上设置您的提供商 🌋

一旦您被接受--要在 Lava 网络上设置您的提供商，您可以参考我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-near-rpc-node&utm_medium=docs&utm_campaign=near-post-grant)。这将为您提供在 Lava 网络上配置和运行提供商节点的必要信息。
