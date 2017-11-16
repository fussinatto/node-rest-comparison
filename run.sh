echo express >> results.txt ;
node servers/expressserver.js & sleep 5 ; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:8000/123456/50_1 | grep "Requests per second:" >> results.txt ;
pkill -f expressserver ;
sleep 5 

echo node >> results.txt ;
node servers/rawnodeserver.js & sleep 5 ; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:8000/123456/50_1 | grep "Requests per second:" >> results.txt ;
pkill -f rawnodeserver ;
sleep 5 

echo restify >> results.txt ;
node servers/restifyserver.js & sleep 5 ; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:8000/123456/50_1 | grep "Requests per second:" >> results.txt ;
pkill -f restifyserver ;
sleep 5 

echo koa >> results.txt ;
node servers/koaserver.js & sleep 5 ; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:8000/123456/50_1 | grep "Requests per second:" >> results.txt ;
pkill -f koaserver ;
sleep 5 

echo fastify >> results.txt ;
node servers/fastifyserver.js & sleep 5 ; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:8000/123456/50_1 | grep "Requests per second:" >> results.txt ;
pkill -f fastifyserver;
sleep 5 

echo connect >> results.txt ;
node servers/connectserver.js & sleep 5 ; 
ab -k -n 50000 -c 100 -t 20 http://127.0.0.1:8000/123456/50_1 | grep "Requests per second:" >> results.txt ;
pkill -f connectserver ;
sleep 5 