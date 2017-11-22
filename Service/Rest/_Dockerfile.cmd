docker build -t kf-api .
docker run -p 3000:3000 --name kf-api --link kf-postgres:kf-postgres --net intranet -d kf-api

pause