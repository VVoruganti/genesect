FROM alpine:latest

COPY . ~/

WORKDIR ~/

RUN apk add --update nodejs npm

RUN npm install

EXPOSE 8080:8080

ENV DOCKER=TRUE

CMD ["npm", "run", "develop"]

