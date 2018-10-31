import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Already have an account?",
  formSubmit: "Sign up"
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  logIn: (user) => dispatch(login(user)),
  otherForm: (
    <button className="other-session-link" onClick={() => dispatch(openModal('login'))}>
      Log in
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
