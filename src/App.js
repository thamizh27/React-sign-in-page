import React, { Component } from "react";
import "./App.css";
//import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("your Informations are Submitted! logged in");
  };

  render() {
    return (
      <div className="App">
        <div className="form">
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="sub">
              <label>FirstName :</label>
              <input
                autoFocus
                value={this.state.firstName}
                type="text"
                placeholder="Firstname"
                onChange={this.handleChangeFirstName}
                name="firstName"
                required
              />
            </div>
            <div className="sub">
              <label>LastName :</label>
              <input
                value={this.state.lastName}
                type="text"
                placeholder="Lastname"
                onChange={this.handleChangeLastName}
                name="lastName"
                required
              />
            </div>
            <div className="sub">
              <label>Email :</label>
              <input
                value={this.state.email}
                type="mail"
                placeholder="example@gmail.com"
                onChange={this.handleChangeEmail}
                name="email"
                required
              />
            </div>
            <div className="sub">
              <label>Password :</label>
              <input
                value={this.state.password}
                type="password"
                onChange={this.handleChangePassword}
                name="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
