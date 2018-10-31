export const fetchBookings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings'
  })
);

export const createBooking = (booking, listingId) => {
  return(
    $.ajax({
      method: 'POST',
      url: `api/listings/${listingId}/bookings`,
      data: { booking }
    })
  );
};

export const editBooking = (booking) => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookings/${booking.id}`,
    data: { booking:
            {arrival_date: booking.arrival_date,
            departure_date: booking.departure_date,
            num_guests: booking.num_guests}}
  })
);

export const deleteBooking = (bookingId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${bookingId}`
  })
);
