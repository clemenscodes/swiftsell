#!/bin/sh

pwd=$(pwd)
lib="$pwd/libs/shared/src"

component="$1"
directory="$2"

if [ -z "$directory" ]; then
    directory="components"
else
    directory="components/$2"
fi


path="$directory/$component/$component"
file="$path.tsx"
tsx="$lib/$file"

use_ts() {
    function_name=$(grep -m 1 -oP '(?<=export function )\w+' "$tsx")
    props_interface=$(grep -m 1 -oP '(?<=interface )\w+(?=\s*\{\s*\})' "$tsx")
    sed -i "s/export function\(.*\)$/export const $function_name: React.FC<$props_interface> = ({ ...props }) => {/" "$tsx"
}

use_ts
