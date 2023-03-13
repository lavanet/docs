---
sidebar_position: 1
slug: /provider-setup
title: Setup
---

# Setup Provider

## Running a provider - steps
`lavad` contains the implementation for running a provider process. 

:::info
Current installation of `lavad` is built only for Linux.
:::

### 1. Download `lavad`

* Note: in case you already have an existing lavad installation, you can refer your current lavad binary by running `$HOME/.lava/cosmovisor/current/bin/lavad`

```bash
binary_url="https://lava-binary-upgrades.s3.amazonaws.com/testnet/v0.4.3/lavad"
wget $binary_url -O lavad
chmod +x lavad
# copy lavad to /usr/local/bin
sudo cp ./lavad /usr/local/bin/lavad
```

### 2. Prepare an account & Fund it {#account}
Lava account and wallets are standard Cosmos. Learn more in [Account & Wallet section](https://github.com/lavanet/docs/blob/main/docs/lava-blockchain/account-wallet.mdx).

First, you need to add a wallet to your keyring ([FAQ: what is a keyring](https://github.com/lavanet/docs/blob/main/docs/faq.md#keyring)).

While you may use your seed phrase to import an existing wallet, we'll make a new one in this scenario.
replace `ACCOUNT_NAME` with a name of your choosing:

```bash
lavad keys add \
"{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}"

# Example:
# lavad keys add \
# "my_account_name" \
# --keyring-backend "test"

# Expected output:
# Your new account details, along with the name, public account address and your mnemonic phrase
```

Param description (and examples):
- `ACCOUNT_NAME` - The account to be used for the provider staking. Example `my_account`
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](https://github.com/lavanet/docs/blob/main/docs/faq.md#keyring)). Example `test`


To ensure your wallet was saved to your keyring, look for the `{ACCOUNT_NAME}` is in your keys list:

```bash
lavad keys list \
--keyring-backend "{KEYRING_BACKEND}"

# Example:
# lavad keys list \
# --keyring-backend "test"

# Expected output:
# Your new account details, along with the name, public account address and your mnemonic phrase
```

Param description (and examples):
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](https://github.com/lavanet/docs/blob/main/docs/faq.md#keyring)). Example `test`

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`

:::

#### Faucet

Get your account funded through [the faucet](https://github.com/lavanet/docs/blob/main/docs/lava-blockchain/faucet.mdx)

#### Verify your account is funded

Verify that your account has funds in it in order to perform staking

```bash
# Verify your account has Lava tokens (replace the address with your account address)

lavad query \
bank balances \
"{ACCOUNT_PUBLIC_ADDRESS}" \
--denom ulava \
--node "{LAVA_RPC_NODE}"

# Example: checking the balance of your account, using Lava public RPC node
# lavad query \
#     bank balances \
#     lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw \
#     --denom ulava \
#     --node https://public-rpc.lavanet.xyz:443/rpc/

# Expected output:
# amount: "XXX" # Amount should be > 1
# denom: ulava
```

Param description (and examples):
- `ACCOUNT_PUBLIC_ADDRESS` - The public address of your account. Example `lava@12h75m99wsgnxnc7d5qpwl6rq268c7jvccxdeqw`
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `https://public-rpc.lavanet.xyz:443/rpc/`

### 3. Stake a provider
To stake a single service, use this command:

`lavad tx pairing stake-provider [chain-id] [amount] [endpoint endpoint ...] [geolocation] [flags]`  
For example,  

```bash
lavad tx pairing stake-provider "{NETWORK_NAME}" \
"{STAKE_AMOUNT}" \
"{SERVICED_NODE_IP}:{SERVICED_NODE_PORT},{PROTOCOL},1" 1 \
--from "{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}" \
--chain-id "{CHAIN_ID}" \
--gas="auto" \
--gas-adjustment "1.5" \
--node "{LAVA_RPC_NODE}"

# Example: staking a provider for ETH1, using an external Lava RPC node,
# lavad tx pairing stake-provider "ETH1" \
#     500000000000ulava \
#     "$(curl -s ifconfig.me):19921,jsonrpc,1" 1 \
#     --from my_account_name \
#     --gas="auto" \
#     --gas-adjustment "1.5" \
#     --chain-id "lava-testnet-1" \
#     --keyring-backend "test" \
#     --node https://public-rpc.lavanet.xyz:443/rpc/

# Expected output:
# code: 0
```

Param description (and examples):
- `NETWORK_NAME` - The ID of the serviced chain, see [how to query the full list](https://github.com/toolfun/docs/blob/main/docs/provider.md#available-apis). Example `COS4` or `FTM250`
- `STAKE_AMOUNT` - The amount you are willing to stake for being a provider for the specific network. Example `2010ulava`
- `SERVICED_NODE_IP` - External IP of the node that will service the requests. Example `51.92.133.253` (to find your public IP, run `curl ifconfig.me`)  
- `SERVICED_NODE_PORT` - Port of the node that will service requests. Example `19921`
- `PROTOCOL` - The protocol to be used, see [how to query the full list](https://github.com/toolfun/docs/blob/main/docs/provider.md#available-apis). Example `jsonrpc`, or `rest`
- `ACCOUNT_NAME` - The account to be used for the provider staking. Example `my_account`
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](https://github.com/lavanet/docs/blob/main/docs/faq.md#keyring)). Example `test`
- `CHAIN_ID` - The chain_id of the network. Example `lava-testnet-1`
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `https://public-rpc.lavanet.xyz:443/rpc/`
- `GEOLOCATION` - Indicates the geographical location where the process is located. Example `1` for US or `2` for EU

Notes:
1. Expected output code: `0`
2. Please stake provider only once per block (Block currently stands at 30s)

### 4. Run the provider processes
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
# Create a service unit file
LISTEN_IP=LISTEN_IP
LISTEN_PORT=LISTEN_PORT
NODE_URL=NODE_URL
NETWORK_NAME=NETWORK_NAME
PROTOCOL=PROTOCOL
ACCOUNT_NAME=ACCOUNT_NAME
KEYRING_BACKEND=KEYRING_BACKEND
CHAIN_ID=CHAIN_ID
LAVA_RPC_NODE=LAVA_RPC_NODE
GEOLOCATION=GEOLOCATION

echo "[Unit]
Description=Provider daemon
After=network-online.target
[Service]
ExecStart=lavad server $LISTEN_IP $LISTEN_PORT $NODE_URL $NETWORK_NAME $PROTOCOL --from $ACCOUNT_NAME --keyring-backend $KEYRING_BACKEND --chain-id $CHAIN_ID --node $LAVA_RPC_NODE --geolocation $GEOLOCATION
User=$USER
Restart=always
RestartSec=180
LimitNOFILE=infinity
LimitNPROC=infinity
[Install]
WantedBy=multi-user.target" > lava-provider-$NETWORK_NAME-$PROTOCOL.service
sudo mv lava-provider-$NETWORK_NAME-$PROTOCOL.service /lib/systemd/system/

# Start the service
systemctl start lava-provider-$NETWORK_NAME-$PROTOCOL
# Verify the status of the service
systemctl status lava-provider-$NETWORK_NAME-$PROTOCOL
# Check the service logs
journalctl -u lava-provider-$NETWORK_NAME-$PROTOCOL -f

# Example: running an ETH1 jsonrpc provider with a remote Lava RPC node,
# lavad server 0.0.0.0 19921 "wss://username:password@my_remote_node/eth/ws/" \
# ETH1 jsonrpc \
# --from my_account_name \
# --keyring-backend "test" \
# --chain-id "lava-testnet-1" \
# --node https://public-rpc.lavanet.xyz:443/rpc/
# --geolocation 1

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT
```

Param description (and examples):  
- `LISTEN_IP` - IP of the node that will listen for service requests. Example `0.0.0.0`  
- `LISTEN_PORT` - Port of the node that will service requests. Example `19921`  
- `NODE_URL` - The URL of an external (or internal) node that you will be fetching on-chain data from.  
- `NETWORK_NAME` - The ID of the chain, see [how to query the full list](https://github.com/toolfun/docs/blob/main/docs/provider.md#available-apis). Example `COS4` or `FTM250`  
- `PROTOCOL` - The protocol to be used, see [how to query the full list](https://github.com/toolfun/docs/blob/main/docs/provider.md#available-apis). Example `jsonrpc`, or `rest`  
- `ACCOUNT_NAME` - The account to be used for the provider staking.  
- `KEYRING_BACKEND` - A keyring-backend of your choosing, for more information ([FAQ: what is a keyring](https://github.com/lavanet/docs/blob/main/docs/faq.md#keyring)). Example `test`
- `CHAIN_ID` - The chain_id of the network. Example `lava-testnet-1`
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `https://public-rpc.lavanet.xyz:443/rpc/`

### 5. Verify your account is in the pairing providers list
To verify if your account is paired with the pairing providers for a specific network,
Run the command below, and check to see if your account public address is in the command output list

```bash
lavad query pairing providers \
"{NETWORK_NAME}" \
--node "{LAVA_RPC_NODE}"

# Example: checking if your account is a paired provider for the ETH1 network,
# lavad query pairing providers \
# ETH1 \
# --node https://public-rpc.lavanet.xyz:443/rpc/

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT
```

Param description (and examples):  
- `NETWORK_NAME` - The ID of the chain, see [how to query the full list](https://github.com/toolfun/docs/blob/main/docs/provider.md#available-apis). Example `COS4` or `FTM250`  
- `LAVA_RPC_NODE` - A RPC node for Lava (can be omitted if the current node has joined the Lava network). Example `https://public-rpc.lavanet.xyz:443/rpc/`


## FAQ

### `lavad` not found  
Make sure you downloaded the binary, and it is located in the path you use to run `lavad` commands, or you have it under /usr/local/bin or under PATH

### Received error `account sequence mismatch`
Try to wait for a block_time (current=30s) and then run the command again

### How do I unstake? {#unstake}
Run the following command:  

```bash
lavad tx pairing unstake-provider "{NETWORK_NAME}" \
--from "{ACCOUNT_NAME}" \
--keyring-backend "{KEYRING_BACKEND}" \
--chain-id "{CHAIN_ID}" \
--node "{LAVA_RPC_NODE}"

# For example, unstake a provider for the ETH1 network,
# lavad tx pairing unstake-provider ETH1 \
# --from my_account_name \
# --keyring-backend "test" \
# --chain-id "lava-testnet-1" \
# --node https://public-rpc.lavanet.xyz:443/rpc/

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
