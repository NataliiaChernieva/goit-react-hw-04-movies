import { useState, useEffect } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import * as api from '../../services/movies-api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews';
import defaultImg from '../../defaultImg/noposter.png';
import { LeftSide, RightSide, Movie, Genres,Button} from './MovieInfo.styled';

const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    api.featchMovieInfo(movieId).then(data => {
      //   console.log('data :>> ', data);
      setMovie(data);
    });
  }, [movieId]);

  const handleGoBack = () => {
    //history.push()
  }

  return (
    <>
      {movie && (
        <>
        <Button type="button" onClick={handleGoBack}>Go back</Button>
        <Movie>
          <LeftSide>
            <img
              src={
                imgBasePath + movie.poster_path !==
                'https://image.tmdb.org/t/p/w500null'
                  ? imgBasePath + movie.poster_path
                  : defaultImg
              }
              alt={movie.original_title}
              width="300"
            ></img>
          </LeftSide>

          <RightSide>
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
              <Genres>
                {movie.genres.map(ganre => (
                  <li key={ganre.id}>{ganre.name}</li>
                ))}
              </Genres>
            </li>
          </RightSide>
        </Movie>

          
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
