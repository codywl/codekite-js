#!/bin/bash
# Author: Cody Welsh <c o d y w (at) protonmail (dot) com>

# order of calling cmd
declare -i STEP=0

# counts steps
this_step() {
  STEP=$((STEP+1))
  echo "Step $STEP: "
}

# increment step and echo
echonum() {
  this_step && echo "$1"
}

# ngrok download URL
NGROK_URL='https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip'

# User input
printf "\n
Hello! This script will create a directory for your project, copy the
content of this project to it, and replace information such as your
project's name, and your author name.

Firstly, provide a directory path. The chosen directory must not exist
before copying.
"

read -r newdirectory_path

echonum "Checking folder existence for $newdirectory_path.."

# Check for folder existence
if [ -e "$newdirectory_path" ]; then
  echo "The specified directory already appears to exist. Exiting.."
  exit
fi

# Get project and new author information
echo "Please enter your author info ('name <email>', typically):"
read -r newauthor
echo "Please enter a project name:"
read -r newproject

# Copy directory structure to specified location under the name
echonum "Creating new project.."
cp "$(dirname "$(readlink -f "$0")")" ./"$newdirectory_path" -r

# cd to dir
echonum "Switching to new project directory $newdirectory_path.."
cd "./$newdirectory_path" || exit

# Download latest `ngrok` to the folder
echonum "Downloading 'ngrok'.."
curl $NGROK_URL > ngrok

echonum "Installing 'npm' packages.."
npm install

# `sed` the user info into package.json
echonum "Substituting project information.."
sed -r -i "s/(\"author\": \")(.*\")/\1$newauthor\"/g" package.json
sed -r -i "s/(\"name\": \")(.*\")/\1$newproject\"/g" package.json
sed -r -i "s/(\"description\": \")(.*\")/\1\"/g" package.json


# Vanity message
printf "\n
--------|--------|--------|--------|--------|--------|--------

  Done.

  To start, run 'npm start' or 'docker build ./ && docker run ./'

--------|--------|--------|--------|--------|--------|--------\n"
