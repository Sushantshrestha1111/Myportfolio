import React from 'react'
import video from "../asset/Background.mp4"
import Header from './Header'
import styled from 'styled-components'
import "./home.css"
import ReactPlayer from 'react-player';
import AboutMe from './Adoutme/AboutMe'
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
      <Header />
      <Container>
        <First>
          <span className='hello'>Hello, </span>
          <span className='im'>I am</span>
          </First>
          <Second>
          <span className='name'>Sushant Shrestha</span>
      <span className='frontend'>Visual deginer</span>
      <span className='details'>detainsf asdd sfd fg agadfg afgadfg adfgadfg adfgad gadffg adfg adfg adfg afga dfg afg adf</span>
      <Letstalk><span>Let's Talk</span></Letstalk>
          </Second>
      
      
      

      </Container>
     
      
        
    </div>
  )
}

export default Home
const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: left;
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
    text-align: left;
  }
  `
  const Second=styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media (max-width: 768px) {
    align-items: left;
  }
    `
    const Letstalk=styled.div`
    margin-top: 45px;
    cursor:pointer;
    background-color:#1E5128;
    text-align: center;
    justfy-content: center;
    align-items: center;
    width: 100px;
    padding: 15px;
    border-radius:15px;
    text-decoration:bold;
    height:20px;
    &:hover{
      background-color:transparent;
      border-color:#1E5128;
      color:#1E5128;
    }
    
    `
  





