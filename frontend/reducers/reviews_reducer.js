import { RECEIVE_LISTING } from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      if (action.listing.reviews) {
        return action.listing.reviews;
      } else {
        return {};
      }
    default:
      return state;
  }
};

export default listingsReducer;
