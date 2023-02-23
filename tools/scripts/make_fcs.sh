#!/bin/sh

pwd=$(pwd)
lib="$pwd/libs/shared/src"

maindir="$1"

for dir in "$lib/components/$maindir"/*; do
    echo "$dir"
    if [ -d "$dir" ]; then
        # Get the name of the subdirectory
        dirname=$(basename "$dir")
        # Run your script with the name of the subdirectory and the name of the main directory as arguments
        "$pwd"/tools/scripts/make_fc.sh "$dirname" "$maindir"
    fi
done

# path="$directory/$component/$component"
# file="$path.tsx"
# tsx="$lib/$file"

# use_ts() {
#     function_name=$(grep -m 1 -oP '(?<=export function )\w+' "$tsx")
#     props_interface=$(grep -m 1 -oP '(?<=interface )\w+(?=\s*\{\s*\})' "$tsx")
#     sed -i "s/export function\(.*\)$/export const $function_name: React.FC<$props_interface> = ({ ...props }) => {/" "$tsx"
# }

# use_ts
