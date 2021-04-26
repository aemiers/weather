import './WeeklyForecast.scss';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import WeeklyForecastDetails from '../WeeklyForecastDetails/WeeklyForecastDetails';

const WeeklyForecast = ({ weatherData, pinLocation, savedCities }) => {

  return (
    <>
      <WeatherSectionHeader
        weatherData={weatherData}
        pinLocation={pinLocation}
        savedCities={savedCities}
      />
      <WeeklyForecastDetails
        weatherData={weatherData} />
    </>
  )
}

export default WeeklyForecast;
