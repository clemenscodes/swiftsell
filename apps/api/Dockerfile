FROM node:16.19-alpine as builder
WORKDIR /app
COPY . .
RUN cd apps/api && npx prisma generate --schema=prisma/schema.prisma

FROM node:16.19-alpine

ENV HOST=0.0.0.0
ENV PORT=3000
ENV APP api

WORKDIR /app

RUN set -e; \
    apk update && apk add --no-cache --update \
    tini \
    && apk del --purge apk-tools \
    && rm -rf /var/cache/apk/*

RUN addgroup --system $APP && \
    adduser --system -G $APP $APP

COPY dist/apps/$APP $APP
COPY $APP_DIR/prisma ./prisma/
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma/
RUN chown -R $APP:$APP .

RUN npm --prefix $APP --omit=dev -f install
RUN npx prisma migrate deploy

ENTRYPOINT ["/sbin/tini", "--"]

CMD [ "node", "api" ]
