import { connect } from 'react-redux';
import LoggedOutNavBar from './logged_out_navbar';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { changeFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  guests: state.ui.filters.guests
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (formType) => dispatch(openModal(formType)),
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedOutNavBar));
