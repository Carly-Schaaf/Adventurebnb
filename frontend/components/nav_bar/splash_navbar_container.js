import { connect } from 'react-redux';
import SplashNavBar from './splash_navbar';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => ({
  openModal: (formType) => dispatch(openModal(formType))
});

export default connect(null, mapDispatchToProps)(SplashNavBar);
