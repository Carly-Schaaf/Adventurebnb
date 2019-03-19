import { connect } from 'react-redux';
import Calendar from './calendar.jsx';
import { createBooking } from '../../actions/booking_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { requestBookingsForListing } from '../../actions/booking_actions';


const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  errors: errors.booking,
  listing: ownProps.listing,
  loggedIn: Boolean(session.id),
  formType: "Book",
  bookingId: null,
  arrivalDate: null,
  departureDate: null,
  numGuests: 1,
  reviews: entities.reviews,
  bookings: entities.bookingsByListing
});

const mapDispatchToProps = (dispatch) => ({
  action: (booking, listingId) => dispatch(createBooking(booking, listingId)),
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
  fetchBookings: (listingId) =>
  dispatch(requestBookingsForListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
