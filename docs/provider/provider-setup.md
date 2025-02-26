---
sidebar_position: 1
slug: /provider-setup
title: Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Note: this guide needs to be simplified. Potentially, examples can be included into each chain's node setup page. This page could then focus on reference for starting the provider service, testing the endpoints, staking.


:::warning
Please make sure you are using the right [`chainId`](/key-variables#chain-id). TLS Certificates are now a required part of Provider setup. [Lavavisor](/lavavisor) is now the recommended route for running the provider process.
:::

# Provider Setup

After you have read the [Provider intro](/provider), This guide is designed to help node runners and DevOps professionals configure a multi-chain network provider, which supports various blockchain networks and their respective API interfaces. We'll walk you through the necessary steps to create a configuration file that covers multiple chains and API interfaces, and provide a brief background on providers and the stake command.

## **Overview**

A multi-chain network provider allows you to manage and interact with multiple blockchain networks using a single entry point. By supporting various API interfaces, the provider can accommodate the specific needs and preferences of different blockchain networks.

In this guide, we'll create a configuration file that includes multiple chains (Ethereum Mainnet and Osmosis Mainnet) and their respective API interfaces (JSON-RPC, REST, gRPC, and Tendermint RPC). We'll also cover the stake command for providers, which allows you to stake a specific service.

## **Prerequisites**

1. Go 1.20.5 or higher
2. `lavap` installed (build or install at [https://github.com/lavanet/lava](https://github.com/lavanet/lava))
3. Account with enough LAVA for staking (learn about [creating Accounts](docs/lava-blockchain/wallet.mdx))
4. Know which chains you want to provide ([how to query the latest list](https://docs.lavanet.xyz/provider/#chains))

## Step 1: Setup TLS

As part of good security practice, Lava protocol communicates with end-to-end encryption between providers and consumers of RPC. This requires some additional configuration steps on a provider, namely, the setup of TLS certification with a certification authority.

❗❗ If you already use a **TLS Certificate signed by a Certifiying Authority**, you can continue onto step 2. Otherwise, you may want to check out our guide on [setting up TLS for Lava Providers](/provider-tls).

## Step 2: Run RPCProvider process

**`rpcprovider`** is a command line tool for setting up an RPC server that listens for requests from Lava protocol RPC consumers, forwards them to a configured node, and responds with the reply. The configuration can be provided via a YAML configuration file or as command line arguments.

**`rpcprovider`** is part of `lavap` and can run using the following syntax:

```bash
lavap rpcprovider [config-file] || { {listen-host:listen-port spec-chain-id api-interface node-url} ... }
```

### Configuration

:::warning READ BEFORE CONTINUING
Configuration varies per chain. Some chains have steeper configuration requirements than others. If you're unsure, please visit the [chain page](/chains) of the specific endpoints you're attempting to setup and view our `Run an RPC Node` guide for that chain.
:::
:::info
For advanced configuration such as **authentication**, header **forwarding**, configurable **node-timeout**, see [Provider Features](/provider-features)
:::

You can either provide a single configuration file (YAML) or specify one or more endpoint configurations as command line arguments.

The default configuration file is named **`rpcprovider.yml`**. If a single argument is provided, it is assumed to be the name of the configuration file (without the extension).

If no arguments are provided, the default configuration file is used. All configuration files should be located in the default node home directory (e.g., **`app.DefaultNodeHome/config`**) or the local running directory.

### Command Flags

:::caution
Ensure that you replace `{CHAIN_ID}` with the appropriate value for your target network. See the [Chain ID](/key-variables#chain-id) section for details. Additionally, replace `{PUBLIC_RPC}` with the correct [endpoint](/public-rpc).
:::

**`rpcprovider`** accepts the following flags:

- **`--geolocation`** (required): Geolocation to run from (e.g., **`1`**)
- **`--from`** (required): Account name to use (e.g., **`alice`**)
- **`--chain-id`**: Lava Network chain ID (e.g.: **[CHAIN_ID](/key-variables#chain-id)**)
- **`--pprof-address`**: pprof server address, used for code profiling (default: **`""`**)
- **`--cache`**: Address for a cache server to improve performance (default: **`""`**)
- **`--parallel-connections`**: Number of parallel connections (default: **`chainproxy.NumberOfParallelConnections`**)
- **`--reward-server-storage`**:  The path to store reward server data (default **`".storage/rewardserver"`**)

### Configuration Examples

Here are some example usages of **`rpcprovider`**:

```bash
# Using a custom configuration file and flags
lavap rpcprovider path_to_my_config_file --geolocation 1 --from alice

# Providing endpoint configurations as command line arguments
lavap rpcprovider provider-host.com:1986 ETH1 jsonrpc https://localhost/eth/my_node_1 --geolocation 1 --from alice
```

### Example: Multiple API Interfaces with Same Listen Address (ETH1 and COS3)

In this example, the provider supports all the API interfaces for the Ethereum Mainnet (ETH1) and Osmosis Mainnet (COS3) networks. The listen address for all ETH1 interfaces and all COS3 interfaces is the same.

```yaml
endpoints:
  - api-interface: jsonrpc
    chain-id: ETH1
    network-address: 
      address: 0.0.0.0:2221
    node-urls:
      - url: wss://eth-rpc/ws
  - api-interface: tendermintrpc
    chain-id: COS3
    network-address: 
      address: 0.0.0.0:2221
    node-urls:
      - url: ws://127.0.0.1:26657/websocket
      - url: http://127.0.0.1:26657
  - api-interface: grpc
    chain-id: COS3
    network-address: 
      address: 0.0.0.0:2221
    node-urls: 
      - url: 127.0.0.1:9090
  - api-interface: rest
    chain-id: COS3
    network-address: 
      address: 0.0.0.0:2221
    node-urls: 
      - url: http://127.0.0.1:1317
```

:::tip
If you're using `nginx` or another proxy as is recommended in our [TLS setup guide](/provider-tls), you will need to add `disable-tls: true` to each endpoint specified. This allows `nginx` to handle TLS directly.
:::

### More Examples

The team constantly adds configurations, you can check examples on our [github](https://github.com/lavanet/lava/tree/main/config/provider_examples).

## Step 3: Check Provider liveliness - before staking

To ensure the provider is up and running correctly `lavap` provides a command to setup the necessary clients and verify all parameters are well defined.
This command is used to test the basic flow for a provider is working, including stake and access, but with some additional arguments can be used prior to staking, as long as the rpcprovider process is up and running.
since we haven't staked yet we need to provide the command with the endpoints we are using

### Usage

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavap test rpcprovider --from {WALLET} --endpoints "{ENDPOINTS}"

# Example: checking if your provider, is staked correctly and listening on all staked services
# lavap test rpcprovider --from provider1_us --node {PUBLIC_RPC}

# Expected output:
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# ALFAJORES jsonrpc,APT1 rest,AXELAR rest,AXELAR grpc,AXELAR tendermintrpc,BASET jsonrpc,BSC jsonrpc,CANTO grpc,CELO jsonrpc,COS3 rest,COS3 tendermintrpc,COS5 rest,COS5 tendermintrpc,ETH1 jsonrpc,EVMOS rest,EVMOS

# Tests Failed:
# ARB1 jsonrpc,ARBN jsonrpc,AVAX jsonrpc,CANTO jsonrpc,CANTO tendermintrpc,CANTO rest,COS3 grpc,COS4 rest,COS4 grpc,COS4 tendermintrpc,COS5 grpc,JUN1 grpc,POLYGON1 jsonrpc,SOLANA jsonrpc

```

</TabItem>
<TabItem value="endpoints" label="Endpoints">

```bash
lavap test rpcprovider --from {WALLET} --endpoints "{ENDPOINTS}"`

# Example: checking your provider that is not staked yet, or when you want to add a new chain support
# lavap test rpcprovider --from provider1_us --endpoints "provider-public-grpc:port,jsonrpc,ETH1 provider-public-grpc:port,rest,LAV1" --node {PUBLIC_RPC}

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
you can use the provider public address instead of the wallet name, it can also be fetched easily using lavad

```bash
lavad keys show -a {WALLET}
```

testing with the public address

```bash
lavap test rpcprovider {PROVIDER_ADDRESS} --endpoints "{ENDPOINTS}"
```

</TabItem>
</Tabs>

## Step 4: Stake as Provider

Before you can expose your multi-chain provider to rpc consumers, you need to stake a provider. You may have already taken this step and can move onto step 5. Otherwise, to stake a single service, use the following command:

```bash
lavap tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] {validator} [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

:::info
Note that this TX can also be used to increase the provider's stake. To increase, the amount should be the sum of the current amount and the desired addition. For example, a provider is staked with `100ulava` and wants to increase its stake by `10ulava`. Then, the appropriate `amount` argument for the `stake-provider` command should be `110ulava`.
:::

:::info
Use the optional `--provider` flag to define a different address that will be used to operate the provider. This will make the address of the `--from` flag to be the provider's vault address, which will hold the provider's funds and will be able to perform stake or funds related transactions (like unstake, modify-stake and more).
:::

#### Parameters Description

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**). To get the full list of available chains use: `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`amount`** - Stake amount for the specific chain (e.g., **`2010ulava`**).
- **`endpoint`** - Provider host listener, composed of `provider-host:provider-port,geolocation`. To define multiple endpoints do: `"host:port,geolocation host2:port2,geolocation2"`. To define advanced endpoint features like `trace`, `debug`, and more, ask the Lava team.
- **`geolocation`** - Indicates the geographical location where the process is located (e.g., **`1`** for US or **`2`** for EU). This argument must specify all the geolocations of the defined endpoints (see the "Ethereum Mainnet in US And Europe" below).
- **`validator`** - Validator address for staking (optional). Validator address is required when staking due to the dualstaking mechanism. If no validator is specified, the highest stake validator will be picked automatically. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`).

```javascript
    USC = 1; // US-Center
    EU = 2; // Europe
    USE = 4; // US-East
    USW = 8; // US-West
    AF = 16; // Africa
    AS = 32; // Asia
    AU = 64;  // (Australia, includes NZ)
    GL = 65535; // Global
```

#### Flags Details

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--provider-moniker`** - Provider’s public name
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **[CHAIN_ID](/key-variables#chain-id)**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **[PUBLIC_RPC](/public-rpc)**).
- **`--provider`** - The provider's operational address (address used to operate the provider process, default is vault address).
- **`--delegate-limit`** - a mandatory flag to set the delegation limit of a provider. delegations can still be made but won't affect pairing or rewards. a value of 0ulava means blocking all delegations, increasing it allows delegators stake to be taken into account getting more pairings. reducing the limit is protected, allowing a 1% change every 24h. it is good practice to set a high value as long as your node isn't congested by too many requests, and play around with the commission instead.
- **`--delegate-commission`** - the commission the provider will take from delegation rewards.
- **`--description-details`** - the (optional) details of the provider, using the same format as standard cosmos validator details

### Stake Examples

#### Lava Testnet in US (with specified validator)

```bash
lavap tx pairing stake-provider LAV1 \
  "50000000000ulava" \
   "lava.your-site.com:443,USC" USC \
   "validator_lava_address" \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

#### Ethereum Mainnet in US (without specified validator)

Ethereum and other EVMs usually have only `jsonrpc` interface:

```bash
lavap tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host.com:443,USC" USC \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

#### Ethereum Mainnet in US And Europe (multiple endpoints)

```bash
lavap tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host-us.com:443,USC provider-host-eu.com:443,EU" "EU,USC" \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

#### Ethereum Globally Load Balanced Array of Nodes

To be used if your endpoint is DNS load balanced for all covered geolocations.

```bash
lavap tx pairing stake-provider "ETH1" \
    "50000000000ulava" \
    "provider-host-gl.com:443,GL" "GL" \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

#### Cosmos Hub Testnet in US

Cosmos's usually have `rest`, `tendermintrpc` & `grpc` interface, all mandatory:

```bash
lavap tx pairing stake-provider "COS5T" \
    "50000000000ulava" \
    "provider-host.com:1986,1" 1 \
    --from "my_account_name" \
    --provider-moniker "your-moniker" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

## Step 5: Verify stake

To ensure that your account is successfully staked with the providers for a specific network, execute the following command. Make sure to check if your account's public address is present in the list generated by the command output:

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavap query pairing account-info \
--from wallet_name \
--node "{LAVA_RPC_NODE}"
```

</TabItem>
<TabItem value="addr" label="Address">

```bash
lavap query pairing account-info \
{provider_address} \
--node "{LAVA_RPC_NODE}"

# Example: seeing all relevant information for an account
# lavap query pairing account-info \
# lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v \
# --node {PUBLIC_RPC}

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

#### Parameter Descriptions (with examples)

- **`provider_address`** - The public address of the provider beginning with the lava@ prefix. Examples: **`lava@1e4vghfjertxq25l2vv56egkfkvdjk90t0c667v`**
- **`LAVA_RPC_NODE`** - An RPC node for Lava. This can be omitted if the current node has already joined the Lava network. Example: **[PUBLIC_RPC](/public-rpc)**

Another useful command to check all providers for a specific chain:

```bash
lavap query pairing providers \
"{NETWORK_NAME}" \
--node "{LAVA_RPC_NODE}"

# Example: checking if your account is a paired provider for the ETH1 network,
# lavap query pairing providers \
# ETH1 \
# --node {PUBLIC_RPC}

# Expected output:
# List of all providers, and your provider should be on of them
```

#### Parameter Descriptions (with examples)

- **`NETWORK_NAME`** - The ID of the chain. Examples: **`COS4`** or **`FTM250`**. To get the full list of available chains use: `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`LAVA_RPC_NODE`** - An RPC node for Lava. This can be omitted if the current node has already joined the Lava network. Example: **[PUBLIC_RPC](/public-rpc)**

:::info
Note, a new provider stake is only applied on the start of the next epoch. Currently, an epoch is defined as 30 blocks. With block time of 30sec, in the worst case scenario the stake will be applied after 15min.
:::

## Step 6: Check Provider liveliness - after staking

Now that your provider is staked you can repeat the command, but this time, without specifying the endpoints, as the CLI will use the blockchain to fetch them, this verifies the data exists correctly on the blockchain.

### Usage

<Tabs>

<TabItem value="wallet" label="Wallet">

```bash
lavap test rpcprovider --from {WALLET}

# Example: checking if your provider, is staked correctly and listening on all staked services
# lavap test rpcprovider --from provider1_us --node {PUBLIC_RPC}

# Expected output:
# ...logs...
# ----------------------------------------SUMMARY----------------------------------------

# Tests Passed:
# ALFAJORES jsonrpc,APT1 rest,AXELAR rest,AXELAR grpc,AXELAR tendermintrpc,BASET jsonrpc,BSC jsonrpc,CANTO grpc,CELO jsonrpc,COS3 rest,COS3 tendermintrpc,COS5 rest,COS5 tendermintrpc,ETH1 jsonrpc,EVMOS rest,EVMOS

# Tests Failed:
# ARB1 jsonrpc,ARBN jsonrpc,AVAX jsonrpc,CANTO jsonrpc,CANTO tendermintrpc,CANTO rest,COS3 grpc,COS4 rest,COS4 grpc,COS4 tendermintrpc,COS5 grpc,JUN1 grpc,POLYGON1 jsonrpc,SOLANA jsonrpc

```

</TabItem>
<TabItem value="addr" label="Address">

```bash
lavap test rpcprovider {PROVIDER_ADDRESS}
# Example: checking if your provider, is staked correctly and listening on all staked services
# lavap test rpcprovider lava@myprovidersbech32pubaddress --node {PUBLIC_RPC}
```

</TabItem>
</Tabs>

## Step 7: Provider Info and more features

You can track your Provider rewards and transactions via [https://info.lavanet.xyz/#providers](https://info.lavanet.xyz/#providers)

And review the Providers Features page for more capabilities.

## Step 8: Create Provider Service

:::tip
Please note that Lava has a dedicated binary in order to run and manage providers called `lavavisor`. make sure you are using either `lavavisor` OR a service file but not both.
:::

Assuming the following:

- The `lavap` binary is located in ``/usr/bin``
- The wallet responsible for the provider has a password
- A configuration file was made for the provider

First we need to set the following values:

```bash
TMP_PASSWORD=<your wallet password if you have one>
TMP_CONFIG_FILE_PATH=<path to your config file>
TMP_GEO_LOCATION=<the geolocation you wish to use>
TMP_PROVIDER_WALLET_ACCOUNT=<your provider wallet account name>
TMP_CHAIN_ID=<the lava chain id to run this on> # {CHAIN_ID}
```

Run the following to create the service file:

```bash
sudo tee <<EOF >/dev/null /etc/systemd/system/lava-provider.service
[Unit]
Description=Lava Provider
After=network-online.target
[Service]
# the user that runs the service
User=root

# set the working directory so that its easier to note the config file
WorkingDirectory=/root

# since we are using the wallet we must send in the password automatically
ExecStart=/usr/bin/sh -c 'echo $TMP_PASSWORD | /usr/bin/lavap rpcprovider $TMP_CONFIG_FILE_PATH --geolocation $TMP_GEO_LOCATION --from $TMP_PROVIDER_WALLET_ACCOUNT --chain-id $TMP_CHAIN_ID'

Restart=always
RestartSec=3
[Install]
WantedBy=multi-user.target
EOF
```

Finally enable and run the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable lava-provider.service
sudo systemctl start lava-provider.service
```

View the logs:

```bash
journalctl -f -u lava-provider.service -o cat
```

## Step 9: Unstake

A provider can unstake to get its stake funds back to its wallet. The provider can unstake completely or partially. Note that the funds will be sent to the wallet after the Cosmos staking module's unbond period of time which is currently defined as 3 weeks. Also, if a provider fully unstakes, it's removed from the pairing list by the next epoch.

### Complete Unstake

To unstake the full stake amount for a single service, use the following command:

```bash
lavap tx pairing unstake-provider [chain-id] {validator} [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

#### Parameters Description

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**). To get the full list of available chains use: `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`validator`** - Validator address for unstaking (optional). If no validator is specified, the highest stake validator on which the provider is delegated to will be picked automatically. To view all the provider's delegations with the validators addresses use: `lavap query staking delegations [provider] --node {LAVA_RPC_NODE}`. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`).

#### Flags Details

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **[CHAIN_ID](/key-variables#chain-id)**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **[PUBLIC_RPC](/public-rpc)**).

### Unstake Examples

#### Unstake with specified validator

```bash
lavap tx pairing unstake-provider LAV1 \
   "validator_lava_address" \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

#### Unstake with unspecified validator

```bash
lavap tx pairing unstake-provider LAV1 \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

### Partial Unstake

To unstake some of the stake amount for a single service, use the following command:

```bash
lavap tx dualstaking unbond [validator] [provider] [chain-id] [amount] [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

:::info
Note that the `unbond` command should be used because the proivder unbonds some of its funds from his self-delegation (which is its stake).
:::

#### Parameters Description

- **`validator`** - Validator address for unstaking. To view all the provider's delegations with the validators addresses use: `lavap query staking delegations [provider] --node {LAVA_RPC_NODE}`. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`).
- **`provider`** - Provider lava address (of format `lava@...`).
- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**). To get the full list of available chains use: `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`amount`** - Amount to unstake (for example: "`2010ulava`").

#### Flags Details

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **[CHAIN_ID](/key-variables#chain-id)**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **[PUBLIC_RPC](/public-rpc)**).

### Unbond Examples

```bash
lavap tx dualstaking unbond "validator_lava_address" \ 
    "provider_lava_address" \
    LAV1 \
    2010ulava \ 
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```

## Step 10: Modify stake entry

A provider can modify different properties of its stake entry using the `modify-provider` TX. The properties that can be changed using this TX include its stake amount, moniker, available endpoints, delegation commission and more.

### Modify provider stake entry

To modify the provider's stake entry for a single service, use the following command:

```bash
lavap tx pairing modify-provider [chain-id] [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

:::tip
Note that most changes are defined using the optional flags listed below.
:::

#### Parameters Description

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**). To get the full list of available chains use: `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.

#### Flags Details

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **[CHAIN_ID](/key-variables#chain-id)**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **[PUBLIC_RPC](/public-rpc)**).
- **`--amount`** - Provider stake amount. This is equivalent to the stake modifications TXs, so the `--validator` flag should be considered.
- **`--delegate-commission`** - Provider delegation commission (optional).
- **`--delegate-limit`** - Provider delegation limit (optional).
- **`--endpoints`** - Provider endpoints (optional). Need to follow the endpoints definition format as in the `stake-provider` command.
- **`--geolocation`** - Provider geolocation (optional). Can be set with `int32` value or string value ("`EU,US`").
- **`--provider-moniker`** - Provider moniker (optional).
- **`--validator`** - Validator address for staking/unstaking when using the `--amount` flag (optional). If no validator is specified, the highest stake validator on which the provider is delegated to will be picked automatically. To view all the provider's delegations with the validators addresses use: `lavap query staking delegations [provider] --node {LAVA_RPC_NODE}`. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`).

### Example

```bash
lavap tx pairing modify-provider ETH1 \
    --gas-adjustment "1.5" \
    --gas "auto" \
    --from "my-account-name"
    --amount "2010ulava"
    --endpoints "my-provider-africa.com:443,AF my-provider-europe.com:443,EU" \
    --geolocation "AF,EU" \
    --validator  lava@valoper13w... \
```

## **FAQ** ❓

#### `lavap` not found

Make sure you downloaded/built the binary, and it is located in the path you use to run `lavap` commands, or you have it under /usr/local/bin or under PATH. You can download/build the binary with `sudo make install-all` from your cloned folder.

#### Received error `account sequence mismatch`

Try to wait for a block_time (current=30s) and then run the command again

#### How do I make changes?

It is possible for a provider to make changes in his on chain stake entry at any time, it is possible to do so by sending the same stake-provider tx we have used when first joining the network with the updated parameters.

It is also possible to use a convenience cli command wrapping it:

```bash
lavad tx pairing modify-provider {SpecID} --from {WALLET}

# flags:
# --endpoints "my-provider-africa.com:443,AF my-provider-europe.com:443,EU" # must come with --geolocation if the new endpoints change/add a geolocation
# --amount 1000000000000ulava # when wanting to increase stake, decreasing can be done only by unstaking
# --provider-moniker "my-new-nickname"
```

#### How do I unstake? {#unstake}

Run the following command:

```
lavap tx pairing unstake-provider "{NETWORK_NAME}" \\
--from "{ACCOUNT_NAME}" \\
--keyring-backend "{KEYRING_BACKEND}" \\
--chain-id {CHAIN_ID} \\
--node "{LAVA_RPC_NODE}"

# For example, unstake a provider for the ETH1 network,
# lavap tx pairing unstake-provider ETH1 \\
# --from my_account_name \\
# --keyring-backend "test" \\
# --chain-id {CHAIN_ID} \\
# --node {PUBLIC_RPC}

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

It is likely that the stake-provider command was not taken into effect yet, if running the `lavap server` option, please wait a few minutes and try running the command again.
