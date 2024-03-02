---
slug: /agoric-node
title: 运行 Agoric RPC 节点
---

# 运行Agoric RPC节点

## 配置要求 📄 

:::caution
用户在尝试使用版本大于等于 18.19.0 的 `Node.js` 运行指令时可能会遇到问题。Node 版本 >=18.19 引入了对 AgoricSDK 的破坏性更改，目前不支持该版本。
:::

运行 Agoric RPC 节点的最低硬件要求并不高：

    16 GB RAM
    4-Cores x86_64 CPU
    High Performance/NVMe SSD (w/ ~6 GB+/month for Full Node or ~12 GB+/month for Archive)
    1 GBPS up/down

要开始运行节点，请确保已安装 Go 1.20.2 或更高版本。

## 安装 & 运行 AgoricSDK 📥

在你准备好运行节点所需要的服务器之后，就可以开始安装了!

### 📦 获取所需的包

```bash
sudo apt -qy install curl git jq lz4 build-essential nodejs=16.* yarn
```


### 💾 获取Agoric软件

运行下面的安装脚本:

```bash
# 克隆仓库
git clone https://github.com/Agoric/agoric-sdk -b <GIT-BRANCH>
cd agoric-sdk

# 安装并构建Agoric Javascript包
yarn install
yarn build

# 安装和构建Agoric Cosmos SDK支持
(cd packages/cosmic-swingset && make)
```

你需要选择一个`<GIT_BRANCH>`来使用。你可以在[这里](https://github.com/Agoric/agoric-sdk/releases)看到最新的分支。

### 🛠️ 配置你的节点

配置包括以下几个步骤：

```bash
# 首先，获取当前网络的网络配置
curl https://main.agoric.net/network-config > chain.json
# 将chain name设置为正确的值
chainName=`jq -r .chainName < chain.json`
# 确认值:应该类似于agoricdev-N。
echo $chainName
# 将<your_moniker>替换为您的节点的公共名称。
# 注意:`--home` 标志(或`AG_CHAIN_COSMOS_HOME`环境变量)决定链状态存储在哪里。
# 默认值是`$HOME/.agoric`。
agd init --chain-id $chainName <your_moniker>
```

### 🔧 调整配置
```bash
# 将peers变量设置为正确值
peers=$(jq '.peers | join(",")' < chain.json)
# 将seeds变量设置为正确的值。
seeds=$(jq '.seeds | join(",")' < chain.json)
# 确认值，每个值应该类似于"077c58e4b207d02bbbb1b68d6e7e1df08ce18a8a@178.62.245.23:26656,..."
echo $peers
echo $seeds
# 修复`Error: failed to parse log level`
sed -i.bak 's/^log_level/# log_level/' $HOME/.agoric/config/config.toml
# 替换seeds和persistent_peers值
sed -i.bak -e "s/^seeds *=.*/seeds = $seeds/; s/^persistent_peers *=.*/persistent_peers = $peers/" $HOME/.agoric/config/config.toml
```

### ⏳ 同步节点

```bash
agd start --log_level=warn
```

如果您想要或需要使用创始文件-请注意，这包括[额外步骤](https://github.com/Agoric/agoric-sdk/wiki/Validator-Guide-for-Devnet#apply-network-parameters)。官方的Agoric主网生成文件在这里:https://main.agoric.net/genesis.json

### 🔬 检查同步状态

```bash
agd status | jq .SyncInfo
```

一旦完全同步，就可以开始了。

## 在 Lava Network 设置提供商🌋

要在Lava网络上设置您的提供商，您可以参阅我们文档中其他地方的[提供商设置文档](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-solana-rpc-node&utm_medium=docs&utm_campaign=solana-pre-grant)。这将为您提供配置和操作provider节点所需的信息。
