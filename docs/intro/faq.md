---
slug: /faq
title: ❓ FAQs 
---

# FAQs

![FAQs Banner](/img/banner/FAQs.jpg)

:::info
There is an additional channel called #FAQ on our Discord. If you need further help hop on to our support channels there.
:::

<hr />

## Dictionary 📖

### Keyring
The keyring holds the private/public keypairs used to interact with a node. For instance, a validator key needs to be set up before running the blockchain node, so that blocks can be correctly signed. The private key can be stored in different locations, called "backends", such as a file or the operating system's own key storage. ([learn more here](https://docs.cosmos.network/main/run-node/keyring.html))


## Nodes, Validators and Providers ⏫
### I have problems running the install scripts. {#install-troubleshooting}

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

## Providers 🖥️
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

## Developer ⌨️



### Using Lava with Other RPC Clients

Lava easily integrates with other RPC clients. 

1. **Gateway** - Simply create an account on the gateway, and replace your client's RPC URL with the appopriate one. Get started [immediately](/gateway-getting-started)!
2. **SDK** - You can also use the SDK library integrations to integrate with [viem](/viem), [cosmjs](/cosmjs), [web3.js](/web3js), or [ethers.js](/ethersjs5).



### I'm already using another SDK.
No problem, Lava offers integrations to existing popular libraries [here](/sdk-integrations).


### How to change the RPC url which Cosmjs uses?

If you want a native integration to use seamlessly, please check out the new Lava integration for [CosmJS](/cosmjs)!
Alternatively, please check out the cosmolava-client created by one of our community members: [MELLIFERA-Labs/cosmolava-client](https://github.com/MELLIFERA-Labs/cosmolava-client)

If you just want to switch the RPC URL you can do so using the HttpEndpoint interface on [stargate](https://cosmos.github.io/cosmjs/latest/stargate/interfaces/HttpEndpoint.html#url) or [cosmwasm-stargate](https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/interfaces/HttpEndpoint.html#url). Be sure you've grabbed the TendermintRPC endpoint from Lava or you may encounter errors.
