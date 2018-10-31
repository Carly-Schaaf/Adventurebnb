import { connect } from 'react-redux';
import { requestBookings } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state) => ({
  bookings: state.entities.bookings,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(requestBookings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
