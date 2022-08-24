---
sidebar_position: 2
slug: /join-testnet
---

import RoadmapItem from '@site/src/components/RoadmapItem';

# Join Testnet

## Init lavad with testnet
Prepare config data to be used by `lavad`:

Download config file:
```
s3_creds_user="JzMh9LhdcifyMeCF"
s3_creds_pass="PY7RfcGyh6L8QHCN"
lava_config_folder="$HOME/.lava/config"
lavad_home_folder="$HOME/.lava"
default_config_files_url="https://lava-pnet0-setup.s3.amazonaws.com/config/default_lavad_config_files/lavad_config_staging.zip"
genesis_url="https://lava-pnet0-setup.s3.amazonaws.com/config/genesis_staging.json"
```

Run the script to generate the config file
```
# Download and configure the lavad default config files
curl -s --user-agent "$s3_creds_user" --referer "$s3_creds_pass" "$default_config_files_url" >$temp_dir/lavad_config.zip
unzip -o $temp_dir/lavad_config.zip -d $lava_config_folder >>"$HOME/.lava_validator_setup.log"

# Download the genesis.json file
curl -s --user-agent "$s3_creds_user" --referer "$s3_creds_pass" "$genesis_url" >$lava_config_folder/genesis.json
```

Run `lavad` with configurations:

## Setup Cosmovisor
Coming soon.





:::tip Joined Testnet? Be a validator!
You are now running a Node in the Lava network 🎉🥳! 

Congrats, happy to have you here 😻 Celebrate it with us on Discord.

When you're ready, start putting the node to use **as a validator**:
[<RoadmapItem icon="🧑‍⚖️" title="Power as a Validator" description="Validate blocks, secure the network, earn rewards"/>](/validator-intro.md#stake)

:::
