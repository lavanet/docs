---
sidebar_position: 2
slug: /mainnet-manual-cosmovisor
title: Run mainnet nodes
---
import RoadmapItem from '@site/src/components/RoadmapItem';
import Admonition from '@theme/Admonition';

# Join Lava Mainnet
## 1. Setup working environment


1. Verify [hardware requirements](reqs) are met.
2. Update the system and install dependencies:

    :::note
    You may need to run as `sudo`
    :::
    - Install required packages:
        
        ```bash
        ### Packages installations

        sudo apt update 
        sudo apt install -y unzip logrotate git jq lz4 sed wget curl coreutils make gcc 
        sudo apt -qy upgrade
        
    - Install Go:
        
        ```bash
        ### Configurations
        go_package_url="https://go.dev/dl/go1.23.3.linux-amd64.tar.gz"
        go_package_file_name=${go_package_url##*\/}

        # Download Go
        wget -q $go_package_url
        # Unpack the Go installation file
        sudo tar -C /usr/local -xzf $go_package_file_name

        # Environment adjustments
        echo "export PATH=\$PATH:/usr/local/go/bin" >>~/.profile
        echo "export PATH=\$PATH:\$(go env GOPATH)/bin" >>~/.profile
        source ~/.profile
        ```
        
    - Verify installation:
        
        
        1. You can verify the installed go version by running: 

            ```bash
            go version
            ```
        
        2. Verify that `GOPATH` includes `$HOME/go`:
            ```bash
            go env GOPATH
            ```

            If `$HOME/go` isn't included, add it by running:

            ```bash
            export GOPATH=$HOME/go
            ```
        
        3. Verify that your PATH include `$HOME/go/bin`:
            ```bash
            echo $PATH
            ```
        

## 2. Set your moniker

Set your moniker name. You can change your moniker in the future.

```
MONIKER="YOUR_MONIKER_NAME"
```

## 3. Install Lava binaries

To run the Lava mainnet node, you will need a `lavad` binary installed on your machine:

```
#Download lavad
cd $HOME
git clone https://github.com/lavanet/lava.git
cd lava
git checkout v5.2.0


# Build binaries
export LAVA_BINARY=lavad
make build


# Prepare binaries for Cosmovisor
mkdir -p $HOME/.lava/cosmovisor/genesis/bin
mv build/lavad $HOME/.lava/cosmovisor/genesis/bin/
rm -rf build


# Create application symlinks
ln -s $HOME/.lava/cosmovisor/genesis $HOME/.lava/cosmovisor/current -f
sudo ln -s $HOME/.lava/cosmovisor/current/bin/lavad /usr/local/bin/lavad -f
```

:::note
You can always set a specific version of `lavad` binary as described in [`lavad` reference.](../../lavad-reference.md#lavad-version-and-upgrades)
:::

## 4. Set up Cosmovisor service 

Install cosmovisor to ensure any future upgrades happen flawlessly. To install Cosmovisor:

```bash
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.6.0

```

Create the service

```bash
sudo tee /etc/systemd/system/lava.service > /dev/null << EOF
[Unit]
Description=lava node service
After=network-online.target

[Service]
User=$USER
ExecStart=$(which cosmovisor) run start
Restart=on-failure
RestartSec=10
LimitNOFILE=65535
Environment="DAEMON_HOME=$HOME/.lava"
Environment="DAEMON_NAME=lavad"
Environment="UNSAFE_SKIP_BACKUP=true"

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable lava.service
```

## 5. Initialize the chain

#### Initialize the chain setup:
```bash
lavad init $MONIKER --chain-id lava-mainnet-1
```


#### Download genesis and addrbook
```
curl -Ls https://snapshots.kjnodes.com/lava/genesis.json > $HOME/.lava/config/genesis.json
curl -Ls https://snapshots.kjnodes.com/lava/addrbook.json > $HOME/.lava/config/addrbook.json
```

#### Configure external seeds
```bash
sed -i -e "s|^seeds *=.*|seeds = \"400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc@lava.rpc.kjnodes.com:14459\"|" $HOME/.lava/config/config.toml
```

#### Set minimum gas price
```bash
sed -i -e "s|^minimum-gas-prices *=.*|minimum-gas-prices = \"0.000000001ulava\"|" $HOME/.lava/config/app.toml
```

#### Set pruning
```bash
sed -i \
  -e 's|^pruning *=.*|pruning = "custom"|' \
  -e 's|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|' \
  -e 's|^pruning-keep-every *=.*|pruning-keep-every = "0"|' \
  -e 's|^pruning-interval *=.*|pruning-interval = "19"|' \
  $HOME/.lava/config/app.toml
```

#### Update chain specific configuration
```bash
sed -i \
  -e 's/timeout_commit = ".*"/timeout_commit = "30s"/g' \
  -e 's/timeout_propose = ".*"/timeout_propose = "1s"/g' \
  -e 's/timeout_precommit = ".*"/timeout_precommit = "1s"/g' \
  -e 's/timeout_precommit_delta = ".*"/timeout_precommit_delta = "500ms"/g' \
  -e 's/timeout_prevote = ".*"/timeout_prevote = "1s"/g' \
  -e 's/timeout_prevote_delta = ".*"/timeout_prevote_delta = "500ms"/g' \
  -e 's/timeout_propose_delta = ".*"/timeout_propose_delta = "500ms"/g' \
  -e 's/skip_timeout_commit = ".*"/skip_timeout_commit = false/g' \
  $HOME/.lava/config/config.toml
```

:::note
At any moment you can edit the values in the configuration files by navigatin to `$HOME/.lava/config/app.toml` and `$HOME/.lava/config/config.toml`.
:::


## 6. Download the latest snapshot
```bash
curl -L https://snapshots.kjnodes.com/lava/snapshot_latest.tar.lz4 | tar -Ilz4 -xf - -C $HOME/.lava
[[ -f $HOME/.lava/data/upgrade-info.json ]] && cp $HOME/.lava/data/upgrade-info.json $HOME/.lava/cosmovisor/genesis/upgrade-info.json
```

## 7. Start the service and check the logs
```bash
sudo systemctl start lava.service && sudo journalctl -u lava.service -f --no-hostname -o cat
```

## 8. Verify the setup

#### Verify service setup

Make sure `cosmovisor` is running by checking the state of the service:

Check the status of the service
```bash
sudo systemctl status lava
```
To view detailed the service logs - to escape, hit CTRL+C

```bash
sudo journalctl -u lava -f
```

#### Verify node status

Check if the node is currently in the process of catching up:

```bash
# Check if the node is currently in the process of catching up
lavad status | jq .SyncInfo.catching_up
```

If the outcome of this command is `false` it means that your node has already caught up and you are ready to move to the next step.

## Welcome to Lava Mainnet 🌋

:::tip Joined Mainnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-manual#account)

:::




