---
slug: /improving-provider-service
title: Imroving Provider Service
---

# Improving Provider Service

## Reputation
The Lava Network places a strong emphasis on delivering exceptional Quality of Service (QoS) to its consumers. To ensure this, consumers actively participate in monitoring and customizing their QoS excellence metrics. They gauge provider performance by measuring latency in provider responses relative to a benchmark, assessing data freshness in comparison to the fastest provider, and evaluating the percentage of error or timeout responses in the availability metric. These scores are diligently recorded and sent on-chain alongside the relay proofs of service, creating a transparent and accountable system. The provider's performance metric is called "Reputation". Higher reputation indicates higher QoS scores.

To further enhance the integrity of the QoS scores, updates are aggregated across all consumers in a manner that safeguards against false reports. Negative reports are weighted by usage, meaning that a consumer must actively use and pay a provider to diminish their QoS score. This mechanism discourages users from artificially lowering a provider's score.

The Reputation metric only affect pairings and is aggregated over time with a decay function that favors the latest data, meaning providers can improve, and those providers that their service fails will be impacted to affect fewer users. This approach ensures that the reputation system remains dynamic and responsive, benefiting providers striving to enhance their services while minimizing the impact of service failures on a broader scale.

## 📊 Passable QoS {#passable-qos}
Passable Quality of Service is scored separately in each relay session. Lower scores mean lower rewards. Up to half the accumulated CU can be reduced for bad service. Passable QoS metrics can be viewed both in the [Lava Info explorer](https://info.lavanet.xyz/?utm_source=provider-rewards&utm_medium=docs&utm_campaign=docs-to-info) and [Prometheus metrics](/provider-features#config-prometheus).

Passable QoS is binary, either it's good or bad there is no in-between. Scores in the range `0-1` are a result of averaging that binary score across relays. You can learn more about Passable QoS from our [📄 RSCH-1000](https://community.lavanet.xyz/t/rsch-1000-passable-quality-of-service/25) research paper.

### Metrics 📈

Passable Quality of Service divides into three metrics: [Availability](#%EF%B8%8F-availability), [Sync/Freshness of data](#-syncfreshness), [Latency](#%EF%B8%8F-latency).


#### 🛎️ Availability
Score `0 or 1` per relay, averaged across relays in a session to give a range `0-1` for each session. `0` is given for each failed relay.
A lower availability score can be the result of failed relays by one of the following:

##### Low-Score Causes
<details>
  <summary>❗time out </summary>
  ⚠️ The provider does not respond in the maximum allowed time, and the consumer gives up. <br/>
  ✅ Timeout can be checked for in the provider logs, requests that time out are also identified by the provider and terminated
</details>

<details>
  <summary>❗ unsupported chain </summary>
  ⚠️ The provider runs with disabled chains
  ✅ It can be checked in the provider initialization logs and on the request logs, also on the prometheus metrics for disabled chains
</details>

<details>
  <summary>❗ errors</summary>
  ⚠️ Any lava error, whether unsynced epoch in the provider, wrong wallet, misconfigured url <br />
  ✅ Error can be checked in the provider logs, and prometheus metrics for disabled chains
</details>

##### Improvements
Improving availability involves finding the cause of errors, and taking the necessary actions to resolve them.

<details>
  <summary>⚡ add more endpoints</summary>
  lava supports setting more than one endpoint, and consumers know to loadbalance in case one is down, by setting several endpoints (with several services) providers can avoid downtime
</details>

<br/>

#### ⏲️ Latency
Score `0 or 1` per relay, averaged across relays in a session to give a range `0-1` per session. `0` is given for each relay that took above half the timeout. A
lower latency score can be the result of slow responses, and can be identified by turning on debug logs in the provider to see the latency or checking Prometheus.

##### Improvements

<details>
  <summary>⚡ activate lavap cache</summary>
  Caching can boost up performance and latency at the expense of some memory, if you didn't set a valid cache configuration it could reduce latency scores. Visit the <a href="provider-features#caching">provider features page</a> to ensure caching is correctly enabled.
  
</details>

<details>
  <summary>⚡ set the provider service in proximity to the node</summary>
  a provider service that is located in the same server or vpc as the node will provide the best latency, while a provider that has to go through TLS and connect to a different location will have increased latency
</details>

<details>
  <summary>⚡ set the correct geolocation</summary>
  lava matches consumers and providers based on geolocation, if your services do not cover several locations with several nodes, it is recommended to set geolocations that are in proximity to your provider service and node.
  if you misconfigure geolocations that are far from your node's location, your latency scores will be lower
</details>

<details>
  <summary>⚡ reduce server load or improve the machine</summary>
  servers that receive too much usage to the machine capabilities will respond slower, it is recommended to monitor CPU, networking and memory usage
</details>

<details>
  <summary>⚡ add more endpoints</summary>
  lava supports setting more than one endpoint, and consumers know to pick the closest one, by setting more endpoints latency scores will be lower
</details>

<br/>

#### 🌿 Sync/freshness
Score `0 or 1` per relay, averaged across relays in a session to give a range `0-1` per session. A `0` is given for each relay that has a latest block proof that is older than the spec allowed block lag for QoS sync.

##### How to Identify
The freshness proofs are updated by the provider service in a GET_BLOCKNUM request, and then returned together with consumer relay responses.
It is possible to turn on debug logs and see the blocks advancing.
The latest block is exported in prometheus, and also uploaded on chain. 
You can compare the latest block on your provider to other providers, a useful way to do this is filter provider_latest_block_report and compare your results to others:

:::caution
Here and below ensure that you replace `{PUBLIC_RPC}` with the correct [endpoint](/public-rpc).
:::

```bash
lavap test events 2000 --event lava_provider_latest_block_report --node {PUBLIC_RPC}
```

##### Low-Score Causes
<details>
  <summary>❗ provider state is not updating fast enough</summary>
  make sure GET_BLOCKNUM requests do not fail, common problems are throttling, or a url misconfiguration
</details>

<details>
  <summary>❗ latest block is too old</summary>
  some nodes can lose sync and return stale data, it is imperative to monitor these cases and fix them, making sure the node is synced
</details>

<br />

## 📊 Reputation Score {#reputation-score}

Reputation Socre is calculated very similarly to Passable QoS. QoS Excellence provides a range of scores that are time-weighted to take the latest information
all the actions mentioned here to improve passable QoS affect Reputation 

### Metrics 📈
Reputation score divides into 3 metrics:
* Availability - score in the range `0-1`
* Sync/ Freshness of data - how much time behind other providers are we, lower is better, `0` means your sync is the best in the pairing
* Latency - how many benchmark ticks passed during a relay in average (time taken / benchmark time). lower is better

<br />

## 🏛️ Jailing {#jailing}

### How to Fix Getting Jailed 🔓
Lava Protocol removes providers that are providing inferior service. The mechanism is detached from QoS measurements.
In order to avoid being jailed, a provider needs to avoid the following:
* have the staked endpoint not respond to connections
* have disabled chains in the staked endpoint
* have too many consecutive errors with a large group of consumers
* have a non TLS connection or an expired certificate
* block headers or origins
* miss on getting rewards

<br />

### How Jailing Happens ❓
Once one or more of the aforementioned conditions are met, Lava's Blockchain jails a provider if:
* there are enough other providers in the spec
* the provider is not frozen (if you freeze for maintenance you will *not* get jailed)
* the provider is active for at least 8 epochs
* in the last 8 epochs the provider got less sum of rewards than reports sum in the last 2 epochs

<br />

### Identify Getting Jailed 🩻
If your provider got jailed it will stop receiving requests upon the next epoch. 

It is possible to monitor this event via info webpage or the following commands :

⌨️ `command` when being reported before getting jailed:
```bash
lavap test events 2000 --event lava_provider_reported --node {PUBLIC_RPC}
```
a group of reports can lead to being jailed.

⌨️ `command` when the blockchain's criteria for jail are met:
```bash
lavap test events 2000 --event lava_provider_jailed --node {PUBLIC_RPC}
```
<br />

### Resuming Service ▶️
Since version `0.27.0`, providers that are jailed can resume service by unfreezing. It is planned to have a cooldown period on unfreezing.

If repeated jails are activated in a short period:
```bash
lavad tx pairing unfreeze --help
```

<br />

### Reasons ⚖️

Jail reports contain additional info on the report reason and they can be either due to:
* **disconnections** - a provider did not respond to connection attempts
* **errors** - a provider's responses were a sequence of consecutive errors.

In addition, the reports contain an exact time tag, so the provider can check the events:
```bash
lavap test events 2000 --event lava_provider_reported --node {PUBLIC_RPC}
```
<br />

### Disconnections 💢
These mean the provider's endpoint did not respond and can be due to the following problems:
* TLS certificate outdated or not set
* misconfiguration proxying the requests to the provider service
* provider service not running
* wrong endpoint in the stake entry on chain: can be fixed by running 
```bash
lavad tx pairing modify-provider ${CHAIN} --endpoints "${ENDPOINTS}" --geolocation ${GEOLOCATION} --from ${WALLET}
```
:::caution

Make sure the url in the endpoint is the provider grpc listening address and not your node url

:::

#### ⏺️ Identifying a Disconnect

Disconnection problems can be identified by running the test command:

```bash
lavap test rpcprovider ${PUBLIC_ADDRESS}
```

<br />

### Errors ❌
these mean the provider service connection was solid but all relays turned to be errors, might be caused by the following:
* disabled chain - the provider doesnt have access to the node, or a verification does not pass, and the chain is disabled
* unexpected errors
* timeouts

#### ⏺️ Identifying an Error

Errors can be identified by looking at the provider service logs, it is recommended to run with debug if repeatedly getting jailed.



### Metrics

Lava allows providers to monitor their services through a set of different metrics available. The easiest way to access the provider metrics is through the Lava info page which gives providers a comprehensive look into their overall performance metrics as well as specific details over time.

High level metrics available to providers:
- Total CU - a numerical representation of the computational difficulty of executing a specific API calls. It is used to calculate provider rewards. 
- Total Relays - number of data exchange events between providers and consumers.
- Total self-stake - an amount Lava tokens bonded by the provider
- Delegation stake - total stake from delegators
- Total stake - self stake + delegations
- Commission - percentage of delegation rewards retained by the provider
