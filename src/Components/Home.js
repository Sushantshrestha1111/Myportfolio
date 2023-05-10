import React from 'react'
import video from "../asset/Background.mp4"
import Header from './Header'
import styled from 'styled-components'
import "./home.css"
import ReactPlayer from 'react-player';
import AboutMe from './Adoutme/AboutMe'
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';
function Home() {
  return (
    <div className="background-video">
      
      <ReactPlayer
      
        url={video}
        playing
        loop
        muted
        width="100%"
        height="100%"
        
        style={{ position: 'absolute', top: 0, left: 0,bottom:0, zIndex:-1}}
      />
      
      
      <Fade right><Header /></Fade>
      
      
      <Container>
      <Fade left>
      <First>
          <span className='hello'>Hello, </span>
          <span className='im'>I am</span>
          </First>
      
       
          <Second>
          <span className='name'>Sushant Shrestha</span>
          <div className='frontenddeveloper'>
          <p className='frontend'>Frontend-</p>
      <p className='developer'>Developer</p>

          </div>
    
      
          </Second>
          </Fade>
      
      
      

      </Container>
     
      
        
    </div>
  )
}

export default Home
const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 45%;
  left: 50%;
  justify-content: center;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    width: 90%;
    left: 50%;
    transform: translateX(-45%);
   
    text-align: left;
  }
`;
  const First=styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
  `
  const Second=styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: center;
  @media (max-width: 768px) {
    align-items: left;
  }
    `
    
  





