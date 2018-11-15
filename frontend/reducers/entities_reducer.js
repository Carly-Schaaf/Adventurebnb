import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';
import listingsTripsReducer from './listings_trips_reducer';
import { sfListingsReducer,
  laListingsReducer,
  nyListingsReducer,
  tkListingsReducer,
  havListingsReducer } from './city_listings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  bookings: bookingsReducer,
  bookingsByListing: listingsTripsReducer,
  sfListings: sfListingsReducer,
  laListings: laListingsReducer,
  nyListings: nyListingsReducer,
  tkListings: tkListingsReducer,
  havListings: havListingsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
