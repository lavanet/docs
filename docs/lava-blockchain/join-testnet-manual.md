---
sidebar_position: 2
slug: /testnet-manual
title: Setup - Manual
---
# Join testnet - Manual setup
## Prerequisites

1. Verify [hardware requirements](reqs) are met
2. Install package dependencies
    - Note: You may need to run as `sudo`
    - Required packages installation
        
        ```bash
        ### Packages installations
        apt update # in case of permissions error, try running with sudo
        apt install -y unzip logrotate git jq sed wget curl coreutils systemd
        ```
        
    - Go installation
        
        ```bash
        ### Configurations
        go_package_url="https://go.dev/dl/go1.18.linux-amd64.tar.gz"
        go_package_file_name=${go_package_url##*\/}
        
        # Download the GO installation file
        cd $HOME
        wget -q $go_package_url
        # Clean up the folder and unpack the GO installation file
        sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf $go_package_file_name >>"$HOME/.lava_validator_setup.log"
        # Environment adjustments
        echo "export PATH=\$PATH:/usr/local/go/bin" >>~/.profile
        echo "export PATH=\$PATH:\$(go env GOPATH)/bin" >>~/.profile
        source ~/.profile
        ```
        
    - Verifications (optional)
        
        ```
        1. You can verify the installed go version by running: "go version"
        
        2. The command "go env GOPATH" should include $HOME/go
        If not, then, export GOPATH=$HOME/go
        
        3. PATH should include $HOME/go/bin
        ```
        

## 1. Set up a local node

### A. Download app configurations

- Download setup configuration
    
    Set up the variables needed for the installation commands
    
    ```bash
    desired_env="production"
    temp_dir="/tmp/lava_install_dir"
    s3_creds_user="JzMh9LhdcifyMeCF"
    s3_creds_pass="PY7RfcGyh6L8QHCN"
    config_url="https://lava-pnet0-setup.s3.amazonaws.com/config/setup_config_"
    ```
    
    Download the configuration files needed for the installation
    
    ```bash
    # Create the temp dir for the installation
    mkdir -p $temp_dir
    # Download the installation setup configuration
    curl -s --user-agent "$s3_creds_user" --referer "$s3_creds_pass" "$config_url$desired_env.sh" >$temp_dir/"setup_config_$desired_env.sh"
    # Read the configuration from the file
    source $temp_dir/setup_config_$desired_env.sh
    # Note: you can take a look at the config file and verify configurations
    ```
    
- Download app configurations
    
    Clear the folder app before starting the installation
    
    ```bash
    rm -rf ~/.lava
    # Create the app config folder - This env is sourced from setup_config_$desired_env.sh
    mkdir -p $lava_config_folder
    ```
    
    Download and configure the lavad default config files
    
    ```bash
    curl -s --user-agent "$s3_creds_user" --referer "$s3_creds_pass" "$default_config_files_url" >$temp_dir/lavad_config.zip
    unzip -o $temp_dir/lavad_config.zip -d $lava_config_folder >>"$HOME/.lava_validator_setup.log"
    ```
    

### B. Download genesis file

- Download the network genesis file
    
    ```bash
    # Download the genesis.json file
    curl -s --user-agent "$s3_creds_user" --referer "$s3_creds_pass" "$genesis_url" >$lava_config_folder/genesis.json
    ```
    

### C. Download binary

- Download the latest Lava binary
    
    ```bash
    # Create the folder where the binary will be located on the system
    mkdir -p $HOME/go/bin/
    # Downloading the latest binary from Lava
    curl -s --user-agent "$s3_creds_user" --referer "$s3_creds_pass" "$binary_url" >$HOME/go/bin/lavad
    # Add executable attribute to the lavad file
    chmod +x $HOME/go/bin/lavad
    ```
    

## 2. Join the Lava Testnet

### A. Set up the `lavad` service

- Create the service file
    
    ```bash
    # Set folder permissions for the logs folder
    current_user=$(whoami)
    sudo mkdir -p /var/log/lava-logs
    sudo chmod -R 744 /var/log/lava-logs
    sudo chown $current_user: /var/log/lava-logs
    ```
    
    Create the systems unit files
    
    ```bash
    # Create systemd unit file with logrotate
    echo "[Unit]
    Description=Lava Node
    After=network-online.target
    [Service]
    User=$USER
    ExecStart=$(which lavad) start --home=$lavad_home_folder --p2p.seeds $seed_node
    Restart=always
    RestartSec=5
    LimitNOFILE=4096
    # write the standard output of the service to a log file
    StandardOutput=append:/var/log/lava-logs/lavad.log
    [Install]
    WantedBy=multi-user.target" >$temp_dir/lavad.service
    sudo cp $temp_dir/lavad.service /etc/systemd/system/lavad.service
    
    # Logrotate configurations
    logger "INFO" "Adding logrotate configurations"
    echo "/var/log/lava-logs/lavad.log {
        daily
        su root root
        missingok
        notifempty
        copytruncate
        rotate 10
        size 5M
        compress
        delaycompress
    }" >$temp_dir/lavad_logrotate.conf
    sudo cp $temp_dir/lavad_logrotate.conf /etc/logrotate.d/lavad
    ```
    
- Enable the service
    
    ```bash
    # Enable the lavad service so that it will start automatically when the system boots
    sudo systemctl daemon-reload
    sudo systemctl enable lavad.service
    ```
    
- Start the service
    
    ```bash
    # Start the lavad service
    sudo service lavad start
    # Sleeping for 10 seconds to let the node start"
    sleep 10 # sleep to allow the service to start before querying it
    sudo logrotate /etc/logrotate.d/lavad
    ```
    

## 3. Verify setup

### A. Make sure the `lavad` service is running

- Run the `lavad status` command to check the state of the app
    
    ```bash
    lavad status | jq
    # Please note that it might take a few minutes for the node to start catching up with the network
    ```
    

### B. Run test commands

- Wait for the node to finish catching up
    
    ```bash
    # To check if the node is still catching up with the network
    #  true - the node is still catching up with the network
    #  false - the node is synced with the network state
    lavad status | jq .SyncInfo.catching_up
    ```

- You can check what's the latest block height on [Lava scan](https://scan.lavanet.xyz) and then compare to yours:
    
    ```bash
    # You can check the latest block height
    lavad status | jq .SyncInfo.latest_block_height
    ```


## Setup Cosmovisor

Coming soon.

## Done 🌋

:::tip Joined Testnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](validator#account)

:::