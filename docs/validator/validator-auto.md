---
sidebar_position: 2
title: Setup - Automatic
slug: /validator-auto
---

### 1. Install node (`lavad`) & Join network

**Prepare**
```bash
sudo apt update
``` 

```bash
sudo apt install curl unzip coreutils -y
```

**Install and join the network**

Running the script will:

1. Install `lavad`
2. Join the testnet
3. Sync to latest block

```bash
curl -s --location --request GET 'https://get.lavanet.xyz/pnet_join_network' --header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 00_join_network.sh && \
    chmod +x 00_join_network.sh && \
    ./00_join_network.sh production
```

🛟 Problems? Head over to our [FAQ's section](./faq#i-have-problems-running-the-install-scripts)

### 2. Prepare an account & Fund it
If you don't have an account already, you can use this script to create one for you:

```bash
curl --location --request GET 'https://get.lavanet.xyz/pnet_run_node' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_node.sh && \
chmod +x 01_run_node.sh && \
./01_run_node.sh production create_account
```

Script finished? Write down the details you'll need later:

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`
3. Your validator pubkey

♻ Save those details as we make sure to automatically airdrop you with LAVA test tokens as soon as we restart the testnet.

:::



### 3. Stake & start validating

```bash
curl --location --request GET 'https://get.lavanet.xyz/pnet_run_node' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_node.sh && \
chmod +x 01_run_node.sh && \
./01_run_node.sh production stake_validator
```
