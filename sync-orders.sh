#!/bin/bash
# Aure D'arte — Sync orders from localStorage export to GitHub
# Usage: Copy orders JSON from browser console → paste into orders.json → run this script
#
# In browser console run:
#   copy(localStorage.getItem('aure_orders'))
# Then paste into a file called pending-orders.json
#
# This script uploads each order as a separate JSON file to the /orders/ directory

REPO="bestkry/aure-d-arte"

if [ ! -f "pending-orders.json" ]; then
  echo "No pending-orders.json found. Export orders from browser console first."
  echo "  In browser: copy(localStorage.getItem('aure_orders'))"
  exit 1
fi

# Parse each order and upload
echo "Syncing orders to GitHub..."
count=$(cat pending-orders.json | python3 -c "import sys,json; print(len(json.load(sys.stdin)))")
echo "Found $count order(s)"

for i in $(seq 0 $((count - 1))); do
  ORDER_ID=$(cat pending-orders.json | python3 -c "import sys,json; print(json.load(sys.stdin)[$i]['id'])")
  ORDER_JSON=$(cat pending-orders.json | python3 -c "import sys,json; d=json.load(sys.stdin)[$i]; print(json.dumps(d, indent=2))")
  
  echo "  Uploading $ORDER_ID..."
  echo "$ORDER_JSON" | gh api \
    --method PUT \
    "/repos/$REPO/contents/orders/$ORDER_ID.json" \
    -f message="Order $ORDER_ID" \
    -f content="$(echo "$ORDER_JSON" | base64 -w 0)" \
    --silent
done

echo "Done! All orders synced to GitHub."
