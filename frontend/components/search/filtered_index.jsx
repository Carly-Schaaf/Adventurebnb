import React from 'react';
import onClickOutside from "react-onclickoutside";
import ListingIndex from '../listing_index/listing_index';
import { withRouter } from 'react-router-dom';

class FilteredIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCityListings(this.props.match.params.city);
  }

  // want it to render a secondary nav bar that
  // offers more search filters
  // want it to render the index page filtered by city

  render() {
    const listings = Object.values(this.props.listings);
    if (listings[0] === undefined) return null;
    return(
      <div className="entire-index">
        <div className="listing-row-title">
          <ListingIndex listings={listings} />
        </div>
      </div>
    );
  }
}

export default withRouter(FilteredIndex);
