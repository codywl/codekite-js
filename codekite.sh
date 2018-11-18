#!/bin/bash
# Author: Cody Welsh <c o d y w (at) protonmail (dot) com>

# ngrok download URL
NGROK_URL='https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip'

# Check for folder existence
echo "1 - Checking folder existence.."

if [ -e $1 ]; then
  echo "The directory $1 exists. Exiting.."
  exit
fi

# Copy directory structure to specified location under the name
echo "2 - Creating new project.."
cp $(dirname $(readlink -f $0)) ./$1 -r


# cd to dir
echo "3 - Switching to project directory.."
cd ./$1

# Download latest `ngrok` to the folder
echo "4 - Downloading 'ngrok'.."
curl $NGROK_URL > ngrok

echo "5 - installing 'npm' packages.."
npm install

# Vanity message
echo "\n
--------|--------|--------|--------|--------|--------|--------

  Done.

  To start, run 'npm start' or 'docker build ./ && docker run ./'

--------|--------|--------|--------|--------|--------|--------\n"
