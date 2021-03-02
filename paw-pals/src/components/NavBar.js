import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <Link to='/pages/home'>
          <div className="buttonbox"><h2>Home</h2></div>
        </Link>
        <Link to='/pages/projects'>
          <div className="buttonbox"><h2 className="NavBarText" >Project</h2></div>
        </Link>
        <Link to='/pages/team'>
          <div className="buttonbox"><h2 className="NavBarText" >Team</h2></div>
        </Link>
        <Link to='/pages/journal'>
          <div className="buttonbox"><h2 className="NavBarText" >Journal</h2></div>
        </Link>
        <Link to='/pages/deliverables'>
          <div className="buttonbox"><h2 className="NavBarText" >Deliverables</h2></div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
