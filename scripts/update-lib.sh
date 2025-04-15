#!/bin/bash

LIB_DIR="./libs/payload-defaults"
REPO_URL="https://github.com/Lyttle-Development/Payload-Defaults.git"

if [ -d "$LIB_DIR/.git" ]; then
    echo "Updating existing repo in $LIB_DIR"
    git -C "$LIB_DIR" pull
else
    echo "Cloning fresh copy into $LIB_DIR"
    rm -rf "$LIB_DIR"
    git clone "$REPO_URL" "$LIB_DIR"
fi
