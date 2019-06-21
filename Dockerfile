FROM node:9-slim
ENV PORT 4000
EXPOSE 8080
WORKDIR /usr/src/app
COPY . .
CMD ["npm", "start"]
