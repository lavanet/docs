---
sidebar_position: 2
title: 设置
slug: /validator-manual
---

# 运行验证器 - 手动设置
### 1. 安装节点 (`lavad`) 并加入网络 {#lavad}
作为验证器运行需要运行 Lava 节点，详情请参考[我们的**Testnet**加入指南](testnet)。

### 2. 准备账户和资金 {#account}
如果您还没有 Lava 账户（钱包），请参阅 [创建新账户](wallet#account) 和 [水龙头](faucet)。

### 3. 质押 & 开始验证 {#stake}

账户资金到账后，运行此程序质押并开始验证。

1. 验证您的节点是否已完成同步并与网络保持同步

```bash
$current_lavad_binary status | jq .SyncInfo.catching_up
# 直到看到输出结果： "false"
```

2. 确认您的账户内有资金，以便进行质押

```bash
# 确保您能在密钥列表中看到自己的账户名称
$current_lavad_binary keys list

# 确保您的账户中有Lava代币
YOUR_ADDRESS=$($current_lavad_binary keys show -a $ACCOUNT_NAME)
$current_lavad_binary query \
    bank balances \
    $YOUR_ADDRESS \
    --denom ulava
```

3. 备份验证器的共识密钥

   验证者通过发送由共识密钥签名的消息参与共识，该共识密钥在首次运行节点时会自动生成。您必须创建此共识密钥的备份，以防将您的验证者迁移到另一个服务器或意外丢失对您的验证者的访问权限。

   共识密钥默认存储为 JSON 文件在 `$lavad_home_folder/config/priv_validator_key.json` 中，或者在 config.toml 的 `priv_validator_key_file` 参数中指定的自定义路径中。

4. 质押验证者

以下是一个示例，其值从 `50000000ulava` 的质押开始。
将 `<<moniker_node>>` 替换为您为验证者选择的易读名称。

```bash
$current_lavad_binary tx staking create-validator \
    --amount="50000000ulava" \
    --pubkey=$($current_lavad_binary tendermint show-validator --home "$HOME/.lava/") \
    --moniker="<<moniker_node>>" \
    --chain-id=lava-testnet-2 \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="10000" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --gas-prices="0.05ulava" \
    --home="$HOME/.lava/" \
    --from=$ACCOUNT_NAME
```

一旦您完成上述命令的运行，如果在输出中看到 `code: 0`，则表示命令执行成功。

5. 验证验证器设置

```bash
block_time=60
# 检查验证器节点是否已注册和质押
validator_pubkey=$($current_lavad_binary tendermint show-validator | jq .key | tr -d '"')

$current_lavad_binary q staking validators | grep $validator_pubkey

# 检查验证器节点的投票能力 - 请等待 30-60 秒钟更新输出结果
sleep $block_time
$current_lavad_binary status | jq .ValidatorInfo.VotingPower | tr -d '"'
# 输出应 > 0
```