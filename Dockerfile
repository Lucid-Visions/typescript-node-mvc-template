FROM node:12

WORKDIR /app
COPY ./ /app/

RUN yarn install && \
yarn run build && \
yarn run lint

CMD [ "node", "dist/index.js" ]