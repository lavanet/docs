---
slug: /smart-router
title: Smart Router
---
# Smart Router
## Overview

The Enterprise RPC Smart Router is an enterprise-grade RPC (Remote Procedure Call) aggregation and optimization platform that delivers mission-critical performance for blockchain applications. It intelligently routes traffic to the best-performing nodes based on real-time metrics, providing built-in failover, error recovery, transaction acceleration, double-layered caching, and comprehensive monitoring.

Enterprises like [Fireblocks](https://www.lavanet.xyz/fireblocks) leverage Smart Router to optimize their blockchain infrastructure’s reliability, performance, and cost efficiency while significantly improving their on-chain user experience.

<br/>
## Architecture
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

