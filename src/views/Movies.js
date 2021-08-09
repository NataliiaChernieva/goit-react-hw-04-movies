import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Form from '../components/Form/Form.jsx';
import * as api from '../services/movies-api';
import MovieList from '../components/MoviesList/MovieList';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);

  const inputValueHandler = value => {
    setMovieName(value);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    api.featchMovieInSearch(movieName).then(data => {
      if (data.length === 0) {
        toast.error(`Oops, we didn't find such movie as ${movieName}`);
      }
      setMovies(data);
    });
  }, [movieName]);

  return (
    <>
      <Form onSubmit={inputValueHandler} />
      <Toaster />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
