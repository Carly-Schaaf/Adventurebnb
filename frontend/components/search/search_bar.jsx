import React from 'react';
import { connect } from 'react-redux';
import onClickOutside from "react-onclickoutside";
import FilteredIndexContainer from './filtered_index_container';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions';
import FilterForm from './filter_form';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
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
    }}

  setInput(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }


  render() {
    let renderFilters;
    if (this.props.location.pathname === '/index' ||
    this.props.location.search !== '') {
      renderFilters = <FilterForm />;
    }
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
        <div className="search-bar-box">
          <i className="fas fa-search"></i>
          <input id="search-bar" value={this.state.input} onChange={this.setInput("input")}
            className="search-bar" type="text"
            placeholder="Search">
          </input>
        </div>
        {renderFilters}
      </form>
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default withRouter(connect(null, mapDispatchtoProps)(SearchBar));
