docker build -t kf-ui .
docker run -p 4200:4200 --name kf-ui --link kf-api:kf-api --net intranet -d kf-ui

pause