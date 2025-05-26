#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site should be available at https://madanw.github.io/portfolio/"
echo "Note: It may take a few minutes for the changes to be visible." 