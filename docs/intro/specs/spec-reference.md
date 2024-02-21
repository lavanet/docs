---
slug: /spec-reference
title: 参考指南 📐
---

# Spec 参考指南

本指南详细参考了Lava网络中的各种规范。它包含了提案、specs、API集合、服务API和相关扩展的结构和定义。目标是确保开发人员、验证人员和其他涉众对配置和功能有一个清晰和一致的理解。

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

关于如何从API请求中推导出区块高度的详细信息。

| Field | Description | Example |
|-------|-------------|---------|
| `parser_arg` | Arguments for the parser function. | `["latest"]` |
| `parser_func` | The function used for parsing. | `DEFAULT` |

#### Service API Categories(`category`) {#api_category}

| Field | Description | Example |
|-------|-------------|---------|
| `deterministic` | Indicates if the API's outcome is deterministic. | `true` |
| `local` | Specifies if the API call is local. | `false` |
| `subscription` | Indicates if the API supports subscription. | `false` |
| `stateful` | Describes the statefulness of the API. A value of `0` means it's stateless. | `0` |

#### Verification(`verifications`) {#verifications}

Verification details used to validate the data.

| Field   | Description                        | Example          |
|---------|------------------------------------|------------------|
| `name` | Name of the verification. | `chain-id` |
| `values` | Array containing expected values. | `[ { "expected_value": "juno-1" } ]` |

#### Extensions (`extensions`)

| Field           | Description                                | Example   |
|-----------------|--------------------------------------------|-----------|
| `name`          | Name of the extension.                     | `archive` |
| `cu_multiplier` | Compute units multiplier for the extension.| `5`       |
| `rule`          | Specific rules associated with the extension. (e.g., block number)| `block: 254`|

### Deposit (`deposit`) 💰 {#deposit}

Represents the amount deposited by the user for the proposal.

| Field   | Description                        | Example          |
|---------|------------------------------------|------------------|
| `deposit` | Amount deposited for the proposal in a particular denomination. | `10000000ulava` |

<br/>
<hr/>

## 📖 Glossary 


### Terms 📚

<details> <summary> 🗉 `average_block_time` </summary>

This value represents the typical duration, in milliseconds, between consecutive blocks being added to the blockchain. It's essential for quality of service (QoS) considerations, ensuring timely and efficient data relay without causing undue strain on the network or the nodes.

</details>

<details> <summary> 🗉 `allowed_block_lag_for_qos_sync` </summary>

This configuration determines how many blocks behind the latest block a provider can be before their QoS score begins to degrade. It essentially quantifies the maximum allowable "out-of-sync" state for a provider, beyond which their performance is deemed suboptimal.

For instance, if the network's latest block number is 1000 and a provider's latest block number is 995 with an "allowed_block_lag_for_qos_sync" of 5, their QoS score will start to be negatively impacted.

</details>

<details> <summary> 🗉 `compares_hashes`  </summary>

When set to true, it activates the data reliability features of the Lava network for the specified chain. This involves constantly comparing and validating block hashes from different nodes to guarantee data authenticity and prevent any malicious or erroneous data propagation.

</details>

<details> <summary> 🗉 `deposit` </summary>

In a decentralized setup, actions like adding or updating specs may need consensus or approval. The "deposit" specifies the amount of "ulava" (the native token of the Lava network) that must be deposited as a proposal spec admission fee. It's akin to a security deposit or stake, ensuring that only serious and genuine proposals are submitted, and potentially safeguarding against spam or malicious actions.

</details>

<details> <summary> 🗉 `finalization_criteria` </summary>

This parameter addresses the issue of blockchain finality. In the context of blockchains, particularly Proof-of-Work chains like Ethereum, blocks can sometimes be "orphaned" due to network forks. The "finalization_criteria" value represents the number of blocks back from the current block number that we deem "finalized" or irreversible.

For instance, with a "finalization_criteria" of 7, if the latest block number is 1000, blocks 993 and earlier are considered finalized. By doing so, the system safeguards against relaying data from blocks that might later get rejected or orphaned.

</details>

<details> <summary> 🗉 `reliability_threshold` </summary>

This threshold determines the frequency at which free data reliability messages are broadcasted. At its essence, it dictates how resilient and trustworthy the data relayed is. The threshold is represented in hexadecimal format and functions as a mask to determine the frequency of reliability messages:

  - **0x0FFFFFFF**: This implies that roughly 1 out of every 16 messages is a data reliability message. It's relatively infrequent, optimizing for efficiency over reliability.

  - **0x8FFFFFFF**: Indicates a higher frequency – about 1 reliability message for every 2 standard messages. This is a middle-ground setting, balancing both efficiency and reliability.

  - **0xFFFFFFFF**: The maximum setting where every message is a data reliability message. It prioritizes reliability above all, ensuring that data integrity is maintained at all times.

</details>

<details> <summary> 🗉 `saved_blocks` </summary>

It corresponds to the number of previously finalized blocks (as determined by "finalization_criteria") that providers should retain and attach to their responses for enhanced reliability. By providing a history of previous blocks, it ensures data consistency and allows for cross-validation of data among different providers.

</details>


<br/>

### Parsing 🧩

Parsing is a critical aspect when interacting with diverse chains, as each chain returns data in a different format. The Lava Network has established parsing protocols to handle these variations effectively.

<details><summary> Parsing Functions </summary>

The parsing functions define how the returned data is processed to extract the necessary information.

  - **EMPTY:**
      Description: The data is returned as it is without any parsing.

  - **PARSE_BY_ARG:**
      Description: Assumes the returned data is an array. It takes an index as an argument and returns the element at that index in the returned data.

  - **PARSE_CANONICAL:**
      Description: Assumes the returned data is a canonically structured JSON. It receives key values as an argument and progresses through the JSON structure using the keys to fetch the desired element.

  - **PARSE_DICTIONARY:**
      Description: Assumes the returned data is a string with a key-value structure (such as KEY=VAL). It receives a key and separator as arguments and returns the value corresponding to the key.

  - **PARSE_DICTIONARY_OR_ORDERED:**
      Description: It first tries the PARSE_DICTIONARY method, and if that fails, then it resorts to the PARSE_BY_ARG method.

</details>

<details><summary> Parsing Fields </summary>

##### `block_parsing`:

Determines how to extract the block number associated with a request. This is essential for queries that are specific to certain block heights.

##### `result_parsing`:

Determines how to extract the desired data from the response. Depending on the structure of the data returned by the chain, the appropriate parsing method is chosen.

##### `function_tag`:

This is crucial for the Lava network's features, such as reliability, which require fetching certain data from the chain, like the latest block number or block hashes. The function_tag marks an endpoint as being suitable to fetch specific types of information. Some examples include getBlockNumber and getBlockByNumber.

##### `function_template`:

For endpoints with a defined function_tag, this template serves as a format string. It can be used by relayers to construct a query to an external chain. This ensures standardized queries across different relayers.

</details>
<br/>