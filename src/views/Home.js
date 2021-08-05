import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeadind.jsx';

const Home = () => {
  const [movies, setMovies] = useState([]);
  //const {url} = useRouteMatch();
  // console.log('match :>> ', match);

  useEffect(() => {
    api.featchPopularMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <PageHeading>Trending today</PageHeading>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
