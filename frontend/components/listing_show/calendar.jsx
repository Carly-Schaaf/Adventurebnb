import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../../../app/assets/stylesheets/api/listing_show/date_picker.css';
import { smallStarCount } from '../../reducers/selectors';


class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listing: props.listing,
      maxGuests: props.listing.maxGuests,
      bookingId: this.props.bookingId,
      arrivalDate: this.props.arrivalDate,
      departureDate: this.props.departureDate,
      numGuests: this.props.numGuests,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings(this.props.listing.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { loggedIn, openModal } = this.props;
    if (loggedIn) {
      this.props.action({
        id: this.state.bookingId,
        arrival_date: this.state.arrivalDate ? this.state.arrivalDate._d : null,
        departure_date: this.state.departureDate ? this.state.departureDate._d : null,
        num_guests: this.state.numGuests}, this.state.listing.id);
    } else {
      openModal("signup");
    }
  }

  displayErrors() {
    return(
      <ul className="booking-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${Math.random()}`}>
            { error }
          </li>
        ))
      }
      </ul>
    );
  }

  isDayBooked(day) {
    const { bookings } = this.props;
    const bookingArray = Object.values(bookings);
    for (let i = 0; i < bookingArray.length; i++) {
      const start = bookingArray[i].arrivalDate;
      const end = bookingArray[i].departureDate;
      if (day.isBetween(start, end)) {
        return true;
      }
    }
    return false;
  }

  // handleGuestClick() {
  //   const { openModal } = this.props;
  //   openModal("guests");
  //   this.modalScreen = document.getElementsByClassName("modal-screen guests")[0];
  //   this.modalScreen.classList.remove("guests");
  //   this.modalScreen.classList += "calendar";
  //   // this.guests =
  // }

  render() {
    const { listing, maxGuests } = this.state;
    const reviews = Object.keys(this.props.reviews);
    const guests = [];
    for (var i = 2; i <= maxGuests; i++) {
      guests.push(<option key={`${i}`} value={`${i}`}>{`${i}`} guests</option>);
    }
  return (
  <div className="listing-calendar">
    <div className="listing-calendar-price">
        <div className="calendar-price-section">
              <li className="daily-rate">
                <i className="fas fa-dollar-sign"></i>{listing.dailyRate}</li>
              <li className="per-night">
                per night
             </li>
             <div>
               <div className="index-stars-container">
                 {smallStarCount(listing.avgTotalReview)}
                 <li className="num-reviews">{listing.numReviews}</li>
              </div>
            </div>
          </div>

        <div>
          <form>
            <div className="dates">
              <label className="calendar-label">Dates
                <br />
              <DateRangePicker
              startDate={this.state.arrivalDate}
              startDateId="check_in"
              endDate={this.state.departureDate}
              endDateId="check_out"
              onDatesChange={({ startDate, endDate }) => this.setState({ arrivalDate:
                startDate, departureDate: endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText="Check in"
              endDatePlaceholderText="Check out"
              isDayBlocked={(day) => this.isDayBooked(day)}
              />
              </label>
            </div>

            <label className="calendar-label">Guests
              <select className="listing-show-guest-dropdwn"
                onChange={(e) => this.setState({numGuests: e.target.value})}>
                <option value="1" default>1 guest</option>
                { guests }
              </select>
              {/* <input placeholder="1 guest" onClick={() => this.handleGuestClick()}></input> */}
            </label>
            <div>{this.displayErrors()}</div>
            <button className="session-submit request-btn" onClick={this.handleSubmit}>
              {this.props.formType}
            </button>
          </form>
        </div>
     </div>
   </div>);
 }}

export default Calendar;
