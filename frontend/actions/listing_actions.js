export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_SF_LISTINGS = "RECEIVE_SF_LISTINGS";
export const RECEIVE_LA_LISTINGS = "RECEIVE_LA_LISTINGS";
export const RECEIVE_NY_LISTINGS = "RECEIVE_NY_LISTINGS";
export const RECEIVE_TK_LISTINGS = "RECEIVE_TK_LISTINGS";
export const RECEIVE_HAV_LISTINGS = "RECEIVE_HAV_LISTINGS";
import * as APIListing from '../util/listing_api_util';

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveListing = (listing) => {
  return ({
    type: RECEIVE_LISTING,
    listing
  });
};

export const receiveSFListings = (listings) => ({
  type: RECEIVE_SF_LISTINGS,
  listings
});

export const receiveLAListings = (listings) => ({
  type: RECEIVE_LA_LISTINGS,
  listings
});

export const receiveNYListings = (listings) => ({
  type: RECEIVE_NY_LISTINGS,
  listings
});

export const receiveTKListings = (listings) => ({
  type: RECEIVE_TK_LISTINGS,
  listings
});

export const receiveHAVListings = (listings) => ({
  type: RECEIVE_HAV_LISTINGS,
  listings
});

export const fetchListings = (filters) => (dispatch) => (
  APIListing.fetchListings(filters).then(
    listings => dispatch(receiveListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchListing = (listingId) => (dispatch) => (
  APIListing.fetchListing(listingId).then(
    listing => dispatch(receiveListing(listing)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchCityListings = (city) => (dispatch, getState) => (
  APIListing.fetchListingByCity(city, getState().ui.filters).then(
    listings => dispatch(receiveListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchSFListings = () => (dispatch, getState) => (
  APIListing.fetchListingByCity("San Francisco", getState().ui.filters).then(
    listings => dispatch(receiveSFListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchNYListings = () => (dispatch, getState) => (
  APIListing.fetchListingByCity("New York", getState().ui.filters).then(
    listings => dispatch(receiveNYListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchLAListings = () => (dispatch, getState) => (
  APIListing.fetchListingByCity("Los Angeles", getState().ui.filters).then(
    listings => dispatch(receiveLAListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchTKListings = () => (dispatch, getState) => (
  APIListing.fetchListingByCity("Tokyo", getState().ui.filters).then(
    listings => dispatch(receiveTKListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);

export const fetchHAVListings = () => (dispatch, getState) => (
  APIListing.fetchListingByCity("Havana", getState().ui.filters).then(
    listings => dispatch(receiveHAVListings(listings)),
    errors => console.log(errors.responseJSON)
  )
);
