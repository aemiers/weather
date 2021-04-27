import './DailyForecast.scss';
import PropTypes from 'prop-types';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import DailyForecastDetails from '../DailyForecastDetails/DailyForecastDetails';

const DailyForecast = ({ weatherData, pinLocation, savedCities }) => {

  return (
    <>
      <WeatherSectionHeader
        weatherData={weatherData}
        pinLocation={pinLocation}
        savedCities={savedCities}
      />
      <DailyForecastDetails
        weatherData={weatherData} />
    </>
  )
}

export default DailyForecast;

DailyForecast.propTypes = {
  weatherData: PropTypes.object,
  click: PropTypes.func,
  savedCities: PropTypes.array
}
