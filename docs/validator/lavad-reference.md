---
sidebar_position: 2
title: lavad reference
slug: /lavad-reference
---

A collection of useful commands for the `lavad` binary. 

## Lavad version and upgrades

Check the `lavad` version:

```bash
lavad --version
```

Upgrade the `lavad` version:

```bash
# Get the preferred lavad version:
git clone https://github.com/lavanet/lava.git
cd lava
git checkout v5.2.0

# Install the binary
export LAVA_BINARY=lavad
make build
```

## Key management

List keys:
```bash
lavad keys list
```

Add new key:
```bash
ACCOUNT_NAME="account_name_here"
lavad keys add $ACCOUNT_NAME
```

Recover existing key:
```bash
ACCOUNT_NAME="account_name_here"
lavad keys add $ACCOUNT_NAME --recover
```

Check wallet balance:
```bash
YOUR_ADDRESS=$(lavad keys show -a $ACCOUNT_NAME)
lavad q bank balances $(lavad keys show $YOUR_ADDRESS -a)
```

## Validator management

Create new validator

```bash
lavad tx staking create-validator
```

Update existing validator

```
lavad tx staking edit-validator
```

## Maintenance

Check sync status:
```bash
lavad status | jq .SyncInfo.catching_up
```