import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

import Particles from "react-particles-js";
import config from "../images/Particles.json";

function header() {
  return (
    <div>
      <Particles className="particles" params={config} />
      {/* <div className="temporary">Put some text here</div> */}
      <div className="box">
        {/* <img class="test" width="750px" height="150px" src={textToAdd} alt="" /> */}
        <div id="title">Samyak Mehta</div>
        
        <div id="subtitles">
          <Link
            className="links"
            id="subtitle"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            ABOUT ME
          </Link>
          <Link
            className="links"
            id="subtitle"
            activeClass="active"
            to="proj"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            className="links"
            id="subtitle"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            EXPERIENCE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default header;
