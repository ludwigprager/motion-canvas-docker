#!/usr/bin/env bash
set -eu
BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${BASEDIR}

function usage () {
  echo $0 "<project>"
}

docker compose up -d --build
#./print-console-links.sh
#docker exec -ti mc npm install
#docker exec -ti mc npm run serve

if [[ $# -eq 0 ]]; then
  PROJECT='p1'
elif [[ $# -eq 1 ]]; then
  PROJECT=$1
else
  usage
  exit
fi

./exec.sh $PROJECT npm install
./exec.sh $PROJECT npm run serve
