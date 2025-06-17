FROM node:18-alpine
WORKDIR /app
COPY hello-next-app/package*.json ./
RUN npm install
COPY hello-next-app .
RUN npm run build
EXPOSE 3000

COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "start"]
