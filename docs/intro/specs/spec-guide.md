---
slug: /spec-guide
title: Spec 提案指南 📜
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spec 提案指南 (Walk-thru)

:::caution 正在建设中

本指南正在编写中！如有错误、不一致或不完整之处，敬请见谅。

:::


## 概览 🔎 {#overview}

本指南旨在帮助人们逐步完成撰写和设计spec提案的过程。创建或维护spec的过程一开始可能会让人不知所措，但一旦了解了基本原理，这个过程就会变得简单明了。请跟随下面的步骤，了解制作spec的整个过程。

<br/>

## Step 1: 创建proposal/JSON {#create-proposal}

> 创建specification `JSON` 文件
>

创建specification涉及多个步骤，是一个复杂的过程。为做好准备，您可以做的最好的练习之一就是访问现有specification并检查它们。查看现有specification可以让未来的specification创建者了解specification的标准结构和布局。

创建spec有三种方法

1. 📒**Cookbook**  - 所有目前在 Lava 上运行的specs都可以在这里找到 - [the Lava cookbook](https://github.com/lavanet/lava/tree/main/cookbook/specs). 请使用其中一个开始，根据需要更改字段。
2. 📄**Template -** 你可以在[这里](/spec-reference#-file-structure)找到一个空白模板。只要在你编写的过程中填写空白即可。
3. ✏️**From Scratch -** 完全从头开始编写spec可以避免不必要的混乱和多余的字段。

<br />

### 定义 Proposal {#define-proposal}

建议的方法是从零开始，逐个字段进行。让我们从一个空的 JSON 开始，创建我们的头部字段。 这个键称为 `proposal`，它描述了我们即将提出的specifications。

```json
{
    "proposal": {
        "title": "Add Specs: X",
        "description": "Adding new specification support for relaying X data on Lava",
		}
}
```

其格式基本符合标准，因此您可以复制上面的示例，并将 `X` 替换为正在创建的 API 的名称。

🔖参考资料: [`Proposal`](/spec-reference#proposal)

<br />

### 定义 Specs {#define-specs}

每个提案向 Lava 引入新的 `specs`。如其他地方所述，`specs` 是 API 提供者必须满足的最低要求，以便提供 API 服务。Lava 使用几个字段来为一个规范建立初始参数，包括一个 `index`，一个 `name`，一个 `data_reliability_enabled` 标记，以及 `minimum_stake_provider` 必须达到的抵押金额。

这些字段与其他字段相结合，构成了spec的第一部分：

```json
{
    "proposal": {
        "title": "Add Specs: X",
        "description": "Adding new specification support for relaying X data on Lava",
        "specs": [
            // highlight-start
            {
                "index": "X",
                "name": "X mainnet",
                "enabled": true,
                "reliability_threshold": 268435455,
                "data_reliability_enabled": true,
                "block_distance_for_finalized_data": 1,
                "blocks_in_finalization_proof": 1,
                "average_block_time": 5000,
                "allowed_block_lag_for_qos_sync": 2,
                "shares": 1,
                "min_stake_provider": {
                    "denom": "ulava",
                    "amount": "50000000000"
                },
            }
            // highlight-end
        ]
    }
}

```

 🔍 让我们逐一研究这些字段:


<details> <summary> `index` </summary>

索引是spec的通用标识符。索引不得与任何其他spec共享。无论spec被引用或导入到何处，它都将被引用。索引的命名约定方法是使用全部大写字母，不包含空格。更短/更简略的索引更受欢迎。（可选）为了缩短长索引，许多spec采用省略元音或缩短单词的策略（例如，`OPTM` 代表 Optimism，`STRK` 代表 Starknet，或 `AGR` 代表 Agoric）。

</details>

<details> <summary> `name` </summary>

名称是spec的长形描述性标识符。名称应指明spec是什么/与提供类似数据的spec有所区别。如果它是特定区块链的测试网或主网，应明确说明。

</details>

<details> <summary> `enabled` </summary>

enabled字段描述了spec是否处于活跃状态。有时spec可能已定义但未被使用，或者spec可能需要暂时停用。一般情况下，默认值应为true。

</details>

<details> <summary> `reliability threshhold` </summary>

可靠性阈值设置可靠性相关消息的频率。默认情况下，我们将其设置为 `268435455`，这是最小且高效的选择。如果您希望将其设置得更高 - 可以在这里[/spec-reference#terms]了解更多详细信息。

</details>

<details> <summary> `data_reliability_enabled` </summary>

数据可靠性应该启用，除非有充分的理由禁用它！默认值为 `true`。这意味着 Lava 协议将通过进行数据可靠性检查来确保数据的准确性。请注意，如果您要为除区块链之外的其他内容创建spec，则应将其设置为 `false`。

⚠️ 截至 `lava-testnet-2`，对各种 API 的数据可靠性支持正在进行中。

</details>

<details><summary> `block_distance_for_finalized_data` </summary>

这个字段定义了应该被视为安全免受链重组影响的区块数量；它因链而异。可以参考其他类似架构的specs，获取建议的数值。

</details>

<details><summary> `blocks_in_finalization_proof` </summary>

这个字段定义了在最终性证明中应该包含的区块数量；这会因链而异。请查看其他类似架构的specs以获取建议的数值。

</details>

<details><summary> `average_block_time` </summary>

平均每个区块通过的时间（以毫秒为单位）。该字段由协议中的几个算法使用，以确保服务提供商的服务质量。

</details>

<details><summary> `allowed_block_lag_for_qos_sync` </summary>

这是在服务提供商提供的数据被视为过时之前可以经过的最大区块数。对于更快的区块链/数据源，将允许更多的区块。对于较慢的区块链/数据源，较少的区块更合适。查看其他类似架构的 specs 以获取数值参考。

</details>

<details><summary> `shares` </summary>

默认为 `1`。这是每月月底奖励的奖金乘数。除非另有说明，否则没有必要更改。

</details>

<details><summary> `min_stake_provider` </summary>

该字段定义了提供商为该 API 提供服务所必须持有的最低金额。该值可与测试网络中所有其他 spec 提供的默认值保持一致。从 `lava-testnet-2` 开始，该金额为 `5000000`，单位为 `ulava`。

</details>

🔖参考资料: [`specs`](/spec-reference#specs)

一旦处理完这些字段，我们就可以开始设置继承了!

<br />

## Step 2: 继承 {#inheritance}

> 从现有spec继承属性。
>

在定义任何 API 之前，从已存在的specs中提取specs是明智的做法，以节省工作量。Lava 中的大多数 API 使用共同的方法，并且可以根据已在链上使用的specs创建。在 Lava 中，我们称这个从先前specs中借用的过程为继承。specs使用继承来消除冗余，最小化大小，并节省时间。另一个好处是 - 当继承的specs更新时，它们的后代specs会自动拉取更新！继承使事情变得容易。

### 导入 {#imports}

导入一般会引入所有解析指令、验证、API集合和默认API。要重写特定的强制行为——只需在继承specs中定义parse_directive、verification、API集合或API的`name`(如果编辑的是parse指令，则是`function_tag`)。

要继承一个新specs，使用`imports`字段:

```json
"specs": [
            {
                "index": "X",
                "name": "X mainnet",
                "enabled": true,
								// highlight-start
                "imports": [
                    "ETH1"
                ],
								// highlight-end
                "reliability_threshold": 268435455,
                "data_reliability_enabled": true,
                "block_distance_for_finalized_data": 1,
                "blocks_in_finalization_proof": 1,
                "average_block_time": 5000,
                "allowed_block_lag_for_qos_sync": 200,
                "min_stake_provider": {
                    "denom": "ulava",
                    "amount": "50000000000"
                },
```

常见的导入将包括以下内容之一:

```json
"COSMOSSDK"      # Cosmos SDK Standard (i.e. Cosmos Chains)
"COSMOSSDK45DEP" # Cosmos SDK v0.45 deprecated apis
"COSMOSSDKFULL"  # Cosmos SDK + COSMWASM
"ETH1"           # Ethereum-based chains supporting standard EVM RPC calls
"SOLANA"         # Solana-based chains
"OPTM"           # Optimism-based cahins
```

:::info
通常情况下，spec将只使用上述导入中的一种。spec是完全模块化的，可以导入任何其他spec。例如，在设计主网spec和测试网spec时，这种模块化设计模式会派上用场。通常，测试网spec只是简单地继承主网spec，不需要进一步的配置。
:::

### 继承 APIs {#inheritance-apis}

如果你对想要导入的东西很挑剔，可以使用 `api_collection`下的`inheritance_apis` 字段来指定单个api。如果你对此感到困惑，不要担心——我们将在接下来解释更多关于API集合的内容。现在，强烈建议您使用导入。记住，你总是可以禁用未使用的 `apis` 和`api_collections`。

🔖参考资料: [`imports`](/spec#imports)

<br />


## Step 3: API集合 {#api-collections}

> 指定提供商必须使用的API集合和接口。

每个spec可以包含多个类别的 API 集合。尽管 API 集合的构造类似，但它们被分成不同的接口。如果一个spec只包含它导入的另一个spec的 API，那么可能根本不需要定义 API 集合...

下面定义了一些应用程序接口集合示例（差异*高亮显示*）：

<Tabs>
<TabItem value='jsonrpc' label='JSONRPC'>

```json
"api_collections": [
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "jsonrpc",
            "internal_path": "",
            "type": "POST",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```
</TabItem>

<TabItem value='grpc' label='gRPC'>

```json
"api_collections": [
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "grpc",
            "internal_path": "",
            "type": "",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```
</TabItem>

<TabItem value='rest' label='REST'>

```json
"api_collections": [
    //REST - GET
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "rest",
            "internal_path": "",
            "type": "GET",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
    //REST - PUT
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "rest",
            "internal_path": "",
            "type": "POST",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```

</TabItem>

<TabItem value='tendermint' label='TendermintRPC'>

```json
"api_collections": [
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "tendermintrpc",
            "internal_path": "",
            "type": "",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```
</TabItem>
</Tabs>

每个 API 集合都由不同的部分组成。这些部分共同定义了提供商将提供的 API。我们有必要详细回顾一下这些组件，以便您熟悉它们的用途：

🔖参考资料: [`api_collections`](/spec-reference#api_collections)

🔖参考资料: [`collection_data`](/spec-reference#collection_data)

<br/>

### 数据集合

<details><summary> `api_interface`</summary>

```bash
# pick one of the following:
"tendermintrpc"
"grpc"
"jsonrpc"
"rest"
```

</details>

<details><summary> `internal_path`</summary>

这个字段给出了这个特定apiccollection的节点的内部路径。这很可能是不需要的，除非API集在节点的内部路径上有所不同。最好的例子是[AVAX规范](https://raw.githubusercontent.com/lavanet/lava/main/cookbook/specs/spec_add_avalanche.json)，它使用内部路径来区分具有不同apiccollections的子网。

</details>


<details><summary> `type`</summary>

```bash
# pick one of the following:
""
"GET"
"POST"
"PUT"
"PATCH"
"DELETE"

```

</details>


<details><summary> `add_on` </summary>

将此字段保留为空字符串(`""`)是默认和预期的输入。如果您向字符串中添加任何内容，API Collection将作为带有字符串中提供的名称的插件进行处理。在这种情况下，该集合将被视为提供者商可选集合。我们将在本指南的后面一节 [later section](/spec-guide#step-6-addonsextensions-optional-apis)中更详细地介绍插件。
</details>

<br />

### 其他字段


#### APIs

这个数组将包含集合的所有api——以一种您可以看到计算单元的方式进行概述。有一个[whole section](/spec-guide#new-apis)专门介绍向API Collection添加API，所以我们现在也可以把这个留作空白。

<br/>

#### Headers

可以使用此数组指定要在API中使用的头。暂时将此项留空：`[]`，除非您想确定消费者可以随请求一起发送的标头。

每个Header由 `name` 和 `kind` 组成，`function_tag`是可选的。

<details><summary>Header 示例</summary>

```json
{
    "name": "x-aptos-ledger-version",
    "kind": "pass_reply"
}
```

</details>

##### header的种类

| Header      | 说明                                       | 示例                                             |
|-------------|-------------------------------------------|-------------------------------------------------|
| pass_ignore | 依赖于特定于节点的信息，排除了header的可靠性。    | Time tag of reply on Aptos (varies per node).   |
| pass_reply  | 节点将头返回给用户；用户无法请求。单向。          | Ledger version 0, e.g., x-aptos-echo from node. |
| pass_both   | 双向通信：节点和用户都可以发送和接收header。      | Cosmos block.                                   |
| pass_send   | 用户可以发送到节点，但节点不能发送到用户。单向的    | Instruction headers.                            |

我们可以使用`function_tag`来解析header的响应。`function_tag` **必须**与现有的parse_directive相关。
<br />

#### 解析指令

因为每个API都以不同的格式返回数据，所以Lava协议建立了一种处理数据解析的标准化方法。这些标准被称为`parse指令`。解析指令是处理API响应的关键部分。在继续下面的内容之前，请花点时间熟悉一下Lava解析函数:

🔖参考资料: [Parsing](/spec-reference#parsing)

如果导入了spec，那么很可能已经为您处理过了，不需要定义。但是，如果没有导入，则需要

```json
{
    "function_tag": "GET_BLOCK_BY_NUM",
    "function_template": "{\"jsonrpc\":\"2.0\",\"method\":\"starknet_getBlockWithTxHashes\",\"params\":[{\"block_number\":%d}],\"id\":1}",
    "result_parsing": {
        "parser_arg": [
            "0",
            "block_hash"
        ],
        "parser_func": "PARSE_CANONICAL",
        "encoding": "base64"
    },
    "api_name": "starknet_getBlockWithTxHashes"
},
{
    "function_template": "{\"jsonrpc\":\"2.0\",\"method\":\"starknet_blockNumber\",\"params\":[],\"id\":1}",
    "function_tag": "GET_BLOCKNUM",
    "result_parsing": {
        "parser_arg": [
            "0"
        ],
        "parser_func": "PARSE_BY_ARG"
    },
    "api_name": "starknet_blockNumber"
}

```

<details><summary> `function_tag` </summary>
这是parse_directive的全局名称和标识。在其他任何地方引用parse_directive时，都会使用这个名称。
</details>

<details><summary> `function_template` </summary>
这是解析响应的（JSON）模板。它用于确定响应的标准格式。
</details>

<details><summary> `api_name` </summary>
`api_name`指的是将被parse_directive解析的特定API。它应该与`api_collections`中定义的api或继承的api相关联。
</details>

:::warning

Lava数据可靠性检查要成功，必须定义Get_BlockNum和Get_Block_by_Num。如果你的API不支持区块号——请确保将`data_reliability_enabled`设置为`false`。

:::

<br />

## Step 4: 新 APIs {#new-apis}

> 设计不继承自其他spec的api。



```json
{
    "name": "blockHashAndNumber",
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
},

```
### 区块解析

该区域用于描述如何从API请求中提取块号。一定要检查解析参考和几个spec示例，以确保它的定义是正确的。

🔖参考资料: [`Block Parsing`](/spec-reference#block-parsing), [`Parsing`](/spec-reference#parsing-)

### 计算单元

描述每个API调用消耗的计算单元的数量。这个数字代表了计算强度/难度，因此也代表了调用这个API的成本。注意:计算单元不仅与奖励挂钩——它们还间接告知协议预期的响应时间;默认情况下，每个计算单元将中继的超时阈值增加约100毫秒。

每次调用至少有10个CU，这对大多数调用来说应该足够了。

🚧 备注 `extra_compute_units`目前没有使用，但可以根据消费者参数来改变成本。

🔖参考资料: [`Compute Units`](/spec#cu)

### 分类

<details><summary> `deterministic` </summary>
<b>true</b> 如果应用程序接口作出确定性响应 <i>(default)</i><br />
 <b>false</b> 对非确定性响应禁用数据可靠性。
</details>

<details><summary> `local` </summary>
<b>true</b> 如果通过 API 返回节点的本地信息。<br />
<b>false</b> 如果节点上的本地信息与响应无关。 <i>(默认)</i>
</details>

<details><summary> 🚧 `subscription` </summary>

UNDER CONSTRUCTION => mark <b>false</b> <br />
subscription指示何时使用提供商打开流API (wss当前已禁用）。

</details>

<details><summary> `stateful` </summary>

管理nonce一致性。使用<b>1</b>将信息传播到所有提供商，<b>0</b>表示不传播。

</details>


🔖参考资料: [`Category`](/spec-reference#api_category)

### 其他字段

对于其他字段，请查看参考资料并观察其他specs。

🔖参考资料: [`APIs`](/spec-reference#apis)

<br />

## Step 5: 验证 {#verifications}

> 定义测试，以确认提供商程序正在提供适当的数据
>

之前，我们将解析指令视为一种理解中继返回数据类型的方法。验证是一个`parse_directive`和一个`expected value`的组合。它为协议提供了一种智能检查提供商是否提供正确数据的方法。每个`API Collection` 都有自己的一套验证方法。定义如下验证:

```json
"verifications": [
    {
        "name": "enabled",
        "parse_directive": {
            "function_template": "{\"jsonrpc\":\"2.0\",\"method\":\"getRawHeader\",\"params\":[\"latest\"],\"id\":1}",
            "function_tag": "VERIFICATION",
            "result_parsing": {
                "parser_arg": [
                    "0"
                ],
                "parser_func": "PARSE_BY_ARG",
                "encoding": "hex"
            },
            "api_name": "getRawHeader"
        },
        "values": [
            {
                "expected_value": "*"
            }
        ]
    }
]
```

验证的默认行为是，如果失败，则限制提供商为 API 提供服务。这可以通过一个名为`severity`的字段来改变，但除非是针对您的特定用例，否则不建议采用这种行为。

🔖参考资料: [`Verifications`](/spec-reference#verifications)

<br/>

## Step 6: 插件/扩展 (可选的 APIs) {#addons-extensions}

> 定义可选的API集合，提供者可以选择为更多的CU提供服务
>

Specs是高度模块化和可组合的。有时，提供商的最低要求可能不能满足网络上的所有消费者。归档节点就是一个很好的例子;并不是网络上的每个提供商都需要提供存档数据，但是对于那些想要选择加入的人，您可以使用扩展来定义规则和奖励。插件是一组非强制性的附加API集合——一个很好的例子就是一个响应调试API的节点!

### 创建插件

制作插件与制作任何其他API集合非常相似。唯一的区别是`add_on`字段必须包含一个唯一的名称。

```json
{
                        "enabled": true,
                        "collection_data": {
                            "api_interface": "jsonrpc",
                            "internal_path": "",
                            "type": "POST",
														// highlight-start
                            "add_on": "debug"
														// highlight-end
                        },
```

🔖参考资料: [`Addons`](/spec#addon)


### 创建扩展

与制作插件相比，制作扩展的过程略有不同。我们将扩展定义为一个数组，它是`api_collection`对象的子对象:

#### Archive Example
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

`archive`提供商必须从latest返回至少254个块，从而接收5倍的CU（计算单元）。


#### 审查示例
```json
"extensions": [
                            {
                                "name": "censorship",
                                "cu_multiplier": 2,
                                "rule": {
                                    "block": 1
                                }
                            }
                        ]
```
`censorship`提供商可能只返回距离最近一个区块1个区块的数据，从而获得2倍的CU奖励。

:::info

目前，规则和扩展是硬编码的。在编写本指南时，“block”是代码中定义的唯一规则，“archive”是唯一公认的扩展。

:::

🔖参考资料: [`Extensions`](/spec#extensions)

<br />

## Step 7: 可选 APIs 的验证 {#verifications-for-addons-extensions}

> 为提供插件和扩展API集合的提供商定义测试

### 对插件的验证

验证插件很简单!它们的定义[完全相同](#verifications)与其他api_collection的定义相同;当定义一个api_collection作为插件时，用你的验证填充` verified `。


### 对扩展的验证

对扩展的验证也同样简单。在` verified `中，在子元素`values`下，创建另一个名为`extension`的条目，如下所示:

```json

"values": [
    {
        "latest_distance": 6646
    },
    {
        "extension": "archive",
        "expected_value": "0x0"
    }
```


<br />

## Step 8: 使用本地区块链进行测试 {#test}

> 使用`test_spec_full.sh`脚本自动执行本地测试。

### 安装 Lava

1. 在本地机器上安装[Lava Binaries](/install-lava) 
2. 检查`test_spec_full.sh`是否存在于`. /scripts` 文件夹

### 运行命令

```
./scripts/test_spec_full.sh cookbook/specs/spec_add_X.json <interface> <rpc_url_for_index1> <interface> <rpc_url_for_index2>
```

它将搭建一个本地区块链，并创建一个由几个运行该spec的提供商组成的测试网络!您可以实时看到错误，这将提醒您需要调试的地方。一旦您调试了所有问题-继续下一步!


<br/>

## Step 9: 推送到您的仓库并分享 {#push-and-share}

> Add your `JSON` file to your local `cookbook/spec/`  directory.


与[Lava团队和社区!](https://discord.gg/Tbk5NxTCdA)分享您的进展
