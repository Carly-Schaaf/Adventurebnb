import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
  filters: filterReducer,
  modal: modalReducer
});
