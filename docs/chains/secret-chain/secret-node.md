---
slug: /secret-node
title: Running a Secret Network RPC Node
---

# 运行 Secret Network RPC 节点

## 要求 📄

### 硬件要求 💻
Secret Network 有严格的硬件要求。在开始之前，请查看以下内容：

- [支持的 CPU](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/setting-up-a-node-validator/hardware-setup/hardware-compliance#cpus)
- [支持的主板](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/setting-up-a-node-validator/hardware-setup/hardware-compliance#supported-motherboards)

### 软件要求 🔢

- Ubuntu / Debian 操作系统

## 安装依赖 📦

### 📥 安装 SGX 和 Secretd

运行完整节点所需的两个组件。要安装，请在终端中输入以下命令：

```bash
# sgx
wget https://raw.githubusercontent.com/SecretFoundation/docs/main/docs/node-guides/sgx
sudo bash sgx

# secretd
wget https://raw.githubusercontent.com/SecretFoundation/docs/main/docs/node-guides/install-secretd
sudo bash install-secretd
```

## 初始化和配置节点 ⚙️

设置节点需要许多步骤。
请访问[Secret Network 文档](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/setting-up-a-node-validator/node-setup/setup-full-node#installation)获取完整信息。

除了默认节点设置之外，您可能还想调查以下节点类型：

- [Mantlemint 节点 / LCD](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/sentry-archive-and-ibc-node-setup/mantlemint)
- [哨兵节点](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/sentry-archive-and-ibc-node-setup/sentry-nodes)
- [归档](https://docs.scrt.network/secret-network-documentation/infrastructure/resources/sentry-archive-and-ibc-node-setup/archive-nodes)

完成所有上述步骤后，您就可以准备好提供 RPC 服务了！

## 在 Lava 网络上设置您的服务提供者 🌋

要在 Lava 网络上设置您的服务提供者，您可以参考我们文档中其他地方提供的[提供者设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-secret-rpc-node&utm_medium=docs&utm_campaign=secret-pre-grant)。这应该为您提供了配置和运行提供者进程所需的必要信息。