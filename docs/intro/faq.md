---
slug: /faq
title: ❓ 常见问题 
---

# 常见问题

![FAQs Banner](/img/banner/FAQs.jpg)

:::info
在我们的Discord上还有一个名为#FAQ的频道。如果您需要进一步帮助，请访问我们的支持频道。
:::

<hr />

## 节点、验证器和提供商 ⏫ {#nodes-validators-providers}

### 🟡 specification是什么？它能让我做什么？ {#specs}
specification（"spec"）是您可以添加到 Lava 的参数模块，它扩展了提供商网络可提供的数据服务范围。RPC specs是首批添加到 Lava ，我们将很快提供subgraph 参数。


### 🟡 我在运行安装脚本时有问题。 {#install-troubleshooting}

故障排除:

1. 未找`lavad` 到命令
    1. 尝试运行 `source ~/.profile`
2. 节点卡在“Waiting for node to catch upgit”上。
    1. 这一过程可能需要一些时间，具体取决于您的网络连接、计算能力以及网络上最新区块的高度。
    2. 请在 5-20 分钟内完成此程序，以便赶上网络中的最新区块
3. 未找到 curl 或 unzip 命令
    1. `sudo apt update && sudo apt install curl unzip -y`
4. 未找到 sudo 命令
    1. `apt install sudo -y`
5. 运行 `stake_validator` 时，您会收到错误信息
    ```bash
    account lava@XYZ not found: key not found
    ```
    1. 在您尝试以验证者身份质押之前，请确保您的账户已从 Lava 获得资金

## 提供商 🖥️

### 🟡  如何更新/编辑我的服务提供商信息？{#provider-info}
要更新链上的提供商信息，请发送包含更新信息和最少 1 ulava 额外质押的`provider-stake`交易。

### 🟡 在尝试以提供商身份质押时，我收到了`ERR_stake_provider_endpoints: invalid provider endpoints` （ERR_stake_provider_endpoints：无效提供商端点）错误信息 {#staking-error}
在您的质押提供商交易中，您需要根据您质押的链指定所有必需的提供者端点。例如，为了支持 Cosmos 链，您需要同时提供 tendermint-rpc 和 rest，格式如下：`"IP:port,tendermintrpc,1 IP:port,rest,1"`。

### 🟡 供应商是否有解绑期？ {#unbonding-period}
有的，目前配置为 21 天。

### 🟡 如何查看我当前的提供商状态（包括解除绑定）？ {#provider-state}
您可以使用以下查询：`lavad q pairing providers <CHAIN_ID>`

### 🟡 运行我的提供商程序进程`lavad server` 时，出现以下错误`provider endpoint mismatch` {#provider-endpoint-mismatch}
这个错误意味着在使用`provider-stake`交易和运行`lavad server`时使用了不同的地理位置，请确保它们匹配，问题可以得到解决。

## 开发者 ⌨️

### 🟡 与其他 RPC 客户端一起使用 Lava {#using-lava-with-other-rpcs}

Lava 可轻松与其他 RPC 客户端集成。

1. **Gateway** - 简单地在网关上创建一个账户，并用相应的客户端 RPC URL 替换掉您的客户端。立即[开始](/gateway-getting-started)！
2. **SDK** - 您还可以使用 SDK 库来与 [viem](/viem), [cosmjs](/cosmjs), [web3.js](/web3js)，或 [ethers.js](/ethersjs5) 进行集成。

### 🟡 我已经在使用另一个 SDK。 {#using-lava-with-other-sdks}
没问题，Lava 提供与现有流行库的集成 [此处](/sdk-integrations)。

### 🟡 如何更改 Cosmjs 使用的 RPC 网址？ {#changing-cosmjs-url}

如果您希望实现无缝使用的原生集成，请查看新的 Lava 集成 [CosmJS](/cosmjs)！
或者，请查看我们社区成员创建的 cosmolava-client：[MELLIFERA-Labs/cosmolava-client](https://github.com/MELLIFERA-Labs/cosmolava-client)

如果您只想切换 RPC URL，您可以使用 [stargate](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/HttpEndpoint.html#url) 或 [cosmwasm-stargate](https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/interfaces/HttpEndpoint.html#url) 上的 HttpEndpoint 接口。请确保您已从 Lava 获取了 TendermintRPC 端点，否则可能会遇到错误。
