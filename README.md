docker search nginx
docker pull nginx:latest
docker images
docker run --name nginx-test -p 9090:80 -v D:\Documents\myCode:/usr/share/nginx/html -v D:\Documents\myCode\nginxCfg\nginx.conf:/usr/share/nginx/conf/nginx.conf nginx:latest
copy project file

docker search node
docker pull node:latest
docker images
docker start --name node-test -p 5525:5525 -v D:\Documents\myCode\backend:/app -it node:latest bash
cd app
npm install
node index

docker pull mysql:5.7
docker images
docker run -p 4578:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7