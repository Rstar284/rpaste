FROM rust:1.40 as builder
WORKDIR /usr/src/rpaste

RUN rustup target add x86_64-unknown-linux-musl
RUN USER=root cargo init
COPY Cargo.toml Cargo.lock ./
COPY ./src src
RUN cargo build --release
RUN cargo install --target x86_64-unknown-linux-musl --path .

FROM rust:alpine3.14
RUN apk update && apk upgrade
COPY --from=builder /usr/local/cargo/bin/rpaste /usr/local/bin/rpaste

USER 1000
EXPOSE 8000
CMD ["rpaste"]
