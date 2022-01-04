import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="btnsame btn1">
          <a href="mailto:chshubhangh@gmail.com" target="_blank">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div className="btnsame btn2">
          <a href="https://www.facebook.com/shubhangh" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        {/* <div class="btnsame btn3">
          <a
            href="https://www.linkedin.com/in/yasaswi-s-a4062617a/"
            target="_blank"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </div> */}
        <div className="btnsame btn4">
          <a href="https://www.instagram.com/shubhanghc/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
