FROM node:18.16.0

WORKDIR /app

RUN npm i postgres

COPY ./test.js /app/test.js

CMD [ "node", "test.js" ]
