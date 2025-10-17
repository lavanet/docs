---
slug: /provider-faq
title: Provider FAQ
---

## **FAQ** ❓

### 🟡  Received error `account sequence mismatch`

Try to wait for a block_time (current=30s) and then run the command again

### 🟡  How do I make changes to my RPC Node Provider service?

It is possible for a Provider to make changes in his on chain stake entry at any time, it is possible to do so by sending the same stake-provider tx we have used when first joining the network with the updated parameters.

It is also possible to use a convenience cli command wrapping it:

```bash
lavad tx pairing modify-provider {SpecID} --from {WALLET}

# flags:
# --endpoints "my-provider-africa.com:443,AF my-provider-europe.com:443,EU" # must come with --geolocation if the new endpoints change/add a geolocation
# --amount 1000000000000ulava # when wanting to increase stake, decreasing can be done only by unstaking
# --provider-moniker "my-new-nickname"
```

### 🟡  How do I unstake? {#unstake}

Run the following command:

```
lavap tx pairing unstake-provider "{NETWORK_NAME}" \\
--from "{ACCOUNT_NAME}" \\
--keyring-backend "{KEYRING_BACKEND}" \\
--chain-id {CHAIN_ID} \\
--node "{LAVA_RPC_NODE}"

# For example, unstake a provider for the ETH1 network,
# lavap tx pairing unstake-provider ETH1 \\
# --from my_account_name \\
# --keyring-backend "test" \\
# --chain-id {CHAIN_ID} \\
# --node {PUBLIC_RPC}

# Expected output:
# INF Server listening Address=[::]:LISTEN_PORT

```

### 🟡  Received error `dial tcp 127.0.0.1:26657: connect: connection refused`

In case you got the following error:

```
Error: post failed: Post "<http://localhost:26657>": dial tcp 127.0.0.1:26657: connect: connection refused

```

It is likely that your node is not running, or has not joined the network, you can either join the network,
or run the command with the `--node` flag to use an external Lava RPC node

### 🟡  Received error `sentry init failure to initialize error="provider stake verification mismatch`

In case you got the following error:

```
ERR sentry init failure to initialize error="provider stake verification mismatch -- &map[ChainID:NETWORK_NAME spec name:NETWORK_FULL_NAME]" ChainID=CHAIN_ID apiInterface=PROTOCOL

```

It is likely that the stake-provider command was not taken into effect yet, if running the `lavap server` option, please wait a few minutes and try running the command again.




### 🟡  What is a specification and what does it let me do? {#specs}
A specification (“spec”) is a module which you can add to Lava Network, extending the range of data services the network of Providers can serve. RPC specs are the first to be added to Lava, and we will offer subgraph specs soon.


### 🟡 I have problems running the install scripts. {#install-troubleshooting}

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

## RPC Node Providers 🖥️ {#providers}

### 🟡 What is QoS (Passable Quality-of-Service)? {#qos}
This score for RPC Node Providers per relay is based on the metrics of latency, sync, and availability. There are two different types of QoS: 
- [Passable QoS](/improving-provider-service#passable-qos)
- [Reputation Score](/improving-provider-service#reputation-score)


### 🟡 How can you improve your RPC Node Provider's QoS? {#improve-qos}
Providers are rated based on response time, availability and freshness. It is also important to maintain high performance on your nodes and to have powerful servers. For more details, see [RSCH-1000](https://community.lavanet.xyz/t/rsch-1000-passable-quality-of-service/25)

### 🟡 How can I check the Provider's performance? {#provider-performance}
You can check all Providers on [Lava Info](https://info.lavanet.xyz). For your own Provider, you can [configure Prometheus](/provider-features/#config-prometheus) using the `metrics-listening-address` flag.

You can also track your own performance using the CLI: `lavad test rpcprovider...`.


### 🟡  What is the difference between a Provider who uses Lavavisor and one who does not? {#lavavisor}
There is no difference. LavaVisor updates the binary automatically. Without it you have to do it manually. [LavaVisor](/lavavisor) is based on [Cosmovisor](https://docs.cosmos.network/main/build/tooling/cosmovisor)

### 🟡  The tokens used for Providers and validators are different? {#provider-tokens}
No, there is only one token - `LAVA`. It is used as a governance token, as gas fees required for transactions, for rewards distributed to validators/Providers, etc.
Lava Network uses dualstaking, when staking a Provider, a validator is also specified.

### 🟡  How does slashing work for RPC Node Providers?
Slashing has not yet been implemented for Providers. It is planned to only be for fraudulent activity. A [freeze feature](/provider-features#freeze) has been implemented for service providers to avoid downtime or poor QoS. 
Documentation is available for [jailing](improving-provider-service#jailing).

Here are some basic facts about jailing:
- RPC Node Providers claim CUs serviced via relay payments;
- each relay payment has an unreponsive Providers list Provider's claim might report Providers 2,3 for example), these reports are signed by the consumer as well as the CU used;
- every epoch (15m) the chain checks unresponsiveness claims, against the CU serviced over the last 5 epochs;
- if the ratio of complaints per relay is greater than the ratio of service claimed (if you want the full equation lmk) if more than 0.5 AND the number of Providers available in the specification is greater than 5 per geolocation, then the Provider is jailed and gets all its funds back after 25 hours.


### 🟡  How quickly do new RPC Node Providers receive relay requests? {#new-providers}
It can take up to 15m to get relays again.

### 🟡  Is it ok to use the same wallet address between node and Provider?  {#same-wallet-address}
Yes, you can, it's allowed.

### 🟡  Who can join the Incentivized Public RPC? {#join-iprpc}
Anyone can join the ipRPC. It requires [setting up a Provider process](https://docs.lavanet.xyz/provider-setup) for the appropriate service.

### 🟡  How can I update/edit my RPC Node Provider information? {#provider-info}
To update your Provider information on chain, send the `lavad tx pairing modify-provider...` transaction with the updated information and an additional stake of minimum 1 ulava.

### 🟡 I get `ERR_stake_provider_endpoints: invalid provider endpoints` error when trying to stake as a provider {#staking-error}
In your stake-provider transaction you need to specify all required Provider endpoints based on the chain you are staking on. For example to provide for cosmos chains you need both tendermint-rpc and rest as follows: `"IP:port,tendermintrpc,1 IP:port,rest,1"`.

### 🟡 Is there an unbonding period for Providers? {#unbonding-period}
Yes, it's currently configured to 21 days.

### 🟡 How can I see my current Provider state (incl. unbonding)? {#provider-state}
You can use the following query: `lavad q pairing providers <CHAIN_ID>`

### 🟡 When running my RPC Node Provider process `lavad server` I get the following error `provider endpoint mismatch` {#provider-endpoint-mismatch}
This error means that you have used different geolocations when using  the `provider-stake` transaction and when running `lavad server`, please ensure they match and the problem should be resolved.
