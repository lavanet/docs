---
slug: /provider-load-balancing
title: Load Balancing
---

# Load Balancing

## Load Balancing in Lava's Protocol

Providers that want to run multiple RPC Provider service for the same chain, under the same account are able to do so. The only thing that needs to be done is take into consideration the header `lava-lb-unique-id` in the request header.

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
