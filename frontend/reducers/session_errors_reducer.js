import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
 } from '../actions/session_actions';
 import {
   OPEN_MODAL
 } from '../actions/modal_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_SESSION_ERRORS:
      return [];
    case OPEN_MODAL:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
