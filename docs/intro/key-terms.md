---
slug: /key-terms
title: 📝 关键词
---

# 关键术语 📝

## 🌐 网络与协议

<details>
  <summary>Lava 网络</summary> 
  一个由开源软件和协议驱动的区块链数据市场，旨在实现模块化的点对点数据可访问性和可用性。
</details>

<details>
  <summary>Lava 协议</summary> 
  Lava功能在代码中的实际实现，涵盖链上和链下。
</details>

<details>
  <summary>Token (LAVA)</summary> 
  LAVA 是 Lava 网络的本地数字资产，是其经济模型的核心。在网络中，它具有多种用途，包括用作支付交易所需的燃料费、作为治理代币，允许持有者参与网络决策，以及作为奖励分发给验证者、提供商和贡献者。
</details>

<details>
  <summary>治理</summary> 
  Lava 网络中的去中心化决策过程，其中代币持有者对关键方面拥有控制权。
</details>

<details>
  <summary>Specifications</summary>
  Lava 多链和多 API 支持的模块化蓝图，定义了链和方法的需求、成本和验证。Specs是支持 Lava API 的最小模块。
</details>

## 💰 订阅与计划

<details>
  <summary>订阅</summary> 
  消费者为访问 Lava 网络服务所作的承诺，其中包括定价、资源分配和使用规则。
</details>

<details>
  <summary>计划</summary> 
  定义消费者可以购买的各种订阅方案的框架，包括定价和资源限制。
</details>

<details>
  <summary>项目</summary> 
  订阅中的不同配置环境，允许消费者自定义特定用例的服务供应和管理。
</details>


## 📊 服务质量 (QoS)

<details>
<summary>优质服务</summary> 
  一套旨在确保为消费者提供高质量服务（QoS）的衡量标准，可对提供商的性能进行监控和定制。
</details>

<details>
  <summary>合格的 QoS</summary> 
  一个简化的二进制指标，表示中继站是否符合最低可用性标准，影响报酬和惩罚。
</details>

## 👥 网络中的角色

<details>
  <summary>消费者</summary> 
  购买订阅计划以访问通过 Lava 协议提供的区块链数据和服务的个人。
</details>

<details>
  <summary>提供商</summary> 
  质押代币以向消费者提供服务的实体，在维护数据完整性方面发挥着关键作用。
</details>

<details>
  <summary>验证者</summary> 
  网络参与者通过质押代币来保护网络，创建区块，执行交易，并对重要事项进行投票。
</details>

<details>
  <summary>LAVA Token 持有者</summary> 
  持有LAVA代币的个人，可以选择委托代币，参与治理，并可能获得奖励。
</details>

<details>
  <summary>贡献者</summary> 
  创建和维护RPC和API规范和软件的网络成员，同时通过奖金和贡献参与社区。
</details>

## 🔌 SDK及其集成

<details>
  <summary>SDK</summary> 
  一个JavaScript/TypeScript包，简化了向提供商发送数据中继的过程，提供了与各种开发环境的兼容性。
</details>

<details>
  <summary>集成</summary> 
  SDK与CosmJS、Web3JS、EthersJS和viem等知名库的兼容性，使开发人员更容易与Lava网络交互。
</details>

## 🏅 提供的产品

 <details>
  <summary>Gateway</summary> 
  一种管理系统，使消费者能够购买订阅、创建项目和管理策略，无需运行节点。
</details>

<details>
  <summary>Lava 信息</summary> 
  这是一个网络应用程序，提供有关 Lava 协议的详细信息，包括中继数据、计算单元 (CU) 使用情况、提供商统计数据等。
</details>

<details>
  <summary>服务器工具包</summary>
</details>

## 🎖️ 徽章、配对和奖励

<details>
  <summary>徽章</summary> 
  终端用户从前端应用程序连接到 Lava 网络时，需要获得由 Dapp 所有者使用订阅私钥生成的发送中继的特殊权限。
</details>

<details>
  <summary>配对</summary> 
  一种基于时间的机制，可确保根据位置、偏好等各种因素将消费者连接到最合适的服务提供商。
</details>

<details>
  <summary>奖励</summary> 
  在 LAVA 代币中，这些代币激励人们诚实地参与 Lava 网络，分发给验证者、提供者和贡献者，以奖励他们的贡献和服务。
</details>

## 账户和钱包

<details>
<summary>Keyring</summary>
密匙环保存用于与节点交互的私有/公共对。例如，在运行区块链节点之前需要设置验证器密钥，以便对块进行正确签名。私钥可以存储在不同的位置，称为“backends”，例如文件或操作系统自己的密钥存储。<a href="https://docs.cosmos.network/main/run-node/keyring.html">(点击这里了解更多)</a>
</details>

<details>
<summary>Keypair</summary>

Lava 网络中的密钥对由两个基本部分组成：公钥和私钥。这对加密密钥对确保账户安全和授权 Lava 生态系统内的交易至关重要。
</details>

<details>
<summary>公钥</summary>
公开密钥是公开共享的加密密钥，用于各种目的，包括加密数据、验证数字签名和在 Lava 网络内建立安全通信。它是密钥对的一半，另一半是私人密钥。公开密钥对于保护 Lava 资产、验证交易和确保数据完整性至关重要。

密钥示例: `lava@16g2y9l2zj5yrwcftd6lrwepnhjnl0f2gd70tjg`

</details>

<details>
<summary>私钥</summary>
在 Lava 网络中，私钥是一种高度机密的秘密加密密钥，它与相应的公钥组成一对密钥对。私钥用于解密数据、签署交易、访问 Lava 资产和敏感信息等关键任务。私钥应安全存储，切勿公开共享，因为它赋予了对加密资产和安全通信的完全控制权和所有权。

密钥示例: (`64 character hexadecimal string`)
</details>