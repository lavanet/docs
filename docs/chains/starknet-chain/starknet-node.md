---
slug: /starknet-node
title: 运行 Starknet RPC 节点
---

# 运行 Starknet RPC 节点

## 配置要求 📄

### Minimum Requirements

    CPU: 2+ cores
    RAM: 4 GB
    Disk: 600 GB
    Connection Speed: 8 mbps/sec

### Recommended Specifications

    CPU: 4+ cores
    RAM: 16 GB+
    Disk 2 TB
    Connection Speed: 25+ mbps/sec


##  安装Starknet L1包 📦 

Docker抽象了ETH L1节点的需求，但在幕后，Starknet需要Lighthouse和Besu。Lighthouse处理共识，Besu处理执行。它们都可以使用以下命令安装:

```bash
git clone git@github.com:starknet-edu/starknet-stack.git
cd starknet-stack
docker compose -f dc-l1.yaml up -d
```

为验证连接是否成功，可以在以下命令输出中查看端口信息:

```bash
sudo netstat -lpnut | grep -E '30303|8551|854
sudo netstat -lpnut | grep -E '5054|9000'
```

在您看到成功之后，您的L1客户端将需要一段时间来同步。你可以像这样检查它的状态:

```bash
# 检查goerli etherscan以确保您拥有最新的区块

curl --location --request POST 'http://localhost:8545' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc":"2.0",
    "method":"eth_blockNumber",
    "params":[],
    "id":83
}'
```

在继续之前，将您的数字与Starknet的Testnet_1进行比较。

## 安装Starknet L2包 📦

> 有三个可能的节点可用于[Starknet](https://www.starknet.io/en/ecosystem/fullnodes-and-rpc-services)

### Pathfinder node
`cd`到starknet-stack项目根目录，并使用以下命令启动L2执行客户端:

```bash
docker compose -f dc-l2.yaml up -d
```

它需要一段时间来同步，但你可以随时检查它，像这样:

```bash

curl --location --request POST 'http://localhost:9545' \
--header 'Content-Type: application/json' \
--data-raw '{
 "jsonrpc":"2.0",
 "method":"starknet_syncing",
 "params":[],
 "id":1
}'
```

检查你的输出!一旦`current_block_num`和`highest_block_num`相同，你就完成了同步。

### Juno 节点
Juno是Nethermind实现的golang Starknet节点，目的是去中心化Starknet。

#### 使用Docker运行
要使用Docker运行Juno，请使用以下命令。在运行命令之前，请确保在本地计算机上创建了$HOME/juno目录。

```bash
docker run -d \
  --name juno \
  -p 6060:6060 \
  -v $HOME/juno:/var/lib/juno \
  nethermind/juno:latest \
  --http \
  --http-port 6060 \
  --http-host 0.0.0.0 \
  --db-path /var/lib/juno \
  --eth-node <YOUR-ETH-NODE> \
  --pending-poll-interval=3s
```

您应该将```<YOUR-ETH-NODE>```替换为您实际的以太坊节点地址。

参数```——pending-poll-interval```设置挂起的块被更新的频率。

❗ **默认情况下它是禁用的，但从lava v0.27.0开始应该启用**

使用下面的命令查看Docker容器中的日志:

```docker logs -f juno```

更多详情，请访问[官方文档](https://github.com/NethermindEth/juno)

## 运行索引器  🏃

```bash
/indexer/indexer.sh
```

## 做一个测试交易 💸 

作为Starknet文档的一部分，建议您执行一个测试事务来验证Starknet的所有级别都是正常工作和有效的。

```bash
https://book.starknet.io/chapter_4/node.html#layer_4_transport_layer
```

就是这样!你已经准备好为RPC服务了!

## 申请我们的供应商孵化计划 📋

在我们目前的Testnet状态中，在您可以成为Lava网络上的提供者之前，还需要通过一个额外的阶段。请填写[申请表格](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-starknet&utm_medium=docs&utm_campaign=starknet-pre-grant)。一旦你完成了这一步，请随时在我们的[Discord](https://discord.gg/UxujNZbW)中留言!

## 在Lava网络上设置你的提供商 🌋

一旦您被接受-要在Lava网络上设置您的提供商，您可以参阅我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-starknet-rpc-node&utm_medium=docs&utm_campaign=starknet-pre-grant)。这将为您提供配置和操作provider节点所需的信息。