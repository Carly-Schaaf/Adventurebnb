import { connect } from 'react-redux';
import Calendar from '../listing_show/calendar.jsx';
import { updateBooking, createBooking } from '../../actions/booking_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  errors: errors.booking,
  listing: ownProps.listing,
  loggedIn: Boolean(session.id),
  formType: "Update reservation",
  arrivalDate: moment(ownProps.booking.arrivalDate),
  departureDate: moment(ownProps.booking.departureDate),
  bookingId: ownProps.booking.id,
  numGuests: ownProps.booking.numGuests,
  reviews: ownProps.listing.numReviews
});

const mapDispatchToProps = (dispatch) => ({
  action: (booking) => dispatch(updateBooking(booking)),
  openModal: () => dispatch(openModal("signup")),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
