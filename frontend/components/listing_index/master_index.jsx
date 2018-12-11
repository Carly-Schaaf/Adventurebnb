import React from 'react';
import ListingIndex from './listing_index';

class MasterIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSFListings();
    this.props.fetchLAListings();
    this.props.fetchNYListings();
    this.props.fetchTKListings();
    this.props.fetchHAVListings();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.guests !== this.props.guests) {
      this.props.fetchSFListings();
      this.props.fetchLAListings();
      this.props.fetchNYListings();
      this.props.fetchTKListings();
      this.props.fetchHAVListings();
    }
  }

  render() {
    const { sfListings,
            laListings,
            nyListings,
            tkListings,
            havListings } = this.props;

    return(
      <div className="entire-index">
        <div className="listing-row-title">Homes in San Francisco</div>
        <ListingIndex listings={ sfListings }/>
        <div className="listing-row-title">Homes in Los Angeles</div>
        <ListingIndex listings={ laListings }/>
        <div className="listing-row-title">Homes in Tokyo</div>
        <ListingIndex listings={ tkListings }/>
        <div className="listing-row-title">Homes in Havana</div>
        <ListingIndex listings={ havListings }/>
        <div className="listing-row-title">Homes in New York</div>
        <ListingIndex listings={ nyListings }/>
      </div>
    );
  }
}

export default MasterIndex;
