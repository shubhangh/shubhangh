import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        {/* <div className="nameAndJob"> */}
        <h1>Shubhangh</h1>
        <ReactTypingEffect
          className="typingeffect"
          text={["A UI Developer", "A Full Stack Developer"]}
          speed={100}
          eraseDelay={900}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        {/* </div> */}

        <h4
          style={{ marginTop: "30px", marginRight: "30px", marginLeft: "10px" }}
        >
          Hey! Hope you are having a great day and are safe with maintaining
          social distancing.
        </h4>
        <p style={{ marginTop: "30px", lineHeight: "30px" }}>
          BTW, you can call me shu, I would like to share a little bit of myself
          with you. I am a very curious person when it comes to interesting
          topics like Computer Science, Coding, Development, Business, Finances
          , Sports, Dogs. I am a very social going person and would like to know
          more about you 😉.
        </p>
        <p style={{ marginTop: "10px", lineHeight: "30px" }}>
          I moved to the USA in the year 2016 to persue my Masters in Computer
          Science, my life style has changed a lot since then, I would like to
          share more about it in my future blogs, I have a lot of experiences to
          share with you on my education, career, pets, health, fitness,
          entrepreneur skills and ideas AND so on. I would really like to know
          your experiences too to share with other folks.
        </p>
        <h4
          style={{ marginTop: "30px", marginRight: "30px", marginLeft: "10px" }}
        >
          More info on my profession and career{" "}
          <Link to="/about">
            <u> here.</u>
          </Link>
        </h4>
        <Social />
      </div>
    );
  }
}

export default Home;
