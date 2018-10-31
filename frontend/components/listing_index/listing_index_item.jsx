import React from 'react';
import { Link } from 'react-router-dom';
import { smallStarCount } from '../../reducers/selectors';

const ListingIndexItem = ({ listing }) => (
  <Link to={`/listings/${listing.id}`}>
    <li><img className="index-photo" src={listing.photo}></img></li>
    <div className="index-listing-description">
      <li className="item-type">{listing.homeType.toUpperCase()} &bull; {listing.city.toUpperCase()}</li>
      <li className="item-title">{listing.title}</li>
      <li className="item-price">${listing.dailyRate} per night</li>
    </div>
    <div>
      <div className="index-stars-container">
        {smallStarCount(listing.avgTotalReview)}
        <li className="num-reviews">{listing.numReviews}</li>
     </div>
   </div>
  </Link>
);

export default ListingIndexItem;
