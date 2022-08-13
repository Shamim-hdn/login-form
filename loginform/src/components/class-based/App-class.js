import React, { Component } from "react";

import "../functional/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.emailRef.current.focus();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input_group">
            <label>Email</label>
            <input type="text" ref={this.emailRef} />
          </div>
          <div className="input_group">
            <label>Password</label>
            <input type="password" ref={this.passwordRef} />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default App;
