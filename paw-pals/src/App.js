import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Team from './components/Team';
import PawPals from './components/PawPals';
import Project from './components/Project';
import RandomDog from './images/2Dogs.jpg';
import Footer from './components/Footer';
// markup

const App = () => {
  return (
    <main>
      <title>Paw Pals</title>

      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems:'center',
          justifyContent: 'center',
          flexDirection:'column'
        }}
      >
        <h1 style={{marginTop:"5%"}}>Paw Pals</h1>
    
      </div>
      <Router>
        <NavBar />

        <Route path='/pages/home' exact component={() => <PawPals />} />

        <Route path='/pages/projects' exact component={() => <Project />} />

        <Route path='/pages/team' exact component={() => <Team />} />

        <Route path='/pages/journal' exact component={() => <div>Test4</div>} />

        <Route path='/pages/deliverables' exact component={() => <div>Test5</div>} />
        
      </Router>
      <Footer />
    </main>
  );
};

export default App;
