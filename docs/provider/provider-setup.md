---
sidebar_position: 1
slug: /provider-setup
title: Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview

This guide walks you through setting up an RPC provider for Lava, from configuration to staking and beyond.

## Prerequisites

Make sure you have:

- ✅ A synced node for your target chain ([supported chains](provider.md#querying-a-list-of-supported-chains-chains))
- ✅ [`lavap`](../intro/install-lava.md#install-a-specific-binary-) installed
- ✅ [TLS configured](./provider-tls.md) (optional but recommended)
- ✅ [Lavavisor](./lavavisor/lavavisor.md) setup (optional)
- ✅ A wallet funded with LAVA tokens


## Step 1: Create a Provider Config File
Inside of the default node home directory create a YAML config file (e.g., `lava-provider.yml`) that defines your endpoints.

### Endpoint Schema

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| `api-interface`   | API type (`tendermintrpc`, `jsonrpc`, etc.)      |
| `chain-id`        | Chain ID to provide service for                 |
| `network-address` | Host/port where your provider listens           |
| `node-urls`       | One or more backend node URLs                   |

### Examples

To illustrate, below you can see two provider configuration files - one for running a provider service for Lava testnet (`lava-provider.yml`) and one for running Ethereum provider service (`eth-provider.yml`):

<Tabs>
<TabItem value="lava_yml" label="lava-provider">

`nano lava-provider.yml`

```yaml

endpoints:
    - api-interface: tendermintrpc
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls:
        - url: ws://127.0.0.1:26657/websocket
        - url: http://127.0.0.1:26657
    - api-interface: grpc
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls: 
        url: 127.0.0.1:9090
    - api-interface: rest
      chain-id: LAV1
      network-address:
        address: 127.0.0.1:2224
        disable-tls: true
      node-urls: 
        url: http://127.0.0.1:1317
```

</TabItem>
<TabItem value="eth_yml" label="eth-provider">

`nano eth-provider.yml`

```yaml

endpoints:
    - api-interface: jsonrpc
      chain-id: ETH1
      network-address:
        address: 127.0.0.1:2223
        disable-tls: true
      node-urls: 
        url: wss://ethereum-rpc.com/ws/
```

</TabItem>
</Tabs>

If your server has a TLS configured, you should set the flag `disable-tls:true` in your `network-address` configuration.

If you are unsure which endpoints you should include in your provider configuration, make sure to [reference the specification](./provider.md#querying-chain-specifications) for the chain you are setting up your provider for to see supported endpoints and API interfaces. 


:::tip
See [provider config examples](https://github.com/lavanet/lava/tree/main/config/provider_examples) for more templates.
:::



## Step 2: Run RPCProvider process

Once you have the provider configuration file ready, you can start the RPC provider proces using the **rpcprovider** command available through `lavap`:

```bash
lavap rpcprovider [config-file] || { {listen-host:listen-port spec-chain-id api-interface node-url} ... }
```

:::info
For advanced configuration such as **authentication**, header **forwarding**, configurable **node-timeout**, see [Provider Features.](/provider-features)
:::

<details>
<summary> Command Flags </summary>

- **`--geolocation`** (required): Geolocation to run from (e.g., **`1`**). Use the [geolocation reference](./provider.md#provider-parameters) for configuring the geolocation correctly.
- **`--from`** (required): Account name to use (e.g., **`alice`**)
- **`--chain-id`**: Lava Network chain ID (`lava-testnet-2` for Lava testnet and `lava-mainnet-1` for Lava mainnet)
- **`--pprof-address`**: pprof server address, used for code profiling (default: **`""`**)
- **`--cache`**: Address for a cache server to improve performance (default: **`""`**)
- **`--parallel-connections`**: Number of parallel connections (default: **`chainproxy.NumberOfParallelConnections`**)
- **`--reward-server-storage`**:  The path to store reward server data (default **`".storage/rewardserver"`**)
- **`--node`**: `<host>:<port>` to tendermint rpc interface for this chain (default "tcp://localhost:26657")

</details>

### Examples

Examples below show the commands for starting RPC provider process for Lava Testnet and Ethereum Mainnet, both on a Lava testnet:

<Tabs>
<TabItem value="Lava Testnet" label="lava-provider">

```bash
# This will take us to a separate terminal where we can start the provider process:
screen -S lava-provider


# Start the provider process on Lava testnet.
lavap rpcprovider lava-provider.yml --from your_key_name_here --geolocation 1 --chain-id lava-testnet-2 --log_level debug
```

</TabItem>
<TabItem value="Ethereum provider" label="eth-provider">

```bash
# This will take us to a separate terminal where we can start the provider process:

screen -S eth-provider


# Start the provider process on Lava testnet.
lavap rpcprovider eth-provider.yml --from your_key_name_here --geolocation 1 --chain-id lava-testnet-2 --log_level debug
```

</TabItem>
</Tabs>



You can also provide endpoint configurations as command line arguments. For example:
```bash
lavap rpcprovider provider-host.com:1986 ETH1 jsonrpc https://localhost/eth/my_node_1 --geolocation 1 --from alice
```


## Step 3: Check Provider liveliness - before staking

To ensure the provider is up and running correctly `lavap` provides a command to setup the necessary clients and verify all parameters are well defined.
This command is used to test the basic flow for a provider is working, including stake and access, but with some additional arguments can be used prior to staking, as long as the rpcprovider process is up and running.
since we haven't staked yet we need to provide the command with the endpoints we are using.

#### Usage

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

### Examples

<Tabs>
<TabItem value="Lava Testnet" label="lava-provider">

`lavap test rpcprovider --from your_key_name_here --endpoints "your-site:443,LAV1"`

Expected output:

```
📄----------------------------------------✨SUMMARY✨----------------------------------------📄

🔵 Tests Passed:
🔹LAV1-grpclatest block: 0x4ca8c
🔹LAV1-restlatest block: 0x4ca8c
🔹LAV1-tendermintrpclatest block: 0x4ca8c

🔵 Tests Failed:
🔹None 🎉! all tests passed ✅

🔵 Provider Port Validation:
🔹✅ All Ports are valid! ✅

```

</TabItem>
<TabItem value="Ethereum provider" label="eth-provider">

`lavap test rpcprovider --from your_key_name_here --endpoints "your-site:443,ETH1"`

Expected output:

```
📄----------------------------------------✨SUMMARY✨----------------------------------------📄

🔵 Tests Passed:
🔹ETH1-jsonrpclatest block: 0x1115fe9

🔵 Tests Failed:
🔹None 🎉! all tests passed ✅

🔵 Provider Port Validation:
🔹✅ All Ports are valid! ✅

```

</TabItem>
</Tabs>


## Step 4: Stake Your Provider

To make your provider publicly available, you have to stake it. The amount you will have to stake is determined in the [specificiation of the chain](./provider.md#querying-chain-specifications) under the `min_stake_provider` parameter.

To stake a single service, use the following command:

```bash
lavap tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] {validator} [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

<details>
<summary> Parameters Description </summary>

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**).
- **`amount`** - Stake amount for the specific chain (e.g., **`2010ulava`**).
- **`endpoint`** - Provider host listener, composed of `provider-host:provider-port,geolocation`. To define multiple endpoints do: `"host:port,geolocation host2:port2,geolocation2"`. To define advanced endpoint features like `trace`, `debug`, and more, ask the Lava team.
- **`geolocation`** - Indicates the geographical location where the process is located (e.g., **`1`** for US or **`2`** for EU). This argument must specify all the geolocations of the defined endpoints (see the "Ethereum Mainnet in US And Europe" below).
- **`validator`** - Validator address for staking (optional). Validator address is required when staking due to the dualstaking mechanism. If no validator is specified, the highest stake validator will be picked automatically. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`). You can find a list of active validators on [official Lava block explorer](https://lava.explorers.guru/validators). 
</details>

<details>
<summary> Flags Details </summary>

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
</details>
### Examples


<Tabs>
<TabItem value="Lava Testnet" label="lava-provider">

```bash
lavap tx pairing stake-provider LAV1 \
  "50000000000ulava" \
  "lava.your-site:443,1" 1 \
  validator -y 
  --from your_key_name_here \
  --provider-moniker your-provider-moniker-1 \
  --delegate-limit "0ulava" 
  --gas-adjustment "1.5" 
  --gas "auto" 
  --gas-prices "0.0001ulava"
```

</TabItem>
<TabItem value="Ethereum provider" label="eth-provider">

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

</TabItem>

<TabItem value="Ethereum provider multiple locations" label="eth-provider for multiple geolocations">

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
</TabItem>


</Tabs>



:::tip
Note that this TX can also be used to increase the provider's stake. To increase, the amount should be the sum of the current amount and the desired addition. For example, a provider is staked with `100ulava` and wants to increase its stake by `10ulava`. Then, the appropriate `amount` argument for the `stake-provider` command should be `110ulava`.
:::

:::info
Use the optional `--provider` flag to define a different address that will be used to operate the provider. This will make the address of the `--from` flag to be the provider's vault address, which will hold the provider's funds and will be able to perform stake or funds related transactions (like unstake, modify-stake and more).
:::

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

<details>
<summary> Parameter Descriptions </summary>

- `provider_address` - The public address of the provider beginning with the lava@ prefix.
- `LAVA_RPC_NODE` - An RPC node for Lava. This can be omitted if the current node has already joined the Lava network. Example: [PUBLIC_RPC](/public-rpc)

</details>

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

<details>
<summary> Parameter Descriptions </summary>

- `NETWORK_NAME` - The ID of the chain. Examples: `COS4` or `FTM250`.
- `LAVA_RPC_NODE` - An RPC node for Lava. This can be omitted if the current node has already joined the Lava network. Example: [PUBLIC_RPC](/public-rpc)

</details>

:::info
Note, a new provider stake is only applied on the start of the next epoch. Currently, an epoch is defined as 30 blocks. With block time of 30sec, in the worst case scenario the stake will be applied after 15min.
:::

## Step 6: Check Provider liveliness - after staking

Now that your provider is staked you can repeat the command, but this time, without specifying the endpoints, as the CLI will use the blockchain to fetch them, this verifies the data exists correctly on the blockchain.

#### Usage

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

## Step 7: Your provider is up and running!

If you followed all the steps above, you should have your provider service up and running. You can track your Provider rewards and transactions via [https://info.lavanet.xyz/#providers](https://info.lavanet.xyz/#providers)

And review the Providers Features page for more capabilities.

## Additional useful commands
### Create Provider Service

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

### Unstake

A provider can unstake to get its stake funds back to its wallet. The provider can unstake completely or partially. Note that the funds will be sent to the wallet after the Cosmos staking module's unbond period of time which is currently defined as 3 weeks. Also, if a provider fully unstakes, it's removed from the pairing list by the next epoch.

#### Complete Unstake

To unstake the full stake amount for a single service, use the following command:

```bash
lavap tx pairing unstake-provider [chain-id] {validator} [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

<details>
<summary> Parameters Description </summary>

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**). To get the full list of available chains use: `lavap query spec show-all-chains --node {LAVA_RPC_NODE}`.
- **`validator`** - Validator address for unstaking (optional). If no validator is specified, the highest stake validator on which the provider is delegated to will be picked automatically. To view all the provider's delegations with the validators addresses use: `lavap query staking delegations [provider] --node {LAVA_RPC_NODE}`. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`).
</details>

<details>
<summary> Flags Details </summary>

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **[CHAIN_ID](/key-variables#chain-id)**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **[PUBLIC_RPC](/public-rpc)**).
</details>
#### Unstake Examples

<details>
<summary> Unstake with specified validator </summary>

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
</details>

<details>
<summary> Unstake with unspecified validator </summary>

```bash
lavap tx pairing unstake-provider LAV1 \
    --from "my_account_name" \
    --keyring-backend "test" \
    --chain-id {CHAIN_ID} \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --node {PUBLIC_RPC}
```
</details>

#### Partial Unstake

To unstake some of the stake amount for a single service, use the following command:

```bash
lavap tx dualstaking unbond [validator] [provider] [chain-id] [amount] [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

:::info
Note that the `unbond` command should be used because the proivder unbonds some of its funds from his self-delegation (which is its stake).
:::

<details>
<summary> Parameters Description </summary>

- **`validator`** - Validator address for unstaking. To view all the provider's delegations with the validators addresses use: `lavap query staking delegations [provider] --node {LAVA_RPC_NODE}`. Note that the validator address should be in a sdk.ValAddress format (`lava@valoper...`).
- **`provider`** - Provider lava address (of format `lava@...`).
- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**). 
- **`amount`** - Amount to unstake (for example: "`2010ulava`").
</details>

<details>
<summary> Flags Details </summary>

- **`--from`** - The account to be used for the provider staking (e.g., **`my_account`**).
- **`--keyring-backend`** - A keyring-backend of your choosing (e.g., **`test`**).
- **`--chain-id`** - The chain_id of the network (e.g., **[CHAIN_ID](/key-variables#chain-id)**).
- **`--gas`** - The gas limit for the transaction (e.g., **`"auto"`**).
- **`--gas-adjustment`** - The gas adjustment factor (e.g., **`"1.5"`**).
- **`--node`** - A RPC node for Lava (e.g., **[PUBLIC_RPC](/public-rpc)**).
</details>

#### Unbond Examples

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

### Modify provider

At any moment, you can modify your provider configuration. The properties that can be changed include provider stake amount, moniker, available endpoints, delegation commission and more.

#### Modify provider stake entry

To modify the provider for a single service, use the following command:

```bash
lavap tx pairing modify-provider [chain-id] [flags]
```

*Check the output for the status of the staking operation. A successful operation will have a code **`0`**.*

<details>
<summary> Parameters Description </summary>

- **`chain-id`** - The ID of the serviced chain (e.g., **`COS4`** or **`FTM250`**).
</details>

<details>
<summary> Flags Details </summary>

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
</details>
#### Example

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

