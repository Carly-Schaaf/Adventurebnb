export const fetchBounds = (location) => (dispatch) => {
  let geocoder = new google.maps.Geocoder();
  return(
    geocoder.geocode({
      address: location
    },
    function(results, status) {
          if (status === 'OK') {
            dispatch(updateFilter("bounds", results[0].geometry.location));
          }
          else {
            console.log(status.responseJSON);
          }
        }));
};
