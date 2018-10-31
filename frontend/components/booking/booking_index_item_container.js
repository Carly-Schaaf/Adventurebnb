import { connect } from 'react-redux';
import BookingIndexItem from './booking_index_item';
import { fetchListing } from '../../actions/listing_actions';
import { deleteBooking } from '../../actions/booking_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return ({
    listing: state.entities.listings[ownProps.booking.listingId],
    booking: ownProps.booking,
    formType: "Book"
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
  openModal: (modal, listing, booking) => dispatch(openModal(modal, listing, booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndexItem);
