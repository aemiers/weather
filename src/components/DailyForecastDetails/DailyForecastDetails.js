import './DailyForecastDetails.scss';
import React from 'react';
import PictureCard from '../PictureCard/PictureCard';
import TemperatureCard from '../TemperatureCard/TemperatureCard';
import WeatherDetailsList from '../WeatherDetailsList/WeatherDetailsList';
import PropTypes from 'prop-types';


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

DailyForecastDetails.propTypes = {
  weatherData: PropTypes.object
}