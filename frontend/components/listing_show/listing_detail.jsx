import React from 'react';
import Amentities from './amentities';
import Review from './review';
import { starCount } from '../../reducers/selectors';


const ListingDetail = ({listing, listingImg, amentities, reviews}) => (

      <div className="detail-description">
          <li className="item-type">{listing.homeType.toUpperCase()}</li>
          <li className="listing-title">{listing.title}</li>
          <li className="listing-city">{listing.city}</li>
        <p className="listing-description">
          {listing.description}
        </p>
        <div className="listing-amentities">
          <Amentities amentities={amentities} />
        </div>
        <div className="listing-reviews">
          <div className="review-header">
            <div className="review-number">{Object.keys(reviews).length}
              <div className="review-title">Reviews</div>
            </div>
            <div className="stars-container">{starCount(listing.avgTotalReview)}</div>
          </div>
          <div className="star-breakdown-cantainer">
            <div className="star-container">
              <li className="review-type">Accuracy</li>
              <li className="breakdown-star">{starCount(listing.avgAccuracy)}</li>
              <li className="review-type">Location</li>
              <li className="breakdown-star">{starCount(listing.avgLocation)}</li>
              <li className="review-type">Communication</li>
              <li className="breakdown-star">{starCount(listing.avgCommunication)}</li>
              <li className="review-type">Check-in</li>
              <li className="breakdown-star">{starCount(listing.avgCheckin)}</li>
              <li className="review-type">Cleanliness</li>
              <li className="breakdown-star">{starCount(listing.avgCleanliness)}</li>
              <li className="review-type">Value</li>
              <li className="breakdown-star">{starCount(listing.avgValue)}</li>
            </div>
          </div>
          <Review reviews={ reviews } />
        </div>
      </div>

);

export default ListingDetail;
