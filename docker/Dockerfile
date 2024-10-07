FROM node:20.8.0

#USER root

#RUN apk add --no-cache ffmpeg
#RUN apt-get -y install ffmpeg
#RUN apk add --no-cache python3 py3-pip
#RUN npm install -g chromadb@1.5.9
#RUN npm install -g flowise@1.3.5

RUN apt-get update && apt-get install -y \
    ffmpeg \
    rsync \
    vim \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /projects/

#CMD "flowise"
