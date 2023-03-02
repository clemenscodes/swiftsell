#!/bin/sh

nx format --libs-and-apps &&
yarn affected build --nx-bail --output-style=stream --parallel "$1" &&
yarn affected lint --nx-bail --output-style=stream --parallel "$1" &&
yarn affected test --nx-bail  --output-style=stream --parallel "$1" &&
yarn affected e2e --output-style=stream  --parallel 1
