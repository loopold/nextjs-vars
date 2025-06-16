FROM node:18-alpine
WORKDIR /app
COPY hello-next-app/package*.json ./
RUN npm install
COPY hello-next-app .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
