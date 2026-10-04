# IMDB Top 250 App

A web app for browsing the 250 highest-rated films on [IMDb](https://www.imdb.com/chart/top/), built with React, TypeScript and Vite.

> **Status:** early development. Movie data for all 250 films is in place. The movie list UI is not implemented yet.

## Planned features

- Ranked list of the IMDb Top 250 films
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
| [OMDb API](https://www.omdbapi.com/) | Movie data and posters |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/mosesJG/imdb-top-250-app.git
cd imdb-top-250-app
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
| `npm run fetch-movies` | Re-download movie data from OMDb into `src/data/movies.json` |

## Movie data

Movie details come from the [OMDb API](https://www.omdbapi.com/). The data is fetched once by a script and saved to `src/data/movies.json`, so the app needs no API key to run.

To refresh the data:

1. Get an API key from [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx).
2. Create a `.env.local` file in the project root containing:
   ```
   OMDB_API_KEY=your_key_here
   ```
   This file is ignored by git, so the key is never committed.
3. Run `npm run fetch-movies`.

The script fetches every ID in `src/data/topIds.ts`, in ranking order. It requires Node.js 22.6 or newer.

## Project structure

```
imdb-top-250-app/
├── public/               # Static files served as-is (favicon)
├── scripts/
│   └── fetch-movies.ts   # Downloads movie data from OMDb
├── src/
│   ├── components/       # Reusable UI pieces (Navbar, MovieCard, MovieList, …)
│   ├── pages/            # One component per page (HomePage, MovieDetailsPage, AboutPage)
│   ├── data/
│   │   ├── topIds.ts     # IMDb IDs of the Top 250, in ranking order
│   │   └── movies.json   # Movie details fetched from OMDb
│   ├── types/
│   │   └── movie.ts      # Movie type matching the OMDb response
│   ├── App.tsx           # Root component
│   ├── index.css         # Global styles
│   └── main.tsx          # App entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## Disclaimer

This is a personal project and is not affiliated with or endorsed by IMDb. Movie data and ratings belong to their respective owners.
