---
sidebar_position: 2
title: Setup - Automatic
slug: /validator-auto
---

# Run Validator - Automatic setup

Script assumptions:
- The node was installed using Cosmovisor
- Lava config folder is $HOME/.lava/
- Cosmovisor home folder is $HOME/.lava/cosmovisor


### 1. Install node (`lavad`) & Join network

Running as a validator requires a Lava Node running, with state synced. Please refer to [set up a node](https://docs.lavanet.xyz/lava-node-intro) section.

🛟 Problems? Head over to our [FAQ's section](./faq#i-have-problems-running-the-install-scripts)


### 2. Prepare an account & Fund it {#account}
If you don't have an account already, you can use this script to create one for you:

```bash
curl \
--location \
--request GET 'https://get.lavanet.xyz/pnet_run_node' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > validator_setup.sh && \
chmod +x validator_setup.sh

# Run the setup
./validator_setup.sh -h
# Example - Create an account
# ./validator_setup.sh -e production -a create_account -u my_account
```

Get your account funded:
```bash
# Replace the address with your account address
curl \
-X POST \
-d '{"address": "lava@16rtwryjdfkulpels227kv7j0kh9exnf0mj3570"}' http://44.205.140.46:5555
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
# Run the setup
./validator_setup.sh -h

# Example - Run the validator setup
# ./validator_setup.sh -e production -a run_validator -u my_account
```

Expect to see the voting power of your node to be > 0, this will be visible in the output of the script
