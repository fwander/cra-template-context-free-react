#!/bin/bash

APP_DIR="./Context-Free-React"

if [ -d "$APP_DIR" ]; then
  cd $APP_DIR
  cargo build --release
else
  git clone https://github.com/fwander/Context-Free-React.git $APP_DIR
  cd $APP_DIR
  cargo build --release
fi
cd -
