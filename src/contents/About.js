import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="hr_line line2">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">Shubhangh</h2>
        <p>UI Developer.</p>
        <br></br>
        <p style={{ marginTop: "-15px", lineHeight: "30px" }}>
          I graduated from{" "}
          <a href="https://www.uis.edu/" className="anchorTag" target="_blank">
            University of Illinois
          </a>{" "}
          in the field of Computer Science and currently working for{" "}
          <a
            href="http://www.icscorpusa.com//"
            className="anchorTag"
            target="_blank"
          >
            Innovative Consulting Solutions, LLC
          </a>{" "}
          .{" "}
        </p>
        <p style={{ marginTop: "5px", lineHeight: "30px" }}>
          {/* The client I work for is{" "}
          <a href="https://www.ford.com/" className="anchorTag" target="_blank">
            <u>Ford Motor Company</u>
          </a>{" "}
          as a software engineer in - In Vehicle Infotaintment (IVI) department.
          The project that I work on is a really interesting one which is kind
          of an embedded web project. I have learnt and still learing great
          stuff while working on this project. This mainly includes UI of the
          Vehicle media screen and the controls of the vehicle perfomed using
          the cluster. This project has a very unique architecture, learning and
          understanding it was a real challenge and also very interesting.
          <br></br>I will be more than happy to chat and share with you more
          information about all my projects. <br></br>( **Can't and will not
          share any confidential information). */}
        </p>
        <p style={{ marginTop: "5px", lineHeight: "30px" }}>
          I will leave my contact details{" "}
          <Link to="/contact">
            <u>here.</u>
          </Link>{" "}
          If you have any Full time opportunity or a part time gig please feel
          to contact me anytime.
        </p>

        <div class="sk_div">
          <h3 class="sk_head">Some of my skills that am best at:</h3>
          <div class="sk">React </div>
          <div class="sk s2">JavaScript </div>
          <div class="sk s3"> Node </div>
          <div class="sk s4">CSS</div>
          <div class="sk s5">HTML</div>
        </div>
      </div>
    );
  }
}

export default About;
