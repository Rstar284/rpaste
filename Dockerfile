FROM rust:1-alpine3.14 as builder
# Choose a workdir
WORKDIR /usr/src/app

#Install musl-dev and its toolchain
RUN apk add --no-cache musl-dev && rustup toolchain install stable-x86_64-unknown-linux-musl
# Copy Cargo.toml to get dependencies
COPY Cargo.toml .
COPY Cargo.lock .
COPY ./src src
COPY ./upload upload
RUN cargo +stable build --release

FROM alpine:latest
RUN apk update && apk upgrade  

# Copy bin from builder to this new image
COPY --from=builder /usr/src/app/target/release/rpaste /usr/bin/rpaste

CMD ["/usr/bin/rpaste"]