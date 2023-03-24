#!/bin/bash
export NODE_VERSION=18
source $NVM_DIR/nvm.sh
cd /workspaces/studio-repo-demo
nvm install $NODE_VERSION
nvm use $NODE_VERSION
npm install
wget https://yext-cli-pub.s3.amazonaws.com/cli/linux/yext
sudo mv yext /usr/local/bin
chmod +x /usr/local/bin/yext
