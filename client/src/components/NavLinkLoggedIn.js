import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/navLink.css';

const NavLinkLoggedIn = () =>
  <div className="navLink">
    <NavLink style={{ marginRight: '10px' }} to="/game">Play</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/about">About</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/logout">Logout</NavLink>
    <NavLink style={{ marginRight: '10px' }} to="/user/games">Review Results</NavLink>
  </div>;

export default NavLinkLoggedIn;
