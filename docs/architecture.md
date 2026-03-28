# Architecture

## Overview

Today's Mathematics is a static web application that displays a daily spiritual meditation based on the Supreme Mathematics system of the Five Percent Nation. It translates the current day of the month into a meaningful phrase using an alphanumeric cipher.

There is no backend. All logic runs in the browser.

## Project Structure

```
src/
  data/
    alphanumerics.ts   # The Supreme Mathematics mapping (pure data, no logic)
  css/
    style.css          # Application styles
    helpers.css        # Utility classes
  index.ts             # Entry point — renders to DOM on load
  index.html           # HTML template (processed by HtmlWebpackPlugin)
  mathClock.ts         # Core translation logic
tests/
  mathClock.test.ts    # Unit tests for mathClock.ts
docs/                  # Project documentation
.github/
  workflows/
    ci.yml             # CI/CD pipeline
```

## Data Flow

```
Date (day of month)
      ↓
translate()           # Builds the full phrase with connector logic
      ↓
mathClock()           # Uppercases and wraps connector phrase in HTML
      ↓
index.ts              # Injects into DOM, reveals hidden elements
```

## Core Logic (`mathClock.ts`)

### `recurse(sourceText)`
Walks through each character of the input and looks it up in `ALPHANUMERICS`. Returns the concatenated translation.

### `sumArray(numbers)`
Sums an array of digit strings into a single number. Used to reduce multi-digit days to their root.

### `translate(sourceText)`
Builds the full meditation phrase:
1. Translates the input digits via `recurse`
2. If multi-digit, determines the connector phrase:
   - `which brings forth` — when the first digit is greater than the second (and second > 0)
   - `all being born to` — otherwise
3. Sums the digits and translates the result, repeating until a single digit remains

### `mathClock()`
Calls `translate()` with today's day of month, uppercases the result, and wraps the connector phrase in a `<div class="connector">` for smaller styling.

## Build

Webpack bundles all TypeScript and CSS into `dist/bundle.js`. The HTML template is processed by HtmlWebpackPlugin. Static assets (favicon, CNAME) are copied by CopyWebpackPlugin.

- **Development:** `npm start` — webpack-dev-server on localhost:3000 with live reload
- **Production:** `npm run build` — outputs optimized bundle to `dist/`

## Deployment

Pushes to `master` trigger the GitHub Actions CI/CD pipeline. After lint, tests, and build all pass, the `dist/` folder is deployed to GitHub Pages via the official `actions/deploy-pages` action. The custom domain (`todaysmathematics.com`) is preserved via the `CNAME` file copied into `dist/`.
