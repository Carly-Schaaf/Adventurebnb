import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserNavBar from './user_navbar';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(UserNavBar);
