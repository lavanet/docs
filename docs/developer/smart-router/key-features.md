---
slug: /features
title: Key Features
---

# Key Features

## Monitoring and Routing

**Dynamic QoS Scoring**: Smart Router maintains real-time Quality of Service (QoS) scores for each RPC provider across every supported blockchain. These scores determine optimal routing for incoming requests.


**Performance-Based Routing**: The system continuously probes RPC nodes, monitoring their health, performance metrics, and block synchronization status. Nodes with superior uptime, lower latency, and better synchronization receive higher priority for serving requests.
<br/>

## Automatic Failover and Error Recovery

**Failover**: When a node becomes unavailable, Smart Router automatically routes traffic to healthy alternatives without service interruption.

**Error recovery**: Requests that encounter errors are automatically retried on alternative nodes to ensure successful completion.
<br/>

## Double-layered Caching System

**Doוble-layered Architecture**:

1. **Provider-Level Cache**: Dedicated caching for each individual RPC node
2. **Chain-Level Cache**: Aggregated caching across all RPC nodes for each blockchain

**Cache Population**: Built-in caching populator automatically caches frequently requested data at both provider and chain levels, with customizable timeframes and request types.
<br/>

## Transaction Acceleration

**Simultaneous Broadcasting**: When transactions are submitted, Smart Router broadcasts them to all available providers simultaneously. This ensures transactions reach the network as quickly as possible, maximizing speed and success rates.
<br/>

## Data Consistency

**Block Tracking**: Smart Router maintains awareness of the latest block on each blockchain to ensure data consistency.

**Chronological Validation**: Responses containing outdated block information are automatically rejected and retried on alternative nodes. Nodes providing stale data receive lower QoS scores, reducing their selection priority.
<br/>

## Session Stickiness

**Consistent Provider Selection**: Enables applications to maintain connections with specific providers throughout a session for better reliability and performance by simply adding a stickiness header with a unique identifier.
<br/>

## Cross-Validation

**Multi-Provider Verification**: Requests can include special headers to activate cross-validation, sending the same request to multiple providers simultaneously. Provider responses are compared to establish quorum on the correct answer.

When a quorum can’t be reached, a detailed report including all provider responses is returned to the client.
<br/>

## Deployment Optimization

**Geographic Distribution**: Smart Router can be deployed across multiple geolocations to minimize latency for users across the globe.

**Automatic Geographic Failover**: If one Smart Router instance experiences issues, requests are automatically routed to healthy instances in the closest location, maintaining continuous service availability.

**Auto-Scaling**: Smart Router automatically scales to handle any traffic volume without affecting performance.
<br/>

## Comprehensive Metrics and Monitoring

**Real-Time Analytics**: Track error rates, QoS scores, latency metrics, and overall RPC performance across all providers.

**Performance Insights**: Gain visibility into provider performance trends and identify optimization opportunities.