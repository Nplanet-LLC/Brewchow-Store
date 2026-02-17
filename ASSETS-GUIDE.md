# Assets Download Guide

The original website assets are hosted on Webflow's CDN. You can download them as needed.

## Base URL
```
https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/
```

## Key Assets to Download

### Images (save to `/public/assets/images/`)
- Logo: `67fccb954e77c661a593dbd5_Symbol.svg`
- Hero images: 
  - `67fcd4c56b860fe106f68269_Black%20Coffee.avif`
  - `67fcd4c5a407d033860da151_Espresso.avif`
  - `67fcd4c5977f8055b117d3fa_Cold%20Brew.avif`
- Category images:
  - `67fce915822fd2280e71c105_Black%20Coffee.avif`
  - `67fce92633545aae0dbbf527_Virgin%20Mojito.avif`
  - `67fce93b81d27502589462e9_Package.avif`

### Icons (save to `/public/assets/icons/`)
- `67fce0bd7beece9d81e20c4a_Smiley.svg`
- `67fce0bdc4ce089f4d12b11a_Bolt.svg`
- `67fce0bd4c35f0d7add92618_Instagram.svg`
- `67fce0bd7beece9d81e20c47_Sweat%20Waterdrop.svg`

## Download Command (PowerShell)

```powershell
# Example for downloading a single image
Invoke-WebRequest -Uri "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg" -OutFile "public/assets/images/logo.svg"
```

## Using Images in Components

```tsx
import Image from 'next/image'

<Image 
  src="/assets/images/logo.svg" 
  alt="Brewhaus Logo"
  width={100}
  height={100}
/>
```

## Reference Files

- Original HTML: `/brewhaus-clone/index.html`
- Original CSS: `/brewhaus-clone/styles.css`

These files contain all the original structure and styling for reference.
