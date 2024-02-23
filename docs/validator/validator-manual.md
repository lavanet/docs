---
sidebar_position: 2
title: Setup
slug: /validator-manual
---

# Run Validator - Manual setup
### 1. Install node (`lavad`) & Join network {#lavad}
Running as a validator requires a Lava Node running, Please refer to [our guide for joining **Testnet**](testnet) for details.

### 2. Prepare an account & Fund it {#account}
If you don't have an account (wallet) on Lava yet, Refer to [creating new accounts](wallet#account) and the [faucet](faucet). 

### 3. Stake & start validating {#stake}

Once your account is funded, run this to stake and start validating.

0. Set the temporary variable `$current_lavad_binary` for the following operation.

With Option A - With Cosmovisor

```bash
current_lavad_binary=$HOME/.lava/cosmovisor/current/bin/lavad
```

With Option B - Without Cosmovisor

```bash
current_lavad_binary=lavad
```

1. Verify that your node has finished synching and it is caught up with the network

```bash
$current_lavad_binary status | jq .SyncInfo.catching_up
# Wait until you see the output: "false"
```

2. Verify that your account has funds in it in order to perform staking

```bash
# Make sure you can see your account name in the keys list
$current_lavad_binary keys list

# Make sure you see your account has Lava tokens in it
YOUR_ADDRESS=$($current_lavad_binary keys show -a $ACCOUNT_NAME)
$current_lavad_binary query \
    bank balances \
    $YOUR_ADDRESS \
    --denom ulava
```

3. Back up your validator's consensus key

   A validator participates in the consensus by sending a message signed by
   a consensus key which is automatically generated when you first run a node.
   You must create a backup of this consensus key in case that you migrate your
   validator to another server or accidentally lose access to your validator.

   A consensus key is stored as a json file in
   `$lavad_home_folder/config/priv_validator_key.json` by default, or a custom
   path specified in the parameter `priv_validator_key_file` of config.toml.

4. Stake validator

Here's an example with Values which starts with a stake of `50000000ulava`.
Replace `<<moniker_node>>` With a human readable name you choose for your validator.

```bash
$current_lavad_binary tx staking create-validator \
    --amount="50000000ulava" \
    --pubkey=$($current_lavad_binary tendermint show-validator --home "$HOME/.lava/") \
    --moniker="<<moniker_node>>" \
    --chain-id=lava-testnet-2 \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="10000" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --gas-prices="0.05ulava" \
    --home="$HOME/.lava/" \
    --from=$ACCOUNT_NAME
```

Once you have finished running the command above, if you see `code: 0` in the output, the command was successful

5. Verify validator setup

```bash
block_time=60
# Check that the validator node is registered and staked
validator_pubkey=$($current_lavad_binary tendermint show-validator | jq .key | tr -d '"')

$current_lavad_binary q staking validators | grep $validator_pubkey

# Check the voting power of your validator node - please allow 30-60 seconds for the output to be updated
sleep $block_time
$current_lavad_binary status | jq .ValidatorInfo.VotingPower | tr -d '"'
# Output should be > 0
```
