---
sidebar_position: 2
title: Be a Validator
---
# Power-up Lava as a Validator
Lava blockchain uses Proof-of-stake (PoS) as the consensus mechanism, based on [Tendermint](https://tendermint.com/). Validators participate in the network by verifying new blocks to earn rewards.

LAVA holders are incentivized to stake their tokens to secure Lava while receiving a reward in return.
Validators earn LAVA from the creation of new blocks and the transaction fees, and on the other hand - slashing may occur to punish bad actors, all facilitated by Tendermint's consensus protocol. 

_Note_: This does not cover Delegating LAVA to validators

## Starting a Validator
This section will help you start as a validator, step by step.
For additional help see the [FAQ Section](faq.md)

:::tip Manual or Auto?
All the steps below are laid out as **manual steps** with links for further info, for you to get familiarized with the setup.

If you want to use the fully automatic path, follow the "Script 🚀" signs.
:::

### 1. Install node (`lavad`) & Join network {#lavad}
Running as a validator requires a Lava Node running, Please refer to **[install node](lava-node-intro.md)** section for install.

With `lavad` installed, sync it to [testnet](./lava-blockchain/join-testnet.md) network.


<details>

<summary>SCRIPT 🚀</summary>


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

</details>

### 2. Prepare an account & Fund it {#account}
Lava account and wallets are standard Cosmos. Learn more in [Account & Wallet section](wallet).

Now that you decided you want to turn your node into a validator, you will first need to add a wallet to your keyring ([FAQ: what is a keyring](faq#keyring)).

While you can add an existing wallet through your seed phrase, we will create a new wallet in this example (replace $KEY_NAME with a name of your choosing):

```
lavad keys add $KEY_NAME
```

:::danger
Ensure you write down the mnemonic as you can not recover the wallet without it. 
:::



To ensure your wallet was saved to your keyring, look for the WALLET_NAME is in your keys list:

```
lavad keys list
```

The last thing needed before initializing the validator is to obtain your **validator public** key which was created when you first initialized your node. To obtain your validator pubkey:

```
lavad tendermint show-validator
```

Now you can send test LAVA tokens using our [faucets](./lava-blockchain/faucet.mdx).

<details>

<summary>SCRIPT 🚀</summary>

If you don't have an account already, you can use this script to create one for you:

```bash
curl --location --request GET 'https://get.lavanet.xyz/pnet_run_node' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_node.sh && \
chmod +x 01_run_node.sh && \
./01_run_node.sh production create_account
```

Script finished? Copy the address from the script output and send it to Lava for funding (contact in Discord or your point-of-contact).

(Example address: `lava@1xtlgz4nugxducwscc7zm2lkumagluf6jj8m599`)
</details>

### 3. Stake & start validating {#stake}

Once your account is funded, run this to stake and start validating.
Note to set `$STAKE_AMOUNT` and `$KEY_NAME`.
```
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
    --from=$KEY_NAME
```

/// Needed:     --home="$HOME/.lava/" \ ?

<details>

<summary>SCRIPT 🚀</summary>

```bash
curl --location --request GET 'https://get.lavanet.xyz/pnet_run_node' \
--header 'Authorization: Basic OHRmem1Ta2VuSE1CajhwcDpSRXBhYWZmS2I3TTNQNlBt' > 01_run_node.sh && \
chmod +x 01_run_node.sh && \
./01_run_node.sh production stake_validator
```

</details>