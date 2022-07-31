# Adding a spec file for a chain
 
The spec file defines how lava recognizes and communicates with another chain.
It lists the some basic parameters for the external chain and then the many api endpoints that chain is capable of.
Before adding a spec have a look at a couple of notable specs in the lava project. you can find them in the `cookbook` folder: `cookbook/spec_add_ethereum.json` and `cookbook/spec_add_osmosis.json`

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

`"chainid"`:  a unique id for this chain.

`"name"`: full name of the chain

`"enabled"`: enable\disable this chain

`"reliability_threshold"`: you can set this to a default value of 268435455(0x0FFFFFFF). This determins how often free data reliability messages are sent, the higher it is the more messages are sent. the default value above means 1/16 - 1 out of 16 mesages is a data rel message. 

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

`"allowed_block_lag_for_qos_sync"`: how many blocks behind the latest block a relayer is allowed to be before the relayers QoS score starts to be affected; basically how out of sync a relayer is allowed to be.

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

`"name"`: name of this endpoint or a url path if its a rest endpoint

`"category"`: defines some categorical params about this endpoint

 - `"deterministic"`:  for a certain block height that is finalized, would this query always return the same result on different nodes 
 - `"local"`: does this query generate overhead at the node you talk to
 - `"subscription"`: does this api open a continuous stream of info from the provider to the consumer 
 - `"stateful"`: for apis that need to be sent to the same provider you will set the same stateful value and not zero

- `"compute_units"`: the CU for this api (should be copied from the chain api docs)
- `"enabled"`: enable\disable this endpoint
- `"apiInterfaces"`: arr of interfaces for this enpoint
    - `"interface"`: type of interface: `["jsonrpc"|"tendermint"|"rest"]`,
    - `"type"`: `["get"|"post"]`,
    - `"extra_compute_units"`: 

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
