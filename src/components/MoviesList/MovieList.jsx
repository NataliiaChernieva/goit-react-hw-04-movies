import { CurrentMovieList, MovieItem, MovieImage, MovieTitle } from './MovieList.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';

    return(<CurrentMovieList>
          {movies.map(({id, poster_path, title}) => (
              <MovieItem key={id}>
                <Link to={{
                  pathname: `movies/${id}`,
                  state: { from: location },}} >
                   <MovieImage src={imgBasePath + poster_path} alt={title}></MovieImage>
                   <MovieTitle>{title}</MovieTitle>
                </Link>
            </MovieItem>
          ))}
        </CurrentMovieList >
    )
};

