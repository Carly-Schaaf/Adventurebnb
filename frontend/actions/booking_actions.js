export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKINGS_FOR_LISTING = "RECEIVE_BOOKINGS_FOR_LISTING";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
import * as APIBooking from '../util/booking_api_util';

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const requestBookings = () => (dispatch) => (
  APIBooking.fetchBookings().then(
    bookings => dispatch({type: RECEIVE_BOOKINGS, bookings})
  )
);

export const requestBookingsForListing = (listingId) => (dispatch) => (
  APIBooking.fetchBookingsForListing(listingId).then(
    bookings => dispatch({type: RECEIVE_BOOKINGS_FOR_LISTING, bookings})
  )
);
//
// export const requestBooking = (bookingId) => (dispatch) => (
//   APIBooking.fetchBooking(bookingId).then(
//     booking => dispatch({type: RECEIVE_BOOKING, booking})
//   )
// );

export const createBooking = (booking, listingId) => (dispatch) => {
  return(
    APIBooking.createBooking(booking, listingId).then(
      booking => dispatch(
        {type: RECEIVE_BOOKING, booking, bookingType: "create"}),
      err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const updateBooking = (booking) => (dispatch) => (
  APIBooking.editBooking(booking).then(
    booking => dispatch({type: RECEIVE_BOOKING, booking, bookingType: "update"}),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const deleteBooking = (bookingId) => (dispatch) => (
  APIBooking.deleteBooking(bookingId).then(
    booking => dispatch({type: REMOVE_BOOKING, bookingId: booking.id})
  )
);
