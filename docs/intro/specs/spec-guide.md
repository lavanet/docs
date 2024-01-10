---
slug: /spec-guide
title: Spec Proposal Guide
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spec Proposal Guide (Walk-thru)

## Overview 🔎

This guide is intended to assist someone with the process of writing and designing a spec proposal in a step-by-step way. The process of creating or maintaining a spec can seem overwhelming initially, but is actually a straightforward process once you understand the fundamentals. Follow along below to get through the entire process of making a specification.


## Step 1: Create the Proposal/JSON

> Create a specification `JSON` file
> 

Creating a specification involves multiple steps and can be an involved process. One of the best exercises you can do to prepare yourself is to visit existing specs and inspect them. Looking at existing specs can give a future spec creator a feel for the standard structure and layout of a spec. 

There are three ways to start in the creation of a spec

1. 📒**Cookbook**  - All of the specs which are currently live on Lava can be found here - in [the Lava cookbook](https://github.com/lavanet/lava/tree/main/cookbook/specs). Use one of them to get started, changing fields as needed.
2. 📄**Template -** A blank template is available, right [here](/spec-reference#-file-structure) from the docs. Simply fill in the blanks as you progress.
3. ✏️**From Scratch -** Writing a spec completely from scratch gives the opportunity to avoid unnecessary messiness and superfluous fields.

<br />

### Define Proposal

The recommended approach is to start from scratch and go field by field. Let’s start with a blank JSON and create our top-level field. This key is called `proposal` and it describes the specifications we’re about to propose:

```json
{
    "proposal": {
        "title": "Add Specs: X",
        "description": "Adding new specification support for relaying X data on Lava",
		}
}
```

The format of it is pretty much standard, so you can copy the example above and replace `X` with the name of the API being created.

🔖REFERENCE: [`Proposal`](/spec-reference#proposal)

<br />

### Define Specs

Each proposal introduces new `specs` to Lava. As mentioned elsewhere, specs are the minimum requirements that an API provider must meet in order to serve the API. Lava uses several fields to establish the initial parameters for a spec including an `index` , a `name`, the `data_reliability_enabled`  marker, and the`minimum_stake_provider` must make. 

These fields combined with others make the first section of a spec:

```json
{
    "proposal": {
        "title": "Add Specs: X",
        "description": "Adding new specification support for relaying X data on Lava",
        "specs": [
            // highlight-start
            {
                "index": "X",
                "name": "X mainnet",
                "enabled": true,
                "reliability_threshold": 268435455,
                "data_reliability_enabled": true,
                "block_distance_for_finalized_data": 1,
                "blocks_in_finalization_proof": 1,
                "average_block_time": 5000,
                "allowed_block_lag_for_qos_sync": 2,
                "shares": 1,
                "min_stake_provider": {
                    "denom": "ulava",
                    "amount": "50000000000"
                },
            }
            // highlight-end
        ]
    }
}

```

 🔍 Let’s investigate these fields one-by-one:


<details> <summary> `index` </summary>

The index is the universal identifier for a spec. The index must not be shared by any other spec. It is what will be referenced anywhere else the spec is referenced or imported. The naming convention method for an index is to use all caps, no spaces. Shorter/more abbreviated indexes are preferred. Optionally, to truncate long indexes, many specs employ the strategy of dropping vowels or shortening words (e.g. `OPTM` for Optimism, `STRK` for Starknet, or`AGR` for Agoric) .

</details>

<details> <summary> `name` </summary>

The name is the longform descriptive identifier for a spec. The name should indicate what exactly the spec is/distinguish from specs which serve similar data. If it is a testnet or mainnet of a specific blockchain it should say so.

</details>

<details> <summary> `enabled` </summary>

The enabled field describes whether the spec is active. There are times when a spec is defined but not used - or when a spec is to be deactivated temporarily. In our case, this should default to `true`.

</details>

<details> <summary> `reliability threshhold` </summary>

Reliability threshold sets the frequency of reliability related messages. By default, we set this to `268435455` which is the minimum and efficient choice. If you’d like to set it higher - there are more details that can be learned here. [/spec-reference#terms]

</details>

<details> <summary> `data_reliability_enabled` </summary>

Data reliability should be enabled unless there is a compelling reason to disable it! The default value here is `true`. This means Lava protocol will work to ensure data is accurate by doing data reliability checks. Note that if you are creating a spec for something other than a blockchain - you will want to set this to `false`. 

⚠️ As of `lava-testnet-2` support for data reliability on diverse APIs is work-in-progress.

</details>

<details><summary> `block_distance_for_finalized_data` </summary>

This field defines the number of blocks that should be considered safe from chain reorganization; it varies from chain to chain. Look to other similarly architected specs for suggested values.

</details>

<details><summary> `blocks_in_finalization_proof` </summary>

This field defines the number of blocks that should be found in a finality proof; this will vary from chain to chain. Look to other similarly architected specs fo suggested values.

</details>

<details><summary> `average_block_time` </summary>

The amount of time, on average, that a block passes in milliseconds. This field is used in several algorithms by the protocol to ensure provider quality of service.

</details>

<details><summary> `allowed_block_lag_for_qos_sync` </summary>

This is the maximum amount of blocks that can pass before the data a provider serves is considered stale. For faster blockchains/data sources, more blocks will be allowed. For slower blockchains/data sources, less blocks is suitable. Look to other similarly architected specs for values.

</details>

<details><summary> `min_stake_provider` </summary>

This field defines the minimum amount that a provider must have staked to serve this API. This value can remain identical with default values supplied by all other specs during our testnet. As of `lava-testnet-2` ,the amount is `5000000` in denom `ulava`. 

</details>

🔖REFERENCE: [`specs`](/spec-reference#specs)

Once each of these fields has been dealt with, we’re ready to move onto setting up inheritance!


## Step 2: Inheritance

> Inherit attributes from an existing spec.
> 

Before defining any APIs, it’s wise to pull others that already exist to save work. Most APIs in Lava use common methods and can be created from specs already in use on-chain. In Lava, we call this process of borrowing from earlier specs **inheritance**. Specs use inheritance to eliminate redundancy, minimize size, and save time. An additional benefit - as inherited specs are updated - their descendent specs automatically pull in their updates! Inheritance makes things easy.

### Imports

To inherit, a new spec, use the `imports` field:

```json
"specs": [
            {
                "index": "X",
                "name": "X mainnet",
                "enabled": true,
								// highlight-start
                "imports": [
                    "ETH1"
                ],
								// highlight-end
                "reliability_threshold": 268435455,
                "data_reliability_enabled": true,
                "block_distance_for_finalized_data": 1,
                "blocks_in_finalization_proof": 1,
                "average_block_time": 5000,
                "allowed_block_lag_for_qos_sync": 200,
                "min_stake_provider": {
                    "denom": "ulava",
                    "amount": "50000000000"
                },
```

Common imports will include one of the following:

```json
"COSMOSSDK"      # Cosmos SDK Standard (i.e. Cosmos Chains)
"COSMOSSDK45DEP" # Cosmos SDK v0.45 deprecated apis
"COSMOSSDKFULL"  # Cosmos SDK + COSMWASM
"ETH1"           # Ethereum-based chains supporting standard EVM RPC calls
"SOLANA"         # Solana-based chains
"OPTM"           # Optimism-based cahins
```

:::info
More often than not, a spec will only use one of the aforementioned imports. Specs are completely modular and can import any other specs. This modular design pattern comes in handy, for example, when designing a spec for mainnet and a spec for testnet. Usually, the testnet spec simply inherits the mainnet spec and requires no further configurations.
:::

### Inheritance APIs

If you’re picky about the imports you want to do, it is possible to specify individual APIs, using the `inheritance_apis` field under an `api_collection`. If you’re confused don’t worry - we’ll explain more about API Collections next. For now, it is strongly recommended that you use imports instead. Remember, you can always disable unused `apis` and `api_collections`.

## Step 3: API Collections

> Specify the API collections and interfaces which are mandatory for Providers.

Each spec can contain several categories of API Collections. API Collections are split across different interfaces, although they are constructed similarly. If a spec only contains the APIs of another spec it imports, it may not be necessary to define API collections at all…

Some example API Collections are defined (with differences *highlighted*) below:

<Tabs>
<TabItem value='jsonrpc' label='JSONRPC'>

```json
"api_collections": [
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "jsonrpc",
            "internal_path": "",
            "type": "POST",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```
</TabItem>

<TabItem value='grpc' label='gRPC'>

```json
"api_collections": [
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "grpc",
            "internal_path": "",
            "type": "",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```
</TabItem>

<TabItem value='rest' label='REST'>

```json
"api_collections": [
    //REST - GET
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "rest",
            "internal_path": "",
            "type": "GET",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
    //REST - PUT
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "rest",
            "internal_path": "",
            "type": "POST",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```

</TabItem>

<TabItem value='tendermint' label='TendermintRPC'>

```json
"api_collections": [
    {
        // highlight-start
        "enabled": true,
        "collection_data": {
            "api_interface": "tendermintrpc",
            "internal_path": "",
            "type": "",
            "add_on": ""
        },
        // highlight-end
        "apis": [],
        "headers": [],
        "inheritance_apis": [],
        "parse_directives": [],
        "verifications": [],
    },
]
```
</TabItem>
</Tabs>

Each API collection is composed of various pieces,

### AddOn

Leaving this field as a blank string is the default and expected input. If you add anything to the string, the API Collection will be processed as an addon to normal Provider behavior and treated as optional to providers. 

### APIs

This will contain

### Headers

Leave this blank for now.

### Parse Directives

Because every API returns data in a different format, Lava protocol establishes a standardized way to deal with data parsing. These standards are called `parse directives`. Parse directives are a (/spec-reference#parsing)

:::warn

🔥 Get_BlockNum and Get_Block_by_Num must be defined for Lava data reliability checks to succeed. 

:::

<br />

## Step 4: New APIs

> Design APIs which were not inherited from another spec.

### Compute Units

Describes the number of compute units which each API call expends. This number is a proxy for the compute intensiveness/difficulty and therefore the cost of calling this API. Compute unitminimum 10 units


## Step 5: Verifications

> Define tests which confirm that a Provider is serving the proper data
> 

Earlier, we looked at Parse Directives as a means for f

## Step 6: Addons/Extensions (Optional APIs)

> Define optional API Collections which a Provider may choose to serve for more CU
> 

Specs are both highly modular and composable. Sometimes, the minimum requirements of a provider may not be satisfactory for all consumers on the network. A great example is for archive nodes;   can be Addons add new functionality

### Creating Addons

Making an Addon is very similar to making any other API Collection. The sole difference is that the `add_on` field must contain a unique name.

```json
{
                        "enabled": true,
                        "collection_data": {
                            "api_interface": "jsonrpc",
                            "internal_path": "",
                            "type": "POST",
														// highlight-start
                            "add_on": "debug"
														// highlight-end
                        },
```

### Creating Extensions

Making an Extension follows a slightly different process than making an Addon. To

```json
"extensions": [
                            {
                                "name": "archive",
                                "cu_multiplier": 5,
                                "rule": {
                                    "block":254
                                }
                            }
                        ]
```

```json
"extensions": [
                            {
                                "name": "censorship",
                                "cu_multiplier": 2,
                                "rule": {
                                    "block":10
                                }
                            }
                        ]
```