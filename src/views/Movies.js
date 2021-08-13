import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Form from '../components/Form/Form.jsx';
import * as api from '../services/movies-api';
import MovieList from '../components/MoviesList/MovieList';

const Movies = () => {
  // const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();
  console.log(`location in movie`, location);
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    api.featchMovieInSearch(searchQuery).then(data => {
      if (data.length === 0) {
        toast.error(`Oops, we didn't find such movie as ${searchQuery}`);
      }
      setMovies(data);
    });
  }, [searchQuery]);

  const inputValueHandler = value => {
    // setMovieName(value);
    history.push({
      pathname: location.pathname,
      search: `?query=${value}`,
    });
  };

  return (
    <>
      <Form onSubmit={inputValueHandler} />
      <Toaster />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
