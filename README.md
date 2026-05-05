# Dream Beyond - Next.js

This project has been converted from Vite React to Next.js App Router.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Notes

- Routing has been moved from `react-router-dom` to Next.js App Router.
- Existing pages/components are preserved under `src/pages` and `src/components`.
- The catch-all Next route lives in `src/app/[[...slug]]` and maps the original routes.
