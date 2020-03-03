FROM node:13.7.0-alpine AS web-build 
WORKDIR /usr/src/web
ADD ./package*.json ./
RUN npm install 
ADD . .
RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=web-build /usr/src/web/dist /usr/share/nginx/html
COPY config/nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
