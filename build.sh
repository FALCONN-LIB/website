#!/bin/bash

rm -rf dist
cd bootstrap-3.3.6
grunt dist
mv dist ..
cd ..
cp -r content/* dist
mkdir -p dist/docs
cd ../FALCONN
make docs
mv doc/html/* ../website/dist/docs
cd ../website
mkdir -p dist/pdoc
cd dist/pdoc
pdoc --html falconn
cd ../..
pwd
