---
slug: /movement-node
title: Running a Movement Follower RPC Node 
---

# Run a Follower Mainnet Node

This guide will help you set up and run a Movement follower node. The Bardock Testnet and Mainnet currently support this feature. Learn more about Node architecture [here](/general/Mainnet/node_level_architecture).

## Hardware Recommendations

- 32 cores
- 64 GB RAM
- 2 TB SSD w/ 60K IOPS and 200 MiB/s throughput

## Deployment Methods

There are two methods to deploy a Movement Follower Node:

### Method 1: Local Deployment
This method is suitable for running the node on your local machine or a dedicated server you have direct access to.

#### Prerequisites

##### AWS Account Setup
You need to create an AWS account to get `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` in Security Credentials.
Access AWS Console via [AWS login](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin)

![AWS Account Setup](https://raw.githubusercontent.com/diszell2008/movement-node-guide/refs/heads/master/account.png)
![AWS Access Key Setup](https://raw.githubusercontent.com/diszell2008/movement-node-guide/refs/heads/master/accesskey.png)

#### Installation Steps

1. **Install Nix**  
   We recommend using the Determinate Systems nix installation script. You can find it [here](https://determinate.systems/posts/determinate-nix-installer/).

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
   ```

2. **Clone and Setup Repository**
   ```bash
   git clone https://github.com/movementlabsxyz/movement
   cd movement
   ```

3. **Database Restoration**  
   First, we need to use the Restoration script to restore DB. Verify the `$HOME` variable is correctly defined and points to the folder where the `.movement` folder is installed.

   Create a new script & RUN file called `restore.sh` in your Home directory and add the following content using `nano` or `vi`:

   ```bash
   #!/bin/bash -e

   export DOT_MOVEMENT_PATH=$HOME/movement/.movement
   export CONTAINER_REV=d963665
   export AWS_DEFAULT_REGION=us-west-1
   export AWS_REGION=us-west-1
   export MAPTOS_CHAIN_ID=126
   export AWS_ACCESS_KEY_ID="<access key>"
   export AWS_SECRET_ACCESS_KEY="<secret key>"
   export SYNC_PATTERN="{default_signer_address_whitelist,maptos,maptos-storage,movement-da-db}/**"
   export SYNC_BUCKET="move-main-rec-l-sb-sync"

   # Restore the DB.
   /usr/bin/docker compose --env-file $HOME/movement/.env -f $HOME/movement/docker/compose/movement-full-node/snapshot/docker-compose.restore.yml up --force-recreate

   # Remove old config from snapshot
   rm $HOME/movement/.movement/config.json
   ```

4. **Setup Nix Environment**
   ```bash
   git checkout d963665
   nix develop
   ```

5. **Configure Environment**  
   Create a `.env` file with the following content:

   ```plaintext
   CONTAINER_REV=d963665
   DOT_MOVEMENT_PATH=./.movement
   MAPTOS_CHAIN_ID=126
   MOVEMENT_SYNC="follower::move-main-rec-l-sb-sync<=>{maptos,maptos-storage,movement-da-db}/**" 
   MOVEMENT_DA_LIGHT_NODE_CONNECTION_PROTOCOL=https
   MOVEMENT_DA_LIGHT_NODE_CONNECTION_HOSTNAME="m1-da-light-node.mainnet.movementnetwork.xyz" 
   MOVEMENT_DA_LIGHT_NODE_CONNECTION_PORT=443

   AWS_ACCESS_KEY_ID=<access key>
   AWS_SECRET_ACCESS_KEY=<secret key>
   AWS_DEFAULT_REGION=us-west-1
   AWS_REGION=us-west-1
   ```

6. **Run once time to create new config**
   ```bash
   source .env
   just movement-full-node native build.setup.follower -t=false
   ```

7. **Kill Existing Processes**
   ```bash
   pkill -9 process-compose
   pkill -9 movement-full-n
   ```

8. **Edit Configuration File**
   Edit the new `.movement/config.json` file and verify that the following entries are set as follow:
   ```json
   "movement_da_light_node_connection_protocol": "https",
   ```

9. **Run the Node**  
   Choose one of these methods:

   - Native execution:
     ```bash
     source .env
     just movement-full-node native build.setup.follower -t=false
     ```

   - Container execution:
     ```bash
     just movement-full-node docker-compose follower
     ```

10. **Verify Installation**
    ```bash
    curl localhost:30731/v1
    ```
    Compare with mainnet endpoint: https://mainnet.movementnetwork.xyz/v1

### Method 2: Automated Deployment with Ansible
This method is recommended for deploying on cloud platforms like AWS or other VPS providers. It uses Ansible for automated deployment and configuration.

#### Setup Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/movementlabsxyz/movement
   cd movement
   ```

2. **Configure Ansible**  
   Update the variables in `movement-full-follower.yml` for Mainnet (located in `docs/movement-node/run/ansible/follower-node/mainnet`):

   ```yaml
   vars:
       repo_url: "https://github.com/movementlabsxyz/movement"
       destination_path: "/home/{{ user }}/movement"
       movement_sync: 'follower::move-main-rec-l-sb-sync<=>{default_signer_address_whitelist,maptos,maptos-storage,suzuka-da-db}/**'
       chain_id: "126"

       movement_da_light_node_connection_protocol: "https"
       movement_da_light_node_connection_hostname: "m1-da-light-node.mainnet.movementnetwork.xyz"
       movement_da_light_node_connection_port: "443"

       aws_region: "us-west-1"
       rev: "{{ movement_container_version }}"
   ```

   For AWS SDK authentication, add to `movement-full-follower.service.j2`:
   ```yaml
   Environment="AWS_ACCESS_KEY_ID={{ aws_access_key_id }}"
   Environment="AWS_SECRET_ACCESS_KEY={{ aws_secret_access_key }}"
   ```

   And to `movement-full-follower.yml`:
   ```yaml
   aws_access_key_id: "{{ aws_access_key_id }}"
   aws_secret_access_key: "{{ aws_secret_access_key }}"
   ```

3. **Use Latest Container Revision**  
   Current recommended revision: `d963665`

   To get latest revision:
   ```bash
   CONTAINER_REV=$(git rev-parse HEAD)
   echo "CONTAINER_REV=${CONTAINER_REV}"
   ```

4. **Deploy**  
   Example deployment command:
   ```bash
   ansible-playbook --inventory ec2-18-144-5-233.us-west-1.compute.amazonaws.com, \
       --user rahat  \
       --extra-vars "movement_container_version=d963665" \
       --extra-vars "user=rahat" \
       docs/movement-node/run/ansible/follower-node/mainnet/movement-full-follower.yml \
       --private-key rahat_deployment_test.pem
   ```

   > **Note**: Generate a private key through your cloud provider. The example uses a PEM file generated by AWS.

5. **Node Update**

   #### Update from Bardock version before commit `d963665`

   To update from the Bardock version prior commit `d963665`, follow these steps:

   1. Edit the rev in the `/etc/systemd/system/suzuka-full-follower.service` (see Configuration files updates)
   2. Rename `.movement` folder to `.movement.save`
   3. Start then stop the node to create a new `.movement` folder and configuration file
   4. Edit the new `.movement/config.json` file and verify these entries:
      ```json
      {
        "movement_da_light_node_connection_protocol": "https",
        "da_db_path": "/.movement/suzuka-da-db"
      }
      ```
   5. Perform DB restoration as defined in the Restoration script section
   6. Start the node and verify it syncs
   7. Remove the `.movement.save` folder

   #### Configuration Files Updates

   Verify the Systemd service file `/etc/systemd/system/movement-full-follower.yml`:
   - Validate that the `CONTAINER_REV` var is set to:
     ```
     Environment="CONTAINER_REV=d963665"
     ```

   Verify in the `$HOME/.movement/config.json` file that:

   1. The field `movement_da_light_node_connection_protocol` is set to `https`
   2. The field `movement_da_light_node_connection_hostname` is set to:
      - Mainnet: `m1-da-light-node.mainnet.movementnetwork.xyz`
      - Testnet: `m1-da-light-node.testnet.bardock.movementnetwork.xyz`
   3. The field `da_db_path` is set to:
      - Mainnet: `"da_db_path": "/.movement/movement-da-db"`
      - Testnet: `"da_db_path": "/.movement/suzuka-da-db"`

   #### Update Docker Files

   Navigate to `$HOME/movement` directory and run:
   ```bash
   git checkout d963665c8d6b9bb2b14b06f1ad0c7fce1ae9a0b7
   ```

   #### Verify Node Synchronization

   After a few minutes of running, verify synchronization:

   1. Get current leader state:
      - For Mainnet:
        ```bash
        curl https://mainnet.movementnetwork.xyz/v1
        ```
      - For Testnet:
        ```bash
        curl https://aptos.testnet.bardock.movementlabs.xyz/v1
        ```

   2. Get your follower state:
      ```bash
      curl 127.0.0.1:30731/v1
      ```

   Both `ledger_version` and `block_height` states should be near or the same.

   #### Local Testnet Testing

   To test restoration against a local node:

   1. Checkout this specific commit:
      ```bash
      git checkout 7e8d9b6
      ```

   2. Use either:
      - The same `restoration.sh` script with docker, or
      - Run these commands in the `movement` directory:
        ```bash
        cargo build -p movement-full-node

        DOT_MOVEMENT_PATH="$(pwd)/.movement" AWS_REGION=us-west-1 AWS_ACCESS_KEY_ID="<access key>" AWS_SECRET_ACCESS_KEY="<secret key>" target/debug/movement-full-node backup restore "mtnet-l-sync-bucket-sync" "{maptos,maptos-storage,suzuka-da-db}/**"
        ```

   Replace `<access key>` and `<secret key>` with your follower node instance credentials.

   After restoration, start the local node which should sync from the Bardock leader.

6. **Verify Deployment**
   - SSH into your instance
   - Run: `curl localhost:30731/v1`
   - Expected output:
     ```json
     {
         "chain_id": 126,
         "epoch": "1",
         "ledger_version": "9",
         "oldest_ledger_version": "0",
         "ledger_timestamp": "1732636319660843",
         "node_role": "validator",
         "oldest_block_height": "0",
         "block_height": "3",
         "git_hash": "9dfc8e7a3d622597dfd81cc4ba480a5377f87a41"
     }
     ```

   Compare with Mainnet endpoint: https://mainnet.movementnetwork.xyz/v1

---

## Configure the RPC provider process

Once your Movement node is up and running, configure the provider process by following [the steps here](https://docs.lavanet.xyz/provider-setup). 
