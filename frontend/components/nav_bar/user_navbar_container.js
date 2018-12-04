import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserNavBar from './user_navbar';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(null, mapDispatchToProps)(UserNavBar));
