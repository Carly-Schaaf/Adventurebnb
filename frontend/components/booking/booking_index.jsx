import React from 'react';
import BookingIndexItemContainer from './booking_index_item_container';
import {BeatLoader} from 'react-spinners';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBookings().then(() => this.setState({loading: true}));
  }

  render() {
    if (!this.state.loading) {
      return(
        <div className="spinner-container">
          <BeatLoader />
        </div>
      );}
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
