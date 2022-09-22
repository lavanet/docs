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
lavad q spec list-spec --node https://public-rpc.lavanet.xyz/rpc:26657
```

For reference, here's the result as of Sep-2022:
```
Ethereum - ETH1, jsonrpc  
Osmosis Mainnet - COS3, tendermintrpc  
Osmosis Mainnet - COS3, rest  
Fantom - FTM250, jsonrpc  
Goerli - GTH1, jsonrpc  
Lava mainnet - LAV1, tendermintrpc  
Lava mainnet - LAV1, rest 
Osmosis testnet - COS4, tendermintrpc  
Osmosis testnet - COS4, rest  
Celo mainnet - CELO, jsonrpc  
```

## Running a provider - steps
Being a provider requires alignment to the Lava protocol, for that, Lava has implemented an implementation to help you run it. That implementation is built inside `lavad`. 

:::info
 Current installation of `lavad` is built only for Linux. Soon we'll allow building lavad from source.
:::

### 1. Download `lavad`
```bash
binary_url="https://github.com/K433QLtr6RA9ExEq/GHFkqmTzpdNLDd6T/blob/main/production/cosmovisor-upgrades/genesis/bin/lavad?raw=true"
wget $binary_url -O $HOME/lavad
```

### 2. Prepare an account & Fund it {#account}
Lava account and wallets are standard Cosmos. Learn more in [Account & Wallet section](wallet).

First, you need to add a wallet to your keyring ([FAQ: what is a keyring](faq#keyring)).

While you may use your seed phrase to import an existing wallet, we'll make a new one in this scenario.
replace $ACCOUNT_NAME with a name of your choosing:

```bash
lavad keys add $ACCOUNT_NAME
```

To ensure your wallet was saved to your keyring, look for the `KEY_NAME` is in your keys list:

```bash
lavad keys list
```

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`

:::

#### Faucet

Get your account funded through the faucet:
```bash
# Replace the address with your account address
curl -X POST \
-d '{"address": "lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw", "coins": ["60000000ulava"]}' http://44.205.140.46:5555
# Expected success output: '{}'
```

#### Verify account funded

Verify that your account has funds in it in order to perform staking

```bash
# Make sure you can see your account name in the keys list
lavad keys list

# Make sure you see your account has Lava tokens in it
YOUR_ADDRESS=$($lavad keys show -a $ACCOUNT_NAME)

lavad query \
    bank balances \
    $YOUR_ADDRESS \
    --denom ulava
```
### 3. Stake a provider
To stake a single service, use this command:

`lavad tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] [flags]`

Example:

```bash
lavad tx pairing stake-provider "$PROVIDER_NAME" \
    $STAKE_AMOUNT \
    "$SERVICED_NODE_IP:$SERVICED_NODE_PORT,$CHAIN_ID,1" 1 \
    -y \
    --from $ACCOUNT_NAME \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend \
    --node $RPC_NODE
```

Param description (and examples):
- `PROVIDER_NAME` - ...
- `STAKE_AMOUNT` - ...
- `SERVICED_NODE_IP` - IP of the node that will service the requests
- `SERVICED_NODE_PORT` - Port of the node that will service requests
- `CHAIN_ID` - The ID of the chain, see [how to query the full list](#chains). Example `COS4` or `FTM250`
- `ACCOUNT_NAME` - The address of the staking account
- `KEYRING_NAME` - The keyring to use
- `RPC_NODE` - If this `lavad` isn't synced with the network, you can use a remote node RPC address here


Notes:
1. Expected output code: `0`
2. Please stake provider only once per block (Block currently stands at 30s)

### 6. Run the provider processes

### 7. Verify the provider processes are running
verify_provider

## FAQ

### `lavad` not found  
Make sure you downloaded the binary, and it is located in the path you use to run `lavad` commands

### Received error `account sequence mismatch`
Try to wait for a block_time (current=30s) and then run the command again

### How do I unstake? {#unstake}
Run the following command:  
```
lavad tx pairing unstake-provider "$PROVIDER_NAME" \
    --from $ACCOUNT_NAME \
    --keyring-backend $keyring_backend \
    --node $RPC_NODE
```

Param description (and examples):
- `PROVIDER_NAME` - ...
- `ACCOUNT_NAME` - The unstaking account, example `lava@....`
- `RPC_NODE` - If this `lavad` isn't synced with the network, you can use a remote node RPC address here