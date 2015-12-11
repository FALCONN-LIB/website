#!/bin/bash

rm -rf content/docs
mkdir -p content/docs
cd ../FALCONN
make docs
mv doc/html/* ../website/content/docs
cd ../website
rsync -av --delete content/ ilyaraz@ilyaraz.org:/var/www/html/falconn
