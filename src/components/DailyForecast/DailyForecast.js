import './DailyForecast.scss';
import React from 'react';
import WeatherSectionHeader from '../WeatherSectionHeader/WeatherSectionHeader';
import pin from '../../assets/pin.svg'
import pinBlank from '../../assets/pinBlank.svg'

const DailyForecast = ({ cityData, weatherData }) => {

  return (
    <WeatherSectionHeader
      cityData={cityData}
      weatherData={weatherData} />
  )
}

export default DailyForecast;
