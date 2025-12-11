# Assets Directory Structure

This directory contains all media assets (images, videos, fonts, etc.) organized by page.

## Directory Structure

```
/assets
├── home/          # Homepage assets (Hero GIF, background images, etc.)
├── group/         # GROUP page assets
├── portfolio/     # PORTFOLIO page assets
├── media/         # MEDIA page assets
├── careers/       # CAREERS page assets
├── brands/        # Brand detail pages assets (JW PEI, DANSE LENTE, LO MONTE, etc.)
├── fonts/         # Custom fonts
└── common/        # Shared assets across multiple pages
```

## Usage

Import assets using ES6 imports:

```tsx
import heroGif from '../assets/home/hero.gif';
import brandLogo from '../assets/brands/jw-pei-logo.png';
```

## Guidelines

- Use descriptive file names (e.g., `hero-background.gif` instead of `img1.gif`)
- Optimize images before uploading
- Keep file sizes reasonable for web performance
- Organize by page/section for easy maintenance
