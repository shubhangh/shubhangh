import React, { Component } from "react";
import Social from "../components/Social";
import shu from "../docs/Shubhangh.pdf";

class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic">Contact Me</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div className="contactContent">
          <p style={{ marginTop: "30px", lineHeight: "30px" }}>
            As a developer I always try to keep up my skills, read and learn
            about the new technologies. I have and had a lot of different
            experiences in my life both personal and professional, if you would
            like to contact me for seeking help or extending your help, I would
            always be available through email chat or any other social media.
          </p>
          <p style={{ marginTop: "20px", lineHeight: "30px" }}>
            If you want to hire me or work with me on any projects I would
            really encourage and appreciate the collaboration.
          </p>
          <p style={{ marginTop: "20px", lineHeight: "30px" }}>
            {/* In the past me and my friends woked on creating a student
            communication and support channel for all the people who are aspired
            in getting their higher education aborad, if you want to be a part
            of edujock family, you should totally check out this platform{" "}
            <a
              href="https://www.edujock.com/"
              target="_blank"
              style={{ color: "blue" }}
            >
              <u>
                <b>edujock.</b>
              </u>
            </a> */}
          </p>
        </div>

        <div className="contactButtons">
          <div className="back3">
            <a href={shu} download target="_blank">
              Download Resume
              <i className="fa fa-download"></i>
            </a>
          </div>

          <div className="back3 back4">
            <a href="tel:+7327237726">
              <i className="fa fa-phone"></i> Contact Me
            </a>
          </div>
        </div>
        <div className="hr_line line3">
          <div className="inner3"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Contact;
