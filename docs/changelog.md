# Changelog

## [Unreleased]

---

## 2026-03-28

### Added
- `src/data/alphanumerics.ts` — extracted `ALPHANUMERICS` constant into its own file
- `tests/` folder at project root as sibling to `src/`
- `docs/` folder with architecture, runbook, testing, and changelog documentation

### Changed
- Moved tests from `src/tests/` to `tests/` at project root

---

## 2026-03-27

### Added
- Jest + ts-jest with 17 unit tests covering all core logic (`sumArray`, `recurse`, `translate`, `dayOfMonth`, `mathClock`)
- ESLint + typescript-eslint (`npm run lint`)
- webpack-dev-server (`npm start` → localhost:3000 with live reload)
- GitHub Actions CI/CD pipeline — lint, test, build, and deploy on push to `master`
- `.visible` and `.connector` CSS classes
- `<title>Today's Mathematics</title>` to HTML template
- `CNAME` copied into `dist/` via CopyWebpackPlugin to preserve custom domain on deploy

### Changed
- Renamed `noget_translate` → `translate`
- Hoisted `ALPHANUMERICS` to module-level constant (was rebuilt on every recursive call)
- Replaced `setInterval` with single render on load (math changes once per day)
- Replaced inline JS styles with CSS class toggling (`.visible`, `.connector`)
- Replaced inline `style="font-size:25px"` with `.connector` CSS class
- Moved CSS files from root `css/` into `src/css/`
- Removed Bootstrap git submodule — Bootstrap resolved from npm package
- `package-lock.json` is now tracked in git (reproducible installs)
- `npm run build` now passes `--mode production` explicitly
- Removed `DOMContentLoaded` wrapper in `index.ts` (script is deferred, DOM already ready)

### Removed
- Dead interfaces: `SupremeAlpha`, `SupremeNumerics`, `SupremeAlphanumerics`
- Dead data: `alpha` and `numerics` dictionaries (only `alphanumerics` was ever used)
- Hand-rolled `includes()` wrapper (native `String.prototype.includes` used instead)
- `setInterval` polling every second
- Inline JS style manipulation
- Dead CSS rules: `#hour`, `#minute`, `#second`, `#millisecond`, `.block`, `footer {}`, `.doTheKnowledge`, `.translation`, `#main_container h4`
- Dead helper classes: `.border-red`, `.border-green`, `.border-gold`, `.border-black`, `.bold`
- Stale `<link>` tags in HTML template (CSS is bundled by webpack)
- Orphaned `js/bundle.js` (pre-webpack artifact)
- Empty `public/images/` and `src/css/` directories
- `moment` dependency (unused)
- Bootstrap git submodule from `css/bootstrap/`
- 16 npm audit vulnerabilities

---

## 2025-07-01

### Changed
- Migrated to TypeScript and removed jQuery dependency

---

## Earlier

### Changed
- Removed books section (affiliate account canceled)
- Various content and styling updates
