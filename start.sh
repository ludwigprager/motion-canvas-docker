#!/usr/bin/env bash
set -eu
BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${BASEDIR}


docker compose up -d --build
#./print-console-links.sh

#docker exec -ti mc npm install
#docker exec -ti mc npm run serve
