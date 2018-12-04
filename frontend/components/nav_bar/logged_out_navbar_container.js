import { connect } from 'react-redux';
import LoggedOutNavBar from './logged_out_navbar';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
//
const mapDispatchToProps = (dispatch) => ({
  openModal: (formType) => dispatch(openModal(formType))
});

export default withRouter(connect(null, mapDispatchToProps)(LoggedOutNavBar));
