# NEXT.JS and variables

Below is a minimal, environment-independent Next.js 14+ hello-world example using the App Router. It demonstrates how to inject environment variables at runtime (not build time) using a Docker entrypoint script, making them available in the browser.

We avoid installing Node.js, npm, or running `npx create-next-app@latest hello-next-app` on the local machine, we will generate and build your Next.js app entirely inside a Docker container.

