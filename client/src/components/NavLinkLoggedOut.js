import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/navLink.css';

const NavLinkLoggedOut = () =>
  <div className="navLink">
    <NavLink style={{ marginRight: '10px' }} to="/game">Play</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/about">About</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/login">Login</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/signup">Sign Up</NavLink>
  </div>;

export default NavLinkLoggedOut;
