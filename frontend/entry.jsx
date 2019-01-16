import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as ListingAPI from './util/listing_api_util';
import * as BookingAPI from './util/booking_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { fetchListing } from './actions/listing_actions';
import { fetchBounds, changeFilter } from './actions/filter_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Testing Purposes
  // window.fetchListing = fetchListing;
  // window.signup = APIUtil.signup;
  // window.login = APIUtil.login;
  // window.logout = APIUtil.logout;
  // window.fetchListing = ListingAPI.fetchListing;
  // window.fetchBookings = BookingAPI.fetchBookings;
  // window.createBooking = BookingAPI.createBooking;
  // window.editBooking = BookingAPI.editBooking;
  // window.deleteBooking = BookingAPI.deleteBooking;
  // window.login = login;
  // window.getBounds = getBounds;
  // window.fetchBounds = fetchBounds;
  window.changeFilter = changeFilter;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // Testing Purposes

  ReactDOM.render(<Root store={ store }/>, root);
});
