# Runbook

## Local Development

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm start
```
Opens `localhost:3000` with live reload. Changes to `src/` are reflected immediately.

### Production build
```bash
npm run build
```
Outputs optimized bundle to `dist/`. This is what gets deployed.

---

## Checks

### Run tests
```bash
npm test
```

### Run linter
```bash
npm run lint
```

### Run full pipeline (same as CI)
```bash
npm run lint && npm test && npm run build
```

---

## Deployment

Deployment is fully automated via GitHub Actions. To deploy:

1. Push to `master`
2. The CI pipeline runs: lint → test → build → deploy
3. If all steps pass, `dist/` is published to GitHub Pages
4. The site is live at `todaysmathematics.com`

No manual deployment steps are needed.

---

## Troubleshooting

### Site not updating after push
- Check the **Actions** tab on GitHub to confirm the workflow passed
- If the deploy job failed, check the logs for errors
- GitHub Pages can take 1-2 minutes to propagate after a successful deploy

### Custom domain broken after deploy
- Confirm `CNAME` is present in `dist/` after build (`cat dist/CNAME`)
- The `CopyWebpackPlugin` in `webpack.config.js` is responsible for copying it
- In GitHub repo Settings → Pages, confirm the custom domain is still set

### Content not showing on the page
- Open browser devtools console and check for JS errors
- The bundle script is loaded with `defer` — DOM manipulation runs directly at module level, no `DOMContentLoaded` needed
- Confirm `#todaysmathRow` and `#date` have the `.visible` class applied after load

### Tests failing locally but passing in CI
- Run `npm ci` (not `npm install`) to match the exact lockfile CI uses
- Confirm Node version matches CI (Node 20)

### `npm run lint` reports errors
- Fix the reported issues before pushing — CI will block the deploy if lint fails
