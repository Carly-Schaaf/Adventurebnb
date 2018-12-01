import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.props.location.search;
    this.newURL = new URLSearchParams(this.search);
    this.state = {
      lat: parseFloat(this.newURL.get("lat")),
      lng: parseFloat(this.newURL.get("lng"))
    };
  }


  componentDidMount() {
    const mapOptions = {
      center: { lat: this.state.lat, lng: this.state.lng },
      zoom: 12
    };

   const map = this.refs.map;
   this.map = new google.maps.Map(map, mapOptions);
   this.MarkerManager = new MarkerManager(this.map);

   google.maps.event.addListener(this.map, 'idle', () => {
       const { north, south, east, west } = this.map.getBounds().toJSON();
       const bounds = {
         northEast: {lat: north, lng: east},
         southWest: {lat: south, lng: west}
       };
       this.props.changeFilter(bounds);}
    );
  }

  componentDidUpdate() {
    this.search = this.props.location.search;
    this.newURL = new URLSearchParams(this.search);
    const newLat = parseFloat(this.newURL.get("lat"));
    const newLng = parseFloat(this.newURL.get("lng"));
    const center = { lat: newLat, lng: newLng };

   if (this.state.lat !== newLat || this.state.lng !== newLng) {
     this.setState(center);
     this.map.setCenter(center);
    }
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









// componentWillReceiveProps(nextProps) {
//   for (const index in nextProps) {
//   if (nextProps[index] !== this.props[index]) {
//     console.log(index, this.props[index], '-->', nextProps[index]);
//     }
//   }
//   debugger
//   // const prevLat = this.lat;
//   // const prevLng = this.lng;
//
//   const search = this.props.location.search;
//   const newURL = new URLSearchParams(search);
//   this.lat = parseFloat(newURL.get("lat"));
//   this.lng = parseFloat(newURL.get("lng"));
//   const center = { lat: this.lat, lng: this.lng };
//
//   //
//   // if (this.lat !== prevLat || this.lng !== prevLng) {
//   //   const mapOptions = {
//   //     center: { lat: this.lat, lng: this.lng },
//   //     zoom: 12
//   //   };
//
//     // const map = this.refs.map;
//     // this.map = new google.maps.Map(map, mapOptions);
//     this.map.setCenter(center);
//     // this.MarkerManager = new MarkerManager(this.map);
//     this.MarkerManager.updateMarkers(this.props.listings);
//     //
//     // google.maps.event.addListener(this.map, 'idle', () => {
//     //   const { north, south, east, west } = this.map.getBounds().toJSON();
//     //   const bounds = {
//     //     northEast: {lat: north, lng: east},
//     //     southWest: {lat: south, lng: west}
//     //   };
//     //   this.props.changeFilter(bounds);}
//     // );}
// }

// componentWillUpdate() {
//   debugger
//   this.MarkerManager.updateMarkers(this.props.listings);
// }
//
