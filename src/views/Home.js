import { useState, useEffect } from 'react';
import * as api from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeadind.jsx';
import MovieList from '../components/MoviesList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.featchPopularMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <PageHeading>Trending today</PageHeading>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
