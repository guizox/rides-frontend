# LOCAL BUILD
FROM node:10 as build-stage
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node package*.json ./
RUN npm --verbose install
COPY  --chown=node public/ ./public/
COPY  --chown=node src/ ./src/
COPY --chown=node tsconfig.json ./
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /home/node/app/build /usr/share/nginx/html
EXPOSE 80