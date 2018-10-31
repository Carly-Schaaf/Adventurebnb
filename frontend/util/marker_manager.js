export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

  }

  createMarkerFromListing(listing) {
    let title = "$" + listing.dailyRate.toString();
    let latLng = new google.maps.LatLng(listing.lat, listing.lng);
    let marker = new google.maps.Marker({
      position: latLng,
      title
    });
    let loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
    // this.bounds.extend(loc);
    this.markers[listing.id] = marker;
    marker.setMap(this.map);
  }

  updateMarkers(listings) {
    // this.bounds = new google.maps.LatLngBounds();
    Object.keys(this.markers)
      .filter(listingId => !listings[listingId])
      .forEach((listingId) => this.removeMarker(listingId));

    Object.values(listings)
      .forEach(listing => {
        if (!this.markers[listing.id]) {
          this.createMarkerFromListing(listing);
        }});

    // this.map.fitBounds(this.bounds);
    // this.map.panToBounds(this.bounds);
  }

  removeMarker(markerId) {
    (this.markers[markerId]).setMap(null);
    delete this.markers[markerId];
  }


}
