export EXTERNAL_IP=$(hostname --all-ip-addresses | awk '{print $1}')
docker-compose up