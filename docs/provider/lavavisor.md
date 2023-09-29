---
slug: /lavavisor
title: Lavavisor
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor**


## 📄 Overview 
LavaVisor acts as a service manager for the Lava protocol application binaries. Its duty is to manage protocol versioning and coordinate seamless transitions to updated protocol versions.

When an upgrade becomes necessary, either because the current protocol version has dropped below the minimum version or not compliant with the recommended target version, LavaVisor’s responsibilities begin. LavaVisor orchestrates the necessary upgrade process in an automated manner, ensuring that the protocol version is aligned with the current standards and capabilities set by the minimum and target versions.

## 🧰 Setup

:::tip
Some older versions of the `lava-protocol` binary lack the version command, which LavaVisor employs to validate binary versions. Please ensure you've updated to the most recent version of LavaVisor or you may face errors.
:::

Lavavisor is added as a `LAVA_ALL_BINARIES` parameter in the Makefile. As such, any script that executes `install-all` such as `start_env_dev.sh` will automatically install Lavavisor binary. 

To ensure that a LavaVisor binary is created, navigate to your local `/lava` directory and run  **`make install-all`**


### Prerequisites ✅

1. Go version above than 1.19

<br />
<hr />

## ♨️ Usage

### > `lavavisor init`
LavaVisor `init` command initializes the environment for LavaVisor. It is generally the first command run when using LavaVisor.

**Optional Flags:**
    
`--directory` -  specifies the protocol flags directory (default "~/")
    
`--auto-download` - automatically downloads missing binaries
    
`--auto-start` - automatically issues `start` after the the `init` command completes

**Example usage:**

```bash
lavavisor init --auto-download --chain-id lava-testnet-2
```


<br />

### > `lavavisor create-service` 
LavaVisor uses service files for each provider/consumer at play. LavaVisor `create-service` command creates these  files according to the supplied consumer / provider config file and flags.

You must specify a whether you are creating a `provider` or `consumer` and the location of the config file.

**Example usage:**

```bash
# Provider Example
lavavisor create-service provider ./config --geolocation 1 --from user --log_level warn

# Consumer Example
lavavisor create-service consumer ./config --geolocation 1 --from user2 --log_level info

```

<br />

### > `lavavisor start` 
LavaVisor starts the specified services using the linked binary. It also starts the LavaVisor version monitor. The simplest way to activate this is by running the command `lavavisor init --auto-download --auto-start`. Secondarily, you can use the `start` command on your own, to further configure your provider/consumer or create services.

<br />
<hr />

## 🗜️ Test

1. First of all, LavaVisor should run in a node which is connected to a running Lava Network (local or public).

2. Run `lavavisor init --auto-download`  → This will setup LavaVisor directory and link the protocol binary
    
    ![lavavisor init](/img/tutorial/lavavisor/lavavisor1.png)

3. Instead of creating service files manually, execute `lavavisor create-service` command to generate the service files. Let’s say we want to start one consumer and two provider processes, then we need to execute total of three commands like this:

    - `lavavisor create-service consumer /home/ubuntu/config/consumer-ETH1.yml --geolocation 1 --from user1 --log_level info --keyring-backend test --chain-id lava --node http://127.0.0.1:26657`

    - `lavavisor create-service provider /home/ubuntu/config/provider1-ETH1.yml --geolocation 1 --from servicer1 --log_level info --keyring-backend test --chain-id lava --node http://127.0.0.1:26657`
    
    - `lavavisor create-service provider /home/ubuntu/config/provider1-LAV1.yml --geolocation 1 --from servicer2 --log_level info --keyring-backend test --chain-id lava --node http://127.0.0.1:26657`

4. Check the `~/.lavavisor/` dir and validate `config.yml` . It should look like this (adjust the service names according to your process):


```yaml
services:
  - consumer-ETH1
  - provider1-ETH1
  - provider1-LAV1
```

5. The `create-service` command should also create a `service_configs` folder within the `.lavavisor/services` directory and copy the configuration files provided as command arguments (e.g., provider1-ETH1.yml). Ensure the directory and configuration files exist.

<Tabs>
<TabItem value="provider_conf" label="✅ Example provider config file:">


```yaml
endpoints:
  - api-interface: jsonrpc
    chain-id: ETH1
    network-address:
      address: 127.0.0.1:2221
    node-urls:
      - url: wss://kololo8ex9:ifififkwqlspAFJIjfdMCsdmasdgAKoakdFOAKSFOakfaSEFkbntb311esad@prod-pnet-ethmainnet-1.lavapro.xyz/eth/ws/
```

</TabItem>

<TabItem value="consumer_conf" label="✅ Example consumer config file:">

    
```yaml
endpoints:
    - chain-id: ETH1
      api-interface: jsonrpc
      network-address: 127.0.0.1:3333
metrics-listen-address: ":7779"
```
</TabItem>
</Tabs>

6. Execute `lavavisor start`, and you should observe all services running. Additionally, the version monitor will begin validating versions.
    
    ![lavavisor start](/img/tutorial/lavavisor/lavavisor2.png)

7. Now we need to make an upgrade proposal by using `/gov` module, so that protocol version will change in the consensus and LavaVisor will detect & initiate auto-upgrade.
    
    🔽 Here is an example `proposal.json` file:
    
    <details>
    <summary> 📄 proposal.json </summary>
    
    ```json
    {
        "title": "Protocol Version Change",
        "description": "Update version",
        "changes": [
            {
                "subspace": "protocol",
                "key": "Version",
                "value": {
                    "provider_target": "0.23.2",
                    "consumer_target": "0.23.2",
                    "provider_min": "0.22.0",
                    "consumer_min": "0.22.0"
                }
            }
        ],
        "deposit": "10000000ulava"
    }
    ```

    </details>
    
    🔽 Here is the script for sending version update proposal transaction (for Cosmos SDK v0.47.0):
    
    <details>
    <summary> 📄 upgrade_chain.sh </summary>

    ```bash
    #!/bin/bash
    # upgrade script (upgrade_chain.sh)
    
    # function to wait for next block (should be used when proposing on chains with Cosmos SDK 0.47 or higher)
    function wait_next_block {
      current=$( lavad q block | jq .block.header.height)
      echo "Waiting for next block $current"
      while true; do
        sleep 0.5
        new=$( lavad q block | jq .block.header.height)
        if [[ $current != $new ]]
        then
          echo "finished waiting for block $new"
            break
        fi
      done
    }
    
    # The software upgrade proposal command. This only proposes a software upgrade. To apply the upgrade, you need to vote "yes" (like below).
    lavad tx gov submit-legacy-proposal param-change proposal.json \
    --gas "auto" \
    --from alice \
    --keyring-backend "test" \
    --gas-prices "0.000000001ulava" \
    --gas-adjustment "1.5" \
    --yes
    
    wait_next_block
    
    # The vote command. Use vote ID 4 (like here) if you used the init_chain_commands.sh script. If the vote doesn't work because of a bad
    # vote ID, use the 'lavad q gov proposals' query to check the latest proposal ID, and put here the latest ID + 1.
    lavad tx gov vote 4 yes -y --from alice --gas-adjustment "1.5" --gas "auto" --gas-prices "0.000000001ulava"
    ```
    
    </details>

    (Fix proposal ID 4 according to your state - if you didn’t run ‘init_chain_commands’ you should put 1 there)
    
8. After the proposal passed, LavaVisor will detect the event and update the binaries. Then, it will reboot the processes with the new established symbolic link:
    
    ![Update detected](/img/tutorial/lavavisor/lavavisor3.png)
    
    ❗ Update detected
    
    ![Upgrade successful](/img/tutorial/lavavisor/lavavisor4.png)
    
    ✔️ Upgrade successful
