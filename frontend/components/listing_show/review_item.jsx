import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = ({ review }) => {
  return(
    <div className="review-item">
        <div className="review-top-section">
          <img className="user-photo" src={review.author.photo}></img>
          <div className="user-info">
            <li className="review-username">{review.author.username}</li>
            <li className="review-date">{review.date}</li>
          </div>
        </div>
        <div className="review-body">
          {review.body}
      </div>
    </div>
);};

export default ReviewItem;
