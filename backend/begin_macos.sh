echo export EXTERNAL_IP= >1.txt
ipconfig getifaddr en2 >2.txt
paste 1.txt 2.txt > .env
rm 1.txt 2.txt
docker-compose up