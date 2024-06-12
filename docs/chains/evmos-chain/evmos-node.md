---
slug: /evmos-node
title: 运行 Evmos RPC 节点
---

# 运行 Evmos RPC 节点

## 配置要求 📄 

```
- 8 core CPU 
- 64gb of RAM
- go 1.20+
- jq 1.6+
- ports 8545/8546 open & exposed
```

## 安装 Evmos CLI 🚀

该软件是运行Evmos RPC节点所必需的。


```bash
git clone https://github.com/evmos/evmos.git
cd evmos
git fetch
git checkout <tag>
make install
```

需要将`<tag>`替换为[此处](https://github.com/evmos/evmos/tags)可见的最新版本的名称。


## 启动节点 ❗

使用Evmos启动节点可能需要各种配置，但命令相对简单:

```bash
./evmosd start \ 
    --json-rpc.enable \
    --api.enable \
    --grpc-web.enable \
    --grpc.enable
```
您可以编辑 `app. toml` 文件来更改节点上的设置。 在 `app. toml` 文件中，您可以找到gas cap, CORS, Pruning以及如何配置 WebSocket 服务器。 如需更多信息，请查阅 [Evmos 文档](https://docs.evmos.org/protocol/evmos-cli/configuration#running-the-json-rpc-server)
## Evmos ipRPC 🪙

作为节点运行商，您想接触更多开发人员并获得更多奖励吗？Evmos 向感兴趣的提供商支付报酬。Evmos 向其生态系统中的开发者提供激励公共 RPC（ipRPC）端点。在这里注册，您就可以成为我们的主要提供商之一，为去中心化公共产品做出贡献。[立即注册！](https://lavanet.typeform.com/to/qQ1x6WJs?utm_source=becoming-a-lava-provider-for-evmos&utm_medium=docs&utm_campaign=evmos-post-grant)

## 在 Lava 网络上设置您的提供商 🌋

一旦您被接受--要在 Lava 网络上设置您的提供商，您可以参考我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-evmos-rpc-node&utm_medium=docs&utm_campaign=evmos-post-grant)。这将为您提供配置和操作提供商节点的必要信息。