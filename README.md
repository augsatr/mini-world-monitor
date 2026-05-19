# Mini World Monitor

<img width="287" height="176" alt="Image" src="https://github.com/user-attachments/assets/43523afc-2f76-46c6-b618-1e38341ecb01" />

**Mini World Monitor** — interactive 3D global intelligence dashboard. Research centers, top universities, and top companies mapped on a beautiful interactive globe.

Built with [globe.gl](https://github.com/vasturiano/globe.gl), Three.js, and Vite.

## Features

- **Interactive 3D globe** — drag to rotate, scroll to zoom, auto-rotate
- **137 locations** across 3 categories with color-coded markers
- **Click any marker** to fly to it and view details
- **Layer toggles** — show/hide Research Centers, Universities, Companies
- **Smart labels** that scale with zoom
- **Dark OSINT-style** dashboard UI

## Project Structure

```
mini-world-monitor/
├── index.html               # Entry HTML with sidebar layout
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite bundler config
├── screenshot.png           # Repo preview image
├── src/
│   ├── main.ts              # Globe init, markers, click handling, toggles
│   ├── style.css            # Dark theme sidebar & globe styles
│   └── data/
│       ├── research-centers.ts  # 40 research centers (CERN, NASA, etc.)
│       ├── universities.ts      # 42 top universities worldwide
│       └── companies.ts         # 55 top global companies
└── node_modules/            # Dependencies (not tracked)
```

## Data Layers

| Layer | Count | Color | Examples |
|-------|-------|-------|---------|
| 🔬 Research Centers | 40 | Red | CERN, NASA, Max Planck, RIKEN, KAIST, CNRS |
| 🎓 Top Universities | 42 | Yellow | Harvard, Stanford, MIT, Oxford, Cambridge, ETH |
| 🏢 Top Companies | 55 | Blue | Apple, Google, Microsoft, Saudi Aramco, Tencent |

## Quick Start

```bash
npm install
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Language | TypeScript |
| Bundler | Vite |
| 3D Engine | globe.gl + Three.js |
| Styling | CSS (dark theme) |
| Map Texture | Blue Marble (NASA) |

## Data Sources

Location data compiled from open sources:
- Research centers — institutional websites, Wikipedia
- Universities — QS/THE World University Rankings (top ~40)
- Companies — Fortune Global 500, market cap rankings

## License

AGPL-3.0 — see [LICENSE](LICENSE)

## Author

Created by Sohan
