import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import React from 'react';
import { requestBookingsForListing } from '../../actions/booking_actions';


const mapStateToProps = ({ entities }, ownProps) => ({
  listing: entities.listings[ownProps.match.params.listingId],
  listingImg: window.images.cottage_photo,
  reviews: entities.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  fetchBookings: (listingId) =>
  dispatch(requestBookingsForListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
