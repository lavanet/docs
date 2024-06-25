---
sidebar_position: 2
slug: /mainnet-manual
title: Option B - Without Cosmovisor
---
import RoadmapItem from '@site/src/components/RoadmapItem';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Join testnet - Manual setup

This page will walk you through the manual installation of the node and joining the network.

Note that it does **not** include the "Cosmovisor" tool, hence once you install the first genesis binary, you will need to incrementally upgrade your node, as described in [upgrades](#upgrades).

## Prerequisites

1. Verify [hardware requirements](reqs) are met
2. Install package dependencies
    - Note: You may need to run as `sudo`
    - Required packages installation
        
        ```bash
        ### Packages installations
        sudo apt update # In case of permissions error, try running with sudo
        sudo apt install -y unzip logrotate git jq sed wget curl coreutils systemd
        # Create the temp dir for the installation
        temp_folder=$(mktemp -d) && cd $temp_folder
        ```
        
    - Go installation
        
        ```bash
        ### Configurations
        go_package_url="https://go.dev/dl/go1.22.1.linux-amd64.tar.gz"
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
        

## 1. Set up a local node

### Download app configurations

- Download setup configuration
    
    Download the configuration files needed for the installation
    
    ```bash
    # Download the installation setup configuration
    git clone https://github.com/lavanet/lava-config.git
    cd lava-config/mainnet-1
    # Read the configuration from the file
    # Note: you can take a look at the config file and verify configurations
    source setup_config/setup_config.sh
    ```
    
- Set app configurations
        
    Copy lavad default config files to config Lava config folder
    
    ```bash
    echo "Lava config file path: $lava_config_folder"
    mkdir -p $lavad_home_folder
    mkdir -p $lava_config_folder
    cp default_lavad_config_files/* $lava_config_folder
    ```
    

### Set the genesis file

- Set the genesis JSON file in the configuration folder
    
    ```bash
    # Copy the genesis.json file to the Lava config folder
    cp genesis_json/genesis.json $lava_config_folder/genesis.json
    ```

## 2. Join the Lava Testnet

### Copy the genesis binary

- Set the lavad binary location and copy the genesis binary to it

    ```bash
    # Set and create the lavad binary path
    lavad_binary_path="$HOME/go/bin/"
    mkdir -p $lavad_binary_path
    # Download the genesis binary to the lava path
    wget -O ./lavad "https://github.com/lavanet/lava/releases/download/v0.33.0/lavad-v0.33.0-linux-amd64"
    chmod +x lavad
    # Lavad should now be accessible from PATH, to verify, try running
    cp lavad /usr/local/bin
    # In case it is not accessible, make sure $lavad_binary_path is part of PATH (you can refer to the "Go installation" section)
    lavad --help # Make sure you can see the lavad binary help printed out
    ```

### Start running the node using the genesis binary

- Create a systemd service to run the Lava node

    ```bash
    # Create systemd unit file with logrotate
    echo "[Unit]
    Description=Lava Node
    After=network-online.target
    [Service]
    User=$USER
    ExecStart=$(which lavad) start --home=$lavad_home_folder --p2p.seeds $seed_node
    Restart=always
    RestartSec=180
    LimitNOFILE=infinity
    LimitNPROC=infinity
    [Install]
    WantedBy=multi-user.target" >lavad.service
    sudo mv lavad.service /lib/systemd/system/lavad.service
    ```

### Download the latest Lava data snapshot (_optional_) {#snapshots} 

- [KJnodes](https://services.kjnodes.com/mainnet/lava/snapshot)
- [NDnodes](https://services.ndnodes.com//lava-network/snapshot/)
- [0base](https://snapshot.0base.dev/) (updated every 12h)
- [Siriusnodes](https://lava.siriusnodes.org/snapshot) (updated every 3 days)
- [BwareLabs](https://bwarelabs.com/snapshots/lava)
- [AKNodes](https://services.aknodes.com/mainnet-networks/lava/sync)

### Service start and validation

- Configure the lavad service to run on boot, and start it

    ```bash
    # Enable the lavad service so that it will start automatically when the system boots
    sudo systemctl daemon-reload
    sudo systemctl enable lavad.service
    sudo systemctl restart systemd-journald
    sudo systemctl start lavad
    ```

- Check the state of the lavad service
    
    ```bash
    sudo systemctl status lavad
    # To view the service logs
    sudo journalctl -u lavad -f
    ```

## 3. Upgrades {#upgrades}
Lava blockchain upgrades requires you to update `lavad`. This guide covers the manual steps for doing so, assuming you do not use Cosmovisor.

### How to know there's an upgrade?

Once you have joined the Lava testnet, and your node has started syncing, you may have noticed an error message such as:

```bash
panic: UPGRADE "XYZ" NEEDED at height: 12345
```

This message specifies that it was agreed to upgrade to a new version at a certain height of the network. Note: When using a cosmovisor setup, the upgrade is being taken care of automatically for you.

This situation requires a different binary (`lavad`) to work with, the process is as specified below:

1. You have joined the network using the genesis binary
2. The node has started to sync
3. **An error of a needed upgrade** 👈 You are here
4. Manually upgrade the node to work with the new binary
5. Node continues to sync with the new binary

### Upgrades list history

Below, you can find tracking of the required upgrade for block height. 
Versions are tracked in [Lava git](https://github.com/lavanet/lava) (build from source or use the release page). 

<Tabs>
<TabItem value="lava-mainnet-1" label="lava-mainnet-1">

| Version name | Block height
| --- | --- |
| v0.33.0 | genesis |
| v0.34.0 | 375000 |
| v0.35.0 | 413000 |
| v1.0.1  | 451000 |

</TabItem>

</Tabs>

### Steps for upgrading your node

1. Set up the configurations required for the process

```bash
# Upgrade configurations
temp_folder=$(mktemp -d) && cd $temp_folder
required_upgrade_name="v0.21.1.2" # CHANGE THIS
upgrade_binary_url="https://github.com/lavanet/lava/releases/download/$required_upgrade_name/lavad-$required_upgrade_name-linux-amd64"
```


2. Kill all current lavad processes

```bash
source ~/.profile
# If using lavad as a service, run
sudo systemctl stop lavad
```

3. Download the binary and replace the current `lavad`

```bash
# Download the binary and replace it with the current one
wget "$upgrade_binary_url" -q -O $temp_folder/lavad
chmod +x $temp_folder/lavad

# Replace the current lava binary with the upgraded binary
sudo cp $temp_folder/lavad $(which lavad)
```

4. Run the lava node

```bash
# Re-start the stopped lavad service
sudo systemctl start lavad
```

5. Verify the node continues to sync from the latest block height

```bash
# Check if the node is currently in the process of catching up
lavad status | jq .SyncInfo.catching_up
# Check the lavad process logs
sudo journalctl -u lavad -f
```

## Welcome to Lava Mainnet 🌋

:::tip Joined Mainnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-manual#account)

:::

