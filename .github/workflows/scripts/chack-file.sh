#!/bin/bash
FILE=$1

if [ ! -f "$FILE" ]; then
  echo "❌ Error: $FILE not found!"
  exit 1
fi
