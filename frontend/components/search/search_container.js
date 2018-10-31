import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import Search from './search';
import { changeFilter } from '../../actions/filter_actions';
import { fetchBounds } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => ({
  listings: state.entities.listings,
  bounds: state.ui.filters.bounds
});

const mapDispatchToProps = (dispatch) => ({
  fetchBounds: (location) => dispatch(fetchBounds(location)),
  changeFilter: (bounds) => dispatch(changeFilter("bounds", bounds)),
  fetchListings: (bounds) => dispatch(fetchListings(bounds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
