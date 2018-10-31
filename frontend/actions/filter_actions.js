import { fetchListings } from './listing_actions';
import * as APIMap from '../util/map_api_util';

// export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_FILTER = "UPDATE_FILTER";


// export const updateBounds = (bounds) => ({
//   type: UPDATE_BOUNDS,
//   bounds
// });

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export function changeFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(updateFilter(filter, value));
    return fetchListings(getState().ui.filters.bounds)(dispatch);
  };
}

// export const getBounds = (location) => (dispatch) => (
//
//   APIMap.fetBounds(location).then(location =>
//     dispatch(updateFilter("bounds", location)),
//     errors => console.log(errors.responseJSON))
// );


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
