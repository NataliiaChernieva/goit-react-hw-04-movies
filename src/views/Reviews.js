import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieRewiews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li>
              <p>
                <b>{review.author}</b>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
