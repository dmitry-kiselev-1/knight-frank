docker build -t knight-frank-node-rest-api .
docker run -p 3000:3000 --name knight-frank-node-rest-api -d knight-frank-node-rest-api

pause