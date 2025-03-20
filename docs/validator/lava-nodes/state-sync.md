---
sidebar_position: 2
slug: /state-sync
title: State Sync
---

# State-Sync to latest Lava snapshot with KSYNC (_recommended_) {#snapshots}

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