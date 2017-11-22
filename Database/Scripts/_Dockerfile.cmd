docker network create intranet

docker run -p 5432:5432 --name kf-postgres --net intranet -d postgres
pause