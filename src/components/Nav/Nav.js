import './Nav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='nav-bar'>
      <p className='logo'>WeatherReader</p>
      <section className='link-container'>
        <NavLink
          to='/'
          activeClassName='activated-nav'
          style={{ textDecoration: 'none' }}
        >
          <h3 className='header-text'>TODAY'S FORECAST</h3>
        </NavLink>
        <NavLink
          to='/5day'
          activeClassName='activated-nav'
          style={{ textDecoration: 'none' }}
        >
          <h3 className='header-text'>5-DAY FORECAST</h3>
        </NavLink>
      </section>
    </header>
  )
}

export default Nav