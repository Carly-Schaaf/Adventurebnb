import React from 'react';
import ListingIndex from './listing_index';
import {BeatLoader} from 'react-spinners';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class MasterIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      loading: false,
      numPhotos: 4
    };
  }

  componentDidMount() {
    let gridWidth, numPhotos;
    window.addEventListener("resize", (e) => {
      gridWidth = e.target.innerWidth - 120;
      numPhotos = Math.floor(gridWidth / 295);
      console.log(numPhotos)
      this.setState({numPhotos: numPhotos})
    });
    gridWidth = window.innerWidth - 230;
    numPhotos = Math.floor(gridWidth / 300);
    this.setState({ numPhotos: numPhotos })

    this.props.fetchSFListings();
    this.props.fetchLAListings();
    this.props.fetchNYListings();
    this.props.fetchTKListings();
    this.props.fetchHAVListings().then(() => this.setState({loading: true}));
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.guests !== this.props.guests)) {
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
          <BeatLoader style={{backgroundColor: "red"}}/>
        </div>
      )
      ;}
    const { sfListings,
            laListings,
            nyListings,
            tkListings,
            havListings } = this.props;
    
    return(
    
      <div className="entire-index">
        <button onClick={(e) => this.handleSubmit(e, "San Francisco")}
          className="listing-row-title">Homes in San Francisco</button>
        <ListingIndex listings={ sfListings.slice(0, this.state.numPhotos) }/>

        <button onClick={(e) => this.handleSubmit(e, "Los Angeles")}
          className="listing-row-title">Homes in Los Angeles</button>
        <ListingIndex listings={ laListings.slice(0, this.state.numPhotos) }/>

        <button onClick={(e) => this.handleSubmit(e, "Tokyo")}
          className="listing-row-title">Homes in Tokyo</button>
        <ListingIndex listings={ tkListings.slice(0, this.state.numPhotos) }/>

        <button onClick={(e) => this.handleSubmit(e, "Havana")}
          className="listing-row-title">Homes in Havana</button>
        <ListingIndex listings={ havListings.slice(0, this.state.numPhotos) }/>

        <button onClick={(e) => this.handleSubmit(e, "New York")}
          className="listing-row-title">Homes in New York</button>
        <ListingIndex listings={ nyListings.slice(0, this.state.numPhotos) }/>
      </div>
    );
  }
}

export default MasterIndex;
