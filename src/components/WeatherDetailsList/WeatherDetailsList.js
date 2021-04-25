import './WeatherDetailsList.scss';
import React from 'react';
import compass from '../../assets/compass.svg'
import moistureDrops from '../../assets/032-drop.svg'
import windSock from '../../assets/windsock.svg'
import windPressure from '../../assets/011-wind.svg'
import cloud from '../../assets/cloud.svg'


const WeatherDetailsList = ({ weatherData }) => {
  let humidity, wind, windDirection, pressure, visibility;
  if (weatherData.weatherForecast) {
    humidity = weatherData.weatherForecast[0].humidity;
    pressure = weatherData.weatherForecast[0].air_pressure;
    visibility = Math.round(weatherData.weatherForecast[0].visibility);
  }
  return (
    <section className='details-card-container'>
      <div className='detail-container'>
        <img src={moistureDrops} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Humidity {humidity}%</p>
      </div>
      <div className='detail-container'>
        <img src={windSock} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Wind Speed {wind}MPH</p>
      </div>
      <div className='detail-container'>
        <img src={compass} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Wind Direction {windDirection}</p>
      </div>
      <div className='detail-container'>
        <img src={windPressure} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Air Pressure {pressure}</p>
      </div>
      <div className='detail-container'>
        <img src={cloud} alt='favorite' className='weather-details-icon' />
        <p className='weather-details'>Visibility {visibility}%</p>
      </div>


    </section>
  )
}

export default WeatherDetailsList;