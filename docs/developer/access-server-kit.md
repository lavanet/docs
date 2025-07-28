---
slug: /smart-router
title: Smart Router
---
# Smart Router
## Overview

Smart Router is an enterprise-grade RPC (Remote Procedure Call) aggregation and optimization platform that delivers mission-critical performance for blockchain applications. It intelligently routes traffic to the best-performing nodes based on real-time metrics, providing built-in failover, error recovery, transaction acceleration, intelligent caching, and comprehensive monitoring all through an intuitive user interface.

Enterprises leverage Smart Router to optimize their blockchain infrastructure’s reliability, performance, and cost efficiency while significantly improving their on-chain user experience.

<br/>
## Architecture Overview
```
┌────────────────────────────────────────────────────────────────────────────┐
│                              Smart Router                                  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│                           ┌─────────────────┐                              │
│                           │   RPC Consumer  │                              │
│                           │   (Routing)     │                              │
│                           └─────────┬───────┘                              │
│                                     │                                      │
│  ┌─────────────────┐    ┌───────────▼───────────┐    ┌─────────────────┐   │
│  │  RPC Provider   │    │    RPC Provider       │    │  RPC Provider   │   │
│  │   (Connection)  │    │    (Connection)       │    │   (Connection)  │   │
│  └─────────┬───────┘    └───────────┬───────────┘    └─────────┬───────┘   │
│            │                        │                          │           │
│  ┌─────────▼───────┐    ┌───────────▼───────────┐    ┌─────────▼───────┐   │
│  │  Blockchain     │    │   Blockchain          │    │  Blockchain     │   │
│  │     Node        │    │      Node             │    │      Node       │   │
│  └─────────────────┘    └───────────────────────┘    └─────────────────┘   │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
```

---

## **Key Features**

### Monitoring and Routing

- **Dynamic QoS Scoring**: Smart Router maintains real-time Quality of Service (QoS) scores for each RPC provider across every supported blockchain. These scores determine optimal routing for incoming requests.
- **Performance-Based Routing**: The system continuously probes RPC nodes, monitoring their health, performance metrics, and block synchronization status. Nodes with superior uptime, lower latency, and better synchronization receive higher priority for serving requests.

### Automatic Failover and Error Recovery

- **Failover**: When a node becomes unavailable, Smart Router automatically routes traffic to healthy alternatives without service interruption.
- **Error recovery**: Requests that encounter errors are automatically retried on alternative nodes to ensure successful completion.

### Double-layered Caching System

- **Double-layered Architecture**:
    1. **Provider-Level Cache**: Dedicated caching for each individual RPC node
    2. **Chain-Level Cache**: Aggregated caching across all RPC nodes for each blockchain
- **Cache Population**: Built-in caching populator automatically caches frequently requested data at both provider and chain levels, with customizable timeframes and request types.

### Transaction Acceleration

- **Simultaneous Broadcasting**: When transactions are submitted, Smart Router broadcasts them to all available providers simultaneously. This ensures transactions reach the network as quickly as possible, maximizing speed and success rates.

### Data Consistency Management

- **Block Tracking**: Smart Router maintains awareness of the latest block on each blockchain to ensure data consistency.
- **Chronological Validation**: Responses containing outdated block information are automatically rejected and retried on alternative nodes. Nodes providing stale data receive lower QoS scores, reducing their selection priority.

### Session Stickiness

- **Consistent Provider Selection**: Enables applications to maintain connections with specific providers throughout a session for better reliability and performance by simply adding a stickiness header with a unique identifier.

### Cross-Validation Capabilities

- **Multi-Provider Verification**: Requests can include special headers to activate cross-validation, sending the same request to multiple providers simultaneously. Provider responses are compared to establish quorum on the correct answer.

When a quorum can’t be reached, a detailed report including all provider responses is returned to the client.

### Global Deployment Optimization

- **Geographic Distribution**: Smart Router can be deployed across multiple geolocations to minimize latency for users across the globe.
- **Automatic Geographic Failover**: If one Smart Router instance experiences issues, requests are automatically routed to healthy instances in the closest location, maintaining continuous service availability.

### Comprehensive Metrics and Monitoring

- **Real-Time Analytics**: Track error rates, QoS scores, latency metrics, and overall RPC performance across all providers.
- **Performance Insights**: Gain visibility into provider performance trends and identify optimization opportunities.

---


## **Architecture Components**

Smart Router wraps together Lava Protocol’s core components - the RPC Consumer and RPC Provider, to create a robust RPC management platform:

### RPC Consumer

The [routing engine](https://github.com/lavanet/lava/tree/main/protocol/rpcconsumer) that intelligently directs requests between providers based on performance metrics, availability, and configured policies.

### RPC Provider

The connection layer that interfaces with underlying RPC nodes, processes user requests, and monitors health and performance metrics in real-time.


---

## **Platform Characteristics**


### Off-Chain Operation

Smart Router operates entirely off-chain, ensuring no blockchain-specific dependencies or limitations.

### Vendor Agnostic

Compatible with any RPC provider, giving you complete freedom in provider selection and vendor relationships.

### Chain Agnostic

Supports all major blockchain networks without requiring chain-specific configurations or modifications.

### Flexible Deployment

Available as both managed cloud service and on-premises deployment options to meet your security and compliance requirements.

### Easy Management

Simple deployment process with intuitive configuration and management interfaces for seamless integration into your existing infrastructure.

### Comprehensive Observability

Full visibility into system performance, provider health, and request routing decisions through detailed logging and monitoring capabilities.









