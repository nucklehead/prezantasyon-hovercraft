#!/usr/bin/env bash

set -e
set -x

FILE=$1
PROJECT=${2:-kisa-ki-python}
docker run -it --rm -p "9000:9000" -v ${PWD}/${PROJECT}:/presentation nucklehead/docker-hovercraft:2.7 ${FILE}