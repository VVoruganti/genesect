FROM alpine:latest

COPY . ~/

RUN apk add --update nodejs npm

RUN npm install

EXPOSE 8080:8080
    
