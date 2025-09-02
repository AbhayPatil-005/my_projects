import { useState } from 'react'
import { MovieList } from './components/MovieList'

function App() {
  const [movie, setMovie] = useState([]);
 
  async function fetchMovieHandler(){
    const response = await fetch("https://swapi.tech/api/films/");
    const data = await response.json();

    const transformedMovies = data.result.map(film => ({
      id: film.properties.episode_id,
      title: film.properties.title,
      openingText: film.properties.opening_crawl,
      releaseDate: film.properties.release_date
    }));

    setMovie(transformedMovies);
  }

  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movieList={movie}/>
      </section>
        
    </>
  )
}

export default App
