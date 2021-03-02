import * as React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Team from './components/Team';
import PawPals from './components/PawPals';
import Project from './components/Project';
import RandomDog from './images/2Dogs.jpg';
import Footer from './components/Footer';
import Deliverables from './components/Deliverables';
// markup

const App = () => {
  return (
    <main>
      <title>Paw Pals</title>

      <div
        className="imageBackground"
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems:'center',
          justifyContent: 'center',
          flexDirection:'column',
        
        }}
      >
        <h1 style={{marginTop:"5%",color:"#e6001c"}}>Paw Pals</h1>
    
      </div>
      <Router>
        <NavBar />

        <Route path='/pages/home' exact component={() => <PawPals />} />

        <Route path='/pages/projects' exact component={() => <Project />} />

        <Route path='/pages/team' exact component={() => <Team />} />

        <Route path='/pages/journal' exact component={() => <div>Update Coming Soon!</div>} />

        <Route path='/pages/deliverables' exact component={() => <Deliverables/>} />
        
      </Router>
      <Footer />
    </main>
  );
};

export default App;
