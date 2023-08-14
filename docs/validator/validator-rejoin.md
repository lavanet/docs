---
sidebar_position: 3
title: Rejoin after fork
slug: /validator-rejoin
---

# Rejoin as a validator after fork - lava-testnet-2
### 1. Prerequisites
Upgrade to Go version v1.20.5 (https://go.dev/dl/go1.20.5.linux-amd64.tar.gz)

### Backup keys (WARNING) - this is not a mandatory step but it's recommeneded to be on the safe side
* Backup the private validator key file under ~/.lava/config (priv_validator_key.json)
* Backup the node key under ~/.lava/config (node_key.json)
* Backup account keys using the following commands:

```bash
ACCOUNT_NAME=?
STRONG_PASSWORD=?
lavad keys export $ACCOUNT_NAME --keyring-backend test <<< "$STRONG_PASSWORD" > $ACCOUNT_NAME.key
```

### 3. Reset your node

Reset the data folder by running the following command:

```bash
lavad tendermint unsafe-reset-all
```

### 4. New Genesis

Download the new genesis file under `~/.lava/config`. The file can be downloaded from https://github.com/lavanet/lava-config/blob/main/testnet-2/genesis_json/genesis.json


### 5. Download and locate the new binary version:

```bash
cd ~/.lava/
sudo rm -rf ~/.lava/cosmovisor
wget https://lava-binary-upgrades.s3.amazonaws.com/testnet-2/cosmovisor-upgrades/cosmovisor-upgrades.zip
unzip cosmovisor-upgrades.zip
rm cosmovisor-upgrades.zip
mv cosmovisor-upgrades cosmovisor
```

### 6. Update node configuration files:

Check the following variables are aligned as follows:

### config.toml:
timeout_commit = "30s"
timeout_propose = "1s"
timeout_precommit = "1s"
timeout_precommit_delta = "500ms"
timeout_prevote = "1s"
timeout_prevote_delta = "500ms"
timeout_propose_delta = "500ms"
skip_timeout_commit = false

### client.toml:
broadcast-mode = "sync"

### 7. Start the node and make sure that blocks are advancing

```bash
sudo systemctl start cosmovisor
```

### 8. Start the node and make sure that blocks are advancing

```bash
sudo journalctl -u cosmovisor -f
```
### 9. Verify you're running the new chain (should get value true)

```bash
lavad status | jq -r '.NodeInfo.network == "lava-testnet-2"'
```