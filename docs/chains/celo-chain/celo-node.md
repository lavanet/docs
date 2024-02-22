---
slug: /celo-node
title: 运行Celo RPC节点
---

# 运行Celo RPC节点

## 配置要求 📄 

在开始之前，请确保安装[Docker](https://www.docker.com/get-started)。安装好docker后，您可以继续下一步。


## 安装Celo Docker镜像 📥

Celo的节点是由使用Docker CLI获取的Docker镜像构建的。该软件是运行Celo RPC节点所必需的。首先，在终端中输入以下代码:

```bash
export CELO_IMAGE=us.gcr.io/celo-org/geth:mainnet
docker pull $CELO_IMAGE
mkdir celo-data
cd celo-data
```

### 将公共地址置于环境变量中 🪧
```bash
export CELO_ACCOUNT_ADDRESS=<YOUR-ACCOUNT-ADDRESS>
```

如果您还没有 Celo 账户地址，请使用以下命令创建一个：
```bash
docker run -v $PWD:/root/.celo --rm -it $CELO_IMAGE account new
```

### 启动节点 🚀

```bash
docker run --name celo-fullnode -d --restart unless-stopped --stop-timeout 300 -p 127.0.0.1:8545:8545 -p 127.0.0.1:8546:8546 -p 30303:30303 -p 30303:30303/udp -v $PWD:/root/.celo $CELO_IMAGE --verbosity 3 --syncmode full --http --http.addr 0.0.0.0 --http.api eth,net,web3,debug,admin,personal --light.serve 90 --light.maxpeers 1000 --maxpeers 1100 --etherbase $CELO_ACCOUNT_ADDRESS --datadir /root/.celo
```

现在RPC服务准备好了!

## 申请我们的提供商孵化计划 📋

在目前的 Testnet 状态下，您还需要通过一个额外的阶段，才能成为 Lava 网络的供应商。请填写[申请表](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-celo&utm_medium=docs&utm_campaign=celo-pre-grant)，参加我们的供应商孵化计划。完成此步骤后，请随时在我们的[Discord](https://discord.gg/UxujNZbW) 留言！

## 在Lava网络上设置你的提供商 🌋

一旦您被接受--要在 Lava 网络上设置您的提供商，您可以参考我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-celo-rpc-node&utm_medium=docs&utm_campaign=celo-pre-grant)。这将为您提供配置和操作提供商节点的必要信息。