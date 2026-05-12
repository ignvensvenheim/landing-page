# Svenheim Tools Hub

Internal landing page for Svenheim employees to quickly open the tools they use every day.

## Features

- Lightweight static app served by Nginx.
- Language switching with `i18next` and JSON translation files.
- Data-driven tool cards rendered from one JavaScript config.
- Responsive grid that adapts from desktop to tablet to mobile.
- Cached static assets and gzip-enabled text delivery in Nginx.

## Project Structure

```text
landing_page/
|-- assets/
|   |-- bg2.jpg
|   |-- bg2-optimized.jpg
|   |-- favicon.png
|   `-- logo.svg
|-- css/
|   `-- styles.css
|-- locales/
|   |-- en/
|   |   `-- translation.json
|   `-- lt/
|       `-- translation.json
|-- script/
|   `-- script.js
|-- Dockerfile
|-- index.html
|-- nginx.conf
`-- README.md
```

## How It Works

- `index.html` contains the shell of the page.
- `script/script.js` renders all feature cards from a single `toolCards` array.
- `locales/en/translation.json` and `locales/lt/translation.json` provide translated labels.
- `nginx.conf` serves the page, applies internal network restrictions, enables gzip, and sets cache headers by asset type.

## Local Update Workflow

1. Edit card metadata in `script/script.js` when adding or removing a tool.
2. Add or update translation keys in both locale files.
3. Adjust layout or theme in `css/styles.css` if needed.
4. Rebuild and redeploy the container if you are serving through Docker and Nginx.

## Notes

- The optimized background image is used by the page to reduce payload size.
- External CDN dependencies are still present for fonts, icons, and i18n libraries.
- This project is intended for internal company use.
