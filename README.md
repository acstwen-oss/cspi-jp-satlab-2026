# cspi-jp-satlab-2026

Static GitHub Pages site for SatLab product materials at CSPI JP 2026.

## Structure

- `index.html` - CSPI JP exhibition homepage.
- `satlab/index.html` - SatLab product overview.
- `satlab/<product-line>/index.html` - product line pages.
- `satlab/<product-line>/<product>/index.html` - product detail pages.
- `shared/css/base.css` - shared reset and design tokens.
- `shared/css/satlab-cspi.css` - SatLab CSPI visual system.
- `shared/js/main.js` - product and page rendering data.
- `shared/images/` - shared visual assets.

Each product directory contains:

- `assets/` for product-specific images.
- `brochure.pdf` as the downloadable brochure file.
- `index.html` for the product page.

## Publish With GitHub Pages

1. Create a GitHub repository named `cspi-jp-satlab-2026`.
2. Push this folder to the `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/(root)`.
6. Save and wait for the Pages URL.

The public URL will look like:

```text
https://<github-user>.github.io/cspi-jp-satlab-2026/
```

## Content Updates

Most product text, line descriptions, links and card data live in `shared/js/main.js`.
Replace each product `brochure.pdf` placeholder with the final brochure before publishing.
