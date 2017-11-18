#!/bin/bash

clear

docker ps -a

docker stop kf-postgres
docker stop kf-api
docker stop kf-ui

docker rm kf-postgres
docker rm kf-api 
docker rm kf-ui

docker ps -a
docker network create intranet

cd /
cd /usr/src/app/knight-frank/Database/Scripts
docker run -p 5432:5432 --name kf-postgres --net intranet -d postgres
./db-init.sh

cd /
cd /usr/src/app/knight-frank/Service/Rest
docker build -t kf-api .
docker run -p 3000:3000 --name kf-api --link kf-postgres:kf-postgres --net intranet -d kf-api

cd /
cd /usr/src/app/knight-frank/UI
docker build -t kf-ui .
docker run -p 4200:4200 --name kf-ui --link kf-api:kf-api --net intranet -d kf-ui



