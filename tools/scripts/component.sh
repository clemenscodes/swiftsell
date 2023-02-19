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
css="$path.module.css"

remove_css() {
    rm "$lib/$css"
    sed -i '1d' "$lib/$file"
    sed -i 's/className={[^\}]*}//g' "$lib/$file"
}

nx generate @nrwl/next:component "$component" --directory="$directory" --project=shared --export -s=css

remove_css

nx generate @nrwl/react:component-story --componentPath="$file" --project=shared

nx format
