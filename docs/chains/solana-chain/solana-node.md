---
slug: /solana-node
title: 运行 Solana RPC 节点
---

# 运行 Solana RPC 节点

## 1. 安装 Solana CLI

要运行 Solana 节点，必须先安装 Solana CLI。该软件是运行 Solana RPC 节点所必需的。第一步是确保获得正确的存档：

```bash 
# 对于 Testnet 
wget https://github.com/solana-labs/solana/archive/refs/tags/v1.16.5.tar.gz
tar -xvf v1.16.5.tar.gz
cd solana-1.16.5

# 对于 Mainnet
https://github.com/solana-labs/solana/archive/refs/tags/v1.14.20.tar.gz
tar -xvf v1.14.20.tar.gz
cd solana-1.14.20
```

切换到未归档目录后，你需要运行`cargo-install-all`脚本和`solana-install`命令，如下所示:

```bash
./scripts/cargo-install-all.sh .
export PATH=$PWD/bin:$PATH
solana-install init
```
这应该足以启动SolanaCLI实例，但在完成下面列出的其他步骤之前，您不会提供RPC服务。

## 2. 启动RPC节点

### 创建一个验证器密钥对

输入以下命令生成下一步使用的验证器密钥:

```bash
solana-keygen new -o validator-keypair.json
```

### 运行`solana-validator`命令

花点时间查看下面的模板，并根据您的自定义配置进行必要的更改。

```bash
solana-validator \
    --identity /home/sol/validator-keypair.json \
    --known-validator 5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on \
    --known-validator dDzy5SR3AXdYWVqbDEkVFdvSPCtS9ihF5kJkHCtXoFs \
    --known-validator eoKpUABi59aT4rR9HGS3LcMecfut9x7zJyodWWP43YQ \
    --known-validator 7XSY3MrYnK8vq693Rju17bbPkCN3Z7KvvfvJx4kdrsSY \
    --known-validator Ft5fbkqNa76vnsjYNwjDZUXoTWpP7VYm3mtsaQckQADN \
    --known-validator 9QxCLckBiJc783jnMvXZubK4wH86Eqqvashtrwvcsgkv \
    --only-known-rpc \
    --full-rpc-api \
    --no-voting \
    --ledger /mnt/ledger \
    --accounts /mnt/accounts \
    --log /home/sol/solana-rpc.log \
    --rpc-port 8899 \
    --rpc-bind-address 0.0.0.0 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.solana.com:8001 \
    --entrypoint entrypoint2.testnet.solana.com:8001 \
    --entrypoint entrypoint3.testnet.solana.com:8001 \
    --expected-genesis-hash 4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

一旦命令成功返回，就可以为RPC服务了!

## 3. 申请我们的供应商孵化计划 📋

在我们目前的Testnet状态中，在您可以成为Lava网络上的提供者之前，还需要通过一个额外的阶段。请填写[申请表格](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-solana&utm_medium=docs&utm_campaign=solana-pre-grant)。一旦你完成了这一步，请随时在我们的[Discord](https://discord.gg/UxujNZbW)中留言!

## 4. 在Lava网络上设置你的提供商 🌋

一旦您被接受-要在Lava网络上设置您的提供商，您可以参阅我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-solana-rpc-node&utm_medium=docs&utm_campaign=solana-pre-grant)。这将为您提供配置和操作provider节点所需的信息。
