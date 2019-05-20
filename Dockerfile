### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10-alpine as builder

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
ARG env=docker
ENV ENV_CONFIG=$env

ARG API_URL=//127.0.0.1:8080/api/v1/
ENV API_URL=$API_URL

ARG NETWORK_NAME=Dev
ENV NETWORK_NAME=$NETWORK_NAME

ARG NETWORK_TOKEN_SYMBOL=DOT
ENV NETWORK_TOKEN_SYMBOL=$NETWORK_TOKEN_SYMBOL

ARG NETWORK_TOKEN_DECIMALS=15
ENV NETWORK_TOKEN_DECIMALS=$NETWORK_TOKEN_DECIMALS

RUN npm run ng build -- --configuration=${ENV_CONFIG} --output-path=dist


### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Remove default nginx configs
RUN rm -rf /etc/nginx/conf.d/*

## Copy our default nginx config
COPY nginx/polkascan-prod.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
