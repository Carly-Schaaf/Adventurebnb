import React from 'react';
import BookingIndexItemContainer from './booking_index_item_container';

class BookingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const { bookings } = this.props;
    const bookingsToMap = Object.values(this.props.bookings);
    const allBookings = bookingsToMap.map((booking, i) => {
      return(
        <div className="booking-item" key={i}>
          <BookingIndexItemContainer booking={ booking }/>
        </div>
        );
    });

    return(
      <div className="entire-index bookings">
        <ul className="bookings-row">
          { allBookings }
        </ul>
      </div>
    );
  }
}

export default BookingIndex;
