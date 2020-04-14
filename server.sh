#!/bin/bash

bin/yinstall

echo '-----------------'
echo 'docker-compose up'
echo ''
echo 'About to run your new Docusaurus app on the local server'
echo 'You will be able to view your app in your browser at the following URLs:'
echo 'Docusaurus web server: http://localhost:3000'
echo 'LiveReload web server: http://localhost:35729'
echo ''
docker-compose up
