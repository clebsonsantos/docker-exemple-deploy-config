FROM docker.io/library/node:14.17.6-alpine3.13 

WORKDIR /app

COPY . .


RUN npm install yarn 
RUN yarn install

VOLUME [ "/app/uploads" ]

EXPOSE 4000

CMD [ "yarn", "start" ]


