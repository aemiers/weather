import './WeatherDetailsList.scss';
import React from 'react';
import compass from '../../assets/compass.svg'
import moistureDrops from '../../assets/032-drop.svg'
import windSock from '../../assets/windsock.svg'
import windPressure from '../../assets/011-wind.svg'
import cloud from '../../assets/cloud.svg'
import PropTypes from 'prop-types';

const WeatherDetailsList = ({ weatherData }) => {
  let humidity, wind, windDirection, pressure, visibility;
  if (weatherData.weatherForecast) {
    humidity = weatherData.weatherForecast[0].humidity;
    wind = Math.round(weatherData.weatherForecast[0].wind_speed);
    windDirection = weatherData.weatherForecast[0].wind_direction_compass;
    pressure = weatherData.weatherForecast[0].air_pressure;
    visibility = Math.round(weatherData.weatherForecast[0].visibility);
  }

  return (
    <section className='details-card-container'>
      <div className='detail-container'>
        <img src={moistureDrops} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Humidity: {humidity}%</p>
      </div>
      <div className='detail-container'>
        <img src={windSock} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Wind Speed: {wind} MPH</p>
      </div>
      <div className='detail-container'>
        <img src={compass} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Wind Direction: {windDirection}</p>
      </div>
      <div className='detail-container'>
        <img src={windPressure} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Air Pressure: {pressure} MBAR</p>
      </div>
      <div className='detail-container'>
        <img src={cloud} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Visibility: {visibility} Miles</p>
      </div>
    </section>
  )
}

export default WeatherDetailsList;

WeatherDetailsList.propTypes = {
  weatherData: PropTypes.object,
}