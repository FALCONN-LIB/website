#!/bin/bash

set -e
rsync -av --delete dist/ /var/www/html/falconn
