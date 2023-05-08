import React from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'

function Header() {
  return (
    
     

      
    <Nav>
      

      <NavMenu>
        
        <a>
          
          <span>Home</span>
        </a>
        <a>
          
          <span>About</span>
        </a>
        <a>
          
          <span>Skills</span>
        </a>
        <a>
          
          <span>Services</span>
        </a>
        <a>
          
          <span>Qualification</span>
        </a>
        <a>
          
          <span>Contact</span>
        </a>

      
      </NavMenu>
     

    </Nav>

  
  )
}

export default Header

const Nav=styled.div`
height:70px;
background-color:transparent; 


display:flex;
align-item:center;
padding:0 36px;
`
const ItemText=styled.div`
color:white;
display:flex;
cursor:pointer;
align-item:center;
`
const Logo=styled.img`
`
const NavMenu=styled.div`
display:flex;
flex:1;
position:absolute;
right:0;
top:25px;
right:52px;
@media (max-width: 768px) {
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  
}


align-items:center;
a{
  display:flex;
  align-items:center;
  padding:0 12px;
  cursor:pointer;
  
  img{
    height:20px;
  }
  span{
    font-family: 'Montserrat', sans-serif;
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;
    color:white;
    &:after{
      content:'';
      height:2px;
      background:white;
      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      opacity:0;
      transform-origin:left center;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
      transform:scaleX(0);
       
    }
    }
    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
        
      }
    }
}
`
const UserImg=styled.img`
border-radius:50%;
width:48px;
height:48px;
cursor:pointer;
`