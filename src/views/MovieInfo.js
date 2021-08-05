import { useState, useEffect } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import * as api from '../services/movies-api';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieInfo(movieId).then(data => {
      //   console.log('data :>> ', data);
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
                {movie.original_title}({movie.release_date})
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

          <hr />

          <p>Additional Informaion</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path={`${path}/cast`} component={Cast} />
            <Route exact path={`${path}/reviews`} component={Reviews} />
          </Switch>
        </>
      )}
    </>
  );
};

export default MovieInfo;
