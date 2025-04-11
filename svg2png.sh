#!/bin/bash

# Check if a folder is provided
if [ -z "$1" ]; then
    echo "Usage: $0 /path/to/folder"
    exit 1
fi

# Define the input folder
FOLDER="$1"

# Check if the folder exists
if [ ! -d "$FOLDER" ]; then
    echo "Error: $FOLDER is not a valid directory."
    exit 1
fi

# Iterate over all SVG files in the folder
for svg_file in "$FOLDER"/*.svg; do
    # Skip if no SVG files are found
    if [ ! -e "$svg_file" ]; then
        echo "No SVG files found in $FOLDER."
        exit 0
    fi

    # Generate the output file name by replacing .svg with .png
    png_file="${svg_file%.svg}.png"

    # Use Inkscape to convert the file
    inkscape "$svg_file" --export-type=png --export-filename="$png_file"

    echo "Converted: $svg_file -> $png_file"
done