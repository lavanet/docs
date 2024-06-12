---
sidebar_position: 3
title: 硬分叉后重新加入
slug: /validator-rejoin
---

# 在分叉后作为验证者重新加入

为了让来自 `lava-testnet-1` 的 Lava 验证者加入 `lava-testnet-2`，需要进行一些细微调整。本页面是针对在硬分叉之前参与网络的验证者的指南。

## 📋 必要准备

- 🔺 Upgrade to Go version [v1.20.5](https://go.dev/dl/go1.20.5.linux-amd64.tar.gz)


## 📝 书面指南（约20分钟阅读时间）


### 🗝️ 备份密钥

:::tip
备份密钥并不是严格必需的以重新加入，但建议进行备份以防止任何损失。
:::

🔑 步骤：
* 备份 `~/.lava/config` 下的私人验证器密钥文件 (`priv_validator_key.json`)
* 备份 `~/.lava/config` 下的节点密钥 (`node_key.json`)
* 使用以下命令备份账户密钥：
```bash
    ACCOUNT_NAME=?
    STRONG_PASSWORD=?
    lavad keys export $ACCOUNT_NAME --keyring-backend test <<< "$STRONG_PASSWORD" > $ACCOUNT_NAME.key
```
<br />

### ♻️ 重置节点

运行以下命令重置数据文件夹：

```bash
lavad tendermint unsafe-reset-all
```

<br />

### 📥 获取新的创世纪文件

下载新的 genesis 文件到 `~/.lava/config`。该文件可从 https://github.com/lavanet/lava-config/blob/main/testnet-2/genesis_json/genesis.json 下载
或使用 wget
```bash
wget https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-2/genesis_json/genesis.json
```
<br />


### ⬇️ 下载新版二进制文件
lavad Binary version v0.21.1.2
输入以下命令

```bash
cd ~/.lava/
sudo rm -rf ~/.lava/cosmovisor
wget https://github.com/lavanet/lava/releases/download/v0.21.1.2/lavad-v0.21.1.2-linux-amd64
mkdir -p cosmovisor/genesis/bin
mv lavad-v0.21.1.2-linux-amd64 cosmovisor/genesis/bin/lavad
```

<br />

### 🔼 更新节点配置文件

:::tip
建议运行以下命令：
`lavad config chain-id lava-testnet-2`
:::

检查以下变量的设置是否正确：

<details> <summary> 🗎 config.toml</summary>
timeout_commit = "30s" <br/>
timeout_propose = "1s" <br/>
timeout_precommit = "1s" <br/>
timeout_precommit_delta = "500ms" <br/>
timeout_prevote = "1s" <br/>
timeout_prevote_delta = "500ms" <br/>
timeout_propose_delta = "500ms" <br/>
skip_timeout_commit = false
seeds="3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0@testnet2-seed-node.lavanet.xyz:26656,e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d@testnet2-seed-node2.lavanet.xyz:26656"
</details>

<details> <summary> 🗎 client.toml </summary> 
broadcast-mode = "sync"
chain-id = “lava-testnet-2”
</details>

<br />

### 🚀 启动节点

使用 `systemctl` 命令启动节点：

```bash
sudo systemctl start cosmovisor
```


<br />

### 🗒️ 检查日志

使用 `journalctl` 查看日志：

```bash
sudo journalctl -u cosmovisor -f
```

密切关注！确保区块按预期同步！
<br />

### ✔️ 验证链

要验证您是否在正确的链上运行，请输入以下内容：

```bash
lavad status | jq -r '.NodeInfo.network == "lava-testnet-2"'
```

✅ 你应该得到真实的值!这是最后一步。你现在在`lava-testnet-2`上运行验证器
