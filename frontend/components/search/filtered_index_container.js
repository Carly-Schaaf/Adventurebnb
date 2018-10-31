import { connect } from 'react-redux';
import { fetchCityListings } from '../../actions/listing_actions';
import FilteredIndex from './filtered_index';

const mapStateToProps = (state, ownProps) => ({
  listings: state.entities.listings
});

const mapDispatchToProps = (dispatch) => ({
  fetchCityListings: (city) => dispatch(fetchCityListings(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilteredIndex);
