docker build -t kf-ui-nginx .
docker run --name kf-ui-nginx -d -p 8080:80 kf-ui-nginx

pause