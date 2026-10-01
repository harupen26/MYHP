# Project image specification

Project images use the same 16:9 crop for the portfolio card and project-detail hero. Knitted Acoustic Barcode, Stitch Barcode, and BarCord currently use final JPEG artwork; Fabric Classification still uses a temporary SVG illustration.

- Figma frame: **1600 x 900 px** (16:9)
- Export: WebP preferred, JPEG acceptable
- Recommended WebP quality: 80-85
- Target file size: under 350 KB per image
- Keep the main subject within the central 1400 x 700 px safe area
- Avoid embedding titles in the image; the page supplies accessible text and headings
- Use the same crop for the portfolio card and project-detail hero

Current image files:

- `fabric-classification.svg` (temporary)
- `knitted-acoustic-barcode.jpg`
- `stitch-barcode.jpg`
- `barcord.jpg`

When replacing Fabric Classification, update its image path in `portfolio.html` and `projects/fabric-classification.html`.
