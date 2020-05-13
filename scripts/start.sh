#!/bin/bash
docker-compose -f views/docker-compose.yml down
docker-compose -f views/docker-compose.yml build
docker-compose -f views/docker-compose.yml up -d

