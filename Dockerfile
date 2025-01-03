ARG NODE_VERSION=20.15.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

USER node

COPY . .

EXPOSE 8080

CMD ["npm", "start"]