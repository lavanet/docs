---
sidebar_position: 2
slug: /mainnet-manual-cosmovisor
title: Option A - With Cosmovisor
---
import RoadmapItem from '@site/src/components/RoadmapItem';
import Admonition from '@theme/Admonition';

# Join mainnet - Manual setup with Cosmovisor
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
    wget -O  $lava_home_folder/cosmovisor/genesis/bin/lavad "https://github.com/lavanet/lava/releases/download/v0.33.0/lavad-v0.33.0-linux-amd64"
    chmod +x $lava_home_folder/cosmovisor/genesis/bin/lavad
    ```

    ```bash
    # Set the environment variables
    echo "# Setup Cosmovisor" >> ~/.profile
    echo "export DAEMON_NAME=lavad" >> ~/.profile
    echo "export CHAIN_ID=lava-mainnet-1" >> ~/.profile
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
    --chain-id lava-mainnet-1 \
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
    curl -Ls https://storage.googleapis.com/lavanet-public-asssets/tge/genesis.json > $lava_home_folder/config/genesis.json
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
    SEEDS="ebacd3e666003397fb685cd44956d33419219950@seed2.lava.chainlayer.net:26656,1105d3a3384edaa450f4f63c2b1ff08d366ee256@159.203.86.102:26656,f1caeaacfac32e4dd00916e8d912e1d834e94eb3@lava-seed.stakecito.com:26666,e4eb68c6fdfab1575b8794205caed47d4f737df4@lava-mainnet-seed.01node.com:26107,2d4db6b95804ea97e1f3655d043e6becf9bffc94@lava-seeds2.w3coins.io:11156,dcbfb490ea930fe9e8058089e3f6a14ca274c1c4@217.182.136.79:26656,e023c3892862744081360a99a2666e8111b196d3@38.242.213.53:26656,eafff29ec471bdd0985a9360b2c103997539c939@lava-seed.node.monster:26649,6a9a65d92b4820a5d198dd95743aa3059d0d3d4c@seed-lava.hashkey.cloud:26656"

    sed -i -e "s|^seeds *=.*|seeds = \"$SEEDS\"|" $lava_home_folder/config/config.toml
    ```

### State-Sync to latest Lava snapshot with KSYNC (_recommended_) {#snapshots}

You can state-sync to the latest available Lava state-sync snapshot archived by the [KYVE Network](https://kyve.network/) with the CLI tool [KSYNC](https://github.com/KYVENetwork/ksync).
To start you have to install the latest Lava binary version, you can find the latest ones here: https://github.com/lavanet/lava/releases. You can install the latest Lava binary
already in the correct Cosmosvisor upgrade directory and update the symlink `current` to the latest version. Verify it by running: `./cosmovisor run version`.

Next install KSYNC, if go1.22 is installed you can directly install it with:

```bash
go install github.com/KYVENetwork/ksync/cmd/ksync@latest
```

You can also build it from source:

```bash
git clone git@github.com:KYVENetwork/ksync.git
cd ksync
git checkout tags/vx.x.x -b vx.x.x
make build
cp build/ksync ~/go/bin/ksync
```

After KSYNC has been successfully installed and verified with `ksync version` you can state-sync to the latest available state-sync snapshot with the following command:

```bash
ksync state-sync --binary /path/to/lavad --chain-id kaon-1 -r
```

If you have installed the latest lava binary in cosmovisor you can also point the binary to cosmovisor:

```bash
ksync state-sync --binary /path/to/cosmovisor --chain-id kaon-1 -r
```

This will take around one minute, after that you can continue to p2p sync from the snapshot height. You can find the archived state-sync snapshots [here](https://app.kaon.kyve.network/#/pools/30) detailed
documentation regarding KSYNC [here](https://docs.kyve.network/access-data-sets/ksync/overview).

Finally, configure the Cosmovisor service to run on boot, and start it

```bash
# Enable the cosmovisor service so that it will start automatically when the system boots
sudo systemctl daemon-reload
sudo systemctl enable cosmovisor.service
sudo systemctl restart systemd-journald
sudo systemctl start cosmovisor
```

### Block-Sync from genesis up to live height for full and archival node (_optional_) {#genesis-sync}

You can skip this section if you have state-synced to live height already.

If you want to perform a full sync from genesis up to live height in order to operate a full or even
an archival Lava node you can block-sync all blocks which have been permanently archived by KYVE with KSYNC,
very similar to the state-sync section above. To continue, make sure that KSYNC is installed, the installation
steps are explained above and in the official KSYNC [documentation](https://docs.kyve.network/access-data-sets/ksync/overview).

Next install all Lava upgrades in cosmovisor, the full version history can be found
[here](https://github.com/cosmos/chain-registry/blob/master/lava/versions.json). If KSYNC should perform
all the upgrades automatically you need to have a systemd process configured which automatically restarts
KSYNC after an upgrade was executed, below you can find a template:

```ksync.service
[Unit]
Description=KSYNC deamon supervising the ksync sync process
After=network-online.target

[Service]
User=<user>
WorkingDirectory=$HOME
ExecStart=$HOME/ksync block-sync --binary="/path/to/cosmovisor" --chain-id="kaon-1" -y
Restart=always
RestartSec=10s
LimitNOFILE=infinity
Environment="DAEMON_NAME=<binary>"
Environment="DAEMON_HOME=$HOME/.<binary>"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=false"
Environment="DAEMON_LOG_BUFFER_SIZE=512"
Environment="UNSAFE_SKIP_BACKUP=true"

[Install]
WantedBy=multi-user.target
```

Please replace the user and the path to your cosmovisor with your actual values.
You can now reload the systemctl daemon:

```bash
sudo -S systemctl daemon-reload
```

and enable KSYNC as a service:

```bash
sudo -S systemctl enable ksync
```

You can now start KSYNC by executing:

```bash
sudo systemctl start ksync
```

Make sure to check that the service is running by executing:

```bash
sudo journalctl -u ksync -f
```

You can find another detailed example on how to sync from genesis with KSYNC [here](https://docs.kyve.network/access-data-sets/ksync/overview#example).

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

## Welcome to Lava Mainnet 🌋

:::tip Joined Mainnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-manual#account)

:::