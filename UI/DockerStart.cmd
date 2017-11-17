docker build -t knight-frank-node-ui .
docker run -p 4200:4200 --name knight-frank-node-ui -d knight-frank-node-ui

pause