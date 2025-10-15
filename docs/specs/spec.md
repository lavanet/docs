---
slug: /spec
title: Specifications
---

# Specifications (Specs)

import RoadmapItem from '@site/src/components/RoadmapItem';

# Specifications

Specifications (specs) are the foundational blueprints for Lava Network’s multichain support. Presented in JSON format, they detail the bare minimum requirements for an API to run on Lava Network. Through specs, Lava Network determines which chains and methods are supported and enabled, as well as establishes the costs, requirements, and verifications for them.

Whenever the ecosystem demands a new API, a new spec is integrated. This dynamic approach incorporates modularity and extensibility directly into the protocol and ensures Lava Network remains current and adaptable. 


## Key Concepts

### Index
The index is the name of a spec. Any time a spec is referenced, it is identified by its index.

### Imports
Imports are references to borrowed functions from other sources. APIs or chains that share similar architecture can import methods from existing specs by referencing their index. This avoids duplicating work and makes integration more efficient.

### API Collection
Each specification contains an API collection. This defines the list of available methods or APIs that are active, along with their interfaces (such as REST, gRPC, JSON-RPC, Tendermint RPC, and others).
It outlines the methods providers must support and consumers can call.

### Compute Units (CU)
Every API call has a computational overhead. Lava measures this using compute units (CUs), which assign a nominal cost to each call.

- Consumers can see the resource intensity of their API calls.
- Providers are rewarded according to the computational cost of the calls they handle.

This ensures transparent and fair resource allocation.

### Add-Ons
Add-Ons are optional methods and APIs beyond the basic requirements for a chain. They function like plugins or modules. Providers can choose to support them for additional rewards, while consumers can request them for specialized use cases.
This flexibility allows specs to define supplementary functionalities without overloading the base requirements.

### Extensions
Extensions are adjustments or enhancements to existing methods and APIs within a spec. They allow for tweaks or optimizations to support special use cases, such as archival access.
Extensions ensure both providers and consumers can handle scenarios that require more advanced functionality.


You can see the specifications available on Lava Mainnet [here](https://github.com/lavanet/lava/tree/main/specs/mainnet-1/specs). 
Specifications are usually created and updated by Lava Network core contributors. You can learn more about the process by checking out the [Add new specification](add-spec) guide.
