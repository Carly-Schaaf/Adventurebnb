import { connect } from 'react-redux';
import {
  fetchSFListings,
  fetchNYListings,
  fetchLAListings,
  fetchHAVListings,
  fetchTKListings } from '../../actions/listing_actions';
import MasterIndex from './master_index';
import { changeFilter } from '../../actions/filter_actions';


const mapStateToProps = (state) => ({
  sfListings: Object.values(state.entities.sfListings),
  laListings: Object.values(state.entities.laListings),
  nyListings: Object.values(state.entities.nyListings),
  tkListings: Object.values(state.entities.tkListings),
  havListings: Object.values(state.entities.havListings),
  reviews: state.entities.reviews,
  guests: state.ui.filters.guests
});

const mapDispatchToProps = (dispatch) => ({
  fetchSFListings: () => dispatch(fetchSFListings()),
  fetchLAListings: () => dispatch(fetchLAListings()),
  fetchNYListings: () => dispatch(fetchNYListings ()),
  fetchTKListings: () => dispatch(fetchTKListings()),
  fetchHAVListings: () => dispatch(fetchHAVListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterIndex);
