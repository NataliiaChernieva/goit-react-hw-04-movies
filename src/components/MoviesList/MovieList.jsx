import PropTypes from 'prop-types';
import { CurrentMovieList, MovieItem, MovieImage, MovieTitle } from './MovieList.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  console.log(`location`, location)

    return(<CurrentMovieList>
          {movies.map(({id, poster_path, title}) => (
              <MovieItem key={id}>
                <Link to={{
                  pathname: `movies/${id}`,
                  state: {
                    from: {
                      location,
                      label: "Go back to all movies"
                    },
                  //  params: `movies/?query=${query}`
                  },
                }} >
                   <MovieImage src={imgBasePath + poster_path} alt={title}></MovieImage>
                   <MovieTitle>{title}</MovieTitle>
                </Link>
            </MovieItem>
          ))}
        </CurrentMovieList >
    )
};

MovieList.protoTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),),
}

