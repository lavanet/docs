---
sidebar_position: 1
slug: provider
---
# Be a Provider

## Available networks to set up a provider for, including ports required to open

Provider ports: 19921 - 19930  

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







## Step 1 - Set up configurations
```bash
rpc_node="LAVA_RPC_NODE_ADDRESS_HERE" # e.g. "http://public-rpc.lavanet.xyz:80/rpc/"
node_public_ip=$(curl -s ifconfig.me)
keyring_backend="test"

# If you already have an account specify it below, if not specify the desired user name to be created
# To get existing account name, run 'lavad keys list --keyring-backend test'
account_name="USER_NAME_HERE"
```








## Step 2 - Download the latest lavad binary
```bash
binary_url="https://github.com/K433QLtr6RA9ExEq/GHFkqmTzpdNLDd6T/blob/main/production/cosmovisor-upgrades/genesis/bin/lavad?raw=true"
wget $binary_url -O $HOME/lavad
chmod +x $HOME/lavad
```







## Step 3 - Optional - Create an account and fund it

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








## Step 4 - Verify your account has enough funds to stake a provider

```bash
account_address=$($HOME/lavad keys show -a $account_name --keyring-backend test)

$HOME/lavad query \
bank balances \
"$account_address" \
--denom ulava \
--node "$rpc_node"

# Expected output('amount' should be > 0):
#amount: "10000"
#denom: ulava
```








## Step 5 - Stake a provider

<details>
    <summary>
    Ethereum Mainnet
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
    Osmosis Mainnet
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
    Fantom Mainnet
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "FTM250" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19924,jsonrpc,1" 1 \
    -y \
    --from $account_name \
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
    Ethereum Goerli
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "GTH1" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19925,jsonrpc,1" 1 \
    -y \
    --from $account_name \
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
    Lava Mainnet
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "LAV1" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19926,tendermintrpc,1 $(curl -s ifconfig.me):19927,rest,1" 1 \
    -y \
    --from $account_name \
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
    Osmosis Testnet
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "COS4" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19928,tendermintrpc,1 $(curl -s ifconfig.me):19929,rest,1" 1 \
    -y \
    --from $account_name \
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
    Celo mainnet
    </summary>

```bash
provider_stake_amount="STAKE_AMOUNT_HERE" # Change to a stake amount of your choice, e.g. "2010ulava"

$HOME/lavad tx pairing stake-provider "CELO" \
    $provider_stake_amount \
    "$(curl -s ifconfig.me):19930,jsonrpc,1" 1 \
    -y \
    --from $account_name \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --keyring-backend $keyring_backend

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>











## Step 6 - Run the provider processes

External RPC nodes syntax, examples:  
Websocket             - `ETH1_NODE_URL="ws://username:password@my-node.com/eth/ws/"`  
HTTP                  - `COS3_REST_NODE_URL="https://my-node.com:12345/rest/"`  
HTTP with basic auth  - `COS3_RPC_NODE_URL="http://username:password@my-node.com/"`  

<details>
    <summary>
    Ethereum Mainnet
    </summary>

```bash
ETH1_NODE_URL="ETH1_NODE_URL"

$HOME/lavad server 0.0.0.0 19921 $ETH1_NODE_URL \
    ETH1 jsonrpc \
    --from $account_name \
    --keyring-backend $keyring_backend \
    --node $rpc_node

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>


<details>
    <summary>
    Osmosis Mainnet
    </summary>

```bash
COS3_RPC_NODE_URL="COS3_RPC_NODE_URL"
COS3_REST_NODE_URL="COS3_REST_NODE_URL"

$HOME/lavad server 0.0.0.0 19922 $COS3_RPC_NODE_URL \
    COS3 tendermintrpc \
    --from $account_name \
    --keyring-backend $keyring_backend \
    --node $rpc_node >>/var/log/lava-logs/cosmos_provider_rpc.log 2>&1 &

$HOME/lavad server 0.0.0.0 19923 $COS3_REST_NODE_URL \
    COS3 rest \
    --from $account_name \
    --keyring-backend $keyring_backend \
    --node $rpc_node >>/var/log/lava-logs/cosmos_provider_rest.log 2>&1 &

# Expected output, code: 0
# Following the last command, please wait for block_time (current=30s) before running the next command
# in order to make sure the staking provider is added to the network
```
</details>




















## Step 7 - Verify the provider processes are running
verify_provider

## FAQ

1. `lavad` not found  
Make sure you downloaded the binary, and it is located in the path you use to run `lavad` commands

2. `account sequence mismatch`  
Try to wait for a block_time (current=30s) and try running the command again

3. How do I remove my provider stake for a specific network?
```bash
# Set up the following configurations:  
network_name="NAME_HERE"                # e.g. 'ETH1'  
account_address="ACCOUNT_ADDRESS_HERE"  # e.g. lava@1jr098ppcqykw2j26qhuwkauzmtrth5fh7vsq39  
rpc_node="LAVA_RPC_NODE_ADDRESS_HERE"   # e.g. "http://public-rpc.lavanet.xyz:80/rpc/"  

# Run the following command:  
$HOME/lavad tx pairing \  
unstake-provider \  
$network_name \  
--from $account_address \  
--node $rpc_node \  
--keyring-backend test  
```