# Development Dockerfile for Angular with ng serve
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port ng serve runs on
EXPOSE 4200

# Start Angular in dev mode
CMD ["npm", "run", "start"]
