import './DailyForecast.scss';
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
