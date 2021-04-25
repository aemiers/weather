import './WeatherSectionHeader.scss';
import React from 'react';
import pin from '../../assets/pin.svg'
import pinBlank from '../../assets/pinBlank.svg'

const WeatherSectionHeader = ({ weatherData }) => {
  return (
    <section className='header-container'>
      <div className='header-container__first-line'>
        <h1>{weatherData.cityName} Daily Forecast</h1>
        <img src={pinBlank} alt='pin' className='header-container__pin' />
      </div>
      <div className='header-container__second-line'>
        <h2>Coordinates {weatherData.latLong}</h2>
      </div>
    </section >
  )
}

export default WeatherSectionHeader;
