---
sidebar_position: 2
title: Option A - Automatic
slug: /validator-auto
---

This section will help you onboard Lava network with the "automatic scripts" flow: from installing a node and joining the network, to handling an account, funds and start validating (and earning rewards).

Before starting, verify [hardware requirements](reqs) are met.

:::note Already joined the network just not validating yet?
If you already installed a node and joined the network with the automatic script as outlined in "[Join Testnet - Setup automatic](testnet-auto)" , you should skip step #1 and [go to step 2](#account).
:::

### 1. Install node (`lavad`) & Join network

**Prepare**
```bash
sudo apt update
``` 

```bash
sudo apt install curl jq unzip coreutils -y
```

**Install and join the network**

Running the script will:

1. Install `lavad` (using Cosmovisor)
2. Join the testnet
3. Sync to the latest block

```bash
curl -s --location \
--request GET 'https://get.lavanet.xyz/pnet_join_network_cosmovisor' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
chmod +x 00_join_network.sh && \
./00_join_network.sh
```

🛟 Problems? Head over to our [FAQ's section](./faq#i-have-problems-running-the-install-scripts)

### 2. Prepare an account & Fund it {#account}
If you don't have an account already, you can use this script to create one for you:

```bash
curl \
--location \
--request GET 'https://get.lavanet.xyz/pnet_validator_cosmovisor' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > validator_setup.sh && \
chmod +x validator_setup.sh

# Run the setup
./validator_setup.sh -h
# Example - Create an account
# ./validator_setup.sh -e production -a create_account -u my_user
```

Script finished? Write down the details you'll need later:

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`
3. Your validator pubkey

♻ Save those details as we make sure to automatically airdrop you with LAVA test tokens as soon as we restart the testnet.
:::

#### Faucet

Get your account funded through [the faucet](faucet)

### 3. Stake & start validating

```bash
# Run the setup
./validator_setup.sh -h

# Example - Run the validator setup
# ./validator_setup.sh -e production -a run_validator -u my_user
```

Expect to see the voting power of your node to be > 0, this will be visible in the output of the script
