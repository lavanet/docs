---
slug: /provider-improve-service
title: Rewards / Service
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Provider Rewards

 After staking on chain, providers serve consumers and get cryptographic proofs of relay service. these proofs are sent on chain to accumulate CUs that lead to token rewards. These rewards are mostly affected by 3 factors:
 * Passable Quality of Service - directly affect rewards in a given session
 * Excellence Quality of Service - affect provider selection both within a pairing and in the pairing probabilities
 * Jail - prevents a provider from giving service for a period of time

## Passable QoS Rewards
Passable Quality of Service is scored separately in each relay session. lower scores mean lower rewards up to half the accumulated CU can be reduced for bad service. 
Passable QoS metrics can be viewed both in the info explorer and prometheus metrics
Passable QoS is binary, either it's good or bad there is no in-between. scores in the range `0-1` are a result of averaging that binary score across relays.

### Metrics
Passable Quality of Service divides into 3 metrics:
* Availability
* Sync/ Freshness of data
* Latency

<br/>

#### Availability
score `0 or 1` per relay, averaged across relays to give a range `0-1`. 0 is given for a failed relay.
lower availability score can be the result of failed relays by one of the following:

##### Low-Score Causes
<details>
  <summary><b><u>time out</u></b> - the provider does not respond in the maximum allowed time, and the consumer gives up</summary>
  can be checked in the provider logs, requests that time out are also identified by the provider and terminated
</details>

<details>
  <summary><b><u>unsupported chain</u></b> - the provider runs with disabled chains</summary>
  can be checked in the provider initialization logs and on the request logs, also on the prometheus metrics for disabled chains
</details>

<details>
  <summary><b><u>errors</u></b> - any lava error, whether unsynced epoch in the provider, wrong wallet, misconfigured url</summary>
  can be checked in the provider logs, and prometheus metrics for disabled chains
</details>

##### Improvements
find the cause of the error, and take the necessary actions to resolve them

<details>
  <summary>add more endpoints</summary>
  lava supports setting more than one endpoint, and consumers know to loadbalance in case one is down, by setting several endpoints (with several services) providers can avoid downtime
</details>

<br/>

#### Latency
score `0 or 1` per relay, averaged across relays to give a range `0-1`. 0 is given for a relay that took above half the timeout.
lower latency score can be the result of slow responses, and can be identified by turning on debug logs in the provider to see the latency or checking prometheus.

##### Improvements

<details>
  <summary>activate lavap cache</summary>
  caching can boost up performance and latency at the expense of some memory, if you didn't set a valid cache configuration it would reduce latency scores
</details>

<details>
  <summary>set the provider service in proximity to the node</summary>
  a provider service that is located in the same server or vpc as the node will provide the best latency, while a provider that has to go through TLS and connect to a different location will have increased latency
</details>

<details>
  <summary>set the correct geolocation</summary>
  lava matches consumers and providers based on geolocation, if your services do not cover several locations with several nodes, it is recommended to set geolocations that are in proximity to your provider service and node.
  if you misconfigure geolocations that are far from your node's location, your latency scores will be lower
</details>

<details>
  <summary>reduce server load or improve the machine</summary>
  servers that receive too much usage to the machine capabilities will respond slower, it is recommended to monitor CPU, networking and memory usage
</details>

<details>
  <summary>add more endpoints</summary>
  lava supports setting more than one endpoint, and consumers know to pick the closest one, by setting more endpoints latency scores will be lower
</details>

<br/>

#### Sync/freshness
score `0 or 1` per relay, averaged across relays to give a range `0-1`. 0 is given for a relay that has a latest block proof that is older than the spec allowed block lag for QoS sync.

##### how to identify
the freshness proofs are updated by the provider service in a GET_BLOCKNUM request, and then returned together with consumer relay responses.
it is possible to turn on debug logs and see the blocks advancing.
the latest block is exported in prometheus, and also uploaded on chain. 
you can compare the latest block on your provider to other providers, a useful way to do this is filter provider_latest_block_report and compare your results to others
```bash
lavap test events 2000 --event lava_provider_latest_block_report --node https://public-rpc-testnet2.lavanet.xyz:443/
```

##### Low-Score Causes
<details>
  <summary>provider state is not updating fast enough</summary>
  make sure GET_BLOCKNUM requests do not fail, common problems are throttling, or a url misconfiguration
</details>

<details>
  <summary>latest block is too old</summary>
  some nodes can lose sync and return stale data, it is imperative to monitor these cases and fix them, making sure the node is synced
</details>


## Excellence Quality of Service
calculated very similarly to Passable QoS, Excellence QoS provides a range of scores that are time weighted to take the latest information
all the actions mentioned here to improve passable QoS affect excellence

### Excellence QoS Metrics
Excellence Quality of score divides into 3 metrics:
* Availability - score in the range `0-1`
* Sync/ Freshness of data - how much time behind other providers are we, lower is better, 0 means your sync is the best in the pairing
* Latency - how many benchmark ticks passed during a relay in average (time taken / benchmark time). lower is better

## Jailing

### How to Fix Getting Jailed
lava protocol removes providers that are providing inferior service. the mechanism is detached from QoS measurements.
in order to be jailed a provider needs to avoid the following
* have the staked endpoint not respond to connections
* have disabled chains in the staked endpoint
* have too many consecutive errors with a large group of consumers
* have a non TLS connection or an expired certificate
* block headers or origins
* miss on getting rewards

### How Jailing Happens
lava's blockchain jails a provider if:
* there are enough other providers in the spec
* the provider is not frozen (if you freeze for maintenance you will not get jailed)
* the provider is active for at least 8 epochs
* in the last 8 epochs the provider got less sum of rewards than reports sum in the last 2 epochs

### Identify Getting Jailed
if your provider got jailed it will immediately upon the next epoch stop receiving requests. 

it is possible to monitor this event via info webpage or the following command:
when being reported before getting jailed:
```bash
lavap test events 2000 --event lava_provider_reported --node https://public-rpc-testnet2.lavanet.xyz:443/
```
a group of reports can lead to being jailed.

when the blockchain's criteria for jail are met:
```bash
lavap test events 2000 --event lava_provider_jailed --node https://public-rpc-testnet2.lavanet.xyz:443/
```

### Resuming Service
since version 0.27.0, providers that are jailed can resume service by unfreezing.
it is planned to have a cooldown period on unfreezing, if repeated jails are activated in a short period
```bash
lavad tx pairing unfreeze --help
```

### Reasons
jail reports contain additional info on the report reason and they can be either due to:
* disconnections - provider did not respond to connection attempts
* errors - provider's responses were a sequence of consecutive errors
in addition the reports contain an exact time tag, so the provider can check the events
```bash
lavap test events 2000 --event lava_provider_reported --node https://public-rpc-testnet2.lavanet.xyz:443/
```

### Disconnections
these mean the provider's endpoint did not respond and can be due to the following problems
* TLS certificate outdated or not set
* misconfiguration proxying the requests to the provider service
* provider service not running
* wrong endpoint in the stake entry on chain: can be fixed by running 
```bash
lavad tx pairing modify-provider ${CHAIN} --endpoints "${ENDPOINTS}" --geolocation ${GEOLOCATION} --from ${WALLET}
```
** make sure the url in the endpoint is the provider grpc listening address and not your node url **

** Disconnection problems can be identified by running the test command **
```bash
lavap test rpcprovider ${PUBLIC_ADDRESS}
```

### Errors
these mean the provider service connection was solid but all relays turned to be errors, might be caused by the following:
* disabled chain - the provider doesnt have access to the node, or a verification does not pass, and the chain is disabled
* unexpected errors
* timeouts

** errors can be identified by looking at the provider service logs, it is recommended to run with debug if repeatedly getting jailed **

