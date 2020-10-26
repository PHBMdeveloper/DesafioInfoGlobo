'EXTERNAL_IP='+((ipconfig | findstr [0-9].\.)[0]).Split()[-1] | out-file .env -encoding utf8

docker-compose up