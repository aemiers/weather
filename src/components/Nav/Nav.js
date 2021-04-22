import './Nav.scss';
import React from 'react';
// import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <h1 className='logo'>WeatherReader</h1>
      <section className='link-container'>
        <h2>TODAY'S FORECAST</h2>
        <h2>5-DAY FORECAST</h2>
      </section>
    </header>
  )
}

export default Nav