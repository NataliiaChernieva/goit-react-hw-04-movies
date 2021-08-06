import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import defaultImg from '../../defaultImg/default-img.jpg';
import { CurrentCast } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  // const {path} = useRouteMatch();
  const { movieId } = useParams();
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    api.featchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <CurrentCast>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  imgBasePath + actor.profile_path !==
                  'https://image.tmdb.org/t/p/w500null'
                    ? imgBasePath + actor.profile_path
                    : defaultImg
                }
                alt={actor.name}
                width="180"
              ></img>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </CurrentCast>
      )}
    </>
  );
};

export default Cast;
