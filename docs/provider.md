---
sidebar_position: 1
slug: provider
---
# Be a Provider

This page covers what is a provider and the steps for starting as one.

## Intro - What is a provider

## Steps for joining as a provider

## Available networks to set up a provider for, including ports required to open


Port - Name - Code - Protocol:
```
19921 - Ethereum - ETH1, jsonrpc  
19922 - Osmosis Mainnet - COS3, tendermintrpc  
19923 - Osmosis Mainnet - COS3, rest  
19924 - Fantom - FTM250, jsonrpc  
19925 - Goerli - GTH1, jsonrpc  
19926 - Lava mainnet - LAV1, tendermintrpc  
19927 - Lava mainnet - LAV1, rest  
19928 - Osmosis testnet - COS4, tendermintrpc  
19929 - Osmosis testnet - COS4, rest  
19930 - Celo mainnet - CELO, jsonrpc  
```
_Provider ports: 19921 - 19930_


### 1. Set up configurations
```bash
rpc_node="LAVA_RPC_NODE_ADDRESS_HERE" # e.g. "https://public-rpc.lavanet.xyz:443"
node_public_ip=$(curl -s ifconfig.me)

# If you already have an account specify it below, if not specify the desired user name to be created
# To get existing account name, run 'lavad keys list --keyring-backend test'
account_name="USER_NAME_HERE"
```

### 2. Download the latest lavad binary
```bash
binary_url="https://github.com/K433QLtr6RA9ExEq/GHFkqmTzpdNLDd6T/blob/main/production/cosmovisor-upgrades/genesis/bin/lavad?raw=true"
wget $binary_url -O $HOME/lavad
```

### 3. Optional - Create an account and fund it

:::info
If you already have a funded account you can skip this step.
:::

```bash
# Create a local account
$HOME/lavad keys add $account_name --keyring-backend test
# Print the public key (recommended to backup)
$HOME/lavad keys show -a $account_name --keyring-backend test

# Fund the account to join the network
# Replace the "address" field with your account address
curl -X POST \
-d '{"address": "lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw", "coins": ["60000000ulava"]}' http://44.205.140.46:5555
# Expected success output: '{}'
```

### 4. Verify your account has enough funds to stake a provider

```bash
$HOME/lavad query bank balances $account_address --denom ulava
# Expected output('amount' should be > 0):
#amount: "10000"
#denom: ulava
```

### 5. Stake a provider

<details>
    <summary>
    Ethereum mainnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "ETH1" \
    $provider_stake_amount \
    "$node_public_ip:19921,jsonrpc,1" 1 \
    -y \
    --from $account_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend \
    --node $rpc_node
# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>

<details>
    <summary>
    Osmosis mainnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "COS3" \
    $provider_stake_amount \
    "$node_public_ip:19922,tendermintrpc,1 $node_public_ip:19923,rest,1" 1 \
    -y \
    --from $account_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend \
    --node $rpc_node >>"$HOME/.lava_provider_remote_setup.log" 2>&1 &
# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>

<details>
    <summary>
    Fantom mainnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "FTM250" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19924,jsonrpc,1" 1 \
    -y \
    --from $lava_user_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>

<details>
    <summary>
    Ethereum Goerli mainnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "GTH1" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19925,jsonrpc,1" 1 \
    -y \
    --from $lava_user_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>

<details>
    <summary>
    Lava mainnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "LAV1" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19926,tendermintrpc,1 $(curl -s ifconfig.me):19927,rest,1" 1 \
    -y \
    --from $lava_user_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>

<details>
    <summary>
    Osmosis testnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "COS4" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19928,tendermintrpc,1 $(curl -s ifconfig.me):19929,rest,1" 1 \
    -y \
    --from $lava_user_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>

<details>
    <summary>
    Celo mainnet provider staking
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "CELO" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19930,jsonrpc,1" 1 \
    -y \
    --from $lava_user_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>


### 6. Run the provider processes






### 7. Verify the provider processes are running
verify_provider

## FAQ

1. `lavad` not found  
Make sure you downloaded the binary, and it is located in the path you use to run `lavad` commands

2. `account sequence mismatch`  
Try to wait for a block_time (current=30s) and try running the command again