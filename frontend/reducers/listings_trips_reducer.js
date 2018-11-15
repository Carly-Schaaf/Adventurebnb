import { RECEIVE_BOOKINGS_FOR_LISTING } from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS_FOR_LISTING:
      return action.bookings;
    default:
      return state;
  }
};

export default bookingsReducer;
