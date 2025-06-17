# NEXT.JS and variables

Below is a minimal, environment-independent Next.js 14+ hello-world example using the App Router. It demonstrates how to inject environment variables at runtime (not build time) using a Docker entrypoint script, making them available in the browser.

We avoid installing Node.js, npm, or running `npx create-next-app@latest hello-next-app` on the local machine, we will generate and build your Next.js app entirely inside a Docker container.

## Put the code into the app

```sh
docker run --rm -it -v $PWD:/app -w /app node:18-alpine npx create-next-app@latest hello-next-app
```
I changed only one default. Code inside a `src/` directory? to `Yes`

## Build an image

```sh
docker build -t my-next-app .
docker run -p 3000:3000 my-next-app
```

## Finally

```sh
docker run --rm --env-file .env.development -p 3000:3000 my-next-app
docker run --rm --env-file .env.production -p 3001:3000 my-next-app
```
