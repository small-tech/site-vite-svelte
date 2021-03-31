#!/bin/bash
set -e

# Build the Vite source so we start with the latest.
npx vite build

# Start Vite dev server in the background.
npx vite &

# Give Vite time to write out its initial output
# so that it doesn’t obstruct the sudo prompt
# from Site.js (if any).
sleep 0.5

# Start Site.js
site

# Kill the background Snowpack process
pkill -P $$
