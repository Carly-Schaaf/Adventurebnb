import { connect } from 'react-redux';
import FilterForm from './filter_form';
import { openModal } from '../../actions/modal_actions';
import { changeFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  guests: state.ui.filters.guests
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (formType) => dispatch(openModal(formType)),
  changeFilter: (filter, value, getListings) =>
  dispatch(changeFilter(filter, value, getListings))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
