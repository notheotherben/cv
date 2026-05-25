# My Resume
**My personal resume in a website**

This is a web-based version of my resume done primarily because I find it
far easier to make something look good on the web than I do in Word or
Google Docs. It's also an opportunity to showcase some of my frontend and
backend development skills, in this case leveraging Rust and WASM cross-compilation
through [Yew](https://yew.rs) and [Trunk](https://trunkrs.dev).

The website itself is visible at [benjamin.pannell.dev](https://benjamin.pannell.dev)
and is deployed to GitHub Pages, with an Azure Storage Account acting as a
secondary host for redundancy.

Of course, for those of you looking to do something slightly different, there's
also a Docker image available on [Docker Hub](https://hub.docker.com/r/sierrasoftworks/resume).

## Development
```bash
cargo install --locked trunk wasm-bindgen-cli # Install the tools you need
trunk serve # Start up Trunk to automatically compile your Rust changes
```

## Docker
```bash
docker build -t notheotherben/cv:dev . # Build the image
docker run --rm -d -p 8081:80 notheotherben/cv:dev # Run the image, exposing port 80
```