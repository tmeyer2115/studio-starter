#!/bin/bash
source $NVM_DIR/nvm.sh
cd /workspaces/studio-repo-demo
nvm install 17
nvm use 17
npm install
wget https://yext-cli-pub.s3.amazonaws.com/cli/linux/yext
sudo mv yext /usr/local/bin
chmod +x /usr/local/bin/yext
