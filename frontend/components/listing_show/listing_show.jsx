import React from 'react';
import ListingDetail from './listing_detail';
import CalendarContainer from './calendar_container';
import { listingAmenities } from '../../reducers/selectors';

class ListingShow extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchListing(this.props.match.params.listingId);
  }


  render() {
    const { listing, listingImg, submitButton, reviews, bookings } = this.props;
    if (listing === undefined) return null;
    const amenities = listingAmenities(listing);
    return(
      <div className="listing-page">
        <img className="main-photo" src={listing.photo}></img>
        <div className="detail-container">
          <ListingDetail reviews={reviews} listing={ listing } listingImg={ listingImg }
            amenities={ amenities } />
          <CalendarContainer listing={ listing } reviews={ reviews }/>
        </div>
      </div>
    );
  }
}

export default ListingShow;
