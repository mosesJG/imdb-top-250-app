# IMDB Top 100 App

A web app for browsing the 100 highest-rated films on [IMDb](https://www.imdb.com/chart/top/), built with React, TypeScript and Vite.

> **Status:** early development. The project is set up and builds cleanly. The movie list is not implemented yet.

## Planned features

- Ranked list of the IMDb Top 100 films
- Poster, title, release year and IMDb rating for each film
- Search by title
- Sort and filter by rating, year or genre
- Responsive layout with light and dark themes

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Vite](https://vite.dev/) | Dev server and build tool |
| [ESLint](https://eslint.org/) | Linting |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/mosesJG/imdb-top-100-app.git
cd imdb-top-100-app
npm install
```

### Running locally

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project |

## Project structure

```
imdb-top-100-app/
├── public/            # Static files served as-is (favicon)
├── src/
│   ├── App.tsx        # Root component
│   ├── index.css      # Global styles
│   └── main.tsx       # App entry point
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
└── eslint.config.js   # ESLint configuration
```

## Disclaimer

This is a personal project and is not affiliated with or endorsed by IMDb. Movie data and ratings belong to their respective owners.
