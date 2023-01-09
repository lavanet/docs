---
sidebar_position: 2
title: Setup
slug: /validator-manual
---

# Run Validator - Manual setup
### 1. Install node (`lavad`) & Join network {#lavad}
Running as a validator requires a Lava Node running, Please refer to [our guide for joining **Testnet**](testnet) for details.

### 2. Prepare an account & Fund it {#account}
Lava account and wallets are standard Cosmos. Learn more in [Account & Wallet section](wallet).

Now that you decided you want to turn your node into a validator, you will first need to add a wallet to your keyring ([FAQ: what is a keyring](faq#keyring)).

While you may use your seed phrase to import an existing wallet, we'll make a new one in this scenario.
replace $ACCOUNT_NAME with a name of your choosing:

```bash
//with cosmovizor
current_lavad_binary="$HOME/.lava/cosmovisor/current/bin/lavad"
//without cosmovizor
current_lavad_binary="$HOME/go/bin/lavad"
//or both
current_lavad_binary=$(which lavad)
ACCOUNT_NAME="name_here"
$current_lavad_binary keys add $ACCOUNT_NAME
```

:::danger
Ensure you write down the mnemonic as you can not recover the wallet without it. 
:::

To ensure your wallet was saved to your keyring, look for the `KEY_NAME` is in your keys list:

```bash
$current_lavad_binary keys list
```

The last thing needed before initializing the validator is to obtain your **validator public** key which was created when you first initialized your node. To obtain your validator pubkey:

```bash
$current_lavad_binary tendermint show-validator
```

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`
3. Your validator pubkey

♻ Save those details as we make sure to automatically airdrop you with LAVA test tokens as soon as we restart the testnet.

:::

#### Faucet

Get your account funded through [the faucet](faucet)

### 3. Stake & start validating {#stake}

Once your account is funded, run this to stake and start validating.

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

3. Stake validator

Here's an example with Values which starts with a stake of `50000000ulava`.
Replace `<<moniker_node>>` With a human readable name you choose for your validator.

```bash
$current_lavad_binary tx staking create-validator \
    --amount="50000000ulava" \
    --pubkey=$($current_lavad_binary tendermint show-validator --home "$HOME/.lava/") \
    --moniker="<<moniker_node>>" \
    --chain-id=lava-testnet-1 \
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

4. Verify validator setup

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
