import './TemperatureCard.scss';
import React from 'react';

const TemperatureCard = ({ weatherData }) => {
  let fHighTemp
  let fLowTemp
  let fCurrentTemp
  if (weatherData.weatherForecast) {
    fHighTemp = Math.round((weatherData.weatherForecast[0].max_temp * 1.8) + 32)
    fLowTemp = Math.round((weatherData.weatherForecast[0].min_temp * 1.8) + 32)
    fCurrentTemp = Math.round((weatherData.weatherForecast[0].the_temp * 1.8) + 32)
  }





  return (
    <>
      <p>{fCurrentTemp}°</p>
      <p>{fHighTemp}° |</p><span>{fLowTemp}°</span>
    </>
  )
}

export default TemperatureCard;