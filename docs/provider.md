---
sidebar_position: 1
slug: provider
---
# Be a Provider

This page covers what is a provider and the steps for starting as one.

## Providers role in Lava's protocol

### Provider role in the network
Providers service relay requests by staking on the network and running RPC nodes on the Relay Chains queried by Consumers (e.g. Cosmos, Ethereum, Osmosis, Polygon, etc). They earn fees in the form of LAVA from the Consumers for servicing requests.

### Provider concepts (stake, geolocation, chain id, endpoints)
Providers permissionlessly join and participate in the Lava Network. After ensuring your Relay Chain RPC Nodes are operational and meet required specifications, you will install and configure Lava’s lightweight Provider process as detailed below. Providers must stake LAVA via the `ProviderStaking(stake, geolocation, chainID, Endpoints[], apiInterfaces)` transaction, which defines the spec they support under this stake. There are four parameters used in the transaction:

1. **Stake**: Amount of LAVA to stake for the service
2. **Geolocation**: Location of the Providers Nodes
3. **ChainID**: Identifier of the target blockchain network such as Cosmos Mainnet, Ethereum Ropsten, etc
4. **Endpoints**: List of endpoints each defining an address geolocation and an API interface such as REST, JSON-RPC, etc

Provider stakes are per spec. If Cosmos and Ethereum are supported then two separate stakes are needed. Right after the request is verified and included in the chain state, they will be included in the Pairing List from the next Epoch and will begin servicing Consumer requests through their nodes.

#### Example (using friendly naming for brevity):
| Chain Spec            |      Geolocation      |  LAVA stake    |
| -------------         | :-----------:         | ----:             |
| Ethereum Mainnet      | USA West              | 1,600             |
| Ethereum Mainnet      | Germany               | 2,000             |
| Ethereum Rinkby       | Germany               | 100               |

:::info Want to learn more?
Learn more by reading our [litepaper](https://lavanet.xyz)
:::

## Available APIs
The Protocol scales support to new RPCs by adding Specifications ("specs") via governance. Each spec describes the schema needed for the RPC and aligns the different actors on the provided interface.

### How to query available APIs/Chains? {#chains}

Get them directly from a lava node using the CLI (If you don't have the CLI yet, you'll be able to install it in the next section).

If you are running a node and connected to the testnet:
```
lavad q spec list-spec
```
or if connecting to external node:
```
lavad q spec list-Spec --node http://public-rpc.lavanet.xyz:80/rpc/
```

For reference, here are the results as of November-2022:

| index     | name                   |
|-----------|------------------------|
| ALFAJORES | Celo Alfajores Testnet |
| APT1      | Aptos Mainnet          |
| ARB1      | Arbitrum mainnet       |
| ARBN      | Arbitrum Nova testnet  |
| CELO      | Celo Mainnet           |
| COS3      | osmosis mainnet        |
| COS4      | osmosis testnet        |
| COS5      | cosmos hub             |
| COS5T     | cosmos hub testnet     |
| ETH1      | Ethereum Mainnet       |
| FTM250    | Fantom Mainnet         |
| FTM4002   | Fantom Testnet         |
| GTH1      | Goerli Testnet         |
| JUN1      | juno mainnet           |
| JUNT1     | juno testnet           |
| LAV1      | lava mainnet           |
| POLYGON1  | Poligon Mainnet        |
| STRK      | StarkNet mainnet       |


## Running a provider - steps
Being a provider requires alignment to the Lava protocol, for that, Lava has implemented an implementation to help you run it. That implementation is built inside `lavad`. 

:::info
 Current installation of `lavad` is built only for Linux. Soon we'll allow building lavad from source.
:::

### 1. Download `lavad`
```bash
binary_url="https://github.com/K433QLtr6RA9ExEq/GHFkqmTzpdNLDd6T/blob/main/production/cosmovisor-upgrades/genesis/bin/lavad?raw=true"
wget $binary_url -O lavad
chmod +x lavad
```

### 2. Prepare an account & Fund it {#account}
Lava account and wallets are standard Cosmos. Learn more in [Account & Wallet section](wallet).

First, you need to add a wallet to your keyring ([FAQ: what is a keyring](faq#keyring)).

While you may use your seed phrase to import an existing wallet, we'll make a new one in this scenario.
replace `ACCOUNT_NAME` with a name of your choosing:

```bash
./lavad keys add \
"{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}"

# Example:
# ./lavad keys add \
# "my_account_name" \
# --keyring-backend "test"

# Expected output:
# Your new account details, along with the name, public account address and your mnemonic phrase
```

Param description (and examples):
- `ACCOUNT_NAME` - The account to be used for the provider staking. Example `my_account`
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](faq#keyring)). Example `test`


To ensure your wallet was saved to your keyring, look for the `{ACCOUNT_NAME}` is in your keys list:

```bash
./lavad keys list \
--keyring-backend "{KEYRING_BACKEND}"

# Example:
# ./lavad keys list \
# --keyring-backend "test"

# Expected output:
# Your new account details, along with the name, public account address and your mnemonic phrase
```

Param description (and examples):
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](faq#keyring)). Example `test`

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`

:::

#### Faucet

Get your account funded through the faucet, please allow up to a minute for the query to respond:
```bash
# Replace the address with your account address
curl -X POST \
-d '{"address": "lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw", "coins": ["60000000ulava"]}' http://lava-faucet.lavanet.xyz:5555

# Expected output:
# '{}'
```

#### Verify your account is funded

Verify that your account has funds in it in order to perform staking

```bash
# Verify your account has Lava tokens (replace the address with your account address)

./lavad query \
bank balances \
"{ACCOUNT_PUBLIC_ADDRESS}" \
--denom ulava \
--node "{LAVA_RPC_NODE}"

# Example: checking the balance of your account, using Lava public RPC node
# ./lavad query \
#     bank balances \
#     lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw \
#     --denom ulava \
#     --node http://public-rpc.lavanet.xyz:80/rpc/

# Expected output:
# amount: "XXX" # Amount should be > 1
# denom: ulava
```

Param description (and examples):
- `ACCOUNT_PUBLIC_ADDRESS` - The public address of your account. Example `lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw`
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `http://public-rpc.lavanet.xyz:80/rpc/`

### 3. Stake a provider
To stake a single service, use this command:

`lavad tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] [flags]`  
For example,  

```bash
./lavad tx pairing stake-provider "{NETWORK_NAME}" \
"{STAKE_AMOUNT}" \
"{SERVICED_NODE_IP}:{SERVICED_NODE_PORT},{PROTOCOL},1" 1 \
--from "{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}" \
--gas="auto" \
--gas-adjustment "1.5" \
--node "{LAVA_RPC_NODE}"

# Example: staking a provider for ETH1, using an external Lava RPC node,
# ./lavad tx pairing stake-provider "ETH1" \
#     2010ulava \
#     "$(curl -s ifconfig.me):19921,jsonrpc,1" 1 \
#     --from my_account_name \
#     --gas="auto" \
#     --gas-adjustment "1.5" \
#     --keyring-backend "test" \
#     --node http://public-rpc.lavanet.xyz:80/rpc/

# Expected output:
# code: 0
```

Param description (and examples):
- `NETWORK_NAME` - The ID of the chain, see [how to query the full list](#chains). Example `COS4` or `FTM250`
- `STAKE_AMOUNT` - The amount you are willing to stake for being a provider for the specific network. Example `2010ulava`
- `SERVICED_NODE_IP` - External IP of the node that will service the requests. Example `51.92.133.253` (to find your public IP, run `curl ifconfig.me`)  
- `SERVICED_NODE_PORT` - Port of the node that will service requests. Example `19921`
- `PROTOCOL` - The protocol to be used, see [how to query the full list](#chains). Example `jsonrpc`, or `rest`
- `ACCOUNT_NAME` - The account to be used for the provider staking. Example `my_account`
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](faq#keyring)). Example `test`
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `http://public-rpc.lavanet.xyz:80/rpc/`


Notes:
1. Expected output code: `0`
2. Please stake provider only once per block (Block currently stands at 30s)

### 6. Run the provider processes
Now once you have an account that is funded, and you account has provider staking for a network, you can run the provider processes per network.  
In order to specify the NODE_URL you will be fetching the chain data from, you can use the syntax below,  
Websocket - `ETH1_NODE_URL="ws://username:password@my-node.com/eth/ws/"`  
Websocket secured - `ETH1_NODE_URL="wss://username:password@my-node.com/eth/ws/"`  
HTTP - `COS3_REST_NODE_URL="https://my-node.com:12345/rest/"`  
HTTP with basic auth - `COS3_RPC_NODE_URL="http://username:password@my-node.com/"`  

:::info
 Please note that the previous `stake-provider` might take up to a few minutes to take effect.
:::

```bash
./lavad server "{LISTEN_IP}" "{LISTEN_PORT}" "{NODE_URL}" \
"{NETWORK_NAME}" "{PROTOCOL}" \
--from "{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}" \
--node "{LAVA_RPC_NODE}"

# Example: running an ETH1 jsonrpc provider with a remote Lava RPC node,
# ./lavad server 0.0.0.0 19921 "wss://username:password@my_remote_node/eth/ws/" \
# ETH1 jsonrpc \
# --from my_account_name \
# --keyring-backend "test" \
# --node http://public-rpc.lavanet.xyz:80/rpc/

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT
```

Param description (and examples):  
- `LISTEN_IP` - IP of the node that will listen for service requests. Example `0.0.0.0`  
- `LISTEN_PORT` - Port of the node that will service requests. Example `19921`  
- `NODE_URL` - The URL of an external (or internal) node that you will be fetching on-chain data from.  
- `NETWORK_NAME` - The ID of the chain, see [how to query the full list](#chains). Example `COS4` or `FTM250`  
- `PROTOCOL` - The protocol to be used, see [how to query the full list](#chains). Example `jsonrpc`, or `rest`  
- `ACCOUNT_NAME` - The account to be used for the provider staking.  
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](faq#keyring)). Example `test`
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `http://public-rpc.lavanet.xyz:80/rpc/`

### 7. Verify your account is in the pairing providers list
To verify if your account is paired with the pairing providers for a specific network,
Run the command below, and check to see if your account public address is in the command output list

```bash
./lavad query pairing providers \
"{NETWORK_NAME}" \
--node "{LAVA_RPC_NODE}"

# Example: checking if your account is a paired provider for the ETH1 network,
# ./lavad query pairing providers \
# ETH1 \
# --node http://public-rpc.lavanet.xyz:80/rpc/

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT
```

Param description (and examples):  
- `NETWORK_NAME` - The ID of the chain, see [how to query the full list](#chains). Example `COS4` or `FTM250`  
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `http://public-rpc.lavanet.xyz:80/rpc/`


## FAQ

### `lavad` not found  
Make sure you downloaded the binary, and it is located in the path you use to run `lavad` commands

### Received error `account sequence mismatch`
Try to wait for a block_time (current=30s) and then run the command again

### How do I unstake? {#unstake}
Run the following command:  

```bash
./lavad tx pairing unstake-provider "{NETWORK_NAME}" \
--from "{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}" \
--node "{LAVA_RPC_NODE}"

# For example, unstake a provider for the ETH1 network,
# ./lavad tx pairing unstake-provider ETH1 \
# --from my_account_name \
# --keyring-backend "test" \
# --node http://public-rpc.lavanet.xyz:80/rpc/

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT
```

### Received error `dial tcp 127.0.0.1:26657: connect: connection refused`
In case you got the following error:  
```
Error: post failed: Post "http://localhost:26657": dial tcp 127.0.0.1:26657: connect: connection refused
```
It is likely that your node is not running, or has not joined the network, you can either join the network,
or run the command with the `--node` flag to use an external Lava RPC node

### Received error `sentry init failure to initialize error="provider stake verification mismatch`
In case you got the following error:  
```
ERR sentry init failure to initialize error="provider stake verification mismatch -- &map[ChainID:NETWORK_NAME spec name:NETWORK_FULL_NAME]" ChainID=CHAIN_ID apiInterface=PROTOCOL
```
It is likely that the stake-provider command was not taken into effect yet, if running the `lavad server` option, please wait a few minutes and try running the command again.

### The provider process is running, but I would like to run in in background
In this case we recommend you consider the following options:  
1. Run the process as a background task, using the `&` sign at the end of the command, for example  
```bash
./lavad server 0.0.0.0 19921 "wss://username:password@my_remote_node/eth/ws/" \
ETH1 jsonrpc \
--from my_account_name \
--keyring-backend "{KEYRING_BACKEND}" \
--node http://public-rpc.lavanet.xyz:80/rpc/ &
```
2. Using `screen` or `tmux` to run the process in a detached session
