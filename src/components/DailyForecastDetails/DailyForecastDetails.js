import './DailyForecastDetails.scss';
import React from 'react';
import PictureCard from '../PictureCard/PictureCard';
import TemperatureCard from '../TemperatureCard/TemperatureCard';
import WeatherDetailsList from '../WeatherDetailsList/WeatherDetailsList';

const DailyForecastDetails = ({ weatherData }) => {

  return (
    <section className='card-container'>
      <PictureCard
        weatherData={weatherData} />
      <TemperatureCard
        weatherData={weatherData} />
      <WeatherDetailsList
        weatherData={weatherData} />
    </section>
  )
}

export default DailyForecastDetails;
