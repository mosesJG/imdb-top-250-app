import { writeFileSync } from 'node:fs'
import { topIds } from '../src/data/topIds.ts'
import type { Movie } from '../src/types/movie.ts'

const apiKey = process.env.OMDB_API_KEY

if (!apiKey) {
  console.error('Missing OMDB_API_KEY. Add it to .env.local')
  process.exit(1)
}

const movies: Movie[] = []

for (const [index, id] of topIds.entries()) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
  const data = await res.json()

  if (data.Response === 'False') {
    console.error(`Failed ${id}: ${data.Error}`)
    continue
  }

  movies.push(data)
  console.log(`${index + 1}/${topIds.length} ${data.Title}`)
}

writeFileSync('src/data/movies.json', JSON.stringify(movies, null, 2))
console.log(`Saved ${movies.length} movies`)


