import './DailyForecast.scss';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import DailyForecastDetails from '../DailyForecastDetails/DailyForecastDetails';

import pin from '../../assets/pin.svg'
import pinBlank from '../../assets/pinBlank.svg'

const DailyForecast = ({ weatherData }) => {

  return (
    <>
      <WeatherSectionHeader
        weatherData={weatherData} />
      <DailyForecastDetails
        weatherData={weatherData} />
    </>
  )
}

export default DailyForecast;
