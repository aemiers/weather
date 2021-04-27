import './WeeklyForecast.scss';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import WeeklyForecastDetails from '../WeeklyForecastDetails/WeeklyForecastDetails';
import PropTypes from 'prop-types';

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

WeeklyForecast.propTypes = {
  weatherData: PropTypes.object,
}