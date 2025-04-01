---
sidebar_position: 2
title: Setup
slug: /validator-manual
---

# Run Validator - Manual setup
### 1. Run a Lava Node {#lavad}
Running as a validator requires a Lava Node running. Refer to guides for joining [**Testnet**](./lava-nodes/testnet/join-testnet-manual-cosmovisor.md) and [**Mainnet**](./lava-nodes/mainnet/join-mainnet-manual-cosmovisor.md) for details.

### 2. Prepare an account & Fund it {#account}
To run a validator process you will need a CLI wallet set up and funded. If you don't have an account (wallet) on Lava yet, refer to [creating new accounts](../intro/wallet.mdx) to create one.


### 3. Stake & start validating {#stake}

Once your account is funded, run this to stake and start validating.

**1. Verify that your node has finished synching and it is caught up with the network**

```bash
lavad status | jq .SyncInfo.catching_up
# Wait until you see the output: "false"
```

**2. Verify that your account has funds in it in order to perform staking:**

```bash
# Make sure you can see your account name in the keys list
lavad keys list

# Confirm that your account has Lava tokens in it (replace $ACCOUNT_NAME with your account name)

YOUR_ADDRESS=$(lavad keys show -a $ACCOUNT_NAME)

lavad query bank balances $YOUR_ADDRESS --denom ulava
```

**3. Back up your validator's consensus key**

A validator participates in the consensus by sending a message signed by
a consensus key which is automatically generated when you first run a node.
You must create a backup of this consensus key in case that you migrate your
validator to another server or accidentally lose access to your validator.

A consensus key is stored as a json file in `$HOME/.lava/config/priv_validator_key.json` by default, or a custom path specified in the parameter `priv_validator_key_file` of `config.toml`.



4. **Stake your validator**

Here's an example with values which starts with a stake of `50000000ulava`.
Replace `<<moniker_node>>` with a human readable name you choose for your validator. The amount you will have to stake to become an active provider has to be more than the [last bonded validator](https://lava.explorers.guru/validators).

:::caution
Please ensure that you replace `{CHAIN_ID}` with the appropriate value depending on your target network:

- For Lava Testnet: `lava-testnet-2`
- For Lava Mainnet: `lava-mainnet-1`
:::

```bash
lavad tx staking create-validator \
    --amount="50000000ulava" \
    --pubkey=$(lavad tendermint show-validator --home "$HOME/.lava/") \
    --moniker="<<moniker_node>>" \
    --chain-id={CHAIN_ID} \
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

Once you have finished running the command above, if you see `code: 0` in the output, the command was successful.

**5. Verify validator setup**

Check that the validator node is registered and staked
```bash
block_time=60

validator_pubkey=$(lavad tendermint show-validator | jq .key | tr -d '"')

lavad q staking validators | grep $validator_pubkey

```

Check the voting power of your validator node - please allow 30-60 seconds for the output to be updated:
```bash
sleep $block_time

lavad status | jq .ValidatorInfo.VotingPower | tr -d '"'
```

The output of the command aboce should be > 0. If you see that, your validator is running correctly and has the specific voting power.