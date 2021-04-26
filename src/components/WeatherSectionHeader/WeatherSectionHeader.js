import './WeatherSectionHeader.scss';
import React from 'react';
import pin from '../../assets/pin.svg'
import pinBlank from '../../assets/pinBlank.svg'

const WeatherSectionHeader = ({ weatherData, pinLocation }) => {
  return (
    <section className='header-container'>
      <div className='header-container__first-line'>
        <h1>{weatherData.cityName} Forecast</h1>
        <button className='big-pin-button' onClick={() => pinLocation()}>
          <img src={pinBlank} alt='pin' className='header-container__pin' />
        </button>
      </div>
      <div className='header-container__second-line'>
        <h2>Coordinates {weatherData.latLong}</h2>
      </div>
    </section >
  )
}

export default WeatherSectionHeader;
