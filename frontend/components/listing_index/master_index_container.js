import { connect } from 'react-redux';
import {
  fetchSFListings,
  fetchNYListings,
  fetchLAListings,
  fetchHAVListings,
  fetchTKListings } from '../../actions/listing_actions';
import MasterIndex from './master_index';

const mapStateToProps = (state) => ({
  sfListings: Object.values(state.entities.sfListings),
  laListings: Object.values(state.entities.laListings),
  nyListings: Object.values(state.entities.nyListings),
  tkListings: Object.values(state.entities.tkListings),
  havListings: Object.values(state.entities.havListings),
  reviews: state.entities.reviews
});

const mapDispatchToProps = (dispatch) => ({
  fetchSFListings: () => dispatch(fetchSFListings()),
  fetchLAListings: () => dispatch(fetchLAListings()),
  fetchNYListings: () => dispatch(fetchNYListings ()),
  fetchTKListings: () => dispatch(fetchTKListings()),
  fetchHAVListings: () => dispatch(fetchHAVListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterIndex);
