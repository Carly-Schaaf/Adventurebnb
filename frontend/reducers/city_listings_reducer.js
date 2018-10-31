import {
RECEIVE_SF_LISTINGS,
RECEIVE_LA_LISTINGS,
RECEIVE_NY_LISTINGS,
RECEIVE_TK_LISTINGS,
RECEIVE_HAV_LISTINGS
} from '../actions/listing_actions';

export const sfListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SF_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export const laListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LA_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export const nyListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NY_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export const tkListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TK_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export const havListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HAV_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};
