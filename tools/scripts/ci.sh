#!/bin/sh

nx format --libs-and-apps &&

yarn affected build --output-style=stream --nx-bail --parallel "$1" &&
yarn affected lint --output-style=stream --nx-bail --parallel "$1" &&
yarn affected test --output-style=stream --nx-bail  --parallel "$1" &&
yarn affected e2e --output-style=stream --parallel 1
