import React from 'react';
import ListingIndex from './listing_index';
import {BeatLoader} from 'react-spinners';


class MasterIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    let gridWidth;
    window.addEventListener("resize", (e) => {
      gridWidth = e.target.innerWidth - 230;
      this.props.updateFilter(Math.floor(gridWidth/300));
      console.log(Math.floor(e.target.innerWidth/300));
      console.log(e.target.innerWidth)
    });
    gridWidth = window.innerWidth - 230;
    this.props.updateFilter(Math.floor(gridWidth / 300));

    this.props.fetchSFListings();
    this.props.fetchLAListings();
    this.props.fetchNYListings();
    this.props.fetchTKListings();
    this.props.fetchHAVListings().then(() => this.setState({loading: true}));
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.guests !== this.props.guests) || prevProps.windowSize !== this.props.windowSize) {
      this.props.fetchSFListings();
      this.props.fetchLAListings();
      this.props.fetchNYListings();
      this.props.fetchTKListings();
      this.props.fetchHAVListings();
    }
  }

  handleSubmit(e, city) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: city }, (results, status) => {
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

  render() {
    if (!this.state.loading) {
      return(
        <div className="spinner-container">
          <BeatLoader />
        </div>
      );}
    const { sfListings,
            laListings,
            nyListings,
            tkListings,
            havListings } = this.props;

    return(
      <div className="entire-index">
        <button onClick={(e) => this.handleSubmit(e, "San Francisco")}
          className="listing-row-title">Homes in San Francisco</button>
        <ListingIndex listings={ sfListings }/>

        <button onClick={(e) => this.handleSubmit(e, "Los Angeles")}
          className="listing-row-title">Homes in Los Angeles</button>
        <ListingIndex listings={ laListings }/>

        <button onClick={(e) => this.handleSubmit(e, "Tokyo")}
          className="listing-row-title">Homes in Tokyo</button>
        <ListingIndex listings={ tkListings }/>

        <button onClick={(e) => this.handleSubmit(e, "Havana")}
          className="listing-row-title">Homes in Havana</button>
        <ListingIndex listings={ havListings }/>

        <button onClick={(e) => this.handleSubmit(e, "New York")}
          className="listing-row-title">Homes in New York</button>
        <ListingIndex listings={ nyListings }/>
      </div>
    );
  }
}

export default MasterIndex;
