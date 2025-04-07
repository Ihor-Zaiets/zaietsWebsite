# Build Angular app
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build --omit=dev

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/zaiets-website /usr/share/nginx/html
