import { MovieCard } from "./MovieCard";

type ContentProps = {
  genreTitle: string
  movies: MovieProps[]
}

export function Content(props: ContentProps) {
  const {
    genreTitle,
    movies
  } = props

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {genreTitle}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
  )
}