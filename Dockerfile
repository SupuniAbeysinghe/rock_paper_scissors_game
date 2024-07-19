FROM node:14 AS build

WORKDIR /app

COPY . .



FROM nginx:alpine

COPY --from=build /app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
