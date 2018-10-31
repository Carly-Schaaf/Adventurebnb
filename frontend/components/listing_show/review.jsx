import React from 'react';
import ReviewItem from './review_item';

const ReviewIndex = ({ reviews }) => {
  const reviewsRow = Object.values(reviews).map((review, i) => (
    <li id={i} key={i} className="review-item">
      <ReviewItem review={review}/></li>));
  return(
    <ul className="reviews-row">
      { reviewsRow }
    </ul>
  );

};



export default ReviewIndex;
