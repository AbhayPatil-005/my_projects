import { useState, useEffect } from 'react'
import { MovieList } from './components/MovieList'

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovieHandler(){
    setIsLoading(true);
    const response = await fetch("https://swapi.tech/api/films/");
    const data = await response.json();

    const transformedMovies = data.result.map(film => ({
      id: film.properties.episode_id,
      title: film.properties.title,
      openingText: film.properties.opening_crawl,
      releaseDate: film.properties.release_date
    }));

    setMovie(transformedMovies);
    setIsLoading(false);
  }
    useEffect(()=>{fetchMovieHandler()},[]);



  return (
    <>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MovieList movieList={movie}/>}
        {isLoading && <p>Loading...</p>}
      </section>
        
    </>
  )
}

export default App
