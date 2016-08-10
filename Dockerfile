FROM nginx:1.11-alpine

MAINTAINER Benjamin Pannell <benjamin.pannell@gmail.com>

ADD docker/nginx.conf /etc/nginx/conf.d/app.conf
EXPOSE 3000

ARG VERSION
LABEL version=${VERSION:-development}

ADD app/dist/ /app/
ADD app/resources/ /app/resources/