import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Login page for admin of the website.</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="loginContent">
          <div class="text">Login Here</div>
          <form action="#">
            <div class="loginField">
              <i class="fa fa-user"></i>
              <input type="text" required />
              <label>Email address</label>
            </div>
            <div class="loginField">
              <i class="fa fa-lock"></i>
              <input type="password" />
              <label>Password</label>
            </div>
            <div class="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button>Sign in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
