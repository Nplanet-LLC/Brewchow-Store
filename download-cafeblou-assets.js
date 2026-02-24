const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'public/cafeblou',
  'public/cafeblou/images',
  'public/cafeblou/icons'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// List of images to download from cafeblou.ca
const imagesToDownload = [
  // Add all image URLs from cafeblou.ca here
  // We'll download them programmatically
];

// Function to download file
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Save the logos you provided
console.log('Setting up Café Blou assets...');
console.log('Please save your logo images as:');
console.log('  - public/cafeblou/logo-light.png');
console.log('  - public/cafeblou/logo-dark.png');
console.log('\nFor now, using placeholder images from existing assets...');

// Copy existing images as placeholders
const placeholders = [
  { from: 'public/images/hero-black-coffee.avif', to: 'public/cafeblou/images/coffee-1.avif' },
  { from: 'public/images/hero-espresso.avif', to: 'public/cafeblou/images/coffee-2.avif' },
  { from: 'public/images/hero-coldbrew.avif', to: 'public/cafeblou/images/coffee-3.avif' },
  { from: 'public/images/about-barista.avif', to: 'public/cafeblou/images/barista.avif' },
  { from: 'public/images/about-interior.avif', to: 'public/cafeblou/images/interior.avif' },
  { from: 'public/images/about-latte.avif', to: 'public/cafeblou/images/latte.avif' },
];

placeholders.forEach(({ from, to }) => {
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, to);
    console.log(`✓ Copied: ${path.basename(to)}`);
  }
});

console.log('\n✅ Asset setup complete!');
console.log('\nNext steps:');
console.log('1. Replace placeholder images with real photos from cafeblou.ca');
console.log('2. Add your logo files to public/cafeblou/');
