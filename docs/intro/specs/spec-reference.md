---
slug: /spec-reference
title: 参考指南 📐
---

# Spec 参考指南

本指南详细参考了Lava网络中的各种规范。它包含了提案、参数、API集合、服务API和相关扩展的结构和定义。目标是确保开发人员、验证人员和其他涉众对配置和功能有一个清晰和一致的理解。

<br/>
<hr/>

## 📌 文件结构

<details><summary> 🔝 树状结构 </summary>

```
Spec (JSON)
│
├── Proposal (`proposal`)
│   ├── title
│   ├── description
│   │
│   └── Specifications (`specs`)
│       ├── index
│       ├── name
│       ├── enabled
│       ├── imports
│       ├── reliability_threshold
│       ├── data_reliability_enabled
│       ├── block_distance_for_finalized_data
│       ├── blocks_in_finalization_proof
│       ├── average_block_time
│       ├── allowed_block_lag_for_qos_sync
│       ├── min_stake_provider
│       └── min_stake_client
│       │
│       └── API Collections (`api_collections`)
│           ├── enabled
│           ├── collection_data
│           │   ├── api_interface
│           │   ├── internal_path
│           │   ├── type
│           │   └── add_on
│           ├── Service APIs (`apis`)
│           │   ├── name
│           │   ├── block_parsing
│           │   │   ├── parser_arg
│           │   │   └── parser_func
│           │   ├── compute_units
│           │   ├── enabled
│           │   ├── category
│           │   │   ├── deterministic
│           │   │   ├── local
│           │   │   ├── subscription
│           │   │   └── stateful
│           │   └── extra_compute_units
│           ├── headers
│           ├── inheritance_apis
│           ├── parse_directives
│           ├── Verifications (`verifications`)
│           │   ├── name
│           │   └── values
│           └── Extensions (`extensions`)
│               ├── name
│               ├── cu_multiplier
│               └── rule
│
└── Deposit (`deposit`)
    └── deposit

```

</details>

<details> <summary> 🗋 JSON (Template) </summary>

```json
{
  "proposal": {
    "title": "Add Specs: API/Chain ",
    "description": "...",
    "specs": {
      "index": "NAME",
      "name": "name of the chain/api",
      "enabled": true,
      "imports": [],
      "reliability_threshold": 268435455,
      "data_reliability_enabled": true,
      "block_distance_for_finalized_data": 0,
      "blocks_in_finalization_proof": 1,
      "average_block_time": 0,
      "allowed_block_lag_for_qos_sync": 1,
      "min_stake_provider": {
        "denom": "ulava",
        "amount": "5000000000"
      },
      "min_stake_client":  {
        "denom": "ulava",
        "amount": "5000000000"
      },
      "api_collections": [
        {
          "enabled": true,
          "collection_data": {
            "api_interface": "",
            "internal_path": "",
            "type": "",
            "add_on": ""
          },
          "apis": [
            {
              "name": "",
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
          ],
          "headers": [],
          "inheritance_apis": [],
          "parse_directives": [],
          "verifications": [
            {
              "name": "",
              "values": [
                {
                "expected_value": ""
                }
              ]
            }
          ],
          "extensions": [
            {
              "name": "",
              "cu_multiplier": "",
              "rule": ""
            }
          ]
        }
      ]
    }
  },
  "deposit": "0denom"
}

```
</details>


## 📖 章节参考

每个部分都详细介绍了特定字段，并附有说明和示例。

### 提案 (`proposal`) 📜 {#proposal}


| 字段            | 说明                    | 示例                                                               |
|---------------|-------------------------|--------------------------------------------------------------------|
| `title`       | 提案的标题                | `Add Specs: Solana`                                                |
| `description` | 简短的描述提案的目的        | `Adding new specification support for relaying Solana data on Lava`|


### Specifications (`specs`) 📘 {#specs}

| 字段                                  | 说明                                              | 示例                                            |
|-------------------------------------|---------------------------------------------------|-----------------------------------------------|
| `index`                             | spec的唯一标识符。                                   | `JUN1`                                        |
| `name`                              | spec的可读名称。                                     | `juno mainnet`                                |
| `enabled`                           | 提示该spec是否处于活动状态。                            | `true`                                        |
| `imports`                           | 其他 spec索引的数组。允许一个 spec从另一个 spec继承设置。  | `["COSMOSSDKFULL"]`                           |
| `reliability_threshold`             | 数据可靠性的系统参数。                                 | `268435455`                                   |
| `data_reliability_enabled`          | 表示是否启用数据可靠性的标志。                           | `true`                                        |
| `block_distance_for_finalized_data` | 被认为不受链重组影响的区块数量。                          | `0`                                           |
| `blocks_in_finalization_proof`      | 最终证明的块数。                                       | `1`                                           |
| `average_block_time`                | 生成一个数据块所花费的平均时间(单位为ms)。                 | `6500`                                        |
| `allowed_block_lag_for_qos_sync`    | 服务质量同步可能滞后的块数。                             | `2`                                           |
| `min_stake_provider`                | 提供商提供服务所需的最少质押。                            | `{"denom": "ulava", "amount": "50000000000"}` |
| `min_stake_client`                  | *(已弃用)*客户端访问服务所需支付的最小金额。                | `{"denom": "ulava", "amount": "5000000000"}`  |

### API 集合 (`api_collections`) 🗂️ {#api_collections}

| 字段                 | 说明                                         | 示例                                                                            |
|--------------------|----------------------------------------------|-------------------------------------------------------------------------------|
| `enabled`          | 表明API集合是否处于活动状态。                     | `true`                                                                        |
| `collection_data`  | 包含与集合相关的数据。                            | `{"api_interface": "rest", "internal_path": "", "type": "GET", "add_on": ""}` |
| `apis`             | 一个数组，包含集合中每个API的详细信息。              | Array of API objects                                                          |
| `headers`          | 要包含在API请求中的标头。                         | `[]`                                                                          |
| `inheritance_apis` | 从导入的specs继承的API数组。                      | `[]`                                                                          |
| `parse_directives` | 解析API响应的指令。                              | `[]`                                                                          |
| `verifications`    | 包含验证详细信息。                                | `{"name": "chain-id", "values": [ { "expected_value": "juno-1" } ]}`          |

#### API 集合数据 (`collection_data`) {#collection_data}

| 字段              | 说明                                   | 示例     |
|-----------------|----------------------------------------|---------|
| `api_interface` | API接口(e.g., `rest`, `grpc`).          | `rest`  |
| `internal_path` | API调用的内部路径。                        | ``      |
| `type`          | API请求的HTTP方法。                       | `GET`   |
| `add_on`        | 加载项集合的名称属于                        | `debug` |


### 服务API (`apis`) ⚙️ {#apis}

| 字段                    | 说明               | 示例                                                                             |
|-----------------------|------------------|---------------------------------------------------------------------------------|
| `name`                | API的名称。          | `juno.mint.Query/AnnualProvisions`                                              |
| `block_parsing`       | 描述如何从API请求解析块高度。 | `{"parser_arg": ["latest"], "parser_func": "DEFAULT"}`                          |
| `compute_units`       | API所需的计算单元数量。    | `10`                                                                            |
| `enabled`             | 表明API是否激活。       | `true`                                                                          |
| `category`            | 指定API的类别。        | `{"deterministic": true, "local": false, "subscription": false, "stateful": 0}` |
| `extra_compute_units` | 如果需要额外的计算单元。     | `0`                                                                             |



#### 区块解析(`block_parsing`) {#block_parsing}

关于如何从API请求中解析出区块高度的详细信息。

| 字段            | 说明                  | 示例           |
|---------------|-----------------------|--------------|
| `parser_arg`  | 解析器函数的参数。        | `["latest"]` |
| `parser_func` | 用于解析的函数。          | `DEFAULT`    |

#### 服务API类别(`category`) {#api_category}

| 字段              | 说明                                 | 示例      |
|-----------------|---------------------------------------|---------|
| `deterministic` | 表明API的结果是否确定。                  | `true`  |
| `local`         | 表明API调用是否是本地的。                | `false` |
| `subscription`  | 表明API是否支持订阅。                   | `false` |
| `stateful`      | 描述API的状态。值为`0`意味着它是无状态的。 | `0`     |

#### 验证(`verifications`) {#verifications}

用于验证数据的验证细节。

| 字段       | 说明              | 示例                                  |
|----------|-------------------|--------------------------------------|
| `name`   | 验证的名称。         | `chain-id`                           |
| `values` | 包含预期值的数组。    | `[ { "expected_value": "juno-1" } ]` |

#### 扩展 (`extensions`)

| 字段              | 说明                             | 示例           |
|-----------------|----------------------------------|--------------|
| `name`          | 扩展名。                           | `archive`    |
| `cu_multiplier` | 计算扩展的单位乘数。                  | `5`          |
| `rule`          | 与扩展相关的特定规则。(例如，区块编号)   | `block: 254` |

### 存款 (`deposit`) 💰 {#deposit}

表示用户为提案存入的金额。

| 字段        | 说明                           | 示例            |
|-----------|--------------------------------|-----------------|
| `deposit` | 在特定货币单位中存入的提案金额。     | `10000000ulava` |

<br/>
<hr/>

## 📖 术语表 


### 条款 📚

<details> <summary> 🗉 `average_block_time` </summary>

该值表示连续区块被添加到区块链之间的典型持续时间，以毫秒为单位。这对于质量服务（QoS）的考虑至关重要，确保及时高效地传输数据，而不会对网络或节点造成不必要的负担。

</details>

<details> <summary> 🗉 `allowed_block_lag_for_qos_sync` </summary>

该配置决定了提供商在其 QoS 分数开始下降之前可以落后最新数据块多少个数据块。它基本上量化了提供商可允许的最大 "out-of-sync"状态，超过这一状态，其性能将被视为不理想。

例如，如果网络的最新区块编号是 1000，而提供商的最新区块编号是 995，且 "allowed_block_lag_for_qos_sync "为 5，那么他们的 QoS 分数将开始受到负面影响。

</details>

<details> <summary> 🗉 `compares_hashes`  </summary>

设置为 "true "时，它将激活指定链的 Lava 网络数据可靠性功能。这包括不断比较和验证来自不同节点的区块哈希值，以保证数据的真实性，防止任何恶意或错误的数据传播。

</details>

<details> <summary> 🗉 `deposit` </summary>

在去中心化设置中，添加或更新参数等操作可能需要共识或批准。“存款”指定了“ulava”(lava网络的本地令牌)的数量，必须作为提案参数入场费存入。它类似于保证金或质押，确保只有严肃和真正的提案被提交，并可能防止垃圾邮件或恶意行为。

</details>

<details> <summary> 🗉 `finalization_criteria` </summary>

此参数解决了区块链终结性的问题。在区块链的背景下，特别是像以太坊这样的工作证明链，区块有时会因为网络分叉而“孤立”。“finalization_criteria”值表示从我们认为“已完成”或不可逆的当前块数返回的块数。
例如，“finalization_criteria”为7，如果最新的区块号为1000，则认为993及更早的区块已完成。通过这样做，系统可以防止从块中中继数据，这些数据可能会在以后被拒绝或孤立。

</details>

<details> <summary> 🗉 `reliability_threshold` </summary>

该阈值决定广播空闲数据可靠性消息的频率。从本质上讲，它决定了中继数据的弹性和可信度。该阈值以十六进制形式表示，用作掩码，用于确定可靠性消息的频率:

  - **0x0FFFFFFF**: 这意味着大约每16条消息中就有1条是数据可靠性消息。这种情况相对较少，优化的是效率而不是可靠性。

  - **0x8FFFFFFF**: 频率较高，大约每2条标准消息对应1条可靠性消息。这是一个平衡效率和可靠性的中间设置。

  - **0xFFFFFFFF**: 每条消息都是数据可靠性消息的最大设置。它优先考虑可靠性，确保始终保持数据完整性。

</details>

<details> <summary> 🗉 `saved_blocks` </summary>

它对应于先前确定的块的数量(由“finalization_criteria”确定)，提供者应该保留并附加到其响应中以增强可靠性。通过提供以前块的历史记录，它确保了数据的一致性，并允许不同提供者之间的数据交叉验证。

</details>


<br/>

### 解析 🧩

解析是与不同链交互时的一个关键方面，因为每个链以不同的格式返回数据。Lava 网络已经建立了解析协议来有效地处理这些变化。

<details><summary> 解析函数 </summary>

解析函数定义了如何处理返回的数据以提取必要的信息。

  - **EMPTY:**
    说明:返回的数据没有任何解析。

  - **PARSE_BY_ARG:**
    说明:假定返回的数据是一个数组。它接受一个索引作为参数，并返回返回数据中位于该索引处的元素。

  - **PARSE_CANONICAL:**
    说明:假设返回的数据是一个标准结构的JSON。它接收键值作为参数，并使用键在JSON结构中获取所需的元素。

  - **PARSE_DICTIONARY:**
    说明:假设返回的数据是一个具有键值结构(如KEY=VAL)的字符串。它接收键和分隔符作为参数，并返回键对应的值。

  - **PARSE_DICTIONARY_OR_ORDERED:**
    说明:它首先尝试PARSE_DICTIONARY方法，如果失败，则求助于PARSE_BY_ARG方法。

</details>

<details><summary> 解析字段 </summary>

##### `block_parsing`:

决定如何提取与请求相关的区块编号。这对特定于某些区块高度的查询至关重要。

##### `result_parsing`:

决定如何从响应中提取所需的数据。根据链返回的数据结构，选择适当的解析方法。

##### `function_tag`:

这对 Lava 网络的可靠性等功能至关重要，因为这些功能需要从链中获取某些数据，如最新的区块编号或区块哈希值。function_tag 标记一个端点适合获取特定类型的信息。例如 getBlockNumber 和 getBlockByNumber。

##### `function_template`:

对于已定义 function_tag 的端点，该模板可用作格式字符串。中继器可以用它来构建对外部链的查询。这可确保不同中继器之间的查询标准化。

</details>
<br/>