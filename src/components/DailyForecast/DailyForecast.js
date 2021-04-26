import './DailyForecast.scss';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import DailyForecastDetails from '../DailyForecastDetails/DailyForecastDetails';

const DailyForecast = ({ weatherData, pinLocation }) => {

  return (
    <>
      <WeatherSectionHeader
        weatherData={weatherData}
        pinLocation={pinLocation}
      />
      <DailyForecastDetails
        weatherData={weatherData} />
    </>
  )
}

export default DailyForecast;
