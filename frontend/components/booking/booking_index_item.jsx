import React from 'react';
import { Link } from 'react-router-dom';


class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.booking.listingId);
  }

  handleDelete() {
    this.props.deleteBooking(this.props.booking.id);
  }

  handleEdit() {
    this.props.openModal("calendar", this.props.listing, this.props.booking);
  }

  render() {
    const { listing, booking } = this.props;
    if (listing === undefined) return null;
    let arrivalDate = new Date(`${booking.arrivalDate} PST`);
    let departureDate = new Date(`${booking.departureDate} PST`);
    let guests;
    (booking.numGuests === 1) ? guests = " guest" : guests = " guests";
    return(
      <div className="interior-booking-item">
        <img className="index-photo booking" src={listing.photo}></img>
        <li className="booking-city">{listing.city}</li>
        <li className="item-type booking">{arrivalDate.toDateString()} - {departureDate.toDateString()}</li>
        <li className="item-type booking">{booking.numGuests} {guests}</li>
        <Link to={`/listings/${listing.id}`}><li className="item-title booking">{listing.title}</li></Link>
        <button className="modify-booking-btn-pink"
          onClick={this.handleEdit}>Edit this booking</button>
        <button className="modify-booking-btn-green"
          onClick={this.handleDelete}>Cancel this booking</button>
      </div>
    );
  }
}

export default BookingIndexItem;
