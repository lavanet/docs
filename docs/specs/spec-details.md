---
slug: /spec-details
title: Reference
---

# Spec Reference Guide

## Proposal (`proposal`)


| Field         | Description                                                   | Example                                                  |
|---------------|---------------------------------------------------------------|----------------------------------------------------------|
| `title`       | Title of the proposal.                                        | `Add Specs: Solana`                                      |
| `description` | Brief description about the purpose of the proposal.          | `Adding new specification support for relaying Solana data on Lava` |


## General (`specs`)

| Field | Description | Example |
|-------|-------------|---------|
| `index` | A unique identifier for the spec. | `JUN1` |
| `name` | A human-readable name for the spec. | `juno mainnet` |
| `enabled` | Indicates if the spec is active. | `true` |
| `imports` | An array of other spec indices. Allows one spec to inherit settings from another. | `["COSMOSSDKFULL"]` |
| `reliability_threshold` | A system parameter for data reliability. | `268435455` |
| `data_reliability_enabled` | Flag indicating if data reliability is enabled. | `true` |
| `block_distance_for_finalized_data` | The number of blocks considered safe from chain reorganizations. | `0` |
| `blocks_in_finalization_proof` | Number of blocks in the finality proof. | `1` |
| `average_block_time` | The average time (in ms) taken for a block to be produced. | `6500` |
| `allowed_block_lag_for_qos_sync` | Number of blocks a quality of service sync can lag by. | `2` |
| `min_stake_provider` | Minimum amount a provider needs to stake to offer services. | `{"denom": "ulava", "amount": "50000000000"}` |
| `min_stake_client` | Minimum amount a client needs to stake to access services. | `{"denom": "ulava", "amount": "5000000000"}` |

### API Collections (`api_collections`)

| Field | Description | Example |
|-------|-------------|---------|
| `enabled` | Indicates if the API collection is active. | `true` |
| `collection_data` | Contains data related to the collection. | `{"api_interface": "rest", "internal_path": "", "type": "GET", "add_on": ""}` |
| `apis` | An array containing details of each API in the collection. | Array of API objects |
| `headers` | Headers to be included in the API requests. | `[]` |
| `inheritance_apis` | An array of APIs inherited from imported specs. | `[]` |
| `parse_directives` | Directives to parse the API responses. | `[]` |
| `verifications` | Contains verification details. | `{"name": "chain-id", "values": [ { "expected_value": "juno-1" } ]}` |

#### API Collection Data (`collection_data`)

Contains data related to the API collection.

| Field | Description | Example |
|-------|-------------|---------|
| `api_interface` | Interface of the API (e.g., `rest`, `grpc`). | `rest` |
| `internal_path` | Internal path for the API call. | `` |
| `type` | HTTP method for the API request. | `GET` |
| `add_on` | Additional data or configurations. | `` |


## Service APIs (`apis`)

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Name of the API. | `juno.mint.Query/AnnualProvisions` |
| `block_parsing` | Describes how block heights are derived from API requests. | `{"parser_arg": ["latest"], "parser_func": "DEFAULT"}` |
| `compute_units` | Number of compute units required for the API. | `10` |
| `enabled` | Indicates if the API is active. | `true` |
| `category` | Specifies the category of the API. | `{"deterministic": true, "local": false, "subscription": false, "stateful": 0}` |
| `extra_compute_units` | Additional compute units if required. | `0` |



### Block Parsing(`block_parsing`)

Details on how block heights are derived from API requests.

| Field | Description | Example |
|-------|-------------|---------|
| `parser_arg` | Arguments for the parser function. | `["latest"]` |
| `parser_func` | The function used for parsing. | `DEFAULT` |

### Service API Categories(`category`)

| Field | Description | Example |
|-------|-------------|---------|
| `deterministic` | Indicates if the API's outcome is deterministic. | `true` |
| `local` | Specifies if the API call is local. | `false` |
| `subscription` | Indicates if the API supports subscription. | `false` |
| `stateful` | Describes the statefulness of the API. A value of `0` means it's stateless. | `0` |


## Verification(`verifications`)

Verification details used to validate the data.

| Field   | Description                        | Example          |
|---------|------------------------------------|------------------|
| `name` | Name of the verification. | `chain-id` |
| `values` | Array containing expected values. | `[ { "expected_value": "juno-1" } ]` |


## Deposit (`deposit`)

Represents the amount deposited by the user for the proposal.

| Field   | Description                        | Example          |
|---------|------------------------------------|------------------|
| `deposit` | Amount deposited for the proposal in a particular denomination. | `10000000ulava` |


## Extensions

| Field           | Description                                | Example   |
|-----------------|--------------------------------------------|-----------|
| `name`          | Name of the extension.                     | `archive` |
| `cu_multiplier` | Compute units multiplier for the extension.| `5`       |
| `rule`          | Specific rules associated with the extension. (e.g., block number)| `block: 254`|


## Notes

### Reliability Threshold

`reliability_threshold`

This threshhold determines the frequency at which free data reliability messages are broadcasted. At its essence, it dictates how resilient and trustworthy the data relayed is. The threshold is represented in hexadecimal format and functions as a mask to determine the frequency of reliability messages:

    0x0FFFFFFF: This implies that roughly 1 out of every 16 messages is a data reliability message. It's relatively infrequent, optimizing for efficiency over reliability.

    0x8FFFFFFF: Indicates a higher frequency – about 1 reliability message for every 2 standard messages. This is a middle-ground setting, balancing both efficiency and reliability.

    0xFFFFFFFF: The maximum setting where every message is a data reliability message. It prioritizes reliability above all, ensuring that data integrity is maintained at all times.

### Compare Hashes (`compares_hashes`)

When set to true, it activates the data reliability features of the Lava network for the specified chain. This involves constantly comparing and validating block hashes from different nodes to guarantee data authenticity and prevent any malicious or erroneous data propagation.


### Finalization Criteria ("finalization_criteria")

This parameter addresses the issue of blockchain finality. In the context of blockchains, particularly Proof-of-Work chains like Ethereum, blocks can sometimes be "orphaned" due to network forks. The "finalization_criteria" value represents the number of blocks back from the current block number that we deem "finalized" or irreversible.

For instance, with a "finalization_criteria" of 7, if the latest block number is 1000, blocks 993 and earlier are considered finalized. By doing so, the system safeguards against relaying data from blocks that might later get rejected or orphaned.

### Saved Blocks ("saved_blocks")

It corresponds to the number of previously finalized blocks (as determined by "finalization_criteria") that providers should retain and attach to their responses for enhanced reliability. By providing a history of previous blocks, it ensures data consistency and allows for cross-validation of data among different providers.

### Average Block Time ("average_block_time")

This value represents the typical duration, in milliseconds, between consecutive blocks being added to the blockchain. It's essential for quality of service (QoS) considerations, ensuring timely and efficient data relay without causing undue strain on the network or the nodes.

### Allowed Block Lag for QoS Sync ("allowed_block_lag_for_qos_sync")

This configuration determines how many blocks behind the latest block a provider can be before their QoS score begins to degrade. It essentially quantifies the maximum allowable "out-of-sync" state for a provider, beyond which their performance is deemed suboptimal.

For instance, if the network's latest block number is 1000 and a provider's latest block number is 995 with an "allowed_block_lag_for_qos_sync" of 5, their QoS score will start to be negatively impacted.

### Deposit ("deposit")

In a decentralized setup, actions like adding or updating specs may need consensus or approval. The "deposit" specifies the amount of "lava" (presumably the native token of the Lava network) that must be deposited as a proposal spec admission fee. It's akin to a security deposit or stake, ensuring that only serious and genuine proposals are submitted, and potentially safeguarding against spam or malicious actions.


### Parsing

Parsing is a critical aspect when interacting with diverse chains, as each chain returns data in a different format. The Lava Network has established parsing protocols to handle these variations effectively.
Parsing Functions:

The parsing functions define how the returned data is processed to extract the necessary information.

    EMPTY:
        Description: The data is returned as it is without any parsing.

    PARSE_BY_ARG:
        Description: Assumes the returned data is an array. It takes an index as an argument and returns the element at that index in the returned data.

    PARSE_CANONICAL:
        Description: Assumes the returned data is a canonically structured JSON. It receives key values as an argument and progresses through the JSON structure using the keys to fetch the desired element.

    PARSE_DICTIONARY:
        Description: Assumes the returned data is a string with a key-value structure (such as KEY=VAL). It receives a key and separator as arguments and returns the value corresponding to the key.

    PARSE_DICTIONARY_OR_ORDERED:
        Description: It first tries the PARSE_DICTIONARY method, and if that fails, then it resorts to the PARSE_BY_ARG method.

Block Parsing:

Determines how to extract the block number associated with a request. This is essential for queries that are specific to certain block heights.
Result Parsing:

Determines how to extract the desired data from the response. Depending on the structure of the data returned by the chain, the appropriate parsing method is chosen.
Function Tag:

This is crucial for the Lava network's features, such as reliability, which require fetching certain data from the chain, like the latest block number or block hashes. The function_tag marks an endpoint as being suitable to fetch specific types of information. Some examples include getBlockNumber and getBlockByNumber.
Function Template:

For endpoints with a defined function_tag, this template serves as a format string. It can be used by relayers to construct a query to an external chain. This ensures standardized queries across different relayers.
## Structure
Here is a sample out of `cookbook/spec_add_ethereum.json`:

```json
{
  "title": "Add Specs: Ethereum", 
  "description": "Adding new specification support for relaying Ethereum data on Lava",
  "specs": [
    {
      "chainid": "ETH1",
      "name": "Ethereum Mainnet",
      "enabled": true,
      "reliability_threshold": 268435455,
      "compares_hashes": true,
      "finalization_criteria": 7,
      "saved_blocks": 3,
      "average_block_time": "13000",
      "allowed_block_lag_for_qos_sync": "5",
      "apis": [
       ...
      ],
      "deposit": "10000000ulava"
}
```




`"title"` and `"description"` are self explanatory and below them `"specs"` define the chains that will be added.

`"chainid"`:  a unique id for this chain. immutable. this will be used in transacton and query references

`"name"`: full name of the chain, can be changed to best describe the specification with changes of the target

`"enabled"`: enable\disable this chain

`"reliability_threshold"`: when adding a new spec, you can set this to a default value of 268435455(0x0FFFFFFF). This determins how often free data reliability messages are sent, the higher it is the more messages are sent. the default value above means 1/16 - 1 out of 16 mesages is a data rel message. 

```
0x0FFFFFFF - means 1 data rel message for every ~16 messages 
0x8FFFFFFF - means 1 data rel message for every ~2 messages
0xFFFFFFFF - means 1 data rel message for every message.
```
`"compares_hashes"`: this enables\disables the data reliability features of the lava network for this chain. 

`"finalization_criteria"`: the number of blocks back from the current block number that we can consider as "finalized". any block with a lower number than `currentBlockNumber - finalization_criteria` will be considered finalized
In the example above we consider any block in the ETH chain that is 7 blocks back from the current block to be finalized and that it wont be rejected in the future. i.e. if the current block number is 1000 then blocks 993 and below can be considered finalized blocks.
The hashes of final blocks will be used as a basis of comparison between provider responses in data reliability features. 

`"saved_blocks"`: The number of saved finalized blocks (according to `finalization_criteria`)  that providers add to their response to clients. if the current block number is 1000 and `finalization_criteria` is 7 and `saved_blocks` is 3 then a provider will hold blocks 991-993 for reliability purposes.

`"average_block_time"`: The average time in miliseconds it takes for a new block to be added to the chain. Used for QoS.

`"allowed_block_lag_for_qos_sync"`: how many blocks behind the latest block a provider is allowed to be before the providers QoS score starts to be affected; basically how out of sync a provider is allowed to be.

`"deposit"`: How much lava to deposit to have a proposal spec admitted (see cosmos gov module proposal for more details ).


## `"apis"`:

An array of endpoints in a chain node that can be queried.
here is a single api endpoint in an etherium node that fetches the number of the most recent block:

```json
{
  ...
  "specs": [
    {
      "chainid": "ETH1",
      "name": "Ethereum Mainnet",
      ...
      "apis": [
       {
          "name": "eth_blockNumber",
          "category": {
            "deterministic": true,
            "local": false,
            "subscription": false,
            "stateful": 0
          },
          "block_parsing": {
            "parserArg": [
              ""
            ],
            "parserFunc": "EMPTY"
          },
          "compute_units": "10",
          "enabled": true,
          "apiInterfaces": [
            {
              "interface": "jsonrpc",
              "type": "get",
              "extra_compute_units": "0"
            }
          ],
          "parsing": {
            "function_template": "{\"jsonrpc\":\"2.0\",\"method\":\"eth_blockNumber\",\"params\":[],\"id\":1}",
            "function_tag": "getBlockNumber",
            "result_parsing": {
              "parserArg": [
                "0"
              ],
              "parserFunc": "PARSE_BY_ARG"
            }
          }
        },
      ],
}
```



`"name"`: name of this method or a url path if its a rest endpoint, must strictly match the api to be used against the node

`"category"`: defines some categorical params about this endpoint

 - `"deterministic"`:  for a certain block height that is finalized, would this query always return the same result on different nodes 
 - `"local"`: does this query generate overhead at the node you talk to
 - `"subscription"`: does this api open a continuous stream of info from the provider to the consumer 
 - `"stateful"`: for apis that need to be sent to the same provider you will set the same stateful value and not zero

- `"compute_units"`: the cost CU for this api (initial values could be copied from the chain api docs)
- `"enabled"`: enable\disable this endpoint
- `"apiInterfaces"`: arr of interfaces for this enpoint
    - `"interface"`: type of interface: `["jsonrpc"|"tendermintrpc"|"rest"]`,
    - `"type"`: `["get"|"post"]`,
    - `"extra_compute_units"`: will be implemented in the future 0 is okat for now

## Parsing 
Since each chain returns data in a different format 
*_parsing sections typically have these params:
 - parserFunc: can be any of
    -  `EMPTY` - Return data as it is
    -  `PARSE_BY_ARG` - Assumes the returned data is an array, gets an index as argument and returns the element at that index in the returned data  
    -  `PARSE_CANONICAL` - Assumes the returned data is a canonically structured json, gets key values as an argument and canonically gets the element using the keys to progress down the structure and fetch the element
    -  `PARSE_DICTIONARY` - Assumes the returned data is a string with a key value structure (such as `KEY=VAL`), recieves a key and separator as argument and returns the value according to key.
    -  `PARSE_DICTIONARY_OR_ORDERED` - tries `PARSE_DICTIONARY` and if it fails then `PARSE_BY_ARG`
 - parserArg: the input for parserFunc
 

`"block_parsing"`: determins how to extract the blocknumber attached to the request

`"result_parsing"`: determins how to extract desired data from response

`"function_tag"`: Some lava features require such as reliability require receiving some data from the chain such as the latest blocknumber or hashes for blocks. function_tag marks this endpoint as one useful to get specific info `["getBlockNumber"|"getBlockByNumber"]`

`"function_template"`: for endpoints with `function_tag` defined, this is a printf format string that can be used by relayers to contruct a query to an external chain.

here is an example parsing section from Here is a sample for a rest endpoint out of `cookbook/spec_add_osmosis.json`:
```json
"parsing": {
    "function_tag": "getBlockByNumber", // signals to relayer that this endpoint can be used to query block info
    "function_template": "/blocks/%d", // printf("/blocks/%d", desired_block_num) should create a working rest query
    "result_parsing": { // expects a response with data in the format of  { "block_id": { "hash": <desired data> }}
        "parserArg": [
            "0", // sanity 
            "block_id", // first key
            "hash" // second key
        ],
        "parserFunc": "PARSE_CANONICAL"
    }
}
```
