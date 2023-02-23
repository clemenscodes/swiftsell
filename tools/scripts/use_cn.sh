#!/bin/sh

pwd=$(pwd)
lib="$pwd/libs/shared/src"

component="$1"
directory="$2"

if [ -z "$directory" ]; then
    directory="components"
fi

path="$directory/$component/$component"
file="$path.tsx"
tsx="$lib/$file"

sed -i "1i\ import { cn } from '@styles';" "$tsx"
sed -i "s/<div>\(.*\)$/<div className={cn([])}>/" "$tsx"
