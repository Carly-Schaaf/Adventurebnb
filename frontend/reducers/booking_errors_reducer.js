import {
  RECEIVE_BOOKING_ERRORS,
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS
} from '../actions/booking_actions';
import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import { CLOSE_MODAL } from '../actions/modal_actions.js';

const bookingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case RECEIVE_BOOKING:
      if (action.bookingType === 'create') {
        return ["Success! Your reservation has been made"];
      } else {
        return ["Success! Your reservation has been updated"];
      }
    case RECEIVE_BOOKINGS:
      return [];
    case RECEIVE_LISTING:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default bookingErrorsReducer;
