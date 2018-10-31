import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import UserNavBarContainer from './nav_bar/user_navbar_container';
import { NavAuthRoute } from '../util/route_util';
import ModalContainer from './session/modal';
import MasterIndexContainer from './listing_index/master_index_container';
import ListingShowContainer from './listing_show/listing_show_container';
import SearchContainer from './search/search_container';
import BookingIndexContainer from './booking/booking_index_container';

const App = () => (
  <div>
    <ModalContainer />
    <NavAuthRoute path="/" component={ UserNavBarContainer } />
    <Switch>
      <Route path="/index" component={ MasterIndexContainer } />
      <Route exact path="/listings/:listingId" component={ ListingShowContainer } />
      <Route path="/listings/" component={ SearchContainer } />
      <Route path="/bookings/index" component={ BookingIndexContainer } />
      <Redirect to="/" />
    </Switch>
  </div>
);



export default App;
