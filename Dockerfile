FROM node:slim

RUN mkdir -p /opt/app
WORKDIR /opt/app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

ENV PORT 3000
EXPOSE 3000

COPY package.json /opt/app
COPY yarn.lock /opt/app

RUN yarn install --no-optional

COPY . /opt/app

RUN yarn build

CMD [ "yarn", "start" ]
