---
slug: /solana-node
title: Running a Solana RPC Node
---

# Running a Solana RPC Node

## 1. Install the Solana CLI

In order to run a Solana node, you must first install Solana CLI. This software is necessary to run a Solana RPC node. The first step is to ensure that you've gotten the proper archive:

```bash 
# For Testnet 
wget https://github.com/solana-labs/solana/archive/refs/tags/v1.16.5.tar.gz
tar -xvf v1.16.5.tar.gz
cd solana-1.16.5

# For Mainnet
https://github.com/solana-labs/solana/archive/refs/tags/v1.14.20.tar.gz
tar -xvf v1.14.20.tar.gz
cd solana-1.14.20
```

Once you've switched to the unarchived directory, you'll need to run the `cargo-install-all` script and `solana-install` command as shown below:

```bash
./scripts/cargo-install-all.sh .
export PATH=$PWD/bin:$PATH
solana-install init
```
This should be sufficient to start your instance of SolanaCLI, but you will not be serving RPC until completing the additional steps listed below.

## 2. Start the RPC Node

### Create a Validator Keypair

Input the following command to generate validator keypair for use in the next step:

```bash
solana-keygen new -o validator-keypair.json
```

### Run the `solana-validator` command

Take a moment to review the template below and make any changes as needed for your custom configuration.

```bash
solana-validator \
    --identity /home/sol/validator-keypair.json \
    --known-validator 5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on \
    --known-validator dDzy5SR3AXdYWVqbDEkVFdvSPCtS9ihF5kJkHCtXoFs \
    --known-validator eoKpUABi59aT4rR9HGS3LcMecfut9x7zJyodWWP43YQ \
    --known-validator 7XSY3MrYnK8vq693Rju17bbPkCN3Z7KvvfvJx4kdrsSY \
    --known-validator Ft5fbkqNa76vnsjYNwjDZUXoTWpP7VYm3mtsaQckQADN \
    --known-validator 9QxCLckBiJc783jnMvXZubK4wH86Eqqvashtrwvcsgkv \
    --only-known-rpc \
    --full-rpc-api \
    --no-voting \
    --ledger /mnt/ledger \
    --accounts /mnt/accounts \
    --log /home/sol/solana-rpc.log \
    --rpc-port 8899 \
    --rpc-bind-address 0.0.0.0 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.solana.com:8001 \
    --entrypoint entrypoint2.testnet.solana.com:8001 \
    --entrypoint entrypoint3.testnet.solana.com:8001 \
    --expected-genesis-hash 4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

Once the command returns successful, you're now ready to serve RPC!

## 3. Apply to our Provider Incubation Program 📋

In our current state of Testnet, there is an additional stage to pass through before you can become a provider on the Lava Network. Please fill out the [application form](https://lavanet.typeform.com/to/ORi3A13v?utm_source=becoming-a-lava-provider-for-solana&utm_medium=docs&utm_campaign=solana-pre-grant) for our Provider Incubation Program. Feel free to drop a line in our [Discord](https://discord.gg/UxujNZbW) once you’ve completed this step!

## 4. Setup your Provider on Lava Network 🌋

Once you’ve been accepted - to set up your provider on the Lava Network, you can refer to the [provider setup documentation](https://docs.lavanet.xyz/provider-setup?utm_source=running-a-solana-rpc-node&utm_medium=docs&utm_campaign=solana-pre-grant) available elsewhere in our docs. This should provide you with the necessary information to configure and operate your provider node.
