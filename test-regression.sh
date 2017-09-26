#!/bin/sh

until $(curl --output /dev/null --silent --head --fail $1); do
    printf "Waiting for response from $1"
    sleep 3
done

npm run test:regression
