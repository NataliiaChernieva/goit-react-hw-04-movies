import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Form from '../components/Form/Form.jsx';
import * as api from '../services/movies-api';
import MovieList from '../components/MoviesList/MovieList';
// import { CurrentMovieList, MovieItem, MovieImage, MovieTitle } from '../components/MoviesList/MovieList.styled.jsx';

const Movies = () => {
  // const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();
  console.log(`location in movie`, location);
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get('query') ?? '';
  // const imgBasePath = 'https://image.tmdb.org/t/p/w500';

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
      {/* <CurrentMovieList>
          {movies && movies.map(({id, poster_path, title}) => (
              <MovieItem key={id}>
                <Link to={{
                  pathname: `movies/${id}`,
                  state: {
                    params: `movies/?query=${query}`
                  },
                }} >
                   <MovieImage src={imgBasePath + poster_path} alt={title}></MovieImage>
                   <MovieTitle>{title}</MovieTitle>
                </Link>
            </MovieItem>
          ))}
        </CurrentMovieList > */}
    </>
  );
};

export default Movies;
