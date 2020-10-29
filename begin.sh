echo EXTERNAL_IP=$(hostname --all-ip-addresses | awk '{print $1}') >.env
docker-compose up