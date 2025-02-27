---
sidebar_position: 2
slug: /testnet-manual-cosmovisor
title: Option A - With Cosmovisor
---
import RoadmapItem from '@site/src/components/RoadmapItem';
import Admonition from '@theme/Admonition';

# Join testnet - Manual setup with Cosmovisor
## Prerequisites

TODO: add hardware requirements here directly + simplify the guide


1. Verify [hardware requirements](reqs) are met
2. Install package dependencies
    - Note: You may need to run as `sudo`
    - Required packages installation
        
        ```bash
        ### Packages installations
        sudo apt update # in case of permissions error, try running with sudo
        sudo apt install -y unzip logrotate git jq lz4 sed wget curl coreutils systemd
        # Create the temp dir for the installation
        temp_folder=$(mktemp -d) && cd $temp_folder
        ```
        
    - Go installation
        
        ```bash
        ### Configurations
        go_package_url="https://go.dev/dl/go1.20.5.linux-amd64.tar.gz"
        go_package_file_name=${go_package_url##*\/}
        # Download GO
        wget -q $go_package_url
        # Unpack the GO installation file
        sudo tar -C /usr/local -xzf $go_package_file_name
        # Environment adjustments
        echo "export PATH=\$PATH:/usr/local/go/bin" >>~/.profile
        echo "export PATH=\$PATH:\$(go env GOPATH)/bin" >>~/.profile
        source ~/.profile
        ```
        
    - Installation verifications
        
        
        1. You can verify the installed go version by running: `go version`
        
        2. The command `go env GOPATH` should include `$HOME/go`
        If not, then, `export GOPATH=$HOME/go`
        
        3. PATH should include `$HOME/go/bin`
        To verify PATH, run `echo $PATH`
        

## 1. Set up the Lava node

The following sections will describe how to install Cosmovisor for automating the upgrades process.

### Set up Cosmovisor {#cosmovisor}

- Set up cosmovisor to ensure any future upgrades happen flawlessly. To install Cosmovisor:
    
    ```bash
    go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
    # Create the Cosmovisor folder and copy config files to it
    export lava_home_folder="$HOME/.lava"
    mkdir -p $lava_home_folder/cosmovisor/genesis/bin/
    # Download the genesis binary
    wget -O  $lava_home_folder/cosmovisor/genesis/bin/lavad "https://github.com/lavanet/lava/releases/download/v0.21.1.2/lavad-v0.21.1.2-linux-amd64"
    chmod +x $lava_home_folder/cosmovisor/genesis/bin/lavad
    ```

    ```bash
    # Set the environment variables
    echo "# Setup Cosmovisor" >> ~/.profile
    echo "export DAEMON_NAME=lavad" >> ~/.profile
    echo "export CHAIN_ID=lava-testnet-2" >> ~/.profile
    echo "export DAEMON_HOME=$lava_home_folder" >> ~/.profile
    echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=true" >> ~/.profile
    echo "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.profile
    echo "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.profile
    echo "export UNSAFE_SKIP_BACKUP=true" >> ~/.profile
    source ~/.profile
    ```

    ```bash
    # Initialize the chain
    $lava_home_folder/cosmovisor/genesis/bin/lavad init \
    my-node \
    --chain-id lava-testnet-2 \
    --home $lava_home_folder
    ```

    <Admonition type="caution">
        Please note that cosmovisor will throw an error ⚠️ This is ok. The following error will be thrown,
        lstat /home/ubuntu/.lava/cosmovisor/current/upgrade-info.json: no such file or directory
    </Admonition>

    ```bash
    cosmovisor version
    ```
    
    Create the Cosmovisor systemd unit file
    
    ```bash
    echo "[Unit]
        Description=Cosmovisor daemon
        After=network-online.target
        [Service]
        Environment="DAEMON_NAME=lavad"
        Environment="DAEMON_HOME=$lava_home_folder"
        Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
        Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"
        Environment="DAEMON_LOG_BUFFER_SIZE=512"
        Environment="UNSAFE_SKIP_BACKUP=true"
        User=$USER
        ExecStart=${HOME}/go/bin/cosmovisor start --home=$lava_home_folder
        Restart=always
        RestartSec=3
        LimitNOFILE=infinity
        LimitNPROC=infinity
        [Install]
        WantedBy=multi-user.target
    " > cosmovisor.service
    
    sudo mv cosmovisor.service /lib/systemd/system/cosmovisor.service
    ```

### Download the genesis file

- Set the genesis file in the configuration folder

    ```bash
    curl -Ls https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-2/genesis_json/genesis.json > $lava_home_folder/config/genesis.json
    ```

- Set up configuration files

    ```bash
    # Assuming lava is installed in it's default folder
    # Determine OS
    os_name=$(uname)
    case "$(uname)" in
    Darwin)
        SED_INLINE="-i ''" ;;
    Linux)
        SED_INLINE="-i" ;;
    *)
        echo "unknown system: $(uname)"
        exit 1 ;;
    esac

    # Edit config.toml file
    sed $SED_INLINE \
    -e 's|^timeout_propose =.*|timeout_propose = "10s"|' \
    -e 's|^timeout_propose_delta =.*|timeout_propose_delta = "500ms"|' \
    -e 's|^timeout_prevote =.*|timeout_prevote = "1s"|' \
    -e 's|^timeout_prevote_delta =.*|timeout_prevote_delta = "500ms"|' \
    -e 's|^timeout_precommit =.*|timeout_precommit = "500ms"|' \
    -e 's|^timeout_precommit_delta =.*|timeout_precommit_delta = "1s"|' \
    -e 's|^timeout_commit =.*|timeout_commit = "15s"|' \
    -e 's|^create_empty_blocks =.*|create_empty_blocks = true|' \
    -e 's|^create_empty_blocks_interval =.*|create_empty_blocks_interval = "15s"|' \
    -e 's|^timeout_broadcast_tx_commit =.*|timeout_broadcast_tx_commit = "151s"|' \
    -e 's|^skip_timeout_commit =.*|skip_timeout_commit = false|' \
    $lava_home_folder/config/config.toml

    # Edit app.toml file
    sed $SED_INLINE \
    -e 's|^pruning = .*|pruning = "nothing"|' \
    -e "s|enable = .*|enable = true|" \
    -e 's|^minimum-gas-prices = .*|minimum-gas-prices = "0.000000001ulava"|' \
    $lava_home_folder/config/app.toml
    ```

- Configure external seeds

    ```bash
    SEEDS="3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0@testnet2-seed-node.lavanet.xyz:26656,e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d@testnet2-seed-node2.lavanet.xyz:26656"

    sed -i -e "s|^seeds *=.*|seeds = \"$SEEDS\"|" $lava_home_folder/config/config.toml
    ```

### Download the latest Lava data snapshot (_optional_) {#snapshots}

_Coming soon_

### Enable and start the Cosmovisor service
    
- Configure the Cosmovisor service to run on boot, and start it
    ```bash
    # Enable the cosmovisor service so that it will start automatically when the system boots
    sudo systemctl daemon-reload
    sudo systemctl enable cosmovisor.service
    sudo systemctl restart systemd-journald
    sudo systemctl start cosmovisor
    ```
    

## 3. Verify

### Verify `cosmovisor` setup

Make sure `cosmovisor` is running by checking the state of the cosmovisor service:

- Check the status of the service
    ```bash
    sudo systemctl status cosmovisor
    ```
- To view the service logs - to escape, hit CTRL+C

    ```bash
    sudo journalctl -u cosmovisor -f
    ```

### Verify node status

Note the location of `lavad` now exists under `cosmovisor` path:

```bash
# Check if the node is currently in the process of catching up
$HOME/.lava/cosmovisor/current/bin/lavad status | jq .SyncInfo.catching_up
```

## Welcome to Lava Testnet 🌋

:::tip Joined Testnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-manual#account)

:::
