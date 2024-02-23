---
sidebar_position: 1
slug: /provider-setup
title: 设置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning

随着 "lava-testnet-2 "的推出，我们提供商设置的各个方面都发生了变化。TLS 证书现在是提供程序设置的必要组成部分。[Lavavisor](/lavavisor) 现在是运行提供程序的推荐路径。

:::

# 提供商设置

本指南旨在帮助节点运行人员和 DevOps 专业人员配置多链网络提供商，该提供商支持各种区块链网络及其各自的 API 接口。我们将指导您完成必要的步骤，创建涵盖多链和 API 接口的配置文件，并简要介绍提供商和 stake 命令的背景。

## **概览**

多链网络提供商允许您使用单一入口点管理多个区块链网络并与之互动。通过支持各种 API 接口，提供商可以满足不同区块链网络的特定需求和偏好。

在本指南中，我们将创建一个配置文件，其中包括多个链（以太坊主网和 Osmosis 主网）及其各自的 API 接口（JSON-RPC、REST、gRPC 和 Tendermint RPC）。我们还将介绍提供商的质押命令，该命令允许你质押特定服务。

## **必要条件**

1. Go 1.20.5 或更高版本
2. 已安装`lavap`（在 [https://github.com/lavanet/lava](https://github.com/lavanet/lava) 上构建或安装）
3. 拥有足够 LAVA 的账户，以便进行质押（了解 [创建账户](docs/lava-blockchain/wallet.mdx)
4. 了解您想提供哪些链（[如何查询最新列表](https://docs.lavanet.xyz/provider/#chains)

## Step 1: 设置 TLS
作为良好安全实践的一部分，Lava 协议在 RPC 的提供者和消费者之间采用端到端加密通信。这就要求提供者采取一些额外的配置步骤，即在认证机构设置 TLS 认证。

❗❗ 如果您已经使用了由认证机构**签署的**TLS 证书，则可以继续第 2 步。否则，您可能需要查看我们的[为 Lava 提供商设置 TLS](/provider-tls)指南。

## Step 2: 运行RPCProvider进程

**`rpcprovider`**是一个用于设置RPC服务器的命令行工具，它监听来自Lava protocol RPC消费者的请求，将它们转发到已配置的节点，并返回响应。配置可以通过YAML配置文件提供，也可以作为命令行参数提供。

**`rpcprovider`**是`lavap`的一部分，可以使用以下语法运行:

```bash
lavap rpcprovider [config-file] || { {listen-host:listen-port spec-chain-id api-interface node-url} ... }
```

### 配置
:::warning 继续之前请阅读
每个链的配置不同。有些链比其他链有更高的配置要求。如果你不确定，请访问你正在尝试设置的特定端点的[chain page](/chains)，并查看我们的`Run an RPC Node`指南。
:::
:::info
有关**身份验证**、**转发**、可配置**节点超时**等高级配置，请参阅[提供程序功能](/provider-features)
:::

您可以提供单个配置文件（YAML），也可以指定一个或多个端点配置作为命令行参数。

默认配置文件名为 **`rpcprovider.yml`**。如果只提供一个参数，则默认为配置文件的名称（不含扩展名）。

如果没有提供参数，则使用默认配置文件。所有配置文件都应位于默认节点主目录（如 **`app.DefaultNodeHome/config`**）或本地运行目录中。

### 命令参数

**`rpcprovider`**接受以下参数:

- **`--geolocation`** （必填）： 运行的地理位置（例如，**`1`**）
- **`-from`**（必填）： 要使用的账户名称（例如，**`alice`**）
- **`--chain-id`**： Lava 网络链 ID（例如：**`lava-testnet-2`**）
- **`--pprof-address`**: pprof 服务器地址，用于代码剖析（默认：**`""`**)
- **`--cache`**： 缓存服务器地址，以提高性能（默认：**`""`**)
- **`--parallel-connections`**： 并行连接数（默认：**`chainproxy.NumberOfParallelConnections`**)
- **`--reward-server-storage`**：  存储奖励服务器数据的路径（默认为**`".storage/rewardserver"``**)

### 配置示例

下面是一些使用 **`rpcprovider`** 的示例：

```bash
# 使用自定义配置文件和标志
lavap rpcprovider path_to_my_config_file --geolocation 1 --from alice

# 以命令行参数的形式提供端点配置
lavap rpcprovider provider-host.com:1986 ETH1 jsonrpc https://localhost/eth/my_node_1 --geolocation 1 --from alice
```

### 示例： 具有相同监听地址的多个 API 接口（ETH1 和 COS3）

在本例中，提供程序支持以太坊主网 (ETH1) 和 Osmosis 主网 (COS3) 网络的所有 API 接口。所有 ETH1 接口和所有 COS3 接口的监听地址相同。

```yaml
endpoints:
  - api-interface: jsonrpc
    chain-id: ETH1
    network-address: 
      address: 0.0.0.0:2221
    node-urls:
      - url: wss://eth-rpc/ws
  - api-interface: tendermintrpc
    chain-id: COS3
    network-address: 
      address: 0.0.0.0:2221
    node-urls:
      - url: ws://127.0.0.1:26657/websocket
      - url: http://127.0.0.1:26657
  - api-interface: grpc
    chain-id: COS3
    network-address: 
      address: 0.0.0.0:2221
    node-urls: 
      - url: 127.0.0.1:9090
  - api-interface: rest
    chain-id: COS3
    network-address: 
      address: 0.0.0.0:2221
    node-urls: 
      - url: http://127.0.0.1:1317
```

:::tip
如果您使用的是 `nginx` 或我们的 [TLS 设置指南](/provider-tls) 中推荐的其他代理，则需要在指定的每个端点添加 `disable-tls: true`。这将允许 `nginx` 直接处理 TLS。
:::
### 更多范例

团队会不断添加配置，你可以在我们的 [github](https://github.com/lavanet/lava/tree/main/config/provider_examples) 上查看示例。

## Step 3: 检查 Provider 的活度 - 质押前
为确保提供程序正常运行，`lavap` 提供了一个命令来设置必要的客户端，并验证所有参数是否定义正确。
该命令用于测试提供程序的基本流程是否正常，包括质押和访问，但只要 rpcprovider 进程启动并运行，在质押之前也可使用该命令，但需附加一些参数。
因为我们还没有质押，所以需要向命令提供我们正在使用的端点
### 使用

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavap test rpcprovider --from {WALLET} --endpoints "{ENDPOINTS}"

# 例如：检查您的提供商是否被正确质押，并监听所有被质押的服务
# lavap test rpcprovider --from provider1_us --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# 应该输出如下:
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# ALFAJORES jsonrpc,APT1 rest,AXELAR rest,AXELAR grpc,AXELAR tendermintrpc,BASET jsonrpc,BSC jsonrpc,CANTO grpc,CELO jsonrpc,COS3 rest,COS3 tendermintrpc,COS5 rest,COS5 tendermintrpc,ETH1 jsonrpc,EVMOS rest,EVMOS

# Tests Failed:
# ARB1 jsonrpc,ARBN jsonrpc,AVAX jsonrpc,CANTO jsonrpc,CANTO tendermintrpc,CANTO rest,COS3 grpc,COS4 rest,COS4 grpc,COS4 tendermintrpc,COS5 grpc,JUN1 grpc,POLYGON1 jsonrpc,SOLANA jsonrpc

```

</TabItem>
<TabItem value="endpoints" label="Endpoints">

```bash
lavap test rpcprovider --from {WALLET} --endpoints "{ENDPOINTS}"`

# 例如：检查您的提供商是否还未被质押，或者当您想添加新的链支持时
# lavap test rpcprovider --from provider1_us --endpoints "provider-public-grpc:port,jsonrpc,ETH1 provider-public-grpc:port,rest,LAV1" --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/ 

# Expected output:
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# LAV1-rest; ETH1-jsonrpc

# Tests Failed:
#
```

</TabItem>
<TabItem value="addr" label="Address">
您可以使用提供商的公共地址代替钱包名称，也可以使用 lavad 轻松获取

```bash
lavad keys show -a {WALLET}
```

使用公共地址测试

```bash
lavap test rpcprovider {PROVIDER_ADDRESS} --endpoints "{ENDPOINTS}"
```

</TabItem>
</Tabs>

## Step 4: 作为提供商质押

在您可以将您的多链提供程序暴露给rpc消费者之前，您需要绑定一个提供商。你可能已经完成了这一步，可以继续进行第5步。否则，使用以下命令绑定单个服务:

```bash
lavap tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] {validator} [flags]
```

*检查输出以了解质押操作的状态。一个成功的操作会有一个代码 **`0`**.*

:::info
注意，此交易还可以用于增加提供者的质押。要增加股份，金额应为当前金额和所需增加金额的总和。例如，一个提供者的质押为`100ulava`，想要增加质押`10ulava`。那么，`stake-provider`命令的适当`amount`参数应为`110ulava`。
:::

#### 参数说明

- **`chain-id`** -服务链的 ID（例如，**`COS4`** 或 **`FTM250`**）。要获得可用链的完整列表，请使用：`lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`amount`** - 特定链的质押金额(e.g., **`2010ulava`**).
- **`endpoint`** - 提供商宿主监听器，由` Provider -host: Provider -port,geolocation`组成。定义多个端点:`"host:port,geolocation host2:port2,geolocation2"`。要定义诸如`trace`、`debug`等高级端点功能，请咨询Lava团队。
- **`geolocation`** - 表示进程所在的地理位置(例如，**`1`**代表US，**`2`**代表EU)。此参数必须指定所定义端点的所有地理位置(参见下面的“美国和欧洲以太坊主网”)。
- **`validator`** - 质押的验证器地址(可选)。由于双重锁定机制，锁定时需要验证器地址。如果没有指定验证器，将自动选择最高的质押验证器。注意，验证器地址应该在sdk中。ValAddress格式(`lava@valoper...`)。

#### 地理位置

```javascript    
    USC = 1; // US-Center
    EU = 2; // Europe
    USE = 4; // US-East
    USW = 8; // US-West
    AF = 16; // Africa
    AS = 32; // Asia
    AU = 64;  // (Australia, includes NZ)
    GL = 65535; // Global
```


#### Flags 细节

- **`--from`** - 用于提供商质押的帐户 (e.g., **`my_account`**).
- **`--provider-moniker`** - 提供商的公开名称
- **`--keyring-backend`** - 您选择的密钥环后端 (e.g., **`test`**).
- **`--chain-id`** - 网络的chain_id (e.g., **`lava-testnet-2`**).
- **`--gas`** - 交易的燃料限额 (e.g., **`"auto"`**).
- **`--gas-adjustment`** - 燃料调节系数 (e.g., **`"1.5"`**).
- **`--node`** - Lava的RPC节点 (e.g., **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**).

### 质押示例

#### 美国的 Lava Testnet（使用指定的验证器）

```bash
lavap tx pairing stake-provider LAV1 \
  "50000000000ulava" \
   "lava.your-site.com:443,USC" USC \
   "validator_lava_address" \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

#### 美国的以太坊主网（未指定验证器）
Ethereum and other EVMs usually have only `jsonrpc` interface:

```bash
lavap tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host.com:443,USC" USC \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

#### 美国和欧洲的以太坊主网（多个端点）
```bash
lavap tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host-us.com:443,USC provider-host-eu.com:443,EU" "EU,USC" \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

#### 以太坊全局负载均衡节点阵列
如果您的端点对所有覆盖的地理位置进行DNS负载均衡，则使用此选项。
```bash
lavap tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host-gl.com:443,GL" "GL" \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

#### Cosmos Hub 测试网在美国
Cosmos通常有`rest`、`tendermintrpc`和`grpc`接口，这些接口都是必须的:

```bash
lavap tx pairing stake-provider "COS5T" \
    "50000000000ulava" \
    "provider-host.com:1986,1" 1 \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

## Step 5: 验证质押

为了确保您的帐户成功地与特定网络的提供商绑定，请执行以下命令。请确保检查你的账户的公共地址是否在命令输出生成的列表中:

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavap query pairing account-info \
--from wallet_name \
--node "{LAVA_RPC_NODE}"
```

</TabItem>
<TabItem value="addr" label="Address">

```bash
lavap query pairing account-info \
{provider_address} \
--node "{LAVA_RPC_NODE}"

# 示例:查看帐户的所有相关信息
# lavap query pairing providers \
# lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v \
# --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# 输出如下:
# --------------------------------------------
# Active Provider Chains
# --------------------------------------------
# ChainID: ALFAJORES
#  {Stake:1000000000000ulava Address:lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v StakeAppliedBlock:164042 Endpoints:[{IPPORT:providers-eu-1.lavanet-zarak.xyz:19907 UseType:jsonrpc Geolocation:2}] Geolocation:2 # Chain:ALFAJORES Vrfpk: Moniker:testnet-lava-2-provider1-ALFAJORES}
#...
```

</TabItem>
</Tabs>

#### 参数说明(举例说明):

- **`provider_address`** - 提供商的公共地址，以lava@前缀开头。例子:**`lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v`**
- **`LAVA_RPC_NODE`** - Lava的RPC节点。如果当前节点已经加入了熔岩网络，则可以省略此操作。例子: **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**


另一个用于检查特定链的所有provider的有用命令:
```bash
lavap query pairing providers \
"{NETWORK_NAME}" \
--node "{LAVA_RPC_NODE}"

# 例如:检查您的帐户是否是ETH1网络的配对提供商，
# lavap query pairing providers \
# ETH1 \
# --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# 输出如下:
# 所有提供商的列表，你的提供商应该在其中
```

#### 参数说明(举例说明):

- **`NETWORK_NAME`** - 链的ID。例如:**`COS4`**或**`FTM250`**。要获得可用链的完整列表，请使用:`lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`LAVA_RPC_NODE`** - Lava的RPC节点。如果当前节点已经加入了熔岩网络，则可以省略此操作。例子:**`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**

:::info
注意，新的提供商权益只在下一个纪元开始时应用。目前，一个epoch被定义为30个块。阻塞时间为30秒，在最坏的情况下，质押将在15分钟后生效。
:::

## Step 6:检查供应商的活跃情况-质押后

现在您的提供商已经质押，您可以重复这个命令，但是这一次，没有指定端点，因为CLI将使用区块链来获取它们，这将验证数据是否正确存在于区块链上。

### 使用

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavap test rpcprovider --from {WALLET}

# 示例:检查您的提供商是否正确质押，并监听所有质押的服务
# lavap test rpcprovider --from provider1_us --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# 输出如下：
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# ALFAJORES jsonrpc,APT1 rest,AXELAR rest,AXELAR grpc,AXELAR tendermintrpc,BASET jsonrpc,BSC jsonrpc,CANTO grpc,CELO jsonrpc,COS3 rest,COS3 tendermintrpc,COS5 rest,COS5 tendermintrpc,ETH1 jsonrpc,EVMOS rest,EVMOS

# Tests Failed:
# ARB1 jsonrpc,ARBN jsonrpc,AVAX jsonrpc,CANTO jsonrpc,CANTO tendermintrpc,CANTO rest,COS3 grpc,COS4 rest,COS4 grpc,COS4 tendermintrpc,COS5 grpc,JUN1 grpc,POLYGON1 jsonrpc,SOLANA jsonrpc

```

</TabItem>
<TabItem value="addr" label="Address">

```bash
lavap test rpcprovider {PROVIDER_ADDRESS}
# 示例:检查您的提供商是否正确质押，并监听所有质押的服务
# lavap test rpcprovider lava@myprovidersbech32pubaddress --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/
```


</TabItem>
</Tabs>

## Step 7: 提供商信息和更多功能

您可以通过[https://info.lavanet.xyz/providers](https://info.lavanet.xyz/providers)跟踪您的供应商奖励和交易。

并查看提供商功能页面以了解更多功能。

## Step 8: 创建提供商服务

:::tip
请注意，Lava有一个专用的二进制文件来运行和管理名为`lavavisor`的提供商。确保你使用的是`lavavisor`或者一个服务文件，但不能同时使用两者。
:::

假定你已完成如下工作：
- `lavap` 二进制文件位于 `/usr/bin` 目录中。
- 负责提供商的钱包有密码。
- 已为提供商创建了配置文件。

首先，我们需要设置以下值:
```bash
TMP_PASSWORD=<如果你有钱包密码的话>
TMP_CONFIG_FILE_PATH=<配置文件的路径>
TMP_GEO_LOCATION=<您希望使用的地理位置>
TMP_PROVIDER_WALLET_ACCOUNT=<您的提供商钱包帐户名称>
TMP_CHAIN_ID=<Lava链可以让它运行> # lava-testnet-2
```

2 .执行如下命令创建服务文件。
```bash
sudo tee <<EOF >/dev/null /etc/systemd/system/lava-provider.service
[Unit]
Description=Lava Provider
After=network-online.target
[Service]
# 运行服务的用户
User=root

# 设置工作目录，以便更容易注意到配置文件。
WorkingDirectory=/root

# 因为我们使用的是钱包，所以必须自动发送密码
ExecStart=/usr/bin/sh -c 'echo $TMP_PASSWORD | /usr/bin/lavap rpcprovider $TMP_CONFIG_FILE_PATH --geolocation $TMP_GEO_LOCATION --from $TMP_PROVIDER_WALLET_ACCOUNT --chain-id $TMP_CHAIN_ID'

Restart=always
RestartSec=3
[Install]
WantedBy=multi-user.target
EOF
```

最后启用并运行服务：
```bash
sudo systemctl daemon-reload
sudo systemctl enable lava-provider.service
sudo systemctl start lava-provider.service
```

查看日志：
```bash
journalctl -f -u lava-provider.service -o cat
```

## Step 9: 解除质押
提供商可以取消质押，将其质押资金返回钱包。 提供商可以完全或部分取消质押。 请注意，资金将在 Cosmos 质押模块的解绑时间（目前定义为 3 周）之后发送到钱包。 此外，如果提供商完全取消质押，它将在下一个纪元之前从配对列表中删除。

### 完全取消质押
要取消单个服务的全部质押金额，请使用以下命令：

```bash
lavap tx pairing unstake-provider [chain-id] {validator} [flags]
```

*检查输出，查看质押操作的状态。成功操作的代码为 **`0`**.*

#### 参数说明

- **`chain-id`** - 服务链的 ID（例如，**`COS4`** 或 **`FTM250`**）。 要获取可用链的完整列表，请使用： `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`validator`** - 用于取消质押的验证者地址（可选）。 如果未指定验证者，将自动选择提供者委托的最高权益验证者。 要查看所有提供者的委托以及验证器地址，请使用：`lavap query stake delegates [provider] --node {LAVA_RPC_NODE}`。 请注意，验证器地址应采用 sdk.ValAddress 格式（`lava@valoper...`）。

#### 标注详情

- **`--from`** - 用于提供商质押的账户 (e.g., **`my_account`**).
- **`--keyring-backend`** - 您选择的keyring后端 (e.g., **`test`**).
- **`--chain-id`** - 网络的chain_id (e.g., **`lava-testnet-2`**).
- **`--gas`** - 交易的 Gas 限额 (e.g., **`"auto"`**).
- **`--gas-adjustment`** - 燃料调节系数 (e.g., **`"1.5"`**).
- **`--node`** - Lava 的 RPC 节点 (e.g., **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**).

### 取消质押示例

#### 使用指定验证人取消质押

```bash
lavap tx pairing unstake-provider LAV1 \
   "validator_lava_address" \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

#### 使用未指定的验证者取消质押

```bash
lavap tx pairing unstake-provider LAV1 \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

### 部分解除质押
要取消单个服务的部分质押金额，请使用以下命令：

```bash
lavap tx dualstaking unbond [validator] [provider] [chain-id] [amount] [flags]
```

*检查输出以了质押样操作的状态。 操作成功会有一个code **`0`**.*

:::info
请注意，应使用`unbond`命令，因为提供商从其自我委托（即其质押）中解除了部分资金的绑定。
:::

#### 参数说明

- **`validator`** - 用于取消质押的验证人地址。 要查看所有提供者的委托以及验证器地址，请使用：`lavap query stake delegates [provider] --node {LAVA_RPC_NODE}`。 请注意，验证器地址应采用 sdk.ValAddress 格式（`lava@valoper...`）。
- **`provider`** - 提供商Lava地址（格式为“lava@...”）。
- **`chain-id`** - 服务链的 ID（例如，**`COS4`** 或 **`FTM250`**）。 要获取可用链的完整列表，请使用：`lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`amount`** - 取消质押的金额（例如：“`2010ulava`”）。


#### 标注详情

- **`--from`** - 用于提供商质押的账户 (e.g., **`my_account`**).
- **`--keyring-backend`** - 您选择的keyring后端 (e.g., **`test`**).
- **`--chain-id`** - 网络的chain_id (e.g., **`lava-testnet-2`**).
- **`--gas`** - 交易的 Gas 限额 (e.g., **`"auto"`**).
- **`--gas-adjustment`** - 燃料调节系数 (e.g., **`"1.5"`**).
- **`--node`** - Lava 的 RPC 节点 (e.g., **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**).

### 解除绑定示例

```bash
lavap tx dualstaking unbond "validator_lava_address" \ 
    "provider_lava_address" \
    LAV1 \
    2010ulava \ 
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

## Step 10: 修改质押条目
提供者可以使用`modify-provider` TX 修改其权益条目的不同属性。 使用此 TX 可以更改的属性包括其权益金额、名称、可用端点、委托佣金等。

### 修改提供商质押条目
要修改单个服务的提供商的权益条目，请使用以下命令：

```bash
lavap tx pairing modify-provider [chain-id] [flags]
```

*检查输出以了解质押操作的状态。 操作成功会有一个code **`0`**.*

:::tip
请注意，大多数更改是使用下面列出的可选标注定义的。
:::

#### 参数说明

- **`chain-id`** - 服务链的 ID（例如，**`COS4`** 或 **`FTM250`**）。 要获取可用链的完整列表，请使用： `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.

#### 标注详情

- **`--from`** - 用于提供商质押的账户 (e.g., **`my_account`**).
- **`--keyring-backend`** - 您选择的keyring后端 (e.g., **`test`**).
- **`--chain-id`** - 网络的chain_id (e.g., **`lava-testnet-2`**).
- **`--gas`** - 交易的 Gas 限额 (e.g., **`"auto"`**).
- **`--gas-adjustment`** - 燃料调节系数 (e.g., **`"1.5"`**).
- **`--node`** - Lava 的 RPC 节点 (e.g., **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**).
- **`--amount`** - 提供者质押金额。 这相当于权益修改 TX，因此应考虑 `--validator`标识。
- **`--delegate-commission`** - 提供商委托佣金（可选）。
- **`--delegate-limit`** - 提供商委托限制（可选）。
- **`--endpoints`** - 提供商端点（可选）。 需要遵循`stake-provider` 命令中的端点定义格式。
- **`--geolocation`** - 提供商地理位置（可选）。 可以使用`int32` 值或字符串值（"`EU,US`"）进行设置。
- **`--provider-moniker`** - 提供商名称（可选）。
- **`--validator`** - 使用`--amount` 标识（可选）时用于质押/取消质押的验证器地址。 如果未指定验证者，将自动选择提供商委托的最高权益验证者。 要查看所有提供商的委托以及验证器地址，请使用：`lavap query stake delegates [provider] --node {LAVA_RPC_NODE}`。 请注意，验证器地址应采用 sdk.ValAddress 格式（`lava@valoper...`）。

### 示例

```bash
lavap tx pairing modify-provider ETH1 \
    --gas-adjustment "1.5" \
    --gas "auto" \
    --from "my-account-name"
    --amount "2010ulava"
    --endpoints "my-provider-africa.com:443,AF my-provider-europe.com:443,EU" \
    --geolocation "AF,EU" \
    --validator  lava@valoper13w... \
```

## **常问问题** ❓

#### `lavap` not found

确保您下载/构建了二进制文件，并且它位于您用于运行 `lavap` 命令的路径中，或者您将它置于/usr/local/bin或path下。你可以使用`sudo make install-all`命令从你的克隆文件夹中下载/构建二进制文件。

#### Received error `account sequence mismatch`

尝试等待一个block_time (current=30s)，然后再次运行该命令

#### 我该如何做出改变配置?
提供商可以在任何时候对其on chain stake条目进行更改，这可以通过发送我们第一次使用更新的参数加入网络时使用的相同的stake-provider tx来实现。

也可以使用一个方便的cli命令来包装它:

```bash
lavad tx pairing modify-provider {SpecID} --from {WALLET}

# flags:
# --endpoints "my-provider-africa.com:443,AF my-provider-europe.com:443,EU" # must come with --geolocation if the new endpoints change/add a geolocation
# --amount 1000000000000ulava # when wanting to increase stake, decreasing can be done only by unstaking
# --provider-moniker "my-new-nickname"
```

#### 我如何取消质押？{#unstake}

运行以下命令：

```
lavap tx pairing unstake-provider "{NETWORK_NAME}" \\
--from "{ACCOUNT_NAME}" \\
--keyring-backend "{KEYRING_BACKEND}" \\
--chain-id "{CHAIN_ID}" \\
--node "{LAVA_RPC_NODE}"

# For example, unstake a provider for the ETH1 network,
# lavap tx pairing unstake-provider ETH1 \\
# --from my_account_name \\
# --keyring-backend "test" \\
# --chain-id "lava-testnet-2" \\
# --node <https://public-rpc-testnet2.lavanet.xyz:443/rpc/>

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT

```

#### Received error `dial tcp 127.0.0.1:26657: connect: connection refused`

如果您遇到以下错误：

```
Error: post failed: Post "<http://localhost:26657>": dial tcp 127.0.0.1:26657: connect: connection refused

```

很可能你的节点没有运行，或者还没有加入网络，你可以加入网络，
或使用`--node` 标志运行命令以使用外部 Lava RPC 节点

#### Received error `sentry init failure to initialize error="provider stake verification mismatch`

如果您遇到以下错误：

```
ERR sentry init failure to initialize error="provider stake verification mismatch -- &map[ChainID:NETWORK_NAME spec name:NETWORK_FULL_NAME]" ChainID=CHAIN_ID apiInterface=PROTOCOL

```

很可能是stake-provider命令尚未生效，如果运行`lavap server`选项，请等待几分钟，然后再次尝试运行该命令。
