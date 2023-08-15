---
sidebar_position: 3
title: Rejoin after Hard Fork
slug: /validator-rejoin
---

# Rejoin as a Validator after the Fork

In order for Lava Validators from `lava-testnet-1` to join `lava-testnet-2`, it is necessary to make some slight adjustments. This page is a guide for Validators who were participating in the network before the hard fork.

## 📋 Prerequisites

- 🔺 Upgrade to Go version [v1.20.5](https://go.dev/dl/go1.20.5.linux-amd64.tar.gz)


## 📝 Written Guide (~20m)


### 🗝️ Backup keys 

:::tip
Backing up keys is not strictly mandatory to rejoin, but it is recommended to prevent any loss.
:::

🔑 Steps:
* Backup the private validator key file under `~/.lava/config` (`priv_validator_key.json`)
* Backup the node key under `~/.lava/config` (`node_key.json`)
* Backup account keys using the following commands: 
```bash
    ACCOUNT_NAME=?
    STRONG_PASSWORD=?
    lavad keys export $ACCOUNT_NAME --keyring-backend test <<< "$STRONG_PASSWORD" > $ACCOUNT_NAME.key
```
<br />

### ♻️ Reset your node

Reset the data folder by running the following command:

```bash
lavad tendermint unsafe-reset-all
```

<br />

### 📥 Get new Genesis file

Download the new genesis file into `~/.lava/config`. The file can be downloaded from https://github.com/lavanet/lava-config/blob/main/testnet-2/genesis_json/genesis.json

<br />


### ⬇️ Download the new Binary Version

Input the following commands:

```bash
cd ~/.lava/
sudo rm -rf ~/.lava/cosmovisor
wget https://lava-binary-upgrades.s3.amazonaws.com/testnet-2/cosmovisor-upgrades/cosmovisor-upgrades.zip
unzip cosmovisor-upgrades.zip
rm cosmovisor-upgrades.zip
mv cosmovisor-upgrades cosmovisor
```

<br />

### 🔼 Update node configuration files

Check the following variables are set as follows:

<details> <summary> 🗎 config.toml</summary>
timeout_commit = "30s" <br/>
timeout_propose = "1s" <br/>
timeout_precommit = "1s" <br/>
timeout_precommit_delta = "500ms" <br/>
timeout_prevote = "1s" <br/>
timeout_prevote_delta = "500ms" <br/>
timeout_propose_delta = "500ms" <br/>
skip_timeout_commit = false
seed_node="3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0@testnet2-seed-node.lavanet.xyz:26656,e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d@testnet2-seed-node2.lavanet.xyz:26656"
</details>

<details> <summary> 🗎 client.toml </summary> 
broadcast-mode = "sync"
</details>

<br />

### 🚀 Start the node

 Use the `systemctl` command to start the node: 

```bash
sudo systemctl start cosmovisor
```


<br />

### 🗒️ Check the logs 

 Check the logs with `journalctl`:

```bash
sudo journalctl -u cosmovisor -f
```

Watch closely! Make sure that blocks are advancing as expected!
<br />

### ✔️ Verify the Chain

To verify you're running on the correct chain, input the following:

```bash
lavad status | jq -r '.NodeInfo.network == "lava-testnet-2"'
```

✅ You should get the true value! This is the final step. You are now running a validator on `lava-testnet-2`