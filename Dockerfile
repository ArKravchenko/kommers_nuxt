FROM node:16-alpine as modules
ARG APP_ROOT=/kommersant
ENV NODE_ENV production
WORKDIR ${APP_ROOT}
COPY package.json yarn.lock ${APP_ROOT}
RUN yarn install

FROM modules as source
ARG APP_ROOT=/kommersant
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN yarn build
RUN npm prune --production

FROM node:16-alpine
ARG APP_ROOT=/kommersant
WORKDIR /
RUN rm -rf .${APP_ROOT}
WORKDIR ${APP_ROOT}
COPY --from=source ${APP_ROOT}/node_modules ${APP_ROOT}/node_modules
COPY --from=source ${APP_ROOT}/.nuxt ${APP_ROOT}/.nuxt
COPY --from=source ${APP_ROOT}/certs ${APP_ROOT}/certs
COPY --from=source ${APP_ROOT}/config ${APP_ROOT}/config
COPY --from=source ${APP_ROOT}/static ${APP_ROOT}/static
COPY --from=source ${APP_ROOT}/.env ${APP_ROOT}/.env
COPY --from=source ${APP_ROOT}/ecosystem.config.json ${APP_ROOT}/ecosystem.config.json
COPY --from=source ${APP_ROOT}/nuxt.config.ts ${APP_ROOT}/nuxt.config.ts
COPY --from=source ${APP_ROOT}/package.json ${APP_ROOT}/package.json
COPY --from=source ${APP_ROOT}/modules ${APP_ROOT}/modules
COPY --from=source ${APP_ROOT}/serverMiddleware ${APP_ROOT}/serverMiddleware
EXPOSE 3333
ENV HOST=0.0.0.0
CMD ["yarn", "start"]






#EXPOSE 5000
#
#
#CMD ["yarn", "start"]
#
#FROM node:12-alpine
#
#ENV APP_ROOT /web
#ENV NODE_ENV production
#
#WORKDIR ${APP_ROOT}
#
#COPY --from=builder /web/node_modules ./node_modules/
#COPY --from=builder /web/.nuxt ./.nuxt/
#COPY --from=builder /web/static ./static/
#COPY --from=builder /web/package.json ./package.json
#COPY --from=builder /web/tsconfig.json ./tsconfig.json
#COPY --from=builder /web/yarn.lock ./yarn.lock
#COPY start.sh ./start.sh
#
#EXPOSE 5000
#
#ENV NUXT_HOST=0.0.0.0
#ENV NUXT_PORT=5000
#
#CMD ["yarn", "start"]
