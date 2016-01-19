#!/bin/bash

rm -rf content/docs
mkdir -p content/docs
cd ../FALCONN
make docs
mv doc/html/* ../website/content/docs
cd ../website
mkdir -p content/pdoc
cd content/pdoc
pdoc --html falconn
cd ../..
pwd
rsync -av --delete content/ /var/www/html/falconn
