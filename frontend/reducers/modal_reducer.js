import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions.js';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const modalReducer = (state = {modalType: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return {modalType: action.modal,
              listing: action.listing,
              booking: action.booking};
    case CLOSE_MODAL:
      return {modalType: null};
    case RECEIVE_CURRENT_USER:
      return {modalType: null};
    case RECEIVE_SESSION_ERRORS:
      return state;
    default:
      return state;
  }
};

export default modalReducer;
