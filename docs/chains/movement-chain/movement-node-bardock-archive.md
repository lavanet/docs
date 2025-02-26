---
slug: /movement-node-bardock-archive
title: Sync a Follower Node with default DB archive TESTNET
---

# Sync a Follower Node with default DB archive "Bardock Testnet chain"

This guide will help you to sync an existing Bardock follower node. This procedure is only for Bardock Testnet network.
If you don't have a Bardock instance setup follows the Bardock Ansible script installation of this [guide](followerNode_from_genesis.md) with this following commit: ```afddfd02d627b2a8189751950eefca3a59ddfe3b``` .

## Hardware Recommendations

To do the restoration the partition `/` should have at least 400GB of free space.

## Configurations files updates

Verify the Systemd Bardock service file: `/etc/systemd/system/movement-full-follower.service`
Validate that the `CONTAINER_REV`  var is correctly set as follow:

```Environment="CONTAINER_REV=afddfd02d627b2a8189751950eefca3a59ddfe3b"```

## Update the docker files

Go in the directory `$HOME/movement` and type:

```
git checkout afddfd02d627b2a8189751950eefca3a59ddfe3b
```

## Restoration script

The HOME directory is the directory where the `.movement` folder is located. It should be in `/home/ubuntu` or `/home/ssm-user` folder depending on your OS.
In the Home directory create a new script file call `restoration.sh` and copy past this content using `nano` or `vi`:

```
#!/bin/bash -e

# Stop the node if needed.
systemctl stop  movement-full-follower.service

export DOT_MOVEMENT_PATH=/home/ubuntu/.movement
export CONTAINER_REV=afddfd02d627b2a8189751950eefca3a59ddfe3b
export MOVEMENT_SYNC="follower::mtnet-l-sync-bucket-sync<=>{maptos,maptos-storage,suzuka-da-db}/**"
export AWS_DEFAULT_REGION=us-west-1
export AWS_REGION=us-west-1
export MAPTOS_CHAIN_ID=250
export AWS_ACCESS_KEY_ID="<access key>"
export AWS_SECRET_ACCESS_KEY="<secret key>"
export SYNC_PATTERN="{maptos,maptos-storage,suzuka-da-db}/**"
export SYNC_BUCKET="mtnet-l-sync-bucket-sync"

# Restore the DB.
/usr/bin/docker compose --env-file movement/.env -f ./movement/docker/compose/movement-full-node/snapshot/docker-compose.restore.yml up --force-recreate

# Start the node.
systemctl start  movement-full-follower.service
```

Update the `<access key>` and `<secret key>` with the values from the file: `/etc/systemd/system/movement-full-follower.service`.

Set the script executable with: ```chmod +x restoration.sh```

## Start the node restoration

To start the node db restoration from a recent snapshot execute this command from the HOME directory:

```
./restoration.sh
```

The restoration should start. It can take around 1 hour depending on the speed of the hard drive and network.

At the end of the restoration the script will restart the node.

The node should sync with the leader node.

After a few minutes, to verify, use these commands:

To get the current leader Bardock state:

```
curl https://aptos.testnet.bardock.movementlabs.xyz/v1
```

To get your follower state:

```
curl 127.0.0.1:30731/v1
```

Both `ledger_version` and `block_height` state should be near or the same.

## Run Locally

To test restoration against a local node and not a real work, do the following:

From the initial [guide](followerNode_from_genesis.md) use this commit to checkout:  ```afddfd02d627b2a8189751950eefca3a59ddfe3b``` .

To restore the db, you can use docker and the same  `restoration.sh` script created in the `movement` directory.

Or use these commands in the `movement` directory:

```
cargo build -p movement-full-node

DOT_MOVEMENT_PATH="$(pwd)/.movement" AWS_REGION=us-west-1 AWS_ACCESS_KEY_ID="<access key>" AWS_SECRET_ACCESS_KEY="<secret key>" target/debug/movement-full-node backup restore "mtnet-l-sync-bucket-sync" "{maptos,maptos-storage,suzuka-da-db}/**"
```

Replace the value of access key and secret key with the one on the follower node instance.

After you can start the local node that should sync from the Bardock leader.
