const fs = require('fs');
const path = require('path');

// Build script to create static version of the portfolio
console.log('Building static version...');

// Create build directory
if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

// Copy static assets
if (fs.existsSync('attached_assets')) {
  if (!fs.existsSync('build/assets')) {
    fs.mkdirSync('build/assets');
  }
  
  const assets = fs.readdirSync('attached_assets');
  assets.forEach(file => {
    fs.copyFileSync(
      path.join('attached_assets', file),
      path.join('build/assets', file)
    );
  });
}

console.log('Static build prepared!');