import React from 'react'
import "./prj.css"
import Projects from './Projects'
function Proj() {
  return (
    <div className='wrapper'>
        <div className="prjcontainer">
            <span className="myprj">My projects</span>
        


        </div>
        <div className="prjcard">
        <Projects/>
        </div>
        
       
    </div>
  )
}

export default Proj