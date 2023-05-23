FROM okteto/crontab:0.0.6

LABEL org.opencontainers.image.authors="Vkw2920"

COPY crontab /etc/crontabs/root

RUN apk add --update coreutils mysql-client

CMD crond -f -L /var/log/cron.log
