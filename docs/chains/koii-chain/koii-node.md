---
slug: /koii-node
title: 运行 Koii RPC 节点
---

# 运行 Koii RPC 节点

## 配置要求 📄 

运行 Koii RPC 节点的最低硬件要求并不高：

    >258 GB RAM or more
    16 core 32-thread CPU
    1 TB NVME SSD
    1 GBPS up/down

## 安装 Koii 📥

配置符合要求的话，您可以继续安装!

### 📦 获取所需的包

```bash
sudo apt install libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang
```

### 👤 创建一个单独的用户

出于安全考虑，最佳实践是创建一个非root用户:

```bash
sudo adduser koii
sudo usermod -aG sudo koii
sudo su koii
```

### 💾 使用Koii软件

运行下面的安装脚本:

```bash
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init_v1.14.19.sh)"
```

运行System Tuner:

```bash
koii-sys-tuner --user koii
```

### 🛠️ 使用RPC函数设置Koii验证器

生成一个密钥对:

```bash
koii-keygen new --outfile ~/validator-keypair.json
```

运行Validator命令，指定RPC选项。你可能需要尝试一下才能获得正确的配置。下面给出一个例子:

```bash
koii-validator \
    --identity /home/koii/validator-keypair.json \
    --only-known-rpc \
    --full-rpc-api \
    --no-voting \
    --ledger /mnt/ledger \
    --accounts /mnt/accounts \
    --log /home/koii/koii-rpc.log \
    --rpc-port 8899 \
    --rpc-bind-address 0.0.0.0 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.solana.com:8001 \
    --entrypoint entrypoint2.testnet.solana.com:8001 \
    --entrypoint entrypoint3.testnet.solana.com:8001 \
```

### 🧪 测试端点

要完成设置，可能还需要额外的配置。
你应该查看Koii的[验证器安装指南](https://docs.koii.network/run-a-node/k2-validators/validator-setup)和Solana的[RPC安装指南](https://docs.solana.com/validator/get-started/setup-an-rpc-node)，以确保你已经涵盖了所有必要的步骤。


## 在Lava网络上设置你的提供商 🌋

一旦您被接受-要在Lava网络上设置您的提供商，您可以参阅我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-solana-rpc-node&utm_medium=docs&utm_campaign=solana-pre-grant)。这将为您提供配置和操作provider节点所需的信息。
