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

## 服务提供者 🖥️ {#providers}

### 🟡 什么是 QoS（可接受的服务质量）？{#qos}
每个中继会话的提供者得分基于延迟、同步和可用性指标。有两种不同类型的 QoS：
- [可接受的 QoS](/provider-improve-service#passable-qos)
- [QoS 卓越](/provider-improve-service#qos-excellence)

### 🟡 如何提高您的服务提供者的 QoS？{#improve-qos}
提供者的评分基于响应时间、可用性和新鲜度。保持节点的高性能以及拥有强大的服务器也很重要。更多细节，请参阅 [RSCH-1000](https://community.lavanet.xyz/t/rsch-1000-passable-quality-of-service/25)

### 🟡 如何检查服务提供者的性能？{#provider-performance}
您可以在 [Lava Info](https://info.lavanet.xyz) 上查看所有提供者。对于您自己的提供者，您可以使用 `metrics-listening-address` 标志 [配置 Prometheus](/provider-features/#config-prometheus)。

您还可以使用 CLI 跟踪自己的性能：`lavad test rpcprovider...`。

### 🟡 如何与服务提供者一起赚取 Magma 积分？{#provider-points}
目前，提供者与 Magma 没有连接，您无法获得任何积分。但是，您已经可以测试提供者的性能、评估您的 CU、QoS 等等...

### 🟡 使用 Lavavisor 和不使用 Lavavisor 的提供者之间有什么区别？{#lavavisor}
没有区别。LavaVisor 会自动更新二进制文件。没有 LavaVisor 的话，您需要手动更新。[LavaVisor](/lavavisor) 是基于 [Cosmovisor](https://docs.cosmos.network/main/build/tooling/cosmovisor)。

### 🟡 提供者和验证者使用的代币不同吗？{#provider-tokens}
不，只有一个代币 - `LAVA`。它用作治理代币，作为交易所需的燃气费，用于分发给验证者/提供者的奖励等等。Lava 使用的是双重质押，当质押提供者时，还要指定验证者。

### 🟡 提供者的惩罚如何工作？
提供者的惩罚尚未实施。计划仅针对欺诈行为。对于服务提供者，已实施了一项 [冻结功能](/provider-features#freeze)，以避免停机或服务质量不佳。
有关监禁的文档可在 [此处](/provider-improve-service#jailing) 找到。

以下是关于监禁的一些基本事实：
- 提供者通过中继付款声称服务的 CU；
- 每个中继付款都有一个无响应的提供者列表（例如，提供者1 的声称可能会报告提供者 2、3），这些报告由消费者以及所使用的 CU 签名；
- 每个时期（15 分钟）链会检查无响应的报告，对比过去 5 个时期的 CU；
- 如果每个中继的投诉比例大于声称的服务比例（如果您想要完整的方程式，请告诉我），如果大于 0.5 并且在规格中可用的提供者数量大于每个地理位置的 5 个，则提供者将被监禁，并且在 25 小时后会收回其所有资金。

### 🟡 现在提供者赚多少钱？{#providers-earn}
提供者以 lava 代币的形式从消费者那里获得服务费。因此，测试网络提供者目前在测试网络上赚取 lava 代币。请记住，测试网络代币没有价值！

### 🟡 新提供者多快收到中继请求？{#new-providers}
可以最多需要 15 分钟才能再次获得中继。

### 🟡 在节点和提供者之间使用相同的钱包地址可以吗？{#same-wallet-address}
可以，允许使用相同的钱包地址。

### 🟡 什么是激励公共 RPC（ipRPC）？{#provider-iprpc}
这些是激励项目，提供者通过为特定链提供服务而获得奖励。

链奖励节点运营商加入 Lava 并使用其本地代币提供基础设施。
当前支持以下 ipRPC：
- [Evmos](https://www.lavanet.xyz/blog/providers-guide-to-evmos-iprpc?utm_source=provider-faq&utm_medium=docs)
- [Axelar](https://www.lavanet.xyz/blog/providers-guide-to-axelar-iprpc?utm_source=provider-faq&utm_medium=docs)
- [NEAR](https://www.lavanet.xyz/blog/onboarding-guide-get-paid-to-run-a-near-rpc-node?utm_source=provider-faq&utm_medium=docs)

### 🟡 谁可以加入激励公共 RPC？{#join-iprpc}
任何人都可以加入 ipRPC。需要为适当的服务[设置提供者](https://docs.lavanet.xyz/provider-setup)。然后注册以使用适当的表格接收 lava 测试网络代币：
- [Evmos ipRPC](https://lavanet.typeform.com/to/qQ1x6WJs)
- [Axelar ipRPC](https://lavanet.typeform.com/to/iW8rynWg)
- [NEAR ipRPC](https://lavanet.typeform.com/to/plCaDdVM)

### 🟡 如何更新/编辑我的提供者信息？{#provider-info}
要在链上更新您的提供者信息，请发送 `lavad tx pairing modify-provider...` 交易，其中包括更新的信息和最少 1 ulava 的额外质押。

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
