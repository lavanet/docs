---
slug: /spec
title: Specifications模块
---

# Specifications模块 (Specs)

import RoadmapItem from '@site/src/components/RoadmapItem';

![Specs Banner](/img/banner/Specifications-8d88fb7fab996d996b8927b5a133c541.jpg)

## 🔍 概览 

Specifications(specs)是Lava多链支持的基础蓝图。它们以JSON格式呈现，详细说明了在Lava上运行API的最低要求。通过这些规范，Lava确定支持和启用哪些链和方法，并为它们确定成本、需求和验证。

每当生态系统需要新的API时，就会集成新的spec。这种动态方法将模块化和可扩展性直接合并到协议中，并确保Lava保持最新和可适应性。

<br/>

[<RoadmapItem icon="⛓️‍💥" title="添加 Spec" description="了解如何在Lava上提议新的链/API"/>](/add-spec)
[<RoadmapItem icon="📐🗜️" title="深入了解 Specs" description="请参阅 Spec 中所有字段的实时参考手册"/>](/spec-reference)

<br/>
<hr />


## 📖 主要概念

### 索引 📑 {#index}
`index`是spec的名称。 任何时候引用spec都将通过其`index`。

<details> <summary> 示例 </summary>

你可以在生产环境中看到`EVMOS`规范:

```json
{
    "proposal": {
        "title": "Add Specs: Evmos",
        "description": "Adding new specification support for relaying Evmos data on Lava",
        "specs": [
            {
                "index": "EVMOS",
                "name": "evmos mainnet",
                "enabled": true,
```
</details><br/>

### 导入 ⬇️ {#imports}
`imports`是对从其他源借用的函数的引用。相同或类似架构的api /chain 可以使用其`index`从现有规范中导入方法并实现任何新逻辑。`imports`通过消除重复集成相同api的需要来提高效率。

<details> <summary> 示例 </summary>

下面的spec同时实现了Cosmos和Ethereum的方法:

```json
"imports": [
  "COSMOSSDK",
  "ETH1"
]
```
</details><br/>

### API集合 🛠️ {#api_collections}
specification总是包含一个`api_collection`。`api_collection`包含可用的激活方法或api的列表以及它们各自的`api_interface `(例如:“`"rest"`,`"grpc"`,`"jsonrpc"`,`"tendermintrpc"`”,等等)。换句话说，它概述了所有必须是活动的和可操作的API或方法，以支持特定的chain/API。这里列出的每个方法都必须由提供者提供服务，并对使用者负责。

<details> <summary> 示例 </summary>

```json
  "api_collections": [
                    {
                        "enabled": true,
                        "collection_data": {
                            "api_interface": "rest",
                            "internal_path": "",
                            "type": "GET",
                            "add_on": ""
                        },
                        "apis": [
                            {
                            }
                        ]
```
</details><br/>

### 计算单元(CU) 🔢 {#cu}
每个API调用都有计算开销。为了量化这一点，Lava使用了`"compute_units"`或CUs。它们相当于一个指标，为每个API调用分配名义上的“成本”。这确保了透明的资源分配和利用，让消费者可以衡量他们的调用强度，而提供商则可以根据计算强度获得奖励。

<details> <summary> 示例 </summary>

```json
 "apis": [
                            {
                                "name": "/evmos/claims/v1/claims_records",
                                "block_parsing": {
                                    "parser_arg": [
                                        "latest"
                                    ],
                                    "parser_func": "DEFAULT"
                                },
                                "compute_units": 10,
                                "enabled": true,
                                "category": {
                                    "deterministic": true,
                                    "local": false,
                                    "subscription": false,
                                    "stateful": 0
                                },
                                "extra_compute_units": 0
                            }
```

</details><br/>

### 附加组件 ➕ {#addons}

附加组件 (`"add-on"`)引入了可选的新方法和API，这些超出了chain/API的基本要求。它们类似于插件或模块，特定的使用者可以不时地请求，提供商可以选择提供服务以获得额外的奖励。这允许在spec中概述补充功能，使提供商和使用者都可以灵活地定制他们的体验。

<details> <summary> 示例 </summary>

下面是我们的`ETH1`spec的`debug`插件的代码片段:

```json

"collection_data": {
                            "api_interface": "jsonrpc",
                            "internal_path": "",
                            "type": "POST",
                            "add_on": "debug"
                        },
                        "apis": [
                            {
                                "name": "debug_getBadBlocks",
                                "block_parsing": {
                                    "parser_arg": [
                                        "latest"
                                    ],
                                    "parser_func": "DEFAULT"
                                },

```

</details><br/>

### 扩展 〰️ {#extensions}
`"extensions"`允许针对特殊用例调整或增强规范中的现有方法和api。它们提供了根据用户子集的需求调整、优化或扩展当前函数的方法，这些用户子集需要通过指定的方法调用实现更多的功能。这允许在spec中概述替代功能，为提供商和使用者提供服务/请求特殊功能的灵活性。


<details><summary> 示例 </summary>

以下是我们的`ETH1`spec中的`"archive"`扩展片段:


```json
                        "extensions": [
                            {
                                "name": "archive",
                                "cu_multiplier": 5,
                                "rule": {
                                    "block":254
                                }
                            }
                        ]

```

这个例子指定了存档节点，当它们返回较早的块时，会收到一个“`cu_multiplier`”(因此会得到更多奖励)。

</details><br/>

<hr />

## 💡 示例 

### 区块链 ⛓️

- [Lava](https://github.com/lavanet/lava/blob/main/cookbook/specs/spec_add_lava.json)
- [Ethereum](https://github.com/lavanet/lava/blob/main/cookbook/specs/spec_add_ethereum.json)
- [Axelar](https://github.com/lavanet/lava/blob/main/cookbook/specs/spec_add_axelar.json)
- [Evmos](https://github.com/lavanet/lava/blob/main/cookbook/specs/spec_add_evmos.json)

### 丰富的 APIs 🌟

- [IBC](https://github.com/lavanet/lava/blob/main/cookbook/specs/spec_add_ibc.json)
- [CosmWasm](https://github.com/lavanet/lava/blob/main/cookbook/specs/spec_add_cosmoswasm.json)
- [Web3 P2P DNS Resolution (Outdated)](https://github.com/lavanet/resolva/blob/main/spec.json)


