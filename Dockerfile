FROM rust:slim-buster

RUN apt-get update && apt-get install -y build-essential pkg-config libssl-dev

RUN cargo install --locked trunk wasm-bindgen-cli

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
RUN ls /app/ /app/src/ /app/src/style/ && trunk build --release

FROM caddy:alpine

COPY --from=0 /app/dist /usr/share/caddy