# My Resume [![Build Status](https://travis-ci.org/SPARTAN563/cv.svg?branch=main)](https://travis-ci.org/SPARTAN563/cv)
**My personal resume in a website**

This is a web-based version of my resume done primarily because I find it
far easier to make something look good on the web than I do in Word or
Google Docs.

The website itself is visible at
[cv.sierrasoftworks.com](https://cv.sierrasoftworks.com) and is hosted
on a Kubernetes cluster, deployed with [Helm](https://helm.sh) and served
by a combination of [Traefik](https://traefik.io) and [NGINX](https://www.nginx.com).

The website is written on top of [Vue.js](https://vuejs.org) and makes
use of my minimalist [vue-template](https://github.com/SierraSoftworks/vue-template)
to keep the development and build time dependencies to a minimum while
still being easy to develop on and maintain.

## Development
```bash
npm install # Install everything you need
npm run watch # Compile your TypeScript changes on the fly
npm start # Start up Browser-Sync to automatically refresh when changes are made
```
