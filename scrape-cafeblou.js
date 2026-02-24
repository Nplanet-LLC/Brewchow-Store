const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Configuration
const BASE_URL = 'https://cafeblou.ca';
const OUTPUT_DIR = path.join(__dirname, 'public', 'cafeblou-images');
const INFO_FILE = path.join(__dirname, 'cafeblou-info.json');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to fetch HTML
function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Extract information from HTML
function extractInfo(html) {
  const info = {
    images: [],
    emails: [],
    phones: [],
    socialMedia: {
      instagram: null,
      facebook: null,
      twitter: null
    },
    address: null,
    hours: null
  };

  // Extract images
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    let imgUrl = match[1];
    if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
    else if (imgUrl.startsWith('/')) imgUrl = BASE_URL + imgUrl;
    else if (!imgUrl.startsWith('http')) imgUrl = BASE_URL + '/' + imgUrl;
    
    if (!info.images.includes(imgUrl)) {
      info.images.push(imgUrl);
    }
  }

  // Extract background images from CSS
  const bgRegex = /background-image:\s*url\(["']?([^"')]+)["']?\)/gi;
  while ((match = bgRegex.exec(html)) !== null) {
    let imgUrl = match[1];
    if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
    else if (imgUrl.startsWith('/')) imgUrl = BASE_URL + imgUrl;
    else if (!imgUrl.startsWith('http')) imgUrl = BASE_URL + '/' + imgUrl;
    
    if (!info.images.includes(imgUrl)) {
      info.images.push(imgUrl);
    }
  }

  // Extract emails
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  while ((match = emailRegex.exec(html)) !== null) {
    if (!info.emails.includes(match[1])) {
      info.emails.push(match[1]);
    }
  }

  // Extract phone numbers
  const phoneRegex = /(\+?1?\s*\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4})/g;
  while ((match = phoneRegex.exec(html)) !== null) {
    if (!info.phones.includes(match[1])) {
      info.phones.push(match[1]);
    }
  }

  // Extract social media links
  const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([a-zA-Z0-9._]+)/i;
  const facebookRegex = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/([a-zA-Z0-9._]+)/i;
  const twitterRegex = /(?:https?:\/\/)?(?:www\.)?twitter\.com\/([a-zA-Z0-9._]+)/i;

  match = html.match(instagramRegex);
  if (match) info.socialMedia.instagram = match[0];

  match = html.match(facebookRegex);
  if (match) info.socialMedia.facebook = match[0];

  match = html.match(twitterRegex);
  if (match) info.socialMedia.twitter = match[0];

  // Extract address (look for common patterns)
  const addressRegex = /(\d+[^,\n]+(?:rue|avenue|av\.|street|st\.|boulevard|blvd\.)[^,\n]+,\s*[^,\n]+,\s*[A-Z]{2})/gi;
  match = html.match(addressRegex);
  if (match) info.address = match[0];

  return info;
}

// Main function
async function main() {
  try {
    console.log('Fetching Café Blou website...');
    const html = await fetchHTML(BASE_URL + '/accueil');
    
    console.log('Extracting information...');
    const info = extractInfo(html);
    
    console.log('\n=== EXTRACTED INFORMATION ===');
    console.log('Emails:', info.emails);
    console.log('Phones:', info.phones);
    console.log('Instagram:', info.socialMedia.instagram);
    console.log('Facebook:', info.socialMedia.facebook);
    console.log('Address:', info.address);
    console.log('Total images found:', info.images.length);
    
    // Save info to JSON
    fs.writeFileSync(INFO_FILE, JSON.stringify(info, null, 2));
    console.log(`\nInformation saved to: ${INFO_FILE}`);
    
    // Download images
    console.log('\nDownloading images...');
    let downloaded = 0;
    for (let i = 0; i < info.images.length; i++) {
      const imgUrl = info.images[i];
      try {
        const urlObj = new URL(imgUrl);
        const filename = path.basename(urlObj.pathname) || `image-${i}.jpg`;
        const filepath = path.join(OUTPUT_DIR, filename);
        
        await downloadImage(imgUrl, filepath);
        downloaded++;
      } catch (err) {
        console.error(`Failed to download ${imgUrl}:`, err.message);
      }
    }
    
    console.log(`\n✅ Downloaded ${downloaded} images to: ${OUTPUT_DIR}`);
    console.log('✅ Extraction complete!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
