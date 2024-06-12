---
sidebar_position: 2
slug: /testnet-auto
title: 选项 A - 自动（Cosmovisor）
---

import RoadmapItem from '@site/src/components/RoadmapItem';

# 加入测试网 - 使用 Cosmovisor 进行自动设置

这一部分将帮助您通过“自动脚本”流程加入 Lava 网络：安装节点并加入网络。借助 Cosmovisor，网络升级将自动进行调度。

在开始之前，请验证[硬件要求](reqs)是否满足。

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
2. 加入测试网络
3. 同步到最新区块

```bash
curl -s --location \
--request GET 'https://get.lavanet.xyz/pnet_join_network_cosmovisor' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
chmod +x 00_join_network.sh && \
./00_join_network.sh
```

### 2. 验证

#### 验证 `cosmovisor` 设置

通过检查 cosmovisor 服务的状态，确保 `cosmovisor` 正在运行：
    
```bash
# 检查服务状态--你应该希望服务处于 "激活 "状态，如果你看到连接到对等设备时出现错误，那是正常的。
sudo systemctl status cosmovisor
# 要查看服务日志，请确认您可以看到正在推进的区块高度。
sudo journalctl -u cosmovisor -f
```

#### 验证节点状态

注意 `lavad` 的位置现在存在于 cosmovisor 路径下：

```bash
# 检查节点当前是否处于追赶最新区块过程中
$HOME/.lava/cosmovisor/current/bin/lavad status | jq
```

🛟 有问题？请访问我们的 [常见问题](./faq#i-have-problems-running-the-install-scripts) 部分。


## 欢迎访问 Lava Testnet 🌋

:::tip 已加入 Testnet？成为验证者
您现在正在 Lava 网络中运行一个节点🎉🥳！

祝贺您，很高兴您来到这里 😻 在 Discord 上与我们一起庆祝。

准备就绪后，开始将节点用作**验证器**：
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-auto#account)

:::