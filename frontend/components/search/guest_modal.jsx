import React from 'react';
import { withRouter } from 'react-router-dom';

class GuestModal extends React.Component {

  constructor(props) {
    super(props);
    this.int = 1;
    this.state = {
      adults: `+${this.int}`
    };
    this.addGuest = this.addGuest.bind(this);
    this.subtractGuest = this.subtractGuest.bind(this);
  }

  subtractGuest(e) {
    e.preventDefault();
    this.int -= 1;
    this.setState({adults: `+${this.int}`});
  }

  addGuest(e) {
    e.preventDefault();
    this.int += 1;
    this.setState({adults: `+${this.int}`});
  }

  displayErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))
      }
      </ul>
    );
  }

  render() {
    let minusBtn; let addBtn;
    if (this.int > 1) {
      minusBtn = <button className="add-guest-li" onClick={this.subtractGuest}>
      <i class="material-icons minus-circle">remove_circle_outline</i></button>;
    } else {
      minusBtn = <button className="add-guest-li">
      <i class="material-icons minus-circle disabled">remove_circle_outline</i>
      </button>;
    }
    if (this.int < 16) {
      addBtn = <button className="add-guest-li" onClick={this.addGuest}>
      <i class="material-icons plus-circle">control_point</i></button>;
    } else {
      addBtn = <button className="add-guest-li">
      <i class="material-icons plus-circle disabled">control_point</i></button>;
    }

    return(
        <form className="session-form">
          <br />
          <div className="add-guest-container">
            {minusBtn}
            <li className="add-guest-li num">{this.state.adults}</li>
            {addBtn}
          </div>
          <br />
          <button className="session-submit" onClick={this.handleSubmit}>
            Apply
          </button>
          <div className="other-session-links-container">
            Clear
          </div>
        </form>
    );
  }
}

export default withRouter(GuestModal);
