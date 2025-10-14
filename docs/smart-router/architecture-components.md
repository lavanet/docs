---
slug: /architecture-components
title: Architecture Components
---

# Architecture Components

The Enterprise RPC Smart Router wraps together Lava Protocol’s core components - the RPC Consumer and RPC Provider, to create a robust RPC management platform.
<br/>

## RPC Consumer

The open source [RPC routing engine](https://github.com/lavanet/lava/tree/main/protocol/rpcconsumer) that intelligently directs requests between providers based on performance metrics, availability, and configured policies.

## RPC Provider

The connection layer that interfaces with underlying Lava RPC nodes, processes user requests, and monitors health and performance metrics in real-time.
