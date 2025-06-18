# NEXT.JS and variables

Below is a minimal, environment-independent Next.js 14+ hello-world example using the App Router. It demonstrates how to inject environment variables at runtime (not build time) using a Docker entrypoint script, making them available in the browser.

We avoid installing Node.js, npm, or running `npx create-next-app@latest hello-next-app` on the local machine, we will generate and build your Next.js app entirely inside a Docker container.

⚠️ I'm not a Next.js developer. This is a DevOps note.

## Steps to reproduce creating a code

### Put the code into the app

```sh
docker run --rm -it -v $PWD:/app -w /app node:18-alpine npx create-next-app@latest hello-next-app
```
I changed only one default. Code inside a `src/` directory? to `Yes`

Then I made a few changes – you can see these in the commits (and I fixed some typos). You can compare Initial commit with later

---

## Run it

Get the code and build the image
```sh
git clone https://github.com/loopold/nextjs-vars.git
cd nextjs-vars
docker build -t my-next-app hello-next-app/
```

Run
```sh
docker run --rm --env-file .env.development -p 3002:3000 my-next-app
docker run --rm --env-file .env.production -p 3001:3000 my-next-app
```
or
```sh
docker-compose up -d
```

### Get the output

Variables that were read from the `.env.development` file.: http://localhost:3002
```json
Hello World
{
  "NEXT_PUBLIC_APP_URL": "https://portal.dev.example.com/",
  "NEXT_PUBLIC_API_URL": "https://api.dev.example.com/",
  "NEXT_PUBLIC_STORE_IOS_URL": "https://apps.apple.com/us/app/example/id6123456789",
  "NEXT_PUBLIC_STORE_ANDROID_URL": "https://play.google.com/store/apps/details?id=com.example"
}
```

Server and Client Components demo: http://localhost:3002/hello
```
Hello World from server component
Result: Hello from server action!
Hello Next.js! from client component
Result from route handler: Hello from route handler!
```

### Clean
```sh
docker compose down     # if compose was used
docker rmi my-next-app:latest
```
