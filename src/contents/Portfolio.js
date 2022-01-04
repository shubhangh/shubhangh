import React, { Component } from "react";
import projOne from "../img/projOne.PNG";
import projTwo from "../img/projTwo.PNG";
import projThree from "../img/projThree.PNG";
import projFour from "../img/projFour.jpg";

class Portfolio extends Component {
  render() {
    const projs = [
      {
        id: 1,
        href: "https://www.shubhangh.com/uniquode/index.html",
        src: projOne,
        alt: "projOne",
      },
      {
        id: 2,
        href: "https://www.shubhangh.com/funGame/index.html",
        src: projTwo,
        alt: "projTwo",
      },
      {
        id: 3,
        href: "https://www.shubhangh.com/redux-contact-app/index.html",
        src: projThree,
        alt: "projThree",
      },
      {
        id: 4,
        href: "https://play.google.com/store/apps/details?id=com.score.calci",
        src: projFour,
        alt: "projFour",
      },
    ];
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div className="projs_section">
          {projs.map((proj) => {
            return (
              <div class="port_out port1">
                <div class="port_in" id={proj.id}>
                  <a href={proj.href} target="_blank">
                    <img src={proj.src} className="po1" alt={proj.alt}></img>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
