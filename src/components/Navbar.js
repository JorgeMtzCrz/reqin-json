import React from 'react';

import {Link} from 'react-router-dom'
import { useAuth } from '../AuthContext'


const Navbar = (props) => {
  const [, dispatch] = useAuth()

  

  const logout = async () => {
    localStorage.removeItem('token')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <>   
      <div className="topnav" id="myTopnav">
        <div className="logo-container">
          <h1>DONE</h1>
        </div>
        <div className="routes">
          <Link to="/app/home"><p>Home</p></Link>
          <Link to="/app/album"><p>Album</p></Link>
          <button onClick={logout}><p>Logout</p></button>
        </div>

      </div>
    </>
  );
}

export default Navbar;

