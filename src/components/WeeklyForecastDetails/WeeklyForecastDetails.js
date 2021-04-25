import './WeeklyForecastDetails.scss';
import React from 'react';
import MiniWeatherCard from '../MiniWeatherCard/MiniWeatherCard';

const WeeklyForecastDetails = ({ weatherData }) => {

  return (
    <section className='card-container'>
      <MiniWeatherCard
        weatherData={weatherData} />
    </section>
  )
}

export default WeeklyForecastDetails;
