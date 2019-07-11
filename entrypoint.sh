set -e

rm -f /myapp/tmp/pids/server.pids

exec "$@"