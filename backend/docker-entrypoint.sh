#!/bin/sh
set -eu

if [ -n "${DATABASE_CONNECTION_STRING:-}" ] && [ -z "${SPRING_DATASOURCE_URL:-}" ]; then
  host_and_database="${DATABASE_CONNECTION_STRING#postgresql://}"
  host_and_database="${host_and_database#*@}"
  export SPRING_DATASOURCE_URL="jdbc:postgresql://${host_and_database}"
fi

exec java -jar app.jar
