import { connect } from 'react-redux';
import Calendar from './calendar.jsx';
import { createBooking } from '../../actions/booking_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ entities, session, errors }, ownProps) => ({
  errors: errors.booking,
  listing: ownProps.listing,
  loggedIn: Boolean(session.id),
  formType: "Book",
  bookingId: null,
  arrivalDate: null,
  departureDate: null,
  numGuests: 1,
  reviews: entities.reviews
});

const mapDispatchToProps = (dispatch) => ({
  action: (booking, listingId) => dispatch(createBooking(booking, listingId)),
  openModal: () => dispatch(openModal("signup")),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
