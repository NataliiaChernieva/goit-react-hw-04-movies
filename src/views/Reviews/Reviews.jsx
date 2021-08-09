import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import { ReviewsList }  from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieRewiews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.map(review => (
            <li>
              <p>
                <b>{review.author}</b>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
