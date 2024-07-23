---
slug: /provider-load-balancing
title: Load Balancing
---

# Load Balancing

## Overview

Load balancing is a technique used to distribute incoming network traffic across multiple servers to ensure that no single server is overwhelmed with requests. This helps to improve the performance, reliability, and scalability of a service by spreading the load across multiple servers.

If you wish to run multiple instances of the Lava RPC Provider service for the same chain, you can use a load balancer to distribute incoming requests across these instances. This can help to improve the performance and reliability of your service and increase your QoS.

## Load Balancing in Lava

When a client sends a request to the Lava RPC Provider service, it includes a custom header called `lava-lb-unique-id` in the request header.
This header contains a unique identifier for the request, which is used by the load balancer to determine which backend server should handle the request.

:::warning
Ignoring this header when load balancing providers on the same chain with under the same wallet account will lead to consistency issues, as the load balancer will not be able to route requests from the same session to the same RPC Provider instance. This will affect your RPC Provider QoS score, and data reliability.
:::

## Recommended Setup

We recommend using a load balancer that supports consistent hashing based on a unique request ID. This will ensure that requests from the same session are always routed to the same backend server, which is important for maintaining consistency in the service.

You can use a variety of load balancers to achieve this, such as Nginx, Envoy, or any other load balancer that supports routing using the request headers and gRPC. In this guide, we will provide an example configuration for Nginx, which is a popular open-source web server and reverse proxy server.

:::tip
This is the official recommendation from Lava Foundation. You can use any load balancer that supports consistent hashing based on a unique request ID, but it will require a deep understanding of the load balancer configuration and the Lava RPC protocol, and therefore includes risk.
:::

You can see in the diagram below an example for a single chain setup with multiple instances of the Lava RPC Provider service running behind a load balancer. The load balancer receives incoming requests from clients and routes them to the backend servers based on the consistent hashing load balancing algorithm:

![Provider Load Balancing Diagram](/img/tutorial/provider/provider-load-balancing-diagram.png)

This setup is for a single chain only, and for a single provider wallet. You can multiply this setup for all the chains that you would like to provider. If you have multiple provider wallets, you will need to stake them separately.

You can run your instances on the same machine or on different machines, as long as they are accessible to the load balancer, and that the ports that they are listening on are configured correctly in you load balancer configuration.

### Nginx Configuration

In Nginx for example, you can use the following configuration to pass the header to the upstream:

```nginx
# Define an upstream block to load balance traffic
upstream backend_servers {
    # Use consistent hashing based on a unique request ID for load balancing
    hash $http_lava_lb_unique_id consistent;

    # Define the backend servers with their respective ports
    server <PROVIDER_1_IP:PROVIDER_1_PORT>;
    server <PROVIDER_2_IP:PROVIDER_2_PORT>;
    # ... Add more servers as needed
}

# Define the server block to handle incoming requests
server {
    # Listen for incoming HTTP traffic on port 80
    listen 80;

    # Listen for incoming HTTPS traffic on port 443, using SSL and HTTP/2
    listen 443 ssl;

    # Enable HTTP/2
    http2 on;

    # Set the server name
    server_name <YOUR_DOMAIN_NAME_HERE>;

    # Provide the paths to your SSL certificate and key files
    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    # Define a location block to handle requests to the root URL
    location / {
        # Pass gRPC requests to the defined upstream block 'backend_servers'
        grpc_pass grpc://backend_servers;
    }
}
```

Note the crucial part of the configuration, the `hash $http_lava_lb_unique_id consistent;` line.

```nginx
upstream backend_servers {
    hash $http_lava_lb_unique_id consistent;

    # ...
```

This line will make sure that there will be consistency throughout a single session.
