import React from "react";
import "./aboutme.css";
import { Fade } from "react-reveal";
import avatar from "../../asset/images.png"
function AboutMe() {
  return (
    <div className="Wrapper">
      <div className="contentsabout">
        <Fade left>
          <div className="container"><span className="tittle">About Me</span></div>
          
        </Fade>
        
        <span className="wasap">HEY Wassup</span>

        <div className="contimg">
        <p className="pp">
          I am Sushant Shrestha, a frontend developer specializing in React.
          With a passion for creating engaging and interactive user experiences,
          I strive to deliver high-quality, efficient, and visually appealing
          web applications.
        </p>
        <img className="myavatar"src={avatar}/>
        </div>

       
      </div>
    </div>
  );
}

export default AboutMe;
