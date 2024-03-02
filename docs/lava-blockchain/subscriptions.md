---
slug: /subscriptions
title: 订阅计划
---

# 订阅计划

:::info
❗ Lava network为消费者提供各种订阅计划以访问其服务。虽然网络仍然在testnet中，但订阅应该主要用于测试目的。
:::

## 概览 🔍

Lava 中的订阅允许消费者根据选择的计划（例如，1、3、6 或 12 个月）在指定的时间段内访问服务。计划以每月成本和每月计算单元（CU）配额进行宣传。订阅使消费者可以选择计划和月份，创建无缝、可预测的体验。如果已存在相同计划的订阅，则订阅将被延长指定的期限，以灵活地延长服务访问时间。订阅的最长持续时间为 12 个月，总最长持续时间为 13 个月。

与按需付费系统相比，订阅具有几个优点，包括熟悉性、可持续性和简单性。它们通过鼓励消费者和提供者之间的长期关系，为提供者提供可预测的收入，为消费者提供稳定的服务访问，促进了更健康的 Lava 生态系统。

Lava 网络为计划提供了可选的年度折扣率，该折扣率适用于为 12 个月的订阅交易成本。这鼓励长期承诺，使消费者和提供者都受益。

消费者可以在他们的订阅下创建项目，这些项目可以具有不同的策略和使用密钥。Lava 网络通过治理采用灵活的计划系统，使网络能够对市场动态做出反应并保持竞争优势。

<br />
<hr />

## 准备账户 👛
消费者需要在链上拥有一个地址，以便管理订阅和使用 p2p 中继。
要创建账户，请参阅 [accounts & wallets](/docs/lava-blockchain/wallet.mdx)。

<br />
<hr />


## 与订阅交互 💱

:::tip
📖 使用CLI?添加此标志以访问远程节点:
```
--node https://public-rpc-testnet2.lavanet.xyz:443/
```
:::

与订阅的交互目前是通过使用 `lavad` 二进制来完成的。

<br />

### 📊 列出可用的计划

使用 CLI 查看可用计划列表：

```bash
lavad q plan list
```

查看具体计划的详细信息：
```bash
lavad q plan info <plan_index>
```
<center> .. </center>
<br />

### 💸 购买订阅计划

订阅购买`subscription buy`命令允许用户为自己或其他用户购买服务计划订阅。期限以月为单位（默认为 1 个月）。

```bash
lavad tx subscription buy <plan-index> [<consumer_beneficiary_address>] [<months>] \
	--from <paying_address>
	--chain-id lava-testnet-2
```

示例：

```bash
# 为受益人购买 3 个月的套餐
lavad tx subscription buy explorer lava@1lr6...v4wu 3 \
	--from my_wallet \
	--chain-id lava-testnet-2
```
<center> .. </center>
<br />

### 👓 检查订阅计划

**`current`**命令查询消费者当前订购服务计划的情况：

```bash
lavad query subscription current <consumer>
```

这输出了消费者当前订阅的摘要。以下是关键细节的简化解释：

- **消费者** 和 **创建者**：这些分别表示受益于订阅的消费者和创建（付款）订阅的用户的地址。
- **剩余时长** 和 **总时长**：这些值分别表示订阅中剩余的月数和订阅购买的总月数。
- **本月剩余 CU** 和 **总 CU**：这些值分别显示当前月份剩余的计算单元 (CU) 数量和订阅计划中为每月分配的计算单元总数。

输出中提供的其他信息，如区块号和到期时间，可用于跟踪订阅的历史记录，并了解资源何时到期或刷新。通过了解这些重要细节，消费者可以有效管理他们的订阅，并对未来计划或资源消耗做出明智的决策。

<center> .. </center>
<br />
<hr />

## 管理项目 📈

<br />

### ➕ 从订阅中添加项目

消费者购买订阅后，就可以在订阅中添加项目。项目可用于限制计算单元 (CU) 的消耗、指定允许的 API（包括附加组件和扩展）、限制提供商配对以及指定与之交互的特定提供商。创建项目：

```bash
lavad tx subscription add-project [project-name] --from <subscription_consumer>
```

#### 选项：
- **策略** - 要指定策略，请使用 `--policy-file <文件路径>` 标志添加一个策略文件。有关示例策略文件，请参阅 Lava Cookbook：
	- [简单策略](https://github.com/lavanet/lava/blob/main/cookbook/projects/example_policy.yml)
	- [具有附加项的策略](https://github.com/lavanet/lava/blob/main/cookbook/projects/policy_all_chains_with_addon.yml)
	- [具有扩展的策略](https://github.com/lavanet/lava/blob/main/cookbook/projects/policy_all_chains_with_extension.yml)
- **密钥** - 如果项目指定了授权用户的密钥，请在添加项目时使用 `--project-keys <项目密钥文件路径>` 指定它们。有关示例项目密钥文件，请参阅 Lava Cookbook：
	- [示例项目密钥 YAML](https://github.com/lavanet/lava/blob/main/cookbook/projects/example_project_keys.yml)
- **禁用** - 最终，消费者可能希望添加一个项目，但默认情况下禁用它。请使用 `--disable` 标志来实现。
<br />

### ➖从订阅中删除项目

删除项目非常简单，而且不可撤销。项目删除后，只能使用 `add-project` 命令将其添加回来。删除项目：

```bash
lavad tx subscription del-project <project-name> --from <subscription_consumer>
```