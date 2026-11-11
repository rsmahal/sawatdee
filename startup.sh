#!/bin/sh
cd /workspace
if curl -sf -o /dev/null --max-time 1 http://127.0.0.1:3000/; then
  exit 0
fi
npm run dev > /tmp/sawatdee-dev.log 2>&1 &
