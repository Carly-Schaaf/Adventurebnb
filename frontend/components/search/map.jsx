import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {

  componentDidMount() {
    const search = this.props.location.search;
    const newURL = new URLSearchParams(search);
    this.lat = parseFloat(newURL.get("lat"));
    this.lng = parseFloat(newURL.get("lng"));

    const mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 12
    };

   const map = this.refs.map;
   this.map = new google.maps.Map(map, mapOptions);
   this.MarkerManager = new MarkerManager(this.map);
   this.MarkerManager.updateMarkers(this.props.listings);

   google.maps.event.addListener(this.map, 'idle', () => {
       const { north, south, east, west } = this.map.getBounds().toJSON();
       const bounds = {
         northEast: {lat: north, lng: east},
         southWest: {lat: south, lng: west}
       };
       this.props.changeFilter(bounds);}
    );

  }

  componentWillReceiveProps(nextProps) {
    const prevLat = this.lat;
    const prevLng = this.lng;

    const search = this.props.location.search;
    const newURL = new URLSearchParams(search);
    this.lat = parseFloat(newURL.get("lat"));
    this.lng = parseFloat(newURL.get("lng"));

    if (this.lat !== prevLat || this.lng !== prevLng) {
      const mapOptions = {
        center: { lat: this.lat, lng: this.lng },
        zoom: 12
      };

      const map = this.refs.map;
      this.map = new google.maps.Map(map, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(this.props.listings);

      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: {lat: north, lng: east},
          southWest: {lat: south, lng: west}
        };
        this.props.changeFilter(bounds);}
      );}
  }

  componentWillUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }


  render() {
  return (
    <div id="map-container" ref="map">

    </div>
    );
  }
}

export default withRouter(Map);




// componentDidMount() {
//   if (this.props.bounds.lat === undefined) return null ;
//   let bounds = {
//       center: {
//         lat: this.props.bounds.lat(),
//         lng: this.props.bounds.lng()
//       },
//       zoom: 13
//     };
//   const map = this.refs.map;
//   this.map = new google.maps.Map(map, bounds);
//   this.MarkerManager = new MarkerManager(this.map);
//   this.registerListeners();
//
// }
//
// componentDidUpdate(prevProps) {
//   if (prevProps.match.params !== this.props.match.params) {
//     this.props.changeFilter(this.props.bounds).then((listings) => {
//       return this.MarkerManager.updateMarkers(this.props.listings);}
//     );
//   }
// }


// registerListeners() {
//   google.maps.event.addListener(this.map, 'idle', () => {
//     const { north, south, east, west } = this.map.getBounds().toJSON();
//     const bounds = {
//       northEast: {lat: north, lng: east},
//       southWest: {lat: south, lng: west}
//     };
//     this.props.changeFilter(bounds).then((listings) => {
//       return this.MarkerManager.updateMarkers(this.props.listings);}
//     );
//   });
//   google.maps.event.addListener(this.map, 'click', (e) => {
//     const coords = ({lat: e.latLng.lat(), lng: e.latLng.lng()});
//     this.handleClick(coords);
//   });
// }
