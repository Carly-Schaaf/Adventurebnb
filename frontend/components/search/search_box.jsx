import React from 'react';
import onClickOutside from "react-onclickoutside";
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import {
        DateRangePicker,
        SingleDatePicker,
        DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../../../app/assets/stylesheets/api/listing_show/date_picker.css';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      arrivalDate: null,
      departureDate: null,
      numGuests: 1
    };
    this.setInput = this.setInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById("search-bar");
    const autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addDomListener(window, "load", autocomplete);
    let address;
    autocomplete.addListener("place_changed", () => {
     if (!autocomplete.getPlace().formatted_address) {
       address = autocomplete.getPlace().name;
       this.setState({
         input: address
       });
       this.handleSubmit();
     } else {
        address = autocomplete.getPlace().formatted_address;
        this.setState({
          input: address
        });
        this.handleSubmit();
      }
    });
  }

  handleSubmit(e) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.state.input }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.props.history.push(`/listings?lat=${lat}&lng=${lng}`);
      } else {
        this.props.history.push(`/listings?lat=34.019956&lng=-118.824270`);
      }
    });

    if (e) {
      e.preventDefault();
    }
    // this.setState({input: ""});
  }

  setInput(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }


  render() {
    const guests = [];
    for (var i = 2; i <= 10; i++) {
      guests.push(<option key={`${i}`} value={`${i}`}>{`${i}`} guests</option>);
    }
    return(
      <div className="search-box">
        <div className="search-box-title">
        Book unique homes
        </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
            <label className="search-box-label" for="search-bar">WHERE</label>
            <div className="search-box-input">
              <input id="search-bar" value={this.state.input} onChange={this.setInput("input")}
                className="box-input" type="text"
                placeholder="Anywhere"></input></div>
            <div>
              <div className="search-box-dates">
                <label className="search-box-label" for="search-bar">DATES</label>
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
                endDatePlaceholderText="Check out"/>
              </div>
            </div>

            <div>
              <label className="search-box-label">GUESTS
                <select className="listing-show-guest-dropdwn"
                  onChange={(e) => this.setState({numGuests: e.target.value})}>
                  <option value="1" default>1 guest</option>
                  { guests }
                </select>
              </label>
            </div>

            <div>
              <button className="search-box-submit" onClick={this.handleSubmit}>
                Search
              </button>
            </div>
            </form>
          </div>
    );
  }
}

export default withRouter(SearchBox);
