#!/bin/bash

mkdir content/docs
cd ../falconn
make docs
mv doc/html/* ../website/content/docs
cd ../website
scp -r content/* ilyaraz@ilyaraz.org:/var/www/html/falconn
