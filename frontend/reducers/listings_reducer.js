import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return Object.assign({}, state,
        {[action.listing.listing.id]: action.listing.listing});
    default:
      return state;
  }
};

export default listingsReducer;
