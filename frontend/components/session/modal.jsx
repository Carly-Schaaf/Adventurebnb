import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import UpdateBookingContainer from '../booking/update_booking_container';
import { withRouter } from 'react-router-dom';

const Modal = ({modal, currentUser, closeModal, history, listing, booking}) => {
  if (currentUser && history.location.pathname === '/') {
   history.push('/index');
  }

  if (!currentUser && history.location.pathname === '/bookings/index' ) {
     history.push('/index');
  }

  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
        return (
          <div className="modal-background" onClick={closeModal}>
            <div className="modal-screen" onClick={(e) => e.stopPropagation()}>
              <LoginFormContainer />
            </div>
          </div>
        );
    case 'signup':
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-screen" onClick={(e) => e.stopPropagation()}>
            <SignupFormContainer />
          </div>
        </div>
      );
    case 'calendar':
      return (
        <div className="modal-background calendar" onClick={closeModal}>
          <div className="modal-screen calendar" onClick={(e) => e.stopPropagation()}>
            <UpdateBookingContainer listing={ listing } booking={ booking } />
          </div>
        </div>
      );
    default:
      return null;
  }

};

const mapStateToProps = state => ({
  modal: state.ui.modal.modalType,
  currentUser: state.session.id,
  listing: state.ui.modal.listing,
  booking: state.ui.modal.booking
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
