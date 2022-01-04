import React, { Component } from "react";
import Navitem from "./Navitem";
import profilepic from "../img/hiProfPic.jpeg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <div className="neu2">
          <div className="neu1">
            <img src={profilepic} className="profilepic"></img>
          </div>
        </div>
        <h2>Shubhangh</h2>
        <p>UI Developer</p>
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem
            item="About Me"
            tolink="/about"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Portfolio"
            tolink="/portfolio"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Contact"
            tolink="/contact"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Admin login"
            tolink="/admin"
            activec={this.activeitem}
            className="adminButton"
          ></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
