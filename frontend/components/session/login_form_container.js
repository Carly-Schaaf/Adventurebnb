import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Don't have an account?",
  formSubmit: "Log in"
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  otherForm: (
    <button className="other-session-link" onClick={() => dispatch(openModal('signup'))}>
      Sign up
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
