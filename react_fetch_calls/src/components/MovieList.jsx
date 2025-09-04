import { Movie } from "./Movie";

export const MovieList = ({ movieList, onUpdate }) => {
  return (
    <ul>
      {movieList.map((movie) => (
        <Movie
          key={movie.id} 
          id={movie.id}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.releaseDate}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};
