import './WeatherDetailsList.scss';
import React from 'react';

const WeatherDetailsList = ({ weatherData }) => {
  let humidity, wind, windDirection, pressure, visibility;
  if (weatherData.weatherForecast) {
    humidity = weatherData.weatherForecast[0].humidity;
    wind = Math.round(weatherData.weatherForecast[0].wind_speed);
    pressure = weatherData.weatherForecast[0].air_pressure;
    visibility = Math.round(weatherData.weatherForecast[0].visibility);
  }
  return (
    <section className='details-card-container'>
      <p className='weather-details'>{humidity}</p>
      <p className='weather-details'>{wind}</p>
      <p className='weather-details'>{windDirection}</p>
      <p className='weather-details'>{pressure}</p>
      <p className='weather-details'>{visibility}</p>

    </section>
  )
}

export default WeatherDetailsList;