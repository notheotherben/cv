FROM rust:slim-bookworm

ARG TRUNK_VERSION=0.16.0

RUN apt-get update && apt-get install -y build-essential pkg-config libssl-dev wget

# Install trunk to enable builds
RUN wget -qO- https://github.com/thedodd/trunk/releases/download/v${TRUNK_VERSION}/trunk-x86_64-unknown-linux-gnu.tar.gz | tar -xzf - -C /usr/local/bin

RUN rustup target add wasm32-unknown-unknown

ADD ./Cargo.toml /app/Cargo.toml
ADD ./Cargo.lock /app/Cargo.lock

WORKDIR /app

# Run the cargo build once to download all the dependencies
RUN trunk build --release || true

RUN rm -rf src

ADD ./src /app/src
ADD ./assets /app/assets
ADD ./index.html /app/index.html

# Build the actual project in release configuration
RUN trunk build --release

FROM caddy:alpine

COPY --from=0 /app/dist /usr/share/caddy