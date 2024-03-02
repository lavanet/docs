---
sidebar_position: 2
title: 方案 A - 自动
slug: /validator-auto
---

本节将帮助您使用 "自动脚本 "流程加入 Lava 网络：从安装节点和加入网络，到处理账户、资金和开始验证（并赚取奖励）。

启动前，请确认已满足 [硬件要求](reqs)。

:::note 已经加入网络，只是还没有验证？
如果您已经安装了一个节点，并使用"[加入 Testnet - 自动设置](testnet-auto) "中概述的自动脚本加入了网络，则应跳过步骤 #1，[转到步骤 2](#account) 则应跳过步骤 #1，[转到步骤 2](#account)。
:::

### 1. 安装节点 (`lavad`) 并加入网络

**准备**
```bash
sudo apt update
``` 

```bash
sudo apt install curl jq unzip coreutils -y
```

**安装并加入网络**

运行该脚本将：

1. 安装 `lavad` （使用 Cosmovisor）
2. 加入测试网
3. 同步到最新区块

```bash
curl -s --location \
--request GET 'https://get.lavanet.xyz/pnet_join_network_cosmovisor' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
chmod +x 00_join_network.sh && \
./00_join_network.sh
```

🛟 有问题？请访问我们的 [常见问题](./faq#i-have-problems-running-the-install-scripts)部分。

### 2. 准备账户和资金 {#account}
如果您还没有账户，可以使用此脚本为您创建一个账户：

```bash
curl \
--location \
--request GET 'https://get.lavanet.xyz/pnet_validator_cosmovisor' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > validator_setup.sh && \
chmod +x validator_setup.sh

# 运行设置程序
./validator_setup.sh -h
# 示例 - 创建账户
# ./validator_setup.sh -e production -a create_account -u my_user
```

脚本完成了吗？写下您稍后需要的详细信息：

:::caution Pencils out 📝
保留新创建的账户信息:
1. 记住你的助记词 🚨🤫🚨🤫🚨
2. 你的地址以 `lava@`开头
3. 你的验证者公钥

♻ 保存这些详细信息，因为我们确保在重新启动testnet时自动向您空投Lava测试令牌。
:::

#### 水龙头

通过[水龙头](faucet)为您的账户提供资金

### 3. 质押 & 开始验证

```bash
# 运行安装程序
./validator_setup.sh -h

# 示例:运行验证器设置
# ./validator_setup.sh -e production -a run_validator -u my_user
```

希望看到节点的投票权大于 0，这将在脚本的输出中显示出来