import React from 'react';
import Map from './map';
import ListingIndex from '../listing_index/listing_index';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listings, changeFilter, fetchListings } = this.props;
      return(
        <div className="entire-index map">
          <div className="filtered-index-by-map">
            <ListingIndex listings={ Object.values(listings) }
              fetchListings={ fetchListings } />
          </div>
            <Map changeFilter={ changeFilter } listings={ listings }
              bounds={ this.props.bounds } fetchListings={ fetchListings }/>
        </div>
      );}
}

export default withRouter(Search);
