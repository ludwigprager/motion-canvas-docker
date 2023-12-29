#!/usr/bin/env bash
set -eu
BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${BASEDIR}


#docker compose up -d --build
#./print-console-links.sh

PROJECT=$1
shift

docker exec -ti --workdir=/projects/$PROJECT/ mc $*
