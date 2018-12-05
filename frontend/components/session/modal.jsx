import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import UpdateBookingContainer from '../booking/update_booking_container';
import { withRouter } from 'react-router-dom';
import GuestModal from '../search/guest_modal';
import onClickOutside from "react-onclickoutside";
import { fetchListings } from '../../actions/listing_actions';
import { changeFilter } from '../../actions/filter_actions';

class Modal extends React.Component {

  handleClickOutside(e) {
    this.props.closeModal();
    const modal = document.getElementsByClassName("filter-form");
    modal[0].classList.remove("remove-border");
  }

  render() {
    const {modal, currentUser, closeModal, history, listing, booking, fetchListings,
    bounds, changeFilter, guests } = this.props;

      if (currentUser && history.location.pathname === '/') {
       history.push('/index');
      }

      if (!currentUser && history.location.pathname === '/bookings/index' ) {
         history.push('/index');
      }

      if (!modal) {
        return null;
      }

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
        case 'price':
          return (
            <div className="modal-background price" onClick={closeModal}>
              <div className="modal-screen price" onClick={(e) => e.stopPropagation()}>
                <PriceModalContainer listing={ listing } booking={ booking } />
              </div>
            </div>
          );
        case 'guests':
          return (
            <div onClick={(e) => this.handleClickOutside(e)} className="modal-background guests">
              <div className="modal-screen guests" onClick={(e) => e.stopPropagation()}>
                <GuestModal listing={ listing } booking={ booking } changeFilter={ changeFilter }
                  bounds={bounds} closeModal={ closeModal } guests={ guests } />
              </div>
            </div>
          );
        default:
          return null;
      }

}}

const mapStateToProps = state => ({
  modal: state.ui.modal.modalType,
  currentUser: state.session.id,
  listing: state.ui.modal.listing,
  booking: state.ui.modal.booking,
  bounds: state.ui.filters.bounds,
  guests: state.ui.filters.guests
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Modal)));
