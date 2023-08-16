---
sidebar_position: 1
slug: /provider-setup
title: Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning

With the launch of `lava-testnet-2`, aspects of our provider setup have changed. TLS Certificates are now a required part of Provider setup.

:::

# Provider Setup

After you have read the [Provider intro](/provider), This guide is designed to help node runners and DevOps professionals configure a multi-chain network provider, which supports various blockchain networks and their respective API interfaces. We'll walk you through the necessary steps to create a configuration file that covers multiple chains and API interfaces, and provide a brief background on providers and the stake command.

## **Overview**

A multi-chain network provider allows you to manage and interact with multiple blockchain networks using a single entry point. By supporting various API interfaces, the provider can accommodate the specific needs and preferences of different blockchain networks.

In this guide, we'll create a configuration file that includes multiple chains (Ethereum Mainnet and Osmosis Mainnet) and their respective API interfaces (JSON-RPC, REST, gRPC, and Tendermint RPC). We'll also cover the stake command for providers, which allows you to stake a specific service.

## **Prerequisites**

1. Go 1.20.5 or higher
2. `lavad` installed (build or install at [https://github.com/lavanet/lava](https://github.com/lavanet/lava))
3. Account with enough LAVA for staking (learn about [creating Accounts](docs/lava-blockchain/account-wallet.mdx))
4. Know which chains you want to provide ([how to query the latest list](provider#chains))

## Step 1: Setup TLS
As part of good security practice, Lava protocol communicates with end-to-end encryption between providers and consumers of RPC. This requires some additional configuration steps on a provider, namely, the setup of TLS certification with a certification authority.

❗❗ If you already use a **TLS Certificate signed by a Certifiying Authority**, you can continue onto step 2. Otherwise, you may want to check out our guide on [setting up TLS for Lava Providers](/provider-tls).


## Step 2: Stake as Provider

Before you can run a multi-chain network provider, you need to stake a provider. You may have already taken this step and can move onto step 3. Otherwise, to stake a single service, use the following command:

```bash
lavad tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

#### Parameters Description

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**).
- **`amount`** - Stake amount for the specific chain (e.g., **`2010ulava`**).
- **`endpoint` (OPTIONAL)** - Provider host listener, composed of `provider-host:provider-port,interface,geolocation`. More than one can be specified. If you specify only one, it will be applied to all APIs.
- **`geolocation`** - Indicates the geographical location where the process is located (e.g., **`1`** for US or **`2`** for EU).

#### Flags Details

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--provider-moniker`** - Provider’s public name
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **`lava-testnet-2`**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**).

### Stake Examples

#### Lava Testnet in US

```bash
lavad tx pairing stake-provider LAV1 \
  "50000000000ulava" \
   "lava.your-site.com:443,1" 1 \
   --from my_account \
   --provider-moniker my-lava-provider \
    --gas-adjustment "1.5" \
    --gas "auto" \ 
    --gas-prices "0.0001ulava"
```

#### Ethereum Mainnet in US
Ethereum and other EVMs usually have only `jsonrpc` interface:

```bash
lavad tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host.com:1337,jsonrpc,1" 1 \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

#### Cosmos Hub Testnet in US
Cosmos's usually have `rest`, `tendermintrpc` & `grpc` interface, all mandatory:

```bash
lavad tx pairing stake-provider "COS5T" \
    "50000000000ulava" \
    "provider-host.com:1986,tendermintrpc,rest,grpc" 1 \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id "lava-testnet-2" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node "https://public-rpc-testnet2.lavanet.xyz:443/rpc/"
```

## Step 3: Verify stake

To ensure that your account is successfully staked with the providers for a specific network, execute the following command. Make sure to check if your account's public address is present in the list generated by the command output:

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavad query pairing account-info \
--from wallet_name \
--node "{LAVA_RPC_NODE}"
```

</TabItem>
<TabItem value="addr" label="Address">

```bash
lavad query pairing account-info \
{provider_address} \
--node "{LAVA_RPC_NODE}"

# Example: seeing all relevant information for an account
# lavad query pairing account-info \
# lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v \
# --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# Expected output:
# --------------------------------------------
# Active Provider Chains
# --------------------------------------------
# ChainID: ALFAJORES
#  {Stake:1000000000000ulava Address:lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v StakeAppliedBlock:164042 Endpoints:[{IPPORT:providers-eu-1.lavanet-zarak.xyz:19907 UseType:jsonrpc Geolocation:2}] Geolocation:2 # Chain:ALFAJORES Vrfpk: Moniker:testnet-lava-2-provider1-ALFAJORES}
#...
```

</TabItem>
</Tabs>

#### Parameter Descriptions (with examples):

- **`provider_address`** - The public address of the provider beginning with the lava@ prefix. Examples: **`lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v`**
- **`LAVA_RPC_NODE`** - An RPC node for Lava. This can be omitted if the current node has already joined the Lava network. Example: **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**


Another useful command to check all providers for a specific chain:
```bash
lavad query pairing providers \
"{NETWORK_NAME}" \
--node "{LAVA_RPC_NODE}"

# Example: checking if your account is a paired provider for the ETH1 network,
# lavad query pairing providers \
# ETH1 \
# --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# Expected output:
# List of all providers, and your provider should be on of them
```

#### Parameter Descriptions (with examples):

- **`NETWORK_NAME`** - The ID of the chain. Examples: **`COS4`** or **`FTM250`**
- **`LAVA_RPC_NODE`** - An RPC node for Lava. This can be omitted if the current node has already joined the Lava network. Example: **`https://public-rpc-testnet2.lavanet.xyz:443/rpc/`**

## Step 4: Run RPCProvider process

**`rpcprovider`** is a command line tool for setting up an RPC server that listens for requests from Lava protocol RPC consumers, forwards them to a configured node, and responds with the reply. The configuration can be provided via a YAML configuration file or as command line arguments.

**`rpcprovider`** is part of `lavad` and can run using the following syntax:

```bash
lavad rpcprovider [config-file] || { {listen-host:listen-port spec-chain-id api-interface node-url} ... }
```

### Configuration
:::info 
For advanced configuration such as **authentication**, header **forwarding**, configurable **node-timeout**, see [Provider Features](/provider-features)
:::

You can either provide a single configuration file (YAML) or specify one or more endpoint configurations as command line arguments.

The default configuration file is named **`rpcprovider.yml`**. If a single argument is provided, it is assumed to be the name of the configuration file (without the extension).

If no arguments are provided, the default configuration file is used. All configuration files should be located in the default node home directory (e.g., **`app.DefaultNodeHome/config`**) or the local running directory.

### Command Flags

**`rpcprovider`** accepts the following flags:

- **`--geolocation`** (required): Geolocation to run from (e.g., **`1`**)
- **`--from`** (required): Account name to use (e.g., **`alice`**)
- **`--chain-id`**: Lava Network chain ID (e.g.: **`lava-testnet-2`**)
- **`--pprof-address`**: pprof server address, used for code profiling (default: **`""`**)
- **`--cache`**: Address for a cache server to improve performance (default: **`""`**)
- **`--parallel-connections`**: Number of parallel connections (default: **`chainproxy.NumberOfParallelConnections`**)

### Configuration Examples

Here are some example usages of **`rpcprovider`**:

```bash
# Using a custom configuration file and flags
lavad rpcprovider path_to_my_config_file --geolocation 1 --from alice

# Providing endpoint configurations as command line arguments
lavad rpcprovider provider-host.com:1986 ETH1 jsonrpc https://localhost/eth/my_node_1 --geolocation 1 --from alice
```

### Example: Multiple API Interfaces with Same Listen Address (ETH1 and COS3)

In this example, the provider supports all the API interfaces for the Ethereum Mainnet (ETH1) and Osmosis Mainnet (COS3) networks. The listen address for all ETH1 interfaces and all COS3 interfaces is the same.

```yaml
endpoints:
  - api-interface: jsonrpc
    chain-id: ETH1
    network-address: 127.0.0.1:2221
    node-urls:
      - url: wss://eth-rpc/ws
  - api-interface: tendermintrpc
    chain-id: COS3
    network-address: 127.0.0.1:2221
    node-urls:
      - url: ws://127.0.0.1:26657/websocket
      - url: http://127.0.0.1:26657
  - api-interface: grpc
    chain-id: COS3
    network-address: 127.0.0.1:2221
    node-urls: 
      - url: 127.0.0.1:9090
  - api-interface: rest
    chain-id: COS3
    network-address: 127.0.0.1:2221
    node-urls: 
      - url: http://127.0.0.1:1317
```

:::tip
If you're using `nginx` or another proxy as is recommended in our [TLS setup guide](/provider-tls), you will need to add `disable-tls: true` to each endpoint specified. This allows `nginx` to handle TLS directly. 
:::


## Step 5: Check Provider liveliness
To ensure the provider is up and running correctly `lavad` provides a command to setup the necessary clients and verify all parameters are well defined.
This command is used to test the entire flow for a provider is working including stake and access, but with some additional arguments can be used prior to staking, as long as the rpcprovider process is up and running.

### Usage

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavad test rpcprovider --from {WALLET}

# Example: checking if your provider, is staked correctly and listening on all staked services
# lavad test rpcprovider --from provider1_us --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/

# Expected output:
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# ALFAJORES jsonrpc,APT1 rest,AXELAR rest,AXELAR grpc,AXELAR tendermintrpc,BASET jsonrpc,BSC jsonrpc,CANTO grpc,CELO jsonrpc,COS3 rest,COS3 tendermintrpc,COS5 rest,COS5 tendermintrpc,ETH1 jsonrpc,EVMOS rest,EVMOS

# Tests Failed:
# ARB1 jsonrpc,ARBN jsonrpc,AVAX jsonrpc,CANTO jsonrpc,CANTO tendermintrpc,CANTO rest,COS3 grpc,COS4 rest,COS4 grpc,COS4 tendermintrpc,COS5 grpc,JUN1 grpc,POLYGON1 jsonrpc,SOLANA jsonrpc

```

</TabItem>
<TabItem value="endpoint" label="Endpoint">

```bash
lavad test rpcprovider --from {WALLET} --endpoints "{ENDPOINTS}"`

# Example: checking your provider that is not staked yet, or when you want to add a new chain support
# lavad test rpcprovider --from provider1_us --endpoints "provider-public-grpc:port,jsonrpc,ETH1 provider-public-grpc:port,rest,LAV1" --node https://public-rpc-testnet2.lavanet.xyz:443/rpc/ 

# Expected output:
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# LAV1-rest; ETH1-jsonrpc

# Tests Failed:
#
```

</TabItem>
<TabItem value="addr" label="Address">

```bash
lavad test rpcprovider {PROVIDER_ADDRESS}
```

</TabItem>
</Tabs>

## Step 6: Provider Info and more features

You can track your Provider rewards and transactions via [https://info.lavanet.xyz/providers](https://info.lavanet.xyz/providers) 

And review the Providers Features page for more capabilities. 

## FAQ

#### `lavad` not found

Make sure you downloaded/built the binary, and it is located in the path you use to run `lavad` commands, or you have it under /usr/local/bin or under PATH

#### Received error `account sequence mismatch`

Try to wait for a block_time (current=30s) and then run the command again

#### How do I unstake? {#unstake}

Run the following command:

```
lavad tx pairing unstake-provider "{NETWORK_NAME}" \\
--from "{ACCOUNT_NAME}" \\
--keyring-backend "{KEYRING_BACKEND}" \\
--chain-id "{CHAIN_ID}" \\
--node "{LAVA_RPC_NODE}"

# For example, unstake a provider for the ETH1 network,
# lavad tx pairing unstake-provider ETH1 \\
# --from my_account_name \\
# --keyring-backend "test" \\
# --chain-id "lava-testnet-2" \\
# --node <https://public-rpc-testnet2.lavanet.xyz:443/rpc/>

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT

```

#### Received error `dial tcp 127.0.0.1:26657: connect: connection refused`

In case you got the following error:

```
Error: post failed: Post "<http://localhost:26657>": dial tcp 127.0.0.1:26657: connect: connection refused

```

It is likely that your node is not running, or has not joined the network, you can either join the network,
or run the command with the `--node` flag to use an external Lava RPC node

#### Received error `sentry init failure to initialize error="provider stake verification mismatch`

In case you got the following error:

```
ERR sentry init failure to initialize error="provider stake verification mismatch -- &map[ChainID:NETWORK_NAME spec name:NETWORK_FULL_NAME]" ChainID=CHAIN_ID apiInterface=PROTOCOL

```

It is likely that the stake-provider command was not taken into effect yet, if running the `lavad server` option, please wait a few minutes and try running the command again.
