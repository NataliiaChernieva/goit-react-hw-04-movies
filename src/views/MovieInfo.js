import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../services/movies-api';

const MovieInfo = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieInfo(movieId).then(data => {
      console.log('data :>> ', data);
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button type="button">Go back</button>
          <img src={movie.poster_path} alt={movie.original_title}></img>
          <ul>
            <li>
              <h2>
                {movie.original_title}({movie.release_date}.getFullYear())
              </h2>
            </li>
            <li>
              <p>User Score: {movie.vote_average}</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(ganre => (
                  <li key={ganre.id}>{ganre.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default MovieInfo;
