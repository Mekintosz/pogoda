# Pogoda — Weather App

A lightweight single‑page weather dashboard that fetches live data from WeatherAPI. Search any city/location, toggle units (°C/°F), and view current conditions, air quality, the next 10 hours, and the next two days at a glance.

• Live demo: [mekintosz.github.io/pogoda](https://mekintosz.github.io/pogoda/)

![Screenshot of Pogoda](https://github.com/user-attachments/assets/7ba88dd1-0387-4213-8ce9-e578d7356fa9)

## Features

- Search by city or geographic name
- Instant unit toggle between Celsius and Fahrenheit
- Current conditions: temperature, feels like, wind speed, humidity, condition with icon
- Air quality overview: CO, NO₂, O₃, SO₂, PM2.5, PM10 (color‑coded)
- Sunrise and sunset times for today
- Next 10 hours forecast with temperature, chance of rain, and icon
- Next two days overview with average temperature, condition, and chance of rain

## Tech Stack

- Languages: JavaScript (ES Modules), HTML5, CSS3
- Build tooling: Webpack 5 (asset modules for images)
- Linting/formatting: ESLint 8, @typescript-eslint parser/plugin, eslint-config-prettier
- API: [WeatherAPI.com](https://www.weatherapi.com/)
- Hosting/Deployment: GitHub Pages via `gh-pages`

## Project Structure

```text
.
├── src/
│   ├── assets/                 # Weather condition icons (source)
│   ├── modules/
│   │   ├── dataProvider.js     # Fetch + normalize data from WeatherAPI
│   │   ├── displayHourlyWeather.js
│   │   ├── displayNextTwoDay.js
│   │   └── sideFunctions.js    # Helpers: units, colors, icons
│   └── PogodaApp.js            # App entry; wires UI + data
├── dist/                       # Build output + static HTML/CSS
│   ├── assets/                 # Emitted assets (favicons, icons)
│   ├── bundle.js               # Webpack bundle (generated)
│   ├── index.html              # App shell
│   └── styles.css              # App styles
├── webpack.config.js
├── package.json
└── .eslintrc.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A WeatherAPI API key (free tier is fine). Create one at [weatherapi.com](https://www.weatherapi.com/).

### Installation

```bash
npm install
```

### Configure your WeatherAPI key

Quick setup (current approach):

1. Open `src/modules/dataProvider.js`.
2. Replace the `key=...` value in the `apiCall` URL with your own key.

> Note: For production-grade setups, inject the key via build‑time variables (e.g., Webpack DefinePlugin) rather than committing it to source. See Future Improvements.

### Local development

Option A: Rebuild on changes and serve the `dist` folder with a static server.

```bash
# Rebuild on file changes
npm run watch

# In another terminal, serve the built files
npx serve dist            # or: npx http-server dist
# then open http://localhost:3000 or the URL printed by the server
```

Option B: Build once and open `dist/index.html` directly in a browser. Using a local server is recommended for a smoother experience.

### Build

```bash
npm run build
```

Outputs a production bundle to `dist/` using Webpack 5 (`mode: 'production'`).

### Lint (optional)

```bash
npx eslint src --ext js
```

## Deployment (GitHub Pages)

This project uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) CLI for zero‑config deployments.

```bash
npm run build
npm run deploy
```

This publishes the contents of `dist/` to the `gh-pages` branch. In your repository settings, enable GitHub Pages to serve from that branch, then visit the published URL (e.g., `https://<username>.github.io/<repo>/`).

## How it works

- `provideWeatherData(location)` fetches a 3‑day forecast with air quality, normalizes the response into small, UI‑friendly objects, and derives the next‑10‑hours slice.
- UI modules (`uiControl.js`, `displayHourlyWeather.js`, `displayNextTwoDay.js`) render the current/forecast views and respond to the units toggle.
- `sideFunctions.js` holds helpers for unit selection, color coding air quality values, and mapping WeatherAPI condition codes to icons.

## Future improvements

- Replace inline API key with build‑time variable (Webpack DefinePlugin + `.env`)
- Responsive layout and enhanced mobile styling
- Add geolocation: “Use my location”
- Better error handling (inline messages instead of `alert`)
- Add tests (Jest/Vitest) and CI (lint/build/test on PRs)
- Service Worker for caching and offline shell
- Type safety (TypeScript or JSDoc typedefs)
- Accessibility and keyboard navigation improvements
- Autocomplete suggestions for city search
- Dark mode theme

## Acknowledgements

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)

## License

ISC. See `package.json` for details, or learn more at [opensource.org/licenses/ISC](https://opensource.org/licenses/ISC).
