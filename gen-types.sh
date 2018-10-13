#! /bin/bash
apollo codegen:generate --queries="./src/**/*.tsx" --schema=./schema.json --target=typescript --outputFlat=./src/schemaTypes.ts