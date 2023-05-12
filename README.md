# My Resume
**My personal resume in a website**

This is a web-based version of my resume done primarily because I find it
far easier to make something look good on the web than I do in Word or
Google Docs. It's also an opportunity to showcase some of my frontend and
backend development skills, in this case leveraging Rust and WASM cross-compilation
through [Yew](https://yew.rs) and [Trunk](https://trunkrs.dev).

The website itself is visible at [benjamin.pannell.dev](https://benjamin.pannell.dev)
and because choosing the right tool for the job is important, it is hosted on
Azure Static Web Apps, which is a great fit for this type of website as it entirely
avoids the complexity of managing separate infrastructure.

Of course, for those of you looking to do something slightly different, there's
also a Docker image available on [Docker Hub](https://hub.docker.com/r/sierrasoftworks/resume)
and a GitHub action which deploys the website to an Azure Storage Account with
fronting CDN to provide redundancy should the static web app go down.

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