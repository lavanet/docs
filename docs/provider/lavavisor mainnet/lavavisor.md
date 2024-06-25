---
slug: /lavavisor
title: Lavavisor
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **LavaVisor**


## 📄 Overview 
LavaVisor acts as a service manager for the Lava protocol application binaries. Its duty is to manage protocol versioning and coordinate seamless transitions to updated protocol versions.

When an upgrade becomes necessary, either because the current protocol version has dropped below the minimum version or not compliant with the recommended target version, LavaVisor’s responsibilities begin. LavaVisor orchestrates the necessary upgrade process in an automated manner, ensuring that the protocol version is aligned with the current standards and capabilities set by the minimum and target versions.

## 🧰 Setup

:::tip
Some older versions of the `lava-protocol` binary (now `lavap`) lack the version command, which LavaVisor employs to validate binary versions. Please ensure you've updated to the most recent version of LavaVisor or you may face errors.
:::

Lavavisor is added as a `LAVA_ALL_BINARIES` parameter in the Makefile. As such, any script that executes `install-all` such as `start_env_dev.sh` will automatically install Lavavisor binary. 

To ensure that a LavaVisor binary is created, navigate to your local `/lava` directory and run  **`make install-all`**


### Prerequisites ✅

1. Go version above than 1.19

### Getting Started 🔥

To configure your Lavavisor properly, you have two options to choose from:

- [**Process Wrapper**](/lavavisor-wrap): This option offers advanced capabilities, including compatibility with keyring-based operating systems and enhanced control over your processes.

- [**Service Manager**](/lavavisor-services): If you are managing multiple services on a single machine, the service manager may be a suitable choice. It maintains a single Lavavisor instance, resulting in fewer queries.

### Recommended Route ⤵️

We recommend the **process wrapper** for its extensive feature set, making it ideal for scenarios that require compatibility with keyring-based operating systems and greater process control.

The **service manager** is beneficial when you have numerous services on a single machine, as it manages a single Lavavisor instance, reducing query overhead. However, please note that it may not be the best choice for environments using keyring-backend operating systems or for those working with Docker or Kubernetes services.
