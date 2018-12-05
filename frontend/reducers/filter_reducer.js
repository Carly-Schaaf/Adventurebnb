import { UPDATE_FILTER } from '../actions/filter_actions';
// import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
// import { CLOSE_MODAL } from '../actions/modal_actions.js';

const filterReducer = (state = { bounds: {}, guests: 1 }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, {[action.filter]: action.value});
    default:
      return state;
  }
};

export default filterReducer;
