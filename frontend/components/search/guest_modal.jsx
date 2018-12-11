import React from 'react';
import { withRouter } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";

class GuestModal extends React.Component {

  constructor(props) {
    super(props);
    this.int = this.props.guests || 1;
    this.state = {
      adults: `+${this.int}`
    };
    this.addGuest = this.addGuest.bind(this);
    this.subtractGuest = this.subtractGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestBtn = document.getElementsByClassName("filter-btn")[0];
    this.modal = document.getElementsByClassName("filter-form")[0];
    this.handleClear = this.handleClear.bind(this);
  }

  handleClickOutside(e) {
    let getListings = false;
    if (this.props.location.pathname === "/listings") {
      getListings = true;
    }
    this.props.changeFilter("guests", this.int, getListings);
    this.props.closeModal();
    this.modal.classList.remove("remove-border");
  }

  subtractGuest(e) {
    e.preventDefault();
    if (!this.guestBtn.classList.contains("add-blue")) {
      this.guestBtn.className += " add-blue";
    }
    this.int -= 1;
    this.html = "guests";
    if (this.int === 1) this.html = "guest";
    this.setState({adults: `+${this.int}`});
    this.guestBtn.innerHTML = `${this.int} ${this.html}`;
  }

  addGuest(e) {
    e.preventDefault();
    if (!this.guestBtn.classList.contains("add-blue")) {
      this.guestBtn.className += " add-blue";
    }
    this.int += 1;
    this.html = "guests";
    if (this.int === 1) this.html = "guest";
    this.setState({adults: `+${this.int}`});
    this.guestBtn.innerHTML = `${this.int} ${this.html}`;
  }

  handleSubmit(e) {
    e.preventDefault();
    let getListings = false;
    if (this.props.location.pathname === "/listings") {
      getListings = true;
    }
    this.props.changeFilter("guests", this.int, getListings);
    this.modal.classList.remove("remove-border");
    this.props.closeModal();
  }

  handleClear(e) {
    e.preventDefault();
    let getListings = false;
    if (this.props.location.pathname === "/listings") {
      getListings = true;
    }
    this.props.changeFilter("guests", 0, getListings);
    this.modal.classList.remove("remove-border");
    this.guestBtn.innerHTML = `Guests`;
    this.guestBtn.classList.remove("add-blue");
    this.props.closeModal();
  }

  render() {
    let minusBtn; let addBtn;
    if (this.int > 1) {
      minusBtn = <button className="add-guest-li" onClick={this.subtractGuest}>
      <i className="material-icons minus-circle">remove_circle_outline</i></button>;
    } else {
      minusBtn = <button className="add-guest-li">
      <i className="material-icons minus-circle disabled">remove_circle_outline</i>
      </button>;
    }
    if (this.int < 16) {
      addBtn = <button className="add-guest-li" onClick={this.addGuest}>
      <i className="material-icons plus-circle">control_point</i></button>;
    } else {
      addBtn = <button className="add-guest-li">
      <i className="material-icons plus-circle disabled">control_point</i></button>;
    }

    return(
        <form className="session-form">
          <div className="add-guest-container">
            Guests
            <div className="inner-add-guest-container">
              {minusBtn}
              <li className="add-guest-li num">{this.state.adults}</li>
              {addBtn}
            </div>
          </div>
          <br />
          <br />
          <div className="modal-btns-conatiner">
            <button className="modal-cancel-btn" onClick={this.handleClear}>
              Clear
            </button>
            <button className="modal-apply-btn" onClick={this.handleSubmit}>
              Apply
            </button>
          </div>
        </form>
    );
  }
}

export default withRouter(onClickOutside(GuestModal));
