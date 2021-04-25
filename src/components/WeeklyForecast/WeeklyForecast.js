import './WeeklyForecast.scss';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import WeeklyForecastDetails from '../WeeklyForecastDetails/WeeklyForecastDetails';

const WeeklyForecast = ({ weatherData }) => {

  return (
    <>
      <WeatherSectionHeader
        weatherData={weatherData} />
      <WeeklyForecastDetails
        weatherData={weatherData} />
    </>
  )
}

export default WeeklyForecast;
