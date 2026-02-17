const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  // Logo and icons
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg', path: 'public/images/logo.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcc6cb6548a6f83c3b04f0_Close.svg', path: 'public/icons/close.svg' },
  
  // Hero images
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif', path: 'public/images/hero-black-coffee.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5a407d033860da151_Espresso.avif', path: 'public/images/hero-espresso.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5977f8055b117d3fa_Cold%20Brew.avif', path: 'public/images/hero-coldbrew.avif' },
  
  // Ticker icons
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd7beece9d81e20c4a_Smiley.svg', path: 'public/icons/smiley.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bdc4ce089f4d12b11a_Bolt.svg', path: 'public/icons/bolt.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd4c35f0d7add92618_Instagram.svg', path: 'public/icons/instagram.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd7beece9d81e20c47_Sweat%20Waterdrop.svg', path: 'public/icons/waterdrop.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd229c48735660b163_Smiley%20Love.svg', path: 'public/icons/smiley-love.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bdf56cf0e0f9cc9eb2_Element.svg', path: 'public/icons/element.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd2d76ac1afebf0eb4_Crown.svg', path: 'public/icons/crown.svg' },
  
  // Category images
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce915822fd2280e71c105_Black%20Coffee.avif', path: 'public/images/category-coffee.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce92633545aae0dbbf527_Virgin%20Mojito.avif', path: 'public/images/category-drinks.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce93b81d27502589462e9_Package.avif', path: 'public/images/category-bakery.avif' },
  
  // Menu items
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd01b440397f6137e3f9b9_Cold%20Brew.avif', path: 'public/images/menu-coldbrew.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05beb993a3a0bcef1685_Macaroon.avif', path: 'public/images/menu-macaroon.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd049c7c79769f25f3aa38_Iced%20Latte.avif', path: 'public/images/menu-icedlatte.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd03d917528c381b23700c_Iced%20Tea.avif', path: 'public/images/menu-icedtea.avif' },
  
  // About section icons
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd10710404116158178ef2_Sweat%20Waterdrop.svg', path: 'public/icons/about-waterdrop.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef78_Heart.svg', path: 'public/icons/about-heart.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef6e_Smile.svg', path: 'public/icons/about-smile.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd107167e1523f7eb5a9da_Home.svg', path: 'public/icons/about-home.svg' },
  
  // About images
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bfc82841763bc93a7b_medium-shot-barista-with-mask-preparing-coffee.avif', path: 'public/images/about-barista.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bf98dbe39dd2a370be_interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.avif', path: 'public/images/about-interior.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11fedcb344bd7472203b_white-ceramic-teacup-brown-surface.avif', path: 'public/images/about-latte.avif' },
  
  // Testimonial images
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd14bf7ce997bd0fd7a6a9_Quote.svg', path: 'public/icons/quote.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1685088c8a7f976184b8_human-hand-pouring-milk-into-black-coffee-cafeteria.avif', path: 'public/images/testimonial-1.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1684d296363b2cefd962_milk-pouring-into-glass-with-coffee.avif', path: 'public/images/testimonial-2.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd168562e9f90985dc66ef_female-barista-with-apron-decorating-coffee-glass-with-milk.avif', path: 'public/images/testimonial-3.avif' },
  
  // Location map
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd208d86446d8d3511bab4_Map%20Image.svg', path: 'public/images/map.svg' },
  
  // News images
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2c01b922ecb44ec95c62_women-taking-coffee-with-friends.avif', path: 'public/images/news-1.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2bb8c052eb4377b88f96_coffee-shop-small-business.avif', path: 'public/images/news-2.avif' },
  { url: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2b6a5cba4683a18d9a2a_coffee-making-items-indoors.avif', path: 'public/images/news-3.avif' },
  
  // Banner icons
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe07d6ed99c64d4446d28b_Hands.svg', path: 'public/icons/hands.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/6800a9df8041c0cc80734bdc_Logo%201.svg', path: 'public/icons/delivery-1.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/6800a9df6f01269e6e3e2664_Logo%202.svg', path: 'public/icons/delivery-2.svg' },
  { url: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/6800a9df3f80a4179f760228_Logo%203.svg', path: 'public/icons/delivery-3.svg' },
];

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`✗ Failed: ${filepath} - ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting download of all assets...\n');
  
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.path);
    } catch (err) {
      // Continue with next file
    }
  }
  
  console.log('\n✅ All downloads complete!');
}

downloadAll();
