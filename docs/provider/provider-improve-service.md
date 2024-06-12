---
slug: /provider-improve-service
title: 奖励/服务
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 提供商奖励

## 💰 赚取奖励

提供者在链上质押后向消费者提供服务，得到中继服务的加密证明。这些证明提交到链上以积累CUs，从而获得代币奖励。提供者奖励的计算是复杂的，并取决于提交的证明的有效性。然而，在有有效证据的情况下，奖励主要受 3 个因素的影响：
 - ☑️ **合格的服务质量**——中继会话的个人得分。合格的服务质量直接改变给定会话中的奖励。
 - ⭐ **卓越服务质量**——提供商的声誉得分。在配对和配对概率中，服务质量卓越影响提供者选择。
 - 🚨 **Jail**——对于劣质/失效的提供者的禁用机制。监禁可以阻止提供者在一段时间内提供服务。

<br/>

## 📊 可接受的服务质量 {#passable-qos}
可接受的服务质量在每个中继会话中单独评分。较低的分数意味着较低的奖励。最多可因糟糕的服务而减少累积 CU 的一半。可接受的 QoS 指标可以在[Lava Info 浏览器](https://info.lavanet.xyz/?utm_source=provider-rewards&utm_medium=docs&utm_campaign=docs-to-info)和[Prometheus 指标](/provider-features#config-prometheus)中查看。

合格的 QoS 是二进制的，要么好要么坏，没有中间值。0-1 "范围内的分数是各中继站平均二进制分数的结果。您可以从我们的[📄 RSCH-1000](https://community.lavanet.xyz/t/rsch-1000-passable-quality-of-service/25)研究论文中了解有关可通过 QoS 的更多信息。

### 指标 📈

可通过的服务质量分为三个指标:[可用性](#%EF%B8%8F-availability)，[数据同步/最新性](#-syncfreshness)，[延迟](#%EF%B8%8F-latency)。


#### 🛎️ 可用性
每个中继器的得分为`0 或 1` ，在一个会话中各中继器的平均得分为`0-1`。每个失败的中继都会得到 `0`。
可用性得分较低可能是下列情况之一导致中继失败：

##### 低分原因
<details>
  <summary>❗time out </summary>
  ⚠️ 提供商没有在允许的最长时间内做出响应，消费者就会放弃。<br/>
  ✅ 超时可在提供商程序日志中检查，超时的请求也会被提供商程序识别并终止。
</details>

<details>
  <summary>❗ unsupported chain </summary>
  ⚠️ 提供者在禁用的链中运行
  ✅ 可以在提供商初始化日志和请求日志中检查它，也可以在禁用链的prometheus度量中检查它
</details>

<details>
  <summary>❗ errors</summary>
  ⚠️ 任何Lava错误，无论是在提供程序中不同步的纪元，错误的钱包，错误配置的url <br />
  ✅ 可以在provider日志中检查错误，以及禁用链的prometheus指标
</details>

##### 优化
提高可用性包括找到错误的原因，并采取必要的措施来解决它们。

<details>
  <summary>⚡ add more endpoints</summary>
  Lava支持设置多个端点，并且使用者知道在某个端点宕机时进行负载平衡，通过设置多个端点(包含多个服务)提供者可以避免停机
</details>

<br/>

#### ⏲️ 延迟
每个中继的得分为“0或1”，在一个会话中平均每个中继的得分范围为“0-1”。对于每个超时时间超过一半的中继器，将给出`0`。一个
较低的延迟分数可能是响应慢的结果，可以通过打开provider中的调试日志来查看延迟或检查Prometheus来识别。

##### 优化

<details>
  <summary>⚡ 激活 lavap 缓存</summary>
  缓存可以以牺牲一些内存为代价来提高性能和延迟，如果你没有设置有效的缓存配置，它可能会降低延迟得分。访问<a href="provider-features#caching">provider features页面</a>以确保正确启用缓存。
  
</details>

<details>
  <summary>⚡ 在节点附近设置提供商服务</summary>
  位于同一服务器或虚拟专用云 (VPC) 上的节点的提供者服务将提供最佳的延迟，而必须通过 TLS 连接到不同位置的提供者将增加延迟。
</details>

<details>
  <summary>⚡ 设置正确的地理位置</summary>
  lava 根据地理位置匹配消费者和提供商，如果您的服务没有覆盖多个地点和多个节点，建议设置与您的提供商服务和节点邻近的地理位置。
  如果您错误配置了离节点位置较远的地理位置，则延迟分数会降低
</details>

<details>
  <summary>⚡ 降低服务器负载或优化机器</summary>
  如果服务器的 CPU、网络和内存使用率过高，则机器响应速度会变慢，因此建议对 CPU、网络和内存使用率进行监控
</details>

<details>
  <summary>⚡ 添加更多端点</summary>
  lava 支持设置多个端点，消费者知道要选择最近的端点，因此设置更多端点的延迟分数会更低
</details>

<br/>

#### 🌿 同步/新鲜度
每个中继的得分为`0 或 1` ，会话中各中继的平均得分为 `0-1`。如果每个中继的最新数据块证明比 QoS 同步规范允许的数据块滞后时间更早，则得分为`0`。

##### 如何识别
新鲜度证明由提供者服务在 GET_BLOCKNUM 请求中更新，然后与消费者中继响应一起返回。
可以打开调试日志，查看正在推进的区块。
最新区块会导出到 prometheus 中，也会上载到链上。
您可以将自己提供商的最新区块与其他提供商进行比较，一种有用的方法是过滤 provider_latest_block_report，并将自己的结果与其他提供商进行比较：
```bash
lavap test events 2000 --event lava_provider_latest_block_report --node https://public-rpc-testnet2.lavanet.xyz:443/
```

##### 低分原因
<details>
  <summary>❗ 提供商状态更新不够快</summary>
  确保 GET_BLOCKNUM 请求不会失败，常见问题是节流或 URL 配置错误
</details>

<details>
  <summary>❗ 最新区块太旧</summary>
  某些节点可能会失去同步并返回陈旧数据，因此必须对这些情况进行监控和修复，确保节点处于同步状态
</details>

<br />

## 📊 QoS Excellence {#qos-excellence}

优质服务的计算方法与合格服务质量非常相似。优质服务提供一系列分数，这些分数经过时间加权，以获得最新信息。
这里提到的所有改善合格 QoS 的措施都会影响优质服务。

### 指标 📈
优质服务得分分为 3 个指标：
* 可用性 - 分数范围在 `0-1` 之间
* 同步/数据新鲜度 - 我们比其他提供商落后多少时间，越低越好，"0 "表示您的同步在配对中是最好的
* 延迟--中继过程中平均经过多少个基准刻度（所用时间/基准时间）。

<br />

## 🏛️ Jailing {#jailing}

### 如何避免被监禁 🔓
Lava 协议删除提供劣质服务的供应商。该机制与 QoS 测量无关。
为了避免入狱，提供商需要避免以下行为：
* 已质押的端点不响应连接
* 在已质押的端点中禁用了链
* 对一大批消费者连续出现过多错误
* 非 TLS 连接或证书过期
* 区块头或来源
* 错过获得奖励

<br />

### 监禁是如何发生的 ❓
一旦满足上述一个或多个条件，Lava的区块链就会在以下情况下监禁提供者：
* spec中有足够多的其他提供商
* 供应商没有被冻结(如果你为了维护而冻结，你**不会**被监禁)
* 提供程序至少在 8 个 epoch 内处于活动状态
* 在过去 8 个 epochs 中，提供者获得的奖励总和少于过去 2 个 epoch 的报告总和

<br />

### 识别入狱 🩻
如果您的提供商被判入狱，它将在下一个纪元停止接收请求。

可以通过信息网页或以下命令监控此事件：

⌨️ 在被监禁之前报告的`command`：
```bash
lavap test events 2000 --event lava_provider_reported --node https://public-rpc-testnet2.lavanet.xyz:443/
```
一系列报告可能导致被监禁。

⌨️ 当区块链的监禁标准得到满足时的`command`：
```bash
lavap test events 2000 --event lava_provider_jailed --node https://public-rpc-testnet2.lavanet.xyz:443/
```
<br />

### 服务恢复 ▶️
从版本 0.27.0 开始，被监禁的提供者可以通过解冻来恢复服务。计划在解冻时有一个冷却期。

如果在短时间内反复启用监狱:
```bash
lavad tx pairing unfreeze --help
```

<br />

### 原因 ⚖️

监狱报告包含报告原因的额外信息，它们可以是由于:
* **断开连接**——provider没有对连接尝试做出响应
* **错误**——provider的响应是一系列连续的错误。

此外，报告包含一个精确的时间标签，因此提供商可以检查事件:
```bash
lavap test events 2000 --event lava_provider_reported --node https://public-rpc-testnet2.lavanet.xyz:443/
```
<br />

### 断开连接 💢
这意味着提供商的端点没有响应，可能是由于以下问题:
* TLS证书过期或未设置
* 错误配置将请求代理到提供程序服务
* 提供程序服务未运行
* 链上质押条目中的错误端点:可以通过运行修复
```bash
lavad tx pairing modify-provider ${CHAIN} --endpoints "${ENDPOINTS}" --geolocation ${GEOLOCATION} --from ${WALLET}
```
:::caution

确保端点中的 url 是提供程序 grpc 侦听地址，而不是节点 URL

:::

#### ⏺️ 识别断开连接

可以通过运行 test 命令来识别断开连接问题：

```bash
lavap test rpcprovider ${PUBLIC_ADDRESS}
```

<br />

### 错误 ❌
这意味着提供商服务连接稳定，但所有中继器都变为错误，可能是由以下原因引起的：
* 禁用链 - 提供者无权访问节点，或者验证未通过，并且链被禁用
* 意外错误
* 超时

#### ⏺️ 识别错误

可以通过查看提供程序服务日志来识别错误，如果反复被监禁，建议使用 debug 运行。

