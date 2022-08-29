---
sidebar_position: 2
title: Setup - Manual
slug: /validator-manual
---

### 1. Install node (`lavad`) & Join network {#lavad}
Running as a validator requires a Lava Node running, Please refer to [our guide for joining **Testnet**](testnet) for details.

### 2. Prepare an account & Fund it {#account}
Lava account and wallets are standard Cosmos. Learn more in [Account & Wallet section](wallet).

Now that you decided you want to turn your node into a validator, you will first need to add a wallet to your keyring ([FAQ: what is a keyring](faq#keyring)).

While you can add an existing wallet through your seed phrase, we will create a new wallet in this example (replace $KEY_NAME with a name of your choosing):

```bash
lavad keys add $KEY_NAME
```

:::danger
Ensure you write down the mnemonic as you can not recover the wallet without it. 
:::

To ensure your wallet was saved to your keyring, look for the WALLET_NAME is in your keys list:

```bash
lavad keys list
```

The last thing needed before initializing the validator is to obtain your **validator public** key which was created when you first initialized your node. To obtain your validator pubkey:

```bash
lavad tendermint show-validator
```

:::caution Pencils out 📝
Keep the newly created account info:
1. SECRET mnemonic phrase 🚨🤫🚨🤫🚨
2. Your public address, starts with `lava@`
3. Your validator pubkey

♻ Save those details as we make sure to automatically airdrop you with LAVA test tokens as soon as we restart the testnet.

:::

Now you can receive test LAVA tokens using our [faucets](faucet).

### 3. Stake & start validating {#stake}

Once your account is funded, run this to stake and start validating.

Note to set `$STAKE_AMOUNT` (currently `50000000ulava`) and `$KEY_NAME`:
```bash
lavad tx staking create-validator \
    --amount="$STAKE_AMOUNT" \
    --pubkey=$(lavad tendermint show-validator --home "$HOME/.lava/") \
    --chain-id=lava \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="10000" \
    --gas="auto" \
    --gas-adjustment "1.5" \
    --gas-prices="0.0025ulava" \
    --home="$HOME/.lava/" \
    --from=$KEY_NAME
```