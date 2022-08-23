---
sidebar_position: 2
slug: /node-build-source
---

# Build source

:::info Coming Soon 🚧
Source is not yet available publicly
:::

This page will explain how to install the `lavad` binary to your system from source

## Steps

### 1. Update system
```
sudo apt update
```

```
sudo apt upgrade --yes
```

### 2. Install build requirements
**Install make and gcc.**

```
sudo apt install git build-essential ufw curl jq snapd --yes
```

**Install go:**
```
wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.18.1
```

After installed, open new terminal to properly load go

### 3. Install `lavad` binary

```
cd $HOME
git clone https://github.com/lava/lava
cd lava
git checkout main
make install
```