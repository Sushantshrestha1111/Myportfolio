import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutMe from './Components/Adoutme/AboutMe';
import Skills from './Components/Skils/Skills';
import Proj from './Components/projects/Proj';

function App() {
  return (
    <div className="aboutme">
      
     
        
        <Home/>
        <AboutMe/>
        <Proj/>
        <Skills/>
        
        
      
    </div>
  );
}

export default App;
