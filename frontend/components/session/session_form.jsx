import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const demoUser = {username: "alice", password: "starwars"};
    let index = 0;
    const that = this;
    this.demoEffect = setInterval(() => {
      if (index < demoUser.username.length) {
        that.setState({
          username: this.state.username + demoUser.username[index]
        })
      }
      if (index < demoUser.password.length) {
        that.setState({
          password: this.state.password + demoUser.password[index]
        })
      }
      index ++;
      if (index > demoUser.password.length && index > demoUser.username.length ) {
        clearInterval(this.demoEffect);
        if (this.props.formSubmit === "Log in") {
          this.props.action(demoUser);
        } else {
          this.props.logIn(demoUser);
        }
      }
    }, 300)
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

  switchForms() {
    return this.props.otherForm;
  }


  render() {
    // debugger
    return(
        <form className="session-form" onSubmit={this.handleSubmit}>
          <br />
          <input className="session-input"
            onClick={this.changeBorder}
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) =>
              this.setState({"username": e.target.value})}/>
          <br />
          <input className="session-input"
            onClick={this.changeBorder}
            placeholder="Password"
            value={this.state.password}
            type="password" onChange={(e) =>
              this.setState({"password": e.target.value})} />
          <div className="session-errors">{this.displayErrors()}</div>
          <button className="session-submit" onClick={this.handleSubmit}>
            {this.props.formSubmit}
          </button>
          <button className="demo-submit" onClick={this.handleDemoSubmit}>
            Or try a demo login
          </button>
          <div className="other-session-links-container">
            {this.props.formType} {this.switchForms()}
          </div>
        </form>
    );
  }
}

export default withRouter(SessionForm);
