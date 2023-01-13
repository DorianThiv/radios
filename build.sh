docker stop radioscontainer || true && docker rm radioscontainer || true
docker build -t radios:v1 .
docker run -d --name radioscontainer -p 9000:80 radios:v1