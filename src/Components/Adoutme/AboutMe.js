import React from "react";
import "./aboutme.css";
import { Fade } from "react-reveal";
function AboutMe() {
  return (
    <div className="Wrapper">
      <div className="contentsabout">
       <Fade left>
       <span className="title">About Me</span></Fade> 
     
      <p className="pp">
        Hello i am sushant shrestha and i ma react developer i had completed my
        internship form companyt venture four technology i am experenced in
        react js typescript with css html android development tailwind
      </p>
      <span className="personaldetal">Personal Detail</span>
      <Fade left>
      <div className="table">
      <table>
    <tr>
      <th>Populated</th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Data 2</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td></td>
      <td></td>
    </tr>
  </table>


      </div>
      </Fade>
      
      </div>
      
    </div>
  );
}

export default AboutMe;
