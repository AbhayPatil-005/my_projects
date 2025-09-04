import { useState, useEffect, useCallback } from 'react'
import { MovieList } from './components/MovieList'
import AddMovie from './components/addMovie';

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async()=>{
    setIsLoading(true);
    setError(null)
    try{
      const response = await fetch("https://react-project-fd0a2-default-rtdb.firebaseio.com/movies.json");
      if(!response.ok){
        throw new Error("Fetching data failed")
      }
    const data = await response.json();
    
    const loadedMovies = [];

    for (const key in data){  
      loadedMovies.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
        releaseDate: data[key].releaseDate,
      });
    }

    setMovie(loadedMovies);
    } catch(error) {
        setError(error.message || 'Something went wrong')
    }
    setIsLoading(false);
  },[])

    useEffect(()=>{fetchMovieHandler()},[fetchMovieHandler]);



  return (
    <>
      <AddMovie onUpdate={fetchMovieHandler}/>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && !error && <MovieList movieList={movie} onUpdate={fetchMovieHandler}/>}
        {isLoading && <p>Loading...</p>}
      </section>
        
    </>
  )
}

export default App
