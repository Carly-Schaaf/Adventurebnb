import { connect } from 'react-redux';
import {
  fetchSFListings,
  fetchNYListings,
  fetchLAListings,
  fetchHAVListings,
  fetchTKListings } from '../../actions/listing_actions';
import MasterIndex from './master_index';
import { changeFilter, updateFilter } from '../../actions/filter_actions';


const mapStateToProps = (state) => ({
  sfListings: Object.values(state.entities.sfListings),
  laListings: Object.values(state.entities.laListings),
  nyListings: Object.values(state.entities.nyListings),
  tkListings: Object.values(state.entities.tkListings),
  havListings: Object.values(state.entities.havListings),
  reviews: state.entities.reviews,
  guests: state.ui.filters.guests,
  // windowSize: state.ui.filters.windowSize
});

const mapDispatchToProps = (dispatch) => ({
  fetchSFListings: (num) => dispatch(fetchSFListings(num)),
  fetchLAListings: (num) => dispatch(fetchLAListings(num)),
  fetchNYListings: (num) => dispatch(fetchNYListings (num)),
  fetchTKListings: (num) => dispatch(fetchTKListings(num)),
  fetchHAVListings: (num) => dispatch(fetchHAVListings(num)),
  updateFilter: (num) => dispatch(updateFilter("windowSize", num))
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterIndex);
