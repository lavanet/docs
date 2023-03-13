---
sidebar_position: 1
---

# FAQs

:::info
This section is the same as the #FAQ channel in Discord. If you need further help hop on to our support channels there.
:::


## Dictionary

#### Keyring
The keyring holds the private/public keypairs used to interact with a node. For instance, a validator key needs to be set up before running the blockchain node, so that blocks can be correctly signed. The private key can be stored in different locations, called "backends", such as a file or the operating system's own key storage. ([learn more here](https://docs.cosmos.network/main/run-node/keyring.html))


## Nodes, Validators and Providers
### I have problems running the install scripts {#install-troubleshooting}

Troubleshooting:

1. `lavad` command not found
    1. Try running `source ~/.profile`
2. The node is stuck on “Waiting for node to catch up”
    1. This process might take some time based on your internet connection, compute capabilities and the height of the latest block on the network
    2. Please allow 5-20 minutes for this procedure to catch up with the latest block in the network
3. curl or unzip commands are not found
    1. `sudo apt update && sudo apt install curl unzip -y`
4. sudo command not found
    1. `apt install sudo -y`
5. When running `stake_validator` you get the error
    ```bash
    account lava@XYZ not found: key not found
    ```
    1. Make sure your account is funded from Lava side before you try to stake as a validator

## Providers
### How can I update/edit my provider information?
To update your provider information on chain, send the `provider-stake` transaction with the updated information and an additional stake of minimum 1 ulava.

### I get `ERR_stake_provider_endpoints: invalid provider endpoints` error when trying to stake as a provider
In your stake-provider transaction you need to specify all required provider endpoints based on the chain you are staking on. For example to provide for cosmos chains you need both tendermint-rpc and rest as follows: `"IP:port,tendermintrpc,1 IP:port,rest,1"`.

### Is there an unboding period for providers?
Yes, it's currently configured to 21 days.

### How can I see my current provider state (incl. unbonding)?
You can use the following query: `lavad q pairing providers <CHAIN_ID>`

### When running my provider process `lavad server` I get the following error `provider endpoint mismatch`
This error means that you have used different geolocations when using  the `provider-stake` transaction and when running `lavad server`, please ensure they match and the problem should be resolved.
