---
slug: /koii-node
title: Running a Koii RPC Node
---

# Running a Koii RPC Node

## Requirements 📄 

There are notable minimum hardware requirements in order to run a Koii RPC Node:

    >258 GB RAM or more
    16 core 32-thread CPU
    1 TB NVME SSD
    1 GBPS up/down

## Install Koii 📥

After you've gotten your requirements together you can proceed to installing!

### 📦 Get Required Packages

```bash
sudo apt install libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang
```

### 👤 Create a Separate User

Best practice is to create a non-root user for security reasons:

```bash
sudo adduser koii
sudo usermod -aG sudo koii
sudo su koii
```

### 💾 Get the Koii software

Run the following install script:

```bash
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init_v1.14.19.sh)"
```

Run the System Tuner:

```bash
koii-sys-tuner --user koii
```

### 🛠️ Setup a Koii Validator with RPC Functions

Generate a Keypair:

```bash
koii-keygen new --outfile ~/validator-keypair.json
```

Run the Validator command, with RPC options identified. You may need to play around to get the correct configuration. An example is given below:

```bash
koii-validator \
    --identity /home/koii/validator-keypair.json \
    --only-known-rpc \
    --full-rpc-api \
    --no-voting \
    --ledger /mnt/ledger \
    --accounts /mnt/accounts \
    --log /home/koii/koii-rpc.log \
    --rpc-port 8899 \
    --rpc-bind-address 0.0.0.0 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.solana.com:8001 \
    --entrypoint entrypoint2.testnet.solana.com:8001 \
    --entrypoint entrypoint3.testnet.solana.com:8001 \
```

### 🧪 Test Your Endpoints

There may be additional configurations necessary to complete your setup.
You should consult the [Validator setup guide](https://docs.koii.network/run-a-node/k2-validators/validator-setup) for Koii and the [RPC Setup Guide](https://docs.solana.com/validator/get-started/setup-an-rpc-node) for Solana to ensure you've covered all necessary steps.


## Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-solana-rpc-node&utm_medium=docs&utm_campaign=solana-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.
