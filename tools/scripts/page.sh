#!/bin/sh

pwd=$(pwd)
lib="$pwd/libs/shared/src"
scripts="$pwd/tools/scripts"

page="$1"
directory="$2"

if [ -z "$directory" ]; then
    directory="pages"
fi

path="$directory/$page/$page"
file="$path.tsx"
css="$path.module.css"
tsx="$lib/$file"

remove_css() {
    rm "$lib/$css"
    sed -i '1d' "$tsx"
    sed -i 's/className={[^\}]*}//g' "$tsx"
}

nx generate @nrwl/next:component "$page" --directory="$directory" --project=shared --export -s=css

remove_css

nx generate @nrwl/react:component-story --componentPath="$file" --project=shared

nx format

use_ts() {
    function_name=$(grep -m 1 -oP '(?<=export function )\w+' "$tsx")
    props_interface=$(grep -m 1 -oP '(?<=interface )\w+(?=\s*\{\s*\})' "$tsx")
    sed -i "1i\ import { NextPage } from 'next';" "$tsx"
    sed -i "s/export function\(.*\)$/export const $function_name: NextPage<$props_interface> = ({ ...props }) => {/" "$tsx"
}

use_ts

"$scripts/use_cn.sh" "$page" "$directory"
