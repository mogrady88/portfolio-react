import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-home" activeStyle={{ fontWeight: 'bold' }} to="/">
        <span style={{ fontSize: '40px', marginTop: '25px' }}>
          <i class="fas fa-home" />
        </span>
      </NavLink>

      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'overline'
            }}
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'overline'
            }}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'overline'
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: 'bold',
              textDecoration: 'overline'
            }}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
